r.d(t, {
  Z: function() {
return d;
  }
});
var a = r(735250),
  n = r(470079),
  i = r(120356),
  o = r.n(i),
  l = r(481060),
  c = r(151011),
  s = r(979756);

function d(e) {
  let {
columns: t,
rowComponent: r,
headerClassName: i,
stickyHeader: d,
onClickRow: u,
selectedRowKey: h,
...m
  } = e, g = n.useMemo(() => t.map(e => ({
renderHeader: () => (0, a.jsx)(l.Text, {
  variant: 'text-sm/semibold',
  children: e.key
}),
...e
  })), [t]);
  return (0, a.jsx)(c.Z, {
...m,
columns: g,
rowComponent: null != r ? r : e => {
  let {
    item: t,
    children: r
  } = e, n = o()(s.tableRow, {
    [s.selectedTableRow]: t.key === h
  });
  return null != u ? (0, a.jsx)(l.Clickable, {
    className: n,
    onClick: () => u(t.key),
    children: r
  }) : (0, a.jsx)('div', {
    className: n,
    children: r
  });
},
headerClassName: o()(s.tableHeader, i),
stickyHeader: null == d || d
  });
}