n.d(t, {
    Gv: function () {
        return A;
    },
    Wo: function () {
        return O;
    },
    vB: function () {
        return d;
    }
}), n(47120), n(653041);
var r = n(217986), a = n(133080), s = n(63063), u = n(937615), l = n(981631), i = n(231338), E = n(689938);
let _ = new Set([
        i.pK.ARS,
        i.pK.CLP,
        i.pK.COP
    ]), c = new Set([
        i.pK.USD,
        i.pK.JPY
    ]), O = {
        [l.HeQ.CARD]: () => E.Z.Messages.PAYMENT_SOURCE_CREDIT_CARD_CARD_ONLY,
        [l.HeQ.PAYPAL]: () => E.Z.Messages.PAYMENT_SOURCE_PAYPAL,
        [l.HeQ.SOFORT]: () => E.Z.Messages.PAYMENT_SOURCE_SOFORT,
        [l.HeQ.GIROPAY]: () => E.Z.Messages.PAYMENT_SOURCE_GIROPAY,
        [l.HeQ.PRZELEWY24]: () => E.Z.Messages.PAYMENT_SOURCE_PRZELEWY24,
        [l.HeQ.PAYSAFE_CARD]: () => E.Z.Messages.PAYMENT_SOURCE_PAYSAFE_CARD,
        [l.HeQ.GCASH]: () => E.Z.Messages.PAYMENT_SOURCE_GCASH,
        [l.HeQ.GRABPAY_MY]: () => E.Z.Messages.PAYMENT_SOURCE_GRABPAY,
        [l.HeQ.MOMO_WALLET]: () => E.Z.Messages.PAYMENT_SOURCE_MOMO_WALLET,
        [l.HeQ.VENMO]: () => E.Z.Messages.PAYMENT_SOURCE_VENMO,
        [l.HeQ.KAKAOPAY]: () => E.Z.Messages.PAYMENT_SOURCE_KAKAOPAY,
        [l.HeQ.GOPAY_WALLET]: () => E.Z.Messages.PAYMENT_SOURCE_GOPAY_WALLET,
        [l.HeQ.BANCONTACT]: () => E.Z.Messages.PAYMENT_SOURCE_BANCONTACT,
        [l.HeQ.EPS]: () => E.Z.Messages.PAYMENT_SOURCE_EPS,
        [l.HeQ.IDEAL]: () => E.Z.Messages.PAYMENT_SOURCE_IDEAL,
        [l.HeQ.CASH_APP]: () => E.Z.Messages.PAYMENT_SOURCE_CASH_APP_PAY,
        [l.HeQ.APPLE]: () => E.Z.Messages.PAYMENT_SOURCE_APPLE
    }, C = [
        l.HeQ.EPS,
        l.HeQ.BANCONTACT,
        l.HeQ.IDEAL,
        l.HeQ.SOFORT,
        l.HeQ.GIROPAY,
        l.HeQ.SEPA_DEBIT,
        l.HeQ.PAYSAFE_CARD
    ], A = (e, t, n, r) => {
        if (null == e)
            return '';
        let s = (0, a.q9)(e);
        if (t === i.pK.EUR)
            return n ? E.Z.Messages.LOCALIZED_PRICING_NOTICE_GENERALIZED_PAYMENT_METHODS_PROMO.format({ country: s }) : E.Z.Messages.LOCALIZED_PRICING_NOTICE_NO_LOWERED_PRICE.format({ currencyISOCode: t.toUpperCase() });
        return r ? E.Z.Messages.NOTICE_NITRO_PRICE_CHANGED.format({ countryName: s }) : E.Z.Messages.LOCALIZED_PRICING_NOTICE.format({ country: s });
    }, d = e => {
        let {
                localizedPricingPromo: t,
                subscription: n,
                forceSingleLine: r = !1,
                userLocale: A
            } = e, {
                countryCode: d,
                amount: N,
                currency: I,
                paymentSourceTypes: f
            } = t, R = 0 !== f.length, L = o(d), P = (0, u.T4)(N, I, {
                style: 'currency',
                currency: I,
                currencyDisplay: 'symbol',
                localeOverride: L
            }), h = E.Z.Messages.LOCALIZED_PRICING_BANNER_BODY_NEW_CURRENCY.format({
                helpCenterLink: s.Z.getArticleURL(l.BhN.LOCALIZED_PRICING),
                currencyISOCode: I.toUpperCase(),
                localizedPriceWithCurrencySymbol: P
            });
        if (c.has(I) && (h = E.Z.Messages.LOCALIZED_PRICING_BANNER_BODY_EXISTING_CURRENCY.format({
                helpCenterLink: s.Z.getArticleURL(l.BhN.LOCALIZED_PRICING),
                localizedPriceWithCurrencySymbol: P
            })), _.has(I) && (h = E.Z.Messages.LOCALIZED_PRICING_BANNER_BODY_NEW_CURRENCY_WITH_AMBIGUOUS_SYMBOL.format({
                helpCenterLink: s.Z.getArticleURL(l.BhN.LOCALIZED_PRICING),
                currencyISOCode: I.toUpperCase(),
                localizedPriceWithCurrencySymbol: P
            })), null != n && !n.hasPremiumNitroMonthly && (h = E.Z.Messages.LOCALIZED_PRICING_BANNER_BODY_WITHOUT_PRICE.format({
                helpCenterLink: s.Z.getArticleURL(l.BhN.LOCALIZED_PRICING),
                currencyISOCode: I.toUpperCase()
            })), I === i.pK.EUR && (h = r ? E.Z.Messages.LOCALIZED_PRICING_BANNER_NO_LOWERED_PRICE_SINGLE_STRING.format({
                country: (0, a.q9)(d),
                currencyISOCode: I.toUpperCase(),
                helpCenterLink: s.Z.getArticleURL(l.BhN.LOCALIZED_PRICING)
            }) : E.Z.Messages.LOCALIZED_PRICING_BANNER_NO_LOWERED_PRICE.format({
                currencyISOCode: I.toUpperCase(),
                helpCenterLink: s.Z.getArticleURL(l.BhN.LOCALIZED_PRICING)
            })), R) {
            let e = C.filter(e => f.includes(e)), t = [
                    ...e,
                    ...f.filter(e => !C.includes(e))
                ].slice(0, 2).map(e => {
                    var t, n;
                    return null !== (n = null === (t = O[e]) || void 0 === t ? void 0 : t.call(O)) && void 0 !== n ? n : E.Z.Messages.PAYMENT_SOURCE_UNKNOWN;
                });
            f.length >= 3 && t.push(E.Z.Messages.LOCALIZED_PRICING_MORE_NEW_WAYS_TO_PAY);
            let n = new Intl.ListFormat(A, {
                style: 'short',
                type: 'conjunction'
            });
            h = E.Z.Messages.LOCALIZED_PRICING_PAYMENT_METHODS_PROMO.format({
                helpCenterLink: s.Z.getArticleURL(l.BhN.LOCALIZED_PRICING),
                paymentMethods: n.format(t)
            });
        }
        return {
            localizedPricingBannerHeader: E.Z.Messages.LOCALIZED_PRICING_BANNER_HEADER.format({ country: (0, a.q9)(d) }),
            localizedPricingBannerBody: h,
            localizedPricingBannerLinkOnly: E.Z.Messages.LOCALIZED_PRICING_BANNER_LINK_ONLY.format({ helpCenterLink: s.Z.getArticleURL(l.BhN.LOCALIZED_PRICING) }),
            localizedPricingBannerSubNotif: R ? void 0 : E.Z.Messages.LOCALIZED_PRICING_BANNER_SUB_NOTIF
        };
    }, o = e => {
        let t = r.Z.find(t => t.alpha2 === e);
        return null == t ? void 0 : t.localeForICU;
    };
