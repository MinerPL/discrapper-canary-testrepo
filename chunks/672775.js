"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var a = n("735250");
n("470079");
var s = n("546735"),
  l = n("754961"),
  i = n("590190");

function r(e) {
  let {
    steps: t,
    progress: n,
    updateCurrentStep: r,
    animationStyle: o,
    animationClassName: u
  } = e, {
    onStepClick: d,
    onNextClick: c,
    onBackClick: f,
    isNextDisabled: E,
    isBackDisabled: h
  } = (0, s.useClanSetupModalNavigation)({
    progress: n,
    updateCurrentStep: r
  }), {
    currentStep: _,
    furthestStep: C,
    brandPrimaryColor: m
  } = n;
  return (0, a.jsxs)("div", {
    className: i.navigation,
    children: [(0, a.jsx)(l.ClanSetupProgress, {
      animationStyle: o,
      className: u,
      steps: t,
      currentStepIndex: _,
      furthestStepIndex: C,
      onStepClick: d,
      stepFillColor: m
    }), (0, a.jsx)(l.ClanSetupProgressButtons, {
      isBackDisabled: h,
      isNextDisabled: E,
      onNextClick: c,
      onBackClick: f,
      nextButtonBackgroundColor: m,
      nextButtonClassName: u,
      nextButtonAnimationStyle: o
    })]
  })
}