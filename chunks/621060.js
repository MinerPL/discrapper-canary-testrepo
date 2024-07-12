r.d(t, {
  Z: function() {
return g;
  }
}), r(47120), r(653041);
var a = r(735250),
  n = r(470079),
  i = r(120356),
  o = r.n(i),
  l = r(481060),
  c = r(424625),
  s = r(823379),
  d = r(246992),
  u = r(979756);
let h = n.forwardRef(function(e, t) {
  let {
id: r,
selected: n,
onClick: i,
children: c
  } = e;
  return (0, a.jsx)(l.Clickable, {
className: o()(u.tabItem, {
  [u.selected]: n
}),
'data-tab-id': r,
innerRef: t,
onClick: i,
children: c
  });
});

function m(e) {
  let {
tabs: t,
selectedTabId: r,
onSelectTab: i
  } = e, o = n.useRef(null), m = n.useRef(0), g = n.useRef(new Map()), [p, b] = n.useState([]), f = n.useCallback(() => {
var e, a, n, i;
if (null == o.current)
  return;
let l = [],
  c = o.current.getBoundingClientRect().width;
if (c !== m.current) {
  for (let o of (m.current = c, c -= null !== (a = null === (e = g.current.get(r)) || void 0 === e ? void 0 : e.width) && void 0 !== a ? a : 0, t)) {
    if (o.id !== r)
      (c -= null !== (i = null === (n = g.current.get(o.id)) || void 0 === n ? void 0 : n.width) && void 0 !== i ? i : 0) < 0 && l.push(o.id);
  }
  b(l);
}
  }, [
t,
r
  ]), y = n.useRef(null);
  n.useEffect(() => (y.current = new ResizeObserver(() => f()), null != o.current && y.current.observe(o.current), () => {
var e;
null === (e = y.current) || void 0 === e || e.disconnect();
  }), [f]);
  let x = n.useCallback(e => {
let {
  closePopout: n
} = e;
return (0, a.jsx)(l.Menu, {
  navId: 'devtools-overflow',
  variant: 'fixed',
  onClose: n,
  'aria-label': 'Overflowed DevTools Tabs',
  onSelect: n,
  children: t.map(e => {
    let {
      id: t,
      name: n
    } = e;
    return p.includes(t) && r !== t ? (0, a.jsx)(l.MenuItem, {
      id: t,
      label: n,
      action: () => i(t)
    }, t) : null;
  }).filter(s.lm)
});
  }, [
t,
p,
i,
r
  ]);
  return (0, a.jsxs)('div', {
className: u.tabBar,
ref: o,
children: [
  t.map(e => {
    let {
      id: t,
      name: n
    } = e;
    if (!p.includes(t))
      return (0, a.jsx)(h, {
        id: t,
        selected: r === t,
        ref: e => {
          var r, a, n;
          let i = null !== (a = null === (r = g.current.get(t)) || void 0 === r ? void 0 : r.width) && void 0 !== a ? a : 0;
          g.current.set(t, {
            node: e,
            width: null !== (n = null == e ? void 0 : e.getBoundingClientRect().width) && void 0 !== n ? n : i
          });
        },
        onClick: r !== t ? () => i(t) : void 0,
        children: n
      }, t);
  }).filter(s.lm),
  p.length > 0 && (0, a.jsx)(a.Fragment, {
    children: (0, a.jsx)(l.Popout, {
      layerContext: d.O$,
      renderPopout: x,
      position: 'bottom',
      align: 'right',
      spacing: 0,
      children: e => (0, a.jsx)(l.Button, {
        ...e,
        className: u.overflowChevron,
        size: l.Button.Sizes.ICON,
        look: l.Button.Looks.BLANK,
        children: (0, a.jsx)(c.Z, {
          className: u.__invalid_overflowIcon,
          width: 16,
          height: 16
        })
      })
    })
  })
]
  });
}

function g(e, t) {
  var r, i, o;
  let {
tabs: l,
initialSelectedTabId: c,
onChangeTab: s
  } = e, [d, u] = n.useState(null != c ? c : null === (r = l[0]) || void 0 === r ? void 0 : r.id), h = n.useCallback(() => (0, a.jsx)(m, {
tabs: l,
selectedTabId: d,
onSelectTab: e => {
  u(e), null == s || s(e);
}
  }), [
d,
u,
s,
...t
  ]);
  return {
TabBar: h,
renderSelectedTab: null !== (o = null === (i = l.find(e => e.id === d)) || void 0 === i ? void 0 : i.render) && void 0 !== o ? o : () => null,
selectedTabId: d
  };
}