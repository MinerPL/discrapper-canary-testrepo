"use strict";
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(38068),
  l = n(689938),
  u = n(975681);
t.Z = r.forwardRef(function(e, t) {
  let {
    className: n,
    contentClassName: r,
    isUnread: s,
    children: _,
    id: d,
    role: c,
    "aria-label": E
  } = e;
  return (0, i.jsxs)("div", {
    className: o()(n, {
      [u.divider]: !0,
      [u.isUnread]: s,
      [u.hasContent]: null != _
    }),
    ref: t,
    id: d,
    role: c,
    "aria-label": E,
    children: [null != _ ? (0, i.jsx)("span", {
      className: o()(u.content, r),
      children: _
    }) : null, s ? (0, i.jsxs)("span", {
      className: u.unreadPill,
      children: [(0, i.jsx)(a.Z, {
        foreground: u.unreadPillCapStroke,
        className: u.unreadPillCap
      }), l.Z.Messages.NEW]
    }) : null]
  })
})