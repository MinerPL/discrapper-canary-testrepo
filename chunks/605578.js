"use strict";
n.d(t, {
  k: function() {
    return a
  }
});
var i = n(735250),
  r = n(470079),
  s = n(1561),
  o = n(939022);

function a(e) {
  let {
    tag: t = "div",
    children: n,
    className: a,
    focusProps: l,
    onClick: u,
    onDoubleClick: _,
    onContextMenu: d,
    onKeyDown: c,
    onFocus: E,
    onBlur: I,
    onMouseOver: T,
    onMouseDown: h,
    onMouseLeave: S,
    buttonProps: f,
    "aria-label": N
  } = e, A = r.useRef(null);
  return (0, i.jsxs)(t, {
    ref: A,
    className: a,
    onClick: u,
    onMouseOver: T,
    onMouseLeave: S,
    onDoubleClick: _,
    onContextMenu: d,
    children: [(0, i.jsx)(s.P, {
      ...f,
      focusProps: {
        ringTarget: A,
        ...l
      },
      className: o.focusTarget,
      "aria-label": N,
      onClick: e => {
        e.stopPropagation(), null == u || u(e)
      },
      onKeyDown: c,
      onFocus: E,
      onBlur: I,
      onMouseDown: h
    }), n]
  })
}