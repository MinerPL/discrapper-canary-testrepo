var n = t(735250),
	a = t(470079),
	i = t(120356),
	r = t.n(i),
	o = t(442837),
	l = t(481060),
	c = t(570140),
	d = t(355467),
	_ = t(179360),
	E = t(496929),
	u = t(821849),
	I = t(230711),
	T = t(497321),
	S = t(167354),
	N = t(15640),
	C = t(600164),
	m = t(925329),
	A = t(406174),
	O = t(810762),
	g = t(681833),
	h = t(856888),
	p = t(921801),
	R = t(246946),
	x = t(663389),
	M = t(351402),
	f = t(853872),
	D = t(78839),
	P = t(580130),
	L = t(626135),
	b = t(74538),
	Z = t(639056),
	v = t(52164),
	j = t(91430),
	B = t(474936),
	U = t(981631),
	G = t(526761),
	F = t(726985),
	y = t(689938),
	V = t(897821);
function Y() {
	return (0, n.jsx)(l.Card, {
		className: V.noItemsCard,
		type: l.Card.Types.CUSTOM,
		children: (0, n.jsxs)(C.Z, {
			align: C.Z.Align.CENTER,
			children: [
				(0, n.jsx)(m.Z, {
					game: null,
					size: m.Z.Sizes.SMALL,
					className: V.noItemsIcon
				}),
				(0, n.jsx)('span', {
					className: V.cardText,
					children: y.Z.Messages.USER_SETTINGS_NO_SUBSCRIPTION_CREDIT
				})
			]
		})
	});
}
function w() {
	let e = (0, o.e7)([P.Z], () => P.Z.getForApplication(B.RQ));
	return (
		a.useEffect(() => {
			(0, E.yD)(B.RQ);
		}, []),
		(0, n.jsxs)('section', {
			className: V.sectionAccountCredit,
			children: [
				(0, n.jsx)(l.FormTitle, {
					className: V.accountCreditTitle,
					tag: l.FormTitleTags.H1,
					children: y.Z.Messages.BILLING_SUBSCRIPTION_CREDIT
				}),
				(0, n.jsx)('p', {
					className: V.accountCreditDescription,
					children: y.Z.Messages.BILLING_ACCOUNT_CREDIT_DESCRIPTION
				}),
				null != e && b.ZP.hasAccountCredit(e)
					? (0, n.jsx)(Z.Z, {
							className: V.accountCredit,
							entitlements: e
						})
					: (0, n.jsx)(Y, {})
			]
		})
	);
}
s.Z = function () {
	let e = (0, o.e7)([D.ZP], () => D.ZP.getPremiumTypeSubscription()),
		s = (0, S.Z)({ subscriptionFilter: (e) => j.eS.has(e.status) }),
		t = s.length > 1,
		i = (0, o.e7)([f.Z], () => (null != e && null != e.paymentSourceId ? f.Z.getPaymentSource(e.paymentSourceId) : null), [e]),
		E = (0, o.e7)([D.ZP], () => D.ZP.hasFetchedSubscriptions()),
		C = (0, o.e7)([M.Z], () => M.Z.isBusy),
		m = (0, N.V)(),
		P = (0, o.e7)([x.Z], () => x.Z.getSubsection());
	return (a.useEffect(
		() => (
			c.Z.wait(() => {
				(0, u.Y2)(), d.jg(), (0, _.X8)(), d.tZ();
			}),
			function () {
				I.Z.clearSubsection();
			}
		),
		[]
	),
	R.Z.enabled)
		? (0, n.jsx)(T.Z, {})
		: E && m
			? P === G.cP
				? (0, n.jsx)(O.Z, { onGoBack: () => I.Z.clearSubsection() })
				: P === G.XZ
					? (0, n.jsx)(h.Z, { onGoBack: () => I.Z.clearSubsection() })
					: (0, n.jsx)('div', {
							className: V.container,
							children: (0, n.jsxs)('div', {
								className: V.content,
								children: [
									t ? (0, n.jsx)(j.Yn, {}) : null,
									null != e
										? (0, n.jsx)(j.ZP, {
												className: V.subscriptionDetails,
												subscription: e,
												paymentSource: i,
												busy: C,
												subscriptions: s
											})
										: (0, n.jsx)(j.MM, { className: V.subscriptionDetails }),
									(0, n.jsx)(A.Z, { onClickManageSubscription: () => I.Z.setSection(U.oAB.SUBSCRIPTIONS, G.cP) }),
									(0, n.jsx)(g.Z, {
										onClickManageSubscription: () => {
											I.Z.setSection(U.oAB.SUBSCRIPTIONS, G.XZ), L.default.track(U.rMx.PREMIUM_APPLICATION_SUBSCRIPTION_MANAGE_CTA_CLICKED);
										}
									}),
									(0, n.jsx)(p.F, {
										setting: F.s6.SUBSCRIPTIONS_CREDITS,
										children: (0, n.jsx)(w, {})
									}),
									null != e
										? (0, n.jsx)(v.Z, {
												subscription: e,
												withOverheadSeparator: !1
											})
										: null
								]
							})
						})
			: (0, n.jsx)('div', {
					className: r()(V.container, V.loading),
					children: (0, n.jsx)(l.Spinner, {})
				});
};
