t(47120);
var n = t(735250),
	a = t(470079),
	i = t(120356),
	r = t.n(i),
	o = t(544891),
	l = t(780384),
	c = t(481060),
	d = t(410030),
	_ = t(63063),
	E = t(74538),
	u = t(937615),
	I = t(230916),
	T = t(798769),
	S = t(474936),
	N = t(981631),
	C = t(689938),
	m = t(956554),
	A = t(982404),
	O = t(299156);
s.Z = function (e) {
	let { premiumSubscription: s, premiumType: t, onClose: i, onConfirm: g, userDiscountOffer: h } = e,
		[p, R] = a.useState(!1),
		[x, M] = a.useState(!1),
		f = async (e) => {
			try {
				M(!0),
					R(!1),
					await o.tn.post({
						url: N.ANM.USER_OFFER_REDEEM,
						body: { user_discount_offer_id: e }
					}),
					g();
			} catch (e) {
				R(!0);
			}
			M(!1);
		},
		D = (0, d.ZP)(),
		P = (0, l.wj)(D) ? A : O,
		L = (0, I._)(s, S.Xh.PREMIUM_MONTH_TIER_2, h),
		b = (0, E.aS)(S.Xh.PREMIUM_MONTH_TIER_2),
		Z = (0, u.T4)(b.amount, b.currency);
	return null == h
		? null
		: (0, n.jsxs)(n.Fragment, {
				children: [
					(0, n.jsx)(T.Z, {
						premiumType: t,
						onClose: i
					}),
					(0, n.jsx)(c.ModalContent, {
						className: m.body,
						children: (0, n.jsxs)('div', {
							className: m.confirmDiscountContent,
							children: [
								(0, n.jsx)(c.Heading, {
									variant: 'heading-xl/bold',
									children: C.Z.Messages.CHURN_DISCOUNT_CONFIRM_HEADER.format({ percent: h.discount.amount })
								}),
								(0, n.jsxs)('div', {
									className: m.confirmDiscountDescription,
									children: [
										(0, n.jsx)('img', {
											alt: '',
											src: P,
											className: m.confirmDiscountIcon
										}),
										(0, n.jsx)(c.Text, {
											variant: 'text-sm/medium',
											children: C.Z.Messages.CHURN_DISCOUNT_CONFIRM_DESCRIPTION.format({
												percent: h.discount.amount,
												numMonths: h.discount.user_usage_limit,
												price: Z
											})
										})
									]
								}),
								(0, n.jsx)('div', {
									className: m.confirmDiscountLegalese,
									children: (0, n.jsx)(c.Text, {
										variant: 'text-xs/semibold',
										className: m.confirmDiscountLegaleseText,
										children: C.Z.Messages.CHURN_DISCOUNT_CONFIRM_LEGALESE.format({
											discountedPrice: L,
											billingPeriod: (0, E.JP)(h.discount.user_usage_limit_interval),
											numMonths: h.discount.user_usage_limit,
											fullPrice: Z,
											helpdeskArticle: _.Z.getArticleURL(N.BhN.PAID_TERMS)
										})
									})
								}),
								p &&
									(0, n.jsx)('div', {
										className: m.redemptionFailedMessage,
										children: (0, n.jsx)(c.Text, {
											variant: 'text-xs/semibold',
											className: m.redemptionFailedMessageCopy,
											children: C.Z.Messages.CHURN_DISCOUNT_REDEMPTION_ERROR
										})
									}),
								(0, n.jsxs)('div', {
									className: r()(m.confirmDiscountButtons, {
										[m.confrimDiscountsButtonsError]: p,
										[m.confrimDiscountsButtonsNoError]: !p
									}),
									children: [
										(0, n.jsx)(c.Button, {
											look: c.ButtonLooks.LINK,
											onClick: () => i(),
											children: C.Z.Messages.CHURN_DISCOUNT_NEVERMIND
										}),
										(0, n.jsx)(c.Button, {
											size: c.ButtonSizes.SMALL,
											submitting: x,
											onClick: () => f(h.id),
											children: C.Z.Messages.CHURN_DISCOUNT_CONFIRM_DISCOUNT
										})
									]
								})
							]
						})
					})
				]
			});
};
