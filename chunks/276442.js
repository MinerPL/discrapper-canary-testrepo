t.d(n, {
  J: function() {
return f;
  }
});
var i = t(512722),
  a = t.n(i),
  r = t(792986),
  s = t(639119),
  l = t(3409),
  o = t(626135),
  c = t(987209),
  u = t(598),
  d = t(409813),
  _ = t(45572),
  p = t(189877),
  m = t(981631),
  I = t(474936);

function f(e) {
  let {
analyticsData: n,
initialPlanId: t,
breadcrumbSteps: i,
handleStepChange: f,
referralTrialOfferId: E,
onReturn: x,
continueSession: N = !1
  } = e, {
contextMetadata: S,
step: T,
paymentSources: h,
paymentSourceId: b,
setPaymentSourceId: g,
purchaseError: P,
setPurchaseError: v,
purchaseErrorBlockRef: A,
paymentAuthenticationState: C,
selectedSkuId: M,
activeSubscription: y,
previousStepRef: O,
setPurchaseState: R
  } = (0, u.usePaymentContext)(), {
isGift: L
  } = (0, c.wD)(), j = {
...(0, l.fL)(),
paymentSources: h,
paymentSourceId: b,
setPaymentSourceId: g,
purchaseError: P,
setPurchaseError: v,
purchaseErrorBlockRef: A,
paymentAuthenticationState: C,
selectedSkuId: M,
isGift: L
  }, Z = (0, s.N)(E), D = !L && null != Z && null != M && I.nG[Z.trial_id].skus.includes(M), w = null != x ? x : () => {
f(Object.values(h).length < 1 && null == t ? d.h8.PLAN_SELECT : d.h8.REVIEW, {
  trackedFromStep: d.h8.PAYMENT_TYPE
});
  };
  a()(T, 'Step should be set here');
  let G = (0, r.Z)(() => Date.now(), [T]);
  return (0, l.vP)({
paymentModalArgs: j,
initialStep: N && null == O.current ? d.h8.CREDIT_CARD_INFORMATION : d.h8.PAYMENT_TYPE,
prependSteps: [d.h8.PROMOTION_INFO],
appendSteps: [
  d.h8.REVIEW,
  d.h8.CONFIRM
],
breadcrumpSteps: i,
currentBreadcrumpStep: T,
usePaymentModalStep: !0,
onReturn: w,
onComplete: e => {
  e === d.h8.AWAITING_BROWSER_CHECKOUT ? (R(_.A.COMPLETED), f(d.h8.CONFIRM, {
    trackedFromStep: e
  })) : f(d.h8.REVIEW, {
    trackedFromStep: e
  });
},
onStepChange: e => {
  let {
    currentStep: t,
    toStep: i
  } = e, a = Date.now();
  o.default.track(m.rMx.PAYMENT_FLOW_STEP, {
    ...n,
    from_step: t,
    to_step: i,
    step_duration_ms: a - G,
    flow_duration_ms: a - S.startTime
  });
},
isEligibleForTrial: D,
allowDesktopRedirectPurchase: (0, p.tr)(M, L, y)
  });
}