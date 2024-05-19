"use strict";
n.r(t), n.d(t, {
  PaymentModalAddPaymentStep: function() {
    return p
  }
});
var i = n("512722"),
  s = n.n(i),
  l = n("207561"),
  a = n("639119"),
  r = n("3409"),
  u = n("626135"),
  o = n("987209"),
  c = n("598"),
  d = n("409813"),
  m = n("981631"),
  f = n("474936");

function p(e) {
  let {
    analyticsData: t,
    initialPlanId: n,
    breadcrumbSteps: i,
    handleStepChange: p,
    referralTrialOfferId: _,
    onReturn: S
  } = e, {
    contextMetadata: I,
    step: P,
    paymentSources: E,
    paymentSourceId: T,
    setPaymentSourceId: N,
    purchaseError: v,
    setPurchaseError: h,
    purchaseErrorBlockRef: x,
    paymentAuthenticationState: A,
    selectedSkuId: C
  } = (0, c.usePaymentContext)(), {
    isGift: y
  } = (0, o.useGiftContext)(), g = {
    ...(0, r.useSharedPaymentModal)(),
    paymentSources: E,
    paymentSourceId: T,
    setPaymentSourceId: N,
    purchaseError: v,
    setPurchaseError: h,
    purchaseErrorBlockRef: x,
    paymentAuthenticationState: A
  }, M = (0, a.usePremiumTrialOffer)(_), R = !y && null != M && null != C && (0, f.SubscriptionTrials)[M.trial_id].skus.includes(C), b = null != S ? S : () => {
    p(Object.values(E).length < 1 && null == n ? d.Step.PLAN_SELECT : d.Step.REVIEW, {
      trackedFromStep: d.Step.PAYMENT_TYPE
    })
  };
  s()(P, "Step should be set here");
  let L = (0, l.useStableMemo)(() => Date.now(), [P]);
  return (0, r.AddPaymentFlow)({
    paymentModalArgs: g,
    initialStep: d.Step.PAYMENT_TYPE,
    prependSteps: [d.Step.PROMOTION_INFO],
    appendSteps: [d.Step.REVIEW, d.Step.CONFIRM],
    breadcrumpSteps: i,
    currentBreadcrumpStep: P,
    usePaymentModalStep: !0,
    onReturn: b,
    onComplete: e => {
      p(d.Step.REVIEW, {
        trackedFromStep: e
      })
    },
    onStepChange: e => {
      let {
        currentStep: n,
        toStep: i
      } = e, s = Date.now();
      u.default.track(m.AnalyticEvents.PAYMENT_FLOW_STEP, {
        ...t,
        from_step: n,
        to_step: i,
        step_duration_ms: s - L,
        flow_duration_ms: s - I.startTime
      })
    },
    isEligibleForTrial: R
  })
}