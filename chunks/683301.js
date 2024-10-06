let r;
n(47120), n(653041);
var i,
    a,
    s,
    o,
    l,
    u,
    c = n(512722),
    d = n.n(c),
    _ = n(392711),
    E = n.n(_),
    f = n(442837);
n(902704);
var h = n(570140),
    p = n(117496),
    I = n(314897),
    m = n(230307),
    T = n(981631),
    S = n(731455);
((s = i || (i = {})).UNSET = 'unset'), (s.FETCHING = 'fetching'), (s.FAILED = 'failed'), (s.SUCCEEDED = 'succeeded');
let g = {
        guilds: [],
        total: 0,
        offset: 0,
        limit: 0,
        loading: !1,
        isFirstLoad: !0
    },
    A = {
        [T.Lcj.FEATURED]: { ...g },
        [T.Lcj.GAMES_YOU_PLAY]: { ...g },
        [T.Lcj.MISC]: { ...g },
        [T.Lcj.SEARCH]: {},
        [S.Hk]: { ...g }
    },
    N = '',
    O = !1,
    R = 'unset',
    v = null,
    C = S.Hk,
    L = null,
    y = [],
    D = (0, p.P)(),
    b = !1;
function M(e) {
    return {
        id: e.id,
        name: e.name,
        description: e.description,
        splash: e.splash,
        banner: e.banner,
        icon: e.icon,
        features: new Set(e.features),
        presenceCount: e.approximate_presence_count,
        memberCount: e.approximate_member_count,
        premiumSubscriptionCount: e.premium_subscription_count,
        preferredLocale: e.preferred_locale,
        discoverySplash: e.discovery_splash,
        emojis: e.emojis,
        emojiCount: e.emoji_count,
        keywords: e.keywords
    };
}
class P extends (a = f.ZP.Store) {
    initialize() {
        this.waitFor(I.default);
    }
    isFetching() {
        return O || null == v || null == m.Z.lastFetched;
    }
    isFetchingSearch() {
        return 'fetching' === R;
    }
    hasSearchError() {
        return 'failed' === R;
    }
    getDiscoverableGuilds() {
        return A;
    }
    getCurrentCategoryId() {
        return C;
    }
    getCurrentHomepageCategoryId() {
        return r;
    }
    getSearchIndex() {
        return L;
    }
    getMostRecentQuery() {
        return N;
    }
    getTopCategoryCounts(e) {
        var t;
        return null === (t = A[T.Lcj.SEARCH][e]) || void 0 === t ? void 0 : t.resultCounts;
    }
    getSeenGuildIds() {
        return y;
    }
    getLoadId() {
        return D;
    }
    getIsReady() {
        return b;
    }
}
(u = 'GuildDiscoveryStore'),
    (l = 'displayName') in (o = P)
        ? Object.defineProperty(o, l, {
              value: u,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (o[l] = u),
    (t.ZP = new P(h.Z, {
        GUILD_DISCOVERY_SEARCH_INIT: function (e) {
            let { index: t } = e;
            L = t;
        },
        GUILD_DISCOVERY_FETCH_START: function (e) {
            let { section: t } = e;
            (O = !0),
                (A = {
                    ...A,
                    [t]: {
                        ...A[t],
                        loading: !0
                    }
                });
        },
        GUILD_DISCOVERY_FETCH_SUCCESS: function (e) {
            let { guilds: t, section: n, total: r, offset: i, limit: a } = e;
            (O = !1), (v = Date.now()), (D = (0, p.P)());
            let s = E().map(t, M);
            A = {
                ...A,
                [n]: {
                    guilds: s,
                    offset: i,
                    limit: a,
                    total: r,
                    loading: !1,
                    isFirstLoad: !1
                }
            };
        },
        GUILD_DISCOVERY_FETCH_FAILURE: function (e) {
            let { section: t } = e;
            (O = !1),
                (A = {
                    ...A,
                    [t]: {
                        ...g,
                        loading: !1
                    }
                });
        },
        GUILD_DISCOVERY_POPULAR_FETCH_START: function (e) {
            let { categoryId: t } = e;
            (O = !0),
                (A = {
                    ...A,
                    [t]: {
                        ...g,
                        ...A[t],
                        loading: !0
                    }
                });
        },
        GUILD_DISCOVERY_POPULAR_FETCH_SUCCESS: function (e) {
            let { categoryId: t, guilds: n } = e;
            (O = !1), (v = Date.now());
            let r = E().map(n, M);
            A = {
                ...A,
                [t]: {
                    ...g,
                    guilds: r,
                    loading: !1,
                    isFirstLoad: !1
                }
            };
        },
        GUILD_DISCOVERY_POPULAR_FETCH_FAILURE: function (e) {
            let { categoryId: t } = e;
            (O = !1),
                (A = {
                    ...A,
                    [t]: {
                        ...g,
                        loading: !1
                    }
                });
        },
        GUILD_DISCOVERY_SEARCH_FETCH_START: function (e) {
            var t;
            let { section: n, query: r, categoryId: i } = e;
            d()('search' === n, 'This action only supports search it seems'),
                (R = 'fetching'),
                (A = {
                    ...A,
                    [n]: {
                        ...A[n],
                        [r]: {
                            ...A[n][r],
                            [i]: {
                                ...(null === (t = A[n][r]) || void 0 === t ? void 0 : t[i]),
                                loading: !0
                            }
                        }
                    }
                }),
                (N = r);
        },
        GUILD_DISCOVERY_SEARCH_FETCH_SUCCESS: function (e) {
            var t;
            let { section: n, guilds: r, total: i, offset: a, limit: s, query: o, categoryId: l } = e;
            d()('search' === n, 'This action only supports search it seems');
            let u = r.map(M);
            (A = {
                ...A,
                [n]: {
                    ...A[n],
                    [o]: {
                        ...A[n][o],
                        [l]: {
                            ...(null === (t = A[n][o]) || void 0 === t ? void 0 : t[l]),
                            guilds: u,
                            total: i,
                            offset: a,
                            limit: s,
                            loading: !1
                        }
                    }
                }
            }),
                (N = o),
                (R = 'succeeded');
        },
        GUILD_DISCOVERY_SEARCH_FETCH_FAILURE: function (e) {
            var t;
            let { section: n, query: r, categoryId: i } = e;
            d()('search' === n, 'This action only supports search it seems'),
                (R = 'failed'),
                (A = {
                    ...A,
                    [n]: {
                        ...A[n],
                        [r]: {
                            ...A[n][r],
                            [i]: {
                                ...(null === (t = A[n][r]) || void 0 === t ? void 0 : t[i]),
                                loading: !1
                            }
                        }
                    }
                });
        },
        GUILD_DISCOVERY_SELECT_CATEGORY: function (e) {
            let { categoryId: t, isHomepage: n } = e;
            (C = t), n && (r = t);
        },
        GUILD_DISCOVERY_CLEAR_SEARCH: function () {
            N = '';
        },
        GUILD_DISCOVERY_SEARCH_UPDATE_COUNTS: function (e) {
            let { nbHits: t, facets: n, query: r } = e,
                i = [];
            if (null != n) {
                var a;
                let e = null !== (a = n['categories.id']) && void 0 !== a ? a : {};
                delete e[S.o3],
                    (i = Object.entries(e)
                        .map((e) => {
                            let [t, n] = e;
                            return [parseInt(t, 10), n];
                        })
                        .sort((e, t) => t[1] - e[1])
                        .slice(0, 7));
            }
            A = {
                ...A,
                [T.Lcj.SEARCH]: {
                    ...A[T.Lcj.SEARCH],
                    [r]: {
                        ...A[T.Lcj.SEARCH][r],
                        resultCounts: [[S.Hk, Math.min(S.lA, t)], ...i]
                    }
                }
            };
        },
        GUILD_DISCOVERY_SEARCH_COUNTS_FAIL: function (e) {
            let { query: t } = e;
            A = {
                ...A,
                [T.Lcj.SEARCH]: {
                    ...A[T.Lcj.SEARCH],
                    [t]: {
                        ...A[T.Lcj.SEARCH][t],
                        resultCounts: null
                    }
                }
            };
        },
        GUILD_DISCOVERY_GUILD_SEEN: function (e) {
            let { guildId: t } = e;
            !y.includes(t) && y.push(t);
        },
        GUILD_DISCOVERY_CLEAR_SEEN_GUILDS: function () {
            y = [];
        },
        GUILD_DISCOVERY_CATEGORY_FETCH_SUCCESS: function (e) {
            let { forClanDiscovery: t } = e;
            t && (b = !0);
        }
    }));
