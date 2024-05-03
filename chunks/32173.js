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
  T = s("410154"),
  I = s("300284"),
  R = s("547972"),
  f = s("131951"),
  S = s("78839"),
  m = s("63063"),
  A = s("74538"),
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
  y = s("704565"),
  B = s("393305"),
  G = s("338879"),
  k = s("203302"),
  H = s("766491"),
  F = s("193943"),
  w = s("707046"),
  K = s("488459"),
  W = s("334347"),
  V = s("132015"),
  Y = s("142416"),
  z = s("474106"),
  X = s("567452"),
  Q = s("755590"),
  Z = s("529018"),
  J = s("637810"),
  q = s("570423"),
  $ = s("912429"),
  ee = s("91394"),
  et = s("209672"),
  es = s("698173"),
  ea = s("926262");
let er = new Date("2024-05-07T03:59:00Z");
(a = r || (r = {})).AVATAR_DECORATIONS = "avatarDecorations", a.CLIENT_THEMES = "clientThemes", a.CLIPS = "clips", a.EARLY_ACCESS = "earlyAccess", a.ENTRANCE_SOUNDS = "entranceSounds", a.PROFILE_EFFECTS = "profileEffects", a.PROFILES = "profiles", a.REMIXING = "remixing", a.SERVER_BOOSTS = "serverBoosts", a.SPECIAL_MEMBER_PRICING = "specialMemberPricing", a.SPECIAL_MEMBER_PRICING_SEE_ALL_VARIANT = "specialMemberPricingSeeAllVariant", a.SPECIAL_SHOP_PERKS = "specialShopPerks", a.UNLIMITED_SUPER_REACTIONS = "unlimitedSuperReactions", a.SUPER_REACTIONS = "superReactions", a.UPCOMING_DROP_UNTIMED = "upcomingDropUntimed", a.CUSTOM_APP_ICONS = "customAppIcons", a.MORE_EMOJI_POWER = "moreEmojiPower", a.CUSTOM_SOUNDS_EVERYWHERE = "customSoundsEverywhere", a.SPECIAL_STICKER_ACCESS = "specialStickerAccess", a.LARGE_UPLOADS = "largeUploads", a.HD_VIDEO = "hdVideo", a.BADGE = "badge", a.ENTRANCE_SOUNDS_SEE_ALL_VARIATION = "entranceSoundsSeeAllVariation", a.EARLY_ACCESS_SEE_ALL_VARIATION = "earlyAccessSeeAllVariant", a.FREE_BOOST = "freeBoost", a.SHY_PROJECT = "shyProject";
t.default = () => {
  let {
    analyticsLocations: e
  } = (0, c.default)(d.default.PREMIUM_MARKETING_PERK_CARD), t = (0, u.default)(), s = v.default.Messages.FILE_UPLOAD_LIMIT_PREMIUM_TIER_2_INCREASE, a = (0, n.useStateFromStores)([S.default], () => S.default.getPremiumTypeSubscription()), r = null != a ? A.default.getPremiumPlanItem(a) : null, ei = (null != r ? A.default.getSkuIdForPlan(r.planId) : null) === M.PremiumSubscriptionSKUs.TIER_2, {
    flipped: en
  } = (0, N.useWhatsNewAvatarDecoRollout)(), {
    flipped: el
  } = (0, N.useWhatsNewProfileFXRollout)(), eo = (0, p.useFreeBoostDaysPercentage)({
    showAnimations: !0
  }), eu = null != eo ? eo.initialPercentage : void 0, ed = null != eo ? eo.percentage : void 0, ec = (0, _.default)(f.default), e_ = (0, g.default)(), eE = (0, I.default)({
    scrollPosition: L.ProfileCustomizationScrollPositions.TRY_IT_OUT,
    analyticsLocations: e
  }), eT = () => {
    o.default.open(h.UserSettingsSections.VOICE, L.SOUNDBOARD_SUBSECTION, {
      openWithoutBackstack: !0,
      analyticsLocations: e
    })
  }, eI = () => {
    (0, E.openCollectiblesShop)({
      analyticsLocations: e,
      analyticsSource: d.default.PREMIUM_MARKETING_PERK_CARD
    })
  }, eR = {
    avatarDecorations: ei ? {
      name: "avatarDecorations",
      title: v.default.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_TITLE,
      subtitle: v.default.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_SUBTITLE_SUB,
      description: v.default.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_DESCRIPTION_SUB,
      descriptionCta: v.default.Messages.VISIT_THE_SHOP_CTA,
      onCtaClick: eI,
      pillText: v.default.Messages.EARLY_ACCESS,
      perkImage: k,
      canReveal: en,
      dismissibleContentType: l.DismissibleContent.WHATS_NEW_AVATAR_DECOS_FLIP
    } : {
      name: "avatarDecorations",
      title: v.default.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_TITLE,
      subtitle: v.default.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_SUBTITLE_NON_SUB,
      description: v.default.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_DESCRIPTION_NON_SUB,
      pillText: v.default.Messages.EARLY_ACCESS,
      perkImage: k,
      canReveal: en,
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
      perkImage: y
    },
    clips: ei ? {
      name: "clips",
      title: v.default.Messages.CLIPS,
      subtitle: v.default.Messages.PREMIUM_MARKETING_WHATS_NEW_CLIPS_SUBTITLE,
      description: v.default.Messages.PREMIUM_MARKETING_WHATS_NEW_CLIPS_DESCRIPTION_SUB,
      descriptionCta: ec ? v.default.Messages.TAKE_ME_THERE : v.default.Messages.LEARN_MORE,
      pillText: v.default.Messages.EARLY_ACCESS,
      onCtaClick: ec ? () => {
        (0, R.default)(x.GameSettingsTab.CLIPS, {
          openWithoutBackstack: !0,
          analyticsLocations: e
        })
      } : () => {
        window.open(m.default.getArticleURL(h.HelpdeskArticles.CLIPS), "_blank")
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
    earlyAccess: ei ? {
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
    earlyAccessSeeAllVariant: ei ? {
      name: "earlyAccessSeeAllVariant",
      title: v.default.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_TITLE,
      subtitle: v.default.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_SUBTITLE_V2,
      description: v.default.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_DESCRIPTION_SUB,
      perkImage: K
    } : {
      name: "earlyAccess",
      title: v.default.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_TITLE,
      subtitle: v.default.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_SUBTITLE_V2,
      description: v.default.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_DESCRIPTION_NON_SUB,
      isPremiumGetCta: !0,
      perkImage: K
    },
    entranceSounds: ei ? {
      name: "entranceSounds",
      title: v.default.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_TITLE,
      subtitle: v.default.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_SUBTITLE,
      description: v.default.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_DESCRIPTION_SUB,
      descriptionCta: v.default.Messages.TAKE_ME_THERE,
      onCtaClick: eT,
      perkImage: V
    } : {
      name: "entranceSounds",
      title: v.default.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_TITLE,
      subtitle: v.default.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_SUBTITLE,
      description: v.default.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_DESCRIPTION_NON_SUB,
      perkImage: V
    },
    entranceSoundsSeeAllVariation: ei ? {
      name: "entranceSoundsSeeAllVariation",
      title: v.default.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_TITLE,
      subtitle: v.default.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_SUBTITLE,
      description: v.default.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_DESCRIPTION_SUB,
      descriptionCta: v.default.Messages.TAKE_ME_THERE,
      onCtaClick: eT,
      perkImage: Y
    } : {
      name: "entranceSoundsSeeAllVariation",
      title: v.default.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_TITLE,
      subtitle: v.default.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_SUBTITLE,
      description: v.default.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_DESCRIPTION_NON_SUB,
      perkImage: Y
    },
    profileEffects: ei ? {
      name: "profileEffects",
      title: v.default.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_TITLE,
      subtitle: v.default.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_SUBTITLE,
      description: v.default.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_DESCRIPTION_SUB,
      descriptionCta: v.default.Messages.VISIT_THE_SHOP_CTA,
      onCtaClick: eI,
      pillText: v.default.Messages.EARLY_ACCESS,
      perkImage: X,
      canReveal: el,
      dismissibleContentType: l.DismissibleContent.WHATS_NEW_PROFILE_EFFECTS_FLIP
    } : {
      name: "profileEffects",
      title: v.default.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_TITLE,
      subtitle: v.default.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_SUBTITLE,
      description: v.default.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_DESCRIPTION_NON_SUB,
      pillText: v.default.Messages.EARLY_ACCESS,
      perkImage: X,
      canReveal: el,
      dismissibleContentType: l.DismissibleContent.WHATS_NEW_PROFILE_EFFECTS_FLIP
    },
    profiles: {
      name: "profiles",
      title: v.default.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_PROFILES_TITLE,
      subtitle: v.default.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_PROFILES_SUBTITLE,
      description: v.default.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_PROFILES_DESCRIPTION,
      descriptionCta: v.default.Messages.TAKE_ME_THERE,
      onCtaClick: eE,
      perkImage: B
    },
    remixing: ei ? {
      name: "remixing",
      title: v.default.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_TITLE,
      subtitle: v.default.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_SUBTITLE,
      description: v.default.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_DESCRIPTION_SUB,
      perkImage: Q,
      pillText: v.default.Messages.EARLY_ACCESS
    } : {
      name: "remixing",
      title: v.default.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_TITLE,
      subtitle: v.default.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_SUBTITLE,
      description: v.default.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_DESCRIPTION_NON_SUB,
      perkImage: Q,
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
      perkImage: G,
      hideOnNarrowScreen: !0
    },
    specialMemberPricing: ei ? {
      name: "specialMemberPricing",
      title: v.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_TITLE,
      subtitle: v.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_SUBTITLE_V2,
      description: v.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_SUB,
      descriptionCta: v.default.Messages.VISIT_THE_SHOP_CTA,
      onCtaClick: eI,
      perkImage: J
    } : {
      name: "specialMemberPricing",
      title: v.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_TITLE,
      subtitle: v.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_SUBTITLE_V2,
      description: v.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_NON_SUB,
      isPremiumGetCta: !0,
      perkImage: J
    },
    specialMemberPricingSeeAllVariant: ei ? {
      name: "specialMemberPricingSeeAllVariant",
      title: v.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_TITLE,
      subtitle: v.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_SUBTITLE_V2,
      description: v.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_SUB,
      descriptionCta: v.default.Messages.VISIT_THE_SHOP_CTA,
      onCtaClick: eI,
      perkImage: q
    } : {
      name: "specialMemberPricingSeeAllVariant",
      title: v.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_TITLE,
      subtitle: v.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_SUBTITLE_V2,
      description: v.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_NON_SUB,
      isPremiumGetCta: !0,
      perkImage: q
    },
    specialShopPerks: ei ? {
      name: "specialShopPerks",
      title: v.default.Messages.PREMIUM_MARKETING_WHATS_NEW_SPECIAL_SHOP_PERKS_TITLE,
      subtitle: v.default.Messages.PREMIUM_MARKETING_WHATS_NEW_SPECIAL_SHOP_PERKS_SUBTITLE,
      description: v.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_SUB,
      descriptionCta: v.default.Messages.VISIT_THE_SHOP_CTA,
      onCtaClick: eI,
      perkImage: J
    } : {
      name: "specialShopPerks",
      title: v.default.Messages.PREMIUM_MARKETING_WHATS_NEW_SPECIAL_SHOP_PERKS_TITLE,
      subtitle: v.default.Messages.PREMIUM_MARKETING_WHATS_NEW_SPECIAL_SHOP_PERKS_SUBTITLE,
      description: v.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_NON_SUB,
      descriptionCta: v.default.Messages.VISIT_THE_SHOP_CTA,
      onCtaClick: eI,
      perkImage: J
    },
    unlimitedSuperReactions: ei ? {
      name: "unlimitedSuperReactions",
      title: v.default.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_TITLE,
      subtitle: v.default.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_SUBTITLE,
      description: v.default.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_DESCRIPTION_SUB,
      perkImage: es,
      hideOnNarrowScreen: !0
    } : {
      name: "unlimitedSuperReactions",
      title: v.default.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_TITLE,
      subtitle: v.default.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_SUBTITLE,
      description: v.default.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_DESCRIPTION_NON_SUB,
      isPremiumGetCta: !0,
      perkImage: es,
      hideOnNarrowScreen: !0
    },
    superReactions: {
      name: "superReactions",
      title: v.default.Messages.NITRO_HOME_SUPER_REACTIONS,
      subtitle: v.default.Messages.NITRO_HOME_SUPER_REACTIONS_DESCRIPTION,
      description: v.default.Messages.NITRO_HOME_CARD_INCLUDED_WITH_BASIC_AND_NITRO,
      perkImage: et
    },
    upcomingDropUntimed: {
      name: "upcomingDropUntimed",
      title: v.default.Messages.NEW_DROP,
      pillText: v.default.Messages.COMING_SOON,
      backgroundImage: z
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
      onCtaClick: () => {
        o.default.open(h.UserSettingsSections.APPEARANCE, null, {
          scrollPosition: L.AppearanceScrollPositions.CUSTOM_APP_ICONS
        })
      }
    },
    moreEmojiPower: {
      name: "moreEmojiPower",
      title: v.default.Messages.PREMIUM_MARKETING_FEATURE_EMOJI_TITLE,
      subtitle: v.default.Messages.PREMIUM_MARKETING_EMOJI_PERK_TITLE,
      perkImage: W,
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
      perkImage: (0, O.getThemedImage)(t, j, $),
      description: v.default.Messages.NITRO_HOME_CARD_INCLUDED_WITH_BASIC_AND_NITRO
    },
    largeUploads: {
      name: "largeUploads",
      title: v.default.Messages.PREMIUM_MARKETING_UPLOADS_SMALL_PERK_TITLE.format({
        premiumMaxSize: s
      }),
      subtitle: v.default.Messages.NITRO_HOME_UPLOAD_ALL_YOU_WANT,
      perkImage: ea,
      description: v.default.Messages.NITRO_HOME_CARD_UPLOAD_POWER
    },
    hdVideo: {
      name: "hdVideo",
      title: v.default.Messages.PREMIUM_MARKETING_FEATURE_PREMIUM_GO_LIVE_TITLE,
      subtitle: v.default.Messages.PREMIUM_MARKETING_STREAMING_SMALL_PERK_DESCRIPTION,
      perkImage: ee,
      description: v.default.Messages.NITRO_HOME_STREAM_UP_TO_4K
    }
  };
  if (null != e_) {
    let {
      title: t,
      subtitle: s,
      description: a,
      pillText: r,
      ctaDescription: n,
      dismissibleContentType: l
    } = e_, u = (0, i.jsx)(C.default, {
      showAnimations: !0,
      percentage: ed,
      initialPercentage: eu
    });
    eR.freeBoost = {
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
  return (0, T.default)("usePerksDiscoverabilityCard") === T.CollectiblesShopMarketingVariants.SHY && Date.now() < er.getTime() && (eR.shyProject = {
    name: "shyProject",
    title: v.default.Messages.NITRO_HOME_SHY_PROJECT_TITLE,
    subtitle: v.default.Messages.NITRO_HOME_SHY_PROJECT_SUBTITLE,
    description: ei ? v.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_SUB : v.default.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_NON_SUB,
    descriptionCta: v.default.Messages.VISIT_THE_SHOP_CTA,
    onCtaClick: ei ? eI : void 0,
    perkImage: Z,
    isPremiumGetCta: !ei
  }), eR
}