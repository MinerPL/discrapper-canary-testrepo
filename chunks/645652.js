"use strict";
n.d(t, {
  Z: function() {
    return l
  }
});
var i = n(735250);
n(470079);
var r = n(120356),
  s = n.n(r),
  o = n(819758),
  a = n(108671);

function l(e) {
  let {
    className: t,
    children: n,
    forceUseColor: r = !1,
    hideStars: l
  } = e;
  return (0, i.jsxs)("span", {
    className: s()(a.container, t, {
      [a.containerColored]: r
    }),
    children: [n, l ? null : (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(o.Z, {
        foreground: a.sparkleStarTopRight
      }), (0, i.jsx)(o.Z, {
        foreground: a.sparkleStarRight
      }), (0, i.jsx)(o.Z, {
        foreground: a.sparkleStarBottomLeft
      })]
    })]
  })
}