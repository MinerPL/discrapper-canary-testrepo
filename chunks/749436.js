n.d(t, {
  Z: function() {
return O;
  }
}), n(47120);
var i, s = n(735250),
  a = n(470079),
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
  C = n(981631),
  f = n(689938),
  N = n(920052);

function A(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let Z = c().throttle(m.c6, 1000, {
leading: !1,
trailing: !0
  }),
  L = e => {
let {
  isSelected: t,
  onCategoryChange: n,
  categoryId: i,
  name: a,
  count: r
} = e;
return (0, s.jsx)(u.Clickable, {
  onClick: () => n(i),
  className: l()(N.categoryPill, {
    [N.selected]: t
  }),
  children: (0, s.jsx)(u.Text, {
    className: N.categoryLabel,
    variant: 'text-sm/normal',
    children: null != r ? ''.concat(a, ' (').concat(r, ')') : a
  })
});
  };
class v extends(i = a.PureComponent) {
  componentDidMount() {
let {
  loadId: e,
  searchResults: t,
  currentCategoryId: n
} = this.props, {
  searchId: i,
  query: s,
  isHandlingTagSearch: a
} = this.state, r = this.context;
if (null == h.ZP.getSearchIndex() && _.Ue(), I.S.subscribe(C.CkL.GLOBAL_CLIPBOARD_PASTE, this.focusInput), I.S.subscribe(C.CkL.TEXTAREA_FOCUS, this.focusInput), s.length > 0) {
  let l = n !== S.Hk ? n : null;
  Z({
    loadId: e,
    searchId: i,
    query: s,
    guildResults: t.guilds,
    analyticsContext: r,
    categoryId: l,
    isTagSearch: a
  });
}
  }
  componentDidUpdate(e, t) {
let {
  loadId: n,
  isFetchingSearch: i,
  searchResults: s,
  currentCategoryId: a,
  mostRecentQuery: r
} = this.props, {
  isSearching: l,
  searchId: o,
  query: c,
  isHandlingTagSearch: d
} = this.state, u = this.context, _ = e.isFetchingSearch && !i, h = a !== S.Hk ? a : null;
(l || d) && _ && (Z({
  loadId: n,
  searchId: o,
  query: c,
  guildResults: s.guilds,
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
I.S.unsubscribe(C.CkL.GLOBAL_CLIPBOARD_PASTE, this.focusInput), I.S.unsubscribe(C.CkL.TEXTAREA_FOCUS, this.focusInput);
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
return (0, s.jsx)(u.SingleSelect, {
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
return (0, s.jsx)('div', {
  className: N.categories,
  children: null == t ? void 0 : t.map(t => {
    let [n, i] = t;
    return (0, s.jsx)(L, {
      categoryId: n,
      name: n === S.Hk ? f.Z.Messages.GUILD_DISCOVERY_ALL_CATEGORY_FILTER : T.Z.getCategoryName(n),
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
return (0, s.jsxs)(s.Fragment, {
  children: [
    (0, s.jsxs)('div', {
      className: l()(N.container, {
        [N.searchPage]: i
      }),
      children: [
        (0, s.jsx)('div', {
          className: N.search,
          children: (0, s.jsx)(u.SearchBox, {
            ref: this._searchRef,
            searchTerm: e,
            className: i ? void 0 : N.searchBox,
            inputClassName: i ? void 0 : N.searchBoxInput,
            closeIconClassName: i ? void 0 : N.closeIcon,
            searchIconClassName: i ? void 0 : N.searchIcon,
            label: f.Z.Messages.GUILD_DISCOVERY_SEARCH_LABEL,
            placeholder: n,
            onChange: this.handleQueryChanged,
            onClear: this.handleQueryCleared,
            onFocus: this.handleFocus,
            onBlur: this.handleSearchBlurred,
            onKeyPress: this.handleSearchKeyPress,
            autoFocus: !i,
            cta: t && null != e && e.length > 1 ? f.Z.Messages.GUILD_DISCOVERY_SEARCH_ENTER_CTA : null
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
super(e), A(this, '_searchRef', a.createRef()), A(this, 'canSearch', e => e.trim().length >= 2 && !(0, g.x)(e)), A(this, 'doSearch', (e, t, n, i) => {
  var s;
  let {
    defaultLanguage: a,
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
    preferredLocale: null !== (s = null == o ? void 0 : o.code) && void 0 !== s ? s : a.code,
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
    currentCategoryId: s
  } = this.props, a = s !== S.Hk ? s : null;
  this.canSearch(t) && n && e.charCode === C.yXg.ENTER ? (m.tI(i, a), this.doSearch(0, 12, void 0, !0)) : 0 === t.length && e.charCode === C.yXg.ENTER && this.setState({
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
  return (0, s.jsx)(v, {
...e,
categories: t,
countsByCategory: n
  });
}
A(v, 'contextType', void 0), v.contextType = E.AnalyticsContext;