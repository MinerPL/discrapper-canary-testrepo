n.d(t, {
	V: function () {
		return o;
	}
});
var r = n(735250);
n(470079);
var i = n(481060),
	a = n(522474),
	s = n(981631);
function o(e) {
	let { application: t, onAgree: o, onDisagree: l } = e,
		u = a.Z.getWindowOpen(s.KJ3.CHANNEL_CALL_POPOUT) ? i.POPOUT_MODAL_CONTEXT : i.DEFAULT_MODAL_CONTEXT;
	return (
		(0, i.openModalLazy)(
			async () => {
				let { ActivityAgeGateModal: e } = await n.e('57951').then(n.bind(n, 224604));
				return (n) =>
					(0, r.jsx)(e, {
						...n,
						application: t,
						onAgree: o,
						onDisagree: l
					});
			},
			{
				modalKey: 'activity-age-gate',
				contextKey: u
			}
		),
		Promise.resolve()
	);
}
