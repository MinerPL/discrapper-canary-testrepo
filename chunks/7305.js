t.r(n), t.d(n, {
    PremiumPaymentModal: function () {
        return R;
    },
    STEPS: function () {
        return v;
    },
    default: function () {
        return B;
    }
}), t(411104), t(47120);
var i = t(735250), r = t(470079), o = t(442837), a = t(570140), s = t(821849), l = t(100527), d = t(906732), c = t(509545), C = t(78839), u = t(669079), _ = t(987209), p = t(598), f = t(409813), x = t(791785), h = t(276442), b = t(793541), g = t(380898), m = t(710094), I = t(293858), L = t(614223), E = t(174827), M = t(846464), T = t(184160), N = t(48175), S = t(981631), j = t(474936), A = t(689938);
let O = [
    f.h8.PLAN_SELECT,
    f.h8.ADD_PAYMENT_STEPS,
    f.h8.REVIEW,
    f.h8.CONFIRM
];
function R(e) {
    let {
            analyticsLocation: n,
            analyticsObject: t,
            analyticsSourceLocation: o,
            onComplete: l,
            transitionState: C,
            initialPlanId: h,
            subscriptionTier: b,
            onClose: g,
            trialId: m,
            trialFooterMessageOverride: I,
            reviewWarningMessage: L,
            openInvoiceId: E,
            onSubscriptionConfirmation: M,
            renderPurchaseConfirmation: T,
            postSuccessGuild: N,
            followupSKUInfo: A,
            renderHeader: O,
            applicationId: R,
            guildId: P,
            referralTrialOfferId: y,
            skuId: v,
            returnRef: B,
            skipConfirm: k = !1,
            continueSession: Z = !1
        } = e, {analyticsLocations: H} = (0, d.ZP)();
    r.useEffect(() => {
        !c.Z.isLoadedForPremiumSKUs() && a.Z.wait(() => (0, s.Y2)());
    }, []);
    let {step: U} = (0, p.usePaymentContext)(), {
            isGift: F,
            giftMessage: w,
            giftRecipient: G
        } = (0, _.wD)(), W = F && (0, u.pO)(G) && U === f.h8.PLAN_SELECT;
    return (0, i.jsx)(x.PaymentModal, {
        analyticsLocations: H,
        analyticsLocation: n,
        analyticsObject: t,
        analyticsSourceLocation: o,
        analyticsSubscriptionType: S.NYc.PREMIUM,
        onComplete: l,
        transitionState: C,
        initialPlanId: h,
        giftMessage: w,
        subscriptionTier: b,
        onClose: g,
        trialId: m,
        isGift: F,
        trialFooterMessageOverride: I,
        reviewWarningMessage: L,
        planGroup: j.Y1,
        openInvoiceId: E,
        onSubscriptionConfirmation: M,
        renderPurchaseConfirmation: T,
        postSuccessGuild: N,
        followupSKUInfo: A,
        renderHeader: O,
        applicationId: R,
        guildId: P,
        referralTrialOfferId: y,
        skuId: v,
        shakeWhilePurchasing: !0,
        isLargeModal: W,
        returnRef: B,
        skipConfirm: k,
        continueSession: Z
    });
}
function P(e) {
    let {
            startedPaymentFlowWithPaymentSourcesRef: n,
            selectedSkuId: t
        } = (0, p.usePaymentContext)(), {isGift: i} = (0, _.wD)();
    return (0, L.Kp)({
        isTrial: null != e && e,
        isGift: i,
        selectedSkuId: t,
        startedPaymentFlowWithPaymentSources: n.current
    });
}
function y(e) {
    let {
            initialPlanId: n,
            handleStepChange: t,
            referralTrialOfferId: r
        } = e, {
            paymentSources: o,
            selectedSkuId: a
        } = (0, p.usePaymentContext)(), {isGift: s} = (0, _.wD)(), l = P((0, N.Z)({
            isGift: s,
            skuId: a,
            referralTrialOfferId: r
        }));
    return (0, i.jsx)(i.Fragment, {
        children: (0, i.jsx)(h.J, {
            ...e,
            breadcrumbSteps: O,
            onReturn: () => {
                let e = Object.values(o).length < 1 && null == n ? f.h8.PLAN_SELECT : f.h8.REVIEW;
                l && (e = f.h8.REVIEW), t(e, { trackedFromStep: f.h8.PAYMENT_TYPE });
            }
        })
    });
}
let v = [
    {
        key: null,
        renderStep: e => (0, i.jsx)(x.PaymentPredicateStep, { ...e })
    },
    {
        key: f.h8.SKU_SELECT,
        renderStep: e => (0, i.jsx)(M.q, { ...e }),
        options: {
            renderHeader: !1,
            hideSlider: !0
        }
    },
    {
        key: f.h8.WHAT_YOU_LOSE,
        renderStep: e => (0, i.jsx)(T.x, { ...e }),
        options: {
            renderHeader: !1,
            hideSlider: !0
        }
    },
    {
        key: f.h8.PLAN_SELECT,
        renderStep: e => (0, i.jsx)(E.x, { ...e }),
        options: {
            renderHeader: !0,
            useBreadcrumbLabel: e => P(e) ? null : A.Z.Messages.BILLING_STEP_SELECT_PLAN
        }
    },
    {
        key: f.h8.ADD_PAYMENT_STEPS,
        renderStep: e => (0, i.jsx)(i.Fragment, { children: (0, i.jsx)(y, { ...e }) }),
        options: {
            renderHeader: !0,
            useBreadcrumbLabel: e => P(e) ? null : A.Z.Messages.BILLING_STEP_PAYMENT
        }
    },
    {
        key: f.h8.AWAITING_PURCHASE_TOKEN_AUTH,
        renderStep: () => (0, i.jsx)(g.Z, {})
    },
    {
        key: f.h8.AWAITING_AUTHENTICATION,
        renderStep: () => (0, i.jsx)(b.Z, {})
    },
    {
        key: f.h8.REVIEW,
        renderStep: e => (0, i.jsx)(m.l, { ...e }),
        options: {
            renderHeader: !0,
            useBreadcrumbLabel: e => P(e) ? A.Z.Messages.BILLING_STEP_PLAN_AND_PAYMENT : A.Z.Messages.BILLING_STEP_REVIEW
        }
    },
    {
        key: f.h8.CONFIRM,
        renderStep: e => (0, i.jsx)(I.b, { ...e })
    }
];
function B(e) {
    let n = (0, o.e7)([C.ZP], () => C.ZP.getPremiumTypeSubscription()), {analyticsLocations: t} = (0, d.ZP)(e.analyticsLocations, l.Z.PREMIUM_PAYMENT_MODAL), {
            subscriptionTier: r,
            isGift: a,
            giftRecipient: s,
            giftMessage: c,
            loadId: u,
            defaultPlanId: f,
            referralCode: x
        } = e;
    if (null != r && !Object.values(j.Si).includes(r))
        throw Error('subscriptionTier must be a premium subscription');
    return (0, i.jsx)(d.Gt, {
        value: t,
        children: (0, i.jsx)(p.PaymentContextProvider, {
            loadId: u,
            activeSubscription: null != e.subscription ? e.subscription : n,
            stepConfigs: v,
            skuIDs: [...j.YQ],
            isGift: a,
            defaultPlanId: f,
            referralCode: x,
            children: (0, i.jsx)(_.KB, {
                isGift: a,
                giftRecipient: null == s ? void 0 : s,
                giftMessage: c,
                children: (0, i.jsx)(R, { ...e })
            })
        })
    });
}
