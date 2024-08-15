a.d(n, {
	Gv: function () {
		return d;
	},
	Wo: function () {
		return u;
	},
	vB: function () {
		return c;
	}
}),
	a(47120),
	a(653041);
var t = a(217986),
	r = a(133080),
	o = a(63063),
	s = a(937615),
	l = a(981631),
	i = a(231338),
	_ = a(689938);
let C = new Set([i.pK.ARS, i.pK.CLP, i.pK.COP]),
	A = new Set([i.pK.USD, i.pK.JPY]),
	u = {
		[l.HeQ.CARD]: () => _.Z.Messages.PAYMENT_SOURCE_CREDIT_CARD_CARD_ONLY,
		[l.HeQ.PAYPAL]: () => _.Z.Messages.PAYMENT_SOURCE_PAYPAL,
		[l.HeQ.SOFORT]: () => _.Z.Messages.PAYMENT_SOURCE_SOFORT,
		[l.HeQ.GIROPAY]: () => _.Z.Messages.PAYMENT_SOURCE_GIROPAY,
		[l.HeQ.PRZELEWY24]: () => _.Z.Messages.PAYMENT_SOURCE_PRZELEWY24,
		[l.HeQ.PAYSAFE_CARD]: () => _.Z.Messages.PAYMENT_SOURCE_PAYSAFE_CARD,
		[l.HeQ.GCASH]: () => _.Z.Messages.PAYMENT_SOURCE_GCASH,
		[l.HeQ.GRABPAY_MY]: () => _.Z.Messages.PAYMENT_SOURCE_GRABPAY,
		[l.HeQ.MOMO_WALLET]: () => _.Z.Messages.PAYMENT_SOURCE_MOMO_WALLET,
		[l.HeQ.VENMO]: () => _.Z.Messages.PAYMENT_SOURCE_VENMO,
		[l.HeQ.KAKAOPAY]: () => _.Z.Messages.PAYMENT_SOURCE_KAKAOPAY,
		[l.HeQ.GOPAY_WALLET]: () => _.Z.Messages.PAYMENT_SOURCE_GOPAY_WALLET,
		[l.HeQ.BANCONTACT]: () => _.Z.Messages.PAYMENT_SOURCE_BANCONTACT,
		[l.HeQ.EPS]: () => _.Z.Messages.PAYMENT_SOURCE_EPS,
		[l.HeQ.IDEAL]: () => _.Z.Messages.PAYMENT_SOURCE_IDEAL,
		[l.HeQ.CASH_APP]: () => _.Z.Messages.PAYMENT_SOURCE_CASH_APP_PAY,
		[l.HeQ.APPLE]: () => _.Z.Messages.PAYMENT_SOURCE_APPLE
	},
	E = [l.HeQ.EPS, l.HeQ.BANCONTACT, l.HeQ.IDEAL, l.HeQ.SOFORT, l.HeQ.GIROPAY, l.HeQ.SEPA_DEBIT, l.HeQ.PAYSAFE_CARD],
	d = (e, n, a, t) => {
		if (null == e) return '';
		let o = (0, r.q9)(e);
		if (n === i.pK.EUR) return a ? _.Z.Messages.LOCALIZED_PRICING_NOTICE_GENERALIZED_PAYMENT_METHODS_PROMO.format({ country: o }) : _.Z.Messages.LOCALIZED_PRICING_NOTICE_NO_LOWERED_PRICE.format({ currencyISOCode: n.toUpperCase() });
		return t ? _.Z.Messages.NOTICE_NITRO_PRICE_CHANGED.format({ countryName: o }) : _.Z.Messages.LOCALIZED_PRICING_NOTICE.format({ country: o });
	},
	c = (e) => {
		let { localizedPricingPromo: n, subscription: a, forceSingleLine: t = !1, userLocale: d } = e,
			{ countryCode: c, amount: N, currency: p, paymentSourceTypes: y } = n,
			R = 0 !== y.length,
			O = P(c),
			f = (0, s.T4)(N, p, {
				style: 'currency',
				currency: p,
				currencyDisplay: 'symbol',
				localeOverride: O
			}),
			g = _.Z.Messages.LOCALIZED_PRICING_BANNER_BODY_NEW_CURRENCY.format({
				helpCenterLink: o.Z.getArticleURL(l.BhN.LOCALIZED_PRICING),
				currencyISOCode: p.toUpperCase(),
				localizedPriceWithCurrencySymbol: f
			});
		if (
			(A.has(p) &&
				(g = _.Z.Messages.LOCALIZED_PRICING_BANNER_BODY_EXISTING_CURRENCY.format({
					helpCenterLink: o.Z.getArticleURL(l.BhN.LOCALIZED_PRICING),
					localizedPriceWithCurrencySymbol: f
				})),
			C.has(p) &&
				(g = _.Z.Messages.LOCALIZED_PRICING_BANNER_BODY_NEW_CURRENCY_WITH_AMBIGUOUS_SYMBOL.format({
					helpCenterLink: o.Z.getArticleURL(l.BhN.LOCALIZED_PRICING),
					currencyISOCode: p.toUpperCase(),
					localizedPriceWithCurrencySymbol: f
				})),
			null != a &&
				!a.hasPremiumNitroMonthly &&
				(g = _.Z.Messages.LOCALIZED_PRICING_BANNER_BODY_WITHOUT_PRICE.format({
					helpCenterLink: o.Z.getArticleURL(l.BhN.LOCALIZED_PRICING),
					currencyISOCode: p.toUpperCase()
				})),
			p === i.pK.EUR &&
				(g = t
					? _.Z.Messages.LOCALIZED_PRICING_BANNER_NO_LOWERED_PRICE_SINGLE_STRING.format({
							country: (0, r.q9)(c),
							currencyISOCode: p.toUpperCase(),
							helpCenterLink: o.Z.getArticleURL(l.BhN.LOCALIZED_PRICING)
						})
					: _.Z.Messages.LOCALIZED_PRICING_BANNER_NO_LOWERED_PRICE.format({
							currencyISOCode: p.toUpperCase(),
							helpCenterLink: o.Z.getArticleURL(l.BhN.LOCALIZED_PRICING)
						})),
			R)
		) {
			let e = E.filter((e) => y.includes(e)),
				n = [...e, ...y.filter((e) => !E.includes(e))].slice(0, 2).map((e) => {
					var n, a;
					return null !== (a = null === (n = u[e]) || void 0 === n ? void 0 : n.call(u)) && void 0 !== a ? a : _.Z.Messages.PAYMENT_SOURCE_UNKNOWN;
				});
			y.length >= 3 && n.push(_.Z.Messages.LOCALIZED_PRICING_MORE_NEW_WAYS_TO_PAY);
			let a = new Intl.ListFormat(d, {
				style: 'short',
				type: 'conjunction'
			});
			g = _.Z.Messages.LOCALIZED_PRICING_PAYMENT_METHODS_PROMO.format({
				helpCenterLink: o.Z.getArticleURL(l.BhN.LOCALIZED_PRICING),
				paymentMethods: a.format(n)
			});
		}
		return {
			localizedPricingBannerHeader: _.Z.Messages.LOCALIZED_PRICING_BANNER_HEADER.format({ country: (0, r.q9)(c) }),
			localizedPricingBannerBody: g,
			localizedPricingBannerLinkOnly: _.Z.Messages.LOCALIZED_PRICING_BANNER_LINK_ONLY.format({ helpCenterLink: o.Z.getArticleURL(l.BhN.LOCALIZED_PRICING) }),
			localizedPricingBannerSubNotif: R ? void 0 : _.Z.Messages.LOCALIZED_PRICING_BANNER_SUB_NOTIF
		};
	},
	P = (e) => {
		let n = t.Z.find((n) => n.alpha2 === e);
		return null == n ? void 0 : n.localeForICU;
	};
