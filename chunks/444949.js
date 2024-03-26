"use strict";
r.r(t), r.d(t, {
  fetchActivityStatistics: function() {
    return o
  }
});
var n = r("872717"),
  i = r("913144"),
  s = r("251013"),
  u = r("718517"),
  l = r("49111");
let a = 6 * u.default.Millis.HOUR;
async function o() {
  let e = s.default.lastFetched;
  if (!(null != e && Date.now() - e < a)) try {
    let e = await n.HTTP.get({
      url: l.Endpoints.USER_ACTIVITY_STATISTICS,
      oldFormErrors: !0
    });
    i.default.dispatch({
      type: "USER_ACTIVITY_STATISTICS_FETCH_SUCCESS",
      statistics: e.body
    })
  } catch (e) {
    return e
  }
}