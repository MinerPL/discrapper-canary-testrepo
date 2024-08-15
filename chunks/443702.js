t.d(s, {
	Z: function () {
		return f;
	}
});
var n = t(735250),
	a = t(470079),
	i = t(512722),
	r = t.n(i),
	o = t(442837),
	l = t(481060),
	c = t(570140),
	d = t(355467),
	_ = t(230711),
	E = t(497321),
	u = t(231428),
	I = t(390954),
	T = t(89057),
	S = t(921801),
	N = t(246946),
	C = t(594174),
	m = t(351402),
	A = t(853872),
	O = t(78839),
	g = t(706454),
	h = t(726985),
	p = t(981631),
	R = t(689938),
	x = t(451723);
class M extends a.PureComponent {
	componentDidMount() {
		c.Z.wait(() => {
			d.tZ(), d.jg();
		});
	}
	handleRedemptionRedirect() {
		_.Z.setSection(p.oAB.INVENTORY);
	}
	render() {
		let {
			syncing: e,
			hide: s,
			paymentSources: t,
			defaultPaymentSourceId: a,
			locale: i,
			premiumSubscription: r,
			isRemovingPaymentSource: o,
			isUpdatingPaymentSource: c
		} = this.props;
		return s
			? (0, n.jsx)(E.Z, {})
			: (0, n.jsxs)('div', {
					className: x.__invalid_userSettingsBilling,
					children: [
						e && 0 === Object.keys(t).length
							? (0, n.jsx)('div', {
									className: x.syncing,
									children: (0, n.jsx)(l.Spinner, {})
								})
							: (0, n.jsx)(S.F, {
									setting: h.s6.BILLING_PAYMENT_METHODS,
									children: (0, n.jsx)(I.Z, {
										paymentSources: t,
										defaultPaymentSourceId: a,
										premiumSubscriptionPaymentSourceId:
											null != r && r.status !== p.O0b.CANCELED ? r.paymentSourceId : null,
										locale: i,
										removing: o,
										submitting: c
									})
								}),
						(0, n.jsx)(S.F, {
							setting: h.s6.BILLING_TRANSACTION_HISTORY,
							children: (0, n.jsx)('div', {
								className: x.paymentHistory,
								children: (0, n.jsxs)(l.HeadingLevel, {
									component: (0, n.jsx)(l.FormTitle, {
										tag: 'h1',
										children: R.Z.Messages.BILLING_PAYMENT_HISTORY
									}),
									children: [(0, n.jsx)(T.oQ, {}), (0, n.jsx)(u.Z, { locale: i })]
								})
							})
						}),
						(0, n.jsx)(l.Card, {
							className: x.codeRedemptionRedirect,
							type: l.Card.Types.CUSTOM,
							children: R.Z.Messages.BILLING_CODE_REDEMPTION_REDIRECT.format({ onClick: this.handleRedemptionRedirect })
						})
					]
				});
	}
}
function f() {
	let e = (0, o.cj)([g.default, m.Z, A.Z, C.default, N.Z, O.ZP], () => {
		let e = O.ZP.getPremiumTypeSubscription(),
			s = C.default.getCurrentUser();
		return (
			r()(null != s, 'UserSettingsBilling: currentUser cannot be undefined'),
			{
				locale: g.default.locale,
				hide: N.Z.enabled,
				isClaimed: s.isClaimed(),
				isVerified: s.verified,
				premiumSubscription: e,
				defaultPaymentSourceId: A.Z.defaultPaymentSourceId,
				paymentSources: A.Z.paymentSources,
				syncing: m.Z.isSyncing,
				isRemovingPaymentSource: m.Z.isRemovingPaymentSource,
				isUpdatingPaymentSource: m.Z.isUpdatingPaymentSource
			}
		);
	});
	return (0, n.jsx)(M, { ...e });
}
