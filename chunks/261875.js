"use strict";
n(47120);
var i = n(442837),
  r = n(348326),
  s = n(570140),
  o = n(710845),
  a = n(314897),
  l = n(115522);

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let _ = new o.Z("DatabaseManager");
class d extends i.yh {
  initialize() {
    this.waitFor(a.default), this.carefullySpeculativelyOpen(l.n()), this.handleAuthenticationStoreChanged(), a.default.addChangeListener(() => this.handleAuthenticationStoreChanged())
  }
  databaseName(e) {
    return c(e)
  }
  database(e) {
    if (null != e) {
      var t;
      return null !== (t = this.databases.get(e)) && void 0 !== t ? t : null
    }
    return null
  }
  carefullyOpenDatabase(e) {
    if (this.preventWritingCachesAgainThisSession) return _.verbose("Not opening database because caches have been manually cleared."), null;
    if (null != e && !this.databases.has(e)) {
      let t = function(e) {
        return null
      }(e);
      _.verbose("added database (".concat(e, " → ").concat(t, ")")), this.databases.set(e, t), this.emitChange()
    }
    return this.database(e)
  }
  replaceDisableAllDatabases(e) {
    for (let t of (_.info("disabling and nulling all databases (reason: ".concat(e, ")")), this.databases.keys())) {
      let n = this.databases.get(t);
      null == n || n.disable(e), null == n || n.close(), this.databases.set(t, null)
    }
    this.emitChange()
  }
  remove(e) {
    let t = this.databases.get(e);
    _.log("removing database (user: ".concat(e, ", database: ").concat(t, ")")), null == t || t.close(), this.databases.delete(e), this.emitChange()
  }
  handleClearCaches(e) {
    e.preventWritingCachesAgainThisSession && (this.preventWritingCachesAgainThisSession = !0), this.replaceDisableAllDatabases("DatabaseManager (".concat(e.reason, ")"))
  }
  handleConnectionOpen() {
    let e = a.default.getId(),
      t = this.databases.get(e),
      n = null == t ? void 0 : t.state();
    null == t && n !== r.hi.Open && this.remove(e), this.carefullyOpenDatabase(e)
  }
  handleAuthenticationStoreChanged() {
    let e = a.default.getId(),
      t = this.activeUserId;
    if (e !== t) {
      let n = this.databases.get(t);
      _.verbose("active user changed (now: ".concat(e, ", was: ").concat(t, ", was: ").concat(n, ")")), null == n || n.close(), l.I(e), this.activeUserId = e, this.databases.delete(t)
    }
  }
  async carefullySpeculativelyOpen(e) {
    if (this.preventWritingCachesAgainThisSession) {
      _.verbose("Not opening database because caches have been manually cleared.");
      return
    }
    if (null != e) {
      let t = await E(e);
      null == t || this.databases.has(e) ? (_.verbose("discarding speculative database (".concat(e, " → ").concat(t, ")")), null == t || t.close()) : (_.verbose("added speculative database (".concat(e, " → ").concat(t, ")")), this.databases.set(e, t), this.emitChange())
    }
  }
  constructor() {
    super(s.Z, {
      CLEAR_CACHES: e => this.handleClearCaches(e),
      CONNECTION_CLOSED: () => this.handleAuthenticationStoreChanged(),
      CONNECTION_OPEN: () => this.handleConnectionOpen(),
      LOGOUT: () => this.handleAuthenticationStoreChanged()
    }, s.c.Early), u(this, "databases", new Map), u(this, "activeUserId", null), u(this, "preventWritingCachesAgainThisSession", !1)
  }
}

function c(e) {
  return "@account.".concat(e)
}
async function E(e) {
  var t;
  return null
}
t.Z = new d