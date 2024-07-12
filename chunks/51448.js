n.d(t, {
  f: function() {
return u;
  }
});
var i = n(735250),
  s = n(470079),
  a = n(120356),
  r = n.n(a),
  l = n(338545),
  o = n(481060),
  c = n(689938),
  d = n(479882);

function u(e) {
  var t;
  let {
icon: n,
title: a,
selectedTab: u,
tabs: _,
onTabSelect: h,
searchQuery: E,
onSearch: I,
onSearchClear: m,
onSearchSubmit: g,
scrollManager: p,
showSearch: T = !0
  } = e, S = c.Z.Messages.GLOBAL_DISCOVERY_SEARCH_PLACEHOLDER.format({
title: a
  }), C = s.useCallback(e => {
'Enter' === e.key && (null == g || g(null != E ? E : ''));
  }, [
g,
E
  ]);
  return (0, i.jsx)('div', {
className: d.container,
children: (0, i.jsxs)('div', {
  className: d.innerContainer,
  children: [
    (0, i.jsx)(l.animated.div, {
      className: d.backdrop,
      style: {
        opacity: null == p ? void 0 : null === (t = p.current) || void 0 === t ? void 0 : t.top.to([
          0,
          100
        ], [
          0,
          1
        ])
      }
    }),
    (0, i.jsx)('div', {
      className: d.icon,
      children: n
    }),
    (0, i.jsx)(o.TabBar, {
      type: 'top',
      selectedItem: u,
      onItemSelect: h,
      className: d.tabs,
      children: _.map(e => (0, i.jsx)(o.TabBar.Item, {
        id: e,
        className: r()(d.tab, {
          [d.selected]: u.id === e.id
        }),
        children: e.label
      }, e.id))
    }),
    T && null != I ? (0, i.jsx)('div', {
      className: d.search,
      children: (0, i.jsx)(o.SearchBar, {
        placeholder: S,
        query: null != E ? E : '',
        onChange: I,
        onClear: m,
        onKeyDown: C
      })
    }) : null
  ]
})
  });
}