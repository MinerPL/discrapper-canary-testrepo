"use strict";
n.d(t, {
  Z: function() {
    return r
  }
});
var i = n(735250);
n(470079);
var s = n(547881),
  l = n(382790),
  a = n(430036),
  o = n(773839);

function r(e) {
  let {
    dragStart: t,
    dragging: n,
    pinned: r,
    locked: d
  } = e;
  return (0, i.jsxs)(s.ZP, {
    className: o.wrapper,
    children: [(0, i.jsx)(l.Z, {
      contained: !0,
      dragStart: t,
      locked: d
    }), (0, i.jsx)(a.Z, {
      dragStart: t,
      locked: d,
      pinned: r,
      dragging: n,
      contained: !0
    })]
  })
}