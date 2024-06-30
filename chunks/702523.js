n.d(e, {
    L: function () {
        return r;
    }
});
var i = n(735250);
n(470079);
var o = n(481060), a = n(51025), l = n(850840), s = n(391690);
function r(t, e, r, c, d) {
    let u = s.Z.getInstallationPath(t.id, e), p = null != t.eulaId && !l.Z.hasAcceptedEULA(t.eulaId);
    null == u || p ? (0, o.openModalLazy)(async () => {
        let {default: o} = await n.e('226').then(n.bind(n, 472064));
        return n => (0, i.jsx)(o, {
            ...n,
            applicationId: t.id,
            branchId: e,
            analyticsLocation: d
        });
    }) : (0, a.LO)({
        application: t,
        branchId: e,
        buildId: r,
        manifestIds: c,
        installationPath: u,
        analyticsLocation: d
    });
}
