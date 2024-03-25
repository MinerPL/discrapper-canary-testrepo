"use strict";
let a, r, i;
s.r(t), s.d(t, {
  default: function() {
    return d
  }
}), s("222007");
var n = s("446674"),
  l = s("913144");

function o() {
  r = {}, a = {}, i = new Set
}
o();
class u extends n.default.Store {
  getStatisticsForApplication(e) {
    return a[e]
  }
  shouldFetchStatisticsForApplication(e) {
    let t = r[e];
    return !i.has(e) && (null == t || Date.now() - t > 36e5)
  }
}
u.displayName = "ApplicationStatisticsStore";
var d = new u(l.default, {
  APPLICATION_ACTIVITY_STATISTICS_FETCH_START: function(e) {
    let {
      applicationId: t
    } = e;
    i.add(t)
  },
  APPLICATION_ACTIVITY_STATISTICS_FETCH_FAIL: function(e) {
    let {
      applicationId: t
    } = e;
    i.delete(t)
  },
  APPLICATION_ACTIVITY_STATISTICS_FETCH_SUCCESS: function(e) {
    let {
      statistics: t,
      applicationId: s
    } = e;
    r[s] = Date.now(), i.delete(s), a[s] = t
  },
  LOGOUT: o
})