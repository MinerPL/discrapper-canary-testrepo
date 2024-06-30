a.r(n), a(47120), a(411104);
var t = a(735250), r = a(470079), o = a(442837), i = a(780384), _ = a(481060), s = a(366939), I = a(911969), l = a(410030), c = a(100527), u = a(906732), d = a(583046), f = a(963249), N = a(853872), T = a(509545), E = a(626135), C = a(74538), R = a(937615), M = a(212895), O = a(296848), L = a(374649), m = a(973159), p = a(798769), A = a(317269), g = a(474936), P = a(981631), S = a(689938), h = a(978415);
n.default = e => {
    var n, a, b, U;
    let {
            daysLeft: Z,
            premiumType: B,
            premiumSubscription: G,
            analyticsSource: F,
            ...x
        } = e, H = (0, l.ZP)(), [D, W] = r.useState(!1), {analyticsLocations: y} = (0, u.ZP)(c.Z.PREMIUM_UNCANCEL_MODAL), Y = (0, o.e7)([N.Z], () => (null == G ? void 0 : G.paymentSourceId) != null ? N.Z.getPaymentSource(G.paymentSourceId) : null, [G]), v = G.items[0].planId, k = (0, C.Wz)(g.GP[v].skuId), {priceOptions: j} = (0, d.Z)({
            activeSubscription: null,
            skuIDs: [k],
            paymentSourceId: null == G ? void 0 : G.paymentSourceId,
            isGift: !1
        }), [w] = (0, L.ED)({
            subscriptionId: G.id,
            items: [{
                    planId: v,
                    quantity: 1
                }],
            renewal: !0,
            paymentSourceId: null == G ? void 0 : G.paymentSourceId,
            currency: j.currency,
            analyticsLocations: (0, u.ZP)(c.Z.PREMIUM_UNCANCEL_MODAL),
            analyticsLocation: c.Z.PREMIUM_UNCANCEL_MODAL
        }), K = (0, o.e7)([T.Z], () => (0, O.oE)(v), [v]), X = (0, o.e7)([T.Z], () => T.Z.isFetchingForSKU(k)), z = null == w ? void 0 : null === (U = w.invoiceItems) || void 0 === U ? void 0 : null === (b = U.find(e => e.subscriptionPlanId === v)) || void 0 === b ? void 0 : null === (a = b.discounts) || void 0 === a ? void 0 : null === (n = a.find(e => e.type === I.eW.SUBSCRIPTION_PLAN)) || void 0 === n ? void 0 : n.amount, Q = null != K ? (0, C.aS)(K.id, !1, !1, j) : null, V = null != Q && null != z ? (0, R.T4)(Q.amount - (null != z ? z : 0), Q.currency) : null, {
            intervalType: q,
            intervalCount: J
        } = C.ZP.getInterval(v), $ = B === g.p9.TIER_1, ee = null != Q ? (0, R.T4)(Q.amount, Q.currency) : null;
    return r.useEffect(() => {
        E.default.track(P.rMx.OPEN_MODAL, {
            type: 'Premium Uncancel Winback',
            source: F
        });
    }, [F]), (0, t.jsx)(_.ModalRoot, {
        ...x,
        className: h.modal,
        children: D ? (0, t.jsxs)(t.Fragment, {
            children: [
                (0, t.jsx)(p.Z, {
                    premiumType: B,
                    onClose: x.onClose
                }),
                (0, t.jsx)(A.ZP, {
                    planId: v,
                    onClose: x.onClose,
                    paymentSourceType: null == Y ? void 0 : Y.type
                })
            ]
        }) : (0, t.jsx)(m.Z, {
            premiumType: B,
            titleText: $ ? S.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_TITLE_TIER_1.format({ daysLeft: Z }) : S.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_TITLE.format({ daysLeft: Z }),
            subtitleText: $ ? S.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_SUBTITLE_TIER_1.format() : S.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_SUBTITLE.format(),
            footer: (0, t.jsxs)('div', {
                children: [
                    null !== ee ? (0, t.jsx)(_.Text, {
                        variant: 'text-sm/normal',
                        children: function (e) {
                            switch (q) {
                            case g.rV.YEAR:
                                return $ ? S.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_YEARLY_TIER_1.format({ price: e }) : S.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_YEARLY.format({ price: e });
                            case g.rV.MONTH:
                                if (null != V)
                                    return S.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_DISCOUNT_PRICE_FOOTER.format({
                                        discountPrice: V,
                                        defaultPrice: e
                                    });
                                if ($)
                                    return S.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_MONTHLY_TIER_1.format({ price: e });
                                if (1 === J)
                                    return S.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_MONTHLY.format({ price: e });
                                else
                                    return S.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_MULTI_MONTH.format({
                                        price: e,
                                        intervalCount: J
                                    });
                            default:
                                throw Error('Unknown interval type '.concat(q));
                            }
                        }(ee)
                    }) : (0, t.jsx)(_.Spinner, { type: _.SpinnerTypes.SPINNING_CIRCLE }),
                    (0, t.jsxs)('div', {
                        className: h.footer,
                        children: [
                            (0, t.jsx)(_.Button, {
                                disabled: X,
                                onClick: () => {
                                    if (null != G) {
                                        let e = (0, M.tD)(v, G.currency, null == Y ? void 0 : Y.id);
                                        null != Y && Y.id === G.paymentSourceId && e ? (s.O5(G, y, P.Sbl.UNCANCEL_WINBACK_MODAL), W(!0)) : (x.onClose(), (0, f.Z)({
                                            initialPlanId: v,
                                            analyticsLocations: y,
                                            analyticsLocation: P.Sbl.UNCANCEL_WINBACK_MODAL
                                        }));
                                    }
                                },
                                children: S.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_BUTTON_KEEP_NITRO
                            }),
                            (0, t.jsx)(_.Button, {
                                look: _.Button.Looks.LINK,
                                color: (0, i.wj)(H) ? _.Button.Colors.WHITE : _.Button.Colors.PRIMARY,
                                onClick: x.onClose,
                                children: S.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_BUTTON_CANCEL
                            })
                        ]
                    })
                ]
            }),
            onClose: x.onClose
        })
    });
};
