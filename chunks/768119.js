"use strict";
let i;
n(733860);
var r, s, o, a, l = n(392711),
  u = n.n(l),
  _ = n(442837),
  d = n(433517),
  c = n(570140),
  E = n(840877),
  I = n(952537),
  T = n(592125),
  h = n(430824),
  S = n(981631);
let f = {},
  N = !1;

function A(e) {
  return null == f[e] && (f[e] = {
    searchId: e,
    searchType: m(e),
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
  }), f[e]
}

function m(e) {
  return e === S.aib.DMS ? S.aib.DMS : e === S.I_8 ? S.aib.FAVORITES : null != h.Z.getGuild(e) ? S.aib.GUILD : null != T.Z.getChannel(e) ? S.aib.CHANNEL : null
}

function O(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
  if (null == e) return n;
  let i = f[e];
  return null == i ? n : t(i)
}
let R = "SearchStore",
  C = !1,
  p = {},
  g = null;

function L(e) {
  var t;
  let {
    searchId: n,
    query: i
  } = e;
  if ("string" != typeof i || "" === (i = i.trim())) return;
  let r = p[n] = null !== (t = p[n]) && void 0 !== t ? t : [],
    s = r.indexOf(i); - 1 !== s ? (r.splice(s, 1), r.unshift(i)) : null != r[0] && "" !== r[0] && i.startsWith(r[0]) ? r[0] = i : s < 0 && r.unshift(i), r.length > 5 && r.splice(5, r.length), d.K.set(R, {
    history: p
  })
}

function v(e) {
  let {
    searchId: t
  } = e, n = f[t];
  if (null == n) return !1;
  null != n.searchFetcher && n.searchFetcher.cancel(), delete f[t]
}

function D(e) {
  if (e === g) return !1;
  null != e && null == f[e] && A(e), g = e
}
class M extends(r = _.ZP.Store) {
  initialize() {
    this.waitFor(h.Z, T.Z);
    let e = d.K.get(R);
    if ((null == e ? void 0 : e.history) != null) {
      var t;
      Object.keys(t = e.history).forEach(e => {
        Array.isArray(t[e]) && (t[e] = t[e].filter(e => "string" == typeof e && e.trim())), (!Array.isArray(t[e]) || 0 === t[e].length) && delete t[e]
      }), p = t
    }
    C = !!d.K.get("tokenized")
  }
  isOpen() {
    return N
  }
  getCurrentSearchModalType() {
    return i
  }
  getCurrentSearchId() {
    return g
  }
  isActive() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : g;
    return null != e && (this.isIndexing(e) || this.isSearching(e) || this.hasResults(e))
  }
  isTokenized() {
    return C
  }
  getSearchType(e) {
    return O(null != e ? e : g, e => e.searchType)
  }
  getRawResults(e) {
    return O(e, e => e.rawResults)
  }
  hasResults(e) {
    return null != O(e, e => e.rawResults)
  }
  isIndexing(e) {
    return O(e, e => e.isIndexing) || !1
  }
  isHistoricalIndexing(e) {
    return O(e, e => e.isHistoricalIndexing) || !1
  }
  isSearching(e) {
    return O(e, e => e.isSearching) || !1
  }
  getAnalyticsId(e) {
    return O(e, e => e.analyticsId)
  }
  getResultsBlocked(e) {
    return O(e, e => e.resultsBlocked)
  }
  getDocumentsIndexedCount(e) {
    return O(e, e => e.documentsIndexed)
  }
  getSearchFetcher(e) {
    return O(e, e => e.searchFetcher)
  }
  getTotalResults(e) {
    var t;
    return null !== (t = O(e, e => e.totalResults)) && void 0 !== t ? t : 0
  }
  getEditorState(e) {
    return O(e, e => e.editorState)
  }
  getHistory(e) {
    return p[e]
  }
  getOffset(e) {
    var t;
    return null !== (t = O(e, e => e.offset)) && void 0 !== t ? t : 0
  }
  getQuery(e) {
    return O(e, e => e.query)
  }
  hasError(e) {
    var t;
    return null !== (t = O(e, e => e.hasError)) && void 0 !== t && t
  }
  shouldShowBlockedResults(e) {
    var t;
    return null !== (t = O(e, e => e.showBlockedResults, !1)) && void 0 !== t && t
  }
  shouldShowNoResultsAlt(e) {
    var t;
    return null !== (t = O(e, e => e.showNoResultsAlt, !1)) && void 0 !== t && t
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
    }
  }
}
a = "SearchStore", (o = "displayName") in(s = M) ? Object.defineProperty(s, o, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[o] = a, t.Z = new M(c.Z, {
  SEARCH_START: function(e) {
    var t, n;
    let {
      queryString: i,
      searchId: r,
      query: s
    } = e, o = A(r);
    null != o.searchFetcher && (o.searchFetcher.cancel(), o.searchFetcher = null);
    let a = o.searchType,
      l = new E.ZP(r, a, s);
    o.searchFetcher = l, o.isSearching = !0, o.rawResults = null, o.analyticsId = null, o.query = u().omit(s, "type"), o.offset = null !== (n = s.offset) && void 0 !== n ? n : 0, o.showBlockedResults = !1, L({
      type: "SEARCH_ADD_HISTORY",
      searchId: r,
      query: i
    });
    let _ = r === S.I_8 ? null === (t = T.Z.getChannel(r)) || void 0 === t ? void 0 : t.guild_id : a === S.aib.GUILD ? r : null;
    l.fetch(e => {
      var t, n;
      c.Z.dispatch({
        type: "SEARCH_FINISH",
        searchId: r,
        guildId: _,
        analyticsId: e.body.analytics_id,
        totalResults: e.body.total_results,
        messages: e.body.messages,
        threads: null !== (t = e.body.threads) && void 0 !== t ? t : [],
        members: (null !== (n = e.body.members) && void 0 !== n ? n : []).map(e => (0, I.Z)(e)),
        hasError: !1,
        doingHistoricalIndex: e.body.doing_deep_historical_index,
        documentsIndexed: e.body.documents_indexed
      })
    }, () => {
      c.Z.dispatch({
        type: "SEARCH_INDEXING",
        searchId: r
      })
    }, () => {
      c.Z.dispatch({
        type: "SEARCH_FINISH",
        searchId: r,
        guildId: _,
        messages: [],
        threads: [],
        members: [],
        totalResults: 0,
        analyticsId: null,
        hasError: !0,
        doingHistoricalIndex: !1,
        documentsIndexed: 0
      })
    })
  },
  SEARCH_INDEXING: function(e) {
    let {
      searchId: t
    } = e, n = A(t);
    n.isIndexing = !0, n.isHistoricalIndexing = !0, n.isSearching = !1
  },
  SEARCH_FINISH: function(e) {
    let {
      searchId: t
    } = e, n = A(t);
    n.isSearching = !1, n.isIndexing = !1, n.isHistoricalIndexing = e.doingHistoricalIndex || !1, n.searchFetcher = null, n.totalResults = e.totalResults, n.hasError = e.hasError, n.analyticsId = e.analyticsId, n.documentsIndexed = null != e.documentsIndexed ? e.documentsIndexed : 0, n.showNoResultsAlt = .05 > Math.random(), n.rawResults = e.messages, null == n.query && (n.hasError = !0)
  },
  SEARCH_EDITOR_STATE_CLEAR: v,
  SEARCH_ENSURE_SEARCH_STATE: function(e) {
    let {
      searchId: t
    } = e;
    null != t && A(t)
  },
  SEARCH_EDITOR_STATE_CHANGE: function(e) {
    let {
      searchId: t,
      editorState: n
    } = e;
    A(t).editorState = n
  },
  SEARCH_SET_SHOW_BLOCKED_RESULTS: function(e) {
    let {
      searchId: t,
      showBlocked: n
    } = e;
    A(t).showBlockedResults = n
  },
  SEARCH_SCREEN_OPEN: function(e) {
    let {
      searchId: t
    } = e;
    D(t)
  },
  CHANNEL_SELECT: function(e) {
    let {
      guildId: t,
      channelId: n
    } = e;
    D(null != t ? t : n)
  },
  CHANNEL_TOGGLE_MEMBERS_SECTION: function() {
    return null != g && v({
      searchId: g
    })
  },
  SEARCH_CLEAR_HISTORY: function(e) {
    let {
      searchId: t
    } = e;
    null == t ? (d.K.remove(R), p = {}) : (delete p[t], d.K.set(R, {
      history: p
    }))
  },
  SEARCH_REMOVE_HISTORY: function(e) {
    let {
      searchId: t,
      query: n
    } = e;
    null != p[t] && (p[t] = p[t].filter(e => e !== n), d.K.set(R, {
      history: p
    }))
  },
  SEARCH_ADD_HISTORY: L,
  LOGOUT: function() {
    d.K.remove(R), p = {}
  },
  CONNECTION_OPEN: function() {
    Object.keys(f).forEach(e => {
      null != f[e] && (f[e].searchType = m(e))
    })
  },
  SEARCH_MODAL_OPEN: function(e) {
    let {
      searchId: t,
      searchType: n
    } = e;
    null != t && (g = t), N = !0, i = n
  },
  SEARCH_MODAL_CLOSE: function() {
    N = !1, i = void 0
  }
})