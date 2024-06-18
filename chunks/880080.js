"use strict";
n.d(t, {
  Z: function() {
    return _
  }
});
var i = n(735250);
n(470079);
var r = n(120356),
  s = n.n(r),
  o = n(920906),
  a = n(771941);
let l = Object.freeze({
    tension: 400,
    friction: 30
  }),
  u = Object.freeze({
    opacity: 0,
    height: 8,
    x: -4
  });

function _(e) {
  let {
    selected: t = !1,
    hovered: n = !1,
    unread: r = !1,
    disabled: _ = !1,
    className: d
  } = e;
  t = !_ && t, n = !_ && n, r = !_ && r;
  let c = {
      opacity: 1,
      height: t ? 40 : n ? 20 : 8,
      x: 0
    },
    E = (0, o.useTransition)(t || n || r, {
      config: l,
      keys: e => e ? "pill" : "empty",
      immediate: !n && !document.hasFocus(),
      initial: t || n || r ? c : null,
      from: u,
      leave: u,
      enter: c,
      update: c
    });
  return (0, i.jsx)("div", {
    className: s()(d, a.wrapper),
    "aria-hidden": !0,
    children: E((e, t) => t && (0, i.jsx)(o.animated.span, {
      className: a.item,
      style: e
    }))
  })
}