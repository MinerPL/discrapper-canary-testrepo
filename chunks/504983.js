"use strict";
n.r(t), n.d(t, {
  FeatureBorderTypes: function() {
    return l
  }
});
var r, l, a = n("735250"),
  i = n("470079"),
  o = n("120356"),
  u = n.n(o),
  s = n("26591");
(r = l || (l = {})).PREMIUM = "premium", r.LIMITED = "limited";
let d = {
  premium: {
    border: s.premiumFeatureBorder,
    background: s.premiumBackground
  },
  limited: {
    border: s.limitedFeatureBorder,
    background: s.limitedBackground
  }
};
t.default = i.forwardRef(function(e, t) {
  let {
    children: n,
    type: r = "premium",
    isShown: l,
    hasBackground: i = !1,
    className: o,
    backgroundClassName: c
  } = e;
  if (!l) return (0, a.jsx)(a.Fragment, {
    children: n
  });
  let {
    border: f,
    background: m
  } = d[r];
  return (0, a.jsx)("div", {
    ref: t,
    className: u()(f, o),
    children: (0, a.jsx)("div", {
      className: u()(i ? m : s.background, c),
      children: n
    })
  })
})