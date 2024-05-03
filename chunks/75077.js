"use strict";
s.r(t), s.d(t, {
  getFilteredPerksDiscoverabilityCards: function() {
    return N
  },
  getRewardingTenureCtaDescription: function() {
    return S
  },
  getRewardingTenureDescription: function() {
    return f
  },
  getRewardingTenureSubtitle: function() {
    return R
  },
  getRewardingTenureTitle: function() {
    return I
  },
  getThemedImage: function() {
    return m
  },
  useIsPremiumSubscriber: function() {
    return g
  },
  usePerksDiscoverabilityStrings: function() {
    return p
  }
}), s("653041"), s("627341");
var a = s("278074"),
  r = s("442837"),
  i = s("780384"),
  n = s("410154"),
  l = s("594174"),
  o = s("78839"),
  u = s("74538"),
  d = s("915296"),
  c = s("391110"),
  _ = s("474936"),
  E = s("735825"),
  T = s("689938");
let I = e => {
    switch (e) {
      case E.NitroRewardStatus.PENDING:
        return T.default.Messages.NITRO_HOME_REWARDING_LOCKED_STATE_TITLE;
      case E.NitroRewardStatus.REDEEMABLE:
        return T.default.Messages.NITRO_HOME_REWARDING_REDEEMABLE_STATE_TITLE;
      case E.NitroRewardStatus.REDEEMED:
        return T.default.Messages.NITRO_HOME_REWARDING_REDEEMED_LABEL;
      default:
        return ""
    }
  },
  R = (e, t) => {
    switch (e) {
      case E.NitroRewardStatus.PENDING:
        return t === E.TenureRewardSKUs.FREE_GUILD_BOOST_1_MONTH ? T.default.Messages.NITRO_HOME_REWARDING_FREE_BOOST_LOCKED_STATE_SUBTITLE_1_MONTH_VARIANT : T.default.Messages.NITRO_HOME_REWARDING_FREE_BOOST_LOCKED_STATE_SUBTITLE_3_MONTHS_VARIANT;
      case E.NitroRewardStatus.REDEEMABLE:
        return t === E.TenureRewardSKUs.FREE_GUILD_BOOST_1_MONTH ? T.default.Messages.NITRO_HOME_REWARDING_FREE_BOOST_REDEEMABLE_STATE_SUBTITLE_1_MONTH_VARIANT : T.default.Messages.NITRO_HOME_REWARDING_FREE_BOOST_REDEEMABLE_STATE_SUBTITLE_3_MONTHS_VARIANT;
      case E.NitroRewardStatus.REDEEMED:
        return T.default.Messages.NITRO_HOME_REWARDING_REDEEMED_STATE_SUBTITLE;
      default:
        return
    }
  },
  f = e => {
    switch (e) {
      case E.NitroRewardStatus.PENDING:
        return T.default.Messages.NITRO_HOME_REWARDING_LOCKED_STATE_DESCRIPTION;
      case E.NitroRewardStatus.REDEEMABLE:
        return;
      case E.NitroRewardStatus.REDEEMED:
        return T.default.Messages.NITRO_HOME_REWARDING_REDEEMED_STATE_DESCRIPTION;
      default:
        return
    }
  };

function S(e, t) {
  switch (e) {
    case E.NitroRewardStatus.PENDING:
      return null != t ? T.default.Messages.NITRO_HOME_REWARDING_TENURE_BOOST_AVAILABLE_DATE.format({
        days: t
      }) : "";
    case E.NitroRewardStatus.REDEEMABLE:
      return T.default.Messages.REDEEM;
    case E.NitroRewardStatus.REDEEMED:
      return T.default.Messages.NITRO_HOME_REWARDING_REDEEMED_LABEL;
    default:
      return ""
  }
}
let m = (e, t, s) => (0, i.isThemeDark)(e) ? t : s,
  A = e => {
    let {
      cards: t,
      perksCards: s,
      isFullScreen: a,
      showTenureCard: r,
      shopMarketingVariation: i
    } = e, l = a ? 3 : 2, o = e => {
      let {
        card: s
      } = e;
      t.length < l && t.push(s)
    };
    return null != s.shyProject && o({
      card: s.shyProject
    }), null != s.freeBoost && !0 === r && o({
      card: s.freeBoost
    }), o({
      card: s.earlyAccess
    }), o(i !== n.CollectiblesShopMarketingVariants.DEFAULT ? {
      card: s.specialShopPerks
    } : {
      card: s.specialMemberPricing
    }), o({
      card: s.unlimitedSuperReactions
    }), t
  },
  N = e => {
    let {
      perksCards: t,
      variant: s,
      shopMarketingVariation: r,
      isFullScreen: i,
      showTenureCard: n,
      tileOrderVariant: l,
      isPremiumSubscriber: o
    } = e, u = [];
    switch (s) {
      case c.PerksDiscoverabilityCardSection.PERKS_DISCOVERABILITY:
        u = (0, a.match)({
          tileOrderVariant: l,
          isPremiumSubscriber: o
        }).with({
          tileOrderVariant: d.TileOrderVariant.VARIANT_1,
          isPremiumSubscriber: !1
        }, () => [t.profiles, t.moreEmojiPower, t.largeUploads]).with({
          tileOrderVariant: d.TileOrderVariant.VARIANT_2,
          isPremiumSubscriber: !1
        }, () => [t.profiles, t.moreEmojiPower, t.largeUploads, t.hdVideo, t.clientThemes, t.customAppIcons]).otherwise(() => [t.profiles, t.clientThemes, t.serverBoosts]);
        break;
      case c.PerksDiscoverabilityCardSection.WHATS_NEW:
        u = A({
          cards: u,
          perksCards: t,
          isFullScreen: i,
          showTenureCard: n,
          shopMarketingVariation: r
        });
        break;
      case c.PerksDiscoverabilityCardSection.CARD_CAROUSEL_FIRST_ROW:
        u = (0, a.match)({
          tileOrderVariant: l,
          isPremiumSubscriber: o
        }).with({
          tileOrderVariant: d.TileOrderVariant.VARIANT_1,
          isPremiumSubscriber: !1
        }, () => [t.hdVideo, t.serverBoosts, t.superReactions, t.earlyAccessSeeAllVariant, t.specialShopPerks]).with({
          tileOrderVariant: d.TileOrderVariant.VARIANT_2,
          isPremiumSubscriber: !1
        }, () => [t.serverBoosts, t.superReactions, t.earlyAccessSeeAllVariant, t.specialShopPerks]).otherwise(() => [t.customAppIcons, t.moreEmojiPower, t.customSoundsEverywhere, t.specialStickerAccess]);
        break;
      case c.PerksDiscoverabilityCardSection.CARD_CAROUSEL_SECOND_ROW:
        u = (0, a.match)({
          tileOrderVariant: l,
          isPremiumSubscriber: o
        }).with({
          tileOrderVariant: d.TileOrderVariant.VARIANT_1,
          isPremiumSubscriber: !1
        }, () => [t.clientThemes, t.customAppIcons, t.customSoundsEverywhere, t.specialStickerAccess]).with({
          tileOrderVariant: d.TileOrderVariant.VARIANT_2,
          isPremiumSubscriber: !1
        }, () => [t.customSoundsEverywhere, t.specialStickerAccess]).otherwise(() => [t.earlyAccessSeeAllVariant, t.specialMemberPricingSeeAllVariant, t.largeUploads, t.hdVideo, t.superReactions]);
        break;
      case c.PerksDiscoverabilityCardSection.CARD_CAROUSEL_THIRD_ROW:
        u = [t.entranceSoundsSeeAllVariation, t.badge]
    }
    return !i && (u = u.filter(e => !e.hideOnNarrowScreen)), u
  },
  p = e => {
    let t = (0, r.useStateFromStores)([o.default], () => o.default.getPremiumTypeSubscription()),
      s = null != t ? u.default.getPremiumPlanItem(t) : null,
      a = (null != s ? u.default.getSkuIdForPlan(s.planId) : null) === _.PremiumSubscriptionSKUs.TIER_2;
    if (e) return a ? {
      title: T.default.Messages.PREMIUM_MARKETING_WHATS_NEW_TITLE_SUB,
      subtitle: T.default.Messages.PREMIUM_MARKETING_WHATS_NEW_SUBTITLE_SUB
    } : {
      title: T.default.Messages.PREMIUM_MARKETING_WHATS_NEW_TITLE_NON_SUB,
      subtitle: T.default.Messages.PREMIUM_MARKETING_WHATS_NEW_SUBTITLE_NON_SUB
    };
    return {
      title: T.default.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_TITLE,
      subtitle: T.default.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_SUBTITLE
    }
  },
  g = () => {
    let e = (0, r.useStateFromStores)([l.default], () => l.default.getCurrentUser());
    return (0, u.isPremium)(e)
  }