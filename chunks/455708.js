"use strict";
n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(442837),
  l = n(481060),
  u = n(570140),
  _ = n(68405),
  d = n(28546),
  c = n(656733),
  E = n(285952),
  I = n(824717),
  T = n(985375),
  h = n(653235),
  S = n(215016),
  f = n(981631),
  N = n(149203),
  A = n(689938),
  m = n(771077);

function O(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let R = e => e.stopPropagation();
class C extends r.PureComponent {
  componentDidMount() {
    _.gK(), document.addEventListener("keydown", this.backToFrontPage), "" !== this.props.query && this.search(this.props.query, f.wI2.SEARCH)
  }
  componentWillUnmount() {
    u.Z.wait(() => _.v2()), document.removeEventListener("keydown", this.backToFrontPage)
  }
  search(e, t, n) {
    _.yC(e, t, n), "" === e ? this.setState({
      resultType: null
    }) : this.state.resultType !== f.wI2.SEARCH && this.setState({
      resultType: f.wI2.SEARCH
    })
  }
  renderHeaderContent() {
    let {
      query: e
    } = this.props, {
      resultType: t
    } = this.state;
    switch (t) {
      case f.wI2.FAVORITES:
        return (0, i.jsx)(l.FormTitle, {
          tag: "h5",
          className: m.searchHeader,
          children: A.Z.Messages.CATEGORY_FAVORITE
        });
      case f.wI2.TRENDING_GIFS:
        return (0, i.jsx)(l.FormTitle, {
          tag: "h5",
          className: m.searchHeader,
          children: A.Z.Messages.GIF_PICKER_RESULT_TYPE_TRENDING_GIFS
        });
      default:
        return (0, i.jsx)(l.SearchBar, {
          className: m.searchBar,
          size: l.SearchBar.Sizes.MEDIUM,
          query: e,
          onChange: this.handleChangeQuery,
          onClear: this.handleClearQuery,
          placeholder: A.Z.Messages.SEARCH_TENOR,
          "aria-label": A.Z.Messages.SEARCH_TENOR,
          ref: this.searchBarRef,
          autoFocus: !0
        })
    }
  }
  renderHeader() {
    let {
      resultType: e
    } = this.state, t = null;
    return null != e && (t = (0, i.jsx)(l.Clickable, {
      onClick: this.handleClearQuery,
      className: m.backButton,
      "aria-label": A.Z.Messages.BACK,
      children: (0, i.jsx)(I.Z, {
        title: A.Z.Messages.BACK
      })
    })), (0, i.jsxs)(E.Z, {
      align: E.Z.Align.CENTER,
      children: [t, this.renderHeaderContent()]
    })
  }
  renderContent() {
    let {
      resultItems: e,
      resultQuery: t,
      query: n,
      favorites: r,
      searchOffset: s,
      searchLimit: o,
      searchTotalResults: a,
      suggestions: l,
      hideFavorites: u
    } = this.props, {
      resultType: _
    } = this.state;
    return null == _ ? (0, i.jsx)(h.Z, {
      hideFavoritesTile: u,
      onSelectItem: this.handleSelectItem
    }) : (0, i.jsx)(S.ZP, {
      data: _ === f.wI2.FAVORITES ? r : e,
      onSelectGIF: this.handleSelectGIF,
      resultType: _,
      resultQuery: t,
      query: n,
      searchOffset: s,
      searchLimit: o,
      searchTotalResults: a,
      suggestions: l,
      onSelectSuggestion: this.handleSelectSuggestion
    })
  }
  render() {
    let {
      className: e,
      forwardedRef: t
    } = this.props;
    return (0, i.jsxs)("div", {
      id: N.vO,
      role: "tabpanel",
      "aria-labelledby": N._3,
      className: o()(m.container, e),
      onClick: R,
      ref: t,
      children: [(0, i.jsx)("div", {
        className: m.header,
        children: this.renderHeader()
      }), (0, i.jsx)("div", {
        className: m.content,
        children: this.renderContent()
      })]
    })
  }
  constructor(...e) {
    super(...e), O(this, "state", {
      resultType: null
    }), O(this, "searchBarRef", r.createRef()), O(this, "backToFrontPage", e => {
      let {
        resultType: t
      } = this.state;
      e.keyCode === f.yXg.ESCAPE && null != t && (e.stopPropagation(), e.preventDefault(), this.handleClearQuery())
    }), O(this, "handleChangeQuery", e => {
      (0, d.ql)(e), this.search(e, f.wI2.SEARCH)
    }), O(this, "handleSelectSuggestion", e => {
      (0, d.ql)(""), _.v2(), this.search(e, f.wI2.SEARCH_SUGGESTION, !0)
    }), O(this, "handleClearQuery", () => {
      let {
        current: e
      } = this.searchBarRef;
      (0, d.ql)(""), _.v2(), this.setState({
        resultType: null
      }), null != e && e.focus()
    }), O(this, "handleSelectGIF", e => {
      let {
        onSelectGIF: t
      } = this.props;
      null != t && t(e)
    }), O(this, "handleSelectItem", (e, t) => {
      let {
        current: n
      } = this.searchBarRef;
      switch (e) {
        case f.wI2.TRENDING_CATEGORY:
          _.yC(t, f.wI2.TRENDING_CATEGORY, !0), null != n && n.focus();
          break;
        case f.wI2.TRENDING_GIFS:
          _.UU()
      }
      this.setState({
        resultType: e
      })
    })
  }
}
t.Z = r.forwardRef((e, t) => {
  !e.persistSearch && (0, d.ql)("");
  let {
    query: n,
    resultQuery: r,
    resultItems: s,
    suggestions: o
  } = (0, a.cj)([c.Z], () => ({
    query: c.Z.getQuery(),
    resultQuery: c.Z.getResultQuery(),
    resultItems: c.Z.getResultItems(),
    suggestions: c.Z.getSuggestions()
  })), l = (0, d.Iu)(e => e.searchQuery), u = (0, T.HI)();
  return (0, i.jsx)(C, {
    ...e,
    forwardedRef: t,
    query: null != l && "" !== l ? l : n,
    resultQuery: r,
    resultItems: s,
    suggestions: o,
    favorites: u,
    searchOffset: 0,
    searchTotalResults: c.Z.getResultItems().length,
    searchLimit: null
  })
})