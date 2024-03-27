"use strict";
n.r(t), n.d(t, {
  PremiumPaymentWhatYouLoseStep: function() {
    return E
  }
});
var r = n("37983");
n("884691");
var i = n("627445"),
  s = n.n(i),
  l = n("819855"),
  a = n("77078"),
  o = n("841098"),
  u = n("360262"),
  d = n("719923"),
  c = n("635357"),
  p = n("642906"),
  f = n("85336"),
  m = n("176108"),
  S = n("782340"),
  P = n("807564");

function E(e) {
  let {
    handleStepChange: t,
    handleClose: n
  } = e, i = (0, o.default)(), {
    activeSubscription: E,
    selectedSkuId: _,
    setSelectedPlanId: C,
    startedPaymentFlowWithPaymentSourcesRef: x
  } = (0, p.usePaymentContext)(), {
    isGift: I
  } = (0, c.useGiftContext)(), T = null != E ? (0, d.getPremiumPlanItem)(E) : null, h = null != T ? (0, d.getDisplayPremiumType)(T.planId) : null, g = null != T ? (0, d.getPremiumType)(T.planId) : null, y = (0, m.inOneStepSubscriptionCheckout)({
    isTrial: !1,
    isGift: I,
    selectedSkuId: _,
    startedPaymentFlowWithPaymentSources: x.current
  });
  return s(null != g, "Expected premium type"), (0, r.jsx)(u.default, {
    premiumType: g,
    titleText: S.default.Messages.PREMIUM_DOWNGRADE_WHAT_YOU_LOSE_TITLE,
    subtitleText: S.default.Messages.PREMIUM_DOWNGRADE_WHAT_YOU_LOSE_SUBTITLE.format({
      subscriptionName: h
    }),
    footer: (0, r.jsxs)("div", {
      className: P.whatYouLoseButtonContainer,
      children: [(0, r.jsx)(a.Button, {
        onClick: () => {
          if (y) {
            let e = (0, m.getDefaultPlanOneStepCheckout)(_, E);
            C(e), t(f.Step.REVIEW)
          } else t(f.Step.PLAN_SELECT)
        },
        children: S.default.Messages.CONTINUE
      }), (0, r.jsx)(a.Button, {
        look: a.Button.Looks.LINK,
        color: (0, l.isThemeDark)(i) ? a.Button.Colors.WHITE : a.Button.Colors.PRIMARY,
        onClick: n,
        children: S.default.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_BACK
      })]
    }),
    onClose: n,
    isDowngrade: !0
  })
}