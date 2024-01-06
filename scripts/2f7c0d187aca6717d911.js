(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["88953"], {
        185782: function(e, t, n) {
            "use strict";
            e.exports = n.p + "140ec8f5d02da1e5195c.svg"
        },
        112679: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                updateStripePaymentRequest: function() {
                    return l
                },
                updateCardInfo: function() {
                    return s
                },
                clearCardInfo: function() {
                    return r
                },
                updateAddressInfo: function() {
                    return a
                },
                clearError: function() {
                    return o
                }
            });
            var i = n("913144");

            function l(e) {
                i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_STRIPE_PAYMENT_REQUEST_UPDATE",
                    stripePaymentMethod: e
                })
            }

            function s(e, t) {
                i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
                    info: e,
                    isValid: t
                })
            }

            function r() {
                i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
                    info: {
                        name: ""
                    },
                    isValid: !1
                })
            }

            function a(e, t) {
                i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_ADDRESS_INFO_UPDATE",
                    info: e,
                    isValid: t
                })
            }

            function o() {
                i.default.wait(() => i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CLEAR_ERROR"
                }))
            }
        },
        55689: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                clearPurchaseTokenAuthState: function() {
                    return l
                }
            });
            var i = n("913144");

            function l() {
                i.default.dispatch({
                    type: "BILLING_PURCHASE_TOKEN_AUTH_CLEAR_STATE"
                })
            }
        },
        304580: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return v
                }
            });
            var i, l, s = n("37983");
            n("884691");
            var r = n("414456"),
                a = n.n(r),
                o = n("394846"),
                c = n("77078"),
                u = n("945330"),
                d = n("381546"),
                f = n("782340"),
                h = n("955892");
            (i = l || (l = {})).DEFAULT = "", i.BOLD = "Bold", i.SOLID = "Solid";
            let p = e => {
                let {
                    closeAction: t,
                    variant: n,
                    keybind: i,
                    className: l
                } = e;
                return (0, s.jsxs)("div", {
                    className: a(h.container, l),
                    children: [(0, s.jsx)(c.Clickable, {
                        className: a(h.closeButton, {
                            [h.closeButtonBold]: "Bold" === n,
                            [h.closeButtonSolid]: "Solid" === n
                        }),
                        onClick: t,
                        "aria-label": f.default.Messages.CLOSE,
                        children: "Solid" === n ? (0, s.jsx)(d.default, {
                            width: 24,
                            height: 24,
                            "aria-hidden": !0
                        }) : (0, s.jsx)(u.default, {
                            width: 18,
                            height: 18,
                            "aria-hidden": !0
                        })
                    }), o.isMobile ? null : (0, s.jsx)("div", {
                        className: a(h.keybind),
                        "aria-hidden": !0,
                        children: i
                    })]
                })
            };
            p.defaultProps = {
                variant: ""
            }, p.Variants = l;
            var v = p
        },
        80300: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                backgroundImagePreloader: function() {
                    return u
                }
            }), n("424973");
            var i = n("37983"),
                l = n("884691"),
                s = n("310013"),
                r = n.n(s),
                a = n("407063");
            let o = /url\(['"](.*)['"]\)/,
                c = e => {
                    if (null == e || "" === e || "none" === e) return null;
                    let t = e.match(o);
                    return null != t ? t[1] : e
                };

            function u(e) {
                class t extends l.Component {
                    componentDidUpdate(e, t) {
                        if (t === this.state) return;
                        let {
                            cached: n,
                            loaded: i
                        } = this.state, {
                            style: l
                        } = this.props, s = null != l ? c(l.backgroundImage) : null;
                        null == s && s !== n ? this.setState({
                            loaded: !0,
                            cached: s
                        }) : this.cachedURLs.indexOf(s) >= 0 ? this.setState({
                            loaded: !0,
                            cached: s
                        }) : null != s && s !== n && !0 === i && this.setState({
                            loaded: !1
                        }, () => this.preloadURL(s))
                    }
                    preloadURL(e) {
                        this.canceller && this.canceller(), this.canceller = (0, a.loadImage)(e, t => {
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
                            ...l
                        } = this.props, {
                            loaded: s,
                            cached: r
                        } = this.state;
                        if (!s && null != t) {
                            var a;
                            t = {
                                ...t,
                                backgroundImage: null == (a = r) || "" === a || "none" === a ? "none" : "url(".concat(a, ")")
                            }
                        }
                        return (0, i.jsx)(e, {
                            style: t,
                            ...l
                        })
                    }
                    constructor(e) {
                        super(e), this.cachedURLs = [], this.canceller = null;
                        let {
                            style: t
                        } = e, n = null != t ? c(t.backgroundImage) : null;
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
            var i = n("37983");
            n("884691");
            var l = n("669491"),
                s = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    secondaryColor: r = "transparent",
                    secondaryColorClass: a = "",
                    color: o = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: c = "",
                    ...u
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, s.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, i.jsx)("circle", {
                        cx: "12",
                        cy: "12",
                        r: "10",
                        fill: "string" == typeof r ? r : r.css,
                        className: a
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        fillRule: "evenodd",
                        d: "M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22Zm4.7-15.7a1 1 0 0 0-1.4 0L12 10.58l-3.3-3.3a1 1 0 0 0-1.4 1.42L10.58 12l-3.3 3.3a1 1 0 1 0 1.42 1.4L12 13.42l3.3 3.3a1 1 0 0 0 1.4-1.42L13.42 12l3.3-3.3a1 1 0 0 0 0-1.4Z",
                        clipRule: "evenodd",
                        className: c
                    })]
                })
            }
        },
        666031: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GifIcon: function() {
                    return r
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("669491"),
                s = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...o
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, s.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm2.18 13.87a2.9 2.9 0 0 1-1.66-.49 3.18 3.18 0 0 1-1.12-1.35A4.88 4.88 0 0 1 4 12c0-.75.14-1.42.42-2 .29-.59.7-1.04 1.24-1.37a3.7 3.7 0 0 1 1.95-.5c.64 0 1.21.14 1.72.4.5.28.89.67 1.15 1.16l-1.22.88a1.76 1.76 0 0 0-1.64-1.02c-.66 0-1.17.22-1.52.65a2.74 2.74 0 0 0-.53 1.8c0 .78.18 1.39.53 1.81.35.42.86.64 1.52.64.3 0 .57-.06.81-.16.25-.12.45-.27.58-.47v-.93H7.3v-1.4h3.24v4.23H9.27l-.2-.71c-.43.57-1.06.86-1.89.86Zm6.34-.15h-1.57V8.28h1.57v7.44Zm1.51 0h1.57v-2.83h2.76v-1.42H16.6V9.7H20V8.28h-4.97v7.44Z",
                        clipRule: "evenodd",
                        className: a
                    })
                })
            }
        },
        998460: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GiftIcon: function() {
                    return r
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("669491"),
                s = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...o
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, s.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, i.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        fillRule: "evenodd",
                        d: "M4 6a4 4 0 0 1 4-4h.09c1.8 0 3.39 1.18 3.91 2.9A4.09 4.09 0 0 1 15.91 2H16a4 4 0 0 1 3.46 6H20a2 2 0 0 1 2 2v1.5a.5.5 0 0 1-.5.5h-19a.5.5 0 0 1-.5-.5V10c0-1.1.9-2 2-2h.54A3.98 3.98 0 0 1 4 6Zm12 2a2 2 0 1 0 0-4h-.09c-.96 0-1.8.65-2.02 1.58L13.29 8H16Zm-5.89-2.42.6 2.42H8a2 2 0 1 1 0-4h.09c.96 0 1.8.65 2.02 1.58Z",
                        clipRule: "evenodd",
                        className: a
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        d: "M3 20c0 1.1.9 2 2 2h5.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5V20ZM13.5 22a.5.5 0 0 1-.5-.5v-7c0-.28.22-.5.5-.5h7c.28 0 .5.22.5.5V20a2 2 0 0 1-2 2h-5.5Z",
                        className: a
                    })]
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
            var i = n("37983");
            n("884691");
            var l = n("669491"),
                s = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...o
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, s.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        d: "M13 6a1 1 0 1 0-2 0v5H6a1 1 0 1 0 0 2h5v5a1 1 0 1 0 2 0v-5h5a1 1 0 1 0 0-2h-5V6Z",
                        className: a
                    })
                })
            }
        },
        125094: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ScreenArrowIcon: function() {
                    return r
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("669491"),
                s = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...o
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, s.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, i.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        fillRule: "evenodd",
                        d: "M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5Zm16 3a1 1 0 0 0-.3-.7l-3-3a1 1 0 1 0-1.4 1.4L14.58 7H13a6 6 0 0 0-6 6 1 1 0 1 0 2 0 4 4 0 0 1 4-4h1.59l-1.3 1.3a1 1 0 0 0 1.42 1.4l3-3A1 1 0 0 0 18 8Z",
                        clipRule: "evenodd",
                        className: a
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        d: "M13 19.5c0 .28.22.5.5.5H15a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h1.5a.5.5 0 0 0 .5-.5v-2c0-.28.22-.5.5-.5h1c.28 0 .5.22.5.5v2Z",
                        className: a
                    })]
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
            var i = n("37983");
            n("884691");
            var l = n("669491"),
                s = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...o
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, s.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, i.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        d: "M19.61 18.25a1.08 1.08 0 0 1-.07-1.33 9 9 0 1 0-15.07 0c.26.42.25.97-.08 1.33l-.02.02c-.41.44-1.12.43-1.46-.07a11 11 0 1 1 18.17 0c-.33.5-1.04.51-1.45.07l-.02-.02Z",
                        className: a
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        d: "M16.83 15.23c.43.47 1.18.42 1.45-.14a7 7 0 1 0-12.57 0c.28.56 1.03.6 1.46.14l.05-.06c.3-.33.35-.81.17-1.23A4.98 4.98 0 0 1 12 7a5 5 0 0 1 4.6 6.94c-.17.42-.13.9.18 1.23l.05.06Z",
                        className: a
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        d: "M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.33 20.03c-.25.72.12 1.5.8 1.84a10.96 10.96 0 0 0 9.73 0 1.52 1.52 0 0 0 .8-1.84 6 6 0 0 0-11.33 0Z",
                        className: a
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
            var i = n("37983");
            n("884691");
            var l = n("669491"),
                s = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...o
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, s.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, i.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        d: "M12 3a1 1 0 0 0-1-1h-.06a1 1 0 0 0-.74.32L5.92 7H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2.92l4.28 4.68a1 1 0 0 0 .74.32H11a1 1 0 0 0 1-1V3ZM15.1 20.75c-.58.14-1.1-.33-1.1-.92v-.03c0-.5.37-.92.85-1.05a7 7 0 0 0 0-13.5A1.11 1.11 0 0 1 14 4.2v-.03c0-.6.52-1.06 1.1-.92a9 9 0 0 1 0 17.5Z",
                        className: a
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        d: "M15.16 16.51c-.57.28-1.16-.2-1.16-.83v-.14c0-.43.28-.8.63-1.02a3 3 0 0 0 0-5.04c-.35-.23-.63-.6-.63-1.02v-.14c0-.63.59-1.1 1.16-.83a5 5 0 0 1 0 9.02Z",
                        className: a
                    })]
                })
            }
        },
        252744: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            }), n("222007");
            var i = n("884691");

            function l(e) {
                let [t, n] = (0, i.useState)(!1), l = (0, i.useRef)(e.current);
                return (0, i.useEffect)(() => {
                    l.current = e.current
                }, [e]), (0, i.useEffect)(() => {
                    let e = l.current;
                    if (null == e) return;
                    let t = () => n(!0),
                        i = () => n(!1);
                    return e.addEventListener("mouseenter", t), e.addEventListener("mouseleave", i), () => {
                        e.removeEventListener("mouseenter", t), e.removeEventListener("mouseleave", i)
                    }
                }, [l]), t
            }
        },
        526887: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ConfettiCannonContext: function() {
                    return u
                },
                ConfettiCannonContextProvider: function() {
                    return d
                }
            });
            var i = n("37983"),
                l = n("884691"),
                s = n("516555"),
                r = n("65597"),
                a = n("206230"),
                o = n("49111");
            let c = {
                    confettiCanvas: null,
                    cannon: null,
                    createConfetti: () => void 0,
                    createConfettiAt: () => void 0,
                    createMultipleConfetti: () => [],
                    createMultipleConfettiAt: () => [],
                    addClickListener: () => o.NOOP,
                    removeClickListener: o.NOOP
                },
                u = l.createContext(c);

            function d(e) {
                let {
                    children: t,
                    confettiCanvas: n,
                    spriteCanvas: o,
                    baseConfig: d,
                    addClickListener: f,
                    removeClickListener: h
                } = e, p = (0, s.useConfettiCannon)(n, o), v = (0, r.default)([a.default], () => a.default.useReducedMotion), C = l.useMemo(() => v ? c : {
                    confettiCanvas: n,
                    cannon: p,
                    createConfetti: (e, t) => p.createConfetti({
                        ...d,
                        ...e
                    }, t),
                    createConfettiAt: (e, t, n, i) => p.createConfetti({
                        ...d,
                        position: {
                            type: "static",
                            value: {
                                x: e,
                                y: t
                            }
                        },
                        ...n
                    }, i),
                    createMultipleConfetti: function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20,
                            n = arguments.length > 2 ? arguments[2] : void 0;
                        return p.createMultipleConfetti({
                            ...d,
                            ...e
                        }, t, n)
                    },
                    createMultipleConfettiAt: function(e, t, n) {
                        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 20,
                            l = arguments.length > 4 ? arguments[4] : void 0;
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
                        }, i, l)
                    },
                    addClickListener: f,
                    removeClickListener: h
                }, [f, d, p, n, v, h]);
                return (0, i.jsx)(u.Provider, {
                    value: C,
                    children: t
                })
            }
        },
        649844: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return v
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("748820"),
                s = n("77078"),
                r = n("112679"),
                a = n("55689"),
                o = n("676379"),
                c = n("697218"),
                u = n("599110"),
                d = n("659500"),
                f = n("719923"),
                h = n("49111"),
                p = n("646718");

            function v(e) {
                let {
                    initialPlanId: t,
                    followupSKUInfo: v,
                    onClose: C,
                    onComplete: m,
                    onSubscriptionConfirmation: E,
                    analyticsLocations: g,
                    analyticsObject: I,
                    analyticsLocation: S,
                    analyticsSourceLocation: _,
                    isGift: L = !1,
                    giftMessage: M,
                    subscriptionTier: x,
                    trialId: A,
                    postSuccessGuild: R,
                    openInvoiceId: T,
                    applicationId: N,
                    referralTrialOfferId: y,
                    giftRecipient: b,
                    returnRef: w,
                    subscription: O
                } = null != e ? e : {}, j = !1, V = (0, l.v4)(), P = c.default.getCurrentUser(), U = (0, f.isPremiumExactly)(P, p.PremiumTypes.TIER_2);
                (0, s.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await n.el("646139").then(n.bind(n, "646139"));
                    return n => {
                        let {
                            onClose: l,
                            ...s
                        } = n;
                        return (0, i.jsx)(e, {
                            ...s,
                            loadId: V,
                            subscriptionTier: x,
                            skuId: x,
                            isGift: L,
                            giftMessage: M,
                            giftRecipient: b,
                            initialPlanId: t,
                            followupSKUInfo: v,
                            onClose: (e, t) => {
                                l(), null == C || C(e), e && (null == E || E(), !L && null != t && t === p.PremiumSubscriptionSKUs.TIER_2 && !U && d.ComponentDispatch.dispatch(h.ComponentActions.PREMIUM_SUBSCRIPTION_CREATED))
                            },
                            onComplete: () => {
                                j = !0, null == m || m(), !L && (0, o.setCanPlayWowMoment)(!0)
                            },
                            onSubscriptionConfirmation: E,
                            analyticsLocations: g,
                            analyticsObject: I,
                            analyticsLocation: S,
                            analyticsSourceLocation: _,
                            trialId: A,
                            postSuccessGuild: R,
                            planGroup: p.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
                            openInvoiceId: T,
                            applicationId: N,
                            referralTrialOfferId: y,
                            returnRef: w,
                            subscription: O
                        })
                    }
                }, {
                    modalKey: "payment-modal",
                    onCloseCallback: () => {
                        !j && u.default.track(h.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
                            load_id: V,
                            payment_type: h.PurchaseTypeToAnalyticsPaymentType[h.PurchaseTypes.SUBSCRIPTION],
                            location: null != S ? S : I,
                            source: _,
                            subscription_type: h.SubscriptionTypes.PREMIUM,
                            is_gift: L,
                            eligible_for_trial: null != A,
                            application_id: N,
                            location_stack: g
                        }), (0, r.clearError)(), (0, a.clearPurchaseTokenAuthState)(), null == C || C(j), j && (null == E || E())
                    },
                    onCloseRequest: h.NOOP
                })
            }
        },
        676379: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                setCanPlayWowMoment: function() {
                    return l
                }
            });
            var i = n("913144");
            let l = e => {
                i.default.dispatch({
                    type: "PURCHASED_ITEMS_FESTIVITY_SET_CAN_PLAY_WOW_MOMENT",
                    value: e
                })
            }
        },
        374278: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("77078"),
                s = n("95039"),
                r = n("305961"),
                a = n("957255"),
                o = n("145131"),
                c = n("181114"),
                u = n("599110"),
                d = n("488464"),
                f = n("998716"),
                h = n("923510"),
                p = n("49111"),
                v = n("646718"),
                C = n("782340"),
                m = n("400237");

            function E(e) {
                var t;
                let n, {
                        channel: E,
                        transitionState: g,
                        onClose: I
                    } = e,
                    S = r.default.getGuild(E.guild_id),
                    _ = null !== (t = null == S ? void 0 : S.maxStageVideoChannelUsers) && void 0 !== t ? t : 0,
                    L = !!(null == S ? void 0 : S.isCommunity()),
                    M = C.default.Messages.STAGE_FULL_TITLE,
                    x = L ? _ < p.MAX_STAGE_VIDEO_USER_LIMIT_UNCAPPED : (null == S ? void 0 : S.premiumTier) !== p.BoostedGuildTiers.TIER_3 && _ <= p.MAX_STAGE_VIDEO_USER_LIMIT_TIER2,
                    A = a.default.can(h.MODERATE_STAGE_CHANNEL_PERMISSIONS, E);
                n = L && (null == S ? void 0 : S.premiumTier) === p.BoostedGuildTiers.TIER_3 ? _ <= p.MAX_STAGE_VIDEO_USER_LIMIT_UNCAPPED ? C.default.Messages.STAGE_FULL_BOOST_MORE_BODY : C.default.Messages.STAGE_FULL_MAX_BODY : x ? C.default.Messages.STAGE_FULL_BODY : C.default.Messages.STAGE_FULL_MAX_BODY;
                let R = () => {
                        I(), u.default.track(p.AnalyticEvents.BOOSTING_UPSELL_CLICKED, {
                            guild_id: E.guild_id,
                            type: v.PremiumUpsellTypes.VIDEO_STAGE_LIMIT,
                            is_moderator: A,
                            action: v.BoostingUpsellAction.DISMISS
                        })
                    },
                    T = d.default.getMutableParticipants(E.id, f.StageChannelParticipantNamedIndex.SPEAKER),
                    N = T.filter(e => e.type === f.StageChannelParticipantTypes.VOICE),
                    y = N.length,
                    b = d.default.getParticipantCount(E.id, f.StageChannelParticipantNamedIndex.AUDIENCE);
                return u.default.track(p.AnalyticEvents.BOOSTING_UPSELL_VIEWED, {
                    guild_id: E.guild_id,
                    type: v.PremiumUpsellTypes.VIDEO_STAGE_LIMIT,
                    is_moderator: A,
                    listener_count: y + b
                }), (0, i.jsxs)(l.ModalRoot, {
                    size: l.ModalSize.SMALL,
                    transitionState: g,
                    "aria-label": M,
                    children: [(0, i.jsxs)(l.ModalHeader, {
                        justify: o.default.Justify.END,
                        separator: !1,
                        className: m.header,
                        children: [(0, i.jsx)("div", {
                            className: m.fullArt
                        }), (0, i.jsx)(l.ModalCloseButton, {
                            onClick: I
                        })]
                    }), (0, i.jsxs)(l.ModalContent, {
                        className: m.content,
                        children: [(0, i.jsx)(l.Heading, {
                            variant: "heading-xl/bold",
                            children: M
                        }), (0, i.jsx)(l.Text, {
                            variant: "text-md/medium",
                            children: n
                        })]
                    }), (0, i.jsx)(l.ModalFooter, {
                        className: m.footer,
                        children: x ? (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)(l.Button, {
                                look: l.ButtonLooks.LINK,
                                className: m.noThanksButton,
                                color: l.ButtonColors.CUSTOM,
                                size: l.ButtonSizes.SMALL,
                                onClick: R,
                                children: C.default.Messages.NO_THANKS
                            }), (0, i.jsx)(c.default, {
                                onClick: () => {
                                    I(), (0, s.openGuildBoostingMarketingModal)({
                                        guildId: E.guild_id,
                                        location: {
                                            section: p.AnalyticsSections.STAGE_VIDEO_LIMIT
                                        }
                                    }), u.default.track(p.AnalyticEvents.BOOSTING_UPSELL_CLICKED, {
                                        guild_id: E.guild_id,
                                        type: v.PremiumUpsellTypes.VIDEO_STAGE_LIMIT,
                                        is_moderator: A,
                                        action: v.BoostingUpsellAction.BOOST
                                    })
                                },
                                size: l.ButtonSizes.SMALL,
                                className: m.boostButton,
                                children: C.default.Messages.PREMIUM_GUILD_SUBSCRIPTION
                            })]
                        }) : (0, i.jsx)(l.Button, {
                            onClick: R,
                            size: l.ButtonSizes.SMALL,
                            color: l.ButtonColors.CUSTOM,
                            className: m.boostButton,
                            children: C.default.Messages.GOT_IT
                        })
                    })]
                })
            }
        },
        931138: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("37983"),
                l = n("884691"),
                s = n("414456"),
                r = n.n(s),
                a = n("77078"),
                o = n("760607"),
                c = n("89976");

            function u(e) {
                let {
                    children: t,
                    size: n = 16,
                    className: s,
                    flowerStarClassName: u,
                    ...d
                } = e, f = l.Children.only(t), h = (0, a.useRedesignIconContext)().enabled;
                return (0, i.jsxs)("div", {
                    className: r(c.flowerStarContainer, s),
                    style: {
                        width: n,
                        height: n
                    },
                    children: [(0, i.jsx)(o.default, {
                        ...d,
                        className: r(u, c.flowerStar)
                    }), (0, i.jsx)("div", {
                        className: r(c.childContainer, {
                            [c.redesignIconChildContainer]: h
                        }),
                        children: f
                    })]
                })
            }
        },
        476263: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return L
                }
            });
            var i = n("37983"),
                l = n("884691"),
                s = n("414456"),
                r = n.n(s),
                a = n("90915"),
                o = n("446674"),
                c = n("669491"),
                u = n("77078"),
                d = n("80300"),
                f = n("471671"),
                h = n("103603"),
                p = n("474293"),
                v = n("580357"),
                C = n("491088");
            let m = {
                    SMOL: "Smol",
                    MINI: "Mini",
                    SMALLER: "Smaller",
                    SMALL: "Small",
                    MEDIUM: "Medium",
                    LARGE: "Large",
                    LARGER: "Larger",
                    XLARGE: "XLarge"
                },
                E = {
                    [m.SMOL]: 16,
                    [m.MINI]: 20,
                    [m.SMALLER]: 24,
                    [m.SMALL]: 30,
                    [m.MEDIUM]: 40,
                    [m.LARGE]: 50,
                    [m.LARGER]: 64,
                    [m.XLARGE]: 100
                },
                g = {
                    [m.SMOL]: [10, 10, 8, 6, 6, 4],
                    [m.MINI]: [12, 12, 10, 10, 8, 6, 4],
                    [m.SMALLER]: [13, 13, 11, 11, 9, 7, 5],
                    [m.SMALL]: [14, 14, 12, 12, 10, 8, 6],
                    [m.MEDIUM]: [16, 16, 14, 14, 12, 10, 8],
                    [m.LARGE]: [18, 18, 16, 16, 14, 12, 10],
                    [m.LARGER]: [19, 19, 17, 17, 15, 13, 11],
                    [m.XLARGE]: [20, 20, 18, 18, 16, 14, 12]
                };
            class I extends l.PureComponent {
                renderAcronym() {
                    let {
                        guild: e,
                        iconSrc: t
                    } = this.props;
                    return null != e.icon || null != t ? null : (0, i.jsx)("div", {
                        className: C.acronym,
                        children: e.acronym
                    })
                }
                renderBadge() {
                    let {
                        showBadge: e,
                        guild: t,
                        badgeStrokeColor: n
                    } = this.props;
                    return e && null != t.hasFeature ? (0, i.jsx)(v.default, {
                        className: C.guildIconBadge,
                        guild: t,
                        badgeStrokeColor: n
                    }) : null
                }
                renderIcon() {
                    var e, t;
                    let {
                        guild: n,
                        className: l,
                        showBadge: s,
                        active: a,
                        size: o,
                        style: c = {},
                        textScale: d,
                        showTooltip: f,
                        tooltipPosition: h,
                        onClick: v,
                        to: m,
                        badgeStrokeColor: E,
                        animate: I,
                        tabIndex: S,
                        iconSrc: _,
                        "aria-hidden": L,
                        ...M
                    } = this.props, x = g[o], A = null != v ? u.Clickable : "div";
                    return (0, i.jsxs)(A, {
                        className: r(C.icon, l, (0, p.getClass)(C, "iconSize", o), {
                            [null !== (e = (0, p.getClass)(C, "iconActive", o)) && void 0 !== e ? e : ""]: a,
                            [C.iconInactive]: !a,
                            [C.noIcon]: null == n.icon
                        }),
                        "aria-hidden": L,
                        style: null == n.icon ? {
                            fontSize: (null !== (t = x[n.acronym.length]) && void 0 !== t ? t : x[x.length - 1]) * d,
                            ...c
                        } : c,
                        onClick: null != m || null == v ? void 0 : v,
                        tabIndex: S,
                        ...M,
                        children: [this.renderAcronym(), this.renderBadge()]
                    })
                }
                renderTooltip() {
                    let {
                        guild: e,
                        showTooltip: t,
                        tooltipPosition: n
                    } = this.props;
                    return t ? (0, i.jsx)(u.Tooltip, {
                        text: e.name,
                        position: n,
                        "aria-label": !1,
                        children: e => l.cloneElement(l.Children.only(this.renderIcon()), {
                            ...e
                        })
                    }) : this.renderIcon()
                }
                render() {
                    let {
                        to: e,
                        guild: t,
                        source: n,
                        tabIndex: l,
                        "aria-hidden": s
                    } = this.props;
                    return null != e ? (0, i.jsx)(a.Link, {
                        "aria-hidden": s,
                        to: {
                            pathname: e,
                            state: null != n ? {
                                analyticsSource: n
                            } : null
                        },
                        "aria-label": t.toString(),
                        tabIndex: l,
                        children: this.renderTooltip()
                    }) : this.renderTooltip()
                }
            }
            let S = o.default.connectStores([f.default], e => {
                let {
                    guild: t,
                    animate: n,
                    iconSrc: i,
                    style: l,
                    size: s
                } = e;
                return {
                    style: {
                        ...l,
                        backgroundImage: (0, h.makeCssUrlString)(null != i ? i : t.getIconURL(E[s], n && f.default.isFocused()))
                    }
                }
            })((0, d.backgroundImagePreloader)(e => (0, i.jsx)(I, {
                ...e
            })));
            class _ extends l.PureComponent {
                render() {
                    return (0, i.jsx)(S, {
                        ...this.props
                    })
                }
            }
            _.Sizes = m, _.defaultProps = {
                size: m.LARGE,
                textScale: 1,
                showBadge: !1,
                showTooltip: !1,
                active: !1,
                tooltipPosition: "top",
                badgeStrokeColor: c.default.unsafe_rawColors.WHITE_500.css,
                animate: !1
            };
            var L = _
        },
        181114: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                Shine: function() {
                    return C
                },
                default: function() {
                    return E
                }
            });
            var i, l, s = n("37983"),
                r = n("884691"),
                a = n("414456"),
                o = n.n(a),
                c = n("458960"),
                u = n("77078"),
                d = n("252744"),
                f = n("145131"),
                h = n("396792");
            (i = l || (l = {})).DEFAULT = "default", i.SMALL = "small";
            let p = {
                    default: h.shineDefault,
                    small: h.shineSmall
                },
                v = {
                    default: h.shineInnerDefault,
                    small: h.shineInnerSmall
                };
            class C extends r.PureComponent {
                render() {
                    let {
                        className: e,
                        shineSize: t,
                        shinePaused: n,
                        ...i
                    } = this.props;
                    return (0, s.jsx)(c.default.div, {
                        ...i,
                        className: o(h.shineContainer, e, {
                            [h.shinePaused]: n
                        }),
                        children: (0, s.jsx)(f.default, {
                            align: f.default.Align.CENTER,
                            justify: f.default.Justify.CENTER,
                            className: p[t],
                            children: (0, s.jsx)("div", {
                                className: v[t]
                            })
                        })
                    })
                }
            }
            C.defaultProps = {
                shineSize: "default"
            };
            let m = e => {
                let {
                    children: t,
                    className: n,
                    disabled: i,
                    submitting: l,
                    pauseAnimation: a,
                    shineSize: c = "default",
                    shinePaused: f,
                    buttonShineClassName: p,
                    onlyShineOnHover: v,
                    ...m
                } = e, E = r.createRef(), g = (0, d.default)(E), I = !i && !l && !0 !== a && (!v || g);
                return (0, s.jsxs)(u.Button, {
                    buttonRef: E,
                    ...m,
                    className: o(h.shinyButton, n),
                    disabled: i,
                    submitting: l,
                    children: [t, I ? (0, s.jsx)(C, {
                        shinePaused: f,
                        className: o(h.buttonShine, v ? h.onlyShineOnHover : void 0, p),
                        shineSize: c
                    }) : null]
                })
            };
            m.ShineSizes = l;
            var E = m
        },
        381546: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("469563"),
                s = n("505088"),
                r = n("75196"),
                a = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: l = "currentColor",
                        foreground: s,
                        backgroundColor: a,
                        ...o
                    } = e;
                    return (0, i.jsxs)("svg", {
                        ...(0, r.default)(o),
                        width: t,
                        height: n,
                        viewBox: "0 0 14 14",
                        children: [null != a ? (0, i.jsx)("circle", {
                            r: 5,
                            cx: 7,
                            cy: 7,
                            fill: a
                        }) : null, (0, i.jsx)("path", {
                            fill: l,
                            className: s,
                            d: "M7.02799 0.333252C3.346 0.333252 0.361328 3.31792 0.361328 6.99992C0.361328 10.6819 3.346 13.6666 7.02799 13.6666C10.71 13.6666 13.6947 10.6819 13.6947 6.99992C13.6947 3.31792 10.7093 0.333252 7.02799 0.333252ZM10.166 9.19525L9.22333 10.1379L7.02799 7.94325L4.83266 10.1379L3.89 9.19525L6.08466 6.99992L3.88933 4.80459L4.832 3.86259L7.02733 6.05792L9.22266 3.86259L10.1653 4.80459L7.97066 6.99992L10.166 9.19525Z"
                        })]
                    })
                }, s.CircleXIcon, void 0, {
                    size: 24
                })
        },
        760607: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("75196"),
                s = function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: s = "currentColor",
                        foreground: r,
                        ...a
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, l.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 16 15.2",
                        children: (0, i.jsx)("path", {
                            className: r,
                            fill: s,
                            fillRule: "evenodd",
                            d: "m16 7.6c0 .79-1.28 1.38-1.52 2.09s.44 2 0 2.59-1.84.35-2.46.8-.79 1.84-1.54 2.09-1.67-.8-2.47-.8-1.75 1-2.47.8-.92-1.64-1.54-2.09-2-.18-2.46-.8.23-1.84 0-2.59-1.54-1.3-1.54-2.09 1.28-1.38 1.52-2.09-.44-2 0-2.59 1.85-.35 2.48-.8.78-1.84 1.53-2.12 1.67.83 2.47.83 1.75-1 2.47-.8.91 1.64 1.53 2.09 2 .18 2.46.8-.23 1.84 0 2.59 1.54 1.3 1.54 2.09z"
                        })
                    })
                }
        },
        978679: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("469563"),
                s = n("998460"),
                r = n("75196"),
                a = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: l = "currentColor",
                        foreground: s,
                        ...a
                    } = e;
                    return (0, i.jsx)("svg", {
                        width: t,
                        height: n,
                        ...(0, r.default)(a),
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            fill: l,
                            className: s,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M16.886 7.999H20C21.104 7.999 22 8.896 22 9.999V11.999H2V9.999C2 8.896 2.897 7.999 4 7.999H7.114C6.663 7.764 6.236 7.477 5.879 7.121C4.709 5.951 4.709 4.048 5.879 2.879C7.012 1.746 8.986 1.746 10.121 2.877C11.758 4.514 11.979 7.595 11.998 7.941C11.9991 7.9525 11.9966 7.96279 11.9941 7.97304C11.992 7.98151 11.99 7.98995 11.99 7.999H12.01C12.01 7.98986 12.0079 7.98134 12.0058 7.97287C12.0034 7.96282 12.0009 7.95286 12.002 7.942C12.022 7.596 12.242 4.515 13.879 2.878C15.014 1.745 16.986 1.746 18.121 2.877C19.29 4.049 19.29 5.952 18.121 7.121C17.764 7.477 17.337 7.764 16.886 7.999ZM7.293 5.707C6.903 5.316 6.903 4.682 7.293 4.292C7.481 4.103 7.732 4 8 4C8.268 4 8.519 4.103 8.707 4.292C9.297 4.882 9.641 5.94 9.825 6.822C8.945 6.639 7.879 6.293 7.293 5.707ZM14.174 6.824C14.359 5.941 14.702 4.883 15.293 4.293C15.481 4.103 15.732 4 16 4C16.268 4 16.519 4.103 16.706 4.291C17.096 4.682 17.097 5.316 16.707 5.707C16.116 6.298 15.057 6.642 14.174 6.824ZM3 13.999V19.999C3 21.102 3.897 21.999 5 21.999H11V13.999H3ZM13 13.999V21.999H19C20.104 21.999 21 21.102 21 19.999V13.999H13Z"
                        })
                    })
                }, s.GiftIcon, void 0, {
                    size: 24
                })
        },
        151185: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("469563"),
                s = n("424823"),
                r = n("75196"),
                a = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: l = "currentColor",
                        foreground: s,
                        ...a
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, r.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            fill: l,
                            className: s,
                            d: "M20 11.1111H12.8889V4H11.1111V11.1111H4V12.8889H11.1111V20H12.8889V12.8889H20V11.1111Z"
                        })
                    })
                }, s.PlusSmallIcon, void 0, {
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
            var i = n("37983");
            n("884691");
            var l = n("469563"),
                s = n("125094"),
                r = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: l = "currentColor",
                        className: s,
                        foreground: r
                    } = e;
                    return (0, i.jsx)("svg", {
                        className: s,
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, i.jsx)("path", {
                            className: r,
                            fill: l,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M2 4.5C2 3.397 2.897 2.5 4 2.5H20C21.103 2.5 22 3.397 22 4.5V15.5C22 16.604 21.103 17.5 20 17.5H13V19.5H17V21.5H7V19.5H11V17.5H4C2.897 17.5 2 16.604 2 15.5V4.5ZM13.2 14.3375V11.6C9.864 11.6 7.668 12.6625 6 15C6.672 11.6625 8.532 8.3375 13.2 7.6625V5L18 9.6625L13.2 14.3375Z"
                        })
                    })
                }, s.ScreenArrowIcon, void 0, {
                    size: 24
                })
        },
        368121: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("469563"),
                s = n("390300"),
                r = n("75196"),
                a = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: l = "currentColor",
                        foreground: s,
                        ...a
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, r.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            className: s,
                            fill: l,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M11.383 3.07904C11.009 2.92504 10.579 3.01004 10.293 3.29604L6 8.00204H3C2.45 8.00204 2 8.45304 2 9.00204V15.002C2 15.552 2.45 16.002 3 16.002H6L10.293 20.71C10.579 20.996 11.009 21.082 11.383 20.927C11.757 20.772 12 20.407 12 20.002V4.00204C12 3.59904 11.757 3.23204 11.383 3.07904ZM14 5.00195V7.00195C16.757 7.00195 19 9.24595 19 12.002C19 14.759 16.757 17.002 14 17.002V19.002C17.86 19.002 21 15.863 21 12.002C21 8.14295 17.86 5.00195 14 5.00195ZM14 9.00195C15.654 9.00195 17 10.349 17 12.002C17 13.657 15.654 15.002 14 15.002V13.002C14.551 13.002 15 12.553 15 12.002C15 11.451 14.551 11.002 14 11.002V9.00195Z",
                            "aria-hidden": !0
                        })
                    })
                }, s.VoiceNormalIcon, void 0, {
                    size: 24
                })
        },
        228427: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("469563"),
                s = n("287083"),
                r = n("75196"),
                a = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 32,
                        height: n = 32,
                        color: l = "currentColor",
                        ...s
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, r.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: (0, i.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14 13C14 14.1 13.1 15 12 15C10.9 15 10 14.1 10 13C10 11.9 10.9 11 12 11C13.1 11 14 11.9 14 13ZM8.5 20V19.5C8.5 17.8 9.94 16.5 12 16.5C14.06 16.5 15.5 17.8 15.5 19.5V20H8.5ZM7 13C7 10.24 9.24 8 12 8C14.76 8 17 10.24 17 13C17 13.91 16.74 14.75 16.31 15.49L17.62 16.25C18.17 15.29 18.5 14.19 18.5 13C18.5 9.42 15.58 6.5 12 6.5C8.42 6.5 5.5 9.42 5.5 13C5.5 14.18 5.82 15.29 6.38 16.25L7.69 15.49C7.26 14.75 7 13.91 7 13ZM2.5 13C2.5 7.75 6.75 3.5 12 3.5C17.25 3.5 21.5 7.75 21.5 13C21.5 14.73 21.03 16.35 20.22 17.75L21.51 18.5C22.45 16.88 23 15 23 13C23 6.93 18.07 2 12 2C5.93 2 1 6.93 1 13C1 15 1.55 16.88 2.48 18.49L3.77 17.74C2.97 16.35 2.5 14.73 2.5 13Z",
                            fill: l
                        })
                    })
                }, s.StageIcon, void 0, {
                    size: 32
                })
        },
        708169: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                FullScreenLayers: function() {
                    return _
                },
                useFullScreenLayerStore: function() {
                    return E
                },
                openFullScreenLayer: function() {
                    return L
                },
                closeFullScreenLayer: function() {
                    return M
                }
            }), n("222007");
            var i, l, s = n("37983"),
                r = n("884691"),
                a = n("995008"),
                o = n.n(a),
                c = n("324134"),
                u = n("308503"),
                d = n("769846"),
                f = n("77078"),
                h = n("485328"),
                p = n("159885"),
                v = n("983782"),
                C = n("275495");
            let m = (0, p.cssValueToNumber)(d.default.FULL_SCREEN_LAYER_ANIMATION_DURATION);
            (l = i || (i = {}))[l.ENTERING = 1] = "ENTERING", l[l.ENTERED = 2] = "ENTERED", l[l.EXITING = 3] = "EXITING", l[l.EXITED = 4] = "EXITED";
            let E = (0, u.default)(e => ({
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

            function g(e) {
                let {
                    item: t
                } = e, n = r.useRef(null);
                return (0, f.useFocusLock)(n), r.useEffect(() => (h.default.disable(), h.default.enableTemp(function(e) {
                    return {
                        POP_LAYER: {
                            binds: ["esc"],
                            comboKeysBindGlobal: !0,
                            action() {
                                M(e)
                            }
                        }
                    }
                }(t.key)), () => {
                    h.default.disableTemp()
                }), [t.key]), (0, s.jsx)(t.LayerComponent, {
                    children: (0, s.jsxs)("div", {
                        className: C.root,
                        ref: n,
                        children: [(0, s.jsx)("div", {
                            className: C.drag
                        }), t.render({
                            transitionState: null != t ? t.transitionState : 3,
                            closeLayer: () => M(t.key)
                        })]
                    })
                })
            }
            let I = {
                    enter: C.enter,
                    enterActive: C.enterActive,
                    enterDone: C.enterDone,
                    exit: C.exit,
                    exitActive: C.exitActive,
                    exitDone: C.exitDone
                },
                S = {
                    enter: C.enterReducedMotion,
                    enterActive: C.enterActiveReducedMotion,
                    enterDone: C.enterDoneReducedMotion,
                    exit: C.exitReducedMotion,
                    exitActive: C.exitActiveReducedMotion,
                    exitDone: C.exitDoneReducedMotion
                };

            function _() {
                let {
                    reducedMotion: e
                } = r.useContext(f.AccessibilityPreferencesContext), t = e.enabled, n = t ? S : I, i = E(e => e.fullScreenLayers);
                return (0, s.jsx)(c.TransitionGroup, {
                    children: i.map(e => (0, s.jsx)(c.CSSTransition, {
                        classNames: n,
                        timeout: m,
                        onEntered: () => {
                            E.setState({
                                fullScreenLayers: i.map(t => t.key === e.key ? {
                                    ...t,
                                    transitionState: 2
                                } : t)
                            })
                        },
                        unmountOnExit: !0,
                        children: (0, s.jsx)(g, {
                            item: e
                        })
                    }, e.key))
                })
            }

            function L(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.freeze({}),
                    {
                        layerKey: n,
                        Layer: i
                    } = t,
                    l = null != n ? n : o();
                return E.setState(t => ({
                    fullScreenLayers: [...t.fullScreenLayers, {
                        key: l,
                        transitionState: 1,
                        LayerComponent: null != i ? i : v.default,
                        render: e
                    }]
                })), l
            }

            function M(e) {
                E.setState(t => ({
                    fullScreenLayers: t.fullScreenLayers.filter(t => t.key !== e)
                }))
            }
        },
        474293: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getClass: function() {
                    return l
                }
            }), n("808653");
            var i = n("159885");

            function l(e, t) {
                for (var n = arguments.length, l = Array(n > 2 ? n - 2 : 0), s = 2; s < n; s++) l[s - 2] = arguments[s];
                let r = l.reduce((e, t) => e + (0, i.upperCaseFirstChar)(t), ""),
                    a = "".concat(t).concat(r),
                    o = e[a];
                if (null != o) return o
            }
        },
        157590: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            }), n("222007");
            var i, l = n("817736"),
                s = n("118810");
            let r = {
                root: null,
                rootMargin: "0px",
                threshold: .5
            };
            i = class {
                isVisible(e) {
                    return null == this._observer || this._visibleComponents.has(e)
                }
                observe(e) {
                    let t = this._observer;
                    if (null == t) return;
                    this.unobserve(e);
                    let n = (0, l.findDOMNode)(e);
                    (0, s.isElement)(n, HTMLElement) && (this._nodes.set(n, e), this._components.set(e, n), t.observe(n))
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
                    return u
                }
            }), n("222007"), n("70102");
            var i = n("884691"),
                l = n("748820"),
                s = n("157590");
            let r = (0, l.v4)(),
                a = new Map,
                o = new Map;
            class c extends i.Component {
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
                        t = o.get(e);
                    if (!t) throw Error("Visibility sensor with id ".concat(e, " not found."));
                    return t
                }
                render() {
                    return i.Children.only(this.props.children)
                }
                constructor(e) {
                    super(e), this.isVisible = !1;
                    let {
                        root: t,
                        rootMargin: n,
                        threshold: i
                    } = e;
                    t ? a.has(t) ? this.elementId = a.get(t) || "" : a.set(t, (0, l.v4)()) : this.elementId = r;
                    let c = this.getVisibilityObserverId();
                    !o.has(c) && o.set(c, new s.default({
                        root: t,
                        rootMargin: n,
                        threshold: i
                    }))
                }
            }
            c.defaultProps = {
                active: !0,
                children: i.createElement("span"),
                root: null,
                rootMargin: "0px 0px 0px 0px",
                threshold: [0, Number.MIN_VALUE]
            };
            var u = c
        },
        290381: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                VisibilityObserver: function() {
                    return i.default
                },
                VisibilitySensor: function() {
                    return l.default
                }
            }), n("6268");
            var i = n("157590"),
                l = n("235855")
        }
    }
]);