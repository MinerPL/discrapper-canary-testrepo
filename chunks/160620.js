"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("120356"),
  i = n.n(s),
  r = n("481060"),
  o = n("944581"),
  u = n("689938"),
  d = n("809243");

function c(e) {
  let {
    tabIndex: t,
    className: n,
    onClick: s,
    "aria-expanded": c,
    "aria-controls": f,
    focusProps: h
  } = e, [m, p] = l.useState(!1);

  function E() {
    p(!0)
  }

  function C() {
    p(!1)
  }
  return (0, a.jsx)(r.Button, {
    look: r.Button.Looks.BLANK,
    size: r.Button.Sizes.NONE,
    tabIndex: t,
    className: i()(d.activityButton, n),
    onClick: s,
    onMouseEnter: E,
    onMouseOver: E,
    onMouseLeave: C,
    onFocus: E,
    onBlur: C,
    "aria-label": u.default.Messages.SELECT_ACTIVITY,
    "aria-expanded": c,
    "aria-controls": f,
    focusProps: h,
    children: (0, a.jsx)(o.default, {
      className: i()(d.rocket, m ? d.rocketHovered : d.rocketUnhovered)
    })
  })
}