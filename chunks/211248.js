"use strict";
n.r(t), n.d(t, {
  CircleIconButtonColors: function() {
    return o
  },
  CircleIconButtonSizes: function() {
    return c
  },
  default: function() {
    return u
  }
});
var l = n("37983");
n("884691");
var r = n("414456"),
  a = n.n(r),
  i = n("77078"),
  s = n("762409");
let o = {
    TERTIARY: s.tertiary,
    SECONDARY: s.secondary,
    PRIMARY: s.primary
  },
  c = {
    SIZE_24: s.size24,
    SIZE_32: s.size32,
    SIZE_36: s.size36
  };

function u(e) {
  let {
    className: t,
    tooltip: n,
    color: r,
    size: o = c.SIZE_32,
    icon: u,
    onClick: d,
    disabled: f,
    focusProps: m
  } = e;
  return (0, l.jsx)(i.Tooltip, {
    text: n,
    shouldShow: !f,
    children: e => {
      let {
        onClick: c,
        ...h
      } = e;
      return (0, l.jsx)(i.Clickable, {
        ...h,
        "aria-label": n,
        "aria-disabled": f,
        className: a(t, s.button, r, o, {
          [s.disabled]: f
        }),
        onClick: e => {
          null == c || c(), d(e)
        },
        focusProps: m,
        children: u
      })
    }
  })
}