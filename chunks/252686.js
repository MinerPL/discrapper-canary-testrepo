"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var l = n("735250");
n("470079");
var a = n("803997"),
  s = n.n(a),
  i = n("806519"),
  r = n("316843");

function o(e) {
  let {
    className: t
  } = e;
  return (0, l.jsx)(i.default, {
    mask: i.default.Masks.SQUIRCLE,
    className: s()(t, r.placeholderMask),
    width: 48,
    height: 48,
    style: {
      display: "block"
    },
    children: (0, l.jsx)("div", {
      className: r.dragInner
    })
  })
}