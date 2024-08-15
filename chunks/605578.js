n.d(t, {
  k: function() {
return o;
  }
});
var r = n(735250),
  i = n(470079),
  a = n(1561),
  s = n(251475);

function o(e) {
  let {
tag: t = 'div',
children: n,
className: o,
focusProps: l,
onClick: u,
onDoubleClick: c,
onContextMenu: d,
onKeyDown: _,
onFocus: E,
onBlur: f,
onMouseOver: h,
onMouseDown: p,
onMouseLeave: m,
buttonProps: I,
'aria-label': T
  } = e, g = i.useRef(null);
  return (0, r.jsxs)(t, {
ref: g,
className: o,
onClick: u,
onMouseOver: h,
onMouseLeave: m,
onDoubleClick: c,
onContextMenu: d,
children: [
  (0, r.jsx)(a.P, {
    ...I,
    focusProps: {
      ringTarget: g,
      ...l
    },
    className: s.focusTarget,
    'aria-label': T,
    onClick: e => {
      e.stopPropagation(), null == u || u(e);
    },
    onKeyDown: _,
    onFocus: E,
    onBlur: f,
    onMouseDown: p
  }),
  n
]
  });
}