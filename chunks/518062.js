"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
}), n("47120");
var a = n("735250");
n("470079");
var i = n("442837"),
  s = n("481060"),
  l = n("607070"),
  r = n("122890"),
  u = n("285952"),
  o = n("300395"),
  d = n("142749");

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