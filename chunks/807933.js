n(47120);
var i = n(735250),
    a = n(470079),
    s = n(120356),
    r = n.n(s),
    l = n(348327),
    o = n.n(l),
    c = n(212433),
    d = n(143927),
    u = n(481060),
    _ = n(410030),
    E = n(950279),
    h = n(741595),
    m = n(359380),
    I = n(766219),
    p = n(480222),
    g = n(207796),
    T = n(558831),
    f = n(304231),
    S = n(981631),
    C = n(689938),
    N = n(454042);
let A = {
        mass: 1,
        tension: 280,
        friction: 20,
        clamp: !0
    },
    v = {
        [g.v0.PLAYSTYLE]: function () {
            let e = (0, g.GN)((e) => e.selectedPlaystyle, d.Z),
                [t, n] = a.useState(g.GN.getState().selectedPlaystyle),
                s = a.useCallback(() => {
                    g.GN.getState().setSelectedPlaystyle(t);
                }, [t]),
                r = a.useCallback(() => {
                    n(e);
                }, [e]),
                l = a.useMemo(() => !o()(t, e), [t, e]);
            return (0, i.jsx)(p.Z, {
                hasChanges: l,
                onSave: s,
                onReset: r,
                children: (0, i.jsx)(h.Z, {
                    title: C.Z.Messages.CLAN_DISCOVERY_PLAYSTYLE_TITLE,
                    description: C.Z.Messages.CLAN_DISCOVERY_PLAYSTYLE_SUBTITLE,
                    onUpdatePlaystyle: n,
                    playstyle: t
                })
            });
        },
        [g.v0.TRAITS]: function () {
            let e = (0, g.GN)((e) => e.selectedTraits, d.Z),
                [t, n] = a.useState(new Set(e)),
                s = a.useCallback(() => {
                    g.GN.getState().setSelectedTraits(Array.from(t));
                }, [t]),
                r = a.useCallback(() => {
                    n(new Set(e));
                }, [e]),
                l = a.useMemo(() => !o()(t, e), [t, e]);
            return (0, i.jsx)(p.Z, {
                hasChanges: l,
                onSave: s,
                onReset: r,
                children: (0, i.jsx)(m.Z, {
                    title: C.Z.Messages.CLAN_DISCOVERY_TRAIT_TITLE,
                    description: C.Z.Messages.CLAN_DISCOVERY_TRAIT_SUBTITLE,
                    onUpdateTraits: n,
                    traits: t,
                    hidePreview: !0
                })
            });
        },
        [g.v0.GAMES]: function () {
            let e = (0, g.GN)((e) => e.selectedGames, d.Z),
                [t, n] = a.useState(new Set(e)),
                s = a.useCallback(() => {
                    g.GN.getState().setSelectedGames(Array.from(t));
                }, [t]),
                r = a.useCallback(() => {
                    n(new Set(e));
                }, [e]),
                l = a.useMemo(() => !o()(t, e), [t, e]);
            return (0, i.jsx)(p.Z, {
                hasChanges: l,
                onSave: s,
                onReset: r,
                children: (0, i.jsx)(E.Z, {
                    title: C.Z.Messages.CLAN_DISCOVERY_GAME_TITLE,
                    description: C.Z.Messages.CLAN_DISCOVERY_GAME_SUBTITLE,
                    onUpdateGames: n,
                    gameApplicationIds: t
                })
            });
        },
        [g.v0.PREFERENCES]: function () {
            let e = (0, g.GN)((e) => e.selectedGames, d.Z),
                t = (0, g.GN)((e) => e.selectedPlaystyle, d.Z),
                n = (0, g.GN)((e) => e.selectedTraits, d.Z),
                [s, r] = a.useState(new Set(e)),
                [l, c] = a.useState(t),
                [u, _] = a.useState(new Set(n)),
                E = a.useMemo(
                    () => ({
                        games: Array.from(s),
                        playstyle: l,
                        traits: Array.from(u)
                    }),
                    [s, l, u]
                ),
                h = a.useMemo(
                    () => ({
                        games: e,
                        playstyle: t,
                        traits: n
                    }),
                    [e, t, n]
                ),
                m = a.useMemo(() => !o()(E, h), [h, E]),
                f = a.useCallback(() => {
                    var e;
                    g.GN.getState().setSelectedGames(E.games), g.GN.getState().setSelectedPlaystyle(null !== (e = E.playstyle) && void 0 !== e ? e : null), g.GN.getState().setSelectedTraits(E.traits), (0, I.Og)();
                }, [E.games, E.playstyle, E.traits]),
                S = a.useCallback(() => {
                    r(new Set(h.games)), c(h.playstyle), _(new Set(h.traits));
                }, [h.games, h.playstyle, h.traits]);
            return (0, i.jsx)(p.Z, {
                hasChanges: m,
                onSave: f,
                onReset: S,
                children: (0, i.jsx)(T.Z, {
                    traits: u,
                    gameApplicationIds: s,
                    playstyle: l,
                    onUpdateGames: r,
                    onUpdateTraits: _,
                    onUpdatePlaystyle: c
                })
            });
        },
        [g.v0.GET_STARTED]: function () {
            let e = (0, _.ZP)(),
                t = a.useCallback(() => {
                    (0, g.fH)(g.v0.DISCOVERY);
                }, []),
                n = a.useMemo(() => (e === S.BRd.DARK ? N.genericOnboardingBackgroundImageDark : N.genericOnboardingBackgroundImageLight), [e]);
            return (0, i.jsx)('div', {
                className: N.container,
                children: (0, i.jsx)('div', {
                    className: N.innerContainer,
                    children: (0, i.jsxs)('div', {
                        className: r()(n, N.userOnboarding),
                        children: [
                            (0, i.jsx)('div', { className: N.backgroundImageBlur }),
                            (0, i.jsx)('div', {
                                className: N.backgroundImageContent,
                                children: (0, i.jsx)(f.Z, { onDismiss: t })
                            })
                        ]
                    })
                })
            });
        }
    };
function Z(e) {
    let { item: t, state: n, cleanUp: s } = e,
        r = a.useMemo(() => {
            let e = v[t];
            return null == e ? null : (0, i.jsx)(e, {});
        }, [t]),
        l = (0, u.useSpring)({
            from: { opacity: 0 },
            to: { opacity: n === u.TransitionStates.YEETED ? 0 : 1 },
            config: A,
            onRest: () => {
                n === u.TransitionStates.YEETED && s();
            }
        });
    return (0, i.jsx)(c.animated.div, {
        style: l,
        children: r
    });
}
function L(e) {
    return e;
}
function R(e, t, n, a) {
    return (0, i.jsx)(
        Z,
        {
            item: t,
            state: n,
            cleanUp: a
        },
        e
    );
}
t.Z = a.memo(function (e) {
    let { mode: t } = e,
        n = a.useMemo(() => (null != v[t] ? [t] : []), [t]);
    return (0, i.jsx)(u.TransitionGroup, {
        items: n,
        renderItem: R,
        getItemKey: L
    });
});
