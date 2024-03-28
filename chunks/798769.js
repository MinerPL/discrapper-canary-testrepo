"use strict";
a.r(n), a.d(n, {
  default: function() {
    return f
  }
});
var t = a("735250");
a("470079");
var i = a("803997"),
  r = a.n(i),
  s = a("442837"),
  u = a("481060"),
  m = a("607070"),
  l = a("409813"),
  c = a("669079"),
  o = a("170579"),
  d = a("616030"),
  L = a("474936"),
  C = a("689938"),
  T = a("809875");

function f(e) {
  let {
    currentStep: n,
    className: a,
    purchaseState: i,
    premiumType: f,
    useWinterTheme: P = !1,
    onClose: S,
    hideCloseButton: h,
    showTrialBadge: p,
    showDiscountBadge: A,
    isGift: M,
    giftRecipient: N
  } = e, E = (0, s.useStateFromStores)([m.default], () => m.default.useReducedMotion), I = P ? L.PremiumHeaderThemes.WINTER : L.PremiumHeaderThemes.DEFAULT;
  return M && (0, c.shouldShowCustomGiftExperience)(N) && n !== l.Step.CONFIRM ? (0, t.jsxs)(u.ModalHeader, {
    className: T.modalHeaderCustomGift,
    separator: !1,
    children: [(0, t.jsx)("div", {
      className: T.giftNitroInfo,
      children: (0, t.jsx)(u.Heading, {
        variant: "heading-lg/semibold",
        children: (() => {
          switch (n) {
            case l.Step.PLAN_SELECT:
              return f === L.PremiumTypes.TIER_0 ? C.default.Messages.GIFT_NITRO_TIER_0 : C.default.Messages.GIFT_NITRO_ACTION;
            case l.Step.ADD_PAYMENT_STEPS:
              return C.default.Messages.PAYMENT_METHOD_SELECTION;
            case l.Step.REVIEW:
              return C.default.Messages.GIFT_PURCHASE_REVIEW;
            default:
              return C.default.Messages.GIFT_NITRO_ACTION
          }
        })()
      })
    }), (0, t.jsx)(u.ModalCloseButton, {
      onClick: S,
      className: T.closeButton
    })]
  }) : (0, t.jsx)(u.ModalHeader, {
    className: r()(T.modalHeader, a),
    separator: !1,
    children: (0, t.jsx)(o.default, {
      hideCloseOnFullScreen: !0,
      hideCloseButton: h,
      shouldShowPrice: !0,
      upgradeToPremiumType: f,
      renderAnimation: () => f === L.PremiumTypes.TIER_0 ? (0, t.jsx)(d.PremiumModalHeaderAnimationTier0, {
        className: T.headerAnimation,
        currentStep: n,
        purchaseState: i,
        pause: E
      }) : f === L.PremiumTypes.TIER_1 ? (0, t.jsx)(d.PremiumModalHeaderAnimationTier1, {
        className: T.headerAnimation,
        currentStep: n,
        purchaseState: i,
        pause: E
      }) : (0, t.jsx)(d.PremiumModalHeaderAnimationTier2, {
        className: T.headerAnimation,
        currentStep: n,
        purchaseState: i,
        pause: E
      }),
      plan: null,
      isGift: !1,
      className: T.header,
      onClose: S,
      headerTheme: I,
      showTrialBadge: p,
      showDiscountBadge: A
    })
  })
}