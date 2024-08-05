n.d(t, {
  LA: function() {
return h;
  },
  MR: function() {
return _;
  },
  Wb: function() {
return f;
  },
  YE: function() {
return c;
  },
  _k: function() {
return u;
  },
  kG: function() {
return d;
  },
  u7: function() {
return E;
  }
}), n(580130);
var r = n(55563),
  i = n(513785),
  a = n(474936),
  s = n(735825),
  o = n(981631),
  l = n(689938);

function u(e) {
  return e.type === o.qc2.PURCHASE && e.skuId === a.Si.TIER_2 && e.applicationId === a.RQ && e.isValid(null, r.Z);
}

function c(e) {
  return e.type === o.qc2.PREMIUM_PURCHASE && s.uv.has(e.skuId) && e.applicationId === a.RQ && e.isValid(null, r.Z);
}

function d(e) {
  if (null != e)
return Array.from(e).find(e => u(e));
}

function _(e, t) {
  if (null != t)
return Array.from(t).find(t => t.type === o.qc2.PREMIUM_PURCHASE && e.includes(t.skuId) && t.applicationId === a.RQ && t.isValid(null, r.Z));
}

function E(e) {
  return null != e.redeemable_at && null != e.next_tenure_reward_id;
}

function f(e) {
  switch (e) {
case s.EB.PENDING:
  return l.Z.Messages.REWARD;
case s.EB.REDEEMABLE:
  return l.Z.Messages.REDEEM;
case s.EB.REDEEMED:
default:
  return null;
  }
}

function h() {
  var e;
  return null !== (e = i.Z.getTenureRewardStatusForRewardId(s.Ft.FREE_GUILD_BOOST_1_MONTH)) && void 0 !== e ? e : i.Z.getTenureRewardStatusForRewardId(s.Ft.FREE_GUILD_BOOST_3_MONTHS);
}