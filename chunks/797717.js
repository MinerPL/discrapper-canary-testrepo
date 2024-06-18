"use strict";
n.d(t, {
  Z: function() {
    return _
  }
});
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(481060),
  l = n(189798),
  u = n(237987);

function _(e) {
  let {
    children: t,
    size: n = 16,
    className: s,
    flowerStarClassName: _,
    ...d
  } = e, c = r.Children.only(t), E = (0, a.useRedesignIconContext)().enabled;
  return (0, i.jsxs)("div", {
    className: o()(u.flowerStarContainer, s),
    style: {
      width: n,
      height: n
    },
    children: [(0, i.jsx)(l.Z, {
      ...d,
      className: o()(_, u.flowerStar)
    }), (0, i.jsx)("div", {
      className: o()(u.childContainer, {
        [u.redesignIconChildContainer]: E
      }),
      children: c
    })]
  })
}