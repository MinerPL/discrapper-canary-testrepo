n.d(t, {
  Z: function() {
return d;
  }
}), n(47120);
var s = n(735250),
  a = n(470079),
  i = n(120356),
  r = n.n(i),
  l = n(481060),
  o = n(717251),
  c = n(4783);

function d(e) {
  let {
action: t,
children: n,
className: i,
onExpandChange: d,
loading: u,
..._
  } = e, [I, E] = a.useState(!1), T = e => {
E(e), null == d || d(e);
  };
  return (0, s.jsx)(l.Collapsible, {
className: r()(c.groupContainer, i),
isExpanded: I,
collapsibleContent: (0, s.jsxs)('div', {
  className: c.groupCollapsedContainer,
  children: [
    I && (0, s.jsx)('div', {
      className: c.pointer
    }),
    n
  ]
}),
children: e => {
  let {
    onClick: n
  } = e;
  return (0, s.jsx)(o.Z, {
    ..._,
    className: c.groupHeaderRow,
    action: u ? (0, s.jsx)(l.Spinner, {
      type: l.Spinner.Type.PULSING_ELLIPSIS
    }) : t,
    onClick: e => {
      T(!I), n(e);
    }
  });
}
  });
}