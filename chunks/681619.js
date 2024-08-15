t.d(r, {
  Z: function() {
return d;
  }
});
var a = t(735250),
  n = t(470079),
  i = t(120356),
  o = t.n(i),
  l = t(481060),
  c = t(167533),
  s = t(535271);

function d(e) {
  let {
columns: r,
rowComponent: t,
headerClassName: i,
stickyHeader: d,
onClickRow: u,
selectedRowKey: h,
...m
  } = e, g = n.useMemo(() => r.map(e => ({
renderHeader: () => (0, a.jsx)(l.Text, {
  variant: 'text-sm/semibold',
  children: e.key
}),
...e
  })), [r]);
  return (0, a.jsx)(c.Z, {
...m,
columns: g,
rowComponent: null != t ? t : e => {
  let {
    item: r,
    children: t
  } = e, n = o()(s.tableRow, {
    [s.selectedTableRow]: r.key === h
  });
  return null != u ? (0, a.jsx)(l.Clickable, {
    className: n,
    onClick: () => u(r.key),
    children: t
  }) : (0, a.jsx)('div', {
    className: n,
    children: t
  });
},
headerClassName: o()(s.tableHeader, i),
stickyHeader: null == d || d
  });
}