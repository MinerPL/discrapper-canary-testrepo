"use strict";
var i = n(710845),
  r = n(287328),
  s = n(870078);

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let a = new i.Z("KvCacheVersion");
t.Z = new class e {
  async okAsync(e) {
    let t = await r.Z.cache(e).get(s.aQ);
    return null == t ? null : t === s.Wj
  }
  canUseGuildVersions() {
    return this.hasSuccessfullyConnected ? Promise.resolve(!0) : this.doesDatabaseVersionMatchJsConstants()
  }
  async doesDatabaseVersionMatchJsConstants() {
    let e = r.Z.forceResyncVersion();
    if (null == e) return !1;
    let t = await e.get(s.LH),
      n = null == t ? void 0 : t.version;
    return n === s.pL || (a.info("KVStore version mismatch: ".concat(n, " vs ").concat(s.pL)), !1)
  }
  handleClear() {
    this.hasSuccessfullyConnected = !1
  }
  handleConnectionOpen() {
    this.hasSuccessfullyConnected = !0
  }
  handleWrite(e) {
    this.hasSuccessfullyConnected = !0, r.Z.cacheTransaction(e).put(s.DQ, "\uD83D\uDC4B"), r.Z.cacheTransaction(e).put(s.aQ, s.Wj), r.Z.forceResyncVersionTransaction(e).put(s.LH, {
      version: s.pL
    })
  }
  resetInMemoryState() {
    this.hasSuccessfullyConnected = !1
  }
  constructor() {
    o(this, "hasSuccessfullyConnected", !1), o(this, "actions", {
      BACKGROUND_SYNC: (e, t) => this.handleWrite(t),
      CONNECTION_OPEN: () => this.handleConnectionOpen(),
      WRITE_CACHES: (e, t) => this.handleWrite(t)
    })
  }
}