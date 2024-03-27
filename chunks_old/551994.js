"use strict";
n.r(e), n.d(e, {
  installApplication: function() {
    return r
  }
});
var l = n("37983");
n("884691");
var a = n("77078"),
  i = n("190017"),
  o = n("971427"),
  s = n("98328");

function r(t, e, r, c, u) {
  let d = s.default.getInstallationPath(t.id, e),
    p = null != t.eulaId && !o.default.hasAcceptedEULA(t.eulaId);
  null == d || p ? (0, a.openModalLazy)(async () => {
    let {
      default: a
    } = await n.el("727441").then(n.bind(n, "727441"));
    return n => (0, l.jsx)(a, {
      ...n,
      applicationId: t.id,
      branchId: e,
      analyticsLocation: u
    })
  }) : (0, i.installApplication)({
    application: t,
    branchId: e,
    buildId: r,
    manifestIds: c,
    installationPath: d,
    analyticsLocation: u
  })
}