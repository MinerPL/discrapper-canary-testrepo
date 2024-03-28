"use strict";
n.r(t);
var s = n("735250");
n("470079");
var r = n("248042"),
  i = n("196567"),
  l = n("474936"),
  a = n("689938"),
  o = n("576688");
t.default = e => {
  let {
    isGift: t,
    plan: n
  } = e, u = (0, r.useIsEligibleForBogoPromotion)();
  return t || (null == n ? void 0 : n.skuId) !== l.PremiumSubscriptionSKUs.TIER_2 || !u ? null : (0, s.jsx)(i.default, {
    copy: a.default.Messages.BOGO_ANNOUNCEMENT_MODAL_UPGRADE_HEADER,
    bannerImage: o
  })
}