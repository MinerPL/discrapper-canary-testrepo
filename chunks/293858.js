"use strict";
n.r(t), n.d(t, {
  PremiumPaymentConfirmStep: function() {
    return S
  }
});
var s = n("735250"),
  r = n("470079"),
  i = n("512722"),
  l = n.n(i),
  a = n("881602"),
  o = n("317269"),
  u = n("669079"),
  d = n("296848"),
  c = n("987209"),
  p = n("598"),
  f = n("614277"),
  m = n("698708");

function S(e) {
  var t, n;
  let i, {
      handleClose: S,
      planGroup: E,
      onSubscriptionConfirmation: P,
      renderPurchaseConfirmation: x,
      postSuccessGuild: h,
      followupSKUInfo: C
    } = e,
    {
      activeSubscription: _,
      paymentSources: T,
      paymentSourceId: g,
      selectedPlan: I,
      selectedSkuId: N,
      step: y,
      updatedSubscription: j,
      startingPremiumSubscriptionPlanIdRef: M
    } = (0, p.usePaymentContext)(),
    {
      isGift: b,
      giftRecipient: A,
      giftCode: k,
      hasSentMessage: v,
      isSendingMessage: L,
      sendGiftMessage: O
    } = (0, c.useGiftContext)();
  l()(null != I, "Expected plan to selected"), l()(null != N, "Expected selectedSkuId"), l()(null != y, "Step should be set");
  let R = r.useCallback(() => {
    S(), null == P || P()
  }, [S, P]);
  return r.useEffect(() => {
    if (!(!b || null == A || null == k || v || L || (0, u.shouldShowCustomGiftExperience)(A))) a.AutomatedGiftCodeMessageExperiment.getCurrentConfig({
      location: "36b986_1"
    }).enabled && O({
      onSubscriptionConfirmation: P
    })
  }, [O, b, A, k, v, L, P]), i = null != x ? x(I, R, j) : b ? (0, s.jsx)(o.PremiumSubscriptionGiftPurchaseConfirmation, {
    planId: I.id,
    onClose: R
  }) : M.current === I.id ? (0, s.jsx)(o.default, {
    planId: I.id,
    postSuccessGuild: h,
    onClose: R,
    paymentSourceType: null === (t = T[null != g ? g : ""]) || void 0 === t ? void 0 : t.type
  }) : (0, s.jsx)(o.default, {
    followupSKUInfo: C,
    startingPremiumSubscriptionPlanId: M.current,
    planId: I.id,
    onClose: R,
    isDowngrade: null != _ && (0, d.subscriptionCanDowngrade)(_, I.id, E),
    paymentSourceType: null === (n = T[null != g ? g : ""]) || void 0 === n ? void 0 : n.type
  }), (0, s.jsx)(s.Fragment, {
    children: (0, s.jsxs)(f.PaymentPortalBody, {
      children: [(0, s.jsx)(m.default, {}), i]
    })
  })
}