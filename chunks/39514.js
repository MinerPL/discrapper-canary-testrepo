n(47120), n(411104);
var s,
	r,
	i = n(735250),
	a = n(470079),
	l = n(120356),
	o = n.n(l),
	c = n(442837),
	u = n(570140),
	d = n(893776),
	_ = n(533307),
	h = n(978085),
	E = n(232567),
	g = n(388905),
	p = n(362762),
	I = n(108427),
	m = n(314897),
	f = n(896797),
	N = n(82142),
	T = n(283595),
	x = n(55563),
	A = n(669079),
	C = n(63063),
	v = n(51144),
	Z = n(481153),
	S = n(781428),
	R = n(423527),
	O = n(981631),
	b = n(689938),
	D = n(224499);
function L(e, t, n) {
	return (
		t in e
			? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				})
			: (e[t] = n),
		e
	);
}
c.ZP.initialize(), ((r = s || (s = {})).REGISTER = 'register'), (r.LOGIN = 'login');
class M extends a.PureComponent {
	componentDidMount() {
		let { authenticated: e, isResolved: t } = this.props;
		e && this.handleAuthenticated(), !t && this.resolveGiftCode(), (0, I.e)('gift_code');
	}
	componentDidUpdate(e) {
		let { authenticated: t, isResolved: n } = this.props;
		!n &&
			u.Z.wait(() => {
				this.resolveGiftCode();
			}),
			t && !e.authenticated && this.handleAuthenticated(),
			!t && e.authenticated && this.setState({ currentUser: null });
	}
	handleAuthenticated() {
		let { currentUser: e } = this.state;
		h.b8(), null == e && this.refreshUser();
	}
	get requiresVerification() {
		let { currentUser: e } = this.state;
		return null != e && !e.verified;
	}
	getCode() {
		let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props;
		return e.match.params.giftCode;
	}
	getMode() {
		let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props;
		return e.login ? 'login' : 'register';
	}
	getErrorMessage(e) {
		let { libraryApplication: t, sku: n } = this.props,
			{ error: s } = this.state,
			r = null != s ? s.code : null;
		return r === O.evJ.INVALID_GIFT_SELF_REDEMPTION
			? b.Z.Messages.GIFT_CONFIRMATION_BODY_SELF_GIFT_NO_PAYMENT
			: r === O.evJ.INVALID_GIFT_REDEMPTION_OWNED && (null == n ? void 0 : n.productLine) === O.POd.COLLECTIBLES
				? b.Z.Messages.GIFT_ERROR_OWNED
				: null != t || r === O.evJ.INVALID_GIFT_REDEMPTION_OWNED
					? b.Z.Messages.GIFT_CODE_AUTH_HELP_TEXT_OWNED.format({ libraryLink: O.Z5c.APPLICATION_LIBRARY })
					: e.isClaimed || r === O.evJ.INVALID_GIFT_REDEMPTION_EXHAUSTED
						? b.Z.Messages.GIFT_CODE_AUTH_HELP_TEXT_CLAIMED
						: r === O.evJ.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED
							? b.Z.Messages.GIFT_CODE_SMITE_REJECT_HELP_TEXT
							: void 0;
	}
	renderSpinner(e) {
		return (0, i.jsxs)(g.ZP, {
			children: [(0, i.jsx)(g.Dx, { children: e }), (0, i.jsx)(g.Hh, {})]
		});
	}
	renderExpiredInvite() {
		let { defaultRoute: e, transitionTo: t } = this.props;
		return (0, i.jsxs)(g.ZP, {
			children: [
				(0, i.jsx)(g.Ee, {
					src: n(167969),
					className: D.marginBottom8
				}),
				(0, i.jsx)(g.Dx, {
					className: o()(D.marginTop8, D.marginBottom8),
					children: b.Z.Messages.GIFT_CODE_AUTH_INVALID_TITLE
				}),
				(0, i.jsx)(g.DK, { children: b.Z.Messages.GIFT_CODE_AUTH_INVALID_BODY }),
				(0, i.jsx)(g.zx, {
					className: o()(D.marginTop40, D.marginBottom8),
					onClick: () => t(e),
					children: b.Z.Messages.CONTINUE_TO_WEBAPP
				}),
				(0, i.jsx)(g.zx, {
					onClick: () => window.open(C.Z.getArticleURL(O.BhN.GIFTING), '_blank'),
					look: g.zx.Looks.LINK,
					color: g.zx.Colors.LINK,
					children: b.Z.Messages.GIFT_CODE_AUTH_INVALID_TIP
				})
			]
		});
	}
	renderAppOpened() {
		return (0, i.jsxs)(g.ZP, {
			children: [
				(0, i.jsx)(g.Dx, {
					className: D.marginBottom8,
					children: b.Z.Messages.APP_OPENED_TITLE
				}),
				(0, i.jsx)(g.DK, { children: b.Z.Messages.APP_OPENED_BODY }),
				(0, i.jsx)(g.zx, {
					className: D.marginTop40,
					onClick: () => this.setState({ continueOnWeb: !0 }),
					children: b.Z.Messages.GIFT_CODE_AUTH_CONTINUE_IN_BROWSER
				})
			]
		});
	}
	renderVerification(e) {
		let { sentVerification: t } = this.state;
		return (0, i.jsxs)(g.ZP, {
			children: [
				(0, i.jsx)(g.Ee, {
					src: n(892235),
					className: D.marginBottom8
				}),
				(0, i.jsx)(g.Dx, { children: b.Z.Messages.GIFT_CODE_AUTH_VERIFICATION_TITLE.format({ username: e.username }) }),
				(0, i.jsx)(g.DK, {
					className: D.marginTop20,
					children: b.Z.Messages.GIFT_CODE_AUTH_HELP_TEXT_VERIFICATION_REQUIRED
				}),
				(0, i.jsx)(g.zx, {
					disabled: t,
					className: D.marginTop40,
					onClick: this.handleResendVerification,
					children: t ? b.Z.Messages.GIFT_CODE_AUTH_VERIFICATION_SENT : b.Z.Messages.RESEND_VERIFICATION_EMAIL
				}),
				(0, i.jsx)(g.zx, {
					look: g.zx.Looks.LINK,
					color: g.zx.Colors.LINK,
					onClick: this.refreshUser,
					className: D.marginTop8,
					children: b.Z.Messages.GIFT_CODE_AUTH_CHECK_VERIFICATION_AGAIN
				})
			]
		});
	}
	renderAuthenticated(e, t) {
		let n = this.getErrorMessage(e);
		return (0, i.jsxs)(g.ZP, {
			children: [
				(0, i.jsx)(Z.Z, { giftCode: e }),
				(0, i.jsx)(g.zx, {
					disabled: null != n,
					className: D.marginTop40,
					onClick: this.handleAccept,
					children: b.Z.Messages.GIFT_CODE_AUTH_ACCEPT
				}),
				null != n
					? (0, i.jsx)(g.DK, {
							className: D.marginTop20,
							children: n
						})
					: (0, i.jsx)(g.i_, {
							className: D.marginTop20,
							children: b.Z.Messages.GIFT_CODE_AUTH_LOGGED_IN_AS.format({
								userTag: v.ZP.getUserTag(t),
								onLogoutClick: this.handleLogout
							})
						})
			]
		});
	}
	render() {
		let {
				nativeAppState: e,
				sku: t,
				authenticated: n,
				giftCode: s,
				isResolved: r,
				isAccepting: a,
				transitionTo: l,
				location: o
			} = this.props,
			{ fetchingUser: c, continueOnWeb: u } = this.state;
		if (e === O.kEZ.OPEN && !u) return this.renderAppOpened();
		if (e === O.kEZ.OPENING) return this.renderSpinner(b.Z.Messages.APP_OPENING);
		if (a) return this.renderSpinner(b.Z.Messages.GIFT_CODE_AUTH_ACCEPTING);
		if (null == s) return r ? this.renderExpiredInvite() : this.renderSpinner(b.Z.Messages.GIFT_CODE_AUTH_RESOLVING);
		if (r) {
			if (n) {
				let e = this.state.currentUser;
				return c || null == e
					? this.renderSpinner(b.Z.Messages.GIFT_CODE_AUTH_FETCHING_USER)
					: this.requiresVerification && null != e
						? this.renderVerification(e)
						: this.renderAuthenticated(s, e);
			}
			return 'login' === this.getMode()
				? (0, i.jsx)(S.Z, {
						giftCodeSKU: t,
						giftCode: s,
						transitionTo: l,
						location: o
					})
				: (0, i.jsx)(R.Z, {
						giftCodeSKU: t,
						giftCode: s,
						transitionTo: l,
						location: o
					});
		}
		return null;
	}
	constructor(...e) {
		super(...e),
			L(this, 'state', {
				error: null,
				continueOnWeb: !1,
				currentUser: null,
				sentVerification: !1,
				fetchingUser: !1
			}),
			L(this, 'refreshUser', () => {
				this.setState({ fetchingUser: !0 }),
					E.k({ withAnalyticsToken: !0 })
						.then((e) =>
							this.setState({
								currentUser: e,
								fetchingUser: !1
							})
						)
						.catch(() => this.setState({ fetchingUser: !1 }));
			}),
			L(this, 'handleLogout', () => {
				let e = this.props.match.params.giftCode;
				d.Z.logout(O.Z5c.GIFT_CODE_LOGIN(e));
			}),
			L(this, 'handleResendVerification', () => {
				d.Z.verifyResend(), this.setState({ sentVerification: !0 });
			}),
			L(this, 'handleAccept', async () => {
				let { transitionTo: e, giftCode: t } = this.props;
				if (null == t) throw Error('Trying to accept gift before resolve');
				let n = this.getCode();
				try {
					this.setState({ error: null }), await _.Z.redeemGiftCode({ code: n }), e(O.Z5c.APP);
				} catch (e) {
					this.setState({ error: e });
				}
			}),
			L(this, 'resolveGiftCode', () => {
				let { transitionTo: e } = this.props,
					t = this.getCode();
				_.Z.resolveGiftCode(t, !0, !0).then((n) => {
					null != n && null != n.giftCode.promotion && e(O.Z5c.BILLING_PROMOTION_REDEMPTION(t));
				});
			});
	}
}
t.Z = c.ZP.connectStores([N.Z, T.Z, m.default, x.Z, f.Z, p.Z], (e) => {
	let t = e.match.params.giftCode,
		n = N.Z.get(t),
		s = null != n ? x.Z.get(n.skuId) : null;
	return {
		giftCode: n,
		sku: s,
		libraryApplication:
			null != s && (null == n ? void 0 : n.entitlementBranches) != null ? A.z2(n.entitlementBranches, s, T.Z) : null,
		authenticated: m.default.isAuthenticated(),
		defaultRoute: f.Z.defaultRoute,
		isResolved: N.Z.getIsResolved(t),
		isAccepting: N.Z.getIsAccepting(t),
		libraryApplicationsFetched: T.Z.fetched,
		nativeAppState: p.Z.getState(t)
	};
})(M);
