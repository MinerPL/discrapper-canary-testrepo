"use strict";
n.d(t, {
  GR: function() {
    return u
  },
  b8: function() {
    return l
  },
  ul: function() {
    return _
  }
});
var i = n(544891),
  r = n(570140),
  s = n(85521),
  o = n(73346),
  a = n(981631);
async function l() {
  try {
    let e = await (0, o.Kb)({
      url: a.ANM.LIBRARY,
      oldFormErrors: !0
    }, !1);
    r.Z.dispatch({
      type: "LIBRARY_FETCH_SUCCESS",
      libraryApplications: e.body
    })
  } catch (e) {
    r.Z.dispatch({
      type: "LIBRARY_FETCH_FAIL",
      error: e
    })
  }
}
async function u(e) {
  let t = e.primarySkuId;
  if (null == t) return;
  let n = (await i.tn.get({
    url: a.ANM.APPLICATION_BRANCH_LIST(e.id),
    oldFormErrors: !0
  }).then(e => e.body)).map(n => s.Z.createForTestMode({
    id: e.id,
    skuId: t,
    branch: n
  }));
  r.Z.dispatch({
    type: "LIBRARY_APPLICATIONS_TEST_MODE_ENABLED",
    libraryApplications: n
  })
}

function _(e, t, n) {
  r.Z.dispatch({
    type: "LIBRARY_APPLICATION_ACTIVE_LAUNCH_OPTION_UPDATE",
    applicationId: e,
    branchId: t,
    launchOptionId: n
  })
}