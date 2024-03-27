"use strict";
n.r(t), n.d(t, {
  search: function() {
    return o
  },
  searchQueryParamsToSearchMode: function() {
    return u
  },
  searchByMode: function() {
    return d
  },
  searchNextPage: function() {
    return c
  },
  searchPreviousPage: function() {
    return f
  },
  changePage: function() {
    return h
  },
  clearHistory: function() {
    return p
  },
  setSearchState: function() {
    return S
  },
  clearSearchState: function() {
    return g
  },
  updateAutocompleteQuery: function() {
    return N
  },
  setShowBlockedResults: function() {
    return _
  }
}), n("808653");
var a = n("913144"),
  l = n("716241"),
  s = n("744983"),
  i = n("751520"),
  r = n("49111");

function o(e, t, n, o) {
  (0, i.setIncludeNSFW)(t, e), o && (t.search_everywhere = !0);
  let u = Object.keys(t);
  l.default.trackWithMetadata(r.AnalyticEvents.SEARCH_STARTED, {
    search_type: s.default.getSearchType(),
    prev_search_id: s.default.getAnalyticsId(e),
    num_modifiers: u.length,
    modifiers: u.reduce((e, n) => {
      let a = t[n];
      return e[n] = Array.isArray(a) ? a.length : 1, e
    }, {})
  }), a.default.dispatch({
    type: "SEARCH_START",
    query: t,
    searchId: e,
    queryString: n,
    searchEverywhere: o
  })
}

function u(e) {
  return "relevance" === e.sort_by ? r.SearchModes.MOST_RELEVANT : "asc" === e.sort_order ? r.SearchModes.OLDEST : r.SearchModes.NEWEST
}

function d(e, t) {
  let n = s.default.getQuery(e),
    a = function(e) {
      switch (e) {
        case r.SearchModes.MOST_RELEVANT:
          return {
            sort_by: "relevance", sort_order: "desc"
          };
        case r.SearchModes.OLDEST:
          return {
            sort_by: "timestamp", sort_order: "asc"
          };
        case r.SearchModes.NEWEST:
        default:
          return {
            sort_by: "timestamp", sort_order: "desc"
          }
      }
    }(t);
  return o(e, {
    ...n,
    ...a,
    offset: 0
  })
}

function c(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.SEARCH_PAGE_SIZE;
  return E(e, t)
}

function f(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.SEARCH_PAGE_SIZE;
  return E(e, -t)
}

function h(e, t) {
  return m(e, t * r.SEARCH_PAGE_SIZE)
}

function E(e, t) {
  let n = s.default.getOffset(e);
  return m(e, n + t)
}

function m(e, t) {
  let n = s.default.getQuery(e),
    a = s.default.getTotalResults(e);
  if (!(t < 0) && !(t > a)) return o(e, {
    ...n,
    offset: t
  })
}

function p(e) {
  a.default.dispatch({
    type: "SEARCH_CLEAR_HISTORY",
    searchId: e
  })
}

function S(e, t) {
  null != e && a.default.dispatch({
    type: "SEARCH_EDITOR_STATE_CHANGE",
    searchId: e,
    editorState: t
  })
}

function g(e) {
  l.default.trackWithMetadata(r.AnalyticEvents.SEARCH_CLOSED, {
    search_id: s.default.getAnalyticsId(e)
  }), a.default.wait(() => a.default.dispatch({
    type: "SEARCH_EDITOR_STATE_CLEAR",
    searchId: e
  }))
}

function N(e, t, n) {
  null != e && a.default.dispatch({
    type: "SEARCH_AUTOCOMPLETE_QUERY_UPDATE",
    searchId: e,
    tokens: t,
    cursorScope: n
  })
}

function _(e, t) {
  a.default.dispatch({
    type: "SEARCH_SET_SHOW_BLOCKED_RESULTS",
    searchId: e,
    showBlocked: t
  })
}