n.d(t, {
  Z: function() {
return l;
  }
});
var i = n(735250);
n(470079);
var a = n(546735),
  s = n(754961),
  r = n(433369);

function l(e) {
  let {
steps: t,
progress: n,
updateCurrentStep: l,
animationStyle: o,
animationClassName: c
  } = e, {
onStepClick: d,
onNextClick: u,
onBackClick: _,
isNextDisabled: h,
isBackDisabled: E
  } = (0, a.Z)({
progress: n,
updateCurrentStep: l
  }), {
currentStep: I,
furthestStep: m,
brandPrimaryColor: g
  } = n;
  return (0, i.jsxs)('div', {
className: r.navigation,
children: [
  (0, i.jsx)(s.T, {
    animationStyle: o,
    className: c,
    steps: t,
    currentStepIndex: I,
    furthestStepIndex: m,
    onStepClick: d,
    stepFillColor: g
  }),
  (0, i.jsx)(s.i, {
    isBackDisabled: E,
    isNextDisabled: h,
    onNextClick: u,
    onBackClick: _,
    nextButtonBackgroundColor: g,
    nextButtonClassName: c,
    nextButtonAnimationStyle: o
  })
]
  });
}