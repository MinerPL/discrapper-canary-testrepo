n.d(t, {
    u: function () {
        return a;
    }
});
var s, a, r = n(735250);
n(470079);
var i = n(399606), l = n(704215), o = n(230711), c = n(410030), d = n(100527), _ = n(906732), u = n(779618), E = n(300284), T = n(703656), I = n(547972), R = n(131951), C = n(78839), p = n(63063), g = n(74538), A = n(494127), m = n(314684), N = n(687362), f = n(119269), S = n(391110), h = n(75077), M = n(474936), x = n(981631), O = n(526761), b = n(332325), P = n(689938), L = n(660372), v = n(926433), Z = n(302036), D = n(994554), B = n(704565), j = n(393305), U = n(338879), G = n(203302), y = n(766491), H = n(193943), k = n(707046), w = n(488459), F = n(334347), V = n(132015), W = n(142416), K = n(607762), Y = n(474106), z = n(567452), Q = n(572501), J = n(755590), q = n(909910), X = n(637810), $ = n(570423), ee = n(912429), et = n(91394), en = n(209672), es = n(698173), ea = n(926262);
(s = a || (a = {})).AVATAR_DECORATIONS = 'avatarDecorations', s.CLIENT_THEMES = 'clientThemes', s.CLIPS = 'clips', s.EARLY_ACCESS = 'earlyAccess', s.ENTRANCE_SOUNDS = 'entranceSounds', s.PROFILE_EFFECTS = 'profileEffects', s.PROFILES = 'profiles', s.REMIXING = 'remixing', s.SERVER_BOOSTS = 'serverBoosts', s.SPECIAL_MEMBER_PRICING = 'specialMemberPricing', s.SPECIAL_MEMBER_PRICING_SEE_ALL_VARIANT = 'specialMemberPricingSeeAllVariant', s.SPECIAL_SHOP_PERKS = 'specialShopPerks', s.UNLIMITED_SUPER_REACTIONS = 'unlimitedSuperReactions', s.SUPER_REACTIONS = 'superReactions', s.UPCOMING_DROP_UNTIMED = 'upcomingDropUntimed', s.CUSTOM_APP_ICONS = 'customAppIcons', s.MORE_EMOJI_POWER = 'moreEmojiPower', s.CUSTOM_SOUNDS_EVERYWHERE = 'customSoundsEverywhere', s.SPECIAL_STICKER_ACCESS = 'specialStickerAccess', s.LARGE_UPLOADS = 'largeUploads', s.HD_VIDEO = 'hdVideo', s.BADGE = 'badge', s.ENTRANCE_SOUNDS_SEE_ALL_VARIATION = 'entranceSoundsSeeAllVariation', s.EARLY_ACCESS_SEE_ALL_VARIATION = 'earlyAccessSeeAllVariant', s.FREE_BOOST = 'freeBoost', s.REFERRAL_PROGRAM = 'referralProgram', s.NEW_APP_STYLES_UPDATE_JUNE_2024 = 'newAppStylesUpdateJune2024', s.SERVER_PROFILES = 'serverProfiles';
t.Z = () => {
    let {analyticsLocations: e} = (0, _.ZP)(d.Z.PREMIUM_MARKETING_PERK_CARD), t = (0, c.ZP)(), n = P.Z.Messages.FILE_UPLOAD_LIMIT_PREMIUM_TIER_2_INCREASE, s = (0, i.e7)([C.ZP], () => C.ZP.getPremiumTypeSubscription()), a = null != s ? g.ZP.getPremiumPlanItem(s) : null, er = null != a ? g.ZP.getSkuIdForPlan(a.planId) : null, ei = er === M.Si.TIER_2, el = er === M.Si.TIER_0, {flipped: eo} = (0, A.JP)(), {flipped: ec} = (0, A.as)(), ed = (0, m.nY)({ showAnimations: !0 }), e_ = null != ed ? ed.initialPercentage : void 0, eu = null != ed ? ed.percentage : void 0, eE = (0, u.Z)(R.Z), eT = (0, N.Z)(), eI = (0, E.Z)({
            scrollPosition: O.Y_.TRY_IT_OUT,
            analyticsLocations: e
        }), eR = () => {
            o.Z.open(x.oAB.VOICE, O.GA, {
                openWithoutBackstack: !0,
                analyticsLocations: e
            });
        }, eC = () => {
            (0, T.uL)(x.Z5c.COLLECTIBLES_SHOP);
        }, ep = () => {
            o.Z.open(x.oAB.APPEARANCE, null, { scrollPosition: O.h1.CUSTOM_APP_ICONS });
        }, eg = {
            avatarDecorations: ei ? {
                name: 'avatarDecorations',
                title: P.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_TITLE,
                subtitle: P.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_SUBTITLE_SUB,
                description: P.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_DESCRIPTION_SUB,
                descriptionCta: P.Z.Messages.VISIT_THE_SHOP_CTA,
                onCtaClick: eC,
                pillText: P.Z.Messages.EARLY_ACCESS,
                perkImage: G,
                canReveal: eo,
                dismissibleContentType: l.z.WHATS_NEW_AVATAR_DECOS_FLIP
            } : {
                name: 'avatarDecorations',
                title: P.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_TITLE,
                subtitle: P.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_SUBTITLE_NON_SUB,
                description: P.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_AVATAR_DECO_DESCRIPTION_NON_SUB,
                pillText: P.Z.Messages.EARLY_ACCESS,
                perkImage: G,
                canReveal: eo,
                dismissibleContentType: l.z.WHATS_NEW_AVATAR_DECOS_FLIP
            },
            clientThemes: {
                name: 'clientThemes',
                title: P.Z.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_THEMES_TITLE,
                subtitle: P.Z.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_THEMES_SUBTITLE,
                description: P.Z.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_THEMES_DESCRIPTION,
                descriptionCta: P.Z.Messages.TAKE_ME_THERE,
                onCtaClick: () => {
                    o.Z.open(x.oAB.APPEARANCE, null, {
                        openWithoutBackstack: !0,
                        analyticsLocations: e
                    });
                },
                perkImage: B
            },
            clips: ei ? {
                name: 'clips',
                title: P.Z.Messages.CLIPS,
                subtitle: P.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_CLIPS_SUBTITLE,
                description: P.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_CLIPS_DESCRIPTION_SUB,
                descriptionCta: eE ? P.Z.Messages.TAKE_ME_THERE : P.Z.Messages.LEARN_MORE,
                pillText: P.Z.Messages.EARLY_ACCESS,
                onCtaClick: eE ? () => {
                    (0, I.Z)(b.Z.CLIPS, {
                        openWithoutBackstack: !0,
                        analyticsLocations: e
                    });
                } : () => {
                    window.open(p.Z.getArticleURL(x.BhN.CLIPS), '_blank');
                },
                perkImage: y
            } : {
                name: 'clips',
                title: P.Z.Messages.CLIPS,
                subtitle: P.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_CLIPS_SUBTITLE,
                description: P.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_CLIPS_DESCRIPTION_NON_SUB,
                pillText: P.Z.Messages.EARLY_ACCESS,
                perkImage: y
            },
            earlyAccess: ei ? {
                name: 'earlyAccess',
                title: P.Z.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_TITLE,
                subtitle: P.Z.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_SUBTITLE_V2,
                description: P.Z.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_DESCRIPTION_SUB,
                perkImage: k
            } : {
                name: 'earlyAccess',
                title: P.Z.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_TITLE,
                subtitle: P.Z.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_SUBTITLE_V2,
                description: P.Z.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_DESCRIPTION_NON_SUB,
                isPremiumGetCta: !0,
                perkImage: k
            },
            earlyAccessSeeAllVariant: ei ? {
                name: 'earlyAccessSeeAllVariant',
                title: P.Z.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_TITLE,
                subtitle: P.Z.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_SUBTITLE_V2,
                description: P.Z.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_DESCRIPTION_SUB,
                perkImage: w
            } : {
                name: 'earlyAccess',
                title: P.Z.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_TITLE,
                subtitle: P.Z.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_SUBTITLE_V2,
                description: P.Z.Messages.Q4_DROP_WHATS_NEW_EARLY_ACCESS_CARD_DESCRIPTION_NON_SUB,
                isPremiumGetCta: !0,
                perkImage: w
            },
            entranceSounds: ei ? {
                name: 'entranceSounds',
                title: P.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_TITLE,
                subtitle: P.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_SUBTITLE,
                description: P.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_DESCRIPTION_SUB,
                descriptionCta: P.Z.Messages.TAKE_ME_THERE,
                onCtaClick: eR,
                perkImage: V
            } : {
                name: 'entranceSounds',
                title: P.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_TITLE,
                subtitle: P.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_SUBTITLE,
                description: P.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_DESCRIPTION_NON_SUB,
                perkImage: V
            },
            entranceSoundsSeeAllVariation: ei ? {
                name: 'entranceSoundsSeeAllVariation',
                title: P.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_TITLE,
                subtitle: P.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_SUBTITLE,
                description: P.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_DESCRIPTION_SUB,
                descriptionCta: P.Z.Messages.TAKE_ME_THERE,
                onCtaClick: eR,
                perkImage: W
            } : {
                name: 'entranceSoundsSeeAllVariation',
                title: P.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_TITLE,
                subtitle: P.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_SUBTITLE,
                description: P.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_ENTRANCE_SOUNDS_DESCRIPTION_NON_SUB,
                perkImage: W
            },
            profileEffects: ei ? {
                name: 'profileEffects',
                title: P.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_TITLE,
                subtitle: P.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_SUBTITLE,
                description: P.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_DESCRIPTION_SUB,
                descriptionCta: P.Z.Messages.VISIT_THE_SHOP_CTA,
                onCtaClick: eC,
                pillText: P.Z.Messages.EARLY_ACCESS,
                perkImage: z,
                canReveal: ec,
                dismissibleContentType: l.z.WHATS_NEW_PROFILE_EFFECTS_FLIP
            } : {
                name: 'profileEffects',
                title: P.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_TITLE,
                subtitle: P.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_SUBTITLE,
                description: P.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_DESCRIPTION_NON_SUB,
                pillText: P.Z.Messages.EARLY_ACCESS,
                perkImage: z,
                canReveal: ec,
                dismissibleContentType: l.z.WHATS_NEW_PROFILE_EFFECTS_FLIP
            },
            profiles: {
                name: 'profiles',
                title: P.Z.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_PROFILES_TITLE,
                subtitle: P.Z.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_PROFILES_SUBTITLE,
                description: P.Z.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_PROFILES_DESCRIPTION,
                descriptionCta: P.Z.Messages.TAKE_ME_THERE,
                onCtaClick: eI,
                perkImage: j
            },
            remixing: ei ? {
                name: 'remixing',
                title: P.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_TITLE,
                subtitle: P.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_SUBTITLE,
                description: P.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_DESCRIPTION_SUB,
                perkImage: J,
                pillText: P.Z.Messages.EARLY_ACCESS
            } : {
                name: 'remixing',
                title: P.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_TITLE,
                subtitle: P.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_SUBTITLE,
                description: P.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_REMIXING_DESCRIPTION_NON_SUB,
                perkImage: J,
                pillText: P.Z.Messages.EARLY_ACCESS
            },
            serverBoosts: {
                name: 'serverBoosts',
                title: P.Z.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_BOOSTS_TITLE,
                subtitle: P.Z.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_BOOSTS_SUBTITLE,
                description: P.Z.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_BOOSTS_DESCRIPTION,
                descriptionCta: P.Z.Messages.TAKE_ME_THERE,
                onCtaClick: () => {
                    o.Z.open(x.oAB.GUILD_BOOSTING, null, {
                        openWithoutBackstack: !0,
                        analyticsLocations: e
                    });
                },
                perkImage: U,
                hideOnNarrowScreen: !0
            },
            specialMemberPricing: ei ? {
                name: 'specialMemberPricing',
                title: P.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_TITLE,
                subtitle: P.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_SUBTITLE_V2,
                description: P.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_SUB,
                descriptionCta: P.Z.Messages.VISIT_THE_SHOP_CTA,
                onCtaClick: eC,
                perkImage: X
            } : {
                name: 'specialMemberPricing',
                title: P.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_TITLE,
                subtitle: P.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_SUBTITLE_V2,
                description: P.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_NON_SUB,
                isPremiumGetCta: !0,
                perkImage: X
            },
            specialMemberPricingSeeAllVariant: ei ? {
                name: 'specialMemberPricingSeeAllVariant',
                title: P.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_TITLE,
                subtitle: P.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_SUBTITLE_V2,
                description: P.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_SUB,
                descriptionCta: P.Z.Messages.VISIT_THE_SHOP_CTA,
                onCtaClick: eC,
                perkImage: $
            } : {
                name: 'specialMemberPricingSeeAllVariant',
                title: P.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_TITLE,
                subtitle: P.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_SUBTITLE_V2,
                description: P.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_NON_SUB,
                isPremiumGetCta: !0,
                perkImage: $
            },
            specialShopPerks: ei ? {
                name: 'specialShopPerks',
                title: P.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_SPECIAL_SHOP_PERKS_TITLE,
                subtitle: P.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_SPECIAL_SHOP_PERKS_SUBTITLE,
                description: P.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_SUB,
                descriptionCta: P.Z.Messages.VISIT_THE_SHOP_CTA,
                onCtaClick: eC,
                perkImage: X
            } : {
                name: 'specialShopPerks',
                title: P.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_SPECIAL_SHOP_PERKS_TITLE,
                subtitle: P.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_SPECIAL_SHOP_PERKS_SUBTITLE,
                description: P.Z.Messages.Q4_DROP_WHATS_NEW_SPECIAL_PRICING_CARD_DESCRIPTION_NON_SUB,
                descriptionCta: P.Z.Messages.VISIT_THE_SHOP_CTA,
                onCtaClick: eC,
                perkImage: X
            },
            unlimitedSuperReactions: ei ? {
                name: 'unlimitedSuperReactions',
                title: P.Z.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_TITLE,
                subtitle: P.Z.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_SUBTITLE,
                description: P.Z.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_DESCRIPTION_SUB,
                perkImage: es,
                hideOnNarrowScreen: !0
            } : {
                name: 'unlimitedSuperReactions',
                title: P.Z.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_TITLE,
                subtitle: P.Z.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_SUBTITLE,
                description: P.Z.Messages.Q4_DROP_WHATS_NEW_UNLIMITED_SUPER_REACTIONS_CARD_DESCRIPTION_NON_SUB,
                isPremiumGetCta: !0,
                perkImage: es,
                hideOnNarrowScreen: !0
            },
            superReactions: {
                name: 'superReactions',
                title: P.Z.Messages.NITRO_HOME_SUPER_REACTIONS,
                subtitle: P.Z.Messages.NITRO_HOME_SUPER_REACTIONS_DESCRIPTION,
                description: P.Z.Messages.NITRO_HOME_CARD_INCLUDED_WITH_BASIC_AND_NITRO,
                perkImage: en
            },
            upcomingDropUntimed: {
                name: 'upcomingDropUntimed',
                title: P.Z.Messages.NEW_DROP,
                pillText: P.Z.Messages.COMING_SOON,
                backgroundImage: Y
            },
            badge: {
                name: 'badge',
                title: P.Z.Messages.NITRO_HOME_SUBSCRIBER_BADGE,
                subtitle: P.Z.Messages.NITRO_HOME_GET_THIS_SUBSCRIBER_BADGE,
                perkImage: L,
                description: P.Z.Messages.NITRO_HOME_SUBSCRIBER_BADGE_FOR_THE_COLLECTORS
            },
            customAppIcons: {
                name: 'customAppIcons',
                title: P.Z.Messages.PREMIUM_MARKETING_FEATURE_CUSTOM_APP_ICONS_TITLE,
                subtitle: P.Z.Messages.PREMIUM_MARKETING_FEATURE_CUSTOM_APP_ICONS_DESCRIPTION,
                perkImage: H,
                description: P.Z.Messages.NITRO_HOME_CARD_INCLUDED_WITH_BASIC_AND_NITRO,
                descriptionCta: P.Z.Messages.TAKE_ME_THERE,
                onCtaClick: ep
            },
            moreEmojiPower: {
                name: 'moreEmojiPower',
                title: P.Z.Messages.PREMIUM_MARKETING_FEATURE_EMOJI_TITLE,
                subtitle: P.Z.Messages.PREMIUM_MARKETING_EMOJI_PERK_TITLE,
                perkImage: F,
                description: P.Z.Messages.NITRO_HOME_CARD_CHOOSE_CUSTOM_EMOJI
            },
            customSoundsEverywhere: {
                name: 'customSoundsEverywhere',
                title: P.Z.Messages.NITRO_HOME_CARD_CUSTOM_SOUNDS_EVERYWHERE,
                subtitle: P.Z.Messages.NITRO_HOME_CARD_USE_CUSTOM_SOUNDS,
                perkImage: (0, h.gx)(t, v, Z),
                description: P.Z.Messages.NITRO_HOME_CARD_INCLUDED_WITH_ONLY_NITRO
            },
            specialStickerAccess: {
                name: 'specialStickerAccess',
                title: P.Z.Messages.PREMIUM_MARKETING_STICKER_PERK_TITLE,
                subtitle: P.Z.Messages.PREMIUM_MARKETING_STICKER_PERK_LONG_DESCRIPTION,
                perkImage: (0, h.gx)(t, D, ee),
                description: P.Z.Messages.NITRO_HOME_CARD_INCLUDED_WITH_BASIC_AND_NITRO
            },
            largeUploads: {
                name: 'largeUploads',
                title: P.Z.Messages.PREMIUM_MARKETING_UPLOADS_SMALL_PERK_TITLE.format({ premiumMaxSize: n }),
                subtitle: P.Z.Messages.NITRO_HOME_UPLOAD_ALL_YOU_WANT,
                perkImage: ea,
                description: P.Z.Messages.NITRO_HOME_CARD_UPLOAD_POWER
            },
            hdVideo: {
                name: 'hdVideo',
                title: P.Z.Messages.PREMIUM_MARKETING_FEATURE_PREMIUM_GO_LIVE_TITLE,
                subtitle: P.Z.Messages.PREMIUM_MARKETING_STREAMING_SMALL_PERK_DESCRIPTION,
                perkImage: et,
                description: P.Z.Messages.NITRO_HOME_STREAM_UP_TO_4K
            },
            newAppStylesUpdateJune2024: {
                name: 'newAppStylesUpdateJune2024',
                title: P.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_NEW_APP_STYLES_TITLE,
                subtitle: P.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_NEW_APP_STYLES_SUBTITLE,
                description: P.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_NEW_APP_STYLES_DESCRIPTION,
                descriptionCta: ei || el ? P.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_NITRO_NEW_APP_STYLES : P.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_NON_NITRO_NEW_APP_STYLES,
                isPremiumGetCta: !(ei || el),
                onCtaClick: ei || el ? ep : void 0,
                perkImage: K
            },
            referralProgram: {
                name: 'referralProgram',
                title: P.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_REFERRAL_PROGRAM_TITLE,
                subtitle: P.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_REFERRAL_PROGRAM_SUBTITLE,
                description: P.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_REFERRAL_PROGRAM_DESCRIPTION.format({ helpdeskArticle: p.Z.getArticleURL(x.BhN.REFERRAL_PROGRAM) }),
                descriptionCta: P.Z.Messages.MARKETING_PAGE_CTA_GET_NITRO,
                isPremiumGetCta: !ei || void 0,
                perkImage: Q
            },
            serverProfiles: {
                name: 'serverProfiles',
                title: P.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_SERVER_PROFILES_TITLE,
                subtitle: P.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_SERVER_PRORFILES_SUBTITLE,
                descriptionCta: ei ? P.Z.Messages.TAKE_ME_THERE : P.Z.Messages.MARKETING_PAGE_CTA_GET_NITRO,
                isPremiumGetCta: !ei,
                onCtaClick: ei ? eI : void 0,
                perkImage: q
            }
        };
    if (null != eT) {
        let {
                title: t,
                subtitle: n,
                description: s,
                pillText: a,
                ctaDescription: i,
                dismissibleContentType: l
            } = eT, c = (0, r.jsx)(f.Z, {
                showAnimations: !0,
                percentage: eu,
                initialPercentage: e_
            });
        eg.freeBoost = {
            name: 'freeBoost',
            title: t,
            subtitle: n,
            description: s,
            perkComponent: c,
            descriptionCta: i,
            onCtaClick: () => {
                o.Z.open(x.oAB.GUILD_BOOSTING, null, { analyticsLocations: e });
            },
            cardVariant: S.zW.REWARD,
            pillText: a,
            dismissibleContentType: l
        };
    }
    return eg;
};
