"use strict";
n.r(t), n.d(t, {
  fetchUserAffinities: function() {
    return r
  }
});
var a = n("872717"),
  s = n("913144"),
  l = n("843823"),
  i = n("49111");

function r() {
  let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
  return l.default.needsRefresh() ? (s.default.dispatch({
    type: "LOAD_USER_AFFINITIES"
  }), a.HTTP.get({
    url: i.Endpoints.USER_AFFINITIES,
    retries: e ? 3 : 0,
    oldFormErrors: !0
  }).then(e => {
    let {
      body: t
    } = e;
    s.default.dispatch({
      type: "LOAD_USER_AFFINITIES_SUCCESS",
      affinities: t
    })
  }, () => {
    s.default.dispatch({
      type: "LOAD_USER_AFFINITIES_FAILURE"
    })
  })) : Promise.resolve()
}