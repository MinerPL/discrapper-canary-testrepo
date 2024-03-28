"use strict";
a.r(t), a.d(t, {
  default: function() {
    return o
  }
});
var l = a("735250");
a("470079");
var s = a("481060"),
  n = a("259580"),
  i = a("163590");

function o(e) {
  let {
    url: t,
    text: a,
    onClick: o
  } = e;
  return (0, l.jsx)(s.Anchor, {
    href: t,
    onClick: o,
    className: i.externalLinkWrapper,
    children: (0, l.jsxs)(s.Clickable, {
      className: i.childButton,
      children: [(0, l.jsx)(s.Text, {
        className: i.childText,
        variant: "text-md/semibold",
        children: a
      }), (0, l.jsx)(n.default, {
        className: i.childIcon,
        direction: n.default.Directions.RIGHT
      })]
    })
  })
}