n.d(t, {
    $s: function () {
        return E;
    },
    Cg: function () {
        return h;
    },
    XB: function () {
        return u;
    },
    jc: function () {
        return _;
    }
}),
    n(315314),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(47120);
var i = n(108131),
    a = n.n(i),
    s = n(544891),
    r = n(570140),
    l = n(229893),
    o = n(976757),
    c = n(981631);
let d = new Worker(new URL('/assets/' + n.u('59546'), n.b));
function u() {
    return (
        r.Z.dispatch({ type: 'FETCH_STATIC_CLAN_LIST_START' }),
        s.tn
            .get({ url: c.ANM.DISCOVERY_ALL_GAMES })
            .then((e) => {
                let t = e.body.clans.map(o.Gh);
                r.Z.dispatch({
                    type: 'FETCH_STATIC_CLAN_LIST_SUCCESS',
                    clans: (function (e) {
                        let t = new Set();
                        return e.filter((e) => !t.has(e.id) && (t.add(e.id), !0));
                    })(t)
                });
            })
            .catch((e) => {
                r.Z.dispatch({
                    type: 'FETCH_STATIC_CLAN_LIST_FAILURE',
                    error: e
                });
            })
    );
}
async function _(e) {
    var t, n, i;
    if ('loaded' === l.Z.getSearchResult(e).status) return;
    let s = a().v3(JSON.stringify(e)),
        o = l.Z.getStaticClans();
    let c = await ((t = o),
        (n = s),
        (i = e),
        new Promise((e) => {
            let a = (t) => {
                let {
                    data: { id: i, sortedClans: s }
                } = t;
                n === i && e(s), null == d || d.removeEventListener('message', a);
            };
            null == d || d.addEventListener('message', a);
            null == d ||
                d.postMessage({
                    id: n,
                    unsortedClans: t,
                    criteria: i
                });
        })),
        u = {
            status: 'loaded',
            loadedAt: Date.now(),
            items: c,
            guildIds: c.map((e) => e.id)
        };
    r.Z.dispatch({
        type: 'FETCH_CLAN_DISCOVERY_SEARCH_RESULT_SUCCESS',
        criteriaHash: s,
        searchResult: u,
        recommendationId: 'static:'.concat(s)
    });
}
async function h(e) {
    let t = l.Z.getSearchResult(e);
    if ('loaded' === t.status) return t;
    let n = a().v3(JSON.stringify(e));
    try {
        var i, d;
        let t = await s.tn.post({
                url: c.ANM.DISCOVERY_RECOMMENDATIONS,
                body: {
                    game_application_ids: e.games,
                    traits: e.traits,
                    playstyle: e.playstyle
                }
            }),
            a = t.body.guilds.map(o.Gh),
            l = null !== (i = t.body.guild_ids) && void 0 !== i ? i : [],
            u = {
                status: 'loaded',
                loadedAt: Date.now(),
                items: a,
                guildIds: l
            };
        return (
            r.Z.dispatch({
                type: 'FETCH_CLAN_DISCOVERY_SEARCH_RESULT_SUCCESS',
                criteriaHash: n,
                searchResult: u,
                recommendationId: null !== (d = t.body.recommendation_id) && void 0 !== d ? d : ''
            }),
            u
        );
    } catch (e) {
        return {
            status: 'error',
            error: e
        };
    }
}
async function E(e, t) {
    try {
        let n = (
                await s.tn.post({
                    url: c.ANM.DISCOVERY_GUILD_PROFILES,
                    body: { guild_ids: e },
                    signal: t
                })
            ).body.guilds.map(o.Gh),
            i = e.filter((e) => !n.some((t) => t.id === e));
        await r.Z.dispatch({
            type: 'FETCH_CLAN_DISCOVERY_PROFILE_LIST_SUCCESS',
            guilds: n,
            failedGuildIds: i
        });
    } catch (t) {
        await r.Z.dispatch({
            type: 'FETCH_CLAN_DISCOVERY_PROFILE_LIST_SUCCESS',
            guilds: [],
            failedGuildIds: e
        });
    }
}
