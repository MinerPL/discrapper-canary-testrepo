"use strict";
s.r(t), s.d(t, {
  getRewardingTenureTitle: function() {
    return E
  },
  getRewardingTenureSubtitle: function() {
    return T
  },
  getRewardingTenureDescription: function() {
    return I
  },
  getRewardingTenureCtaDescription: function() {
    return f
  },
  CardVariantsInfo: function() {
    return S
  },
  getThemedImage: function() {
    return m
  },
  getFilteredPerksDiscoverabilityCards: function() {
    return N
  },
  usePerksDiscoverabilityStrings: function() {
    return A
  }
}), s("424973");
var a = s("446674"),
  r = s("819855"),
  n = s("411691"),
  i = s("521012"),
  l = s("719923"),
  o = s("907648"),
  u = s("646718"),
  d = s("511143"),
  c = s("782340"),
  _ = s("617487");
let E = e => {
    switch (e) {
      case d.NitroRewardStatus.PENDING:
        return c.default.Messages.NITRO_HOME_REWARDING_LOCKED_STATE_TITLE;
      case d.NitroRewardStatus.REDEEMABLE:
        return c.default.Messages.NITRO_HOME_REWARDING_REDEEMABLE_STATE_TITLE;
      case d.NitroRewardStatus.REDEEMED:
        return c.default.Messages.NITRO_HOME_REWARDING_REDEEMED_LABEL;
      default:
        return ""
    }
  },
  T = (e, t) => {
    switch (e) {
      case d.NitroRewardStatus.PENDING:
        return t === d.TenureRewardSKUs.FREE_GUILD_BOOST_1_MONTH ? c.default.Messages.NITRO_HOME_REWARDING_FREE_BOOST_LOCKED_STATE_SUBTITLE_1_MONTH_VARIANT : c.default.Messages.NITRO_HOME_REWARDING_FREE_BOOST_LOCKED_STATE_SUBTITLE_3_MONTHS_VARIANT;
      case d.NitroRewardStatus.REDEEMABLE:
        return t === d.TenureRewardSKUs.FREE_GUILD_BOOST_1_MONTH ? c.default.Messages.NITRO_HOME_REWARDING_FREE_BOOST_REDEEMABLE_STATE_SUBTITLE_1_MONTH_VARIANT : c.default.Messages.NITRO_HOME_REWARDING_FREE_BOOST_REDEEMABLE_STATE_SUBTITLE_3_MONTHS_VARIANT;
      case d.NitroRewardStatus.REDEEMED:
        return c.default.Messages.NITRO_HOME_REWARDING_REDEEMED_STATE_SUBTITLE;
      default:
        return
    }
  },
  I = e => {
    switch (e) {
      case d.NitroRewardStatus.PENDING:
        return c.default.Messages.NITRO_HOME_REWARDING_LOCKED_STATE_DESCRIPTION;
      case d.NitroRewardStatus.REDEEMABLE:
        return;
      case d.NitroRewardStatus.REDEEMED:
        return c.default.Messages.NITRO_HOME_REWARDING_REDEEMED_STATE_DESCRIPTION;
      default:
        return
    }
  };

function f(e, t) {
  switch (e) {
    case d.NitroRewardStatus.PENDING:
      return null != t ? c.default.Messages.NITRO_HOME_REWARDING_TENURE_BOOST_AVAILABLE_DATE.format({
        days: t
      }) : "";
    case d.NitroRewardStatus.REDEEMABLE:
      return c.default.Messages.REDEEM;
    case d.NitroRewardStatus.REDEEMED:
      return c.default.Messages.NITRO_HOME_REWARDING_REDEEMED_LABEL;
    default:
      return ""
  }
}
let R = {
    subtitle: {
      onlyShowOnHover: !1
    },
    description: {
      onlyShowOnHover: !0,
      className: _.cardDescription
    },
    descriptionCta: {
      onlyShowOnHover: !0
    }
  },
  S = {
    [o.CardVariants.DEFAULT]: R,
    [o.CardVariants.REWARD]: {
      subtitle: {
        onlyShowOnHover: !0,
        textVariant: "text-sm/semibold"
      },
      description: {
        onlyShowOnHover: !0,
        className: _.cardDescriptionTenureReward
      },
      descriptionCta: {
        onlyShowOnHover: !1,
        hideOnHoverComponent: !0,
        className: _.descriptionCTATenureReward
      },
      cardContainer: {
        className: _.glowingCardContainer
      }
    }
  },
  m = (e, t, s) => (0, r.isThemeDark)(e) ? t : s,
  N = (e, t, s, a, r) => {
    let i = [];
    switch (t) {
      case o.PerksDiscoverabilityCardSection.PERKS_DISCOVERABILITY:
        i = [e.profiles, e.clientThemes, e.serverBoosts];
        break;
      case o.PerksDiscoverabilityCardSection.WHATS_NEW:
        null != e.freeBoost && r && i.push(e.freeBoost), i.push(e.earlyAccess, s !== n.CollectiblesShopMarketingVariants.DEFAULT ? e.specialShopPerks : e.specialMemberPricing), (i.length < 3 && a || i.length < 3 && !a) && i.push(e.unlimitedSuperReactions);
        break;
      case o.PerksDiscoverabilityCardSection.CARD_CAROUSEL_FIRST_ROW:
        i = [e.customAppIcons, e.moreEmojiPower, e.customSoundsEverywhere, e.specialStickerAccess];
        break;
      case o.PerksDiscoverabilityCardSection.CARD_CAROUSEL_SECOND_ROW:
        i = [e.earlyAccessSeeAllVariant, e.specialMemberPricingSeeAllVariant, e.largeUploads, e.hdVideo, e.superReactions];
        break;
      case o.PerksDiscoverabilityCardSection.CARD_CAROUSEL_THIRD_ROW:
        i = [e.entranceSoundsSeeAllVariation, e.badge]
    }
    return !a && (i = i.filter(e => !e.hideOnNarrowScreen)), i
  },
  A = e => {
    let t = (0, a.useStateFromStores)([i.default], () => i.default.getPremiumTypeSubscription()),
      s = null != t ? l.default.getPremiumPlanItem(t) : null,
      r = null != s ? l.default.getSkuIdForPlan(s.planId) : null,
      n = r === u.PremiumSubscriptionSKUs.TIER_2;
    if (e) return n ? {
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