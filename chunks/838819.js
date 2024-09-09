n.r(t), n(47120);
var a = n(735250),
    r = n(470079),
    s = n(120356),
    o = n.n(s),
    i = n(180650),
    l = n(979554),
    c = n(399606),
    d = n(704215),
    u = n(952265),
    f = n(780384),
    p = n(481060),
    g = n(150063),
    C = n(434650),
    m = n(100527),
    _ = n(906732),
    h = n(702486),
    b = n(514361),
    x = n(605236),
    I = n(977395),
    E = n(214852),
    v = n(479446),
    L = n(981632),
    S = n(290026),
    T = n(210887),
    N = n(819640),
    O = n(594174),
    k = n(626135),
    B = n(74538),
    j = n(335131),
    Z = n(597688),
    P = n(372047),
    A = n(328347),
    R = n(307043),
    y = n(223143),
    M = n(675052),
    w = n(298228),
    H = n(937510),
    D = n(309956),
    F = n(853748),
    U = n(426171),
    G = n(823941),
    V = n(752053),
    W = n(963102),
    z = n(128185),
    Y = n(508498),
    K = n(38900),
    X = n(709999),
    q = n(373113),
    $ = n(802022),
    J = n(399033),
    Q = n(994896),
    ee = n(558117),
    et = n(141594),
    en = n(566564),
    ea = n(531864),
    er = n(302800),
    es = n(215023),
    eo = n(981631),
    ei = n(921944),
    el = n(420212),
    ec = n(474936),
    ed = n(689938),
    eu = n(53824);
function ef(e) {
    let { products: t, handleShopCardMount: n, header: r, category: s, isPremiumUser: o, isGiftEasterEggEnabled: i, showMysteryCard: l = !1 } = e,
        d = (0, c.e7)([O.default], () => O.default.getCurrentUser());
    return null == d || 0 === t.length
        ? null
        : (0, a.jsxs)('div', {
              children: [
                  null != r
                      ? (0, a.jsx)(p.Text, {
                            className: eu.itemTypeTitle,
                            color: 'header-secondary',
                            variant: 'text-sm/bold',
                            children: r
                        })
                      : (0, a.jsx)(p.Spacer, { size: 24 }),
                  (0, a.jsx)('div', {
                      className: eu.cardsContainer,
                      children: t.map((e, t) =>
                          (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(
                                      X.Z,
                                      {
                                          onMount: n(e),
                                          isPremiumUser: o,
                                          category: s,
                                          product: e,
                                          user: d,
                                          isGiftEasterEggEnabled: i
                                      },
                                      e.skuId
                                  ),
                                  1 === t && l && (0, a.jsx)($.Z, {})
                              ]
                          })
                      )
                  })
              ]
          });
}
function ep(e) {
    let { category: t, initialItemCardRef: n, ...s } = e,
        o = (0, H.l)(t.products),
        l = (0, c.e7)([A.Z], () => A.Z.initialProductSkuId),
        d = r.useCallback(
            (e) => (t) => {
                e.skuId === l && (n.current = t.current);
            },
            [l, n]
        ),
        { revealed: u } = (0, ee.R)('CollectiblesShop'),
        f = !u && t.skuId === i.T.STORM && o.length <= 15;
    return (0, a.jsx)(ef, {
        products: o,
        handleShopCardMount: d,
        category: t,
        showMysteryCard: f,
        ...s
    });
}
function eg(e) {
    let { category: t, isPremiumUser: n, initialItemCardRef: s, isGiftEasterEggEnabled: i, setIsGiftEasterEggEnabled: l, showEasterEggToggle: c, isFullScreen: d, index: u } = e,
        f = r.useRef(10 + 70 * Math.random()),
        [g, m] = r.useState(!1),
        _ = (0, er.M7)(t.skuId),
        h = (0, C.O)(
            (e) => {
                m(e && null != _);
            },
            d ? 0.13 : 0.15
        );
    return (0, a.jsxs)('div', {
        className: eu.categoryWrapper,
        ref: h,
        children: [
            c &&
                (0, a.jsx)(p.Clickable, {
                    className: o()(eu.hiddenWumpus, { [eu.hiddenWumpusEnabled]: i }),
                    onClick: () => l(!0),
                    style: { left: ''.concat(f.current, '%') },
                    children: (0, a.jsx)(L.Z, {
                        idleAnimationState: v.SR.IDLE,
                        giftStyle: ec.Cj.BOX
                    })
                }),
            (0, a.jsx)(G.Z, {
                category: t,
                hideLimitedTimeBadge: null != _,
                index: u
            }),
            (0, a.jsx)(ep, {
                category: t,
                initialItemCardRef: s,
                isPremiumUser: n,
                isGiftEasterEggEnabled: i
            }),
            null != _ &&
                null != t.unpublishedAt &&
                (0, a.jsx)(F.$, {
                    unpublishedAt: t.unpublishedAt,
                    isVisible: g,
                    displayOptions: _,
                    isFullScreen: d
                })
        ]
    });
}
t.default = function (e) {
    let { isFullScreen: t = !0 } = e;
    (0, E.z)(I.f);
    let n = (0, R.u)('CollectiblesShop'),
        { analyticsSource: s, analyticsLocations: i } = (0, c.cj)([A.Z], () => A.Z.getAnalytics()),
        { analyticsLocations: C } = (0, _.ZP)([...i, m.Z.COLLECTIBLES_SHOP]),
        { sessionId: v, scrollerRef: L, scrollHandler: H } = (0, h._)(eo.rMx.COLLECTIBLES_SHOP_SCROLLED, s),
        { feedState: F, catalogState: G, transitionToCatalog: X, transitionToFeed: $ } = (0, D.B)(n, L),
        [ee, er] = r.useState(!1),
        [ef, ep] = r.useState(es.IV),
        [eC, em] = r.useState(),
        [e_, eh] = r.useState(),
        eb = (0, c.e7)([N.Z], () => N.Z.getLayers().includes(eo.S9g.COLLECTIBLES_SHOP)),
        ex = (0, u.f9)(),
        { onClose: eI } = (0, Y.Db)(),
        eE = (0, c.e7)([O.default], () => O.default.getCurrentUser()),
        ev = B.ZP.canUseCollectibles(eE),
        { categories: eL, isFetchingCategories: eS, error: eT, refreshCategories: eN } = (0, y.Z)();
    (0, S.P)();
    let eO = (0, w.O)(eL),
        { sortedPopularPickProducts: ek } = (0, M.a)(eL),
        eB = r.useRef(null),
        [ej, eZ] = r.useState(!1);
    (0, U.Kp)({
        categories: eL,
        isFetchingCategories: eS,
        isLayer: eb,
        initialItemCardRef: eB
    }),
        r.useEffect(() => {
            if (F === es.f7.VISIBLE || G === es.f7.VISIBLE) {
                var e;
                let t;
                (t = n ? (G === es.f7.VISIBLE ? e_ : s) : s),
                    k.default.track(eo.rMx.COLLECTIBLES_SHOP_VIEWED, {
                        location_stack: C,
                        source: t,
                        page_session_id: v,
                        page_type: F === es.f7.VISIBLE ? 'home' : 'full',
                        category: F === es.f7.VISIBLE ? void 0 : null === (e = Z.Z.getCategory(eC)) || void 0 === e ? void 0 : e.name
                    });
            }
            !ev &&
                k.default.track(eo.rMx.PREMIUM_UPSELL_VIEWED, {
                    type: ec.cd.COLLECTIBLES_SHOP,
                    location_stack: C
                });
        }, [n, ev, C, s, v, F, G, eC, em, e_]);
    let { dismissCollectiblesShopTabNewBadge: eP } = (0, et.Z)();
    r.useEffect(() => {
        if ((eP(), !(0, x.un)(d.z.COLLECTIBLES_GIFTING_COACHMARK)))
            (0, x.EW)(d.z.COLLECTIBLES_GIFTING_COACHMARK, {
                dismissAction: ei.L.AUTO_DISMISS,
                forceTrack: !0
            });
    }, [eP]),
        r.useEffect(() => {
            !t && (0, g.Y)(eo.Z5c.COLLECTIBLES_SHOP);
        }, [t]),
        r.useEffect(
            () => () => {
                (0, j.K$)({
                    categories: [...eL.values()],
                    itemTypes: [l.Z.AVATAR_DECORATION, l.Z.PROFILE_EFFECT]
                });
            },
            [eL]
        ),
        r.useEffect(() => {
            if (!t || eb || ex) return;
            let e = (e) => {
                if (e.key === el.mR.Escape) eI();
            };
            return window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e);
        }, [t, eb, ex, eI]);
    let eA = r.useCallback(() => {
            eN();
        }, [eN]),
        { containerRef: eR } = (function () {
            let e = r.useRef(null),
                t = r.useRef(null);
            return (
                (0, p.useFocusLock)(e, { returnRef: t }),
                {
                    containerRef: e,
                    returnRef: t
                }
            );
        })(),
        { setCategoryRef: ey, handleScrollToCategory: eM } = (0, U.xV)(L.current),
        { condensedBannersAndDynamicHeadersEnabled: ew } = (0, Q.O)({ location: 'CollectiblesShop' }),
        { enabled: eH } = (0, P.Z)({ location: 'CollectiblesShop' }),
        eD = (0, c.e7)([b.Z], () => b.Z.gradientPreset),
        eF = !(0, c.e7)([T.Z], () => (0, f.wj)(T.Z.theme)) && null == eD,
        { reducedMotion: eU } = r.useContext(p.AccessibilityPreferencesContext),
        eG = r.useCallback(
            async (e, n, a) => {
                let r = a && !t && !eU.enabled;
                eh(e), em(n), await X(r), n && eM(n);
            },
            [X, eM, t, eU]
        );
    return (0, a.jsxs)(_.Gt, {
        value: C,
        children: [
            (0, a.jsx)('div', {
                className: eu.shop,
                ref: t ? eR : void 0,
                children: (0, a.jsxs)(p.AdvancedScroller, {
                    className: eu.shopScroll,
                    ref: L,
                    onScroll: () => {
                        if ((H(), null != L.current)) {
                            let e = L.current.getDistanceFromBottom();
                            ef >= es.iA ? er(e < 20) : e <= 200 && ep(ef + es.IV);
                        }
                    },
                    children: [
                        F !== es.f7.HIDDEN &&
                            (0, a.jsxs)('div', {
                                className: o()(eu.shopViewWrapper, {
                                    [eu.visible]: F === es.f7.VISIBLE,
                                    [eu.in]: F === es.f7.IN,
                                    [eu.out]: F === es.f7.OUT
                                }),
                                children: [
                                    (0, a.jsx)(W.I, {
                                        isFullScreen: t,
                                        isLayer: eb,
                                        onClose: eI,
                                        isCatalogView: !1,
                                        transparent: !0
                                    }),
                                    (0, a.jsx)(en.Z, {
                                        handleTransition: eG,
                                        numVisibleItems: ef
                                    })
                                ]
                            }),
                        G !== es.f7.HIDDEN &&
                            (0, a.jsxs)('div', {
                                className: o()(eu.shopViewWrapper, {
                                    [eu.visible]: G === es.f7.VISIBLE,
                                    [eu.in]: G === es.f7.IN,
                                    [eu.out]: G === es.f7.OUT
                                }),
                                children: [
                                    (0, a.jsx)(W.I, {
                                        isFullScreen: t,
                                        isLayer: eb,
                                        onClose: eI,
                                        isCatalogView: n,
                                        transparent: n,
                                        handleTransition: $
                                    }),
                                    (0, a.jsx)('div', {
                                        className: eu.pageWrapper,
                                        children: (0, a.jsxs)('main', {
                                            className: o()(eu.page, { [eu.pageFullscreen]: t }),
                                            children: [
                                                ew &&
                                                    eO.length > 0 &&
                                                    (0, a.jsx)(z.h, {
                                                        categories: eO,
                                                        handleScrollToCategory: eM
                                                    }),
                                                eH &&
                                                    (0, a.jsxs)('div', {
                                                        className: o()(eu.popularPicksContainer, eF ? eu.defaultLightModeCustomGradient : eu.popularPicksGradient),
                                                        children: [
                                                            (0, a.jsx)(p.Text, {
                                                                className: eu.popularPicksHeader,
                                                                variant: 'text-lg/medium',
                                                                children: ed.Z.Messages.COLLECTIBLES_POPULAR_PICKS
                                                            }),
                                                            (0, a.jsx)(J.Z, {
                                                                products: ek,
                                                                user: eE
                                                            })
                                                        ]
                                                    }),
                                                eS
                                                    ? (0, a.jsx)(K.Z, {})
                                                    : eT
                                                      ? (0, a.jsx)(V.Z, { onRetry: eA })
                                                      : (0, a.jsx)('div', {
                                                            className: eu.categories,
                                                            children: eO
                                                                .filter((e) => null == e.unpublishedAt || e.unpublishedAt > new Date())
                                                                .filter((e) => {
                                                                    let { products: t } = e;
                                                                    return t.length > 0;
                                                                })
                                                                .map((e, n) =>
                                                                    (0, a.jsx)(
                                                                        'div',
                                                                        {
                                                                            ref: (t) => ey(e.skuId, t),
                                                                            children: (0, a.jsx)(eg, {
                                                                                isPremiumUser: ev,
                                                                                category: e,
                                                                                initialItemCardRef: eB,
                                                                                setIsGiftEasterEggEnabled: eZ,
                                                                                isGiftEasterEggEnabled: ej,
                                                                                isFullScreen: t,
                                                                                index: n
                                                                            })
                                                                        },
                                                                        e.skuId
                                                                    )
                                                                )
                                                        })
                                            ]
                                        })
                                    })
                                ]
                            })
                    ]
                })
            }),
            ej && (0, a.jsx)(q.Z, {}),
            !t &&
                G !== es.f7.VISIBLE &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(ea.Z, {
                            peaking: ee,
                            transitioning: F === es.f7.OUT
                        }),
                        (0, a.jsx)(ea.Z, {
                            style: { left: 1850 },
                            peaking: ee,
                            transitioning: F === es.f7.OUT
                        })
                    ]
                })
        ]
    });
};
