n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(765053),
    l = n(512969),
    u = n(873546),
    c = n(442837),
    d = n(316792),
    f = n(481060),
    _ = n(168551),
    h = n(540059),
    p = n(19759),
    m = n(706454),
    g = n(451478),
    E = n(597952),
    v = n(252618),
    I = n(80006),
    S = n(587061),
    T = n(392358),
    b = n(981631);
n(81693);
let y = new Set([b.Z5c.LOGIN, b.Z5c.REGISTER]);
t.Z = i.memo(function (e) {
    let { children: t, skipsSettingDefaultPageTitle: a } = e;
    (0, v.ZD)({ skipsSettingDefaultPageTitle: a });
    let { clientThemesClassName: b, clientThemesCSS: A } = (0, _.ZP)(),
        N = i.createElement('style', { [_.PQ]: !0 }, A);
    return (0, r.jsxs)(o.ql, {
        children: [
            (function (e) {
                let t = (0, c.e7)([m.default], () => m.default.locale),
                    n = (0, c.e7)([g.Z], () => g.Z.isFocused(), []),
                    { theme: a, density: o } = (0, f.useThemeContext)(),
                    { reducedMotion: d } = i.useContext(f.AccessibilityPreferencesContext),
                    { accessibilitySettings: _, appWrapperClassName: v } = (0, I.I)(),
                    { fontScale: b, fontScaleClass: A, saturation: N, desaturateUserColors: C, useForcedColors: R, systemForcedColors: O } = _,
                    D = (0, l.TH)(),
                    L = i.useMemo(() => y.has(D.pathname), [D.pathname]);
                (0, S.Z)(window, L);
                let x = (0, T.Z)(window, __OVERLAY__ || n),
                    w = (0, c.e7)([p.Z], () => p.Z.sidebarWidth),
                    M = (0, f.useRedesignIconContext)().enabled,
                    P = (0, h.Q)('AppHelmet');
                return (0, r.jsx)('html', {
                    lang: t,
                    style: 'font-size: '.concat(b, '%; --saturation-factor: ').concat(N, '; --devtools-sidebar-width: ').concat(w, 'px;'),
                    className: s()(
                        e,
                        v,
                        {
                            overlay: __OVERLAY__,
                            'mouse-mode': x,
                            'reduce-motion': d.enabled,
                            'full-motion': !d.enabled,
                            'is-mobile': u.tq,
                            'app-focused': n,
                            'desaturate-user-colors': C,
                            'disable-forced-colors': !R && 'active' === O,
                            'enable-forced-colors': R,
                            'show-redesigned-icons': M,
                            'visual-refresh': P
                        },
                        (0, f.getThemeClass)(a),
                        'density-'.concat(o),
                        (0, E.Z)(),
                        A
                    )
                });
            })(b),
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
                                    crossOrigin: 'anonymous'
                                },
                                t
                            )
                        )
                    })
                );
            })(),
            N,
            t
        ]
    });
});
