"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var i = n("37983");
n("884691");
var s = n("414456"),
  l = n.n(s),
  a = n("77078"),
  u = n("451914"),
  r = n("548122");
let d = Object.freeze({
    SIZE_10: r.size10,
    SIZE_12: r.size12,
    SIZE_14: r.size14,
    SIZE_16: r.size16,
    SIZE_20: r.size20,
    SIZE_24: r.size24,
    SIZE_32: r.size32
  }),
  o = e => {
    let {
      id: t,
      muted: n = !1,
      className: s = u.wrapper,
      size: r = d.SIZE_14,
      selectable: o = !1,
      children: c,
      color: h,
      onClick: E,
      onContextMenu: f,
      style: I,
      title: _,
      uppercase: m
    } = e;
    return (0, i.jsx)(a.H, {
      role: null != E ? "button" : void 0,
      onClick: E,
      onContextMenu: f,
      id: t,
      className: l(s, {
        [u.base]: !0,
        [r]: !0,
        [u.selectable]: o,
        [u.muted]: n,
        [u.uppercase]: m
      }),
      title: _,
      style: null != h ? {
        ...I,
        color: h
      } : I,
      children: c
    })
  };
o.Sizes = d;
var c = o