"use strict";
s.r(t), s.d(t, {
  fetchStatisticsForApplication: function() {
    return l
  }
});
var a = s("872717"),
  r = s("913144"),
  i = s("333805"),
  n = s("49111");
async function l(e) {
  r.default.dispatch({
    type: "APPLICATION_ACTIVITY_STATISTICS_FETCH_START",
    applicationId: e
  });
  try {
    let t = await a.HTTP.get({
        url: n.Endpoints.APPLICATION_ACTIVITY_STATISTICS(e),
        oldFormErrors: !0
      }),
      s = t.body;
    return r.default.dispatch({
      type: "APPLICATION_ACTIVITY_STATISTICS_FETCH_SUCCESS",
      statistics: s,
      applicationId: e
    }), s
  } catch (t) {
    throw r.default.dispatch({
      type: "APPLICATION_ACTIVITY_STATISTICS_FETCH_FAIL",
      applicationId: e
    }), new i.default(t)
  }
}