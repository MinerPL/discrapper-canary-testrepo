"use strict";
l.r(t), l.d(t, {
  fetchUserAffinities: function() {
    return a
  }
});
var n = l("544891"),
  u = l("570140"),
  i = l("800599"),
  r = l("981631");

function a() {
  let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
  return i.default.needsRefresh() ? (u.default.dispatch({
    type: "LOAD_USER_AFFINITIES"
  }), n.HTTP.get({
    url: r.Endpoints.USER_AFFINITIES,
    retries: e ? 3 : 0,
    oldFormErrors: !0
  }).then(e => {
    let {
      body: t
    } = e;
    u.default.dispatch({
      type: "LOAD_USER_AFFINITIES_SUCCESS",
      affinities: t
    })
  }, () => {
    u.default.dispatch({
      type: "LOAD_USER_AFFINITIES_FAILURE"
    })
  })) : Promise.resolve()
}