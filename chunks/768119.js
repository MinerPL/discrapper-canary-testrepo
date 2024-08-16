let r;
n(733860);
var i,
    a,
    s,
    o,
    l = n(392711),
    u = n.n(l),
    c = n(442837),
    d = n(433517),
    _ = n(570140),
    E = n(840877),
    f = n(952537),
    h = n(592125),
    p = n(430824),
    m = n(981631);
let I = {},
    T = !1;
function g(e) {
    return (
        null == I[e] &&
            (I[e] = {
                searchId: e,
                searchType: S(e),
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
        I[e]
    );
}
function S(e) {
    return e === m.aib.DMS ? m.aib.DMS : e === m.I_8 ? m.aib.FAVORITES : null != p.Z.getGuild(e) ? m.aib.GUILD : null != h.Z.getChannel(e) ? m.aib.CHANNEL : null;
}
function A(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
    if (null == e) return n;
    let r = I[e];
    return null == r ? n : t(r);
}
let N = 'SearchStore',
    v = !1,
    O = {},
    R = null;
function C(e) {
    var t;
    let { searchId: n, query: r } = e;
    if ('string' != typeof r || '' === (r = r.trim())) return;
    let i = (O[n] = null !== (t = O[n]) && void 0 !== t ? t : []),
        a = i.indexOf(r);
    -1 !== a ? (i.splice(a, 1), i.unshift(r)) : null != i[0] && '' !== i[0] && r.startsWith(i[0]) ? (i[0] = r) : a < 0 && i.unshift(r), i.length > 5 && i.splice(5, i.length), d.K.set(N, { history: O });
}
function y(e) {
    let { searchId: t } = e,
        n = I[t];
    if (null == n) return !1;
    null != n.searchFetcher && n.searchFetcher.cancel(), delete I[t];
}
function D(e) {
    if (e === R) return !1;
    null != e && null == I[e] && g(e), (R = e);
}
class L extends (i = c.ZP.Store) {
    initialize() {
        this.waitFor(p.Z, h.Z);
        let e = d.K.get(N);
        if ((null == e ? void 0 : e.history) != null) {
            var t;
            Object.keys((t = e.history)).forEach((e) => {
                Array.isArray(t[e]) && (t[e] = t[e].filter((e) => 'string' == typeof e && e.trim())), (!Array.isArray(t[e]) || 0 === t[e].length) && delete t[e];
            }),
                (O = t);
        }
        v = !!d.K.get('tokenized');
    }
    isOpen() {
        return T;
    }
    getCurrentSearchModalType() {
        return r;
    }
    getCurrentSearchId() {
        return R;
    }
    isActive() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : R;
        return null != e && (this.isIndexing(e) || this.isSearching(e) || this.hasResults(e));
    }
    isTokenized() {
        return v;
    }
    getSearchType(e) {
        return A(null != e ? e : R, (e) => e.searchType);
    }
    getRawResults(e) {
        return A(e, (e) => e.rawResults);
    }
    hasResults(e) {
        return null != A(e, (e) => e.rawResults);
    }
    isIndexing(e) {
        return A(e, (e) => e.isIndexing) || !1;
    }
    isHistoricalIndexing(e) {
        return A(e, (e) => e.isHistoricalIndexing) || !1;
    }
    isSearching(e) {
        return A(e, (e) => e.isSearching) || !1;
    }
    getAnalyticsId(e) {
        return A(e, (e) => e.analyticsId);
    }
    getResultsBlocked(e) {
        return A(e, (e) => e.resultsBlocked);
    }
    getDocumentsIndexedCount(e) {
        return A(e, (e) => e.documentsIndexed);
    }
    getSearchFetcher(e) {
        return A(e, (e) => e.searchFetcher);
    }
    getTotalResults(e) {
        var t;
        return null !== (t = A(e, (e) => e.totalResults)) && void 0 !== t ? t : 0;
    }
    getEditorState(e) {
        return A(e, (e) => e.editorState);
    }
    getHistory(e) {
        return O[e];
    }
    getOffset(e) {
        var t;
        return null !== (t = A(e, (e) => e.offset)) && void 0 !== t ? t : 0;
    }
    getQuery(e) {
        return A(e, (e) => e.query);
    }
    hasError(e) {
        var t;
        return null !== (t = A(e, (e) => e.hasError)) && void 0 !== t && t;
    }
    shouldShowBlockedResults(e) {
        var t;
        return null !== (t = A(e, (e) => e.showBlockedResults, !1)) && void 0 !== t && t;
    }
    shouldShowNoResultsAlt(e) {
        var t;
        return null !== (t = A(e, (e) => e.showNoResultsAlt, !1)) && void 0 !== t && t;
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
(o = 'SearchStore'),
    (s = 'displayName') in (a = L)
        ? Object.defineProperty(a, s, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (a[s] = o),
    (t.Z = new L(_.Z, {
        SEARCH_START: function (e) {
            var t, n;
            let { queryString: r, searchId: i, query: a } = e,
                s = g(i);
            null != s.searchFetcher && (s.searchFetcher.cancel(), (s.searchFetcher = null));
            let o = s.searchType,
                l = new E.ZP(i, o, a);
            (s.searchFetcher = l),
                (s.isSearching = !0),
                (s.rawResults = null),
                (s.analyticsId = null),
                (s.query = u().omit(a, 'type')),
                (s.offset = null !== (n = a.offset) && void 0 !== n ? n : 0),
                (s.showBlockedResults = !1),
                C({
                    type: 'SEARCH_ADD_HISTORY',
                    searchId: i,
                    query: r
                });
            let c = i === m.I_8 ? (null === (t = h.Z.getChannel(i)) || void 0 === t ? void 0 : t.guild_id) : o === m.aib.GUILD ? i : null;
            l.fetch(
                (e) => {
                    var t, n;
                    _.Z.dispatch({
                        type: 'SEARCH_FINISH',
                        searchId: i,
                        guildId: c,
                        analyticsId: e.body.analytics_id,
                        totalResults: e.body.total_results,
                        messages: e.body.messages,
                        threads: null !== (t = e.body.threads) && void 0 !== t ? t : [],
                        members: (null !== (n = e.body.members) && void 0 !== n ? n : []).map((e) => (0, f.Z)(e)),
                        hasError: !1,
                        doingHistoricalIndex: e.body.doing_deep_historical_index,
                        documentsIndexed: e.body.documents_indexed
                    });
                },
                () => {
                    _.Z.dispatch({
                        type: 'SEARCH_INDEXING',
                        searchId: i
                    });
                },
                () => {
                    _.Z.dispatch({
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
                n = g(t);
            (n.isIndexing = !0), (n.isHistoricalIndexing = !0), (n.isSearching = !1);
        },
        SEARCH_FINISH: function (e) {
            let { searchId: t } = e,
                n = g(t);
            (n.isSearching = !1), (n.isIndexing = !1), (n.isHistoricalIndexing = e.doingHistoricalIndex || !1), (n.searchFetcher = null), (n.totalResults = e.totalResults), (n.hasError = e.hasError), (n.analyticsId = e.analyticsId), (n.documentsIndexed = null != e.documentsIndexed ? e.documentsIndexed : 0), (n.showNoResultsAlt = 0.05 > Math.random()), (n.rawResults = e.messages), null == n.query && (n.hasError = !0);
        },
        SEARCH_EDITOR_STATE_CLEAR: y,
        SEARCH_ENSURE_SEARCH_STATE: function (e) {
            let { searchId: t } = e;
            null != t && g(t);
        },
        SEARCH_EDITOR_STATE_CHANGE: function (e) {
            let { searchId: t, editorState: n } = e;
            g(t).editorState = n;
        },
        SEARCH_SET_SHOW_BLOCKED_RESULTS: function (e) {
            let { searchId: t, showBlocked: n } = e;
            g(t).showBlockedResults = n;
        },
        SEARCH_SCREEN_OPEN: function (e) {
            let { searchId: t } = e;
            D(t);
        },
        CHANNEL_SELECT: function (e) {
            let { guildId: t, channelId: n } = e;
            D(null != t ? t : n);
        },
        CHANNEL_TOGGLE_MEMBERS_SECTION: function () {
            return null != R && y({ searchId: R });
        },
        SEARCH_CLEAR_HISTORY: function (e) {
            let { searchId: t } = e;
            null == t ? (d.K.remove(N), (O = {})) : (delete O[t], d.K.set(N, { history: O }));
        },
        SEARCH_REMOVE_HISTORY: function (e) {
            let { searchId: t, query: n } = e;
            null != O[t] && ((O[t] = O[t].filter((e) => e !== n)), d.K.set(N, { history: O }));
        },
        SEARCH_ADD_HISTORY: C,
        LOGOUT: function () {
            d.K.remove(N), (O = {});
        },
        CONNECTION_OPEN: function () {
            Object.keys(I).forEach((e) => {
                null != I[e] && (I[e].searchType = S(e));
            });
        },
        SEARCH_MODAL_OPEN: function (e) {
            let { searchId: t, searchType: n } = e;
            null != t && (R = t), (T = !0), (r = n);
        },
        SEARCH_MODAL_CLOSE: function () {
            (T = !1), (r = void 0);
        }
    }));
