n(47120);
var r = n(735250),
  i = n(470079),
  a = n(120356),
  o = n.n(a),
  s = n(481060),
  l = n(393903),
  u = n(689938),
  c = n(657795);

function d(e) {
  let {
items: t,
renderItem: n
  } = e;
  return (0, r.jsx)(s.Tooltip, {
text: (0, r.jsx)('div', {
  className: c.tooltip,
  children: t.map(n)
}),
'aria-label': 'overflow',
children: e => (0, r.jsx)('div', {
  ...e,
  children: n(u.Z.Messages.CLAN_DISCOVERY_TRAIT_OVERFLOW.format({
    count: t.length
  }))
})
  });
}
t.Z = function(e) {
  let {
className: t,
items: n,
renderItem: a,
itemGapPx: s = 0,
maxLines: _
  } = e, {
lastVisibleIndex: E,
containerRef: f,
itemsRef: h,
overflowItemsRef: p
  } = function(e) {
let {
  itemGapPx: t,
  items: n,
  maxLines: r
} = e, [a, o] = i.useState(0), [s, u] = i.useState(0), c = i.useRef([]), d = i.useRef(0), _ = i.useRef(0), E = i.useRef(null), f = i.useRef(null), h = (0, l.y)(e => {
  let t = null == e ? void 0 : e.getBoundingClientRect().width;
  null != t && u(t);
});
return i.useLayoutEffect(() => {
  var e;
  if (null == E.current || null == f.current)
    return;
  c.current.length = n.length, E.current.childNodes.forEach((e, t) => {
    let {
      width: n
    } = e.getBoundingClientRect();
    c.current[t] = n;
  }), d.current = null !== (e = f.current.getBoundingClientRect().width) && void 0 !== e ? e : 0;
  let i = function(e) {
    let {
      items: t,
      maxLines: n,
      itemWidths: r,
      itemGapPx: i,
      containerWidth: a,
      overflowWidth: o
    } = e, s = 0, l = 0, u = 0;
    for (let e = 0; e < t.length; e++) {
      let c = r[e];
      if (isNaN(c) || c > a)
        continue;
      let d = s === n - 1,
        _ = e === t.length - 1;
      if (!(l + c + (d && !_ ? o + i : 0) < a)) {
        if (d)
          break;
        s++, l = 0;
      }
      u = e, l += c + i;
    }
    return u;
  }({
    items: n,
    maxLines: r,
    itemGapPx: t,
    containerWidth: s,
    itemWidths: c.current,
    overflowWidth: d.current
  });
  i !== _.current && (_.current = i, o(e => e + 1));
}, [
  s,
  t,
  n,
  r
]), i.useMemo(() => ({
  lastVisibleIndex: _.current,
  containerRef: h,
  itemsRef: E,
  overflowItemsRef: f,
  version: a
}), [
  h,
  a
]);
  }({
items: n,
itemGapPx: s,
maxLines: _
  }), m = i.useMemo(() => n.slice(0, E + 1), [
n,
E
  ]), I = i.useMemo(() => n.slice(E + 1), [
n,
E
  ]);
  return (0, r.jsxs)('div', {
className: o()(t, c.items),
ref: f,
children: [
  (0, r.jsxs)('div', {
    'aria-hidden': !0,
    className: c.measurements,
    children: [
      (0, r.jsx)('div', {
        className: c.itemMeasurements,
        ref: h,
        children: n.map(a)
      }),
      (0, r.jsx)('div', {
        className: c.overflowMeasurement,
        ref: p,
        children: a(u.Z.Messages.CLAN_DISCOVERY_TRAIT_OVERFLOW.format({
          count: Number('1'.concat(n.length))
        }))
      })
    ]
  }),
  m.map(a),
  I.length > 0 && (0, r.jsx)(d, {
    items: I,
    renderItem: a
  })
]
  });
};