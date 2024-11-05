n.d(t, {
    Ce: function () {
        return v;
    },
    GN: function () {
        return h;
    },
    PJ: function () {
        return m;
    },
    fH: function () {
        return p;
    },
    hz: function () {
        return o;
    },
    kw: function () {
        return E;
    },
    t1: function () {
        return g;
    },
    v0: function () {
        return s;
    }
});
var r,
    i,
    a,
    s,
    o,
    l,
    u = n(903797),
    c = n(60071),
    d = n(731965),
    f = n(433517),
    _ = n(963202);
((r = s || (s = {})).ADMIN_UPSELL = 'admin_upsell'), (r.GET_STARTED = 'get_started'), (r.DISCOVERY = 'discovery'), (r.PLAYSTYLE = 'playstyle'), (r.TRAITS = 'traits'), (r.GAMES = 'games'), (r.SAVED_GUILDS = 'saved_guilds'), (r.PREFERENCES = 'preferences'), ((i = o || (o = {})).NONE = 'none'), (i.VALORANT = 'valorant'), (i.GENSHIN = 'genshin'), ((a = l || (l = {})).USER_UPSELL = 'user_upsell'), (a.USER_ONBOARDING = 'user_onboarding');
let h = (0, u.Z)(
    (0, c.tJ)(
        (e) => ({
            mode: 'admin_upsell',
            previousMode: 'admin_upsell',
            game: 'none',
            completedNux: !1,
            userUpsellScreen: 'user_upsell',
            loadingGameApplication: !1,
            selectedGames: [],
            selectedPlaystyle: null,
            selectedTraits: [],
            dismissedPilotAdminNux: !1,
            dismissedSignupAdmin: !1,
            entrypointGameId: null,
            setGame: (t) => (0, d.j)(() => e({ game: t })),
            setSelectedGames: (t) => {
                (0, d.j)(() =>
                    e({
                        selectedGames: t,
                        completedNux: !0
                    })
                );
            },
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
                    return null !== (t = f.K.get(e)) && void 0 !== t ? t : null;
                },
                setItem: (e, t) => f.K.set(e, t),
                removeItem: (e) => f.K.remove(e)
            }),
            partialize: (e) => ({
                mode: e.mode,
                game: e.game,
                completedNux: e.completedNux,
                selectedGames: e.selectedGames,
                selectedPlaystyle: e.selectedPlaystyle,
                selectedTraits: e.selectedTraits,
                dismissedPilotAdminNux: e.dismissedPilotAdminNux,
                dismissedSignupAdmin: e.dismissedSignupAdmin
            })
        }
    )
);
function p(e, t) {
    let n = h.getState().mode,
        r = h.getState().completedNux;
    if ('admin_upsell' === e) {
        let t = (0, _.rx)('setClanDiscoveryMode'),
            n = h.getState().dismissedPilotAdminNux;
        t && n && (e = 'discovery');
        let r = h.getState().dismissedSignupAdmin;
        t && r && (e = 'discovery');
    }
    (0, d.j)(() => {
        h.setState({
            mode: e,
            previousMode: n,
            completedNux: null != t ? t : r
        });
    });
}
function m() {
    (0, d.j)(() => {
        h.setState({
            completedNux: !1,
            dismissedPilotAdminNux: !1,
            dismissedSignupAdmin: !1,
            mode: 'admin_upsell',
            previousMode: 'admin_upsell',
            game: 'none',
            userUpsellScreen: 'user_upsell',
            selectedGames: [],
            selectedPlaystyle: null,
            selectedTraits: [],
            entrypointGameId: null
        });
    });
}
function g(e) {
    var t;
    let n = e.selectedGames,
        r = null !== (t = e.selectedPlaystyle) && void 0 !== t ? t : void 0;
    return {
        games: n,
        playstyle: r,
        traits: e.selectedTraits
    };
}
function E() {
    (0, d.j)(() => {
        h.setState({ dismissedSignupAdmin: !0 }), p('discovery');
    });
}
function v() {
    (0, d.j)(() => {
        h.setState({ dismissedPilotAdminNux: !0 }), p('discovery');
    });
}
