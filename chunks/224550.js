t(411104);
var s = t(735250);
t(470079);
var r = t(858987),
	l = t(122289),
	i = t(63063),
	a = t(74538),
	c = t(937615),
	o = t(296848),
	u = t(981631),
	I = t(474936),
	_ = t(689938),
	E = t(191334);
n.Z = function (e) {
	let n, t, T, d;
	let { subscriptionPlan: N, isGift: M, isEmbeddedIAP: A, renewalInvoice: L, paymentSourceType: P, hide: R, purchaseType: S, productLine: m, basePrice: U, currentSubscription: p } = e;
	if (R) return null;
	let v = null == e.planGroup ? [] : e.planGroup;
	if (null != L) {
		let e = a.ZP.getIntervalForInvoice(L);
		(n = e.intervalType), (t = e.intervalCount), (T = (0, c.og)((0, c.T4)(L.total, L.currency), n, t)), (d = (0, c.og)((0, c.T4)(L.subtotal, L.currency), n, t));
	} else null != N && ((n = N.interval), (t = N.intervalCount));
	let C = (0, r.K)({
			purchaseType: S || u.GZQ.SUBSCRIPTION,
			plan: N,
			premiumSubscription: null == p ? null : p,
			isGift: !!M,
			planGroup: v,
			isPrepaidPaymentSource: !1
		}),
		O = '',
		h = '';
	if (A) {
		if (null != T && (null == L ? void 0 : L.subscriptionPeriodEnd) != null) O = _.Z.Messages.EMBEDDED_ACTIVITIES_IAP_NON_REFUNDABLE_SUBSCRIPTION_RATE_AND_RENEWAL_V2.format({ subtotalRate: d });
		else
			switch (n) {
				case I.rV.MONTH:
					O = 1 === t ? _.Z.Messages.EMBEDDED_ACTIVITIES_IAP_NON_REFUNDABLE_SUBSCRIPTION_MONTHLY_V2.format({}) : _.Z.Messages.EMBEDDED_ACTIVITIES_IAP_NON_REFUNDABLE_SUBSCRIPTION_MULTI_MONTH_V2.format({ intervalCount: t });
					break;
				case I.rV.YEAR:
					O = _.Z.Messages.EMBEDDED_ACTIVITIES_IAP_NON_REFUNDABLE_SUBSCRIPTION_YEARLY_V2.format({});
					break;
				case void 0:
					(h = _.Z.Messages.BILLING_LEGAL_MUMBO_JUMBO_TERMS_LABEL_V2.format({
						primaryText: C,
						paidURL: u.EYA.PAID_TERMS
					})),
						(O = _.Z.Messages.EMBEDDED_ACTIVITIES_IAP_NON_REFUNDABLE.format({}));
					break;
				default:
					throw Error('Unexpected interval: '.concat(n));
			}
	} else if (S === u.GZQ.ONE_TIME)
		(h = _.Z.Messages.BILLING_LEGAL_MUMBO_JUMBO_TERMS_LABEL_V3.format({
			primaryText: C,
			paidURL: u.EYA.PAID_TERMS
		})),
			(O = m === u.POd.COLLECTIBLES ? (M ? _.Z.Messages.COLLECTIBLES_PURCHASE_DISCLAIMER_GIFT_PAYMENT : _.Z.Messages.COLLECTIBLES_PURCHASE_DISCLAIMER_PAYMENT) : _.Z.Messages.ONE_TIME_PURCHASE_FINE_PRINT);
	else if (null == N || M)
		switch (
			(M &&
				(h = _.Z.Messages.BILLING_LEGAL_MUMBO_JUMBO_TERMS_LABEL_V2.format({
					primaryText: C,
					paidURL: u.EYA.PAID_TERMS
				})),
			n)
		) {
			case I.rV.MONTH:
				(O = M ? _.Z.Messages.PREMIUM_PAYMENT_GIFT_SUBTEXT_MONTHLY : _.Z.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_MONTHLY), (O = M ? _.Z.Messages.PREMIUM_PAYMENT_GIFT_SUBTEXT_MONTHLY : 1 === t ? _.Z.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_MONTHLY : _.Z.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_MULTI_MONTH.format({ intervalCount: t }));
				break;
			case I.rV.YEAR:
				O = M ? _.Z.Messages.PREMIUM_PAYMENT_GIFT_SUBTEXT_YEARLY : _.Z.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_YEARLY;
				break;
			case void 0:
				O = '';
				break;
			default:
				throw Error('Unexpected interval: '.concat(n));
		}
	else {
		let e;
		let s = (0, r.K)({
			purchaseType: u.GZQ.SUBSCRIPTION,
			plan: N,
			premiumSubscription: null == p ? null : p,
			isGift: !1,
			planGroup: v,
			isPrepaidPaymentSource: !1
		});
		if ((null != U && null != n && null != t && (e = (0, c.og)((0, c.T4)(U.amount, U.currency), n, t)), null == e)) {
			let e = Error('Missing base rate for legal fine print');
			(0, l.q2)(e, { tags: { planId: N.id } });
		}
		O = (null == p ? void 0 : p.isPaused)
			? _.Z.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_RESUME.format({
					primaryText: s,
					rate: e,
					paidURL: u.EYA.PAID_TERMS,
					contactLink: u.EYA.CONTACT,
					helpdeskArticle: i.Z.getArticleURL(u.BhN.BILLING)
				})
			: null != p && (0, o.GY)(p, N.id, v)
				? _.Z.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_PLAN_CHANGE_V2.format({
						primaryText: s,
						rate: e,
						paidURL: u.EYA.PAID_TERMS,
						contactLink: u.EYA.CONTACT,
						helpdeskArticle: i.Z.getArticleURL(u.BhN.BILLING)
					})
				: _.Z.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_V2.format({
						primaryText: s,
						rate: e,
						paidURL: u.EYA.PAID_TERMS,
						contactLink: u.EYA.CONTACT,
						helpdeskArticle: i.Z.getArticleURL(u.BhN.BILLING)
					});
	}
	return (0, s.jsxs)(s.Fragment, {
		children: [
			'' !== h &&
				(0, s.jsxs)('div', {
					children: [(0, s.jsx)('div', { children: h }), (0, s.jsx)('div', { className: E.divider })]
				}),
			'' !== O && (0, s.jsx)('div', { children: O }),
			P === u.HeQ.PAYSAFE_CARD &&
				(0, s.jsx)('div', {
					className: E.paymentSourceNoticeCopy,
					children: _.Z.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_PAYSAFECARD
				}),
			P === u.HeQ.SOFORT &&
				(0, s.jsxs)('div', {
					className: E.paymentSourceNoticeCopy,
					children: [_.Z.Messages.SOFORT_MANDATE_AGREEMENT, ' ']
				})
		]
	});
};
