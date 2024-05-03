"use strict";
s.r(t), s.d(t, {
  default: function() {
    return c
  },
  useShouldScrollToTenureRewardContent: function() {
    return _
  }
});
var a = s("524437"),
  r = s("605236"),
  i = s("391110"),
  n = s("75077"),
  l = s("595878"),
  o = s("314684"),
  u = s("735825"),
  d = s("689938");

function c() {
  let e = (0, o.useFreeBoostUserTenureReward)(),
    t = (0, l.useUserEligibleForNitroTenureRewardCard)({
      location: i.NitroLandingPages.HOME
    });
  if (null != e && t) return {
    title: (0, n.getRewardingTenureTitle)(e.nitroTenureStatus),
    subtitle: (0, n.getRewardingTenureSubtitle)(e.nitroTenureStatus, null == e ? void 0 : e.tenureRewardSkuId),
    description: (0, n.getRewardingTenureDescription)(e.nitroTenureStatus),
    ctaDescription: (0, n.getRewardingTenureCtaDescription)(e.nitroTenureStatus, e.redeemableInDays),
    pillText: e.nitroTenureStatus === u.NitroRewardStatus.PENDING ? d.default.Messages.REWARD.toLocaleUpperCase() : void 0,
    dismissibleContentType: e.nitroTenureStatus === u.NitroRewardStatus.REDEEMABLE ? a.DismissibleContent.TENURE_REWARD_REDEEMABLE_CONFETTI : void 0
  }
}

function _(e) {
  return (null == e ? void 0 : e.showNotification) === !0 && (0, o.getTenureRewardDimissibleContentType)(e).some(e => !(0, r.isDismissibleContentDismissed)(e))
}