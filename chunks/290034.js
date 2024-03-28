"use strict";
i.r(t), i.d(t, {
  default: function() {
    return f
  }
});
var l = i("735250");
i("470079");
var a = i("803997"),
  s = i.n(a),
  n = i("797717"),
  o = i("471885"),
  r = i("981631"),
  u = i("53509");
let d = {
    [r.BoostedGuildTiers.NONE]: u.iconBackgroundTierNone,
    [r.BoostedGuildTiers.TIER_1]: u.iconBackgroundTierOne,
    [r.BoostedGuildTiers.TIER_2]: u.iconBackgroundTierTwo,
    [r.BoostedGuildTiers.TIER_3]: u.iconBackgroundTierThree
  },
  c = {
    [r.BoostedGuildTiers.NONE]: u.iconTierNone,
    [r.BoostedGuildTiers.TIER_1]: u.iconTierOne,
    [r.BoostedGuildTiers.TIER_2]: u.iconTierTwo,
    [r.BoostedGuildTiers.TIER_3]: u.iconTierThree
  };

function f(e) {
  let {
    premiumTier: t,
    iconBackgroundClassName: i,
    iconClassName: a,
    size: r
  } = e;
  return (0, l.jsx)(n.default, {
    className: s()(i, d[t]),
    size: r,
    children: (0, l.jsx)(o.default, {
      tier: t,
      className: s()(a, u.boostedGuildIconGem, c[t])
    })
  })
}