"use strict";
i.r(t), i.d(t, {
  default: function() {
    return f
  }
});
var s = i("37983");
i("884691");
var n = i("414456"),
  l = i.n(n),
  r = i("931138"),
  o = i("206453"),
  a = i("49111"),
  u = i("666703");
let c = {
    [a.BoostedGuildTiers.NONE]: u.iconBackgroundTierNone,
    [a.BoostedGuildTiers.TIER_1]: u.iconBackgroundTierOne,
    [a.BoostedGuildTiers.TIER_2]: u.iconBackgroundTierTwo,
    [a.BoostedGuildTiers.TIER_3]: u.iconBackgroundTierThree
  },
  d = {
    [a.BoostedGuildTiers.NONE]: u.iconTierNone,
    [a.BoostedGuildTiers.TIER_1]: u.iconTierOne,
    [a.BoostedGuildTiers.TIER_2]: u.iconTierTwo,
    [a.BoostedGuildTiers.TIER_3]: u.iconTierThree
  };

function f(e) {
  let {
    premiumTier: t,
    iconBackgroundClassName: i,
    iconClassName: n,
    size: a
  } = e;
  return (0, s.jsx)(r.default, {
    className: l(i, c[t]),
    size: a,
    children: (0, s.jsx)(o.default, {
      tier: t,
      className: l(n, u.boostedGuildIconGem, d[t])
    })
  })
}