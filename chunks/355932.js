n.d(t, {
  AJ: function() {
return E;
  },
  zP: function() {
return d;
  }
}), n(47120);
var r = n(735250),
  i = n(470079),
  a = n(120356),
  s = n.n(a),
  o = n(481060),
  l = n(393903),
  u = n(689938),
  c = n(657795);

function d(e) {
  let {
itemGapPx: t,
items: n,
maxLines: r,
containerWidth: a
  } = e, [s, o] = i.useState(0), l = i.useRef([]), u = i.useRef(0), c = i.useRef(0), d = i.useRef(null), _ = i.useCallback((e, t) => {
l.current[e] = t;
  }, []);
  return i.useLayoutEffect(() => {
var e;
if (null == d.current)
  return;
l.current.length = n.length, u.current = null !== (e = d.current.getBoundingClientRect().width) && void 0 !== e ? e : 0;
let i = function(e) {
  let {
    items: t,
    maxLines: n,
    itemWidths: r,
    itemGapPx: i,
    containerWidth: a,
    overflowWidth: s
  } = e, o = 0, l = 0, u = 0;
  for (let e = 0; e < t.length; e++) {
    let c = r[e];
    if (isNaN(c) || c > a)
      continue;
    let d = o === n - 1,
      _ = e === t.length - 1;
    if (!(Math.round(l + c + (d && !_ ? s + i : 0)) < Math.round(a))) {
      if (d)
        break;
      o++, l = 0;
    }
    u = e, l += c + i;
  }
  return u;
}({
  items: n,
  maxLines: r,
  itemGapPx: t,
  containerWidth: a,
  itemWidths: l.current,
  overflowWidth: u.current
});
i !== c.current && (c.current = i, o(e => e + 1));
  }, [
a,
t,
n,
r
  ]), i.useMemo(() => ({
lastVisibleIndex: c.current,
onItemLayout: _,
overflowItemsRef: d,
itemWidthsRef: l,
version: s
  }), [
_,
s
  ]);
}

function _(e) {
  let {
items: t,
renderItem: n
  } = e;
  return (0, r.jsx)(o.Tooltip, {
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

function E(e) {
  let {
onItemLayout: t,
index: n,
children: a
  } = e, s = i.useRef(null);
  return i.useLayoutEffect(() => {
if (null != s.current)
  t(n, s.current.getBoundingClientRect().width);
  }), (0, r.jsx)('div', {
ref: s,
children: a
  });
}
t.ZP = function(e) {
  let {
className: t,
items: n,
renderItem: a,
itemGapPx: o = 0,
maxLines: f
  } = e, {
ref: h,
width: p
  } = function() {
let [e, t] = i.useState(0);
return {
  ref: (0, l.y)(e => {
    let n = null == e ? void 0 : e.getBoundingClientRect();
    null != n && t(n.width);
  }),
  width: e
};
  }(), {
lastVisibleIndex: m,
onItemLayout: I,
overflowItemsRef: T
  } = d({
items: n,
itemGapPx: o,
maxLines: f,
containerWidth: p
  }), g = i.useMemo(() => n.slice(0, m + 1), [
n,
m
  ]), S = i.useMemo(() => n.slice(m + 1), [
n,
m
  ]);
  return (0, r.jsxs)('div', {
className: s()(t, c.items),
ref: h,
children: [
  (0, r.jsxs)('div', {
    'aria-hidden': !0,
    className: c.measurements,
    children: [
      (0, r.jsx)('div', {
        className: c.itemMeasurements,
        children: n.map((e, t) => (0, r.jsx)(E, {
          index: t,
          onItemLayout: I,
          children: a(e)
        }, e))
      }),
      (0, r.jsx)('div', {
        className: c.overflowMeasurement,
        ref: T,
        children: a(u.Z.Messages.CLAN_DISCOVERY_TRAIT_OVERFLOW.format({
          count: Number('1'.concat(n.length))
        }))
      })
    ]
  }),
  g.map(a),
  S.length > 0 && (0, r.jsx)(_, {
    items: S,
    renderItem: a
  })
]
  });
};