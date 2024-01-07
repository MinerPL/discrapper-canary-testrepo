(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["31611"], {
        304580: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return v
                }
            });
            var s, i, l = n("37983");
            n("884691");
            var r = n("414456"),
                o = n.n(r),
                a = n("394846"),
                u = n("77078"),
                c = n("945330"),
                d = n("381546"),
                f = n("782340"),
                h = n("955892");
            (s = i || (i = {})).DEFAULT = "", s.BOLD = "Bold", s.SOLID = "Solid";
            let p = e => {
                let {
                    closeAction: t,
                    variant: n,
                    keybind: s,
                    className: i
                } = e;
                return (0, l.jsxs)("div", {
                    className: o(h.container, i),
                    children: [(0, l.jsx)(u.Clickable, {
                        className: o(h.closeButton, {
                            [h.closeButtonBold]: "Bold" === n,
                            [h.closeButtonSolid]: "Solid" === n
                        }),
                        onClick: t,
                        "aria-label": f.default.Messages.CLOSE,
                        children: "Solid" === n ? (0, l.jsx)(d.default, {
                            width: 24,
                            height: 24,
                            "aria-hidden": !0
                        }) : (0, l.jsx)(c.default, {
                            width: 18,
                            height: 18,
                            "aria-hidden": !0
                        })
                    }), a.isMobile ? null : (0, l.jsx)("div", {
                        className: o(h.keybind),
                        "aria-hidden": !0,
                        children: s
                    })]
                })
            };
            p.defaultProps = {
                variant: ""
            }, p.Variants = i;
            var v = p
        },
        366634: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var s = n("37983");
            n("884691");
            var i = n("414456"),
                l = n.n(i),
                r = n("748820"),
                o = n("291077");
            let a = (0, r.v4)();
            var u = e => {
                let {
                    open: t,
                    className: n,
                    withHighlight: i = !1
                } = e;
                return (0, s.jsxs)("svg", {
                    width: "18",
                    height: "18",
                    className: l(o.button, n, {
                        [o.open]: t,
                        [o.withHighlight]: i
                    }),
                    children: [i && (0, s.jsx)("defs", {
                        children: (0, s.jsxs)("linearGradient", {
                            id: a,
                            x1: "0",
                            y1: "0",
                            x2: "0",
                            y2: "18",
                            gradientUnits: "userSpaceOnUse",
                            children: [(0, s.jsx)("stop", {
                                offset: "0",
                                stopColor: "#B473F5"
                            }), (0, s.jsx)("stop", {
                                offset: "1",
                                stopColor: "#E292AA"
                            })]
                        })
                    }), (0, s.jsxs)("g", {
                        fill: "none",
                        fillRule: "evenodd",
                        children: [(0, s.jsx)("path", {
                            d: "M0 0h18v18H0"
                        }), (0, s.jsx)("path", {
                            stroke: i ? "url(#".concat(a, ")") : "currentColor",
                            d: "M4.5 4.5l9 9",
                            strokeLinecap: "round"
                        }), (0, s.jsx)("path", {
                            stroke: i ? "url(#".concat(a, ")") : "currentColor",
                            d: "M13.5 4.5l-9 9",
                            strokeLinecap: "round"
                        })]
                    })]
                })
            }
        },
        80300: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                backgroundImagePreloader: function() {
                    return c
                }
            }), n("424973");
            var s = n("37983"),
                i = n("884691"),
                l = n("310013"),
                r = n.n(l),
                o = n("407063");
            let a = /url\(['"](.*)['"]\)/,
                u = e => {
                    if (null == e || "" === e || "none" === e) return null;
                    let t = e.match(a);
                    return null != t ? t[1] : e
                };

            function c(e) {
                class t extends i.Component {
                    componentDidUpdate(e, t) {
                        if (t === this.state) return;
                        let {
                            cached: n,
                            loaded: s
                        } = this.state, {
                            style: i
                        } = this.props, l = null != i ? u(i.backgroundImage) : null;
                        null == l && l !== n ? this.setState({
                            loaded: !0,
                            cached: l
                        }) : this.cachedURLs.indexOf(l) >= 0 ? this.setState({
                            loaded: !0,
                            cached: l
                        }) : null != l && l !== n && !0 === s && this.setState({
                            loaded: !1
                        }, () => this.preloadURL(l))
                    }
                    preloadURL(e) {
                        this.canceller && this.canceller(), this.canceller = (0, o.loadImage)(e, t => {
                            this.canceller && (this.canceller = null), !t && (this.cachedURLs.push(e), this.setState({
                                cached: e,
                                loaded: !0
                            }));
                            let {
                                onBackgroundImageLoad: n
                            } = this.props;
                            n && n(t, e)
                        })
                    }
                    componentWillUnmount() {
                        this.canceller && this.canceller(), this.cachedURLs.length = 0
                    }
                    render() {
                        let {
                            style: t,
                            onBackgroundImageLoad: n,
                            ...i
                        } = this.props, {
                            loaded: l,
                            cached: r
                        } = this.state;
                        if (!l && null != t) {
                            var o;
                            t = {
                                ...t,
                                backgroundImage: null == (o = r) || "" === o || "none" === o ? "none" : "url(".concat(o, ")")
                            }
                        }
                        return (0, s.jsx)(e, {
                            style: t,
                            ...i
                        })
                    }
                    constructor(e) {
                        super(e), this.cachedURLs = [], this.canceller = null;
                        let {
                            style: t
                        } = e, n = null != t ? u(t.backgroundImage) : null;
                        this.cachedURLs = [n], this.state = {
                            cached: n,
                            loaded: !0
                        }
                    }
                }
                return r(t, e), t
            }
        },
        505088: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CircleXIcon: function() {
                    return r
                }
            });
            var s = n("37983");
            n("884691");
            var i = n("669491"),
                l = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    secondaryColor: r = "transparent",
                    secondaryColorClass: o = "",
                    color: a = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...c
                } = e;
                return (0, s.jsxs)("svg", {
                    ...(0, l.default)(c),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, s.jsx)("circle", {
                        cx: "12",
                        cy: "12",
                        r: "10",
                        fill: "string" == typeof r ? r : r.css,
                        className: o
                    }), (0, s.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22Zm4.7-15.7a1 1 0 0 0-1.4 0L12 10.58l-3.3-3.3a1 1 0 0 0-1.4 1.42L10.58 12l-3.3 3.3a1 1 0 1 0 1.42 1.4L12 13.42l3.3 3.3a1 1 0 0 0 1.4-1.42L13.42 12l3.3-3.3a1 1 0 0 0 0-1.4Z",
                        clipRule: "evenodd",
                        className: u
                    })]
                })
            }
        },
        109731: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                HomeIcon: function() {
                    return r
                }
            });
            var s = n("37983");
            n("884691");
            var i = n("669491"),
                l = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...a
                } = e;
                return (0, s.jsx)("svg", {
                    ...(0, l.default)(a),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, s.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        d: "m2.4 8.4 8.38-6.46a2 2 0 0 1 2.44 0l8.39 6.45a2 2 0 0 1-.79 3.54l-.32.07-.82 8.2a2 2 0 0 1-1.99 1.8H16a1 1 0 0 1-1-1v-5a3 3 0 0 0-6 0v5a1 1 0 0 1-1 1H6.31a2 2 0 0 1-1.99-1.8L3.5 12l-.32-.07a2 2 0 0 1-.79-3.54Z",
                        className: o
                    })
                })
            }
        },
        424823: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PlusSmallIcon: function() {
                    return r
                }
            });
            var s = n("37983");
            n("884691");
            var i = n("669491"),
                l = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...a
                } = e;
                return (0, s.jsx)("svg", {
                    ...(0, l.default)(a),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, s.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        d: "M13 6a1 1 0 1 0-2 0v5H6a1 1 0 1 0 0 2h5v5a1 1 0 1 0 2 0v-5h5a1 1 0 1 0 0-2h-5V6Z",
                        className: o
                    })
                })
            }
        },
        287083: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                StageIcon: function() {
                    return r
                }
            });
            var s = n("37983");
            n("884691");
            var i = n("669491"),
                l = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...a
                } = e;
                return (0, s.jsxs)("svg", {
                    ...(0, l.default)(a),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, s.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        d: "M19.61 18.25a1.08 1.08 0 0 1-.07-1.33 9 9 0 1 0-15.07 0c.26.42.25.97-.08 1.33l-.02.02c-.41.44-1.12.43-1.46-.07a11 11 0 1 1 18.17 0c-.33.5-1.04.51-1.45.07l-.02-.02Z",
                        className: o
                    }), (0, s.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        d: "M16.83 15.23c.43.47 1.18.42 1.45-.14a7 7 0 1 0-12.57 0c.28.56 1.03.6 1.46.14l.05-.06c.3-.33.35-.81.17-1.23A4.98 4.98 0 0 1 12 7a5 5 0 0 1 4.6 6.94c-.17.42-.13.9.18 1.23l.05.06Z",
                        className: o
                    }), (0, s.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        d: "M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.33 20.03c-.25.72.12 1.5.8 1.84a10.96 10.96 0 0 0 9.73 0 1.52 1.52 0 0 0 .8-1.84 6 6 0 0 0-11.33 0Z",
                        className: o
                    })]
                })
            }
        },
        390300: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                VoiceNormalIcon: function() {
                    return r
                }
            });
            var s = n("37983");
            n("884691");
            var i = n("669491"),
                l = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...a
                } = e;
                return (0, s.jsxs)("svg", {
                    ...(0, l.default)(a),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, s.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        d: "M12 3a1 1 0 0 0-1-1h-.06a1 1 0 0 0-.74.32L5.92 7H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2.92l4.28 4.68a1 1 0 0 0 .74.32H11a1 1 0 0 0 1-1V3ZM15.1 20.75c-.58.14-1.1-.33-1.1-.92v-.03c0-.5.37-.92.85-1.05a7 7 0 0 0 0-13.5A1.11 1.11 0 0 1 14 4.2v-.03c0-.6.52-1.06 1.1-.92a9 9 0 0 1 0 17.5Z",
                        className: o
                    }), (0, s.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        d: "M15.16 16.51c-.57.28-1.16-.2-1.16-.83v-.14c0-.43.28-.8.63-1.02a3 3 0 0 0 0-5.04c-.35-.23-.63-.6-.63-1.02v-.14c0-.63.59-1.1 1.16-.83a5 5 0 0 1 0 9.02Z",
                        className: o
                    })]
                })
            }
        },
        526887: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ConfettiCannonContext: function() {
                    return c
                },
                ConfettiCannonContextProvider: function() {
                    return d
                }
            });
            var s = n("37983"),
                i = n("884691"),
                l = n("516555"),
                r = n("65597"),
                o = n("206230"),
                a = n("49111");
            let u = {
                    confettiCanvas: null,
                    cannon: null,
                    createConfetti: () => void 0,
                    createConfettiAt: () => void 0,
                    createMultipleConfetti: () => [],
                    createMultipleConfettiAt: () => [],
                    addClickListener: () => a.NOOP,
                    removeClickListener: a.NOOP
                },
                c = i.createContext(u);

            function d(e) {
                let {
                    children: t,
                    confettiCanvas: n,
                    spriteCanvas: a,
                    baseConfig: d,
                    addClickListener: f,
                    removeClickListener: h
                } = e, p = (0, l.useConfettiCannon)(n, a), v = (0, r.default)([o.default], () => o.default.useReducedMotion), I = i.useMemo(() => v ? u : {
                    confettiCanvas: n,
                    cannon: p,
                    createConfetti: (e, t) => p.createConfetti({
                        ...d,
                        ...e
                    }, t),
                    createConfettiAt: (e, t, n, s) => p.createConfetti({
                        ...d,
                        position: {
                            type: "static",
                            value: {
                                x: e,
                                y: t
                            }
                        },
                        ...n
                    }, s),
                    createMultipleConfetti: function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20,
                            n = arguments.length > 2 ? arguments[2] : void 0;
                        return p.createMultipleConfetti({
                            ...d,
                            ...e
                        }, t, n)
                    },
                    createMultipleConfettiAt: function(e, t, n) {
                        let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 20,
                            i = arguments.length > 4 ? arguments[4] : void 0;
                        return p.createMultipleConfetti({
                            ...d,
                            position: {
                                type: "static",
                                value: {
                                    x: e,
                                    y: t
                                }
                            },
                            ...n
                        }, s, i)
                    },
                    addClickListener: f,
                    removeClickListener: h
                }, [f, d, p, n, v, h]);
                return (0, s.jsx)(c.Provider, {
                    value: I,
                    children: t
                })
            }
        },
        863921: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var s = n("37983");
            n("884691");
            var i = n("414456"),
                l = n.n(i),
                r = n("931138"),
                o = n("206453"),
                a = n("49111"),
                u = n("323755");
            let c = {
                    [a.BoostedGuildTiers.NONE]: u.iconBackgroundTierNone,
                    [a.BoostedGuildTiers.TIER_1]: u.iconBackgroundTierOne,
                    [a.BoostedGuildTiers.TIER_2]: u.iconBackgroundTierTwo,
                    [a.BoostedGuildTiers.TIER_3]: u.iconBackgroundTierThree
                },
                d = {
                    [a.BoostedGuildTiers.NONE]: u.iconTierNone,
                    [a.BoostedGuildTiers.TIER_1]: u.iconTierOne,
                    [a.BoostedGuildTiers.TIER_2]: u.iconTierTwo,
                    [a.BoostedGuildTiers.TIER_3]: u.iconTierThree
                };

            function f(e) {
                let {
                    premiumTier: t,
                    iconBackgroundClassName: n,
                    iconClassName: i,
                    size: a
                } = e;
                return (0, s.jsx)(r.default, {
                    className: l(n, c[t]),
                    size: a,
                    children: (0, s.jsx)(o.default, {
                        tier: t,
                        className: l(i, u.boostedGuildIconGem, d[t])
                    })
                })
            }
        },
        836275: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                openGuildBannerUpsellModal: function() {
                    return p
                }
            });
            var s = n("37983");
            n("884691");
            var i = n("77078"),
                l = n("366634"),
                r = n("974755"),
                o = n("427459"),
                a = n("379532"),
                u = n("944305"),
                c = n("49111"),
                d = n("782340"),
                f = n("670362");

            function h(e) {
                let {
                    guild: t,
                    banner: n
                } = e;
                return (0, s.jsx)("div", {
                    className: f.guildBanner,
                    style: {
                        backgroundImage: "url(".concat(n)
                    },
                    children: (0, s.jsxs)("div", {
                        className: f.guildHeader,
                        children: [(0, s.jsx)(r.default, {
                            guild: t,
                            isBannerVisible: !0
                        }), (0, s.jsx)(i.Heading, {
                            className: f.guildName,
                            variant: "heading-md/semibold",
                            children: t.toString()
                        }), (0, s.jsx)(l.default, {
                            className: f.dropdown,
                            open: !1
                        })]
                    })
                })
            }

            function p(e) {
                let {
                    analyticsLocations: t,
                    analyticsLocation: n,
                    guild: i,
                    isGIF: l,
                    banner: r
                } = e, f = l ? (0, o.minimumRequiredTierForGuildFeature)(c.GuildFeatures.ANIMATED_BANNER) : (0, o.minimumRequiredTierForGuildFeature)(c.GuildFeatures.BANNER);
                null != f && (0, a.default)({
                    analyticsLocations: t,
                    analyticsSourceLocation: n,
                    guild: i,
                    headerProps: {
                        title: d.default.Messages.GUILD_BANNER_UPSELL_MODAL_TITLE,
                        subtitle: function(e, t) {
                            let n = (0, o.getTierName)(e);
                            return t ? d.default.Messages.GUILD_BANNER_UPSELL_MODAL_SUBTITLE_ANIMATED.format({
                                targetLevelOrPlan: n
                            }) : d.default.Messages.GUILD_BANNER_UPSELL_MODAL_SUBTITLE_STATIC.format({
                                targetLevelOrPlan: n
                            })
                        }(f, l),
                        image: (0, s.jsx)(h, {
                            guild: i,
                            banner: r
                        })
                    },
                    perkIntro: d.default.Messages.GUILD_BANNER_UPSELL_MODAL_PERK_INTRO,
                    perks: l ? (0, u.animatedGuildBannerUpsellPerks)() : (0, u.guildBannerUpsellPerks)()
                })
            }
        },
        974755: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            });
            var s = n("37983");
            n("884691");
            var i = n("414456"),
                l = n.n(i),
                r = n("446674"),
                o = n("77078"),
                a = n("51565"),
                u = n("95039"),
                c = n("863921"),
                d = n("26989"),
                f = n("697218"),
                h = n("580357"),
                p = n("40469"),
                v = n("427459"),
                I = n("49111"),
                E = n("782340"),
                C = n("129818");

            function _(e) {
                let {
                    guild: t,
                    isBannerVisible: n,
                    disableBoostClick: i
                } = e, l = (0, r.useStateFromStores)([f.default, d.default], () => {
                    let e = f.default.getCurrentUser();
                    return d.default.isMember(t.id, null == e ? void 0 : e.id)
                }), {
                    premiumTier: a,
                    premiumSubscriberCount: h
                } = t;
                if (0 === h && a === I.BoostedGuildTiers.NONE) return null;
                let p = e => {
                        e.stopPropagation(), e.preventDefault(), l && !i && (0, u.openGuildBoostingMarketingModal)({
                            guildId: t.id,
                            location: {
                                section: I.AnalyticsSections.GUILD_HEADER,
                                object: I.AnalyticsObjects.BOOST_GEM_ICON
                            }
                        })
                    },
                    _ = a === I.BoostedGuildTiers.NONE ? E.default.Messages.PREMIUM_GUILD_HEADER_BADGE_NO_TIER : v.getTierName(a),
                    R = (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)("div", {
                            className: C.tierTooltipTitle,
                            children: _
                        }), (0, s.jsx)("div", {
                            children: E.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_SUBSCRIBER_COUNT_TOOLTIP.format({
                                subscriberCount: h
                            })
                        })]
                    });
                return (0, s.jsx)("div", {
                    className: C.guildIconContainer,
                    children: (0, s.jsx)(o.Tooltip, {
                        text: R,
                        position: "bottom",
                        "aria-label": null != _ ? _ : "",
                        children: e => (0, s.jsx)(o.Clickable, {
                            ...e,
                            className: C.premiumGuildIcon,
                            onClick: p,
                            children: (0, s.jsx)(c.default, {
                                premiumTier: a,
                                iconBackgroundClassName: n ? C.boostedGuildTierIconBackgroundWithVisibleBanner : null,
                                iconClassName: n && a !== I.BoostedGuildTiers.TIER_3 ? C.boostedGuildTierMutedIconWithVisibleBanner : null
                            })
                        })
                    })
                })
            }

            function R(e) {
                let {
                    guild: t,
                    disableColor: n,
                    disableBoostClick: i
                } = e, r = (0, a.default)(t);
                return r ? (0, s.jsx)("div", {
                    className: C.guildIconV2Container,
                    children: (0, s.jsx)(p.default, {
                        guild: t,
                        tooltipPosition: "bottom",
                        tooltipColor: o.Tooltip.Colors.PRIMARY,
                        className: l(C.guildBadge, {
                            [C.disableColor]: n
                        }),
                        disableBoostClick: i
                    })
                }) : (0, s.jsx)("div", {
                    className: C.guildIconContainer,
                    children: (0, s.jsx)(h.default, {
                        guild: t,
                        tooltipPosition: "bottom",
                        tooltipColor: o.Tooltip.Colors.PRIMARY,
                        className: l(C.guildBadge, {
                            [C.disableColor]: n
                        })
                    })
                })
            }

            function g(e) {
                let {
                    guild: t,
                    isBannerVisible: n,
                    disableBoostClick: i
                } = e, l = (0, a.default)(t);
                if (l) return (0, s.jsx)(R, {
                    guild: t,
                    disableColor: !1,
                    disableBoostClick: i
                });
                let r = t.hasFeature(I.GuildFeatures.VERIFIED) || t.hasFeature(I.GuildFeatures.PARTNERED);
                return r ? (0, s.jsx)(R, {
                    guild: t,
                    disableColor: !n
                }) : (0, s.jsx)(_, {
                    guild: t,
                    isBannerVisible: n,
                    disableBoostClick: i
                })
            }
        },
        507497: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            });
            var s = n("37983");
            n("884691");
            var i = n("446674"),
                l = n("77078"),
                r = n("685665"),
                o = n("836275"),
                a = n("379532"),
                u = n("305961"),
                c = n("162771"),
                d = n("118503"),
                f = n("49111"),
                h = n("944305"),
                p = n("782340"),
                v = n("323723");

            function I(e) {
                let {
                    analyticsSection: t,
                    analyticsPage: n,
                    isGIF: I,
                    banner: E
                } = e, C = (0, i.useStateFromStores)([c.default], () => c.default.getGuildId()), _ = (0, i.useStateFromStores)([u.default], () => u.default.getGuild(C)), {
                    analyticsLocations: R
                } = (0, r.default)();
                return null == _ || _.hasFeature(f.GuildFeatures.ANIMATED_BANNER) || !I && _.hasFeature(f.GuildFeatures.BANNER) ? null : (0, s.jsxs)("div", {
                    className: v.container,
                    children: [(0, s.jsx)(d.default, {
                        className: v.guildBoostingIcon
                    }), (0, s.jsx)(l.Text, {
                        color: "header-primary",
                        variant: "text-sm/semibold",
                        children: p.default.Messages.PREMIUM_GUILD_PREVIEW
                    }), (0, s.jsx)(l.Button, {
                        look: l.Button.Looks.LINK,
                        color: l.Button.Colors.LINK,
                        className: v.subscribeButton,
                        onClick: () => {
                            if (null == _) return;
                            let e = {
                                section: t,
                                page: n,
                                object: f.AnalyticsObjects.UPSELL_HEADER
                            };
                            null != E ? (0, o.openGuildBannerUpsellModal)({
                                analyticsLocations: R,
                                analyticsLocation: e,
                                guild: _,
                                isGIF: I,
                                banner: E
                            }) : (0, a.default)({
                                analyticsLocations: R,
                                analyticsSourceLocation: e,
                                guild: _,
                                perks: I ? (0, h.animatedGuildBannerUpsellPerks)() : (0, h.guildBannerUpsellPerks)()
                            })
                        },
                        children: p.default.Messages.PREMIUM_GUILD_BOOST_SERVER
                    })]
                })
            }
        },
        193867: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return R
                }
            });
            var s = n("37983"),
                i = n("884691"),
                l = n("446674"),
                r = n("77078"),
                o = n("812204"),
                a = n("685665"),
                u = n("67069"),
                c = n("635956"),
                d = n("697218"),
                f = n("258078"),
                h = n("599110"),
                p = n("719923"),
                v = n("49111"),
                I = n("75015"),
                E = n("646718"),
                C = n("782340"),
                _ = n("123342");

            function R(e) {
                let {
                    analyticsSection: t,
                    type: n
                } = e, R = (0, l.useStateFromStores)([d.default], () => d.default.getCurrentUser()), g = p.default.canUseAnimatedAvatar(R), M = p.default.canUsePremiumProfileCustomization(R), m = n === I.UploadTypes.BANNER && M || n === I.UploadTypes.AVATAR && g, {
                    sourceAnalyticsLocations: x
                } = (0, a.default)(o.default.PREMIUM_PREVIEW_UPSELL_HEADER);
                if (i.useEffect(() => {
                        !m && h.default.track(v.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                            type: t,
                            location_stack: x
                        })
                    }, [m, t, x]), m) return null;
                let L = (0, s.jsx)(c.default, {
                    className: _.getNitroLink,
                    size: r.Button.Sizes.SMALL,
                    look: r.Button.Looks.LINK,
                    color: r.Button.Colors.LINK,
                    subscriptionTier: E.PremiumSubscriptionSKUs.TIER_2,
                    buttonText: C.default.Messages.PREMIUM_PREVIEW_GET_NITRO.format(),
                    showIcon: !1,
                    premiumModalAnalyticsLocation: {
                        section: t,
                        object: v.AnalyticsObjects.BUTTON_CTA
                    },
                    disableShine: !0
                });
                return (0, s.jsx)(u.default, {
                    reducedRightPadding: !0,
                    className: _.nitroPreviewUpsell,
                    text: C.default.Messages.PREMIUM_PREVIEW.format(),
                    textSize: f.default.Sizes.SIZE_14,
                    textColor: f.default.Colors.HEADER_PRIMARY,
                    button: L
                })
            }
        },
        652914: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var s = n("37983");
            n("884691");
            var i = n("507497"),
                l = n("193867"),
                r = n("75015");

            function o(e) {
                let {
                    type: t,
                    analyticsPage: n,
                    analyticsSection: o,
                    isGIF: a,
                    banner: u
                } = e;
                return [r.UploadTypes.BANNER, r.UploadTypes.AVATAR].includes(t) && a ? (0, s.jsx)(l.default, {
                    analyticsSection: o,
                    type: t
                }) : t === r.UploadTypes.GUILD_BANNER ? (0, s.jsx)(i.default, {
                    analyticsSection: o,
                    analyticsPage: n,
                    isGIF: a,
                    banner: u
                }) : null
            }
        },
        292687: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s.default
                }
            });
            var s = n("870346")
        },
        974889: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var s = n("773336"),
                i = n("50885"),
                l = n("870346");

            function r(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = l.default.getWindow(e);
                null != n && !n.closed && (s.isPlatformEmbedded ? i.default.focus(e, t) : n.focus())
            }
        },
        67069: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var s = n("37983");
            n("884691");
            var i = n("414456"),
                l = n.n(i),
                r = n("791106"),
                o = n("216422"),
                a = n("258078"),
                u = n("63625");

            function c(e) {
                let {
                    text: t,
                    textSize: n = a.default.Sizes.SIZE_12,
                    textColor: i = a.default.Colors.STANDARD,
                    className: c,
                    button: d,
                    reducedRightPadding: f = !1
                } = e;
                return (0, s.jsxs)("div", {
                    className: l(f ? u.noticeWithoutRightPadding : u.noticeWithRightPadding, c),
                    children: [(0, s.jsxs)("div", {
                        className: u.noticeLeft,
                        children: [(0, s.jsx)(o.default, {
                            className: u.icon,
                            color: r.GradientCssUrls.PREMIUM_TIER_2
                        }), (0, s.jsx)(a.default, {
                            className: u.text,
                            size: n,
                            color: i,
                            children: t
                        })]
                    }), d]
                })
            }
        },
        931138: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var s = n("37983"),
                i = n("884691"),
                l = n("414456"),
                r = n.n(l),
                o = n("77078"),
                a = n("760607"),
                u = n("89976");

            function c(e) {
                let {
                    children: t,
                    size: n = 16,
                    className: l,
                    flowerStarClassName: c,
                    ...d
                } = e, f = i.Children.only(t), h = (0, o.useRedesignIconContext)().enabled;
                return (0, s.jsxs)("div", {
                    className: r(u.flowerStarContainer, l),
                    style: {
                        width: n,
                        height: n
                    },
                    children: [(0, s.jsx)(a.default, {
                        ...d,
                        className: r(c, u.flowerStar)
                    }), (0, s.jsx)("div", {
                        className: r(u.childContainer, {
                            [u.redesignIconChildContainer]: h
                        }),
                        children: f
                    })]
                })
            }
        },
        791106: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                Gradients: function() {
                    return o
                },
                GradientCssUrls: function() {
                    return a
                },
                default: function() {
                    return v
                }
            });
            var s = n("37983"),
                i = n("884691"),
                l = n("748820"),
                r = n("669491");
            let o = Object.freeze({
                    PREMIUM_TIER_0: (0, l.v4)(),
                    PREMIUM_TIER_1: (0, l.v4)(),
                    PREMIUM_TIER_2: (0, l.v4)(),
                    PREMIUM_GUILD: (0, l.v4)(),
                    PREMIUM_GUILD_BADGE_V2_BACKGROUND: (0, l.v4)()
                }),
                a = {
                    PREMIUM_TIER_0: "url(#".concat(o.PREMIUM_TIER_0, ")"),
                    PREMIUM_TIER_1: "url(#".concat(o.PREMIUM_TIER_1, ")"),
                    PREMIUM_TIER_2: "url(#".concat(o.PREMIUM_TIER_2, ")"),
                    PREMIUM_GUILD: "url(#".concat(o.PREMIUM_GUILD, ")"),
                    PREMIUM_GUILD_BADGE_V2_BACKGROUND: "url(#".concat(o.PREMIUM_GUILD_BADGE_V2_BACKGROUND, ")")
                },
                u = () => (0, s.jsxs)("linearGradient", {
                    id: o.PREMIUM_TIER_0,
                    children: [(0, s.jsx)("stop", {
                        offset: ".1762",
                        stopColor: r.default.unsafe_rawColors.PREMIUM_TIER_0_BLUE_FOR_GRADIENTS.css
                    }), (0, s.jsx)("stop", {
                        offset: "0.5351",
                        stopColor: r.default.unsafe_rawColors.PREMIUM_TIER_0_BLUE_FOR_GRADIENTS_2.css
                    }), (0, s.jsx)("stop", {
                        offset: "1",
                        stopColor: r.default.unsafe_rawColors.PREMIUM_TIER_0_PURPLE_FOR_GRADIENTS.css
                    })]
                }),
                c = () => (0, s.jsxs)("linearGradient", {
                    id: o.PREMIUM_TIER_1,
                    children: [(0, s.jsx)("stop", {
                        stopColor: r.default.unsafe_rawColors.PREMIUM_TIER_1_BLUE.css
                    }), (0, s.jsx)("stop", {
                        offset: "1",
                        stopColor: r.default.unsafe_rawColors.PREMIUM_TIER_1_PURPLE.css
                    })]
                }),
                d = () => (0, s.jsxs)("linearGradient", {
                    id: o.PREMIUM_TIER_2,
                    children: [(0, s.jsx)("stop", {
                        stopColor: r.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS.css
                    }), (0, s.jsx)("stop", {
                        offset: "0.502368",
                        stopColor: r.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS_2.css
                    }), (0, s.jsx)("stop", {
                        offset: "1",
                        stopColor: r.default.unsafe_rawColors.PREMIUM_TIER_2_PINK_FOR_GRADIENTS.css
                    })]
                }),
                f = () => (0, s.jsxs)("linearGradient", {
                    id: o.PREMIUM_GUILD,
                    children: [(0, s.jsx)("stop", {
                        stopColor: r.default.unsafe_rawColors.GUILD_BOOSTING_BLUE.css
                    }), (0, s.jsx)("stop", {
                        offset: "1",
                        stopColor: r.default.unsafe_rawColors.GUILD_BOOSTING_PURPLE.css
                    })]
                }),
                h = () => (0, s.jsxs)("linearGradient", {
                    id: o.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
                    gradientTransform: "rotate(45)",
                    children: [(0, s.jsx)("stop", {
                        offset: "0",
                        stopColor: r.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE.css
                    }), (0, s.jsx)("stop", {
                        offset: "1",
                        stopColor: r.default.unsafe_rawColors.PREMIUM_TIER_2_PINK.css
                    })]
                }),
                p = i.memo(function() {
                    return (0, s.jsxs)("svg", {
                        viewBox: "0 0 1 1",
                        style: {
                            position: "absolute",
                            pointerEvents: "none",
                            top: -1,
                            left: -1,
                            width: 1,
                            height: 1
                        },
                        "aria-hidden": !0,
                        children: [u(), c(), d(), f(), h()]
                    })
                }, () => !0);
            var v = p
        },
        476263: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var s = n("37983"),
                i = n("884691"),
                l = n("414456"),
                r = n.n(l),
                o = n("90915"),
                a = n("446674"),
                u = n("669491"),
                c = n("77078"),
                d = n("80300"),
                f = n("471671"),
                h = n("103603"),
                p = n("474293"),
                v = n("580357"),
                I = n("491088");
            let E = {
                    SMOL: "Smol",
                    MINI: "Mini",
                    SMALLER: "Smaller",
                    SMALL: "Small",
                    MEDIUM: "Medium",
                    LARGE: "Large",
                    LARGER: "Larger",
                    XLARGE: "XLarge"
                },
                C = {
                    [E.SMOL]: 16,
                    [E.MINI]: 20,
                    [E.SMALLER]: 24,
                    [E.SMALL]: 30,
                    [E.MEDIUM]: 40,
                    [E.LARGE]: 50,
                    [E.LARGER]: 64,
                    [E.XLARGE]: 100
                },
                _ = {
                    [E.SMOL]: [10, 10, 8, 6, 6, 4],
                    [E.MINI]: [12, 12, 10, 10, 8, 6, 4],
                    [E.SMALLER]: [13, 13, 11, 11, 9, 7, 5],
                    [E.SMALL]: [14, 14, 12, 12, 10, 8, 6],
                    [E.MEDIUM]: [16, 16, 14, 14, 12, 10, 8],
                    [E.LARGE]: [18, 18, 16, 16, 14, 12, 10],
                    [E.LARGER]: [19, 19, 17, 17, 15, 13, 11],
                    [E.XLARGE]: [20, 20, 18, 18, 16, 14, 12]
                };
            class R extends i.PureComponent {
                renderAcronym() {
                    let {
                        guild: e,
                        iconSrc: t
                    } = this.props;
                    return null != e.icon || null != t ? null : (0, s.jsx)("div", {
                        className: I.acronym,
                        children: e.acronym
                    })
                }
                renderBadge() {
                    let {
                        showBadge: e,
                        guild: t,
                        badgeStrokeColor: n
                    } = this.props;
                    return e && null != t.hasFeature ? (0, s.jsx)(v.default, {
                        className: I.guildIconBadge,
                        guild: t,
                        badgeStrokeColor: n
                    }) : null
                }
                renderIcon() {
                    var e, t;
                    let {
                        guild: n,
                        className: i,
                        showBadge: l,
                        active: o,
                        size: a,
                        style: u = {},
                        textScale: d,
                        showTooltip: f,
                        tooltipPosition: h,
                        onClick: v,
                        to: E,
                        badgeStrokeColor: C,
                        animate: R,
                        tabIndex: g,
                        iconSrc: M,
                        "aria-hidden": m,
                        ...x
                    } = this.props, L = _[a], N = null != v ? c.Clickable : "div";
                    return (0, s.jsxs)(N, {
                        className: r(I.icon, i, (0, p.getClass)(I, "iconSize", a), {
                            [null !== (e = (0, p.getClass)(I, "iconActive", a)) && void 0 !== e ? e : ""]: o,
                            [I.iconInactive]: !o,
                            [I.noIcon]: null == n.icon
                        }),
                        "aria-hidden": m,
                        style: null == n.icon ? {
                            fontSize: (null !== (t = L[n.acronym.length]) && void 0 !== t ? t : L[L.length - 1]) * d,
                            ...u
                        } : u,
                        onClick: null != E || null == v ? void 0 : v,
                        tabIndex: g,
                        ...x,
                        children: [this.renderAcronym(), this.renderBadge()]
                    })
                }
                renderTooltip() {
                    let {
                        guild: e,
                        showTooltip: t,
                        tooltipPosition: n
                    } = this.props;
                    return t ? (0, s.jsx)(c.Tooltip, {
                        text: e.name,
                        position: n,
                        "aria-label": !1,
                        children: e => i.cloneElement(i.Children.only(this.renderIcon()), {
                            ...e
                        })
                    }) : this.renderIcon()
                }
                render() {
                    let {
                        to: e,
                        guild: t,
                        source: n,
                        tabIndex: i,
                        "aria-hidden": l
                    } = this.props;
                    return null != e ? (0, s.jsx)(o.Link, {
                        "aria-hidden": l,
                        to: {
                            pathname: e,
                            state: null != n ? {
                                analyticsSource: n
                            } : null
                        },
                        "aria-label": t.toString(),
                        tabIndex: i,
                        children: this.renderTooltip()
                    }) : this.renderTooltip()
                }
            }
            let g = a.default.connectStores([f.default], e => {
                let {
                    guild: t,
                    animate: n,
                    iconSrc: s,
                    style: i,
                    size: l
                } = e;
                return {
                    style: {
                        ...i,
                        backgroundImage: (0, h.makeCssUrlString)(null != s ? s : t.getIconURL(C[l], n && f.default.isFocused()))
                    }
                }
            })((0, d.backgroundImagePreloader)(e => (0, s.jsx)(R, {
                ...e
            })));
            class M extends i.PureComponent {
                render() {
                    return (0, s.jsx)(g, {
                        ...this.props
                    })
                }
            }
            M.Sizes = E, M.defaultProps = {
                size: E.LARGE,
                textScale: 1,
                showBadge: !1,
                showTooltip: !1,
                active: !1,
                tooltipPosition: "top",
                badgeStrokeColor: u.default.unsafe_rawColors.WHITE_500.css,
                animate: !1
            };
            var m = M
        },
        381546: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var s = n("37983");
            n("884691");
            var i = n("469563"),
                l = n("505088"),
                r = n("75196"),
                o = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: l,
                        backgroundColor: o,
                        ...a
                    } = e;
                    return (0, s.jsxs)("svg", {
                        ...(0, r.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 14 14",
                        children: [null != o ? (0, s.jsx)("circle", {
                            r: 5,
                            cx: 7,
                            cy: 7,
                            fill: o
                        }) : null, (0, s.jsx)("path", {
                            fill: i,
                            className: l,
                            d: "M7.02799 0.333252C3.346 0.333252 0.361328 3.31792 0.361328 6.99992C0.361328 10.6819 3.346 13.6666 7.02799 13.6666C10.71 13.6666 13.6947 10.6819 13.6947 6.99992C13.6947 3.31792 10.7093 0.333252 7.02799 0.333252ZM10.166 9.19525L9.22333 10.1379L7.02799 7.94325L4.83266 10.1379L3.89 9.19525L6.08466 6.99992L3.88933 4.80459L4.832 3.86259L7.02733 6.05792L9.22266 3.86259L10.1653 4.80459L7.97066 6.99992L10.166 9.19525Z"
                        })]
                    })
                }, l.CircleXIcon, void 0, {
                    size: 24
                })
        },
        760607: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var s = n("37983");
            n("884691");
            var i = n("75196"),
                l = function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: l = "currentColor",
                        foreground: r,
                        ...o
                    } = e;
                    return (0, s.jsx)("svg", {
                        ...(0, i.default)(o),
                        width: t,
                        height: n,
                        viewBox: "0 0 16 15.2",
                        children: (0, s.jsx)("path", {
                            className: r,
                            fill: l,
                            fillRule: "evenodd",
                            d: "m16 7.6c0 .79-1.28 1.38-1.52 2.09s.44 2 0 2.59-1.84.35-2.46.8-.79 1.84-1.54 2.09-1.67-.8-2.47-.8-1.75 1-2.47.8-.92-1.64-1.54-2.09-2-.18-2.46-.8.23-1.84 0-2.59-1.54-1.3-1.54-2.09 1.28-1.38 1.52-2.09-.44-2 0-2.59 1.85-.35 2.48-.8.78-1.84 1.53-2.12 1.67.83 2.47.83 1.75-1 2.47-.8.91 1.64 1.53 2.09 2 .18 2.46.8-.23 1.84 0 2.59 1.54 1.3 1.54 2.09z"
                        })
                    })
                }
        },
        682344: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var s = n("37983");
            n("884691");
            var i = n("469563"),
                l = n("305861"),
                r = n("75196"),
                o = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 20,
                        height: n = 23,
                        color: i = "currentColor",
                        foreground: l,
                        ...o
                    } = e;
                    return (0, s.jsx)("svg", {
                        ...(0, r.default)(o),
                        width: t,
                        height: n,
                        viewBox: "0 0 20 23",
                        children: (0, s.jsx)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            children: (0, s.jsx)("path", {
                                className: l,
                                fill: i,
                                d: "M19.487 5.126L10.487 0.126C10.184 -0.042 9.81798 -0.042 9.51498 0.126L0.514977 5.126C0.197977 5.302 0.000976562 5.636 0.000976562 5.999C0.000976562 6.693 0.114977 22.999 10.001 22.999C19.887 22.999 20.001 6.693 20.001 5.999C20.001 5.636 19.804 5.302 19.487 5.126ZM10.001 5.999C11.382 5.999 12.501 7.118 12.501 8.499C12.501 9.88 11.382 10.999 10.001 10.999C8.61998 10.999 7.50098 9.88 7.50098 8.499C7.50098 7.118 8.61998 5.999 10.001 5.999ZM6.25098 16C6.25098 13.699 7.69998 12.25 10.001 12.25C12.302 12.25 13.751 13.699 13.751 16H6.25098Z"
                            })
                        })
                    })
                }, l.ShieldUserIcon, void 0, {
                    size: 23
                })
        },
        151185: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var s = n("37983");
            n("884691");
            var i = n("469563"),
                l = n("424823"),
                r = n("75196"),
                o = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: l,
                        ...o
                    } = e;
                    return (0, s.jsx)("svg", {
                        ...(0, r.default)(o),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, s.jsx)("path", {
                            fill: i,
                            className: l,
                            d: "M20 11.1111H12.8889V4H11.1111V11.1111H4V12.8889H11.1111V20H12.8889V12.8889H20V11.1111Z"
                        })
                    })
                }, l.PlusSmallIcon, void 0, {
                    size: 24
                })
        },
        394832: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var s = n("37983");
            n("884691");
            var i = n("469563"),
                l = n("125094"),
                r = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        className: l,
                        foreground: r
                    } = e;
                    return (0, s.jsx)("svg", {
                        className: l,
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, s.jsx)("path", {
                            className: r,
                            fill: i,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M2 4.5C2 3.397 2.897 2.5 4 2.5H20C21.103 2.5 22 3.397 22 4.5V15.5C22 16.604 21.103 17.5 20 17.5H13V19.5H17V21.5H7V19.5H11V17.5H4C2.897 17.5 2 16.604 2 15.5V4.5ZM13.2 14.3375V11.6C9.864 11.6 7.668 12.6625 6 15C6.672 11.6625 8.532 8.3375 13.2 7.6625V5L18 9.6625L13.2 14.3375Z"
                        })
                    })
                }, l.ScreenArrowIcon, void 0, {
                    size: 24
                })
        },
        368121: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var s = n("37983");
            n("884691");
            var i = n("469563"),
                l = n("390300"),
                r = n("75196"),
                o = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: l,
                        ...o
                    } = e;
                    return (0, s.jsx)("svg", {
                        ...(0, r.default)(o),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, s.jsx)("path", {
                            className: l,
                            fill: i,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M11.383 3.07904C11.009 2.92504 10.579 3.01004 10.293 3.29604L6 8.00204H3C2.45 8.00204 2 8.45304 2 9.00204V15.002C2 15.552 2.45 16.002 3 16.002H6L10.293 20.71C10.579 20.996 11.009 21.082 11.383 20.927C11.757 20.772 12 20.407 12 20.002V4.00204C12 3.59904 11.757 3.23204 11.383 3.07904ZM14 5.00195V7.00195C16.757 7.00195 19 9.24595 19 12.002C19 14.759 16.757 17.002 14 17.002V19.002C17.86 19.002 21 15.863 21 12.002C21 8.14295 17.86 5.00195 14 5.00195ZM14 9.00195C15.654 9.00195 17 10.349 17 12.002C17 13.657 15.654 15.002 14 15.002V13.002C14.551 13.002 15 12.553 15 12.002C15 11.451 14.551 11.002 14 11.002V9.00195Z",
                            "aria-hidden": !0
                        })
                    })
                }, l.VoiceNormalIcon, void 0, {
                    size: 24
                })
        },
        228427: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var s = n("37983");
            n("884691");
            var i = n("469563"),
                l = n("287083"),
                r = n("75196"),
                o = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 32,
                        height: n = 32,
                        color: i = "currentColor",
                        ...l
                    } = e;
                    return (0, s.jsx)("svg", {
                        ...(0, r.default)(l),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: (0, s.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14 13C14 14.1 13.1 15 12 15C10.9 15 10 14.1 10 13C10 11.9 10.9 11 12 11C13.1 11 14 11.9 14 13ZM8.5 20V19.5C8.5 17.8 9.94 16.5 12 16.5C14.06 16.5 15.5 17.8 15.5 19.5V20H8.5ZM7 13C7 10.24 9.24 8 12 8C14.76 8 17 10.24 17 13C17 13.91 16.74 14.75 16.31 15.49L17.62 16.25C18.17 15.29 18.5 14.19 18.5 13C18.5 9.42 15.58 6.5 12 6.5C8.42 6.5 5.5 9.42 5.5 13C5.5 14.18 5.82 15.29 6.38 16.25L7.69 15.49C7.26 14.75 7 13.91 7 13ZM2.5 13C2.5 7.75 6.75 3.5 12 3.5C17.25 3.5 21.5 7.75 21.5 13C21.5 14.73 21.03 16.35 20.22 17.75L21.51 18.5C22.45 16.88 23 15 23 13C23 6.93 18.07 2 12 2C5.93 2 1 6.93 1 13C1 15 1.55 16.88 2.48 18.49L3.77 17.74C2.97 16.35 2.5 14.73 2.5 13Z",
                            fill: i
                        })
                    })
                }, l.StageIcon, void 0, {
                    size: 32
                })
        },
        708169: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                FullScreenLayers: function() {
                    return M
                },
                useFullScreenLayerStore: function() {
                    return C
                },
                openFullScreenLayer: function() {
                    return m
                },
                closeFullScreenLayer: function() {
                    return x
                }
            }), n("222007");
            var s, i, l = n("37983"),
                r = n("884691"),
                o = n("995008"),
                a = n.n(o),
                u = n("324134"),
                c = n("308503"),
                d = n("769846"),
                f = n("77078"),
                h = n("485328"),
                p = n("159885"),
                v = n("983782"),
                I = n("275495");
            let E = (0, p.cssValueToNumber)(d.default.FULL_SCREEN_LAYER_ANIMATION_DURATION);
            (i = s || (s = {}))[i.ENTERING = 1] = "ENTERING", i[i.ENTERED = 2] = "ENTERED", i[i.EXITING = 3] = "EXITING", i[i.EXITED = 4] = "EXITED";
            let C = (0, c.default)(e => ({
                fullScreenLayers: [],
                addLayer: t => e(e => {
                    let {
                        fullScreenLayers: n
                    } = e;
                    return {
                        fullScreenLayers: [...n, t]
                    }
                })
            }));

            function _(e) {
                let {
                    item: t
                } = e, n = r.useRef(null);
                return (0, f.useFocusLock)(n), r.useEffect(() => (h.default.disable(), h.default.enableTemp(function(e) {
                    return {
                        POP_LAYER: {
                            binds: ["esc"],
                            comboKeysBindGlobal: !0,
                            action() {
                                x(e)
                            }
                        }
                    }
                }(t.key)), () => {
                    h.default.disableTemp()
                }), [t.key]), (0, l.jsx)(t.LayerComponent, {
                    children: (0, l.jsxs)("div", {
                        className: I.root,
                        ref: n,
                        children: [(0, l.jsx)("div", {
                            className: I.drag
                        }), t.render({
                            transitionState: null != t ? t.transitionState : 3,
                            closeLayer: () => x(t.key)
                        })]
                    })
                })
            }
            let R = {
                    enter: I.enter,
                    enterActive: I.enterActive,
                    enterDone: I.enterDone,
                    exit: I.exit,
                    exitActive: I.exitActive,
                    exitDone: I.exitDone
                },
                g = {
                    enter: I.enterReducedMotion,
                    enterActive: I.enterActiveReducedMotion,
                    enterDone: I.enterDoneReducedMotion,
                    exit: I.exitReducedMotion,
                    exitActive: I.exitActiveReducedMotion,
                    exitDone: I.exitDoneReducedMotion
                };

            function M() {
                let {
                    reducedMotion: e
                } = r.useContext(f.AccessibilityPreferencesContext), t = e.enabled, n = t ? g : R, s = C(e => e.fullScreenLayers);
                return (0, l.jsx)(u.TransitionGroup, {
                    children: s.map(e => (0, l.jsx)(u.CSSTransition, {
                        classNames: n,
                        timeout: E,
                        onEntered: () => {
                            C.setState({
                                fullScreenLayers: s.map(t => t.key === e.key ? {
                                    ...t,
                                    transitionState: 2
                                } : t)
                            })
                        },
                        unmountOnExit: !0,
                        children: (0, l.jsx)(_, {
                            item: e
                        })
                    }, e.key))
                })
            }

            function m(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.freeze({}),
                    {
                        layerKey: n,
                        Layer: s
                    } = t,
                    i = null != n ? n : a();
                return C.setState(t => ({
                    fullScreenLayers: [...t.fullScreenLayers, {
                        key: i,
                        transitionState: 1,
                        LayerComponent: null != s ? s : v.default,
                        render: e
                    }]
                })), i
            }

            function x(e) {
                C.setState(t => ({
                    fullScreenLayers: t.fullScreenLayers.filter(t => t.key !== e)
                }))
            }
        },
        474293: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getClass: function() {
                    return i
                }
            }), n("808653");
            var s = n("159885");

            function i(e, t) {
                for (var n = arguments.length, i = Array(n > 2 ? n - 2 : 0), l = 2; l < n; l++) i[l - 2] = arguments[l];
                let r = i.reduce((e, t) => e + (0, s.upperCaseFirstChar)(t), ""),
                    o = "".concat(t).concat(r),
                    a = e[o];
                if (null != a) return a
            }
        },
        157590: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            }), n("222007");
            var s, i = n("817736"),
                l = n("118810");
            let r = {
                root: null,
                rootMargin: "0px",
                threshold: .5
            };
            s = class {
                isVisible(e) {
                    return null == this._observer || this._visibleComponents.has(e)
                }
                observe(e) {
                    let t = this._observer;
                    if (null == t) return;
                    this.unobserve(e);
                    let n = (0, i.findDOMNode)(e);
                    (0, l.isElement)(n, HTMLElement) && (this._nodes.set(n, e), this._components.set(e, n), t.observe(n))
                }
                unobserve(e) {
                    let t = this._observer;
                    if (null == t) return;
                    let n = this._components.get(e);
                    null != n && (this._nodes.delete(n), this._components.delete(e), this._visibleComponents.delete(e), t.unobserve(n))
                }
                constructor(e = r) {
                    this._nodes = new WeakMap, this._components = new WeakMap, this._visibleComponents = new WeakSet, this._handleEntries = e => {
                        e.forEach(e => {
                            let t;
                            if (null != e.isIntersecting) t = e.isIntersecting;
                            else {
                                let {
                                    threshold: n
                                } = this._options;
                                t = null == n ? e.intersectionRatio > 0 : Array.isArray(n) ? n.some(t => e.intersectionRatio > t) : e.intersectionRatio > n
                            }
                            let n = this._nodes.get(e.target);
                            if (null != n) {
                                let e = !1;
                                t ? !this._visibleComponents.has(n) && (this._visibleComponents.add(n), e = !0) : this._visibleComponents.has(n) && (this._visibleComponents.delete(n), e = !0), e && n.forceUpdate()
                            }
                        })
                    }, this._options = e, null != window.IntersectionObserver && (this._observer = new window.IntersectionObserver(this._handleEntries, e))
                }
            }
        },
        235855: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            }), n("222007"), n("70102");
            var s = n("884691"),
                i = n("748820"),
                l = n("157590");
            let r = (0, i.v4)(),
                o = new Map,
                a = new Map;
            class u extends s.Component {
                componentDidMount() {
                    if (this.props.active) {
                        let e = this.getVisibilityObserver();
                        e.observe(this), this.isVisible = e.isVisible(this), this.props.onChange(this.isVisible)
                    }
                }
                componentDidUpdate(e) {
                    let t = this.getVisibilityObserver(),
                        n = t.isVisible(this);
                    this.props.active && n !== this.isVisible && this.props.onChange(n), !e.active && this.props.active ? t.observe(this) : e.active && !this.props.active && t.unobserve(this), this.isVisible = n
                }
                componentWillUnmount() {
                    this.getVisibilityObserver().unobserve(this)
                }
                getVisibilityObserverId() {
                    let {
                        rootMargin: e,
                        threshold: t
                    } = this.props;
                    return "".concat(this.elementId, " ").concat(e, " ").concat(t)
                }
                getVisibilityObserver() {
                    let e = this.getVisibilityObserverId(),
                        t = a.get(e);
                    if (!t) throw Error("Visibility sensor with id ".concat(e, " not found."));
                    return t
                }
                render() {
                    return s.Children.only(this.props.children)
                }
                constructor(e) {
                    super(e), this.isVisible = !1;
                    let {
                        root: t,
                        rootMargin: n,
                        threshold: s
                    } = e;
                    t ? o.has(t) ? this.elementId = o.get(t) || "" : o.set(t, (0, i.v4)()) : this.elementId = r;
                    let u = this.getVisibilityObserverId();
                    !a.has(u) && a.set(u, new l.default({
                        root: t,
                        rootMargin: n,
                        threshold: s
                    }))
                }
            }
            u.defaultProps = {
                active: !0,
                children: s.createElement("span"),
                root: null,
                rootMargin: "0px 0px 0px 0px",
                threshold: [0, Number.MIN_VALUE]
            };
            var c = u
        },
        290381: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                VisibilityObserver: function() {
                    return s.default
                },
                VisibilitySensor: function() {
                    return i.default
                }
            }), n("6268");
            var s = n("157590"),
                i = n("235855")
        }
    }
]);