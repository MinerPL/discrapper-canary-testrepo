(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["59717"], {
        437083: function(e, t, r) {
            var a = r("561449"),
                n = r("877297");
            e.exports = function(e) {
                return n(a(e))
            }
        },
        329252: function(e, t, r) {
            var a = r("877297"),
                n = r("164099");
            e.exports = function(e) {
                return a(n(e))
            }
        },
        957478: function(e, t, r) {
            var a = r("626785");
            e.exports = function(e, t) {
                return a(t, function(t) {
                    return e[t]
                })
            }
        },
        561449: function(e, t, r) {
            e.exports = function(e, t) {
                var r = -1,
                    a = e.length;
                for (t || (t = Array(a)); ++r < a;) t[r] = e[r];
                return t
            }
        },
        877297: function(e, t, r) {
            var a = r("68421");
            e.exports = function(e, t) {
                var r = -1,
                    n = e.length,
                    s = n - 1;
                for (t = void 0 === t ? n : t; ++r < t;) {
                    var i = a(r, s),
                        u = e[i];
                    e[i] = e[r], e[r] = u
                }
                return e.length = t, e
            }
        },
        375128: function(e, t, r) {
            var a = r("437083"),
                n = r("329252"),
                s = r("725502");
            e.exports = function(e) {
                return (s(e) ? a : n)(e)
            }
        },
        164099: function(e, t, r) {
            var a = r("957478"),
                n = r("466731");
            e.exports = function(e) {
                return null == e ? [] : a(e, n(e))
            }
        },
        53708: function(e, t, r) {
            "use strict";
            e.exports = r.p + "f6c7b8245d3a54cf98b2.png"
        },
        723251: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                thumbHashToApproximateAspectRatio: function() {
                    return a
                },
                rgbaToDataURL: function() {
                    return n
                },
                thumbHashToDataURL: function() {
                    return s
                }
            }), r("70102"), r("424973"), r("222007"), r("311790"), r("477657"), r("811875"), r("90301"), r("652153"), r("28797"), r("817884"), r("597349"), r("667536"), r("690341"), r("101997");

            function a(e) {
                let t = e[3],
                    r = 128 & e[2],
                    a = 128 & e[4];
                return (a ? r ? 5 : 7 : 7 & t) / (a ? 7 & t : r ? 5 : 7)
            }

            function n(e, t, r) {
                let a = 4 * e + 1,
                    n = 6 + t * (5 + a),
                    s = [137, 80, 78, 71, 13, 10, 26, 10, 0, 0, 0, 13, 73, 72, 68, 82, 0, 0, e >> 8, 255 & e, 0, 0, t >> 8, 255 & t, 8, 6, 0, 0, 0, 0, 0, 0, 0, n >>> 24, n >> 16 & 255, n >> 8 & 255, 255 & n, 73, 68, 65, 84, 120, 1],
                    i = [0, 498536548, 997073096, 651767980, 1994146192, 1802195444, 1303535960, 1342533948, -306674912, -267414716, -690576408, -882789492, -1687895376, -2032938284, -1609899400, -1111625188],
                    u = 1,
                    l = 0;
                for (let e = 0, n = 0, i = a - 1; e < t; e++, i += a - 1)
                    for (s.push(e + 1 < t ? 0 : 1, 255 & a, a >> 8, 255 & ~a, a >> 8 ^ 255, 0), l = (l + u) % 65521; n < i; n++) {
                        let e = 255 & r[n];
                        s.push(e), l = (l + (u = (u + e) % 65521)) % 65521
                    }
                for (let [e, t] of(s.push(l >> 8, 255 & l, u >> 8, 255 & u, 0, 0, 0, 0, 0, 0, 0, 0, 73, 69, 78, 68, 174, 66, 96, 130), [
                        [12, 29],
                        [37, 41 + n]
                    ])) {
                    let r = -1;
                    for (let a = e; a < t; a++) r ^= s[a], r = (r = r >>> 4 ^ i[15 & r]) >>> 4 ^ i[15 & r];
                    r = ~r, s[t++] = r >>> 24, s[t++] = r >> 16 & 255, s[t++] = r >> 8 & 255, s[t++] = 255 & r
                }
                return "data:image/png;base64," + btoa(String.fromCharCode(...s))
            }

            function s(e) {
                let t = function(e) {
                    let {
                        PI: t,
                        min: r,
                        max: n,
                        cos: s,
                        round: i
                    } = Math, u = e[0] | e[1] << 8 | e[2] << 16, l = e[3] | e[4] << 8, o = (63 & u) / 63, c = (u >> 6 & 63) / 31.5 - 1, d = (u >> 12 & 63) / 31.5 - 1, E = u >> 23, _ = l >> 15, f = n(3, _ ? E ? 5 : 7 : 7 & l), C = n(3, _ ? 7 & l : E ? 5 : 7), I = E ? (15 & e[5]) / 15 : 1, A = (e[5] >> 4) / 15, S = E ? 6 : 5, p = 0, h = (t, r, a) => {
                        let n = [];
                        for (let s = 0; s < r; s++)
                            for (let i = s ? 0 : 1; i * r < t * (r - s); i++) n.push(((e[S + (p >> 1)] >> ((1 & p++) << 2) & 15) / 7.5 - 1) * a);
                        return n
                    }, m = h(f, C, (u >> 18 & 31) / 31), T = h(3, 3, 1.25 * ((l >> 3 & 63) / 63)), L = h(3, 3, 1.25 * ((l >> 9 & 63) / 63)), O = E && h(5, 5, A), v = a(e), R = i(v > 1 ? 32 : 32 * v), g = i(v > 1 ? 32 / v : 32), N = new Uint8Array(R * g * 4), D = [], P = [];
                    for (let e = 0, a = 0; e < g; e++)
                        for (let i = 0; i < R; i++, a += 4) {
                            let u = o,
                                l = c,
                                _ = d,
                                A = I;
                            for (let e = 0, r = n(f, E ? 5 : 3); e < r; e++) D[e] = s(t / R * (i + .5) * e);
                            for (let r = 0, a = n(C, E ? 5 : 3); r < a; r++) P[r] = s(t / g * (e + .5) * r);
                            for (let e = 0, t = 0; e < C; e++)
                                for (let r = e ? 0 : 1, a = 2 * P[e]; r * C < f * (C - e); r++, t++) u += m[t] * D[r] * a;
                            for (let e = 0, t = 0; e < 3; e++)
                                for (let r = e ? 0 : 1, a = 2 * P[e]; r < 3 - e; r++, t++) {
                                    let e = D[r] * a;
                                    l += T[t] * e, _ += L[t] * e
                                }
                            if (E)
                                for (let e = 0, t = 0; e < 5; e++)
                                    for (let r = e ? 0 : 1, a = 2 * P[e]; r < 5 - e; r++, t++) A += O[t] * D[r] * a;
                            let S = u - 2 / 3 * l,
                                p = (3 * u - S + _) / 2,
                                h = p - _;
                            N[a] = n(0, 255 * r(1, p)), N[a + 1] = n(0, 255 * r(1, h)), N[a + 2] = n(0, 255 * r(1, S)), N[a + 3] = n(0, 255 * r(1, A))
                        }
                    return {
                        w: R,
                        h: g,
                        rgba: N
                    }
                }(e);
                return n(t.w, t.h, t.rgba)
            }
        },
        875212: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                useTriggerDebuggingAA: function() {
                    return s
                }
            });
            var a = r("862205");
            let n = (0, a.createExperiment)({
                kind: "user",
                id: "2023-09_trigger_debugging_aa",
                label: "trigger debugging aa mobile",
                defaultConfig: {
                    inUse: !1
                },
                treatments: [{
                    id: 1,
                    label: "On",
                    config: {
                        inUse: !0
                    }
                }]
            });

            function s(e) {
                let {
                    autoTrackExposure: t = !1,
                    location: r
                } = e;
                return n.useExperiment({
                    location: r
                }, {
                    autoTrackExposure: t
                })
            }
        },
        791050: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return N
                }
            }), r("222007");
            var a = r("37983"),
                n = r("884691"),
                s = r("265586"),
                i = r("446674"),
                u = r("77078"),
                l = r("812204"),
                o = r("685665"),
                c = r("21526"),
                d = r("491232"),
                E = r("984002"),
                _ = r("235898"),
                f = r("170313"),
                C = r("635956"),
                I = r("91653"),
                A = r("697218"),
                S = r("599110"),
                p = r("719923"),
                h = r("234251"),
                m = r("659117"),
                T = r("765221"),
                L = r("49111"),
                O = r("646718"),
                v = r("782340"),
                R = r("705057");

            function g(e) {
                let {
                    user: t,
                    categories: r,
                    analyticsLocations: s,
                    onClose: i,
                    initialSelectedDecoration: o,
                    isTryItOutFlow: _
                } = e, {
                    pendingAvatarDecoration: A,
                    setPendingAvatarDecoration: S
                } = (0, I.default)({
                    analyticsLocations: s,
                    isTryItOut: _
                }), [L, g] = n.useState(() => {
                    var e;
                    if (null != o) return o;
                    if (void 0 !== A) return A;
                    if ((null == t ? void 0 : t.avatarDecoration) == null || 0 === r.size) return null;
                    let a = (0, d.getAvatarDecorationsFromCategories)(r);
                    return null !== (e = a.find(e => (0, h.isEqualAvatarDecoration)(e, t.avatarDecoration))) && void 0 !== e ? e : null
                }), {
                    product: N,
                    purchase: D
                } = (0, E.default)(null == L ? void 0 : L.skuId), P = p.default.canUseCollectibles(t), M = n.useRef(null), y = (0, f.default)(s), H = (0, h.isEqualAvatarDecoration)(L, void 0 === A ? null == t ? void 0 : t.avatarDecoration : A), x = () => {
                    S(L), i()
                }, w = n.useCallback(() => {
                    i(), (0, c.openCollectiblesShop)({
                        analyticsLocations: s,
                        analyticsSource: l.default.EDIT_AVATAR_DECORATION_MODAL,
                        initialProductSkuId: null != L ? L.skuId : void 0
                    })
                }, [s, i, L]);
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsxs)(u.ModalHeader, {
                        separator: !1,
                        className: R.modalHeader,
                        children: [(0, a.jsx)(u.Heading, {
                            variant: "heading-lg/semibold",
                            children: v.default.Messages.USER_SETTINGS_CHANGE_AVATAR_DECORATION
                        }), (0, a.jsx)(u.ModalCloseButton, {
                            className: R.modalCloseButton,
                            onClick: i
                        })]
                    }), (0, a.jsxs)(u.ModalContent, {
                        className: R.modalContent,
                        scrollbarType: "none",
                        children: [(0, a.jsx)(T.default, {
                            user: t,
                            pendingAvatarDecoration: L,
                            selectedAvatarDecorationRef: M,
                            onSelect: e => {
                                g(e), null != e && y(e)
                            },
                            onOpenShop: w
                        }), (0, a.jsx)(m.default, {
                            className: R.modalPreview,
                            user: t,
                            avatarDecorationOverride: L
                        })]
                    }), (0, a.jsxs)(u.ModalFooter, {
                        className: R.modalFooter,
                        children: [(() => {
                            let e = null != D && (!(0, d.isPremiumCollectiblesPurchase)(D) || P);
                            if (e || null === L) return (0, a.jsx)(u.Button, {
                                onClick: x,
                                disabled: H,
                                children: v.default.Messages.AVATAR_DECORATION_MODAL_APPLY
                            });
                            let r = P || !(0, d.isPremiumCollectiblesProduct)(N);
                            return r ? (0, a.jsx)(u.Button, {
                                className: R.modalFooterShopButton,
                                onClick: w,
                                children: v.default.Messages.COLLECTIBLES_CTA_GO_TO_SHOP
                            }) : (0, a.jsx)(C.default, {
                                subscriptionTier: O.PremiumSubscriptionSKUs.TIER_2,
                                buttonText: p.default.isPremium(t) ? v.default.Messages.USER_SETTINGS_CUSTOMIZATION_UPGRADE_UPSELL : v.default.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL
                            })
                        })(), (0, a.jsx)(u.Button, {
                            look: u.Button.Looks.LINK,
                            color: u.Button.Colors.PRIMARY,
                            onClick: i,
                            children: v.default.Messages.CANCEL
                        })]
                    })]
                })
            }

            function N(e) {
                let {
                    transitionState: t,
                    analyticsLocations: r,
                    onClose: d,
                    initialSelectedDecoration: E,
                    isTryItOutFlow: f
                } = e, C = (0, i.useStateFromStores)([A.default], () => A.default.getCurrentUser()), {
                    AnalyticsLocationProvider: I,
                    analyticsLocations: p
                } = (0, o.default)(r, l.default.EDIT_AVATAR_DECORATION_MODAL), {
                    categories: h,
                    purchases: m,
                    isFetchingCategories: T,
                    isFetchingPurchases: O
                } = (0, _.default)(), v = T || O && 0 === m.size;
                return n.useEffect(() => {
                    S.default.track(L.AnalyticEvents.OPEN_MODAL, {
                        type: "Edit Avatar Decoration Modal",
                        location_stack: p
                    })
                }, [p]), n.useEffect(() => () => {
                    (0, c.setCollectiblesCategoryItemsViewed)({
                        categories: [...h.values()],
                        itemTypes: [s.CollectiblesItemType.AVATAR_DECORATION]
                    })
                }, [h]), null == C ? null : (0, a.jsx)(I, {
                    children: (0, a.jsx)(u.ModalRoot, {
                        transitionState: t,
                        className: R.modal,
                        size: v ? u.ModalSize.DYNAMIC : u.ModalSize.MEDIUM,
                        children: v ? (0, a.jsx)(u.Spinner, {
                            className: R.spinner,
                            type: u.Spinner.Type.SPINNING_CIRCLE
                        }) : (0, a.jsx)(g, {
                            user: C,
                            categories: h,
                            analyticsLocations: p,
                            initialSelectedDecoration: E,
                            onClose: d,
                            isTryItOutFlow: f
                        })
                    })
                })
            }
        },
        659117: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return h
                }
            }), r("794252");
            var a = r("37983");
            r("884691");
            var n = r("414456"),
                s = r.n(n),
                i = r("506838"),
                u = r("446674"),
                l = r("77078"),
                o = r("491232"),
                c = r("984002"),
                d = r("716120"),
                E = r("915639"),
                _ = r("824563"),
                f = r("719923"),
                C = r("795158"),
                I = r("782340"),
                A = r("632000");
            let S = [{
                    avatarSize: l.AvatarSizes.SIZE_40,
                    showStatus: !1
                }, {
                    avatarSize: l.AvatarSizes.SIZE_32,
                    showStatus: !1
                }, {
                    avatarSize: l.AvatarSizes.SIZE_40,
                    showStatus: !0
                }, {
                    avatarSize: l.AvatarSizes.SIZE_32,
                    showStatus: !0
                }],
                p = e => {
                    let {
                        purchase: t
                    } = e, r = (0, u.useStateFromStores)([E.default], () => E.default.locale), n = (0, o.isPremiumCollectiblesPurchase)(t);
                    return (0, a.jsxs)("div", {
                        className: A.purchaseInfo,
                        children: [(0, a.jsx)(l.Text, {
                            variant: "text-sm/semibold",
                            color: "header-primary",
                            children: t.name
                        }), (0, a.jsx)(l.Text, {
                            variant: "text-sm/normal",
                            children: t.summary
                        }), (0, a.jsxs)(l.Text, {
                            variant: "text-xxs/normal",
                            color: "text-muted",
                            children: [I.default.Messages.COLLECTIBLES_ACQUIRED_DATE.format({
                                date: t.purchasedAt.toLocaleDateString(r, {
                                    month: "long",
                                    year: "numeric"
                                })
                            }), n && (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)("br", {}), I.default.Messages.CHANGE_DECORATION_MODAL_STARTER_DESC]
                            })]
                        })]
                    })
                };
            var h = e => {
                let {
                    user: t,
                    avatarDecorationOverride: r,
                    className: n
                } = e, E = (0, u.useStateFromStores)([_.default], () => _.default.getStatus(t.id)), {
                    category: h,
                    product: m,
                    purchase: T
                } = (0, c.default)(null == r ? void 0 : r.skuId), L = f.default.canUseCollectibles(t), O = (0, o.isPremiumCollectiblesPurchase)(T), v = (0, o.isPremiumCollectiblesProduct)(m), R = !L && O;
                return null != m && (null == T || R) ? (0, a.jsxs)("div", {
                    className: s(A.modalPreview, A.shopPreviewContainer, n),
                    children: [(0, a.jsx)(d.default, {
                        asset: null == h ? void 0 : h.banner,
                        className: A.shopPreviewBanner,
                        children: (0, a.jsx)(C.default, {
                            user: t,
                            avatarDecorationOverride: r
                        })
                    }), (0, a.jsxs)("div", {
                        className: A.shopPreviewTextContainer,
                        children: [(0, a.jsx)(l.Text, {
                            variant: "text-sm/semibold",
                            children: m.name
                        }), (0, a.jsx)(l.Text, {
                            variant: "text-sm/normal",
                            children: R ? I.default.Messages.CHANGE_DECORATION_MODAL_PREVIEW_STARTER_CHURNED : (0, i.match)([v, L]).with([!0, !0], () => I.default.Messages.CHANGE_DECORATION_MODAL_PREVIEW_STARTER_PREMIUM).with([!0, !1], () => I.default.Messages.CHANGE_DECORATION_MODAL_PREVIEW_STARTER).otherwise(() => I.default.Messages.CHANGE_DECORATION_MODAL_PREVIEW_PURCHASE_PREMIUM)
                        })]
                    })]
                }) : (0, a.jsxs)("div", {
                    className: s(A.modalPreview, n),
                    children: [(0, a.jsxs)("div", {
                        className: A.previewSections,
                        children: [(0, a.jsx)("div", {
                            className: A.decorationPreview,
                            children: (0, a.jsx)(C.default, {
                                user: t,
                                avatarDecorationOverride: r
                            })
                        }), (0, a.jsx)("div", {
                            className: A.smallDecorationPreviewsContainer,
                            children: S.map(e => {
                                let {
                                    avatarSize: n,
                                    showStatus: s
                                } = e;
                                return (0, a.jsx)("div", {
                                    className: A.smallDecorationPreview,
                                    children: (0, a.jsx)(C.default, {
                                        user: t,
                                        avatarSize: n,
                                        avatarDecorationOverride: r,
                                        status: s ? E : void 0,
                                        "aria-hidden": !0
                                    })
                                }, "".concat(n).concat(s))
                            })
                        })]
                    }), null != T && (0, a.jsx)(p, {
                        purchase: T
                    })]
                })
            }
        },
        795158: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return o
                }
            });
            var a = r("37983");
            r("884691");
            var n = r("77078"),
                s = r("106435"),
                i = r("50885"),
                u = r("782340");
            let l = i.default.getEnableHardwareAcceleration() ? n.AnimatedAvatar : n.Avatar;
            var o = e => {
                let {
                    user: t,
                    avatarDecorationOverride: r,
                    status: i,
                    avatarSize: o = n.AvatarSizes.SIZE_120,
                    "aria-hidden": c = !1
                } = e, {
                    avatarDecorationSrc: d,
                    avatarSrc: E,
                    eventHandlers: _
                } = (0, s.default)({
                    user: t,
                    size: o,
                    showPending: !0,
                    avatarDecorationOverride: r
                });
                return (0, a.jsx)(l, {
                    avatarDecoration: d,
                    src: E,
                    size: o,
                    status: i,
                    "aria-label": c ? void 0 : u.default.Messages.USER_SETTINGS_AVATAR,
                    "aria-hidden": c,
                    ..._
                })
            }
        },
        765221: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return N
                }
            }), r("222007"), r("794252");
            var a = r("37983"),
                n = r("884691"),
                s = r("414456"),
                i = r.n(s),
                u = r("506838"),
                l = r("171210"),
                o = r("65597"),
                c = r("77078"),
                d = r("252744"),
                E = r("853987"),
                _ = r("426497"),
                f = r("491232"),
                C = r("743826"),
                I = r("216422"),
                A = r("468759"),
                S = r("600785"),
                p = r("956089"),
                h = r("719923"),
                m = r("643070"),
                T = r("688318"),
                L = r("782340"),
                O = r("654353");
            let v = () => 80,
                R = e => {
                    let {
                        children: t,
                        className: r,
                        onSelect: n,
                        isSelected: s = !1,
                        ...u
                    } = e;
                    return (0, a.jsx)(c.Clickable, {
                        className: i(O.decorationGridItem, s ? O.selected : void 0, r),
                        ...u,
                        onClick: n,
                        children: t
                    })
                },
                g = e => {
                    let {
                        user: t,
                        avatarDecoration: r,
                        innerRef: s,
                        section: i,
                        isSelected: u = !1,
                        ...c
                    } = e, C = (0, o.default)([E.default], () => {
                        let e = E.default.getProduct(r.skuId);
                        return (0, f.isPremiumCollectiblesProduct)(e)
                    }), A = (0, o.default)([_.default], () => _.default.isItemViewed(r)), v = h.default.canUseCollectibles(t), g = i === m.Section.PREMIUM_PURCHASE && !v, [N, D] = n.useState(u);
                    n.useEffect(() => {
                        u && D(!0)
                    }, [u]);
                    let P = n.useRef(null),
                        M = (0, d.default)(null != s ? s : P),
                        {
                            avatarDecorationSrc: y
                        } = (0, T.default)({
                            user: t,
                            avatarDecorationOverride: r,
                            size: 80,
                            animateOnHover: !M
                        });
                    return (0, a.jsxs)(R, {
                        className: g ? O.decorationGridItemChurned : void 0,
                        innerRef: null != s ? s : P,
                        isSelected: u,
                        ...c,
                        children: [(0, a.jsx)("img", {
                            className: O.presetDecorationImg,
                            src: y,
                            alt: r.label
                        }), (() => {
                            let e = i === m.Section.PURCHASE || i === m.Section.PREMIUM_PURCHASE && v;
                            if (e) return null;
                            let t = !A && !u && !N;
                            return t ? (0, a.jsx)(p.PremiumBadge, {
                                className: O.newBadge,
                                text: (0, a.jsxs)("div", {
                                    className: O.newBadgeText,
                                    children: [(0, a.jsx)(S.default, {
                                        width: 12,
                                        height: 12
                                    }), L.default.Messages.NEW]
                                })
                            }) : (0, a.jsx)(p.IconBadge, {
                                icon: C ? () => (0, a.jsx)(I.default, {
                                    width: 14,
                                    height: 14
                                }) : () => (0, a.jsx)(S.default, {
                                    width: 12,
                                    height: 12
                                }),
                                color: l.default.BACKGROUND_ACCENT,
                                className: O.iconBadge
                            })
                        })()]
                    })
                };
            var N = e => {
                let {
                    user: t,
                    pendingAvatarDecoration: r,
                    selectedAvatarDecorationRef: n,
                    onSelect: s,
                    onOpenShop: i
                } = e, l = (0, m.default)();
                return (0, a.jsx)(c.MasonryList, {
                    fade: !0,
                    className: O.list,
                    columns: 3,
                    sections: l.map(e => {
                        let {
                            items: t
                        } = e;
                        return t.length
                    }),
                    sectionGutter: 16,
                    itemGutter: 12,
                    paddingHorizontal: 12,
                    paddingVertical: 0,
                    removeEdgeItemGutters: !0,
                    renderItem: (e, o, d, E) => {
                        let {
                            section: _,
                            items: f
                        } = l[e];
                        return (0, u.match)(f[o]).with(m.NONE_ITEM, () => (0, a.jsxs)(R, {
                            style: {
                                ...d
                            },
                            isSelected: null === r,
                            onSelect: () => s(null),
                            children: [(0, a.jsx)(A.default, {
                                className: O.notAllowedIcon
                            }), (0, a.jsx)(c.Text, {
                                variant: "text-xs/normal",
                                color: "header-primary",
                                children: L.default.Messages.NONE
                            })]
                        }, E)).with(m.SHOP_ITEM, () => (0, a.jsxs)(R, {
                            style: d,
                            onSelect: i,
                            children: [(0, a.jsx)(C.default, {
                                className: O.shopIcon
                            }), (0, a.jsx)(c.Text, {
                                variant: "text-xs/normal",
                                color: "header-primary",
                                children: L.default.Messages.COLLECTIBLES_SHOP
                            })]
                        }, E)).otherwise(e => {
                            let i = (null == r ? void 0 : r.id) === e.id;
                            return (0, a.jsx)(g, {
                                style: {
                                    ...d
                                },
                                user: t,
                                avatarDecoration: e,
                                section: _,
                                innerRef: i ? n : void 0,
                                isSelected: i,
                                onSelect: () => s(e)
                            }, E)
                        })
                    },
                    renderSection: e => {
                        let {
                            header: t
                        } = l[e];
                        return (0, a.jsx)("div", {
                            className: O.headings,
                            children: (0, a.jsx)(c.HeadingLevel, {
                                forceLevel: 5,
                                children: (0, a.jsx)(c.Heading, {
                                    variant: "eyebrow",
                                    color: "header-secondary",
                                    children: t
                                })
                            })
                        })
                    },
                    getSectionHeight: e => l[e].height,
                    getItemKey: (e, t) => l[e].items[t].id,
                    getItemHeight: v
                })
            }
        },
        643070: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                Section: function() {
                    return a
                },
                NONE_ITEM: function() {
                    return f
                },
                SHOP_ITEM: function() {
                    return C
                },
                default: function() {
                    return I
                }
            }), r("222007"), r("808653"), r("424973");
            var a, n, s = r("884691"),
                i = r("917351"),
                u = r("65597"),
                l = r("853987"),
                o = r("775416"),
                c = r("491232"),
                d = r("697218"),
                E = r("719923"),
                _ = r("782340");
            (n = a || (a = {})).PURCHASE = "purchase", n.PREMIUM_PURCHASE = "premium_purchase", n.PREVIEW = "preview", n.PREMIUM_PREVIEW = "premium_preview";
            let f = {
                    id: "None"
                },
                C = {
                    id: "Shop"
                };
            var I = () => {
                let e = (0, u.default)([d.default], () => d.default.getCurrentUser()),
                    t = E.default.canUseCollectibles(e),
                    r = (0, u.default)([o.default], () => o.default.purchases),
                    [a, n] = (0, u.useStateFromStoresArray)([l.default], () => [l.default.categories, l.default.products]);
                return (0, s.useMemo)(() => {
                    let e = (0, i.uniqBy)([...(0, c.getAvatarDecorationsFromPurchases)(r), ...(0, c.getAvatarDecorationsFromCategories)(a)], "id"),
                        s = e.reduce((e, a) => {
                            let s = r.get(a.skuId),
                                i = (0, c.isPremiumCollectiblesPurchase)(s);
                            if (i && 0 === e.premium_purchase.length && (e.premium_purchase = e.premium_preview, e.premium_preview = []), i) return e.premium_purchase.push(a), e;
                            if (null != s) return e.purchase.push(a), e;
                            if (!t && (0, c.isPremiumCollectiblesProduct)(n.get(a.skuId))) {
                                let t = e.premium_purchase.length > 0 ? e.premium_purchase : e.premium_preview;
                                return t.push(a), e
                            }
                            return e.preview.push(a), e
                        }, {
                            purchase: [],
                            premium_purchase: [],
                            preview: [],
                            premium_preview: []
                        });
                    return [{
                        section: "purchase",
                        items: [f, C, ...s.purchase],
                        height: 12,
                        header: _.default.Messages.CHANGE_DECORATION_MODAL_PURCHASE_HEADER
                    }, {
                        section: s.premium_purchase.length > 0 ? "premium_purchase" : "premium_preview",
                        items: s.premium_purchase.length > 0 ? s.premium_purchase : s.premium_preview,
                        height: 12,
                        header: _.default.Messages.CHANGE_DECORATION_MODAL_PREMIUM_STARTER_HEADER
                    }, {
                        section: "preview",
                        items: s.preview,
                        height: 12,
                        header: _.default.Messages.PROFILE_EFFECT_MODAL_SHOP_PREVIEW_HEADER
                    }].filter(e => {
                        let {
                            items: t
                        } = e;
                        return t.length > 0
                    })
                }, [a, n, r, t])
            }
        },
        21526: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                openCollectiblesShop: function() {
                    return d
                },
                closeCollectiblesShop: function() {
                    return E
                },
                productDetailsOpened: function() {
                    return _
                },
                fetchCollectiblesCategories: function() {
                    return f
                },
                fetchCollectiblesPurchases: function() {
                    return C
                },
                fetchCollectiblesProduct: function() {
                    return I
                },
                claimPremiumCollectiblesProduct: function() {
                    return A
                },
                validateCollectiblesRecipient: function() {
                    return S
                },
                setCollectiblesCategoryItemsViewed: function() {
                    return p
                }
            });
            var a = r("872717"),
                n = r("913144"),
                s = r("54239"),
                i = r("448993"),
                u = r("514296"),
                l = r("407788"),
                o = r("489134"),
                c = r("49111");
            r("853987"), r("426497"), r("775416"), r("216719");
            let d = e => {
                    let {
                        openInLayer: t = !0,
                        ...r
                    } = e;
                    n.default.dispatch({
                        type: "COLLECTIBLES_SHOP_OPEN",
                        ...r
                    }), t && (0, s.pushLayer)(c.Layers.COLLECTIBLES_SHOP)
                },
                E = () => {
                    n.default.dispatch({
                        type: "COLLECTIBLES_SHOP_CLOSE"
                    }), (0, s.popLayer)()
                },
                _ = e => {
                    n.default.dispatch({
                        type: "COLLECTIBLES_PRODUCT_DETAILS_OPEN",
                        item: e
                    })
                },
                f = async () => {
                    n.default.dispatch({
                        type: "COLLECTIBLES_CATEGORIES_FETCH"
                    });
                    try {
                        let e = await a.default.get(c.Endpoints.COLLECTIBLES_CATEGORIES);
                        n.default.dispatch({
                            type: "COLLECTIBLES_CATEGORIES_FETCH_SUCCESS",
                            categories: e.body.map(u.default.fromServer)
                        })
                    } catch (e) {
                        throw n.default.dispatch({
                            type: "COLLECTIBLES_CATEGORIES_FETCH_FAILURE",
                            error: e
                        }), new i.APIError(e)
                    }
                }, C = async () => {
                    n.default.dispatch({
                        type: "COLLECTIBLES_PURCHASES_FETCH"
                    });
                    try {
                        let e = await a.default.get(c.Endpoints.COLLECTIBLES_PURCHASES);
                        n.default.dispatch({
                            type: "COLLECTIBLES_PURCHASES_FETCH_SUCCESS",
                            purchases: e.body.map(o.default.fromServer)
                        })
                    } catch (e) {
                        throw n.default.dispatch({
                            type: "COLLECTIBLES_PURCHASES_FETCH_FAILURE",
                            error: e
                        }), new i.APIError(e)
                    }
                }, I = async e => {
                    n.default.dispatch({
                        type: "COLLECTIBLES_PRODUCT_FETCH"
                    });
                    try {
                        let t = await a.default.get(c.Endpoints.COLLECTIBLES_PRODUCTS(e));
                        n.default.dispatch({
                            type: "COLLECTIBLES_PRODUCT_FETCH_SUCCESS",
                            product: l.default.fromServer(t.body)
                        })
                    } catch (e) {
                        throw n.default.dispatch({
                            type: "COLLECTIBLES_PRODUCT_FETCH_FAILURE",
                            error: e
                        }), new i.APIError(e)
                    }
                }, A = async e => {
                    n.default.dispatch({
                        type: "COLLECTIBLES_CLAIM",
                        skuId: e
                    });
                    try {
                        var t;
                        let r = await a.default.put({
                            url: c.Endpoints.COLLECTIBLES_CLAIM,
                            body: {
                                sku_id: e
                            }
                        });
                        n.default.dispatch({
                            type: "COLLECTIBLES_CLAIM_SUCCESS",
                            skuId: e,
                            purchases: null === (t = r.body) || void 0 === t ? void 0 : t.map(o.default.fromServer)
                        })
                    } catch (t) {
                        throw n.default.dispatch({
                            type: "COLLECTIBLES_CLAIM_FAILURE",
                            skuId: e,
                            error: t
                        }), new i.APIError(t)
                    }
                }, S = async (e, t) => {
                    try {
                        let r = await a.default.get({
                            url: c.Endpoints.COLLECTIBLES_VALID_GIFT_RECIPIENT,
                            query: {
                                sku_id: t,
                                recipient_id: e
                            }
                        });
                        return r.body.valid
                    } catch (e) {
                        throw new i.APIError(e)
                    }
                }, p = e => {
                    n.default.dispatch({
                        type: "COLLECTIBLES_CATEGORY_ITEMS_VIEWED",
                        ...e
                    })
                }
        },
        426497: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return _
                }
            }), r("808653");
            var a = r("635058"),
                n = r("265586"),
                s = r("446674"),
                i = r("913144"),
                u = r("853987");
            let l = new Date(2023, 8, 25),
                o = new Date(2023, 9, 5),
                c = () => ({
                    categoryItemViews: {
                        [a.CollectiblesCategorySkuId.FANTASY]: {
                            [n.CollectiblesItemType.AVATAR_DECORATION]: l,
                            [n.CollectiblesItemType.PROFILE_EFFECT]: o
                        },
                        [a.CollectiblesCategorySkuId.ANIME]: {
                            [n.CollectiblesItemType.AVATAR_DECORATION]: l,
                            [n.CollectiblesItemType.PROFILE_EFFECT]: o
                        },
                        [a.CollectiblesCategorySkuId.BREAKFAST]: {
                            [n.CollectiblesItemType.AVATAR_DECORATION]: l,
                            [n.CollectiblesItemType.PROFILE_EFFECT]: o
                        },
                        [a.CollectiblesCategorySkuId.DISXCORE]: {
                            [n.CollectiblesItemType.AVATAR_DECORATION]: l
                        }
                    }
                }),
                d = c();
            class E extends s.default.PersistedStore {
                initialize(e) {
                    null != e && (d = e)
                }
                getState() {
                    return d
                }
                isItemViewed(e) {
                    var t, r;
                    let a = null === (t = u.default.getProduct(e.skuId)) || void 0 === t ? void 0 : t.categorySkuId;
                    return null != a && (null === (r = d.categoryItemViews[a]) || void 0 === r ? void 0 : r[e.type]) != null
                }
                reset() {
                    d = c()
                }
            }
            E.displayName = "CollectiblesPersistedStore", E.persistKey = "CollectiblesPersistedStoreV2";
            var _ = new E(i.default, {
                COLLECTIBLES_CATEGORY_ITEMS_VIEWED: e => {
                    let {
                        categories: t,
                        itemTypes: r
                    } = e, a = new Date;
                    return t.reduce((e, t) => {
                        let {
                            skuId: n
                        } = t, s = r.reduce((e, t) => {
                            var r;
                            return (null === (r = d.categoryItemViews[n]) || void 0 === r ? void 0 : r[t]) != null ? e : (null == d.categoryItemViews[n] && (d.categoryItemViews[n] = {}), d.categoryItemViews[n][t] = a, !0)
                        }, !1);
                        return e || s
                    }, !1)
                }
            })
        },
        775416: function(e, t, r) {
            "use strict";
            let a, n, s;
            r.r(t), r.d(t, {
                default: function() {
                    return _
                }
            }), r("222007");
            var i = r("917351"),
                u = r("446674"),
                l = r("913144");
            let o = new Map,
                c = o,
                d = !1;
            class E extends u.default.Store {
                get isFetching() {
                    return d
                }
                get isClaiming() {
                    return a
                }
                get purchases() {
                    return c
                }
                get fetchError() {
                    return n
                }
                get claimError() {
                    return s
                }
                getPurchase(e) {
                    return null != e ? c.get(e) : void 0
                }
            }
            E.displayName = "CollectiblesPurchaseStore";
            var _ = new E(l.default, {
                COLLECTIBLES_PURCHASES_FETCH: e => {
                    d = !0, n = void 0
                },
                COLLECTIBLES_PURCHASES_FETCH_SUCCESS: e => {
                    0 === e.purchases.length ? c = o : !(0, i.isEqual)([...c.values()], e.purchases) && (c = new Map(e.purchases.map(e => [e.skuId, e]))), d = !1, n = void 0
                },
                COLLECTIBLES_PURCHASES_FETCH_FAILURE: e => {
                    let {
                        error: t
                    } = e;
                    c = o, d = !1, n = t
                },
                COLLECTIBLES_CLAIM: e => {
                    a = e.skuId, s = void 0
                },
                COLLECTIBLES_CLAIM_SUCCESS: e => {
                    null == e.purchases || 0 === e.purchases.length ? c = o : !(0, i.isEqual)([...c.values()], e.purchases) && (c = new Map(e.purchases.map(e => [e.skuId, e]))), a = void 0, s = void 0
                },
                COLLECTIBLES_CLAIM_FAILURE: e => {
                    let {
                        error: t,
                        skuId: r
                    } = e;
                    a = r, s = t
                },
                LOGOUT: e => {
                    c = o, d = !1, a = void 0, n = void 0, s = void 0
                }
            })
        },
        216719: function(e, t, r) {
            "use strict";
            let a;
            r.r(t), r.d(t, {
                default: function() {
                    return d
                }
            });
            var n = r("446674"),
                s = r("913144");
            let i = [],
                u = i,
                l = null,
                o = e => {
                    u = i, l = null
                };
            class c extends n.default.Store {
                get analyticsLocations() {
                    return u
                }
                get analyticsSource() {
                    return l
                }
                get initialProductSkuId() {
                    return a
                }
                getAnalytics() {
                    return {
                        analyticsLocations: u,
                        analyticsSource: l
                    }
                }
            }
            c.displayName = "CollectiblesShopStore";
            var d = new c(s.default, {
                COLLECTIBLES_SHOP_OPEN: e => {
                    var t, r;
                    u = null !== (t = e.analyticsLocations) && void 0 !== t ? t : i, l = null !== (r = e.analyticsSource) && void 0 !== r ? r : null, a = e.initialProductSkuId
                },
                COLLECTIBLES_SHOP_CLOSE: o,
                COLLECTIBLES_PRODUCT_DETAILS_OPEN: e => {
                    e.item.skuId === a && (a = void 0)
                },
                LOGOUT: o
            })
        },
        514296: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return a
                }
            }), r("808653"), r("424973");
            var a, n = r("407788"),
                s = r("792382");
            a = class e extends s.default {
                static fromServer(t) {
                    let {
                        products: r,
                        logo: a,
                        ...s
                    } = t;
                    return new e({
                        ...super.fromServer(s),
                        products: r.reduce((e, t) => {
                            let r = n.default.fromServer(t);
                            return 0 === r.items.length ? e : (e.push(r), e)
                        }, []),
                        logo: a
                    })
                }
                constructor(e) {
                    super(e), this.products = e.products, this.logo = e.logo
                }
            }
        },
        407788: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return a
                }
            }), r("808653"), r("794252"), r("424973");
            var a, n = r("506838"),
                s = r("265586"),
                i = r("797647"),
                u = r("730297"),
                l = r("792382"),
                o = r("806410");
            a = class e extends l.default {
                static fromServer(t) {
                    var r;
                    let {
                        currency: a,
                        price: l,
                        prices: c,
                        type: d,
                        category_sku_id: E,
                        ..._
                    } = t;
                    return new e({
                        ...super.fromServer(_),
                        currency: a,
                        price: l,
                        prices: null == (r = c) ? {} : Object.keys(r).reduce((e, t) => {
                            if (null == r) return e;
                            let a = r[t];
                            return e[t] = {
                                countryPrices: {
                                    countryCode: a.country_prices.country_code,
                                    prices: a.country_prices.prices.map(e => (0, i.getPriceFromServer)(e, !0))
                                },
                                paymentSourcePrices: {}
                            }, e
                        }, {}),
                        type: d,
                        categorySkuId: E,
                        items: _.items.reduce((e, t) => (0, n.match)(t).with({
                            type: s.CollectiblesItemType.AVATAR_DECORATION
                        }, t => (e.push(u.default.fromServer(t)), e)).with({
                            type: s.CollectiblesItemType.PROFILE_EFFECT
                        }, t => (e.push(o.default.fromServer(t)), e)).otherwise(() => e), [])
                    })
                }
                constructor(e) {
                    super(e), this.currency = e.currency, this.price = e.price, this.prices = e.prices, this.summary = e.summary, this.type = e.type, this.items = e.items, this.categorySkuId = e.categorySkuId
                }
            }
        },
        489134: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return a
                }
            });
            var a, n = r("407788");
            a = class e extends n.default {
                static fromServer(t) {
                    let {
                        purchased_at: r,
                        purchase_type: a,
                        ...n
                    } = t;
                    return new e({
                        ...super.fromServer(n),
                        purchaseType: a,
                        purchasedAt: null != r ? new Date(r) : r
                    })
                }
                constructor(e) {
                    super(e), this.purchasedAt = e.purchasedAt, this.purchaseType = e.purchaseType
                }
            }
        },
        792382: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return a
                }
            });
            var a, n = r("666038");
            a = class e extends n.default {
                static fromServer(t) {
                    let {
                        store_listing_id: r,
                        sku_id: a,
                        unpublished_at: n,
                        ...s
                    } = t, i = null != n ? new Date(n) : null;
                    return new e({
                        ...s,
                        storeListingId: r,
                        skuId: a,
                        unpublishedAt: i
                    })
                }
                constructor(e) {
                    super(), this.storeListingId = e.storeListingId, this.skuId = e.skuId, this.name = e.name, this.summary = e.summary, this.banner = e.banner, this.unpublishedAt = e.unpublishedAt
                }
            }
        },
        716120: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return _
                }
            });
            var a = r("37983");
            r("884691");
            var n = r("414456"),
                s = r.n(n),
                i = r("65597"),
                u = r("854588"),
                l = r("206230"),
                o = r("284679"),
                c = r("491232"),
                d = r("408381"),
                E = r("268779"),
                _ = e => {
                    let {
                        asset: t,
                        size: r = d.MAX_CONTENT_WIDTH,
                        className: n,
                        style: _,
                        children: f
                    } = e, C = (0, i.default)([l.default], () => l.default.saturation);
                    return (0, a.jsx)("div", {
                        className: s(E.banner, n),
                        style: (() => {
                            if (null == t) return _;
                            let e = (0, c.getCollectiblesAssetURL)(t, {
                                size: r,
                                format: "jpg"
                            });
                            if (1 === C) return {
                                ..._,
                                backgroundImage: "url(".concat(e, ")"),
                                backgroundSize: "cover"
                            };
                            let a = (0, o.hexOpacityToRgba)(u.default.unsafe_rawColors.BLACK_500, 1 - C);
                            return {
                                ..._,
                                backgroundImage: "linear-gradient(".concat(a, ", ").concat(a, "), url(").concat(e, ")"),
                                backgroundBlendMode: "saturation",
                                backgroundSize: "cover"
                            }
                        })(),
                        children: f
                    })
                }
        },
        408381: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                MAX_CONTENT_WIDTH: function() {
                    return n
                },
                getAssetSizeByHeight: function() {
                    return s
                },
                getLogoSize: function() {
                    return i
                },
                getBackgroundGradient: function() {
                    return u
                }
            });
            var a = r("547630");
            let n = 1060,
                s = e => e * (0, a.default)(),
                i = e => 3.8 * e,
                u = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 180,
                        {
                            primary: r,
                            secondary: a
                        } = e;
                    return "linear-gradient(".concat(t, "deg, ").concat(r.toHslString(), ", ").concat(a.toHslString(), ")")
                }
        },
        75015: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                UploadTypes: function() {
                    return s
                },
                EDITING_CONTAINER_WIDTH: function() {
                    return l
                },
                USER_BANNER_MAX_WIDTH: function() {
                    return o
                },
                USER_BANNER_MAX_HEIGHT: function() {
                    return c
                },
                GUILD_BANNER_MAX_WIDTH: function() {
                    return d
                },
                GUILD_BANNER_MAX_HEIGHT: function() {
                    return E
                },
                SCHEDULED_EVENT_IMAGE_MAX_WIDTH: function() {
                    return _
                },
                SCHEDULED_EVENT_IMAGE_MAX_HEIGHT: function() {
                    return f
                },
                HOME_HEADER_MAX_WIDTH: function() {
                    return C
                },
                HOME_HEADER_MAX_HEIGHT: function() {
                    return I
                },
                BANNER_ASPECT_RATIO: function() {
                    return A
                },
                GUILD_BANNER_ASPECT_RATIO: function() {
                    return S
                },
                SCHEDULED_EVENT_IMAGE_ASPECT_RATIO: function() {
                    return p
                },
                HOME_HEADER_ASPECT_RATIO: function() {
                    return h
                },
                MAX_BANNER_OVERLAY_HEIGHT: function() {
                    return m
                },
                MAX_GUILD_BANNER_OVERLAY_HEIGHT: function() {
                    return T
                },
                MAX_SCHEDULED_EVENT_IMAGE_OVERLAY_HEIGHT: function() {
                    return L
                },
                MAX_HOME_HEADER_OVERLAY_HEIGHT: function() {
                    return O
                },
                VIDEO_BACKGROUND_ASPECT_RATIO: function() {
                    return v
                },
                MAX_VIDEO_OVERLAY_HEIGHT: function() {
                    return R
                },
                MessageTypes: function() {
                    return i
                }
            });
            var a, n, s, i, u = r("917219");
            (a = s || (s = {}))[a.AVATAR = 0] = "AVATAR", a[a.BANNER = 1] = "BANNER", a[a.GUILD_BANNER = 2] = "GUILD_BANNER", a[a.VIDEO_BACKGROUND = 3] = "VIDEO_BACKGROUND", a[a.SCHEDULED_EVENT_IMAGE = 4] = "SCHEDULED_EVENT_IMAGE", a[a.HOME_HEADER = 5] = "HOME_HEADER", a[a.AVATAR_DECORATION = 6] = "AVATAR_DECORATION";
            let l = 568,
                o = 2400,
                c = 848,
                d = 2400,
                E = 1350,
                _ = 2400,
                f = 960,
                C = 2400,
                I = 600,
                A = 17 / 6,
                S = 16 / 9,
                p = 2.5,
                h = 4,
                m = l / A,
                T = l / S,
                L = l / p,
                O = l / h,
                v = u.BACKGROUND_REPLACEMENT_SIZE.width / u.BACKGROUND_REPLACEMENT_SIZE.height,
                R = l / v;
            (n = i || (i = {}))[n.CROP_GIF_START = 0] = "CROP_GIF_START", n[n.CROP_GIF_COMPLETE = 1] = "CROP_GIF_COMPLETE", n[n.CROP_GIF_ERROR = 2] = "CROP_GIF_ERROR"
        },
        719347: function(e, t, r) {
            "use strict";
            var a, n;
            r.r(t), r.d(t, {
                MEDIA_MOSAIC_MAX_WIDTH: function() {
                    return s
                },
                MEDIA_MOSAIC_MAX_HEIGHT: function() {
                    return i
                },
                MINIMUM_MEDIA_MOSAIC_DIM: function() {
                    return u
                },
                MediaLayoutType: function() {
                    return a
                },
                SINGLE_LINE_MESSAGE_DEFAULT_ICON_SIZE: function() {
                    return l
                }
            });
            let s = 550,
                i = 350,
                u = 40;
            (n = a || (a = {})).STATIC = "STATIC", n.RESPONSIVE = "RESPONSIVE", n.MOSAIC = "MOSAIC";
            let l = 20
        }
    }
]);