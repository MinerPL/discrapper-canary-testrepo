"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var a = n("37983");
n("884691");
var s = n("414456"),
  l = n.n(s),
  i = n("846433"),
  r = e => {
    let {
      aspectRatio: t,
      style: n,
      className: s,
      children: r
    } = e;
    return (0, a.jsx)("div", {
      className: l(i.outer, s),
      style: {
        paddingTop: "".concat(1 / t * 100, "%"),
        ...n
      },
      children: (0, a.jsx)("div", {
        className: i.inner,
        children: r
      })
    })
  }