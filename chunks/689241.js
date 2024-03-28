"use strict";
a.r(t), a.d(t, {
  fetchBuildSize: function() {
    return i
  }
});
var s = a("544891"),
  l = a("570140"),
  n = a("173747"),
  r = a("981631");
async function i(e, t, a, i) {
  if (n.default.needsToFetchBuildSize(a)) {
    l.default.dispatch({
      type: "APPLICATION_BUILD_SIZE_FETCH_START",
      buildId: a
    });
    try {
      let n = await s.HTTP.post({
        url: r.Endpoints.APPLICATION_BUILD_SIZE(e, t, a),
        body: {
          manifest_ids: i
        },
        oldFormErrors: !0
      });
      l.default.dispatch({
        type: "APPLICATION_BUILD_SIZE_FETCH_SUCCESS",
        buildId: a,
        sizeKB: n.body.size_kb
      })
    } catch (e) {
      l.default.dispatch({
        type: "APPLICATION_BUILD_SIZE_FETCH_FAIL",
        buildId: a
      })
    }
  }
}