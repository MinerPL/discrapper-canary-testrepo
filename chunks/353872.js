"use strict";
n.r(e);
var i = n("735250");
n("470079");
var l = n("481060"),
  o = n("285952"),
  u = n("36884");
e.default = t => {
  let {
    title: e,
    subtitle: n,
    icon: s
  } = t;
  return (0, i.jsxs)(o.default, {
    className: u.wrapper,
    align: o.default.Align.BASELINE,
    children: [null != s && (0, i.jsx)(s, {
      width: 16,
      height: 16,
      className: u.icon
    }), (0, i.jsx)(l.Text, {
      variant: "text-md/normal",
      className: u.title,
      children: e
    }), null != n && "" !== n ? (0, i.jsx)(l.Text, {
      variant: "text-xs/semibold",
      className: u.subtitle,
      children: n
    }) : null]
  })
}