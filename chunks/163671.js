"use strict";
n.d(t, {
  Z: function() {
    return o
  }
});
var s = n(735250);
n(470079);
var r = n(120356),
  i = n.n(r),
  a = n(819570),
  l = n(136324);

function o(e) {
  let {
    children: t,
    className: n,
    ...r
  } = e, o = t();
  return (0, s.jsx)(a.ZP, {
    ...r,
    className: i()(n, l.container),
    contentClassName: l.content,
    children: o.map((e, t) => (0, s.jsx)("div", {
      className: l.column,
      style: {
        flexBasis: "".concat(100 / o.length, "%")
      },
      children: e
    }, t))
  })
}