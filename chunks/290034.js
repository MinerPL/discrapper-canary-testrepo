n.d(i, {
  Z: function() {
return _;
  }
});
var o = n(735250);
n(470079);
var t = n(120356),
  r = n.n(t),
  a = n(297700),
  l = n(471885),
  s = n(981631),
  c = n(534457);
let d = {
[s.Eu4.NONE]: c.iconBackgroundTierNone,
[s.Eu4.TIER_1]: c.iconBackgroundTierOne,
[s.Eu4.TIER_2]: c.iconBackgroundTierTwo,
[s.Eu4.TIER_3]: c.iconBackgroundTierThree
  },
  u = {
[s.Eu4.NONE]: c.iconTierNone,
[s.Eu4.TIER_1]: c.iconTierOne,
[s.Eu4.TIER_2]: c.iconTierTwo,
[s.Eu4.TIER_3]: c.iconTierThree
  };

function _(e) {
  let {
premiumTier: i,
iconBackgroundClassName: n,
iconClassName: t,
size: s
  } = e;
  return (0, o.jsx)(a.Z, {
className: r()(n, d[i]),
size: s,
children: (0, o.jsx)(l.Z, {
  tier: i,
  className: r()(t, c.boostedGuildIconGem, u[i])
})
  });
}