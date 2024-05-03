"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var r = n("735250");
n("470079");
var i = n("120356"),
  l = n.n(i),
  s = n("797717"),
  o = n("471885"),
  u = n("981631"),
  a = n("453865");
let c = {
    [u.BoostedGuildTiers.NONE]: a.iconBackgroundTierNone,
    [u.BoostedGuildTiers.TIER_1]: a.iconBackgroundTierOne,
    [u.BoostedGuildTiers.TIER_2]: a.iconBackgroundTierTwo,
    [u.BoostedGuildTiers.TIER_3]: a.iconBackgroundTierThree
  },
  d = {
    [u.BoostedGuildTiers.NONE]: a.iconTierNone,
    [u.BoostedGuildTiers.TIER_1]: a.iconTierOne,
    [u.BoostedGuildTiers.TIER_2]: a.iconTierTwo,
    [u.BoostedGuildTiers.TIER_3]: a.iconTierThree
  };

function f(e) {
  let {
    premiumTier: t,
    iconBackgroundClassName: n,
    iconClassName: i,
    size: u
  } = e;
  return (0, r.jsx)(s.default, {
    className: l()(n, c[t]),
    size: u,
    children: (0, r.jsx)(o.default, {
      tier: t,
      className: l()(i, a.boostedGuildIconGem, d[t])
    })
  })
}