var i, s = n(442837),
  a = n(570140);

function r(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let l = 12 * n(70956).Z.Millis.HOUR,
  o = {
profileThemesRelevanceExceeded: null,
savedAt: null
  },
  c = {
hasFetchedRelevance: !1
  },
  d = o,
  u = c;
class _ extends(i = s.ZP.PersistedStore) {
  initialize(e) {
u = c, d = o;
let t = new Date();
null != e && null != e.savedAt && t.getTime() - e.savedAt < l && (d = e);
  }
  get hasFetchedRelevance() {
return u.hasFetchedRelevance;
  }
  get profileThemesRelevanceExceeded() {
return d.profileThemesRelevanceExceeded;
  }
  getState() {
return d;
  }
}
r(_, 'displayName', 'PerksRelevanceStore'), r(_, 'persistKey', 'PerksRelevanceStore'), t.Z = new _(a.Z, {
  BILLING_PERKS_RELEVANCE_FETCH_START: function() {
u.hasFetchedRelevance = !0;
  },
  BILLING_PERKS_RELEVANCE_FETCH_SUCCESS: function(e) {
let {
  res: t
} = e;
null != t && (d.profileThemesRelevanceExceeded = t.eligible, d.savedAt = new Date().getTime());
  },
  BILLING_PERKS_RELEVANCE_FETCH_FAIL: function() {},
  LOGOUT: function() {
u = c, d = o;
  }
});