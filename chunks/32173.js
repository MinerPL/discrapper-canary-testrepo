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
  g = n(424218),
  p = n(63063),
  N = n(380684),
  A = n(74538),
  m = n(860489),
  f = n(494127),
  S = n(314684),
  h = n(687362),
  M = n(119269),
  x = n(391110),
  b = n(75077),
  O = n(474936),
  P = n(981631),
  L = n(526761),
  v = n(332325),
  Z = n(689938),
  D = n(660372),
  B = n(926433),
  j = n(302036),
  U = n(994554),
  G = n(704565),
  y = n(393305),
  H = n(338879),
  k = n(609926),
  w = n(203302),
  F = n(766491),
  V = n(193943),
  W = n(707046),
  K = n(488459),
  Y = n(334347),
  z = n(132015),
  Q = n(142416),
  q = n(607762),
  X = n(474106),
  J = n(567452),
  $ = n(572501),
  ee = n(755590),
  et = n(909910),
  en = n(637810),
  es = n(570423),
  ea = n(912429),
  er = n(91394),
  ei = n(209672),
  el = n(698173),
  eo = n(926262);
(s = a || (a = {})).AVATAR_DECORATIONS = 'avatarDecorations', s.CLIENT_THEMES = 'clientThemes', s.CLIPS = 'clips', s.EARLY_ACCESS = 'earlyAccess', s.ENTRANCE_SOUNDS = 'entranceSounds', s.PROFILE_EFFECTS = 'profileEffects', s.PROFILES = 'profiles', s.REMIXING = 'remixing', s.SERVER_BOOSTS = 'serverBoosts', s.SPECIAL_MEMBER_PRICING = 'specialMemberPricing', s.SPECIAL_MEMBER_PRICING_SEE_ALL_VARIANT = 'specialMemberPricingSeeAllVariant', s.SPECIAL_SHOP_PERKS = 'specialShopPerks', s.UNLIMITED_SUPER_REACTIONS = 'unlimitedSuperReactions', s.SUPER_REACTIONS = 'superReactions', s.UPCOMING_DROP_UNTIMED = 'upcomingDropUntimed', s.CUSTOM_APP_ICONS = 'customAppIcons', s.MORE_EMOJI_POWER = 'moreEmojiPower', s.CUSTOM_SOUNDS_EVERYWHERE = 'customSoundsEverywhere', s.SPECIAL_STICKER_ACCESS = 'specialStickerAccess', s.LARGE_UPLOADS = 'largeUploads', s.HD_VIDEO = 'hdVideo', s.BADGE = 'badge', s.ENTRANCE_SOUNDS_SEE_ALL_VARIATION = 'entranceSoundsSeeAllVariation', s.EARLY_ACCESS_SEE_ALL_VARIATION = 'earlyAccessSeeAllVariant', s.FREE_BOOST = 'freeBoost', s.REFERRAL_PROGRAM = 'referralProgram', s.NEW_APP_STYLES_UPDATE_JUNE_2024 = 'newAppStylesUpdateJune2024', s.SERVER_PROFILES = 'serverProfiles', s.SHY_PROJECT = 'shyProject';
t.Z = () => {
  let {
analyticsLocations: e
  } = (0, _.ZP)(d.Z.PREMIUM_MARKETING_PERK_CARD), t = (0, c.ZP)(), n = (0, g.BU)(((0, N.Xv)() ? O.wb : O.Uq) / 1024, {
useKibibytes: !0
  }), s = (0, i.e7)([C.ZP], () => C.ZP.getPremiumTypeSubscription()), a = null != s ? A.ZP.getPremiumPlanItem(s) : null, ec = null != a ? A.ZP.getSkuIdForPlan(a.planId) : null, ed = ec === O.Si.TIER_2, e_ = ec === O.Si.TIER_0, {
flipped: eu
  } = (0, f.JP)(), {
flipped: eE
  } = (0, f.as)(), eT = (0, S.nY)({
showAnimations: !0
  }), eI = null != eT ? eT.initialPercentage : void 0, eR = null != eT ? eT.percentage : void 0, eC = (0, u.Z)(R.Z), eg = (0, h.Z)(), ep = (0, E.Z)({
scrollPosition: L.Y_.TRY_IT_OUT,
analyticsLocations: e
  }), eN = () => {
o.Z.open(P.oAB.VOICE, L.GA, {
  openWithoutBackstack: !0,
  analyticsLocations: e
});
  }, eA = () => {
(0, T.uL)(P.Z5c.COLLECTIBLES_SHOP);
  }, em = () => {
o.Z.open(P.oAB.APPEARANCE, null, {
  scrollPosition: L.h1.CUSTOM_APP_ICONS
});
  }, ef = {
avatarDecorations: ed ? {
  name: 'avatarDecorations',
  title: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_TITLE,
  subtitle: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_SUBTITLE_SUB,
  description: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_DESCRIPTION_SUB,
  descriptionCta: Z.Z.Messages.VISIT_THE_SHOP_CTA,
  onCtaClick: eA,
  pillText: Z.Z.Messages.EARLY_ACCESS,
  perkImage: w,
  canReveal: eu,
  dismissibleContentType: l.z.WHATS_NEW_AVATAR_DECOS_FLIP
} : {
  name: 'avatarDecorations',
  title: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_TITLE,
  subtitle: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_SUBTITLE_NON_SUB,
  description: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_DESCRIPTION_NON_SUB,
  pillText: Z.Z.Messages.EARLY_ACCESS,
  perkImage: w,
  canReveal: eu,
  dismissibleContentType: l.z.WHATS_NEW_AVATAR_DECOS_FLIP
},
clientThemes: {
  name: 'clientThemes',
  title: Z.Z.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_THEMES_TITLE,
  subtitle: Z.Z.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_THEMES_SUBTITLE,
  description: Z.Z.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_THEMES_DESCRIPTION,
  descriptionCta: Z.Z.Messages.TAKE_ME_THERE,
  onCtaClick: () => {
    o.Z.open(P.oAB.APPEARANCE, null, {
      openWithoutBackstack: !0,
      analyticsLocations: e
    });
  },
  perkImage: G
},
clips: ed ? {
  name: 'clips',
  title: Z.Z.Messages.CLIPS,
  subtitle: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_CLIPS_SUBTITLE,
  description: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_CLIPS_DESCRIPTION_SUB,
  descriptionCta: eC ? Z.Z.Messages.TAKE_ME_THERE : Z.Z.Messages.LEARN_MORE,
  pillText: Z.Z.Messages.EARLY_ACCESS,
  onCtaClick: eC ? () => {
    (0, I.Z)(v.Z.CLIPS, {
      openWithoutBackstack: !0,
      analyticsLocations: e
    });
  } : () => {
    window.open(p.Z.getArticleURL(P.BhN.CLIPS), '_blank');
  },
  perkImage: F
} : {
  name: 'clips',
  title: Z.Z.Messages.CLIPS,
  subtitle: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_CLIPS_SUBTITLE,
  description: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_CLIPS_DESCRIPTION_NON_SUB,
  pillText: Z.Z.Messages.EARLY_ACCESS,
  perkImage: F
},
earlyAccess: ed ? {
  name: 'earlyAccess',
  title: Z.Z.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_TITLE,
  subtitle: Z.Z.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_SUBTITLE_V2,
  description: Z.Z.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_DESCRIPTION_SUB,
  perkImage: W
} : {
  name: 'earlyAccess',
  title: Z.Z.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_TITLE,
  subtitle: Z.Z.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_SUBTITLE_V2,
  description: Z.Z.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_DESCRIPTION_NON_SUB,
  isPremiumGetCta: !0,
  perkImage: W
},
earlyAccessSeeAllVariant: ed ? {
  name: 'earlyAccessSeeAllVariant',
  title: Z.Z.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_TITLE,
  subtitle: Z.Z.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_SUBTITLE_V2,
  description: Z.Z.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_DESCRIPTION_SUB,
  perkImage: K
} : {
  name: 'earlyAccess',
  title: Z.Z.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_TITLE,
  subtitle: Z.Z.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_SUBTITLE_V2,
  description: Z.Z.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_DESCRIPTION_NON_SUB,
  isPremiumGetCta: !0,
  perkImage: K
},
entranceSounds: ed ? {
  name: 'entranceSounds',
  title: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_TITLE,
  subtitle: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_SUBTITLE,
  description: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_DESCRIPTION_SUB,
  descriptionCta: Z.Z.Messages.TAKE_ME_THERE,
  onCtaClick: eN,
  perkImage: z
} : {
  name: 'entranceSounds',
  title: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_TITLE,
  subtitle: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_SUBTITLE,
  description: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_DESCRIPTION_NON_SUB,
  perkImage: z
},
entranceSoundsSeeAllVariation: ed ? {
  name: 'entranceSoundsSeeAllVariation',
  title: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_TITLE,
  subtitle: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_SUBTITLE,
  description: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_DESCRIPTION_SUB,
  descriptionCta: Z.Z.Messages.TAKE_ME_THERE,
  onCtaClick: eN,
  perkImage: Q
} : {
  name: 'entranceSoundsSeeAllVariation',
  title: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_TITLE,
  subtitle: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_SUBTITLE,
  description: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_DESCRIPTION_NON_SUB,
  perkImage: Q
},
profileEffects: ed ? {
  name: 'profileEffects',
  title: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_TITLE,
  subtitle: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_SUBTITLE,
  description: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_DESCRIPTION_SUB,
  descriptionCta: Z.Z.Messages.VISIT_THE_SHOP_CTA,
  onCtaClick: eA,
  pillText: Z.Z.Messages.EARLY_ACCESS,
  perkImage: J,
  canReveal: eE,
  dismissibleContentType: l.z.WHATS_NEW_PROFILE_EFFECTS_FLIP
} : {
  name: 'profileEffects',
  title: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_TITLE,
  subtitle: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_SUBTITLE,
  description: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_DESCRIPTION_NON_SUB,
  pillText: Z.Z.Messages.EARLY_ACCESS,
  perkImage: J,
  canReveal: eE,
  dismissibleContentType: l.z.WHATS_NEW_PROFILE_EFFECTS_FLIP
},
profiles: {
  name: 'profiles',
  title: Z.Z.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_PROFILES_TITLE,
  subtitle: Z.Z.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_PROFILES_SUBTITLE,
  description: Z.Z.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_PROFILES_DESCRIPTION,
  descriptionCta: Z.Z.Messages.TAKE_ME_THERE,
  onCtaClick: ep,
  perkImage: y
},
remixing: ed ? {
  name: 'remixing',
  title: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_TITLE,
  subtitle: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_SUBTITLE,
  description: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_DESCRIPTION_SUB,
  perkImage: ee,
  pillText: Z.Z.Messages.EARLY_ACCESS
} : {
  name: 'remixing',
  title: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_TITLE,
  subtitle: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_SUBTITLE,
  description: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_DESCRIPTION_NON_SUB,
  perkImage: ee,
  pillText: Z.Z.Messages.EARLY_ACCESS
},
serverBoosts: {
  name: 'serverBoosts',
  title: Z.Z.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_BOOSTS_TITLE,
  subtitle: Z.Z.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_BOOSTS_SUBTITLE,
  description: Z.Z.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_BOOSTS_DESCRIPTION,
  descriptionCta: Z.Z.Messages.TAKE_ME_THERE,
  onCtaClick: () => {
    o.Z.open(P.oAB.GUILD_BOOSTING, null, {
      openWithoutBackstack: !0,
      analyticsLocations: e
    });
  },
  perkImage: H,
  hideOnNarrowScreen: !0
},
specialMemberPricing: ed ? {
  name: 'specialMemberPricing',
  title: Z.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_TITLE,
  subtitle: Z.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_SUBTITLE_V2,
  description: Z.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_SUB,
  descriptionCta: Z.Z.Messages.VISIT_THE_SHOP_CTA,
  onCtaClick: eA,
  perkImage: en
} : {
  name: 'specialMemberPricing',
  title: Z.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_TITLE,
  subtitle: Z.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_SUBTITLE_V2,
  description: Z.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_NON_SUB,
  isPremiumGetCta: !0,
  perkImage: en
},
specialMemberPricingSeeAllVariant: ed ? {
  name: 'specialMemberPricingSeeAllVariant',
  title: Z.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_TITLE,
  subtitle: Z.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_SUBTITLE_V2,
  description: Z.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_SUB,
  descriptionCta: Z.Z.Messages.VISIT_THE_SHOP_CTA,
  onCtaClick: eA,
  perkImage: es
} : {
  name: 'specialMemberPricingSeeAllVariant',
  title: Z.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_TITLE,
  subtitle: Z.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_SUBTITLE_V2,
  description: Z.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_NON_SUB,
  isPremiumGetCta: !0,
  perkImage: es
},
specialShopPerks: ed ? {
  name: 'specialShopPerks',
  title: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_SPECIAL_SHOP_PERKS_TITLE,
  subtitle: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_SPECIAL_SHOP_PERKS_SUBTITLE,
  description: Z.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_SUB,
  descriptionCta: Z.Z.Messages.VISIT_THE_SHOP_CTA,
  onCtaClick: eA,
  perkImage: en
} : {
  name: 'specialShopPerks',
  title: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_SPECIAL_SHOP_PERKS_TITLE,
  subtitle: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_SPECIAL_SHOP_PERKS_SUBTITLE,
  description: Z.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_NON_SUB,
  descriptionCta: Z.Z.Messages.VISIT_THE_SHOP_CTA,
  onCtaClick: eA,
  perkImage: en
},
unlimitedSuperReactions: ed ? {
  name: 'unlimitedSuperReactions',
  title: Z.Z.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_TITLE,
  subtitle: Z.Z.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_SUBTITLE,
  description: Z.Z.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_DESCRIPTION_SUB,
  perkImage: el,
  hideOnNarrowScreen: !0
} : {
  name: 'unlimitedSuperReactions',
  title: Z.Z.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_TITLE,
  subtitle: Z.Z.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_SUBTITLE,
  description: Z.Z.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_DESCRIPTION_NON_SUB,
  isPremiumGetCta: !0,
  perkImage: el,
  hideOnNarrowScreen: !0
},
superReactions: {
  name: 'superReactions',
  title: Z.Z.Messages.NITRO_HOME_SUPER_REACTIONS,
  subtitle: Z.Z.Messages.NITRO_HOME_SUPER_REACTIONS_DESCRIPTION,
  description: Z.Z.Messages.NITRO_HOME_CARD_INCLUDED_WITH_BASIC_AND_NITRO,
  perkImage: ei
},
upcomingDropUntimed: {
  name: 'upcomingDropUntimed',
  title: Z.Z.Messages.NEW_DROP,
  pillText: Z.Z.Messages.COMING_SOON,
  backgroundImage: X
},
badge: {
  name: 'badge',
  title: Z.Z.Messages.NITRO_HOME_SUBSCRIBER_BADGE,
  subtitle: Z.Z.Messages.NITRO_HOME_GET_THIS_SUBSCRIBER_BADGE,
  perkImage: D,
  description: Z.Z.Messages.NITRO_HOME_SUBSCRIBER_BADGE_FOR_THE_COLLECTORS
},
customAppIcons: {
  name: 'customAppIcons',
  title: Z.Z.Messages.PREMIUM_MARKETING_FEATURE_CUSTOM_APP_ICONS_TITLE,
  subtitle: Z.Z.Messages.PREMIUM_MARKETING_FEATURE_CUSTOM_APP_ICONS_DESCRIPTION,
  perkImage: V,
  description: Z.Z.Messages.NITRO_HOME_CARD_INCLUDED_WITH_BASIC_AND_NITRO,
  descriptionCta: Z.Z.Messages.TAKE_ME_THERE,
  onCtaClick: em
},
moreEmojiPower: {
  name: 'moreEmojiPower',
  title: Z.Z.Messages.PREMIUM_MARKETING_FEATURE_EMOJI_TITLE,
  subtitle: Z.Z.Messages.PREMIUM_MARKETING_EMOJI_PERK_TITLE,
  perkImage: Y,
  description: Z.Z.Messages.NITRO_HOME_CARD_CHOOSE_CUSTOM_EMOJI
},
customSoundsEverywhere: {
  name: 'customSoundsEverywhere',
  title: Z.Z.Messages.NITRO_HOME_CARD_CUSTOM_SOUNDS_EVERYWHERE,
  subtitle: Z.Z.Messages.NITRO_HOME_CARD_USE_CUSTOM_SOUNDS,
  perkImage: (0, b.gx)(t, B, j),
  description: Z.Z.Messages.NITRO_HOME_CARD_INCLUDED_WITH_ONLY_NITRO
},
specialStickerAccess: {
  name: 'specialStickerAccess',
  title: Z.Z.Messages.PREMIUM_MARKETING_STICKER_PERK_TITLE,
  subtitle: Z.Z.Messages.PREMIUM_MARKETING_STICKER_PERK_LONG_DESCRIPTION,
  perkImage: (0, b.gx)(t, U, ea),
  description: Z.Z.Messages.NITRO_HOME_CARD_INCLUDED_WITH_BASIC_AND_NITRO
},
largeUploads: {
  name: 'largeUploads',
  title: Z.Z.Messages.PREMIUM_MARKETING_UPLOADS_SMALL_PERK_TITLE.format({
    premiumMaxSize: n
  }),
  subtitle: Z.Z.Messages.PREMIUM_MARKETING_UPLOADS_SMALL_PERK_DESCRIPTION.format({
    premiumMaxSize: n
  }),
  perkImage: eo,
  description: Z.Z.Messages.NITRO_HOME_CARD_UPLOAD_POWER
},
hdVideo: {
  name: 'hdVideo',
  title: Z.Z.Messages.PREMIUM_MARKETING_FEATURE_PREMIUM_GO_LIVE_TITLE,
  subtitle: Z.Z.Messages.PREMIUM_MARKETING_STREAMING_SMALL_PERK_DESCRIPTION,
  perkImage: er,
  description: Z.Z.Messages.NITRO_HOME_STREAM_UP_TO_4K
},
newAppStylesUpdateJune2024: {
  name: 'newAppStylesUpdateJune2024',
  title: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_NEW_APP_STYLES_TITLE,
  subtitle: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_NEW_APP_STYLES_SUBTITLE,
  description: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_NEW_APP_STYLES_DESCRIPTION,
  descriptionCta: ed || e_ ? Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_NITRO_NEW_APP_STYLES : Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_NON_NITRO_NEW_APP_STYLES,
  isPremiumGetCta: !(ed || e_),
  onCtaClick: ed || e_ ? em : void 0,
  perkImage: q
},
referralProgram: {
  name: 'referralProgram',
  title: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_REFERRAL_PROGRAM_TITLE,
  subtitle: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_REFERRAL_PROGRAM_SUBTITLE,
  description: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_REFERRAL_PROGRAM_DESCRIPTION.format({
    helpdeskArticle: p.Z.getArticleURL(P.BhN.REFERRAL_PROGRAM)
  }),
  descriptionCta: Z.Z.Messages.MARKETING_PAGE_CTA_GET_NITRO,
  isPremiumGetCta: !ed || void 0,
  perkImage: $
},
serverProfiles: {
  name: 'serverProfiles',
  title: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_SERVER_PROFILES_TITLE,
  subtitle: Z.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_SERVER_PRORFILES_SUBTITLE,
  descriptionCta: ed ? Z.Z.Messages.TAKE_ME_THERE : Z.Z.Messages.MARKETING_PAGE_CTA_GET_NITRO,
  isPremiumGetCta: !ed,
  onCtaClick: ed ? ep : void 0,
  perkImage: et
}
  };
  if (null != eg) {
let {
  title: t,
  subtitle: n,
  description: s,
  pillText: a,
  ctaDescription: i,
  dismissibleContentType: l
} = eg, c = (0, r.jsx)(M.Z, {
  showAnimations: !0,
  percentage: eR,
  initialPercentage: eI
});
ef.freeBoost = {
  name: 'freeBoost',
  title: t,
  subtitle: n,
  description: s,
  perkComponent: c,
  descriptionCta: i,
  onCtaClick: () => {
    o.Z.open(P.oAB.GUILD_BOOSTING, null, {
      analyticsLocations: e
    });
  },
  cardVariant: x.zW.REWARD,
  pillText: a,
  dismissibleContentType: l
};
  }
  return (0, m.ZP)('usePerksDiscoverabilityCard') === m.P0.SUMMER_2024 && (ef.shyProject = {
name: 'shyProject',
title: Z.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_TITLE,
subtitle: Z.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_SUBTITLE_V2,
description: ed ? Z.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_SUB : Z.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_NON_SUB,
descriptionCta: Z.Z.Messages.VISIT_THE_SHOP_CTA,
pillText: Z.Z.Messages.NITRO_HOME_TAB_NEW.toLocaleUpperCase(),
onCtaClick: ed ? eA : void 0,
perkImage: k,
isPremiumGetCta: !ed
  }), ef;
};