"use strict";
n.r(t), n.d(t, {
  default: function() {
    return v
  }
}), n("222007");
var a = n("37983"),
  s = n("884691"),
  l = n("414456"),
  i = n.n(l),
  r = n("917351"),
  o = n.n(r),
  u = n("446674"),
  d = n("77078"),
  c = n("340626"),
  f = n("926787"),
  E = n("466857"),
  h = n("599110"),
  _ = n("659500"),
  C = n("794818"),
  S = n("142813"),
  I = n("197231"),
  m = n("868246"),
  p = n("447621"),
  T = n("49111"),
  g = n("782340"),
  A = n("646662");
let N = o.throttle(C.trackSearchResultsViewed, 1e3, {
    leading: !1,
    trailing: !0
  }),
  R = e => {
    let {
      isSelected: t,
      onCategoryChange: n,
      categoryId: s,
      name: l,
      count: r
    } = e;
    return (0, a.jsx)(d.Clickable, {
      onClick: () => n(s),
      className: i(A.categoryPill, {
        [A.selected]: t
      }),
      children: (0, a.jsx)(d.Text, {
        className: A.categoryLabel,
        variant: "text-sm/normal",
        children: null != r ? "".concat(l, " (").concat(r, ")") : l
      })
    })
  };
class O extends s.PureComponent {
  componentDidMount() {
    let {
      loadId: e,
      searchResults: t,
      currentCategoryId: n
    } = this.props, {
      searchId: a,
      query: s,
      isHandlingTagSearch: l
    } = this.state, i = this.context;
    if (null == f.default.getSearchIndex() && c.createAlgoliaIndex(), _.ComponentDispatch.subscribe(T.ComponentActions.GLOBAL_CLIPBOARD_PASTE, this.focusInput), _.ComponentDispatch.subscribe(T.ComponentActions.TEXTAREA_FOCUS, this.focusInput), s.length > 0) {
      let r = n !== p.DISCOVERY_ALL_CATEGORIES_ID ? n : null;
      N({
        loadId: e,
        searchId: a,
        query: s,
        guildResults: t.guilds,
        analyticsContext: i,
        categoryId: r,
        isTagSearch: l
      })
    }
  }
  componentDidUpdate(e, t) {
    let {
      loadId: n,
      isFetchingSearch: a,
      searchResults: s,
      currentCategoryId: l,
      mostRecentQuery: i
    } = this.props, {
      isSearching: r,
      searchId: o,
      query: u,
      isHandlingTagSearch: d
    } = this.state, c = this.context, f = e.isFetchingSearch && !a, E = l !== p.DISCOVERY_ALL_CATEGORIES_ID ? l : null;
    (r || d) && f && (N({
      loadId: n,
      searchId: o,
      query: u,
      guildResults: s.guilds,
      analyticsContext: c,
      categoryId: E,
      isTagSearch: d
    }), this.setState({
      isHandlingTagSearch: !1
    })), !t.isSearching && r && C.trackSearchStarted(n, E, c), e.mostRecentQuery !== i && this.setState({
      query: i,
      searchId: (0, I.makeAnalyticsID)(),
      isHandlingTagSearch: !0
    })
  }
  componentWillUnmount() {
    _.ComponentDispatch.unsubscribe(T.ComponentActions.GLOBAL_CLIPBOARD_PASTE, this.focusInput), _.ComponentDispatch.unsubscribe(T.ComponentActions.TEXTAREA_FOCUS, this.focusInput)
  }
  renderSearchOptions() {
    var e;
    let {
      availableLanguages: t
    } = this.props, {
      selectedLanguage: n
    } = this.state;
    if (null == t) return null;
    let s = t.map(e => {
      let {
        name: t
      } = e;
      return {
        label: t,
        value: t
      }
    });
    return (0, a.jsx)(d.SingleSelect, {
      className: A.languageSelector,
      options: s,
      value: null !== (e = null == n ? void 0 : n.name) && void 0 !== e ? e : "",
      onChange: this.handleLanguageChange,
      maxVisibleItems: 6
    })
  }
  renderCategories() {
    let {
      currentCategoryId: e,
      countsByCategory: t
    } = this.props;
    return (0, a.jsx)("div", {
      className: A.categories,
      children: null == t ? void 0 : t.map(t => {
        let [n, s] = t;
        return (0, a.jsx)(R, {
          categoryId: n,
          name: n === p.DISCOVERY_ALL_CATEGORIES_ID ? g.default.Messages.GUILD_DISCOVERY_ALL_CATEGORY_FILTER : m.default.getCategoryName(n),
          onCategoryChange: this.handleCategoryChange,
          isSelected: e === n,
          count: s
        }, n)
      })
    })
  }
  render() {
    let {
      query: e,
      inputFocused: t
    } = this.state, {
      placeholder: n,
      isSearchPage: s
    } = this.props;
    return (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsxs)("div", {
        className: i(A.container, {
          [A.searchPage]: s
        }),
        children: [(0, a.jsx)("div", {
          className: A.search,
          children: (0, a.jsx)(E.default, {
            ref: this._searchRef,
            searchTerm: e,
            className: s ? void 0 : A.searchBox,
            inputClassName: s ? void 0 : A.searchBoxInput,
            closeIconClassName: s ? void 0 : A.closeIcon,
            searchIconClassName: s ? void 0 : A.searchIcon,
            label: g.default.Messages.GUILD_DISCOVERY_SEARCH_LABEL,
            placeholder: n,
            onChange: this.handleQueryChanged,
            onClear: this.handleQueryCleared,
            onFocus: this.handleFocus,
            onBlur: this.handleSearchBlurred,
            onKeyPress: this.handleSearchKeyPress,
            autoFocus: !s,
            cta: t && null != e && e.length > 1 ? g.default.Messages.GUILD_DISCOVERY_SEARCH_ENTER_CTA : null
          })
        }), s ? this.renderSearchOptions() : null]
      }), s ? this.renderCategories() : null]
    })
  }
  constructor(e) {
    super(e), this._searchRef = s.createRef(), this.canSearch = e => e.trim().length >= 2 && !(0, S.searchQueryContainsBannedWord)(e), this.doSearch = (e, t, n, a) => {
      var s;
      let {
        defaultLanguage: l,
        currentCategoryId: i
      } = this.props, {
        query: r,
        selectedLanguage: o
      } = this.state, u = {
        approximate_member_count: C.MINIMUM_MEMBER_COUNT
      };
      a && c.getSearchResultsCount(r, u), this.setState({
        searchId: (0, I.makeAnalyticsID)(),
        queryHasChanged: !1,
        isSearching: !0
      }), c.doAlgoliaSearch(r, {
        categoryId: null == n ? i : n,
        preferredLocale: null !== (s = null == o ? void 0 : o.code) && void 0 !== s ? s : l.code,
        offset: e,
        length: t,
        filters: u
      })
    }, this.handleSearchBlurred = e => {
      let {
        onSearchBlur: t
      } = this.props;
      this.setState({
        inputFocused: !1
      }), null == t || t()
    }, this.handleSearchKeyPress = e => {
      let {
        query: t,
        queryHasChanged: n
      } = this.state, {
        loadId: a,
        currentCategoryId: s
      } = this.props, l = s !== p.DISCOVERY_ALL_CATEGORIES_ID ? s : null;
      this.canSearch(t) && n && e.charCode === T.KeyboardKeys.ENTER ? (C.trackSearchStarted(a, l), this.doSearch(0, 12, void 0, !0)) : 0 === t.length && e.charCode === T.KeyboardKeys.ENTER && this.setState({
        isSearching: !1
      })
    }, this.handleQueryChanged = e => {
      this.setState({
        query: e,
        queryHasChanged: !0
      })
    }, this.handleQueryCleared = () => {
      this.setState({
        query: "",
        queryHasChanged: !0,
        isSearching: !1
      })
    }, this.handleLanguageChange = e => {
      let {
        mostRecentQuery: t,
        availableLanguages: n
      } = this.props, a = null == n ? void 0 : n.find(t => t.name === e);
      this.setState({
        selectedLanguage: a
      }, () => {
        this.canSearch(t) && this.doSearch(0, 12)
      })
    }, this.handleCategoryChange = e => {
      let {
        mostRecentQuery: t
      } = this.props;
      c.selectCategory(e), this.canSearch(t) && this.doSearch(0, 12, e)
    }, this.handleFocus = () => {
      let {
        onSearchFocus: e
      } = this.props;
      this.setState({
        inputFocused: !0
      }), null == e || e()
    }, this.focusInput = () => {
      var e;
      null === (e = this._searchRef.current) || void 0 === e || e.focus()
    }, this.state = {
      searchId: (0, I.makeAnalyticsID)(),
      query: e.isSearchPage ? e.mostRecentQuery : "",
      queryHasChanged: !1,
      isSearching: !1,
      selectedLanguage: e.defaultLanguage,
      inputFocused: !1,
      isHandlingTagSearch: e.isTagSearch || !1
    }
  }
}

function v(e) {
  let t = (0, u.useStateFromStores)([m.default], () => m.default.getDiscoveryCategories(), [], m.areDiscoveryCategoriesEqual),
    n = (0, u.useStateFromStores)([f.default], () => f.default.getTopCategoryCounts(e.mostRecentQuery));
  return (0, a.jsx)(O, {
    ...e,
    categories: t,
    countsByCategory: n
  })
}
O.contextType = h.AnalyticsContext