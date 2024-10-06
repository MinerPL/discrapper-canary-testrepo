n.d(s, {
    q: function () {
        return M;
    }
});
var t = n(735250);
n(470079);
var r = n(120356),
    i = n.n(r),
    l = n(481060),
    a = n(140465),
    o = n(857039),
    C = n(639119),
    d = n(55610),
    c = n(973007),
    u = n(74538),
    _ = n(987209),
    p = n(598),
    x = n(409813),
    h = n(614223),
    L = n(48175),
    f = n(474936),
    I = n(689938),
    E = n(885032);
function M(e) {
    let { handleStepChange: s, handleClose: n, referralTrialOfferId: r } = e,
        { setSelectedSkuId: i, activeSubscription: l, startedPaymentFlowWithPaymentSourcesRef: d, setSelectedPlanId: c, priceOptions: I } = (0, p.usePaymentContext)(),
        { isGift: E } = (0, _.wD)(),
        M = (0, o.Z)({ location: 'Payment SKU Selection' }),
        j = (0, C.N)(r),
        g = (0, a.Nx)();
    return (0, t.jsx)(N, {
        selectSku: (e) =>
            (function (e) {
                let { activeSubscription: s, newSkuId: n, setSelectedSkuId: t, handleStepChange: r, isGift: i, userTrialOffer: l, setSelectedPlanId: a, startedPaymentFlowWithPaymentSources: o } = e;
                t(n);
                let C = x.h8.PLAN_SELECT,
                    d = (0, u.k5)(s);
                (d === f.Si.TIER_1 || d === f.Si.TIER_2) && n === f.Si.TIER_0 && !i && (C = x.h8.WHAT_YOU_LOSE);
                let c = (0, L.T)({
                        userTrialOffer: l,
                        isGift: i,
                        skuId: n
                    }),
                    _ = (0, h.Kp)({
                        isTrial: c,
                        isGift: i,
                        selectedSkuId: n,
                        startedPaymentFlowWithPaymentSources: o
                    });
                C !== x.h8.WHAT_YOU_LOSE && _ && ((C = x.h8.REVIEW), a((0, h.nA)(n, s))), r(C, { analyticsDataOverride: { sku_id: n } });
            })({
                activeSubscription: l,
                newSkuId: e,
                setSelectedSkuId: i,
                handleStepChange: s,
                isGift: E,
                userTrialOffer: j,
                startedPaymentFlowWithPaymentSources: d.current,
                setSelectedPlanId: c
            }),
        onClose: n,
        isGift: E,
        inOfferExperience: g,
        priceOptions: I,
        shouldShowHalloweenTier2Card: M
    });
}
function N(e) {
    let { selectSku: s, onClose: n, isGift: r, inOfferExperience: a, priceOptions: o, shouldShowHalloweenTier2Card: C } = e;
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsxs)(l.ModalHeader, {
                className: E.skuSelectModalHeader,
                separator: !1,
                children: [
                    (0, t.jsx)(l.FormTitle, {
                        tag: l.FormTitleTags.H4,
                        children: I.Z.Messages.BILLING_STEP_SELECT_PLAN
                    }),
                    (0, t.jsx)(l.ModalCloseButton, { onClick: n })
                ]
            }),
            (0, t.jsxs)(l.ModalContent, {
                className: i()(E.skuSelectModalContent, { [E.modalPadding]: a }),
                children: [
                    (0, t.jsx)(d.Z, {
                        fromBoostCancelModal: !1,
                        className: E.legacyPricingNotice
                    }),
                    (0, t.jsx)(c.Z, {
                        onSelectSku: (e) => s((0, u.Wz)(e)),
                        isGift: r,
                        priceOptions: o,
                        shouldShowHalloweenTier2Card: C
                    })
                ]
            })
        ]
    });
}
