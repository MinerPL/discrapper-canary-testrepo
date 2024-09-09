n.d(t, {
    u: function () {
        return a;
    }
});
var s,
    a,
    r = n(735250);
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
    g = n(78839),
    C = n(424218),
    N = n(63063),
    m = n(74538),
    p = n(860489),
    A = n(471309),
    f = n(827686),
    S = n(494127),
    h = n(314684),
    M = n(687362),
    x = n(119269),
    O = n(467685),
    b = n(391110),
    P = n(75077),
    v = n(976465),
    L = n(474936),
    Z = n(981631),
    D = n(526761),
    U = n(332325),
    B = n(689938),
    j = n(817199),
    G = n(660372),
    y = n(926433),
    w = n(302036),
    H = n(994554),
    k = n(704565),
    F = n(393305),
    V = n(338879),
    W = n(609926),
    K = n(203302),
    Y = n(766491),
    z = n(193943),
    Q = n(707046),
    q = n(488459),
    J = n(334347),
    X = n(132015),
    $ = n(142416),
    ee = n(607762),
    et = n(474106),
    en = n(567452),
    es = n(572501),
    ea = n(755590),
    er = n(909910),
    ei = n(637810),
    el = n(570423),
    eo = n(912429),
    ec = n(91394),
    ed = n(209672),
    e_ = n(698173),
    eu = n(926262);
((s = a || (a = {})).AVATAR_DECORATIONS = 'avatarDecorations'), (s.CLIENT_THEMES = 'clientThemes'), (s.CLIPS = 'clips'), (s.EARLY_ACCESS = 'earlyAccess'), (s.ENTRANCE_SOUNDS = 'entranceSounds'), (s.PROFILE_EFFECTS = 'profileEffects'), (s.PROFILES = 'profiles'), (s.REMIXING = 'remixing'), (s.SERVER_BOOSTS = 'serverBoosts'), (s.SPECIAL_MEMBER_PRICING = 'specialMemberPricing'), (s.SPECIAL_MEMBER_PRICING_SEE_ALL_VARIANT = 'specialMemberPricingSeeAllVariant'), (s.SPECIAL_SHOP_PERKS = 'specialShopPerks'), (s.UNLIMITED_SUPER_REACTIONS = 'unlimitedSuperReactions'), (s.SUPER_REACTIONS = 'superReactions'), (s.UPCOMING_DROP_UNTIMED = 'upcomingDropUntimed'), (s.CUSTOM_APP_ICONS = 'customAppIcons'), (s.MORE_EMOJI_POWER = 'moreEmojiPower'), (s.CUSTOM_SOUNDS_EVERYWHERE = 'customSoundsEverywhere'), (s.SPECIAL_STICKER_ACCESS = 'specialStickerAccess'), (s.LARGE_UPLOADS = 'largeUploads'), (s.HD_VIDEO = 'hdVideo'), (s.BADGE = 'badge'), (s.ENTRANCE_SOUNDS_SEE_ALL_VARIATION = 'entranceSoundsSeeAllVariation'), (s.EARLY_ACCESS_SEE_ALL_VARIATION = 'earlyAccessSeeAllVariant'), (s.FREE_BOOST = 'freeBoost'), (s.REFERRAL_PROGRAM = 'referralProgram'), (s.NEW_APP_STYLES_UPDATE_JUNE_2024 = 'newAppStylesUpdateJune2024'), (s.SERVER_PROFILES = 'serverProfiles'), (s.SHY_PROJECT = 'shyProject'), (s.TENURE_BADGE = 'tenureBadge');
t.Z = () => {
    let { analyticsLocations: e } = (0, _.ZP)(d.Z.PREMIUM_MARKETING_PERK_CARD),
        t = (0, c.ZP)(),
        n = (0, C.BU)(L.Uq / 1024, { useKibibytes: !0 }),
        s = (0, i.e7)([g.ZP], () => g.ZP.getPremiumTypeSubscription()),
        a = null != s ? m.ZP.getPremiumPlanItem(s) : null,
        eE = null != a ? m.ZP.getSkuIdForPlan(a.planId) : null,
        eT = eE === L.Si.TIER_2,
        eI = eE === L.Si.TIER_0,
        { flipped: eR } = (0, S.JP)(),
        { flipped: eg } = (0, S.as)(),
        eC = (0, h.nY)({ showAnimations: !0 }),
        eN = null != eC ? eC.initialPercentage : void 0,
        em = null != eC ? eC.percentage : void 0,
        ep = (0, u.Z)(R.Z),
        eA = (0, M.Z)(),
        ef = (0, E.Z)({
            scrollPosition: D.Y_.TRY_IT_OUT,
            analyticsLocations: e
        }),
        eS = () => {
            o.Z.open(Z.oAB.VOICE, D.GA, {
                openWithoutBackstack: !0,
                analyticsLocations: e
            });
        },
        eh = () => {
            (0, T.uL)(Z.Z5c.COLLECTIBLES_SHOP);
        },
        eM = () => {
            o.Z.open(Z.oAB.APPEARANCE, null, { scrollPosition: D.h1.CUSTOM_APP_ICONS });
        },
        ex = {
            avatarDecorations: eT
                ? {
                      name: 'avatarDecorations',
                      title: B.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_TITLE,
                      subtitle: B.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_SUBTITLE_SUB,
                      description: B.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_DESCRIPTION_SUB,
                      descriptionCta: B.Z.Messages.VISIT_THE_SHOP_CTA,
                      onCtaClick: eh,
                      pillText: B.Z.Messages.EARLY_ACCESS,
                      perkImage: K,
                      canReveal: eR,
                      dismissibleContentType: l.z.WHATS_NEW_AVATAR_DECOS_FLIP
                  }
                : {
                      name: 'avatarDecorations',
                      title: B.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_TITLE,
                      subtitle: B.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_SUBTITLE_NON_SUB,
                      description: B.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_DESCRIPTION_NON_SUB,
                      pillText: B.Z.Messages.EARLY_ACCESS,
                      perkImage: K,
                      canReveal: eR,
                      dismissibleContentType: l.z.WHATS_NEW_AVATAR_DECOS_FLIP
                  },
            clientThemes: {
                name: 'clientThemes',
                title: B.Z.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_THEMES_TITLE,
                subtitle: B.Z.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_THEMES_SUBTITLE,
                description: B.Z.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_THEMES_DESCRIPTION,
                descriptionCta: B.Z.Messages.TAKE_ME_THERE,
                onCtaClick: () => {
                    o.Z.open(Z.oAB.APPEARANCE, null, {
                        openWithoutBackstack: !0,
                        analyticsLocations: e
                    });
                },
                perkImage: k
            },
            clips: eT
                ? {
                      name: 'clips',
                      title: B.Z.Messages.CLIPS,
                      subtitle: B.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_CLIPS_SUBTITLE,
                      description: B.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_CLIPS_DESCRIPTION_SUB,
                      descriptionCta: ep ? B.Z.Messages.TAKE_ME_THERE : B.Z.Messages.LEARN_MORE,
                      pillText: B.Z.Messages.EARLY_ACCESS,
                      onCtaClick: ep
                          ? () => {
                                (0, I.Z)(U.Z.CLIPS, {
                                    openWithoutBackstack: !0,
                                    analyticsLocations: e
                                });
                            }
                          : () => {
                                window.open(N.Z.getArticleURL(Z.BhN.CLIPS), '_blank');
                            },
                      perkImage: Y
                  }
                : {
                      name: 'clips',
                      title: B.Z.Messages.CLIPS,
                      subtitle: B.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_CLIPS_SUBTITLE,
                      description: B.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_CLIPS_DESCRIPTION_NON_SUB,
                      pillText: B.Z.Messages.EARLY_ACCESS,
                      perkImage: Y
                  },
            earlyAccess: eT
                ? {
                      name: 'earlyAccess',
                      title: B.Z.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_TITLE,
                      subtitle: B.Z.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_SUBTITLE_V2,
                      description: B.Z.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_DESCRIPTION_SUB,
                      perkImage: Q
                  }
                : {
                      name: 'earlyAccess',
                      title: B.Z.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_TITLE,
                      subtitle: B.Z.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_SUBTITLE_V2,
                      description: B.Z.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_DESCRIPTION_NON_SUB,
                      isPremiumGetCta: !0,
                      perkImage: Q
                  },
            earlyAccessSeeAllVariant: eT
                ? {
                      name: 'earlyAccessSeeAllVariant',
                      title: B.Z.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_TITLE,
                      subtitle: B.Z.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_SUBTITLE_V2,
                      description: B.Z.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_DESCRIPTION_SUB,
                      perkImage: q
                  }
                : {
                      name: 'earlyAccess',
                      title: B.Z.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_TITLE,
                      subtitle: B.Z.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_SUBTITLE_V2,
                      description: B.Z.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_DESCRIPTION_NON_SUB,
                      isPremiumGetCta: !0,
                      perkImage: q
                  },
            entranceSounds: eT
                ? {
                      name: 'entranceSounds',
                      title: B.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_TITLE,
                      subtitle: B.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_SUBTITLE,
                      description: B.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_DESCRIPTION_SUB,
                      descriptionCta: B.Z.Messages.TAKE_ME_THERE,
                      onCtaClick: eS,
                      perkImage: X
                  }
                : {
                      name: 'entranceSounds',
                      title: B.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_TITLE,
                      subtitle: B.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_SUBTITLE,
                      description: B.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_DESCRIPTION_NON_SUB,
                      perkImage: X
                  },
            entranceSoundsSeeAllVariation: eT
                ? {
                      name: 'entranceSoundsSeeAllVariation',
                      title: B.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_TITLE,
                      subtitle: B.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_SUBTITLE,
                      description: B.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_DESCRIPTION_SUB,
                      descriptionCta: B.Z.Messages.TAKE_ME_THERE,
                      onCtaClick: eS,
                      perkImage: $
                  }
                : {
                      name: 'entranceSoundsSeeAllVariation',
                      title: B.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_TITLE,
                      subtitle: B.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_SUBTITLE,
                      description: B.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_DESCRIPTION_NON_SUB,
                      perkImage: $
                  },
            profileEffects: eT
                ? {
                      name: 'profileEffects',
                      title: B.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_TITLE,
                      subtitle: B.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_SUBTITLE,
                      description: B.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_DESCRIPTION_SUB,
                      descriptionCta: B.Z.Messages.VISIT_THE_SHOP_CTA,
                      onCtaClick: eh,
                      pillText: B.Z.Messages.EARLY_ACCESS,
                      perkImage: en,
                      canReveal: eg,
                      dismissibleContentType: l.z.WHATS_NEW_PROFILE_EFFECTS_FLIP
                  }
                : {
                      name: 'profileEffects',
                      title: B.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_TITLE,
                      subtitle: B.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_SUBTITLE,
                      description: B.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_DESCRIPTION_NON_SUB,
                      pillText: B.Z.Messages.EARLY_ACCESS,
                      perkImage: en,
                      canReveal: eg,
                      dismissibleContentType: l.z.WHATS_NEW_PROFILE_EFFECTS_FLIP
                  },
            profiles: {
                name: 'profiles',
                title: B.Z.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_PROFILES_TITLE,
                subtitle: B.Z.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_PROFILES_SUBTITLE,
                description: B.Z.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_PROFILES_DESCRIPTION,
                descriptionCta: B.Z.Messages.TAKE_ME_THERE,
                onCtaClick: ef,
                perkImage: F
            },
            remixing: eT
                ? {
                      name: 'remixing',
                      title: B.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_TITLE,
                      subtitle: B.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_SUBTITLE,
                      description: B.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_DESCRIPTION_SUB,
                      perkImage: ea,
                      pillText: B.Z.Messages.EARLY_ACCESS
                  }
                : {
                      name: 'remixing',
                      title: B.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_TITLE,
                      subtitle: B.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_SUBTITLE,
                      description: B.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_DESCRIPTION_NON_SUB,
                      perkImage: ea,
                      pillText: B.Z.Messages.EARLY_ACCESS
                  },
            serverBoosts: {
                name: 'serverBoosts',
                title: B.Z.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_BOOSTS_TITLE,
                subtitle: B.Z.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_BOOSTS_SUBTITLE,
                description: B.Z.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_BOOSTS_DESCRIPTION,
                descriptionCta: B.Z.Messages.TAKE_ME_THERE,
                onCtaClick: () => {
                    o.Z.open(Z.oAB.GUILD_BOOSTING, null, {
                        openWithoutBackstack: !0,
                        analyticsLocations: e
                    });
                },
                perkImage: V,
                hideOnNarrowScreen: !0
            },
            specialMemberPricing: eT
                ? {
                      name: 'specialMemberPricing',
                      title: B.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_TITLE,
                      subtitle: B.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_SUBTITLE_V2,
                      description: B.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_SUB,
                      descriptionCta: B.Z.Messages.VISIT_THE_SHOP_CTA,
                      onCtaClick: eh,
                      perkImage: ei
                  }
                : {
                      name: 'specialMemberPricing',
                      title: B.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_TITLE,
                      subtitle: B.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_SUBTITLE_V2,
                      description: B.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_NON_SUB,
                      isPremiumGetCta: !0,
                      perkImage: ei
                  },
            specialMemberPricingSeeAllVariant: eT
                ? {
                      name: 'specialMemberPricingSeeAllVariant',
                      title: B.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_TITLE,
                      subtitle: B.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_SUBTITLE_V2,
                      description: B.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_SUB,
                      descriptionCta: B.Z.Messages.VISIT_THE_SHOP_CTA,
                      onCtaClick: eh,
                      perkImage: el
                  }
                : {
                      name: 'specialMemberPricingSeeAllVariant',
                      title: B.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_TITLE,
                      subtitle: B.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_SUBTITLE_V2,
                      description: B.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_NON_SUB,
                      isPremiumGetCta: !0,
                      perkImage: el
                  },
            specialShopPerks: eT
                ? {
                      name: 'specialShopPerks',
                      title: B.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_SPECIAL_SHOP_PERKS_TITLE,
                      subtitle: B.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_SPECIAL_SHOP_PERKS_SUBTITLE,
                      description: B.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_SUB,
                      descriptionCta: B.Z.Messages.VISIT_THE_SHOP_CTA,
                      onCtaClick: eh,
                      perkImage: ei
                  }
                : {
                      name: 'specialShopPerks',
                      title: B.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_SPECIAL_SHOP_PERKS_TITLE,
                      subtitle: B.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_SPECIAL_SHOP_PERKS_SUBTITLE,
                      description: B.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_NON_SUB,
                      descriptionCta: B.Z.Messages.VISIT_THE_SHOP_CTA,
                      onCtaClick: eh,
                      perkImage: ei
                  },
            unlimitedSuperReactions: eT
                ? {
                      name: 'unlimitedSuperReactions',
                      title: B.Z.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_TITLE,
                      subtitle: B.Z.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_SUBTITLE,
                      description: B.Z.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_DESCRIPTION_SUB,
                      perkImage: e_,
                      hideOnNarrowScreen: !0
                  }
                : {
                      name: 'unlimitedSuperReactions',
                      title: B.Z.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_TITLE,
                      subtitle: B.Z.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_SUBTITLE,
                      description: B.Z.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_DESCRIPTION_NON_SUB,
                      isPremiumGetCta: !0,
                      perkImage: e_,
                      hideOnNarrowScreen: !0
                  },
            superReactions: {
                name: 'superReactions',
                title: B.Z.Messages.NITRO_HOME_SUPER_REACTIONS,
                subtitle: B.Z.Messages.NITRO_HOME_SUPER_REACTIONS_DESCRIPTION,
                description: B.Z.Messages.NITRO_HOME_CARD_INCLUDED_WITH_BASIC_AND_NITRO,
                perkImage: ed
            },
            upcomingDropUntimed: {
                name: 'upcomingDropUntimed',
                title: B.Z.Messages.NEW_DROP,
                pillText: B.Z.Messages.COMING_SOON,
                backgroundImage: et
            },
            badge: {
                name: 'badge',
                title: B.Z.Messages.NITRO_HOME_SUBSCRIBER_BADGE,
                subtitle: B.Z.Messages.NITRO_HOME_GET_THIS_SUBSCRIBER_BADGE,
                perkImage: G,
                description: B.Z.Messages.NITRO_HOME_SUBSCRIBER_BADGE_FOR_THE_COLLECTORS
            },
            customAppIcons: {
                name: 'customAppIcons',
                title: B.Z.Messages.PREMIUM_MARKETING_FEATURE_CUSTOM_APP_ICONS_TITLE,
                subtitle: B.Z.Messages.PREMIUM_MARKETING_FEATURE_CUSTOM_APP_ICONS_DESCRIPTION,
                perkImage: z,
                description: B.Z.Messages.NITRO_HOME_CARD_INCLUDED_WITH_BASIC_AND_NITRO,
                descriptionCta: B.Z.Messages.TAKE_ME_THERE,
                onCtaClick: eM
            },
            moreEmojiPower: {
                name: 'moreEmojiPower',
                title: B.Z.Messages.PREMIUM_MARKETING_FEATURE_EMOJI_TITLE,
                subtitle: B.Z.Messages.PREMIUM_MARKETING_EMOJI_PERK_TITLE,
                perkImage: J,
                description: B.Z.Messages.NITRO_HOME_CARD_CHOOSE_CUSTOM_EMOJI
            },
            customSoundsEverywhere: {
                name: 'customSoundsEverywhere',
                title: B.Z.Messages.NITRO_HOME_CARD_CUSTOM_SOUNDS_EVERYWHERE,
                subtitle: B.Z.Messages.NITRO_HOME_CARD_USE_CUSTOM_SOUNDS,
                perkImage: (0, P.gx)(t, y, w),
                description: B.Z.Messages.NITRO_HOME_CARD_INCLUDED_WITH_ONLY_NITRO
            },
            specialStickerAccess: {
                name: 'specialStickerAccess',
                title: B.Z.Messages.PREMIUM_MARKETING_STICKER_PERK_TITLE,
                subtitle: B.Z.Messages.PREMIUM_MARKETING_STICKER_PERK_LONG_DESCRIPTION,
                perkImage: (0, P.gx)(t, H, eo),
                description: B.Z.Messages.NITRO_HOME_CARD_INCLUDED_WITH_BASIC_AND_NITRO
            },
            largeUploads: {
                name: 'largeUploads',
                title: B.Z.Messages.PREMIUM_MARKETING_UPLOADS_SMALL_PERK_TITLE.format({ premiumMaxSize: n }),
                subtitle: B.Z.Messages.PREMIUM_MARKETING_UPLOADS_SMALL_PERK_DESCRIPTION.format({ premiumMaxSize: n }),
                perkImage: eu,
                description: B.Z.Messages.NITRO_HOME_CARD_UPLOAD_POWER
            },
            hdVideo: {
                name: 'hdVideo',
                title: B.Z.Messages.PREMIUM_MARKETING_FEATURE_PREMIUM_GO_LIVE_TITLE,
                subtitle: B.Z.Messages.PREMIUM_MARKETING_STREAMING_SMALL_PERK_DESCRIPTION,
                perkImage: ec,
                description: B.Z.Messages.NITRO_HOME_STREAM_UP_TO_4K
            },
            newAppStylesUpdateJune2024: {
                name: 'newAppStylesUpdateJune2024',
                title: B.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_NEW_APP_STYLES_TITLE,
                subtitle: B.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_NEW_APP_STYLES_SUBTITLE,
                description: B.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_NEW_APP_STYLES_DESCRIPTION,
                descriptionCta: eT || eI ? B.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_NITRO_NEW_APP_STYLES : B.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_NON_NITRO_NEW_APP_STYLES,
                isPremiumGetCta: !(eT || eI),
                onCtaClick: eT || eI ? eM : void 0,
                perkImage: ee
            },
            referralProgram: {
                name: 'referralProgram',
                title: B.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_REFERRAL_PROGRAM_TITLE,
                subtitle: B.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_REFERRAL_PROGRAM_SUBTITLE,
                description: B.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_REFERRAL_PROGRAM_DESCRIPTION.format({ helpdeskArticle: N.Z.getArticleURL(Z.BhN.REFERRAL_PROGRAM) }),
                descriptionCta: B.Z.Messages.MARKETING_PAGE_CTA_GET_NITRO,
                isPremiumGetCta: !eT || void 0,
                perkImage: es
            },
            serverProfiles: {
                name: 'serverProfiles',
                title: B.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_SERVER_PROFILES_TITLE,
                subtitle: B.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_SERVER_PRORFILES_SUBTITLE,
                descriptionCta: eT ? B.Z.Messages.TAKE_ME_THERE : B.Z.Messages.MARKETING_PAGE_CTA_GET_NITRO,
                isPremiumGetCta: !eT,
                onCtaClick: eT ? ef : void 0,
                perkImage: er
            }
        };
    if (null != eA) {
        let { title: t, subtitle: n, description: s, pillText: a, ctaDescription: i, dismissibleContentType: l } = eA,
            c = (0, r.jsx)('div', {
                className: j.cardComponent,
                children: (0, r.jsx)(x.Z, {
                    showAnimations: !0,
                    percentage: em,
                    initialPercentage: eN
                })
            });
        ex.freeBoost = {
            name: 'freeBoost',
            title: t,
            subtitle: n,
            description: s,
            perkComponent: c,
            descriptionCta: i,
            onCtaClick: () => {
                o.Z.open(Z.oAB.GUILD_BOOSTING, null, { analyticsLocations: e });
            },
            cardVariant: b.zW.REWARD,
            pillText: a,
            dismissibleContentType: l
        };
    }
    let eO = (0, v.kG)(),
        { enabled: eb } = (0, A.Z)(),
        { enabled: eP } = (0, f.Z)();
    return (
        null != eO &&
            eb &&
            eP &&
            (ex.tenureBadge = {
                name: 'tenureBadge',
                title: B.Z.Messages.NITRO_HOME_TIERED_TENURE_BADGES_WHATS_NEW_CARD_HEADER,
                pillText: B.Z.Messages.REWARD.toLocaleUpperCase(),
                perkComponent: (0, r.jsx)(O.Z, {}),
                cardVariant: b.zW.NITRO_GRADIENT_HOVER_BORDER
            }),
        (0, p.ZP)('usePerksDiscoverabilityCard') === p.P0.SUMMER_2024 &&
            (ex.shyProject = {
                name: 'shyProject',
                title: B.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_TITLE,
                subtitle: B.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_SUBTITLE_V2,
                description: eT ? B.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_SUB : B.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_NON_SUB,
                descriptionCta: B.Z.Messages.VISIT_THE_SHOP_CTA,
                pillText: B.Z.Messages.NITRO_HOME_TAB_NEW.toLocaleUpperCase(),
                onCtaClick: eT ? eh : void 0,
                perkImage: W,
                isPremiumGetCta: !eT
            }),
        ex
    );
};
