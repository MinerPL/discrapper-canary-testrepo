n(47120);
var r = n(735250),
    i = n(470079),
    a = n(120356),
    s = n.n(a),
    o = n(470716),
    l = n(266067),
    u = n(873546),
    c = n(442837),
    d = n(316792),
    _ = n(481060),
    E = n(168551),
    f = n(540059),
    h = n(19759),
    p = n(706454),
    I = n(210887),
    m = n(451478),
    T = n(597952),
    S = n(252618),
    g = n(80006),
    A = n(587061),
    N = n(392358),
    O = n(981631);
n(243997);
let R = new Set([O.Z5c.LOGIN, O.Z5c.REGISTER]);
t.Z = i.memo(function (e) {
    let { children: t, skipsSettingDefaultPageTitle: a } = e;
    (0, S.ZD)({ skipsSettingDefaultPageTitle: a });
    let { clientThemesClassName: O, clientThemesCSS: v } = (0, E.ZP)(),
        C = i.createElement('style', { [E.PQ]: !0 }, v);
    return (0, r.jsxs)(o.ql, {
        children: [
            (function (e) {
                let { locale: t, theme: n } = (0, c.cj)([I.Z, p.default], () => ({
                        locale: p.default.locale,
                        theme: I.Z.theme
                    })),
                    a = (0, c.e7)([m.Z], () => m.Z.isFocused(), []),
                    { reducedMotion: o } = i.useContext(_.AccessibilityPreferencesContext),
                    { accessibilitySettings: d, appWrapperClassName: E } = (0, g.I)(),
                    { fontScale: S, fontScaleClass: O, saturation: v, desaturateUserColors: C, useForcedColors: y, systemForcedColors: L } = d,
                    D = (0, l.TH)(),
                    b = i.useMemo(() => R.has(D.pathname), [D.pathname]);
                (0, A.Z)(window, b);
                let M = (0, N.Z)(window, __OVERLAY__ || a),
                    P = (0, c.e7)([h.Z], () => h.Z.sidebarWidth),
                    U = (0, _.useRedesignIconContext)().enabled,
                    w = (0, f.Q)('AppHelmet');
                return (0, r.jsx)('html', {
                    lang: t,
                    style: 'font-size: '.concat(S, '%; --saturation-factor: ').concat(v, '; --devtools-sidebar-width: ').concat(P, 'px;'),
                    className: s()(
                        e,
                        E,
                        {
                            overlay: __OVERLAY__,
                            'mouse-mode': M,
                            'reduce-motion': o.enabled,
                            'full-motion': !o.enabled,
                            'is-mobile': u.tq,
                            'app-focused': a,
                            'desaturate-user-colors': C,
                            'disable-forced-colors': !y && 'active' === L,
                            'enable-forced-colors': y,
                            'show-redesigned-icons': U,
                            'visual-refresh': w
                        },
                        (0, _.getThemeClass)(n),
                        (0, T.Z)(),
                        O
                    )
                });
            })(O),
            (function () {
                let [e, t] = i.useState([]);
                return (
                    i.useEffect(() => {
                        Promise.all(
                            d.L.map((e) =>
                                n(959598)('./'.concat(e, '.woff2')).then((e) => {
                                    let { default: t } = e;
                                    return t;
                                })
                            )
                        ).then((e) => t(e));
                    }, []),
                    (0, r.jsx)(r.Fragment, {
                        children: e.map((e, t) =>
                            (0, r.jsx)(
                                'link',
                                {
                                    rel: 'preload',
                                    href: e,
                                    as: 'font',
                                    type: 'font/woff2',
                                    crossOrigin: 'true'
                                },
                                t
                            )
                        )
                    })
                );
            })(),
            C,
            t
        ]
    });
});
