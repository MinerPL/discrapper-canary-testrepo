"use strict";
n.r(t), n.d(t, {
  changePage: function() {
    return E
  },
  clearHistory: function() {
    return m
  },
  clearSearchState: function() {
    return p
  },
  search: function() {
    return o
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
  searchQueryParamsToSearchMode: function() {
    return u
  },
  setSearchState: function() {
    return I
  },
  setShowBlockedResults: function() {
    return N
  },
  updateAutocompleteQuery: function() {
    return h
  }
}), n("724458");
var s = n("570140"),
  a = n("367907"),
  l = n("768119"),
  i = n("405656"),
  r = n("981631");

function o(e, t, n, o) {
  (0, i.setIncludeNSFW)(t, e), o && (t.search_everywhere = !0);
  let u = Object.keys(t);
  a.default.trackWithMetadata(r.AnalyticEvents.SEARCH_STARTED, {
    search_type: l.default.getSearchType(),
    prev_search_id: l.default.getAnalyticsId(e),
    num_modifiers: u.length,
    modifiers: u.reduce((e, n) => {
      let s = t[n];
      return e[n] = Array.isArray(s) ? s.length : 1, e
    }, {})
  }), s.default.dispatch({
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
  let n = l.default.getQuery(e),
    s = function(e) {
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
    ...s,
    offset: 0
  })
}

function c(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.SEARCH_PAGE_SIZE;
  return _(e, t)
}

function f(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.SEARCH_PAGE_SIZE;
  return _(e, -t)
}

function E(e, t) {
  return T(e, t * r.SEARCH_PAGE_SIZE)
}

function _(e, t) {
  let n = l.default.getOffset(e);
  return T(e, n + t)
}

function T(e, t) {
  let n = l.default.getQuery(e),
    s = l.default.getTotalResults(e);
  if (!(t < 0) && !(t > s)) return o(e, {
    ...n,
    offset: t
  })
}

function m(e) {
  s.default.dispatch({
    type: "SEARCH_CLEAR_HISTORY",
    searchId: e
  })
}

function I(e, t) {
  null != e && s.default.dispatch({
    type: "SEARCH_EDITOR_STATE_CHANGE",
    searchId: e,
    editorState: t
  })
}

function p(e) {
  a.default.trackWithMetadata(r.AnalyticEvents.SEARCH_CLOSED, {
    search_id: l.default.getAnalyticsId(e)
  }), s.default.wait(() => s.default.dispatch({
    type: "SEARCH_EDITOR_STATE_CLEAR",
    searchId: e
  }))
}

function h(e, t, n) {
  null != e && s.default.dispatch({
    type: "SEARCH_AUTOCOMPLETE_QUERY_UPDATE",
    searchId: e,
    tokens: t,
    cursorScope: n
  })
}

function N(e, t) {
  s.default.dispatch({
    type: "SEARCH_SET_SHOW_BLOCKED_RESULTS",
    searchId: e,
    showBlocked: t
  })
}