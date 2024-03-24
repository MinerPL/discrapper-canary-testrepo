"use strict";
s.r(t), s.d(t, {
  PerksDiscoverabilityCardTypes: function() {
    return r
  },
  default: function() {
    return $
  }
});
var a, r, n = s("37983");
s("884691");
var i = s("65597"),
  l = s("151426"),
  o = s("79112"),
  u = s("841098"),
  d = s("812204"),
  c = s("685665"),
  _ = s("18346"),
  E = s("21526"),
  T = s("38766"),
  I = s("42887"),
  f = s("521012"),
  R = s("701909"),
  S = s("719923"),
  m = s("184684"),
  N = s("502381"),
  A = s("354588"),
  p = s("907648"),
  C = s("598739"),
  g = s("646718"),
  O = s("49111"),
  P = s("397336"),
  M = s("782340"),
  h = s("574211"),
  L = s("982784"),
  x = s("19530"),
  D = s("215541"),
  v = s("571685"),
  U = s("994679"),
  b = s("620826"),
  j = s("333078"),
  B = s("156591"),
  G = s("480905"),
  y = s("913204"),
  k = s("198326"),
  H = s("761708"),
  F = s("174433"),
  w = s("828015"),
  K = s("62414"),
  W = s("613697"),
  V = s("907511"),
  Y = s("165870"),
  z = s("186590"),
  X = s("14528"),
  Q = s("925094"),
  Z = s("832085"),
  J = s("443646"),
  q = s("759308");
(a = r || (r = {})).AVATAR_DECORATIONS = "avatarDecorations", a.CLIENT_THEMES = "clientThemes", a.CLIPS = "clips", a.EARLY_ACCESS = "earlyAccess", a.ENTRANCE_SOUNDS = "entranceSounds", a.PROFILE_EFFECTS = "profileEffects", a.PROFILES = "profiles", a.REMIXING = "remixing", a.SERVER_BOOSTS = "serverBoosts", a.SPECIAL_MEMBER_PRICING = "specialMemberPricing", a.SPECIAL_MEMBER_PRICING_SEE_ALL_VARIANT = "specialMemberPricingSeeAllVariant", a.SPECIAL_SHOP_PERKS = "specialShopPerks", a.UNLIMITED_SUPER_REACTIONS = "unlimitedSuperReactions", a.SUPER_REACTIONS = "superReactions", a.UPCOMING_DROP_UNTIMED = "upcomingDropUntimed", a.CUSTOM_APP_ICONS = "customAppIcons", a.MORE_EMOJI_POWER = "moreEmojiPower", a.CUSTOM_SOUNDS_EVERYWHERE = "customSoundsEverywhere", a.SPECIAL_STICKER_ACCESS = "specialStickerAccess", a.LARGE_UPLOADS = "largeUploads", a.HD_VIDEO = "hdVideo", a.BADGE = "badge", a.ENTRANCE_SOUNDS_SEE_ALL_VARIATION = "entranceSoundsSeeAllVariation", a.EARLY_ACCESS_SEE_ALL_VARIATION = "earlyAccessSeeAllVariant", a.FREE_BOOST = "freeBoost";
var $ = () => {
  let {
    analyticsLocations: e
  } = (0, c.default)(d.default.PREMIUM_MARKETING_PERK_CARD), t = (0, u.default)(), s = M.default.Messages.FILE_UPLOAD_LIMIT_PREMIUM_TIER_2_INCREASE, a = (0, i.useStateFromStores)([f.default], () => f.default.getPremiumTypeSubscription()), r = null != a ? S.default.getPremiumPlanItem(a) : null, $ = null != r ? S.default.getSkuIdForPlan(r.planId) : null, ee = $ === g.PremiumSubscriptionSKUs.TIER_2, {
    flipped: et
  } = (0, m.useWhatsNewAvatarDecoRollout)(), {
    flipped: es
  } = (0, m.useWhatsNewProfileFXRollout)(), ea = (0, _.default)(I.default), er = (0, N.default)(), en = (0, T.default)({
    scrollPosition: P.ProfileCustomizationScrollPositions.TRY_IT_OUT,
    analyticsLocations: e
  }), ei = () => {
    o.default.open(O.UserSettingsSections.VOICE, P.SOUNDBOARD_SUBSECTION, {
      openWithoutBackstack: !0,
      analyticsLocations: e
    })
  }, el = () => {
    (0, E.openCollectiblesShop)({
      analyticsLocations: e,
      analyticsSource: d.default.PREMIUM_MARKETING_PERK_CARD
    })
  }, eo = {
    avatarDecorations: ee ? {
      name: "avatarDecorations",
      title: M.default.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_TITLE,
      subtitle: M.default.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_SUBTITLE_SUB,
      description: M.default.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_DESCRIPTION_SUB,
      descriptionCta: M.default.Messages.VISIT_THE_SHOP_CTA,
      onCtaClick: el,
      pillText: M.default.Messages.EARLY_ACCESS,
      perkImage: j,
      canReveal: et,
      dismissibleContentType: l.DismissibleContent.WHATS_NEW_AVATAR_DECOS_FLIP
    } : {
      name: "avatarDecorations",
      title: M.default.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_TITLE,
      subtitle: M.default.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_SUBTITLE_NON_SUB,
      description: M.default.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_DESCRIPTION_NON_SUB,
      pillText: M.default.Messages.EARLY_ACCESS,
      perkImage: j,
      canReveal: et,
      dismissibleContentType: l.DismissibleContent.WHATS_NEW_AVATAR_DECOS_FLIP
    },
    clientThemes: {
      name: "clientThemes",
      title: M.default.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_THEMES_TITLE,
      subtitle: M.default.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_THEMES_SUBTITLE,
      description: M.default.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_THEMES_DESCRIPTION,
      descriptionCta: M.default.Messages.TAKE_ME_THERE,
      onCtaClick: () => {
        o.default.open(O.UserSettingsSections.APPEARANCE, null, {
          openWithoutBackstack: !0,
          analyticsLocations: e
        })
      },
      perkImage: v
    },
    clips: ee ? {
      name: "clips",
      title: M.default.Messages.CLIPS,
      subtitle: M.default.Messages.PREMIUM_MARKETING_WHATS_NEW_CLIPS_SUBTITLE,
      description: M.default.Messages.PREMIUM_MARKETING_WHATS_NEW_CLIPS_DESCRIPTION_SUB,
      descriptionCta: ea ? M.default.Messages.TAKE_ME_THERE : M.default.Messages.LEARN_MORE,
      pillText: M.default.Messages.EARLY_ACCESS,
      onCtaClick: ea ? () => {
        o.default.open(O.UserSettingsSections.CLIPS, null, {
          openWithoutBackstack: !0,
          analyticsLocations: e
        })
      } : () => {
        window.open(R.default.getArticleURL(O.HelpdeskArticles.CLIPS), "_blank")
      },
      perkImage: B
    } : {
      name: "clips",
      title: M.default.Messages.CLIPS,
      subtitle: M.default.Messages.PREMIUM_MARKETING_WHATS_NEW_CLIPS_SUBTITLE,
      description: M.default.Messages.PREMIUM_MARKETING_WHATS_NEW_CLIPS_DESCRIPTION_NON_SUB,
      pillText: M.default.Messages.EARLY_ACCESS,
      perkImage: B
    },
    earlyAccess: ee ? {
      name: "earlyAccess",
      title: M.default.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_TITLE,
      subtitle: M.default.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_SUBTITLE_V2,
      description: M.default.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_DESCRIPTION_SUB,
      perkImage: y
    } : {
      name: "earlyAccess",
      title: M.default.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_TITLE,
      subtitle: M.default.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_SUBTITLE_V2,
      description: M.default.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_DESCRIPTION_NON_SUB,
      isPremiumGetCta: !0,
      perkImage: y
    },
    earlyAccessSeeAllVariant: ee ? {
      name: "earlyAccessSeeAllVariant",
      title: M.default.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_TITLE,
      subtitle: M.default.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_SUBTITLE_V2,
      description: M.default.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_DESCRIPTION_SUB,
      perkImage: k
    } : {
      name: "earlyAccess",
      title: M.default.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_TITLE,
      subtitle: M.default.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_SUBTITLE_V2,
      description: M.default.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_DESCRIPTION_NON_SUB,
      isPremiumGetCta: !0,
      perkImage: k
    },
    entranceSounds: ee ? {
      name: "entranceSounds",
      title: M.default.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_TITLE,
      subtitle: M.default.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_SUBTITLE,
      description: M.default.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_DESCRIPTION_SUB,
      descriptionCta: M.default.Messages.TAKE_ME_THERE,
      onCtaClick: ei,
      perkImage: F
    } : {
      name: "entranceSounds",
      title: M.default.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_TITLE,
      subtitle: M.default.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_SUBTITLE,
      description: M.default.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_DESCRIPTION_NON_SUB,
      perkImage: F
    },
    entranceSoundsSeeAllVariation: ee ? {
      name: "entranceSoundsSeeAllVariation",
      title: M.default.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_TITLE,
      subtitle: M.default.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_SUBTITLE,
      description: M.default.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_DESCRIPTION_SUB,
      descriptionCta: M.default.Messages.TAKE_ME_THERE,
      onCtaClick: ei,
      perkImage: w
    } : {
      name: "entranceSoundsSeeAllVariation",
      title: M.default.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_TITLE,
      subtitle: M.default.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_SUBTITLE,
      description: M.default.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_DESCRIPTION_NON_SUB,
      perkImage: w
    },
    profileEffects: ee ? {
      name: "profileEffects",
      title: M.default.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_TITLE,
      subtitle: M.default.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_SUBTITLE,
      description: M.default.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_DESCRIPTION_SUB,
      descriptionCta: M.default.Messages.VISIT_THE_SHOP_CTA,
      onCtaClick: el,
      pillText: M.default.Messages.EARLY_ACCESS,
      perkImage: W,
      canReveal: es,
      dismissibleContentType: l.DismissibleContent.WHATS_NEW_PROFILE_EFFECTS_FLIP
    } : {
      name: "profileEffects",
      title: M.default.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_TITLE,
      subtitle: M.default.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_SUBTITLE,
      description: M.default.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_DESCRIPTION_NON_SUB,
      pillText: M.default.Messages.EARLY_ACCESS,
      perkImage: W,
      canReveal: es,
      dismissibleContentType: l.DismissibleContent.WHATS_NEW_PROFILE_EFFECTS_FLIP
    },
    profiles: {
      name: "profiles",
      title: M.default.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_PROFILES_TITLE,
      subtitle: M.default.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_PROFILES_SUBTITLE,
      description: M.default.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_PROFILES_DESCRIPTION,
      descriptionCta: M.default.Messages.TAKE_ME_THERE,
      onCtaClick: en,
      perkImage: U
    },
    remixing: ee ? {
      name: "remixing",
      title: M.default.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_TITLE,
      subtitle: M.default.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_SUBTITLE,
      description: M.default.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_DESCRIPTION_SUB,
      perkImage: V,
      pillText: M.default.Messages.EARLY_ACCESS
    } : {
      name: "remixing",
      title: M.default.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_TITLE,
      subtitle: M.default.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_SUBTITLE,
      description: M.default.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_DESCRIPTION_NON_SUB,
      perkImage: V,
      pillText: M.default.Messages.EARLY_ACCESS
    },
    serverBoosts: {
      name: "serverBoosts",
      title: M.default.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_BOOSTS_TITLE,
      subtitle: M.default.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_BOOSTS_SUBTITLE,
      description: M.default.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_BOOSTS_DESCRIPTION,
      descriptionCta: M.default.Messages.TAKE_ME_THERE,
      onCtaClick: () => {
        o.default.open(O.UserSettingsSections.GUILD_BOOSTING, null, {
          openWithoutBackstack: !0,
          analyticsLocations: e
        })
      },
      perkImage: b,
      hideOnNarrowScreen: !0
    },
    specialMemberPricing: ee ? {
      name: "specialMemberPricing",
      title: M.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_TITLE,
      subtitle: M.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_SUBTITLE_V2,
      description: M.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_SUB,
      descriptionCta: M.default.Messages.VISIT_THE_SHOP_CTA,
      onCtaClick: el,
      perkImage: Y
    } : {
      name: "specialMemberPricing",
      title: M.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_TITLE,
      subtitle: M.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_SUBTITLE_V2,
      description: M.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_NON_SUB,
      isPremiumGetCta: !0,
      perkImage: Y
    },
    specialMemberPricingSeeAllVariant: ee ? {
      name: "specialMemberPricingSeeAllVariant",
      title: M.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_TITLE,
      subtitle: M.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_SUBTITLE_V2,
      description: M.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_SUB,
      descriptionCta: M.default.Messages.VISIT_THE_SHOP_CTA,
      onCtaClick: el,
      perkImage: z
    } : {
      name: "specialMemberPricingSeeAllVariant",
      title: M.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_TITLE,
      subtitle: M.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_SUBTITLE_V2,
      description: M.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_NON_SUB,
      isPremiumGetCta: !0,
      perkImage: z
    },
    specialShopPerks: ee ? {
      name: "specialShopPerks",
      title: M.default.Messages.PREMIUM_MARKETING_WHATS_NEW_SPECIAL_SHOP_PERKS_TITLE,
      subtitle: M.default.Messages.PREMIUM_MARKETING_WHATS_NEW_SPECIAL_SHOP_PERKS_SUBTITLE,
      description: M.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_SUB,
      descriptionCta: M.default.Messages.VISIT_THE_SHOP_CTA,
      onCtaClick: el,
      perkImage: Y
    } : {
      name: "specialShopPerks",
      title: M.default.Messages.PREMIUM_MARKETING_WHATS_NEW_SPECIAL_SHOP_PERKS_TITLE,
      subtitle: M.default.Messages.PREMIUM_MARKETING_WHATS_NEW_SPECIAL_SHOP_PERKS_SUBTITLE,
      description: M.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_NON_SUB,
      descriptionCta: M.default.Messages.VISIT_THE_SHOP_CTA,
      onCtaClick: el,
      perkImage: Y
    },
    unlimitedSuperReactions: ee ? {
      name: "unlimitedSuperReactions",
      title: M.default.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_TITLE,
      subtitle: M.default.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_SUBTITLE,
      description: M.default.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_DESCRIPTION_SUB,
      perkImage: J,
      hideOnNarrowScreen: !0
    } : {
      name: "unlimitedSuperReactions",
      title: M.default.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_TITLE,
      subtitle: M.default.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_SUBTITLE,
      description: M.default.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_DESCRIPTION_NON_SUB,
      isPremiumGetCta: !0,
      perkImage: J,
      hideOnNarrowScreen: !0
    },
    superReactions: {
      name: "superReactions",
      title: M.default.Messages.NITRO_HOME_SUPER_REACTIONS,
      subtitle: M.default.Messages.NITRO_HOME_SUPER_REACTIONS_DESCRIPTION,
      description: M.default.Messages.NITRO_HOME_CARD_INCLUDED_WITH_BASIC_AND_NITRO,
      perkImage: Z
    },
    upcomingDropUntimed: {
      name: "upcomingDropUntimed",
      title: M.default.Messages.NEW_DROP,
      pillText: M.default.Messages.COMING_SOON,
      backgroundImage: K
    },
    badge: {
      name: "badge",
      title: M.default.Messages.NITRO_HOME_SUBSCRIBER_BADGE,
      subtitle: M.default.Messages.NITRO_HOME_GET_THIS_SUBSCRIBER_BADGE,
      perkImage: h,
      description: M.default.Messages.NITRO_HOME_SUBSCRIBER_BADGE_FOR_THE_COLLECTORS
    },
    customAppIcons: {
      name: "customAppIcons",
      title: M.default.Messages.PREMIUM_MARKETING_FEATURE_CUSTOM_APP_ICONS_TITLE,
      subtitle: M.default.Messages.PREMIUM_MARKETING_FEATURE_CUSTOM_APP_ICONS_DESCRIPTION,
      perkImage: G,
      description: M.default.Messages.NITRO_HOME_CARD_INCLUDED_WITH_BASIC_AND_NITRO,
      descriptionCta: M.default.Messages.TAKE_ME_THERE,
      onCtaClick: () => {
        o.default.open(O.UserSettingsSections.APPEARANCE, null, {
          scrollPosition: P.AppearanceScrollPositions.CUSTOM_APP_ICONS
        })
      }
    },
    moreEmojiPower: {
      name: "moreEmojiPower",
      title: M.default.Messages.PREMIUM_MARKETING_FEATURE_EMOJI_TITLE,
      subtitle: M.default.Messages.PREMIUM_MARKETING_EMOJI_PERK_TITLE,
      perkImage: H,
      description: M.default.Messages.NITRO_HOME_CARD_CHOOSE_CUSTOM_EMOJI
    },
    customSoundsEverywhere: {
      name: "customSoundsEverywhere",
      title: M.default.Messages.NITRO_HOME_CARD_CUSTOM_SOUNDS_EVERYWHERE,
      subtitle: M.default.Messages.NITRO_HOME_CARD_USE_CUSTOM_SOUNDS,
      perkImage: (0, C.getThemedImage)(t, L, x),
      description: M.default.Messages.NITRO_HOME_CARD_INCLUDED_WITH_ONLY_NITRO
    },
    specialStickerAccess: {
      name: "specialStickerAccess",
      title: M.default.Messages.PREMIUM_MARKETING_STICKER_PERK_TITLE,
      subtitle: M.default.Messages.PREMIUM_MARKETING_STICKER_PERK_LONG_DESCRIPTION,
      perkImage: (0, C.getThemedImage)(t, D, X),
      description: M.default.Messages.NITRO_HOME_CARD_INCLUDED_WITH_BASIC_AND_NITRO
    },
    largeUploads: {
      name: "largeUploads",
      title: M.default.Messages.PREMIUM_MARKETING_UPLOADS_SMALL_PERK_TITLE.format({
        premiumMaxSize: s
      }),
      subtitle: M.default.Messages.NITRO_HOME_UPLOAD_ALL_YOU_WANT,
      perkImage: q,
      description: M.default.Messages.NITRO_HOME_CARD_UPLOAD_POWER
    },
    hdVideo: {
      name: "hdVideo",
      title: M.default.Messages.PREMIUM_MARKETING_FEATURE_PREMIUM_GO_LIVE_TITLE,
      subtitle: M.default.Messages.PREMIUM_MARKETING_STREAMING_SMALL_PERK_DESCRIPTION,
      perkImage: Q,
      description: M.default.Messages.NITRO_HOME_STREAM_UP_TO_4K
    }
  };
  if (null != er) {
    let {
      title: t,
      subtitle: s,
      description: a,
      pillText: r,
      ctaDescription: i
    } = er;
    eo.freeBoost = {
      name: "freeBoost",
      title: t,
      subtitle: s,
      description: a,
      perkComponent: (0, n.jsx)(A.default, {}),
      descriptionCta: i,
      onCtaClick: () => {
        o.default.open(O.UserSettingsSections.GUILD_BOOSTING, null, {
          analyticsLocations: e
        })
      },
      cardVariant: p.CardVariants.REWARD,
      pillText: r,
      dismissibleContentType: l.DismissibleContent.TENURE_REWARD_REDEEMABLE_CONFETTI
    }
  }
  return eo
}