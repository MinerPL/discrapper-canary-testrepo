(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["84008"], {
        247329: function(e, t, l) {
            "use strict";
            e.exports = l.p + "d7f558364208761f7a1f.png"
        },
        333838: function(e, t, l) {
            "use strict";
            e.exports = l.p + "f42f024b20ca1139f6e8.png"
        },
        399637: function(e, t, l) {
            "use strict";
            e.exports = l.p + "a4d34e0beb715b3ae5ca.png"
        },
        976076: function(e, t, l) {
            "use strict";
            e.exports = l.p + "7fe8141f020d02e97188.png"
        },
        200406: function(e, t, l) {
            "use strict";
            e.exports = l.p + "da2e3e6f963314b6a1e7.png"
        },
        283045: function(e, t, l) {
            "use strict";
            e.exports = l.p + "26da69d314fb3ced9795.png"
        },
        718297: function(e, t, l) {
            "use strict";
            e.exports = l.p + "5d06cba0502c778b92e5.png"
        },
        929880: function(e, t, l) {
            "use strict";
            e.exports = l.p + "bdc1b9ae0098085fe138.png"
        },
        204173: function(e, t, l) {
            "use strict";
            e.exports = l.p + "e67f00e8b56d263737a6.jpg"
        },
        489847: function(e, t, l) {
            "use strict";
            e.exports = l.p + "ab3468632852f3725893.png"
        },
        330825: function(e, t, l) {
            "use strict";
            e.exports = l.p + "79903b7cc64eb6d55aa8.png"
        },
        165057: function(e, t, l) {
            "use strict";
            e.exports = l.p + "50eb2aa99e75c1b8630a.png"
        },
        94646: function(e, t, l) {
            "use strict";
            e.exports = l.p + "c5c556a5e9be016ffb2d.png"
        },
        286642: function(e, t, l) {
            "use strict";
            e.exports = l.p + "a3edb1330403965aa3f6.png"
        },
        655029: function(e, t, l) {
            "use strict";
            e.exports = l.p + "6fac2c0e5ed90d06b3b9.png"
        },
        740683: function(e, t, l) {
            "use strict";
            e.exports = l.p + "7b9383fd24920a3a95b7.png"
        },
        714293: function(e, t, l) {
            "use strict";
            e.exports = l.p + "295744c4b4e7cb95b539.png"
        },
        861485: function(e, t, l) {
            "use strict";
            e.exports = l.p + "16abeb1745235d8aea66.png"
        },
        638538: function(e, t, l) {
            "use strict";
            e.exports = l.p + "ac20c9a7b69e25e9d680.png"
        },
        125221: function(e, t, l) {
            "use strict";
            e.exports = l.p + "8ffd6f59392e09ba0fe4.png"
        },
        770704: function(e, t, l) {
            "use strict";
            e.exports = l.p + "81aef01431a5e1293160.png"
        },
        597704: function(e, t, l) {
            "use strict";
            e.exports = l.p + "7bb17dc88ff31be285a8.png"
        },
        290216: function(e, t, l) {
            "use strict";
            e.exports = l.p + "1616ba0a324e68a4fff7.png"
        },
        321220: function(e, t, l) {
            "use strict";
            e.exports = l.p + "0e8e3e9463a4afbcd15a.svg"
        },
        684386: function(e, t, l) {
            "use strict";
            e.exports = l.p + "44b2c2b3210b29c00990.svg"
        },
        93902: function(e, t, l) {
            "use strict";
            e.exports = l.p + "de1981a6479d060d8ebd.png"
        },
        237020: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                CheckmarkBoldIcon: function() {
                    return n
                }
            });
            var a = l("37983");
            l("884691");
            var s = l("669491"),
                r = l("75196");
            let n = e => {
                let {
                    width: t = 24,
                    height: l = 24,
                    color: n = s.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...i
                } = e;
                return (0, a.jsx)("svg", {
                    ...(0, r.default)(i),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: l,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, a.jsx)("path", {
                        fill: "string" == typeof n ? n : n.css,
                        fillRule: "evenodd",
                        d: "M22.06 4.94a1.5 1.5 0 0 1 0 2.12l-12 12a1.5 1.5 0 0 1-2.12 0l-6-6a1.5 1.5 0 0 1 2.12-2.12L9 15.88 19.94 4.94a1.5 1.5 0 0 1 2.12 0Z",
                        clipRule: "evenodd",
                        className: o
                    })
                })
            }
        },
        481120: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                usePageScrollPosition: function() {
                    return i
                }
            });
            var a = l("884691"),
                s = l("748820"),
                r = l("560103"),
                n = l("599110");
            let o = (e, t, l, a) => {
                    let {
                        scrollTop: s = 0,
                        scrollOffset: r = 0,
                        scrollHeight: o = 0,
                        scrollWidth: i = 0
                    } = a;
                    if (o > 0) {
                        let a = (s + r) / o;
                        a > 0 && n.default.track(e, {
                            scroll_visible_percent: a,
                            source: l,
                            page_height: Math.round(o),
                            page_width: Math.round(i),
                            page_session_id: t
                        })
                    }
                },
                i = (e, t) => {
                    let l = a.useRef(null),
                        n = a.useRef((0, s.v4)()),
                        i = (0, r.useThrottledFunction)(o, 5e3, [], {
                            trailing: !0
                        }),
                        u = a.useCallback(() => {
                            var a;
                            let s = null === (a = l.current) || void 0 === a ? void 0 : a.getScrollerNode();
                            null != s && i(e, n.current, t, {
                                scrollTop: s.scrollTop,
                                scrollOffset: s.offsetHeight,
                                scrollHeight: s.scrollHeight,
                                scrollWidth: s.scrollWidth
                            })
                        }, [i, e, t]);
                    return {
                        scrollerRef: l,
                        scrollHandler: u,
                        sessionId: n.current
                    }
                }
        },
        702953: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                useCollectiblesShopTallerCardsExperiment: function() {
                    return r
                }
            });
            var a = l("862205");
            let s = (0, a.createExperiment)({
                    kind: "user",
                    id: "2023-11_collectibles_shop_taller_cards",
                    label: "Collectibles Shop Taller Cards",
                    defaultConfig: {
                        tallerCardsEnabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Enables taller cards in shop",
                        config: {
                            tallerCardsEnabled: !0
                        }
                    }]
                }),
                r = e => {
                    let {
                        location: t
                    } = e;
                    return s.useExperiment({
                        location: t
                    })
                }
        },
        235898: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return u
                }
            }), l("222007");
            var a = l("884691"),
                s = l("65597"),
                r = l("875212"),
                n = l("21526"),
                o = l("853987"),
                i = l("775416");

            function u() {
                var e;
                let t = "useFetchCollectiblesCategoriesAndPurchases";
                (0, r.useTriggerDebuggingAA)({
                    location: t + " auto on",
                    autoTrackExposure: !0
                }), (0, r.useTriggerDebuggingAA)({
                    location: t + " auto off",
                    autoTrackExposure: !1
                });
                let {
                    isFetching: l,
                    categories: u,
                    error: c
                } = function() {
                    let e = "useMaybeFetchCollectiblesCategories";
                    (0, r.useTriggerDebuggingAA)({
                        location: e + " auto on",
                        autoTrackExposure: !0
                    }), (0, r.useTriggerDebuggingAA)({
                        location: e + " auto off",
                        autoTrackExposure: !1
                    });
                    let [t, l, i, u] = (0, s.useStateFromStoresArray)([o.default], () => {
                        var e;
                        return [o.default.isFetching, o.default.error, null !== (e = o.default.lastFetched) && void 0 !== e ? e : 0, o.default.categories]
                    });
                    return (0, a.useEffect)(() => {
                        !(t || l || Date.now() - i < 6e5) && (0, n.fetchCollectiblesCategories)()
                    }, [t, i, l]), {
                        isFetching: t,
                        categories: u,
                        error: l
                    }
                }(), {
                    isClaiming: d,
                    fetchError: f,
                    claimError: C,
                    isFetching: m,
                    purchases: E
                } = function() {
                    let e = "useFetchPurchases";
                    (0, r.useTriggerDebuggingAA)({
                        location: e + " auto on",
                        autoTrackExposure: !0
                    }), (0, r.useTriggerDebuggingAA)({
                        location: e + " auto off",
                        autoTrackExposure: !1
                    });
                    let [t, l, o, u, c] = (0, s.useStateFromStoresArray)([i.default], () => [i.default.isFetching, i.default.isClaiming, i.default.fetchError, i.default.claimError, i.default.purchases]);
                    return (0, a.useEffect)(() => {
                        (0, n.fetchCollectiblesPurchases)()
                    }, []), {
                        isClaiming: l,
                        fetchError: o,
                        claimError: u,
                        isFetching: t,
                        purchases: c
                    }
                }(), p = null !== (e = null != c ? c : f) && void 0 !== e ? e : C;
                return {
                    isFetching: l || m,
                    isFetchingCategories: l,
                    isFetchingPurchases: m,
                    isClaiming: d,
                    categories: u,
                    purchases: E,
                    error: p
                }
            }
        },
        296304: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                usePurchasedCategoriesSort: function() {
                    return n
                }
            }), l("222007"), l("424973");
            var a = l("884691"),
                s = l("65597"),
                r = l("775416");
            let n = e => {
                let t = (0, s.default)([r.default], () => r.default.purchases),
                    l = (0, a.useMemo)(() => {
                        let l = [],
                            a = [];
                        for (let s of e.values()) {
                            let e = s.products.every(e => !!t.get(e.skuId));
                            e ? l.push(s) : a.push(s)
                        }
                        return a.concat(l)
                    }, [e, t]);
                return l
            }
        },
        334820: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                usePurchasedProductsSort: function() {
                    return n
                }
            }), l("222007"), l("424973");
            var a = l("884691"),
                s = l("65597"),
                r = l("775416");
            let n = e => {
                let t = (0, s.default)([r.default], () => r.default.purchases),
                    l = (0, a.useMemo)(() => {
                        let l = [],
                            a = [];
                        for (let s of e.values()) void 0 !== t.get(s.skuId) ? l.push(s) : a.push(s);
                        return a.concat(l)
                    }, [e, t]);
                return l
            }
        },
        716120: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return C
                }
            });
            var a = l("37983");
            l("884691");
            var s = l("414456"),
                r = l.n(s),
                n = l("65597"),
                o = l("854588"),
                i = l("206230"),
                u = l("284679"),
                c = l("491232"),
                d = l("408381"),
                f = l("268779"),
                C = e => {
                    let {
                        asset: t,
                        size: l = d.MAX_CONTENT_WIDTH,
                        className: s,
                        style: C,
                        children: m
                    } = e, E = (0, n.default)([i.default], () => i.default.saturation);
                    return (0, a.jsx)("div", {
                        className: r(f.banner, s),
                        style: (() => {
                            if (null == t) return C;
                            let e = (0, c.getCollectiblesAssetURL)(t, {
                                size: l,
                                format: "jpg"
                            });
                            if (1 === E) return {
                                ...C,
                                backgroundImage: "url(".concat(e, ")"),
                                backgroundSize: "cover"
                            };
                            let a = (0, u.hexOpacityToRgba)(o.default.unsafe_rawColors.BLACK_500, 1 - E);
                            return {
                                ...C,
                                backgroundImage: "linear-gradient(".concat(a, ", ").concat(a, "), url(").concat(e, ")"),
                                backgroundBlendMode: "saturation",
                                backgroundSize: "cover"
                            }
                        })(),
                        children: m
                    })
                }
        },
        89569: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                useProductDetailsLinkableRoute: function() {
                    return m
                },
                useProductDetailsDeepLinking: function() {
                    return p
                }
            }), l("781738"), l("222007"), l("424973");
            var a = l("884691"),
                s = l("803182"),
                r = l("446674"),
                n = l("812204"),
                o = l("685665"),
                i = l("216719"),
                u = l("54809"),
                c = l("49111");
            let d = "".concat("#").concat("itemSkuId", "="),
                f = new RegExp("^".concat(d, "(\\d+)$")),
                C = [c.Routes.COLLECTIBLES_SHOP, c.Routes.COLLECTIBLES_SHOP_FULLSCREEN],
                m = e => {
                    let t = (0, s.useLocation)();
                    a.useEffect(() => {
                        if (null != e && C.includes(t.pathname)) return window.location.replace("".concat(d).concat(e.skuId)), () => {
                            window.location.hash.startsWith(d) && window.location.replace("#")
                        }
                    }, [])
                },
                E = e => {
                    let {
                        categories: t,
                        productSkuId: l,
                        analyticsLocations: a,
                        analyticsSource: s,
                        initialItemCardRef: r
                    } = e;
                    for (let e of t.values()) {
                        let t = e.products.find(e => e.skuId === l);
                        if (null != t) {
                            var n;
                            null === (n = r.current) || void 0 === n || n.scrollIntoView({
                                behavior: "smooth",
                                block: "center",
                                inline: "center"
                            });
                            let l = setTimeout(() => {
                                let l = document.getElementById("shop-item-".concat(t.skuId));
                                l !== document.activeElement && (null == l || l.focus()), (0, u.openCollectiblesShopProductDetailsModal)({
                                    product: t,
                                    category: e,
                                    analyticsSource: s,
                                    analyticsLocations: a,
                                    returnRef: r
                                })
                            }, 750);
                            return () => clearTimeout(l)
                        }
                    }
                    return () => {}
                },
                p = e => {
                    let {
                        categories: t,
                        isFetchingCategories: l,
                        isLayer: u,
                        initialItemCardRef: d
                    } = e, C = a.useRef(null), m = (0, s.useLocation)(), p = m.pathname === c.Routes.COLLECTIBLES_SHOP ? n.default.HOME_PAGE_SHOP_TAB : m.pathname === c.Routes.COLLECTIBLES_SHOP_FULLSCREEN ? n.default.COLLECTIBLES_SHOP_FULLSCREEN : n.default.COLLECTIBLES_SHOP, {
                        analyticsLocations: g
                    } = (0, o.default)(p);
                    a.useEffect(() => {
                        if (u) return;
                        let e = f.exec(m.hash);
                        if (null != e) {
                            let t = e[1];
                            C.current = t
                        }
                    }, []);
                    let h = (0, r.useStateFromStores)([i.default], () => i.default.initialProductSkuId);
                    a.useEffect(() => {
                        if (l) return;
                        let e = null;
                        if (u && null != h && (e = h), !u && null != C.current && (e = C.current), null != e) {
                            let l = [],
                                a = setTimeout(() => {
                                    let a = E({
                                        categories: t,
                                        productSkuId: e,
                                        analyticsLocations: g,
                                        analyticsSource: p,
                                        initialItemCardRef: d
                                    });
                                    l.push(a)
                                }, 250);
                            return l.push(() => clearTimeout(a)), () => {
                                l.forEach(e => e())
                            }
                        }
                    }, [u, g, p, t, l, h, d])
                }
        },
        342676: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return f
                }
            }), l("794252");
            var a, s, r = l("37983");
            l("884691");
            var n = l("414456"),
                o = l.n(n),
                i = l("506838"),
                u = l("956089"),
                c = l("782340"),
                d = l("224609");
            (s = a || (a = {})).BANNER = "banner", s.MODAL = "modal", s.CARD = "card";
            var f = e => {
                let {
                    category: t,
                    display: l,
                    className: a
                } = e;
                if (null == t.unpublishedAt) return null;
                let s = function(e) {
                    let t = new Date,
                        l = Date.UTC(t.getFullYear(), t.getMonth(), t.getDate()),
                        a = Date.UTC(e.getFullYear(), e.getMonth(), e.getDate());
                    return Math.floor((a - l) / 864e5)
                }(t.unpublishedAt);

                function n(e) {
                    return (0, r.jsx)(u.TextBadge, {
                        disableColor: !0,
                        text: e,
                        className: o(d.badge, a)
                    })
                }
                return (0, i.match)([l, s > 1]).with(["card", !0], () => null).with(["banner", !0], () => {
                    let e = c.default.Messages.COLLECTIBLES_DAYS_LEFT_IN_SHOP.format({
                        days: s
                    });
                    return n(e)
                }).with(["modal", !0], () => {
                    let e = c.default.Messages.COLLECTIBLES_DAYS_LEFT.format({
                        days: s
                    });
                    return n(e)
                }).otherwise(() => {
                    let e = c.default.Messages.COLLECTIBLES_LAST_DAY;
                    return n(e)
                })
            }
        },
        258556: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return et
                }
            }), l("222007");
            var a = l("37983"),
                s = l("884691"),
                r = l("414456"),
                n = l.n(r),
                o = l("917351"),
                i = l("265586"),
                u = l("65597"),
                c = l("151426"),
                d = l("551042"),
                f = l("77078"),
                C = l("939488"),
                m = l("304580"),
                E = l("841098"),
                p = l("812204"),
                g = l("685665"),
                h = l("481120"),
                T = l("10641"),
                b = l("539938"),
                x = l("210721"),
                L = l("78345"),
                S = l("65324"),
                I = l("778588"),
                v = l("697218"),
                _ = l("764490"),
                N = l("29557"),
                A = l("599110"),
                k = l("719923"),
                O = l("439932"),
                F = l("21526"),
                y = l("805172"),
                R = l("216719"),
                j = l("702953"),
                B = l("235898"),
                P = l("296304"),
                D = l("334820"),
                M = l("89569"),
                w = l("419513"),
                H = l("434393"),
                U = l("571464"),
                W = l("43525"),
                G = l("798235"),
                z = l("931262"),
                V = l("695824"),
                K = l("518907"),
                Y = l("368560"),
                X = l("49111"),
                Z = l("994428"),
                q = l("894282"),
                $ = l("646718"),
                J = l("782340"),
                Q = l("451594");

            function ee(e) {
                let {
                    category: t,
                    className: l,
                    isPremiumUser: r,
                    initialItemCardRef: c,
                    isGiftEasterEggEnabled: d,
                    setIsGiftEasterEggEnabled: C,
                    showEasterEggToggle: m
                } = e, E = s.useRef(10 + 70 * Math.random()), p = (0, D.usePurchasedProductsSort)(t.products), g = (0, o.groupBy)(p, "type"), h = (0, u.default)([R.default], () => R.default.initialProductSkuId), {
                    tallerCardsEnabled: T
                } = (0, j.useCollectiblesShopTallerCardsExperiment)({
                    location: "CollectiblesShop"
                }), b = T ? K.default : H.default, I = s.useCallback(e => t => {
                    e.skuId === h && (c.current = t.current)
                }, [h, c]), v = (e, s) => 0 === e.length ? null : (0, a.jsxs)("div", {
                    children: [(0, a.jsx)(f.Text, {
                        className: n(Q.itemTypeTitle, {
                            [Q.itemTypeTitleForTallerCard]: T
                        }),
                        color: "header-secondary",
                        variant: "text-sm/bold",
                        children: s
                    }), (0, a.jsx)("div", {
                        className: n(Q.cardsContainer, T ? Q.tallerShopCard : Q.regularShopCard, l),
                        children: e.map(e => (0, a.jsx)(b, {
                            onMount: I(e),
                            isPremiumUser: r,
                            category: t,
                            product: e,
                            isGiftEasterEggEnabled: d
                        }, e.skuId))
                    })]
                });
                return (0, a.jsxs)("div", {
                    className: Q.categoryWrapper,
                    children: [m && (0, a.jsx)(f.Clickable, {
                        className: n(Q.hiddenWumpus, {
                            [Q.hiddenWumpusEnabled]: d
                        }),
                        onClick: () => C(!0),
                        style: {
                            left: "".concat(E.current, "%")
                        },
                        children: (0, a.jsx)(S.default, {
                            idleAnimationState: x.AnimationState.IDLE,
                            giftStyle: L.PremiumGiftStyles.BOX
                        })
                    }), (0, a.jsx)(w.default, {
                        category: t,
                        className: T ? Q.tallerShopCardBanner : void 0
                    }), v(g[i.CollectiblesItemType.AVATAR_DECORATION], J.default.Messages.PREMIUM_FEATURE_AVATAR_DECORATIONS_HEADER), v(g[i.CollectiblesItemType.PROFILE_EFFECT], J.default.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_TITLE)]
                })
            }
            var et = function(e) {
                let {
                    isFullScreen: t = !0
                } = e, {
                    analyticsSource: l,
                    analyticsLocations: r
                } = (0, u.useStateFromStoresObject)([R.default], () => R.default.getAnalytics()), {
                    AnalyticsLocationProvider: o,
                    analyticsLocations: x
                } = (0, g.default)([...r, p.default.COLLECTIBLES_SHOP]), L = (0, u.default)([I.default], () => I.default.getLayers().includes(X.Layers.COLLECTIBLES_SHOP)), S = (0, d.useHasAnyModalOpen)(), {
                    onClose: D
                } = (0, z.useCollectiblesShopRouting)(), w = (0, u.default)([v.default], () => v.default.getCurrentUser()), H = k.default.canUseCollectibles(w), {
                    categories: K,
                    isFetchingCategories: et,
                    error: el
                } = (0, B.default)(), ea = (0, P.usePurchasedCategoriesSort)(K), es = s.useRef(Math.random()), {
                    marketingEnabled: er
                } = (0, y.default)({
                    location: "CollectiblesShop"
                }), {
                    tallerCardsEnabled: en
                } = (0, j.useCollectiblesShopTallerCardsExperiment)({
                    location: "CollectiblesShop"
                }), eo = s.useRef(null), [ei, eu] = s.useState(!1);
                (0, M.useProductDetailsDeepLinking)({
                    categories: K,
                    isFetchingCategories: et,
                    isLayer: L,
                    initialItemCardRef: eo
                });
                let {
                    sessionId: ec,
                    scrollerRef: ed,
                    scrollHandler: ef
                } = (0, h.usePageScrollPosition)(X.AnalyticEvents.COLLECTIBLES_SHOP_SCROLLED, l);
                s.useEffect(() => {
                    A.default.track(X.AnalyticEvents.COLLECTIBLES_SHOP_VIEWED, {
                        location_stack: x,
                        source: l,
                        page_session_id: ec
                    }), !H && A.default.track(X.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                        type: $.PremiumUpsellTypes.COLLECTIBLES_SHOP,
                        location_stack: x
                    })
                }, [H, x, l, ec]), s.useEffect(() => {
                    !(0, T.isDismissibleContentDismissed)(c.DismissibleContent.COLLECTIBLES_GIFTING_COACHMARK) && (0, T.markDismissibleContentAsDismissed)(c.DismissibleContent.COLLECTIBLES_GIFTING_COACHMARK, {
                        dismissAction: Z.ContentDismissActionType.AUTO_DISMISS,
                        forceTrack: !0
                    })
                }, []), s.useEffect(() => {
                    !t && (0, C.setHomeLink)(X.Routes.COLLECTIBLES_SHOP)
                }, [t]), s.useEffect(() => () => {
                    (0, F.setCollectiblesCategoryItemsViewed)({
                        categories: [...K.values()],
                        itemTypes: [i.CollectiblesItemType.AVATAR_DECORATION, i.CollectiblesItemType.PROFILE_EFFECT]
                    })
                }, [K]), s.useEffect(() => {
                    if (!t || L || S) return;
                    let e = e => {
                        e.key === q.KeyboardEventKey.Escape && D()
                    };
                    return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e)
                }, [t, L, S, D]);
                let eC = () => {
                        (0, F.fetchCollectiblesCategories)()
                    },
                    em = (0, E.default)();
                return (0, a.jsxs)(o, {
                    children: [(0, a.jsxs)("div", {
                        className: Q.shop,
                        children: [t ? null : (0, a.jsxs)(b.default, {
                            className: n((0, O.getThemeClass)(em), Q.headerBar),
                            toolbar: !0,
                            children: [(0, a.jsx)(N.default, {
                                className: Q.logo
                            }), (0, a.jsx)(b.default.Title, {
                                className: Q.title,
                                children: J.default.Messages.COLLECTIBLES_SHOP
                            })]
                        }), (0, a.jsx)(f.AdvancedScroller, {
                            className: n(Q.shopScroll, {
                                [Q.shopScrollBackgroundPrimary]: en
                            }),
                            ref: ed,
                            onScroll: ef,
                            children: (0, a.jsxs)("div", {
                                className: n(Q.pageWrapper, {
                                    [Q.pageWrapperFullscreen]: t,
                                    [Q.pageWrapperBackgroundPrimary]: en
                                }),
                                children: [(0, a.jsxs)("main", {
                                    className: Q.page,
                                    children: [t ? (0, a.jsx)(_.default, {
                                        title: J.default.Messages.COLLECTIBLES_SHOP
                                    }) : null, er ? (0, a.jsx)(G.default, {
                                        isFullScreen: t
                                    }) : (0, a.jsx)(W.default, {
                                        isFullScreen: t
                                    }), et ? (0, a.jsx)(V.default, {}) : el ? (0, a.jsx)(U.default, {
                                        onRetry: eC
                                    }) : (0, a.jsx)("div", {
                                        className: Q.categories,
                                        children: ea.filter(e => {
                                            let {
                                                products: t
                                            } = e;
                                            return t.length > 0
                                        }).map((e, t) => (0, a.jsx)(ee, {
                                            isPremiumUser: H,
                                            category: e,
                                            initialItemCardRef: eo,
                                            setIsGiftEasterEggEnabled: eu,
                                            isGiftEasterEggEnabled: ei,
                                            showEasterEggToggle: t === Math.floor(es.current * ea.length)
                                        }, e.skuId))
                                    })]
                                }), t && (0, a.jsx)("div", {
                                    children: (0, a.jsx)(m.default, {
                                        className: Q.close,
                                        closeAction: L ? F.closeCollectiblesShop : D,
                                        keybind: "ESC"
                                    })
                                })]
                            })
                        })]
                    }), ei && (0, a.jsx)(Y.default, {})]
                })
            }
        },
        419513: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return _
                }
            });
            var a = l("37983"),
                s = l("884691"),
                r = l("414456"),
                n = l.n(r),
                o = l("635058"),
                i = l("65597"),
                u = l("77078"),
                c = l("685665"),
                d = l("649844"),
                f = l("697218"),
                C = l("153769"),
                m = l("270227"),
                E = l("719923"),
                p = l("491232"),
                g = l("716120"),
                h = l("342676"),
                T = l("408381"),
                b = l("57940"),
                x = l("646718"),
                L = l("782340"),
                S = l("927694");
            let I = (0, T.getLogoSize)(96),
                v = e => {
                    let {
                        category: t
                    } = e, {
                        analyticsLocations: l
                    } = (0, c.default)(), r = s.useRef(null), n = (0, i.default)([f.default], () => f.default.getCurrentUser());
                    return E.default.canUseCollectibles(n) ? (0, a.jsx)(a.Fragment, {
                        children: t.summary
                    }) : (0, a.jsx)(a.Fragment, {
                        children: L.default.Messages.COLLECTIBLES_SFA_STARTER_BANNER_DESCRIPTION.format({
                            getPremium: e => (0, a.jsx)(u.Clickable, {
                                innerRef: r,
                                className: S.getPremiumHook,
                                onClick: () => {
                                    (0, d.default)({
                                        subscriptionTier: x.PremiumSubscriptionSKUs.TIER_2,
                                        analyticsLocations: l,
                                        returnRef: r
                                    })
                                },
                                tag: "span",
                                children: (0, a.jsx)(u.Text, {
                                    variant: "text-md/normal",
                                    color: "always-white",
                                    tag: "span",
                                    children: e
                                })
                            })
                        })
                    })
                };

            function _(e) {
                let {
                    category: t,
                    className: l
                } = e, {
                    backgroundColors: s
                } = (0, b.default)(t.skuId);
                return (0, a.jsxs)(g.default, {
                    asset: t.banner,
                    className: n(S.shopBanner, l),
                    style: null != s ? {
                        background: "".concat((0, T.getBackgroundGradient)(s), " border-box border-box"),
                        outlineColor: s.border.toHslString()
                    } : void 0,
                    children: [(0, a.jsxs)("div", {
                        className: S.discordLogo,
                        children: [(0, a.jsx)(C.default, {
                            className: S.discordIcon
                        }), (0, a.jsx)(m.default, {
                            className: S.discordWordmark
                        })]
                    }), (0, a.jsx)("img", {
                        className: S.categoryLogo,
                        src: (0, p.getCollectiblesAssetURL)(t.logo, {
                            size: I
                        }),
                        alt: t.name
                    }), (0, a.jsx)(u.Text, {
                        className: S.summary,
                        variant: "text-md/normal",
                        color: "always-white",
                        children: t.skuId === o.CollectiblesCategorySkuId.DISXCORE ? (0, a.jsx)(v, {
                            category: t
                        }) : t.summary
                    }), (0, a.jsx)(h.default, {
                        category: t,
                        className: S.limitedTimeBadge,
                        display: "banner"
                    })]
                })
            }
        },
        434393: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return K
                }
            }), l("222007");
            var a = l("37983"),
                s = l("884691"),
                r = l("414456"),
                n = l.n(r),
                o = l("65597"),
                i = l("77078"),
                u = l("265586"),
                c = l("54239"),
                d = l("252744"),
                f = l("812204"),
                C = l("685665"),
                m = l("606292"),
                E = l("688318"),
                p = l("946964"),
                g = l("635956"),
                h = l("38766"),
                T = l("662286"),
                b = l("601095"),
                x = l("493390"),
                L = l("697218"),
                S = l("944441"),
                I = l("462579"),
                v = l("216422"),
                _ = l("956089"),
                N = l("50885"),
                A = l("21526"),
                k = l("775416"),
                O = l("491232"),
                F = l("342676"),
                y = l("450492"),
                R = l("920580"),
                j = l("54809"),
                B = l("408381"),
                P = l("264579"),
                D = l("57940"),
                M = l("646718"),
                w = l("782340"),
                H = l("395535");
            let U = N.default.getEnableHardwareAcceleration() ? i.AnimatedAvatar : i.Avatar,
                W = i.AvatarSizes.SIZE_120,
                G = (0, m.getDecorationSizeForAvatarSize)(W),
                z = e => {
                    let {
                        children: t,
                        onClick: l,
                        ...s
                    } = e;
                    return (0, a.jsx)(i.Button, {
                        fullWidth: !0,
                        look: i.Button.Looks.FILLED,
                        onClick: e => {
                            e.stopPropagation(), l()
                        },
                        ...s,
                        children: t
                    })
                },
                V = e => {
                    let {
                        className: t,
                        ...l
                    } = e;
                    return (0, a.jsx)(i.Button, {
                        color: i.ButtonColors.CUSTOM,
                        look: i.Button.Looks.FILLED,
                        size: i.ButtonSizes.ICON,
                        className: n(H.previewButton, t),
                        innerClassName: H.previewButtonInner,
                        "aria-label": w.default.Messages.PREVIEW,
                        ...l,
                        children: (0, a.jsx)(I.default, {
                            width: 24,
                            height: 24
                        })
                    })
                };
            var K = function(e) {
                let {
                    product: t,
                    category: l,
                    onMount: r,
                    isPremiumUser: I = !1,
                    isGiftEasterEggEnabled: N
                } = e, {
                    analyticsLocations: K
                } = (0, C.default)(f.default.COLLECTIBLES_SHOP_CARD), Y = s.useRef(null), X = (0, d.default)(Y), [Z, q] = s.useState(!1), $ = X || Z, J = (0, o.default)([L.default], () => L.default.getCurrentUser()), [Q] = t.items, {
                    avatarDecorationSrc: ee,
                    eventHandlers: et,
                    avatarPlaceholderSrc: el
                } = (0, E.default)({
                    user: J,
                    avatarDecorationOverride: (null == Q ? void 0 : Q.type) === u.CollectiblesItemType.AVATAR_DECORATION ? Q : void 0,
                    size: G,
                    animateOnHover: !$
                }), {
                    buttonColors: ea,
                    backgroundColors: es
                } = (0, D.default)(t.categorySkuId), er = (0, O.getFormattedPriceForCollectiblesProduct)(t, I), en = (0, O.isPremiumCollectiblesProduct)(t), eo = (0, O.isFreeCollectiblesProduct)(t), [ei, eu, ec] = (0, o.useStateFromStoresArray)([k.default], () => [k.default.getPurchase(t.skuId), k.default.isClaiming === t.skuId, null != k.default.isClaiming && k.default.isClaiming !== t.skuId]), ed = (0, T.useCanUseProfileEffects)({
                    location: "CollectiblesShopCard"
                });
                s.useEffect(() => {
                    let {
                        current: e
                    } = Y;
                    if (null == e) return;
                    let t = () => q(!0);
                    return e.addEventListener("focusin", t), e.blur(), () => {
                        e.removeEventListener("focusin", t)
                    }
                }, []);
                let ef = (0, h.default)({
                        analyticsLocations: K
                    }),
                    eC = () => {
                        if ((0, c.popLayer)(), ef(), (null == Q ? void 0 : Q.type) === u.CollectiblesItemType.AVATAR_DECORATION) {
                            (0, m.openAvatarDecorationModal)({
                                initialSelectedDecoration: Q,
                                analyticsLocations: K
                            });
                            return
                        }(null == Q ? void 0 : Q.type) === u.CollectiblesItemType.PROFILE_EFFECT && (0, x.openProfileEffectModal)({
                            initialSelectedEffectId: Q.id,
                            analyticsLocations: K
                        })
                    },
                    em = e => () => {
                        (0, j.openCollectiblesShopProductDetailsModal)({
                            product: t,
                            category: l,
                            analyticsLocations: K,
                            analyticsSource: e
                        })
                    },
                    eE = em(f.default.COLLECTIBLES_SHOP_CARD),
                    ep = em(f.default.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
                    eg = () => (0, a.jsx)("div", {
                        className: H.hoverUpsellContainer,
                        children: (0, a.jsx)(g.default, {
                            fullWidth: !0,
                            className: H.premiumSubscribeButton,
                            disabled: ec,
                            onClick: e => e.stopPropagation(),
                            buttonText: w.default.Messages.UNLOCK_WITH_NITRO,
                            subscriptionTier: M.PremiumSubscriptionSKUs.TIER_2
                        })
                    });
                s.useEffect(() => {
                    null == r || r(Y)
                }, [r]);
                let eh = () => null != ei ? (0, a.jsx)(i.Text, {
                        color: "always-white",
                        variant: "text-md/semibold",
                        className: H.priceTag,
                        children: w.default.Messages.COLLECTIBLES_ALREADY_OWNED
                    }) : en ? (0, a.jsx)(i.Text, {
                        color: "always-white",
                        variant: "text-md/semibold",
                        className: H.priceTag,
                        children: w.default.Messages.COLLECTIBLES_INCLUDED_WITH_PREMIUM
                    }) : (0, a.jsx)(R.default, {
                        product: t,
                        className: H.priceTag,
                        disableTooltipPointerEvents: !0
                    }),
                    eT = () => en ? null : eo ? (0, a.jsx)(V, {
                        style: null != ea ? {
                            background: ea.secondary.toHslString(),
                            color: ea.text.toHslString()
                        } : void 0,
                        className: H.defaultPreviewButtonColor,
                        onClick: ep
                    }) : (0, a.jsx)(y.default, {
                        product: t,
                        returnRef: Y,
                        isGiftEasterEggEnabled: N,
                        tooltipDelay: 250
                    }),
                    eb = () => {
                        if (en && !I && !eo) return eg();
                        let e = null != ea ? {
                                background: (0, B.getBackgroundGradient)(ea, 90),
                                color: ea.text.toHslString()
                            } : void 0,
                            l = en ? {
                                submitting: eu,
                                submittingStartedLabel: w.default.Messages.COLLECTIBLES_COLLECTING,
                                submittingFinishedLabel: w.default.Messages.COLLECTIBLES_COLLECTING_FINISHED,
                                onClick: async () => {
                                    await (0, A.claimPremiumCollectiblesProduct)(t.skuId), (0, P.default)({
                                        product: t,
                                        analyticsLocations: K
                                    })
                                }
                            } : {
                                onClick: () => (0, p.default)({
                                    skuId: t.skuId,
                                    analyticsLocations: K,
                                    returnRef: Y
                                })
                            };
                        return (0, a.jsxs)("div", {
                            className: H.buttonsContainer,
                            children: [null == ei ? (0, a.jsx)(z, {
                                style: e,
                                disabled: ec,
                                className: H.purchaseButton,
                                ...l,
                                children: en ? w.default.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION : w.default.Messages.COLLECTIBLES_PURCHASE.format({
                                    price: er
                                })
                            }) : (0, a.jsx)(z, {
                                style: e,
                                disabled: ec,
                                onClick: eC,
                                children: w.default.Messages.COLLECTIBLES_USE_NOW
                            }), eT()]
                        })
                    };
                if (!1 === ed) return null;
                let ex = null != es ? {
                    background: "".concat((0, B.getBackgroundGradient)(es), " border-box border-box"),
                    borderColor: es.border.toHslString(),
                    boxShadow: $ ? "0 0 25px 1px ".concat(es.primary.toHslString()) : "none"
                } : void 0;
                return (0, a.jsx)(i.FocusRing, {
                    children: (0, a.jsxs)(i.Clickable, {
                        innerRef: Y,
                        className: H.shopCard,
                        onBlur: () => q(!1),
                        onClick: eE,
                        style: ex,
                        id: "shop-item-".concat(t.skuId),
                        children: [en && (0, a.jsx)(i.Tooltip, {
                            tooltipContentClassName: H.premiumWheelTooltipContent,
                            color: i.Tooltip.Colors.PRIMARY,
                            text: w.default.Messages.COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER,
                            children: e => (0, a.jsx)(_.TextBadge, {
                                ...e,
                                className: H.premiumWheelBadge,
                                text: (0, a.jsx)(v.default, {
                                    className: H.premiumWheel
                                })
                            })
                        }), (null == Q ? void 0 : Q.type) === u.CollectiblesItemType.PROFILE_EFFECT && (0, a.jsx)("div", {
                            className: H.profileEffectShopPreview,
                            children: (0, a.jsx)(b.default, {
                                isHovering: $,
                                profileEffectId: Q.id,
                                isPurchased: null != ei
                            })
                        }), (null == Q ? void 0 : Q.type) === u.CollectiblesItemType.AVATAR_DECORATION && (0, a.jsx)(U, {
                            ...et,
                            avatarDecoration: ee,
                            src: el,
                            className: n(H.avatar, {
                                [H.avatarPurchased]: null != ei
                            }),
                            size: W,
                            "aria-label": w.default.Messages.USER_SETTINGS_AVATAR
                        }), null != ei ? (0, a.jsx)("div", {
                            className: (null == Q ? void 0 : Q.type) === u.CollectiblesItemType.PROFILE_EFFECT ? H.profileEffectCheckmarkWrapper : H.checkmarkWrapper,
                            children: (0, a.jsx)(S.default, {
                                width: 38,
                                height: 38,
                                className: H.checkmark
                            })
                        }) : null, (0, a.jsxs)("div", {
                            className: n(H.cardText, {
                                [H.cardTextProfileEffect]: (null == Q ? void 0 : Q.type) === u.CollectiblesItemType.PROFILE_EFFECT
                            }),
                            children: [(0, a.jsx)("div", {
                                className: H.productName,
                                children: I && (0, a.jsx)(i.Text, {
                                    color: "always-white",
                                    variant: "text-lg/bold",
                                    children: t.name
                                })
                            }), (0, a.jsxs)("div", {
                                className: H.detailsWrapper,
                                children: [(0, a.jsxs)("div", {
                                    className: H.innerBlur,
                                    children: [(0, a.jsx)(i.Text, {
                                        color: "always-white",
                                        className: H.description,
                                        variant: "text-md/normal",
                                        children: t.summary
                                    }), eh()]
                                }), (0, a.jsx)("div", {
                                    className: H.innerHover,
                                    children: eb()
                                })]
                            })]
                        }), (0, a.jsx)(F.default, {
                            category: l,
                            className: H.limitedTimeBadge,
                            display: "card"
                        })]
                    })
                })
            }
        },
        571464: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return d
                }
            });
            var a = l("37983");
            l("884691");
            var s = l("819855"),
                r = l("77078"),
                n = l("841098"),
                o = l("782340"),
                i = l("139948"),
                u = l("321220"),
                c = l("684386"),
                d = e => {
                    let {
                        onRetry: t
                    } = e, l = (0, n.default)();
                    return (0, a.jsxs)("div", {
                        className: i.wrapper,
                        children: [(0, a.jsx)("img", {
                            className: i.loadIssueImg,
                            src: (0, s.isThemeDark)(l) ? u : c,
                            alt: ""
                        }), (0, a.jsx)(r.Heading, {
                            className: i.heading1,
                            variant: "heading-xl/semibold",
                            children: o.default.Messages.COLLECTIBLES_SHOP_ERROR_HEADING
                        }), (0, a.jsx)(r.Text, {
                            variant: "text-md/normal",
                            children: o.default.Messages.COLLECTIBLES_SHOP_ERROR_SHOP_LOAD
                        }), (0, a.jsx)(r.Button, {
                            className: i.reload,
                            size: r.Button.Sizes.MEDIUM,
                            color: r.Button.Colors.BRAND_NEW,
                            onClick: t,
                            children: o.default.Messages.ERRORS_RELOAD
                        })]
                    })
                }
        },
        450492: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return p
                }
            });
            var a = l("37983"),
                s = l("884691"),
                r = l("77078"),
                n = l("252744"),
                o = l("685665"),
                i = l("108486"),
                u = l("946964"),
                c = l("978679"),
                d = l("57940"),
                f = l("843455"),
                C = l("782340"),
                m = l("436752");
            let E = {
                dark: [{
                    box: "#FFF19E",
                    ribbon: "#FF484B"
                }, {
                    box: "#17B5E2",
                    ribbon: "#FFFFFF"
                }, {
                    box: "#FFE1A6",
                    ribbon: "#C29CFF"
                }, {
                    box: "#60DA81",
                    ribbon: "#FFF597"
                }, {
                    box: "#E4578A",
                    ribbon: "#BEC4FF"
                }, {
                    box: "#AFE0FC",
                    ribbon: "#FF9356"
                }, {
                    box: "#DB6D6D",
                    ribbon: "#67DA9C"
                }],
                light: [{
                    box: "#FFF19E",
                    ribbon: "#FF484B"
                }, {
                    box: "#025D90",
                    ribbon: "#70FFF8"
                }, {
                    box: "#C29CFF",
                    ribbon: "#255FA3"
                }, {
                    box: "#6AC082",
                    ribbon: "#DED052"
                }, {
                    box: "#AC448B",
                    ribbon: "#4845B8"
                }, {
                    box: "#175B82",
                    ribbon: "#F9D249"
                }, {
                    box: "#B54141",
                    ribbon: "#026530"
                }]
            };
            var p = e => {
                let {
                    product: t,
                    returnRef: l,
                    onSuccess: p,
                    tooltipDelay: g,
                    isGiftEasterEggEnabled: h,
                    disableCustomColor: T = !1
                } = e, {
                    analyticsLocations: b
                } = (0, o.default)(), x = s.useRef(null), L = (0, n.default)(x), {
                    buttonColors: S
                } = (0, d.default)(t.categorySkuId), I = null == S || T ? void 0 : {
                    background: S.secondary.toHslString(),
                    color: S.text.toHslString()
                }, v = T || (null == S ? void 0 : S.text.isDark()) ? f.ThemeTypes.DARK : f.ThemeTypes.LIGHT;
                return (0, a.jsx)(r.Tooltip, {
                    text: C.default.Messages.COLLECTIBLES_SHOP_GIFT_MODAL_SELECT_HEADER,
                    delay: g,
                    children: e => (0, a.jsx)(r.Button, {
                        ...e,
                        buttonRef: x,
                        style: I,
                        className: m.giftButton,
                        color: T ? r.ButtonColors.BRAND : r.ButtonColors.CUSTOM,
                        look: r.Button.Looks.FILLED,
                        size: r.ButtonSizes.ICON,
                        innerClassName: m.giftButtonInner,
                        "aria-label": C.default.Messages.PREMIUM_GIFTING_BUTTON,
                        onClick: e => {
                            e.stopPropagation(), (0, u.default)({
                                skuId: t.skuId,
                                isGift: !0,
                                analyticsLocations: b,
                                returnRef: l,
                                onClose: null != p ? e => {
                                    e && p()
                                } : void 0
                            })
                        },
                        children: h ? (0, a.jsx)(i.SeasonalGiftIcon, {
                            hovered: L,
                            isContentDismissed: !0,
                            themeOverride: v,
                            boxColors: E
                        }) : (0, a.jsx)(c.default, {
                            width: 24,
                            height: 24
                        })
                    })
                })
            }
        },
        43525: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return g
                }
            });
            var a = l("37983");
            l("884691");
            var s = l("414456"),
                r = l.n(s),
                n = l("65597"),
                o = l("77078"),
                i = l("697218"),
                u = l("216422"),
                c = l("719923"),
                d = l("782340"),
                f = l("98881"),
                C = l("247329"),
                m = l("333838"),
                E = l("399637"),
                p = l("976076"),
                g = function(e) {
                    let {
                        isFullScreen: t
                    } = e, l = (0, n.default)([i.default], () => i.default.getCurrentUser()), s = c.default.canUseCollectibles(l);
                    return (0, a.jsxs)("div", {
                        className: r(f.heroBanner, {
                            [f.shopForAllHeroBanner]: !s
                        }),
                        children: [(0, a.jsxs)("div", {
                            className: r(f.heroDescription, {
                                [f.heroDescriptionWithSidebar]: !t
                            }),
                            children: [s && (0, a.jsxs)(o.Text, {
                                color: "always-white",
                                variant: "eyebrow",
                                className: f.premiumBadgeWrapper,
                                children: [(0, a.jsx)(u.default, {
                                    className: f.premiumBadge
                                }), (0, a.jsx)("span", {
                                    className: f.premiumBadgeText,
                                    children: d.default.Messages.REMIXING_TOOLTIP_NITRO_EARLY_ACCESS
                                })]
                            }), (0, a.jsx)(o.Heading, {
                                className: f.bannerTitle,
                                color: "always-white",
                                variant: "display-lg",
                                children: d.default.Messages.COLLECTIBLES_SHOP_HERO_BANNER_TITLE
                            }), (0, a.jsx)(o.Text, {
                                className: f.heroSubtitle,
                                color: "always-white",
                                variant: "text-lg/normal",
                                children: d.default.Messages.COLLECTIBLES_SFA_HERO_BANNER_SUBTITLE
                            })]
                        }), (0, a.jsx)("div", {
                            className: f.bannerBackgroundWrapper,
                            children: (0, a.jsx)("img", {
                                className: f.bannerBackground,
                                alt: "",
                                src: C
                            })
                        }), (0, a.jsx)("img", {
                            className: f.bannerForeground,
                            alt: "",
                            src: m
                        }), (0, a.jsx)("img", {
                            className: f.bannerHand,
                            alt: "",
                            src: E
                        }), (0, a.jsx)("img", {
                            className: r(f.largeSparkle, f.largeTopSparkle),
                            alt: "",
                            src: p
                        }), (0, a.jsx)("img", {
                            className: r(f.smallSparkle, f.smallTopSparkle),
                            alt: "",
                            src: p
                        }), (0, a.jsx)("img", {
                            className: r(f.largeSparkle, f.largeLeftSparkle),
                            alt: "",
                            src: p
                        }), (0, a.jsx)("img", {
                            className: r(f.smallSparkle, f.smallLeftSparkle),
                            alt: "",
                            src: p
                        }), (0, a.jsx)("img", {
                            className: r(f.largeSparkle, f.largeRightSparkle),
                            alt: "",
                            src: p
                        }), (0, a.jsx)("img", {
                            className: r(f.smallSparkle, f.smallRightSparkle),
                            alt: "",
                            src: p
                        })]
                    })
                }
        },
        798235: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return C
                }
            });
            var a = l("37983");
            l("884691");
            var s = l("414456"),
                r = l.n(s),
                n = l("77078"),
                o = l("782340"),
                i = l("60109"),
                u = l("200406"),
                c = l("283045"),
                d = l("718297"),
                f = l("929880"),
                C = function(e) {
                    let {
                        isFullScreen: t
                    } = e;
                    return (0, a.jsxs)("div", {
                        className: r(i.heroBanner, t ? i.heroBannerFullScreen : i.heroBannerWithSidebar),
                        children: [(0, a.jsxs)("div", {
                            className: i.heroDescription,
                            children: [(0, a.jsx)(n.Heading, {
                                className: i.bannerTitle,
                                color: "always-white",
                                variant: "display-lg",
                                children: o.default.Messages.COLLECTIBLES_SHOP_HERO_BANNER_TITLE
                            }), (0, a.jsx)(n.Text, {
                                className: i.heroSubtitle,
                                color: "always-white",
                                variant: "text-lg/normal",
                                children: o.default.Messages.COLLECTIBLES_SHOP_HERO_BANNER_SUBTITLE_ALT
                            })]
                        }), (0, a.jsxs)("div", {
                            className: i.bannerArt,
                            children: [(0, a.jsx)("img", {
                                className: i.bannerGrid,
                                alt: "",
                                src: u,
                                width: "484",
                                height: "402"
                            }), (0, a.jsx)("img", {
                                className: i.bannerGridSmol,
                                alt: "",
                                src: d,
                                width: "85",
                                height: "60"
                            }), (0, a.jsx)("img", {
                                className: i.bannerGridMedium,
                                alt: "",
                                src: c,
                                width: "178",
                                height: "106"
                            }), (0, a.jsx)("img", {
                                className: i.bannerHand,
                                alt: "",
                                src: f,
                                width: "265",
                                height: "238"
                            })]
                        })]
                    })
                }
        },
        920580: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return h
                }
            });
            var a = l("37983");
            l("884691");
            var s = l("414456"),
                r = l.n(s),
                n = l("65597"),
                o = l("755854"),
                i = l("77078"),
                u = l("161778"),
                c = l("697218"),
                d = l("216422"),
                f = l("719923"),
                C = l("491232"),
                m = l("791309"),
                E = l("49111"),
                p = l("782340"),
                g = l("173046");

            function h(e) {
                let {
                    product: t,
                    className: l,
                    disableTooltipPointerEvents: s,
                    alwaysWhiteText: h = !0
                } = e, T = (0, n.default)([c.default], () => c.default.getCurrentUser()), b = (0, n.default)([u.default], () => (0, o.isThemeDark)(u.default.theme)), x = (0, C.extractPriceByPurchaseTypes)(t, E.PriceSetAssignmentPurchaseTypes.DEFAULT);
                if (null == x) return null;
                if (x.amount <= 0) return (0, a.jsx)("div", {
                    className: r(g.priceTagsContainer, l),
                    children: (0, a.jsx)(m.default, {
                        alwaysWhiteText: h,
                        price: x
                    })
                });
                let L = (0, C.extractPriceByPurchaseTypes)(t, E.PriceSetAssignmentPurchaseTypes.PREMIUM_TIER_2),
                    S = !f.default.canUseCollectibles(T);
                return (0, a.jsxs)("div", {
                    className: r(g.priceTagsContainer, l),
                    children: [(0, a.jsx)(m.default, {
                        alwaysWhiteText: h,
                        price: x,
                        className: S ? void 0 : g.strikedPrice
                    }), null != L && (0, a.jsx)(m.default, {
                        price: L,
                        alwaysWhiteText: h,
                        renderPrice: S ? e => p.default.Messages.COLLECTIBLES_NON_PREMIUM_PRICE.format({
                            price: e
                        }) : void 0,
                        className: S ? g.fullPrice : void 0,
                        variant: S ? "text-xs/semibold" : void 0,
                        icon: (0, a.jsx)(i.Tooltip, {
                            text: p.default.Messages.COLLECTIBLES_PREMIUM_DISCOUNT_TOOLTIP_TEXT,
                            "aria-label": p.default.Messages.COLLECTIBLES_NITRO_EXCLUSIVE,
                            disableTooltipPointerEvents: s,
                            children: e => {
                                let {
                                    ...t
                                } = e;
                                return (0, a.jsx)(d.default, {
                                    ...t,
                                    className: r(g.premiumIcon, {
                                        [g.fullPrice]: S
                                    }),
                                    color: h || b ? "white" : "black"
                                })
                            }
                        })
                    })]
                })
            }
        },
        791309: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return u
                }
            });
            var a = l("37983");
            l("884691");
            var s = l("414456"),
                r = l.n(s),
                n = l("77078"),
                o = l("153160"),
                i = l("846367"),
                u = e => {
                    var t;
                    let {
                        price: {
                            amount: l,
                            currency: s
                        },
                        renderPrice: u,
                        icon: c,
                        className: d,
                        variant: f = "heading-md/semibold",
                        alwaysWhiteText: C = !0
                    } = e, m = (0, o.formatPrice)(l, s);
                    return (0, a.jsxs)(n.Heading, {
                        variant: f,
                        color: C ? "always-white" : "none",
                        className: r(i.heading, d),
                        children: [c, null !== (t = null == u ? void 0 : u(m)) && void 0 !== t ? t : m]
                    })
                }
        },
        54809: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                openCollectiblesShopProductDetailsModal: function() {
                    return n
                },
                closeCollectiblesShopProductDetailsModal: function() {
                    return o
                }
            });
            var a = l("37983");
            l("884691");
            var s = l("77078");
            let r = "collectibles shop product details modal",
                n = e => {
                    let {
                        product: t,
                        category: n,
                        analyticsSource: o,
                        analyticsLocations: i,
                        returnRef: u
                    } = e;
                    (0, s.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await l.el("179047").then(l.bind(l, "179047"));
                        return l => (0, a.jsx)(e, {
                            ...l,
                            product: t,
                            category: n,
                            analyticsSource: o,
                            analyticsLocations: i,
                            returnRef: u
                        })
                    }, {
                        modalKey: r
                    })
                },
                o = () => {
                    (0, s.closeModal)(r)
                }
        },
        931262: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                useCollectiblesShopRouting: function() {
                    return c
                }
            }), l("313619"), l("654714"), l("287168"), l("956660"), l("222007");
            var a, s, r = l("884691"),
                n = l("90915"),
                o = l("54239"),
                i = l("393414"),
                u = l("49111");

            function c() {
                let {
                    search: e
                } = (0, n.useLocation)(), t = (0, n.useParams)(), l = r.useMemo(() => new URLSearchParams(e), [e]), a = l.get("source"), s = null != a ? parseInt(a, 10) : null, c = r.useCallback(() => {
                    if (0 === s) {
                        (0, i.back)(), (0, o.pushLayer)(u.Layers.USER_SETTINGS);
                        return
                    }
                    if ((0, i.currentRouteHasBackNavigation)()) {
                        (0, i.back)();
                        return
                    }(0, i.transitionTo)(u.Routes.APP)
                }, [s]);
                return {
                    onClose: c,
                    source: s,
                    ...t
                }
            }(s = a || (a = {}))[s.SETTINGS = 0] = "SETTINGS", s[s.CHANGELOG = 1] = "CHANGELOG", s[s.DM_LIST = 2] = "DM_LIST"
        },
        695824: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return f
                }
            });
            var a = l("37983");
            l("884691");
            var s = l("414456"),
                r = l.n(s),
                n = l("451594"),
                o = l("927694"),
                i = l("395535"),
                u = l("492666");
            let c = () => 4 * Math.random() + 8,
                d = [c(), c(), c()];
            var f = () => (0, a.jsx)(a.Fragment, {
                children: d.map(e => (0, a.jsxs)("div", {
                    className: n.cardsContainer,
                    children: [(0, a.jsx)("div", {
                        className: r(u.skeleton, o.shopBanner),
                        children: (0, a.jsx)("div", {
                            className: u.bannerBody
                        })
                    }), Array.from({
                        length: e
                    }, (e, t) => t).map(e => (0, a.jsx)("div", {
                        className: r(u.skeleton, i.shopCard),
                        children: (0, a.jsxs)("div", {
                            className: u.cardBody,
                            children: [(0, a.jsx)("div", {
                                className: u.cardAvatar
                            }), (0, a.jsx)("div", {
                                className: u.cardTitle
                            }), (0, a.jsx)("div", {
                                className: u.cardDescription
                            }), (0, a.jsx)("div", {
                                className: u.cardSummary
                            })]
                        })
                    }, e))]
                }, e))
            })
        },
        518907: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return X
                }
            }), l("222007");
            var a = l("37983"),
                s = l("884691"),
                r = l("414456"),
                n = l.n(r),
                o = l("65597"),
                i = l("669491"),
                u = l("755854"),
                c = l("77078"),
                d = l("265586"),
                f = l("54239"),
                C = l("252744"),
                m = l("812204"),
                E = l("685665"),
                p = l("606292"),
                g = l("688318"),
                h = l("946964"),
                T = l("635956"),
                b = l("38766"),
                x = l("662286"),
                L = l("601095"),
                S = l("493390"),
                I = l("161778"),
                v = l("697218"),
                _ = l("944441"),
                N = l("462579"),
                A = l("216422"),
                k = l("956089"),
                O = l("50885"),
                F = l("21526"),
                y = l("775416"),
                R = l("491232"),
                j = l("342676"),
                B = l("450492"),
                P = l("920580"),
                D = l("54809"),
                M = l("264579"),
                w = l("57940"),
                H = l("646718"),
                U = l("782340"),
                W = l("216365");
            let G = O.default.getEnableHardwareAcceleration() ? c.AnimatedAvatar : c.Avatar,
                z = c.AvatarSizes.SIZE_152,
                V = (0, p.getDecorationSizeForAvatarSize)(z),
                K = e => {
                    let {
                        children: t,
                        onClick: l,
                        ...s
                    } = e;
                    return (0, a.jsx)(c.Button, {
                        fullWidth: !0,
                        look: c.Button.Looks.FILLED,
                        onClick: e => {
                            e.stopPropagation(), l()
                        },
                        ...s,
                        children: t
                    })
                },
                Y = e => {
                    let {
                        className: t,
                        ...l
                    } = e;
                    return (0, a.jsx)(c.Button, {
                        color: c.ButtonColors.BRAND,
                        look: c.Button.Looks.FILLED,
                        size: c.ButtonSizes.ICON,
                        className: n(W.previewButton, t),
                        innerClassName: W.previewButtonInner,
                        "aria-label": U.default.Messages.PREVIEW,
                        ...l,
                        children: (0, a.jsx)(N.default, {
                            width: 24,
                            height: 24
                        })
                    })
                };
            var X = function(e) {
                let {
                    product: t,
                    category: l,
                    onMount: r,
                    isPremiumUser: N = !1,
                    isGiftEasterEggEnabled: O
                } = e, {
                    analyticsLocations: X
                } = (0, E.default)(m.default.COLLECTIBLES_SHOP_CARD), Z = s.useRef(null), q = (0, C.default)(Z), [$, J] = s.useState(!1), Q = q || $, ee = (0, o.default)([v.default], () => v.default.getCurrentUser()), [et] = t.items, {
                    avatarDecorationSrc: el,
                    eventHandlers: ea,
                    avatarPlaceholderSrc: es
                } = (0, g.default)({
                    user: ee,
                    avatarDecorationOverride: (null == et ? void 0 : et.type) === d.CollectiblesItemType.AVATAR_DECORATION ? et : void 0,
                    size: V,
                    animateOnHover: !Q
                }), {
                    backgroundColors: er
                } = (0, w.default)(t.categorySkuId), en = (0, R.getFormattedPriceForCollectiblesProduct)(t, N), eo = (0, R.isPremiumCollectiblesProduct)(t), ei = (0, R.isFreeCollectiblesProduct)(t), [eu, ec, ed] = (0, o.useStateFromStoresArray)([y.default], () => [y.default.getPurchase(t.skuId), y.default.isClaiming === t.skuId, null != y.default.isClaiming && y.default.isClaiming !== t.skuId]), ef = (0, x.useCanUseProfileEffects)({
                    location: "CollectiblesShopCard"
                }), eC = (0, o.default)([I.default], () => (0, u.isThemeDark)(I.default.theme));
                s.useEffect(() => {
                    let {
                        current: e
                    } = Z;
                    if (null == e) return;
                    let t = () => J(!0);
                    return e.addEventListener("focusin", t), e.blur(), () => {
                        e.removeEventListener("focusin", t)
                    }
                }, []);
                let em = (0, b.default)({
                        analyticsLocations: X
                    }),
                    eE = () => {
                        if ((0, f.popLayer)(), em(), (null == et ? void 0 : et.type) === d.CollectiblesItemType.AVATAR_DECORATION) {
                            (0, p.openAvatarDecorationModal)({
                                initialSelectedDecoration: et,
                                analyticsLocations: X
                            });
                            return
                        }(null == et ? void 0 : et.type) === d.CollectiblesItemType.PROFILE_EFFECT && (0, S.openProfileEffectModal)({
                            initialSelectedEffectId: et.id,
                            analyticsLocations: X
                        })
                    },
                    ep = e => () => {
                        (0, D.openCollectiblesShopProductDetailsModal)({
                            product: t,
                            category: l,
                            analyticsLocations: X,
                            analyticsSource: e
                        })
                    },
                    eg = ep(m.default.COLLECTIBLES_SHOP_CARD),
                    eh = ep(m.default.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
                    eT = () => (0, a.jsx)("div", {
                        className: W.hoverUpsellContainer,
                        children: (0, a.jsx)(T.default, {
                            fullWidth: !0,
                            className: W.premiumSubscribeButton,
                            disabled: ed,
                            onClick: e => e.stopPropagation(),
                            buttonText: U.default.Messages.UNLOCK_WITH_NITRO,
                            subscriptionTier: H.PremiumSubscriptionSKUs.TIER_2
                        })
                    });
                s.useEffect(() => {
                    null == r || r(Z)
                }, [r]);
                let eb = () => null != eu ? (0, a.jsx)(c.Text, {
                        variant: "text-md/semibold",
                        className: W.priceTag,
                        children: U.default.Messages.COLLECTIBLES_ALREADY_OWNED
                    }) : eo ? (0, a.jsx)(c.Text, {
                        variant: "text-md/semibold",
                        className: W.priceTag,
                        children: U.default.Messages.COLLECTIBLES_INCLUDED_WITH_PREMIUM
                    }) : (0, a.jsx)(P.default, {
                        alwaysWhiteText: !1,
                        product: t,
                        className: W.priceTag,
                        disableTooltipPointerEvents: !0
                    }),
                    ex = () => eo ? null : ei ? (0, a.jsx)(Y, {
                        onClick: eh
                    }) : (0, a.jsx)(B.default, {
                        product: t,
                        returnRef: Z,
                        isGiftEasterEggEnabled: O,
                        disableCustomColor: !0,
                        tooltipDelay: 250
                    }),
                    eL = () => {
                        if (eo && !N && !ei) return eT();
                        let e = eo ? {
                            submitting: ec,
                            submittingStartedLabel: U.default.Messages.COLLECTIBLES_COLLECTING,
                            submittingFinishedLabel: U.default.Messages.COLLECTIBLES_COLLECTING_FINISHED,
                            onClick: async () => {
                                await (0, F.claimPremiumCollectiblesProduct)(t.skuId), (0, M.default)({
                                    product: t,
                                    analyticsLocations: X
                                })
                            }
                        } : {
                            onClick: () => (0, h.default)({
                                skuId: t.skuId,
                                analyticsLocations: X,
                                returnRef: Z
                            })
                        };
                        return (0, a.jsxs)("div", {
                            className: W.buttonsContainer,
                            children: [null == eu ? (0, a.jsx)(K, {
                                disabled: ed,
                                className: W.purchaseButton,
                                ...e,
                                children: eo ? U.default.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION : U.default.Messages.COLLECTIBLES_PURCHASE.format({
                                    price: en
                                })
                            }) : (0, a.jsx)(K, {
                                disabled: ed,
                                onClick: eE,
                                children: U.default.Messages.COLLECTIBLES_USE_NOW
                            }), ex()]
                        })
                    };
                if (!1 === ef) return null;
                let eS = eC ? "0 0 15px 1px ".concat(i.default.unsafe_rawColors.PRIMARY_700.css) : "var(--elevation-high)";
                return (0, a.jsx)(c.FocusRing, {
                    children: (0, a.jsxs)(c.Clickable, {
                        innerRef: Z,
                        className: W.shopCard,
                        onBlur: () => J(!1),
                        onClick: eg,
                        style: null != er ? {
                            backgroundColor: eC ? "var(--background-floating)" : "var(--background-secondary)",
                            borderColor: "var(--chat-border)",
                            boxShadow: Q ? eS : "none"
                        } : void 0,
                        id: "shop-item-".concat(t.skuId),
                        children: [eo && (0, a.jsx)(c.Tooltip, {
                            tooltipContentClassName: W.premiumWheelTooltipContent,
                            color: c.Tooltip.Colors.PRIMARY,
                            text: U.default.Messages.COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER,
                            children: e => (0, a.jsx)(k.TextBadge, {
                                ...e,
                                className: W.premiumWheelBadge,
                                text: (0, a.jsx)(A.default, {
                                    className: W.premiumWheel
                                })
                            })
                        }), (null == et ? void 0 : et.type) === d.CollectiblesItemType.PROFILE_EFFECT && (0, a.jsx)("div", {
                            className: W.profileEffectShopPreview,
                            children: (0, a.jsx)(L.default, {
                                isHovering: Q,
                                profileEffectId: et.id,
                                isPurchased: null != eu,
                                removeSetHeight: !0
                            })
                        }), (null == et ? void 0 : et.type) === d.CollectiblesItemType.AVATAR_DECORATION && (0, a.jsx)("div", {
                            className: W.avatarContainer,
                            children: (0, a.jsx)(G, {
                                ...ea,
                                avatarDecoration: el,
                                src: es,
                                className: n(W.avatar, {
                                    [W.avatarPurchased]: null != eu
                                }),
                                size: z,
                                "aria-label": U.default.Messages.USER_SETTINGS_AVATAR
                            })
                        }), null != eu ? (0, a.jsx)("div", {
                            className: W.checkmarkWrapper,
                            children: (0, a.jsx)(_.default, {
                                width: 38,
                                height: 38,
                                className: W.checkmark
                            })
                        }) : null, (0, a.jsxs)("div", {
                            className: n(W.cardText, {
                                [W.cardTextBlur]: (null == et ? void 0 : et.type) === d.CollectiblesItemType.PROFILE_EFFECT
                            }),
                            children: [(0, a.jsx)("div", {
                                className: n(W.cardBackground, eC ? W.darkCardBackground : W.lightCardBackground, (null == et ? void 0 : et.type) === d.CollectiblesItemType.PROFILE_EFFECT ? W.cardLowOpacity : null)
                            }), (0, a.jsx)("div", {
                                className: W.productName,
                                children: N && (0, a.jsx)(c.Text, {
                                    variant: "text-lg/bold",
                                    children: t.name
                                })
                            }), (0, a.jsxs)("div", {
                                className: W.detailsWrapper,
                                children: [(0, a.jsx)(c.Text, {
                                    className: n(W.description, W.innerMask),
                                    variant: "text-md/normal",
                                    lineClamp: 3,
                                    children: t.summary
                                }), (0, a.jsx)("div", {
                                    className: W.innerBlur,
                                    children: eb()
                                }), (0, a.jsx)("div", {
                                    className: W.innerHover,
                                    children: eL()
                                })]
                            })]
                        }), (0, a.jsx)(j.default, {
                            category: l,
                            className: W.limitedTimeBadge,
                            display: "card"
                        })]
                    })
                })
            }
        },
        408381: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                MAX_CONTENT_WIDTH: function() {
                    return s
                },
                getAssetSizeByHeight: function() {
                    return r
                },
                getLogoSize: function() {
                    return n
                },
                getBackgroundGradient: function() {
                    return o
                }
            });
            var a = l("547630");
            let s = 1060,
                r = e => e * (0, a.default)(),
                n = e => 3.8 * e,
                o = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 180,
                        {
                            primary: l,
                            secondary: a
                        } = e;
                    return "linear-gradient(".concat(t, "deg, ").concat(l.toHslString(), ", ").concat(a.toHslString(), ")")
                }
        },
        368560: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return r
                }
            });
            var a = l("37983");
            l("884691");
            var s = l("4881");

            function r() {
                return (0, a.jsxs)("div", {
                    className: s.snowflakes,
                    children: [(0, a.jsx)("div", {
                        className: s.snowflake,
                        children: "❅"
                    }), (0, a.jsx)("div", {
                        className: s.snowflake,
                        children: "❅"
                    }), (0, a.jsx)("div", {
                        className: s.snowflake,
                        children: "❅"
                    }), (0, a.jsx)("div", {
                        className: s.snowflake,
                        children: "❅"
                    }), (0, a.jsx)("div", {
                        className: s.snowflake,
                        children: "❅"
                    }), (0, a.jsx)("div", {
                        className: s.snowflake,
                        children: "❅"
                    }), (0, a.jsx)("div", {
                        className: s.snowflake,
                        children: "❅"
                    }), (0, a.jsx)("div", {
                        className: s.snowflake,
                        children: "❅"
                    }), (0, a.jsx)("div", {
                        className: s.snowflake,
                        children: "❅"
                    }), (0, a.jsx)("div", {
                        className: s.snowflake,
                        children: "❅"
                    }), (0, a.jsx)("div", {
                        className: s.snowflake,
                        children: "❅"
                    }), (0, a.jsx)("div", {
                        className: s.snowflake,
                        children: "❅"
                    })]
                })
            }
        },
        264579: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return r
                }
            });
            var a = l("37983");
            l("884691");
            var s = l("77078"),
                r = e => {
                    let {
                        product: t,
                        analyticsLocations: r
                    } = e;
                    (0, s.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await l.el("658756").then(l.bind(l, "658756"));
                        return l => (0, a.jsx)(e, {
                            product: t,
                            analyticsLocations: r,
                            ...l
                        })
                    })
                }
        },
        57940: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                DEFAULT_CONFETTI_SPRITES: function() {
                    return d
                },
                DEFAULT_CONFETTI_COLORS: function() {
                    return f
                },
                default: function() {
                    return b
                }
            }), l("222007");
            var a = l("656280"),
                s = l.n(a),
                r = l("635058"),
                n = l("65597"),
                o = l("669491"),
                i = l("206230"),
                u = l("388491"),
                c = l("172858");
            let d = c.COMMON_CONFETTI_SPRITES.filter((e, t) => 1 !== t && 7 !== t),
                f = ["#F53273", "#9595FF", "#A7FA4E", "#331EAF"],
                C = s(o.default.unsafe_rawColors.WHITE_500.resolve({
                    saturation: 1
                }).hex()),
                m = s(o.default.unsafe_rawColors.BLACK_500.resolve({
                    saturation: 1
                }).hex()),
                E = (e, t) => {
                    let l = e.toRgb(),
                        a = t.toRgb(),
                        [r, n, o] = (0, u.getValueInColorGradientByPercentage)([l.r, l.g, l.b], [a.r, a.g, a.b], 50);
                    return s({
                        r,
                        g: n,
                        b: o
                    })
                },
                p = (e, t) => {
                    let l = s(e),
                        a = s(t),
                        r = E(l, a);
                    return {
                        primary: l,
                        secondary: a,
                        border: r.setAlpha(.4)
                    }
                },
                g = (e, t) => {
                    let l = s(e),
                        a = s(t),
                        r = E(l, a);
                    return {
                        primary: l,
                        secondary: a,
                        text: s(r.isLight() ? m : C)
                    }
                },
                h = (e, t) => {
                    let {
                        h: l,
                        s: a,
                        l: r
                    } = e.toHsl();
                    return s({
                        h: l,
                        s: a * t,
                        l: r
                    })
                },
                T = {
                    [r.CollectiblesCategorySkuId.FANTASY]: {
                        backgroundColors: p("#146144", "#021A0E"),
                        buttonColors: g("#028737", "#00694A"),
                        confettiSprites: [l("655029"), l("290216")],
                        confettiColors: ["#EFA7F7", "#B646C1", "#56B3B3", "#1A8199", "#7160AF", "#AEC7FF"]
                    },
                    [r.CollectiblesCategorySkuId.ANIME]: {
                        backgroundColors: p("#4B79B0", "#0F0E3A"),
                        buttonColors: g("#8A45C1", "#136897"),
                        confettiSprites: [l("597704"), l("714293")],
                        confettiColors: ["#2C9BD9", "#E46A80", "#FFE500", "#BBA8D5", "#3EDDD3", "#E2B761"]
                    },
                    [r.CollectiblesCategorySkuId.BREAKFAST]: {
                        backgroundColors: p("#E8B26B", "#7A3A00"),
                        buttonColors: g("#FFC355", "#FF9537"),
                        confettiSprites: [l("286642"), l("94646")],
                        confettiColors: ["#DD9C98", "#FFC037", "#FF6B00", "#FDE081", "#DD923E", "#FFEECC"]
                    },
                    [r.CollectiblesCategorySkuId.DISXCORE]: {
                        backgroundColors: p("#732565", "#111D40"),
                        buttonColors: g(o.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS.resolve({
                            saturation: 1
                        }).hex(), o.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS_2.resolve({
                            saturation: 1
                        }).hex()),
                        confettiSprites: d,
                        confettiColors: f
                    },
                    [r.CollectiblesCategorySkuId.HALLOWEEN]: {
                        backgroundColors: p("#5280DC", "#060F25"),
                        buttonColors: g("#496BDB", "#3E41B5"),
                        confettiSprites: [l("638538"), l("861485")],
                        confettiColors: ["#EE5619", "#FDBE44", "#42D612", "#DC0DDE", "#8A0AE5"]
                    },
                    [r.CollectiblesCategorySkuId.FALL]: {
                        backgroundColors: p("#FFC267", "#6C1A00"),
                        buttonColors: g("#F5A142", "#E4760E"),
                        confettiSprites: [l("740683"), l("489847")],
                        confettiColors: ["#FF7138", "#92360C", "#F6A334", "#FFC586", "#FF8A00"]
                    },
                    [r.CollectiblesCategorySkuId.WINTER]: {
                        backgroundColors: p("#467FFF", "#154ECF"),
                        buttonColors: g("#44C7FF", "#009DFF"),
                        confettiSprites: [l("770704"), l("165057")],
                        confettiColors: ["#3DC3FF", "#297AFF", "#FD8BFF", "#FF3BF5"]
                    },
                    [r.CollectiblesCategorySkuId.MONSTERS]: {
                        backgroundColors: p("#00475E", "#002B39"),
                        buttonColors: g("#00E6B2", "#009B7C"),
                        confettiSprites: [l("330825"), l("125221")],
                        confettiColors: ["#00C49A", "#F8B531", "#F24E7E", "#64CC6F", "#BB5CF0"]
                    }
                };
            var b = e => {
                let t = (0, n.default)([i.default], () => i.default.saturation);
                if (null == e) return {};
                let l = T[e];
                return (null == l ? void 0 : l.backgroundColors) == null || 1 === t ? null != l ? l : {} : {
                    ...l,
                    backgroundColors: {
                        primary: h(l.backgroundColors.primary, t),
                        secondary: h(l.backgroundColors.secondary, t),
                        border: h(l.backgroundColors.border, t)
                    },
                    buttonColors: {
                        primary: h(l.buttonColors.primary, t),
                        secondary: h(l.buttonColors.secondary, t),
                        text: l.buttonColors.text
                    },
                    confettiColors: l.confettiColors.map(e => h(s(e), t).toHexString())
                }
            }
        },
        946964: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return d
                }
            });
            var a = l("37983");
            l("884691");
            var s = l("748820"),
                r = l("77078"),
                n = l("112679"),
                o = l("55689"),
                i = l("21526"),
                u = l("599110"),
                c = l("49111");

            function d(e) {
                let {
                    skuId: t,
                    isGift: d = !1,
                    giftMessage: f,
                    onClose: C,
                    onComplete: m,
                    analyticsLocations: E,
                    analyticsObject: p
                } = e, g = !1, h = (0, s.v4)();
                (0, r.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await l.el("894742").then(l.bind(l, "894742"));
                    return l => {
                        let {
                            onClose: s,
                            returnRef: r,
                            ...n
                        } = l;
                        return (0, a.jsx)(e, {
                            ...n,
                            loadId: h,
                            skuId: t,
                            isGift: d,
                            giftMessage: f,
                            analyticsLocations: E,
                            onClose: e => {
                                s(), null == C || C(e)
                            },
                            onComplete: () => {
                                g = !0, null == m || m()
                            },
                            returnRef: r
                        })
                    }
                }, {
                    onCloseCallback: () => {
                        !g && u.default.track(c.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
                            load_id: h,
                            payment_type: c.PurchaseTypeToAnalyticsPaymentType[c.PurchaseTypes.ONE_TIME],
                            location: p,
                            is_gift: !1,
                            location_stack: E
                        }), (0, n.clearError)(), (0, o.clearPurchaseTokenAuthState)(), null == C || C(g), g && (0, i.fetchCollectiblesPurchases)()
                    },
                    onCloseRequest: c.NOOP
                })
            }
        },
        601095: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return d
                }
            }), l("222007");
            var a = l("37983"),
                s = l("884691"),
                r = l("414456"),
                n = l.n(r),
                o = l("859498"),
                i = l("635471"),
                u = l("825054"),
                c = l("93902"),
                d = e => {
                    let {
                        profileEffectId: t,
                        isHovering: l,
                        forCollectedModal: r = !1,
                        isPurchased: d,
                        removeSetHeight: f = !1
                    } = e, C = r ? 250 : .1, [m, E] = s.useState(!0);
                    return (s.useEffect(() => {
                        if (!0 !== r) E(!1);
                        else {
                            let e = setTimeout(() => {
                                E(!1)
                            }, C);
                            return () => {
                                clearTimeout(e)
                            }
                        }
                    }, [C, r]), null != t) ? (0, a.jsxs)("div", {
                        className: n(u.previewContainer, {
                            [u.previewContainerAnimation]: r,
                            [u.previewContainerSetHeight]: !f
                        }),
                        children: [(0, a.jsx)("img", {
                            src: c,
                            alt: " ",
                            className: r ? u.previewForCollected : u.preview,
                            "aria-hidden": !0
                        }), !m && (0, a.jsx)("div", {
                            className: d ? u.purchasedEffect : void 0,
                            children: (0, a.jsx)(i.default, {
                                profileEffectId: t,
                                useThumbnail: !0,
                                autoPlay: r,
                                restartMethod: o.RestartMethod.FromStart,
                                resetOnHover: !0,
                                isHovering: l,
                                introDelay: C,
                                useOpacityOnHover: !1
                            })
                        })]
                    }) : null
                }
        },
        493390: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                openProfileEffectModal: function() {
                    return r
                }
            });
            var a = l("37983");
            l("884691");
            var s = l("77078");
            let r = e => {
                let {
                    analyticsLocations: t,
                    initialSelectedEffectId: r
                } = e;
                (0, s.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await l.el("889793").then(l.bind(l, "889793"));
                    return l => (0, a.jsx)(e, {
                        ...l,
                        initialSelectedEffectId: r,
                        analyticsLocations: t
                    })
                }, {})
            }
        },
        944441: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return o
                }
            });
            var a = l("37983");
            l("884691");
            var s = l("469563"),
                r = l("237020"),
                n = l("75196"),
                o = (0, s.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: l = 24,
                        color: s = "currentColor",
                        foreground: r,
                        ...o
                    } = e;
                    return (0, a.jsx)("svg", {
                        ...(0, n.default)(o),
                        width: t,
                        height: l,
                        viewBox: "0 0 24 24",
                        children: (0, a.jsx)("path", {
                            className: r,
                            fill: s,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M9.00043 14.0491L19.5904 3.46912L23.1212 6.99994L8.99993 21.1213L1.28485 13.4062L4.83367 9.88236L9.00043 14.0491Z"
                        })
                    })
                }, r.CheckmarkBoldIcon, void 0, {
                    size: 24
                })
        }
    }
]);