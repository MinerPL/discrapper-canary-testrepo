n.d(t, {
    Cy: function () {
        return z;
    },
    Gq: function () {
        return J;
    },
    VE: function () {
        return s;
    },
    ZP: function () {
        return en;
    },
    nT: function () {
        return ee;
    },
    uZ: function () {
        return l;
    },
    wp: function () {
        return et;
    }
});
var r,
    i,
    a,
    s,
    o,
    l,
    u = n(735250);
n(470079);
var c = n(120356),
    d = n.n(c),
    _ = n(913527),
    E = n.n(_),
    f = n(442837),
    h = n(692547),
    p = n(780384),
    I = n(481060),
    m = n(410030),
    T = n(100527),
    S = n(906732),
    g = n(535322),
    A = n(706454),
    N = n(594174),
    O = n(78839),
    R = n(709586),
    v = n(483444),
    C = n(599250),
    L = n(930153),
    y = n(74538),
    D = n(357355),
    b = n(140465),
    M = n(650032),
    P = n(515593),
    U = n(104494),
    w = n(639119),
    x = n(230916),
    G = n(248042),
    k = n(504865),
    B = n(63802),
    F = n(318990),
    V = n(474936),
    H = n(217702),
    Z = n(689938),
    Y = n(645512),
    j = n(476945),
    W = n(945182);
function K(e) {
    let { text: t, className: n, colorOptions: r = 2 } = e;
    return (0, u.jsx)('div', {
        className: d()(n, Y.freeTrialPill, {
            [Y.freeTrialPillTier0GradientFill]: 1 === r,
            [Y.freeTrialPillTier2GradientFill]: 3 === r,
            [Y.freeTrialPillTier2OldGradientFill]: 4 === r,
            [Y.lightBackgroundPill]: 5 === r
        }),
        children: (0, u.jsx)(I.Text, {
            variant: 'text-xs/bold',
            className: d()(Y.freeTrialPillText, {
                [Y.freeTrialPillTextInverted]: 0 !== r && 2 !== r,
                [Y.freeTrialPillTextTier0]: 0 === r,
                [Y.freeTrialPillTextTier2]: 2 === r
            }),
            children: t
        })
    });
}
function z(e) {
    let t,
        { text: n, className: r, colorOptions: i = 2, isPillOnBorder: a = !0 } = e;
    switch (i) {
        case 1:
            t = h.Z.unsafe_rawColors.PREMIUM_TIER_0_PURPLE_FOR_GRADIENTS.css;
            break;
        case 3:
            t = 'url(#'.concat(B.l_, ')');
            break;
        case 4:
        case 5:
            t = 'url(#'.concat(B.Qi, ')');
            break;
        default:
            t = 'white';
    }
    return a
        ? (0, u.jsxs)('div', {
              className: d()(r, Y.freeTrialPillWithSparkles),
              children: [
                  (0, u.jsx)(B.R9, {
                      foreground: Y.sparkleStar1,
                      color: t
                  }),
                  (0, u.jsx)(B.R9, {
                      foreground: Y.sparkleStar2,
                      color: t
                  }),
                  (0, u.jsx)(B.R9, {
                      foreground: Y.sparkleStar3,
                      color: t
                  }),
                  (0, u.jsx)(K, {
                      text: n,
                      colorOptions: i
                  }),
                  (0, u.jsx)(B.R9, {
                      foreground: Y.sparkleStar4,
                      color: t
                  }),
                  (0, u.jsx)(B.R9, {
                      foreground: Y.sparkleStar5,
                      color: t
                  })
              ]
          })
        : (0, u.jsxs)('div', {
              className: d()(r, Y.freeTrialPillWithSparkles),
              children: [
                  (0, u.jsx)(K, {
                      text: n,
                      colorOptions: i
                  }),
                  (0, u.jsx)(B.R9, {
                      foreground: Y.sparkleStar1,
                      style: {
                          marginLeft: 4,
                          marginBottom: -6
                      },
                      color: t
                  }),
                  (0, u.jsx)(B.R9, {
                      foreground: Y.sparkleStar2,
                      color: t
                  })
              ]
          });
}
function q(e) {
    let { Icon: t, text: n, isNew: r = !1, className: i } = e;
    return (0, u.jsxs)('div', {
        className: null != i ? i : Y.itemWithWumpus,
        children: [
            (0, u.jsx)(t, {
                className: Y.icon,
                color: 'currentColor'
            }),
            (0, u.jsx)(I.Text, {
                variant: 'text-md/normal',
                color: 'always-white',
                children: n
            }),
            r
                ? (0, u.jsx)(g.Z, {
                      className: Y.newTagItem,
                      forceUseColorForSparkles: !0,
                      shouldInheritBackgroundColor: !0,
                      shouldInheritTextColor: !0
                  })
                : null
        ]
    });
}
function Q(e) {
    var t;
    let { defaultPriceString: n, subscriptionPlan: r, discountOffer: i } = e,
        a = (0, x.A)(r);
    return (0, u.jsx)(u.Fragment, {
        children: Z.Z.Messages.PREMIUM_TIER_CARD_DISCOUNT_HEADER_BEFORE_REDEMPTION_GENERIC.format({
            numMonths: null !== (t = i.discount.user_usage_limit) && void 0 !== t ? t : V.rt,
            discountedPrice: a,
            regularPrice: n
        })
    });
}
function X(e) {
    var t, n, r, i, a, s, o;
    let { isGift: l, premiumTier: c, offerTierMatchesCard: d, offerType: _, showYearlyPrice: h, priceOptions: p } = e,
        m = (0, f.e7)([O.ZP], () => O.ZP.getPremiumTypeSubscription()),
        T = (0, f.e7)([N.default], () => N.default.getCurrentUser()),
        S = (0, b.t7)(),
        g = (0, b.lr)(),
        A = c === V.p9.TIER_0 ? V.Si.TIER_0 : V.Si.TIER_2,
        R = (null == m ? void 0 : m.trialId) != null ? (null == T ? void 0 : T.premiumType) : S ? V.p9.TIER_2 : null,
        v = (0, w.N)(),
        C = (0, U.Ng)(),
        L = null == v ? void 0 : v.subscription_trial;
    if (!l && null != R && c === R && null != m && null != m.planIdFromItems) {
        let e = null != m.trialEndsAt ? E()(null == m ? void 0 : m.trialEndsAt).diff(E()(), 'd') : 0,
            i = V.GP[m.planIdFromItems],
            a = y.ZP.formatPriceString(y.ZP.getDefaultPrice(i.id), i.interval);
        return (0, u.jsx)(u.Fragment, {
            children: (0, u.jsx)(I.Heading, {
                variant: 'heading-md/normal',
                color: 'always-white',
                className: Y.trialHeader,
                children:
                    0 === _
                        ? Z.Z.Messages.PREMIUM_TIER_CARD_TRIAL_HEADER_AFTER_REDEMPTION.format({
                              remainingTime: e,
                              price: a
                          })
                        : m.planIdFromItems === V.Xh.PREMIUM_YEAR_TIER_2
                          ? Z.Z.Messages.PREMIUM_TIER_CARD_ANNUAL_DISCOUNT_HEADER.format({
                                percent: null !== (t = null == g ? void 0 : g.percentage) && void 0 !== t ? t : V.Bo,
                                regularPrice: a
                            })
                          : Z.Z.Messages.PREMIUM_TIER_CARD_DISCOUNT_HEADER_AFTER_REDEMPTION_GENERIC.format({
                                percent: null !== (n = null == g ? void 0 : g.percentage) && void 0 !== n ? n : V.M_,
                                regularPrice: a,
                                numMonths: null !== (r = null == g ? void 0 : g.duration) && void 0 !== r ? r : V.rt
                            })
            })
        });
    }
    if (!l && d) {
        let e = y.ZP.formatPriceString(y.ZP.getDefaultPrice(c === V.p9.TIER_0 ? V.Xh.PREMIUM_MONTH_TIER_0 : V.Xh.PREMIUM_MONTH_TIER_2), V.rV.MONTH);
        if (0 === _) {
            return (0, u.jsx)(I.Heading, {
                variant: 'heading-md/normal',
                color: 'always-white',
                className: Y.trialHeader,
                children: Z.Z.Messages.PREMIUM_TIER_CARD_TRIAL_HEADER_BEFORE_REDEMPTION_NEW.format({
                    planName: (0, y.aq)(null !== (a = V.IW[null !== (i = null == L ? void 0 : L.sku_id) && void 0 !== i ? i : V.Si.NONE]) && void 0 !== a ? a : V.Xh.PREMIUM_MONTH_TIER_2),
                    duration: (0, y.if)({
                        intervalType: null !== (s = null == L ? void 0 : L.interval) && void 0 !== s ? s : V.rV.DAY,
                        intervalCount: null !== (o = null == L ? void 0 : L.interval_count) && void 0 !== o ? o : 30,
                        capitalize: !1
                    }),
                    price: e
                })
            });
        }
        if (null != C)
            return (0, u.jsx)(I.Heading, {
                variant: 'heading-md/normal',
                color: 'always-white',
                className: Y.trialHeader,
                children: (0, u.jsx)(Q, {
                    defaultPriceString: e,
                    subscriptionPlan: V.Xh.PREMIUM_MONTH_TIER_2,
                    discountOffer: C
                })
            });
    }
    return (0, u.jsxs)(u.Fragment, {
        children: [
            (0, u.jsx)(k.Z, {
                subscriptionTier: A,
                isGift: l,
                className: Y.price,
                priceOptions: p
            }),
            h &&
                (0, u.jsx)(k.Z, {
                    subscriptionTier: A,
                    interval: V.rV.YEAR,
                    isGift: l,
                    className: Y.price,
                    priceOptions: p
                })
        ]
    });
}
function $() {
    return (0, u.jsxs)(u.Fragment, {
        children: [
            (0, u.jsx)(q, {
                Icon: I.UploadIcon,
                text: Z.Z.Messages.PREMIUM_TIER_UPLOAD_ITEM.format({ maxUploadPremium: (0, y.v9)(V.p9.TIER_0, { useSpace: !1 }) })
            }),
            (0, u.jsx)(q, {
                Icon: I.ReactionIcon,
                text: Z.Z.Messages.PREMIUM_TIER_CUSTOM_EMOJI_ITEM
            }),
            (0, u.jsx)(q, {
                Icon: I.SuperReactionIcon,
                text: Z.Z.Messages.PREMIUM_MARKETING_SUPER_REACTIONS_PERK_TITLE_UNLIMITED
            }),
            (0, u.jsx)(q, {
                Icon: I.NitroWheelIcon,
                text: Z.Z.Messages.PREMIUM_TIER_NITRO_BADGE_ITEM
            })
        ]
    });
}
function J(e) {
    var t;
    let { showWumpus: n, ctaButton: r, showYearlyPrice: i, className: a, isGift: s = !1, priceOptions: o } = e,
        l = (0, f.e7)([O.ZP], () => O.ZP.getPremiumTypeSubscription()),
        c = (0, f.e7)([N.default], () => N.default.getCurrentUser()),
        _ = (0, w.N)(),
        E = null == _ ? void 0 : null === (t = _.subscription_trial) || void 0 === t ? void 0 : t.sku_id,
        h = (null == l ? void 0 : l.trialId) != null,
        p = (null == l ? void 0 : l.trialId) != null ? (null == c ? void 0 : c.premiumType) : null,
        m = null != E || h;
    return (0, u.jsxs)('div', {
        className: d()(Y.tier0, Y.card, a, {
            [Y.withTier0Rim]: !s && m,
            [Y.withCardHover]: !s && m
        }),
        children: [
            E === V.Si.TIER_0
                ? (0, u.jsxs)(u.Fragment, {
                      children: [
                          (0, u.jsx)(z, {
                              text: Z.Z.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT,
                              className: Y.topRimPill,
                              colorOptions: 0
                          }),
                          (0, u.jsx)('div', { className: Y.rimGlowTier0 })
                      ]
                  })
                : null,
            n
                ? (0, u.jsx)('div', {
                      className: Y.wumpusImageContainer,
                      children: (0, u.jsx)(I.Image, {
                          src: j,
                          mediaLayoutType: H.hV.RESPONSIVE,
                          width: 270,
                          height: 242,
                          zoomable: !1,
                          imageClassName: Y.wumpusImage
                      })
                  })
                : null,
            s || E !== V.Si.TIER_0
                ? null
                : (0, u.jsxs)(u.Fragment, {
                      children: [
                          (0, u.jsx)(z, {
                              text: Z.Z.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT,
                              className: Y.topRimPill,
                              colorOptions: 0
                          }),
                          (0, u.jsx)('div', { className: Y.rimGlowTier0 })
                      ]
                  }),
            s || p !== V.p9.TIER_0
                ? null
                : (0, u.jsxs)(u.Fragment, {
                      children: [
                          (0, u.jsx)(z, {
                              text: Z.Z.Messages.PREMIUM_TIER_CARD_TRIAL_ACTIVATED,
                              className: Y.topRimPill,
                              colorOptions: 0
                          }),
                          (0, u.jsx)('div', { className: Y.rimGlowTier0 })
                      ]
                  }),
            (0, u.jsxs)('div', {
                children: [
                    (0, u.jsxs)('div', {
                        children: [
                            (0, u.jsx)(C.Z, { className: d()(Y.title, Y.tier0Title) }),
                            (0, u.jsx)(X, {
                                isGift: s,
                                premiumTier: V.p9.TIER_0,
                                offerType: 0,
                                offerTierMatchesCard: E === V.Si.TIER_0,
                                showYearlyPrice: i,
                                priceOptions: o
                            })
                        ]
                    }),
                    (0, u.jsx)('div', { children: (0, u.jsx)($, {}) })
                ]
            }),
            r,
            s || E !== V.Si.TIER_0 ? null : (0, u.jsx)(B.t, { tier: V.p9.TIER_0 })
        ]
    });
}
function ee(e) {
    let { featureSet: t = 0, isModal: n = !1, isGift: r = !1 } = e,
        i = (0, f.e7)([A.default], () => A.default.locale),
        a = (0, f.e7)([D.Z], () => D.Z.affinities),
        s = n && !r && a.length > 0;
    if (1 === t)
        return (0, u.jsxs)(u.Fragment, {
            children: [
                (0, u.jsx)(q, {
                    Icon: (0, I.makeIconCompat)(R.Z),
                    text: Z.Z.Messages.PREMIUM_TIER_SERVER_BOOST_WITH_PERCENTAGE_ITEM.format({
                        numBoosts: V.cb,
                        percentageOff: (0, L.T3)(i, V.Rr / 100)
                    })
                }),
                (0, u.jsx)(q, {
                    Icon: I.UploadIcon,
                    text: Z.Z.Messages.PREMIUM_TIER_UPLOAD_ITEM.format({ maxUploadPremium: (0, y.v9)(V.p9.TIER_2, { useSpace: !1 }) })
                }),
                (0, u.jsx)(q, {
                    Icon: I.ReactionIcon,
                    text: Z.Z.Messages.PREMIUM_TIER_CUSTOM_EMOJI_ITEM
                }),
                (0, u.jsx)(q, {
                    Icon: I.ScreenArrowIcon,
                    text: Z.Z.Messages.PREMIUM_TIER_HD_STREAMING_ITEM
                }),
                (0, u.jsx)(q, {
                    Icon: I.UserSquareIcon,
                    text: Z.Z.Messages.PREMIUM_TIER_CUSTOM_PROFILE_ITEM
                })
            ]
        });
    return (0, u.jsxs)(u.Fragment, {
        children: [
            (0, u.jsx)(q, {
                Icon: I.UploadIcon,
                text: Z.Z.Messages.PREMIUM_TIER_UPLOAD_ITEM.format({ maxUploadPremium: (0, y.v9)(V.p9.TIER_2, { useSpace: !1 }) })
            }),
            (0, u.jsx)(q, {
                Icon: I.ReactionIcon,
                text: Z.Z.Messages.PREMIUM_TIER_CUSTOM_EMOJI_ITEM
            }),
            (0, u.jsx)(q, {
                Icon: I.SuperReactionIcon,
                text: Z.Z.Messages.PREMIUM_MARKETING_SUPER_REACTIONS_PERK_TITLE_UNLIMITED
            }),
            (0, u.jsx)(q, {
                Icon: I.ScreenArrowIcon,
                text: Z.Z.Messages.PREMIUM_TIER_HD_STREAMING_ITEM
            }),
            (0, u.jsx)(q, {
                Icon: (0, I.makeIconCompat)(R.Z),
                text: Z.Z.Messages.PREMIUM_TIER_SERVER_BOOST_ITEM
            }),
            (0, u.jsx)(q, {
                Icon: I.UserSquareIcon,
                text: Z.Z.Messages.PREMIUM_TIER_CUSTOM_PROFILE_ITEM
            }),
            s && (0, u.jsx)(F.Z, {})
        ]
    });
}
function et(e) {
    var t;
    let { showWumpus: n, ctaButton: r, showYearlyPrice: i, featureSet: a = 0, className: s, isGift: o = !1, isModal: l = !1, priceOptions: c, showHalloweenGift: _ = !1 } = e,
        E = (0, f.e7)([O.ZP], () => O.ZP.getPremiumTypeSubscription()),
        h = (0, f.e7)([N.default], () => N.default.getCurrentUser()),
        T = (0, w.N)(),
        S = null == T ? void 0 : null === (t = T.subscription_trial) || void 0 === t ? void 0 : t.sku_id,
        g = (null == E ? void 0 : E.trialId) != null ? (null == h ? void 0 : h.premiumType) : null,
        A = (0, b.Nx)(),
        R = (0, U.Ng)(),
        C = (0, b.t7)(),
        L = null != S || null != g ? 0 : null != R || C ? 1 : null,
        y = (0, G.Vi)(),
        D = !o && A,
        x = (0, G.W1)(),
        k = (0, p.ap)((0, m.ZP)()),
        F = k ? 5 : 2,
        { enabled: j } = M._.useExperiment({ location: 'Tier2Card' }, { autoTrackExposure: !1 }),
        K = Z.Z.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT;
    j && (null == T ? void 0 : T.trial_id) === V.a7 && (K = Z.Z.Messages.REFERRAL_PROGRAM_TWO_WEEK_TRIAL);
    let q = D && !k ? Y.rimGlowTier2 : void 0;
    return (0, u.jsxs)('div', {
        className: d()(Y.card, Y.tier2, s, {
            [Y.withTier2Rim]: D,
            [Y.withCardHover]: D,
            [Y.withHalloweenTier2]: _
        }),
        children: [
            !o && null != R && (0, U.Wp)(R, V.Si.TIER_2) && void 0 !== R.discount.amount
                ? (0, u.jsxs)(u.Fragment, {
                      children: [
                          (0, u.jsx)(z, {
                              text: C ? Z.Z.Messages.PREMIUM_TIER_CARD_DISCOUNT_APPLIED : Z.Z.Messages.PREMIUM_DISCOUNT_AMOUNT_OFF_BADGE.format({ percent: R.discount.amount }),
                              className: Y.topRimPill,
                              colorOptions: F
                          }),
                          (0, u.jsx)('div', { className: q })
                      ]
                  })
                : null,
            o || S !== V.Si.TIER_2
                ? null
                : (0, u.jsxs)(u.Fragment, {
                      children: [
                          (0, u.jsx)(z, {
                              text: K,
                              className: Y.topRimPill,
                              colorOptions: F
                          }),
                          (0, u.jsx)('div', { className: q })
                      ]
                  }),
            o || g !== V.p9.TIER_2
                ? null
                : (0, u.jsxs)(u.Fragment, {
                      children: [
                          (0, u.jsx)(z, {
                              text: Z.Z.Messages.PREMIUM_TIER_CARD_TRIAL_ACTIVATED,
                              className: Y.topRimPill,
                              colorOptions: F
                          }),
                          (0, u.jsx)('div', { className: q })
                      ]
                  }),
            !o &&
                C &&
                (0, u.jsxs)(u.Fragment, {
                    children: [
                        (0, u.jsx)(z, {
                            text: Z.Z.Messages.PREMIUM_TIER_CARD_DISCOUNT_APPLIED,
                            className: Y.topRimPill,
                            colorOptions: F
                        }),
                        (0, u.jsx)('div', { className: q })
                    ]
                }),
            n
                ? (0, u.jsx)('div', {
                      className: Y.wumpusImageContainer,
                      children: (0, u.jsx)(I.Image, {
                          src: W,
                          mediaLayoutType: H.hV.RESPONSIVE,
                          width: 270,
                          height: 242,
                          zoomable: !1,
                          imageClassName: Y.wumpusImage
                      })
                  })
                : null,
            (0, u.jsxs)('div', {
                children: [
                    (0, u.jsxs)('div', {
                        children: [
                            (0, u.jsx)(v.Z, { className: d()(Y.title, Y.tier2Title) }),
                            !o &&
                                S !== V.Si.TIER_2 &&
                                y &&
                                (0, u.jsx)('div', {
                                    children: (0, u.jsx)(I.Text, {
                                        variant: 'text-xs/bold',
                                        className: Y.freeTrialPillInline,
                                        children: x
                                    })
                                }),
                            (0, u.jsx)(X, {
                                isGift: o,
                                premiumTier: V.p9.TIER_2,
                                offerType: L,
                                offerTierMatchesCard: S === V.Si.TIER_2 || (0, U.Wp)(R, V.Si.TIER_2),
                                showYearlyPrice: i,
                                priceOptions: c
                            })
                        ]
                    }),
                    (0, u.jsx)('div', {
                        children: (0, u.jsx)(ee, {
                            featureSet: a,
                            isModal: l,
                            isGift: o
                        })
                    })
                ]
            }),
            r,
            o || (S !== V.Si.TIER_2 && null == R) ? null : (0, u.jsx)(B.t, { tier: V.p9.TIER_2 }),
            _
                ? (0, u.jsxs)('div', {
                      className: Y.halloweenGiftMessage,
                      children: [
                          (0, u.jsx)(I.Text, {
                              className: Y.halloweenGiftMessageText,
                              variant: 'text-md/medium',
                              children: Z.Z.Messages.NITROWEEN_MOBILE_GIFT_PLAN_SELECT_DESCRIPTION
                          }),
                          (0, u.jsx)('div', {
                              className: Y.halloweenAvatar,
                              children: (0, u.jsx)(P.Z, { size: I.AvatarSizes.SIZE_80 })
                          })
                      ]
                  })
                : null
        ]
    });
}
function en(e) {
    let { showWumpus: t, tier0CTAButton: n, tier2CTAButton: r, className: i } = e,
        { analyticsLocations: a } = (0, S.ZP)(T.Z.PREMIUM_MARKETING_TIER_CARD);
    return (0, u.jsx)(S.Gt, {
        value: a,
        children: (0, u.jsxs)('div', {
            className: d()(Y.premiumCards, i),
            children: [
                (0, u.jsx)(J, {
                    showWumpus: t,
                    ctaButton: n
                }),
                (0, u.jsx)(et, {
                    showWumpus: t,
                    ctaButton: r
                })
            ]
        })
    });
}
((r = s || (s = {}))[(r.PREMIUM_TIER_0_WHITE_FILL = 0)] = 'PREMIUM_TIER_0_WHITE_FILL'), (r[(r.PREMIUM_TIER_0_GRADIENT_FILL = 1)] = 'PREMIUM_TIER_0_GRADIENT_FILL'), (r[(r.PREMIUM_TIER_2_WHITE_FILL = 2)] = 'PREMIUM_TIER_2_WHITE_FILL'), (r[(r.PREMIUM_TIER_2_NEW_GRADIENT_FILL = 3)] = 'PREMIUM_TIER_2_NEW_GRADIENT_FILL'), (r[(r.PREMIUM_TIER_2_OLD_GRADIENT_FILL = 4)] = 'PREMIUM_TIER_2_OLD_GRADIENT_FILL'), (r[(r.PREMIUM_TIER_2_OLD_GRADIENT_FILL_LIGHT_MODE = 5)] = 'PREMIUM_TIER_2_OLD_GRADIENT_FILL_LIGHT_MODE'), ((i = o || (o = {}))[(i.PREMIUM_TRIAL = 0)] = 'PREMIUM_TRIAL'), (i[(i.PREMIUM_DISCOUNT = 1)] = 'PREMIUM_DISCOUNT'), ((a = l || (l = {}))[(a.DEFAULT = 0)] = 'DEFAULT'), (a[(a.BOOSTING = 1)] = 'BOOSTING');
