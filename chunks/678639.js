t.d(r, {
  Z: function() {
return v;
  }
}), t(47120);
var a = t(735250),
  n = t(470079),
  i = t(120356),
  o = t.n(i),
  l = t(442837),
  c = t(481060),
  s = t(665149),
  d = t(428530),
  u = t(484036),
  h = t(681619),
  m = t(621060),
  g = t(535271),
  p = t(813879);

function b(e, r) {
  return e.store.getName().localeCompare(r.store.getName());
}

function f(e) {
  let {
store: r,
dataGetter: t
  } = e, [i, o] = n.useState(t(r));
  return n.useEffect(() => {
let e = () => o(t(r));
return e(), r.addChangeListener(e), () => {
  r.removeChangeListener(e);
};
  }, [
r,
t
  ]), (0, a.jsx)(c.ScrollerThin, {
className: p.inspectorContainer,
children: (0, a.jsx)(d.Z, {
  data: i
})
  });
}
let y = [{
key: 'name',
cellClassName: p.__invalid_eventColumn,
render(e) {
  let {
    store: r
  } = e;
  return r.getName();
}
  }],
  x = [{
  id: 'local',
  name: 'Local Variables',
  render(e) {
    let {
      store: r
    } = e;
    return null == r.__getLocalVars ? (0, a.jsxs)('div', {
      className: p.inspectorContainer,
      children: [
        'Store is missing ',
        (0, a.jsx)('code', {
          children: '__getLocalVars'
        }),
        ' method.'
      ]
    }) : (0, a.jsx)(f, {
      store: r,
      dataGetter: e => e.__getLocalVars()
    });
  }
},
{
  id: 'instance',
  name: 'Store Instance',
  render(e) {
    let {
      store: r
    } = e;
    return (0, a.jsx)(f, {
      store: r,
      dataGetter: e => e
    });
  }
}
  ];

function k(e) {
  let {
store: r,
initialHeight: t
  } = e, {
TabBar: n,
renderSelectedTab: i
  } = (0, m.Z)({
tabs: x
  }, []);
  return (0, a.jsxs)(u.Z, {
className: p.subPanel,
minHeight: 100,
initialHeight: t,
children: [
  (0, a.jsx)(n, {}),
  (0, a.jsxs)(s.ZP, {
    className: o()(g.headerBar, p.subPanelHeaderBar),
    children: [
      (0, a.jsx)(s.ZP.Icon, {
        icon: c.TagIcon,
        tooltip: r.getName()
      }),
      (0, a.jsx)(s.ZP.Title, {
        children: r.getName()
      })
    ]
  }),
  i({
    store: r
  })
]
  });
}

function v() {
  let e = n.useRef(null),
[r, t] = n.useState(''),
i = l.yh.getAll(),
s = n.useMemo(() => i.map(e => ({
  key: e._dispatchToken,
  store: e
})).sort(b), [i]).filter(e => function(e, r) {
  let {
    store: t
  } = e;
  return t.getName().toLowerCase().includes(r.toLowerCase());
}(e, r)),
[d, u] = n.useState(),
m = i.find(e => e._dispatchToken === d);
  return (0, a.jsxs)('div', {
ref: e,
className: o()(g.panel, p.panel),
children: [
  (0, a.jsx)('div', {
    className: p.toolbar,
    children: (0, a.jsx)(c.SearchBar, {
      className: p.searchBar,
      size: c.SearchBar.Sizes.SMALL,
      query: r,
      onChange: t,
      onClear: () => t(''),
      placeholder: 'Search stores',
      'aria-label': 'Search stores'
    })
  }),
  (0, a.jsx)(c.ScrollerThin, {
    className: p.tableContainer,
    children: (0, a.jsx)(h.Z, {
      columns: y,
      data: s,
      selectedRowKey: d,
      onClickRow: u
    })
  }),
  null != m && (0, a.jsx)(k, {
    store: m,
    initialHeight: null != e.current ? e.current.clientHeight / 2 : 300
  })
]
  });
}