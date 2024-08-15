n.d(e, {
	L: function () {
		return r;
	}
});
var i = n(735250);
n(470079);
var s = n(481060),
	a = n(51025),
	o = n(850840),
	l = n(391690);
function r(t, e, r, c, d) {
	let u = l.Z.getInstallationPath(t.id, e),
		p = null != t.eulaId && !o.Z.hasAcceptedEULA(t.eulaId);
	null == u || p
		? (0, s.openModalLazy)(async () => {
				let { default: s } = await n.e('226').then(n.bind(n, 472064));
				return (n) =>
					(0, i.jsx)(s, {
						...n,
						applicationId: t.id,
						branchId: e,
						analyticsLocation: d
					});
			})
		: (0, a.LO)({
				application: t,
				branchId: e,
				buildId: r,
				manifestIds: c,
				installationPath: u,
				analyticsLocation: d
			});
}
