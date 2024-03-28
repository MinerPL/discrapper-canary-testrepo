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
  i = n("119828"),
  r = n("113340");

function o(e) {
  let {
    total: t,
    users: n,
    videoLimit: a
  } = e;
  return (0, l.jsxs)("div", {
    className: r.wrapper,
    children: [(0, l.jsxs)("span", {
      className: s()(r.users, {
        [r.video]: a,
        [r.extraLong]: n >= 100
      }),
      children: [a ? (0, l.jsx)(i.default, {
        className: r.videoIcon
      }) : null, n.toString().padStart(2, "0")]
    }), (0, l.jsx)("span", {
      className: s()(r.total, {
        [r.extraLong]: t >= 100
      }),
      children: t.toString().padStart(2, "0")
    })]
  })
}