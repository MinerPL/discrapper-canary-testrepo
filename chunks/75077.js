"use strict";
s.r(t), s.d(t, {
  getFilteredPerksDiscoverabilityCards: function() {
    return O
  },
  getRewardingTenureCtaDescription: function() {
    return p
  },
  getRewardingTenureDescription: function() {
    return N
  },
  getRewardingTenureSubtitle: function() {
    return A
  },
  getRewardingTenureTitle: function() {
    return m
  },
  getThemedImage: function() {
    return g
  },
  useIsPremiumSubscriber: function() {
    return h
  },
  usePerksDiscoverabilityStrings: function() {
    return M
  }
}), s("653041"), s("627341");
var a = s("278074"),
  r = s("442837"),
  i = s("780384"),
  n = s("410154"),
  l = s("594174"),
  o = s("78839"),
  u = s("74538"),
  d = s("331119"),
  c = s("575595"),
  _ = s("466010"),
  E = s("915296"),
  T = s("650032"),
  I = s("391110"),
  R = s("474936"),
  f = s("735825"),
  S = s("689938");
let m = e => {
    switch (e) {
      case f.NitroRewardStatus.PENDING:
        return S.default.Messages.NITRO_HOME_REWARDING_LOCKED_STATE_TITLE;
      case f.NitroRewardStatus.REDEEMABLE:
        return S.default.Messages.NITRO_HOME_REWARDING_REDEEMABLE_STATE_TITLE;
      case f.NitroRewardStatus.REDEEMED:
        return S.default.Messages.NITRO_HOME_REWARDING_REDEEMED_LABEL;
      default:
        return ""
    }
  },
  A = (e, t) => {
    switch (e) {
      case f.NitroRewardStatus.PENDING:
        return t === f.TenureRewardSKUs.FREE_GUILD_BOOST_1_MONTH ? S.default.Messages.NITRO_HOME_REWARDING_FREE_BOOST_LOCKED_STATE_SUBTITLE_1_MONTH_VARIANT : S.default.Messages.NITRO_HOME_REWARDING_FREE_BOOST_LOCKED_STATE_SUBTITLE_3_MONTHS_VARIANT;
      case f.NitroRewardStatus.REDEEMABLE:
        return t === f.TenureRewardSKUs.FREE_GUILD_BOOST_1_MONTH ? S.default.Messages.NITRO_HOME_REWARDING_FREE_BOOST_REDEEMABLE_STATE_SUBTITLE_1_MONTH_VARIANT : S.default.Messages.NITRO_HOME_REWARDING_FREE_BOOST_REDEEMABLE_STATE_SUBTITLE_3_MONTHS_VARIANT;
      case f.NitroRewardStatus.REDEEMED:
        return S.default.Messages.NITRO_HOME_REWARDING_REDEEMED_STATE_SUBTITLE;
      default:
        return
    }
  },
  N = e => {
    switch (e) {
      case f.NitroRewardStatus.PENDING:
        return S.default.Messages.NITRO_HOME_REWARDING_LOCKED_STATE_DESCRIPTION;
      case f.NitroRewardStatus.REDEEMABLE:
        return;
      case f.NitroRewardStatus.REDEEMED:
        return S.default.Messages.NITRO_HOME_REWARDING_REDEEMED_STATE_DESCRIPTION;
      default:
        return
    }
  };

function p(e, t) {
  switch (e) {
    case f.NitroRewardStatus.PENDING:
      return null != t ? S.default.Messages.NITRO_HOME_REWARDING_TENURE_BOOST_AVAILABLE_DATE.format({
        days: t
      }) : "";
    case f.NitroRewardStatus.REDEEMABLE:
      return S.default.Messages.REDEEM;
    case f.NitroRewardStatus.REDEEMED:
      return S.default.Messages.NITRO_HOME_REWARDING_REDEEMED_LABEL;
    default:
      return ""
  }
}
let g = (e, t, s) => (0, i.isThemeDark)(e) ? t : s,
  C = "getWhatsNewRow",
  P = e => {
    let {
      cards: t,
      perksCards: s,
      isFullScreen: a,
      showTenureCard: r,
      shopMarketingVariation: i,
      isPremiumSubscriber: l
    } = e, o = a ? 3 : 2, u = e => {
      let {
        card: s
      } = e;
      t.length < o && t.push(s)
    }, E = () => {
      i !== n.CollectiblesShopMarketingVariants.DEFAULT ? u({
        card: s.specialShopPerks
      }) : u({
        card: s.specialMemberPricing
      })
    }, {
      shouldShowCards: I
    } = _.June2024MarketingMoment.getCurrentConfig({
      location: C
    }, {
      autoTrackExposure: !1
    });
    if (a && I) {
      if (l) null != s.freeBoost && !0 === r ? u({
        card: s.freeBoost
      }) : E(), u({
        card: s.newAppStylesUpdateJune2024
      }), u({
        card: s.customNotificationSounds
      });
      else {
        let {
          enabled: e
        } = T.ReferralProgramRecipient.getCurrentConfig({
          location: C
        }, {
          autoTrackExposure: !1
        }), {
          enabled: t
        } = c.DiscountModelDataCollection.getCurrentConfig({
          location: C
        }, {
          autoTrackExposure: !1
        }), {
          enabled: a
        } = d.CannibalizationModelDataCollection.getCurrentConfig({
          location: C
        }, {
          autoTrackExposure: !1
        });
        !e || t || a ? E() : u({
          card: s.referralProgram
        }), u({
          card: s.newAppStylesUpdateJune2024
        }), u({
          card: s.customNotificationSounds
        })
      }
    }
    return null != s.freeBoost && !0 === r && u({
      card: s.freeBoost
    }), u({
      card: s.earlyAccess
    }), E(), u({
      card: s.unlimitedSuperReactions
    }), t
  },
  O = e => {
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
      case I.PerksDiscoverabilityCardSection.PERKS_DISCOVERABILITY:
        u = (0, a.match)({
          tileOrderVariant: l,
          isPremiumSubscriber: o
        }).with({
          tileOrderVariant: E.TileOrderVariant.VARIANT_1,
          isPremiumSubscriber: !1
        }, () => [t.profiles, t.moreEmojiPower, t.largeUploads]).with({
          tileOrderVariant: E.TileOrderVariant.VARIANT_2,
          isPremiumSubscriber: !1
        }, () => [t.profiles, t.moreEmojiPower, t.largeUploads, t.hdVideo, t.clientThemes, t.customAppIcons]).otherwise(() => [t.profiles, t.clientThemes, t.serverBoosts]);
        break;
      case I.PerksDiscoverabilityCardSection.WHATS_NEW:
        u = P({
          cards: u,
          perksCards: t,
          isPremiumSubscriber: o,
          isFullScreen: i,
          showTenureCard: n,
          shopMarketingVariation: r
        });
        break;
      case I.PerksDiscoverabilityCardSection.CARD_CAROUSEL_FIRST_ROW:
        u = (0, a.match)({
          tileOrderVariant: l,
          isPremiumSubscriber: o
        }).with({
          tileOrderVariant: E.TileOrderVariant.VARIANT_1,
          isPremiumSubscriber: !1
        }, () => [t.hdVideo, t.serverBoosts, t.superReactions, t.earlyAccessSeeAllVariant, t.specialShopPerks]).with({
          tileOrderVariant: E.TileOrderVariant.VARIANT_2,
          isPremiumSubscriber: !1
        }, () => [t.serverBoosts, t.superReactions, t.earlyAccessSeeAllVariant, t.specialShopPerks]).otherwise(() => [t.customAppIcons, t.moreEmojiPower, t.customSoundsEverywhere, t.specialStickerAccess]);
        break;
      case I.PerksDiscoverabilityCardSection.CARD_CAROUSEL_SECOND_ROW:
        u = (0, a.match)({
          tileOrderVariant: l,
          isPremiumSubscriber: o
        }).with({
          tileOrderVariant: E.TileOrderVariant.VARIANT_1,
          isPremiumSubscriber: !1
        }, () => [t.clientThemes, t.customAppIcons, t.customSoundsEverywhere, t.specialStickerAccess]).with({
          tileOrderVariant: E.TileOrderVariant.VARIANT_2,
          isPremiumSubscriber: !1
        }, () => [t.customSoundsEverywhere, t.specialStickerAccess]).otherwise(() => [t.earlyAccessSeeAllVariant, t.specialMemberPricingSeeAllVariant, t.largeUploads, t.hdVideo, t.superReactions]);
        break;
      case I.PerksDiscoverabilityCardSection.CARD_CAROUSEL_THIRD_ROW:
        u = [t.entranceSoundsSeeAllVariation, t.badge]
    }
    return !i && (u = u.filter(e => !e.hideOnNarrowScreen)), u
  },
  M = e => {
    let t = (0, r.useStateFromStores)([o.default], () => o.default.getPremiumTypeSubscription()),
      s = null != t ? u.default.getPremiumPlanItem(t) : null,
      a = (null != s ? u.default.getSkuIdForPlan(s.planId) : null) === R.PremiumSubscriptionSKUs.TIER_2;
    if (e) return a ? {
      title: S.default.Messages.PREMIUM_MARKETING_WHATS_NEW_TITLE_SUB,
      subtitle: S.default.Messages.PREMIUM_MARKETING_WHATS_NEW_SUBTITLE_SUB
    } : {
      title: S.default.Messages.PREMIUM_MARKETING_WHATS_NEW_TITLE_NON_SUB,
      subtitle: S.default.Messages.PREMIUM_MARKETING_WHATS_NEW_SUBTITLE_NON_SUB
    };
    return {
      title: S.default.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_TITLE,
      subtitle: S.default.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_SUBTITLE
    }
  },
  h = () => {
    let e = (0, r.useStateFromStores)([l.default], () => l.default.getCurrentUser());
    return (0, u.isPremium)(e)
  }