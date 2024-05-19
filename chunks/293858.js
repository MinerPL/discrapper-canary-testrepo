"use strict";
s.r(t), s.d(t, {
  PremiumPaymentConfirmStep: function() {
    return x
  }
});
var n = s("735250"),
  i = s("470079"),
  r = s("512722"),
  l = s.n(r),
  a = s("881602"),
  o = s("317269"),
  C = s("669079"),
  u = s("296848"),
  d = s("987209"),
  c = s("598"),
  p = s("614277"),
  f = s("698708");

function x(e) {
  var t, s;
  let r, {
      handleClose: x,
      planGroup: _,
      onSubscriptionConfirmation: m,
      renderPurchaseConfirmation: L,
      postSuccessGuild: h,
      followupSKUInfo: S
    } = e,
    {
      activeSubscription: j,
      paymentSources: E,
      paymentSourceId: P,
      selectedPlan: y,
      selectedSkuId: g,
      step: A,
      updatedSubscription: M,
      startingPremiumSubscriptionPlanIdRef: T
    } = (0, c.usePaymentContext)(),
    {
      isGift: I,
      giftRecipient: N,
      giftCode: v,
      hasSentMessage: O,
      isSendingMessage: b,
      sendGiftMessage: U
    } = (0, d.useGiftContext)();
  l()(null != y, "Expected plan to selected"), l()(null != g, "Expected selectedSkuId"), l()(null != A, "Step should be set");
  let k = i.useCallback(() => {
    x(), null == m || m()
  }, [x, m]);
  return i.useEffect(() => {
    if (!(!I || null == N || null == v || O || b || (0, C.shouldShowCustomGiftExperience)(N))) a.AutomatedGiftCodeMessageExperiment.getCurrentConfig({
      location: "36b986_1"
    }).enabled && U({
      onSubscriptionConfirmation: m
    })
  }, [U, I, N, v, O, b, m]), r = null != L ? L(y, k, M) : I ? (0, n.jsx)(o.PremiumSubscriptionGiftPurchaseConfirmation, {
    planId: y.id,
    onClose: k
  }) : T.current === y.id ? (0, n.jsx)(o.default, {
    planId: y.id,
    postSuccessGuild: h,
    onClose: k,
    paymentSourceType: null === (t = E[null != P ? P : ""]) || void 0 === t ? void 0 : t.type
  }) : (0, n.jsx)(o.default, {
    followupSKUInfo: S,
    startingPremiumSubscriptionPlanId: T.current,
    planId: y.id,
    onClose: k,
    isDowngrade: null != j && (0, u.subscriptionCanDowngrade)(j, y.id, _),
    paymentSourceType: null === (s = E[null != P ? P : ""]) || void 0 === s ? void 0 : s.type
  }), (0, n.jsx)(n.Fragment, {
    children: (0, n.jsxs)(p.PaymentPortalBody, {
      children: [(0, n.jsx)(f.default, {}), r]
    })
  })
}