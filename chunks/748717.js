"use strict";
s.r(t), s.d(t, {
  default: function() {
    return u
  }
});
var a = s("735250");
s("470079");
var n = s("442837"),
  l = s("218390"),
  i = s("299657"),
  r = s("594174"),
  o = s("74538"),
  d = s("474936");

function u() {
  let e = (0, n.useStateFromStores)([r.default], () => r.default.getCurrentUser());
  return (0, o.isPremiumExactly)(e, d.PremiumTypes.TIER_2) ? (0, a.jsx)(l.default, {}) : (0, a.jsx)(i.default, {})
}