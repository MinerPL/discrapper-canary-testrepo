t.d(n, {
	Z: function () {
		return s;
	}
});
var l = t(735250);
t(470079);
var i = t(481060),
	a = t(695346),
	r = t(981631);
function s(e, n) {
	a.qF.getSetting()
		? (0, i.openModalLazy)(
				async () => {
					let { default: n } = await Promise.all([t.e('5528'), t.e('59967')]).then(t.bind(t, 601572));
					return (t) =>
						(0, l.jsx)(n, {
							...t,
							onEnable: e,
							videoEnabled: !1
						});
				},
				{
					modalKey: 'camera-preview',
					contextKey: n === r.IlC.POPOUT ? i.POPOUT_MODAL_CONTEXT : i.DEFAULT_MODAL_CONTEXT
				}
			)
		: null == e || e();
}
