"use strict";
n.r(t), n.d(t, {
  fetchEULA: function() {
    return u
  }
});
var l = n("872717"),
  r = n("913144"),
  a = n("49111");
async function u(e) {
  let t = await l.default.get({
    url: a.Endpoints.STORE_EULA(e),
    oldFormErrors: !0
  });
  r.default.dispatch({
    type: "EULA_FETCH_SUCCESS",
    eula: t.body
  })
}