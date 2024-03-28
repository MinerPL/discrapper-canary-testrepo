"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var s = n("735250");
n("470079");
var a = n("481060"),
  l = n("499033"),
  i = n("689938"),
  r = n("416173");

function o(e) {
  let {
    Icon: t,
    header: n,
    tip: o,
    disableStars: u
  } = e;
  return (0, s.jsxs)("div", {
    className: r.container,
    children: [(0, s.jsxs)("div", {
      className: r.iconContainer,
      children: [(0, s.jsx)(t, {
        className: r.icon,
        width: 36,
        height: 36
      }), u ? null : (0, s.jsx)(l.default, {
        className: r.stars
      })]
    }), (0, s.jsx)(a.Heading, {
      className: r.header,
      variant: "heading-xl/semibold",
      children: n
    }), (0, s.jsxs)(a.Text, {
      color: "header-secondary",
      variant: "text-xs/normal",
      children: [u ? null : (0, s.jsxs)(a.Text, {
        tag: "span",
        className: r.protip,
        variant: "text-xs/bold",
        color: "text-positive",
        children: [i.default.Messages.FORM_LABEL_ROLES_PRO_TIP, ":", " "]
      }), o]
    })]
  })
}