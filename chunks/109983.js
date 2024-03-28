"use strict";
s.r(t), s.d(t, {
  default: function() {
    return d
  }
});
var a = s("735250");
s("470079");
var l = s("481060"),
  i = s("150020"),
  n = s("216019");

function d(e) {
  let {
    icon: t,
    message: s,
    onClick: d,
    autoFocus: r
  } = e;
  return (0, a.jsxs)("button", {
    className: i.container,
    onClick: d,
    autoFocus: r,
    children: [(0, a.jsx)("img", {
      className: i.icon,
      alt: "",
      src: t
    }), (0, a.jsx)(l.Text, {
      className: i.text,
      variant: "text-md/bold",
      children: s
    }), (0, a.jsx)("img", {
      className: i.arrow,
      alt: "",
      src: n
    })]
  })
}