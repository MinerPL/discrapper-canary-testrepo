"use strict";
n.d(t, {
  l: function() {
    return h
  }
});
var i = n(544891),
  r = n(379649),
  s = n(846519),
  o = n(570140),
  a = n(706454),
  l = n(283595),
  u = n(129542),
  _ = n(70956),
  d = n(981631);
let c = 10 * _.Z.Millis.MINUTE,
  E = 10 * _.Z.Millis.MINUTE,
  I = 1 * _.Z.Millis.MINUTE,
  T = {};
async function h(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    _ = a.default.locale;
  return o.Z.dispatch({
    type: "APPLICATION_BUILD_FETCH_START",
    applicationId: e,
    branchId: t,
    locale: _
  }), n && await (0, r._v)(Math.random() * I), i.tn.get({
    url: d.ANM.APPLICATION_LIVE_BUILD(e, t),
    query: {
      platform: (0, u.D)(),
      locale: _
    },
    oldFormErrors: !0
  }).then(n => {
    let i = n.body;
    if (0 === i.manifests.length) {
      o.Z.dispatch({
        type: "APPLICATION_BUILD_NOT_FOUND",
        applicationId: e,
        branchId: t
      });
      return
    }
    o.Z.dispatch({
      type: "APPLICATION_BUILD_FETCH_SUCCESS",
      applicationId: e,
      branchId: t,
      locale: _,
      build: i
    })
  }, n => {
    let {
      status: i
    } = n;
    if (404 === i) o.Z.dispatch({
      type: "APPLICATION_BUILD_NOT_FOUND",
      applicationId: e,
      branchId: t
    });
    else {
      var r, a;
      r = e, null == T[a = t] && (T[a] = new s.V7), T[a].start(c + Math.random() * E, () => {
        null != l.Z.getLibraryApplication(r, a) && h(r, a)
      })
    }
  })
}