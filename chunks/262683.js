"use strict";
n.r(t), n.d(t, {
  PaymentModalAddPaymentStep: function() {
    return p
  }
});
var s = n("627445"),
  r = n.n(s),
  a = n("775560"),
  i = n("917247"),
  l = n("724522"),
  u = n("599110"),
  o = n("635357"),
  c = n("642906"),
  d = n("85336"),
  m = n("49111"),
  f = n("646718");

function p(e) {
  let {
    analyticsData: t,
    initialPlanId: n,
    breadcrumbSteps: s,
    handleStepChange: p,
    referralTrialOfferId: _,
    onReturn: S
  } = e, {
    contextMetadata: I,
    step: E,
    paymentSources: P,
    paymentSourceId: T,
    setPaymentSourceId: N,
    purchaseError: C,
    setPurchaseError: A,
    purchaseErrorBlockRef: h,
    paymentAuthenticationState: v,
    selectedSkuId: g
  } = (0, c.usePaymentContext)(), {
    isGift: x
  } = (0, o.useGiftContext)(), y = {
    ...(0, l.useSharedPaymentModal)(),
    paymentSources: P,
    paymentSourceId: T,
    setPaymentSourceId: N,
    purchaseError: C,
    setPurchaseError: A,
    purchaseErrorBlockRef: h,
    paymentAuthenticationState: v
  }, O = (0, i.usePremiumTrialOffer)(_), M = !x && null != O && null != g && (0, f.SubscriptionTrials)[O.trial_id].skus.includes(g), R = null != S ? S : () => {
    let e = Object.values(P).length < 1 && null == n ? d.Step.PLAN_SELECT : d.Step.REVIEW;
    p(e, {
      trackedFromStep: d.Step.PAYMENT_TYPE
    })
  };
  r(E, "Step should be set here");
  let L = (0, a.useStableMemo)(() => Date.now(), [E]);
  return (0, l.AddPaymentFlow)({
    paymentModalArgs: y,
    initialStep: d.Step.PAYMENT_TYPE,
    prependSteps: [d.Step.PROMOTION_INFO],
    appendSteps: [d.Step.REVIEW, d.Step.CONFIRM],
    breadcrumpSteps: s,
    currentBreadcrumpStep: E,
    usePaymentModalStep: !0,
    onReturn: R,
    onComplete: e => {
      p(d.Step.REVIEW, {
        trackedFromStep: e
      })
    },
    onStepChange: e => {
      let {
        currentStep: n,
        toStep: s
      } = e, r = Date.now();
      u.default.track(m.AnalyticEvents.PAYMENT_FLOW_STEP, {
        ...t,
        from_step: n,
        to_step: s,
        step_duration_ms: r - L,
        flow_duration_ms: r - I.startTime
      })
    },
    isEligibleForTrial: M
  })
}