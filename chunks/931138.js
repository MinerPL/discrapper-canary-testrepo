"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var i = n("37983"),
  a = n("884691"),
  l = n("414456"),
  s = n.n(l),
  r = n("77078"),
  o = n("760607"),
  u = n("684133");

function c(e) {
  let {
    children: t,
    size: n = 16,
    className: l,
    flowerStarClassName: c,
    ...d
  } = e, f = a.Children.only(t), E = (0, r.useRedesignIconContext)().enabled;
  return (0, i.jsxs)("div", {
    className: s(u.flowerStarContainer, l),
    style: {
      width: n,
      height: n
    },
    children: [(0, i.jsx)(o.default, {
      ...d,
      className: s(c, u.flowerStar)
    }), (0, i.jsx)("div", {
      className: s(u.childContainer, {
        [u.redesignIconChildContainer]: E
      }),
      children: f
    })]
  })
}