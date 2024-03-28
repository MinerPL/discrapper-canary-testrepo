"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var i = n("735250");
n("470079");
var a = n("547881"),
  l = n("382790"),
  s = n("430036"),
  o = n("149352");

function r(e) {
  let {
    dragStart: t,
    dragging: n,
    pinned: r,
    locked: d
  } = e;
  return (0, i.jsxs)(a.default, {
    className: o.wrapper,
    children: [(0, i.jsx)(l.default, {
      contained: !0,
      dragStart: t,
      locked: d
    }), (0, i.jsx)(s.default, {
      dragStart: t,
      locked: d,
      pinned: r,
      dragging: n,
      contained: !0
    })]
  })
}