"use strict";
n.r(t), n.d(t, {
  FeatureBorderTypes: function() {
    return a
  },
  default: function() {
    return c
  }
});
var r, a, i = n("37983"),
  l = n("884691"),
  o = n("414456"),
  s = n.n(o),
  u = n("834832");
(r = a || (a = {})).PREMIUM = "premium", r.LIMITED = "limited";
let d = {
  premium: {
    border: u.premiumFeatureBorder,
    background: u.premiumBackground
  },
  limited: {
    border: u.limitedFeatureBorder,
    background: u.limitedBackground
  }
};
var c = l.forwardRef(function(e, t) {
  let {
    children: n,
    type: r = "premium",
    isShown: a,
    hasBackground: l = !1,
    className: o,
    backgroundClassName: c
  } = e;
  if (!a) return (0, i.jsx)(i.Fragment, {
    children: n
  });
  let {
    border: f,
    background: v
  } = d[r];
  return (0, i.jsx)("div", {
    ref: t,
    className: s(f, o),
    children: (0, i.jsx)("div", {
      className: s(l ? v : u.background, c),
      children: n
    })
  })
})