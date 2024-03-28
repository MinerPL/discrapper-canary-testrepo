"use strict";
a.r(n), a.d(n, {
  PremiumModalHeaderAnimationTier0: function() {
    return s
  },
  PremiumModalHeaderAnimationTier1: function() {
    return u
  },
  PremiumModalHeaderAnimationTier2: function() {
    return m
  }
}), a("47120");
var t = a("735250");
a("470079");
var i = a("300395"),
  r = a("122890");

function s(e) {
  let {
    currentStep: n,
    purchaseState: a,
    className: s,
    pause: u
  } = e, [m, l] = (0, r.usePaymentModalAnimationScene)({
    purchaseState: a,
    currentStep: n,
    initialScene: i.PremiumPaymentAnimationTier0.Scenes.NORMAL,
    purchaseScene: i.PremiumPaymentAnimationTier0.Scenes.SPEED_START,
    errorScene: i.PremiumPaymentAnimationTier0.Scenes.NORMAL,
    successScene: i.PremiumPaymentAnimationTier0.Scenes.FINISH
  });
  return (0, t.jsx)(i.PremiumPaymentAnimationTier0, {
    className: s,
    nextScene: m,
    onScenePlay: e => l(i.PremiumPaymentAnimationTier0.getNextScene(e)),
    pauseWhileUnfocused: !1,
    pause: u
  })
}

function u(e) {
  let {
    currentStep: n,
    purchaseState: a,
    className: s,
    pause: u
  } = e, [m, l] = (0, r.usePaymentModalAnimationScene)({
    purchaseState: a,
    currentStep: n,
    initialScene: i.PremiumPaymentAnimationTier1.Scenes.NORMAL,
    purchaseScene: i.PremiumPaymentAnimationTier1.Scenes.SPEED_START,
    errorScene: i.PremiumPaymentAnimationTier1.Scenes.NORMAL,
    successScene: i.PremiumPaymentAnimationTier1.Scenes.FINISH
  });
  return (0, t.jsx)(i.PremiumPaymentAnimationTier1, {
    className: s,
    nextScene: m,
    onScenePlay: e => l(i.PremiumPaymentAnimationTier1.getNextScene(e)),
    pauseWhileUnfocused: !1,
    pause: u
  })
}

function m(e) {
  let {
    currentStep: n,
    purchaseState: a,
    className: s,
    pause: u
  } = e, [m, l] = (0, r.usePaymentModalAnimationScene)({
    purchaseState: a,
    currentStep: n,
    initialScene: i.PremiumPaymentAnimationTier2.Scenes.IDLE_ENTRY,
    purchaseScene: i.PremiumPaymentAnimationTier2.Scenes.BOOST_START,
    errorScene: i.PremiumPaymentAnimationTier2.Scenes.ERROR,
    successScene: i.PremiumPaymentAnimationTier2.Scenes.BOOST_END
  });
  return (0, t.jsx)(i.PremiumPaymentAnimationTier2, {
    className: s,
    nextScene: m,
    onScenePlay: e => l(i.PremiumPaymentAnimationTier2.getNextScene(e)),
    pauseWhileUnfocused: !1,
    pause: u
  })
}