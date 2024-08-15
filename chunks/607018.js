s.r(t), s(47120);
var n = s(735250),
	i = s(470079),
	o = s(442837),
	l = s(279837),
	a = s(479531),
	r = s(144114),
	h = s(145454),
	d = s(23434),
	u = s(594174),
	c = s(1964),
	p = s(689938);
t.default = i.forwardRef(function (e, t) {
	let { onAddedPhone: s, onClose: m, transitionState: C, reason: f } = e,
		g = (0, o.e7)([u.default], () => u.default.getCurrentUser()),
		y = (0, o.e7)([d.Z], () => d.Z.getAction()),
		[N, x] = i.useState(null),
		[R, E] = i.useState(null),
		[P, b] = i.useState(null),
		[j, v] = i.useState(!1),
		S = i.useCallback(
			async (e) => {
				v(!0);
				try {
					c.Z.isPhoneReverification(g, y) ? await r.Z.beginReverifyPhone(e, f) : await r.Z.beginAddPhone(e, f), b(null), x(e);
				} catch (e) {
					b(new a.Z(e));
				}
				v(!1);
			},
			[g, f, y]
		),
		Z = i.useCallback(
			async (e) => {
				if (null != N && null != g) {
					v(!0);
					try {
						let { token: t } = await r.Z.verifyPhone(N, e);
						b(null), E(t);
					} catch (e) {
						b(new a.Z(e));
					}
					v(!1);
				}
			},
			[g, N]
		),
		I = i.useCallback(
			async (e) => {
				if (null != R) c.Z.isPhoneReverification(g, y) ? await r.Z.reverifyPhone(R, e, f) : await r.Z.addPhone(R, e, f), null == s || s(), m();
			},
			[s, m, R, f, g, y]
		);
	return null != R
		? (0, n.jsx)(l.default, {
				onClose: m,
				transitionState: C,
				title: p.Z.Messages.USER_SETTINGS_EDIT_ACCOUNT_PASSWORD_LABEL,
				handleSubmit: I
			})
		: (0, n.jsx)(h.Z, {
				onClose: m,
				transitionState: C,
				error: null == P ? void 0 : P.getAnyErrorMessage(),
				working: j,
				validPhone: null != N,
				onAddPhone: S,
				onVerifyPhone: Z
			});
});
