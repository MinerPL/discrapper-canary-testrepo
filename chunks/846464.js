t.d(n, {
    q: function () {
        return I;
    }
});
var i = t(735250);
t(470079);
var r = t(120356), o = t.n(r), a = t(481060), s = t(140465), l = t(424082), d = t(639119), c = t(55610), C = t(973007), u = t(74538), _ = t(987209), p = t(598), f = t(409813), x = t(614223), h = t(48175), b = t(474936), g = t(689938), m = t(738892);
function I(e) {
    let {
            handleStepChange: n,
            handleClose: t,
            referralTrialOfferId: r
        } = e, {
            setSelectedSkuId: o,
            activeSubscription: a,
            startedPaymentFlowWithPaymentSourcesRef: c,
            setSelectedPlanId: C,
            priceOptions: g
        } = (0, p.usePaymentContext)(), {isGift: m} = (0, _.wD)(), I = (0, d.N)(r);
    (0, l.Uh)('PremiumPaymentSKUSelectStep', null == I);
    let E = (0, s.Nx)();
    return (0, i.jsx)(L, {
        selectSku: e => function (e) {
            let {
                activeSubscription: n,
                newSkuId: t,
                setSelectedSkuId: i,
                handleStepChange: r,
                isGift: o,
                userTrialOffer: a,
                setSelectedPlanId: s,
                startedPaymentFlowWithPaymentSources: l
            } = e;
            i(t);
            let d = f.h8.PLAN_SELECT, c = (0, u.k5)(n);
            (c === b.Si.TIER_1 || c === b.Si.TIER_2) && t === b.Si.TIER_0 && !o && (d = f.h8.WHAT_YOU_LOSE);
            let C = (0, h.T)({
                    userTrialOffer: a,
                    isGift: o,
                    skuId: t
                }), _ = (0, x.Kp)({
                    isTrial: C,
                    isGift: o,
                    selectedSkuId: t,
                    startedPaymentFlowWithPaymentSources: l
                });
            d !== f.h8.WHAT_YOU_LOSE && _ && (d = f.h8.REVIEW, s((0, x.nA)(t, n))), r(d, { analyticsDataOverride: { sku_id: t } });
        }({
            activeSubscription: a,
            newSkuId: e,
            setSelectedSkuId: o,
            handleStepChange: n,
            isGift: m,
            userTrialOffer: I,
            startedPaymentFlowWithPaymentSources: c.current,
            setSelectedPlanId: C
        }),
        onClose: t,
        isGift: m,
        inOfferExperience: E,
        priceOptions: g
    });
}
function L(e) {
    let {
        selectSku: n,
        onClose: t,
        isGift: r,
        inOfferExperience: s,
        priceOptions: l
    } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(a.ModalHeader, {
                className: m.skuSelectModalHeader,
                separator: !1,
                children: [
                    (0, i.jsx)(a.FormTitle, {
                        tag: a.FormTitleTags.H4,
                        children: g.Z.Messages.BILLING_STEP_SELECT_PLAN
                    }),
                    (0, i.jsx)(a.ModalCloseButton, { onClick: t })
                ]
            }),
            (0, i.jsxs)(a.ModalContent, {
                className: o()(m.skuSelectModalContent, { [m.modalPadding]: s }),
                children: [
                    (0, i.jsx)(c.Z, {
                        fromBoostCancelModal: !1,
                        className: m.legacyPricingNotice
                    }),
                    (0, i.jsx)(C.Z, {
                        onSelectSku: e => n((0, u.Wz)(e)),
                        isGift: r,
                        priceOptions: l
                    })
                ]
            })
        ]
    });
}
