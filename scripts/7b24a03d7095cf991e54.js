(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["19252"], {
        489847: function(e, t, o) {
            "use strict";
            e.exports = o.p + "ab3468632852f3725893.png"
        },
        330825: function(e, t, o) {
            "use strict";
            e.exports = o.p + "79903b7cc64eb6d55aa8.png"
        },
        165057: function(e, t, o) {
            "use strict";
            e.exports = o.p + "50eb2aa99e75c1b8630a.png"
        },
        94646: function(e, t, o) {
            "use strict";
            e.exports = o.p + "c5c556a5e9be016ffb2d.png"
        },
        286642: function(e, t, o) {
            "use strict";
            e.exports = o.p + "a3edb1330403965aa3f6.png"
        },
        655029: function(e, t, o) {
            "use strict";
            e.exports = o.p + "6fac2c0e5ed90d06b3b9.png"
        },
        740683: function(e, t, o) {
            "use strict";
            e.exports = o.p + "7b9383fd24920a3a95b7.png"
        },
        714293: function(e, t, o) {
            "use strict";
            e.exports = o.p + "295744c4b4e7cb95b539.png"
        },
        861485: function(e, t, o) {
            "use strict";
            e.exports = o.p + "16abeb1745235d8aea66.png"
        },
        638538: function(e, t, o) {
            "use strict";
            e.exports = o.p + "ac20c9a7b69e25e9d680.png"
        },
        125221: function(e, t, o) {
            "use strict";
            e.exports = o.p + "8ffd6f59392e09ba0fe4.png"
        },
        770704: function(e, t, o) {
            "use strict";
            e.exports = o.p + "81aef01431a5e1293160.png"
        },
        597704: function(e, t, o) {
            "use strict";
            e.exports = o.p + "7bb17dc88ff31be285a8.png"
        },
        290216: function(e, t, o) {
            "use strict";
            e.exports = o.p + "1616ba0a324e68a4fff7.png"
        },
        923702: function(e, t, o) {
            "use strict";
            o.r(t), o.d(t, {
                default: function() {
                    return s
                }
            }), o("222007");
            var r = o("37983"),
                n = o("884691"),
                a = o("516555"),
                l = o("172858"),
                s = function(e) {
                    let {
                        confettiTarget: t,
                        confettiCanvas: o,
                        sprites: s,
                        colors: i
                    } = e, [u, c] = n.useState(null), d = (0, a.useConfettiCannon)(o, u), [C, f] = n.useState(!1);
                    return n.useEffect(() => {
                        let e = Array(10).fill(0);
                        return null != t && d.isReady && !C && (e = e.map((o, r) => setTimeout(() => {
                            var o;
                            r === e.length - 1 && f(!0), d.createMultipleConfetti((o = t.getBoundingClientRect(), {
                                ...l.COMMON_CONFETTI_BASE_CONFIG,
                                position: {
                                    type: "static-random",
                                    minValue: {
                                        x: o.x,
                                        y: o.y
                                    },
                                    maxValue: {
                                        x: o.x + o.width,
                                        y: o.y + o.height / 2
                                    }
                                },
                                velocity: {
                                    type: "static-random",
                                    minValue: {
                                        x: -100,
                                        y: -50
                                    },
                                    maxValue: {
                                        x: 100,
                                        y: -300
                                    }
                                },
                                dragCoefficient: {
                                    type: "static",
                                    value: 1e-4
                                }
                            }), 50)
                        }, 100 * r))), () => {
                            for (let t of e) clearTimeout(t)
                        }
                    }, [d, t, C]), (0, r.jsx)(a.SpriteCanvas, {
                        ref: c,
                        sprites: null != s ? s : l.COMMON_CONFETTI_SPRITES,
                        colors: null != i ? i : l.COMMON_CONFETTI_COLORS,
                        spriteWidth: l.COMMON_CONFETTI_MAX_SPRITE_SIZE,
                        spriteHeight: l.COMMON_CONFETTI_MAX_SPRITE_SIZE
                    })
                }
        },
        716120: function(e, t, o) {
            "use strict";
            o.r(t), o.d(t, {
                default: function() {
                    return f
                }
            });
            var r = o("37983");
            o("884691");
            var n = o("414456"),
                a = o.n(n),
                l = o("65597"),
                s = o("854588"),
                i = o("206230"),
                u = o("284679"),
                c = o("491232"),
                d = o("408381"),
                C = o("268779"),
                f = e => {
                    let {
                        asset: t,
                        size: o = d.MAX_CONTENT_WIDTH,
                        className: n,
                        style: f,
                        children: E
                    } = e, p = (0, l.default)([i.default], () => i.default.saturation);
                    return (0, r.jsx)("div", {
                        className: a(C.banner, n),
                        style: (() => {
                            if (null == t) return f;
                            let e = (0, c.getCollectiblesAssetURL)(t, {
                                size: o,
                                format: "jpg"
                            });
                            if (1 === p) return {
                                ...f,
                                backgroundImage: "url(".concat(e, ")"),
                                backgroundSize: "cover"
                            };
                            let r = (0, u.hexOpacityToRgba)(s.default.unsafe_rawColors.BLACK_500, 1 - p);
                            return {
                                ...f,
                                backgroundImage: "linear-gradient(".concat(r, ", ").concat(r, "), url(").concat(e, ")"),
                                backgroundBlendMode: "saturation",
                                backgroundSize: "cover"
                            }
                        })(),
                        children: E
                    })
                }
        },
        658756: function(e, t, o) {
            "use strict";
            o.r(t), o.d(t, {
                CollectiblesCollectedModalInner: function() {
                    return h
                },
                default: function() {
                    return L
                }
            }), o("222007");
            var r = o("37983"),
                n = o("884691"),
                a = o("414456"),
                l = o.n(a),
                s = o("516555"),
                i = o("627445"),
                u = o.n(i),
                c = o("65597"),
                d = o("77078"),
                C = o("265586"),
                f = o("54239"),
                E = o("206230"),
                p = o("812204"),
                g = o("685665"),
                F = o("606292"),
                b = o("688318"),
                T = o("38766"),
                S = o("601095"),
                I = o("493390"),
                A = o("697218"),
                _ = o("923702"),
                O = o("716120"),
                v = o("408381"),
                m = o("57940"),
                x = o("782340"),
                y = o("99242"),
                N = o("53708");
            let h = e => {
                let {
                    product: t,
                    onClose: o,
                    confettiTarget: a,
                    confettiCanvas: s,
                    analyticsLocations: i
                } = e, {
                    confettiColors: h,
                    confettiSprites: L,
                    backgroundColors: B,
                    buttonColors: R
                } = (0, m.default)(t.categorySkuId), D = null != R ? {
                    background: (0, v.getBackgroundGradient)(R, 90),
                    color: R.text.toHslString()
                } : void 0, k = null != B ? {
                    background: (0, v.getBackgroundGradient)(B, 135)
                } : {
                    backgroundColor: "var(--modal-background)"
                }, M = (0, c.default)([A.default], () => {
                    let e = A.default.getCurrentUser();
                    return u(null != e, "User cannot be undefined"), e
                }), j = (0, c.default)([E.default], () => E.default.useReducedMotion), [P] = t.items, {
                    avatarDecorationSrc: w
                } = (0, b.default)({
                    user: M,
                    avatarDecorationOverride: (null == P ? void 0 : P.type) === C.CollectiblesItemType.AVATAR_DECORATION ? P : null,
                    size: (0, F.getDecorationSizeForAvatarSize)(d.AvatarSizes.SIZE_120)
                }), H = n.useRef(null), {
                    analyticsLocations: z,
                    AnalyticsLocationProvider: U
                } = (0, g.default)([...i, p.default.COLLECTIBLES_COLLECTED_MODAL]), V = (0, T.default)({
                    analyticsLocations: z
                });
                return (0, r.jsxs)(U, {
                    children: [(0, r.jsxs)("div", {
                        className: y.modalInner,
                        ref: H,
                        style: k,
                        children: [(0, r.jsxs)("div", {
                            className: l(y.bannerContainer, {
                                [y.bannerBackgroundFallback]: null == B
                            }),
                            children: [(0, r.jsx)(O.default, {
                                asset: t.banner,
                                size: (0, v.getAssetSizeByHeight)(440),
                                className: y.decorationBanner
                            }), (null == P ? void 0 : P.type) === C.CollectiblesItemType.AVATAR_DECORATION && (0, r.jsx)(d.Avatar, {
                                size: d.AvatarSizes.SIZE_120,
                                src: N,
                                avatarDecoration: w,
                                className: y.avatarDecoration,
                                "aria-label": t.name
                            }), (null == P ? void 0 : P.type) === C.CollectiblesItemType.PROFILE_EFFECT && (0, r.jsx)("div", {
                                className: y.profileEffectShopPreview,
                                children: (0, r.jsx)(S.default, {
                                    forCollectedModal: !0,
                                    profileEffectId: P.id
                                })
                            })]
                        }), (0, r.jsxs)("div", {
                            className: l(y.collectedInfoContainer, {
                                [y.default]: null == B
                            }),
                            children: [(0, r.jsxs)("div", {
                                className: y.collectedTextContainer,
                                children: [(0, r.jsx)(d.Heading, {
                                    variant: "heading-lg/bold",
                                    color: "always-white",
                                    children: x.default.Messages.COLLECTIBLES_YOU_COLLECTED.format({
                                        itemName: t.name
                                    })
                                }), (0, r.jsx)(d.Text, {
                                    color: "always-white",
                                    variant: "text-sm/normal",
                                    children: (null == P ? void 0 : P.type) === C.CollectiblesItemType.PROFILE_EFFECT ? x.default.Messages.COLLECTIBLES_PROFILE_EFFECT_PERMANENT_COLLECTION : x.default.Messages.COLLECTIBLES_PERMANENT_COLLECTION
                                })]
                            }), (0, r.jsx)(d.Button, {
                                onClick: () => {
                                    if (o(), (0, f.popLayer)(), V(), (null == P ? void 0 : P.type) === C.CollectiblesItemType.AVATAR_DECORATION) {
                                        (0, F.openAvatarDecorationModal)({
                                            initialSelectedDecoration: P,
                                            analyticsLocations: z
                                        });
                                        return
                                    }(null == P ? void 0 : P.type) === C.CollectiblesItemType.PROFILE_EFFECT && (0, I.openProfileEffectModal)({
                                        initialSelectedEffectId: P.id,
                                        analyticsLocations: z
                                    })
                                },
                                style: D,
                                children: x.default.Messages.COLLECTIBLES_USE_NOW
                            })]
                        }), (0, r.jsx)(d.ModalCloseButton, {
                            onClick: o,
                            className: y.modalCloseButton,
                            withCircleBackground: !0
                        })]
                    }), !j && (0, r.jsx)(_.default, {
                        confettiTarget: null != a ? a : H.current,
                        confettiCanvas: s,
                        sprites: null != L ? L : m.DEFAULT_CONFETTI_SPRITES,
                        colors: null != h ? h : m.DEFAULT_CONFETTI_COLORS
                    })]
                })
            };
            var L = e => {
                let {
                    transitionState: t,
                    product: o,
                    onClose: a,
                    analyticsLocations: l
                } = e, i = n.useRef(new s.Environment), [u, c] = n.useState(null);
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(s.ConfettiCanvas, {
                        ref: c,
                        className: y.confettiCanvas,
                        environment: i.current
                    }), (0, r.jsx)(d.ModalRoot, {
                        hideShadow: !0,
                        transitionState: t,
                        size: d.ModalSize.DYNAMIC,
                        className: y.modalRoot,
                        children: (0, r.jsx)(d.ModalContent, {
                            className: y.modalContent,
                            children: (0, r.jsx)(h, {
                                product: o,
                                onClose: a,
                                confettiCanvas: u,
                                analyticsLocations: l
                            })
                        })
                    })]
                })
            }
        },
        408381: function(e, t, o) {
            "use strict";
            o.r(t), o.d(t, {
                MAX_CONTENT_WIDTH: function() {
                    return n
                },
                getAssetSizeByHeight: function() {
                    return a
                },
                getLogoSize: function() {
                    return l
                },
                getBackgroundGradient: function() {
                    return s
                }
            });
            var r = o("547630");
            let n = 1060,
                a = e => e * (0, r.default)(),
                l = e => 3.8 * e,
                s = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 180,
                        {
                            primary: o,
                            secondary: r
                        } = e;
                    return "linear-gradient(".concat(t, "deg, ").concat(o.toHslString(), ", ").concat(r.toHslString(), ")")
                }
        },
        57940: function(e, t, o) {
            "use strict";
            o.r(t), o.d(t, {
                DEFAULT_CONFETTI_SPRITES: function() {
                    return d
                },
                DEFAULT_CONFETTI_COLORS: function() {
                    return C
                },
                default: function() {
                    return S
                }
            }), o("222007");
            var r = o("656280"),
                n = o.n(r),
                a = o("635058"),
                l = o("65597"),
                s = o("669491"),
                i = o("206230"),
                u = o("388491"),
                c = o("172858");
            let d = c.COMMON_CONFETTI_SPRITES.filter((e, t) => 1 !== t && 7 !== t),
                C = ["#F53273", "#9595FF", "#A7FA4E", "#331EAF"],
                f = n(s.default.unsafe_rawColors.WHITE_500.resolve({
                    saturation: 1
                }).hex()),
                E = n(s.default.unsafe_rawColors.BLACK_500.resolve({
                    saturation: 1
                }).hex()),
                p = (e, t) => {
                    let o = e.toRgb(),
                        r = t.toRgb(),
                        [a, l, s] = (0, u.getValueInColorGradientByPercentage)([o.r, o.g, o.b], [r.r, r.g, r.b], 50);
                    return n({
                        r: a,
                        g: l,
                        b: s
                    })
                },
                g = (e, t) => {
                    let o = n(e),
                        r = n(t),
                        a = p(o, r);
                    return {
                        primary: o,
                        secondary: r,
                        border: a.setAlpha(.4)
                    }
                },
                F = (e, t) => {
                    let o = n(e),
                        r = n(t),
                        a = p(o, r);
                    return {
                        primary: o,
                        secondary: r,
                        text: n(a.isLight() ? E : f)
                    }
                },
                b = (e, t) => {
                    let {
                        h: o,
                        s: r,
                        l: a
                    } = e.toHsl();
                    return n({
                        h: o,
                        s: r * t,
                        l: a
                    })
                },
                T = {
                    [a.CollectiblesCategorySkuId.FANTASY]: {
                        backgroundColors: g("#146144", "#021A0E"),
                        buttonColors: F("#028737", "#00694A"),
                        confettiSprites: [o("655029"), o("290216")],
                        confettiColors: ["#EFA7F7", "#B646C1", "#56B3B3", "#1A8199", "#7160AF", "#AEC7FF"]
                    },
                    [a.CollectiblesCategorySkuId.ANIME]: {
                        backgroundColors: g("#4B79B0", "#0F0E3A"),
                        buttonColors: F("#8A45C1", "#136897"),
                        confettiSprites: [o("597704"), o("714293")],
                        confettiColors: ["#2C9BD9", "#E46A80", "#FFE500", "#BBA8D5", "#3EDDD3", "#E2B761"]
                    },
                    [a.CollectiblesCategorySkuId.BREAKFAST]: {
                        backgroundColors: g("#E8B26B", "#7A3A00"),
                        buttonColors: F("#FFC355", "#FF9537"),
                        confettiSprites: [o("286642"), o("94646")],
                        confettiColors: ["#DD9C98", "#FFC037", "#FF6B00", "#FDE081", "#DD923E", "#FFEECC"]
                    },
                    [a.CollectiblesCategorySkuId.DISXCORE]: {
                        backgroundColors: g("#732565", "#111D40"),
                        buttonColors: F(s.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS.resolve({
                            saturation: 1
                        }).hex(), s.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS_2.resolve({
                            saturation: 1
                        }).hex()),
                        confettiSprites: d,
                        confettiColors: C
                    },
                    [a.CollectiblesCategorySkuId.HALLOWEEN]: {
                        backgroundColors: g("#5280DC", "#060F25"),
                        buttonColors: F("#496BDB", "#3E41B5"),
                        confettiSprites: [o("638538"), o("861485")],
                        confettiColors: ["#EE5619", "#FDBE44", "#42D612", "#DC0DDE", "#8A0AE5"]
                    },
                    [a.CollectiblesCategorySkuId.FALL]: {
                        backgroundColors: g("#FFC267", "#6C1A00"),
                        buttonColors: F("#F5A142", "#E4760E"),
                        confettiSprites: [o("740683"), o("489847")],
                        confettiColors: ["#FF7138", "#92360C", "#F6A334", "#FFC586", "#FF8A00"]
                    },
                    [a.CollectiblesCategorySkuId.WINTER]: {
                        backgroundColors: g("#467FFF", "#154ECF"),
                        buttonColors: F("#44C7FF", "#009DFF"),
                        confettiSprites: [o("770704"), o("165057")],
                        confettiColors: ["#3DC3FF", "#297AFF", "#FD8BFF", "#FF3BF5"]
                    },
                    [a.CollectiblesCategorySkuId.MONSTERS]: {
                        backgroundColors: g("#00475E", "#002B39"),
                        buttonColors: F("#00E6B2", "#009B7C"),
                        confettiSprites: [o("330825"), o("125221")],
                        confettiColors: ["#00C49A", "#F8B531", "#F24E7E", "#64CC6F", "#BB5CF0"]
                    }
                };
            var S = e => {
                let t = (0, l.default)([i.default], () => i.default.saturation);
                if (null == e) return {};
                let o = T[e];
                return (null == o ? void 0 : o.backgroundColors) == null || 1 === t ? null != o ? o : {} : {
                    ...o,
                    backgroundColors: {
                        primary: b(o.backgroundColors.primary, t),
                        secondary: b(o.backgroundColors.secondary, t),
                        border: b(o.backgroundColors.border, t)
                    },
                    buttonColors: {
                        primary: b(o.buttonColors.primary, t),
                        secondary: b(o.buttonColors.secondary, t),
                        text: o.buttonColors.text
                    },
                    confettiColors: o.confettiColors.map(e => b(n(e), t).toHexString())
                }
            }
        },
        601095: function(e, t, o) {
            "use strict";
            o.r(t), o.d(t, {
                default: function() {
                    return d
                }
            }), o("222007");
            var r = o("37983"),
                n = o("884691"),
                a = o("414456"),
                l = o.n(a),
                s = o("859498"),
                i = o("635471"),
                u = o("825054"),
                c = o("93902"),
                d = e => {
                    let {
                        profileEffectId: t,
                        isHovering: o,
                        forCollectedModal: a = !1,
                        isPurchased: d,
                        removeSetHeight: C = !1
                    } = e, f = a ? 250 : .1, [E, p] = n.useState(!0);
                    return (n.useEffect(() => {
                        if (!0 !== a) p(!1);
                        else {
                            let e = setTimeout(() => {
                                p(!1)
                            }, f);
                            return () => {
                                clearTimeout(e)
                            }
                        }
                    }, [f, a]), null != t) ? (0, r.jsxs)("div", {
                        className: l(u.previewContainer, {
                            [u.previewContainerAnimation]: a,
                            [u.previewContainerSetHeight]: !C
                        }),
                        children: [(0, r.jsx)("img", {
                            src: c,
                            alt: " ",
                            className: a ? u.previewForCollected : u.preview,
                            "aria-hidden": !0
                        }), !E && (0, r.jsx)("div", {
                            className: d ? u.purchasedEffect : void 0,
                            children: (0, r.jsx)(i.default, {
                                profileEffectId: t,
                                useThumbnail: !0,
                                autoPlay: a,
                                restartMethod: s.RestartMethod.FromStart,
                                resetOnHover: !0,
                                isHovering: o,
                                introDelay: f,
                                useOpacityOnHover: !1
                            })
                        })]
                    }) : null
                }
        }
    }
]);