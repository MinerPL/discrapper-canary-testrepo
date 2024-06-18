"use strict";
var i = n(392711),
  r = n.n(i),
  s = n(250407),
  o = n(710845),
  a = n(914010),
  l = n(70956),
  u = n(287328);
let _ = new o.Z("NonGuildVersions");
t.Z = new class e {
  async getCommittedVersions() {
    try {
      let e = u.Z.nonGuildVersions();
      if (null == e) return {};
      let t = (await e.getMany()).map(e => [e.id, "version" in e ? e.version : e.versionString]);
      return Object.fromEntries(null != t ? t : [])
    } catch (e) {
      return _.warn("couldn't load guild versions", e), {}
    }
  }
  handleConnectionOpen(e, t) {
    null != e.apiCodeVersion && u.Z.nonGuildVersionsTransaction(t).put({
      id: "api_code_version",
      version: e.apiCodeVersion
    })
  }
  resetInMemoryState() {}
  constructor() {
    var e, t, n;
    if (e = this, t = "actions", n = {
        CONNECTION_OPEN: (e, t) => this.handleConnectionOpen(e, t),
        BACKGROUND_SYNC: (e, t) => this.handleConnectionOpen(e, t)
      }, t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n, !(0, s.O)()) return;
    a.Z.addChangeListener(r().throttle(() => {
      var e;
      null === (e = u.Z.database()) || void 0 === e || e.transaction(e => {
        let t = a.Z.getGuildId();
        null == t || isNaN(Number(t)) ? u.Z.nonGuildVersionsTransaction(e).delete("initial_guild_id") : u.Z.nonGuildVersionsTransaction(e).put({
          id: "initial_guild_id",
          versionString: t
        })
      })
    }, 10 * l.Z.Millis.SECOND))
  }
}