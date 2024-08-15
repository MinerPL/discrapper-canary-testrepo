let s;
n(47120);
var r = n(735250),
	i = n(470079),
	a = n(120356),
	l = n.n(a),
	o = n(873546),
	c = n(442837),
	u = n(481060),
	d = n(980591),
	_ = n(605782),
	h = n(133853),
	E = n(568154),
	g = n(353926),
	p = n(703656),
	I = n(981631),
	m = n(391205);
let f = n(575703),
	N = n(2984),
	T = [
		I.Z5c.LOGIN,
		I.Z5c.LOGIN_HANDOFF,
		I.Z5c.REGISTER,
		I.Z5c.INVITE(''),
		I.Z5c.GIFT_CODE(''),
		I.Z5c.GUILD_TEMPLATE_LOGIN(''),
		I.Z5c.GUILD_TEMPLATE(''),
		I.Z5c.DISABLE_EMAIL_NOTIFICATIONS,
		I.Z5c.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS,
		I.Z5c.BILLING_PREMIUM_SUBSCRIBE,
		I.Z5c.BILLING_PAYMENT_SOURCES_CREATE,
		I.Z5c.BILLING_PAYMENTS,
		I.Z5c.BILLING_PREMIUM_SWITCH_PLAN,
		I.Z5c.BILLING_GUILD_SUBSCRIPTIONS_PURCHASE,
		I.Z5c.VERIFY,
		I.Z5c.VERIFY_HUB_EMAIL,
		I.Z5c.REJECT_IP,
		I.Z5c.REJECT_MFA,
		I.Z5c.AUTHORIZE_IP,
		I.Z5c.AUTHORIZE_PAYMENT,
		I.Z5c.RESET,
		I.Z5c.HANDOFF,
		I.Z5c.REPORT,
		I.Z5c.REPORT_SECOND_LOOK
	];
function x(e) {
	return T.some((t) => e.startsWith(t));
}
let A = (e) => ((s = e), e);
function C(e) {
	let { children: t } = e;
	switch (
		(function () {
			let [e, t] = i.useState(!1),
				[n, r] = i.useState(true),
				a = (function () {
					return null;
				})(),
				l = (0, c.e7)([g.Z], () => g.Z.hasLoadedExperiments);
			return ((0, d.Z)(() => {}, 300), void 0 !== s)
				? s
				: !n && l
					? (!e && t(!0),
						A(
							(function (e) {
								return 'default';
							})(a)
						))
					: n
						? A('default')
						: 'loading';
		})()
	) {
		case 'default':
			return (0, r.jsxs)(r.Fragment, {
				children: [
					(0, r.jsx)('img', {
						className: m.artwork,
						src: f,
						alt: ''
					}),
					(0, r.jsx)('img', {
						className: m.logoWithText,
						src: N,
						alt: ''
					}),
					t
				]
			});
		case 'experimental':
		case 'loading':
			return null;
	}
}
class v extends i.Component {
	componentDidMount() {
		window.addEventListener('resize', this.handleResize);
	}
	componentWillUnmount() {
		window.removeEventListener('resize', this.handleResize);
	}
	mobileTransitionTo(e, t) {
		if (x(e)) (0, p.uL)(e, t);
		else {
			let n = null != t && null != t.search ? t.search : null;
			window.location = null == n ? e : ''.concat(e, '?').concat(n);
		}
	}
	mobileReplaceWith(e) {
		x(e) ? (0, p.dL)(e) : (window.location = e);
	}
	renderDefault() {
		let { splash: e } = this.props,
			t = (0, r.jsx)(_.Z, {
				component: i.Fragment,
				children: i.Children.map(this.props.children, (e) =>
					i.cloneElement(e, {
						transitionTo: p.uL,
						replaceWith: p.dL
					})
				)
			});
		return (0, r.jsx)('div', {
			className: m.characterBackground,
			children: (0, r.jsx)(u.HeadingLevel, {
				forceLevel: 1,
				children:
					null != e
						? (0, r.jsxs)(r.Fragment, {
								children: [
									(0, r.jsx)(h.Z, {
										show: !0,
										className: l()(m.logo)
									}),
									(0, r.jsx)(E.h, {
										splash: e,
										children: t
									})
								]
							})
						: (0, r.jsx)(C, { children: t })
			})
		});
	}
	renderMobile() {
		return (0, r.jsx)(_.Z, {
			component: i.Fragment,
			children: i.Children.map(this.props.children, (e) =>
				i.cloneElement(e, {
					transitionTo: this.mobileTransitionTo,
					replaceWith: this.mobileReplaceWith
				})
			)
		});
	}
	render() {
		let { isMobileWidth: e } = this.state,
			t = navigator.userAgent.includes('GameLauncher');
		return e || o.tq || o.Em || t ? this.renderMobile() : this.renderDefault();
	}
	constructor(e) {
		var t, n, s;
		super(e),
			(t = this),
			(n = 'handleResize'),
			(s = () => {
				this.setState({ isMobileWidth: window.innerWidth <= 485 });
			}),
			n in t
				? Object.defineProperty(t, n, {
						value: s,
						enumerable: !0,
						configurable: !0,
						writable: !0
					})
				: (t[n] = s),
			(this.state = { isMobileWidth: window.innerWidth <= 485 });
	}
}
t.Z = v;
