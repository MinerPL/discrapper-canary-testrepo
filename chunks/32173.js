n.d(t, {
  u: function() {
return a;
  }
});
var s, a, r = n(735250);
n(470079);
var i = n(399606),
  l = n(704215),
  o = n(230711),
  c = n(410030),
  d = n(100527),
  _ = n(906732),
  u = n(779618),
  E = n(300284),
  T = n(703656),
  I = n(547972),
  R = n(131951),
  C = n(78839),
  p = n(424218),
  g = n(63063),
  A = n(380684),
  m = n(74538),
  N = n(494127),
  f = n(314684),
  S = n(687362),
  h = n(119269),
  M = n(391110),
  x = n(75077),
  b = n(474936),
  O = n(981631),
  L = n(526761),
  P = n(332325),
  v = n(689938),
  Z = n(660372),
  D = n(926433),
  B = n(302036),
  j = n(994554),
  U = n(704565),
  G = n(393305),
  y = n(338879),
  H = n(203302),
  k = n(766491),
  w = n(193943),
  F = n(707046),
  V = n(488459),
  W = n(334347),
  K = n(132015),
  Y = n(142416),
  z = n(607762),
  Q = n(474106),
  q = n(567452),
  J = n(572501),
  X = n(755590),
  $ = n(909910),
  ee = n(637810),
  et = n(570423),
  en = n(912429),
  es = n(91394),
  ea = n(209672),
  er = n(698173),
  ei = n(926262);
(s = a || (a = {})).AVATAR_DECORATIONS = 'avatarDecorations', s.CLIENT_THEMES = 'clientThemes', s.CLIPS = 'clips', s.EARLY_ACCESS = 'earlyAccess', s.ENTRANCE_SOUNDS = 'entranceSounds', s.PROFILE_EFFECTS = 'profileEffects', s.PROFILES = 'profiles', s.REMIXING = 'remixing', s.SERVER_BOOSTS = 'serverBoosts', s.SPECIAL_MEMBER_PRICING = 'specialMemberPricing', s.SPECIAL_MEMBER_PRICING_SEE_ALL_VARIANT = 'specialMemberPricingSeeAllVariant', s.SPECIAL_SHOP_PERKS = 'specialShopPerks', s.UNLIMITED_SUPER_REACTIONS = 'unlimitedSuperReactions', s.SUPER_REACTIONS = 'superReactions', s.UPCOMING_DROP_UNTIMED = 'upcomingDropUntimed', s.CUSTOM_APP_ICONS = 'customAppIcons', s.MORE_EMOJI_POWER = 'moreEmojiPower', s.CUSTOM_SOUNDS_EVERYWHERE = 'customSoundsEverywhere', s.SPECIAL_STICKER_ACCESS = 'specialStickerAccess', s.LARGE_UPLOADS = 'largeUploads', s.HD_VIDEO = 'hdVideo', s.BADGE = 'badge', s.ENTRANCE_SOUNDS_SEE_ALL_VARIATION = 'entranceSoundsSeeAllVariation', s.EARLY_ACCESS_SEE_ALL_VARIATION = 'earlyAccessSeeAllVariant', s.FREE_BOOST = 'freeBoost', s.REFERRAL_PROGRAM = 'referralProgram', s.NEW_APP_STYLES_UPDATE_JUNE_2024 = 'newAppStylesUpdateJune2024', s.SERVER_PROFILES = 'serverProfiles';
t.Z = () => {
  let {
analyticsLocations: e
  } = (0, _.ZP)(d.Z.PREMIUM_MARKETING_PERK_CARD), t = (0, c.ZP)(), n = (0, p.BU)(((0, A.Xv)() ? b.wb : b.Uq) / 1024, {
useKibibytes: !0
  }), s = (0, i.e7)([C.ZP], () => C.ZP.getPremiumTypeSubscription()), a = null != s ? m.ZP.getPremiumPlanItem(s) : null, el = null != a ? m.ZP.getSkuIdForPlan(a.planId) : null, eo = el === b.Si.TIER_2, ec = el === b.Si.TIER_0, {
flipped: ed
  } = (0, N.JP)(), {
flipped: e_
  } = (0, N.as)(), eu = (0, f.nY)({
showAnimations: !0
  }), eE = null != eu ? eu.initialPercentage : void 0, eT = null != eu ? eu.percentage : void 0, eI = (0, u.Z)(R.Z), eR = (0, S.Z)(), eC = (0, E.Z)({
scrollPosition: L.Y_.TRY_IT_OUT,
analyticsLocations: e
  }), ep = () => {
o.Z.open(O.oAB.VOICE, L.GA, {
  openWithoutBackstack: !0,
  analyticsLocations: e
});
  }, eg = () => {
(0, T.uL)(O.Z5c.COLLECTIBLES_SHOP);
  }, eA = () => {
o.Z.open(O.oAB.APPEARANCE, null, {
  scrollPosition: L.h1.CUSTOM_APP_ICONS
});
  }, em = {
avatarDecorations: eo ? {
  name: 'avatarDecorations',
  title: v.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_TITLE,
  subtitle: v.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_SUBTITLE_SUB,
  description: v.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_DESCRIPTION_SUB,
  descriptionCta: v.Z.Messages.VISIT_THE_SHOP_CTA,
  onCtaClick: eg,
  pillText: v.Z.Messages.EARLY_ACCESS,
  perkImage: H,
  canReveal: ed,
  dismissibleContentType: l.z.WHATS_NEW_AVATAR_DECOS_FLIP
} : {
  name: 'avatarDecorations',
  title: v.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_TITLE,
  subtitle: v.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_SUBTITLE_NON_SUB,
  description: v.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_DESCRIPTION_NON_SUB,
  pillText: v.Z.Messages.EARLY_ACCESS,
  perkImage: H,
  canReveal: ed,
  dismissibleContentType: l.z.WHATS_NEW_AVATAR_DECOS_FLIP
},
clientThemes: {
  name: 'clientThemes',
  title: v.Z.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_THEMES_TITLE,
  subtitle: v.Z.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_THEMES_SUBTITLE,
  description: v.Z.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_THEMES_DESCRIPTION,
  descriptionCta: v.Z.Messages.TAKE_ME_THERE,
  onCtaClick: () => {
    o.Z.open(O.oAB.APPEARANCE, null, {
      openWithoutBackstack: !0,
      analyticsLocations: e
    });
  },
  perkImage: U
},
clips: eo ? {
  name: 'clips',
  title: v.Z.Messages.CLIPS,
  subtitle: v.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_CLIPS_SUBTITLE,
  description: v.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_CLIPS_DESCRIPTION_SUB,
  descriptionCta: eI ? v.Z.Messages.TAKE_ME_THERE : v.Z.Messages.LEARN_MORE,
  pillText: v.Z.Messages.EARLY_ACCESS,
  onCtaClick: eI ? () => {
    (0, I.Z)(P.Z.CLIPS, {
      openWithoutBackstack: !0,
      analyticsLocations: e
    });
  } : () => {
    window.open(g.Z.getArticleURL(O.BhN.CLIPS), '_blank');
  },
  perkImage: k
} : {
  name: 'clips',
  title: v.Z.Messages.CLIPS,
  subtitle: v.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_CLIPS_SUBTITLE,
  description: v.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_CLIPS_DESCRIPTION_NON_SUB,
  pillText: v.Z.Messages.EARLY_ACCESS,
  perkImage: k
},
earlyAccess: eo ? {
  name: 'earlyAccess',
  title: v.Z.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_TITLE,
  subtitle: v.Z.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_SUBTITLE_V2,
  description: v.Z.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_DESCRIPTION_SUB,
  perkImage: F
} : {
  name: 'earlyAccess',
  title: v.Z.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_TITLE,
  subtitle: v.Z.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_SUBTITLE_V2,
  description: v.Z.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_DESCRIPTION_NON_SUB,
  isPremiumGetCta: !0,
  perkImage: F
},
earlyAccessSeeAllVariant: eo ? {
  name: 'earlyAccessSeeAllVariant',
  title: v.Z.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_TITLE,
  subtitle: v.Z.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_SUBTITLE_V2,
  description: v.Z.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_DESCRIPTION_SUB,
  perkImage: V
} : {
  name: 'earlyAccess',
  title: v.Z.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_TITLE,
  subtitle: v.Z.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_SUBTITLE_V2,
  description: v.Z.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_DESCRIPTION_NON_SUB,
  isPremiumGetCta: !0,
  perkImage: V
},
entranceSounds: eo ? {
  name: 'entranceSounds',
  title: v.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_TITLE,
  subtitle: v.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_SUBTITLE,
  description: v.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_DESCRIPTION_SUB,
  descriptionCta: v.Z.Messages.TAKE_ME_THERE,
  onCtaClick: ep,
  perkImage: K
} : {
  name: 'entranceSounds',
  title: v.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_TITLE,
  subtitle: v.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_SUBTITLE,
  description: v.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_DESCRIPTION_NON_SUB,
  perkImage: K
},
entranceSoundsSeeAllVariation: eo ? {
  name: 'entranceSoundsSeeAllVariation',
  title: v.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_TITLE,
  subtitle: v.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_SUBTITLE,
  description: v.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_DESCRIPTION_SUB,
  descriptionCta: v.Z.Messages.TAKE_ME_THERE,
  onCtaClick: ep,
  perkImage: Y
} : {
  name: 'entranceSoundsSeeAllVariation',
  title: v.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_TITLE,
  subtitle: v.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_SUBTITLE,
  description: v.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_DESCRIPTION_NON_SUB,
  perkImage: Y
},
profileEffects: eo ? {
  name: 'profileEffects',
  title: v.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_TITLE,
  subtitle: v.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_SUBTITLE,
  description: v.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_DESCRIPTION_SUB,
  descriptionCta: v.Z.Messages.VISIT_THE_SHOP_CTA,
  onCtaClick: eg,
  pillText: v.Z.Messages.EARLY_ACCESS,
  perkImage: q,
  canReveal: e_,
  dismissibleContentType: l.z.WHATS_NEW_PROFILE_EFFECTS_FLIP
} : {
  name: 'profileEffects',
  title: v.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_TITLE,
  subtitle: v.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_SUBTITLE,
  description: v.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_DESCRIPTION_NON_SUB,
  pillText: v.Z.Messages.EARLY_ACCESS,
  perkImage: q,
  canReveal: e_,
  dismissibleContentType: l.z.WHATS_NEW_PROFILE_EFFECTS_FLIP
},
profiles: {
  name: 'profiles',
  title: v.Z.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_PROFILES_TITLE,
  subtitle: v.Z.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_PROFILES_SUBTITLE,
  description: v.Z.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_PROFILES_DESCRIPTION,
  descriptionCta: v.Z.Messages.TAKE_ME_THERE,
  onCtaClick: eC,
  perkImage: G
},
remixing: eo ? {
  name: 'remixing',
  title: v.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_TITLE,
  subtitle: v.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_SUBTITLE,
  description: v.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_DESCRIPTION_SUB,
  perkImage: X,
  pillText: v.Z.Messages.EARLY_ACCESS
} : {
  name: 'remixing',
  title: v.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_TITLE,
  subtitle: v.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_SUBTITLE,
  description: v.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_DESCRIPTION_NON_SUB,
  perkImage: X,
  pillText: v.Z.Messages.EARLY_ACCESS
},
serverBoosts: {
  name: 'serverBoosts',
  title: v.Z.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_BOOSTS_TITLE,
  subtitle: v.Z.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_BOOSTS_SUBTITLE,
  description: v.Z.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_BOOSTS_DESCRIPTION,
  descriptionCta: v.Z.Messages.TAKE_ME_THERE,
  onCtaClick: () => {
    o.Z.open(O.oAB.GUILD_BOOSTING, null, {
      openWithoutBackstack: !0,
      analyticsLocations: e
    });
  },
  perkImage: y,
  hideOnNarrowScreen: !0
},
specialMemberPricing: eo ? {
  name: 'specialMemberPricing',
  title: v.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_TITLE,
  subtitle: v.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_SUBTITLE_V2,
  description: v.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_SUB,
  descriptionCta: v.Z.Messages.VISIT_THE_SHOP_CTA,
  onCtaClick: eg,
  perkImage: ee
} : {
  name: 'specialMemberPricing',
  title: v.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_TITLE,
  subtitle: v.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_SUBTITLE_V2,
  description: v.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_NON_SUB,
  isPremiumGetCta: !0,
  perkImage: ee
},
specialMemberPricingSeeAllVariant: eo ? {
  name: 'specialMemberPricingSeeAllVariant',
  title: v.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_TITLE,
  subtitle: v.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_SUBTITLE_V2,
  description: v.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_SUB,
  descriptionCta: v.Z.Messages.VISIT_THE_SHOP_CTA,
  onCtaClick: eg,
  perkImage: et
} : {
  name: 'specialMemberPricingSeeAllVariant',
  title: v.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_TITLE,
  subtitle: v.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_SUBTITLE_V2,
  description: v.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_NON_SUB,
  isPremiumGetCta: !0,
  perkImage: et
},
specialShopPerks: eo ? {
  name: 'specialShopPerks',
  title: v.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_SPECIAL_SHOP_PERKS_TITLE,
  subtitle: v.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_SPECIAL_SHOP_PERKS_SUBTITLE,
  description: v.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_SUB,
  descriptionCta: v.Z.Messages.VISIT_THE_SHOP_CTA,
  onCtaClick: eg,
  perkImage: ee
} : {
  name: 'specialShopPerks',
  title: v.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_SPECIAL_SHOP_PERKS_TITLE,
  subtitle: v.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_SPECIAL_SHOP_PERKS_SUBTITLE,
  description: v.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_NON_SUB,
  descriptionCta: v.Z.Messages.VISIT_THE_SHOP_CTA,
  onCtaClick: eg,
  perkImage: ee
},
unlimitedSuperReactions: eo ? {
  name: 'unlimitedSuperReactions',
  title: v.Z.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_TITLE,
  subtitle: v.Z.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_SUBTITLE,
  description: v.Z.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_DESCRIPTION_SUB,
  perkImage: er,
  hideOnNarrowScreen: !0
} : {
  name: 'unlimitedSuperReactions',
  title: v.Z.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_TITLE,
  subtitle: v.Z.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_SUBTITLE,
  description: v.Z.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_DESCRIPTION_NON_SUB,
  isPremiumGetCta: !0,
  perkImage: er,
  hideOnNarrowScreen: !0
},
superReactions: {
  name: 'superReactions',
  title: v.Z.Messages.NITRO_HOME_SUPER_REACTIONS,
  subtitle: v.Z.Messages.NITRO_HOME_SUPER_REACTIONS_DESCRIPTION,
  description: v.Z.Messages.NITRO_HOME_CARD_INCLUDED_WITH_BASIC_AND_NITRO,
  perkImage: ea
},
upcomingDropUntimed: {
  name: 'upcomingDropUntimed',
  title: v.Z.Messages.NEW_DROP,
  pillText: v.Z.Messages.COMING_SOON,
  backgroundImage: Q
},
badge: {
  name: 'badge',
  title: v.Z.Messages.NITRO_HOME_SUBSCRIBER_BADGE,
  subtitle: v.Z.Messages.NITRO_HOME_GET_THIS_SUBSCRIBER_BADGE,
  perkImage: Z,
  description: v.Z.Messages.NITRO_HOME_SUBSCRIBER_BADGE_FOR_THE_COLLECTORS
},
customAppIcons: {
  name: 'customAppIcons',
  title: v.Z.Messages.PREMIUM_MARKETING_FEATURE_CUSTOM_APP_ICONS_TITLE,
  subtitle: v.Z.Messages.PREMIUM_MARKETING_FEATURE_CUSTOM_APP_ICONS_DESCRIPTION,
  perkImage: w,
  description: v.Z.Messages.NITRO_HOME_CARD_INCLUDED_WITH_BASIC_AND_NITRO,
  descriptionCta: v.Z.Messages.TAKE_ME_THERE,
  onCtaClick: eA
},
moreEmojiPower: {
  name: 'moreEmojiPower',
  title: v.Z.Messages.PREMIUM_MARKETING_FEATURE_EMOJI_TITLE,
  subtitle: v.Z.Messages.PREMIUM_MARKETING_EMOJI_PERK_TITLE,
  perkImage: W,
  description: v.Z.Messages.NITRO_HOME_CARD_CHOOSE_CUSTOM_EMOJI
},
customSoundsEverywhere: {
  name: 'customSoundsEverywhere',
  title: v.Z.Messages.NITRO_HOME_CARD_CUSTOM_SOUNDS_EVERYWHERE,
  subtitle: v.Z.Messages.NITRO_HOME_CARD_USE_CUSTOM_SOUNDS,
  perkImage: (0, x.gx)(t, D, B),
  description: v.Z.Messages.NITRO_HOME_CARD_INCLUDED_WITH_ONLY_NITRO
},
specialStickerAccess: {
  name: 'specialStickerAccess',
  title: v.Z.Messages.PREMIUM_MARKETING_STICKER_PERK_TITLE,
  subtitle: v.Z.Messages.PREMIUM_MARKETING_STICKER_PERK_LONG_DESCRIPTION,
  perkImage: (0, x.gx)(t, j, en),
  description: v.Z.Messages.NITRO_HOME_CARD_INCLUDED_WITH_BASIC_AND_NITRO
},
largeUploads: {
  name: 'largeUploads',
  title: v.Z.Messages.PREMIUM_MARKETING_UPLOADS_SMALL_PERK_TITLE.format({
    premiumMaxSize: n
  }),
  subtitle: v.Z.Messages.PREMIUM_MARKETING_UPLOADS_SMALL_PERK_DESCRIPTION.format({
    premiumMaxSize: n
  }),
  perkImage: ei,
  description: v.Z.Messages.NITRO_HOME_CARD_UPLOAD_POWER
},
hdVideo: {
  name: 'hdVideo',
  title: v.Z.Messages.PREMIUM_MARKETING_FEATURE_PREMIUM_GO_LIVE_TITLE,
  subtitle: v.Z.Messages.PREMIUM_MARKETING_STREAMING_SMALL_PERK_DESCRIPTION,
  perkImage: es,
  description: v.Z.Messages.NITRO_HOME_STREAM_UP_TO_4K
},
newAppStylesUpdateJune2024: {
  name: 'newAppStylesUpdateJune2024',
  title: v.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_NEW_APP_STYLES_TITLE,
  subtitle: v.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_NEW_APP_STYLES_SUBTITLE,
  description: v.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_NEW_APP_STYLES_DESCRIPTION,
  descriptionCta: eo || ec ? v.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_NITRO_NEW_APP_STYLES : v.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_NON_NITRO_NEW_APP_STYLES,
  isPremiumGetCta: !(eo || ec),
  onCtaClick: eo || ec ? eA : void 0,
  perkImage: z
},
referralProgram: {
  name: 'referralProgram',
  title: v.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_REFERRAL_PROGRAM_TITLE,
  subtitle: v.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_REFERRAL_PROGRAM_SUBTITLE,
  description: v.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_REFERRAL_PROGRAM_DESCRIPTION.format({
    helpdeskArticle: g.Z.getArticleURL(O.BhN.REFERRAL_PROGRAM)
  }),
  descriptionCta: v.Z.Messages.MARKETING_PAGE_CTA_GET_NITRO,
  isPremiumGetCta: !eo || void 0,
  perkImage: J
},
serverProfiles: {
  name: 'serverProfiles',
  title: v.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_SERVER_PROFILES_TITLE,
  subtitle: v.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_SERVER_PRORFILES_SUBTITLE,
  descriptionCta: eo ? v.Z.Messages.TAKE_ME_THERE : v.Z.Messages.MARKETING_PAGE_CTA_GET_NITRO,
  isPremiumGetCta: !eo,
  onCtaClick: eo ? eC : void 0,
  perkImage: $
}
  };
  if (null != eR) {
let {
  title: t,
  subtitle: n,
  description: s,
  pillText: a,
  ctaDescription: i,
  dismissibleContentType: l
} = eR, c = (0, r.jsx)(h.Z, {
  showAnimations: !0,
  percentage: eT,
  initialPercentage: eE
});
em.freeBoost = {
  name: 'freeBoost',
  title: t,
  subtitle: n,
  description: s,
  perkComponent: c,
  descriptionCta: i,
  onCtaClick: () => {
    o.Z.open(O.oAB.GUILD_BOOSTING, null, {
      analyticsLocations: e
    });
  },
  cardVariant: M.zW.REWARD,
  pillText: a,
  dismissibleContentType: l
};
  }
  return em;
};