n.d(t, {
    BS: function () {
        return b;
    },
    Op: function () {
        return S;
    },
    gx: function () {
        return v;
    },
    k3: function () {
        return x;
    },
    mN: function () {
        return R;
    },
    sP: function () {
        return I;
    },
    t2: function () {
        return C;
    },
    vZ: function () {
        return E;
    }
}),
    n(653041),
    n(627341);
var i = n(278074),
    r = n(442837),
    a = n(780384),
    s = n(410154),
    l = n(594174),
    o = n(78839),
    c = n(74538),
    d = n(331119),
    u = n(575595),
    g = n(915296),
    m = n(650032),
    f = n(391110),
    p = n(474936),
    _ = n(735825),
    h = n(388032);
let x = (e) => {
        switch (e) {
            case _.EB.PENDING:
                return h.intl.string(h.t.fhK8ho);
            case _.EB.REDEEMABLE:
                return h.intl.string(h.t['084A8/']);
            case _.EB.REDEEMED:
                return h.intl.string(h.t['5kxiMz']);
            default:
                return '';
        }
    },
    E = (e, t, n) => {
        switch (e) {
            case _.EB.PENDING:
                return t === _.Ft.FREE_GUILD_BOOST_1_MONTH ? h.intl.string(h.t.hnbagI) : h.intl.string(h.t['73+DnJ']);
            case _.EB.REDEEMABLE:
                if (t === _.Ft.FREE_GUILD_BOOST_1_MONTH) return n ? h.intl.string(h.t.RrwI8f) : h.intl.string(h.t.P1Xqqa);
                return h.intl.string(h.t.K687hI);
            case _.EB.REDEEMED:
                return h.intl.string(h.t['QvW/MT']);
            default:
                return;
        }
    },
    b = (e) => {
        switch (e) {
            case _.EB.PENDING:
                return h.intl.string(h.t.tncFsb);
            case _.EB.REDEEMABLE:
                return;
            case _.EB.REDEEMED:
                return h.intl.string(h.t.OcdQND);
            default:
                return;
        }
    };
function C(e, t) {
    switch (e) {
        case _.EB.PENDING:
            return null != t ? h.intl.formatToPlainString(h.t.FULtam, { days: t }) : '';
        case _.EB.REDEEMABLE:
            return h.intl.string(h.t['+zx47e']);
        case _.EB.REDEEMED:
            return h.intl.string(h.t['5kxiMz']);
        default:
            return '';
    }
}
let v = (e, t, n) => ((0, a.wj)(e) ? t : n),
    T = 'getWhatsNewRow',
    N = (e) => {
        let { cards: t, perksCards: n, isFullScreen: i, showTenureCard: r, shopMarketingVariation: a } = e,
            l = i ? 3 : 2,
            o = (e) => {
                let { card: n } = e;
                t.length < l && t.push(n);
            },
            c = () => {
                a !== s.C5.DEFAULT ? o({ card: n.specialShopPerks }) : o({ card: n.specialMemberPricing });
            },
            { enabled: g } = m._.getCurrentConfig({ location: T }, { autoTrackExposure: !1 }),
            { enabled: f } = u.r.getCurrentConfig({ location: T }, { autoTrackExposure: !1 }),
            { enabled: p } = d.C.getCurrentConfig({ location: T }, { autoTrackExposure: !1 }),
            _ = g && !f && !p,
            h = A();
        return null != n.tenureBadge && o({ card: n.tenureBadge }), null != n.freeBoost && !0 === r && o({ card: n.freeBoost }), null != n.shyProject && o({ card: n.shyProject }), i && h ? (0 === t.length && c(), o({ card: n.newAppStylesUpdateJune2024 }), o({ card: n.serverProfiles })) : i && !h && (_ || null != n.shyProject ? _ && o({ card: n.referralProgram }) : c(), o({ card: n.newAppStylesUpdateJune2024 }), o({ card: n.serverProfiles })), o({ card: n.earlyAccess }), c(), o({ card: n.unlimitedSuperReactions }), t;
    },
    I = (e) => {
        let { perksCards: t, variant: n, shopMarketingVariation: r, isFullScreen: a, showTenureCard: s, tileOrderVariant: l, isPremiumSubscriber: o, fractionalState: c } = e,
            d = [],
            u = p.a$.FP_ONLY;
        switch (n) {
            case f.R0.PERKS_DISCOVERABILITY:
                d = (0, i.EQ)({
                    tileOrderVariant: l,
                    isPremiumSubscriber: o,
                    fractionalState: c
                })
                    .with(
                        {
                            tileOrderVariant: g.mJ.VARIANT_1,
                            isPremiumSubscriber: !1
                        },
                        () => [t.profiles, t.moreEmojiPower, t.largeUploads]
                    )
                    .with(
                        {
                            tileOrderVariant: g.mJ.VARIANT_2,
                            isPremiumSubscriber: !1
                        },
                        () => [t.profiles, t.moreEmojiPower, t.largeUploads, t.hdVideo, t.clientThemes, t.customAppIcons]
                    )
                    .with({ fractionalState: p.a$.FP_ONLY }, () => [t.profiles, t.clientThemes, t.hdVideo])
                    .otherwise(() => [t.profiles, t.clientThemes, t.serverBoosts]);
                break;
            case f.R0.WHATS_NEW:
                d = N({
                    cards: d,
                    perksCards: t,
                    isFullScreen: a,
                    showTenureCard: s,
                    shopMarketingVariation: r
                });
                break;
            case f.R0.CARD_CAROUSEL_FIRST_ROW:
                d = (0, i.EQ)({
                    tileOrderVariant: l,
                    isPremiumSubscriber: o
                })
                    .with(
                        {
                            tileOrderVariant: g.mJ.VARIANT_1,
                            isPremiumSubscriber: !1
                        },
                        () => [t.hdVideo, t.serverBoosts, t.superReactions, t.earlyAccessSeeAllVariant, t.specialShopPerks]
                    )
                    .with(
                        {
                            tileOrderVariant: g.mJ.VARIANT_2,
                            isPremiumSubscriber: !1
                        },
                        () => [t.serverBoosts, t.superReactions, t.earlyAccessSeeAllVariant, t.specialShopPerks]
                    )
                    .otherwise(() => [t.customAppIcons, t.moreEmojiPower, t.customSoundsEverywhere, t.specialStickerAccess]);
                break;
            case f.R0.CARD_CAROUSEL_SECOND_ROW:
                d = (0, i.EQ)({
                    tileOrderVariant: l,
                    isPremiumSubscriber: o,
                    fractionPremiumState: u
                })
                    .with(
                        {
                            tileOrderVariant: g.mJ.VARIANT_1,
                            isPremiumSubscriber: !1
                        },
                        () => [t.clientThemes, t.customAppIcons, t.customSoundsEverywhere, t.specialStickerAccess]
                    )
                    .with(
                        {
                            tileOrderVariant: g.mJ.VARIANT_2,
                            isPremiumSubscriber: !1
                        },
                        () => [t.customSoundsEverywhere, t.specialStickerAccess]
                    )
                    .with({ fractionPremiumState: p.a$.FP_ONLY }, () => [t.serverBoosts, t.earlyAccessSeeAllVariant, t.specialMemberPricingSeeAllVariant, t.largeUploads, t.hdVideo, t.superReactions])
                    .otherwise(() => [t.earlyAccessSeeAllVariant, t.specialMemberPricingSeeAllVariant, t.largeUploads, t.hdVideo, t.superReactions]);
                break;
            case f.R0.CARD_CAROUSEL_THIRD_ROW:
                d = [t.entranceSoundsSeeAllVariation, t.badge];
        }
        return !a && (d = d.filter((e) => !e.hideOnNarrowScreen)), d;
    },
    S = (e) => {
        let t = (0, r.e7)([o.ZP], () => o.ZP.getPremiumTypeSubscription()),
            n = null != t ? c.ZP.getPremiumPlanItem(t) : null,
            i = (null != n ? c.ZP.getSkuIdForPlan(n.planId) : null) === p.Si.TIER_2;
        if (e)
            return i
                ? {
                      title: h.intl.string(h.t.Aw5DRk),
                      subtitle: h.intl.string(h.t.aHdO6u)
                  }
                : {
                      title: h.intl.string(h.t.N30YEx),
                      subtitle: h.intl.string(h.t.GTUdNT)
                  };
        return {
            title: h.intl.string(h.t['Uh3+CA']),
            subtitle: h.intl.string(h.t['5TFEXl'])
        };
    },
    R = () => {
        let e = (0, r.e7)([l.default], () => l.default.getCurrentUser());
        return (0, c.I5)(e);
    },
    A = () => {
        let e = l.default.getCurrentUser();
        return (0, c.M5)(e, p.p9.TIER_2);
    };
