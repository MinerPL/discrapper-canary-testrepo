"use strict";
let a, n, l;
s.r(t), s.d(t, {
  default: function() {
    return d
  }
}), s("222007");
var r = s("446674"),
  i = s("913144");

function u() {
  n = {}, a = {}, l = new Set
}
u();
class o extends r.default.Store {
  getStatisticsForApplication(e) {
    return a[e]
  }
  shouldFetchStatisticsForApplication(e) {
    let t = n[e];
    return !l.has(e) && (null == t || Date.now() - t > 36e5)
  }
}
o.displayName = "ApplicationStatisticsStore";
var d = new o(i.default, {
  APPLICATION_ACTIVITY_STATISTICS_FETCH_START: function(e) {
    let {
      applicationId: t
    } = e;
    l.add(t)
  },
  APPLICATION_ACTIVITY_STATISTICS_FETCH_FAIL: function(e) {
    let {
      applicationId: t
    } = e;
    l.delete(t)
  },
  APPLICATION_ACTIVITY_STATISTICS_FETCH_SUCCESS: function(e) {
    let {
      statistics: t,
      applicationId: s
    } = e;
    n[s] = Date.now(), l.delete(s), a[s] = t
  },
  LOGOUT: u
})