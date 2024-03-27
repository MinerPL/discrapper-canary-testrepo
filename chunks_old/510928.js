"use strict";
a.r(n), a.d(n, {
  default: function() {
    return f
  }
});
var i = a("37983");
a("884691");
var t = a("414456"),
  r = a.n(t),
  s = a("446674"),
  u = a("77078"),
  m = a("206230"),
  l = a("85336"),
  c = a("659632"),
  o = a("160210"),
  d = a("992977"),
  L = a("646718"),
  C = a("782340"),
  T = a("504035");

function f(e) {
  let {
    currentStep: n,
    className: a,
    purchaseState: t,
    premiumType: f,
    useWinterTheme: P = !1,
    onClose: S,
    hideCloseButton: h,
    showTrialBadge: p,
    showDiscountBadge: A,
    isGift: M,
    giftRecipient: N
  } = e, E = (0, s.useStateFromStores)([m.default], () => m.default.useReducedMotion), x = P ? L.PremiumHeaderThemes.WINTER : L.PremiumHeaderThemes.DEFAULT;
  return M && (0, c.shouldShowCustomGiftExperience)(N) && n !== l.Step.CONFIRM ? (0, i.jsxs)(u.ModalHeader, {
    className: T.modalHeaderCustomGift,
    separator: !1,
    children: [(0, i.jsx)("div", {
      className: T.giftNitroInfo,
      children: (0, i.jsx)(u.Heading, {
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
    }), (0, i.jsx)(u.ModalCloseButton, {
      onClick: S,
      className: T.closeButton
    })]
  }) : (0, i.jsx)(u.ModalHeader, {
    className: r(T.modalHeader, a),
    separator: !1,
    children: (0, i.jsx)(o.default, {
      hideCloseOnFullScreen: !0,
      hideCloseButton: h,
      shouldShowPrice: !0,
      upgradeToPremiumType: f,
      renderAnimation: () => f === L.PremiumTypes.TIER_0 ? (0, i.jsx)(d.PremiumModalHeaderAnimationTier0, {
        className: T.headerAnimation,
        currentStep: n,
        purchaseState: t,
        pause: E
      }) : f === L.PremiumTypes.TIER_1 ? (0, i.jsx)(d.PremiumModalHeaderAnimationTier1, {
        className: T.headerAnimation,
        currentStep: n,
        purchaseState: t,
        pause: E
      }) : (0, i.jsx)(d.PremiumModalHeaderAnimationTier2, {
        className: T.headerAnimation,
        currentStep: n,
        purchaseState: t,
        pause: E
      }),
      plan: null,
      isGift: !1,
      className: T.header,
      onClose: S,
      headerTheme: x,
      showTrialBadge: p,
      showDiscountBadge: A
    })
  })
}