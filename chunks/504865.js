var r = n(735250);
n(470079);
var i = n(120356), a = n.n(i), o = n(442837), s = n(481060), l = n(911969), u = n(509545), c = n(78839), d = n(74538), _ = n(937615), E = n(104494), f = n(639119), h = n(230927), p = n(474936), m = n(689938), I = n(339959);
t.Z = function (e) {
    var t, n, i, T;
    let {
            subscriptionTier: g,
            interval: S = p.rV.MONTH,
            className: A,
            isGift: N = !1,
            variant: v,
            priceOptions: O,
            shouldUseModifiedCopy: R
        } = e, C = (0, E.z1)(), y = (0, f.N)(), D = (0, o.e7)([u.Z], () => u.Z.isLoadedForPremiumSKUs()), L = (0, o.e7)([c.ZP], () => c.ZP.getPremiumTypeSubscription()), {annualInvoicePreview: b} = (0, h.g)({
            priceOptions: null != O ? O : { currency: 'null' },
            preventFetch: null == C || null == O || null != y || g !== p.Si.TIER_2 || S !== p.rV.YEAR,
            selectedSkuId: p.Si.TIER_2,
            planGroup: p.Y1,
            activeSubscription: L
        }), M = null == b ? void 0 : null === (T = b.invoiceItems) || void 0 === T ? void 0 : null === (i = T.find(e => e.subscriptionPlanId === p.Xh.PREMIUM_YEAR_TIER_2)) || void 0 === i ? void 0 : null === (n = i.discounts) || void 0 === n ? void 0 : null === (t = n.find(e => e.type === l.eW.SUBSCRIPTION_PLAN)) || void 0 === t ? void 0 : t.amount;
    if (!D)
        return (0, r.jsx)(s.Spinner, {
            type: s.Spinner.Type.PULSING_ELLIPSIS,
            className: I.priceSpinner
        });
    let P = u.Z.getForSkuAndInterval((0, d.Wz)(g), S), U = null != M ? (0, d.aS)(p.Xh.PREMIUM_YEAR_TIER_2, !1, N, O) : null, w = null != P ? (0, d.gy)(P, O, !1, N) : null;
    return (0, r.jsx)(s.Heading, {
        color: 'always-white',
        variant: null != v ? v : 'heading-md/medium',
        className: a()(I.pricePerInterval, A),
        children: null != U && null != M ? (0, r.jsxs)('div', {
            className: I.annualDiscountString,
            children: [
                m.Z.Messages.BILLING_ANNUAL_DISCOUNT_TIER_CARD_YEARLY_PRICE.format({ discountedPrice: (0, _.T4)(U.amount - M, U.currency) }),
                m.Z.Messages.BILLING_ANNUAL_DISCOUNT_TIER_CARD_YEARLY_PRICE_SUBTEXT.format({ regularPrice: w })
            ]
        }) : (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)('span', {
                    className: R ? void 0 : I.price,
                    children: w
                }),
                ' / ',
                (0, d.eP)(S)
            ]
        })
    });
};
