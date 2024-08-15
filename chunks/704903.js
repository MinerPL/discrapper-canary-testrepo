s(47120);
var i,
	n = s(735250),
	a = s(470079),
	o = s(120356),
	l = s.n(o),
	r = s(772848),
	h = s(846519),
	d = s(481060),
	u = s(981631),
	c = s(689938),
	m = s(771886),
	f = s(257995),
	g = s(224499);
function p(e, t, s) {
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
class E extends (i = a.PureComponent) {
	async componentDidMount() {
		let [e, { default: t }] = await Promise.all([s.e('27526').then(s.t.bind(s, 555589, 19)), Promise.resolve().then(s.t.bind(s, 500923, 23))]);
		null != this._lottieRef &&
			(this._animItem = t.loadAnimation({
				container: this._lottieRef,
				renderer: 'svg',
				loop: !0,
				autoplay: !0,
				animationData: e
			}));
	}
	componentWillUnmount() {
		this._timeout.stop(), null != this._animItem && (this._animItem.destroy(), (this._animItem = void 0));
	}
	renderInputs() {
		let { emailError: e, passwordError: t, submitting: s } = this.props,
			{ email: i, password: a } = this.state;
		return (0, n.jsxs)('div', {
			className: m.container,
			children: [
				(0, n.jsx)(d.FormItem, {
					title: c.Z.Messages.FORM_LABEL_EMAIL,
					className: g.marginBottom20,
					children: (0, n.jsx)(d.TextInput, {
						value: i,
						error: e,
						onChange: this.handleEmailChange,
						onKeyPress: this.handleKeyPress,
						autoFocus: !0
					})
				}),
				(0, n.jsx)(d.FormItem, {
					title: c.Z.Messages.FORM_LABEL_PASSWORD,
					className: g.marginBottom40,
					children: (0, n.jsx)(d.TextInput, {
						type: 'password',
						value: a,
						error: t,
						onChange: this.handlePasswordChange,
						onKeyPress: this.handleKeyPress
					})
				}),
				(0, n.jsx)(d.Button, {
					fullWidth: !0,
					size: d.Button.Sizes.LARGE,
					onClick: this.handleVerify,
					submitting: s,
					disabled: 0 === i.length || 0 === a.length,
					children: c.Z.Messages.VERIFY_ACCOUNT
				})
			]
		});
	}
	renderActions() {
		let { canChange: e } = this.props;
		return (0, n.jsxs)('div', {
			className: m.container,
			children: [
				(0, n.jsx)(d.Button, {
					className: g.marginTop20,
					fullWidth: !0,
					size: d.Button.Sizes.LARGE,
					color: d.ButtonColors.PRIMARY,
					onClick: this.handleResendEmail,
					children: c.Z.Messages.RESEND_EMAIL
				}),
				e &&
					(0, n.jsx)(d.Button, {
						className: g.marginTop20,
						fullWidth: !0,
						size: d.Button.Sizes.MEDIUM,
						look: d.ButtonLooks.LINK,
						color: d.ButtonColors.LINK,
						onClick: this.handleChangeEmailClick,
						children: c.Z.Messages.CHANGE_EMAIL
					})
			]
		});
	}
	render() {
		let e;
		let { resent: t } = this.state,
			{ email: s, canResend: i, transitionState: a } = this.props;
		return (
			(e = t && null != s ? c.Z.Messages.VERIFY_EMAIL_BODY_RESENT.format({ email: s }) : i ? c.Z.Messages.VERIFY_EMAIL_BODY : c.Z.Messages.ENTER_EMAIL_BODY),
			(0, n.jsxs)(d.ModalRoot, {
				transitionState: a,
				'aria-labelledby': this._headerId,
				className: l()(m.emailVerificationModal, f.vertical, f.alignCenter, f.justifyCenter, g.marginTop60),
				children: [
					(0, n.jsx)('div', {
						className: m.animationContainer,
						ref: this.setLottieRef
					}),
					(0, n.jsx)('div', {
						id: this._headerId,
						className: l()(m.title, g.marginBottom8),
						children: c.Z.Messages.VERIFY_BY_EMAIL
					}),
					(0, n.jsx)('div', {
						className: l()(m.body, g.marginBottom20),
						children: e
					}),
					i ? this.renderActions() : this.renderInputs()
				]
			})
		);
	}
	constructor(...e) {
		super(...e),
			p(this, '_lottieRef', void 0),
			p(this, '_animItem', null),
			p(this, '_timeout', new h.V7()),
			p(this, '_headerId', (0, r.Z)()),
			p(this, 'state', {
				resent: !1,
				shouldClose: !1,
				email: '',
				password: ''
			}),
			p(this, 'setLottieRef', (e) => {
				this._lottieRef = e;
			}),
			p(this, 'handleVerify', () => {
				let { onVerify: e } = this.props;
				e(this.state.email, this.state.password);
			}),
			p(this, 'handleResendEmail', () => {
				let { onResend: e, onClose: t } = this.props;
				e(),
					!this.state.resent &&
						(this.setState({
							resent: !0,
							shouldClose: !0
						}),
						this._timeout.start(3000, () => {
							this.state.shouldClose && t();
						}));
			}),
			p(this, 'handleChangeEmailClick', () => {
				let { onChangeEmailClick: e } = this.props;
				this.setState({
					resent: !1,
					shouldClose: !1
				}),
					e();
			}),
			p(this, 'handleEmailChange', (e) => {
				this.setState({ email: e });
			}),
			p(this, 'handlePasswordChange', (e) => {
				this.setState({ password: e });
			}),
			p(this, 'handleKeyPress', (e) => {
				let { email: t, password: s } = this.state;
				13 === e.which && t.length > 0 && s.length > 0 && (e.preventDefault(), this.handleVerify());
			});
	}
}
p(E, 'defaultProps', {
	canResend: !1,
	canChange: !0,
	onChangeEmailClick: u.dG4,
	onVerify: (e, t) => {},
	onResend: u.dG4,
	onClose: u.dG4
}),
	(t.Z = E);
