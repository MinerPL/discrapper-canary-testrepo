"use strict";
n.r(t), n.d(t, {
  default: function() {
    return P
  }
}), n("47120");
var a, s = n("735250"),
  l = n("470079"),
  i = n("803997"),
  r = n.n(i),
  o = n("392711"),
  u = n.n(o),
  d = n("442837"),
  c = n("481060"),
  f = n("212093"),
  E = n("683301"),
  h = n("408814"),
  _ = n("626135"),
  C = n("585483"),
  m = n("900849"),
  S = n("878727"),
  I = n("117496"),
  p = n("150192"),
  T = n("731455"),
  g = n("981631"),
  A = n("689938"),
  N = n("80420");

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let O = u().throttle(m.trackSearchResultsViewed, 1e3, {
    leading: !1,
    trailing: !0
  }),
  R = e => {
    let {
      isSelected: t,
      onCategoryChange: n,
      categoryId: a,
      name: l,
      count: i
    } = e;
    return (0, s.jsx)(c.Clickable, {
      onClick: () => n(a),
      className: r()(N.categoryPill, {
        [N.selected]: t
      }),
      children: (0, s.jsx)(c.Text, {
        className: N.categoryLabel,
        variant: "text-sm/normal",
        children: null != i ? "".concat(l, " (").concat(i, ")") : l
      })
    })
  };
class L extends(a = l.PureComponent) {
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
    if (null == E.default.getSearchIndex() && f.createAlgoliaIndex(), C.ComponentDispatch.subscribe(g.ComponentActions.GLOBAL_CLIPBOARD_PASTE, this.focusInput), C.ComponentDispatch.subscribe(g.ComponentActions.TEXTAREA_FOCUS, this.focusInput), s.length > 0) {
      let r = n !== T.DISCOVERY_ALL_CATEGORIES_ID ? n : null;
      O({
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
    } = this.state, c = this.context, f = e.isFetchingSearch && !a, E = l !== T.DISCOVERY_ALL_CATEGORIES_ID ? l : null;
    (r || d) && f && (O({
      loadId: n,
      searchId: o,
      query: u,
      guildResults: s.guilds,
      analyticsContext: c,
      categoryId: E,
      isTagSearch: d
    }), this.setState({
      isHandlingTagSearch: !1
    })), !t.isSearching && r && m.trackSearchStarted(n, E, c), e.mostRecentQuery !== i && this.setState({
      query: i,
      searchId: (0, I.makeAnalyticsID)(),
      isHandlingTagSearch: !0
    })
  }
  componentWillUnmount() {
    C.ComponentDispatch.unsubscribe(g.ComponentActions.GLOBAL_CLIPBOARD_PASTE, this.focusInput), C.ComponentDispatch.unsubscribe(g.ComponentActions.TEXTAREA_FOCUS, this.focusInput)
  }
  renderSearchOptions() {
    var e;
    let {
      availableLanguages: t
    } = this.props, {
      selectedLanguage: n
    } = this.state;
    if (null == t) return null;
    let a = t.map(e => {
      let {
        name: t
      } = e;
      return {
        label: t,
        value: t
      }
    });
    return (0, s.jsx)(c.SingleSelect, {
      className: N.languageSelector,
      options: a,
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
    return (0, s.jsx)("div", {
      className: N.categories,
      children: null == t ? void 0 : t.map(t => {
        let [n, a] = t;
        return (0, s.jsx)(R, {
          categoryId: n,
          name: n === T.DISCOVERY_ALL_CATEGORIES_ID ? A.default.Messages.GUILD_DISCOVERY_ALL_CATEGORY_FILTER : p.default.getCategoryName(n),
          onCategoryChange: this.handleCategoryChange,
          isSelected: e === n,
          count: a
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
      isSearchPage: a
    } = this.props;
    return (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsxs)("div", {
        className: r()(N.container, {
          [N.searchPage]: a
        }),
        children: [(0, s.jsx)("div", {
          className: N.search,
          children: (0, s.jsx)(h.default, {
            ref: this._searchRef,
            searchTerm: e,
            className: a ? void 0 : N.searchBox,
            inputClassName: a ? void 0 : N.searchBoxInput,
            closeIconClassName: a ? void 0 : N.closeIcon,
            searchIconClassName: a ? void 0 : N.searchIcon,
            label: A.default.Messages.GUILD_DISCOVERY_SEARCH_LABEL,
            placeholder: n,
            onChange: this.handleQueryChanged,
            onClear: this.handleQueryCleared,
            onFocus: this.handleFocus,
            onBlur: this.handleSearchBlurred,
            onKeyPress: this.handleSearchKeyPress,
            autoFocus: !a,
            cta: t && null != e && e.length > 1 ? A.default.Messages.GUILD_DISCOVERY_SEARCH_ENTER_CTA : null
          })
        }), a ? this.renderSearchOptions() : null]
      }), a ? this.renderCategories() : null]
    })
  }
  constructor(e) {
    super(e), v(this, "_searchRef", l.createRef()), v(this, "canSearch", e => e.trim().length >= 2 && !(0, S.searchQueryContainsBannedWord)(e)), v(this, "doSearch", (e, t, n, a) => {
      var s;
      let {
        defaultLanguage: l,
        currentCategoryId: i
      } = this.props, {
        query: r,
        selectedLanguage: o
      } = this.state, u = {
        approximate_member_count: m.MINIMUM_MEMBER_COUNT
      };
      a && f.getSearchResultsCount(r, u), this.setState({
        searchId: (0, I.makeAnalyticsID)(),
        queryHasChanged: !1,
        isSearching: !0
      }), f.doAlgoliaSearch(r, {
        categoryId: null == n ? i : n,
        preferredLocale: null !== (s = null == o ? void 0 : o.code) && void 0 !== s ? s : l.code,
        offset: e,
        length: t,
        filters: u
      })
    }), v(this, "handleSearchBlurred", e => {
      let {
        onSearchBlur: t
      } = this.props;
      this.setState({
        inputFocused: !1
      }), null == t || t()
    }), v(this, "handleSearchKeyPress", e => {
      let {
        query: t,
        queryHasChanged: n
      } = this.state, {
        loadId: a,
        currentCategoryId: s
      } = this.props, l = s !== T.DISCOVERY_ALL_CATEGORIES_ID ? s : null;
      this.canSearch(t) && n && e.charCode === g.KeyboardKeys.ENTER ? (m.trackSearchStarted(a, l), this.doSearch(0, 12, void 0, !0)) : 0 === t.length && e.charCode === g.KeyboardKeys.ENTER && this.setState({
        isSearching: !1
      })
    }), v(this, "handleQueryChanged", e => {
      this.setState({
        query: e,
        queryHasChanged: !0
      })
    }), v(this, "handleQueryCleared", () => {
      this.setState({
        query: "",
        queryHasChanged: !0,
        isSearching: !1
      })
    }), v(this, "handleLanguageChange", e => {
      let {
        mostRecentQuery: t,
        availableLanguages: n
      } = this.props, a = null == n ? void 0 : n.find(t => t.name === e);
      this.setState({
        selectedLanguage: a
      }, () => {
        this.canSearch(t) && this.doSearch(0, 12)
      })
    }), v(this, "handleCategoryChange", e => {
      let {
        mostRecentQuery: t
      } = this.props;
      f.selectCategory(e), this.canSearch(t) && this.doSearch(0, 12, e)
    }), v(this, "handleFocus", () => {
      let {
        onSearchFocus: e
      } = this.props;
      this.setState({
        inputFocused: !0
      }), null == e || e()
    }), v(this, "focusInput", () => {
      var e;
      null === (e = this._searchRef.current) || void 0 === e || e.focus()
    }), this.state = {
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

function P(e) {
  let t = (0, d.useStateFromStores)([p.default], () => p.default.getDiscoveryCategories(), [], p.areDiscoveryCategoriesEqual),
    n = (0, d.useStateFromStores)([E.default], () => E.default.getTopCategoryCounts(e.mostRecentQuery));
  return (0, s.jsx)(L, {
    ...e,
    categories: t,
    countsByCategory: n
  })
}
v(L, "contextType", void 0), L.contextType = _.AnalyticsContext