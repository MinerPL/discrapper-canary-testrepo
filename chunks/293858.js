"use strict";
s.r(t), s.d(t, {
  PremiumPaymentConfirmStep: function() {
    return E
  }
});
var n = s("735250"),
  i = s("470079"),
  r = s("512722"),
  l = s.n(r),
  a = s("481060"),
  o = s("570140"),
  C = s("138464"),
  u = s("881602"),
  d = s("546650"),
  c = s("317269"),
  p = s("669079"),
  f = s("296848"),
  x = s("987209"),
  _ = s("563132"),
  m = s("614277"),
  L = s("698708");

function E(e) {
  var t, r;
  let E, {
      handleClose: S,
      planGroup: h,
      onSubscriptionConfirmation: j,
      renderPurchaseConfirmation: P,
      postSuccessGuild: M,
      followupSKUInfo: A
    } = e,
    {
      activeSubscription: y,
      paymentSources: g,
      paymentSourceId: T,
      selectedPlan: I,
      selectedSkuId: N,
      step: v,
      updatedSubscription: O,
      startingPremiumSubscriptionPlanIdRef: R
    } = (0, _.usePaymentContext)(),
    {
      isGift: U,
      giftRecipient: b,
      giftCode: k,
      hasSentMessage: B,
      isSendingMessage: G,
      sendGiftMessage: H
    } = (0, x.useGiftContext)();
  l()(null != I, "Expected plan to selected"), l()(null != N, "Expected selectedSkuId"), l()(null != v, "Step should be set");
  let F = i.useCallback(() => {
    S(), null == j || j()
  }, [S, j]);
  return i.useEffect(() => {
    if (!(!U || null == b || null == k || B || G || (0, p.shouldShowCustomGiftExperience)(b))) u.AutomatedGiftCodeMessageExperiment.getCurrentConfig({
      location: "36b986_1"
    }).enabled && H({
      onSubscriptionConfirmation: j
    })
  }, [H, U, b, k, B, G, j]), E = null != P ? P(I, F, O) : U ? (0, n.jsx)(c.PremiumSubscriptionGiftPurchaseConfirmation, {
    planId: I.id,
    onClose: F
  }) : R.current === I.id ? (0, n.jsx)(c.default, {
    planId: I.id,
    postSuccessGuild: M,
    onClose: F,
    paymentSourceType: null === (t = g[null != T ? T : ""]) || void 0 === t ? void 0 : t.type
  }) : (0, n.jsx)(c.default, {
    followupSKUInfo: A,
    startingPremiumSubscriptionPlanId: R.current,
    planId: I.id,
    onClose: F,
    isDowngrade: null != y && (0, f.subscriptionCanDowngrade)(y, I.id, h),
    paymentSourceType: null === (r = g[null != T ? T : ""]) || void 0 === r ? void 0 : r.type
  }), i.useEffect(() => {
    d.default.isAprilMarketingDecoEntitlementCreated && (o.default.dispatch({
      type: "PREMIUM_APRIL_MARKETING_DECO_ENTITLEMENT_RESET"
    }), (0, C.setCanPlayWowMoment)(!1), F(), !(0, a.hasAnyModalOpen)() && (0, a.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.resolve().then(s.bind(s, "731433"));
      return t => (0, n.jsx)(e, {
        ...t
      })
    }))
  }, []), (0, n.jsx)(n.Fragment, {
    children: (0, n.jsxs)(m.PaymentPortalBody, {
      children: [(0, n.jsx)(L.default, {}), E]
    })
  })
}