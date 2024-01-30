"use strict";
s.r(t), s.d(t, {
  PerksDiscoverabilityVariants: function() {
    return r
  },
  getThemedImage: function() {
    return _
  },
  getFilteredPerksDiscoverabilityCards: function() {
    return E
  },
  usePerksDiscoverabilityStrings: function() {
    return I
  }
});
var a, r, n = s("819855"),
  l = s("446674"),
  i = s("411691"),
  u = s("521012"),
  o = s("719923"),
  d = s("646718"),
  c = s("782340");
(a = r || (r = {})).PERKS_DISCOVERABILITY = "perks_discoverability", a.WHATS_NEW = "whats_new", a.CARD_CAROUSEL_FIRST_ROW = "card_carousel_first_row", a.CARD_CAROUSEL_SECOND_ROW = "card_carousel_second_row", a.CARD_CAROUSEL_THIRD_ROW = "card_carousel_final_row";
let _ = (e, t, s) => (0, n.isThemeDark)(e) ? t : s,
  E = (e, t, s) => {
    let a = [];
    switch (t) {
      case "perks_discoverability":
        a = [e.profiles, e.clientThemes, e.serverBoosts];
        break;
      case "whats_new":
        a = [e.earlyAccess, s !== i.CollectiblesShopMarketingVariants.DEFAULT ? e.specialShopPerks : e.specialMemberPricing, e.unlimitedSuperReactions];
        break;
      case "card_carousel_first_row":
        a = [e.customAppIcons, e.moreEmojiPower, e.customSoundsEverywhere, e.specialStickerAccess];
        break;
      case "card_carousel_second_row":
        a = [e.earlyAccessSeeAllVariant, e.specialMemberPricingSeeAllVariant, e.largeUploads, e.hdVideo, e.superReactions];
        break;
      case "card_carousel_final_row":
        a = [e.entranceSoundsSeeAllVariation, e.badge]
    }
    return a
  },
  I = e => {
    let t = (0, l.useStateFromStores)([u.default], () => u.default.getPremiumTypeSubscription()),
      s = null != t ? o.default.getPremiumPlanItem(t) : null,
      a = null != s ? o.default.getSkuIdForPlan(s.planId) : null,
      r = a === d.PremiumSubscriptionSKUs.TIER_2;
    if (e) return r ? {
      title: c.default.Messages.PREMIUM_MARKETING_WHATS_NEW_TITLE_SUB,
      subtitle: c.default.Messages.PREMIUM_MARKETING_WHATS_NEW_SUBTITLE_SUB
    } : {
      title: c.default.Messages.PREMIUM_MARKETING_WHATS_NEW_TITLE_NON_SUB,
      subtitle: c.default.Messages.PREMIUM_MARKETING_WHATS_NEW_SUBTITLE_NON_SUB
    };
    return {
      title: c.default.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_TITLE,
      subtitle: c.default.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_SUBTITLE
    }
  }