"use strict";
n.r(t), n.d(t, {
  PremiumPaymentConfirmStep: function() {
    return m
  }
});
var s = n("37983"),
  a = n("884691"),
  l = n("627445"),
  r = n.n(l),
  i = n("837148"),
  u = n("491523"),
  o = n("775155"),
  d = n("659632"),
  c = n("380186"),
  _ = n("635357"),
  f = n("642906"),
  I = n("236838"),
  E = n("650484"),
  S = n("367767");

function m(e) {
  var t, n;
  let l, {
      handleClose: m,
      planGroup: P,
      onSubscriptionConfirmation: p,
      renderPurchaseConfirmation: T,
      postSuccessGuild: N,
      followupSKUInfo: M
    } = e,
    {
      activeSubscription: C,
      paymentSources: L,
      paymentSourceId: R,
      selectedPlan: A,
      selectedSkuId: g,
      step: O,
      updatedSubscription: x,
      startingPremiumSubscriptionPlanIdRef: h
    } = (0, f.usePaymentContext)(),
    {
      isGift: y,
      giftRecipient: b,
      giftCode: U,
      hasSentMessage: k,
      isSendingMessage: j,
      sendGiftMessage: v
    } = (0, _.useGiftContext)();
  r(null != A, "Expected plan to selected"), r(null != g, "Expected selectedSkuId"), r(null != O, "Step should be set");
  let {
    successUpsellEnabled: D
  } = (0, i.default)({
    location: "PremiumPaymentConfirmStep"
  }), G = a.useCallback(() => {
    m(), null == p || p()
  }, [m, p]);
  return a.useEffect(() => {
    if (!y || null == b || null == U || k || j || (0, d.shouldShowCustomGiftExperience)(b, !0, "PremiumPaymentConfirmStep")) return;
    let e = u.AutomatedGiftCodeMessageExperiment.getCurrentConfig({
      location: "36b986_1"
    }).enabled;
    e && v({
      onSubscriptionConfirmation: p
    })
  }, [v, y, b, U, k, j, p]), l = null != T ? T(A, G, x) : y ? (0, s.jsx)(o.PremiumSubscriptionGiftPurchaseConfirmation, {
    planId: A.id,
    onClose: G
  }) : h.current === A.id ? (0, s.jsx)(o.default, {
    planId: A.id,
    postSuccessGuild: N,
    onClose: G,
    paymentSourceType: null === (t = L[null != R ? R : ""]) || void 0 === t ? void 0 : t.type
  }) : (0, s.jsx)(o.default, {
    followupSKUInfo: M,
    startingPremiumSubscriptionPlanId: h.current,
    planId: A.id,
    onClose: G,
    isDowngrade: null != C && (0, c.subscriptionCanDowngrade)(C, A.id, P),
    paymentSourceType: null === (n = L[null != R ? R : ""]) || void 0 === n ? void 0 : n.type
  }), (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsxs)(E.PaymentPortalBody, {
      children: [(0, s.jsx)(S.default, {}), l]
    }), D && y && (0, s.jsx)(I.default, {
      onClose: G
    })]
  })
}