n.d(t, {
    $s: function () {
        return T;
    },
    Cg: function () {
        return p;
    },
    KY: function () {
        return I;
    },
    XB: function () {
        return h;
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
var i = n(470079),
    a = n(108131),
    s = n.n(a),
    r = n(544891),
    l = n(570140),
    o = n(963202),
    c = n(229893),
    d = n(286083),
    u = n(976757),
    _ = n(981631);
let E = new Worker(new URL('/assets/' + n.u('59546'), n.b));
function h() {
    return (
        l.Z.dispatch({ type: 'FETCH_STATIC_CLAN_LIST_START' }),
        r.tn
            .get({ url: _.ANM.DISCOVERY_ALL_GAMES })
            .then((e) => {
                let t = e.body.clans.map(u.Gh);
                l.Z.dispatch({
                    type: 'FETCH_STATIC_CLAN_LIST_SUCCESS',
                    clans: (function (e) {
                        let t = new Set();
                        return e.filter((e) => !t.has(e.id) && (t.add(e.id), !0));
                    })(t)
                });
            })
            .catch((e) => {
                l.Z.dispatch({
                    type: 'FETCH_STATIC_CLAN_LIST_FAILURE',
                    error: e
                });
            })
    );
}
async function m(e) {
    var t, n, i;
    if ('loaded' === c.Z.getSearchResult(e).status) return;
    let a = s().v3(JSON.stringify(e)),
        r = c.Z.getStaticClans();
    let o = await ((t = r),
        (n = a),
        (i = e),
        new Promise((e) => {
            let a = (t) => {
                let {
                    data: { id: i, sortedClans: s }
                } = t;
                n === i && e(s), null == E || E.removeEventListener('message', a);
            };
            null == E || E.addEventListener('message', a);
            null == E ||
                E.postMessage({
                    id: n,
                    unsortedClans: t,
                    criteria: i
                });
        })),
        d = {
            status: 'loaded',
            loadedAt: Date.now(),
            items: o,
            guildIds: o.map((e) => e.id)
        };
    l.Z.dispatch({
        type: 'FETCH_CLAN_DISCOVERY_SEARCH_RESULT_SUCCESS',
        criteriaHash: a,
        searchResult: d,
        recommendationId: 'static:'.concat(a)
    });
}
function I(e) {
    let { location: t, query: n } = e,
        a = (0, o.r3)(t);
    return (
        i.useEffect(() => {
            if (!!a)
                g({
                    games: [],
                    traits: []
                });
        }, [a, n]),
        null
    );
}
function g(e) {
    return r.tn.post({
        url: _.ANM.DISCOVERY_RECOMMENDATIONS,
        body: {
            game_application_ids: e.games,
            traits: e.traits,
            playstyle: e.playstyle
        }
    });
}
async function p(e) {
    let t = c.Z.getSearchResult(e),
        { resetPagination: n, updatePaginationResults: i } = d.$.getState();
    if ('loaded' === t.status) return n(), i(t.guildIds), t;
    let a = s().v3(JSON.stringify(e));
    try {
        var r, o;
        let t = await g(e),
            s = t.body.guilds.map(u.Gh),
            c = null !== (r = t.body.guild_ids) && void 0 !== r ? r : [],
            d = {
                status: 'loaded',
                loadedAt: Date.now(),
                items: s,
                guildIds: c
            };
        return (
            n(),
            i(c),
            l.Z.dispatch({
                type: 'FETCH_CLAN_DISCOVERY_SEARCH_RESULT_SUCCESS',
                criteriaHash: a,
                searchResult: d,
                recommendationId: null !== (o = t.body.recommendation_id) && void 0 !== o ? o : ''
            }),
            d
        );
    } catch (e) {
        return (
            l.Z.dispatch({ type: 'FETCH_CLAN_DISCOVERY_SEARCH_RESULT_FAILURE' }),
            {
                status: 'error',
                error: e
            }
        );
    }
}
async function T(e, t) {
    let n = e.slice(0, 99);
    try {
        let e = (
                await r.tn.post({
                    url: _.ANM.DISCOVERY_GUILD_PROFILES,
                    body: { guild_ids: n },
                    signal: t
                })
            ).body.guilds.map(u.Gh),
            i = n.filter((t) => !e.some((e) => e.id === t));
        i.length > 0 && d.$.getState().removeGuilds(i),
            await l.Z.dispatch({
                type: 'FETCH_CLAN_DISCOVERY_PROFILE_LIST_SUCCESS',
                guilds: e,
                failedGuildIds: i
            });
    } catch (e) {
        await l.Z.dispatch({
            type: 'FETCH_CLAN_DISCOVERY_PROFILE_LIST_SUCCESS',
            guilds: [],
            failedGuildIds: []
        });
    }
}
