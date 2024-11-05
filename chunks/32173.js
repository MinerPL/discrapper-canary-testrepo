n.d(t, {
    u: function () {
        return r;
    }
});
var i,
    r,
    a = n(200651);
n(192379);
var s = n(399606),
    l = n(704215),
    o = n(481060),
    c = n(230711),
    d = n(410030),
    u = n(100527),
    g = n(906732),
    m = n(975298),
    f = n(779618),
    p = n(300284),
    _ = n(703656),
    h = n(547972),
    x = n(131951),
    E = n(78839),
    b = n(626135),
    C = n(424218),
    v = n(63063),
    T = n(74538),
    N = n(860489),
    I = n(471309),
    S = n(494127),
    R = n(314684),
    A = n(687362),
    j = n(119269),
    P = n(467685),
    O = n(391110),
    Z = n(75077),
    M = n(976465),
    w = n(474936),
    B = n(981631),
    y = n(526761),
    k = n(332325),
    L = n(388032),
    U = n(977341),
    D = n(660372),
    G = n(926433),
    H = n(302036),
    V = n(994554),
    F = n(704565),
    W = n(393305),
    z = n(338879),
    Y = n(609926),
    K = n(203302),
    Q = n(766491),
    J = n(193943),
    q = n(707046),
    X = n(488459),
    $ = n(334347),
    ee = n(132015),
    et = n(142416),
    en = n(607762),
    ei = n(474106),
    er = n(567452),
    ea = n(572501),
    es = n(755590),
    el = n(909910),
    eo = n(637810),
    ec = n(570423),
    ed = n(912429),
    eu = n(91394),
    eg = n(209672),
    em = n(698173),
    ef = n(926262);
((i = r || (r = {})).AVATAR_DECORATIONS = 'avatarDecorations'), (i.CLIENT_THEMES = 'clientThemes'), (i.CLIPS = 'clips'), (i.EARLY_ACCESS = 'earlyAccess'), (i.ENTRANCE_SOUNDS = 'entranceSounds'), (i.PROFILE_EFFECTS = 'profileEffects'), (i.PROFILES = 'profiles'), (i.REMIXING = 'remixing'), (i.SERVER_BOOSTS = 'serverBoosts'), (i.SPECIAL_MEMBER_PRICING = 'specialMemberPricing'), (i.SPECIAL_MEMBER_PRICING_SEE_ALL_VARIANT = 'specialMemberPricingSeeAllVariant'), (i.SPECIAL_SHOP_PERKS = 'specialShopPerks'), (i.UNLIMITED_SUPER_REACTIONS = 'unlimitedSuperReactions'), (i.SUPER_REACTIONS = 'superReactions'), (i.UPCOMING_DROP_UNTIMED = 'upcomingDropUntimed'), (i.CUSTOM_APP_ICONS = 'customAppIcons'), (i.MORE_EMOJI_POWER = 'moreEmojiPower'), (i.CUSTOM_SOUNDS_EVERYWHERE = 'customSoundsEverywhere'), (i.SPECIAL_STICKER_ACCESS = 'specialStickerAccess'), (i.LARGE_UPLOADS = 'largeUploads'), (i.HD_VIDEO = 'hdVideo'), (i.BADGE = 'badge'), (i.ENTRANCE_SOUNDS_SEE_ALL_VARIATION = 'entranceSoundsSeeAllVariation'), (i.EARLY_ACCESS_SEE_ALL_VARIATION = 'earlyAccessSeeAllVariant'), (i.FREE_BOOST = 'freeBoost'), (i.REFERRAL_PROGRAM = 'referralProgram'), (i.NEW_APP_STYLES_UPDATE_JUNE_2024 = 'newAppStylesUpdateJune2024'), (i.SERVER_PROFILES = 'serverProfiles'), (i.SHY_PROJECT = 'shyProject'), (i.TENURE_BADGE = 'tenureBadge');
t.Z = () => {
    let { analyticsLocations: e } = (0, g.ZP)(u.Z.PREMIUM_MARKETING_PERK_CARD),
        t = (0, d.ZP)(),
        i = (0, C.BU)(w.Uq / 1024, { useKibibytes: !0 }),
        r = (0, s.e7)([E.ZP], () => E.ZP.getPremiumTypeSubscription()),
        ep = null != r ? T.ZP.getPremiumPlanItem(r) : null,
        e_ = null != ep ? T.ZP.getSkuIdForPlan(ep.planId) : null,
        eh = e_ === w.Si.TIER_2,
        ex = e_ === w.Si.TIER_0,
        { flipped: eE } = (0, S.JP)(),
        { flipped: eb } = (0, S.as)(),
        eC = (0, R.nY)({ showAnimations: !0 }),
        ev = null != eC ? eC.initialPercentage : void 0,
        eT = null != eC ? eC.percentage : void 0,
        eN = (0, f.Z)(x.Z),
        eI = (0, A.Z)(),
        { fractionalState: eS } = (0, m.Z)(),
        eR = eS === w.a$.FP_ONLY,
        eA = (0, p.Z)({
            scrollPosition: y.Y_.TRY_IT_OUT,
            analyticsLocations: e
        }),
        ej = () => {
            c.Z.open(B.oAB.VOICE, y.GA, {
                openWithoutBackstack: !0,
                analyticsLocations: e
            });
        },
        eP = () => {
            (0, _.uL)(B.Z5c.COLLECTIBLES_SHOP);
        },
        eO = () => {
            c.Z.open(B.oAB.APPEARANCE, null, { scrollPosition: y.h1.CUSTOM_APP_ICONS });
        },
        eZ = {
            avatarDecorations: eh
                ? {
                      name: 'avatarDecorations',
                      title: L.intl.string(L.t['5YcGTk']),
                      subtitle: L.intl.string(L.t.QcJ6cX),
                      description: L.intl.string(L.t.MCvgWl),
                      descriptionCta: L.intl.string(L.t.dBJVnZ),
                      onCtaClick: eP,
                      pillText: L.intl.string(L.t.EYxi0t),
                      perkImage: K,
                      canReveal: eE,
                      dismissibleContentType: l.z.WHATS_NEW_AVATAR_DECOS_FLIP
                  }
                : {
                      name: 'avatarDecorations',
                      title: L.intl.string(L.t['5YcGTk']),
                      subtitle: L.intl.string(L.t['1QvWws']),
                      description: L.intl.string(L.t['2GPNr6']),
                      pillText: L.intl.string(L.t.EYxi0t),
                      perkImage: K,
                      canReveal: eE,
                      dismissibleContentType: l.z.WHATS_NEW_AVATAR_DECOS_FLIP
                  },
            clientThemes: {
                name: 'clientThemes',
                title: L.intl.string(L.t.kWM48P),
                subtitle: L.intl.string(L.t.CjRASE),
                description: L.intl.string(L.t.jBTTws),
                descriptionCta: L.intl.string(L.t.jVcuVV),
                onCtaClick: () => {
                    c.Z.open(B.oAB.APPEARANCE, null, {
                        openWithoutBackstack: !0,
                        analyticsLocations: e
                    });
                },
                perkImage: F
            },
            clips: eh
                ? {
                      name: 'clips',
                      title: L.intl.string(L.t.z2jK6e),
                      subtitle: L.intl.string(L.t['hxy0/f']),
                      description: L.intl.string(L.t.Z6v86e),
                      descriptionCta: eN ? L.intl.string(L.t.jVcuVV) : L.intl.string(L.t.hvVgAQ),
                      pillText: L.intl.string(L.t.EYxi0t),
                      onCtaClick: eN
                          ? () => {
                                (0, h.Z)(k.Z.CLIPS, {
                                    openWithoutBackstack: !0,
                                    analyticsLocations: e
                                });
                            }
                          : () => {
                                window.open(v.Z.getArticleURL(B.BhN.CLIPS), '_blank');
                            },
                      perkImage: Q
                  }
                : {
                      name: 'clips',
                      title: L.intl.string(L.t.z2jK6e),
                      subtitle: L.intl.string(L.t['hxy0/f']),
                      description: L.intl.string(L.t.X9IeNz),
                      pillText: L.intl.string(L.t.EYxi0t),
                      perkImage: Q
                  },
            earlyAccess: eh
                ? {
                      name: 'earlyAccess',
                      title: L.intl.string(L.t.UkLVeH),
                      subtitle: L.intl.string(L.t.xf9ePj),
                      description: L.intl.string(L.t['+r4vdn']),
                      perkImage: q
                  }
                : {
                      name: 'earlyAccess',
                      title: L.intl.string(L.t.UkLVeH),
                      subtitle: L.intl.string(L.t.xf9ePj),
                      description: L.intl.string(L.t['6+xTcn']),
                      isPremiumGetCta: !0,
                      perkImage: q
                  },
            earlyAccessSeeAllVariant: eh
                ? {
                      name: 'earlyAccessSeeAllVariant',
                      title: L.intl.string(L.t.UkLVeH),
                      subtitle: L.intl.string(L.t.xf9ePj),
                      description: L.intl.string(L.t['+r4vdn']),
                      perkImage: X
                  }
                : {
                      name: 'earlyAccess',
                      title: L.intl.string(L.t.UkLVeH),
                      subtitle: L.intl.string(L.t.xf9ePj),
                      description: L.intl.string(L.t['6+xTcn']),
                      isPremiumGetCta: !0,
                      perkImage: X
                  },
            entranceSounds: eh
                ? {
                      name: 'entranceSounds',
                      title: L.intl.string(L.t['f4M+Hx']),
                      subtitle: L.intl.string(L.t['7ZCYvL']),
                      description: L.intl.string(L.t.mUT8bG),
                      descriptionCta: L.intl.string(L.t.jVcuVV),
                      onCtaClick: ej,
                      perkImage: ee
                  }
                : {
                      name: 'entranceSounds',
                      title: L.intl.string(L.t['f4M+Hx']),
                      subtitle: L.intl.string(L.t['7ZCYvL']),
                      description: L.intl.string(L.t['3smf/f']),
                      perkImage: ee
                  },
            entranceSoundsSeeAllVariation: eh
                ? {
                      name: 'entranceSoundsSeeAllVariation',
                      title: L.intl.string(L.t['f4M+Hx']),
                      subtitle: L.intl.string(L.t['7ZCYvL']),
                      description: L.intl.string(L.t.mUT8bG),
                      descriptionCta: L.intl.string(L.t.jVcuVV),
                      onCtaClick: ej,
                      perkImage: et
                  }
                : {
                      name: 'entranceSoundsSeeAllVariation',
                      title: L.intl.string(L.t['f4M+Hx']),
                      subtitle: L.intl.string(L.t['7ZCYvL']),
                      description: L.intl.string(L.t['3smf/f']),
                      perkImage: et
                  },
            profileEffects: eh
                ? {
                      name: 'profileEffects',
                      title: L.intl.string(L.t.c7OKaG),
                      subtitle: L.intl.string(L.t.eVvkDw),
                      description: L.intl.string(L.t['0mUM/P']),
                      descriptionCta: L.intl.string(L.t.dBJVnZ),
                      onCtaClick: eP,
                      pillText: L.intl.string(L.t.EYxi0t),
                      perkImage: er,
                      canReveal: eb,
                      dismissibleContentType: l.z.WHATS_NEW_PROFILE_EFFECTS_FLIP
                  }
                : {
                      name: 'profileEffects',
                      title: L.intl.string(L.t.c7OKaG),
                      subtitle: L.intl.string(L.t.eVvkDw),
                      description: L.intl.string(L.t.XNKnvr),
                      pillText: L.intl.string(L.t.EYxi0t),
                      perkImage: er,
                      canReveal: eb,
                      dismissibleContentType: l.z.WHATS_NEW_PROFILE_EFFECTS_FLIP
                  },
            profiles: {
                name: 'profiles',
                title: L.intl.string(L.t.KcyDwM),
                subtitle: L.intl.string(L.t.Mt3U1d),
                description: L.intl.string(L.t.kWcDKy),
                descriptionCta: L.intl.string(L.t.jVcuVV),
                onCtaClick: eA,
                perkImage: W
            },
            remixing: eh
                ? {
                      name: 'remixing',
                      title: L.intl.string(L.t['H+v6eX']),
                      subtitle: L.intl.string(L.t.wmbOAg),
                      description: L.intl.string(L.t.gdA9FB),
                      perkImage: es,
                      pillText: L.intl.string(L.t.EYxi0t)
                  }
                : {
                      name: 'remixing',
                      title: L.intl.string(L.t['H+v6eX']),
                      subtitle: L.intl.string(L.t.wmbOAg),
                      description: L.intl.string(L.t.fiLtJi),
                      perkImage: es,
                      pillText: L.intl.string(L.t.EYxi0t)
                  },
            serverBoosts: {
                name: 'serverBoosts',
                title: L.intl.string(L.t['NyDu//']),
                subtitle: L.intl.string(L.t['4pEwXF']),
                description: eR ? L.intl.format(L.t.uPiIBQ, { link: 'https://discord.com' }) : L.intl.string(L.t.jsyNHh),
                descriptionCta: L.intl.string(L.t.jVcuVV),
                onCtaClick: eR
                    ? void 0
                    : () => {
                          c.Z.open(B.oAB.GUILD_BOOSTING, null, {
                              openWithoutBackstack: !0,
                              analyticsLocations: e
                          });
                      },
                perkImage: z,
                hideOnNarrowScreen: !eR,
                imageOverlayText: eR ? L.intl.string(L.t.lcYttb) : void 0
            },
            specialMemberPricing: eh
                ? {
                      name: 'specialMemberPricing',
                      title: L.intl.string(L.t['0Mykgo']),
                      subtitle: L.intl.string(L.t.opgqDQ),
                      description: L.intl.string(L.t['t+QZSU']),
                      descriptionCta: L.intl.string(L.t.dBJVnZ),
                      onCtaClick: eP,
                      perkImage: eo
                  }
                : {
                      name: 'specialMemberPricing',
                      title: L.intl.string(L.t['0Mykgo']),
                      subtitle: L.intl.string(L.t.opgqDQ),
                      description: L.intl.string(L.t['JE/EWV']),
                      isPremiumGetCta: !0,
                      perkImage: eo
                  },
            specialMemberPricingSeeAllVariant: eh
                ? {
                      name: 'specialMemberPricingSeeAllVariant',
                      title: L.intl.string(L.t['0Mykgo']),
                      subtitle: L.intl.string(L.t.opgqDQ),
                      description: L.intl.string(L.t['t+QZSU']),
                      descriptionCta: L.intl.string(L.t.dBJVnZ),
                      onCtaClick: eP,
                      perkImage: ec
                  }
                : {
                      name: 'specialMemberPricingSeeAllVariant',
                      title: L.intl.string(L.t['0Mykgo']),
                      subtitle: L.intl.string(L.t.opgqDQ),
                      description: L.intl.string(L.t['JE/EWV']),
                      isPremiumGetCta: !0,
                      perkImage: ec
                  },
            specialShopPerks: eh
                ? {
                      name: 'specialShopPerks',
                      title: L.intl.string(L.t.U68LpK),
                      subtitle: L.intl.string(L.t.chRZiY),
                      description: L.intl.string(L.t['t+QZSU']),
                      descriptionCta: L.intl.string(L.t.dBJVnZ),
                      onCtaClick: eP,
                      perkImage: eo
                  }
                : {
                      name: 'specialShopPerks',
                      title: L.intl.string(L.t.U68LpK),
                      subtitle: L.intl.string(L.t.chRZiY),
                      description: L.intl.string(L.t['JE/EWV']),
                      descriptionCta: L.intl.string(L.t.dBJVnZ),
                      onCtaClick: eP,
                      perkImage: eo
                  },
            unlimitedSuperReactions: eh
                ? {
                      name: 'unlimitedSuperReactions',
                      title: L.intl.string(L.t.hpgmOz),
                      subtitle: L.intl.string(L.t.Hxujsr),
                      description: L.intl.string(L.t['Cn/z6+']),
                      perkImage: em,
                      hideOnNarrowScreen: !0
                  }
                : {
                      name: 'unlimitedSuperReactions',
                      title: L.intl.string(L.t.hpgmOz),
                      subtitle: L.intl.string(L.t.Hxujsr),
                      description: L.intl.string(L.t.TF7cPT),
                      isPremiumGetCta: !0,
                      perkImage: em,
                      hideOnNarrowScreen: !0
                  },
            superReactions: {
                name: 'superReactions',
                title: L.intl.string(L.t['6S7kOz']),
                subtitle: L.intl.string(L.t.kN1JRE),
                description: L.intl.string(L.t.e7FKCg),
                perkImage: eg
            },
            upcomingDropUntimed: {
                name: 'upcomingDropUntimed',
                title: L.intl.string(L.t.O5R3ho),
                pillText: L.intl.string(L.t.yhEY5O),
                backgroundImage: ei
            },
            badge: {
                name: 'badge',
                title: L.intl.string(L.t.dcFfSE),
                subtitle: L.intl.string(L.t['37MFFh']),
                perkImage: D,
                description: L.intl.string(L.t.T1IS4u),
                imageOverlayText: eS === w.a$.FP_ONLY ? L.intl.string(L.t.lcYttb) : void 0
            },
            customAppIcons: {
                name: 'customAppIcons',
                title: L.intl.string(L.t.OuItFh),
                subtitle: L.intl.string(L.t.mPyrEx),
                perkImage: J,
                description: L.intl.string(L.t.e7FKCg),
                descriptionCta: L.intl.string(L.t.jVcuVV),
                onCtaClick: eO
            },
            moreEmojiPower: {
                name: 'moreEmojiPower',
                title: L.intl.string(L.t['R2IV/f']),
                subtitle: L.intl.string(L.t.R5Xag4),
                perkImage: $,
                description: L.intl.string(L.t['8lsjS0'])
            },
            customSoundsEverywhere: {
                name: 'customSoundsEverywhere',
                title: L.intl.string(L.t.LWsAra),
                subtitle: L.intl.string(L.t.bTzbVl),
                perkImage: (0, Z.gx)(t, G, H),
                description: L.intl.string(L.t.JLnOMz)
            },
            specialStickerAccess: {
                name: 'specialStickerAccess',
                title: L.intl.string(L.t.tzdIwM),
                subtitle: L.intl.string(L.t.FXlU29),
                perkImage: (0, Z.gx)(t, V, ed),
                description: L.intl.string(L.t.e7FKCg)
            },
            largeUploads: {
                name: 'largeUploads',
                title: L.intl.formatToPlainString(L.t.jqhAdH, { premiumMaxSize: i }),
                subtitle: L.intl.formatToPlainString(L.t['HI+cfn'], { premiumMaxSize: i }),
                perkImage: ef,
                description: L.intl.string(L.t['R0gx+/'])
            },
            hdVideo: {
                name: 'hdVideo',
                title: L.intl.string(L.t.RSXQYG),
                subtitle: L.intl.string(L.t.ymCPxs),
                perkImage: eu,
                description: L.intl.string(L.t['4WgB//'])
            },
            newAppStylesUpdateJune2024: {
                name: 'newAppStylesUpdateJune2024',
                title: L.intl.string(L.t.XQCSrq),
                subtitle: L.intl.string(L.t.HC5wVV),
                description: L.intl.string(L.t.ee7wQ0),
                descriptionCta: eh || ex ? L.intl.string(L.t.y9TxXV) : L.intl.string(L.t.d8o6lZ),
                isPremiumGetCta: !(eh || ex),
                onCtaClick: eh || ex ? eO : void 0,
                perkImage: en
            },
            referralProgram: {
                name: 'referralProgram',
                title: L.intl.string(L.t.tPY4o6),
                subtitle: L.intl.string(L.t.JY0grK),
                description: L.intl.format(L.t['2JqTFx'], { helpdeskArticle: v.Z.getArticleURL(B.BhN.REFERRAL_PROGRAM) }),
                descriptionCta: L.intl.string(L.t.JST6jo),
                isPremiumGetCta: !eh || void 0,
                perkImage: ea
            },
            serverProfiles: {
                name: 'serverProfiles',
                title: L.intl.string(L.t.I9TYMj),
                subtitle: L.intl.string(L.t.HMSHeH),
                descriptionCta: eh ? L.intl.string(L.t.jVcuVV) : L.intl.string(L.t.JST6jo),
                isPremiumGetCta: !eh,
                onCtaClick: eh ? eA : void 0,
                perkImage: el
            }
        };
    if (null != eI) {
        let { title: t, subtitle: n, description: i, pillText: r, ctaDescription: s, dismissibleContentType: l } = eI,
            o = (0, a.jsx)('div', {
                className: U.cardComponent,
                children: (0, a.jsx)(j.Z, {
                    showAnimations: !0,
                    percentage: eT,
                    initialPercentage: ev
                })
            });
        eZ.freeBoost = {
            name: 'freeBoost',
            title: t,
            subtitle: n,
            description: i,
            perkComponent: o,
            descriptionCta: s,
            onCtaClick: () => {
                c.Z.open(B.oAB.GUILD_BOOSTING, null, { analyticsLocations: e });
            },
            cardVariant: O.zW.REWARD,
            pillText: r,
            dismissibleContentType: l
        };
    }
    let eM = (0, M.kG)(),
        { enabled: ew } = (0, I.Z)(),
        eB = () => {
            b.default.track(B.rMx.OPEN_MODAL, {
                type: 'Tiered Tenure Badge Details',
                location_stack: e,
                location: u.Z.PREMIUM_MARKETING_PERK_CARD,
                source: u.Z.PREMIUM_MARKETING_PERK_CARD
            }),
                (0, o.openModalLazy)(async () => {
                    let { default: e } = await n.e('16133').then(n.bind(n, 743648));
                    return (t) => (0, a.jsx)(e, { ...t });
                });
        };
    return (
        null != eM &&
            ew &&
            (eZ.tenureBadge = {
                name: 'tenureBadge',
                title: L.intl.string(L.t.rnsqpa),
                pillText: L.intl.string(L.t.jyYgZ2).toLocaleUpperCase(),
                perkComponent: (0, a.jsx)(P.Z, {}),
                cardVariant: O.zW.NITRO_GRADIENT_HOVER_BORDER,
                onClick: () => eB()
            }),
        (0, N.ZP)('usePerksDiscoverabilityCard') === N.P0.SUMMER_2024 &&
            (eZ.shyProject = {
                name: 'shyProject',
                title: L.intl.string(L.t['0Mykgo']),
                subtitle: L.intl.string(L.t.opgqDQ),
                description: eh ? L.intl.string(L.t['t+QZSU']) : L.intl.string(L.t['JE/EWV']),
                descriptionCta: L.intl.string(L.t.dBJVnZ),
                pillText: L.intl.string(L.t.tahjbG).toLocaleUpperCase(),
                onCtaClick: eh ? eP : void 0,
                perkImage: Y,
                isPremiumGetCta: !eh
            }),
        eZ
    );
};
