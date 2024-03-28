"use strict";
e.r(i);
var s = e("735250");
e("470079");
var a = e("481060"),
  n = e("285952"),
  l = e("53848");
i.default = t => {
  let {
    title: i,
    subtitle: e,
    icon: o
  } = t;
  return (0, s.jsxs)(n.default, {
    className: l.wrapper,
    align: n.default.Align.BASELINE,
    children: [null != o && (0, s.jsx)(o, {
      width: 16,
      height: 16,
      className: l.icon
    }), (0, s.jsx)(a.Text, {
      variant: "text-md/normal",
      className: l.title,
      children: i
    }), null != e && "" !== e ? (0, s.jsx)(a.Text, {
      variant: "text-xs/semibold",
      className: l.subtitle,
      children: e
    }) : null]
  })
}