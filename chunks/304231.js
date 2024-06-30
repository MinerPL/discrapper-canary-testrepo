n(47120);
var i = n(735250), s = n(470079), a = n(920906), r = n(143927), l = n(442837), o = n(607070), c = n(950279), d = n(741595), u = n(754961), _ = n(363915), E = n(359380), h = n(207796), I = n(316553), m = n(689938), p = n(843198);
let g = {
    mass: 1,
    tension: 600,
    friction: 60
};
function T(e) {
    let {selectedGame: t} = e, n = (0, h.GN)(e => e.selectedGames, r.Z), a = s.useMemo(() => new Set(n), [n]), l = (0, I.J)({ selectedGame: t }), o = s.useCallback(e => h.GN.getState().setSelectedGames(Array.from(e)), []);
    return (0, i.jsx)(c.Z, {
        title: m.Z.Messages.CLAN_DISCOVERY_GAME_TITLE,
        description: m.Z.Messages.CLAN_DISCOVERY_GAME_SUBTITLE,
        requiredGameId: l,
        handleUpdate: o,
        gameApplicationIds: a
    });
}
function S() {
    let e = (0, h.GN)(e => e.selectedPlaystyle, r.Z), t = s.useCallback(e => h.GN.getState().setSelectedPlaystyle(e), []);
    return (0, i.jsx)(d.Z, {
        title: m.Z.Messages.CLAN_DISCOVERY_PLAYSTYLE_TITLE,
        description: m.Z.Messages.CLAN_DISCOVERY_PLAYSTYLE_SUBTITLE,
        handleUpdate: t,
        playstyle: e
    });
}
function C(e) {
    let {selectedGame: t} = e, n = (0, I.J)({ selectedGame: t }), a = (0, h.GN)(e => e.selectedTraits, r.Z), l = s.useMemo(() => new Set(a), [a]), o = s.useCallback(e => h.GN.getState().setSelectedTraits([...e]), []);
    return (0, i.jsx)(E.Z, {
        title: m.Z.Messages.CLAN_DISCOVERY_TRAIT_TITLE,
        description: m.Z.Messages.CLAN_DISCOVERY_TRAIT_SUBTITLE,
        handleUpdate: o,
        interests: l,
        requiredGameId: n,
        hidePreview: !0
    });
}
function N(e) {
    return e.toString();
}
t.Z = s.memo(function (e) {
    let {
            selectedGame: t,
            setScreen: n
        } = e, c = s.useRef(null), d = s.useRef(null), E = s.useRef(null), I = (0, l.e7)([o.Z], () => o.Z.useReducedMotion), [f, A] = s.useState(0), [Z, L] = s.useState(0), v = (0, h.GN)(e => e.selectedPlaystyle, r.Z), O = (0, h.GN)(e => e.previousMode, r.Z), R = s.useCallback(e => {
            A(e), Z < e && L(e);
        }, [Z]), x = s.useCallback(() => {
            0 === f ? (n(h.o2.USER_UPSELL), (0, h.fH)(O)) : R(f - 1);
        }, [
            f,
            O,
            n,
            R
        ]), P = s.useCallback(() => {
            2 === f ? (0, h.fH)(h.v0.DISCOVERY) : R(f + 1);
        }, [
            f,
            R
        ]), b = s.useMemo(() => 1 === f && null == v, [
            v,
            f
        ]), M = s.useMemo(() => [
            {
                index: 0,
                name: m.Z.Messages.CLAN_SETUP_GAMES_STEP
            },
            {
                index: 1,
                name: m.Z.Messages.CLAN_SETUP_PLAYSTYLE_STEP
            },
            {
                index: 2,
                name: m.Z.Messages.CLAN_SETUP_UTILITY_TRAITS_STEP
            }
        ], []), D = (0, a.useSpring)({
            ref: c,
            from: { opacity: 0 },
            to: { opacity: 1 },
            config: g
        }), y = (0, a.useSpring)({
            ref: d,
            from: {
                opacity: 0,
                transform: I ? 'translateY(0px)' : 'translateY(40px)'
            },
            to: {
                opacity: 1,
                transform: 'translateY(0px)'
            },
            config: g
        }), j = (0, a.useSpring)({
            ref: E,
            from: {
                opacity: 0,
                transform: I ? 'translateY(0px)' : 'translateY(40px)'
            },
            to: {
                opacity: 1,
                transform: 'translateY(0px)'
            },
            config: g
        });
    (0, a.useChain)([
        c,
        d,
        E
    ], [
        0,
        0.2,
        0.5
    ]);
    let U = s.useMemo(() => [f], [f]), G = s.useCallback(e => {
            switch (e) {
            case 0:
                return (0, i.jsx)(T, { selectedGame: t });
            case 1:
                return (0, i.jsx)(S, {});
            case 2:
                return (0, i.jsx)(C, { selectedGame: t });
            }
        }, [t]);
    return (0, i.jsxs)(a.animated.div, {
        className: p.container,
        style: D,
        children: [
            (0, i.jsx)(a.animated.div, {
                className: p.sequencer,
                style: y,
                children: (0, i.jsx)(_.Z, {
                    currentStep: f,
                    items: U,
                    renderItem: G,
                    getItemKey: N
                })
            }),
            (0, i.jsxs)(a.animated.div, {
                className: p.footer,
                style: j,
                children: [
                    (0, i.jsx)(u.T, {
                        currentStepIndex: f,
                        steps: M,
                        furthestStepIndex: Z,
                        onStepClick: R
                    }),
                    (0, i.jsx)(u.i, {
                        className: p.footerButtons,
                        isBackDisabled: !1,
                        isNextDisabled: b,
                        onNextClick: P,
                        onBackClick: x
                    })
                ]
            })
        ]
    });
});
