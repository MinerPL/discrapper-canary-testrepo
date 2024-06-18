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
  o = n(228168),
  a = n(674484);

function l(e) {
  let {
    profileType: t,
    children: n
  } = e;
  return (0, i.jsx)("div", {
    className: s()(a.wrapper, {
      [a.biteSize]: t === o.y0.BITE_SIZE,
      [a.fullSize]: t === o.y0.FULL_SIZE,
      [a.panel]: t === o.y0.PANEL
    }),
    children: n
  })
}