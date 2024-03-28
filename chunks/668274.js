"use strict";
l.r(t), l.d(t, {
  fetchEULA: function() {
    return u
  }
});
var r = l("544891"),
  n = l("570140"),
  a = l("981631");
async function u(e) {
  let t = await r.HTTP.get({
    url: a.Endpoints.STORE_EULA(e),
    oldFormErrors: !0
  });
  n.default.dispatch({
    type: "EULA_FETCH_SUCCESS",
    eula: t.body
  })
}