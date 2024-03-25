"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
}), n("222007");
var a = n("37983");
n("884691");
var i = n("446674"),
  s = n("77078"),
  l = n("206230"),
  r = n("22368"),
  u = n("145131"),
  o = n("467831"),
  d = n("791971");

function c(e) {
  let {
    purchaseState: t,
    currentStep: n,
    onClose: c
  } = e, [m, I] = (0, r.usePaymentModalAnimationScene)({
    purchaseState: t,
    currentStep: n,
    initialScene: o.PremiumPaymentGuildAnimation.Scenes.ENTRY,
    purchaseScene: o.PremiumPaymentGuildAnimation.Scenes.STARS,
    errorScene: o.PremiumPaymentGuildAnimation.Scenes.ERROR,
    successScene: o.PremiumPaymentGuildAnimation.Scenes.SUCCESS
  }), S = (0, i.useStateFromStores)([l.default], () => l.default.useReducedMotion);
  return (0, a.jsxs)(s.ModalHeader, {
    align: u.default.Align.START,
    className: d.header,
    separator: !1,
    children: [(0, a.jsx)(o.PremiumPaymentGuildAnimation, {
      className: d.animation,
      nextScene: m,
      onScenePlay: e => I(o.PremiumPaymentGuildAnimation.getNextScene(e)),
      pauseWhileUnfocused: !1,
      pause: S
    }), (0, a.jsx)("div", {
      className: d.headerTitle
    }), (0, a.jsx)(s.ModalCloseButton, {
      onClick: c,
      className: d.closeButton
    })]
  })
}