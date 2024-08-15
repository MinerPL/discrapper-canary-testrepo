n.d(t, {
	Z: function () {
		return m;
	}
});
var r = n(735250);
n(470079);
var i = n(620662),
	a = n(841784),
	s = n(834353),
	o = n(802856),
	l = n(420660),
	u = n(374129),
	c = n(639351),
	d = n(103479),
	_ = n(191764),
	E = n(238607),
	f = n(414402),
	h = n(934393),
	p = n(715547),
	I = n(981631);
function m(e) {
	let { user: t, currentUser: n, activity: m, onAction: T, onClose: g } = e;
	return (0, o.Z)(m)
		? (0, r.jsx)(h.Z, {
				platformType: I.ABu.XBOX,
				icon: () => (0, r.jsx)(c.Z, {}),
				onAction: T
			})
		: (0, s.Z)(m)
			? (0, r.jsx)(h.Z, {
					platformType: I.ABu.PLAYSTATION,
					icon: () => (0, r.jsx)(u.Z, {}),
					onAction: T
				})
			: (0, l.Z)(m)
				? (0, r.jsx)(p.Z, {
						activity: m,
						onAction: T
					})
				: (0, i.Z)(m, I.xjy.JOIN) || (0, a.Z)(m)
					? (0, r.jsx)(E.Z, {
							user: t,
							currentUser: n,
							activity: m,
							onAction: T,
							onClose: g
						})
					: (null == m ? void 0 : m.type) === I.IIU.HANG_STATUS
						? (0, r.jsx)(_.Z, {
								user: t,
								activity: m,
								onAction: T,
								onClose: g
							})
						: (null == m ? void 0 : m.buttons) != null && (null == m ? void 0 : m.buttons.length) >= 1
							? (0, r.jsx)(d.Z, {
									user: t,
									activity: m,
									onAction: T
								})
							: (0, i.Z)(m, I.xjy.INSTANCE)
								? (0, r.jsx)(f.Z, {
										user: t,
										activity: m,
										onAction: T
									})
								: null;
}
