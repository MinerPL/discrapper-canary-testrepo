n.d(t, {
    Cy: function () {
        return Q;
    },
    Gq: function () {
        return et;
    },
    NN: function () {
        return c;
    },
    VE: function () {
        return s;
    },
    ZP: function () {
        return ei;
    },
    nT: function () {
        return en;
    },
    uZ: function () {
        return u;
    },
    wp: function () {
        return er;
    }
});
var r, i, a, o, s, l, u, c, d = n(735250);
n(470079);
var _ = n(120356), E = n.n(_), f = n(913527), h = n.n(f), p = n(442837), m = n(692547), I = n(780384), T = n(481060), g = n(410030), S = n(100527), A = n(906732), N = n(535322), v = n(706454), O = n(594174), R = n(78839), C = n(709586), y = n(483444), D = n(599250), L = n(942659), b = n(930153), M = n(74538), P = n(357355), U = n(140465), w = n(650032), x = n(104494), G = n(639119), k = n(230916), B = n(248042), F = n(504865), V = n(63802), H = n(318990), Z = n(474936), Y = n(768760), j = n(689938), W = n(564579), K = n(476945), z = n(945182);
function q(e) {
    let {
        text: t,
        className: n,
        colorOptions: r = 2
    } = e;
    return (0, d.jsx)('div', {
        className: E()(n, W.freeTrialPill, {
            [W.freeTrialPillTier0GradientFill]: 1 === r,
            [W.freeTrialPillTier2GradientFill]: 3 === r,
            [W.freeTrialPillTier2OldGradientFill]: 4 === r,
            [W.lightBackgroundPill]: 5 === r
        }),
        children: (0, d.jsx)(T.Text, {
            variant: 'text-xs/bold',
            className: E()(W.freeTrialPillText, {
                [W.freeTrialPillTextInverted]: 0 !== r && 2 !== r,
                [W.freeTrialPillTextTier0]: 0 === r,
                [W.freeTrialPillTextTier2]: 2 === r
            }),
            children: t
        })
    });
}
function Q(e) {
    let t, {
            text: n,
            className: r,
            colorOptions: i = 2,
            isPillOnBorder: a = !0
        } = e;
    switch (i) {
    case 1:
        t = m.Z.unsafe_rawColors.PREMIUM_TIER_0_PURPLE_FOR_GRADIENTS.css;
        break;
    case 3:
        t = 'url(#'.concat(V.l_, ')');
        break;
    case 4:
    case 5:
        t = 'url(#'.concat(V.Qi, ')');
        break;
    default:
        t = 'white';
    }
    return a ? (0, d.jsxs)('div', {
        className: E()(r, W.freeTrialPillWithSparkles),
        children: [
            (0, d.jsx)(V.R9, {
                foreground: W.sparkleStar1,
                color: t
            }),
            (0, d.jsx)(V.R9, {
                foreground: W.sparkleStar2,
                color: t
            }),
            (0, d.jsx)(V.R9, {
                foreground: W.sparkleStar3,
                color: t
            }),
            (0, d.jsx)(q, {
                text: n,
                colorOptions: i
            }),
            (0, d.jsx)(V.R9, {
                foreground: W.sparkleStar4,
                color: t
            }),
            (0, d.jsx)(V.R9, {
                foreground: W.sparkleStar5,
                color: t
            })
        ]
    }) : (0, d.jsxs)('div', {
        className: E()(r, W.freeTrialPillWithSparkles),
        children: [
            (0, d.jsx)(q, {
                text: n,
                colorOptions: i
            }),
            (0, d.jsx)(V.R9, {
                foreground: W.sparkleStar1,
                style: {
                    marginLeft: 4,
                    marginBottom: -6
                },
                color: t
            }),
            (0, d.jsx)(V.R9, {
                foreground: W.sparkleStar2,
                color: t
            })
        ]
    });
}
function X(e) {
    let {
        Icon: t,
        text: n,
        isNew: r = !1,
        className: i,
        textVariant: a
    } = e;
    return (0, d.jsxs)('div', {
        className: null != i ? i : W.itemWithWumpus,
        children: [
            (0, d.jsx)(t, {
                className: W.icon,
                color: 'currentColor'
            }),
            (0, d.jsx)(T.Text, {
                variant: null != a ? a : 'text-md/normal',
                color: 'always-white',
                children: n
            }),
            r ? (0, d.jsx)(N.Z, {
                className: W.newTagItem,
                forceUseColorForSparkles: !0,
                shouldInheritBackgroundColor: !0,
                shouldInheritTextColor: !0
            }) : null
        ]
    });
}
function $(e) {
    var t;
    let {
            defaultPriceString: n,
            subscriptionPlan: r,
            discountOffer: i
        } = e, a = (0, k.A)(r);
    return (0, d.jsx)(d.Fragment, {
        children: j.Z.Messages.PREMIUM_TIER_CARD_DISCOUNT_HEADER_BEFORE_REDEMPTION_GENERIC.format({
            numMonths: null !== (t = i.discount.user_usage_limit) && void 0 !== t ? t : Z.rt,
            discountedPrice: a,
            regularPrice: n
        })
    });
}
function J(e) {
    let {
            isGift: t,
            premiumTier: n,
            offerTierMatchesCard: r,
            offerType: i,
            showYearlyPrice: a,
            priceOptions: o,
            textVariant: s,
            className: l,
            shouldUseModifiedCopy: u
        } = e, c = (0, p.e7)([R.ZP], () => R.ZP.getPremiumTypeSubscription()), _ = (0, p.e7)([O.default], () => O.default.getCurrentUser()), E = (0, U.t7)(), f = (0, U.lr)(), m = n === Z.p9.TIER_0 ? Z.Si.TIER_0 : Z.Si.TIER_2, I = (null == c ? void 0 : c.trialId) != null ? null == _ ? void 0 : _.premiumType : E ? Z.p9.TIER_2 : null, g = (0, G.N)(), S = (0, x.Ng)(), A = null == g ? void 0 : g.subscription_trial;
    if (!t && null != I && n === I && null != c && null != c.planIdFromItems) {
        let e = null != c.trialEndsAt ? h()(null == c ? void 0 : c.trialEndsAt).diff(h()(), 'd') : 0, t = Z.GP[c.planIdFromItems], n = M.ZP.formatPriceString(M.ZP.getDefaultPrice(t.id), t.interval);
        return (0, d.jsx)(d.Fragment, {
            children: (0, d.jsx)(T.Heading, {
                variant: 'heading-md/normal',
                color: 'always-white',
                className: W.trialHeader,
                children: (() => {
                    var t, r, a;
                    if (0 === i)
                        j.Z.Messages.PREMIUM_TIER_CARD_TRIAL_HEADER_AFTER_REDEMPTION.format({
                            remainingTime: e,
                            price: n
                        });
                    else if (c.planIdFromItems === Z.Xh.PREMIUM_YEAR_TIER_2)
                        return j.Z.Messages.PREMIUM_TIER_CARD_ANNUAL_DISCOUNT_HEADER.format({
                            percent: null !== (t = null == f ? void 0 : f.percentage) && void 0 !== t ? t : Z.Bo,
                            regularPrice: n
                        });
                    else
                        return j.Z.Messages.PREMIUM_TIER_CARD_DISCOUNT_HEADER_AFTER_REDEMPTION_GENERIC.format({
                            percent: null !== (r = null == f ? void 0 : f.percentage) && void 0 !== r ? r : Z.M_,
                            regularPrice: n,
                            numMonths: null !== (a = null == f ? void 0 : f.duration) && void 0 !== a ? a : Z.rt
                        });
                })()
            })
        });
    }
    if (!t && r) {
        let e = M.ZP.formatPriceString(M.ZP.getDefaultPrice(n === Z.p9.TIER_0 ? Z.Xh.PREMIUM_MONTH_TIER_0 : Z.Xh.PREMIUM_MONTH_TIER_2), Z.rV.MONTH);
        if (0 === i) {
            var N, v, C, y;
            return (0, d.jsx)(T.Heading, {
                variant: 'heading-md/normal',
                color: 'always-white',
                className: W.trialHeader,
                children: j.Z.Messages.PREMIUM_TIER_CARD_TRIAL_HEADER_BEFORE_REDEMPTION_NEW.format({
                    planName: (0, M.aq)(null !== (v = Z.IW[null !== (N = null == A ? void 0 : A.sku_id) && void 0 !== N ? N : Z.Si.NONE]) && void 0 !== v ? v : Z.Xh.PREMIUM_MONTH_TIER_2),
                    duration: (0, M.if)({
                        intervalType: null !== (C = null == A ? void 0 : A.interval) && void 0 !== C ? C : Z.rV.DAY,
                        intervalCount: null !== (y = null == A ? void 0 : A.interval_count) && void 0 !== y ? y : 30,
                        capitalize: !1
                    }),
                    price: e
                })
            });
        }
        if (null != S)
            return (0, d.jsx)(T.Heading, {
                variant: 'heading-md/normal',
                color: 'always-white',
                className: W.trialHeader,
                children: (0, d.jsx)($, {
                    defaultPriceString: e,
                    subscriptionPlan: Z.Xh.PREMIUM_MONTH_TIER_2,
                    discountOffer: S
                })
            });
    }
    return (0, d.jsxs)(d.Fragment, {
        children: [
            (0, d.jsx)(F.Z, {
                subscriptionTier: m,
                isGift: t,
                className: null != l ? l : W.price,
                priceOptions: o,
                variant: s,
                shouldUseModifiedCopy: u
            }),
            a && (0, d.jsx)(F.Z, {
                subscriptionTier: m,
                interval: Z.rV.YEAR,
                isGift: t,
                className: null != l ? l : W.price,
                priceOptions: o,
                variant: s,
                shouldUseModifiedCopy: u
            })
        ]
    });
}
function ee(e) {
    let {shouldUseModifiedCopy: t} = e;
    return t ? (0, d.jsxs)(d.Fragment, {
        children: [
            (0, d.jsx)(X, {
                Icon: T.CheckmarkLargeIcon,
                text: j.Z.Messages.PREMIUM_TIER_CUSTOM_EMOJI_ITEM,
                className: W.modifiedItem,
                textVariant: 'text-sm/normal'
            }),
            (0, d.jsx)(X, {
                Icon: T.CheckmarkLargeIcon,
                text: j.Z.Messages.PREMIUM_TIER_UPLOAD_ITEM.format({ maxUploadPremium: (0, M.v9)(Z.p9.TIER_0, { useSpace: !1 }) }),
                className: W.modifiedItem,
                textVariant: 'text-sm/normal'
            }),
            (0, d.jsx)(X, {
                Icon: T.CheckmarkLargeIcon,
                text: j.Z.Messages.PREMIUM_TRIAL_ACTION_SHEET_CUSTOM_APP_ICONS,
                className: W.modifiedItem,
                textVariant: 'text-sm/normal'
            })
        ]
    }) : (0, d.jsxs)(d.Fragment, {
        children: [
            (0, d.jsx)(X, {
                Icon: T.UploadIcon,
                text: j.Z.Messages.PREMIUM_TIER_UPLOAD_ITEM.format({ maxUploadPremium: (0, M.v9)(Z.p9.TIER_0, { useSpace: !1 }) })
            }),
            (0, d.jsx)(X, {
                Icon: T.ReactionIcon,
                text: j.Z.Messages.PREMIUM_TIER_CUSTOM_EMOJI_ITEM
            }),
            (0, d.jsx)(X, {
                Icon: T.SuperReactionIcon,
                text: j.Z.Messages.PREMIUM_MARKETING_SUPER_REACTIONS_PERK_TITLE_UNLIMITED
            }),
            (0, d.jsx)(X, {
                Icon: T.NitroWheelIcon,
                text: j.Z.Messages.PREMIUM_TIER_NITRO_BADGE_ITEM
            })
        ]
    });
}
function et(e) {
    var t;
    let {
            showWumpus: n,
            shouldUseModifiedCopy: r = !1,
            ctaButton: i,
            showYearlyPrice: a,
            className: o,
            isGift: s = !1,
            priceOptions: l,
            variant: u
        } = e, c = (0, p.e7)([R.ZP], () => R.ZP.getPremiumTypeSubscription()), _ = (0, p.e7)([O.default], () => O.default.getCurrentUser()), f = (0, G.N)(), h = null == f ? void 0 : null === (t = f.subscription_trial) || void 0 === t ? void 0 : t.sku_id, m = (null == c ? void 0 : c.trialId) != null, I = (null == c ? void 0 : c.trialId) != null ? null == _ ? void 0 : _.premiumType : null, g = null != h || m;
    return (0, d.jsxs)('div', {
        className: E()(W.tier0, W.card, o, {
            [W.withTier0Rim]: !s && g,
            [W.withCardHover]: !s && g
        }),
        children: [
            h === Z.Si.TIER_0 ? (0, d.jsxs)(d.Fragment, {
                children: [
                    (0, d.jsx)(Q, {
                        text: j.Z.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT,
                        className: W.topRimPill,
                        colorOptions: 0
                    }),
                    (0, d.jsx)('div', { className: W.rimGlowTier0 })
                ]
            }) : null,
            n ? (0, d.jsx)('div', {
                className: W.wumpusImageContainer,
                children: (0, d.jsx)(T.Image, {
                    src: K,
                    mediaLayoutType: Y.hV.RESPONSIVE,
                    width: 270,
                    height: 242,
                    zoomable: !1
                })
            }) : null,
            s || h !== Z.Si.TIER_0 ? null : (0, d.jsxs)(d.Fragment, {
                children: [
                    (0, d.jsx)(Q, {
                        text: j.Z.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT,
                        className: W.topRimPill,
                        colorOptions: 0
                    }),
                    (0, d.jsx)('div', { className: W.rimGlowTier0 })
                ]
            }),
            s || I !== Z.p9.TIER_0 ? null : (0, d.jsxs)(d.Fragment, {
                children: [
                    (0, d.jsx)(Q, {
                        text: j.Z.Messages.PREMIUM_TIER_CARD_TRIAL_ACTIVATED,
                        className: W.topRimPill,
                        colorOptions: 0
                    }),
                    (0, d.jsx)('div', { className: W.rimGlowTier0 })
                ]
            }),
            (0, d.jsxs)('div', {
                children: [
                    (0, d.jsxs)('div', {
                        children: [
                            r ? (0, d.jsx)(L.Z, { className: E()(W.title, W.modifiedTier0Title) }) : (0, d.jsx)(D.Z, { className: E()(W.title, W.tier0Title) }),
                            r && (0, d.jsx)(T.Text, {
                                variant: 'display-md',
                                color: 'always-white',
                                className: 2 === u ? W.modifiedSubHeaderSettings : W.modifiedSubHeaderStoreHome,
                                children: j.Z.Messages.NITRO_MARKETING_JUST_THE_BASICS
                            }),
                            (0, d.jsx)(J, {
                                isGift: s,
                                premiumTier: Z.p9.TIER_0,
                                offerType: 0,
                                offerTierMatchesCard: h === Z.Si.TIER_0,
                                showYearlyPrice: a,
                                priceOptions: l,
                                textVariant: r ? 'heading-lg/normal' : void 0,
                                shouldUseModifiedCopy: r,
                                className: r ? a ? W.modifiedPrices : W.modifiedPrice : void 0
                            })
                        ]
                    }),
                    (0, d.jsx)('div', { children: (0, d.jsx)(ee, { shouldUseModifiedCopy: r }) })
                ]
            }),
            i,
            s || h !== Z.Si.TIER_0 ? null : (0, d.jsx)(V.t, { tier: Z.p9.TIER_0 })
        ]
    });
}
function en(e) {
    let {
            featureSet: t = 0,
            isModal: n = !1,
            isGift: r = !1
        } = e, i = (0, p.e7)([v.default], () => v.default.locale), a = (0, p.e7)([P.Z], () => P.Z.affinities), o = n && !r && a.length > 0;
    switch (t) {
    case 1:
        return (0, d.jsxs)(d.Fragment, {
            children: [
                (0, d.jsx)(X, {
                    Icon: (0, T.makeIconCompat)(C.Z),
                    text: j.Z.Messages.PREMIUM_TIER_SERVER_BOOST_WITH_PERCENTAGE_ITEM.format({
                        numBoosts: Z.cb,
                        percentageOff: (0, b.T3)(i, Z.Rr / 100)
                    })
                }),
                (0, d.jsx)(X, {
                    Icon: T.UploadIcon,
                    text: j.Z.Messages.PREMIUM_TIER_UPLOAD_ITEM.format({ maxUploadPremium: (0, M.v9)(Z.p9.TIER_2, { useSpace: !1 }) })
                }),
                (0, d.jsx)(X, {
                    Icon: T.ReactionIcon,
                    text: j.Z.Messages.PREMIUM_TIER_CUSTOM_EMOJI_ITEM
                }),
                (0, d.jsx)(X, {
                    Icon: T.ScreenArrowIcon,
                    text: j.Z.Messages.PREMIUM_TIER_HD_STREAMING_ITEM
                }),
                (0, d.jsx)(X, {
                    Icon: T.UserSquareIcon,
                    text: j.Z.Messages.PREMIUM_TIER_CUSTOM_PROFILE_ITEM
                })
            ]
        });
    case 2:
        return (0, d.jsxs)(d.Fragment, {
            children: [
                (0, d.jsx)(T.Text, {
                    variant: 'text-sm/normal',
                    color: 'always-white',
                    style: { marginBottom: 6 },
                    children: j.Z.Messages.PREMIUM_TIER_2_DETAILS_SUBHEADER
                }),
                (0, d.jsx)(X, {
                    Icon: T.CheckmarkLargeIcon,
                    text: j.Z.Messages.MARKETING_PAGE_COMPARISON_TABLE_PROFILE_THEMES_V2,
                    className: W.modifiedItem,
                    textVariant: 'text-sm/normal'
                }),
                (0, d.jsx)(X, {
                    Icon: T.CheckmarkLargeIcon,
                    text: j.Z.Messages.PREMIUM_TIER_UPLOAD_ITEM.format({ maxUploadPremium: (0, M.v9)(Z.p9.TIER_2, { useSpace: !1 }) }),
                    className: W.modifiedItem,
                    textVariant: 'text-sm/normal'
                }),
                (0, d.jsx)(X, {
                    Icon: T.CheckmarkLargeIcon,
                    text: j.Z.Messages.PREMIUM_TIER_HD_STREAMING_ITEM,
                    className: W.modifiedItem,
                    textVariant: 'text-sm/normal'
                }),
                (0, d.jsx)(X, {
                    Icon: T.CheckmarkLargeIcon,
                    text: j.Z.Messages.PREMIUM_TIER_2_FEATURE_THEMES_AND_MORE,
                    className: W.modifiedItem,
                    textVariant: 'text-sm/normal'
                }),
                o && (0, d.jsx)(H.Z, {})
            ]
        });
    default:
        return (0, d.jsxs)(d.Fragment, {
            children: [
                (0, d.jsx)(X, {
                    Icon: T.UploadIcon,
                    text: j.Z.Messages.PREMIUM_TIER_UPLOAD_ITEM.format({ maxUploadPremium: (0, M.v9)(Z.p9.TIER_2, { useSpace: !1 }) })
                }),
                (0, d.jsx)(X, {
                    Icon: T.ReactionIcon,
                    text: j.Z.Messages.PREMIUM_TIER_CUSTOM_EMOJI_ITEM
                }),
                (0, d.jsx)(X, {
                    Icon: T.SuperReactionIcon,
                    text: j.Z.Messages.PREMIUM_MARKETING_SUPER_REACTIONS_PERK_TITLE_UNLIMITED
                }),
                (0, d.jsx)(X, {
                    Icon: T.ScreenArrowIcon,
                    text: j.Z.Messages.PREMIUM_TIER_HD_STREAMING_ITEM
                }),
                (0, d.jsx)(X, {
                    Icon: (0, T.makeIconCompat)(C.Z),
                    text: j.Z.Messages.PREMIUM_TIER_SERVER_BOOST_ITEM
                }),
                (0, d.jsx)(X, {
                    Icon: T.UserSquareIcon,
                    text: j.Z.Messages.PREMIUM_TIER_CUSTOM_PROFILE_ITEM
                }),
                o && (0, d.jsx)(H.Z, {})
            ]
        });
    }
}
function er(e) {
    var t;
    let {
            showWumpus: n,
            shouldUseModifiedCopy: r = !1,
            ctaButton: i,
            showYearlyPrice: a,
            featureSet: o = 0,
            className: s,
            isGift: l = !1,
            isModal: u = !1,
            priceOptions: c,
            variant: _
        } = e, f = (0, p.e7)([R.ZP], () => R.ZP.getPremiumTypeSubscription()), h = (0, p.e7)([O.default], () => O.default.getCurrentUser()), m = (0, G.N)(), S = null == m ? void 0 : null === (t = m.subscription_trial) || void 0 === t ? void 0 : t.sku_id, A = (null == f ? void 0 : f.trialId) != null ? null == h ? void 0 : h.premiumType : null, N = (0, U.Nx)(), v = (0, x.Ng)(), C = (0, U.t7)(), D = null != S || null != A ? 0 : null != v || C ? 1 : null, L = (0, B.Vi)(), b = !l && N, M = (0, B.W1)(), P = (0, I.ap)((0, g.ZP)()), k = P ? 5 : 2, {enabled: F} = w._.useExperiment({ location: 'Tier2Card' }, { autoTrackExposure: !1 }), H = j.Z.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT;
    F && (null == m ? void 0 : m.trial_id) === Z.a7 && (H = j.Z.Messages.REFERRAL_PROGRAM_TWO_WEEK_TRIAL);
    let K = b && !P ? W.rimGlowTier2 : void 0;
    return (0, d.jsxs)('div', {
        className: E()(W.card, W.tier2, s, {
            [W.withTier2Rim]: b,
            [W.withCardHover]: b
        }),
        children: [
            !l && null != v && (0, x.Wp)(v, Z.Si.TIER_2) && void 0 !== v.discount.amount ? (0, d.jsxs)(d.Fragment, {
                children: [
                    (0, d.jsx)(Q, {
                        text: C ? j.Z.Messages.PREMIUM_TIER_CARD_DISCOUNT_APPLIED : j.Z.Messages.PREMIUM_DISCOUNT_AMOUNT_OFF_BADGE.format({ percent: v.discount.amount }),
                        className: W.topRimPill,
                        colorOptions: k
                    }),
                    (0, d.jsx)('div', { className: K })
                ]
            }) : null,
            l || S !== Z.Si.TIER_2 ? null : (0, d.jsxs)(d.Fragment, {
                children: [
                    (0, d.jsx)(Q, {
                        text: H,
                        className: W.topRimPill,
                        colorOptions: k
                    }),
                    (0, d.jsx)('div', { className: K })
                ]
            }),
            l || A !== Z.p9.TIER_2 ? null : (0, d.jsxs)(d.Fragment, {
                children: [
                    (0, d.jsx)(Q, {
                        text: j.Z.Messages.PREMIUM_TIER_CARD_TRIAL_ACTIVATED,
                        className: W.topRimPill,
                        colorOptions: k
                    }),
                    (0, d.jsx)('div', { className: K })
                ]
            }),
            !l && C && (0, d.jsxs)(d.Fragment, {
                children: [
                    (0, d.jsx)(Q, {
                        text: j.Z.Messages.PREMIUM_TIER_CARD_DISCOUNT_APPLIED,
                        className: W.topRimPill,
                        colorOptions: k
                    }),
                    (0, d.jsx)('div', { className: K })
                ]
            }),
            n ? (0, d.jsx)('div', {
                className: W.wumpusImageContainer,
                children: (0, d.jsx)(T.Image, {
                    src: z,
                    mediaLayoutType: Y.hV.RESPONSIVE,
                    width: 270,
                    height: 242,
                    zoomable: !1
                })
            }) : null,
            (0, d.jsxs)('div', {
                children: [
                    (0, d.jsxs)('div', {
                        children: [
                            (0, d.jsx)(y.Z, {
                                className: E()(W.title, {
                                    [W.modifiedTier2Title]: r,
                                    [W.tier2Title]: !r
                                })
                            }),
                            !l && S !== Z.Si.TIER_2 && L && (0, d.jsx)(T.Text, {
                                variant: 'text-xs/bold',
                                className: W.freeTrialPillInline,
                                children: M
                            }),
                            r && (0, d.jsx)(T.Text, {
                                variant: 'display-md',
                                color: 'always-white',
                                className: 2 === _ ? W.modifiedSubHeaderSettings : W.modifiedSubHeaderStoreHome,
                                children: j.Z.Messages.PREMIUM_TIER_2_SUBHEADER
                            }),
                            (0, d.jsx)(J, {
                                isGift: l,
                                premiumTier: Z.p9.TIER_2,
                                offerType: D,
                                offerTierMatchesCard: S === Z.Si.TIER_2 || (0, x.Wp)(v, Z.Si.TIER_2),
                                showYearlyPrice: a,
                                priceOptions: c,
                                textVariant: r ? 'heading-lg/normal' : void 0,
                                shouldUseModifiedCopy: r,
                                className: r ? a ? W.modifiedPrices : W.modifiedPrice : void 0
                            })
                        ]
                    }),
                    (0, d.jsx)('div', {
                        children: (0, d.jsx)(en, {
                            featureSet: r ? 2 : o,
                            isModal: u,
                            isGift: l
                        })
                    })
                ]
            }),
            i,
            l || S !== Z.Si.TIER_2 && null == v ? null : (0, d.jsx)(V.t, { tier: Z.p9.TIER_2 })
        ]
    });
}
function ei(e) {
    let {
            variant: t,
            showWumpus: n,
            tier0CTAButton: r,
            tier2CTAButton: i,
            className: a
        } = e, {analyticsLocations: o} = (0, A.ZP)(S.Z.PREMIUM_MARKETING_TIER_CARD), s = 1 === t || 2 === t;
    return (0, d.jsx)(A.Gt, {
        value: o,
        children: (0, d.jsxs)('div', {
            className: E()(W.premiumCards, a),
            children: [
                (0, d.jsx)(et, {
                    showWumpus: n,
                    shouldUseModifiedCopy: s,
                    ctaButton: r,
                    variant: t
                }),
                (0, d.jsx)(er, {
                    showWumpus: n,
                    shouldUseModifiedCopy: s,
                    ctaButton: i,
                    variant: t
                })
            ]
        })
    });
}
(r = s || (s = {}))[r.PREMIUM_TIER_0_WHITE_FILL = 0] = 'PREMIUM_TIER_0_WHITE_FILL', r[r.PREMIUM_TIER_0_GRADIENT_FILL = 1] = 'PREMIUM_TIER_0_GRADIENT_FILL', r[r.PREMIUM_TIER_2_WHITE_FILL = 2] = 'PREMIUM_TIER_2_WHITE_FILL', r[r.PREMIUM_TIER_2_NEW_GRADIENT_FILL = 3] = 'PREMIUM_TIER_2_NEW_GRADIENT_FILL', r[r.PREMIUM_TIER_2_OLD_GRADIENT_FILL = 4] = 'PREMIUM_TIER_2_OLD_GRADIENT_FILL', r[r.PREMIUM_TIER_2_OLD_GRADIENT_FILL_LIGHT_MODE = 5] = 'PREMIUM_TIER_2_OLD_GRADIENT_FILL_LIGHT_MODE', (i = l || (l = {}))[i.PREMIUM_TRIAL = 0] = 'PREMIUM_TRIAL', i[i.PREMIUM_DISCOUNT = 1] = 'PREMIUM_DISCOUNT', (a = u || (u = {}))[a.DEFAULT = 0] = 'DEFAULT', a[a.BOOSTING = 1] = 'BOOSTING', a[a.MODIFIED = 2] = 'MODIFIED', (o = c || (c = {}))[o.DEFAULT = 0] = 'DEFAULT', o[o.MODIFIED_COPY_STORE_HOME = 1] = 'MODIFIED_COPY_STORE_HOME', o[o.MODIFIED_COPY_SETTINGS = 2] = 'MODIFIED_COPY_SETTINGS';
