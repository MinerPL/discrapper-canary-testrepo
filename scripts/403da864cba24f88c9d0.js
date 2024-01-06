(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["46146"], {
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
        53708: function(e, t, n) {
            "use strict";
            e.exports = n.p + "f6c7b8245d3a54cf98b2.png"
        },
        284434: function(e, t, n) {
            "use strict";
            e.exports = n.p + "51063f34b3960c1d5da8.svg"
        },
        315956: function(e, t, n) {
            "use strict";
            e.exports = n.p + "f92a8b5812e2da52a179.svg"
        },
        666020: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                subscribeMembers: function() {
                    return r
                },
                unsubscribeMembers: function() {
                    return l
                },
                subscribeChannel: function() {
                    return o
                },
                subscribeChannelDimensions: function() {
                    return a
                }
            }), n("424973");
            var i = n("913144"),
                u = n("696605");

            function r(e, t) {
                i.default.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_MEMBERS_ADD",
                    guildId: e,
                    userIds: t
                })
            }

            function l(e, t) {
                i.default.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_MEMBERS_REMOVE",
                    guildId: e,
                    userIds: t
                })
            }

            function o(e, t, n) {
                i.default.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_CHANNEL",
                    guildId: e,
                    channelId: t,
                    ranges: n
                })
            }

            function a(e) {
                let {
                    guildId: t,
                    channelId: n,
                    y: i,
                    height: r,
                    rowHeight: l
                } = e;

                function a(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    return Math.max(0, Math.ceil(Math.ceil(e / l)) + t)
                }
                let s = [];

                function c(e) {
                    let t = e + (u.MINIMUM_RANGE - 1);
                    return s.push([e, t]), t + 1
                }
                let d = a(.5 * r),
                    E = a(i, -d),
                    f = a(i + r, d);
                for (E > 0 && (E = Math.max(c(0), E)), E = Math.floor(E / u.MINIMUM_RANGE) * u.MINIMUM_RANGE; E <= f;) E = c(E);
                o(t, n, s)
            }
        },
        31745: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CirclePlusIcon: function() {
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var u = n("669491"),
                r = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    secondaryColor: l = "transparent",
                    secondaryColorClass: o = "",
                    color: a = u.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...c
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, r.default)(c),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, i.jsx)("circle", {
                        cx: "12",
                        cy: "12",
                        r: "10",
                        fill: "string" == typeof l ? l : l.css,
                        className: o
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22Zm0-17a1 1 0 0 1 1 1v4h4a1 1 0 1 1 0 2h-4v4a1 1 0 1 1-2 0v-4H7a1 1 0 1 1 0-2h4V7a1 1 0 0 1 1-1Z",
                        clipRule: "evenodd",
                        className: s
                    })]
                })
            }
        },
        504318: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PencilIcon: function() {
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var u = n("669491"),
                r = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = u.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...a
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, r.default)(a),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        d: "m13.96 5.46 4.58 4.58a1 1 0 0 0 1.42 0l1.38-1.38a2 2 0 0 0 0-2.82l-3.18-3.18a2 2 0 0 0-2.82 0l-1.38 1.38a1 1 0 0 0 0 1.42ZM2.11 20.16l.73-4.22a3 3 0 0 1 .83-1.61l7.87-7.87a1 1 0 0 1 1.42 0l4.58 4.58a1 1 0 0 1 0 1.42l-7.87 7.87a3 3 0 0 1-1.6.83l-4.23.73a1.5 1.5 0 0 1-1.73-1.73Z",
                        className: o
                    })
                })
            }
        },
        424823: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PlusSmallIcon: function() {
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var u = n("669491"),
                r = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = u.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...a
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, r.default)(a),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        d: "M13 6a1 1 0 1 0-2 0v5H6a1 1 0 1 0 0 2h5v5a1 1 0 1 0 2 0v-5h5a1 1 0 1 0 0-2h-5V6Z",
                        className: o
                    })
                })
            }
        },
        125094: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ScreenArrowIcon: function() {
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var u = n("669491"),
                r = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = u.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...a
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, r.default)(a),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, i.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        fillRule: "evenodd",
                        d: "M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5Zm16 3a1 1 0 0 0-.3-.7l-3-3a1 1 0 1 0-1.4 1.4L14.58 7H13a6 6 0 0 0-6 6 1 1 0 1 0 2 0 4 4 0 0 1 4-4h1.59l-1.3 1.3a1 1 0 0 0 1.42 1.4l3-3A1 1 0 0 0 18 8Z",
                        clipRule: "evenodd",
                        className: o
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        d: "M13 19.5c0 .28.22.5.5.5H15a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h1.5a.5.5 0 0 0 .5-.5v-2c0-.28.22-.5.5-.5h1c.28 0 .5.22.5.5v2Z",
                        className: o
                    })]
                })
            }
        },
        197801: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SettingsIcon: function() {
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var u = n("669491"),
                r = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = u.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...a
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, r.default)(a),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        fillRule: "evenodd",
                        d: "M10.56 1.1c-.46.05-.7.53-.64.98.18 1.16-.19 2.2-.98 2.53-.8.33-1.79-.15-2.49-1.1-.27-.36-.78-.52-1.14-.24-.77.59-1.45 1.27-2.04 2.04-.28.36-.12.87.24 1.14.96.7 1.43 1.7 1.1 2.49-.33.8-1.37 1.16-2.53.98-.45-.07-.93.18-.99.64a11.1 11.1 0 0 0 0 2.88c.06.46.54.7.99.64 1.16-.18 2.2.19 2.53.98.33.8-.14 1.79-1.1 2.49-.36.27-.52.78-.24 1.14.59.77 1.27 1.45 2.04 2.04.36.28.87.12 1.14-.24.7-.95 1.7-1.43 2.49-1.1.8.33 1.16 1.37.98 2.53-.07.45.18.93.64.99a11.1 11.1 0 0 0 2.88 0c.46-.06.7-.54.64-.99-.18-1.16.19-2.2.98-2.53.8-.33 1.79.14 2.49 1.1.27.36.78.52 1.14.24.77-.59 1.45-1.27 2.04-2.04.28-.36.12-.87-.24-1.14-.96-.7-1.43-1.7-1.1-2.49.33-.8 1.37-1.16 2.53-.98.45.07.93-.18.99-.64a11.1 11.1 0 0 0 0-2.88c-.06-.46-.54-.7-.99-.64-1.16.18-2.2-.19-2.53-.98-.33-.8.14-1.79 1.1-2.49.36-.27.52-.78.24-1.14a11.07 11.07 0 0 0-2.04-2.04c-.36-.28-.87-.12-1.14.24-.7.96-1.7 1.43-2.49 1.1-.8-.33-1.16-1.37-.98-2.53.07-.45-.18-.93-.64-.99a11.1 11.1 0 0 0-2.88 0ZM16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z",
                        clipRule: "evenodd",
                        className: o
                    })
                })
            }
        },
        997289: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useAnalyticsContext: function() {
                    return r
                }
            });
            var i = n("884691"),
                u = n("599110");
            let r = () => i.useContext(u.AnalyticsContext)
        },
        750560: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useSubscribeGuildMembers: function() {
                    return o
                }
            }), n("37983");
            var i = n("884691"),
                u = n("917351"),
                r = n.n(u);
            n("233736");
            var l = n("666020");

            function o(e) {
                i.useEffect(() => (r.forEach(e, (e, t) => (0, l.subscribeMembers)(t, e)), () => {
                    r.forEach(e, (e, t) => (0, l.unsubscribeMembers)(t, e))
                }), [e])
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
            var i = n("37983"),
                u = n("884691"),
                r = n("516555"),
                l = n("65597"),
                o = n("206230"),
                a = n("49111");
            let s = {
                    confettiCanvas: null,
                    cannon: null,
                    createConfetti: () => void 0,
                    createConfettiAt: () => void 0,
                    createMultipleConfetti: () => [],
                    createMultipleConfettiAt: () => [],
                    addClickListener: () => a.NOOP,
                    removeClickListener: a.NOOP
                },
                c = u.createContext(s);

            function d(e) {
                let {
                    children: t,
                    confettiCanvas: n,
                    spriteCanvas: a,
                    baseConfig: d,
                    addClickListener: E,
                    removeClickListener: f
                } = e, I = (0, r.useConfettiCannon)(n, a), _ = (0, l.default)([o.default], () => o.default.useReducedMotion), S = u.useMemo(() => _ ? s : {
                    confettiCanvas: n,
                    cannon: I,
                    createConfetti: (e, t) => I.createConfetti({
                        ...d,
                        ...e
                    }, t),
                    createConfettiAt: (e, t, n, i) => I.createConfetti({
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
                        return I.createMultipleConfetti({
                            ...d,
                            ...e
                        }, t, n)
                    },
                    createMultipleConfettiAt: function(e, t, n) {
                        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 20,
                            u = arguments.length > 4 ? arguments[4] : void 0;
                        return I.createMultipleConfetti({
                            ...d,
                            position: {
                                type: "static",
                                value: {
                                    x: e,
                                    y: t
                                }
                            },
                            ...n
                        }, i, u)
                    },
                    addClickListener: E,
                    removeClickListener: f
                }, [E, d, I, n, _, f]);
                return (0, i.jsx)(c.Provider, {
                    value: S,
                    children: t
                })
            }
        },
        962199: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            }), n("222007");
            var i = n("917351"),
                u = n.n(i),
                r = n("446674"),
                l = n("913144"),
                o = n("398604"),
                a = n("813006"),
                s = n("730647");
            let c = !1,
                d = {},
                E = {},
                f = {},
                I = e => (f[e.guild_scheduled_event.id] = new a.default(e.guild_scheduled_event.guild), E[e.guild_scheduled_event.id] = e.guild_scheduled_event, {
                    channelId: e.directory_channel_id,
                    scheduledEventId: e.entity_id,
                    type: s.DirectoryEntryTypes.GUILD_SCHEDULED_EVENT,
                    authorId: e.author_id,
                    createdAt: e.created_at
                });
            class _ extends r.default.Store {
                isFetching() {
                    return c
                }
                getEventDirectoryEntries(e) {
                    if (null != e) return d[e]
                }
                getCachedGuildByEventId(e) {
                    var t;
                    return null !== (t = f[e]) && void 0 !== t ? t : void 0
                }
                getCachedGuildScheduledEventById(e) {
                    var t;
                    return null !== (t = E[e]) && void 0 !== t ? t : void 0
                }
            }
            _.displayName = "EventDirectoryStore";
            var S = new _(l.default, {
                EVENT_DIRECTORY_FETCH_START: function() {
                    c = !0
                },
                EVENT_DIRECTORY_FETCH_SUCCESS: function(e) {
                    let {
                        channelId: t,
                        entries: n
                    } = e;
                    c = !1;
                    let i = u.sortBy([...n], [function(e) {
                            return (0, o.scheduledEventSort)(e.guild_scheduled_event)
                        }]),
                        r = u.map(i, I);
                    d[t] = r
                },
                EVENT_DIRECTORY_FETCH_FAILURE: function() {
                    c = !1
                }
            })
        },
        390236: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("884691");
            let u = i.createContext(void 0);
            var r = u
        },
        689226: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getRoleIconData: function() {
                    return d
                },
                replaceRoleIconSourceSize: function() {
                    return E
                },
                isRoleIconAssetUrl: function() {
                    return I
                },
                canGuildUseRoleIcons: function() {
                    return _
                }
            }), n("781738");
            var i = n("867805"),
                u = n("407063"),
                r = n("315102"),
                l = n("773336"),
                o = n("49111");
            let a = "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.CDN_HOST, "/role-icons"),
                s = "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT),
                c = (0, l.isAndroid)(),
                d = (e, t) => {
                    if (null == e) return null;
                    let n = null != e.unicodeEmoji ? i.default.getByName(i.default.convertSurrogateToName(e.unicodeEmoji, !1)) : void 0;
                    return {
                        customIconSrc: f(e, t),
                        unicodeEmoji: null != n ? n : void 0
                    }
                },
                E = (e, t) => e.replace(/size=[0-9]+/g, "size=".concat((0, u.getBestMediaProxySize)(t * (0, u.getDevicePixelRatio)()))),
                f = (e, t) => {
                    let {
                        id: n,
                        icon: i
                    } = e;
                    if (null == i) return;
                    if (i.startsWith("data:")) return i;
                    let l = r.SUPPORTS_WEBP ? "webp" : "png",
                        d = "",
                        E = "quality=lossless";
                    return (null != t && (d = "size=" + (0, u.getBestMediaProxySize)(t * (0, u.getDevicePixelRatio)()), E = c ? "" : "&" + E), null != window.GLOBAL_ENV.CDN_HOST) ? "".concat(a, "/").concat(n, "/").concat(i, ".").concat(l, "?").concat(d).concat(E) : "".concat(s).concat(o.Endpoints.ROLE_ICON(n, i), "?").concat(d)
                },
                I = e => e.startsWith(a) || e.startsWith("".concat(s, "/roles")) && e.includes("/icons/"),
                _ = (e, t) => {
                    var n;
                    let i = (null == t ? void 0 : null === (n = t.tags) || void 0 === n ? void 0 : n.subscription_listing_id) != null;
                    return i || e.features.has(o.GuildFeatures.ROLE_ICONS)
                }
        },
        929423: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                saveGuildIdentityChanges: function() {
                    return o
                },
                setCurrentGuild: function() {
                    return a
                },
                initGuildIdentitySettings: function() {
                    return s
                },
                closeGuildIdentitySettings: function() {
                    return c
                },
                resetAndCloseGuildIdentityForm: function() {
                    return d
                },
                setPendingAvatar: function() {
                    return E
                },
                setPendingBanner: function() {
                    return f
                },
                setPendingBio: function() {
                    return I
                },
                setPendingPronouns: function() {
                    return _
                },
                setPendingNickname: function() {
                    return S
                },
                setPendingThemeColors: function() {
                    return T
                },
                resetPendingMemberChanges: function() {
                    return N
                },
                resetPendingProfileChanges: function() {
                    return v
                },
                resetAllPending: function() {
                    return C
                },
                clearErrors: function() {
                    return h
                },
                setDisableSubmit: function() {
                    return p
                }
            }), n("70102");
            var i = n("872717"),
                u = n("913144"),
                r = n("54239"),
                l = n("49111");
            async function o(e, t) {
                let {
                    nick: n,
                    avatar: r
                } = t;
                if (null == e) throw Error("Need guildId");
                u.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SUBMIT"
                });
                try {
                    let t = await i.default.patch({
                        url: l.Endpoints.SET_GUILD_MEMBER(e),
                        body: {
                            nick: n,
                            avatar: r
                        },
                        oldFormErrors: !0
                    });
                    return u.default.dispatch({
                        type: "GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS"
                    }), u.default.dispatch({
                        type: "GUILD_MEMBER_PROFILE_UPDATE",
                        guildMember: t.body,
                        guildId: e
                    }), t
                } catch (t) {
                    let e = t.body;
                    (null == e ? void 0 : e.username) != null && (e.nick = e.username, delete e.username), u.default.dispatch({
                        type: "GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE",
                        errors: t.body
                    })
                }
            }

            function a(e) {
                u.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_GUILD",
                    guild: e
                })
            }

            function s(e, t) {
                u.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_INIT",
                    guild: e,
                    analyticsLocations: t
                })
            }

            function c() {
                u.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_CLOSE"
                }), (0, r.popLayer)()
            }

            function d() {
                u.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM"
                })
            }

            function E(e) {
                u.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR",
                    avatar: e
                })
            }

            function f(e) {
                u.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER",
                    banner: e
                })
            }

            function I(e) {
                u.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO",
                    bio: e
                })
            }

            function _(e) {
                u.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS",
                    pronouns: e
                })
            }

            function S(e) {
                u.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME",
                    nickname: e
                })
            }

            function T(e) {
                u.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS",
                    themeColors: e
                })
            }

            function N() {
                u.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES"
                })
            }

            function v() {
                u.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES"
                })
            }

            function C() {
                u.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING"
                })
            }

            function h() {
                u.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS"
                })
            }

            function p(e) {
                u.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_DISABLE_SUBMIT",
                    disable: e
                })
            }
        },
        424562: function(e, t, n) {
            "use strict";
            let i, u, r, l, o, a, s, c, d;
            n.r(t), n.d(t, {
                default: function() {
                    return L
                }
            });
            var E = n("446674"),
                f = n("913144"),
                I = n("49111");
            let _ = I.FormStates.CLOSED,
                S = {},
                T = !1;

            function N() {
                _ = I.FormStates.CLOSED, S = {}, s = null, c = void 0, d = []
            }

            function v() {
                C(), h(), S = {}, _ = I.FormStates.OPEN
            }

            function C() {
                i = void 0, o = void 0
            }

            function h() {
                u = void 0, r = void 0, l = void 0, a = void 0
            }
            class p extends E.default.Store {
                getFormState() {
                    return _
                }
                getErrors() {
                    return S
                }
                showNotice() {
                    return void 0 !== i || void 0 !== u || void 0 !== r || void 0 !== l || void 0 !== o || void 0 !== a
                }
                getPendingAvatar() {
                    return i
                }
                getPendingBanner() {
                    return u
                }
                getPendingBio() {
                    return r
                }
                getPendingNickname() {
                    return o
                }
                getPendingPronouns() {
                    return l
                }
                getPendingAccentColor() {
                    return o
                }
                getPendingThemeColors() {
                    return a
                }
                getAllPending() {
                    return {
                        pendingAvatar: i,
                        pendingBanner: u,
                        pendingBio: r,
                        pendingPronouns: l,
                        pendingNickname: o,
                        pendingThemeColors: a
                    }
                }
                getGuild() {
                    return s
                }
                getSource() {
                    return c
                }
                getAnalyticsLocations() {
                    return d
                }
                getIsDisableSubmit() {
                    return T
                }
            }
            p.displayName = "GuildIdentitySettingsStore";
            var L = new p(f.default, {
                GUILD_IDENTITY_SETTINGS_INIT: function(e) {
                    s = e.guild, _ = I.FormStates.OPEN, S = {}, c = e.source, d = e.analyticsLocations
                },
                GUILD_IDENTITY_SETTINGS_CLOSE: N,
                GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM: function() {
                    v(), N()
                },
                GUILD_IDENTITY_SETTINGS_SET_GUILD: function(e) {
                    s = e.guild, S = {}
                },
                GUILD_IDENTITY_SETTINGS_SUBMIT: function() {
                    _ = I.FormStates.SUBMITTING, S = {}
                },
                GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE: function(e) {
                    var t;
                    if (_ !== I.FormStates.SUBMITTING) return !1;
                    _ = I.FormStates.OPEN, S = null !== (t = e.errors) && void 0 !== t ? t : {}
                },
                USER_PROFILE_UPDATE_FAILURE: function(e) {
                    _ = I.FormStates.OPEN, S = e.errors
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR: function(e) {
                    let {
                        avatar: t
                    } = e;
                    i = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER: function(e) {
                    let {
                        banner: t
                    } = e;
                    u = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO: function(e) {
                    let {
                        bio: t
                    } = e;
                    r = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS: function(e) {
                    let {
                        pronouns: t
                    } = e;
                    l = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME: function(e) {
                    let {
                        nickname: t
                    } = e;
                    o = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS: function(e) {
                    let {
                        themeColors: t
                    } = e;
                    a = t
                },
                GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES: C,
                GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES: h,
                GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING: v,
                GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS: v,
                GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS: function() {
                    S = {}
                },
                GUILD_IDENTITY_SETTINGS_SET_DISABLE_SUBMIT: function(e) {
                    let {
                        disable: t
                    } = e;
                    T = t
                }
            })
        },
        270161: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CREATE_GUILD_EVENT_CORE_PERMISSIONS: function() {
                    return l
                },
                CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS: function() {
                    return o
                },
                CREATE_GUILD_EVENT_STAGE_CHANNEL_PERMISSIONS: function() {
                    return a
                }
            });
            var i = n("316693"),
                u = n("923510"),
                r = n("49111");
            let l = r.Permissions.VIEW_CHANNEL,
                o = i.default.combine(l, r.Permissions.CONNECT),
                a = i.default.combine(l, u.MODERATE_STAGE_CHANNEL_PERMISSIONS)
        },
        152475: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                canEveryoneRoleViewEvent: function() {
                    return I
                },
                isGuildEventInvitable: function() {
                    return _
                },
                default: function() {
                    return S
                }
            }), n("222007");
            var i = n("446674"),
                u = n("242757"),
                r = n("834052"),
                l = n("42203"),
                o = n("923959"),
                a = n("305961"),
                s = n("957255"),
                c = n("991170"),
                d = n("398604"),
                E = n("745049"),
                f = n("49111");

            function I(e) {
                var t;
                let [n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [l.default];
                let {
                    entityType: i,
                    channelId: u
                } = "entity_type" in (t = e) ? {
                    entityType: t.entity_type,
                    channelId: t.channel_id
                } : t, r = i === E.GuildScheduledEventEntityTypes.EXTERNAL;
                if (r) return !0;
                let o = n.getChannel(u);
                return null != o && c.default.canEveryoneRole(f.Permissions.VIEW_CHANNEL, o)
            }

            function _(e) {
                let [t, n, i, c] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [o.default, l.default, a.default, r.default];
                if ((0, d.isGuildEventEnded)(e)) return !1;
                let {
                    guild_id: f,
                    channel_id: _
                } = e, S = e.entity_type === E.GuildScheduledEventEntityTypes.EXTERNAL, T = S ? t.getDefaultChannel(e.guild_id) : n.getChannel(_), N = i.getGuild(f), v = c.getStageInstanceByChannel(_);
                return !!(0, u.canViewInviteModal)(s.default, N, T, v) && null != T && I(e, [n])
            }

            function S(e) {
                return (0, i.useStateFromStores)([o.default, l.default, a.default, r.default], () => _(e, [o.default, l.default, a.default, r.default]), [e])
            }
        },
        598639: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("446674"),
                u = n("962199"),
                r = n("305961");

            function l(e, t) {
                return (0, i.useStateFromStoresObject)([r.default, u.default], () => {
                    let n = r.default.getGuild(e),
                        i = null != n;
                    return null == n && null != t && (n = u.default.getCachedGuildByEventId(t)), {
                        isMember: i,
                        guild: n
                    }
                }, [e, t])
            }
        },
        669195: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SHARE_EVENT_DETAILS_LINK: function() {
                    return i
                }
            });
            let i = e => {
                let {
                    guildId: t,
                    guildEventId: n
                } = e;
                return "https://discord.com/events/".concat(t, "/").concat(n)
            }
        },
        369404: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return D
                }
            });
            var i = n("37983");
            n("884691");
            var u = n("446674"),
                r = n("77078"),
                l = n("272030"),
                o = n("851387"),
                a = n("233322"),
                s = n("157186"),
                c = n("817963"),
                d = n("393414"),
                E = n("716214"),
                f = n("923959"),
                I = n("305961"),
                _ = n("957255"),
                S = n("599110"),
                T = n("306160"),
                N = n("322224"),
                v = n("152475"),
                C = n("397680"),
                h = n("613767"),
                p = n("822516"),
                L = n("669195"),
                g = n("936965"),
                G = n("745049"),
                m = n("49111"),
                R = n("782340");

            function D(e) {
                let {
                    guild: t,
                    channel: D,
                    guildScheduledEvent: M,
                    isActive: P,
                    recurrenceId: U,
                    onActionTaken: A
                } = e, {
                    scheduled_start_time: y,
                    id: O,
                    entity_type: x,
                    guild_id: V
                } = M, {
                    canManageGuildEvent: b
                } = (0, c.useManageResourcePermissions)(null != D ? D : t), F = b(M), H = (0, v.default)(M), w = (0, h.useIsChannelPublic)(null == D ? void 0 : D.id, M.id), {
                    withinStartWindow: B
                } = (0, p.getEventTimeData)(y), k = (0, u.useStateFromStores)([_.default], () => (null == D ? !void 0 : !D.isGuildVocal()) || _.default.can(m.Permissions.CONNECT, D), [D]), j = (0, s.useShowMemberVerificationGate)(V), Y = (0, C.default)(U, O);

                function K(e) {
                    e.stopPropagation(), (0, g.default)(O, U, V)
                }
                async function Z(e) {
                    e.stopPropagation(), await o.default.joinGuild(V), I.default.addConditionalChangeListener(() => {
                        let t = I.default.getGuild(V);
                        return null == t || (!P && K(e), z(e), !1)
                    })
                }

                function z(e) {
                    e.stopPropagation();
                    let t = f.default.getDefaultChannel(V);
                    (0, r.closeAllModals)(), (0, d.transitionToGuild)(V, null == t ? void 0 : t.id)
                }
                return {
                    onDeleteClick: F ? function(e) {
                        e.stopPropagation(), F && !P && (0, r.openModal)(e => (0, i.jsx)(r.ConfirmModal, {
                            ...e,
                            header: R.default.Messages.GUILD_EVENT_DELETE_CONFIRM_HEADER,
                            confirmText: R.default.Messages.DELETE,
                            cancelText: R.default.Messages.CANCEL,
                            onConfirm: () => N.default.deleteGuildEvent(O, V),
                            children: (0, i.jsx)(r.Text, {
                                variant: "text-md/normal",
                                children: R.default.Messages.GUILD_EVENT_DELETE_CONFIRM_BODY
                            })
                        }))
                    } : void 0,
                    onContextMenu: function(e) {
                        e.stopPropagation(), null != t && (0, l.openContextMenuLazy)(e, async () => {
                            let {
                                default: e
                            } = await n.el("110374").then(n.bind(n, "110374"));
                            return n => (0, i.jsx)(e, {
                                guildEventId: O,
                                recurrenceId: U,
                                channel: D,
                                guild: t,
                                ...n
                            })
                        })
                    },
                    onJoinClick: k || j ? function(e) {
                        if (e.stopPropagation(), j) {
                            null == A || A(), (0, a.openMemberVerificationModal)(V);
                            return
                        }(null == D ? void 0 : D.isGuildStageVoice()) ? ((0, E.connectAndOpen)(D), null == A || A()) : (null == D ? void 0 : D.isGuildVoice()) && (N.default.joinVoiceEvent(D.guild_id, D.id), null == A || A())
                    } : void 0,
                    onRsvpClick: K,
                    onStartClick: F && B && !(null == Y ? void 0 : Y.is_canceled) ? function(e) {
                        e.stopPropagation(), (0, r.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await n.el("298843").then(n.bind(n, "298843"));
                            return t => (0, i.jsx)(e, {
                                ...t,
                                event: M,
                                onSuccess: A
                            })
                        })
                    } : void 0,
                    onInviteClick: function(e) {
                        if (e.stopPropagation(), null != t) {
                            if (!H || !w) {
                                let e = (0, L.SHARE_EVENT_DETAILS_LINK)({
                                    guildId: V,
                                    guildEventId: O
                                });
                                (0, T.copy)(e), S.default.track(m.AnalyticEvents.GUILD_SCHEDULED_EVENT_LINK_COPIED, {
                                    guild_id: V,
                                    guild_scheduled_event_id: O
                                });
                                return
                            }(0, r.openModalLazy)(async () => {
                                let {
                                    default: e
                                } = await n.el("310688").then(n.bind(n, "310688"));
                                return n => (0, i.jsx)(e, {
                                    ...n,
                                    guild: t,
                                    channel: D,
                                    guildScheduledEvent: M,
                                    source: m.InstantInviteSources.GUILD_EVENTS
                                })
                            })
                        }
                    },
                    onEndClick: F && x === G.GuildScheduledEventEntityTypes.EXTERNAL && P ? function(e) {
                        if (e.stopPropagation(), !F) return;
                        let t = () => {
                            N.default.endEvent(O, V), (0, r.closeAllModals)()
                        };
                        (0, r.openModal)(e => (0, i.jsx)(r.ConfirmModal, {
                            ...e,
                            header: R.default.Messages.END_EVENT,
                            confirmText: R.default.Messages.GUILD_EVENT_END_PROMPT_CONFIRM,
                            cancelText: R.default.Messages.CANCEL,
                            onConfirm: t,
                            children: (0, i.jsx)(r.Text, {
                                variant: "text-md/normal",
                                children: R.default.Messages.GUILD_EVENT_EXTERNAL_END_PROMPT_TITLE
                            })
                        }))
                    } : void 0,
                    onJoinGuildClick: Z,
                    onGoToGuildClick: z
                }
            }
        },
        922770: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("446674"),
                u = n("305961"),
                r = n("49111");

            function l(e) {
                return (0, i.useStateFromStores)([u.default], () => {
                    var t;
                    if (null == e) return !1;
                    let n = u.default.getGuild(e);
                    return null !== (t = null == n ? void 0 : n.hasFeature(r.GuildFeatures.HUB)) && void 0 !== t && t
                }, [e])
            }
        },
        242757: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                canViewInviteModal: function() {
                    return u
                }
            });
            var i = n("49111");

            function u(e, t, n, u) {
                let r = null != n ? n : t,
                    l = null != r && e.can(i.Permissions.CREATE_INSTANT_INVITE, r);
                return l || null != t && null != t.vanityURLCode || (null == u ? void 0 : u.invite_code) != null
            }
        },
        817963: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useManageResourcePermissions: function() {
                    return _
                },
                getManageResourcePermissions: function() {
                    return S
                },
                useHasInventoryGuildSettingsPermission: function() {
                    return T
                },
                useShouldShowInventoryGuildSettingsCoachmark: function() {
                    return N
                }
            }), n("222007");
            var i = n("884691"),
                u = n("316693"),
                r = n("446674"),
                l = n("252931"),
                o = n("813006");
            n("923959");
            var a = n("957255"),
                s = n("697218");
            n("991170");
            var c = n("270161"),
                d = n("843455");
            let E = {
                    canCreateExpressions: !1,
                    canCreateGuildEvent: !1,
                    canManageAllExpressions: !1,
                    canManageAllEvents: !1,
                    canManageGuildExpression: () => !1,
                    canManageGuildEvent: () => !1
                },
                f = (e, t, n, i) => {
                    if (null == e) return !1;
                    if (n) return !0;
                    if ("creator_id" in e) return i && null != t && e.creator_id === t.id;
                    if ("userId" in e) return i && null != t && e.userId === t.id;
                    if ("user" in e) {
                        var u;
                        return i && null != t && (null === (u = e.user) || void 0 === u ? void 0 : u.id) === t.id
                    }
                    return !1
                },
                I = e => {
                    if (null == e) return [d.Permissions.CREATE_EVENTS, d.Permissions.MANAGE_EVENTS];
                    let t = c.CREATE_GUILD_EVENT_CORE_PERMISSIONS;
                    return e.isGuildStageVoice() ? t = c.CREATE_GUILD_EVENT_STAGE_CHANNEL_PERMISSIONS : e.isGuildVoice() && (t = c.CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS), [u.default.combine(t, d.Permissions.CREATE_EVENTS), u.default.combine(t, d.Permissions.MANAGE_EVENTS)]
                },
                _ = e => {
                    let [t, n] = e instanceof o.default ? [d.Permissions.CREATE_EVENTS, d.Permissions.MANAGE_EVENTS] : I(e), [u, l, c, _] = (0, r.useStateFromStoresArray)([a.default], () => [a.default.can(d.Permissions.CREATE_GUILD_EXPRESSIONS, e), a.default.can(d.Permissions.MANAGE_GUILD_EXPRESSIONS, e), a.default.can(t, e), a.default.can(n, e)]), S = (0, r.useStateFromStores)([s.default], () => s.default.getCurrentUser()), T = i.useCallback(e => f(e, S, l, u), [u, l, S]), N = i.useCallback(e => f(e, S, _, c), [_, c, S]);
                    return null == e ? E : {
                        canCreateExpressions: u,
                        canCreateGuildEvent: c,
                        canManageAllExpressions: l,
                        canManageAllEvents: _,
                        canManageGuildExpression: T,
                        canManageGuildEvent: N
                    }
                },
                S = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.default,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s.default,
                        [i, u] = e instanceof o.default ? [d.Permissions.CREATE_EVENTS, d.Permissions.MANAGE_EVENTS] : I(e),
                        r = t.can(d.Permissions.CREATE_GUILD_EXPRESSIONS, e),
                        l = t.can(d.Permissions.MANAGE_GUILD_EXPRESSIONS, e),
                        c = t.can(i, e),
                        _ = t.can(u, e),
                        S = n.getCurrentUser();
                    return null == e ? E : {
                        canCreateExpressions: r,
                        canCreateGuildEvent: c,
                        canManageAllExpressions: l,
                        canManageAllEvents: _,
                        canManageGuildExpression: e => f(e, S, l, r),
                        canManageGuildEvent: e => f(e, S, _, c)
                    }
                },
                T = e => {
                    let t = (0, r.useStateFromStores)([a.default], () => a.default.can(d.Permissions.MANAGE_GUILD, e)),
                        {
                            showSettingsToggle: n
                        } = (0, l.useInventoryGuildSettingsExperiment)({
                            guildId: null == e ? void 0 : e.id
                        });
                    return t && null != n
                },
                N = e => {
                    let t = (0, r.useStateFromStores)([a.default], () => a.default.can(d.Permissions.MANAGE_GUILD, e)),
                        {
                            showSettingsToggle: n,
                            getNewSettingsDescriptionLine1: i
                        } = (0, l.useInventoryGuildSettingsExperiment)({
                            guildId: null == e ? void 0 : e.id
                        });
                    return t && null != n && null != i()
                }
        },
        232268: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var u = n("65597"),
                r = n("880731");

            function l(e) {
                let {
                    children: t,
                    confettiLocation: n
                } = e, l = (0, u.default)([r.default], () => r.default.isEnabled({
                    confettiLocation: n
                }));
                return l ? (0, i.jsx)(i.Fragment, {
                    children: t
                }) : null
            }
        },
        798592: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("884691"),
                u = n("65597"),
                r = n("526887"),
                l = n("880731");

            function o() {
                let {
                    createMultipleConfettiAt: e
                } = i.useContext(r.ConfettiCannonContext), t = (0, u.default)([l.default], () => l.default.getState()), n = i.useCallback(e => ({
                    size: {
                        type: "static-random",
                        minValue: e.confettiSize - 7,
                        maxValue: e.confettiSize + 7
                    }
                }), []), o = i.useMemo(() => ({
                    fire: (i, u, r) => {
                        var l, o;
                        let a = (null == r ? void 0 : r.settings) != null ? {
                                ...t,
                                ...r.settings
                            } : t,
                            s = n(a);
                        e(i, u, s, (null !== (l = null == r ? void 0 : r.count) && void 0 !== l ? l : a.confettiCount) * (null !== (o = null == r ? void 0 : r.countMultiplier) && void 0 !== o ? o : 1), {
                            sprite: null == r ? void 0 : r.sprite
                        })
                    }
                }), [e, n, t]);
                return o
            }
        },
        716849: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                NON_SUBSCRIBER_SENTINEL: function() {
                    return I
                },
                maybeFetchPremiumLikelihood: function() {
                    return S
                },
                useMaybeFetchPremiumLikelihood: function() {
                    return T
                }
            });
            var i = n("884691"),
                u = n("65597"),
                r = n("872717"),
                l = n("913144"),
                o = n("775433"),
                a = n("697218"),
                s = n("10514"),
                c = n("764364"),
                d = n("676572"),
                E = n("646718"),
                f = n("49111");
            let I = "nonSubscriber";
            async function _() {
                try {
                    l.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH"
                    });
                    let {
                        body: e
                    } = await r.default.get({
                        url: f.Endpoints.USER_PREMIUM_LIKELIHOOD
                    });
                    l.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS",
                        premiumLikelihood: function(e) {
                            return {
                                [I]: e.non_subscriber,
                                [E.PremiumSubscriptionSKUs.TIER_0]: e[E.PremiumSubscriptionSKUs.TIER_0],
                                [E.PremiumSubscriptionSKUs.TIER_2]: e[E.PremiumSubscriptionSKUs.TIER_2]
                            }
                        }(e)
                    })
                } catch (e) {
                    404 === e.status ? l.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS"
                    }) : l.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR"
                    })
                }
            }

            function S(e) {
                let {
                    enabled: t,
                    useExpectedValue: n
                } = e.getCurrentConfig({
                    location: "443cca_1"
                }, {
                    autoTrackExposure: !1
                }), i = d.default.shouldFetchPremiumLikelihood(), u = a.default.getCurrentUser();
                N(u, i, t, n)
            }

            function T(e) {
                let {
                    enabled: t,
                    useExpectedValue: n
                } = e.useExperiment({
                    location: "443cca_2"
                }, {
                    autoTrackExposure: !1
                }), r = (0, u.default)([d.default], () => d.default.shouldFetchPremiumLikelihood()), l = (0, u.default)([a.default], () => a.default.getCurrentUser());
                i.useEffect(() => {
                    N(l, r, t, n)
                }, [l, r, t, n])
            }

            function N(e, t, n, i) {
                null != e && !(0, c.isPremium)(e) && n && (t && _(), i && (!s.default.isLoadedForSKU(E.PremiumSubscriptionSKUs.TIER_0) && !s.default.isFetchingForSKU(E.PremiumSubscriptionSKUs.TIER_0) && (0, o.fetchSubscriptionPlansForSKU)(E.PremiumSubscriptionSKUs.TIER_0), !s.default.isLoadedForSKU(E.PremiumSubscriptionSKUs.TIER_2) && !s.default.isFetchingForSKU(E.PremiumSubscriptionSKUs.TIER_2) && (0, o.fetchSubscriptionPlansForSKU)(E.PremiumSubscriptionSKUs.TIER_2)))
            }
        },
        676572: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("446674"),
                u = n("913144");
            let r = {
                    premiumLikelihood: void 0,
                    isFetching: !1,
                    fetched: !1
                },
                l = r;
            class o extends i.default.Store {
                initialize() {
                    l = r
                }
                getState() {
                    return l
                }
                shouldFetchPremiumLikelihood() {
                    return !l.isFetching && !l.fetched
                }
            }
            o.displayName = "UserPremiumLikelihoodStore";
            var a = new o(u.default, {
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH: function() {
                    l.isFetching = !0
                },
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS: function(e) {
                    let {
                        premiumLikelihood: t
                    } = e;
                    l.premiumLikelihood = t, l.fetched = !0, l.isFetching = !1
                },
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR: function() {
                    l.isFetching = !1
                },
                LOGOUT: function() {
                    l.premiumLikelihood = void 0
                }
            })
        },
        552917: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("862205");
            let u = (0, i.createExperiment)({
                kind: "user",
                id: "2022-12_premium_targeted_upsells",
                label: "Premium Targeted Upsells",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Use highest expected value to determine Nitro upsells",
                    config: {
                        enabled: !0,
                        useExpectedValue: !0,
                        useLikelihood: !1
                    }
                }, {
                    id: 2,
                    label: "Use highest likelihood to determine Nitro upsells",
                    config: {
                        enabled: !0,
                        useExpectedValue: !1,
                        useLikelihood: !0
                    }
                }]
            });
            var r = u
        },
        38766: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("884691"),
                u = n("79112"),
                r = n("685665"),
                l = n("929423");
            n("424562");
            var o = n("49111"),
                a = n("397336");

            function s(e) {
                let {
                    guild: t,
                    scrollPosition: n,
                    analyticsLocation: s,
                    analyticsLocations: c,
                    openWithoutBackstack: d = !1
                } = e, {
                    analyticsLocations: E
                } = (0, r.default)(), f = (0, i.useCallback)(() => {
                    null != t && (0, l.initGuildIdentitySettings)(t, null != c ? c : E), u.default.open(o.UserSettingsSections.PROFILE_CUSTOMIZATION, null != t ? a.ProfileCustomizationSubsection.GUILD : a.ProfileCustomizationSubsection.USER_PROFILE, {
                        scrollPosition: n,
                        analyticsLocation: s,
                        analyticsLocations: c,
                        openWithoutBackstack: d
                    })
                }, [t, n, s, c, d, E]);
                return f
            }
        },
        119184: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var i = n("37983");
            n("884691");
            var u = n("414456"),
                r = n.n(u),
                l = n("782340"),
                o = n("53061"),
                a = n("284434"),
                s = n("315956");

            function c(e) {
                let {
                    className: t,
                    children: n
                } = e;
                return (0, i.jsxs)("div", {
                    className: r(o.container, t),
                    children: [(0, i.jsx)("img", {
                        alt: l.default.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
                        src: s,
                        className: r(o.sparkleIcon, o.sparkleBottom)
                    }), n, (0, i.jsx)("img", {
                        alt: l.default.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
                        src: a,
                        className: r(o.sparkleIcon, o.sparkleTop)
                    })]
                })
            }
        },
        37785: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("37983"),
                u = n("884691"),
                r = n("77078"),
                l = n("393414"),
                o = n("49111"),
                a = u.forwardRef(function(e, t) {
                    let {
                        href: n,
                        children: a,
                        onClick: s,
                        onKeyPress: c,
                        focusProps: d,
                        ...E
                    } = e, f = u.useCallback(e => {
                        !e.repeat && ((e.charCode === o.KeyboardKeys.SPACE || e.charCode === o.KeyboardKeys.ENTER) && (e.preventDefault(), null != n && (0, l.transitionTo)(n), null == s || s()), null == c || c(e))
                    }, [n, c, s]), I = u.useCallback(e => {
                        !e.metaKey && !e.shiftKey && 0 === e.button && (e.preventDefault(), e.stopPropagation(), null != n && (0, l.transitionTo)(n), null == s || s())
                    }, [n, s]), _ = (0, i.jsx)("a", {
                        ref: t,
                        href: n,
                        onClick: I,
                        onKeyPress: f,
                        ...E,
                        children: a
                    });
                    return (0, i.jsx)(r.FocusRing, {
                        ...d,
                        children: _
                    })
                })
        },
        191814: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("37983");

            function u(e) {
                let {
                    size: t,
                    horizontal: n = !1
                } = e, u = n ? t : 1, r = n ? 1 : t;
                return (0, i.jsx)("span", {
                    style: {
                        display: "block",
                        width: u,
                        minWidth: u,
                        height: r,
                        minHeight: r
                    }
                })
            }
            n("884691")
        },
        474571: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var u = n("469563"),
                r = n("197801"),
                l = n("75196"),
                o = (0, u.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: u = "currentColor",
                        foreground: r,
                        ...o
                    } = e;
                    return 16 === t || 16 === n ? (0, i.jsx)("svg", {
                        ...(0, l.default)(o),
                        width: t,
                        height: n,
                        viewBox: "0 0 16 16",
                        children: (0, i.jsx)("path", {
                            fill: u,
                            className: r,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14 7V9C14 9 12.5867 9 12.5733 9.00667C12.42 9.58667 12.1733 10.1267 11.84 10.6067L12.74 11.5067L11.4933 12.7533L10.5933 11.8533C10.1133 12.1867 9.57334 12.44 8.99334 12.5867V14H6.99334V12.58C6.41334 12.4333 5.87334 12.18 5.39334 11.8467L4.49333 12.7467L3.24667 11.5L4.14667 10.6C3.81333 10.1267 3.56 9.58 3.41333 9H2V7H3.41333C3.56 6.42 3.81333 5.88 4.14667 5.4L3.24667 4.5L4.5 3.24667L5.4 4.14667C5.87334 3.81333 6.42 3.56 7 3.41333V2H9V3.41333C9.58 3.56667 10.12 3.81333 10.6 4.14667L11.5067 3.25333L12.7533 4.5L11.8533 5.4C12.1867 5.87334 12.44 6.42 12.5867 7H14ZM8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
                        })
                    }) : (0, i.jsx)("svg", {
                        ...(0, l.default)(o),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            fill: u,
                            className: r,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M19.738 10H22V14H19.739C19.498 14.931 19.1 15.798 18.565 16.564L20 18L18 20L16.565 18.564C15.797 19.099 14.932 19.498 14 19.738V22H10V19.738C9.069 19.498 8.203 19.099 7.436 18.564L6 20L4 18L5.436 16.564C4.901 15.799 4.502 14.932 4.262 14H2V10H4.262C4.502 9.068 4.9 8.202 5.436 7.436L4 6L6 4L7.436 5.436C8.202 4.9 9.068 4.502 10 4.262V2H14V4.261C14.932 4.502 15.797 4.9 16.565 5.435L18 3.999L20 5.999L18.564 7.436C19.099 8.202 19.498 9.069 19.738 10ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                        })
                    })
                }, r.SettingsIcon, void 0, {
                    size: 24
                })
        },
        987772: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var u = n("469563"),
                r = n("504318"),
                l = n("75196"),
                o = (0, u.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: u = "currentColor",
                        foreground: r,
                        ...o
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, l.default)(o),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M19.2929 9.8299L19.9409 9.18278C21.353 7.77064 21.353 5.47197 19.9409 4.05892C18.5287 2.64678 16.2292 2.64678 14.817 4.05892L14.1699 4.70694L19.2929 9.8299ZM12.8962 5.97688L5.18469 13.6906L10.3085 18.813L18.0201 11.0992L12.8962 5.97688ZM4.11851 20.9704L8.75906 19.8112L4.18692 15.239L3.02678 19.8796C2.95028 20.1856 3.04028 20.5105 3.26349 20.7337C3.48669 20.9569 3.8116 21.046 4.11851 20.9704Z",
                            className: r,
                            fill: u
                        })
                    })
                }, r.PencilIcon, void 0, {
                    size: 16
                })
        },
        151185: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var u = n("469563"),
                r = n("424823"),
                l = n("75196"),
                o = (0, u.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: u = "currentColor",
                        foreground: r,
                        ...o
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, l.default)(o),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            fill: u,
                            className: r,
                            d: "M20 11.1111H12.8889V4H11.1111V11.1111H4V12.8889H11.1111V20H12.8889V12.8889H20V11.1111Z"
                        })
                    })
                }, r.PlusSmallIcon, void 0, {
                    size: 24
                })
        },
        351825: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var u = n("469563"),
                r = n("31745"),
                l = (0, u.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: u = "currentColor",
                        className: r,
                        foreground: l
                    } = e;
                    return (0, i.jsx)("svg", {
                        className: r,
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            className: l,
                            fill: u,
                            d: "M12 2.00098C6.486 2.00098 2 6.48698 2 12.001C2 17.515 6.486 22.001 12 22.001C17.514 22.001 22 17.515 22 12.001C22 6.48698 17.514 2.00098 12 2.00098ZM17 13.001H13V17.001H11V13.001H7V11.001H11V7.00098H13V11.001H17V13.001Z"
                        })
                    })
                }, r.CirclePlusIcon, void 0, {
                    size: 16
                })
        }
    }
]);