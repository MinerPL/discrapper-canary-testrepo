"use strict";
let a, i, r;
s.r(t), s("47120");
var n, l, o, u, d = s("442837"),
  c = s("570140");

function _() {
  i = {}, a = {}, r = new Set
}
_();
class E extends(n = d.default.Store) {
  getStatisticsForApplication(e) {
    return a[e]
  }
  shouldFetchStatisticsForApplication(e) {
    let t = i[e];
    return !r.has(e) && (null == t || Date.now() - t > 36e5)
  }
}
u = "ApplicationStatisticsStore", (o = "displayName") in(l = E) ? Object.defineProperty(l, o, {
  value: u,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : l[o] = u, t.default = new E(c.default, {
  APPLICATION_ACTIVITY_STATISTICS_FETCH_START: function(e) {
    let {
      applicationId: t
    } = e;
    r.add(t)
  },
  APPLICATION_ACTIVITY_STATISTICS_FETCH_FAIL: function(e) {
    let {
      applicationId: t
    } = e;
    r.delete(t)
  },
  APPLICATION_ACTIVITY_STATISTICS_FETCH_SUCCESS: function(e) {
    let {
      statistics: t,
      applicationId: s
    } = e;
    i[s] = Date.now(), r.delete(s), a[s] = t
  },
  LOGOUT: _
})