n.d(t, {
    Z: function () {
        return l;
    }
});
var i = n(735250);
n(470079);
var s = n(546735), a = n(754961), r = n(414868);
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
        } = (0, s.Z)({
            progress: n,
            updateCurrentStep: l
        }), {
            currentStep: I,
            furthestStep: m,
            brandPrimaryColor: p
        } = n;
    return (0, i.jsxs)('div', {
        className: r.navigation,
        children: [
            (0, i.jsx)(a.T, {
                animationStyle: o,
                className: c,
                steps: t,
                currentStepIndex: I,
                furthestStepIndex: m,
                onStepClick: d,
                stepFillColor: p
            }),
            (0, i.jsx)(a.i, {
                isBackDisabled: h,
                isNextDisabled: E,
                onNextClick: u,
                onBackClick: _,
                nextButtonBackgroundColor: p,
                nextButtonClassName: c,
                nextButtonAnimationStyle: o
            })
        ]
    });
}
