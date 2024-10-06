r.r(t), r(47120);
var a = r(735250),
    n = r(470079),
    s = r(120356),
    i = r.n(s),
    o = r(180650),
    l = r(979554),
    c = r(399606),
    d = r(704215),
    u = r(952265),
    f = r(481060),
    p = r(150063),
    m = r(434650),
    C = r(100527),
    _ = r(906732),
    g = r(702486),
    h = r(605236),
    b = r(977395),
    E = r(214852),
    I = r(479446),
    x = r(981632),
    T = r(290026),
    v = r(819640),
    S = r(594174),
    L = r(626135),
    N = r(74538),
    O = r(335131),
    B = r(597688),
    k = r(328347),
    j = r(307043),
    R = r(223143),
    P = r(298228),
    A = r(937510),
    Z = r(309956),
    M = r(853748),
    y = r(426171),
    w = r(823941),
    H = r(752053),
    F = r(963102),
    D = r(508498),
    U = r(38900),
    W = r(709999),
    G = r(373113),
    V = r(802022),
    z = r(558117),
    Y = r(141594),
    K = r(566564),
    $ = r(531864),
    X = r(302800),
    q = r(215023),
    Q = r(981631),
    J = r(921944),
    ee = r(420212),
    et = r(474936),
    er = r(213731);
function ea(e) {
    let { products: t, handleShopCardMount: r, header: n, category: s, isPremiumUser: i, isGiftEasterEggEnabled: o, showMysteryCard: l = !1 } = e,
        d = (0, c.e7)([S.default], () => S.default.getCurrentUser());
    return null == d || 0 === t.length
        ? null
        : (0, a.jsxs)('div', {
              children: [
                  null != n
                      ? (0, a.jsx)(f.Text, {
                            className: er.itemTypeTitle,
                            color: 'header-secondary',
                            variant: 'text-sm/bold',
                            children: n
                        })
                      : (0, a.jsx)(f.Spacer, { size: 24 }),
                  (0, a.jsx)('div', {
                      className: er.cardsContainer,
                      children: t.map((e, t) =>
                          (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(
                                      W.Z,
                                      {
                                          onMount: r(e),
                                          isPremiumUser: i,
                                          category: s,
                                          product: e,
                                          user: d,
                                          isGiftEasterEggEnabled: o
                                      },
                                      e.skuId
                                  ),
                                  1 === t && l && (0, a.jsx)(V.Z, {})
                              ]
                          })
                      )
                  })
              ]
          });
}
function en(e) {
    let { category: t, initialItemCardRef: r, ...s } = e,
        i = (0, A.l)(t.products),
        l = (0, c.e7)([k.Z], () => k.Z.initialProductSkuId),
        d = n.useCallback(
            (e) => (t) => {
                e.skuId === l && (r.current = t.current);
            },
            [l, r]
        ),
        { revealed: u } = (0, z.R)('CollectiblesShop'),
        f = !u && t.skuId === o.T.STORM && i.length <= 15;
    return (0, a.jsx)(ea, {
        products: i,
        handleShopCardMount: d,
        category: t,
        showMysteryCard: f,
        ...s
    });
}
function es(e) {
    let { category: t, isPremiumUser: r, initialItemCardRef: s, isGiftEasterEggEnabled: o, setIsGiftEasterEggEnabled: l, showEasterEggToggle: c, isFullScreen: d } = e,
        u = n.useRef(10 + 70 * Math.random()),
        [p, C] = n.useState(!1),
        _ = (0, X.M7)(t.skuId),
        g = (0, m.O)(
            (e) => {
                C(e && null != _);
            },
            d ? 0.13 : 0.15
        );
    return (0, a.jsxs)('div', {
        className: er.categoryWrapper,
        ref: g,
        children: [
            c &&
                (0, a.jsx)(f.Clickable, {
                    className: i()(er.hiddenWumpus, { [er.hiddenWumpusEnabled]: o }),
                    onClick: () => l(!0),
                    style: { left: ''.concat(u.current, '%') },
                    children: (0, a.jsx)(x.Z, {
                        idleAnimationState: I.SR.IDLE,
                        giftStyle: et.Cj.BOX
                    })
                }),
            (0, a.jsx)(w.Z, {
                category: t,
                hideLimitedTimeBadge: null != _
            }),
            (0, a.jsx)(en, {
                category: t,
                initialItemCardRef: s,
                isPremiumUser: r,
                isGiftEasterEggEnabled: o
            }),
            null != _ &&
                null != t.unpublishedAt &&
                (0, a.jsx)(M.$, {
                    unpublishedAt: t.unpublishedAt,
                    isVisible: p,
                    displayOptions: _,
                    isFullScreen: d
                })
        ]
    });
}
t.default = function (e) {
    let { isFullScreen: t = !0 } = e;
    (0, E.z)(b.f);
    let r = (0, j.u)('CollectiblesShop'),
        { analyticsSource: s, analyticsLocations: o } = (0, c.cj)([k.Z], () => k.Z.getAnalytics()),
        { analyticsLocations: m } = (0, _.ZP)([...o, C.Z.COLLECTIBLES_SHOP]),
        { sessionId: I, scrollerRef: x, scrollHandler: A } = (0, g._)(Q.rMx.COLLECTIBLES_SHOP_SCROLLED, s),
        { feedState: M, catalogState: w, transitionToCatalog: W, transitionToFeed: V } = (0, Z.B)(r, x),
        [z, X] = n.useState(!1),
        [ea, en] = n.useState(q.IV),
        [ei, eo] = n.useState(),
        [el, ec] = n.useState(),
        ed = (0, c.e7)([v.Z], () => v.Z.getLayers().includes(Q.S9g.COLLECTIBLES_SHOP)),
        eu = (0, u.f9)(),
        { onClose: ef } = (0, D.Db)(),
        ep = (0, c.e7)([S.default], () => S.default.getCurrentUser()),
        em = N.ZP.canUseCollectibles(ep),
        { categories: eC, isFetchingCategories: e_, error: eg, refreshCategories: eh } = (0, R.Z)();
    (0, T.P)();
    let eb = (0, P.O)(eC),
        eE = n.useRef(null),
        [eI, ex] = n.useState(!1);
    (0, y.Kp)({
        categories: eC,
        isFetchingCategories: e_,
        isLayer: ed,
        initialItemCardRef: eE
    }),
        n.useEffect(() => {
            if (M === q.f7.VISIBLE || w === q.f7.VISIBLE) {
                var e;
                let t;
                (t = r ? (w === q.f7.VISIBLE ? el : s) : s),
                    L.default.track(Q.rMx.COLLECTIBLES_SHOP_VIEWED, {
                        location_stack: m,
                        source: t,
                        page_session_id: I,
                        page_type: M === q.f7.VISIBLE ? 'home' : 'full',
                        category: M === q.f7.VISIBLE ? void 0 : null === (e = B.Z.getCategory(ei)) || void 0 === e ? void 0 : e.name
                    });
            }
            !em &&
                L.default.track(Q.rMx.PREMIUM_UPSELL_VIEWED, {
                    type: et.cd.COLLECTIBLES_SHOP,
                    location_stack: m
                });
        }, [r, em, m, s, I, M, w, ei, eo, el]);
    let { dismissCollectiblesShopTabNewBadge: eT } = (0, Y.Z)();
    n.useEffect(() => {
        if ((eT(), !(0, h.un)(d.z.COLLECTIBLES_GIFTING_COACHMARK)))
            (0, h.EW)(d.z.COLLECTIBLES_GIFTING_COACHMARK, {
                dismissAction: J.L.AUTO_DISMISS,
                forceTrack: !0
            });
    }, [eT]),
        n.useEffect(() => {
            !t && (0, p.Y)(Q.Z5c.COLLECTIBLES_SHOP);
        }, [t]),
        n.useEffect(
            () => () => {
                (0, O.K$)({
                    categories: [...eC.values()],
                    itemTypes: [l.Z.AVATAR_DECORATION, l.Z.PROFILE_EFFECT]
                });
            },
            [eC]
        ),
        n.useEffect(() => {
            if (!t || ed || eu) return;
            let e = (e) => {
                if (e.key === ee.mR.Escape) ef();
            };
            return window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e);
        }, [t, ed, eu, ef]);
    let ev = n.useCallback(() => {
            eh();
        }, [eh]),
        { setCategoryRef: eS, handleScrollToCategory: eL } = (0, y.xV)(x.current),
        { reducedMotion: eN } = n.useContext(f.AccessibilityPreferencesContext),
        eO = n.useRef(null),
        eB = n.useRef(null);
    (0, f.useFocusLock)(eO),
        n.useEffect(() => {
            if (!t) {
                var e;
                null === (e = eB.current) || void 0 === e || e.focus();
            }
        }, [t]);
    let ek = n.useCallback(
        async (e, r, a) => {
            let n = a && !t && !eN.enabled;
            ec(e), eo(r), await W(n), r && eL(r);
        },
        [W, eL, t, eN]
    );
    return (0, a.jsxs)(_.Gt, {
        value: m,
        children: [
            (0, a.jsx)('div', {
                className: er.shop,
                ref: t ? eO : eB,
                tabIndex: -1,
                children: (0, a.jsxs)(f.AdvancedScroller, {
                    className: er.shopScroll,
                    ref: x,
                    onScroll: () => {
                        if ((A(), null != x.current)) {
                            let e = x.current.getDistanceFromBottom();
                            ea >= q.iA ? X(e < 20) : e <= 200 && en(ea + q.IV);
                        }
                    },
                    children: [
                        M !== q.f7.HIDDEN &&
                            (0, a.jsxs)('div', {
                                className: i()(er.shopViewWrapper, {
                                    [er.visible]: M === q.f7.VISIBLE,
                                    [er.in]: M === q.f7.IN,
                                    [er.out]: M === q.f7.OUT
                                }),
                                children: [
                                    (0, a.jsx)(F.I, {
                                        isFullScreen: t,
                                        isLayer: ed,
                                        onClose: ef,
                                        isCatalogView: !1,
                                        transparent: !0
                                    }),
                                    (0, a.jsx)(K.Z, {
                                        handleTransition: ek,
                                        numVisibleItems: ea
                                    })
                                ]
                            }),
                        w !== q.f7.HIDDEN &&
                            (0, a.jsxs)('div', {
                                className: i()(er.shopViewWrapper, {
                                    [er.visible]: w === q.f7.VISIBLE,
                                    [er.in]: w === q.f7.IN,
                                    [er.out]: w === q.f7.OUT
                                }),
                                children: [
                                    (0, a.jsx)(F.I, {
                                        isFullScreen: t,
                                        isLayer: ed,
                                        onClose: ef,
                                        isCatalogView: r,
                                        transparent: r,
                                        handleTransition: V
                                    }),
                                    (0, a.jsx)('div', {
                                        className: er.pageWrapper,
                                        children: (0, a.jsx)('main', {
                                            className: i()(er.page, { [er.pageFullscreen]: t }),
                                            children: e_
                                                ? (0, a.jsx)(U.Z, {})
                                                : eg
                                                  ? (0, a.jsx)(H.Z, { onRetry: ev })
                                                  : (0, a.jsx)('div', {
                                                        className: er.categories,
                                                        children: eb
                                                            .filter((e) => null == e.unpublishedAt || e.unpublishedAt > new Date())
                                                            .filter((e) => {
                                                                let { products: t } = e;
                                                                return t.length > 0;
                                                            })
                                                            .map((e) =>
                                                                (0, a.jsx)(
                                                                    'div',
                                                                    {
                                                                        ref: (t) => eS(e.skuId, t),
                                                                        children: (0, a.jsx)(es, {
                                                                            isPremiumUser: em,
                                                                            category: e,
                                                                            initialItemCardRef: eE,
                                                                            setIsGiftEasterEggEnabled: ex,
                                                                            isGiftEasterEggEnabled: eI,
                                                                            isFullScreen: t
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
            eI && (0, a.jsx)(G.Z, {}),
            !t &&
                w !== q.f7.VISIBLE &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)($.Z, {
                            peaking: z,
                            transitioning: M === q.f7.OUT
                        }),
                        (0, a.jsx)($.Z, {
                            style: { left: 1850 },
                            peaking: z,
                            transitioning: M === q.f7.OUT
                        })
                    ]
                })
        ]
    });
};
