"use strict";
s.r(t), s.d(t, {
  default: function() {
    return E
  }
});
var a = s("37983");
s("884691");
var r = s("414456"),
  i = s.n(r),
  n = s("819855"),
  l = s("77078"),
  o = s("841098"),
  u = s("635956"),
  d = s("646718"),
  c = s("782340"),
  _ = s("428359"),
  E = e => {
    let {
      className: t,
      forceWhite: s,
      giftMessage: r,
      subscriptionTier: E,
      ...T
    } = e, I = (0, o.default)(), f = (0, n.isThemeDark)(I) || s, R = f ? l.ButtonColors.WHITE : l.ButtonColors.BRAND, S = E === d.PremiumSubscriptionSKUs.TIER_0 ? c.default.Messages.GIFT_NITRO_TIER_0 : c.default.Messages.GIFT_NITRO;
    return (0, a.jsx)(u.default, {
      isGift: !0,
      color: R,
      look: l.ButtonLooks.OUTLINED,
      hover: l.ButtonHovers.BRAND,
      buttonText: S,
      giftMessage: r,
      className: i(t, f ? _.buttonWhite : _.buttonBrand),
      subscriptionTier: E,
      ...T
    })
  }