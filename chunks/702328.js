n(47120);
var s = n(735250),
    a = n(470079),
    r = n(120356),
    i = n.n(r),
    l = n(330711),
    o = n(442837),
    c = n(622535),
    d = n(481060),
    _ = n(634894),
    E = n(100527),
    u = n(906732),
    T = n(433811),
    I = n(214852),
    R = n(78839),
    g = n(626135),
    N = n(74538),
    m = n(140465),
    C = n(67645),
    f = n(599659),
    p = n(257944),
    A = n(91802),
    M = n(104494),
    S = n(639119),
    h = n(8647),
    x = n(568126),
    b = n(605289),
    O = n(248042),
    P = n(218390),
    v = n(823188),
    L = n(241158),
    Z = n(135785),
    D = n(498765),
    B = n(635921),
    U = n(177839),
    j = n(794484),
    G = n(392521),
    w = n(349803),
    y = n(179984),
    H = n(409100),
    k = n(391110),
    F = n(71363),
    V = n(781800),
    W = n(474936),
    K = n(981631),
    Y = n(445615),
    z = n(865215),
    Q = n(735035),
    X = n(786362);
let J = (e) => {
        let { isFullscreen: t, selectedPremiumType: n } = e;
        return (t && null == n) || (n === W.p9.TIER_2 && t) ? null : (0, s.jsx)(U.Z, { className: t ? Y.perkCardsContainerSpacingFullscreen : Y.perkCardsContainerSpacingSettings });
    },
    q = (e) => {
        let { isFullscreen: t, inOfferExperience: n } = e;
        return t || n ? (0, s.jsx)(D.Z, { lifted: !t && n }) : null;
    },
    $ = (e) => {
        let { isFullscreen: t, inOfferExperience: n, setIsAllPerksVisible: r, whatsNewV2Enabled: l, BestOfNitroV2Enabled: o, setIsWhatsNewBoxVisible: d, setIsBestOfNitroVisible: _, isWhatsNewBoxVisible: E, isBestOfNitroVisible: u, hasRenderedOnce: T } = e,
            I = a.useRef(0),
            R = a.useRef(0),
            N = a.useRef(0),
            m = a.useRef(0);
        return (a.useEffect(() => {
            E ? (I.current = Date.now()) : 0 !== I.current && ((R.current = R.current + Date.now() - I.current), (I.current = 0));
        }, [E]),
        a.useEffect(() => {
            u ? (N.current = Date.now()) : 0 !== N.current && ((m.current = m.current + Date.now() - N.current), (N.current = 0));
        }, [u]),
        a.useEffect(
            () => () => {
                0 !== I.current && (R.current = R.current + (Date.now() - I.current)),
                    0 !== N.current && (m.current = m.current + (Date.now() - N.current)),
                    0 !== R.current &&
                        g.default.track(K.rMx.PREMIUM_WHATS_NEW_VIEW_TIME, {
                            view_time: R.current,
                            is_v2: l
                        }),
                    0 !== m.current &&
                        g.default.track(K.rMx.PREMIUM_BEST_OF_VIEW_TIME, {
                            view_time: m.current,
                            is_v2: l
                        });
            },
            []
        ),
        t)
            ? (0, s.jsxs)('div', {
                  className: i()(Y.whatsNewSectionBackground, {
                      [Y.whatsNewSectionBackgroundV2]: l || o,
                      [Y.whatsNewSectionBackgroundNoGap]: l && o
                  }),
                  children: [
                      !l &&
                          (0, s.jsx)(j.Z, {
                              variant: k.R0.WHATS_NEW,
                              isFullScreen: t
                          }),
                      l &&
                          (0, s.jsx)(c.$, {
                              onChange: (e) => d(e),
                              threshold: 0,
                              active: !0,
                              children: (0, s.jsx)(L.Z, { shouldLoadVideo: T })
                          }),
                      o &&
                          (0, s.jsx)(c.$, {
                              onChange: (e) => _(e),
                              threshold: 0,
                              active: !0,
                              children: (0, s.jsx)(L.Z, {
                                  isBestOfNitro: !0,
                                  shouldLoadVideo: T
                              })
                          }),
                      !o &&
                          (0, s.jsx)(j.Z, {
                              isFullScreen: t,
                              showAllPerksButton: t
                                  ? (0, s.jsx)(V.Z, {
                                        setIsAllPerksVisible: r,
                                        previousComponent: k.MQ.MARKETING
                                    })
                                  : void 0
                          }),
                      n &&
                          !l &&
                          (0, s.jsx)(G.ZP, {
                              className: Y.pdSparklesTop,
                              variant: G.u0.TOP
                          }),
                      n &&
                          !l &&
                          (0, s.jsx)(G.ZP, {
                              className: Y.pdSparklesBottom,
                              variant: G.u0.BOTTOM
                          })
                  ]
              })
            : null;
    };
t.Z = (e) => {
    var t;
    let { isFullscreen: n, entrypoint: r } = e;
    (0, I.z)(T.X);
    let L = (0, p.z7)('PremiumMarketingHome'),
        D = (0, C.g)('PremiumMarketingHome'),
        U = a.useRef(null),
        [j, G] = a.useState(!1),
        [V, ee] = a.useState(!1),
        [et, en] = a.useState(!1),
        [es, ea] = a.useState(!1),
        [er, ei] = a.useState(!1),
        [el, eo] = a.useState(!1),
        ec = (0, o.e7)([R.ZP], () => R.ZP.getPremiumTypeSubscription()),
        ed = null != ec ? (0, N.Af)(ec) : null,
        e_ = null != ed ? N.ZP.getSkuIdForPlan(ed.planId) : null,
        eE = null !== e_ && e_ !== W.Si.TIER_2 ? W.Si.TIER_2 : null,
        eu = (0, A.n)(),
        eT = null != eu,
        [eI, eR] = a.useState(!1),
        eg = (0, M.Ng)(),
        eN = (0, S.N)(),
        em = null == eN ? void 0 : null === (t = eN.subscription_trial) || void 0 === t ? void 0 : t.sku_id,
        eC = (0, m.Nx)(),
        ef = (0, O.Vi)(),
        { analyticsLocations: ep } = (0, u.ZP)(E.Z.PREMIUM_MARKETING),
        eA = 'PremiumMarketingHome';
    (0, _.j)({
        location: eA + ' auto on',
        autoTrackExposure: !0
    }),
        (0, _.j)({
            location: eA + ' auto off',
            autoTrackExposure: !1
        }),
        a.useEffect(() => {
            eo(!0);
        }, []);
    let { enabled: eM } = f.O.useExperiment({ location: 'PremiumMarketingHome' }, { autoTrackExposure: !1 }),
        eS = (0, s.jsx)('div', {
            className: i()({
                [Y.premiumTierCardsContainerSettings]: !n,
                [Y.premiumTierCardsContainerFullscreen]: n
            }),
            children: (0, s.jsx)(c.$, {
                onChange: (e) => ee(e),
                threshold: 0.1,
                active: !0,
                children: (0, s.jsx)(v.ZP, {
                    showWumpus: !0,
                    tier0CTAButton:
                        em === W.Si.TIER_2 || ef || null != eg
                            ? (0, s.jsx)(H.Z, {
                                  forceInverted: !0,
                                  showIcon: !1,
                                  subscriptionTier: W.Si.TIER_0,
                                  className: Y.marginTopForButtons,
                                  look: d.ButtonLooks.OUTLINED,
                                  color: d.ButtonColors.WHITE,
                                  buttonShineClassName: Y.buttonShine
                              })
                            : (0, s.jsx)(H.Z, {
                                  forceInverted: !0,
                                  showIcon: !1,
                                  subscriptionTier: W.Si.TIER_0,
                                  className: Y.marginTopForButtons,
                                  buttonShineClassName: Y.buttonShine
                              }),
                    tier2CTAButton:
                        em === W.Si.TIER_0
                            ? (0, s.jsx)(H.Z, {
                                  forceInverted: !0,
                                  showIcon: !1,
                                  subscriptionTier: W.Si.TIER_2,
                                  className: Y.marginTopForButtons,
                                  look: d.ButtonLooks.OUTLINED,
                                  color: d.ButtonColors.WHITE,
                                  buttonShineClassName: Y.buttonShine
                              })
                            : (0, s.jsx)(H.Z, {
                                  forceInverted: !0,
                                  showIcon: !1,
                                  subscriptionTier: W.Si.TIER_2,
                                  className: Y.marginTopForButtons,
                                  isEligibleForBogoPromotion: ef,
                                  buttonShineClassName: Y.buttonShine
                              })
                })
            })
        }),
        eh = eM && r === W.EZ.UserSettings,
        ex = (0, s.jsxs)('div', {
            className: i()(Y.container, { [Y.settingsContainer]: !n }),
            'data-cy': 'tier-0-marketing-page',
            children: [
                (0, s.jsx)(Z.Z, {
                    premiumSubscription: ec,
                    className: i()(n ? Y.fullscreenExistingSubscriberSpacing : Y.existingSubscriberSpacing, { [Y.zIndex1]: eC }),
                    isFullscreen: n
                }),
                (0, s.jsx)(q, {
                    isFullscreen: n,
                    inOfferExperience: eC
                }),
                !n && eT
                    ? (0, s.jsx)(b.Z, {
                          localizedPricingPromo: eu,
                          smallGap: !0
                      })
                    : (0, s.jsx)(c.$, {
                          onChange: (e) => G(e),
                          threshold: 0,
                          active: !0,
                          children: (0, s.jsx)(B.Z, {
                              subscriptionTier: eE,
                              isFullscreen: n || eC,
                              className: i()({
                                  [Y.fullscreenHero]: n,
                                  [Y.settingsHeroNoBackground]: !n && eC,
                                  [Y.trialMarketingMargin]: eC,
                                  [Y.settingsHeroBogoHeight]: !n && ef,
                                  [Y.settingsHeroBogoMarginFullscreen]: n && ef,
                                  [Y.noTopPaddingOverride]: null != ec
                              }),
                              entrypoint: r
                          })
                      }),
                (0, s.jsxs)('div', {
                    className: Y.promoBannerContainer,
                    children: [(0, s.jsx)(h.Z, { isFullScreen: n }), n && eT && (0, s.jsx)(x.Z, { localizedPricingPromo: eu })]
                }),
                eS,
                eh && (0, s.jsx)(P.d, { className: Y.nitroweenGiftCard }),
                (0, s.jsx)($, {
                    isFullscreen: n,
                    inOfferExperience: eC,
                    setIsAllPerksVisible: eR,
                    whatsNewV2Enabled: L,
                    BestOfNitroV2Enabled: D,
                    setIsWhatsNewBoxVisible: en,
                    setIsBestOfNitroVisible: ea,
                    isWhatsNewBoxVisible: et,
                    isBestOfNitroVisible: es,
                    hasRenderedOnce: el
                }),
                !L && !D && (0, s.jsx)(J, { isFullscreen: n }),
                (0, s.jsxs)('div', {
                    className: Y.planComparisonTableContainer,
                    children: [
                        (0, s.jsx)(y.Z, {
                            className: Y.planComparisonTable,
                            hideCTAs: !0
                        }),
                        n
                            ? (0, s.jsxs)(s.Fragment, {
                                  children: [
                                      (0, s.jsx)('img', {
                                          src: Q,
                                          className: Y.tableLeftSideDecoration,
                                          width: 197,
                                          height: 486,
                                          alt: l.Z.Messages.IMAGE
                                      }),
                                      (0, s.jsx)('img', {
                                          src: X,
                                          className: Y.tableRightSideDecoration,
                                          width: 241,
                                          height: 552,
                                          alt: l.Z.Messages.IMAGE
                                      })
                                  ]
                              })
                            : null
                    ]
                }),
                (0, s.jsx)('div', { className: n ? Y.footerSpacingFullscreen : Y.footerSpacing }),
                (0, s.jsx)(w.Z, {
                    isVisible: !j && !V && !et && !es && el,
                    isFullscreen: n,
                    subscriptionTier: eE
                }),
                (0, s.jsx)(c.$, {
                    onChange: (e) => {
                        e && !er && (g.default.track(K.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: ep }), ei(!0));
                    },
                    children: (0, s.jsx)('div', { className: Y.bottomOfPageVisibilitySensor })
                }),
                (0, s.jsx)('img', {
                    src: z,
                    className: Y.bottomIllustration,
                    width: 112,
                    height: 85,
                    alt: l.Z.Messages.IMAGE
                })
            ]
        });
    return n
        ? (0, s.jsxs)(s.Fragment, {
              children: [
                  (0, s.jsx)(d.AdvancedScrollerAuto, {
                      className: Y.scroller,
                      ref: U,
                      children: ex
                  }),
                  (0, s.jsx)(F.Z, {
                      previousComponent: k.MQ.MARKETING,
                      isAllPerksVisible: eI,
                      setIsAllPerksVisible: eR,
                      isFullScreen: n
                  })
              ]
          })
        : ex;
};
