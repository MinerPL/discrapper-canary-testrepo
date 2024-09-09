n.d(t, {
    I: function () {
        return l;
    }
});
var r = n(120356),
    i = n.n(r),
    a = n(442837),
    s = n(481060),
    o = n(607070);
function l() {
    let e = (0, a.cj)([o.Z], () => {
            let { fontScale: e, fontScaleClass: t, keyboardModeEnabled: n, saturation: r, desaturateUserColors: i, useForcedColors: a, systemForcedColors: s, useReducedMotion: l, alwaysShowLinkDecorations: u } = o.Z;
            return {
                fontScale: e,
                fontScaleClass: t,
                keyboardModeEnabled: n,
                saturation: r,
                desaturateUserColors: i,
                useForcedColors: a,
                systemForcedColors: s,
                useReducedMotion: l,
                alwaysShowLinkDecorations: u
            };
        }),
        t = window.CSS.supports('selector(::-webkit-scrollbar)'),
        n = i()({
            'low-saturation': e.saturation <= s.LOW_SATURATION_THRESHOLD,
            'keyboard-mode': e.keyboardModeEnabled,
            'decorate-links': e.alwaysShowLinkDecorations,
            'no-webkit-scrollbar': !t,
            'has-webkit-scrollbar': t
        });
    return {
        accessibilitySettings: e,
        appWrapperClassName: n
    };
}
