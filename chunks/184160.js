"use strict";
s.r(t), s.d(t, {
  PremiumPaymentWhatYouLoseStep: function() {
    return m
  }
});
var n = s("735250");
s("470079");
var i = s("512722"),
  r = s.n(i),
  l = s("780384"),
  a = s("481060"),
  o = s("410030"),
  C = s("973159"),
  u = s("74538"),
  d = s("987209"),
  c = s("563132"),
  p = s("409813"),
  f = s("614223"),
  x = s("689938"),
  _ = s("286644");

function m(e) {
  let {
    handleStepChange: t,
    handleClose: s
  } = e, i = (0, o.default)(), {
    activeSubscription: m,
    selectedSkuId: L,
    setSelectedPlanId: E,
    startedPaymentFlowWithPaymentSourcesRef: S
  } = (0, c.usePaymentContext)(), {
    isGift: h
  } = (0, d.useGiftContext)(), j = null != m ? (0, u.getPremiumPlanItem)(m) : null, P = null != j ? (0, u.getDisplayPremiumType)(j.planId) : null, M = null != j ? (0, u.getPremiumType)(j.planId) : null, A = (0, f.inOneStepSubscriptionCheckout)({
    isTrial: !1,
    isGift: h,
    selectedSkuId: L,
    startedPaymentFlowWithPaymentSources: S.current
  });
  return r()(null != M, "Expected premium type"), (0, n.jsx)(C.default, {
    premiumType: M,
    titleText: x.default.Messages.PREMIUM_DOWNGRADE_WHAT_YOU_LOSE_TITLE,
    subtitleText: x.default.Messages.PREMIUM_DOWNGRADE_WHAT_YOU_LOSE_SUBTITLE.format({
      subscriptionName: P
    }),
    footer: (0, n.jsxs)("div", {
      className: _.whatYouLoseButtonContainer,
      children: [(0, n.jsx)(a.Button, {
        onClick: () => {
          A ? (E((0, f.getDefaultPlanOneStepCheckout)(L, m)), t(p.Step.REVIEW)) : t(p.Step.PLAN_SELECT)
        },
        children: x.default.Messages.CONTINUE
      }), (0, n.jsx)(a.Button, {
        look: a.Button.Looks.LINK,
        color: (0, l.isThemeDark)(i) ? a.Button.Colors.WHITE : a.Button.Colors.PRIMARY,
        onClick: s,
        children: x.default.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_BACK
      })]
    }),
    onClose: s,
    isDowngrade: !0
  })
}