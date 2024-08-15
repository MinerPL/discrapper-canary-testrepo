n.d(t, {
  Z: function() {
return I;
  }
}), n(47120);
var i = n(735250),
  a = n(470079),
  s = n(143927),
  r = n(481060),
  l = n(706454),
  o = n(540742),
  c = n(89182),
  d = n(907336),
  u = n(740474),
  _ = n(393596),
  E = n(689938),
  h = n(548998);

function m(e) {
  let {
count: t,
categoryId: n
  } = e, a = t.toLocaleString(l.default.locale), s = (0, d.E)({
categoryId: n
  });
  return (0, i.jsxs)('div', {
className: h.label,
children: [
  (0, i.jsx)(r.Text, {
    variant: 'text-sm/medium',
    color: 'header-primary',
    children: s
  }),
  (0, i.jsx)(r.Text, {
    variant: 'text-sm/normal',
    color: 'text-muted',
    children: a
  })
]
  });
}

function I(e) {
  let {
loadId: t
  } = e, n = (0, o.B)(e => {
let {
  searchCategoryId: t
} = e;
return t;
  }, s.Z), l = (0, u.q)(), I = (0, d.E)({
categoryId: n
  }), g = a.useCallback(e => {
(0, _.I)({
  loadId: t,
  categoryId: Number(e)
});
  }, [t]), p = a.useMemo(() => null == l ? [] : l.map(e => {
let [t, n] = e;
return {
  id: ''.concat(t),
  label: (0, i.jsx)(m, {
    categoryId: t,
    count: n
  })
};
  }), [l]);
  return null == l ? null : (0, i.jsxs)('div', {
className: h.container,
children: [
  (0, i.jsx)(r.Text, {
    variant: 'text-sm/medium',
    color: 'text-secondary',
    children: E.Z.Messages.GLOBAL_DISCOVERY_SHOW
  }),
  (0, i.jsx)(c.Z, {
    className: h.filter,
    items: p,
    title: I,
    onSelect: g,
    selected: ''.concat(n),
    'aria-label': E.Z.Messages.GLOBAL_DISCOVERY_SERVERS_LANGUAGE_FILTER
  })
]
  });
}