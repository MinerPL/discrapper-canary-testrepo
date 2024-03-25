"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var a = n("37983");
n("884691");
var s = n("414456"),
  l = n.n(s),
  i = n("77078"),
  r = n("177452");

function o(e) {
  let {
    padded: t = !0,
    inset: n = !1,
    active: s = !1,
    className: o,
    children: u,
    onClick: d,
    ...c
  } = e;
  return null != d ? (0, a.jsx)(i.Clickable, {
    onClick: d,
    tabIndex: null != d ? 0 : -1,
    className: l(o, {
      [r.outer]: !n,
      [r.inset]: n,
      [r.padded]: t,
      [r.active]: s,
      [r.interactive]: null != d
    }),
    ...c,
    children: u
  }) : (0, a.jsx)("div", {
    className: l(o, {
      [r.outer]: !n,
      [r.inset]: n,
      [r.padded]: t,
      [r.active]: s
    }),
    ...c,
    children: u
  })
}