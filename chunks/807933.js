n(47120);
var i = n(735250), s = n(470079), a = n(920906), r = n(143927), l = n(442837), o = n(481060), c = n(607070), d = n(950279), u = n(741595), _ = n(359380), E = n(480222), h = n(207796), I = n(316553), m = n(689938);
let p = {
        mass: 1,
        tension: 280,
        friction: 20,
        clamp: !0
    }, g = {
        [h.v0.PLAYSTYLE]: function () {
            let [e, t] = s.useState(h.GN.getState().selectedPlaystyle), n = s.useCallback(() => {
                    null != e && h.GN.getState().setSelectedPlaystyle(e);
                }, [e]);
            return (0, i.jsx)(E.Z, {
                onClose: n,
                children: (0, i.jsx)(u.Z, {
                    title: m.Z.Messages.CLAN_DISCOVERY_PLAYSTYLE_TITLE,
                    description: m.Z.Messages.CLAN_DISCOVERY_PLAYSTYLE_SUBTITLE,
                    handleUpdate: t,
                    playstyle: e
                })
            });
        },
        [h.v0.TRAITS]: function () {
            let e = (0, h.GN)(e => e.game, r.Z), t = (0, I.J)({ selectedGame: e }), [n, a] = s.useState(new Set(h.GN.getState().selectedTraits)), l = s.useCallback(() => {
                    h.GN.getState().setSelectedTraits(Array.from(n));
                }, [n]);
            return (0, i.jsx)(E.Z, {
                onClose: l,
                children: (0, i.jsx)(_.Z, {
                    title: m.Z.Messages.CLAN_DISCOVERY_TRAIT_TITLE,
                    description: m.Z.Messages.CLAN_DISCOVERY_TRAIT_SUBTITLE,
                    handleUpdate: a,
                    interests: n,
                    requiredGameId: t,
                    hidePreview: !0
                })
            });
        },
        [h.v0.GAMES]: function () {
            let e = (0, h.GN)(e => e.game, r.Z), t = (0, I.J)({ selectedGame: e }), [n, a] = s.useState(new Set(h.GN.getState().selectedGames)), l = s.useCallback(() => {
                    h.GN.getState().setSelectedGames(Array.from(n));
                }, [n]);
            return (0, i.jsx)(E.Z, {
                onClose: l,
                children: (0, i.jsx)(d.Z, {
                    title: m.Z.Messages.CLAN_DISCOVERY_GAME_TITLE,
                    description: m.Z.Messages.CLAN_DISCOVERY_GAME_SUBTITLE,
                    requiredGameId: t,
                    handleUpdate: a,
                    gameApplicationIds: n
                })
            });
        }
    };
function T(e) {
    let {
            item: t,
            state: n,
            cleanUp: r
        } = e, d = (0, l.e7)([c.Z], () => c.Z.useReducedMotion), u = s.useMemo(() => {
            let e = g[t];
            return null == e ? null : (0, i.jsx)(e, {});
        }, [t]), _ = (0, a.useSpring)({
            from: { opacity: 0 },
            to: { opacity: n === o.TransitionStates.YEETED ? 0 : 1 },
            config: p,
            immediate: d,
            onRest: () => {
                n === o.TransitionStates.YEETED && r();
            }
        });
    return (0, i.jsx)(a.animated.div, {
        style: _,
        children: u
    });
}
function S(e) {
    return e;
}
function C(e, t, n, s) {
    return (0, i.jsx)(T, {
        item: t,
        state: n,
        cleanUp: s
    }, e);
}
t.Z = s.memo(function (e) {
    let {mode: t} = e, n = s.useMemo(() => null != g[t] ? [t] : [], [t]);
    return (0, i.jsx)(o.TransitionGroup, {
        items: n,
        renderItem: C,
        getItemKey: S
    });
});
