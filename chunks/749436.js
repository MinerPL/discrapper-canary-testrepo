n.d(t, {
  Z: function() {
return O;
  }
}), n(47120);
var i, a = n(735250),
  s = n(470079),
  r = n(120356),
  l = n.n(r),
  o = n(392711),
  c = n.n(o),
  d = n(442837),
  u = n(481060),
  _ = n(212093),
  h = n(683301),
  E = n(626135),
  I = n(585483),
  m = n(900849),
  g = n(878727),
  p = n(117496),
  T = n(150192),
  S = n(731455),
  f = n(981631),
  C = n(689938),
  N = n(920052);

function A(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let v = c().throttle(m.c6, 1000, {
leading: !1,
trailing: !0
  }),
  Z = e => {
let {
  isSelected: t,
  onCategoryChange: n,
  categoryId: i,
  name: s,
  count: r
} = e;
return (0, a.jsx)(u.Clickable, {
  onClick: () => n(i),
  className: l()(N.categoryPill, {
    [N.selected]: t
  }),
  children: (0, a.jsx)(u.Text, {
    className: N.categoryLabel,
    variant: 'text-sm/normal',
    children: null != r ? ''.concat(s, ' (').concat(r, ')') : s
  })
});
  };
class L extends(i = s.PureComponent) {
  componentDidMount() {
let {
  loadId: e,
  searchResults: t,
  currentCategoryId: n
} = this.props, {
  searchId: i,
  query: a,
  isHandlingTagSearch: s
} = this.state, r = this.context;
if (null == h.ZP.getSearchIndex() && _.Ue(), I.S.subscribe(f.CkL.GLOBAL_CLIPBOARD_PASTE, this.focusInput), I.S.subscribe(f.CkL.TEXTAREA_FOCUS, this.focusInput), a.length > 0) {
  let l = n !== S.Hk ? n : null;
  v({
    loadId: e,
    searchId: i,
    query: a,
    guildResults: t.guilds,
    analyticsContext: r,
    categoryId: l,
    isTagSearch: s
  });
}
  }
  componentDidUpdate(e, t) {
let {
  loadId: n,
  isFetchingSearch: i,
  searchResults: a,
  currentCategoryId: s,
  mostRecentQuery: r
} = this.props, {
  isSearching: l,
  searchId: o,
  query: c,
  isHandlingTagSearch: d
} = this.state, u = this.context, _ = e.isFetchingSearch && !i, h = s !== S.Hk ? s : null;
(l || d) && _ && (v({
  loadId: n,
  searchId: o,
  query: c,
  guildResults: a.guilds,
  analyticsContext: u,
  categoryId: h,
  isTagSearch: d
}), this.setState({
  isHandlingTagSearch: !1
})), !t.isSearching && l && m.tI(n, h, u), e.mostRecentQuery !== r && this.setState({
  query: r,
  searchId: (0, p.P)(),
  isHandlingTagSearch: !0
});
  }
  componentWillUnmount() {
I.S.unsubscribe(f.CkL.GLOBAL_CLIPBOARD_PASTE, this.focusInput), I.S.unsubscribe(f.CkL.TEXTAREA_FOCUS, this.focusInput);
  }
  renderSearchOptions() {
var e;
let {
  availableLanguages: t
} = this.props, {
  selectedLanguage: n
} = this.state;
if (null == t)
  return null;
let i = t.map(e => {
  let {
    name: t
  } = e;
  return {
    label: t,
    value: t
  };
});
return (0, a.jsx)(u.SingleSelect, {
  className: N.languageSelector,
  options: i,
  value: null !== (e = null == n ? void 0 : n.name) && void 0 !== e ? e : '',
  onChange: this.handleLanguageChange,
  maxVisibleItems: 6
});
  }
  renderCategories() {
let {
  currentCategoryId: e,
  countsByCategory: t
} = this.props;
return (0, a.jsx)('div', {
  className: N.categories,
  children: null == t ? void 0 : t.map(t => {
    let [n, i] = t;
    return (0, a.jsx)(Z, {
      categoryId: n,
      name: n === S.Hk ? C.Z.Messages.GUILD_DISCOVERY_ALL_CATEGORY_FILTER : T.Z.getCategoryName(n),
      onCategoryChange: this.handleCategoryChange,
      isSelected: e === n,
      count: i
    }, n);
  })
});
  }
  render() {
let {
  query: e,
  inputFocused: t
} = this.state, {
  placeholder: n,
  isSearchPage: i
} = this.props;
return (0, a.jsxs)(a.Fragment, {
  children: [
    (0, a.jsxs)('div', {
      className: l()(N.container, {
        [N.searchPage]: i
      }),
      children: [
        (0, a.jsx)('div', {
          className: N.search,
          children: (0, a.jsx)(u.SearchBox, {
            ref: this._searchRef,
            searchTerm: e,
            className: i ? void 0 : N.searchBox,
            inputClassName: i ? void 0 : N.searchBoxInput,
            closeIconClassName: i ? void 0 : N.closeIcon,
            searchIconClassName: i ? void 0 : N.searchIcon,
            label: C.Z.Messages.GUILD_DISCOVERY_SEARCH_LABEL,
            placeholder: n,
            onChange: this.handleQueryChanged,
            onClear: this.handleQueryCleared,
            onFocus: this.handleFocus,
            onBlur: this.handleSearchBlurred,
            onKeyPress: this.handleSearchKeyPress,
            autoFocus: !i,
            cta: t && null != e && e.length > 1 ? C.Z.Messages.GUILD_DISCOVERY_SEARCH_ENTER_CTA : null
          })
        }),
        i ? this.renderSearchOptions() : null
      ]
    }),
    i ? this.renderCategories() : null
  ]
});
  }
  constructor(e) {
super(e), A(this, '_searchRef', s.createRef()), A(this, 'canSearch', e => e.trim().length >= 2 && !(0, g.x)(e)), A(this, 'doSearch', (e, t, n, i) => {
  var a;
  let {
    defaultLanguage: s,
    currentCategoryId: r
  } = this.props, {
    query: l,
    selectedLanguage: o
  } = this.state, c = {
    approximate_member_count: m.sq
  };
  i && _.G7(l, c), this.setState({
    searchId: (0, p.P)(),
    queryHasChanged: !1,
    isSearching: !0
  }), _.bR(l, {
    categoryId: null == n ? r : n,
    preferredLocale: null !== (a = null == o ? void 0 : o.code) && void 0 !== a ? a : s.code,
    offset: e,
    length: t,
    filters: c
  });
}), A(this, 'handleSearchBlurred', e => {
  let {
    onSearchBlur: t
  } = this.props;
  this.setState({
    inputFocused: !1
  }), null == t || t();
}), A(this, 'handleSearchKeyPress', e => {
  let {
    query: t,
    queryHasChanged: n
  } = this.state, {
    loadId: i,
    currentCategoryId: a
  } = this.props, s = a !== S.Hk ? a : null;
  this.canSearch(t) && n && e.charCode === f.yXg.ENTER ? (m.tI(i, s), this.doSearch(0, 12, void 0, !0)) : 0 === t.length && e.charCode === f.yXg.ENTER && this.setState({
    isSearching: !1
  });
}), A(this, 'handleQueryChanged', e => {
  this.setState({
    query: e,
    queryHasChanged: !0
  });
}), A(this, 'handleQueryCleared', () => {
  this.setState({
    query: '',
    queryHasChanged: !0,
    isSearching: !1
  });
}), A(this, 'handleLanguageChange', e => {
  let {
    mostRecentQuery: t,
    availableLanguages: n
  } = this.props, i = null == n ? void 0 : n.find(t => t.name === e);
  this.setState({
    selectedLanguage: i
  }, () => {
    this.canSearch(t) && this.doSearch(0, 12);
  });
}), A(this, 'handleCategoryChange', e => {
  let {
    mostRecentQuery: t
  } = this.props;
  _.uY(e), this.canSearch(t) && this.doSearch(0, 12, e);
}), A(this, 'handleFocus', () => {
  let {
    onSearchFocus: e
  } = this.props;
  this.setState({
    inputFocused: !0
  }), null == e || e();
}), A(this, 'focusInput', () => {
  var e;
  null === (e = this._searchRef.current) || void 0 === e || e.focus();
}), this.state = {
  searchId: (0, p.P)(),
  query: e.isSearchPage ? e.mostRecentQuery : '',
  queryHasChanged: !1,
  isSearching: !1,
  selectedLanguage: e.defaultLanguage,
  inputFocused: !1,
  isHandlingTagSearch: e.isTagSearch || !1
};
  }
}

function O(e) {
  let t = (0, d.e7)([T.Z], () => T.Z.getDiscoveryCategories(), [], T.j),
n = (0, d.e7)([h.ZP], () => h.ZP.getTopCategoryCounts(e.mostRecentQuery));
  return (0, a.jsx)(L, {
...e,
categories: t,
countsByCategory: n
  });
}
A(L, 'contextType', void 0), L.contextType = E.AnalyticsContext;