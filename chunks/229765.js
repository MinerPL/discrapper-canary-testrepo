n.d(t, {
    $s: function () {
        return A;
    },
    Cg: function () {
        return g;
    },
    EV: function () {
        return R;
    },
    IS: function () {
        return N;
    },
    KY: function () {
        return T;
    },
    SI: function () {
        return C;
    },
    XB: function () {
        return I;
    },
    bO: function () {
        return O;
    },
    jc: function () {
        return m;
    }
}),
    n(315314),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(47120);
var r = n(470079),
    i = n(392711),
    a = n.n(i),
    s = n(108131),
    o = n.n(s),
    l = n(544891),
    u = n(570140),
    c = n(963202),
    d = n(229893),
    _ = n(286083),
    E = n(207796),
    f = n(976757),
    h = n(981631);
let p = new Worker(new URL('/assets/' + n.u('59546'), n.b));
function I() {
    return (
        u.Z.dispatch({ type: 'FETCH_STATIC_CLAN_LIST_START' }),
        l.tn
            .get({ url: h.ANM.DISCOVERY_ALL_GAMES })
            .then((e) => {
                let t = e.body.clans.map(f.Gh);
                u.Z.dispatch({
                    type: 'FETCH_STATIC_CLAN_LIST_SUCCESS',
                    clans: (function (e) {
                        let t = new Set();
                        return e.filter((e) => !t.has(e.id) && (t.add(e.id), !0));
                    })(t)
                });
            })
            .catch((e) => {
                u.Z.dispatch({
                    type: 'FETCH_STATIC_CLAN_LIST_FAILURE',
                    error: e
                });
            })
    );
}
async function m(e) {
    var t, n, r;
    if ('loaded' === d.Z.getSearchResult(e).status) return;
    let i = o().v3(JSON.stringify(e)),
        a = d.Z.getStaticClans();
    let s = await ((t = a),
        (n = i),
        (r = e),
        new Promise((e) => {
            let i = (t) => {
                let {
                    data: { id: r, sortedClans: a }
                } = t;
                n === r && e(a), null == p || p.removeEventListener('message', i);
            };
            null == p || p.addEventListener('message', i);
            null == p ||
                p.postMessage({
                    id: n,
                    unsortedClans: t,
                    criteria: r
                });
        })),
        l = {
            status: 'loaded',
            loadedAt: Date.now(),
            items: s,
            guildIds: s.map((e) => e.id)
        };
    u.Z.dispatch({
        type: 'FETCH_CLAN_DISCOVERY_SEARCH_RESULT_SUCCESS',
        criteriaHash: i,
        searchResult: l,
        recommendationId: 'static:'.concat(i)
    });
}
function T(e) {
    let { location: t, query: n } = e,
        i = (0, c.r3)(t);
    return (
        r.useEffect(() => {
            if (!!i)
                S({
                    games: [],
                    traits: []
                });
        }, [i, n]),
        null
    );
}
function S(e) {
    return l.tn.post({
        url: h.ANM.DISCOVERY_RECOMMENDATIONS,
        body: {
            game_application_ids: e.games,
            traits: e.traits,
            playstyle: e.playstyle
        }
    });
}
async function g(e) {
    let t = d.Z.getSearchResult(e),
        { resetPagination: n, updatePaginationResults: r } = _.a.getState();
    if ('loaded' === t.status) return n({ pageMemoryEnabled: !0 }), r(t.guildIds), t;
    let i = o().v3(JSON.stringify(e));
    try {
        var a, s;
        let t = await S(e),
            o = t.body.guilds.map(f.Gh),
            l = null !== (a = t.body.guild_ids) && void 0 !== a ? a : [],
            c = {
                status: 'loaded',
                loadedAt: Date.now(),
                items: o,
                guildIds: l
            };
        return (
            n(),
            r(l),
            u.Z.dispatch({
                type: 'FETCH_CLAN_DISCOVERY_SEARCH_RESULT_SUCCESS',
                criteriaHash: i,
                searchResult: c,
                recommendationId: null !== (s = t.body.recommendation_id) && void 0 !== s ? s : ''
            }),
            c
        );
    } catch (e) {
        return (
            u.Z.dispatch({ type: 'FETCH_CLAN_DISCOVERY_SEARCH_RESULT_FAILURE' }),
            {
                status: 'error',
                error: e
            }
        );
    }
}
async function A(e, t) {
    let n = e.slice(0, 99);
    try {
        let e = (
                await l.tn.post({
                    url: h.ANM.DISCOVERY_GUILD_PROFILES,
                    body: { guild_ids: n },
                    signal: t
                })
            ).body.guilds.map(f.Gh),
            r = n.filter((t) => !e.some((e) => e.id === t));
        r.length > 0 && _.a.getState().removeGuilds(r),
            await u.Z.dispatch({
                type: 'FETCH_CLAN_DISCOVERY_PROFILE_LIST_SUCCESS',
                guilds: e,
                failedGuildIds: r
            });
    } catch (e) {
        await u.Z.dispatch({
            type: 'FETCH_CLAN_DISCOVERY_PROFILE_LIST_SUCCESS',
            guilds: [],
            failedGuildIds: []
        });
    }
}
async function N() {
    let e = (await l.tn.get({ url: h.ANM.GUILD_DISCOVERY_SAVED_GUILDS })).body.guilds.map(f.Gh);
    await u.Z.dispatch({
        type: 'FETCH_CLAN_DISCOVERY_SAVED_GUILDS_SUCCESS',
        guilds: e
    });
}
async function O() {
    let e = d.Z.getSavedGuildIds(),
        t = E.GN.getState().savedGuildIds,
        n = a().difference(t, e);
    n.length > 0 && (await v(n)), E.GN.setState({ savedGuildIds: [] });
}
async function R(e) {
    u.Z.dispatch({
        type: 'DISCOVERY_SAVED_GUILD_ADD',
        guildId: e
    });
    try {
        await l.tn.put({
            url: h.ANM.GUILD_DISCOVERY_SAVED_GUILDS,
            body: { guild_id: e }
        });
    } catch (t) {
        throw (
            (u.Z.dispatch({
                type: 'DISCOVERY_SAVED_GUILD_DELETE',
                guildId: e
            }),
            t)
        );
    }
}
async function v(e) {
    u.Z.dispatch({
        type: 'DISCOVERY_SAVED_GUILD_BULK_ADD',
        guildIds: e
    });
    try {
        await l.tn.put({
            url: h.ANM.GUILD_DISCOVERY_SAVED_GUILDS_BULK,
            body: { guild_ids: e }
        });
    } catch (t) {
        throw (
            (u.Z.dispatch({
                type: 'DISCOVERY_SAVED_GUILD_BULK_DELETE',
                guildIds: e
            }),
            t)
        );
    }
}
async function C(e) {
    u.Z.dispatch({
        type: 'DISCOVERY_SAVED_GUILD_DELETE',
        guildId: e
    });
    try {
        await l.tn.del({
            url: h.ANM.GUILD_DISCOVERY_SAVED_GUILDS,
            body: { guild_id: e }
        });
    } catch (t) {
        throw (
            (u.Z.dispatch({
                type: 'DISCOVERY_SAVED_GUILD_ADD',
                guildId: e
            }),
            t)
        );
    }
}
