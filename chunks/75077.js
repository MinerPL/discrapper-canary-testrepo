"use strict";
s.r(t), s.d(t, {
  getFilteredPerksDiscoverabilityCards: function() {
    return f
  },
  getRewardingTenureCtaDescription: function() {
    return I
  },
  getRewardingTenureDescription: function() {
    return T
  },
  getRewardingTenureSubtitle: function() {
    return E
  },
  getRewardingTenureTitle: function() {
    return _
  },
  getThemedImage: function() {
    return R
  },
  usePerksDiscoverabilityStrings: function() {
    return m
  }
}), s("653041");
var a = s("442837"),
  i = s("780384"),
  r = s("410154"),
  n = s("78839"),
  l = s("74538"),
  o = s("391110"),
  u = s("474936"),
  d = s("735825"),
  c = s("689938");
let _ = e => {
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
  E = (e, t) => {
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
  T = e => {
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

function I(e, t) {
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
let R = (e, t, s) => (0, i.isThemeDark)(e) ? t : s,
  S = e => {
    let {
      cards: t,
      perksCards: s,
      isFullScreen: a,
      showTenureNotification: i,
      shopMarketingVariation: n
    } = e, l = a ? 3 : 2, o = e => {
      let {
        card: s
      } = e;
      t.length < l && t.push(s)
    };
    return null != s.shyProject && o({
      card: s.shyProject
    }), null != s.freeBoost && i && o({
      card: s.freeBoost
    }), o({
      card: s.earlyAccess
    }), o(n !== r.CollectiblesShopMarketingVariants.DEFAULT ? {
      card: s.specialShopPerks
    } : {
      card: s.specialMemberPricing
    }), o({
      card: s.unlimitedSuperReactions
    }), t
  },
  f = (e, t, s, a, i) => {
    let r = [];
    switch (t) {
      case o.PerksDiscoverabilityCardSection.PERKS_DISCOVERABILITY:
        r = [e.profiles, e.clientThemes, e.serverBoosts];
        break;
      case o.PerksDiscoverabilityCardSection.WHATS_NEW:
        r = S({
          cards: r,
          perksCards: e,
          isFullScreen: a,
          showTenureNotification: i,
          shopMarketingVariation: s
        });
        break;
      case o.PerksDiscoverabilityCardSection.CARD_CAROUSEL_FIRST_ROW:
        r = [e.customAppIcons, e.moreEmojiPower, e.customSoundsEverywhere, e.specialStickerAccess];
        break;
      case o.PerksDiscoverabilityCardSection.CARD_CAROUSEL_SECOND_ROW:
        r = [e.earlyAccessSeeAllVariant, e.specialMemberPricingSeeAllVariant, e.largeUploads, e.hdVideo, e.superReactions];
        break;
      case o.PerksDiscoverabilityCardSection.CARD_CAROUSEL_THIRD_ROW:
        r = [e.entranceSoundsSeeAllVariation, e.badge]
    }
    return !a && (r = r.filter(e => !e.hideOnNarrowScreen)), r
  },
  m = e => {
    let t = (0, a.useStateFromStores)([n.default], () => n.default.getPremiumTypeSubscription()),
      s = null != t ? l.default.getPremiumPlanItem(t) : null,
      i = (null != s ? l.default.getSkuIdForPlan(s.planId) : null) === u.PremiumSubscriptionSKUs.TIER_2;
    if (e) return i ? {
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