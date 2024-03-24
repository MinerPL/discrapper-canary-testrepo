"use strict";
n.r(t), n.d(t, {
  fetchEULA: function() {
    return u
  }
});
var r = n("872717"),
  l = n("913144"),
  a = n("49111");
async function u(e) {
  let t = await r.HTTP.get({
    url: a.Endpoints.STORE_EULA(e),
    oldFormErrors: !0
  });
  l.default.dispatch({
    type: "EULA_FETCH_SUCCESS",
    eula: t.body
  })
}