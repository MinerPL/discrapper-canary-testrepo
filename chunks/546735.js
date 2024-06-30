n.d(t, {
    Z: function () {
        return r;
    }
});
var i = n(470079), s = n(246364), a = n(308083);
function r(e) {
    let {
            progress: t,
            updateCurrentStep: n
        } = e, {
            currentStep: r,
            gameApplicationIds: l,
            playstyle: o,
            interests: c,
            description: d,
            tag: u,
            verificationForm: _
        } = t, E = i.useMemo(() => null != _ && _.formFields.some(e => !(0, s.J)(e)), [_]), h = i.useMemo(() => Array.from(c).filter(e => !a.WZ.has(e) && !a.gh.has(e)), [c]), I = i.useCallback(() => {
            n(r + 1);
        }, [
            r,
            n
        ]), m = i.useCallback(() => {
            n(r - 1);
        }, [
            r,
            n
        ]), p = i.useCallback(e => n(e), [n]), g = i.useMemo(() => {
            switch (r) {
            case a.Wy.GAMES:
                return 0 === l.size;
            case a.Wy.PLAYSTYLE:
                return o === a.zv.NONE;
            case a.Wy.INTERESTS:
                return h.length < 3;
            case a.Wy.DESCRIPTION:
                return 0 === d.length;
            case a.Wy.CUSTOMIZE_TAG_BADGE:
                return u.length < 2;
            case a.Wy.MEMBER_APPLICATION:
                return !E;
            default:
                return !1;
            }
        }, [
            r,
            d.length,
            l.size,
            E,
            h.length,
            o,
            u.length
        ]), T = 0 === r;
    return i.useMemo(() => ({
        onStepClick: p,
        onNextClick: I,
        onBackClick: m,
        isNextDisabled: g,
        isBackDisabled: T
    }), [
        T,
        g,
        m,
        I,
        p
    ]);
}
