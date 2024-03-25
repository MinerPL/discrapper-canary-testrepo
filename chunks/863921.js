"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var i = n("37983");
n("884691");
var r = n("414456"),
  l = n.n(r),
  s = n("931138"),
  u = n("206453"),
  o = n("49111"),
  a = n("666703");
let d = {
    [o.BoostedGuildTiers.NONE]: a.iconBackgroundTierNone,
    [o.BoostedGuildTiers.TIER_1]: a.iconBackgroundTierOne,
    [o.BoostedGuildTiers.TIER_2]: a.iconBackgroundTierTwo,
    [o.BoostedGuildTiers.TIER_3]: a.iconBackgroundTierThree
  },
  c = {
    [o.BoostedGuildTiers.NONE]: a.iconTierNone,
    [o.BoostedGuildTiers.TIER_1]: a.iconTierOne,
    [o.BoostedGuildTiers.TIER_2]: a.iconTierTwo,
    [o.BoostedGuildTiers.TIER_3]: a.iconTierThree
  };

function f(e) {
  let {
    premiumTier: t,
    iconBackgroundClassName: n,
    iconClassName: r,
    size: o
  } = e;
  return (0, i.jsx)(s.default, {
    className: l(n, d[t]),
    size: o,
    children: (0, i.jsx)(u.default, {
      tier: t,
      className: l(r, a.boostedGuildIconGem, c[t])
    })
  })
}