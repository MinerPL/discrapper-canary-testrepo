n.d(t, {
    Z: function () {
        return c;
    }
});
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    l = n(754961),
    s = n(80242),
    o = n(837275);
function c(e) {
    let { guildId: t, progress: n, updateCurrentStep: r, animationStyle: c, animationClassName: d, inSettings: u } = e,
        {
            onNextClick: h,
            onBackClick: m,
            isNextDisabled: p,
            isBackDisabled: g
        } = (0, s.o)({
            progress: n,
            updateCurrentStep: r,
            guildId: t,
            inSettings: u
        }),
        { brandPrimaryColor: f } = n;
    return (0, i.jsx)('div', {
        className: o.navigation,
        children: (0, i.jsx)(l.i, {
            isBackDisabled: g,
            isNextDisabled: p,
            backButtonClassName: a()(g && o.hiddenBackButton),
            onNextClick: h,
            onBackClick: m,
            nextButtonBackgroundColor: f,
            nextButtonClassName: d,
            nextButtonAnimationStyle: c
        })
    });
}
