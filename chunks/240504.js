"use strict";
n.r(t);
var a, s = n("442837"),
  l = n("570140");

function i(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let r = 12 * n("70956").default.Millis.HOUR,
  o = {
    profileThemesRelevanceExceeded: null,
    savedAt: null
  },
  u = {
    hasFetchedRelevance: !1
  },
  d = o,
  c = u;
class f extends(a = s.default.PersistedStore) {
  initialize(e) {
    c = u, d = o;
    let t = new Date;
    null != e && null != e.savedAt && t.getTime() - e.savedAt < r && (d = e)
  }
  get hasFetchedRelevance() {
    return c.hasFetchedRelevance
  }
  get profileThemesRelevanceExceeded() {
    return d.profileThemesRelevanceExceeded
  }
  getState() {
    return d
  }
}
i(f, "displayName", "PerksRelevanceStore"), i(f, "persistKey", "PerksRelevanceStore"), t.default = new f(l.default, {
  BILLING_PERKS_RELEVANCE_FETCH_START: function() {
    c.hasFetchedRelevance = !0
  },
  BILLING_PERKS_RELEVANCE_FETCH_SUCCESS: function(e) {
    let {
      res: t
    } = e;
    null != t && (d.profileThemesRelevanceExceeded = t.eligible, d.savedAt = new Date().getTime())
  },
  BILLING_PERKS_RELEVANCE_FETCH_FAIL: function() {},
  LOGOUT: function() {
    c = u, d = o
  }
})