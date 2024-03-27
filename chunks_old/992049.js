"use strict";
n.r(t), n.d(t, {
  PremiumPaymentConfirmStep: function() {
    return S
  }
});
var r = n("37983"),
  i = n("884691"),
  s = n("627445"),
  l = n.n(s),
  a = n("491523"),
  o = n("775155"),
  u = n("659632"),
  d = n("380186"),
  c = n("635357"),
  p = n("642906"),
  f = n("650484"),
  m = n("367767");

function S(e) {
  var t, n;
  let s, {
      handleClose: S,
      planGroup: P,
      onSubscriptionConfirmation: E,
      renderPurchaseConfirmation: _,
      postSuccessGuild: C,
      followupSKUInfo: x
    } = e,
    {
      activeSubscription: I,
      paymentSources: T,
      paymentSourceId: h,
      selectedPlan: g,
      selectedSkuId: y,
      step: M,
      updatedSubscription: N,
      startingPremiumSubscriptionPlanIdRef: b
    } = (0, p.usePaymentContext)(),
    {
      isGift: A,
      giftRecipient: j,
      giftCode: k,
      hasSentMessage: L,
      isSendingMessage: O,
      sendGiftMessage: v
    } = (0, c.useGiftContext)();
  l(null != g, "Expected plan to selected"), l(null != y, "Expected selectedSkuId"), l(null != M, "Step should be set");
  let R = i.useCallback(() => {
    S(), null == E || E()
  }, [S, E]);
  return i.useEffect(() => {
    if (!A || null == j || null == k || L || O || (0, u.shouldShowCustomGiftExperience)(j)) return;
    let e = a.AutomatedGiftCodeMessageExperiment.getCurrentConfig({
      location: "36b986_1"
    }).enabled;
    e && v({
      onSubscriptionConfirmation: E
    })
  }, [v, A, j, k, L, O, E]), s = null != _ ? _(g, R, N) : A ? (0, r.jsx)(o.PremiumSubscriptionGiftPurchaseConfirmation, {
    planId: g.id,
    onClose: R
  }) : b.current === g.id ? (0, r.jsx)(o.default, {
    planId: g.id,
    postSuccessGuild: C,
    onClose: R,
    paymentSourceType: null === (t = T[null != h ? h : ""]) || void 0 === t ? void 0 : t.type
  }) : (0, r.jsx)(o.default, {
    followupSKUInfo: x,
    startingPremiumSubscriptionPlanId: b.current,
    planId: g.id,
    onClose: R,
    isDowngrade: null != I && (0, d.subscriptionCanDowngrade)(I, g.id, P),
    paymentSourceType: null === (n = T[null != h ? h : ""]) || void 0 === n ? void 0 : n.type
  }), (0, r.jsx)(r.Fragment, {
    children: (0, r.jsxs)(f.PaymentPortalBody, {
      children: [(0, r.jsx)(m.default, {}), s]
    })
  })
}