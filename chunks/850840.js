"use strict";
let i;
n.r(e), n("653041");
var s, r = n("442837"),
  a = n("570140");

function u(t, e, n) {
  return e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t
}
let o = {
  hasAcceptedStoreTerms: !1,
  hasAcceptedEulaIds: []
};
class l extends(s = r.default.PersistedStore) {
  initialize(t) {
    i = null != t ? t : o
  }
  getState() {
    return i
  }
  get hasAcceptedStoreTerms() {
    return i.hasAcceptedStoreTerms
  }
  hasAcceptedEULA(t) {
    return i.hasAcceptedEulaIds.includes(t)
  }
}
u(l, "displayName", "ApplicationStoreUserSettingsStore"), u(l, "persistKey", "ApplicationStoreUserSettingsStore"), u(l, "migrations", [t => null == t.hasAcceptedEulaIds ? {
  ...t,
  hasAcceptedEulaIds: []
} : t]), e.default = new l(a.default, {
  APPLICATION_STORE_ACCEPT_STORE_TERMS: function() {
    i.hasAcceptedStoreTerms = !0
  },
  APPLICATION_STORE_ACCEPT_EULA: function(t) {
    let {
      eulaId: e
    } = t;
    if (i.hasAcceptedEulaIds.includes(e)) return !1;
    i.hasAcceptedEulaIds.push(e)
  }
})