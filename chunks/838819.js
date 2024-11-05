n.r(t), n(47120);
var r = n(200651),
    a = n(192379),
    s = n(120356),
    i = n.n(s),
    l = n(180650),
    o = n(979554),
    c = n(399606),
    d = n(704215),
    u = n(952265),
    m = n(481060),
    f = n(150063),
    p = n(434650),
    h = n(100527),
    g = n(906732),
    C = n(702486),
    b = n(605236),
    x = n(977395),
    v = n(214852),
    _ = n(479446),
    k = n(981632),
    j = n(290026),
    E = n(819640),
    I = n(594174),
    T = n(626135),
    S = n(74538),
    B = n(335131),
    N = n(381585),
    y = n(597688),
    L = n(328347),
    Z = n(307043),
    w = n(223143),
    P = n(298228),
    O = n(937510),
    A = n(309956),
    H = n(853748),
    R = n(426171),
    F = n(823941),
    D = n(752053),
    M = n(963102),
    V = n(508498),
    W = n(38900),
    U = n(709999),
    z = n(373113),
    G = n(802022),
    K = n(558117),
    $ = n(141594),
    Y = n(566564),
    J = n(531864),
    q = n(302800),
    Q = n(215023),
    X = n(981631),
    ee = n(921944),
    et = n(420212),
    en = n(474936),
    er = n(213731);
function ea(e) {
    let { products: t, handleShopCardMount: n, header: a, category: s, isPremiumUser: i, isGiftEasterEggEnabled: l, showMysteryCard: o = !1 } = e,
        d = (0, c.e7)([I.default], () => I.default.getCurrentUser());
    return null == d || 0 === t.length
        ? null
        : (0, r.jsxs)('div', {
              children: [
                  null != a
                      ? (0, r.jsx)(m.Text, {
                            className: er.itemTypeTitle,
                            color: 'header-secondary',
                            variant: 'text-sm/bold',
                            children: a
                        })
                      : (0, r.jsx)(m.Spacer, { size: 24 }),
                  (0, r.jsx)('div', {
                      className: er.cardsContainer,
                      children: t.map((e, t) =>
                          (0, r.jsxs)(
                              N.k0,
                              {
                                  newValue: { tilePosition: t },
                                  children: [
                                      (0, r.jsx)(
                                          U.Z,
                                          {
                                              onMount: n(e),
                                              isPremiumUser: i,
                                              category: s,
                                              product: e,
                                              user: d,
                                              isGiftEasterEggEnabled: l
                                          },
                                          e.skuId
                                      ),
                                      1 === t && o && (0, r.jsx)(G.Z, {})
                                  ]
                              },
                              e.skuId
                          )
                      )
                  })
              ]
          });
}
function es(e) {
    let { category: t, initialItemCardRef: n, ...s } = e,
        i = (0, O.l)(t.products),
        o = (0, c.e7)([L.Z], () => L.Z.initialProductSkuId),
        d = a.useCallback(
            (e) => (t) => {
                e.skuId === o && (n.current = t.current);
            },
            [o, n]
        ),
        { revealed: u } = (0, K.R)('CollectiblesShop'),
        m = !u && t.skuId === l.T.STORM && i.length <= 15;
    return (0, r.jsx)(ea, {
        products: i,
        handleShopCardMount: d,
        category: t,
        showMysteryCard: m,
        ...s
    });
}
function ei(e) {
    let { category: t, isPremiumUser: n, initialItemCardRef: s, isGiftEasterEggEnabled: l, setIsGiftEasterEggEnabled: o, showEasterEggToggle: c, isFullScreen: d } = e,
        u = a.useRef(10 + 70 * Math.random()),
        [f, h] = a.useState(!1),
        g = (0, q.M7)(t.skuId),
        C = (0, p.O)(
            (e) => {
                h(e && null != g);
            },
            d ? 0.13 : 0.15
        );
    return (0, r.jsxs)('div', {
        className: er.categoryWrapper,
        ref: C,
        children: [
            c &&
                (0, r.jsx)(m.Clickable, {
                    className: i()(er.hiddenWumpus, { [er.hiddenWumpusEnabled]: l }),
                    onClick: () => o(!0),
                    style: { left: ''.concat(u.current, '%') },
                    children: (0, r.jsx)(k.Z, {
                        idleAnimationState: _.SR.IDLE,
                        giftStyle: en.Cj.BOX
                    })
                }),
            (0, r.jsx)(F.Z, {
                category: t,
                hideLimitedTimeBadge: null != g
            }),
            (0, r.jsx)(es, {
                category: t,
                initialItemCardRef: s,
                isPremiumUser: n,
                isGiftEasterEggEnabled: l
            }),
            null != g &&
                null != t.unpublishedAt &&
                (0, r.jsx)(H.$, {
                    unpublishedAt: t.unpublishedAt,
                    isVisible: f,
                    displayOptions: g,
                    isFullScreen: d
                })
        ]
    });
}
t.default = function (e) {
    var t;
    let { isFullScreen: n = !0 } = e;
    (0, v.z)(x.f);
    let s = (0, Z.u)('CollectiblesShop'),
        { analyticsSource: l, analyticsLocations: p } = (0, c.cj)([L.Z], () => L.Z.getAnalytics()),
        { analyticsLocations: _ } = (0, g.ZP)([...p, h.Z.COLLECTIBLES_SHOP]),
        { sessionId: k, scrollerRef: O, scrollHandler: H } = (0, C._)(X.rMx.COLLECTIBLES_SHOP_SCROLLED, l),
        { feedState: F, catalogState: U, transitionToCatalog: G, transitionToFeed: K } = (0, A.B)(s, O),
        [q, ea] = a.useState(!1),
        [es, el] = a.useState(Q.IV),
        [eo, ec] = a.useState(),
        [ed, eu] = a.useState(),
        em = (0, c.e7)([E.Z], () => E.Z.getLayers().includes(X.S9g.COLLECTIBLES_SHOP)),
        ef = (0, u.f9)(),
        { onClose: ep } = (0, V.Db)(),
        eh = (0, c.e7)([I.default], () => I.default.getCurrentUser()),
        eg = S.ZP.canUseCollectibles(eh),
        { categories: eC, isFetchingCategories: eb, fetchCategoriesError: ex, fetchPurchasesError: ev, claimError: e_, refreshCategories: ek } = (0, w.Z)(),
        ej = null !== (t = null != ex ? ex : ev) && void 0 !== t ? t : e_;
    (0, j.P)();
    let eE = (0, P.O)(eC),
        eI = a.useRef(null),
        [eT, eS] = a.useState(!1);
    (0, R.Kp)({
        categories: eC,
        isFetchingCategories: eb,
        isLayer: em,
        initialItemCardRef: eI
    }),
        a.useEffect(() => {
            if (F === Q.f7.VISIBLE || U === Q.f7.VISIBLE) {
                var e;
                let t;
                (t = s ? (U === Q.f7.VISIBLE ? ed : l) : l),
                    T.default.track(X.rMx.COLLECTIBLES_SHOP_VIEWED, {
                        location_stack: _,
                        source: t,
                        page_session_id: k,
                        page_type: F === Q.f7.VISIBLE ? 'home' : 'full',
                        category: F === Q.f7.VISIBLE ? void 0 : null === (e = y.Z.getCategory(eo)) || void 0 === e ? void 0 : e.name
                    });
            }
            !eg &&
                T.default.track(X.rMx.PREMIUM_UPSELL_VIEWED, {
                    type: en.cd.COLLECTIBLES_SHOP,
                    location_stack: _
                });
        }, [s, eg, _, l, k, F, U, eo, ec, ed]);
    let { dismissCollectiblesShopTabNewBadge: eB } = (0, $.Z)();
    a.useEffect(() => {
        if ((eB(), !(0, b.un)(d.z.COLLECTIBLES_GIFTING_COACHMARK)))
            (0, b.EW)(d.z.COLLECTIBLES_GIFTING_COACHMARK, {
                dismissAction: ee.L.AUTO_DISMISS,
                forceTrack: !0
            });
    }, [eB]),
        a.useEffect(() => {
            !n && (0, f.Y)(X.Z5c.COLLECTIBLES_SHOP);
        }, [n]),
        a.useEffect(
            () => () => {
                (0, B.K$)({
                    categories: [...eC.values()],
                    itemTypes: [o.Z.AVATAR_DECORATION, o.Z.PROFILE_EFFECT]
                });
            },
            [eC]
        ),
        a.useEffect(() => {
            if (!n || em || ef) return;
            let e = (e) => {
                if (e.key === et.mR.Escape) ep();
            };
            return window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e);
        }, [n, em, ef, ep]);
    let eN = a.useCallback(() => {
            ek();
        }, [ek]),
        { setCategoryRef: ey, handleScrollToCategory: eL } = (0, R.xV)(O.current),
        { reducedMotion: eZ } = a.useContext(m.AccessibilityPreferencesContext),
        ew = a.useRef(null),
        eP = a.useRef(null);
    (0, m.useFocusLock)(ew),
        a.useEffect(() => {
            if (!n) {
                var e;
                null === (e = eP.current) || void 0 === e || e.focus();
            }
        }, [n]);
    let eO = a.useCallback(
            async (e, t, r) => {
                let a = r && !n && !eZ.enabled;
                eu(e), ec(t), await G(a), t && eL(t);
            },
            [G, eL, n, eZ]
        ),
        eA = (0, c.e7)([y.Z], () => {
            var e;
            return null === (e = y.Z.getCategory(eo)) || void 0 === e ? void 0 : e.name;
        });
    return (0, r.jsx)(g.Gt, {
        value: _,
        children: (0, r.jsxs)(N.k0, {
            newValue: {
                sessionId: k,
                pageCategory: eA
            },
            children: [
                (0, r.jsx)('div', {
                    className: er.shop,
                    ref: n ? ew : eP,
                    tabIndex: -1,
                    children: (0, r.jsxs)(m.AdvancedScroller, {
                        className: er.shopScroll,
                        ref: O,
                        onScroll: () => {
                            if ((H(), null != O.current)) {
                                let e = O.current.getDistanceFromBottom();
                                es >= Q.iA ? ea(e < 20) : e <= 200 && el(es + Q.IV);
                            }
                        },
                        children: [
                            F !== Q.f7.HIDDEN &&
                                (0, r.jsxs)('div', {
                                    className: i()(er.shopViewWrapper, {
                                        [er.visible]: F === Q.f7.VISIBLE,
                                        [er.in]: F === Q.f7.IN,
                                        [er.out]: F === Q.f7.OUT
                                    }),
                                    children: [
                                        (0, r.jsx)(M.I, {
                                            isFullScreen: n,
                                            isLayer: em,
                                            onClose: ep,
                                            isCatalogView: !1,
                                            transparent: !0
                                        }),
                                        (0, r.jsx)(Y.Z, {
                                            handleTransition: eO,
                                            numVisibleItems: es
                                        })
                                    ]
                                }),
                            U !== Q.f7.HIDDEN &&
                                (0, r.jsxs)('div', {
                                    className: i()(er.shopViewWrapper, {
                                        [er.visible]: U === Q.f7.VISIBLE,
                                        [er.in]: U === Q.f7.IN,
                                        [er.out]: U === Q.f7.OUT
                                    }),
                                    children: [
                                        (0, r.jsx)(M.I, {
                                            isFullScreen: n,
                                            isLayer: em,
                                            onClose: ep,
                                            isCatalogView: s,
                                            transparent: s,
                                            handleTransition: K
                                        }),
                                        (0, r.jsx)('div', {
                                            className: er.pageWrapper,
                                            children: (0, r.jsx)('main', {
                                                className: i()(er.page, { [er.pageFullscreen]: n }),
                                                children: eb
                                                    ? (0, r.jsx)(W.Z, {})
                                                    : null != ej
                                                      ? (0, r.jsx)(D.Z, { onRetry: eN })
                                                      : (0, r.jsx)('div', {
                                                            className: er.categories,
                                                            children: eE
                                                                .filter((e) => null == e.unpublishedAt || e.unpublishedAt > new Date())
                                                                .filter((e) => {
                                                                    let { products: t } = e;
                                                                    return t.length > 0;
                                                                })
                                                                .map((e, t) =>
                                                                    (0, r.jsx)(
                                                                        'div',
                                                                        {
                                                                            ref: (t) => ey(e.skuId, t),
                                                                            children: (0, r.jsx)(N.k0, {
                                                                                newValue: { categoryPosition: t },
                                                                                children: (0, r.jsx)(ei, {
                                                                                    isPremiumUser: eg,
                                                                                    category: e,
                                                                                    initialItemCardRef: eI,
                                                                                    setIsGiftEasterEggEnabled: eS,
                                                                                    isGiftEasterEggEnabled: eT,
                                                                                    isFullScreen: n
                                                                                })
                                                                            })
                                                                        },
                                                                        e.skuId
                                                                    )
                                                                )
                                                        })
                                            })
                                        })
                                    ]
                                })
                        ]
                    })
                }),
                eT && (0, r.jsx)(z.Z, {}),
                !n &&
                    U !== Q.f7.VISIBLE &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(J.Z, {
                                peaking: q,
                                transitioning: F === Q.f7.OUT
                            }),
                            (0, r.jsx)(J.Z, {
                                style: { left: 1850 },
                                peaking: q,
                                transitioning: F === Q.f7.OUT
                            })
                        ]
                    })
            ]
        })
    });
};
