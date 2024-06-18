"use strict";
n.d(t, {
  Z: function() {
    return g
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(392711),
  o = n.n(s),
  a = n(442837),
  l = n(377108),
  u = n(692547),
  _ = n(481060),
  d = n(68405),
  c = n(527429),
  E = n(656733),
  I = n(887208),
  T = n(251625),
  h = n(985375),
  S = n(132748),
  f = n(353903),
  N = n(215016),
  A = n(981631),
  m = n(689938),
  O = n(452166);

function R(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let C = (e, t) => (0, i.jsx)(f.G0, {
  columns: e
}, t);
class p extends r.PureComponent {
  componentDidMount() {
    0 === this.props.trendingCategories.length && (0, d.Tg)()
  }
  getData() {
    return this.memoizedData(this.state.favoritesTile, this.props.trendingCategories, this.props.hideFavoritesTile)
  }
  renderCategoryExtras(e) {
    let {
      name: t,
      icon: n,
      type: s
    } = e;
    return (0, i.jsxs)(r.Fragment, {
      children: [(0, i.jsx)("div", {
        className: s === A.wI2.FAVORITES ? O.categoryFadeBlurple : O.categoryFade
      }), (0, i.jsxs)("div", {
        className: O.categoryText,
        children: [null != n ? (0, i.jsx)(n, {
          className: O.categoryIcon
        }) : null, (0, i.jsx)("span", {
          className: O.categoryName,
          children: t
        })]
      })]
    })
  }
  render() {
    return (0, i.jsx)(c.Z, {
      getItemGrid: this.getItemGrid,
      getCoordsMap: this.getCoordsMap,
      onFocus: this.handleFocus,
      onSelect: this.handleSelect,
      children: (0, i.jsx)(S.Z, {
        desiredItemWidth: 200,
        maxColumns: 6,
        children: this.renderContent
      })
    })
  }
  constructor(...e) {
    super(...e), R(this, "_masonryRef", r.createRef()), R(this, "state", {
      favoritesTile: function(e) {
        var t;
        let n = o().sample(o().values(e));
        return {
          type: A.wI2.FAVORITES,
          name: m.Z.Messages.CATEGORY_FAVORITE,
          icon: I.Z,
          src: null != n ? n.src : "https://media.giphy.com/media/1TOSaJsWtnhe0/giphy.gif",
          format: null !== (t = null == n ? void 0 : n.format) && void 0 !== t ? t : l.EO.IMAGE
        }
      }(this.props.favorites),
      selectedIndex: {
        column: 0,
        row: 0
      },
      focusedId: null
    }), R(this, "handleFocus", e => {
      let {
        current: t
      } = this._masonryRef;
      if (null == t) return;
      let n = t.getCoordsMap()[e];
      null != n && (t.scrollIntoViewRect({
        start: n.top - 10,
        end: n.top + n.height + 10
      }), this.setState({
        focusedId: e
      }))
    }), R(this, "handleSelect", e => {
      let {
        onSelectItem: t
      } = this.props, n = this.getData().find(t => t.name === e);
      null != n && null != t && t(n.type, n.name)
    }), R(this, "getItemKey", (e, t) => {
      if (e > 0) return null;
      let n = this.getData()[t];
      return null != n ? n.name : null
    }), R(this, "memoizedData", (0, T.oH)(function(e, t) {
      let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      return n ? [...t] : [e, ...t]
    })), R(this, "renderItem", (e, t, n, r) => {
      if (e > 0) return null;
      let s = this.getData()[t];
      if (null == s) return;
      let {
        onSelectItem: o,
        imagePool: a,
        videoPool: l
      } = this.props, {
        focusedId: _
      } = this.state;
      return (0, i.jsx)(N.iR, {
        format: s.format,
        color: u.Z.unsafe_rawColors.PRIMARY_800.css,
        src: s.src,
        item: s,
        index: t,
        coords: n,
        onClick: () => o(s.type, s.name),
        renderExtras: this.renderCategoryExtras,
        focused: s.name === _,
        imagePool: a,
        videoPool: l
      }, r)
    }), R(this, "renderContent", (e, t, n) => {
      let {
        trendingCategories: r
      } = this.props;
      return 0 === r.length ? (0, i.jsx)(f.u$, {
        columns: e,
        width: t,
        renderColumn: C
      }) : (0, i.jsx)(_.MasonryList, {
        ref: this._masonryRef,
        fade: !0,
        className: O.container,
        itemGutter: 12,
        getItemKey: this.getItemKey,
        columns: e,
        getItemHeight: () => 110,
        renderItem: this.renderItem,
        sections: [this.getData().length],
        chunkSize: 50
      })
    }), R(this, "getItemGrid", () => {
      let {
        current: e
      } = this._masonryRef;
      return null != e ? e.getItemGrid() : []
    }), R(this, "getCoordsMap", () => {
      let {
        current: e
      } = this._masonryRef;
      return null != e ? e.getCoordsMap() : {}
    })
  }
}

function g(e) {
  let t = (0, a.e7)([E.Z], () => E.Z.getTrendingCategories()),
    n = (0, h.gG)(),
    r = (0, N.PY)();
  return (0, i.jsx)(p, {
    ...e,
    ...r,
    trendingCategories: t,
    favorites: n
  })
}