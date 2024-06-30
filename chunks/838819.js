n.r(t), n(47120);
var s = n(735250), r = n(470079), a = n(120356), o = n.n(a), i = n(392711), l = n(979554), c = n(399606), d = n(704215), u = n(952265), p = n(481060), g = n(150063), f = n(434650), C = n(100527), m = n(906732), h = n(702486), _ = n(605236), b = n(479446), x = n(981632), E = n(290026), I = n(819640), L = n(594174), S = n(626135), v = n(74538), T = n(335131), N = n(328347), O = n(280773), j = n(617452), R = n(223143), A = n(298228), Z = n(937510), k = n(853748), B = n(426171), P = n(823941), M = n(752053), y = n(963102), w = n(128185), F = n(508498), D = n(38900), H = n(709999), U = n(373113), W = n(994896), G = n(141594), V = n(302800), z = n(981631), Y = n(921944), K = n(420212), X = n(474936), q = n(689938), $ = n(4477);
function J(e) {
    let {
            products: t,
            handleShopCardMount: n,
            header: r,
            category: a,
            isPremiumUser: o,
            isGiftEasterEggEnabled: i
        } = e, l = (0, c.e7)([L.default], () => L.default.getCurrentUser());
    return null == l || 0 === t.length ? null : (0, s.jsxs)('div', {
        children: [
            null != r ? (0, s.jsx)(p.Text, {
                className: $.itemTypeTitle,
                color: 'header-secondary',
                variant: 'text-sm/bold',
                children: r
            }) : (0, s.jsx)(p.Spacer, { size: 24 }),
            (0, s.jsx)('div', {
                className: $.cardsContainer,
                children: t.map(e => (0, s.jsx)(H.Z, {
                    onMount: n(e),
                    isPremiumUser: o,
                    category: a,
                    product: e,
                    user: l,
                    isGiftEasterEggEnabled: i
                }, e.skuId))
            })
        ]
    });
}
function Q(e) {
    let {
            category: t,
            initialItemCardRef: n,
            includeBundles: a = !1,
            ...o
        } = e, d = (0, Z.l)(t.products), u = (0, c.e7)([N.Z], () => N.Z.initialProductSkuId), p = r.useCallback(e => t => {
            e.skuId === u && (n.current = t.current);
        }, [
            u,
            n
        ]), {unifiedProductCatalogEnabled: g} = (0, O.n)('CollectiblesShop');
    if (g || a)
        return (0, s.jsx)(J, {
            products: d,
            handleShopCardMount: p,
            category: t,
            ...o
        });
    {
        var f, C;
        let e = (0, i.groupBy)(d, 'type');
        return (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsx)(J, {
                    products: null !== (f = e[l.Z.AVATAR_DECORATION]) && void 0 !== f ? f : [],
                    handleShopCardMount: p,
                    category: t,
                    header: q.Z.Messages.PREMIUM_FEATURE_AVATAR_DECORATIONS_HEADER,
                    ...o
                }),
                (0, s.jsx)(J, {
                    products: null !== (C = e[l.Z.PROFILE_EFFECT]) && void 0 !== C ? C : [],
                    handleShopCardMount: p,
                    category: t,
                    header: q.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_TITLE,
                    ...o
                })
            ]
        });
    }
}
function ee(e) {
    let {
            category: t,
            isPremiumUser: n,
            initialItemCardRef: a,
            isGiftEasterEggEnabled: i,
            setIsGiftEasterEggEnabled: l,
            showEasterEggToggle: c,
            isFullScreen: d,
            index: u,
            includeBundles: g = !1
        } = e, C = r.useRef(10 + 70 * Math.random()), [m, h] = r.useState(!1), _ = (0, V.M7)(t.skuId), E = (0, f.O)(e => {
            h(e && null != _);
        }, d ? 0.13 : 0.15);
    return (0, s.jsxs)('div', {
        className: $.categoryWrapper,
        ref: E,
        children: [
            c && (0, s.jsx)(p.Clickable, {
                className: o()($.hiddenWumpus, { [$.hiddenWumpusEnabled]: i }),
                onClick: () => l(!0),
                style: { left: ''.concat(C.current, '%') },
                children: (0, s.jsx)(x.Z, {
                    idleAnimationState: b.S.IDLE,
                    giftStyle: X.Cj.BOX
                })
            }),
            (0, s.jsx)(P.Z, {
                category: t,
                hideLimitedTimeBadge: null != _,
                index: u
            }),
            (0, s.jsx)(Q, {
                category: t,
                initialItemCardRef: a,
                isPremiumUser: n,
                isGiftEasterEggEnabled: i,
                includeBundles: g
            }),
            null != _ && null != t.unpublishedAt && (0, s.jsx)(k.$, {
                unpublishedAt: t.unpublishedAt,
                isVisible: m,
                displayOptions: _,
                isFullScreen: d
            })
        ]
    });
}
t.default = function (e) {
    let {
            isFullScreen: t = !0
        } = e, {
            analyticsSource: n,
            analyticsLocations: a
        } = (0, c.cj)([N.Z], () => N.Z.getAnalytics()), {analyticsLocations: i} = (0, m.ZP)([
            ...a,
            C.Z.COLLECTIBLES_SHOP
        ]), f = (0, c.e7)([I.Z], () => I.Z.getLayers().includes(z.S9g.COLLECTIBLES_SHOP)), b = (0, u.f9)(), {onClose: x} = (0, F.Db)(), O = (0, c.e7)([L.default], () => L.default.getCurrentUser()), Z = v.ZP.canUseCollectibles(O), {
            categories: k,
            isFetchingCategories: P,
            error: H,
            refreshCategories: V
        } = (0, R.Z)();
    (0, E.P)();
    let q = (0, A.O)(k), J = (0, j.e)('CollectiblesShop'), Q = r.useRef(null), [et, en] = r.useState(!1);
    (0, B.Kp)({
        categories: k,
        isFetchingCategories: P,
        isLayer: f,
        initialItemCardRef: Q
    });
    let {
        sessionId: es,
        scrollerRef: er,
        scrollHandler: ea
    } = (0, h._)(z.rMx.COLLECTIBLES_SHOP_SCROLLED, n);
    r.useEffect(() => {
        S.default.track(z.rMx.COLLECTIBLES_SHOP_VIEWED, {
            location_stack: i,
            source: n,
            page_session_id: es
        }), !Z && S.default.track(z.rMx.PREMIUM_UPSELL_VIEWED, {
            type: X.cd.COLLECTIBLES_SHOP,
            location_stack: i
        });
    }, [
        Z,
        i,
        n,
        es
    ]);
    let {dismissCollectiblesShopTabNewBadge: eo} = (0, G.Z)();
    r.useEffect(() => {
        if (eo(), !(0, _.un)(d.z.COLLECTIBLES_GIFTING_COACHMARK))
            (0, _.EW)(d.z.COLLECTIBLES_GIFTING_COACHMARK, {
                dismissAction: Y.L.AUTO_DISMISS,
                forceTrack: !0
            });
    }, [eo]), r.useEffect(() => {
        !t && (0, g.Y)(z.Z5c.COLLECTIBLES_SHOP);
    }, [t]), r.useEffect(() => () => {
        (0, T.K$)({
            categories: [...k.values()],
            itemTypes: [
                l.Z.AVATAR_DECORATION,
                l.Z.PROFILE_EFFECT
            ]
        });
    }, [k]), r.useEffect(() => {
        if (!t || f || b)
            return;
        let e = e => {
            if (e.key === K.mR.Escape)
                x();
        };
        return window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e);
    }, [
        t,
        f,
        b,
        x
    ]);
    let ei = r.useCallback(() => {
            V();
        }, [V]), {containerRef: el} = function () {
            let e = r.useRef(null), t = r.useRef(null);
            return (0, p.useFocusLock)(e, { returnRef: t }), {
                containerRef: e,
                returnRef: t
            };
        }(), {
            setCategoryRef: ec,
            handleScrollToCategory: ed
        } = (0, B.xV)(er.current), {condensedBannersAndDynamicHeadersEnabled: eu} = (0, W.O)({ location: 'CollectiblesShop' });
    return (0, s.jsxs)(m.Gt, {
        value: i,
        children: [
            (0, s.jsx)('div', {
                className: $.shop,
                ref: t ? el : void 0,
                children: (0, s.jsxs)(p.AdvancedScroller, {
                    className: $.shopScroll,
                    ref: er,
                    onScroll: ea,
                    children: [
                        (0, s.jsx)(y.I, {
                            isFullScreen: t,
                            isLayer: f,
                            onClose: x
                        }),
                        (0, s.jsx)('div', {
                            className: $.pageWrapper,
                            children: (0, s.jsxs)('main', {
                                className: o()($.page, { [$.pageFullscreen]: t }),
                                children: [
                                    eu && q.length > 0 && (0, s.jsx)(w.h, {
                                        categories: q,
                                        handleScrollToCategory: ed
                                    }),
                                    P ? (0, s.jsx)(D.Z, {}) : H ? (0, s.jsx)(M.Z, { onRetry: ei }) : (0, s.jsx)('div', {
                                        className: $.categories,
                                        children: q.filter(e => null == e.unpublishedAt || e.unpublishedAt > new Date()).filter(e => {
                                            let {products: t} = e;
                                            return t.length > 0;
                                        }).map((e, n) => (0, s.jsx)('div', {
                                            ref: t => ec(e.skuId, t),
                                            children: (0, s.jsx)(ee, {
                                                isPremiumUser: Z,
                                                category: e,
                                                initialItemCardRef: Q,
                                                setIsGiftEasterEggEnabled: en,
                                                isGiftEasterEggEnabled: et,
                                                isFullScreen: t,
                                                includeBundles: J,
                                                index: n
                                            })
                                        }, e.skuId))
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            et && (0, s.jsx)(U.Z, {})
        ]
    });
};
