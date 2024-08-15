n.d(t, {
  Z: function() {
return l;
  }
});
var i = n(735250);
n(470079);
var a = n(546735),
  s = n(754961),
  r = n(629209);

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
isNextDisabled: E,
isBackDisabled: h
  } = (0, a.Z)({
progress: n,
updateCurrentStep: l
  }), {
currentStep: m,
furthestStep: I,
brandPrimaryColor: g
  } = n;
  return (0, i.jsxs)('div', {
className: r.navigation,
children: [
  (0, i.jsx)(s.T, {
    animationStyle: o,
    className: c,
    steps: t,
    currentStepIndex: m,
    furthestStepIndex: I,
    onStepClick: d,
    stepFillColor: g
  }),
  (0, i.jsx)(s.i, {
    isBackDisabled: h,
    isNextDisabled: E,
    onNextClick: u,
    onBackClick: _,
    nextButtonBackgroundColor: g,
    nextButtonClassName: c,
    nextButtonAnimationStyle: o
  })
]
  });
}