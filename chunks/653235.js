n.d(t, {
  Z: function() {
return O;
  }
}), n(47120);
var r = n(735250),
  i = n(470079),
  a = n(392711),
  o = n.n(a),
  s = n(442837),
  l = n(377108),
  u = n(692547),
  c = n(481060),
  d = n(68405),
  _ = n(527429),
  E = n(656733),
  f = n(251625),
  h = n(985375),
  p = n(132748),
  m = n(353903),
  I = n(215016),
  T = n(981631),
  g = n(689938),
  S = n(546626);

function A(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let N = (e, t) => (0, r.jsx)(m.G0, {
  columns: e
}, t);
class v extends i.PureComponent {
  componentDidMount() {
0 === this.props.trendingCategories.length && (0, d.Tg)();
  }
  getData() {
return this.memoizedData(this.state.favoritesTile, this.props.trendingCategories, this.props.hideFavoritesTile);
  }
  renderCategoryExtras(e) {
let {
  name: t,
  icon: n,
  type: a
} = e;
return (0, r.jsxs)(i.Fragment, {
  children: [
    (0, r.jsx)('div', {
      className: a === T.wI2.FAVORITES ? S.categoryFadeBlurple : S.categoryFade
    }),
    (0, r.jsxs)('div', {
      className: S.categoryText,
      children: [
        null != n ? (0, r.jsx)(n, {
          className: S.categoryIcon,
          color: 'currentColor'
        }) : null,
        (0, r.jsx)('span', {
          className: S.categoryName,
          children: t
        })
      ]
    })
  ]
});
  }
  render() {
return (0, r.jsx)(_.Z, {
  getItemGrid: this.getItemGrid,
  getCoordsMap: this.getCoordsMap,
  onFocus: this.handleFocus,
  onSelect: this.handleSelect,
  children: (0, r.jsx)(p.Z, {
    desiredItemWidth: 200,
    maxColumns: 6,
    children: this.renderContent
  })
});
  }
  constructor(...e) {
super(...e), A(this, '_masonryRef', i.createRef()), A(this, 'state', {
  favoritesTile: function(e) {
    var t;
    let n = o().sample(o().values(e));
    return {
      type: T.wI2.FAVORITES,
      name: g.Z.Messages.CATEGORY_FAVORITE,
      icon: c.StarIcon,
      src: null != n ? n.src : 'https://media.giphy.com/media/1TOSaJsWtnhe0/giphy.gif',
      format: null !== (t = null == n ? void 0 : n.format) && void 0 !== t ? t : l.EO.IMAGE
    };
  }(this.props.favorites),
  selectedIndex: {
    column: 0,
    row: 0
  },
  focusedId: null
}), A(this, 'handleFocus', e => {
  let {
    current: t
  } = this._masonryRef;
  if (null == t)
    return;
  let n = t.getCoordsMap()[e];
  null != n && (t.scrollIntoViewRect({
    start: n.top - 10,
    end: n.top + n.height + 10
  }), this.setState({
    focusedId: e
  }));
}), A(this, 'handleSelect', e => {
  let {
    onSelectItem: t
  } = this.props, n = this.getData().find(t => t.name === e);
  null != n && null != t && t(n.type, n.name);
}), A(this, 'getItemKey', (e, t) => {
  if (e > 0)
    return null;
  let n = this.getData()[t];
  return null != n ? n.name : null;
}), A(this, 'memoizedData', (0, f.oH)(function(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
  return n ? [...t] : [
    e,
    ...t
  ];
})), A(this, 'renderItem', (e, t, n, i) => {
  if (e > 0)
    return null;
  let a = this.getData()[t];
  if (null == a)
    return;
  let {
    onSelectItem: o,
    imagePool: s,
    videoPool: l
  } = this.props, {
    focusedId: c
  } = this.state;
  return (0, r.jsx)(I.iR, {
    format: a.format,
    color: u.Z.unsafe_rawColors.PRIMARY_800.css,
    src: a.src,
    item: a,
    index: t,
    coords: n,
    onClick: () => o(a.type, a.name),
    renderExtras: this.renderCategoryExtras,
    focused: a.name === c,
    imagePool: s,
    videoPool: l
  }, i);
}), A(this, 'renderContent', (e, t, n) => {
  let {
    trendingCategories: i
  } = this.props;
  return 0 === i.length ? (0, r.jsx)(m.u$, {
    columns: e,
    width: t,
    renderColumn: N
  }) : (0, r.jsx)(c.MasonryList, {
    ref: this._masonryRef,
    fade: !0,
    className: S.container,
    itemGutter: 12,
    getItemKey: this.getItemKey,
    columns: e,
    getItemHeight: () => 110,
    renderItem: this.renderItem,
    sections: [this.getData().length],
    chunkSize: 50
  });
}), A(this, 'getItemGrid', () => {
  let {
    current: e
  } = this._masonryRef;
  return null != e ? e.getItemGrid() : [];
}), A(this, 'getCoordsMap', () => {
  let {
    current: e
  } = this._masonryRef;
  return null != e ? e.getCoordsMap() : {};
});
  }
}

function O(e) {
  let t = (0, s.e7)([E.Z], () => E.Z.getTrendingCategories()),
n = (0, h.gG)(),
i = (0, I.PY)();
  return (0, r.jsx)(v, {
...e,
...i,
trendingCategories: t,
favorites: n
  });
}