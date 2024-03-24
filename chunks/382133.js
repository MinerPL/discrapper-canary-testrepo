"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var s = n("37983");
n("884691");
var i = n("421898"),
  l = n.n(i),
  r = n("15542"),
  a = n("502026"),
  o = n("134560");

function c(e) {
  let {
    onClick: t,
    title: n,
    body: i,
    icon: c,
    selected: d,
    disabled: u
  } = e;
  return (0, s.jsx)(r.FocusRing, {
    children: (0, s.jsxs)("button", {
      type: "button",
      onClick: () => {
        !u && t()
      },
      disabled: u,
      className: l(o.wrapper, {
        [o.selected]: d
      }),
      children: [(0, s.jsx)("div", {
        className: o.icon,
        children: c
      }), (0, s.jsxs)("div", {
        children: [(0, s.jsx)(a.Text, {
          variant: "text-sm/semibold",
          color: "none",
          children: n
        }), (0, s.jsx)(a.Text, {
          variant: "text-xs/normal",
          color: "none",
          children: i
        })]
      })]
    })
  })
}