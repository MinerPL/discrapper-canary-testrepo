"use strict";
n.d(t, {
  LA: function() {
    return T
  },
  MR: function() {
    return c
  },
  Wb: function() {
    return I
  },
  YE: function() {
    return _
  },
  _k: function() {
    return u
  },
  kG: function() {
    return d
  },
  u7: function() {
    return E
  }
}), n(580130);
var i = n(55563),
  r = n(513785),
  s = n(474936),
  o = n(735825),
  a = n(981631),
  l = n(689938);

function u(e) {
  return e.type === a.qc2.PURCHASE && e.skuId === s.Si.TIER_2 && e.applicationId === s.RQ && e.isValid(null, i.Z)
}

function _(e) {
  return e.type === a.qc2.PREMIUM_PURCHASE && o.uv.has(e.skuId) && e.applicationId === s.RQ && e.isValid(null, i.Z)
}

function d(e) {
  if (null != e) return Array.from(e).find(e => u(e))
}

function c(e, t) {
  if (null != t) return Array.from(t).find(t => t.type === a.qc2.PREMIUM_PURCHASE && e.includes(t.skuId) && t.applicationId === s.RQ && t.isValid(null, i.Z))
}

function E(e) {
  return null != e.redeemable_at && null != e.next_tenure_reward_id
}

function I(e) {
  switch (e) {
    case o.EB.PENDING:
      return l.Z.Messages.REWARD;
    case o.EB.REDEEMABLE:
      return l.Z.Messages.REDEEM;
    case o.EB.REDEEMED:
    default:
      return null
  }
}

function T() {
  var e;
  return null !== (e = r.Z.getTenureRewardStatusForRewardId(o.Ft.FREE_GUILD_BOOST_1_MONTH)) && void 0 !== e ? e : r.Z.getTenureRewardStatusForRewardId(o.Ft.FREE_GUILD_BOOST_3_MONTHS)
}