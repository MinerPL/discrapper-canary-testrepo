"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
});
var i = n("735250");
n("470079");
var r = n("120356"),
  a = n.n(r),
  s = n("228168"),
  o = n("674484");

function l(e) {
  let {
    profileType: t,
    children: n
  } = e;
  return (0, i.jsx)("div", {
    className: a()(o.wrapper, {
      [o.biteSize]: t === s.UserProfileTypes.BITE_SIZE,
      [o.fullSize]: t === s.UserProfileTypes.FULL_SIZE
    }),
    children: n
  })
}