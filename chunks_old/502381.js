"use strict";
s.r(t), s.d(t, {
  default: function() {
    return u
  }
});
var a = s("907648"),
  r = s("598739"),
  i = s("908309"),
  n = s("359499"),
  l = s("511143"),
  o = s("782340");

function u() {
  let e = (0, n.useFreeBoostUserTenureReward)(),
    t = (0, i.useUserEligibleForNitroTenureRewardCard)({
      location: a.NitroLandingPages.HOME
    });
  if (null != e && t) return {
    title: (0, r.getRewardingTenureTitle)(e.nitroTenureStatus),
    subtitle: (0, r.getRewardingTenureSubtitle)(e.nitroTenureStatus, null == e ? void 0 : e.tenureRewardSkuId),
    description: (0, r.getRewardingTenureDescription)(e.nitroTenureStatus),
    ctaDescription: (0, r.getRewardingTenureCtaDescription)(e.nitroTenureStatus, e.redeemableInDays),
    pillText: e.nitroTenureStatus === l.NitroRewardStatus.PENDING ? o.default.Messages.REWARD.toLocaleUpperCase() : void 0
  }
}