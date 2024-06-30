s.d(n, {
    J: function () {
        return E;
    }
});
var l = s(512722), i = s.n(l), t = s(792986), r = s(639119), a = s(3409), c = s(626135), o = s(987209), u = s(598), d = s(409813), _ = s(737143), m = s(981631), I = s(474936);
function E(e) {
    let {
            analyticsData: n,
            initialPlanId: s,
            breadcrumbSteps: l,
            handleStepChange: E,
            referralTrialOfferId: p,
            onReturn: N,
            continueSession: T = !1
        } = e, {
            contextMetadata: S,
            step: x,
            paymentSources: h,
            paymentSourceId: P,
            setPaymentSourceId: A,
            purchaseError: v,
            setPurchaseError: f,
            purchaseErrorBlockRef: M,
            paymentAuthenticationState: g,
            selectedSkuId: C,
            activeSubscription: R,
            previousStepRef: O
        } = (0, u.usePaymentContext)(), {isGift: L} = (0, o.wD)(), j = {
            ...(0, a.fL)(),
            paymentSources: h,
            paymentSourceId: P,
            setPaymentSourceId: A,
            purchaseError: v,
            setPurchaseError: f,
            purchaseErrorBlockRef: M,
            paymentAuthenticationState: g,
            selectedSkuId: C,
            isGift: L
        }, y = (0, r.N)(p), Z = !L && null != y && null != C && I.nG[y.trial_id].skus.includes(C), b = null != N ? N : () => {
            E(Object.values(h).length < 1 && null == s ? d.h8.PLAN_SELECT : d.h8.REVIEW, { trackedFromStep: d.h8.PAYMENT_TYPE });
        };
    i()(x, 'Step should be set here');
    let D = (0, t.Z)(() => Date.now(), [x]);
    return (0, a.vP)({
        paymentModalArgs: j,
        initialStep: T && null == O.current ? d.h8.CREDIT_CARD_INFORMATION : d.h8.PAYMENT_TYPE,
        prependSteps: [d.h8.PROMOTION_INFO],
        appendSteps: [
            d.h8.REVIEW,
            d.h8.CONFIRM
        ],
        breadcrumpSteps: l,
        currentBreadcrumpStep: x,
        usePaymentModalStep: !0,
        onReturn: b,
        onComplete: e => {
            e === d.h8.AWAITING_BROWSER_CHECKOUT ? E(d.h8.CONFIRM, { trackedFromStep: e }) : E(d.h8.REVIEW, { trackedFromStep: e });
        },
        onStepChange: e => {
            let {
                    currentStep: s,
                    toStep: l
                } = e, i = Date.now();
            c.default.track(m.rMx.PAYMENT_FLOW_STEP, {
                ...n,
                from_step: s,
                to_step: l,
                step_duration_ms: i - D,
                flow_duration_ms: i - S.startTime
            });
        },
        isEligibleForTrial: Z,
        allowDesktopRedirectPurchase: (0, _.tr)(C, L, R)
    });
}
