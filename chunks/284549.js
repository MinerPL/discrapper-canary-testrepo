s.r(t), s(47120);
var i = s(735250),
	n = s(470079),
	a = s(442837),
	o = s(481060),
	l = s(893776),
	r = s(809206),
	h = s(704903),
	d = s(155433),
	u = s(23434),
	c = s(25990),
	m = s(594174),
	f = s(1964),
	g = s(981631),
	p = s(689938);
t.default = (e) => {
	let { transitionState: t, onClose: s } = e,
		E = (0, a.e7)([c.Z], () => c.Z.getErrors()),
		_ = (0, a.e7)([c.Z], () => c.Z.getFormState()),
		C = (0, a.e7)([m.default], () => m.default.getCurrentUser()),
		I = (0, a.e7)([u.Z], () => u.Z.getAction()),
		R = !f.Z.isEmailReverification(I),
		[v, M] = n.useState(!0),
		y = _ === g.QZA.SUBMITTING;
	function A(e) {
		var t, s;
		return null !== (s = null == E ? void 0 : null === (t = E[e]) || void 0 === t ? void 0 : t[0]) && void 0 !== s ? s : '';
	}
	let T = A('email'),
		Z = A('password');
	return (0, i.jsx)(h.Z, {
		transitionState: t,
		email: null == C ? void 0 : C.email,
		emailError: T,
		passwordError: Z,
		submitting: y,
		canResend: v && !y && (null == C ? void 0 : C.email) != null && 0 === T.length && 0 === Z.length,
		canChange: R,
		onChangeEmailClick: function () {
			M(!1);
		},
		onVerify: function (e, t) {
			(0, r.Mn)({
				email: e,
				password: t
			}).then((e) => {
				if (!(null == e ? void 0 : e.ok)) {
					var t;
					(null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.username) != null ? (0, d.P)() : 0 === Z.length && 0 === T.length && (0, o.showToast)((0, o.createToast)(p.Z.Messages.ERROR_GENERIC_TITLE, o.ToastType.FAILURE));
				}
			}),
				M(!0);
		},
		onResend: function () {
			l.Z.verifyResend();
		},
		onClose: s
	});
};
