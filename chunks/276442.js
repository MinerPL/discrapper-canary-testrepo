"use strict";
n.r(t), n.d(t, {
  PaymentModalAddPaymentStep: function() {
    return p
  }
});
var i = n("512722"),
  s = n.n(i),
  a = n("207561"),
  l = n("639119"),
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
    referralTrialOfferId: S,
    onReturn: _
  } = e, {
    contextMetadata: I,
    step: E,
    paymentSources: P,
    paymentSourceId: T,
    setPaymentSourceId: N,
    purchaseError: h,
    setPurchaseError: x,
    purchaseErrorBlockRef: v,
    paymentAuthenticationState: A,
    selectedSkuId: C
  } = (0, c.usePaymentContext)(), {
    isGift: g
  } = (0, o.useGiftContext)(), y = {
    ...(0, r.useSharedPaymentModal)(),
    paymentSources: P,
    paymentSourceId: T,
    setPaymentSourceId: N,
    purchaseError: h,
    setPurchaseError: x,
    purchaseErrorBlockRef: v,
    paymentAuthenticationState: A
  }, M = (0, l.usePremiumTrialOffer)(S), b = !g && null != M && null != C && (0, f.SubscriptionTrials)[M.trial_id].skus.includes(C), O = null != _ ? _ : () => {
    p(Object.values(P).length < 1 && null == n ? d.Step.PLAN_SELECT : d.Step.REVIEW, {
      trackedFromStep: d.Step.PAYMENT_TYPE
    })
  };
  s()(E, "Step should be set here");
  let R = (0, a.useStableMemo)(() => Date.now(), [E]);
  return (0, r.AddPaymentFlow)({
    paymentModalArgs: y,
    initialStep: d.Step.PAYMENT_TYPE,
    prependSteps: [d.Step.PROMOTION_INFO],
    appendSteps: [d.Step.REVIEW, d.Step.CONFIRM],
    breadcrumpSteps: i,
    currentBreadcrumpStep: E,
    usePaymentModalStep: !0,
    onReturn: O,
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
        step_duration_ms: s - R,
        flow_duration_ms: s - I.startTime
      })
    },
    isEligibleForTrial: b
  })
}