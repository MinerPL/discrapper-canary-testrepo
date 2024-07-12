var r = n(735250),
  i = n(470079),
  a = n(120356),
  o = n.n(a),
  s = n(481060),
  l = n(503594);
let u = i.memo(function(e) {
  let {
children: t,
className: n,
icon: i,
isCollapsed: a,
onClick: u,
'aria-label': c
  } = e;
  return (0, r.jsx)('div', {
className: o()(l.wrapper, n),
children: (0, r.jsxs)(s.Clickable, {
  onClick: u,
  onKeyDown: e => e.stopPropagation(),
  className: o()(l.header, {
    [l.interactive]: null != a
  }),
  'aria-expanded': null != a ? !a : void 0,
  'aria-label': c,
  children: [
    null != i && (0, r.jsx)('div', {
      'aria-hidden': !0,
      className: l.headerIcon,
      children: i
    }),
    (0, r.jsx)('span', {
      className: l.headerLabel,
      children: t
    }),
    null != a ? (0, r.jsx)(s.ChevronSmallDownIcon, {
      size: 'custom',
      color: 'currentColor',
      className: o()(l.headerCollapseIcon, {
        [l.headerCollapseIconCollapsed]: a
      }),
      height: 16,
      width: 16
    }) : null
  ]
})
  });
});
t.Z = u;