n.d(t, {
    BS: function () {
        return N;
    },
    Op: function () {
        return M;
    },
    gx: function () {
        return m;
    },
    k3: function () {
        return g;
    },
    mN: function () {
        return x;
    },
    sP: function () {
        return h;
    },
    t2: function () {
        return A;
    },
    vZ: function () {
        return p;
    }
}),
    n(653041),
    n(627341);
var s = n(278074),
    a = n(442837),
    r = n(780384),
    i = n(410154),
    l = n(594174),
    o = n(78839),
    c = n(74538),
    d = n(331119),
    _ = n(575595),
    u = n(915296),
    E = n(650032),
    T = n(391110),
    I = n(474936),
    R = n(735825),
    C = n(689938);
let g = (e) => {
        switch (e) {
            case R.EB.PENDING:
                return C.Z.Messages.NITRO_HOME_REWARDING_LOCKED_STATE_TITLE;
            case R.EB.REDEEMABLE:
                return C.Z.Messages.NITRO_HOME_REWARDING_REDEEMABLE_STATE_TITLE;
            case R.EB.REDEEMED:
                return C.Z.Messages.NITRO_HOME_REWARDING_REDEEMED_LABEL;
            default:
                return '';
        }
    },
    p = (e, t) => {
        switch (e) {
            case R.EB.PENDING:
                return t === R.Ft.FREE_GUILD_BOOST_1_MONTH ? C.Z.Messages.NITRO_HOME_REWARDING_FREE_BOOST_LOCKED_STATE_SUBTITLE_1_MONTH_VARIANT : C.Z.Messages.NITRO_HOME_REWARDING_FREE_BOOST_LOCKED_STATE_SUBTITLE_3_MONTHS_VARIANT;
            case R.EB.REDEEMABLE:
                return t === R.Ft.FREE_GUILD_BOOST_1_MONTH ? C.Z.Messages.NITRO_HOME_REWARDING_FREE_BOOST_REDEEMABLE_STATE_SUBTITLE_1_MONTH_VARIANT : C.Z.Messages.NITRO_HOME_REWARDING_FREE_BOOST_REDEEMABLE_STATE_SUBTITLE_3_MONTHS_VARIANT;
            case R.EB.REDEEMED:
                return C.Z.Messages.NITRO_HOME_REWARDING_REDEEMED_STATE_SUBTITLE;
            default:
                return;
        }
    },
    N = (e) => {
        switch (e) {
            case R.EB.PENDING:
                return C.Z.Messages.NITRO_HOME_REWARDING_LOCKED_STATE_DESCRIPTION;
            case R.EB.REDEEMABLE:
                return;
            case R.EB.REDEEMED:
                return C.Z.Messages.NITRO_HOME_REWARDING_REDEEMED_STATE_DESCRIPTION;
            default:
                return;
        }
    };
function A(e, t) {
    switch (e) {
        case R.EB.PENDING:
            return null != t ? C.Z.Messages.NITRO_HOME_REWARDING_TENURE_BOOST_AVAILABLE_DATE.format({ days: t }) : '';
        case R.EB.REDEEMABLE:
            return C.Z.Messages.REDEEM;
        case R.EB.REDEEMED:
            return C.Z.Messages.NITRO_HOME_REWARDING_REDEEMED_LABEL;
        default:
            return '';
    }
}
let m = (e, t, n) => ((0, r.wj)(e) ? t : n),
    f = 'getWhatsNewRow',
    S = (e) => {
        let { cards: t, perksCards: n, isFullScreen: s, showTenureCard: a, shopMarketingVariation: r } = e,
            l = s ? 3 : 2,
            o = (e) => {
                let { card: n } = e;
                t.length < l && t.push(n);
            },
            c = () => {
                r !== i.C5.DEFAULT ? o({ card: n.specialShopPerks }) : o({ card: n.specialMemberPricing });
            },
            { enabled: u } = E._.getCurrentConfig({ location: f }, { autoTrackExposure: !1 }),
            { enabled: T } = _.r.getCurrentConfig({ location: f }, { autoTrackExposure: !1 }),
            { enabled: I } = d.C.getCurrentConfig({ location: f }, { autoTrackExposure: !1 }),
            R = u && !T && !I,
            C = O();
        return null != n.freeBoost && !0 === a && o({ card: n.freeBoost }), null != n.shyProject && o({ card: n.shyProject }), s && C ? (0 === t.length && c(), o({ card: n.newAppStylesUpdateJune2024 }), o({ card: n.serverProfiles })) : s && !C && (R || null != n.shyProject ? R && o({ card: n.referralProgram }) : c(), o({ card: n.newAppStylesUpdateJune2024 }), o({ card: n.serverProfiles })), o({ card: n.earlyAccess }), c(), o({ card: n.unlimitedSuperReactions }), t;
    },
    h = (e) => {
        let { perksCards: t, variant: n, shopMarketingVariation: a, isFullScreen: r, showTenureCard: i, tileOrderVariant: l, isPremiumSubscriber: o } = e,
            c = [];
        switch (n) {
            case T.R0.PERKS_DISCOVERABILITY:
                c = (0, s.EQ)({
                    tileOrderVariant: l,
                    isPremiumSubscriber: o
                })
                    .with(
                        {
                            tileOrderVariant: u.mJ.VARIANT_1,
                            isPremiumSubscriber: !1
                        },
                        () => [t.profiles, t.moreEmojiPower, t.largeUploads]
                    )
                    .with(
                        {
                            tileOrderVariant: u.mJ.VARIANT_2,
                            isPremiumSubscriber: !1
                        },
                        () => [t.profiles, t.moreEmojiPower, t.largeUploads, t.hdVideo, t.clientThemes, t.customAppIcons]
                    )
                    .otherwise(() => [t.profiles, t.clientThemes, t.serverBoosts]);
                break;
            case T.R0.WHATS_NEW:
                c = S({
                    cards: c,
                    perksCards: t,
                    isFullScreen: r,
                    showTenureCard: i,
                    shopMarketingVariation: a
                });
                break;
            case T.R0.CARD_CAROUSEL_FIRST_ROW:
                c = (0, s.EQ)({
                    tileOrderVariant: l,
                    isPremiumSubscriber: o
                })
                    .with(
                        {
                            tileOrderVariant: u.mJ.VARIANT_1,
                            isPremiumSubscriber: !1
                        },
                        () => [t.hdVideo, t.serverBoosts, t.superReactions, t.earlyAccessSeeAllVariant, t.specialShopPerks]
                    )
                    .with(
                        {
                            tileOrderVariant: u.mJ.VARIANT_2,
                            isPremiumSubscriber: !1
                        },
                        () => [t.serverBoosts, t.superReactions, t.earlyAccessSeeAllVariant, t.specialShopPerks]
                    )
                    .otherwise(() => [t.customAppIcons, t.moreEmojiPower, t.customSoundsEverywhere, t.specialStickerAccess]);
                break;
            case T.R0.CARD_CAROUSEL_SECOND_ROW:
                c = (0, s.EQ)({
                    tileOrderVariant: l,
                    isPremiumSubscriber: o
                })
                    .with(
                        {
                            tileOrderVariant: u.mJ.VARIANT_1,
                            isPremiumSubscriber: !1
                        },
                        () => [t.clientThemes, t.customAppIcons, t.customSoundsEverywhere, t.specialStickerAccess]
                    )
                    .with(
                        {
                            tileOrderVariant: u.mJ.VARIANT_2,
                            isPremiumSubscriber: !1
                        },
                        () => [t.customSoundsEverywhere, t.specialStickerAccess]
                    )
                    .otherwise(() => [t.earlyAccessSeeAllVariant, t.specialMemberPricingSeeAllVariant, t.largeUploads, t.hdVideo, t.superReactions]);
                break;
            case T.R0.CARD_CAROUSEL_THIRD_ROW:
                c = [t.entranceSoundsSeeAllVariation, t.badge];
        }
        return !r && (c = c.filter((e) => !e.hideOnNarrowScreen)), c;
    },
    M = (e) => {
        let t = (0, a.e7)([o.ZP], () => o.ZP.getPremiumTypeSubscription()),
            n = null != t ? c.ZP.getPremiumPlanItem(t) : null,
            s = (null != n ? c.ZP.getSkuIdForPlan(n.planId) : null) === I.Si.TIER_2;
        if (e)
            return s
                ? {
                      title: C.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_TITLE_SUB,
                      subtitle: C.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_SUBTITLE_SUB
                  }
                : {
                      title: C.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_TITLE_NON_SUB,
                      subtitle: C.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_SUBTITLE_NON_SUB
                  };
        return {
            title: C.Z.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_TITLE,
            subtitle: C.Z.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_SUBTITLE
        };
    },
    x = () => {
        let e = (0, a.e7)([l.default], () => l.default.getCurrentUser());
        return (0, c.I5)(e);
    },
    O = () => {
        let e = l.default.getCurrentUser();
        return (0, c.M5)(e, I.p9.TIER_2);
    };
