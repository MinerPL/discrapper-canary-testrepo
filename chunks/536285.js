"use strict";
n.r(t), n(411104);
var i = n(836560),
  r = n(525654),
  s = n.n(r),
  o = n(664751),
  a = n(772848),
  l = n(544891),
  u = n(996106),
  _ = n(981631);
let d = _.V6Z + _.frH - 1;

function c(e, t) {
  if (null == e || null == t) throw Error("cmd and name required");
  return "".concat(e, ":").concat(t)
}
let E = o.parse(location.search.slice(1)),
  I = parseInt(null != E.rpc && "" !== E.rpc ? E.rpc : _.V6Z, 10),
  T = null;
class h extends i.EventEmitter {
  get port() {
    return I
  }
  get connected() {
    return null != T && T.readyState === WebSocket.OPEN
  }
  connect() {
    if (null == T) {
      if (I > d) {
        I = _.V6Z, this.emit("disconnected");
        return
      }
      try {
        T = new WebSocket("ws://127.0.0.1:".concat(this.port, "/?v=").concat(_.X6Q))
      } catch (e) {
        this.disconnect({
          code: _.$VG.CLOSE_ABNORMAL
        });
        return
      }
      null != T && (T.onmessage = e => {
        let t;
        try {
          if ("string" == typeof e.data) t = JSON.parse(e.data);
          else throw Error("payload data not a string")
        } catch (e) {
          this.emit("error", e), this.disconnect();
          return
        }
        let {
          cmd: n,
          evt: i,
          nonce: r,
          data: s
        } = t;
        if (n === _.Etm.DISPATCH) {
          if (i === _.zMe.READY) {
            this.emit("connected");
            return
          }
          if (i === _.zMe.ERROR) {
            this.emit("error", new u.Z({
              errorCode: s.code
            }, s.message)), this.disconnect();
            return
          }
          this.emit(c(n, i), s);
          return
        }
        let o = null;
        i === _.zMe.ERROR && (o = new u.Z({
          errorCode: s.code
        }, s.message), s = null), this.emit(c(n, r), o, s)
      }, T.onclose = T.onerror = e => this.disconnect(e))
    }
  }
  disconnect(e) {
    if (null != e && "code" in e && [_.$VG.CLOSE_ABNORMAL, _.$VG.INVALID_CLIENTID].includes(e.code)) {
      I++, T = null, this.connect();
      return
    }
    null != T && (this.emit("disconnected"), T.close(), T = null)
  }
  subscribe(e, t, n) {
    return this.on(c(_.Etm.DISPATCH, e), n), this.request(_.Etm.SUBSCRIBE, t, e)
  }
  unsubscribe(e, t, n) {
    return this.removeListener(c(_.Etm.DISPATCH, e), n), this.request(_.Etm.UNSUBSCRIBE, t, e)
  }
  request(e, t, n) {
    return new Promise((i, r) => {
      if (!this.connected) {
        this.once("connected", () => {
          this.removeAllListeners("disconnected"), i(this.request(e, t, n))
        }), this.once("disconnected", () => {
          this.removeAllListeners("connected"), r(Error("disconnected during request"))
        }), this.connect();
        return
      }
      let s = (0, a.Z)(),
        o = JSON.stringify({
          cmd: e,
          args: t,
          evt: n,
          nonce: s
        });
      this.once(c(e, s), (e, t) => null != e ? r(e) : i(t)), null == T || T.send(o)
    })
  }
  requestOnce(e, t, n) {
    return l.tn.post({
      url: "http://127.0.0.1:".concat(this.port, "/rpc?v=").concat(_.X6Q),
      body: {
        cmd: e,
        args: t,
        evt: n,
        nonce: (0, a.Z)()
      }
    }).then(e => {
      let {
        body: {
          evt: t,
          data: n
        }
      } = e;
      if (t === _.zMe.ERROR) throw new u.Z({
        errorCode: n.code
      }, n.message);
      return n
    })
  }
  requestRedirect(e, t, n) {
    if ("Chrome" === s().name && parseInt(s().version, 10) >= 58) return this.requestOnce(e, t, n);
    let i = encodeURIComponent(JSON.stringify({
        cmd: e,
        args: t,
        evt: n,
        nonce: (0, a.Z)()
      })),
      r = encodeURIComponent("".concat(location.protocol, "//").concat(location.host).concat(location.pathname, "?done=true"));
    return window.open("http://127.0.0.1:".concat(this.port, "/rpc?v=").concat(_.X6Q, "&payload=").concat(i, "&callback=").concat(r), "_self"), new Promise(() => null)
  }
}
t.default = new h