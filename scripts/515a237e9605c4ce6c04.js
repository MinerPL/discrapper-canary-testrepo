(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["78483"], {
        717837: function(e, t, n) {
            "use strict";
            e.exports = function(e) {
                return (e = String(e || ""), l.test(e)) ? "rtl" : r.test(e) ? "ltr" : "neutral"
            };
            var i = "֑-߿יִ-﷽ﹰ-ﻼ",
                s = "A-Za-z\xc0-\xd6\xd8-\xf6\xf8-ʸ̀-֐ࠀ-῿‎Ⰰ-﬜︀-﹯﻽-￿",
                l = RegExp("^[^" + s + "]*[" + i + "]"),
                r = RegExp("^[^" + i + "]*[" + s + "]")
        },
        448105: function(e, t, n) {
            "use strict";
            e.exports = function(e, t) {
                var n = t.length,
                    i = e.length;
                if (i > n) return !1;
                if (i === n) return e === t;
                e: for (var s = 0, l = 0; s < i; s++) {
                    for (var r = e.charCodeAt(s); l < n;)
                        if (t.charCodeAt(l++) === r) continue e;
                    return !1
                }
                return !0
            }
        },
        766665: function(e, t, n) {
            var i = n("424498");
            e.exports = function(e, t, n) {
                "__proto__" == t && i ? i(e, t, {
                    configurable: !0,
                    enumerable: !0,
                    value: n,
                    writable: !0
                }) : e[t] = n
            }
        },
        136759: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                persist: function() {
                    return d
                }
            }), n("222007");
            Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable;
            var i = Object.defineProperty,
                s = Object.getOwnPropertySymbols,
                l = Object.prototype.hasOwnProperty,
                r = Object.prototype.propertyIsEnumerable,
                a = (e, t, n) => t in e ? i(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n
                }) : e[t] = n,
                u = (e, t) => {
                    for (var n in t || (t = {})) l.call(t, n) && a(e, n, t[n]);
                    if (s)
                        for (var n of s(t)) r.call(t, n) && a(e, n, t[n]);
                    return e
                };
            let o = e => t => {
                    try {
                        let n = e(t);
                        if (n instanceof Promise) return n;
                        return {
                            then: e => o(e)(n),
                            catch (e) {
                                return this
                            }
                        }
                    } catch (e) {
                        return {
                            then(e) {
                                return this
                            },
                            catch: t => o(t)(e)
                        }
                    }
                },
                d = (e, t) => (n, i, s) => {
                    let l, r, a = u({
                        getStorage: () => localStorage,
                        serialize: JSON.stringify,
                        deserialize: JSON.parse,
                        partialize: e => e,
                        version: 0,
                        merge: (e, t) => u(u({}, t), e)
                    }, t);
                    (a.blacklist || a.whitelist) && console.warn("The ".concat(a.blacklist ? "blacklist" : "whitelist", " option is deprecated and will be removed in the next version. Please use the 'partialize' option instead."));
                    let d = !1,
                        c = new Set,
                        h = new Set;
                    try {
                        l = a.getStorage()
                    } catch (e) {}
                    if (!l) return e(function() {
                        for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                        console.warn("[zustand persist middleware] Unable to update item '".concat(a.name, "', the given storage is currently unavailable.")), n(...t)
                    }, i, s);
                    !l.removeItem && console.warn("[zustand persist middleware] The given storage for item '".concat(a.name, "' does not contain a 'removeItem' method, which will be required in v4."));
                    let f = o(a.serialize),
                        m = () => {
                            let e;
                            let t = a.partialize(u({}, i()));
                            a.whitelist && Object.keys(t).forEach(e => {
                                var n;
                                (null == (n = a.whitelist) ? void 0 : n.includes(e)) || delete t[e]
                            }), a.blacklist && a.blacklist.forEach(e => delete t[e]);
                            let n = f({
                                state: t,
                                version: a.version
                            }).then(e => l.setItem(a.name, e)).catch(t => {
                                e = t
                            });
                            if (e) throw e;
                            return n
                        },
                        p = s.setState;
                    s.setState = (e, t) => {
                        p(e, t), m()
                    };
                    let I = e(function() {
                            for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                            n(...t), m()
                        }, i, s),
                        E = () => {
                            var e;
                            if (!l) return;
                            d = !1, c.forEach(e => e(i()));
                            let t = (null == (e = a.onRehydrateStorage) ? void 0 : e.call(a, i())) || void 0;
                            return o(l.getItem.bind(l))(a.name).then(e => {
                                if (e) return a.deserialize(e)
                            }).then(e => {
                                if (e) {
                                    if ("number" != typeof e.version || e.version === a.version) return e.state;
                                    if (a.migrate) return a.migrate(e.state, e.version);
                                    console.error("State loaded from storage couldn't be migrated since no migrate function was provided")
                                }
                            }).then(e => {
                                var t;
                                return n(r = a.merge(e, null != (t = i()) ? t : I), !0), m()
                            }).then(() => {
                                null == t || t(r, void 0), d = !0, h.forEach(e => e(r))
                            }).catch(e => {
                                null == t || t(void 0, e)
                            })
                        };
                    return s.persist = {
                        setOptions: e => {
                            a = u(u({}, a), e), e.getStorage && (l = e.getStorage())
                        },
                        clearStorage: () => {
                            var e;
                            null == (e = null == l ? void 0 : l.removeItem) || e.call(l, a.name)
                        },
                        rehydrate: () => E(),
                        hasHydrated: () => d,
                        onHydrate: e => (c.add(e), () => {
                            c.delete(e)
                        }),
                        onFinishHydration: e => (h.add(e), () => {
                            h.delete(e)
                        })
                    }, E(), r || I
                }
        },
        430568: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            }), n("222007"), n("70102"), n("843762"), n("424973");
            var i = n("37983"),
                s = n("884691"),
                l = n("414456"),
                r = n.n(l),
                a = n("817736"),
                u = n.n(a),
                o = n("118810"),
                d = n("446674"),
                c = n("407063"),
                h = n("845579"),
                f = n("901165"),
                m = n("62843"),
                p = n("315102"),
                I = n("402671"),
                E = n("866190"),
                v = n("115279");
            class _ extends s.PureComponent {
                componentWillUnmount() {
                    var e;
                    null === (e = this.cancelLoadImage) || void 0 === e || e.call(this)
                }
                getSrc() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props,
                        {
                            src: t,
                            emojiId: n,
                            emojiName: i,
                            animated: s,
                            shouldAnimate: l,
                            isFocused: r,
                            isInteracting: a,
                            size: u = "default"
                        } = e,
                        {
                            hover: o
                        } = this.state;
                    if (null != t) return t;
                    if (null != n) {
                        let e = v.EMOJI_SIZE_MAP[u];
                        return p.default.getEmojiURL({
                            id: n,
                            animated: r && !0 === s && (!0 === l || o || !0 === a),
                            size: e
                        })
                    }
                    if (null != i) return I.default.getURL(i)
                }
                render() {
                    var e;
                    let t;
                    let {
                        emojiName: n,
                        animated: l,
                        className: a,
                        size: u = "default",
                        alt: o,
                        shouldAnimate: d,
                        isFocused: c,
                        emojiId: h,
                        autoplay: f,
                        isInteracting: m,
                        ...p
                    } = this.props, I = this.getSrc();
                    return null == I || "" === I ? (0, i.jsx)("span", {
                        className: r("emoji", "emoji-text"),
                        children: n
                    }) : (l && (t = {
                        onMouseEnter: this.onMouseEnter,
                        onMouseLeave: this.onMouseLeave
                    }), (0, s.createElement)("img", {
                        ...p,
                        key: this.key,
                        src: I,
                        alt: null !== (e = null != o ? o : n) && void 0 !== e ? e : void 0,
                        draggable: !1,
                        ...t,
                        className: r("emoji", a, {
                            jumboable: "jumbo" === u
                        }),
                        onError: this.onError,
                        "data-type": "emoji",
                        ...null != h && "" !== h ? {
                            "data-id": h
                        } : {
                            "data-name": n
                        }
                    }))
                }
                constructor(...e) {
                    super(...e), this.state = {
                        hover: !1
                    }, this.key = void 0, this.onError = () => {
                        let e = this.getSrc();
                        null != e && (this.cancelLoadImage = (0, c.loadImage)(e, e => {
                            !e && (this.key = Date.now(), this.forceUpdate())
                        }))
                    }, this.onMouseEnter = e => {
                        this.setState({
                            hover: !0
                        });
                        let {
                            onMouseEnter: t
                        } = this.props;
                        null != t && t(e)
                    }, this.onMouseLeave = e => {
                        this.setState({
                            hover: !1
                        });
                        let {
                            onMouseLeave: t
                        } = this.props;
                        null != t && t(e)
                    }
                }
            }
            _.defaultProps = {
                isInteracting: !1
            };
            let g = function(e) {
                if (null == window.IntersectionObserver) return function(t) {
                    return (0, i.jsx)(e, {
                        ...t,
                        shouldAnimate: t.animated
                    })
                };
                let t = [],
                    n = [],
                    l = new window.IntersectionObserver(e => {
                        e.forEach(e => {
                            let i = n.find(t => {
                                let [n] = t;
                                return n === e.target
                            });
                            if (null == i) return;
                            let s = i[1];
                            if (e.intersectionRatio >= .7) {
                                var l, r;
                                if (-1 !== t.indexOf(s)) return;
                                let n = Math.abs(e.intersectionRect.bottom - Number(null === (l = e.rootBounds) || void 0 === l ? void 0 : l.bottom)) < Math.abs(e.intersectionRect.top - Number(null === (r = e.rootBounds) || void 0 === r ? void 0 : r.top));
                                n ? t.unshift(s) : t.push(s), s.forceUpdate(), n && t.length > 100 && t[100].forceUpdate()
                            } else {
                                let e = t.indexOf(s); - 1 !== e && (t.splice(e, 1), s.forceUpdate(), e < 100 && t.length >= 100 && t[99].forceUpdate())
                            }
                        })
                    }, {
                        threshold: .7
                    });

                function r(e) {
                    let t = u.findDOMNode(e);
                    (0, o.isElement)(t) && (n.push([t, e]), l.observe(t))
                }

                function a(e) {
                    let i = u.findDOMNode(e);
                    l.unobserve(i);
                    let s = n.findIndex(t => {
                        let [n, i] = t;
                        return i === e
                    }); - 1 !== s && (n.splice(s, 1), -1 !== (s = t.indexOf(e)) && (t.splice(s, 1), s < 100 && t.length >= 100 && t[99].forceUpdate()))
                }
                return class extends s.Component {
                    shouldAutoplay(e) {
                        return e.animated && e.autoplay
                    }
                    componentDidMount() {
                        this.shouldAutoplay(this.props) && r(this)
                    }
                    componentDidUpdate(e) {
                        let t = this.shouldAutoplay(e),
                            n = this.shouldAutoplay(this.props);
                        n !== t && (n ? r(this) : a(this))
                    }
                    componentWillUnmount() {
                        this.shouldAutoplay(this.props) && a(this)
                    }
                    render() {
                        let n = t.indexOf(this),
                            {
                                autoplay: s,
                                allowAnimatedEmoji: l,
                                ...r
                            } = this.props;
                        return (0, i.jsx)(m.MessagesInteractionContext.Consumer, {
                            children: t => (0, i.jsx)(e, {
                                ...r,
                                autoplay: s || !1,
                                shouldAnimate: -1 !== n && n < 100 && !t.disableAnimations && l
                            })
                        })
                    }
                }
            }(_);

            function S(e) {
                let t = h.AnimateEmoji.useSetting(),
                    n = {
                        autoplay: null == e.autoplay ? t : e.autoplay,
                        allowAnimatedEmoji: t
                    },
                    s = __OVERLAY__ ? (0, d.useStateFromStores)([f.default], () => f.default.isInstanceFocused()) : (0, E.useIsWindowFocused)();
                return (0, i.jsx)(g, {
                    ...e,
                    ...n,
                    isFocused: s
                })
            }
        },
        145079: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            });
            var i = n("37983");
            n("884691");
            var s = n("414456"),
                l = n.n(s),
                r = n("446674"),
                a = n("77078"),
                u = n("102985"),
                o = n("79798"),
                d = n("754474"),
                c = n("158998"),
                h = n("782340"),
                f = n("892802");

            function m(e) {
                if (e.isSystemUser()) return d.BotTypes.SYSTEM_DM;
                if (e.isClyde()) return d.BotTypes.AI;
                if (e.bot) return d.BotTypes.BOT;
                return null
            }
            let p = e => {
                let {
                    primary: t,
                    secondary: n,
                    botType: s,
                    botVerified: r,
                    discriminatorClass: u,
                    className: d,
                    usernameClass: c,
                    color: m,
                    botClass: p,
                    showStreamerModeTooltip: I
                } = e;
                return (0, i.jsxs)("div", {
                    className: l(f.info, d),
                    children: [(0, i.jsx)(a.Tooltip, {
                        text: h.default.Messages.STREAMER_MODE_ENABLED,
                        shouldShow: I,
                        children: e => (0, i.jsx)("span", {
                            ...e,
                            className: l(f.username, c),
                            style: null != m ? {
                                color: m
                            } : void 0,
                            children: t
                        })
                    }), null != n ? (0, i.jsx)("span", {
                        className: l(f.infoSpacing, u),
                        children: n
                    }) : void 0, null != s && (0, i.jsx)(o.default, {
                        type: s,
                        className: l(f.infoSpacing, p),
                        verified: r
                    })]
                })
            };
            var I = e => {
                let {
                    hideDiscriminator: t = !1,
                    user: n,
                    nick: s,
                    forceUsername: l,
                    showAccountIdentifier: a,
                    overrideDiscriminator: o,
                    forcePomelo: h,
                    ...f
                } = e, I = (0, r.useStateFromStores)([u.default], () => u.default.hidePersonalInformation), E = I || t || n.isNonUserBot(), v = n.toString(), _ = c.default.getName(n), g = l ? v : null != s ? s : _, S = n.isPomelo() || h;
                if (S || g !== v) {
                    let e = g === v && S && l ? c.default.getUserTag(n, {
                            forcePomelo: h
                        }) : g,
                        t = a && e !== "@".concat(v) ? c.default.getUserTag(n) : void 0;
                    return (0, i.jsx)(p, {
                        primary: e,
                        secondary: t,
                        botVerified: n.isVerifiedBot(),
                        botType: m(n),
                        showStreamerModeTooltip: I && e !== _,
                        ...f
                    })
                }
                return (0, i.jsx)(d.default, {
                    name: g,
                    botType: m(n),
                    botVerified: n.isVerifiedBot(),
                    discriminator: E || g !== v ? null : null != o ? o : n.discriminator,
                    ...f
                })
            }
        },
        926001: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SlashBoxIcon: function() {
                    return r
                }
            });
            var i = n("37983");
            n("884691");
            var s = n("669491"),
                l = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = s.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...u
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, l.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm12.79 3.37a.25.25 0 0 0-.22-.37h-3.13a.75.75 0 0 0-.66.38L6.21 18.63c-.1.16.03.37.22.37h3.13c.27 0 .52-.14.66-.38l7.57-13.25Z",
                        clipRule: "evenodd",
                        className: a
                    })
                })
            }
        },
        969715: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                UnfeatureItemConfirmationModal: function() {
                    return m
                },
                FeatureItemConfirmationModal: function() {
                    return p
                },
                FeatureMessageConfirmationModal: function() {
                    return I
                },
                FeatureForumPostConfirmationModal: function() {
                    return E
                }
            }), n("222007");
            var i = n("37983"),
                s = n("884691"),
                l = n("866227"),
                r = n.n(l),
                a = n("611221"),
                u = n("77078"),
                o = n("599417"),
                d = n("699473"),
                c = n("713810"),
                h = n("782340"),
                f = n("690187");

            function m(e) {
                let {
                    featureableItem: t,
                    header: n,
                    body: l,
                    ...r
                } = e, [a, d] = s.useState(null), [f, m] = s.useState(!1);
                return (0, i.jsxs)(u.ConfirmModal, {
                    header: n,
                    confirmText: h.default.Messages.GUILD_FEED_UNFEATURE_BUTTON_TEXT,
                    confirmButtonColor: u.Button.Colors.RED,
                    cancelText: h.default.Messages.CANCEL,
                    loading: f,
                    onConfirm: async () => {
                        try {
                            m(!0), await (0, c.unfeatureGuildFeedItem)(t), m(!1)
                        } catch (e) {
                            throw d(new o.default(e)), m(!1), e
                        }
                    },
                    ...r,
                    children: [(0, i.jsx)(u.Text, {
                        variant: "text-md/normal",
                        children: l
                    }), null != a && (0, i.jsx)(u.Text, {
                        color: "text-danger",
                        variant: "text-xs/normal",
                        children: a.message
                    })]
                })
            }

            function p(e) {
                let {
                    featureableItem: t,
                    expiresSeconds: n,
                    header: l,
                    children: a,
                    options: d,
                    ...m
                } = e, [p, I] = s.useState(null), [E, v] = s.useState(!1);
                return (0, i.jsxs)(u.ConfirmModal, {
                    header: l,
                    confirmText: h.default.Messages.GUILD_FEED_FEATURE_BUTTON_TEXT,
                    cancelText: h.default.Messages.CANCEL,
                    confirmButtonColor: u.Button.Colors.BRAND,
                    loading: E,
                    onConfirm: async () => {
                        try {
                            let e = r().add(n, "second").toDate();
                            v(!0), await (0, c.featureGuildFeedItem)(t, e, d)
                        } catch (e) {
                            throw I(new o.default(e)), e
                        } finally {
                            v(!1)
                        }
                    },
                    ...m,
                    children: [null != p && (0, i.jsx)(u.Text, {
                        className: f.featureModalError,
                        color: "text-danger",
                        variant: "text-xs/normal",
                        children: p.message
                    }), a]
                })
            }

            function I(e) {
                let {
                    message: t,
                    guildId: n,
                    channel: s,
                    expiresSeconds: l,
                    timePeriod: r,
                    options: o,
                    ...c
                } = e;
                return (0, i.jsxs)(p, {
                    ...c,
                    featureableItem: {
                        guildId: n,
                        entity: t,
                        entityType: a.GuildFeedItemTypes.MESSAGE
                    },
                    header: h.default.Messages.GUILD_FEED_FEATURED_MESSAGE_MODAL_HEADER,
                    expiresSeconds: l,
                    options: o,
                    children: [(0, i.jsx)(u.Text, {
                        className: f.featureModalText,
                        variant: "text-md/normal",
                        children: h.default.Messages.GUILD_FEED_FEATURE_MESSAGE_MODAL_BODY.format({
                            timePeriod: r
                        })
                    }), (0, i.jsx)("div", {
                        className: f.featureModalMessage,
                        children: (0, i.jsx)(d.default, {
                            channel: s,
                            message: t,
                            disableInteraction: !0
                        })
                    })]
                })
            }

            function E(e) {
                let {
                    thread: t,
                    guildId: n,
                    expiresSeconds: s,
                    timePeriod: l,
                    options: r,
                    ...o
                } = e;
                return (0, i.jsx)(p, {
                    ...o,
                    featureableItem: {
                        guildId: n,
                        entity: t,
                        entityType: a.GuildFeedItemTypes.FORUM_POST
                    },
                    header: h.default.Messages.GUILD_FEED_FEATURED_FORUM_POST_MODAL_HEADER,
                    expiresSeconds: s,
                    options: r,
                    children: (0, i.jsx)(u.Text, {
                        className: f.featureModalText,
                        variant: "text-md/normal",
                        children: h.default.Messages.GUILD_FEED_FEATURE_FORUM_POST_MODAL_BODY.format({
                            threadName: t.name,
                            timePeriod: l
                        })
                    })
                })
            }
        },
        887446: function(e, t, n) {
            "use strict";
            let i, s, l, r;
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            });
            var a = n("748820"),
                u = n("446674"),
                o = n("913144"),
                d = n("724210"),
                c = n("515631");
            let h = {};

            function f(e) {
                return {
                    guildId: e,
                    sessionId: (0, a.v4)()
                }
            }

            function m(e) {
                null != l && l.guildId === e ? (s = l, l = void 0) : s = f(e)
            }
            class p extends u.default.Store {
                getSavedScrollPosition(e) {
                    return h[e]
                }
                getHomeSessionId(e) {
                    return null != s && s.guildId === e ? s.sessionId : null != l && l.guildId === e ? l.sessionId : void 0
                }
                getHomeSessionSource(e) {
                    return null != r && r.guildId === e ? r.source : c.GuildHomeLandingSource.ORGANIC
                }
            }
            p.displayName = "GuildHomeStore";
            var I = new p(o.default, {
                CONNECTION_OPEN: function() {
                    h = {}
                },
                GUILD_FEED_FETCH_FRESH_START: function(e) {
                    let {
                        guildId: t
                    } = e;
                    delete h[t]
                },
                GUILD_HOME_SET_SCROLL_POSITION: function(e) {
                    let {
                        guildId: t,
                        scrollPosition: n
                    } = e;
                    h[t] = n
                },
                CHANNEL_SELECT: function(e) {
                    let {
                        guildId: t,
                        channelId: n
                    } = e;
                    if (null == t || null == n || !(0, d.isStaticChannelRoute)(n) || !(0, d.isGuildHomeChannel)(n)) {
                        i = void 0, s = void 0, l = void 0, r = void 0;
                        return
                    }
                    let a = (0, d.buildGuildStaticChannelId)(n, t);
                    if (i === a || null != s && s.guildId === t) return !1;
                    m(t), i = a, null != r && r.guildId !== t && (r = void 0)
                },
                CHANNEL_PRELOAD: function(e) {
                    let {
                        guildId: t,
                        channelId: n
                    } = e;
                    if (null == t || null == n || !(0, d.isStaticChannelRoute)(n) || !(0, d.isGuildHomeChannel)(n)) {
                        l = void 0;
                        return
                    }
                    if (null != l && l.guildId === t) return !1;
                    l = f(t)
                },
                GUILD_HOME_SET_SOURCE: function(e) {
                    let {
                        source: t,
                        guildId: n
                    } = e;
                    r = {
                        guildId: n,
                        source: t
                    }
                },
                GUILD_HOME_ENSURE_HOME_SESSION: function(e) {
                    let {
                        guildId: t
                    } = e;
                    if (null != s && s.guildId === t) return !1;
                    m(t)
                },
                LOGOUT: function() {
                    s = void 0, l = void 0, r = void 0
                }
            })
        },
        232268: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("37983");
            n("884691");
            var s = n("65597"),
                l = n("880731");

            function r(e) {
                let {
                    children: t,
                    confettiLocation: n
                } = e, r = (0, s.default)([l.default], () => l.default.isEnabled({
                    confettiLocation: n
                }));
                return r ? (0, i.jsx)(i.Fragment, {
                    children: t
                }) : null
            }
        },
        798592: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("884691"),
                s = n("65597"),
                l = n("526887"),
                r = n("880731");

            function a() {
                let {
                    createMultipleConfettiAt: e
                } = i.useContext(l.ConfettiCannonContext), t = (0, s.default)([r.default], () => r.default.getState()), n = i.useCallback(e => ({
                    size: {
                        type: "static-random",
                        minValue: e.confettiSize - 7,
                        maxValue: e.confettiSize + 7
                    }
                }), []), a = i.useMemo(() => ({
                    fire: (i, s, l) => {
                        var r, a;
                        let u = (null == l ? void 0 : l.settings) != null ? {
                                ...t,
                                ...l.settings
                            } : t,
                            o = n(u);
                        e(i, s, o, (null !== (r = null == l ? void 0 : l.count) && void 0 !== r ? r : u.confettiCount) * (null !== (a = null == l ? void 0 : l.countMultiplier) && void 0 !== a ? a : 1), {
                            sprite: null == l ? void 0 : l.sprite
                        })
                    }
                }), [e, n, t]);
                return a
            }
        },
        393027: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("803182"),
                s = n("308503"),
                l = n("49111");

            function r(e) {
                let t = (0, i.matchPath)(null != e ? e : "", {
                    path: l.Routes.CHANNEL(":guildId", ":channelId?", ":messageId?")
                });
                if (null != t) {
                    let {
                        guildId: e,
                        channelId: n
                    } = t.params;
                    return {
                        guildId: e === l.ME ? null : e,
                        channelId: null != n ? n : null
                    }
                }
                let n = (0, i.matchPath)(null != e ? e : "", {
                    path: l.Routes.GUILD_BOOSTING_MARKETING(":guildId")
                });
                return null != n ? {
                    guildId: n.params.guildId,
                    channelId: null
                } : {
                    guildId: null,
                    channelId: null
                }
            }
            var a = (0, s.default)(e => ({
                path: null,
                basePath: "/",
                guildId: null,
                channelId: null,
                updatePath(t) {
                    let {
                        guildId: n,
                        channelId: i
                    } = r(t);
                    e({
                        path: t,
                        guildId: n,
                        channelId: i
                    })
                },
                resetPath(t) {
                    let {
                        guildId: n,
                        channelId: i
                    } = r(t);
                    e({
                        path: null,
                        guildId: n,
                        channelId: i,
                        basePath: t
                    })
                }
            }))
        },
        69890: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getMessageCountText: function() {
                    return a
                },
                formatMessageCountLabel: function() {
                    return o
                }
            });
            var i = n("299039"),
                s = n("648564"),
                l = n("782340");
            let r = e => i.default.compare("992549565104128000", e) > -1,
                a = (e, t) => {
                    if (null == e || e < 0) return "0";
                    {
                        let n = r(t);
                        return (null == t || n) && e >= s.MAX_THREAD_MESSAGE_COUNT_OLD ? "50+" : e >= s.MAX_THREAD_MESSAGE_COUNT ? "100k+" : "".concat(e)
                    }
                },
                u = (e, t, n) => {
                    let i = a(e, n);
                    return "0" === i ? l.default.Messages.SEE_THREAD : t.format({
                        count: i
                    })
                },
                o = (e, t) => u(e, l.default.Messages.THREAD_MESSAGE_COUNT, t)
        },
        754474: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                BotTypes: function() {
                    return a.BotTagTypes
                },
                default: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var s = n("414456"),
                l = n.n(s),
                r = n("79798"),
                a = n("988268"),
                u = n("888770"),
                o = e => {
                    let {
                        name: t,
                        discriminator: n,
                        invertBotTagColor: s,
                        nameColor: a,
                        className: o,
                        botType: d,
                        usernameClass: c,
                        discriminatorClass: h,
                        botClass: f,
                        botVerified: m = !1,
                        style: p,
                        useRemSizes: I = !1,
                        usernameIcon: E
                    } = e;
                    return (0, i.jsxs)("div", {
                        className: l(o, u.nameTag),
                        style: p,
                        children: [(0, i.jsxs)("span", {
                            className: l(u.username, c),
                            style: null != a ? {
                                color: a
                            } : void 0,
                            children: [E, t]
                        }), null != n ? (0, i.jsxs)("span", {
                            className: null != h ? h : void 0,
                            children: ["#", n]
                        }) : null, null != d ? (0, i.jsx)(r.default, {
                            type: d,
                            invertColor: s,
                            className: l(f, u.bot),
                            verified: m,
                            useRemSizes: I
                        }) : null]
                    })
                }
        },
        476765: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                uid: function() {
                    return r
                },
                useUID: function() {
                    return a
                },
                UID: function() {
                    return u
                }
            });
            var i = n("995008"),
                s = n.n(i),
                l = n("775560");
            let r = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
                    return s(e)
                },
                a = () => (0, l.useLazyValue)(() => r()),
                u = e => {
                    let {
                        children: t
                    } = e;
                    return t(a())
                }
        },
        62843: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MessagesInteractionContext: function() {
                    return s
                }
            });
            var i = n("884691");
            let s = i.createContext({
                disableInteractions: !1,
                disableAnimations: !1
            })
        },
        83910: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var s = n("469563"),
                l = n("926001"),
                r = n("75196"),
                a = (0, s.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: s = "currentColor",
                        foreground: l,
                        ...a
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, r.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            fill: s,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            className: l,
                            d: "M5 3C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5ZM16.8995 8.41419L15.4853 6.99998L7 15.4853L8.41421 16.8995L16.8995 8.41419Z"
                        })
                    })
                }, l.SlashBoxIcon, void 0, {
                    size: 24
                })
        },
        95689: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var s = n("469563"),
                l = n("578478"),
                r = n("75196"),
                a = (0, s.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: s = "currentColor",
                        foreground: l,
                        ...a
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, r.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            className: l,
                            d: "M6 2C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V6C22 3.79086 20.2091 2 18 2H6ZM10 8C10 6.8952 9.1032 6 8 6C6.8944 6 6 6.8952 6 8C6 9.1056 6.8944 10 8 10C9.1032 10 10 9.1056 10 8ZM9 14L6 18H18L15 11L11 16L9 14Z",
                            fill: s
                        })
                    })
                }, l.ImageIcon, void 0, {
                    size: 24
                })
        },
        938237: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                markAnalyticsFeedItemSeen: function() {
                    return s
                },
                markAnalyticsFeedItemUnseen: function() {
                    return l
                },
                flushAnalyticsFeedItems: function() {
                    return r
                }
            });
            var i = n("913144");

            function s(e, t, n) {
                i.default.dispatch({
                    type: "ANALYTICS_FEED_ITEM_SEEN",
                    id: e,
                    feedItemId: t,
                    timestampMillis: n
                })
            }

            function l(e, t, n) {
                i.default.dispatch({
                    type: "ANALYTICS_FEED_ITEM_UNSEEN",
                    id: e,
                    feedItemId: t,
                    timestampMillis: n
                })
            }

            function r(e, t) {
                i.default.dispatch({
                    type: "ANALYTICS_FEED_FLUSH",
                    id: e,
                    force: t
                })
            }
        },
        395118: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AnalyticsFeedTypes: function() {
                    return i
                },
                ForceFlushType: function() {
                    return s
                },
                AnalyticsFeedItemSeenManager: function() {
                    return c
                }
            }), n("424973"), n("222007");
            var i, s, l, r, a = n("627445"),
                u = n.n(a),
                o = n("913144");
            (l = i || (i = {})).GUILD_HOME = "guild_home", l.FORUM_CHANNEL = "forum_channel", (r = s || (s = {}))[r.IMMEDIATE = 0] = "IMMEDIATE", r[r.IMMEDIATE_WITH_COOLDOWN = 1] = "IMMEDIATE_WITH_COOLDOWN", r[r.IMMEDIATE_WITH_DELAY = 2] = "IMMEDIATE_WITH_DELAY";
            class d {
                maybeMarkSeen(e) {
                    let t = this.seenIntervals[this.seenIntervals.length - 1];
                    return (null == t || null != t.endTimeMillis) && (this.seenIntervals.push({
                        startTimeMillis: e
                    }), !0)
                }
                maybeMarkUnseen(e) {
                    let t = this.seenIntervals[this.seenIntervals.length - 1];
                    return null != t && null == t.endTimeMillis && (t.endTimeMillis = e, !0)
                }
                isVisible() {
                    let e = this.seenIntervals[this.seenIntervals.length - 1];
                    return (null == e ? void 0 : e.startTimeMillis) != null && (null == e ? void 0 : e.endTimeMillis) == null
                }
                computeSeenTimeDestructive(e) {
                    let t = 0,
                        n = [];
                    for (let i of this.seenIntervals) {
                        if (null != i.endTimeMillis) {
                            t += i.endTimeMillis - i.startTimeMillis;
                            continue
                        }
                        if (e) {
                            let e = Date.now();
                            t += e - i.startTimeMillis, n.push({
                                startTimeMillis: e
                            });
                            continue
                        }
                        n.push(i)
                    }
                    return u(n.length < 2, "there should only be a single left over data"), this.seenIntervals = n, Math.round(t)
                }
                constructor() {
                    this.seenIntervals = []
                }
            }
            class c {
                maybeFlushSeenItems(e) {
                    if (null == e && Date.now() - this._lastFlushTimeMillis < 6e4 || 1 === e && Date.now() - this._lastFlushTimeMillis < 3e3) return Promise.resolve();
                    let t = this.createFlushSeenItemsFunction(e);
                    return null == t ? Promise.resolve() : (this._lastFlushTimeMillis = Date.now(), 0 === e || 1 === e) ? new Promise(async e => {
                        await t(), e()
                    }) : new Promise(e => {
                        setTimeout(async () => {
                            await t(), e()
                        }, 100)
                    })
                }
                constructor({
                    id: e,
                    windowId: t,
                    isPaused: n
                }) {
                    this.initialize = () => {
                        var e;
                        o.default.subscribe("ANALYTICS_FEED_ITEM_SEEN", this.handleFeedItemSeen), o.default.subscribe("ANALYTICS_FEED_ITEM_UNSEEN", this.handleFeedItemUnseen), o.default.subscribe("ANALYTICS_FEED_FLUSH", this.handleFeedItemFlush), o.default.subscribe("APP_STATE_UPDATE", this.handleAppStateUpdate), o.default.subscribe("DRAWER_OPEN", this.handleDrawerOpen), o.default.subscribe("DRAWER_CLOSE", this.handleDrawerClose), o.default.subscribe("WINDOW_FOCUS", this.handleWindowFocus), null === (e = this.onInitialize) || void 0 === e || e.call(this)
                    }, this.terminate = () => {
                        var e;
                        o.default.unsubscribe("ANALYTICS_FEED_ITEM_SEEN", this.handleFeedItemSeen), o.default.unsubscribe("ANALYTICS_FEED_ITEM_UNSEEN", this.handleFeedItemUnseen), o.default.unsubscribe("ANALYTICS_FEED_FLUSH", this.handleFeedItemFlush), o.default.unsubscribe("APP_STATE_UPDATE", this.handleAppStateUpdate), o.default.unsubscribe("DRAWER_OPEN", this.handleDrawerOpen), o.default.unsubscribe("DRAWER_CLOSE", this.handleDrawerClose), o.default.unsubscribe("WINDOW_FOCUS", this.handleWindowFocus), null === (e = this.onTerminate) || void 0 === e || e.call(this), this.maybeFlushSeenItems(0)
                    }, this.handleFeedItemFlush = e => {
                        let {
                            id: t,
                            force: n
                        } = e;
                        this._id === t && this.maybeFlushSeenItems(n)
                    }, this.handleFeedItemSeen = e => {
                        var t;
                        let n = e.id,
                            i = e.timestampMillis,
                            s = e.feedItemId;
                        if (n !== this._id) return;
                        if (this._paused) {
                            this._pausedFeedItemIds.add(s);
                            return
                        }
                        let l = this.getTrackedFeedItem(s),
                            r = l.maybeMarkSeen(i);
                        null === (t = this.onFeedItemSeen) || void 0 === t || t.call(this, s, r)
                    }, this.handleFeedItemUnseen = e => {
                        var t;
                        let n = e.id,
                            i = e.timestampMillis,
                            s = e.feedItemId;
                        if (n !== this._id) return;
                        this._paused && this._pausedFeedItemIds.delete(s);
                        let l = this.getTrackedFeedItem(s),
                            r = l.maybeMarkUnseen(i);
                        null === (t = this.onFeedItemUnseen) || void 0 === t || t.call(this, s, r), this.maybeFlushSeenItems()
                    }, this.getTrackedFeedItem = e => (null == this.trackedFeedItems[e] && (this.trackedFeedItems[e] = new d), this.trackedFeedItems[e]), this.getVisibleFeedItemIds = () => {
                        let e = Object.keys(this.trackedFeedItems);
                        return new Set(e.filter(e => {
                            var t;
                            return null === (t = this.trackedFeedItems[e]) || void 0 === t ? void 0 : t.isVisible()
                        }))
                    }, this.handleDrawerClose = () => {
                        this._isReactNavigationFocused && this.resume()
                    }, this.handleDrawerOpen = () => {
                        this._isReactNavigationFocused && this.pause()
                    }, this.handleAppStateUpdate = e => {
                        let {
                            state: t
                        } = e;
                        "active" === t && this._isReactNavigationFocused && this.resume(), "background" === t && (this._isReactNavigationFocused && this.pause(), this.maybeFlushSeenItems(0))
                    }, this.clearPausedFeedItemIds = () => {
                        this._pausedFeedItemIds = new Set, this._paused = !1
                    }, this.pause = () => {
                        if (this._paused) return;
                        let e = this.getVisibleFeedItemIds();
                        e.forEach(e => {
                            this.handleFeedItemUnseen({
                                id: this._id,
                                feedItemId: e,
                                timestampMillis: Date.now(),
                                type: "ANALYTICS_FEED_ITEM_UNSEEN"
                            })
                        }), this._paused = !0, this._pausedFeedItemIds = e
                    }, this.resume = () => {
                        this._paused && (this._paused = !1, this._pausedFeedItemIds.forEach(e => {
                            this.handleFeedItemSeen({
                                id: this._id,
                                feedItemId: e,
                                timestampMillis: Date.now(),
                                type: "ANALYTICS_FEED_ITEM_SEEN"
                            })
                        }), this.clearPausedFeedItemIds())
                    }, this.handleReactNavigationFocus = (e, t) => {
                        this._isReactNavigationFocused = e, this._isReactNavigationFocused && !t ? this.resume() : this.pause()
                    }, this.handleWindowFocus = e => {
                        this._windowId === e.windowId && (e.focused ? this.resume() : this.pause())
                    }, this.trackedFeedItems = {}, this._id = e, this._windowId = t, this._pausedFeedItemIds = new Set, this._paused = null != n && n, this._isReactNavigationFocused = !0, this._lastFlushTimeMillis = Date.now()
                }
            }
        },
        98013: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                makeDesktopDownloadURL: function() {
                    return o
                },
                getPlatformReadableName: function() {
                    return c
                },
                getCurrentPlatformDownloadURL: function() {
                    return h
                },
                getMobileDownloadLink: function() {
                    return f
                }
            });
            var i = n("597755"),
                s = n.n(i),
                l = n("815157"),
                r = n("271938"),
                a = n("49111");
            let u = "linux";

            function o(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 ? arguments[2] : void 0;
                return "".concat(a.DownloadLinks.DESKTOP).concat(t ? "/ptb" : "", "?platform=").concat(e).concat(null != n ? "&format=".concat(n) : "")
            }

            function d() {
                var e;
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null === (e = s.os) || void 0 === e ? void 0 : e.family;
                return null == t ? "win" : -1 !== t.indexOf("Ubuntu") || -1 !== t.indexOf("Debian") || -1 !== t.indexOf("Fedora") || -1 !== t.indexOf("Red Hat") || -1 !== t.indexOf("SuSE") || -1 !== t.indexOf("Linux") ? u : -1 !== t.indexOf("OS X") ? "osx" : "win"
            }

            function c(e) {
                return ({
                    win: "Windows",
                    osx: "Mac",
                    [u]: "Linux"
                })[d(e)]
            }

            function h() {
                let e = d();
                return o(e, !1, e === u ? "tar.gz" : null)
            }

            function f(e, t, n) {
                let i = null != n ? n.toString() : null;
                switch (t) {
                    case "iOS":
                        return (0, l.default)(null != i ? i : "https://itunes.apple.com/us/app/discord-chat-for-games/id985746746", {
                            utmSource: e,
                            fingerprint: r.default.getFingerprint(),
                            attemptId: (0, l.generateAttemptId)()
                        });
                    case "Android":
                        return (0, l.default)(null != i ? i : "https://play.google.com/store/apps/details", {
                            utmSource: e,
                            id: "com.discord",
                            fingerprint: r.default.getFingerprint(),
                            attemptId: (0, l.generateAttemptId)()
                        });
                    default:
                        return null != i ? i : "https://www.discord.com"
                }
            }
        }
    }
]);