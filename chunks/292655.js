"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
}), n("222007");
var s = n("37983"),
  a = n("884691"),
  l = n("414456"),
  i = n.n(l),
  r = n("77078"),
  o = n("82636"),
  u = n("782340"),
  d = n("497855");

function c(e) {
  let {
    tabIndex: t,
    className: n,
    onClick: l,
    "aria-expanded": c,
    "aria-controls": f,
    focusProps: h
  } = e, [C, p] = a.useState(!1);

  function m() {
    p(!0)
  }

  function E() {
    p(!1)
  }
  return (0, s.jsx)(r.Button, {
    look: r.Button.Looks.BLANK,
    size: r.Button.Sizes.NONE,
    tabIndex: t,
    className: i(d.activityButton, n),
    onClick: l,
    onMouseEnter: m,
    onMouseOver: m,
    onMouseLeave: E,
    onFocus: m,
    onBlur: E,
    "aria-label": u.default.Messages.SELECT_ACTIVITY,
    "aria-expanded": c,
    "aria-controls": f,
    focusProps: h,
    children: (0, s.jsx)(o.default, {
      className: i(d.rocket, C ? d.rocketHovered : d.rocketUnhovered)
    })
  })
}