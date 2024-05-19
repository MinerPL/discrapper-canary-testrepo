"use strict";
s.r(t), s.d(t, {
  PerksDiscoverabilityCardTypes: function() {
    return r
  }
});
var a, r, i = s("735250");
s("470079");
var n = s("399606"),
  l = s("524437"),
  o = s("230711"),
  u = s("410030"),
  d = s("100527"),
  c = s("906732"),
  _ = s("779618"),
  E = s("335131"),
  T = s("300284"),
  I = s("547972"),
  R = s("131951"),
  f = s("78839"),
  S = s("63063"),
  m = s("74538"),
  A = s("466010"),
  N = s("494127"),
  p = s("314684"),
  g = s("687362"),
  C = s("119269"),
  P = s("391110"),
  O = s("75077"),
  M = s("474936"),
  h = s("981631"),
  L = s("526761"),
  x = s("332325"),
  v = s("689938"),
  b = s("660372"),
  D = s("926433"),
  U = s("302036"),
  j = s("994554"),
  G = s("704565"),
  y = s("393305"),
  B = s("338879"),
  k = s("203302"),
  H = s("766491"),
  F = s("193943"),
  w = s("707046"),
  W = s("488459"),
  K = s("334347"),
  V = s("132015"),
  Y = s("142416"),
  z = s("607762"),
  X = s("474106"),
  Q = s("192537"),
  J = s("567452"),
  Z = s("572501"),
  q = s("755590"),
  $ = s("637810"),
  ee = s("570423"),
  et = s("912429"),
  es = s("91394"),
  ea = s("209672"),
  er = s("698173"),
  ei = s("926262");
(a = r || (r = {})).AVATAR_DECORATIONS = "avatarDecorations", a.CLIENT_THEMES = "clientThemes", a.CLIPS = "clips", a.EARLY_ACCESS = "earlyAccess", a.ENTRANCE_SOUNDS = "entranceSounds", a.PROFILE_EFFECTS = "profileEffects", a.PROFILES = "profiles", a.REMIXING = "remixing", a.SERVER_BOOSTS = "serverBoosts", a.SPECIAL_MEMBER_PRICING = "specialMemberPricing", a.SPECIAL_MEMBER_PRICING_SEE_ALL_VARIANT = "specialMemberPricingSeeAllVariant", a.SPECIAL_SHOP_PERKS = "specialShopPerks", a.UNLIMITED_SUPER_REACTIONS = "unlimitedSuperReactions", a.SUPER_REACTIONS = "superReactions", a.UPCOMING_DROP_UNTIMED = "upcomingDropUntimed", a.CUSTOM_APP_ICONS = "customAppIcons", a.MORE_EMOJI_POWER = "moreEmojiPower", a.CUSTOM_SOUNDS_EVERYWHERE = "customSoundsEverywhere", a.SPECIAL_STICKER_ACCESS = "specialStickerAccess", a.LARGE_UPLOADS = "largeUploads", a.HD_VIDEO = "hdVideo", a.BADGE = "badge", a.ENTRANCE_SOUNDS_SEE_ALL_VARIATION = "entranceSoundsSeeAllVariation", a.EARLY_ACCESS_SEE_ALL_VARIATION = "earlyAccessSeeAllVariant", a.FREE_BOOST = "freeBoost", a.CUSTOM_NOTIFICATION_SOUNDS = "customNotificationSounds", a.REFERRAL_PROGRAM = "referralProgram", a.NEW_APP_STYLES_UPDATE_JUNE_2024 = "newAppStylesUpdateJune2024";
t.default = () => {
  let {
    analyticsLocations: e
  } = (0, c.default)(d.default.PREMIUM_MARKETING_PERK_CARD), t = (0, u.default)(), s = v.default.Messages.FILE_UPLOAD_LIMIT_PREMIUM_TIER_2_INCREASE, a = (0, n.useStateFromStores)([f.default], () => f.default.getPremiumTypeSubscription()), r = null != a ? m.default.getPremiumPlanItem(a) : null, en = (null != r ? m.default.getSkuIdForPlan(r.planId) : null) === M.PremiumSubscriptionSKUs.TIER_2, {
    flipped: el
  } = (0, N.useWhatsNewAvatarDecoRollout)(), {
    flipped: eo
  } = (0, N.useWhatsNewProfileFXRollout)(), eu = (0, p.useFreeBoostDaysPercentage)({
    showAnimations: !0
  }), ed = null != eu ? eu.initialPercentage : void 0, ec = null != eu ? eu.percentage : void 0, e_ = (0, _.default)(R.default), eE = (0, g.default)(), {
    canFlipReferralProgramCard: eT,
    canFlipAppStylesCard: eI,
    canFlipCustomNotificationSoundsCard: eR
  } = A.June2024MarketingMoment.useExperiment({
    location: "usePerksDiscoverabilityCards"
  }, {
    autoTrackExposure: !1
  }), ef = (0, T.default)({
    scrollPosition: L.ProfileCustomizationScrollPositions.TRY_IT_OUT,
    analyticsLocations: e
  }), eS = () => {
    o.default.open(h.UserSettingsSections.VOICE, L.SOUNDBOARD_SUBSECTION, {
      openWithoutBackstack: !0,
      analyticsLocations: e
    })
  }, em = () => {
    (0, E.openCollectiblesShop)({
      analyticsLocations: e,
      analyticsSource: d.default.PREMIUM_MARKETING_PERK_CARD
    })
  }, eA = () => {
    o.default.open(h.UserSettingsSections.APPEARANCE, null, {
      scrollPosition: L.AppearanceScrollPositions.CUSTOM_APP_ICONS
    })
  }, eN = {
    avatarDecorations: en ? {
      name: "avatarDecorations",
      title: v.default.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_TITLE,
      subtitle: v.default.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_SUBTITLE_SUB,
      description: v.default.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_DESCRIPTION_SUB,
      descriptionCta: v.default.Messages.VISIT_THE_SHOP_CTA,
      onCtaClick: em,
      pillText: v.default.Messages.EARLY_ACCESS,
      perkImage: k,
      canReveal: el,
      dismissibleContentType: l.DismissibleContent.WHATS_NEW_AVATAR_DECOS_FLIP
    } : {
      name: "avatarDecorations",
      title: v.default.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_TITLE,
      subtitle: v.default.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_SUBTITLE_NON_SUB,
      description: v.default.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_DESCRIPTION_NON_SUB,
      pillText: v.default.Messages.EARLY_ACCESS,
      perkImage: k,
      canReveal: el,
      dismissibleContentType: l.DismissibleContent.WHATS_NEW_AVATAR_DECOS_FLIP
    },
    clientThemes: {
      name: "clientThemes",
      title: v.default.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_THEMES_TITLE,
      subtitle: v.default.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_THEMES_SUBTITLE,
      description: v.default.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_THEMES_DESCRIPTION,
      descriptionCta: v.default.Messages.TAKE_ME_THERE,
      onCtaClick: () => {
        o.default.open(h.UserSettingsSections.APPEARANCE, null, {
          openWithoutBackstack: !0,
          analyticsLocations: e
        })
      },
      perkImage: G
    },
    clips: en ? {
      name: "clips",
      title: v.default.Messages.CLIPS,
      subtitle: v.default.Messages.PREMIUM_MARKETING_WHATS_NEW_CLIPS_SUBTITLE,
      description: v.default.Messages.PREMIUM_MARKETING_WHATS_NEW_CLIPS_DESCRIPTION_SUB,
      descriptionCta: e_ ? v.default.Messages.TAKE_ME_THERE : v.default.Messages.LEARN_MORE,
      pillText: v.default.Messages.EARLY_ACCESS,
      onCtaClick: e_ ? () => {
        (0, I.default)(x.GameSettingsTab.CLIPS, {
          openWithoutBackstack: !0,
          analyticsLocations: e
        })
      } : () => {
        window.open(S.default.getArticleURL(h.HelpdeskArticles.CLIPS), "_blank")
      },
      perkImage: H
    } : {
      name: "clips",
      title: v.default.Messages.CLIPS,
      subtitle: v.default.Messages.PREMIUM_MARKETING_WHATS_NEW_CLIPS_SUBTITLE,
      description: v.default.Messages.PREMIUM_MARKETING_WHATS_NEW_CLIPS_DESCRIPTION_NON_SUB,
      pillText: v.default.Messages.EARLY_ACCESS,
      perkImage: H
    },
    earlyAccess: en ? {
      name: "earlyAccess",
      title: v.default.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_TITLE,
      subtitle: v.default.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_SUBTITLE_V2,
      description: v.default.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_DESCRIPTION_SUB,
      perkImage: w
    } : {
      name: "earlyAccess",
      title: v.default.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_TITLE,
      subtitle: v.default.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_SUBTITLE_V2,
      description: v.default.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_DESCRIPTION_NON_SUB,
      isPremiumGetCta: !0,
      perkImage: w
    },
    earlyAccessSeeAllVariant: en ? {
      name: "earlyAccessSeeAllVariant",
      title: v.default.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_TITLE,
      subtitle: v.default.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_SUBTITLE_V2,
      description: v.default.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_DESCRIPTION_SUB,
      perkImage: W
    } : {
      name: "earlyAccess",
      title: v.default.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_TITLE,
      subtitle: v.default.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_SUBTITLE_V2,
      description: v.default.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_DESCRIPTION_NON_SUB,
      isPremiumGetCta: !0,
      perkImage: W
    },
    entranceSounds: en ? {
      name: "entranceSounds",
      title: v.default.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_TITLE,
      subtitle: v.default.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_SUBTITLE,
      description: v.default.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_DESCRIPTION_SUB,
      descriptionCta: v.default.Messages.TAKE_ME_THERE,
      onCtaClick: eS,
      perkImage: V
    } : {
      name: "entranceSounds",
      title: v.default.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_TITLE,
      subtitle: v.default.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_SUBTITLE,
      description: v.default.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_DESCRIPTION_NON_SUB,
      perkImage: V
    },
    entranceSoundsSeeAllVariation: en ? {
      name: "entranceSoundsSeeAllVariation",
      title: v.default.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_TITLE,
      subtitle: v.default.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_SUBTITLE,
      description: v.default.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_DESCRIPTION_SUB,
      descriptionCta: v.default.Messages.TAKE_ME_THERE,
      onCtaClick: eS,
      perkImage: Y
    } : {
      name: "entranceSoundsSeeAllVariation",
      title: v.default.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_TITLE,
      subtitle: v.default.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_SUBTITLE,
      description: v.default.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_DESCRIPTION_NON_SUB,
      perkImage: Y
    },
    profileEffects: en ? {
      name: "profileEffects",
      title: v.default.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_TITLE,
      subtitle: v.default.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_SUBTITLE,
      description: v.default.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_DESCRIPTION_SUB,
      descriptionCta: v.default.Messages.VISIT_THE_SHOP_CTA,
      onCtaClick: em,
      pillText: v.default.Messages.EARLY_ACCESS,
      perkImage: J,
      canReveal: eo,
      dismissibleContentType: l.DismissibleContent.WHATS_NEW_PROFILE_EFFECTS_FLIP
    } : {
      name: "profileEffects",
      title: v.default.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_TITLE,
      subtitle: v.default.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_SUBTITLE,
      description: v.default.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_DESCRIPTION_NON_SUB,
      pillText: v.default.Messages.EARLY_ACCESS,
      perkImage: J,
      canReveal: eo,
      dismissibleContentType: l.DismissibleContent.WHATS_NEW_PROFILE_EFFECTS_FLIP
    },
    profiles: {
      name: "profiles",
      title: v.default.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_PROFILES_TITLE,
      subtitle: v.default.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_PROFILES_SUBTITLE,
      description: v.default.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_PROFILES_DESCRIPTION,
      descriptionCta: v.default.Messages.TAKE_ME_THERE,
      onCtaClick: ef,
      perkImage: y
    },
    remixing: en ? {
      name: "remixing",
      title: v.default.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_TITLE,
      subtitle: v.default.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_SUBTITLE,
      description: v.default.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_DESCRIPTION_SUB,
      perkImage: q,
      pillText: v.default.Messages.EARLY_ACCESS
    } : {
      name: "remixing",
      title: v.default.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_TITLE,
      subtitle: v.default.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_SUBTITLE,
      description: v.default.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_DESCRIPTION_NON_SUB,
      perkImage: q,
      pillText: v.default.Messages.EARLY_ACCESS
    },
    serverBoosts: {
      name: "serverBoosts",
      title: v.default.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_BOOSTS_TITLE,
      subtitle: v.default.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_BOOSTS_SUBTITLE,
      description: v.default.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_BOOSTS_DESCRIPTION,
      descriptionCta: v.default.Messages.TAKE_ME_THERE,
      onCtaClick: () => {
        o.default.open(h.UserSettingsSections.GUILD_BOOSTING, null, {
          openWithoutBackstack: !0,
          analyticsLocations: e
        })
      },
      perkImage: B,
      hideOnNarrowScreen: !0
    },
    specialMemberPricing: en ? {
      name: "specialMemberPricing",
      title: v.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_TITLE,
      subtitle: v.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_SUBTITLE_V2,
      description: v.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_SUB,
      descriptionCta: v.default.Messages.VISIT_THE_SHOP_CTA,
      onCtaClick: em,
      perkImage: $
    } : {
      name: "specialMemberPricing",
      title: v.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_TITLE,
      subtitle: v.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_SUBTITLE_V2,
      description: v.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_NON_SUB,
      isPremiumGetCta: !0,
      perkImage: $
    },
    specialMemberPricingSeeAllVariant: en ? {
      name: "specialMemberPricingSeeAllVariant",
      title: v.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_TITLE,
      subtitle: v.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_SUBTITLE_V2,
      description: v.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_SUB,
      descriptionCta: v.default.Messages.VISIT_THE_SHOP_CTA,
      onCtaClick: em,
      perkImage: ee
    } : {
      name: "specialMemberPricingSeeAllVariant",
      title: v.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_TITLE,
      subtitle: v.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_SUBTITLE_V2,
      description: v.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_NON_SUB,
      isPremiumGetCta: !0,
      perkImage: ee
    },
    specialShopPerks: en ? {
      name: "specialShopPerks",
      title: v.default.Messages.PREMIUM_MARKETING_WHATS_NEW_SPECIAL_SHOP_PERKS_TITLE,
      subtitle: v.default.Messages.PREMIUM_MARKETING_WHATS_NEW_SPECIAL_SHOP_PERKS_SUBTITLE,
      description: v.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_SUB,
      descriptionCta: v.default.Messages.VISIT_THE_SHOP_CTA,
      onCtaClick: em,
      perkImage: $
    } : {
      name: "specialShopPerks",
      title: v.default.Messages.PREMIUM_MARKETING_WHATS_NEW_SPECIAL_SHOP_PERKS_TITLE,
      subtitle: v.default.Messages.PREMIUM_MARKETING_WHATS_NEW_SPECIAL_SHOP_PERKS_SUBTITLE,
      description: v.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_NON_SUB,
      descriptionCta: v.default.Messages.VISIT_THE_SHOP_CTA,
      onCtaClick: em,
      perkImage: $
    },
    unlimitedSuperReactions: en ? {
      name: "unlimitedSuperReactions",
      title: v.default.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_TITLE,
      subtitle: v.default.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_SUBTITLE,
      description: v.default.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_DESCRIPTION_SUB,
      perkImage: er,
      hideOnNarrowScreen: !0
    } : {
      name: "unlimitedSuperReactions",
      title: v.default.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_TITLE,
      subtitle: v.default.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_SUBTITLE,
      description: v.default.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_DESCRIPTION_NON_SUB,
      isPremiumGetCta: !0,
      perkImage: er,
      hideOnNarrowScreen: !0
    },
    superReactions: {
      name: "superReactions",
      title: v.default.Messages.NITRO_HOME_SUPER_REACTIONS,
      subtitle: v.default.Messages.NITRO_HOME_SUPER_REACTIONS_DESCRIPTION,
      description: v.default.Messages.NITRO_HOME_CARD_INCLUDED_WITH_BASIC_AND_NITRO,
      perkImage: ea
    },
    upcomingDropUntimed: {
      name: "upcomingDropUntimed",
      title: v.default.Messages.NEW_DROP,
      pillText: v.default.Messages.COMING_SOON,
      backgroundImage: X
    },
    badge: {
      name: "badge",
      title: v.default.Messages.NITRO_HOME_SUBSCRIBER_BADGE,
      subtitle: v.default.Messages.NITRO_HOME_GET_THIS_SUBSCRIBER_BADGE,
      perkImage: b,
      description: v.default.Messages.NITRO_HOME_SUBSCRIBER_BADGE_FOR_THE_COLLECTORS
    },
    customAppIcons: {
      name: "customAppIcons",
      title: v.default.Messages.PREMIUM_MARKETING_FEATURE_CUSTOM_APP_ICONS_TITLE,
      subtitle: v.default.Messages.PREMIUM_MARKETING_FEATURE_CUSTOM_APP_ICONS_DESCRIPTION,
      perkImage: F,
      description: v.default.Messages.NITRO_HOME_CARD_INCLUDED_WITH_BASIC_AND_NITRO,
      descriptionCta: v.default.Messages.TAKE_ME_THERE,
      onCtaClick: eA
    },
    moreEmojiPower: {
      name: "moreEmojiPower",
      title: v.default.Messages.PREMIUM_MARKETING_FEATURE_EMOJI_TITLE,
      subtitle: v.default.Messages.PREMIUM_MARKETING_EMOJI_PERK_TITLE,
      perkImage: K,
      description: v.default.Messages.NITRO_HOME_CARD_CHOOSE_CUSTOM_EMOJI
    },
    customSoundsEverywhere: {
      name: "customSoundsEverywhere",
      title: v.default.Messages.NITRO_HOME_CARD_CUSTOM_SOUNDS_EVERYWHERE,
      subtitle: v.default.Messages.NITRO_HOME_CARD_USE_CUSTOM_SOUNDS,
      perkImage: (0, O.getThemedImage)(t, D, U),
      description: v.default.Messages.NITRO_HOME_CARD_INCLUDED_WITH_ONLY_NITRO
    },
    specialStickerAccess: {
      name: "specialStickerAccess",
      title: v.default.Messages.PREMIUM_MARKETING_STICKER_PERK_TITLE,
      subtitle: v.default.Messages.PREMIUM_MARKETING_STICKER_PERK_LONG_DESCRIPTION,
      perkImage: (0, O.getThemedImage)(t, j, et),
      description: v.default.Messages.NITRO_HOME_CARD_INCLUDED_WITH_BASIC_AND_NITRO
    },
    largeUploads: {
      name: "largeUploads",
      title: v.default.Messages.PREMIUM_MARKETING_UPLOADS_SMALL_PERK_TITLE.format({
        premiumMaxSize: s
      }),
      subtitle: v.default.Messages.NITRO_HOME_UPLOAD_ALL_YOU_WANT,
      perkImage: ei,
      description: v.default.Messages.NITRO_HOME_CARD_UPLOAD_POWER
    },
    hdVideo: {
      name: "hdVideo",
      title: v.default.Messages.PREMIUM_MARKETING_FEATURE_PREMIUM_GO_LIVE_TITLE,
      subtitle: v.default.Messages.PREMIUM_MARKETING_STREAMING_SMALL_PERK_DESCRIPTION,
      perkImage: es,
      description: v.default.Messages.NITRO_HOME_STREAM_UP_TO_4K
    },
    newAppStylesUpdateJune2024: {
      name: "newAppStylesUpdateJune2024",
      title: v.default.Messages.PREMIUM_MARKETING_WHATS_NEW_NEW_APP_STYLES_TITLE,
      subtitle: v.default.Messages.PREMIUM_MARKETING_WHATS_NEW_NEW_APP_STYLES_SUBTITLE,
      description: v.default.Messages.PREMIUM_MARKETING_WHATS_NEW_NEW_APP_STYLES_DESCRIPTION,
      descriptionCta: en ? v.default.Messages.PREMIUM_MARKETING_WHATS_NEW_NITRO_NEW_APP_STYLES : v.default.Messages.PREMIUM_MARKETING_WHATS_NEW_NON_NITRO_NEW_APP_STYLES,
      isPremiumGetCta: !en,
      onCtaClick: en ? eA : void 0,
      perkImage: z,
      canReveal: eI,
      dismissibleContentType: l.DismissibleContent.WHATS_NEW_APP_STYLES_JUNE_2024_FLIP
    },
    customNotificationSounds: {
      name: "customNotificationSounds",
      title: v.default.Messages.PREMIUM_MARKETING_WHATS_NEW_CUSTOM_NOTIFICATION_TITLE,
      subtitle: v.default.Messages.PREMIUM_MARKETING_WHATS_NEW_CUSTOM_NOTIFICATION_SUBTITLE,
      description: v.default.Messages.PREMIUM_MARKETING_WHATS_NEW_CUSTOM_NOTIFICATION_DESCRIPTION,
      descriptionCta: en ? v.default.Messages.PREMIUM_MARKETING_WHATS_NEW_NITRO_CUSTOM_NOTIFICATION_DESCRIPTION : v.default.Messages.PREMIUM_MARKETING_WHATS_NEW_NON_NITRO_CUSTOM_NOTIFICATION_DESCRIPTION,
      isPremiumGetCta: !en || void 0,
      perkImage: Q,
      canReveal: eR,
      dismissibleContentType: l.DismissibleContent.WHATS_NEW_CUSTOM_NOTIFICATION_SOUNDS_FLIP
    },
    referralProgram: {
      name: "referralProgram",
      title: v.default.Messages.PREMIUM_MARKETING_WHATS_NEW_REFERRAL_PROGRAM_TITLE,
      subtitle: v.default.Messages.PREMIUM_MARKETING_WHATS_NEW_REFERRAL_PROGRAM_SUBTITLE,
      description: v.default.Messages.PREMIUM_MARKETING_WHATS_NEW_REFERRAL_PROGRAM_DESCRIPTION.format({
        helpdeskArticle: S.default.getArticleURL(h.HelpdeskArticles.REFERRAL_PROGRAM)
      }),
      descriptionCta: v.default.Messages.MARKETING_PAGE_CTA_GET_NITRO,
      isPremiumGetCta: !0,
      perkImage: Z,
      canReveal: eT,
      dismissibleContentType: l.DismissibleContent.WHATS_NEW_REFERRAL_PROGRAM_FLIP
    }
  };
  if (null != eE) {
    let {
      title: t,
      subtitle: s,
      description: a,
      pillText: r,
      ctaDescription: n,
      dismissibleContentType: l
    } = eE, u = (0, i.jsx)(C.default, {
      showAnimations: !0,
      percentage: ec,
      initialPercentage: ed
    });
    eN.freeBoost = {
      name: "freeBoost",
      title: t,
      subtitle: s,
      description: a,
      perkComponent: u,
      descriptionCta: n,
      onCtaClick: () => {
        o.default.open(h.UserSettingsSections.GUILD_BOOSTING, null, {
          analyticsLocations: e
        })
      },
      cardVariant: P.CardVariants.REWARD,
      pillText: r,
      dismissibleContentType: l
    }
  }
  return eN
}