n(653041), n(47120), n(733860);
var i = n(807034),
    a = n(837281),
    s = n.n(a),
    r = n(392711),
    l = n(664751),
    o = n(544891),
    c = n(343817),
    d = n(570140),
    u = n(70956),
    _ = n(900849),
    E = n(356164),
    h = n(726115),
    m = n(981631),
    I = n(731455);
let p = window.GLOBAL_ENV.ALGOLIA_KEY,
    g = 'production' === window.GLOBAL_ENV.PROJECT_ENV ? 'prod_discoverable_guilds' : 'staging' === window.GLOBAL_ENV.PROJECT_ENV ? 'stg_discoverable_guilds' : 'dev_discoverable_guilds',
    T = {
        'auto_removed:': !1,
        approximate_presence_count: '> 0',
        approximate_member_count: '> 0'
    };
async function f(e, t, n) {
    let { categoryId: i, languageCode: a, offset: s, length: r } = t,
        l = E.Z.getAlgoliaSearchIndex();
    if (null == l || E.Z.getIsBlocked(e)) return;
    d.Z.dispatch({
        type: 'GLOBAL_DISCOVERY_SERVERS_SEARCH_START',
        query: e,
        categoryId: i,
        languageCode: a
    });
    let o = Object.assign({}, T, t.filters),
        m = Object.keys(o).map((e) => ''.concat(e).concat(o[e]));
    i !== I.Hk && m.push('(primary_category_id='.concat(i, ' OR categories.id=').concat(i, ')'));
    let p = m.join(' AND '),
        g = null != a ? a : (0, h.Xp)();
    try {
        let { hits: t, nbHits: n } = await l.search(e, {
            filters: p,
            optionalFilters: ['preferred_locale: '.concat(g)],
            length: r,
            offset: s,
            restrictSearchableAttributes: ['name', 'description', 'keywords', 'categories.name', 'categories.name_localizations.'.concat(g), 'primary_category.name', 'primary_category.name_localizations.'.concat(g), 'vanity_url_code']
        });
        d.Z.dispatch({
            type: 'GLOBAL_DISCOVERY_SERVERS_SEARCH_SUCCESS',
            query: e,
            categoryId: i,
            languageCode: a,
            guilds: [
                ...t.map((e) => ({
                    ...e,
                    id: e.objectID
                }))
            ],
            total: n
        });
    } catch (o) {
        var S;
        let s = new c.Hx(o),
            r = null !== (S = null == n ? void 0 : n.isRetry) && void 0 !== S && S;
        o.body.retry_after > 0 && l === E.Z.getAlgoliaSearchIndex()
            ? (_.m9({
                  categoryId: i,
                  error: s,
                  willRequestRetry: !0,
                  isRequestRetry: r
              }),
              setTimeout(() => f(e, t, { isRetry: !0 }), o.body.retry_after * u.Z.Millis.SECOND))
            : (_.m9({
                  categoryId: i,
                  error: s,
                  willRequestRetry: !1,
                  isRequestRetry: r
              }),
              d.Z.dispatch({
                  type: 'GLOBAL_DISCOVERY_SERVERS_SEARCH_FAILURE',
                  query: e,
                  categoryId: i,
                  languageCode: a,
                  error: o
              }));
    }
}
async function S(e) {
    let { query: t, algoliaFilters: n, onComplete: i } = e,
        a = E.Z.getAlgoliaSearchIndex();
    if (null == a || E.Z.getIsBlocked(t)) return;
    let s = Object.assign({}, T, n),
        l = Object.keys(s).map((e) => ''.concat(e).concat(s[e]));
    try {
        var o;
        let { nbHits: e, facets: n } = await a.search(t, {
            filters: l.join(' AND '),
            facets: ['categories.id']
        });
        if (null == n) return;
        let i = null !== (o = n['categories.id']) && void 0 !== o ? o : {};
        delete i[I.o3];
        let s = (0, r.chain)(i)
            .entries()
            .map((e) => {
                let [t, n] = e;
                return [parseInt(t, 10), n];
            })
            .sort((e, t) => t[1] - e[1])
            .slice(0, 7)
            .value();
        s.unshift([I.Hk, e]),
            d.Z.dispatch({
                type: 'GLOBAL_DISCOVERY_SERVERS_SEARCH_COUNT_SUCCESS',
                query: t,
                categoryCounts: s
            });
    } catch (e) {
        d.Z.dispatch({
            type: 'GLOBAL_DISCOVERY_SERVERS_SEARCH_COUNT_FAILURE',
            query: t,
            error: e
        });
    } finally {
        null == i || i();
    }
}
async function C(e) {
    let { categoryId: t } = e,
        n = E.Z.getLastFetchTimestamp({ categoryId: t });
    if ((0, h.Ew)(n)) {
        d.Z.dispatch({
            type: 'GLOBAL_DISCOVERY_SERVERS_SEARCH_START',
            categoryId: t,
            reset: !0
        });
        try {
            let { guilds: e, total: n } = (
                await o.tn.get({
                    url: m.ANM.GUILD_DISCOVERY,
                    query: l.stringify({ categories: [t] }),
                    oldFormErrors: !0
                })
            ).body;
            d.Z.dispatch({
                type: 'GLOBAL_DISCOVERY_SERVERS_SEARCH_SUCCESS',
                categoryId: t,
                guilds: e,
                total: n
            });
        } catch (e) {
            d.Z.dispatch({
                type: 'GLOBAL_DISCOVERY_SERVERS_SEARCH_FAILURE',
                categoryId: t,
                error: e
            }),
                _.rC({ categoryId: t });
        }
    }
}
async function N() {
    let e = E.Z.getLastFetchTimestamp({ categoryId: I.Hk });
    if ((0, h.Ew)(e)) {
        d.Z.dispatch({
            type: 'GLOBAL_DISCOVERY_SERVERS_SEARCH_START',
            categoryId: I.Hk,
            reset: !0
        });
        try {
            let { guilds: e, total: t } = (
                await o.tn.get({
                    url: m.ANM.GUILD_DISCOVERY,
                    query: l.stringify({
                        offset: 0,
                        limit: 30
                    }),
                    oldFormErrors: !0
                })
            ).body;
            d.Z.dispatch({
                type: 'GLOBAL_DISCOVERY_SERVERS_SEARCH_SUCCESS',
                categoryId: I.Hk,
                guilds: e,
                total: t
            });
        } catch (e) {
            d.Z.dispatch({
                type: 'GLOBAL_DISCOVERY_SERVERS_SEARCH_FAILURE',
                categoryId: I.Hk,
                error: e
            }),
                _.rC({ categoryId: I.Hk });
        }
    }
}
t.Z = {
    handleBlockedSearchQuery: function (e) {
        d.Z.dispatch({
            type: 'GLOBAL_DISCOVERY_SERVERS_SEARCH_BLOCKED',
            query: e
        });
    },
    createAlgoliaIndex: function () {
        if (null == p) return;
        let e = s()('NKTZZ4AIZU', p, { responsesCache: (0, i.A)() }).initIndex(g);
        d.Z.dispatch({
            type: 'GLOBAL_DISCOVERY_SERVERS_SEARCH_INITIALIZED',
            algoliaSearchIndex: e
        });
    },
    fetchAlgoliaSearchResults: f,
    fetchAlgoliaSearchResultCounts: S,
    clearAlgoliaSearchResults: function (e) {
        var t;
        d.Z.dispatch({
            type: 'GLOBAL_DISCOVERY_SERVERS_SEARCH_CLEAR',
            ignoreQueries: null !== (t = null == e ? void 0 : e.ignoreQueries) && void 0 !== t ? t : []
        });
    },
    fetchFeaturedGuilds: N,
    fetchCategoryFeaturedGuilds: C,
    resetSearchLayout: function () {
        d.Z.dispatch({ type: 'GLOBAL_DISCOVERY_SERVERS_SEARCH_LAYOUT_RESET' });
    }
};
