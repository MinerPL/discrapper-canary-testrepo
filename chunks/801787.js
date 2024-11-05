n.d(t, {
    C1: function () {
        return m;
    },
    Od: function () {
        return l;
    },
    TC: function () {
        return p;
    },
    bg: function () {
        return r;
    },
    wM: function () {
        return f;
    },
    wR: function () {
        return h;
    },
    ze: function () {
        return _;
    }
}),
    n(789020),
    n(411104);
var r,
    i,
    a = n(200651),
    s = n(192379),
    o = n(231338);
function l(e, t) {
    return e | t;
}
function u(e) {
    let t = JSON.stringify(e);
    return {
        ...e,
        key: t
    };
}
((i = r || (r = {}))[(i.MOBILE_REDESIGN_ENABLED = 2)] = 'MOBILE_REDESIGN_ENABLED'), (i[(i.MOBILE_DARK_GRADIENT_THEME_ENABLED = 4)] = 'MOBILE_DARK_GRADIENT_THEME_ENABLED'), (i[(i.MOBILE_LIGHT_GRADIENT_THEME_ENABLED = 8)] = 'MOBILE_LIGHT_GRADIENT_THEME_ENABLED'), (i[(i.REDUCED_CONTRAST_ENABLED = 16)] = 'REDUCED_CONTRAST_ENABLED'), (i[(i.INCREASED_CONTRAST_ENABLED = 32)] = 'INCREASED_CONTRAST_ENABLED'), (i[(i.REDUCE_SATURATION_ENABLED = 64)] = 'REDUCE_SATURATION_ENABLED');
let c = {
        theme: 'light',
        primaryColor: null,
        secondaryColor: null,
        gradient: null,
        key: 'light-false-null-null-null',
        flags: 0,
        contrast: 1,
        saturation: 1,
        density: 'compact'
    },
    d = s.createContext(c);
function f(e) {
    let { children: t, theme: n = o.BR.DARK, primaryColor: r = null, secondaryColor: i = null, gradient: l = null, flags: c = 0, contrast: f = 1, saturation: _ = 1, density: h = 'compact' } = e,
        p = s.useMemo(
            () =>
                u({
                    theme: n,
                    primaryColor: r,
                    secondaryColor: i,
                    gradient: l,
                    flags: c,
                    contrast: f,
                    saturation: _,
                    density: h
                }),
            [n, r, i, l, c, f, _, h]
        );
    return (0, a.jsx)(d.Provider, {
        value: p,
        children: t
    });
}
function _(e) {
    let { children: t, theme: n, primaryColor: r, secondaryColor: i, gradient: o, flags: l, contrast: c, saturation: f, density: _ } = e,
        h = s.useContext(d),
        p = s.useMemo(
            () =>
                u({
                    theme: null != n ? n : h.theme,
                    primaryColor: null != r ? r : h.primaryColor,
                    secondaryColor: null != i ? i : h.secondaryColor,
                    gradient: null != o ? o : h.gradient,
                    flags: null != l ? l : h.flags,
                    contrast: null != c ? c : h.contrast,
                    saturation: null != f ? f : h.saturation,
                    density: null != _ ? _ : h.density
                }),
            [n, h.theme, h.primaryColor, h.secondaryColor, h.gradient, h.flags, h.contrast, h.saturation, h.density, r, i, o, l, c, f, _]
        );
    return (0, a.jsx)(d.Provider, {
        value: p,
        children: t
    });
}
function h(e) {
    let t = p(),
        n = s.useMemo(
            () =>
                u({
                    ...t,
                    primaryColor: null,
                    secondaryColor: null
                }),
            [t]
        );
    return (0, a.jsx)(d.Provider, {
        value: n,
        children: e.children
    });
}
function p() {
    let e = s.useContext(d);
    if (null == e) throw Error('useThemeContext must be used within a ThemeContext.Provider');
    return e;
}
function m(e) {
    let { children: t } = e,
        n = p();
    return (0, a.jsx)(a.Fragment, { children: t(n) });
}
