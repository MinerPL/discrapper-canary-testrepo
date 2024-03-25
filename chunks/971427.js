"use strict";
let l;
n.r(e), n.d(e, {
  default: function() {
    return r
  }
}), n("424973");
var a = n("446674"),
  i = n("913144");
let o = {
  hasAcceptedStoreTerms: !1,
  hasAcceptedEulaIds: []
};
class s extends a.default.PersistedStore {
  initialize(t) {
    l = null != t ? t : o
  }
  getState() {
    return l
  }
  get hasAcceptedStoreTerms() {
    return l.hasAcceptedStoreTerms
  }
  hasAcceptedEULA(t) {
    return l.hasAcceptedEulaIds.includes(t)
  }
}
s.displayName = "ApplicationStoreUserSettingsStore", s.persistKey = "ApplicationStoreUserSettingsStore", s.migrations = [t => null == t.hasAcceptedEulaIds ? {
  ...t,
  hasAcceptedEulaIds: []
} : t];
var r = new s(i.default, {
  APPLICATION_STORE_ACCEPT_STORE_TERMS: function() {
    l.hasAcceptedStoreTerms = !0
  },
  APPLICATION_STORE_ACCEPT_EULA: function(t) {
    let {
      eulaId: e
    } = t;
    if (l.hasAcceptedEulaIds.includes(e)) return !1;
    l.hasAcceptedEulaIds.push(e)
  }
})