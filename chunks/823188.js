n.d(t, {
    Cy: function () {
        return J;
    },
    Gq: function () {
        return er;
    },
    NN: function () {
        return c;
    },
    VE: function () {
        return o;
    },
    ZP: function () {
        return es;
    },
    mn: function () {
        return X;
    },
    nT: function () {
        return ei;
    },
    uZ: function () {
        return u;
    },
    wp: function () {
        return ea;
    }
});
var r,
    i,
    a,
    s,
    o,
    l,
    u,
    c,
    d = n(200651);
n(192379);
var f = n(120356),
    _ = n.n(f),
    h = n(913527),
    p = n.n(h),
    m = n(442837),
    g = n(692547),
    E = n(780384),
    v = n(481060),
    I = n(410030),
    S = n(100527),
    T = n(906732),
    b = n(535322),
    y = n(706454),
    A = n(594174),
    N = n(78839),
    C = n(709586),
    R = n(483444),
    O = n(599250),
    D = n(942659),
    L = n(930153),
    x = n(74538),
    w = n(357355),
    M = n(140465),
    P = n(184508),
    k = n(650032),
    U = n(515593),
    G = n(104494),
    B = n(639119),
    Z = n(230916),
    F = n(346497),
    V = n(504865),
    j = n(63802),
    H = n(318990),
    Y = n(474936),
    W = n(217702),
    K = n(388032),
    z = n(645512),
    q = n(476945),
    Q = n(945182);
function X(e) {
    let { text: t, className: n, colorOptions: r = 2 } = e;
    return (0, d.jsx)('div', {
        className: _()(n, z.freeTrialPill, {
            [z.freeTrialPillTier0GradientFill]: 1 === r,
            [z.freeTrialPillTier2GradientFill]: 3 === r,
            [z.freeTrialPillTier2OldGradientFill]: 4 === r,
            [z.lightBackgroundPill]: 5 === r
        }),
        children: (0, d.jsx)(v.Text, {
            variant: 'text-xs/bold',
            className: _()(z.freeTrialPillText, {
                [z.freeTrialPillTextInverted]: 0 !== r && 2 !== r,
                [z.freeTrialPillTextTier0]: 0 === r,
                [z.freeTrialPillTextTier2]: 2 === r
            }),
            children: t
        })
    });
}
function J(e) {
    let t,
        { text: n, className: r, colorOptions: i = 2, isPillOnBorder: a = !0 } = e;
    switch (i) {
        case 1:
            t = g.Z.unsafe_rawColors.PREMIUM_TIER_0_PURPLE_FOR_GRADIENTS.css;
            break;
        case 3:
            t = 'url(#'.concat(j.l_, ')');
            break;
        case 4:
        case 5:
            t = 'url(#'.concat(j.Qi, ')');
            break;
        default:
            t = 'white';
    }
    return a
        ? (0, d.jsxs)('div', {
              className: _()(r, z.freeTrialPillWithSparkles),
              children: [
                  (0, d.jsx)(j.R9, {
                      foreground: z.sparkleStar1,
                      color: t
                  }),
                  (0, d.jsx)(j.R9, {
                      foreground: z.sparkleStar2,
                      color: t
                  }),
                  (0, d.jsx)(j.R9, {
                      foreground: z.sparkleStar3,
                      color: t
                  }),
                  (0, d.jsx)(X, {
                      text: n,
                      colorOptions: i
                  }),
                  (0, d.jsx)(j.R9, {
                      foreground: z.sparkleStar4,
                      color: t
                  }),
                  (0, d.jsx)(j.R9, {
                      foreground: z.sparkleStar5,
                      color: t
                  })
              ]
          })
        : (0, d.jsxs)('div', {
              className: _()(r, z.freeTrialPillWithSparkles),
              children: [
                  (0, d.jsx)(X, {
                      text: n,
                      colorOptions: i
                  }),
                  (0, d.jsx)(j.R9, {
                      foreground: z.sparkleStar1,
                      style: {
                          marginLeft: 4,
                          marginBottom: -6
                      },
                      color: t
                  }),
                  (0, d.jsx)(j.R9, {
                      foreground: z.sparkleStar2,
                      color: t
                  })
              ]
          });
}
function $(e) {
    let { Icon: t, text: n, isNew: r = !1, className: i, textVariant: a } = e;
    return (0, d.jsxs)('div', {
        className: null != i ? i : z.itemWithWumpus,
        children: [
            (0, d.jsx)(t, {
                className: z.icon,
                color: 'currentColor'
            }),
            (0, d.jsx)(v.Text, {
                variant: null != a ? a : 'text-md/normal',
                color: 'always-white',
                children: n
            }),
            r
                ? (0, d.jsx)(b.Z, {
                      className: z.newTagItem,
                      forceUseColorForSparkles: !0,
                      shouldInheritBackgroundColor: !0,
                      shouldInheritTextColor: !0
                  })
                : null
        ]
    });
}
function ee(e) {
    var t;
    let { defaultPriceString: n, subscriptionPlan: r, discountOffer: i } = e,
        a = (0, Z.A)(r);
    return (0, d.jsx)(d.Fragment, {
        children: K.intl.format(K.t.sJTwHR, {
            numMonths: null !== (t = i.discount.user_usage_limit) && void 0 !== t ? t : Y.rt,
            discountedPrice: a,
            regularPrice: n
        })
    });
}
function et(e) {
    var t, n, r, i, a, s, o;
    let { isGift: l, premiumTier: u, offerTierMatchesCard: c, offerType: f, showYearlyPrice: _, priceOptions: h, textVariant: g, className: E, shouldUseTaglineXPCopy: I } = e,
        S = (0, m.e7)([N.ZP], () => N.ZP.getPremiumTypeSubscription()),
        T = (0, m.e7)([A.default], () => A.default.getCurrentUser()),
        b = (0, M.t7)(),
        y = (0, M.lr)(),
        C = u === Y.p9.TIER_0 ? Y.Si.TIER_0 : Y.Si.TIER_2,
        R = (null == S ? void 0 : S.trialId) != null ? (null == T ? void 0 : T.premiumType) : b ? Y.p9.TIER_2 : null,
        O = (0, B.N)(),
        D = (0, G.Ng)(),
        L = null == O ? void 0 : O.subscription_trial;
    if (!l && null != R && u === R && null != S && null != S.planIdFromItems) {
        let e = null != S.trialEndsAt ? p()(null == S ? void 0 : S.trialEndsAt).diff(p()(), 'd') : 0,
            i = Y.GP[S.planIdFromItems],
            a = x.ZP.formatPriceString(x.ZP.getDefaultPrice(i.id), i.interval);
        return (0, d.jsx)(d.Fragment, {
            children: (0, d.jsx)(v.Heading, {
                variant: 'heading-md/normal',
                color: 'always-white',
                className: z.trialHeader,
                children:
                    0 === f
                        ? K.intl.format(K.t['2CGBrq'], {
                              remainingTime: e,
                              price: a
                          })
                        : S.planIdFromItems === Y.Xh.PREMIUM_YEAR_TIER_2
                          ? K.intl.format(K.t['+qqh6u'], {
                                percent: null !== (t = null == y ? void 0 : y.percentage) && void 0 !== t ? t : Y.Bo,
                                regularPrice: a
                            })
                          : K.intl.formatToPlainString(K.t['3Ziutb'], {
                                percent: null !== (n = null == y ? void 0 : y.percentage) && void 0 !== n ? n : Y.M_,
                                regularPrice: a,
                                numMonths: null !== (r = null == y ? void 0 : y.duration) && void 0 !== r ? r : Y.rt
                            })
            })
        });
    }
    if (!l && c) {
        let e = x.ZP.formatPriceString(x.ZP.getDefaultPrice(u === Y.p9.TIER_0 ? Y.Xh.PREMIUM_MONTH_TIER_0 : Y.Xh.PREMIUM_MONTH_TIER_2), Y.rV.MONTH);
        if (0 === f) {
            return (0, d.jsx)(v.Heading, {
                variant: 'heading-md/normal',
                color: 'always-white',
                className: z.trialHeader,
                children: K.intl.format(K.t['9vyovr'], {
                    planName: (0, x.aq)(null !== (a = Y.IW[null !== (i = null == L ? void 0 : L.sku_id) && void 0 !== i ? i : Y.Si.NONE]) && void 0 !== a ? a : Y.Xh.PREMIUM_MONTH_TIER_2),
                    duration: (0, x.if)({
                        intervalType: null !== (s = null == L ? void 0 : L.interval) && void 0 !== s ? s : Y.rV.DAY,
                        intervalCount: null !== (o = null == L ? void 0 : L.interval_count) && void 0 !== o ? o : 30,
                        capitalize: !1
                    }),
                    price: e
                })
            });
        }
        if (null != D)
            return (0, d.jsx)(v.Heading, {
                variant: 'heading-md/normal',
                color: 'always-white',
                className: z.trialHeader,
                children: (0, d.jsx)(ee, {
                    defaultPriceString: e,
                    subscriptionPlan: Y.Xh.PREMIUM_MONTH_TIER_2,
                    discountOffer: D
                })
            });
    }
    return (0, d.jsxs)(d.Fragment, {
        children: [
            (0, d.jsx)(V.Z, {
                subscriptionTier: C,
                isGift: l,
                className: null != E ? E : z.price,
                priceOptions: h,
                variant: g,
                shouldUseTaglineXPCopy: I
            }),
            _ &&
                (0, d.jsx)(V.Z, {
                    subscriptionTier: C,
                    interval: Y.rV.YEAR,
                    className: null != E ? E : z.price,
                    isGift: l,
                    priceOptions: h,
                    variant: g,
                    shouldUseTaglineXPCopy: I
                })
        ]
    });
}
function en(e) {
    let { shouldUseTaglineXPCopy: t } = e;
    return t
        ? (0, d.jsxs)(d.Fragment, {
              children: [
                  (0, d.jsx)($, {
                      Icon: v.CheckmarkLargeIcon,
                      text: K.intl.string(K.t.KjrZ8f),
                      className: z.item,
                      textVariant: 'text-sm/normal'
                  }),
                  (0, d.jsx)($, {
                      Icon: v.CheckmarkLargeIcon,
                      text: K.intl.formatToPlainString(K.t.p8QVLS, { maxUploadPremium: (0, x.v9)(Y.p9.TIER_0, { useSpace: !1 }) }),
                      className: z.item,
                      textVariant: 'text-sm/normal'
                  }),
                  (0, d.jsx)($, {
                      Icon: v.CheckmarkLargeIcon,
                      text: K.intl.string(K.t.Uukj4u),
                      className: z.item,
                      textVariant: 'text-sm/normal'
                  })
              ]
          })
        : (0, d.jsxs)(d.Fragment, {
              children: [
                  (0, d.jsx)($, {
                      Icon: v.UploadIcon,
                      text: K.intl.formatToPlainString(K.t.p8QVLS, { maxUploadPremium: (0, x.v9)(Y.p9.TIER_0, { useSpace: !1 }) })
                  }),
                  (0, d.jsx)($, {
                      Icon: v.ReactionIcon,
                      text: K.intl.string(K.t.KjrZ8f)
                  }),
                  (0, d.jsx)($, {
                      Icon: v.SuperReactionIcon,
                      text: K.intl.string(K.t.taMwg4)
                  }),
                  (0, d.jsx)($, {
                      Icon: v.NitroWheelIcon,
                      text: K.intl.string(K.t['8ukxAQ'])
                  })
              ]
          });
}
function er(e) {
    var t;
    let { showWumpus: n, shouldUseTaglineXPCopy: r, ctaButton: i, showYearlyPrice: a, className: s, isGift: o = !1, priceOptions: l, variant: u } = e,
        c = (0, m.e7)([N.ZP], () => N.ZP.getPremiumTypeSubscription()),
        f = (0, m.e7)([A.default], () => A.default.getCurrentUser()),
        h = (0, B.N)(),
        p = null == h ? void 0 : null === (t = h.subscription_trial) || void 0 === t ? void 0 : t.sku_id,
        g = (null == c ? void 0 : c.trialId) != null,
        E = (null == c ? void 0 : c.trialId) != null ? (null == f ? void 0 : f.premiumType) : null,
        I = null != p || g,
        { useEssentials: S } = (0, P.VR)('PremiumTierCards');
    return (0, d.jsxs)('div', {
        className: _()(z.tier0, z.card, s, {
            [z.withTier0Rim]: !o && I,
            [z.withCardHover]: !o && I
        }),
        children: [
            p === Y.Si.TIER_0
                ? (0, d.jsxs)(d.Fragment, {
                      children: [
                          (0, d.jsx)(J, {
                              text: K.intl.string(K.t.IBYG5e),
                              className: z.topRimPill,
                              colorOptions: 0
                          }),
                          (0, d.jsx)('div', { className: z.rimGlowTier0 })
                      ]
                  })
                : null,
            n
                ? (0, d.jsx)('div', {
                      className: z.wumpusImageContainer,
                      children: (0, d.jsx)(v.Image, {
                          src: q,
                          mediaLayoutType: W.hV.RESPONSIVE,
                          width: 270,
                          height: 242,
                          zoomable: !1,
                          imageClassName: z.wumpusImage
                      })
                  })
                : null,
            o || p !== Y.Si.TIER_0
                ? null
                : (0, d.jsxs)(d.Fragment, {
                      children: [
                          (0, d.jsx)(J, {
                              text: K.intl.string(K.t.IBYG5e),
                              className: z.topRimPill,
                              colorOptions: 0
                          }),
                          (0, d.jsx)('div', { className: z.rimGlowTier0 })
                      ]
                  }),
            o || E !== Y.p9.TIER_0
                ? null
                : (0, d.jsxs)(d.Fragment, {
                      children: [
                          (0, d.jsx)(J, {
                              text: K.intl.string(K.t.qYKftb),
                              className: z.topRimPill,
                              colorOptions: 0
                          }),
                          (0, d.jsx)('div', { className: z.rimGlowTier0 })
                      ]
                  }),
            (0, d.jsxs)('div', {
                children: [
                    (0, d.jsxs)('div', {
                        children: [
                            r ? (0, d.jsx)(D.Z, { className: _()(z.title, z.taglineXPTier0Title) }) : (0, d.jsx)(O.Z, { className: _()(z.title, z.tier0Title) }),
                            r &&
                                (0, d.jsx)(v.Text, {
                                    variant: 'display-md',
                                    color: 'always-white',
                                    className: 2 === u ? z.taglineXPSubHeaderSettings : z.taglineXPSubHeaderStoreHome,
                                    children: S ? K.intl.string(K.t.M3yrYG) : K.intl.string(K.t.IqfTvL)
                                }),
                            (0, d.jsx)(et, {
                                isGift: o,
                                premiumTier: Y.p9.TIER_0,
                                offerType: 0,
                                offerTierMatchesCard: p === Y.Si.TIER_0,
                                showYearlyPrice: a,
                                priceOptions: l,
                                textVariant: r ? 'heading-lg/normal' : void 0,
                                shouldUseTaglineXPCopy: r,
                                className: r ? (a ? z.taglineXPPrices : z.taglineXPPrice) : void 0
                            })
                        ]
                    }),
                    (0, d.jsx)('div', { children: (0, d.jsx)(en, { shouldUseTaglineXPCopy: r }) })
                ]
            }),
            i,
            o || p !== Y.Si.TIER_0 ? null : (0, d.jsx)(j.t, { tier: Y.p9.TIER_0 })
        ]
    });
}
function ei(e) {
    let { featureSet: t = 0, isModal: n = !1, isGift: r = !1 } = e,
        i = (0, m.e7)([y.default], () => y.default.locale),
        a = (0, m.e7)([w.Z], () => w.Z.affinities),
        s = n && !r && a.length > 0;
    switch (t) {
        case 2:
            return (0, d.jsxs)(d.Fragment, {
                children: [
                    (0, d.jsx)(v.Text, {
                        variant: 'text-sm/normal',
                        color: 'always-white',
                        style: { marginBottom: 6 },
                        children: K.intl.string(K.t.AozD3d)
                    }),
                    (0, d.jsx)($, {
                        Icon: v.CheckmarkLargeIcon,
                        text: K.intl.string(K.t.kpMomJ),
                        className: z.item,
                        textVariant: 'text-sm/normal'
                    }),
                    (0, d.jsx)($, {
                        Icon: v.CheckmarkLargeIcon,
                        text: K.intl.formatToPlainString(K.t.p8QVLS, { maxUploadPremium: (0, x.v9)(Y.p9.TIER_2, { useSpace: !1 }) }),
                        className: z.item,
                        textVariant: 'text-sm/normal'
                    }),
                    (0, d.jsx)($, {
                        Icon: v.CheckmarkLargeIcon,
                        text: K.intl.string(K.t.W180bW),
                        className: z.item,
                        textVariant: 'text-sm/normal'
                    }),
                    (0, d.jsx)($, {
                        Icon: v.CheckmarkLargeIcon,
                        text: K.intl.string(K.t.zTk8Ul),
                        className: z.item,
                        textVariant: 'text-sm/normal'
                    }),
                    s && (0, d.jsx)(H.Z, {})
                ]
            });
        case 1:
            return (0, d.jsxs)(d.Fragment, {
                children: [
                    (0, d.jsx)($, {
                        Icon: (0, v.makeIconCompat)(C.Z),
                        text: K.intl.formatToPlainString(K.t.T9RTr6, {
                            numBoosts: Y.cb,
                            percentageOff: (0, L.T3)(i, Y.Rr / 100)
                        })
                    }),
                    (0, d.jsx)($, {
                        Icon: v.UploadIcon,
                        text: K.intl.formatToPlainString(K.t.p8QVLS, { maxUploadPremium: (0, x.v9)(Y.p9.TIER_2, { useSpace: !1 }) })
                    }),
                    (0, d.jsx)($, {
                        Icon: v.ReactionIcon,
                        text: K.intl.string(K.t.KjrZ8f)
                    }),
                    (0, d.jsx)($, {
                        Icon: v.ScreenArrowIcon,
                        text: K.intl.string(K.t.W180bW)
                    }),
                    (0, d.jsx)($, {
                        Icon: v.UserSquareIcon,
                        text: K.intl.string(K.t.CNIZf3)
                    })
                ]
            });
        case 3:
            return (0, d.jsxs)(d.Fragment, {
                children: [
                    (0, d.jsx)($, {
                        Icon: v.UploadIcon,
                        text: K.intl.formatToPlainString(K.t.p8QVLS, { maxUploadPremium: (0, x.v9)(Y.p9.TIER_2, { useSpace: !1 }) })
                    }),
                    (0, d.jsx)($, {
                        Icon: v.ReactionIcon,
                        text: K.intl.string(K.t.KjrZ8f)
                    }),
                    (0, d.jsx)($, {
                        Icon: v.SuperReactionIcon,
                        text: K.intl.string(K.t.taMwg4)
                    }),
                    (0, d.jsx)($, {
                        Icon: v.ScreenArrowIcon,
                        text: K.intl.string(K.t.W180bW)
                    }),
                    (0, d.jsx)($, {
                        Icon: v.UserSquareIcon,
                        text: K.intl.string(K.t.CNIZf3)
                    })
                ]
            });
        default:
            return (0, d.jsxs)(d.Fragment, {
                children: [
                    (0, d.jsx)($, {
                        Icon: v.UploadIcon,
                        text: K.intl.formatToPlainString(K.t.p8QVLS, { maxUploadPremium: (0, x.v9)(Y.p9.TIER_2, { useSpace: !1 }) })
                    }),
                    (0, d.jsx)($, {
                        Icon: v.ReactionIcon,
                        text: K.intl.string(K.t.KjrZ8f)
                    }),
                    (0, d.jsx)($, {
                        Icon: v.SuperReactionIcon,
                        text: K.intl.string(K.t.taMwg4)
                    }),
                    (0, d.jsx)($, {
                        Icon: v.ScreenArrowIcon,
                        text: K.intl.string(K.t.W180bW)
                    }),
                    (0, d.jsx)($, {
                        Icon: (0, v.makeIconCompat)(C.Z),
                        text: K.intl.string(K.t.cdfuUV)
                    }),
                    (0, d.jsx)($, {
                        Icon: v.UserSquareIcon,
                        text: K.intl.string(K.t.CNIZf3)
                    }),
                    s && (0, d.jsx)(H.Z, {})
                ]
            });
    }
}
function ea(e) {
    var t;
    let { showWumpus: n, ctaButton: r, showYearlyPrice: i, featureSet: a = 0, className: s, isGift: o = !1, isModal: l = !1, priceOptions: u, showHalloweenGift: c = !1, shouldUseTaglineXPCopy: f = !1, variant: h } = e,
        p = (0, m.e7)([N.ZP], () => N.ZP.getPremiumTypeSubscription()),
        g = (0, m.e7)([A.default], () => A.default.getCurrentUser()),
        S = (0, B.N)(),
        T = null == S ? void 0 : null === (t = S.subscription_trial) || void 0 === t ? void 0 : t.sku_id,
        b = (null == p ? void 0 : p.trialId) != null ? (null == g ? void 0 : g.premiumType) : null,
        y = (0, M.Nx)(),
        C = (0, G.Ng)(),
        O = (0, M.t7)(),
        D = null != T || null != b ? 0 : null != C || O ? 1 : null,
        L = (0, F.Vi)(),
        x = !o && y,
        w = (0, F.W1)(),
        P = (0, E.ap)((0, I.ZP)()),
        Z = P ? 5 : 2,
        { enabled: V } = k._.useExperiment({ location: 'Tier2Card' }, { autoTrackExposure: !1 }),
        H = K.intl.string(K.t.IBYG5e);
    V && (null == S ? void 0 : S.trial_id) === Y.a7 && (H = K.intl.string(K.t.gtNqJS));
    let q = x && !P ? z.rimGlowTier2 : void 0;
    return (0, d.jsxs)('div', {
        className: _()(z.card, z.tier2, s, {
            [z.withTier2Rim]: x,
            [z.withCardHover]: x,
            [z.withHalloweenTier2]: c
        }),
        children: [
            !o && null != C && (0, G.Wp)(C, Y.Si.TIER_2) && void 0 !== C.discount.amount
                ? (0, d.jsxs)(d.Fragment, {
                      children: [
                          (0, d.jsx)(J, {
                              text: O ? K.intl.string(K.t.EyjDRE) : K.intl.formatToPlainString(K.t.iiLbvr, { percent: C.discount.amount }),
                              className: z.topRimPill,
                              colorOptions: Z
                          }),
                          (0, d.jsx)('div', { className: q })
                      ]
                  })
                : null,
            o || T !== Y.Si.TIER_2
                ? null
                : (0, d.jsxs)(d.Fragment, {
                      children: [
                          (0, d.jsx)(J, {
                              text: H,
                              className: z.topRimPill,
                              colorOptions: Z
                          }),
                          (0, d.jsx)('div', { className: q })
                      ]
                  }),
            o || b !== Y.p9.TIER_2
                ? null
                : (0, d.jsxs)(d.Fragment, {
                      children: [
                          (0, d.jsx)(J, {
                              text: K.intl.string(K.t.qYKftb),
                              className: z.topRimPill,
                              colorOptions: Z
                          }),
                          (0, d.jsx)('div', { className: q })
                      ]
                  }),
            !o &&
                O &&
                (0, d.jsxs)(d.Fragment, {
                    children: [
                        (0, d.jsx)(J, {
                            text: K.intl.string(K.t.EyjDRE),
                            className: z.topRimPill,
                            colorOptions: Z
                        }),
                        (0, d.jsx)('div', { className: q })
                    ]
                }),
            n
                ? (0, d.jsx)('div', {
                      className: z.wumpusImageContainer,
                      children: (0, d.jsx)(v.Image, {
                          src: Q,
                          mediaLayoutType: W.hV.RESPONSIVE,
                          width: 270,
                          height: 242,
                          zoomable: !1,
                          imageClassName: z.wumpusImage
                      })
                  })
                : null,
            (0, d.jsxs)('div', {
                children: [
                    (0, d.jsxs)('div', {
                        children: [
                            (0, d.jsx)(R.Z, {
                                className: _()(z.title, {
                                    [z.taglineXPTier2Title]: f,
                                    [z.tier2Title]: !f
                                })
                            }),
                            !o &&
                                T !== Y.Si.TIER_2 &&
                                L &&
                                (0, d.jsx)('div', {
                                    children: (0, d.jsx)(v.Text, {
                                        variant: 'text-xs/bold',
                                        className: z.freeTrialPillInline,
                                        children: w
                                    })
                                }),
                            f &&
                                (0, d.jsx)(v.Text, {
                                    variant: 'display-md',
                                    color: 'always-white',
                                    className: 2 === h ? z.taglineXPSubHeaderSettings : z.taglineXPSubHeaderStoreHome,
                                    children: K.intl.string(K.t.C0OXzc)
                                }),
                            (0, d.jsx)(et, {
                                isGift: o,
                                premiumTier: Y.p9.TIER_2,
                                offerType: D,
                                offerTierMatchesCard: T === Y.Si.TIER_2 || (0, G.Wp)(C, Y.Si.TIER_2),
                                showYearlyPrice: i,
                                priceOptions: u,
                                textVariant: f ? 'heading-lg/normal' : void 0,
                                shouldUseTaglineXPCopy: f,
                                className: f ? (i ? z.taglineXPPrices : z.taglineXPPrice) : void 0
                            })
                        ]
                    }),
                    (0, d.jsx)('div', {
                        children: (0, d.jsx)(ei, {
                            featureSet: f ? 2 : a,
                            isModal: l,
                            isGift: o
                        })
                    })
                ]
            }),
            r,
            o || (T !== Y.Si.TIER_2 && null == C) ? null : (0, d.jsx)(j.t, { tier: Y.p9.TIER_2 }),
            c
                ? (0, d.jsxs)('div', {
                      className: z.halloweenGiftMessage,
                      children: [
                          (0, d.jsx)(v.Text, {
                              className: z.halloweenGiftMessageText,
                              variant: 'text-md/medium',
                              children: K.intl.string(K.t.J88y6O)
                          }),
                          (0, d.jsx)('div', {
                              className: z.halloweenAvatar,
                              children: (0, d.jsx)(U.Z, { size: v.AvatarSizes.SIZE_80 })
                          })
                      ]
                  })
                : null
        ]
    });
}
function es(e) {
    let { variant: t, showWumpus: n, tier0CTAButton: r, tier2CTAButton: i, className: a } = e,
        { analyticsLocations: s } = (0, T.ZP)(S.Z.PREMIUM_MARKETING_TIER_CARD),
        o = 2 === t || 1 === t;
    return (0, d.jsx)(T.Gt, {
        value: s,
        children: (0, d.jsxs)('div', {
            className: _()(z.premiumCards, a),
            children: [
                (0, d.jsx)(er, {
                    showWumpus: n,
                    shouldUseTaglineXPCopy: o,
                    ctaButton: r,
                    variant: t
                }),
                (0, d.jsx)(ea, {
                    showWumpus: n,
                    shouldUseTaglineXPCopy: o,
                    ctaButton: i,
                    variant: t
                })
            ]
        })
    });
}
((r = o || (o = {}))[(r.PREMIUM_TIER_0_WHITE_FILL = 0)] = 'PREMIUM_TIER_0_WHITE_FILL'), (r[(r.PREMIUM_TIER_0_GRADIENT_FILL = 1)] = 'PREMIUM_TIER_0_GRADIENT_FILL'), (r[(r.PREMIUM_TIER_2_WHITE_FILL = 2)] = 'PREMIUM_TIER_2_WHITE_FILL'), (r[(r.PREMIUM_TIER_2_NEW_GRADIENT_FILL = 3)] = 'PREMIUM_TIER_2_NEW_GRADIENT_FILL'), (r[(r.PREMIUM_TIER_2_OLD_GRADIENT_FILL = 4)] = 'PREMIUM_TIER_2_OLD_GRADIENT_FILL'), (r[(r.PREMIUM_TIER_2_OLD_GRADIENT_FILL_LIGHT_MODE = 5)] = 'PREMIUM_TIER_2_OLD_GRADIENT_FILL_LIGHT_MODE'), ((i = l || (l = {}))[(i.PREMIUM_TRIAL = 0)] = 'PREMIUM_TRIAL'), (i[(i.PREMIUM_DISCOUNT = 1)] = 'PREMIUM_DISCOUNT'), ((a = u || (u = {}))[(a.DEFAULT = 0)] = 'DEFAULT'), (a[(a.BOOSTING = 1)] = 'BOOSTING'), (a[(a.TAGLINE_XP = 2)] = 'TAGLINE_XP'), (a[(a.FRACTIONAL_PREMIUM = 3)] = 'FRACTIONAL_PREMIUM'), ((s = c || (c = {}))[(s.DEFAULT = 0)] = 'DEFAULT'), (s[(s.TAGLINE_XP_COPY_HOME = 1)] = 'TAGLINE_XP_COPY_HOME'), (s[(s.TAGLINE_XP_COPY_SETTINGS = 2)] = 'TAGLINE_XP_COPY_SETTINGS');
