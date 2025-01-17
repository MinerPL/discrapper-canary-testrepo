n(47120);
var i = n(735250),
    a = n(470079),
    s = n(338545),
    r = n(143927),
    l = n(442837),
    o = n(481060),
    c = n(607070),
    d = n(950279),
    u = n(741595),
    _ = n(754961),
    E = n(363915),
    h = n(359380),
    m = n(207796),
    I = n(689938),
    g = n(225286);
let p = {
    mass: 1,
    tension: 600,
    friction: 60
};
function T() {
    let e = (0, m.GN)((e) => e.selectedGames, r.Z),
        t = a.useMemo(() => new Set(e), [e]),
        n = a.useCallback((e) => m.GN.getState().setSelectedGames(Array.from(e)), []);
    return (0, i.jsx)(d.Z, {
        title: I.Z.Messages.CLAN_DISCOVERY_GAME_TITLE,
        description: I.Z.Messages.CLAN_DISCOVERY_GAME_SUBTITLE,
        onUpdateGames: n,
        gameApplicationIds: t
    });
}
function S() {
    let e = (0, m.GN)((e) => e.selectedPlaystyle, r.Z),
        t = a.useCallback((e) => m.GN.getState().setSelectedPlaystyle(e), []);
    return (0, i.jsx)(u.Z, {
        title: I.Z.Messages.CLAN_DISCOVERY_PLAYSTYLE_TITLE,
        description: I.Z.Messages.CLAN_DISCOVERY_PLAYSTYLE_SUBTITLE,
        onUpdatePlaystyle: t,
        playstyle: e
    });
}
function f() {
    let e = (0, m.GN)((e) => e.selectedTraits, r.Z),
        t = a.useMemo(() => new Set(e), [e]),
        n = a.useCallback((e) => m.GN.getState().setSelectedTraits([...e]), []);
    return (0, i.jsx)(h.Z, {
        title: I.Z.Messages.CLAN_DISCOVERY_TRAIT_TITLE,
        description: I.Z.Messages.CLAN_DISCOVERY_TRAIT_SUBTITLE,
        onUpdateTraits: n,
        traits: t,
        hidePreview: !0
    });
}
function C(e) {
    return e.toString();
}
t.Z = a.memo(function (e) {
    let { setScreen: t } = e,
        n = a.useRef(null),
        d = a.useRef(null),
        u = a.useRef(null),
        h = (0, l.e7)([c.Z], () => c.Z.useReducedMotion),
        [N, A] = a.useState(0),
        [v, Z] = a.useState(0),
        L = (0, m.GN)((e) => e.selectedPlaystyle, r.Z),
        O = (0, m.GN)((e) => e.previousMode, r.Z),
        R = a.useCallback(
            (e) => {
                A(e), v < e && Z(e);
            },
            [v]
        ),
        x = a.useCallback(() => {
            0 === N ? (t(m.o2.USER_UPSELL), (0, m.fH)(O)) : R(N - 1);
        }, [N, O, t, R]),
        b = a.useCallback(() => {
            2 === N ? (0, m.fH)(m.v0.DISCOVERY) : R(N + 1);
        }, [N, R]),
        P = a.useMemo(() => 1 === N && null == L, [L, N]),
        M = a.useMemo(
            () => [
                {
                    index: 0,
                    name: I.Z.Messages.CLAN_SETUP_GAMES_STEP
                },
                {
                    index: 1,
                    name: I.Z.Messages.CLAN_SETUP_PLAYSTYLE_STEP
                },
                {
                    index: 2,
                    name: I.Z.Messages.CLAN_SETUP_UTILITY_TRAITS_STEP
                }
            ],
            []
        ),
        D = (0, o.useSpring)(
            {
                ref: n,
                from: { opacity: 0 },
                to: { opacity: 1 },
                config: p
            },
            'animate-always'
        ),
        y = (0, o.useSpring)(
            {
                ref: d,
                from: {
                    opacity: 0,
                    transform: h ? 'translateY(0px)' : 'translateY(40px)'
                },
                to: {
                    opacity: 1,
                    transform: 'translateY(0px)'
                },
                config: p
            },
            'animate-always'
        ),
        j = (0, o.useSpring)(
            {
                ref: u,
                from: {
                    opacity: 0,
                    transform: h ? 'translateY(0px)' : 'translateY(40px)'
                },
                to: {
                    opacity: 1,
                    transform: 'translateY(0px)'
                },
                config: p
            },
            'animate-always'
        );
    (0, s.useChain)([n, d, u], [0, 0.2, 0.5]);
    let U = a.useMemo(() => [N], [N]),
        G = a.useCallback((e) => {
            switch (e) {
                case 0:
                    return (0, i.jsx)(T, {});
                case 1:
                    return (0, i.jsx)(S, {});
                case 2:
                    return (0, i.jsx)(f, {});
            }
        }, []);
    return (0, i.jsxs)(s.animated.div, {
        className: g.container,
        style: D,
        children: [
            (0, i.jsx)(s.animated.div, {
                className: g.sequencer,
                style: y,
                children: (0, i.jsx)(E.Z, {
                    currentStep: N,
                    items: U,
                    renderItem: G,
                    getItemKey: C
                })
            }),
            (0, i.jsxs)(s.animated.div, {
                className: g.footer,
                style: j,
                children: [
                    (0, i.jsx)(_.T, {
                        currentStepIndex: N,
                        steps: M,
                        furthestStepIndex: v,
                        onStepClick: R
                    }),
                    (0, i.jsx)(_.i, {
                        className: g.footerButtons,
                        isBackDisabled: !1,
                        isNextDisabled: P,
                        onNextClick: b,
                        onBackClick: x
                    })
                ]
            })
        ]
    });
});
