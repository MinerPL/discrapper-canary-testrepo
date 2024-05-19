"use strict";
n.r(t), n.d(t, {
  CircleIconButtonColors: function() {
    return u
  },
  CircleIconButtonSizes: function() {
    return a
  },
  default: function() {
    return c
  }
});
var r = n("735250");
n("470079");
var i = n("120356"),
  l = n.n(i),
  s = n("481060"),
  o = n("675109");
let u = {
    TERTIARY: o.tertiary,
    SECONDARY: o.secondary,
    PRIMARY: o.primary
  },
  a = {
    SIZE_24: o.size24,
    SIZE_32: o.size32,
    SIZE_36: o.size36
  };

function c(e) {
  let {
    className: t,
    tooltip: n,
    color: i,
    size: u = a.SIZE_32,
    icon: c,
    onClick: d,
    disabled: f,
    focusProps: S
  } = e;
  return (0, r.jsx)(s.Tooltip, {
    text: n,
    shouldShow: !f,
    children: e => {
      let {
        onClick: a,
        ...p
      } = e;
      return (0, r.jsx)(s.Clickable, {
        ...p,
        "aria-label": n,
        "aria-disabled": f,
        className: l()(t, o.button, i, u, {
          [o.disabled]: f
        }),
        onClick: e => {
          null == a || a(), d(e)
        },
        focusProps: S,
        children: c
      })
    }
  })
}