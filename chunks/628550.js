"use strict";
s.r(t), s.d(t, {
  PerksDiscoverabilityCardTypes: function() {
    return r
  },
  default: function() {
    return et
  }
});
var a, r, i = s("37983");
s("884691");
var n = s("65597"),
  l = s("151426"),
  o = s("79112"),
  u = s("841098"),
  d = s("812204"),
  c = s("685665"),
  _ = s("18346"),
  E = s("21526"),
  T = s("411691"),
  I = s("38766"),
  f = s("42887"),
  R = s("521012"),
  S = s("701909"),
  m = s("719923"),
  N = s("184684"),
  A = s("502381"),
  p = s("354588"),
  C = s("907648"),
  g = s("598739"),
  O = s("646718"),
  P = s("49111"),
  M = s("397336"),
  h = s("782340"),
  L = s("574211"),
  x = s("982784"),
  v = s("19530"),
  D = s("215541"),
  U = s("571685"),
  b = s("994679"),
  j = s("620826"),
  B = s("333078"),
  G = s("156591"),
  y = s("480905"),
  k = s("913204"),
  H = s("198326"),
  F = s("761708"),
  w = s("174433"),
  W = s("828015"),
  K = s("62414"),
  V = s("613697"),
  Y = s("907511"),
  z = s("214523"),
  X = s("165870"),
  Q = s("186590"),
  Z = s("14528"),
  J = s("925094"),
  q = s("832085"),
  $ = s("443646"),
  ee = s("759308");
(a = r || (r = {})).AVATAR_DECORATIONS = "avatarDecorations", a.CLIENT_THEMES = "clientThemes", a.CLIPS = "clips", a.EARLY_ACCESS = "earlyAccess", a.ENTRANCE_SOUNDS = "entranceSounds", a.PROFILE_EFFECTS = "profileEffects", a.PROFILES = "profiles", a.REMIXING = "remixing", a.SERVER_BOOSTS = "serverBoosts", a.SPECIAL_MEMBER_PRICING = "specialMemberPricing", a.SPECIAL_MEMBER_PRICING_SEE_ALL_VARIANT = "specialMemberPricingSeeAllVariant", a.SPECIAL_SHOP_PERKS = "specialShopPerks", a.UNLIMITED_SUPER_REACTIONS = "unlimitedSuperReactions", a.SUPER_REACTIONS = "superReactions", a.UPCOMING_DROP_UNTIMED = "upcomingDropUntimed", a.CUSTOM_APP_ICONS = "customAppIcons", a.MORE_EMOJI_POWER = "moreEmojiPower", a.CUSTOM_SOUNDS_EVERYWHERE = "customSoundsEverywhere", a.SPECIAL_STICKER_ACCESS = "specialStickerAccess", a.LARGE_UPLOADS = "largeUploads", a.HD_VIDEO = "hdVideo", a.BADGE = "badge", a.ENTRANCE_SOUNDS_SEE_ALL_VARIATION = "entranceSoundsSeeAllVariation", a.EARLY_ACCESS_SEE_ALL_VARIATION = "earlyAccessSeeAllVariant", a.FREE_BOOST = "freeBoost", a.SHY_PROJECT = "shyProject";
var et = () => {
  let {
    analyticsLocations: e
  } = (0, c.default)(d.default.PREMIUM_MARKETING_PERK_CARD), t = (0, u.default)(), s = h.default.Messages.FILE_UPLOAD_LIMIT_PREMIUM_TIER_2_INCREASE, a = (0, n.useStateFromStores)([R.default], () => R.default.getPremiumTypeSubscription()), r = null != a ? m.default.getPremiumPlanItem(a) : null, et = null != r ? m.default.getSkuIdForPlan(r.planId) : null, es = et === O.PremiumSubscriptionSKUs.TIER_2, {
    flipped: ea
  } = (0, N.useWhatsNewAvatarDecoRollout)(), {
    flipped: er
  } = (0, N.useWhatsNewProfileFXRollout)(), ei = (0, _.default)(f.default), en = (0, A.default)(), el = (0, I.default)({
    scrollPosition: M.ProfileCustomizationScrollPositions.TRY_IT_OUT,
    analyticsLocations: e
  }), eo = () => {
    o.default.open(P.UserSettingsSections.VOICE, M.SOUNDBOARD_SUBSECTION, {
      openWithoutBackstack: !0,
      analyticsLocations: e
    })
  }, eu = () => {
    (0, E.openCollectiblesShop)({
      analyticsLocations: e,
      analyticsSource: d.default.PREMIUM_MARKETING_PERK_CARD
    })
  }, ed = {
    avatarDecorations: es ? {
      name: "avatarDecorations",
      title: h.default.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_TITLE,
      subtitle: h.default.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_SUBTITLE_SUB,
      description: h.default.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_DESCRIPTION_SUB,
      descriptionCta: h.default.Messages.VISIT_THE_SHOP_CTA,
      onCtaClick: eu,
      pillText: h.default.Messages.EARLY_ACCESS,
      perkImage: B,
      canReveal: ea,
      dismissibleContentType: l.DismissibleContent.WHATS_NEW_AVATAR_DECOS_FLIP
    } : {
      name: "avatarDecorations",
      title: h.default.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_TITLE,
      subtitle: h.default.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_SUBTITLE_NON_SUB,
      description: h.default.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_DESCRIPTION_NON_SUB,
      pillText: h.default.Messages.EARLY_ACCESS,
      perkImage: B,
      canReveal: ea,
      dismissibleContentType: l.DismissibleContent.WHATS_NEW_AVATAR_DECOS_FLIP
    },
    clientThemes: {
      name: "clientThemes",
      title: h.default.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_THEMES_TITLE,
      subtitle: h.default.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_THEMES_SUBTITLE,
      description: h.default.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_THEMES_DESCRIPTION,
      descriptionCta: h.default.Messages.TAKE_ME_THERE,
      onCtaClick: () => {
        o.default.open(P.UserSettingsSections.APPEARANCE, null, {
          openWithoutBackstack: !0,
          analyticsLocations: e
        })
      },
      perkImage: U
    },
    clips: es ? {
      name: "clips",
      title: h.default.Messages.CLIPS,
      subtitle: h.default.Messages.PREMIUM_MARKETING_WHATS_NEW_CLIPS_SUBTITLE,
      description: h.default.Messages.PREMIUM_MARKETING_WHATS_NEW_CLIPS_DESCRIPTION_SUB,
      descriptionCta: ei ? h.default.Messages.TAKE_ME_THERE : h.default.Messages.LEARN_MORE,
      pillText: h.default.Messages.EARLY_ACCESS,
      onCtaClick: ei ? () => {
        o.default.open(P.UserSettingsSections.CLIPS, null, {
          openWithoutBackstack: !0,
          analyticsLocations: e
        })
      } : () => {
        window.open(S.default.getArticleURL(P.HelpdeskArticles.CLIPS), "_blank")
      },
      perkImage: G
    } : {
      name: "clips",
      title: h.default.Messages.CLIPS,
      subtitle: h.default.Messages.PREMIUM_MARKETING_WHATS_NEW_CLIPS_SUBTITLE,
      description: h.default.Messages.PREMIUM_MARKETING_WHATS_NEW_CLIPS_DESCRIPTION_NON_SUB,
      pillText: h.default.Messages.EARLY_ACCESS,
      perkImage: G
    },
    earlyAccess: es ? {
      name: "earlyAccess",
      title: h.default.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_TITLE,
      subtitle: h.default.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_SUBTITLE_V2,
      description: h.default.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_DESCRIPTION_SUB,
      perkImage: k
    } : {
      name: "earlyAccess",
      title: h.default.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_TITLE,
      subtitle: h.default.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_SUBTITLE_V2,
      description: h.default.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_DESCRIPTION_NON_SUB,
      isPremiumGetCta: !0,
      perkImage: k
    },
    earlyAccessSeeAllVariant: es ? {
      name: "earlyAccessSeeAllVariant",
      title: h.default.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_TITLE,
      subtitle: h.default.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_SUBTITLE_V2,
      description: h.default.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_DESCRIPTION_SUB,
      perkImage: H
    } : {
      name: "earlyAccess",
      title: h.default.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_TITLE,
      subtitle: h.default.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_SUBTITLE_V2,
      description: h.default.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_DESCRIPTION_NON_SUB,
      isPremiumGetCta: !0,
      perkImage: H
    },
    entranceSounds: es ? {
      name: "entranceSounds",
      title: h.default.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_TITLE,
      subtitle: h.default.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_SUBTITLE,
      description: h.default.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_DESCRIPTION_SUB,
      descriptionCta: h.default.Messages.TAKE_ME_THERE,
      onCtaClick: eo,
      perkImage: w
    } : {
      name: "entranceSounds",
      title: h.default.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_TITLE,
      subtitle: h.default.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_SUBTITLE,
      description: h.default.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_DESCRIPTION_NON_SUB,
      perkImage: w
    },
    entranceSoundsSeeAllVariation: es ? {
      name: "entranceSoundsSeeAllVariation",
      title: h.default.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_TITLE,
      subtitle: h.default.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_SUBTITLE,
      description: h.default.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_DESCRIPTION_SUB,
      descriptionCta: h.default.Messages.TAKE_ME_THERE,
      onCtaClick: eo,
      perkImage: W
    } : {
      name: "entranceSoundsSeeAllVariation",
      title: h.default.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_TITLE,
      subtitle: h.default.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_SUBTITLE,
      description: h.default.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_DESCRIPTION_NON_SUB,
      perkImage: W
    },
    profileEffects: es ? {
      name: "profileEffects",
      title: h.default.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_TITLE,
      subtitle: h.default.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_SUBTITLE,
      description: h.default.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_DESCRIPTION_SUB,
      descriptionCta: h.default.Messages.VISIT_THE_SHOP_CTA,
      onCtaClick: eu,
      pillText: h.default.Messages.EARLY_ACCESS,
      perkImage: V,
      canReveal: er,
      dismissibleContentType: l.DismissibleContent.WHATS_NEW_PROFILE_EFFECTS_FLIP
    } : {
      name: "profileEffects",
      title: h.default.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_TITLE,
      subtitle: h.default.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_SUBTITLE,
      description: h.default.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_DESCRIPTION_NON_SUB,
      pillText: h.default.Messages.EARLY_ACCESS,
      perkImage: V,
      canReveal: er,
      dismissibleContentType: l.DismissibleContent.WHATS_NEW_PROFILE_EFFECTS_FLIP
    },
    profiles: {
      name: "profiles",
      title: h.default.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_PROFILES_TITLE,
      subtitle: h.default.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_PROFILES_SUBTITLE,
      description: h.default.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_PROFILES_DESCRIPTION,
      descriptionCta: h.default.Messages.TAKE_ME_THERE,
      onCtaClick: el,
      perkImage: b
    },
    remixing: es ? {
      name: "remixing",
      title: h.default.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_TITLE,
      subtitle: h.default.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_SUBTITLE,
      description: h.default.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_DESCRIPTION_SUB,
      perkImage: Y,
      pillText: h.default.Messages.EARLY_ACCESS
    } : {
      name: "remixing",
      title: h.default.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_TITLE,
      subtitle: h.default.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_SUBTITLE,
      description: h.default.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_DESCRIPTION_NON_SUB,
      perkImage: Y,
      pillText: h.default.Messages.EARLY_ACCESS
    },
    serverBoosts: {
      name: "serverBoosts",
      title: h.default.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_BOOSTS_TITLE,
      subtitle: h.default.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_BOOSTS_SUBTITLE,
      description: h.default.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_BOOSTS_DESCRIPTION,
      descriptionCta: h.default.Messages.TAKE_ME_THERE,
      onCtaClick: () => {
        o.default.open(P.UserSettingsSections.GUILD_BOOSTING, null, {
          openWithoutBackstack: !0,
          analyticsLocations: e
        })
      },
      perkImage: j,
      hideOnNarrowScreen: !0
    },
    specialMemberPricing: es ? {
      name: "specialMemberPricing",
      title: h.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_TITLE,
      subtitle: h.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_SUBTITLE_V2,
      description: h.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_SUB,
      descriptionCta: h.default.Messages.VISIT_THE_SHOP_CTA,
      onCtaClick: eu,
      perkImage: X
    } : {
      name: "specialMemberPricing",
      title: h.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_TITLE,
      subtitle: h.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_SUBTITLE_V2,
      description: h.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_NON_SUB,
      isPremiumGetCta: !0,
      perkImage: X
    },
    specialMemberPricingSeeAllVariant: es ? {
      name: "specialMemberPricingSeeAllVariant",
      title: h.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_TITLE,
      subtitle: h.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_SUBTITLE_V2,
      description: h.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_SUB,
      descriptionCta: h.default.Messages.VISIT_THE_SHOP_CTA,
      onCtaClick: eu,
      perkImage: Q
    } : {
      name: "specialMemberPricingSeeAllVariant",
      title: h.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_TITLE,
      subtitle: h.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_SUBTITLE_V2,
      description: h.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_NON_SUB,
      isPremiumGetCta: !0,
      perkImage: Q
    },
    specialShopPerks: es ? {
      name: "specialShopPerks",
      title: h.default.Messages.PREMIUM_MARKETING_WHATS_NEW_SPECIAL_SHOP_PERKS_TITLE,
      subtitle: h.default.Messages.PREMIUM_MARKETING_WHATS_NEW_SPECIAL_SHOP_PERKS_SUBTITLE,
      description: h.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_SUB,
      descriptionCta: h.default.Messages.VISIT_THE_SHOP_CTA,
      onCtaClick: eu,
      perkImage: X
    } : {
      name: "specialShopPerks",
      title: h.default.Messages.PREMIUM_MARKETING_WHATS_NEW_SPECIAL_SHOP_PERKS_TITLE,
      subtitle: h.default.Messages.PREMIUM_MARKETING_WHATS_NEW_SPECIAL_SHOP_PERKS_SUBTITLE,
      description: h.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_NON_SUB,
      descriptionCta: h.default.Messages.VISIT_THE_SHOP_CTA,
      onCtaClick: eu,
      perkImage: X
    },
    unlimitedSuperReactions: es ? {
      name: "unlimitedSuperReactions",
      title: h.default.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_TITLE,
      subtitle: h.default.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_SUBTITLE,
      description: h.default.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_DESCRIPTION_SUB,
      perkImage: $,
      hideOnNarrowScreen: !0
    } : {
      name: "unlimitedSuperReactions",
      title: h.default.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_TITLE,
      subtitle: h.default.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_SUBTITLE,
      description: h.default.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_DESCRIPTION_NON_SUB,
      isPremiumGetCta: !0,
      perkImage: $,
      hideOnNarrowScreen: !0
    },
    superReactions: {
      name: "superReactions",
      title: h.default.Messages.NITRO_HOME_SUPER_REACTIONS,
      subtitle: h.default.Messages.NITRO_HOME_SUPER_REACTIONS_DESCRIPTION,
      description: h.default.Messages.NITRO_HOME_CARD_INCLUDED_WITH_BASIC_AND_NITRO,
      perkImage: q
    },
    upcomingDropUntimed: {
      name: "upcomingDropUntimed",
      title: h.default.Messages.NEW_DROP,
      pillText: h.default.Messages.COMING_SOON,
      backgroundImage: K
    },
    badge: {
      name: "badge",
      title: h.default.Messages.NITRO_HOME_SUBSCRIBER_BADGE,
      subtitle: h.default.Messages.NITRO_HOME_GET_THIS_SUBSCRIBER_BADGE,
      perkImage: L,
      description: h.default.Messages.NITRO_HOME_SUBSCRIBER_BADGE_FOR_THE_COLLECTORS
    },
    customAppIcons: {
      name: "customAppIcons",
      title: h.default.Messages.PREMIUM_MARKETING_FEATURE_CUSTOM_APP_ICONS_TITLE,
      subtitle: h.default.Messages.PREMIUM_MARKETING_FEATURE_CUSTOM_APP_ICONS_DESCRIPTION,
      perkImage: y,
      description: h.default.Messages.NITRO_HOME_CARD_INCLUDED_WITH_BASIC_AND_NITRO,
      descriptionCta: h.default.Messages.TAKE_ME_THERE,
      onCtaClick: () => {
        o.default.open(P.UserSettingsSections.APPEARANCE, null, {
          scrollPosition: M.AppearanceScrollPositions.CUSTOM_APP_ICONS
        })
      }
    },
    moreEmojiPower: {
      name: "moreEmojiPower",
      title: h.default.Messages.PREMIUM_MARKETING_FEATURE_EMOJI_TITLE,
      subtitle: h.default.Messages.PREMIUM_MARKETING_EMOJI_PERK_TITLE,
      perkImage: F,
      description: h.default.Messages.NITRO_HOME_CARD_CHOOSE_CUSTOM_EMOJI
    },
    customSoundsEverywhere: {
      name: "customSoundsEverywhere",
      title: h.default.Messages.NITRO_HOME_CARD_CUSTOM_SOUNDS_EVERYWHERE,
      subtitle: h.default.Messages.NITRO_HOME_CARD_USE_CUSTOM_SOUNDS,
      perkImage: (0, g.getThemedImage)(t, x, v),
      description: h.default.Messages.NITRO_HOME_CARD_INCLUDED_WITH_ONLY_NITRO
    },
    specialStickerAccess: {
      name: "specialStickerAccess",
      title: h.default.Messages.PREMIUM_MARKETING_STICKER_PERK_TITLE,
      subtitle: h.default.Messages.PREMIUM_MARKETING_STICKER_PERK_LONG_DESCRIPTION,
      perkImage: (0, g.getThemedImage)(t, D, Z),
      description: h.default.Messages.NITRO_HOME_CARD_INCLUDED_WITH_BASIC_AND_NITRO
    },
    largeUploads: {
      name: "largeUploads",
      title: h.default.Messages.PREMIUM_MARKETING_UPLOADS_SMALL_PERK_TITLE.format({
        premiumMaxSize: s
      }),
      subtitle: h.default.Messages.NITRO_HOME_UPLOAD_ALL_YOU_WANT,
      perkImage: ee,
      description: h.default.Messages.NITRO_HOME_CARD_UPLOAD_POWER
    },
    hdVideo: {
      name: "hdVideo",
      title: h.default.Messages.PREMIUM_MARKETING_FEATURE_PREMIUM_GO_LIVE_TITLE,
      subtitle: h.default.Messages.PREMIUM_MARKETING_STREAMING_SMALL_PERK_DESCRIPTION,
      perkImage: J,
      description: h.default.Messages.NITRO_HOME_STREAM_UP_TO_4K
    }
  };
  if (null != en) {
    let {
      title: t,
      subtitle: s,
      description: a,
      pillText: r,
      ctaDescription: n
    } = en;
    ed.freeBoost = {
      name: "freeBoost",
      title: t,
      subtitle: s,
      description: a,
      perkComponent: (0, i.jsx)(p.default, {}),
      descriptionCta: n,
      onCtaClick: () => {
        o.default.open(P.UserSettingsSections.GUILD_BOOSTING, null, {
          analyticsLocations: e
        })
      },
      cardVariant: C.CardVariants.REWARD,
      pillText: r,
      dismissibleContentType: l.DismissibleContent.TENURE_REWARD_REDEEMABLE_CONFETTI
    }
  }
  let ec = (0, T.default)("usePerksDiscoverabilityCard"),
    e_ = ec === T.CollectiblesShopMarketingVariants.SHY;
  return e_ && (ed.shyProject = {
    name: "shyProject",
    title: h.default.Messages.NITRO_HOME_SHY_PROJECT_TITLE,
    subtitle: h.default.Messages.NITRO_HOME_SHY_PROJECT_SUBTITLE,
    description: es ? h.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_SUB : h.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_NON_SUB,
    descriptionCta: h.default.Messages.VISIT_THE_SHOP_CTA,
    onCtaClick: es ? eu : void 0,
    perkImage: z,
    isPremiumGetCta: !es
  }), ed
}