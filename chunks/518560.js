n.d(t, {
	Z: function () {
		return g;
	}
});
var i = n(735250),
	a = n(470079),
	s = n(286379),
	l = n(481060),
	r = n(797614),
	o = n(626135),
	c = n(103879),
	_ = n(451284),
	u = n(802429),
	d = n(846488),
	E = n(181211),
	T = n(811085),
	S = n(967254),
	A = n(981631),
	I = n(689938),
	N = n(120951);
function g() {
	let e = (0, E.Z)(),
		t = (0, d.e)(),
		n = (0, _.P)(),
		g = (0, u.i)();
	return (a.useEffect(() => {
		c.yq();
	}, []),
	a.useEffect(() => {
		t && (o.default.track(A.rMx.SAFETY_HUB_VIEWED, { account_standing: n.state }), r.Z.increment({ name: s.V.SAFETY_HUB_VIEW }));
	}, [t]),
	e)
		? (0, i.jsx)('div', { children: (0, i.jsx)(l.Spinner, {}) })
		: null != g
			? (0, i.jsxs)(l.Notice, {
					color: l.NoticeColors.DANGER,
					className: N.nagbar,
					children: [
						I.Z.Messages.SAFETY_HUB_ERROR_MESSAGE,
						(0, i.jsx)(l.NoticeButton, {
							onClick: () => c.yq(),
							children: I.Z.Messages.SAFETY_HUB_ERROR_ACTION_BUTTON
						})
					]
				})
			: (0, i.jsxs)('div', {
					className: N.container,
					children: [(0, i.jsx)(T.Z, {}), (0, i.jsx)(S.N, {})]
				});
}
