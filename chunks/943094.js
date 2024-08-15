n.d(t, {
	W: function () {
		return l;
	}
});
var i = n(481060),
	a = n(812206),
	s = n(710845),
	r = n(51025);
function l(e, t, l) {
	!(function (e, t) {
		let r = a.Z.getApplication(e);
		if (null == r) {
			new s.Z('DispatchUninstallActionCreators').log('Application not found for game '.concat(e));
			return;
		}
		(0, i.openModalLazy)(async () => {
			let { default: e } = await n.e('70061').then(n.bind(n, 764998));
			return (n) =>
				e({
					game: r,
					onConfirmUninstall: t,
					...n
				});
		});
	})(e, () => (0, r.pC)(e, t, l));
}
