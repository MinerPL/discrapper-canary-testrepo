"use strict";
let a, s;
n.r(t), n.d(t, {
  default: function() {
    return y
  }
}), n("222007"), n("313619"), n("654714"), n("287168"), n("956660"), n("424973"), n("70102");
var l = n("44170"),
  i = n("917351"),
  r = n.n(i),
  o = n("746379"),
  u = n.n(o),
  d = n("913144"),
  c = n("605250"),
  f = n("313915"),
  E = n("50885"),
  h = n("861309"),
  _ = n("856116"),
  C = n("470313"),
  S = n("56245"),
  I = n("492249"),
  m = n("49111"),
  p = n("446825").Buffer;
try {
  a = E.default.requireModule("discord_erlpack")
} catch (e) {
  try {
    a = E.default.requireModule("erlpack")
  } catch (e) {}
}
let T = E.default.requireModule("discord_rpc").RPCWebSocket,
  g = window.GLOBAL_ENV.MARKETING_ENDPOINT,
  A = new c.default("RPCServer:WSS"),
  N = [];

function R(e) {
  return "function" == typeof e ? e() : e
}

function O() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
    t = e > 0 ? void 0 : () => {
      if (!R(s.listening)) return;
      let e = s.address().port;
      A.info("Starting on ".concat(e)), d.default.dispatch({
        type: "RPC_SERVER_READY",
        port: e
      })
    };
  s.listen(m.RPC_STARTING_PORT + e % m.RPC_PORT_RANGE, "127.0.0.1", t)
}

function v(e, t, n) {
  let a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 200,
    s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
    l = null != R(e.headers).origin ? {
      "Access-Control-Allow-Origin": R(e.headers).origin,
      "Access-Control-Allow-Credentials": "true",
      "Access-Control-Allow-Methods": "POST, GET, PUT, PATCH, DELETE",
      "Access-Control-Allow-Headers": "Content-Type, Authorization"
    } : {};
  n = n ? JSON.stringify(n) : "", a = 200 === a && 0 === n.length ? 204 : a, t.setHeader("Content-Length", p.byteLength(n).toString()), t.setHeader("Content-Type", "application/json"), t.writeHead(a, {
    ...s,
    ...l
  }), t.end(n)
}

function L(e, t, n, a) {
  let s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
  v(e, t, {
    code: s,
    message: a
  }, n)
}
class WebSocket extends C.default {
  send(e) {
    (f.default.isLoggingOverlayEvents || e.cmd !== m.RPCCommands.OVERLAY && e.evt !== m.RPCEvents.OVERLAY) && A.info("Socket Emit: ".concat(this.id), (0, _.default)(e)), null != a && "etf" === this.encoding ? this._socket.send(a.pack(e), {
      binary: !0
    }) : this._socket.send(JSON.stringify(e))
  }
  close(e, t) {
    this._socket.close(e, t)
  }
  constructor(e, t, n) {
    if (super("ws", t, n), -1 === ["etf", "json"].indexOf(n)) throw new h.default({
      closeCode: m.RPCCloseCodes.INVALID_ENCODING
    }, "Invalid Encoding: ".concat(n));
    if ("etf" === n && null == a) throw new h.default({
      closeCode: m.RPCCloseCodes.INVALID_ENCODING
    }, "Erlpack cannot be used on this client");
    this._socket = e
  }
}
class M extends C.default {
  send(e) {
    (f.default.isLoggingOverlayEvents || e.cmd !== m.RPCCommands.OVERLAY) && A.info("Socket Emit: ".concat(this.id), e), this._sendCallback(e)
  }
  close(e, t) {
    this._closeCallback(t, e)
  }
  constructor(e, t, n, a) {
    if (super("http", n, a), "json" !== a) throw new h.default({
      closeCode: m.RPCCloseCodes.INVALID_ENCODING
    }, "Invalid Encoding: ".concat(a));
    this._sendCallback = e, this._closeCallback = t
  }
}
class P extends l.EventEmitter {
  handleRequest(e, t) {
    let [n, a] = R(e.url).split("?"), s = R(e.method);
    if ("/rpc" === n && "OPTIONS" === s) {
      v(e, t, {
        body: ""
      });
      return
    }
    let l = "POST" === s;
    if ("/rpc" === n && ("GET" === s || l)) {
      let n = new URLSearchParams(a),
        s = l ? R(e.headers)["content-type"].split("/")[1] : "json",
        r = function() {
          var e;
          let {
            protocol: a,
            host: s
          } = u.parse(null !== (e = n.get("callback")) && void 0 !== e ? e : "");
          a === location.protocol && s === location.host ? t.setHeader("Location", n.get("callback")) : t.setHeader("Location", g), t.writeHead(301), t.end()
        },
        o = new M(l ? v.bind(null, e, t) : r, l ? L.bind(null, e, t, 400) : r, Number(n.get("v")), s);
      if (l)(0, S.validateSocketClient)(o, R(e.headers).origin, n.get("client_id")).then(() => {
        let n = "";
        e.on("data", e => n += e), e.on("error", () => L(e, t, 500, "Internal Server Error")), e.on("end", () => this.handleMessage(o, n))
      }).catch(e => {
        let {
          code: t,
          message: n
        } = e;
        return o.close(t, n)
      });
      else {
        var i;
        o.authorization.scopes = [I.RPC_PRIVATE_LIMITED_SCOPE], this.handleMessage(o, decodeURIComponent(null !== (i = n.get("payload")) && void 0 !== i ? i : ""))
      }
      return
    }
    L(e, t, 404, "Not Found")
  }
  handleConnection(e) {
    var t, n;
    let a;
    let s = new URLSearchParams(R(e.upgradeReq).url.split("?")[1]),
      l = null !== (t = R(e.upgradeReq).headers.origin) && void 0 !== t ? t : "";
    try {
      a = new WebSocket(e, Number(s.get("v")), null !== (n = s.get("encoding")) && void 0 !== n ? n : "json")
    } catch (t) {
      e.close(t.code, t.message);
      return
    }
    A.info("Socket Opened: ".concat(a.id)), e.on("error", e => A.error("WS Error: ".concat(e.message))), e.on("close", (e, t) => {
      A.info("Socket Closed: ".concat(a.id, ", code ").concat(e, ", message ").concat(t)), r.remove(N, e => e === a), this.emit("disconnect", a)
    }), (0, S.validateSocketClient)(a, l, s.get("client_id")).then(() => {
      N.push(a), e.on("message", e => this.handleMessage(a, e)), this.emit("connect", a)
    }).catch(e => {
      let {
        code: t,
        message: n
      } = e;
      return a.close(t, n)
    })
  }
  handleMessage(e, t) {
    let n;
    try {
      if (null != a && "etf" === e.encoding) n = a.unpack(t);
      else if ("string" == typeof t) n = JSON.parse(t);
      else throw Error()
    } catch (t) {
      e.close(m.RPCCloseCodes.CLOSE_UNSUPPORTED, "Payload not ".concat(e.encoding));
      return
    }(f.default.isLoggingOverlayEvents || n.cmd !== m.RPCCommands.OVERLAY) && A.info("Socket Message: ".concat(e.id), (0, _.default)(n)), this.emit("request", e, n)
  }
  constructor() {
    var e;
    super();
    let t = 0;
    (s = T.http.createServer()).on("error", e => {
      A.error("Error: ".concat(e.message)), ("EADDRINUSE" === e.code || e.message.includes("EADDRINUSE")) && setTimeout(() => O(++t), 1e3)
    }), s.on("request", this.handleRequest.bind(this)), O(t);
    let n = {
      instanceId: null !== (e = s.instanceId) && void 0 !== e ? e : 0,
      server: s
    };
    new T.ws.Server(n).on("connection", e => this.handleConnection(e))
  }
}
var y = new P