"use strict";
n.r(t), n.d(t, {
  default: function() {
    return y
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("803997"),
  i = n.n(s),
  r = n("392711"),
  o = n.n(r),
  u = n("442837"),
  d = n("481060"),
  c = n("447543"),
  f = n("603263"),
  h = n("367907"),
  m = n("210887"),
  p = n("695346"),
  E = n("768119"),
  C = n("944486"),
  g = n("693580"),
  S = n("585483"),
  _ = n("251285"),
  T = n("406326"),
  I = n("619753"),
  A = n("981631"),
  v = n("689938"),
  N = n("217790");

function x(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class M extends l.Component {
  componentDidMount() {
    this.autoAnalytics()
  }
  componentDidUpdate(e) {
    (this.props.searchAnalyticsId !== e.searchAnalyticsId || this.props.searchOffset !== e.searchOffset) && this.autoAnalytics(e.searchAnalyticsId)
  }
  render() {
    return null
  }
  constructor(...e) {
    var t;
    super(...e), t = this, x(this, "autoAnalytics", function() {
      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
      if (null == t.props.searchAnalyticsId) return;
      let n = 0,
        a = 0,
        l = 0,
        s = 0;
      null != t.props.searchResults && o()(t.props.searchResults).flatten().filter(e => e.isSearchHit).forEach(e => {
        null != e.content && "" !== e.content && (n++, /https?:\/\/[^\s]+/.test(e.content) && s++), null != e.embeds && e.embeds.length > 0 && l++, null != e.attachments && e.attachments.length > 0 && a++
      }), h.default.trackWithMetadata(A.AnalyticEvents.SEARCH_RESULT_VIEWED, {
        search_type: t.props.searchType,
        search_id: t.props.searchAnalyticsId,
        prev_search_id: e !== t.props.searchAnalyticsId ? e : null,
        is_error: t.props.searchHasError,
        limit: t.props.searchLimit,
        offset: t.props.searchOffset,
        page: Math.floor(t.props.searchOffset / t.props.searchLimit) + 1,
        total_results: t.props.searchTotalResults,
        page_results: null != t.props.searchResults ? t.props.searchResults.length : null,
        is_indexing: t.props.searchIsIndexing,
        page_num_messages: n,
        page_num_links: s,
        page_num_embeds: l,
        page_num_attach: a
      })
    })
  }
}
let R = e => {
  let {
    children: t
  } = e;
  return (0, a.jsx)("div", {
    className: N.emptyResultsWrap,
    children: (0, a.jsx)("div", {
      className: N.emptyResultsContent,
      children: t
    })
  })
};
class L extends l.PureComponent {
  componentDidMount() {
    S.ComponentDispatch.subscribe(A.ComponentActions.SEARCH_RESULTS_CLOSE, this.handleSearchResultsClose)
  }
  componentWillUnmount() {
    S.ComponentDispatch.unsubscribe(A.ComponentActions.SEARCH_RESULTS_CLOSE, this.handleSearchResultsClose)
  }
  componentDidUpdate(e) {
    let {
      search: t
    } = e;
    if (this.props.search.showBlockedResults !== t.showBlockedResults) {
      let e = this.scrollerRef.current;
      if (null == e) return;
      e.scrollToBottom()
    }
    let n = E.default.getQuery(this.props.searchId);
    JSON.stringify(n) !== JSON.stringify(this.state.searchQuery) && this.setState({
      searchQuery: n,
      searchMode: (null == n ? void 0 : n.sort_by) != null && null != n.sort_order ? f.searchQueryParamsToSearchMode({
        sort_by: n.sort_by,
        sort_order: n.sort_order
      }) : A.SearchModes.NEWEST
    })
  }
  render() {
    let {
      searchAnalyticsId: e,
      searchType: t,
      searchResults: n
    } = this.props, {
      offset: l,
      hasError: s,
      totalResults: i,
      isHistoricalIndexing: r
    } = this.props.search;
    return (0, a.jsxs)("section", {
      className: N.searchResultsWrap,
      "aria-label": v.default.Messages.SEARCH_RESULTS_SECTION_LABEL,
      children: [this.renderHeader(), (0, a.jsx)(d.AdvancedScroller, {
        ref: this.scrollerRef,
        className: N.scroller,
        children: this.renderContent()
      }), (0, a.jsx)(M, {
        searchType: t,
        searchAnalyticsId: e,
        searchResults: n,
        searchOffset: l,
        searchLimit: A.SEARCH_PAGE_SIZE,
        searchHasError: s,
        searchTotalResults: i,
        searchIsIndexing: r
      })]
    })
  }
  constructor(...e) {
    super(...e), x(this, "state", {
      searchMode: A.SearchModes.NEWEST,
      searchQuery: null
    }), x(this, "scrollerRef", l.createRef()), x(this, "scrollTo", (e, t, n) => {
      let a = this.scrollerRef.current;
      if (null == a) return;
      let l = a.getScrollerState().scrollTop - e;
      a.scrollTo({
        to: l,
        animate: t,
        callback: n
      })
    }), x(this, "selectChannel", e => {
      e !== C.default.getChannelId() && c.default.transitionToInviteChannelSync(e)
    }), x(this, "searchPrevious", () => {
      let {
        searchId: e,
        search: {
          isSearching: t
        }
      } = this.props;
      !t && f.searchPreviousPage(e)
    }), x(this, "searchNext", () => {
      let {
        searchId: e,
        search: {
          isSearching: t
        }
      } = this.props;
      !t && f.searchNextPage(e)
    }), x(this, "handleSearchResultsClose", () => {
      let {
        searchId: e
      } = this.props;
      f.clearSearchState(e)
    }), x(this, "searchByMode", e => {
      let {
        searchId: t,
        search: {
          isSearching: n
        }
      } = this.props, {
        searchMode: a
      } = this.state;
      e !== a && !n && (h.default.trackWithMetadata(A.AnalyticEvents.SEARCH_RESULT_SORT_CHANGED, {
        search_id: E.default.getAnalyticsId(t),
        new_sort_type: e
      }), f.searchByMode(t, e), this.setState({
        searchMode: e
      }))
    }), x(this, "toggleShowBlockedMessages", () => {
      let {
        searchId: e,
        search: {
          showBlockedResults: t
        }
      } = this.props;
      f.setShowBlockedResults(e, !t)
    }), x(this, "renderHeader", () => {
      let {
        searchMode: e
      } = this.state, {
        totalResults: t,
        isSearching: n,
        isHistoricalIndexing: l,
        documentsIndexed: s
      } = this.props.search;
      return (0, a.jsx)(T.default, {
        searchMode: e,
        searchByMode: this.searchByMode,
        totalResults: t,
        isSearching: n,
        isIndexing: l,
        documentsIndexed: s
      })
    }), x(this, "renderIndexing", () => {
      let e = E.default.getSearchType(this.props.searchId) === A.SearchTypes.GUILD ? v.default.Messages.SEARCH_GUILD_STILL_INDEXING : v.default.Messages.SEARCH_DM_STILL_INDEXING;
      return (0, a.jsxs)(R, {
        children: [(0, a.jsx)(g.default, {}), (0, a.jsx)("div", {
          className: (N.emptyResultsText, N.stillIndexing),
          children: e
        })]
      })
    }), x(this, "renderNoResults", () => {
      let {
        showNoResultsAlt: e
      } = this.props.search, t = e ? v.default.Messages.SEARCH_NO_RESULTS_ALT : v.default.Messages.SEARCH_NO_RESULTS;
      return (0, a.jsxs)(R, {
        children: [(0, a.jsx)("div", {
          className: i()(N.noResultsImage, {
            [N.alt]: e
          })
        }), (0, a.jsx)("div", {
          className: i()(N.emptyResultsText, N.noResults, {
            [N.alt]: e
          }),
          children: t
        })]
      })
    }), x(this, "renderError", () => (0, a.jsxs)(R, {
      children: [(0, a.jsx)("div", {
        className: N.errorImage
      }), (0, a.jsx)("div", {
        className: i()(N.emptyResultsText, N.errorMessage),
        children: v.default.Messages.SEARCH_ERROR
      })]
    })), x(this, "renderContent", () => {
      let {
        searchResults: e,
        blockCount: t
      } = this.props, {
        totalResults: n,
        isSearching: l,
        isIndexing: s,
        hasError: i
      } = this.props.search;
      return i ? this.renderError() : s ? this.renderIndexing() : l ? null : n > 0 ? (0, a.jsx)(I.default, {
        search: this.props.search,
        searchResults: e,
        blockCount: t,
        searchId: this.props.searchId,
        renderEmbeds: this.props.renderEmbeds,
        scrollTo: this.scrollTo
      }) : this.renderNoResults()
    })
  }
}

function y(e) {
  let {
    searchId: t
  } = e;
  return (0, a.jsx)(L, {
    searchId: t,
    ...(0, u.useStateFromStoresObject)([E.default], () => ({
      search: E.default.getResultsState(t),
      searchAnalyticsId: E.default.getAnalyticsId(t),
      searchType: E.default.getSearchType()
    }), [t]),
    ...(0, _.default)(t),
    renderEmbeds: p.RenderEmbeds.useSetting(),
    developerMode: p.DeveloperMode.useSetting(),
    ...(0, u.useStateFromStoresObject)([m.default], () => {
      let {
        theme: e
      } = m.default;
      return {
        theme: e
      }
    })
  })
}