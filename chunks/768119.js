n(733860);
var r,
    i,
    a,
    s,
    o = n(392711),
    l = n.n(o),
    u = n(442837),
    c = n(433517),
    d = n(570140),
    f = n(840877),
    _ = n(952537),
    h = n(592125),
    p = n(430824),
    m = n(981631);
let g = {};
function E(e) {
    return (
        null == g[e] &&
            (g[e] = {
                searchId: e,
                searchType: v(e),
                isIndexing: !1,
                isHistoricalIndexing: !1,
                isSearching: !1,
                analyticsId: null,
                editorState: null,
                offset: 0,
                query: null,
                hasError: !1,
                searchFetcher: null,
                rawResults: null,
                totalResults: 0,
                documentsIndexed: 0,
                resultsBlocked: 0,
                showBlockedResults: !1,
                showNoResultsAlt: !1
            }),
        g[e]
    );
}
function v(e) {
    return e === m.aib.DMS ? m.aib.DMS : e === m.I_8 ? m.aib.FAVORITES : null != p.Z.getGuild(e) ? m.aib.GUILD : null != h.Z.getChannel(e) ? m.aib.CHANNEL : null;
}
function I(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
    if (null == e) return n;
    let r = g[e];
    return null == r ? n : t(r);
}
let S = 'SearchStore',
    T = !1,
    b = {},
    y = null;
function A(e) {
    var t;
    let { searchId: n, query: r } = e;
    if ('string' != typeof r || '' === (r = r.trim())) return;
    let i = (b[n] = null !== (t = b[n]) && void 0 !== t ? t : []),
        a = i.indexOf(r);
    -1 !== a ? (i.splice(a, 1), i.unshift(r)) : null != i[0] && '' !== i[0] && r.startsWith(i[0]) ? (i[0] = r) : a < 0 && i.unshift(r), i.length > 5 && i.splice(5, i.length), c.K.set(S, { history: b });
}
function N(e) {
    let { searchId: t } = e,
        n = g[t];
    if (null == n) return !1;
    null != n.searchFetcher && n.searchFetcher.cancel(), delete g[t];
}
function C(e) {
    if (e === y) return !1;
    null != e && null == g[e] && E(e), (y = e);
}
class R extends (r = u.ZP.Store) {
    initialize() {
        this.waitFor(p.Z, h.Z);
        let e = c.K.get(S);
        if ((null == e ? void 0 : e.history) != null) {
            var t;
            Object.keys((t = e.history)).forEach((e) => {
                Array.isArray(t[e]) && (t[e] = t[e].filter((e) => 'string' == typeof e && e.trim())), (!Array.isArray(t[e]) || 0 === t[e].length) && delete t[e];
            }),
                (b = t);
        }
        T = !!c.K.get('tokenized');
    }
    getCurrentSearchId() {
        return y;
    }
    isActive() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : y;
        return null != e && (this.isIndexing(e) || this.isSearching(e) || this.hasResults(e));
    }
    isTokenized() {
        return T;
    }
    getSearchType(e) {
        return I(null != e ? e : y, (e) => e.searchType);
    }
    getRawResults(e) {
        return I(e, (e) => e.rawResults);
    }
    hasResults(e) {
        return null != I(e, (e) => e.rawResults);
    }
    isIndexing(e) {
        return I(e, (e) => e.isIndexing) || !1;
    }
    isHistoricalIndexing(e) {
        return I(e, (e) => e.isHistoricalIndexing) || !1;
    }
    isSearching(e) {
        return I(e, (e) => e.isSearching) || !1;
    }
    getAnalyticsId(e) {
        return I(e, (e) => e.analyticsId);
    }
    getResultsBlocked(e) {
        return I(e, (e) => e.resultsBlocked);
    }
    getDocumentsIndexedCount(e) {
        return I(e, (e) => e.documentsIndexed);
    }
    getSearchFetcher(e) {
        return I(e, (e) => e.searchFetcher);
    }
    getTotalResults(e) {
        var t;
        return null !== (t = I(e, (e) => e.totalResults)) && void 0 !== t ? t : 0;
    }
    getEditorState(e) {
        return I(e, (e) => e.editorState);
    }
    getHistory(e) {
        return b[e];
    }
    getOffset(e) {
        var t;
        return null !== (t = I(e, (e) => e.offset)) && void 0 !== t ? t : 0;
    }
    getQuery(e) {
        return I(e, (e) => e.query);
    }
    hasError(e) {
        var t;
        return null !== (t = I(e, (e) => e.hasError)) && void 0 !== t && t;
    }
    shouldShowBlockedResults(e) {
        var t;
        return null !== (t = I(e, (e) => e.showBlockedResults, !1)) && void 0 !== t && t;
    }
    shouldShowNoResultsAlt(e) {
        var t;
        return null !== (t = I(e, (e) => e.showNoResultsAlt, !1)) && void 0 !== t && t;
    }
    getResultsState(e) {
        return {
            isSearching: this.isSearching(e),
            isIndexing: this.isIndexing(e),
            isHistoricalIndexing: this.isHistoricalIndexing(e),
            documentsIndexed: this.getDocumentsIndexedCount(e),
            offset: this.getOffset(e),
            totalResults: this.getTotalResults(e),
            hasError: this.hasError(e),
            showBlockedResults: this.shouldShowBlockedResults(e),
            showNoResultsAlt: this.shouldShowNoResultsAlt(e)
        };
    }
}
(s = 'SearchStore'),
    (a = 'displayName') in (i = R)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s),
    (t.Z = new R(d.Z, {
        SEARCH_START: function (e) {
            var t, n;
            let { queryString: r, searchId: i, query: a } = e,
                s = E(i);
            null != s.searchFetcher && (s.searchFetcher.cancel(), (s.searchFetcher = null));
            let o = s.searchType,
                u = new f.ZP(i, o, a);
            (s.searchFetcher = u),
                (s.isSearching = !0),
                (s.rawResults = null),
                (s.analyticsId = null),
                (s.query = l().omit(a, 'type')),
                (s.offset = null !== (n = a.offset) && void 0 !== n ? n : 0),
                (s.showBlockedResults = !1),
                A({
                    type: 'SEARCH_ADD_HISTORY',
                    searchId: i,
                    query: r
                });
            let c = i === m.I_8 ? (null === (t = h.Z.getChannel(i)) || void 0 === t ? void 0 : t.guild_id) : o === m.aib.GUILD ? i : null;
            u.fetch(
                (e) => {
                    var t, n;
                    d.Z.dispatch({
                        type: 'SEARCH_FINISH',
                        searchId: i,
                        guildId: c,
                        analyticsId: e.body.analytics_id,
                        totalResults: e.body.total_results,
                        messages: e.body.messages,
                        threads: null !== (t = e.body.threads) && void 0 !== t ? t : [],
                        members: (null !== (n = e.body.members) && void 0 !== n ? n : []).map((e) => (0, _.Z)(e)),
                        hasError: !1,
                        doingHistoricalIndex: e.body.doing_deep_historical_index,
                        documentsIndexed: e.body.documents_indexed
                    });
                },
                () => {
                    d.Z.dispatch({
                        type: 'SEARCH_INDEXING',
                        searchId: i
                    });
                },
                () => {
                    d.Z.dispatch({
                        type: 'SEARCH_FINISH',
                        searchId: i,
                        guildId: c,
                        messages: [],
                        threads: [],
                        members: [],
                        totalResults: 0,
                        analyticsId: null,
                        hasError: !0,
                        doingHistoricalIndex: !1,
                        documentsIndexed: 0
                    });
                }
            );
        },
        SEARCH_INDEXING: function (e) {
            let { searchId: t } = e,
                n = E(t);
            (n.isIndexing = !0), (n.isHistoricalIndexing = !0), (n.isSearching = !1);
        },
        SEARCH_FINISH: function (e) {
            let { searchId: t } = e,
                n = E(t);
            (n.isSearching = !1), (n.isIndexing = !1), (n.isHistoricalIndexing = e.doingHistoricalIndex || !1), (n.searchFetcher = null), (n.totalResults = e.totalResults), (n.hasError = e.hasError), (n.analyticsId = e.analyticsId), (n.documentsIndexed = null != e.documentsIndexed ? e.documentsIndexed : 0), (n.showNoResultsAlt = 0.05 > Math.random()), (n.rawResults = e.messages), null == n.query && (n.hasError = !0);
        },
        SEARCH_EDITOR_STATE_CLEAR: N,
        SEARCH_ENSURE_SEARCH_STATE: function (e) {
            let { searchId: t } = e;
            null != t && E(t);
        },
        SEARCH_EDITOR_STATE_CHANGE: function (e) {
            let { searchId: t, editorState: n } = e;
            E(t).editorState = n;
        },
        SEARCH_SET_SHOW_BLOCKED_RESULTS: function (e) {
            let { searchId: t, showBlocked: n } = e;
            E(t).showBlockedResults = n;
        },
        SEARCH_SCREEN_OPEN: function (e) {
            let { searchId: t } = e;
            C(t);
        },
        CHANNEL_SELECT: function (e) {
            let { guildId: t, channelId: n } = e;
            C(null != t ? t : n);
        },
        CHANNEL_TOGGLE_MEMBERS_SECTION: function () {
            return null != y && N({ searchId: y });
        },
        SEARCH_CLEAR_HISTORY: function (e) {
            let { searchId: t } = e;
            null == t ? (c.K.remove(S), (b = {})) : (delete b[t], c.K.set(S, { history: b }));
        },
        SEARCH_REMOVE_HISTORY: function (e) {
            let { searchId: t, query: n } = e;
            null != b[t] && ((b[t] = b[t].filter((e) => e !== n)), c.K.set(S, { history: b }));
        },
        SEARCH_ADD_HISTORY: A,
        LOGOUT: function () {
            c.K.remove(S), (b = {});
        },
        CONNECTION_OPEN: function () {
            Object.keys(g).forEach((e) => {
                null != g[e] && (g[e].searchType = v(e));
            });
        }
    }));
