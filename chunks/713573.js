"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var i = n("37983");
n("884691");
var s = n("414456"),
  a = n.n(s),
  l = n("77078"),
  u = n("451914"),
  o = n("548122");
let d = Object.freeze({
    SIZE_10: o.size10,
    SIZE_12: o.size12,
    SIZE_14: o.size14,
    SIZE_16: o.size16,
    SIZE_20: o.size20,
    SIZE_24: o.size24,
    SIZE_32: o.size32
  }),
  r = e => {
    let {
      id: t,
      muted: n = !1,
      className: s = u.wrapper,
      size: o = d.SIZE_14,
      selectable: r = !1,
      children: c,
      color: f,
      onClick: E,
      onContextMenu: S,
      style: _,
      title: g,
      uppercase: M
    } = e;
    return (0, i.jsx)(l.H, {
      role: null != E ? "button" : void 0,
      onClick: E,
      onContextMenu: S,
      id: t,
      className: a(s, {
        [u.base]: !0,
        [o]: !0,
        [u.selectable]: r,
        [u.muted]: n,
        [u.uppercase]: M
      }),
      title: g,
      style: null != f ? {
        ..._,
        color: f
      } : _,
      children: c
    })
  };
r.Sizes = d;
var c = r