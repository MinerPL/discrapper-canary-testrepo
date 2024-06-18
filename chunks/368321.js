"use strict";
var i = n(445346),
  r = n(570140),
  s = n(710845),
  o = n(70956),
  a = n(287328);
let l = new s.Z("FileSystemStore"),
  u = 10 * o.Z.Millis.MINUTE;
class _ extends i.y {
  handlePostConnectionOpen() {
    return this.refresh(), !1
  }
  handleAppStateUpdate(e) {
    return "active" !== e.state && this.refresh(), !1
  }
  async refresh() {
    var e, t;
    let n = await (null === (t = a.Z.database()) || void 0 === t ? void 0 : null === (e = t.fsInfo()) || void 0 === e ? void 0 : e.catch(e => l.warn("couldn't get fs info", e)));
    if (null != n) {
      let e = n.fs.available < 268435456 || n.fs.available < 3 * n.database.used || n.fs.available < 2 * n.database.total,
        t = n.fs.available > 805306368 && n.fs.available > 4 * n.database.used && n.fs.available > 4 * n.database.total,
        i = !!e || !t && null;
      null != i && this.isLowDisk !== i && (this.isLowDisk = i, this.emitChange())
    }
  }
  constructor() {
    var e, t, n;
    super(r.Z, {
      APP_STATE_UPDATE: e => this.handleAppStateUpdate(e),
      POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen()
    }), e = this, n = !1, (t = "isLowDisk") in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, this.refresh(), this.waitFor(a.Z), setInterval(() => this.refresh(), u)
  }
}
t.Z = new _