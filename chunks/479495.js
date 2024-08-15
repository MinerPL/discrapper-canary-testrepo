s(757143);
var n,
	r = s(735250),
	i = s(470079),
	a = s(120356),
	o = s.n(a),
	l = s(593473),
	c = s(873546),
	u = s(442837),
	d = s(570140),
	h = s(893776),
	p = s(129293),
	m = s(388905),
	f = s(17894),
	C = s(124860),
	g = s(108427),
	x = s(314897),
	N = s(585483),
	v = s(981631),
	E = s(689938),
	S = s(224499);
function A(e, t, s) {
	return (
		t in e
			? Object.defineProperty(e, t, {
					value: s,
					enumerable: !0,
					configurable: !0,
					writable: !0
				})
			: (e[t] = s),
		e
	);
}
u.ZP.initialize();
class j extends (n = i.PureComponent) {
	componentDidMount() {
		(0, g.e)('reset_password');
	}
	renderPasswordReset() {
		let { password: e, error: t, hasCancel: n } = this.state,
			i = this.isSubmitting(),
			a = null != t ? t : this.renderError('password');
		return (0, r.jsxs)(m.ZP, {
			onSubmit: this.handleSubmit,
			tag: 'form',
			children: [
				(0, r.jsx)('img', {
					alt: '',
					src: null == a ? s(26230) : s(935227),
					className: S.marginBottom20
				}),
				(0, r.jsx)(m.Dx, { children: E.Z.Messages.RESET_PASSWORD_TITLE }),
				(0, r.jsxs)(m.gO, {
					className: S.marginTop20,
					children: [
						(0, r.jsx)(m.II, {
							label: E.Z.Messages.FORM_LABEL_NEW_PASSWORD,
							className: S.marginBottom20,
							name: 'password',
							value: e,
							onChange: (e) => this.setState({ password: e }),
							error: a,
							type: 'password'
						}),
						(0, r.jsx)(m.zx, {
							type: 'submit',
							submitting: i,
							children: E.Z.Messages.CHANGE_PASSWORD
						}),
						n
							? (0, r.jsx)(m.zx, {
									className: S.marginTop8,
									onClick: this.handleGoToLogin,
									submitting: i,
									color: m.zx.Colors.PRIMARY,
									children: E.Z.Messages.CANCEL
								})
							: null
					]
				})
			]
		});
	}
	renderMFA() {
		let e = {
			ticket: this.props.mfaTicket,
			methods: this.props.mfaMethods
		};
		return (0, r.jsx)(m.ZP, {
			style: { padding: 0 },
			children: (0, r.jsx)(C.Cd, {
				mfaFinish: (e) => {
					let { mfaType: t, data: s } = e;
					return this.handleTokenSubmitMFAv2(t, s);
				},
				mfaChallenge: e,
				onEarlyClose: () => {
					d.Z.dispatch({ type: 'LOGIN_RESET' });
				},
				width: 480
			})
		});
	}
	renderSucceeded() {
		return (0, r.jsxs)(m.ZP, {
			children: [
				(0, r.jsx)('img', {
					alt: '',
					src: s(26230),
					className: o()(S.marginBottom20, c.tq ? S.marginTop20 : '')
				}),
				(0, r.jsx)(m.Dx, {
					className: S.marginBottom40,
					children: E.Z.Messages.RESET_PASSWORD_SUCCESS_TITLE
				}),
				(0, r.jsx)(m.zx, {
					onClick: this.handleOpenApp,
					children: E.Z.Messages.VERIFICATION_OPEN_DISCORD
				})
			]
		});
	}
	render() {
		return this.state.success
			? this.renderSucceeded()
			: null != this.props.mfaTicket && '' !== this.props.mfaTicket
				? this.renderMFA()
				: this.renderPasswordReset();
	}
	constructor(e) {
		var t;
		super(e),
			A(this, 'handleSubmit', async (e) => {
				let { location: t, onLoginSuccess: s, source: n, resetToken: r } = this.props,
					{ password: i, error: a } = this.state;
				if ((null != e && e.preventDefault(), 0 === i.length)) {
					this.setState({ error: E.Z.Messages.PASSWORD_REQUIRED }), N.S.dispatch(v.CkL.WAVE_EMPHASIZE);
					return;
				}
				null != a && this.setState({ error: null });
				let o = r;
				if ((null != t && (o = (0, p.Z)(t)), null != o)) {
					this.setState({ working: !0 });
					try {
						let {
							result: e,
							sms: t,
							webauthn: r,
							ticket: a,
							token: l,
							totp: c,
							backup: u
						} = await h.Z.resetPassword(o, i, n);
						e === h.c.MFA
							? d.Z.dispatch({
									type: 'LOGIN_MFA_STEP',
									ticket: a,
									sms: t,
									webauthn: r,
									totp: c,
									backup: u
								})
							: null != s
								? s(l)
								: (d.Z.dispatch({
										type: 'LOGIN_SUCCESS',
										token: l
									}),
									this.handlePasswordChangeSuccess());
					} catch (e) {}
					this.setState({ working: !1 });
				}
			}),
			A(this, 'handleTokenSubmitMFAv2', (e, t) => {
				let { location: s, mfaTicket: n, onLoginSuccess: r, resetToken: i, source: a } = this.props,
					{ password: o } = this.state;
				if (0 === o.length) return d.Z.dispatch({ type: 'LOGIN_RESET' }), Promise.reject();
				let l = i;
				return (null != s && (l = (0, p.Z)(s)), null == l)
					? (d.Z.dispatch({ type: 'LOGIN_RESET' }), Promise.reject())
					: h.Z.resetPasswordMFAv2({
							method: e,
							code: t,
							ticket: n,
							password: o,
							token: l,
							source: a
						}).then((e) => {
							null != r
								? r(e)
								: (d.Z.dispatch({
										type: 'LOGIN_SUCCESS',
										token: e
									}),
									this.handlePasswordChangeSuccess());
						});
			}),
			A(this, 'handlePasswordChangeSuccess', () => {
				let { replaceWith: e } = this.props;
				if (c.Em || c.tq) {
					this.setState({ success: !0 });
					return;
				}
				e(v.Z5c.APP);
			}),
			A(this, 'handleGoToLogin', () => {
				let { transitionTo: e } = this.props;
				h.Z.loginReset(), e(v.Z5c.LOGIN);
			}),
			A(this, 'isSubmitting', () => {
				let { loginStatus: e } = this.props,
					{ working: t } = this.state;
				return t || e === v.u34.LOGGING_IN_MFA;
			}),
			A(this, 'handleOpenApp', () => {
				(0, f.Z)('password_reset');
			}),
			A(this, 'hasError', (e) => null != this.props.errors[e] || null != this.state.error),
			A(this, 'renderError', (e) => {
				let { errors: t } = this.props;
				if (this.hasError(e)) {
					let s = t[e];
					return Array.isArray(s) ? s[0] : s;
				}
				return null;
			});
		let s =
			(null === (t = this.props.location) || void 0 === t ? void 0 : t.search) != null &&
			'' !== this.props.location.search
				? (0, l.parse)(this.props.location.search)
				: null;
		this.state = {
			method: '',
			password: '',
			code: '',
			error: null,
			hasCancel: null != s && null != s.from_login,
			working: !1,
			success: !1
		};
	}
}
A(j, 'defaultProps', {
	transitionTo: (e) => s.g.location.assign(e),
	replaceWith: (e) => s.g.location.replace(e)
});
t.Z = function (e) {
	let t = (0, u.cj)([x.default], () => ({
		loginStatus: x.default.getLoginStatus(),
		mfaTicket: x.default.getMFATicket(),
		errors: x.default.getErrors(),
		mfaMethods: x.default.getMFAMethods()
	}));
	return (0, r.jsx)(j, {
		...e,
		...t
	});
};
