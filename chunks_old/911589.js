"use strict";
n.r(t), n.d(t, {
  ContentImage: function() {
    return o
  }
});
var a = n("37983");
n("884691");
var l = n("414456"),
  s = n.n(l),
  i = n("841098"),
  r = n("547620"),
  u = n("913873");

function o(e) {
  let {
    src: t,
    size: n,
    className: l,
    alt: o = "icon"
  } = e, d = (0, i.default)();
  return null == t ? (0, a.jsx)(r.default, {
    width: n,
    height: n,
    color: "dark" === d ? "white" : "black",
    className: s(u.contentImage, l)
  }) : (0, a.jsx)("img", {
    style: {
      width: "".concat(n, "px"),
      height: "".concat(n, "px")
    },
    className: s(u.contentImage, l),
    src: t,
    alt: o
  })
}