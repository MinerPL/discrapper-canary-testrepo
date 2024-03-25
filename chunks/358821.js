"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var r = n("37983");
n("884691");
var i = n("641078"),
  s = n("132554"),
  l = n("646718"),
  a = n("782340"),
  o = n("880865"),
  u = e => {
    let {
      isGift: t,
      plan: n
    } = e, u = (0, i.useIsEligibleForBogoPromotion)();
    return t || (null == n ? void 0 : n.skuId) !== l.PremiumSubscriptionSKUs.TIER_2 || !u ? null : (0, r.jsx)(s.default, {
      copy: a.default.Messages.BOGO_ANNOUNCEMENT_MODAL_UPGRADE_HEADER,
      bannerImage: o
    })
  }