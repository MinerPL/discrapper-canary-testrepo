n.d(t, {
    d: function () {
        return en;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    l = n(913527),
    o = n.n(l),
    c = n(442837),
    d = n(622535),
    u = n(780384),
    g = n(481060),
    m = n(570140),
    f = n(355467),
    p = n(37234),
    _ = n(821849),
    h = n(230711),
    x = n(497321),
    E = n(634894),
    b = n(410030),
    C = n(100527),
    v = n(906732),
    T = n(211242),
    N = n(975298),
    I = n(15640),
    S = n(89057),
    R = n(406128),
    A = n(703656),
    j = n(246946),
    P = n(78839),
    O = n(483444),
    Z = n(626135),
    M = n(63063),
    w = n(74538),
    B = n(140465),
    y = n(599659),
    k = n(91802),
    L = n(898997),
    U = n(197115),
    D = n(823188),
    G = n(504865),
    H = n(179984),
    V = n(938736),
    F = n(386733),
    W = n(474936),
    z = n(981631),
    Y = n(388032),
    K = n(957781),
    Q = n(881188),
    J = n(434691),
    q = n(507579);
let X = 'gifting_button',
    $ = 'payment modal';
function ee(e) {
    let { premiumSubscription: t, isDiscountApplied: n, inReverseTrial: r, activeDiscountInfo: a, theme: s } = e,
        l = null != t.trialId,
        c = t.planIdFromItems === W.Xh.PREMIUM_YEAR_TIER_2,
        d = n || l,
        m = null != t.trialEndsAt ? o()(t.trialEndsAt).diff(o()(), 'd') : 0,
        f = W.GP[t.planIdFromItems],
        p = w.ZP.formatPriceString(w.ZP.getDefaultPrice(f.id), f.interval);
    return d
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (l || !c) &&
                      (0, i.jsx)(D.Cy, {
                          text: l ? Y.intl.string(Y.t.qYKftb) : Y.intl.string(Y.t.EyjDRE),
                          className: K.topRimPillWithSparkles,
                          colorOptions: (0, u.wj)(s) ? D.VE.PREMIUM_TIER_2_WHITE_FILL : D.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL
                      }),
                  (l || !c) && (0, i.jsx)('div', { className: K.rimGlowTier2 }),
                  (0, i.jsx)(g.Heading, {
                      variant: 'heading-md/normal',
                      color: 'always-white',
                      className: K.trialHeader,
                      children: (() => {
                          var e, n, i;
                          if (l) {
                              if (r) {
                                  let e = w.ZP.getReverseTrialWeeks(t.trialId);
                                  return Y.intl.format(Y.t.jLglur, { weeks: e });
                              }
                              return Y.intl.format(Y.t['2CGBrq'], {
                                  remainingTime: m,
                                  price: p
                              });
                          }
                          if (c)
                              return Y.intl.format(Y.t['+qqh6u'], {
                                  percent: null !== (e = null == a ? void 0 : a.percentage) && void 0 !== e ? e : W.Bo,
                                  regularPrice: p
                              });
                          return Y.intl.formatToPlainString(Y.t['3Ziutb'], {
                              percent: null !== (n = null == a ? void 0 : a.percentage) && void 0 !== n ? n : W.M_,
                              regularPrice: p,
                              numMonths: null !== (i = null == a ? void 0 : a.duration) && void 0 !== i ? i : W.rt
                          });
                      })()
                  })
              ]
          })
        : (0, i.jsx)(G.Z, {
              variant: void 0,
              subscriptionTier: W.Si.TIER_2,
              interval: f.interval
          });
}
function et() {
    let e = (0, B.t7)(),
        t = (0, B.lr)(),
        n = (0, c.e7)([P.ZP], () => P.ZP.inReverseTrial()),
        r = (0, b.ZP)(),
        a = (0, c.e7)([P.ZP], () => P.ZP.getPremiumTypeSubscription()),
        { fractionalState: l } = (0, N.Z)(),
        o = null !== a && null !== a.planIdFromItems;
    if (!o && l === W.a$.NONE) return null;
    let d = l !== W.a$.NONE,
        u = null !== a && null != a.trialId,
        m = e || u;
    return (0, i.jsxs)('div', {
        className: s()(K.tierCard, { [K.withTier2Rim]: m }),
        children: [
            (0, i.jsxs)('div', {
                className: K.tierInfo,
                children: [
                    (0, i.jsx)(O.Z, { className: K.tierTitle }),
                    d
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(D.mn, {
                                      text: Y.intl.string(Y.t.uXF4c3),
                                      className: K.fractionalPremiumTopRimPill,
                                      colorOptions: D.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL
                                  }),
                                  (0, i.jsx)(g.Heading, {
                                      variant: 'heading-md/normal',
                                      color: 'always-white',
                                      className: K.fractionalPremiumSubheader,
                                      children: Y.intl.format(Y.t.sK7fGh, { helpCenterLink: M.Z.getArticleURL(z.BhN.FRACTIONAL_PREMIUM_ABOUT) })
                                  })
                              ]
                          })
                        : o
                          ? (0, i.jsx)(ee, {
                                premiumSubscription: a,
                                isDiscountApplied: e,
                                inReverseTrial: n,
                                activeDiscountInfo: t,
                                theme: r
                            })
                          : null,
                    (0, i.jsx)(D.nT, { featureSet: d ? D.uZ.FRACTIONAL_PREMIUM : D.uZ.DEFAULT }),
                    (0, i.jsx)(g.Button, {
                        className: K.tierCardButton,
                        color: g.Button.Colors.WHITE,
                        onClick: () => {
                            Z.default.track(z.rMx.PREMIUM_SETTINGS_INTERACTED, {
                                cta_type: 'to_premium_home_button',
                                target: 'premium home page'
                            }),
                                (0, p.xf)(),
                                (0, A.uL)(z.Z5c.APPLICATION_STORE);
                        },
                        children: (0, i.jsx)(g.Text, {
                            className: K.tierCardButtonCTA,
                            variant: 'text-sm/medium',
                            children: Y.intl.string(Y.t.VR2iVF)
                        })
                    }),
                    (0, i.jsx)(g.Button, {
                        className: K.managePlanButton,
                        look: g.Button.Looks.OUTLINED,
                        color: g.Button.Colors.WHITE,
                        onClick: () => {
                            Z.default.track(z.rMx.PREMIUM_SETTINGS_INTERACTED, {
                                cta_type: 'to_subscriptions_button',
                                target: 'subscriptions settings'
                            }),
                                h.Z.open(z.oAB.SUBSCRIPTIONS);
                        },
                        children: (0, i.jsx)(g.Text, {
                            className: K.__invalid_managePlanButtonCTA,
                            variant: 'text-sm/medium',
                            color: 'always-white',
                            children: Y.intl.string(Y.t['9uDy6O'])
                        })
                    })
                ]
            }),
            (0, i.jsx)('div', {
                className: K.tierImage,
                children: (0, i.jsx)('img', {
                    className: K.tierImage,
                    alt: '',
                    src: Q
                })
            })
        ]
    });
}
function en(e) {
    let { className: t } = e;
    return (0, i.jsxs)('div', {
        className: s()(K.giftCard, K.giftCardHalloween, t),
        children: [
            (0, i.jsx)('img', {
                alt: '',
                className: s()(K.giftImage, K.giftImageHalloween),
                'aria-hidden': !0,
                src: q.Z
            }),
            (0, i.jsxs)('div', {
                className: K.giftInfo,
                children: [
                    (0, i.jsx)(g.Heading, {
                        className: K.giftTitle,
                        color: 'always-white',
                        variant: 'heading-xl/extrabold',
                        children: Y.intl.string(Y.t['YMI+UV'])
                    }),
                    (0, i.jsx)(g.Text, {
                        className: K.giftText,
                        color: 'always-white',
                        variant: 'text-sm/normal',
                        children: Y.intl.string(Y.t.TWxqHh)
                    }),
                    (0, i.jsx)(U.Z, {
                        isGift: !0,
                        className: s()(K.giftCardButton, K.halloweenColor),
                        look: g.Button.Looks.OUTLINED,
                        buttonText: Y.intl.string(Y.t.Ve9Ge3),
                        buttonTextClassName: K.giftButtonCTA,
                        color: g.Button.Colors.CUSTOM,
                        onClick: () => {
                            Z.default.track(z.rMx.PREMIUM_SETTINGS_INTERACTED, {
                                cta_type: X,
                                target: $
                            });
                        }
                    })
                ]
            })
        ]
    });
}
function ei() {
    let { enabled: e } = y.O.useExperiment({ location: 'GiftNitro' }, { autoTrackExposure: !1 });
    return e
        ? (0, i.jsx)(en, {})
        : (0, i.jsxs)('div', {
              className: s()(K.giftCard),
              children: [
                  (0, i.jsx)('img', {
                      className: K.giftImage,
                      alt: '',
                      src: J
                  }),
                  (0, i.jsxs)('div', {
                      className: K.giftInfo,
                      children: [
                          (0, i.jsx)(g.Heading, {
                              className: K.giftTitle,
                              variant: 'heading-xl/extrabold',
                              children: Y.intl.string(Y.t['3KomGR'])
                          }),
                          (0, i.jsx)(g.Text, {
                              className: K.giftText,
                              variant: 'text-sm/normal',
                              children: Y.intl.string(Y.t.yQ06u7)
                          }),
                          (0, i.jsx)(U.Z, {
                              isGift: !0,
                              className: s()(K.giftCardButton, K.giftCardButtonColor),
                              look: g.Button.Looks.OUTLINED,
                              buttonText: Y.intl.string(Y.t.Ve9Ge3),
                              buttonTextClassName: K.giftButtonCTA,
                              color: g.Button.Colors.CUSTOM,
                              onClick: () => {
                                  Z.default.track(z.rMx.PREMIUM_SETTINGS_INTERACTED, {
                                      cta_type: X,
                                      target: $
                                  });
                              }
                          })
                      ]
                  })
              ]
          });
}
t.Z = function () {
    let e = (0, T.Q)(),
        { analyticsLocations: t } = (0, v.ZP)(C.Z.PREMIUM_SETTINGS),
        n = (0, c.e7)([P.ZP], () => P.ZP.getPremiumTypeSubscription()),
        a = (0, c.e7)([P.ZP], () => P.ZP.hasFetchedSubscriptions()),
        s = (0, I.V)(),
        [l, o] = r.useState(!0),
        { fractionalState: u } = (0, N.Z)(),
        p = (0, k.n)(),
        h = null == p ? void 0 : p.countryCode,
        b = (0, c.e7)([j.Z], () => j.Z.enabled),
        A = 'PremiumManagementSettings';
    (0, E.j)({
        location: A + ' auto on',
        autoTrackExposure: !0
    }),
        (0, E.j)({
            location: A + ' auto off',
            autoTrackExposure: !1
        }),
        (0, L.B)('PremiumManagementSettings');
    let O = (0, V.bD)('PremiumManagementSettings'),
        M = (0, V.pn)('PremiumManagementSettings');
    r.useEffect(() => {
        m.Z.wait(async () => {
            !b && !e && (await Promise.all([f.jg(), f.tZ(), (0, _.Y2)(h, null, z.JjL.DISCOVERY)])), o(!1);
        });
    }, [h, b, e]);
    let [w, B] = r.useState(!1);
    if (b) return (0, i.jsx)(x.Z, {});
    if (e) return (0, i.jsx)(S.c8, {});
    let y = a && null !== n && s,
        U = u !== W.a$.NONE;
    if (!y && !U && !l)
        return (0, i.jsx)(R.Z, {
            title: Y.intl.string(Y.t.dyq9TU),
            note: null
        });
    if ((!y && !U) || l) return (0, i.jsx)(g.Spinner, {});
    let D = null !== n && null != n.trialId;
    return (0, i.jsx)(v.Gt, {
        value: t,
        children: (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)('div', {
                    className: K.__invalid_container,
                    children: [
                        (0, i.jsx)(et, {}),
                        (O || M) && (0, i.jsx)(F.Z, { isInSettings: !0 }),
                        (0, i.jsx)(ei, {}),
                        (0, i.jsx)(H.Z, {
                            className: K.__invalid_planComparisonTable,
                            hideCTAs: !0,
                            headingOverride: Y.intl.string(Y.t.dnVvQU),
                            hidePill: !D,
                            selectedPlanColumnClassName: K.tier2PlanComparisonTableBackground,
                            selectedPlanTier: W.p9.TIER_2
                        })
                    ]
                }),
                (0, i.jsx)(d.$, {
                    onChange: (e) => {
                        e && !w && (Z.default.track(z.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: t }), B(!0));
                    },
                    children: (0, i.jsx)('div', { className: K.bottomOfPageVisibilitySensor })
                })
            ]
        })
    });
};
