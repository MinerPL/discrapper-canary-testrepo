n.d(t, {
    Ce: function () {
        return T;
    },
    GN: function () {
        return f;
    },
    PJ: function () {
        return I;
    },
    fH: function () {
        return h;
    },
    hz: function () {
        return i;
    },
    qQ: function () {
        return p;
    },
    t1: function () {
        return m;
    },
    v0: function () {
        return r;
    }
}),
    n(47120);
var r,
    i,
    a,
    s,
    o,
    l,
    u = n(652874),
    c = n(868888),
    d = n(731965),
    _ = n(433517),
    E = n(963202);
((s = r || (r = {})).ADMIN_UPSELL = 'admin_upsell'), (s.GET_STARTED = 'get_started'), (s.DISCOVERY = 'discovery'), (s.PLAYSTYLE = 'playstyle'), (s.TRAITS = 'traits'), (s.GAMES = 'games'), (s.SAVED_GUILDS = 'saved_guilds'), (s.PREFERENCES = 'preferences'), ((o = i || (i = {})).NONE = 'none'), (o.VALORANT = 'valorant'), (o.GENSHIN = 'genshin'), ((l = a || (a = {})).USER_UPSELL = 'user_upsell'), (l.USER_ONBOARDING = 'user_onboarding');
let f = (0, u.Z)(
    (0, c.tJ)(
        (e) => ({
            mode: 'admin_upsell',
            previousMode: 'admin_upsell',
            game: 'none',
            completedNux: !1,
            userUpsellScreen: 'user_upsell',
            savedGuildIds: [],
            selectedGames: [],
            selectedPlaystyle: null,
            selectedTraits: [],
            dismissedPilotAdminNux: !1,
            setSavedGuildIds: (t) => (0, d.j)(() => e({ savedGuildIds: t })),
            setGame: (t) => (0, d.j)(() => e({ game: t })),
            setSelectedGames: (t) =>
                (0, d.j)(() =>
                    e({
                        selectedGames: t,
                        completedNux: !0
                    })
                ),
            setSelectedPlaystyle: (t) =>
                (0, d.j)(() =>
                    e({
                        selectedPlaystyle: t,
                        completedNux: !0
                    })
                ),
            setSelectedTraits: (t) =>
                (0, d.j)(() =>
                    e({
                        selectedTraits: t,
                        completedNux: !0
                    })
                ),
            setUserUpsellScreen: (t) => (0, d.j)(() => e({ userUpsellScreen: t }))
        }),
        {
            name: 'clan-discovery',
            getStorage: () => ({
                getItem: (e) => {
                    var t;
                    return null !== (t = _.K.get(e)) && void 0 !== t ? t : null;
                },
                setItem: (e, t) => _.K.set(e, t),
                removeItem: (e) => _.K.remove(e)
            }),
            partialize: (e) => ({
                mode: e.mode,
                game: e.game,
                completedNux: e.completedNux,
                savedGuildIds: e.savedGuildIds,
                selectedGames: e.selectedGames,
                selectedPlaystyle: e.selectedPlaystyle,
                selectedTraits: e.selectedTraits,
                dismissedPilotAdminNux: e.dismissedPilotAdminNux
            })
        }
    )
);
function h(e, t) {
    let n = f.getState().mode,
        r = f.getState().completedNux;
    if ('admin_upsell' === e) {
        let t = (0, E.rx)('setClanDiscoveryMode'),
            n = f.getState().dismissedPilotAdminNux;
        t && n && (e = 'discovery');
    }
    (0, d.j)(() => {
        f.setState({
            mode: e,
            previousMode: n,
            completedNux: null != t ? t : r
        });
    });
}
function p(e, t) {
    let n = f.getState().savedGuildIds,
        r = t ? [...n, e] : n.filter((t) => t !== e);
    (0, d.j)(() => f.setState({ savedGuildIds: r }));
}
function I() {
    (0, d.j)(() => {
        f.setState({
            completedNux: !1,
            dismissedPilotAdminNux: !1,
            mode: 'admin_upsell',
            previousMode: 'admin_upsell',
            game: 'none',
            userUpsellScreen: 'user_upsell',
            savedGuildIds: [],
            selectedGames: [],
            selectedPlaystyle: null,
            selectedTraits: []
        });
    });
}
function m(e) {
    var t;
    let n = e.selectedGames,
        r = null !== (t = e.selectedPlaystyle) && void 0 !== t ? t : void 0;
    return {
        games: n,
        playstyle: r,
        traits: e.selectedTraits
    };
}
function T() {
    (0, d.j)(() => {
        f.setState({ dismissedPilotAdminNux: !0 }), h('discovery');
    });
}
