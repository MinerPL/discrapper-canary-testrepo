"use strict";
s.r(t), s.d(t, {
  default: function() {
    return i
  }
});
var a = s("735250");
s("470079");
var l = s("481060"),
  n = s("893079");

function i(e) {
  let {
    title: t,
    settings: s
  } = e;
  return (0, a.jsxs)("div", {
    children: [(0, a.jsx)(l.Heading, {
      variant: "heading-lg/semibold",
      color: "header-primary",
      className: n.header,
      children: t
    }), s.map(e => e.renderComponent())]
  })
}