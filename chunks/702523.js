"use strict";
n.r(e), n.d(e, {
  installApplication: function() {
    return r
  }
});
var l = n("735250");
n("470079");
var a = n("481060"),
  i = n("51025"),
  o = n("850840"),
  s = n("391690");

function r(t, e, r, c, u) {
  let d = s.default.getInstallationPath(t.id, e),
    p = null != t.eulaId && !o.default.hasAcceptedEULA(t.eulaId);
  null == d || p ? (0, a.openModalLazy)(async () => {
    let {
      default: a
    } = await Promise.all([n.e("99387"), n.e("226")]).then(n.bind(n, "472064"));
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