"use strict";
n.r(t), n.d(t, {
  default: function() {
    return A
  }
}), n("222007"), n("70102");
var a = n("446825"),
  s = n("44170"),
  l = n("917351"),
  i = n.n(l),
  r = n("605250"),
  o = n("50885"),
  u = n("856116"),
  d = n("470313"),
  c = n("56245"),
  f = n("49111");
let E = o.default.requireModule("discord_rpc").RPCIPC,
  h = new r.default("RPCServer:IPC"),
  _ = {
    HANDSHAKE: 0,
    FRAME: 1,
    CLOSE: 2,
    PING: 3,
    PONG: 4
  };

function C(e, t) {
  null != e.setHandshakeComplete ? e.setHandshakeComplete(t) : e._didHandshake = t
}

function S(e) {
  return null != e.getHandshakeComplete ? e.getHandshakeComplete() : e._didHandshake
}

function I(e) {
  return new Promise((t, n) => {
    "string" == typeof e && (e = E.net.createConnection(e)), e.pause(), e.on("readable", () => {
      try {
        p(e)
      } catch (t) {
        e.end(m(_.CLOSE, {
          code: 1003,
          message: t.message
        })), e.destroy()
      }
    });
    let a = () => {
        try {
          e.end(), e.destroy()
        } catch (e) {}
      },
      s = Promise.race([new Promise(t => e.on("error", () => t())), new Promise((t, n) => {
        e.on("pong", () => n(Error("socket responded with pong")))
      }), new Promise((e, t) => {
        setTimeout(() => t(Error("socket alive timeout")), 1e3)
      })]).then(() => {
        a()
      }, e => {
        throw a(), e
      });
    return e.write(m(_.PING, i.uniqueId())), s.then(t, n)
  })
}

function m(e, t) {
  var n;
  t = JSON.stringify(t);
  let s = a.Buffer.byteLength(t),
    l = a.Buffer.alloc(8 + s);
  return l.writeInt32LE(e, 0), l.writeInt32LE(s, 4), l.write(t, 8, s), (n = l).buffer.slice(n.byteOffset, n.byteOffset + n.byteLength)
}

function p(e) {
  let t = e.read(8);
  if (null == t) return;
  let n = a.Buffer.from(t),
    s = n.readInt32LE(0),
    l = n.readInt32LE(4);
  if (!Object.values(_).includes(s) || l < 0) throw Error("protocol error");
  if (null == (t = e.read(l))) throw Error("data size does not match what was received");
  n = a.Buffer.from(t);
  let i = JSON.parse(n.toString());
  switch (s) {
    case _.PING:
      e.emit("ping", i), e.write(m(_.PONG, i));
      break;
    case _.PONG:
      e.emit("pong", i);
      break;
    case _.HANDSHAKE:
      if (S(e)) throw Error("already did handshake");
      C(e, !0), e.emit("handshake", i);
      break;
    case _.FRAME:
      if (!S(e)) throw Error("did not handshake");
      e.emit("request", i);
      break;
    case _.CLOSE:
      e.end(), e.destroy()
  }
  p(e)
}
class T extends d.default {
  send(e) {
    h.info("Socket Emit: ".concat(this.id), (0, u.default)(e)), this.socket.write(m(_.FRAME, e))
  }
  close(e, t) {
    this.socket.end(m(_.CLOSE, {
      code: e,
      message: t
    })), this.socket.destroy()
  }
  constructor(e, t, n) {
    super("ipc", t, n), this.socket = e
  }
}
class g extends s.EventEmitter {
  handleConnection(e) {
    C(e, !1), e.pause(), e.on("readable", () => {
      try {
        p(e)
      } catch (t) {
        e.end(m(_.CLOSE, {
          code: f.RPCCloseCodes.CLOSE_UNSUPPORTED,
          message: t.message
        })), e.destroy()
      }
    }), e.once("handshake", t => {
      let n;
      let a = t.client_id,
        s = +t.v;
      try {
        n = new T(e, s, "json")
      } catch (t) {
        e.end(m(_.CLOSE, {
          code: t.code,
          message: t.message
        })), e.destroy();
        return
      }
      h.info("Socket Opened: ".concat(n.id)), e.on("error", e => h.error("Socket Error: ".concat(e.message))), e.on("close", () => {
        h.info("Socket Close: ".concat(n.id)), this.emit("disconnect", n)
      }), (0, c.validateSocketClient)(n, null, a).then(() => {
        e.on("request", e => {
          h.info("Socket Message: ".concat(n.id), (0, u.default)(e)), this.emit("request", n, e)
        }), this.emit("connect", n)
      }).catch(e => {
        let {
          code: t,
          message: a
        } = e;
        return n.close(t, a)
      })
    })
  }
  constructor() {
    super();
    let e = E.net.createServer(e => this.handleConnection(e));
    e.on("error", e => h.error("Error: ".concat(e.message))), E.getAvailableSocket(I).then(t => {
      e.listen(t, () => {
        let t = "function" == typeof e.listening ? e.listening() : e.listening;
        t && h.info("Starting on ".concat(e.address()))
      })
    })
  }
}
var A = new g