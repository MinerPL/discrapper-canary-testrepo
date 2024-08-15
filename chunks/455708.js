n(47120);
var r = n(735250),
  i = n(470079),
  a = n(120356),
  s = n.n(a),
  o = n(442837),
  l = n(481060),
  u = n(570140),
  c = n(68405),
  d = n(600164),
  _ = n(28546),
  E = n(656733),
  f = n(985375),
  h = n(653235),
  p = n(215016),
  m = n(981631),
  I = n(149203),
  T = n(689938),
  g = n(114381);

function S(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let A = e => e.stopPropagation();
class N extends i.PureComponent {
  componentDidMount() {
c.gK(), document.addEventListener('keydown', this.backToFrontPage), '' !== this.props.query && this.search(this.props.query, m.wI2.SEARCH);
  }
  componentWillUnmount() {
u.Z.wait(() => c.v2()), document.removeEventListener('keydown', this.backToFrontPage);
  }
  search(e, t, n) {
c.yC(e, t, n), '' === e ? this.setState({
  resultType: null
}) : this.state.resultType !== m.wI2.SEARCH && this.setState({
  resultType: m.wI2.SEARCH
});
  }
  renderHeaderContent() {
let {
  query: e
} = this.props, {
  resultType: t
} = this.state;
switch (t) {
  case m.wI2.FAVORITES:
    return (0, r.jsx)(l.FormTitle, {
      tag: 'h5',
      className: g.searchHeader,
      children: T.Z.Messages.CATEGORY_FAVORITE
    });
  case m.wI2.TRENDING_GIFS:
    return (0, r.jsx)(l.FormTitle, {
      tag: 'h5',
      className: g.searchHeader,
      children: T.Z.Messages.GIF_PICKER_RESULT_TYPE_TRENDING_GIFS
    });
  default:
    return (0, r.jsx)(l.SearchBar, {
      className: g.searchBar,
      size: l.SearchBar.Sizes.MEDIUM,
      query: e,
      onChange: this.handleChangeQuery,
      onClear: this.handleClearQuery,
      placeholder: T.Z.Messages.SEARCH_TENOR,
      'aria-label': T.Z.Messages.SEARCH_TENOR,
      ref: this.searchBarRef,
      autoFocus: !0
    });
}
  }
  renderHeader() {
let {
  resultType: e
} = this.state, t = null;
return null != e && (t = (0, r.jsx)(l.Clickable, {
  onClick: this.handleClearQuery,
  className: g.backButton,
  'aria-label': T.Z.Messages.BACK,
  children: (0, r.jsx)(l.ArrowSmallLeftIcon, {
    size: 'md',
    color: 'currentColor'
  })
})), (0, r.jsxs)(d.Z, {
  align: d.Z.Align.CENTER,
  children: [
    t,
    this.renderHeaderContent()
  ]
});
  }
  renderContent() {
let {
  resultItems: e,
  resultQuery: t,
  query: n,
  favorites: i,
  searchOffset: a,
  searchLimit: s,
  searchTotalResults: o,
  suggestions: l,
  hideFavorites: u
} = this.props, {
  resultType: c
} = this.state;
return null == c ? (0, r.jsx)(h.Z, {
  hideFavoritesTile: u,
  onSelectItem: this.handleSelectItem
}) : (0, r.jsx)(p.ZP, {
  data: c === m.wI2.FAVORITES ? i : e,
  onSelectGIF: this.handleSelectGIF,
  resultType: c,
  resultQuery: t,
  query: n,
  searchOffset: a,
  searchLimit: s,
  searchTotalResults: o,
  suggestions: l,
  onSelectSuggestion: this.handleSelectSuggestion
});
  }
  render() {
let {
  className: e,
  forwardedRef: t
} = this.props;
return (0, r.jsxs)('div', {
  id: I.vO,
  role: 'tabpanel',
  'aria-labelledby': I._3,
  className: s()(g.container, e),
  onClick: A,
  ref: t,
  children: [
    (0, r.jsx)('div', {
      className: g.header,
      children: this.renderHeader()
    }),
    (0, r.jsx)('div', {
      className: g.content,
      children: this.renderContent()
    })
  ]
});
  }
  constructor(...e) {
super(...e), S(this, 'state', {
  resultType: null
}), S(this, 'searchBarRef', i.createRef()), S(this, 'backToFrontPage', e => {
  let {
    resultType: t
  } = this.state;
  e.keyCode === m.yXg.ESCAPE && null != t && (e.stopPropagation(), e.preventDefault(), this.handleClearQuery());
}), S(this, 'handleChangeQuery', e => {
  (0, _.ql)(e), this.search(e, m.wI2.SEARCH);
}), S(this, 'handleSelectSuggestion', e => {
  (0, _.ql)(''), c.v2(), this.search(e, m.wI2.SEARCH_SUGGESTION, !0);
}), S(this, 'handleClearQuery', () => {
  let {
    current: e
  } = this.searchBarRef;
  (0, _.ql)(''), c.v2(), this.setState({
    resultType: null
  }), null != e && e.focus();
}), S(this, 'handleSelectGIF', e => {
  let {
    onSelectGIF: t
  } = this.props;
  null != t && t(e);
}), S(this, 'handleSelectItem', (e, t) => {
  let {
    current: n
  } = this.searchBarRef;
  switch (e) {
    case m.wI2.TRENDING_CATEGORY:
      c.yC(t, m.wI2.TRENDING_CATEGORY, !0), null != n && n.focus();
      break;
    case m.wI2.TRENDING_GIFS:
      c.UU();
  }
  this.setState({
    resultType: e
  });
});
  }
}
t.Z = i.forwardRef((e, t) => {
  !e.persistSearch && (0, _.ql)('');
  let {
query: n,
resultQuery: i,
resultItems: a,
suggestions: s
  } = (0, o.cj)([E.Z], () => ({
query: E.Z.getQuery(),
resultQuery: E.Z.getResultQuery(),
resultItems: E.Z.getResultItems(),
suggestions: E.Z.getSuggestions()
  })), l = (0, _.Iu)(e => e.searchQuery), u = (0, f.HI)();
  return (0, r.jsx)(N, {
...e,
forwardedRef: t,
query: null != l && '' !== l ? l : n,
resultQuery: i,
resultItems: a,
suggestions: s,
favorites: u,
searchOffset: 0,
searchTotalResults: E.Z.getResultItems().length,
searchLimit: null
  });
});