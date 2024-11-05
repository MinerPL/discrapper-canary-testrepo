n(653041), n(47120), n(733860);
var i = n(807034),
    r = n(837281),
    a = n.n(r),
    l = n(392711),
    s = n(664751),
    o = n(544891),
    c = n(343817),
    d = n(570140),
    u = n(70956),
    h = n(900849),
    m = n(356164),
    p = n(726115),
    g = n(981631),
    f = n(731455);
let _ = window.GLOBAL_ENV.ALGOLIA_KEY,
    E = 'production' === window.GLOBAL_ENV.PROJECT_ENV ? 'prod_discoverable_guilds' : 'staging' === window.GLOBAL_ENV.PROJECT_ENV ? 'stg_discoverable_guilds' : 'dev_discoverable_guilds',
    I = {
        'auto_removed:': !1,
        approximate_presence_count: '> 0',
        approximate_member_count: '> 0'
    };
async function C(e, t, n) {
    let { categoryId: i, languageCode: r, offset: a, length: l } = t,
        s = m.Z.getAlgoliaSearchIndex();
    if (null == s || m.Z.getIsBlocked(e)) return;
    d.Z.dispatch({
        type: 'GLOBAL_DISCOVERY_SERVERS_SEARCH_START',
        query: e,
        categoryId: i,
        languageCode: r
    });
    let o = Object.assign({}, I, t.filters),
        g = Object.keys(o).map((e) => ''.concat(e).concat(o[e]));
    i !== f.Hk && g.push('(primary_category_id='.concat(i, ' OR categories.id=').concat(i, ')'));
    let _ = g.join(' AND '),
        E = null != r ? r : (0, p.Xp)();
    try {
        let { hits: t, nbHits: n } = await s.search(e, {
            filters: _,
            optionalFilters: ['preferred_locale: '.concat(E)],
            length: l,
            offset: a,
            restrictSearchableAttributes: ['name', 'description', 'keywords', 'categories.name', 'categories.name_localizations.'.concat(E), 'primary_category.name', 'primary_category.name_localizations.'.concat(E), 'vanity_url_code']
        });
        d.Z.dispatch({
            type: 'GLOBAL_DISCOVERY_SERVERS_SEARCH_SUCCESS',
            query: e,
            categoryId: i,
            languageCode: r,
            guilds: [
                ...t.map((e) => ({
                    ...e,
                    id: e.objectID
                }))
            ],
            total: n
        });
    } catch (o) {
        var v;
        let a = new c.Hx(o),
            l = null !== (v = null == n ? void 0 : n.isRetry) && void 0 !== v && v;
        o.body.retry_after > 0 && s === m.Z.getAlgoliaSearchIndex()
            ? (h.m9({
                  categoryId: i,
                  error: a,
                  willRequestRetry: !0,
                  isRequestRetry: l
              }),
              setTimeout(() => C(e, t, { isRetry: !0 }), o.body.retry_after * u.Z.Millis.SECOND))
            : (h.m9({
                  categoryId: i,
                  error: a,
                  willRequestRetry: !1,
                  isRequestRetry: l
              }),
              d.Z.dispatch({
                  type: 'GLOBAL_DISCOVERY_SERVERS_SEARCH_FAILURE',
                  query: e,
                  categoryId: i,
                  languageCode: r,
                  error: o
              }));
    }
}
async function v(e) {
    let { query: t, algoliaFilters: n, onComplete: i } = e,
        r = m.Z.getAlgoliaSearchIndex();
    if (null == r || m.Z.getIsBlocked(t)) return;
    let a = Object.assign({}, I, n),
        s = Object.keys(a).map((e) => ''.concat(e).concat(a[e]));
    try {
        var o;
        let { nbHits: e, facets: n } = await r.search(t, {
            filters: s.join(' AND '),
            facets: ['categories.id']
        });
        if (null == n) return;
        let i = null !== (o = n['categories.id']) && void 0 !== o ? o : {};
        delete i[f.o3];
        let a = (0, l.chain)(i)
            .entries()
            .map((e) => {
                let [t, n] = e;
                return [parseInt(t, 10), n];
            })
            .sort((e, t) => t[1] - e[1])
            .slice(0, 7)
            .value();
        a.unshift([f.Hk, e]),
            d.Z.dispatch({
                type: 'GLOBAL_DISCOVERY_SERVERS_SEARCH_COUNT_SUCCESS',
                query: t,
                categoryCounts: a
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
async function S(e) {
    let { categoryId: t, forceRefresh: n = !1 } = e,
        i = m.Z.getLastFetchTimestamp({ categoryId: t });
    if (n || (0, p.Ew)(i)) {
        d.Z.dispatch({
            type: 'GLOBAL_DISCOVERY_SERVERS_SEARCH_START',
            categoryId: t,
            reset: !0
        });
        try {
            let { guilds: e, total: n } = (
                await o.tn.get({
                    url: g.ANM.GUILD_DISCOVERY,
                    query: s.stringify({ categories: [t] }),
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
                h.rC({ categoryId: t });
        }
    }
}
async function N(e) {
    var t;
    let n = null !== (t = null == e ? void 0 : e.forceRefresh) && void 0 !== t && t,
        i = m.Z.getLastFetchTimestamp({ categoryId: f.Hk });
    if (n || (0, p.Ew)(i)) {
        d.Z.dispatch({
            type: 'GLOBAL_DISCOVERY_SERVERS_SEARCH_START',
            categoryId: f.Hk,
            reset: !0
        });
        try {
            let { guilds: e, total: t } = (
                await o.tn.get({
                    url: g.ANM.GUILD_DISCOVERY,
                    query: s.stringify({
                        offset: 0,
                        limit: 30
                    }),
                    oldFormErrors: !0
                })
            ).body;
            d.Z.dispatch({
                type: 'GLOBAL_DISCOVERY_SERVERS_SEARCH_SUCCESS',
                categoryId: f.Hk,
                guilds: e,
                total: t
            });
        } catch (e) {
            d.Z.dispatch({
                type: 'GLOBAL_DISCOVERY_SERVERS_SEARCH_FAILURE',
                categoryId: f.Hk,
                error: e
            }),
                h.rC({ categoryId: f.Hk });
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
        if (null == _) return;
        let e = a()('NKTZZ4AIZU', _, { responsesCache: (0, i.A)() }).initIndex(E);
        d.Z.dispatch({
            type: 'GLOBAL_DISCOVERY_SERVERS_SEARCH_INITIALIZED',
            algoliaSearchIndex: e
        });
    },
    fetchAlgoliaSearchResults: C,
    fetchAlgoliaSearchResultCounts: v,
    clearAlgoliaSearchResults: function (e) {
        var t;
        d.Z.dispatch({
            type: 'GLOBAL_DISCOVERY_SERVERS_SEARCH_CLEAR',
            ignoreQueries: null !== (t = null == e ? void 0 : e.ignoreQueries) && void 0 !== t ? t : []
        });
    },
    fetchFeaturedGuilds: N,
    fetchCategoryFeaturedGuilds: S,
    resetSearchLayout: function () {
        d.Z.dispatch({ type: 'GLOBAL_DISCOVERY_SERVERS_SEARCH_LAYOUT_RESET' });
    }
};
