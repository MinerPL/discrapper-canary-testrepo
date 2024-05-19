"use strict";
n.r(t), n.d(t, {
  ContentImage: function() {
    return u
  }
});
var a = n("735250");
n("470079");
var l = n("120356"),
  s = n.n(l),
  i = n("410030"),
  r = n("438071"),
  o = n("988358");

function u(e) {
  let {
    src: t,
    size: n,
    className: l,
    alt: u = "icon"
  } = e, d = (0, i.default)();
  return null == t ? (0, a.jsx)(r.default, {
    width: n,
    height: n,
    color: "dark" === d ? "white" : "black",
    className: s()(o.contentImage, l)
  }) : (0, a.jsx)("img", {
    style: {
      maxWidth: "".concat(n, "px"),
      height: "".concat(n, "px")
    },
    className: s()(o.contentImage, l),
    src: t,
    alt: u
  })
}