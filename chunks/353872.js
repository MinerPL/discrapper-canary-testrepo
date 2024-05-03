"use strict";
s.r(t);
var a = s("735250");
s("470079");
var l = s("481060"),
  n = s("285952"),
  i = s("797078");
t.default = e => {
  let {
    title: t,
    subtitle: s,
    icon: r
  } = e;
  return (0, a.jsxs)(n.default, {
    className: i.wrapper,
    align: n.default.Align.BASELINE,
    children: [null != r && (0, a.jsx)(r, {
      width: 16,
      height: 16,
      className: i.icon
    }), (0, a.jsx)(l.Text, {
      variant: "text-md/normal",
      className: i.title,
      children: t
    }), null != s && "" !== s ? (0, a.jsx)(l.Text, {
      variant: "text-xs/semibold",
      className: i.subtitle,
      children: s
    }) : null]
  })
}