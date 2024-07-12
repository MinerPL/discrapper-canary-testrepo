s.d(n, {
  J: function() {
return p;
  }
});
var l = s(512722),
  t = s.n(l),
  i = s(792986),
  r = s(639119),
  a = s(3409),
  c = s(626135),
  o = s(987209),
  u = s(598),
  d = s(409813),
  _ = s(45572),
  m = s(189877),
  E = s(981631),
  I = s(474936);

function p(e) {
  let {
analyticsData: n,
initialPlanId: s,
breadcrumbSteps: l,
handleStepChange: p,
referralTrialOfferId: N,
onReturn: T,
continueSession: x = !1
  } = e, {
contextMetadata: S,
step: h,
paymentSources: P,
paymentSourceId: f,
setPaymentSourceId: A,
purchaseError: v,
setPurchaseError: M,
purchaseErrorBlockRef: g,
paymentAuthenticationState: C,
selectedSkuId: O,
activeSubscription: R,
previousStepRef: j,
setPurchaseState: L
  } = (0, u.usePaymentContext)(), {
isGift: y
  } = (0, o.wD)(), Z = {
...(0, a.fL)(),
paymentSources: P,
paymentSourceId: f,
setPaymentSourceId: A,
purchaseError: v,
setPurchaseError: M,
purchaseErrorBlockRef: g,
paymentAuthenticationState: C,
selectedSkuId: O,
isGift: y
  }, b = (0, r.N)(N), D = !y && null != b && null != O && I.nG[b.trial_id].skus.includes(O), G = null != T ? T : () => {
p(Object.values(P).length < 1 && null == s ? d.h8.PLAN_SELECT : d.h8.REVIEW, {
  trackedFromStep: d.h8.PAYMENT_TYPE
});
  };
  t()(h, 'Step should be set here');
  let U = (0, i.Z)(() => Date.now(), [h]);
  return (0, a.vP)({
paymentModalArgs: Z,
initialStep: x && null == j.current ? d.h8.CREDIT_CARD_INFORMATION : d.h8.PAYMENT_TYPE,
prependSteps: [d.h8.PROMOTION_INFO],
appendSteps: [
  d.h8.REVIEW,
  d.h8.CONFIRM
],
breadcrumpSteps: l,
currentBreadcrumpStep: h,
usePaymentModalStep: !0,
onReturn: G,
onComplete: e => {
  e === d.h8.AWAITING_BROWSER_CHECKOUT ? (L(_.A.COMPLETED), p(d.h8.CONFIRM, {
    trackedFromStep: e
  })) : p(d.h8.REVIEW, {
    trackedFromStep: e
  });
},
onStepChange: e => {
  let {
    currentStep: s,
    toStep: l
  } = e, t = Date.now();
  c.default.track(E.rMx.PAYMENT_FLOW_STEP, {
    ...n,
    from_step: s,
    to_step: l,
    step_duration_ms: t - U,
    flow_duration_ms: t - S.startTime
  });
},
isEligibleForTrial: D,
allowDesktopRedirectPurchase: (0, m.tr)(O, y, R)
  });
}