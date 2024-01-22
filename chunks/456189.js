"use strict";
n.r(t), n.d(t, {
  ClickableContainer: function() {
    return o
  }
});
var i = n("37983"),
  s = n("884691"),
  r = n("227645"),
  a = n("913906");

function o(e) {
  let {
    tag: t = "div",
    children: n,
    className: o,
    focusProps: l,
    onClick: u,
    onDoubleClick: d,
    onContextMenu: c,
    onKeyDown: f,
    onFocus: _,
    onBlur: h,
    onMouseOver: g,
    onMouseDown: m,
    onMouseLeave: E,
    buttonProps: p,
    "aria-label": v
  } = e, S = s.useRef(null);
  return (0, i.jsxs)(t, {
    ref: S,
    className: o,
    onClick: u,
    onMouseOver: g,
    onMouseLeave: E,
    onDoubleClick: d,
    onContextMenu: c,
    children: [(0, i.jsx)(r.Clickable, {
      ...p,
      focusProps: {
        ringTarget: S,
        ...l
      },
      className: a.focusTarget,
      "aria-label": v,
      onClick: e => {
        e.stopPropagation(), null == u || u(e)
      },
      onKeyDown: f,
      onFocus: _,
      onBlur: h,
      onMouseDown: m
    }), n]
  })
}