r.d(t, {
    GN: function () {
        return h;
    },
    PJ: function () {
        return g;
    },
    fH: function () {
        return m;
    },
    hz: function () {
        return l;
    },
    o2: function () {
        return c;
    },
    t1: function () {
        return p;
    },
    v0: function () {
        return o;
    }
});
var a, n, i, o, l, c, s = r(652874), d = r(868888), u = r(433517);
(a = o || (o = {})).ADMIN_UPSELL = 'admin_upsell', a.GET_STARTED = 'get_started', a.DISCOVERY = 'discovery', a.PLAYSTYLE = 'playstyle', a.TRAITS = 'traits', a.GAMES = 'games', (n = l || (l = {})).VALORANT = 'valorant', n.GENSHIN = 'genshin', (i = c || (c = {})).USER_UPSELL = 'user_upsell', i.USER_ONBOARDING = 'user_onboarding';
let h = (0, s.Z)((0, d.tJ)(e => ({
    mode: 'admin_upsell',
    previousMode: 'admin_upsell',
    game: 'valorant',
    started: !1,
    userUpsellScreen: 'user_upsell',
    selectedGames: [],
    selectedPlaystyle: null,
    selectedTraits: [],
    setGame: t => e({ game: t }),
    setSelectedGames: t => e({ selectedGames: t }),
    setSelectedPlaystyle: t => e({
        selectedPlaystyle: t,
        started: !0
    }),
    setSelectedTraits: t => e({
        selectedTraits: t,
        started: !0
    }),
    setUserUpsellScreen: t => e({ userUpsellScreen: t })
}), {
    name: 'clan-discovery',
    getStorage: () => ({
        getItem: e => {
            var t;
            return null !== (t = u.K.get(e)) && void 0 !== t ? t : null;
        },
        setItem: (e, t) => u.K.set(e, t),
        removeItem: e => u.K.remove(e)
    }),
    partialize: e => ({
        mode: e.mode,
        game: e.game,
        started: e.started,
        selectedGames: e.selectedGames,
        selectedPlaystyle: e.selectedPlaystyle,
        selectedTraits: e.selectedTraits
    })
}));
function m(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], r = h.getState().mode, a = h.getState().started;
    h.setState({
        mode: e,
        previousMode: r,
        started: t || a
    });
}
function g() {
    h.setState({
        started: !1,
        mode: 'admin_upsell',
        previousMode: 'admin_upsell',
        game: 'valorant',
        userUpsellScreen: 'user_upsell',
        selectedGames: [],
        selectedPlaystyle: null,
        selectedTraits: []
    });
}
function p(e) {
    var t;
    let r = e.selectedGames, a = null !== (t = e.selectedPlaystyle) && void 0 !== t ? t : void 0;
    return {
        games: r,
        playstyle: a,
        traits: e.selectedTraits
    };
}
