r.d(t, {
  Z: function() {
return v;
  }
}), r(47120);
var a = r(735250),
  n = r(470079),
  i = r(120356),
  o = r.n(i),
  l = r(442837),
  c = r(481060),
  s = r(665149),
  d = r(428530),
  u = r(484036),
  h = r(681619),
  m = r(621060),
  g = r(979756),
  p = r(60645);

function b(e, t) {
  return e.store.getName().localeCompare(t.store.getName());
}

function f(e) {
  let {
store: t,
dataGetter: r
  } = e, [i, o] = n.useState(r(t));
  return n.useEffect(() => {
let e = () => o(r(t));
return e(), t.addChangeListener(e), () => {
  t.removeChangeListener(e);
};
  }, [
t,
r
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
    store: t
  } = e;
  return t.getName();
}
  }],
  x = [{
  id: 'local',
  name: 'Local Variables',
  render(e) {
    let {
      store: t
    } = e;
    return null == t.__getLocalVars ? (0, a.jsxs)('div', {
      className: p.inspectorContainer,
      children: [
        'Store is missing ',
        (0, a.jsx)('code', {
          children: '__getLocalVars'
        }),
        ' method.'
      ]
    }) : (0, a.jsx)(f, {
      store: t,
      dataGetter: e => e.__getLocalVars()
    });
  }
},
{
  id: 'instance',
  name: 'Store Instance',
  render(e) {
    let {
      store: t
    } = e;
    return (0, a.jsx)(f, {
      store: t,
      dataGetter: e => e
    });
  }
}
  ];

function k(e) {
  let {
store: t,
initialHeight: r
  } = e, {
TabBar: n,
renderSelectedTab: i
  } = (0, m.Z)({
tabs: x
  }, []);
  return (0, a.jsxs)(u.Z, {
className: p.subPanel,
minHeight: 100,
initialHeight: r,
children: [
  (0, a.jsx)(n, {}),
  (0, a.jsxs)(s.ZP, {
    className: o()(g.headerBar, p.subPanelHeaderBar),
    children: [
      (0, a.jsx)(s.ZP.Icon, {
        icon: c.TagIcon,
        tooltip: t.getName()
      }),
      (0, a.jsx)(s.ZP.Title, {
        children: t.getName()
      })
    ]
  }),
  i({
    store: t
  })
]
  });
}

function v() {
  let e = n.useRef(null),
[t, r] = n.useState(''),
i = l.yh.getAll(),
s = n.useMemo(() => i.map(e => ({
  key: e._dispatchToken,
  store: e
})).sort(b), [i]).filter(e => function(e, t) {
  let {
    store: r
  } = e;
  return r.getName().toLowerCase().includes(t.toLowerCase());
}(e, t)),
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
      query: t,
      onChange: r,
      onClear: () => r(''),
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