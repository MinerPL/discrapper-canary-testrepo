"use strict";
n.r(t), n.d(t, {
  PremiumPaymentWhatYouLoseStep: function() {
    return P
  }
});
var s = n("735250");
n("470079");
var r = n("512722"),
  i = n.n(r),
  l = n("780384"),
  a = n("481060"),
  o = n("410030"),
  u = n("973159"),
  d = n("74538"),
  c = n("987209"),
  p = n("598"),
  f = n("409813"),
  m = n("614223"),
  S = n("689938"),
  E = n("650253");

function P(e) {
  let {
    handleStepChange: t,
    handleClose: n
  } = e, r = (0, o.default)(), {
    activeSubscription: P,
    selectedSkuId: x,
    setSelectedPlanId: h,
    startedPaymentFlowWithPaymentSourcesRef: C
  } = (0, p.usePaymentContext)(), {
    isGift: _
  } = (0, c.useGiftContext)(), T = null != P ? (0, d.getPremiumPlanItem)(P) : null, g = null != T ? (0, d.getDisplayPremiumType)(T.planId) : null, I = null != T ? (0, d.getPremiumType)(T.planId) : null, N = (0, m.inOneStepSubscriptionCheckout)({
    isTrial: !1,
    isGift: _,
    selectedSkuId: x,
    startedPaymentFlowWithPaymentSources: C.current
  });
  return i()(null != I, "Expected premium type"), (0, s.jsx)(u.default, {
    premiumType: I,
    titleText: S.default.Messages.PREMIUM_DOWNGRADE_WHAT_YOU_LOSE_TITLE,
    subtitleText: S.default.Messages.PREMIUM_DOWNGRADE_WHAT_YOU_LOSE_SUBTITLE.format({
      subscriptionName: g
    }),
    footer: (0, s.jsxs)("div", {
      className: E.whatYouLoseButtonContainer,
      children: [(0, s.jsx)(a.Button, {
        onClick: () => {
          N ? (h((0, m.getDefaultPlanOneStepCheckout)(x, P)), t(f.Step.REVIEW)) : t(f.Step.PLAN_SELECT)
        },
        children: S.default.Messages.CONTINUE
      }), (0, s.jsx)(a.Button, {
        look: a.Button.Looks.LINK,
        color: (0, l.isThemeDark)(r) ? a.Button.Colors.WHITE : a.Button.Colors.PRIMARY,
        onClick: n,
        children: S.default.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_BACK
      })]
    }),
    onClose: n,
    isDowngrade: !0
  })
}