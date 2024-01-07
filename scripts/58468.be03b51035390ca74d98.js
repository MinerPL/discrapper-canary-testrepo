(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["58468"], {
        721698: function(t, e, l) {
            "use strict";
            l.r(e), l.d(e, {
                getEmbedApplication: function() {
                    return _
                },
                getApplication: function() {
                    return E
                },
                getCategories: function() {
                    return A
                },
                getSimilarApplications: function() {
                    return p
                },
                search: function() {
                    return f
                },
                getCollections: function() {
                    return R
                },
                fetchIntegrationApplicationIdsForMyGuilds: function() {
                    return O
                }
            }), l("222007");
            var a = l("981980"),
                i = l("872717"),
                n = l("913144"),
                I = l("915639"),
                c = l("349503"),
                u = l("831109"),
                o = l("810047"),
                d = l("856894"),
                T = l("388647"),
                C = l("506061"),
                r = l("49111");
            let s = new Map;
            async function _(t) {
                var e;
                let l = Date.now(),
                    I = null !== (e = s.get(t)) && void 0 !== e ? e : 0;
                if (c.default.getApplicationFetchState(t) === c.FetchState.FETCHING || c.default.isInvalidApplication(t) || l < I + 6e5) return;
                s.set(t, l), n.default.dispatch({
                    type: "APPLICATION_DIRECTORY_FETCH_APPLICATION",
                    applicationId: t
                });
                let u = new a.default(1e3, 5e3),
                    o = (t, e) => 429 === t.status && !!(u.fails < 10) && (u.fail(() => {
                        e(void 0, o)
                    }), !0);
                try {
                    let e = await i.default.get({
                            url: r.Endpoints.APPLICATION_DIRECTORY_EMBED_APPLICATION(t),
                            backoff: u,
                            retries: 10,
                            interceptResponse: o
                        }),
                        l = e.body;
                    n.default.dispatch({
                        type: "APPLICATION_DIRECTORY_FETCH_APPLICATION_SUCCESS",
                        application: l
                    })
                } catch (e) {
                    n.default.dispatch({
                        type: "APPLICATION_DIRECTORY_FETCH_APPLICATION_FAILURE",
                        applicationId: t,
                        isInvalidApplication: !0
                    })
                }
            }
            async function E(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    l = Date.now(),
                    a = c.default.getApplicationFetchState(t),
                    u = c.default.getApplicationLastFetchTime(t),
                    {
                        dontRefetchMs: o
                    } = e;
                if (a !== c.FetchState.FETCHING) {
                    if (!(null != u && u + (null != o ? o : 6e5) > l)) {
                        n.default.dispatch({
                            type: "APPLICATION_DIRECTORY_FETCH_APPLICATION",
                            applicationId: t
                        });
                        try {
                            let e = await i.default.get({
                                url: r.Endpoints.APPLICATION_DIRECTORY_APPLICATION(t),
                                query: {
                                    locale: I.default.locale
                                }
                            });
                            n.default.dispatch({
                                type: "APPLICATION_DIRECTORY_FETCH_APPLICATION_SUCCESS",
                                application: e.body
                            })
                        } catch (e) {
                            n.default.dispatch({
                                type: "APPLICATION_DIRECTORY_FETCH_APPLICATION_FAILURE",
                                applicationId: t,
                                isInvalidApplication: !0
                            })
                        }
                    }
                }
            }
            async function A() {
                let t = Date.now(),
                    e = u.default.getLastFetchTimeMs();
                if (null != e && e + 6e5 > t) return;
                let l = await i.default.get({
                    url: r.Endpoints.APPLICATION_DIRECTORY_CATEGORIES,
                    query: {
                        locale: I.default.locale
                    }
                });
                n.default.dispatch({
                    type: "APPLICATION_DIRECTORY_FETCH_CATEGORIES_SUCCESS",
                    categories: l.body
                })
            }
            async function p(t) {
                var e;
                let {
                    applicationId: l,
                    guildId: a,
                    options: c
                } = t, {
                    page: u
                } = null != c ? c : {}, o = Date.now(), d = T.default.getFetchState({
                    applicationId: l,
                    guildId: a
                }), {
                    lastFetchTimeMs: C
                } = null !== (e = T.default.getSimilarApplications({
                    applicationId: l,
                    guildId: a
                })) && void 0 !== e ? e : {};
                if (d !== T.FetchState.FETCHING) {
                    if (null == C || !(C + 6e5 > o)) {
                        n.default.dispatch({
                            type: "APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS",
                            applicationId: l,
                            guildId: a,
                            page: u
                        });
                        try {
                            let t = await i.default.get({
                                url: r.Endpoints.APPLICATION_DIRECTORY_SIMILAR(l),
                                query: {
                                    guild_id: a,
                                    page: u,
                                    locale: I.default.locale
                                }
                            });
                            n.default.dispatch({
                                type: "APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_SUCCESS",
                                applicationId: l,
                                guildId: a,
                                similarApplications: t.body.applications,
                                loadId: t.body.load_id,
                                page: u,
                                totalPages: t.body.num_pages
                            })
                        } catch (t) {
                            n.default.dispatch({
                                type: "APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_FAILURE",
                                applicationId: l,
                                guildId: a,
                                page: u
                            })
                        }
                    }
                }
            }
            async function f(t) {
                var e;
                let {
                    query: l,
                    guildId: a,
                    options: c,
                    onSuccessCallback: u
                } = t, {
                    page: o,
                    categoryId: T
                } = null != c ? c : {}, C = Date.now(), s = d.default.getFetchState({
                    query: l,
                    guildId: a,
                    page: o,
                    categoryId: T
                }), {
                    lastFetchTimeMs: _
                } = null !== (e = d.default.getSearchResults({
                    query: l,
                    guildId: a,
                    page: o,
                    categoryId: T
                })) && void 0 !== e ? e : {};
                if (s !== d.FetchState.FETCHING) {
                    if (null == _ || !(_ + 6e5 > C)) {
                        n.default.dispatch({
                            type: "APPLICATION_DIRECTORY_FETCH_SEARCH",
                            query: l,
                            guildId: a,
                            page: o,
                            categoryId: T
                        });
                        try {
                            let t = await i.default.get({
                                url: r.Endpoints.APPLICATION_DIRECTORY_SEARCH,
                                query: {
                                    query: l,
                                    guild_id: a,
                                    page: o,
                                    category_id: T,
                                    locale: I.default.locale
                                }
                            });
                            n.default.dispatch({
                                type: "APPLICATION_DIRECTORY_FETCH_SEARCH_SUCCESS",
                                query: l,
                                guildId: a,
                                page: o,
                                categoryId: T,
                                result: {
                                    results: t.body.results,
                                    countsByCategory: t.body.counts_by_category,
                                    totalCount: t.body.result_count,
                                    totalPages: t.body.num_pages,
                                    type: t.body.type,
                                    loadId: t.body.load_id
                                }
                            }), null == u || u(t.body.result_count)
                        } catch (t) {
                            n.default.dispatch({
                                type: "APPLICATION_DIRECTORY_FETCH_SEARCH_FAILURE",
                                query: l,
                                guildId: a,
                                page: o,
                                categoryId: T
                            })
                        }
                    }
                }
            }
            async function R() {
                let {
                    includesInactive: t = !1
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, e = Date.now(), l = o.default.getFetchState({
                    includesInactive: t
                }), a = o.default.getLastFetchTimeMs({
                    includesInactive: t
                });
                if (l !== o.FetchState.FETCHING) {
                    if (null == a || !(a + 6e5 > e)) {
                        n.default.dispatch({
                            type: "APPLICATION_DIRECTORY_FETCH_COLLECTIONS",
                            includesInactive: t
                        });
                        try {
                            let e = await i.default.get({
                                url: r.Endpoints.APPLICATION_DIRECTORY_COLLECTIONS,
                                query: {
                                    includes_inactive: t,
                                    locale: I.default.locale
                                }
                            });
                            n.default.dispatch({
                                type: "APPLICATION_DIRECTORY_FETCH_COLLECTIONS_SUCCESS",
                                collections: e.body,
                                includesInactive: t
                            })
                        } catch (e) {
                            n.default.dispatch({
                                type: "APPLICATION_DIRECTORY_FETCH_COLLECTIONS_FAILURE",
                                includesInactive: t
                            })
                        }
                    }
                }
            }
            async function O() {
                let t = Date.now(),
                    e = C.default.getFetchState(),
                    l = C.default.getLastFetchTimeMs(),
                    a = C.default.getNextFetchRetryTimeMs();
                if (e !== C.FetchState.FETCHING && (null == l || !(l + 864e5 > t))) {
                    if (null == a || !(t < a)) {
                        n.default.dispatch({
                            type: "FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS"
                        });
                        try {
                            let t = await i.default.get({
                                url: r.Endpoints.INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS
                            });
                            n.default.dispatch({
                                type: "FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS_SUCCESS",
                                guildIdToApplicationIds: t.body
                            })
                        } catch (e) {
                            var I;
                            let t = (null == e ? void 0 : e.status) === 429;
                            n.default.dispatch({
                                type: "FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS_FAILURE",
                                retryAfterSeconds: t ? null == e ? void 0 : null === (I = e.body) || void 0 === I ? void 0 : I.retry_after : void 0
                            })
                        }
                    }
                }
            }
        },
        831109: function(t, e, l) {
            "use strict";
            l.r(e), l.d(e, {
                default: function() {
                    return u
                }
            });
            var a = l("446674"),
                i = l("913144");
            let n = [],
                I = null;
            class c extends a.default.Store {
                getLastFetchTimeMs() {
                    return I
                }
                getCategories() {
                    return n
                }
            }
            c.displayName = "ApplicationDirectoryCategoriesStore";
            var u = new c(i.default, {
                APPLICATION_DIRECTORY_FETCH_CATEGORIES_SUCCESS: function(t) {
                    let {
                        categories: e
                    } = t;
                    n = e, I = Date.now()
                }
            })
        },
        810047: function(t, e, l) {
            "use strict";
            l.r(e), l.d(e, {
                FetchState: function() {
                    return i
                },
                default: function() {
                    return s
                }
            });
            var a, i, n = l("917351"),
                I = l.n(n),
                c = l("446674"),
                u = l("913144");
            (a = i || (i = {}))[a.FETCHING = 0] = "FETCHING", a[a.FETCHED = 1] = "FETCHED", a[a.ERROR = 2] = "ERROR";
            let o = {},
                d = {},
                T = {};

            function C(t) {
                let {
                    includesInactive: e
                } = t;
                return "includes_inactive:".concat(e)
            }
            class r extends c.default.Store {
                getLastFetchTimeMs(t) {
                    let {
                        includesInactive: e
                    } = t;
                    return T[C({
                        includesInactive: e
                    })]
                }
                getFetchState(t) {
                    let {
                        includesInactive: e
                    } = t;
                    return d[C({
                        includesInactive: e
                    })]
                }
                getCollections(t) {
                    let {
                        includesInactive: e
                    } = t;
                    return o[C({
                        includesInactive: e
                    })]
                }
            }
            var s = new r(u.default, {
                APPLICATION_DIRECTORY_FETCH_COLLECTIONS: function(t) {
                    let {
                        includesInactive: e
                    } = t;
                    d = {
                        ...d,
                        [C({
                            includesInactive: e
                        })]: 0
                    }
                },
                APPLICATION_DIRECTORY_FETCH_COLLECTIONS_SUCCESS: function(t) {
                    var e;
                    let {
                        collections: l,
                        includesInactive: a
                    } = t, i = C({
                        includesInactive: a
                    });
                    let n = (e = l.map(t => {
                        var e;
                        return t.application_directory_collection_items = (e = t.application_directory_collection_items, I.sortBy(e, ["position", "id"])), t
                    }), I.sortBy(e, ["position", "id"]));
                    o = {
                        ...o,
                        [i]: n
                    }, d = {
                        ...d,
                        [i]: 1
                    };
                    let c = Date.now();
                    T = {
                        ...T,
                        [i]: c
                    }
                },
                APPLICATION_DIRECTORY_FETCH_COLLECTIONS_FAILURE: function(t) {
                    let {
                        includesInactive: e
                    } = t;
                    d = {
                        ...d,
                        [C({
                            includesInactive: e
                        })]: 2
                    }
                }
            })
        },
        856894: function(t, e, l) {
            "use strict";
            l.r(e), l.d(e, {
                FetchState: function() {
                    return i
                },
                default: function() {
                    return r
                }
            });
            var a, i, n = l("693566"),
                I = l.n(n),
                c = l("446674"),
                u = l("913144");

            function o(t) {
                let {
                    query: e,
                    guildId: l,
                    page: a,
                    categoryId: i
                } = t;
                return "query:'".concat(e, "' guildId:").concat(l, " page:").concat(a, " categoryId:").concat(i)
            }(a = i || (i = {}))[a.FETCHING = 0] = "FETCHING", a[a.FETCHED = 1] = "FETCHED", a[a.ERROR = 2] = "ERROR";
            let d = new I({
                    max: 20
                }),
                T = {};
            class C extends c.default.Store {
                getSearchResults(t) {
                    let {
                        query: e,
                        guildId: l,
                        page: a,
                        categoryId: i
                    } = t, n = o({
                        query: e,
                        guildId: l,
                        page: a,
                        categoryId: i
                    });
                    return d.get(n)
                }
                getFetchState(t) {
                    let {
                        query: e,
                        guildId: l,
                        page: a,
                        categoryId: i
                    } = t, n = o({
                        query: e,
                        guildId: l,
                        page: a,
                        categoryId: i
                    });
                    return T[n]
                }
            }
            C.displayName = "ApplicationDirectorySearchStore";
            var r = new C(u.default, {
                APPLICATION_DIRECTORY_FETCH_SEARCH: function(t) {
                    let {
                        query: e,
                        guildId: l,
                        page: a,
                        categoryId: i
                    } = t, n = o({
                        query: e,
                        guildId: l,
                        page: a,
                        categoryId: i
                    });
                    T = {
                        ...T,
                        [n]: 0
                    }
                },
                APPLICATION_DIRECTORY_FETCH_SEARCH_SUCCESS: function(t) {
                    let {
                        query: e,
                        guildId: l,
                        page: a,
                        categoryId: i,
                        result: n
                    } = t, I = o({
                        query: e,
                        guildId: l,
                        page: a,
                        categoryId: i
                    });
                    d.set(I, {
                        lastFetchTimeMs: Date.now(),
                        ...n
                    }), T = {
                        ...T,
                        [I]: 1
                    }
                },
                APPLICATION_DIRECTORY_FETCH_SEARCH_FAILURE: function(t) {
                    let {
                        query: e,
                        guildId: l,
                        page: a,
                        categoryId: i
                    } = t, n = o({
                        query: e,
                        guildId: l,
                        page: a,
                        categoryId: i
                    });
                    T = {
                        ...T,
                        [n]: 2
                    }
                }
            })
        },
        388647: function(t, e, l) {
            "use strict";
            l.r(e), l.d(e, {
                FetchState: function() {
                    return i
                },
                default: function() {
                    return r
                }
            });
            var a, i, n = l("693566"),
                I = l.n(n),
                c = l("446674"),
                u = l("913144");

            function o(t) {
                let {
                    applicationId: e,
                    guildId: l,
                    page: a
                } = t;
                return "applicationId:".concat(e, " guildId:").concat(l, " page:").concat(a)
            }(a = i || (i = {}))[a.NOT_FETCHED = 0] = "NOT_FETCHED", a[a.FETCHING = 1] = "FETCHING", a[a.FETCHED = 2] = "FETCHED", a[a.ERROR = 3] = "ERROR";
            let d = new I({
                    max: 20
                }),
                T = {};
            class C extends c.default.Store {
                getSimilarApplications(t) {
                    let {
                        applicationId: e,
                        guildId: l,
                        page: a
                    } = t;
                    if (null == e) return;
                    let i = o({
                        applicationId: e,
                        guildId: l,
                        page: a
                    });
                    return d.get(i)
                }
                getFetchState(t) {
                    let {
                        applicationId: e,
                        guildId: l,
                        page: a
                    } = t;
                    if (null == e) return;
                    let i = o({
                        applicationId: e,
                        guildId: l,
                        page: a
                    });
                    return T[i]
                }
            }
            C.displayName = "ApplicationDirectorySimilarApplicationsStore";
            var r = new C(u.default, {
                APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS: function(t) {
                    let {
                        applicationId: e,
                        guildId: l,
                        page: a
                    } = t, i = o({
                        applicationId: e,
                        guildId: l,
                        page: a
                    });
                    T = {
                        ...T,
                        [i]: 1
                    }
                },
                APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_SUCCESS: function(t) {
                    let {
                        applicationId: e,
                        guildId: l,
                        similarApplications: a,
                        loadId: i,
                        page: n,
                        totalPages: I
                    } = t, c = o({
                        applicationId: e,
                        guildId: l,
                        page: n
                    });
                    d.set(c, {
                        lastFetchTimeMs: Date.now(),
                        applications: a,
                        loadId: i,
                        page: n,
                        totalPages: I
                    }), T = {
                        ...T,
                        [c]: 2
                    }
                },
                APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_FAILURE: function(t) {
                    let {
                        applicationId: e,
                        guildId: l,
                        page: a
                    } = t, i = o({
                        applicationId: e,
                        guildId: l,
                        page: a
                    });
                    T = {
                        ...T,
                        [i]: 3
                    }
                }
            })
        },
        506061: function(t, e, l) {
            "use strict";
            l.r(e), l.d(e, {
                FetchState: function() {
                    return a
                },
                default: function() {
                    return d
                }
            }), l("222007");
            var a, i, n = l("446674"),
                I = l("913144");
            (i = a || (a = {}))[i.NOT_FETCHED = 0] = "NOT_FETCHED", i[i.FETCHING = 1] = "FETCHING", i[i.FETCHED = 2] = "FETCHED", i[i.ERROR = 3] = "ERROR";
            let c = {
                applicationIdToGuildIds: {},
                lastFetchTimeMs: null,
                nextFetchRetryTimeMs: null,
                fetchState: 0
            };

            function u(t) {
                let {
                    applicationId: e,
                    guildId: l
                } = t;
                null == c.applicationIdToGuildIds[e] && (c.applicationIdToGuildIds[e] = new Set), c.applicationIdToGuildIds[e].add(l), c.applicationIdToGuildIds[e] = new Set(c.applicationIdToGuildIds[e])
            }
            class o extends n.default.PersistedStore {
                initialize(t) {
                    if (null != t)
                        for (let e in c.lastFetchTimeMs = t.lastFetchTimeMs, c.nextFetchRetryTimeMs = t.nextFetchRetryTimeMs, c.fetchState = t.fetchState, t.applicationIdToGuildIds) c.applicationIdToGuildIds[e] = new Set(t.applicationIdToGuildIds[e])
                }
                getState() {
                    return c
                }
                getGuildIdsForApplication(t) {
                    if (null != t) return c.applicationIdToGuildIds[t]
                }
                getLastFetchTimeMs() {
                    return c.lastFetchTimeMs
                }
                getNextFetchRetryTimeMs() {
                    return c.nextFetchRetryTimeMs
                }
                getFetchState() {
                    return c.fetchState
                }
            }
            o.displayName = "MyGuildApplicationsStore", o.persistKey = "MyGuildApplicationsStore";
            var d = new o(I.default, {
                LOGOUT: function() {
                    c.applicationIdToGuildIds = {}, c.lastFetchTimeMs = null, c.nextFetchRetryTimeMs = null, c.fetchState = 0
                },
                FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS: function() {
                    c.fetchState = 1
                },
                FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS_SUCCESS: function(t) {
                    let {
                        guildIdToApplicationIds: e
                    } = t;
                    for (let t in c.fetchState = 2, c.lastFetchTimeMs = Date.now(), c.applicationIdToGuildIds = {}, c.nextFetchRetryTimeMs = null, e)
                        for (let l of e[t]) u({
                            applicationId: l,
                            guildId: t
                        })
                },
                FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS_FAILURE: function(t) {
                    let {
                        retryAfterSeconds: e
                    } = t;
                    c.fetchState = 3, null != e && (c.nextFetchRetryTimeMs = Date.now() + 1e3 * e)
                },
                INTEGRATION_CREATE: function(t) {
                    let {
                        application: e,
                        guildId: l
                    } = t;
                    null != e && u({
                        applicationId: e.id,
                        guildId: l
                    })
                },
                INTEGRATION_DELETE: function(t) {
                    let {
                        applicationId: e,
                        guildId: l
                    } = t;
                    null != e && ! function(t) {
                        let {
                            applicationId: e,
                            guildId: l
                        } = t;
                        null != c.applicationIdToGuildIds[e] && (c.applicationIdToGuildIds[e].delete(l), c.applicationIdToGuildIds[e] = new Set(c.applicationIdToGuildIds[e]))
                    }({
                        applicationId: e,
                        guildId: l
                    })
                }
            })
        }
    }
]);