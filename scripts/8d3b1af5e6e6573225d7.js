(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["83117"], {
        766665: function(e, t, n) {
            var l = n("424498");
            e.exports = function(e, t, n) {
                "__proto__" == t && l ? l(e, t, {
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
        533662: function(e, t, n) {
            "use strict";
            e.exports = n.p + "71c2b8b8dce7967a6cba.svg"
        },
        101017: function(e, t, n) {
            "use strict";
            e.exports = n.p + "76db37e93ca50f3fa98b.svg"
        },
        65757: function(e, t, n) {
            "use strict";
            e.exports = n.p + "829f8ef7dcf355fbe141.svg"
        },
        145079: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("414456"),
                s = n.n(a),
                i = n("446674"),
                r = n("77078"),
                u = n("102985"),
                o = n("79798"),
                d = n("754474"),
                c = n("158998"),
                E = n("782340"),
                f = n("892802");

            function _(e) {
                if (e.isSystemUser()) return d.BotTypes.SYSTEM_DM;
                if (e.isClyde()) return d.BotTypes.AI;
                if (e.bot) return d.BotTypes.BOT;
                return null
            }
            let I = e => {
                let {
                    primary: t,
                    secondary: n,
                    botType: a,
                    botVerified: i,
                    discriminatorClass: u,
                    className: d,
                    usernameClass: c,
                    color: _,
                    botClass: I,
                    showStreamerModeTooltip: h
                } = e;
                return (0, l.jsxs)("div", {
                    className: s(f.info, d),
                    children: [(0, l.jsx)(r.Tooltip, {
                        text: E.default.Messages.STREAMER_MODE_ENABLED,
                        shouldShow: h,
                        children: e => (0, l.jsx)("span", {
                            ...e,
                            className: s(f.username, c),
                            style: null != _ ? {
                                color: _
                            } : void 0,
                            children: t
                        })
                    }), null != n ? (0, l.jsx)("span", {
                        className: s(f.infoSpacing, u),
                        children: n
                    }) : void 0, null != a && (0, l.jsx)(o.default, {
                        type: a,
                        className: s(f.infoSpacing, I),
                        verified: i
                    })]
                })
            };
            var h = e => {
                let {
                    hideDiscriminator: t = !1,
                    user: n,
                    nick: a,
                    forceUsername: s,
                    showAccountIdentifier: r,
                    overrideDiscriminator: o,
                    forcePomelo: E,
                    ...f
                } = e, h = (0, i.useStateFromStores)([u.default], () => u.default.hidePersonalInformation), T = h || t || n.isNonUserBot(), N = n.toString(), v = c.default.getName(n), m = s ? N : null != a ? a : v, S = n.isPomelo() || E;
                if (S || m !== N) {
                    let e = m === N && S && s ? c.default.getUserTag(n, {
                            forcePomelo: E
                        }) : m,
                        t = r && e !== "@".concat(N) ? c.default.getUserTag(n) : void 0;
                    return (0, l.jsx)(I, {
                        primary: e,
                        secondary: t,
                        botVerified: n.isVerifiedBot(),
                        botType: _(n),
                        showStreamerModeTooltip: h && e !== v,
                        ...f
                    })
                }
                return (0, l.jsx)(d.default, {
                    name: m,
                    botType: _(n),
                    botVerified: n.isVerifiedBot(),
                    discriminator: T || m !== N ? null : null != o ? o : n.discriminator,
                    ...f
                })
            }
        },
        163725: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                EyeSlashIcon: function() {
                    return i
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("669491"),
                s = n("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: i = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...u
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, s.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, l.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        d: "M1.3 21.3a1 1 0 1 0 1.4 1.4l20-20a1 1 0 0 0-1.4-1.4l-20 20ZM3.16 16.05c.18.24.53.26.74.05l.72-.72c.18-.18.2-.45.05-.66a15.7 15.7 0 0 1-1.43-2.52.48.48 0 0 1 0-.4c.4-.9 1.18-2.37 2.37-3.72C7.13 6.38 9.2 5 12 5c.82 0 1.58.12 2.28.33.18.05.38 0 .52-.13l.8-.8c.25-.25.18-.67-.15-.79A9.79 9.79 0 0 0 12 3C4.89 3 1.73 10.11 1.11 11.7a.83.83 0 0 0 0 .6c.25.64.9 2.15 2.05 3.75Z",
                        className: r
                    }), (0, l.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        d: "M8.18 10.81c-.13.43.36.65.67.34l2.3-2.3c.31-.31.09-.8-.34-.67a4 4 0 0 0-2.63 2.63ZM12.85 15.15c-.31.31-.09.8.34.67a4.01 4.01 0 0 0 2.63-2.63c.13-.43-.36-.65-.67-.34l-2.3 2.3Z",
                        className: r
                    }), (0, l.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        d: "M9.72 18.67a.52.52 0 0 0-.52.13l-.8.8c-.25.25-.18.67.15.79 1.03.38 2.18.61 3.45.61 7.11 0 10.27-7.11 10.89-8.7a.83.83 0 0 0 0-.6c-.25-.64-.9-2.15-2.05-3.75a.49.49 0 0 0-.74-.05l-.72.72a.51.51 0 0 0-.05.66 15.7 15.7 0 0 1 1.43 2.52c.06.13.06.27 0 .4-.4.9-1.18 2.37-2.37 3.72C16.87 17.62 14.8 19 12 19c-.82 0-1.58-.12-2.28-.33Z",
                        className: r
                    })]
                })
            }
        },
        811513: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GroupIcon: function() {
                    return i
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("669491"),
                s = n("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: i = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...u
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, s.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        d: "M14.5 8a3 3 0 1 0-2.7-4.3c-.2.4.06.86.44 1.12a5 5 0 0 1 2.14 3.08c.01.06.06.1.12.1ZM18.44 17.27c.15.43.54.73 1 .73h1.06c.83 0 1.5-.67 1.5-1.5a7.5 7.5 0 0 0-6.5-7.43c-.55-.08-.99.38-1.1.92-.06.3-.15.6-.26.87-.23.58-.05 1.3.47 1.63a9.53 9.53 0 0 1 3.83 4.78ZM12.5 9a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM2 20.5a7.5 7.5 0 0 1 15 0c0 .83-.67 1.5-1.5 1.5a.2.2 0 0 1-.2-.16c-.2-.96-.56-1.87-.88-2.54-.1-.23-.42-.15-.42.1v2.1a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2.1c0-.25-.31-.33-.42-.1-.32.67-.67 1.58-.88 2.54a.2.2 0 0 1-.2.16A1.5 1.5 0 0 1 2 20.5Z",
                        className: r
                    })
                })
            }
        },
        851298: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ImagePlusIcon: function() {
                    return i
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("669491"),
                s = n("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: i = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...u
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, s.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, l.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        fillRule: "evenodd",
                        d: "M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v8.67c0 .12-.34.17-.39.06A2.87 2.87 0 0 0 19 12a3 3 0 0 0-2.7 1.7c-.1.18-.36.22-.48.06l-.47-.63a2 2 0 0 0-3.2 0L9.93 16.1l-.5-.64a1.5 1.5 0 0 0-2.35 0l-1.86 2.32A.75.75 0 0 0 5.81 19h5.69c.28 0 .5.23.54.5.17.95.81 1.68 1.69 2.11.11.06.06.39-.06.39H5a3 3 0 0 1-3-3V5Zm8.2.98c.23-.91-.88-1.55-1.55-.9a.93.93 0 0 1-1.3 0c-.67-.65-1.78-.01-1.55.9a.93.93 0 0 1-.65 1.12c-.9.26-.9 1.54 0 1.8.48.14.77.63.65 1.12-.23.91.88 1.55 1.55.9a.93.93 0 0 1 1.3 0c.67.65 1.78.01 1.55-.9a.93.93 0 0 1 .65-1.12c.9-.26.9-1.54 0-1.8a.93.93 0 0 1-.65-1.12Z",
                        clipRule: "evenodd",
                        className: r
                    }), (0, l.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        d: "M19 14a1 1 0 0 1 1 1v3h3a1 1 0 0 1 0 2h-3v3a1 1 0 0 1-2 0v-3h-3a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 1-1Z",
                        className: r
                    })]
                })
            }
        },
        304983: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MoreHorizontalIcon: function() {
                    return i
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("669491"),
                s = n("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: i = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...u
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, s.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        fillRule: "evenodd",
                        d: "M4 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm10-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm8 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z",
                        clipRule: "evenodd",
                        className: r
                    })
                })
            }
        },
        876726: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PlayIcon: function() {
                    return i
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("669491"),
                s = n("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: i = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...u
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, s.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        d: "M9.25 3.35C7.87 2.45 6 3.38 6 4.96v14.08c0 1.58 1.87 2.5 3.25 1.61l10.85-7.04a1.9 1.9 0 0 0 0-3.22L9.25 3.35Z",
                        className: r
                    })
                })
            }
        },
        997289: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useAnalyticsContext: function() {
                    return s
                }
            });
            var l = n("884691"),
                a = n("599110");
            let s = () => l.useContext(a.AnalyticsContext)
        },
        501030: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getDirectoryEntryBroadcastInfo: function() {
                    return s
                }
            });
            var l = n("872717"),
                a = n("49111");
            async function s(e, t, n) {
                let s = await l.default.get({
                    url: a.Endpoints.DIRECTORY_ENTRIES_BROADCAST_INFO(e),
                    query: {
                        type: t,
                        entity_id: n
                    }
                });
                return s.body
            }
        },
        960757: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            }), n("222007");
            var l = n("884691"),
                a = n("446674"),
                s = n("152475"),
                i = n("42203"),
                r = n("501030"),
                u = n("730647"),
                o = n("49111");
            let d = {
                can_broadcast: !1
            };

            function c(e, t, n) {
                let [c, E] = l.useState(d), [f, _] = l.useState(!1), I = l.useRef(!1), h = null == e ? void 0 : e.id, T = null == e ? void 0 : e.hasFeature(o.GuildFeatures.HAS_DIRECTORY_ENTRY);
                l.useEffect(() => {
                    if (!T) {
                        E(d);
                        return
                    }
                    if (I.current || null == h) return;
                    let e = async () => {
                        I.current = !0;
                        try {
                            let e = await (0, r.getDirectoryEntryBroadcastInfo)(h, u.DirectoryEntryTypes.GUILD_SCHEDULED_EVENT, t);
                            E(e)
                        } catch (e) {
                            E(d)
                        }
                        I.current = !1
                    };
                    e()
                }, [h, T, t]), l.useEffect(() => {
                    var e;
                    if (!c.can_broadcast) {
                        _(!1);
                        return
                    }
                    _(null === (e = c.has_broadcast) || void 0 === e || e)
                }, [c]);
                let N = (0, a.useStateFromStores)([i.default], () => (0, s.canEveryoneRoleViewEvent)(n, [i.default]));
                return {
                    broadcastInfo: c,
                    broadcastToDirectoryChannels: N && f,
                    setBroadcastToDirectoryChannels: _,
                    canEveryoneRoleViewEvent: N
                }
            }
        },
        390236: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("884691");
            let a = l.createContext(void 0);
            var s = a
        },
        689226: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getRoleIconData: function() {
                    return c
                },
                replaceRoleIconSourceSize: function() {
                    return E
                },
                isRoleIconAssetUrl: function() {
                    return _
                },
                canGuildUseRoleIcons: function() {
                    return I
                }
            }), n("781738");
            var l = n("867805"),
                a = n("407063"),
                s = n("315102"),
                i = n("773336"),
                r = n("49111");
            let u = "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.CDN_HOST, "/role-icons"),
                o = "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT),
                d = (0, i.isAndroid)(),
                c = (e, t) => {
                    if (null == e) return null;
                    let n = null != e.unicodeEmoji ? l.default.getByName(l.default.convertSurrogateToName(e.unicodeEmoji, !1)) : void 0;
                    return {
                        customIconSrc: f(e, t),
                        unicodeEmoji: null != n ? n : void 0
                    }
                },
                E = (e, t) => e.replace(/size=[0-9]+/g, "size=".concat((0, a.getBestMediaProxySize)(t * (0, a.getDevicePixelRatio)()))),
                f = (e, t) => {
                    let {
                        id: n,
                        icon: l
                    } = e;
                    if (null == l) return;
                    if (l.startsWith("data:")) return l;
                    let i = s.SUPPORTS_WEBP ? "webp" : "png",
                        c = "",
                        E = "quality=lossless";
                    return (null != t && (c = "size=" + (0, a.getBestMediaProxySize)(t * (0, a.getDevicePixelRatio)()), E = d ? "" : "&" + E), null != window.GLOBAL_ENV.CDN_HOST) ? "".concat(u, "/").concat(n, "/").concat(l, ".").concat(i, "?").concat(c).concat(E) : "".concat(o).concat(r.Endpoints.ROLE_ICON(n, l), "?").concat(c)
                },
                _ = e => e.startsWith(u) || e.startsWith("".concat(o, "/roles")) && e.includes("/icons/"),
                I = (e, t) => {
                    var n;
                    let l = (null == t ? void 0 : null === (n = t.tags) || void 0 === n ? void 0 : n.subscription_listing_id) != null;
                    return l || e.features.has(r.GuildFeatures.ROLE_ICONS)
                }
        },
        651072: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("862205");
            let a = (0, l.createExperiment)({
                kind: "guild",
                id: "2023-09_recurring_events",
                label: "Allows guild to create recurring events",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Recurring Events are enabled",
                    config: {
                        enabled: !0
                    }
                }]
            });
            var s = a
        },
        334683: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            }), n("222007");
            var l = n("884691"),
                a = n("446674"),
                s = n("817963"),
                i = n("923959"),
                r = n("305961"),
                u = n("957255"),
                o = n("49111"),
                d = (e, t) => {
                    let n = (0, a.useStateFromStores)([r.default], () => r.default.getGuild(e), [e]),
                        {
                            canCreateGuildEvent: d
                        } = (0, s.useManageResourcePermissions)(n),
                        c = (0, a.useStateFromStores)([i.default], () => i.default.getChannels(e)[i.GUILD_VOCAL_CHANNELS_KEY], [e]),
                        E = l.useMemo(() => null != t ? c.filter(e => {
                            let {
                                channel: n
                            } = e;
                            return n.type === t
                        }) : c, [c, t]),
                        f = (0, a.useStateFromStores)([u.default], () => {
                            if (u.default.can(o.Permissions.ADMINISTRATOR, n) || d) return !0;
                            for (let {
                                    channel: e
                                }
                                of E) {
                                let {
                                    canCreateGuildEvent: t
                                } = (0, s.getManageResourcePermissions)(e);
                                if (t) return !0
                            }
                            return !1
                        }, [E, n, d]);
                    return f
                }
        },
        152475: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                canEveryoneRoleViewEvent: function() {
                    return _
                },
                isGuildEventInvitable: function() {
                    return I
                },
                default: function() {
                    return h
                }
            }), n("222007");
            var l = n("446674"),
                a = n("242757"),
                s = n("834052"),
                i = n("42203"),
                r = n("923959"),
                u = n("305961"),
                o = n("957255"),
                d = n("991170"),
                c = n("398604"),
                E = n("745049"),
                f = n("49111");

            function _(e) {
                var t;
                let [n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [i.default];
                let {
                    entityType: l,
                    channelId: a
                } = "entity_type" in (t = e) ? {
                    entityType: t.entity_type,
                    channelId: t.channel_id
                } : t, s = l === E.GuildScheduledEventEntityTypes.EXTERNAL;
                if (s) return !0;
                let r = n.getChannel(a);
                return null != r && d.default.canEveryoneRole(f.Permissions.VIEW_CHANNEL, r)
            }

            function I(e) {
                let [t, n, l, d] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [r.default, i.default, u.default, s.default];
                if ((0, c.isGuildEventEnded)(e)) return !1;
                let {
                    guild_id: f,
                    channel_id: I
                } = e, h = e.entity_type === E.GuildScheduledEventEntityTypes.EXTERNAL, T = h ? t.getDefaultChannel(e.guild_id) : n.getChannel(I), N = l.getGuild(f), v = d.getStageInstanceByChannel(I);
                return !!(0, a.canViewInviteModal)(o.default, N, T, v) && null != T && _(e, [n])
            }

            function h(e) {
                return (0, l.useStateFromStores)([r.default, i.default, u.default, s.default], () => I(e, [r.default, i.default, u.default, s.default]), [e])
            }
        },
        397680: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                },
                getEventException: function() {
                    return i
                }
            });
            var l = n("446674"),
                a = n("398604");

            function s(e, t) {
                let n = (0, l.useStateFromStoresArray)([a.default], () => {
                    var e, n;
                    return null !== (n = null === (e = a.default.getGuildScheduledEvent(t)) || void 0 === e ? void 0 : e.guild_scheduled_event_exceptions) && void 0 !== n ? n : []
                });
                return r(n, e)
            }

            function i(e, t) {
                var n, l;
                let s = null !== (l = null === (n = a.default.getGuildScheduledEvent(t)) || void 0 === n ? void 0 : n.guild_scheduled_event_exceptions) && void 0 !== l ? l : [];
                return r(s, e)
            }

            function r(e, t) {
                let n = null == e ? void 0 : e.find(e => e.event_exception_id === t);
                return n
            }
        },
        466148: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                },
                getEventSchedule: function() {
                    return d
                }
            });
            var l = n("627445"),
                a = n.n(l),
                s = n("446674"),
                i = n("398604"),
                r = n("397680"),
                u = n("822516");

            function o(e, t, n) {
                var l;
                let o = null !== (l = (0, s.useStateFromStores)([i.default], () => i.default.getGuildScheduledEvent(e))) && void 0 !== l ? l : n;
                a(null != o, "Event must be defined"), t = null != t ? t : (0, u.getNextRecurrenceIdInEvent)(o);
                let d = (0, r.default)(t, e);
                return c(o, d, t)
            }

            function d(e, t) {
                let n = (0, r.getEventException)(t, e.id);
                return c(e, n, t)
            }

            function c(e, t, n) {
                if (null == e.recurrence_rule || null == n) return {
                    startTime: new Date(e.scheduled_start_time),
                    endTime: null != e.scheduled_end_time ? new Date(e.scheduled_end_time) : null
                };
                let l = (0, u.getBaseScheduleForRecurrence)(n, e),
                    {
                        startDate: a,
                        endDate: s
                    } = (0, u.getScheduleForRecurrenceWithException)(l, t);
                return {
                    startTime: a.toDate(),
                    endTime: null == s ? void 0 : s.toDate()
                }
            }
        },
        799547: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getEventChannelsByType: function() {
                    return i
                },
                useGetEventChannelsByType: function() {
                    return r
                }
            }), n("222007"), n("424973");
            var l = n("446674"),
                a = n("817963");
            n("834052");
            var s = n("923959");

            function i(e, t) {
                let [n] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [s.default];
                if (null == t) return [];
                let l = n.getChannels(e)[s.GUILD_VOCAL_CHANNELS_KEY],
                    i = [];
                for (let {
                        channel: e
                    }
                    of l) {
                    let {
                        canCreateGuildEvent: n,
                        canManageAllEvents: l
                    } = (0, a.getManageResourcePermissions)(e), s = n || l;
                    e.type === t && (e.isGuildVoice() && s ? i.push(e) : e.isGuildStageVoice() && s && i.push(e))
                }
                return i
            }

            function r(e, t) {
                return (0, l.useStateFromStoresArray)([s.default], () => i(e, t, [s.default]), [e, t])
            }
            n("957255"), n("270161")
        },
        776863: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useChannelsUserCanStartStageIn: function() {
                    return r
                }
            }), n("808653"), n("424973");
            var l = n("446674"),
                a = n("923510"),
                s = n("923959"),
                i = n("957255");

            function r(e) {
                var t;
                let n = null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : null;
                return (0, l.useStateFromStoresArray)([s.default, i.default], () => {
                    let e = s.default.getChannels(n)[s.GUILD_VOCAL_CHANNELS_KEY];
                    return e.reduce((e, t) => {
                        let n = t.channel;
                        return n.isGuildStageVoice() ? (function(e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.default;
                            return !!e.isGuildStageVoice() && t.can(a.MODERATE_STAGE_CHANNEL_PERMISSIONS, e)
                        }(t.channel, i.default) && e.push(n), e) : e
                    }, [])
                }, [n])
            }
        },
        617347: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GuildEventBodyImageLocation: function() {
                    return a
                },
                default: function() {
                    return P
                }
            });
            var l, a, s = n("37983"),
                i = n("884691"),
                r = n("414456"),
                u = n.n(r),
                o = n("446674"),
                d = n("77078"),
                c = n("812204"),
                E = n("685665"),
                f = n("656038"),
                _ = n("419830"),
                I = n("817963"),
                h = n("957255"),
                T = n("476263"),
                N = n("718550"),
                v = n("398604"),
                m = n("651072"),
                S = n("1339"),
                g = n("613767"),
                C = n("822516"),
                p = n("707916"),
                x = n("255050"),
                R = n("400271"),
                A = n("427554"),
                O = n("644189"),
                L = n("29913"),
                M = n("745049"),
                D = n("49111"),
                y = n("782340"),
                U = n("955614");

            function V(e) {
                let {
                    channel: t,
                    onClick: n
                } = e, {
                    canManageAllEvents: l
                } = (0, I.useManageResourcePermissions)(t), a = (0, o.useStateFromStores)([h.default], () => !t.isGuildVocal() || h.default.can(D.Permissions.CONNECT, t), [t]), r = i.useMemo(() => (0, f.default)(t), [t]), c = (0, _.getChannelIconComponent)(t);
                return (0, s.jsx)(d.Tooltip, {
                    text: y.default.Messages.GUILD_EVENT_CANNOT_CONNECT,
                    shouldShow: !a && null != n,
                    children: e => (0, s.jsxs)(d.Clickable, {
                        ...e,
                        className: u(U.inline, U.channelContainer, {
                            [U.channelContainerEnabled]: a && null != n,
                            [U.channelContainerDisabled]: !a && null != n
                        }),
                        onClick: n,
                        children: [(0, s.jsx)(d.Tooltip, {
                            text: y.default.Messages.GUILD_EVENT_PRIVATE_CHANNEL_TOOLTIP,
                            shouldShow: l && r && a && null != n,
                            children: e => null != c ? (0, s.jsx)(c, {
                                ...e,
                                width: 20,
                                height: 20,
                                className: U.icon
                            }) : null
                        }), (0, s.jsx)(d.Text, {
                            variant: "text-sm/normal",
                            color: "none",
                            className: U.channelLocation,
                            children: t.name
                        })]
                    })
                })
            }

            function j(e) {
                let {
                    guild: t,
                    channel: n,
                    onJoinClick: l,
                    handleLocationClick: a,
                    location: i,
                    isExternal: r,
                    isHub: o
                } = e;
                if (o) return null == t ? (0, s.jsx)("div", {}) : (0, s.jsxs)("div", {
                    className: U.inline,
                    children: [(0, s.jsx)(T.default, {
                        className: U.guildIcon,
                        size: T.default.Sizes.MINI,
                        active: !0,
                        guild: t
                    }), (0, s.jsx)(d.Text, {
                        variant: "text-sm/normal",
                        color: "header-secondary",
                        children: null == t ? void 0 : t.name
                    })]
                });
                return null != n ? (0, s.jsx)(V, {
                    channel: n,
                    onClick: l
                }) : (0, s.jsxs)(d.Clickable, {
                    className: U.inline,
                    onClick: a,
                    children: [(0, s.jsx)(N.default, {
                        height: 20,
                        width: 20,
                        className: u(U.channelContainer, U.icon)
                    }), (0, s.jsx)(d.Text, {
                        className: r ? U.externalLocation : U.channelLocation,
                        variant: "text-sm/normal",
                        children: (0, S.guildEventDetailsParser)(i, !0)
                    })]
                })
            }

            function P(e) {
                var t;
                let {
                    className: n,
                    guild: l,
                    channel: a,
                    creator: i,
                    name: r,
                    entityType: f,
                    description: _,
                    imageLocation: I = 0,
                    imageSource: h,
                    isActive: T,
                    isUserLurking: N,
                    isJoined: S = !1,
                    isMember: D = !1,
                    isHub: y = !1,
                    speakers: V,
                    speakerCount: P,
                    rsvped: G,
                    canInvite: H,
                    location: b,
                    truncate: B,
                    onContextMenu: F,
                    onJoinClick: w,
                    onJoinGuildClick: k,
                    onGoToGuildClick: Y,
                    onRsvpClick: z,
                    onStartClick: Z,
                    onInviteClick: K,
                    onEndClick: X,
                    onClick: W,
                    isNew: q,
                    guildEventId: J,
                    eventPreview: Q,
                    recurrenceRule: $,
                    recurrenceId: ee
                } = e, et = (0, g.isChannelPublic)(a, f), en = f === M.GuildScheduledEventEntityTypes.EXTERNAL, {
                    analyticsLocations: el
                } = (0, E.default)(c.default.GUILD_EVENT_CARD), {
                    enabled: ea
                } = m.default.useExperiment({
                    guildId: null !== (t = null == l ? void 0 : l.id) && void 0 !== t ? t : "",
                    location: el[0]
                }, {
                    autoTrackExposure: !1
                }), es = (0, o.useStateFromStores)([v.default], () => v.default.getGuildScheduledEvent(J)), ei = [];
                if (null != $ && null != es) {
                    let e = (0, C.getRRule)($);
                    ei = (0, C.generateNextRecurrences)(4, e, new Date(es.scheduled_start_time))
                }
                let er = ea && ei.length > 0;
                return (0, s.jsxs)(d.ClickableContainer, {
                    "aria-label": r,
                    onClick: () => null == W ? void 0 : W(ee),
                    onContextMenu: F,
                    className: u(U.card, {
                        [U.joined]: S,
                        [U.lurking]: N
                    }, n),
                    children: [(0, s.jsxs)("div", {
                        className: u(U.padding, {
                            [U.isRecurring]: er
                        }),
                        children: [0 === I && (0, s.jsx)(x.default, {
                            source: h
                        }), (0, s.jsx)(R.default, {
                            creator: i,
                            name: r,
                            description: _,
                            imageSource: 1 === I ? h : null,
                            truncate: B,
                            guildId: null == l ? void 0 : l.id,
                            isHub: y,
                            isNew: q,
                            guildEventId: J,
                            eventPreview: Q,
                            recurrenceId: ee
                        }), T && null != l && null != V && P > 0 && (0, s.jsx)(L.default, {
                            guild: l,
                            speakers: V,
                            speakerCount: P,
                            className: U.spacing
                        }), (0, s.jsx)("hr", {
                            className: U.divider
                        }), (0, s.jsxs)("div", {
                            className: u(U.inline, U.footer),
                            children: [(0, s.jsx)(j, {
                                guild: l,
                                channel: a,
                                onJoinClick: w,
                                handleLocationClick: en ? e => e.stopPropagation() : void 0,
                                location: b,
                                isExternal: en,
                                isHub: y
                            }), y ? (0, s.jsx)(O.default, {
                                isActive: T,
                                isUserLurking: N,
                                isMember: D,
                                rsvped: G,
                                onRsvpClick: z,
                                onJoinGuildClick: k,
                                onGoToGuildClick: Y,
                                guildName: null == l ? void 0 : l.name,
                                canInvite: H,
                                isChannelPublic: et,
                                onInviteClick: K
                            }) : (0, s.jsx)(p.default, {
                                entityType: f,
                                isJoined: S,
                                isActive: T,
                                isUserLurking: N,
                                rsvped: G,
                                canInvite: H,
                                isChannelPublic: et,
                                onContextMenu: F,
                                onJoinClick: w,
                                onRsvpClick: z,
                                onStartClick: Z,
                                onInviteClick: K,
                                onEndClick: X
                            })]
                        }), er && (0, s.jsx)("hr", {
                            className: U.divider
                        })]
                    }), er && (0, s.jsx)(A.default, {
                        guildId: null == l ? void 0 : l.id,
                        recurrenceRule: $,
                        guildEventId: J,
                        onRecurrenceClick: W
                    })]
                })
            }(l = a || (a = {}))[l.BANNER = 0] = "BANNER", l[l.THUMBNAIL = 1] = "THUMBNAIL"
        },
        844808: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            }), n("222007"), n("424973");
            var l = n("37983"),
                a = n("884691"),
                s = n("77078"),
                i = n("20606"),
                r = n("956089"),
                u = n("822516"),
                o = n("757767"),
                d = n("782340"),
                c = n("572721");
            let E = new Set([0, 6]);

            function f(e) {
                let {
                    startDate: t,
                    recurrenceRule: n,
                    onRecurrenceChange: f
                } = e, _ = a.useMemo(() => (0, u.recurrenceRuleToOption)(t, n), [n, t]), I = function(e) {
                    let t = e.toDate(),
                        n = Math.ceil(t.getDate() / 7),
                        l = t.toLocaleString(d.default.getLocale(), {
                            weekday: "long"
                        }),
                        a = [{
                            value: o.RecurrenceOptions.NONE,
                            label: d.default.Messages.CREATE_EVENT_RECUR_NONE
                        }, {
                            value: o.RecurrenceOptions.WEEKLY,
                            label: d.default.Messages.CREATE_EVENT_RECUR_WEEKLY.format({
                                weekday: l
                            })
                        }, {
                            value: o.RecurrenceOptions.BIWEEKLY,
                            label: d.default.Messages.CREATE_EVENT_RECUR_BIWEEKLY.format({
                                weekday: l
                            })
                        }, {
                            value: o.RecurrenceOptions.MONTHLY,
                            label: d.default.Messages.CREATE_EVENT_RECUR_MONTHLY.format({
                                nth: n,
                                weekday: l
                            })
                        }, {
                            value: o.RecurrenceOptions.YEARLY,
                            label: d.default.Messages.CREATE_EVENT_RECUR_YEARLY.format({
                                date: t.toLocaleString(d.default.getLocale(), {
                                    month: "short",
                                    day: "2-digit"
                                })
                            })
                        }];
                    return !E.has(t.getDay()) && a.push({
                        value: o.RecurrenceOptions.WEEKDAY_ONLY,
                        label: d.default.Messages.CREATE_EVENT_RECUR_WEEKDAYS
                    }), a
                }(t), h = e => e.toString(), T = (0, l.jsxs)("div", {
                    className: c.title,
                    children: [d.default.Messages.CREATE_EVENT_RECUR_LABEL, (0, l.jsx)(r.TextBadge, {
                        text: d.default.Messages.NEW,
                        color: i.default.REDESIGN_BUTTON_PRIMARY_BACKGROUND
                    })]
                });
                return (0, l.jsx)(s.FormItem, {
                    title: T,
                    required: !0,
                    children: (0, l.jsx)(s.Select, {
                        placeholder: "gaming",
                        options: I,
                        select: f,
                        serialize: h,
                        isSelected: e => null != _ && h(e) === h(_)
                    })
                })
            }
        },
        953143: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("866227"),
                s = n.n(a),
                i = n("77078"),
                r = n("812204"),
                u = n("685665"),
                o = n("381546"),
                d = n("351825"),
                c = n("651072"),
                E = n("822516"),
                f = n("844808"),
                _ = n("782340"),
                I = n("234865");

            function h(e) {
                let {
                    className: t,
                    guildId: n,
                    onScheduleChange: a,
                    onRecurrenceChange: h,
                    onTimeChange: T,
                    timeSelected: N = !0,
                    schedule: v,
                    recurrenceRule: m,
                    showEndDate: S = !1,
                    requireEndDate: g = !1,
                    disableStartDateTime: C = !1
                } = e, {
                    analyticsLocations: p
                } = (0, u.default)(r.default.EVENT_SETTINGS), {
                    enabled: x
                } = c.default.useExperiment({
                    guildId: null != n ? n : "",
                    location: p[0]
                }, {
                    autoTrackExposure: !1
                });
                if (null == v) return null;
                let R = null,
                    A = v.startDate,
                    O = s(),
                    L = s().add(E.MAX_DAYS_AHEAD_AN_EVENT_CAN_START, "days"),
                    M = s().add(E.MAX_DAYS_AHEAD_AN_EVENT_CAN_END, "days");
                null != m && (L.add(E.MAX_YEARS_AHEAD_RECURRING_EVENT, "years"), M.add(E.MAX_YEARS_AHEAD_RECURRING_EVENT, "years"));
                let D = e => {
                    a({
                        ...v,
                        endDate: e
                    })
                };
                return null != A && c.default.trackExposure({
                    guildId: null != n ? n : "",
                    location: p[0]
                }), S && (R = null != v.endDate || g ? (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsxs)("div", {
                        className: I.doubleInput,
                        children: [(0, l.jsx)(i.FormItem, {
                            title: _.default.Messages.CREATE_EVENT_END_DATE_LABEL,
                            required: g,
                            children: (0, l.jsx)(i.DateInput, {
                                value: v.endDate,
                                onSelect: D,
                                minDate: v.startDate,
                                maxDate: M
                            })
                        }), (0, l.jsx)(i.FormItem, {
                            title: _.default.Messages.CREATE_EVENT_END_TIME_LABEL,
                            required: g,
                            children: (0, l.jsx)(i.TimeInput, {
                                value: v.endDate,
                                onChange: D
                            })
                        })]
                    }), g ? null : (0, l.jsx)(i.Button, {
                        onClick: () => {
                            D(void 0)
                        },
                        look: i.Button.Looks.BLANK,
                        size: i.Button.Sizes.MIN,
                        children: (0, l.jsxs)("div", {
                            className: I.link,
                            children: [(0, l.jsx)(o.default, {
                                width: 17,
                                height: 17,
                                className: I.removeIcon
                            }), (0, l.jsx)(i.Text, {
                                variant: "text-sm/normal",
                                children: _.default.Messages.CREATE_EVENT_REMOVE_END_TIME_LABEL
                            })]
                        })
                    })]
                }) : (0, l.jsx)(i.Button, {
                    look: i.Button.Looks.BLANK,
                    size: i.Button.Sizes.MIN,
                    onClick: () => {
                        D(s(v.startDate).add(1, "hour"))
                    },
                    children: (0, l.jsxs)("div", {
                        className: I.link,
                        children: [(0, l.jsx)(d.default, {
                            width: 20,
                            height: 20,
                            className: I.addIcon
                        }), (0, l.jsx)(i.Text, {
                            variant: "text-sm/normal",
                            children: _.default.Messages.CREATE_EVENT_ADD_END_TIME_LABEL
                        })]
                    })
                })), (0, l.jsxs)("div", {
                    className: t,
                    children: [(0, l.jsxs)("div", {
                        className: I.doubleInput,
                        children: [(0, l.jsx)(i.FormItem, {
                            title: _.default.Messages.CREATE_EVENT_START_DATE_LABEL,
                            required: !0,
                            children: (0, l.jsx)(i.DateInput, {
                                value: v.startDate,
                                onSelect: e => {
                                    a({
                                        ...v,
                                        startDate: e
                                    })
                                },
                                minDate: O,
                                maxDate: L,
                                disabled: C
                            })
                        }), (0, l.jsx)(i.FormItem, {
                            title: _.default.Messages.CREATE_EVENT_START_TIME_LABEL,
                            required: !0,
                            children: (0, l.jsx)(i.TimeInput, {
                                value: v.startDate,
                                onChange: e => {
                                    e.isValid() && (null == T || T(!0), a({
                                        ...v,
                                        startDate: e
                                    }))
                                },
                                hideValue: !N,
                                disabled: C
                            })
                        })]
                    }), R, x && null != A && null != h && (0, l.jsx)(f.default, {
                        onRecurrenceChange: h,
                        startDate: A,
                        recurrenceRule: m
                    })]
                })
            }
        },
        194250: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            }), n("222007");
            var l = n("37983"),
                a = n("884691"),
                s = n("866227"),
                i = n.n(s),
                r = n("77078"),
                u = n("656913"),
                o = n("694187"),
                d = n("151642"),
                c = n("29846"),
                E = n("398604"),
                f = n("189443"),
                _ = n("822516"),
                I = n("93550"),
                h = n("953143"),
                T = n("745049"),
                N = n("75015"),
                v = n("837979"),
                m = n("782340"),
                S = n("505376");

            function g(e) {
                let {
                    editBroadcastInfoData: t
                } = e, {
                    broadcastInfo: n,
                    broadcastToDirectoryChannels: a,
                    setBroadcastToDirectoryChannels: s,
                    canEveryoneRoleViewEvent: i
                } = t;
                return n.can_broadcast ? (0, l.jsxs)(r.FormItem, {
                    title: m.default.Messages.CREATE_EVENT_PRIVACY_LABEL,
                    className: S.formItem,
                    children: [(0, l.jsx)(r.Tooltip, {
                        text: (0, l.jsx)(r.Text, {
                            className: S.broadcastInfoTooltip,
                            variant: "text-sm/normal",
                            children: m.default.Messages.HUB_EVENTS_SHARE_CHANNEL_EVERYONE_VIEWABLE_WARNING
                        }),
                        "aria-label": m.default.Messages.HUB_EVENTS_SHARE_CHANNEL_EVERYONE_VIEWABLE_WARNING,
                        shouldShow: !i,
                        children: e => (0, l.jsx)("div", {
                            ...e,
                            children: (0, l.jsx)(r.Checkbox, {
                                type: r.Checkbox.Types.INVERTED,
                                disabled: !i,
                                value: a,
                                onChange: (e, t) => s(t),
                                children: (0, l.jsx)(r.Text, {
                                    variant: "text-md/normal",
                                    color: "interactive-active",
                                    children: m.default.Messages.HUB_EVENTS_SHARE_TITLE
                                })
                            })
                        })
                    }), (0, l.jsx)(r.Text, {
                        className: S.broadcastInfoDescription,
                        variant: "text-xs/normal",
                        color: "header-secondary",
                        children: m.default.Messages.HUB_EVENTS_SHARE_DESCRIPTION
                    })]
                }) : null
            }

            function C(e) {
                let {
                    guildEvent: t,
                    guildEventId: s,
                    guildId: C,
                    editBroadcastInfoData: p,
                    error: x,
                    validationErrorMessage: R,
                    onChange: A,
                    canSetFocus: O = !1
                } = e, {
                    entityType: L,
                    channelId: M,
                    description: D,
                    name: y,
                    image: U,
                    scheduledEndTime: V,
                    scheduledStartTime: j,
                    recurrenceRule: P
                } = t, G = (0, d.useStageBlockedUsersCount)(M), H = null != t && (0, E.isGuildScheduledEventActive)(t), b = a.useMemo(() => {
                    let e = (0, _.getScheduleFromEventData)(t);
                    return null != e ? e : {
                        startDate: i(j)
                    }
                }, [t, j]), [B, F] = a.useState(null), w = a.useRef(null);
                a.useEffect(() => {
                    if (O) {
                        var e;
                        null === (e = w.current) || void 0 === e || e.focus()
                    }
                }, [O]);
                let k = e => {
                        A({
                            image: e
                        })
                    },
                    Y = (e, t) => {
                        if (null == e || void 0 === t) {
                            k(null);
                            return
                        }(0, r.openModalLazy)(async () => {
                            let {
                                default: a
                            } = await n.el("57015").then(n.bind(n, "57015"));
                            return n => (0, l.jsx)(a, {
                                imgURI: e,
                                file: t,
                                onCrop: k,
                                uploadType: N.UploadTypes.SCHEDULED_EVENT_IMAGE,
                                allowSkip: !0,
                                ...n
                            })
                        })
                    };
                return (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)("div", {
                        className: S.blockedUsersContainer,
                        children: null != M && !H && G > 0 && (0, l.jsx)(c.BlockedUsersNotice, {
                            channelId: M
                        })
                    }), (0, l.jsxs)("div", {
                        className: S.form,
                        children: [(0, l.jsxs)(r.FormItem, {
                            title: m.default.Messages.GUILD_EVENT_CREATE_TOPIC_LABEL,
                            className: S.topicFormItem,
                            required: !0,
                            children: [(0, l.jsx)(r.TextInput, {
                                className: S.textInput,
                                onChange: e => {
                                    A({
                                        name: e
                                    })
                                },
                                placeholder: m.default.Messages.GUILD_EVENT_CREATE_TOPIC_PLACEHOLDER,
                                maxLength: v.MAX_STAGE_TOPIC_LENGTH,
                                value: y,
                                autoComplete: "off",
                                inputRef: w
                            }), null != x ? (0, l.jsx)(r.Text, {
                                color: "text-danger",
                                variant: "text-xs/normal",
                                className: S.warning,
                                children: x.getAnyErrorMessage()
                            }) : null]
                        }), (0, l.jsx)(h.default, {
                            className: S.formItem,
                            onScheduleChange: e => {
                                let {
                                    startDate: t,
                                    endDate: n
                                } = e, l = {
                                    scheduledStartTime: null == t ? void 0 : t.toISOString(),
                                    scheduledEndTime: null == n ? void 0 : n.toISOString()
                                };
                                null != t && null != V && (null == n ? void 0 : n.isBefore(t)) && (l.scheduledEndTime = t.add(1, "hour").toISOString()), null != t && null != B && (l.recurrenceRule = (0, _.recurrenceOptionToRecurrenceRule)(B, t)), A(l)
                            },
                            onRecurrenceChange: e => {
                                let t = b.startDate;
                                if (null == t) return;
                                let n = (0, _.recurrenceOptionToRecurrenceRule)(e, t);
                                A({
                                    recurrenceRule: n
                                }), F(e)
                            },
                            schedule: b,
                            recurrenceRule: P,
                            showEndDate: L === T.GuildScheduledEventEntityTypes.EXTERNAL,
                            requireEndDate: L === T.GuildScheduledEventEntityTypes.EXTERNAL,
                            disableStartDateTime: H,
                            guildId: C
                        }), null != R ? (0, l.jsx)(r.Text, {
                            color: "text-danger",
                            variant: "text-xs/normal",
                            className: S.warning,
                            children: R
                        }) : null, (0, l.jsx)(r.FormItem, {
                            title: m.default.Messages.CREATE_STAGE_INSTANCE_DESCRIPTION_INPUT_LABEL,
                            className: S.formItem,
                            children: (0, l.jsx)(r.TextArea, {
                                className: S.descriptionInput,
                                placeholder: m.default.Messages.GUILD_EVENT_CREATE_DESCRIPTION_PLACEHOLDER,
                                value: D,
                                onChange: e => {
                                    A({
                                        description: e
                                    })
                                },
                                maxLength: T.GUILD_EVENT_MAX_DESCRIPTION_LENGTH,
                                autosize: !0
                            })
                        }), (0, l.jsxs)(r.FormItem, {
                            title: m.default.Messages.GUILD_EVENT_IMAGE,
                            className: S.formItem,
                            children: [(0, l.jsx)(r.Text, {
                                variant: "text-xs/normal",
                                color: "header-secondary",
                                className: S.addImageHint,
                                children: m.default.Messages.GUILD_EVENT_ADD_IMAGE_SUGGESTION
                            }), null != U ? (0, l.jsxs)(l.Fragment, {
                                children: [(0, l.jsx)(u.default, {
                                    className: S.imagePreview,
                                    iconWrapperClassName: S.imagePreviewInner,
                                    image: U,
                                    makeURL: e => {
                                        if (null == e) return null;
                                        if (null != C) {
                                            var n;
                                            return null !== (n = (0, I.default)((0, f.convertToFakeGuildEvent)(t, C, s))) && void 0 !== n ? n : null
                                        }
                                    },
                                    onChange: Y,
                                    hint: m.default.Messages.GUILD_EVENT_CHANGE_IMAGE,
                                    showRemoveButton: !1,
                                    enabled: !0
                                }), (0, l.jsx)(r.Button, {
                                    size: r.Button.Sizes.SMALL,
                                    onClick: () => k(null),
                                    children: m.default.Messages.GUILD_EVENT_REMOVE_IMAGE
                                })]
                            }) : (0, l.jsxs)(r.Button, {
                                size: r.Button.Sizes.SMALL,
                                children: [m.default.Messages.GUILD_EVENT_ADD_IMAGE, (0, l.jsx)(o.default, {
                                    onChange: Y
                                })]
                            })]
                        }), (0, l.jsx)(g, {
                            editBroadcastInfoData: p
                        })]
                    })]
                })
            }
        },
        590942: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return B
                }
            }), n("222007");
            var l, a, s = n("37983"),
                i = n("884691"),
                r = n("917351"),
                u = n("446674"),
                o = n("77078"),
                d = n("970728"),
                c = n("206230"),
                E = n("526887"),
                f = n("960757"),
                _ = n("923959"),
                I = n("305961"),
                h = n("683911"),
                T = n("476765"),
                N = n("354023"),
                v = n("686904"),
                m = n("398604"),
                S = n("322224"),
                g = n("152475"),
                C = n("799547"),
                p = n("189443"),
                x = n("841363"),
                R = n("558286"),
                A = n("560309"),
                O = n("151859"),
                L = n("299342"),
                M = n("499950"),
                D = n("27754"),
                y = n("745049"),
                U = n("49111"),
                V = n("782340"),
                j = n("738021");
            let {
                INVITE_OPTIONS_7_DAYS: P,
                INVITE_OPTIONS_UNLIMITED: G
            } = N.default;

            function H(e) {
                let {
                    modal: t
                } = e, {
                    createMultipleConfetti: n
                } = i.useContext(E.ConfettiCannonContext);
                return i.useEffect(() => {
                    let e = null == t ? void 0 : t.getScrollerNode();
                    if (null == e) return;
                    let l = e.getBoundingClientRect();
                    n({
                        position: {
                            type: "static-random",
                            minValue: {
                                x: l.left - 100,
                                y: l.top - 100
                            },
                            maxValue: {
                                x: l.left + 100,
                                y: l.top + 100
                            }
                        },
                        velocity: {
                            type: "static-random",
                            minValue: {
                                x: -20,
                                y: -20
                            },
                            maxValue: {
                                x: -60,
                                y: -60
                            }
                        }
                    }, 80), n({
                        position: {
                            type: "static-random",
                            minValue: {
                                x: l.right - 100,
                                y: l.top - 100
                            },
                            maxValue: {
                                x: l.right + 100,
                                y: l.top + 100
                            }
                        },
                        velocity: {
                            type: "static-random",
                            minValue: {
                                x: 20,
                                y: -20
                            },
                            maxValue: {
                                x: 60,
                                y: -60
                            }
                        }
                    }, 80)
                }, [n, t]), null
            }

            function b(e) {
                let {
                    guildId: t,
                    guildEvent: n,
                    guildEventId: a,
                    editBroadcastInfoData: d,
                    isEdit: E,
                    formErrors: f,
                    transitionState: _,
                    loading: I,
                    error: N,
                    onChange: v,
                    onSave: S,
                    onClose: g,
                    createdEvent: C
                } = e, p = (0, T.useUID)(), x = i.useRef(n), D = !(0, r.isEqual)(x.current, n), y = i.useMemo(() => [{
                    slideId: 0,
                    label: V.default.Messages.GUILD_EVENT_MODAL_PROGRESS_BAR_STEP_1,
                    valid: null == f.entity,
                    userErrorMessage: f.entity
                }, {
                    slideId: 1,
                    label: V.default.Messages.GUILD_EVENT_MODAL_PROGRESS_BAR_STEP_2,
                    valid: null == f.schedule && null == f.topic && (!E || D),
                    userErrorMessage: f.schedule
                }, {
                    slideId: 2,
                    label: V.default.Messages.GUILD_EVENT_MODAL_PROGRESS_BAR_STEP_3,
                    valid: !0
                }], [f, E, D]), U = Object.keys(l).length, P = (0, m.isGuildScheduledEventActive)(n), G = e => Math.max(0, Math.min(e, U - 1)), [b, B] = i.useState(P ? 1 : 0), [F, w] = i.useState(!1), k = i.useMemo(() => y.slice(0, b + 1).map(e => e.valid).every(Boolean), [y, b]), Y = b >= y.length ? 3 : y[G(b)].slideId, z = 3 === Y, Z = (0, R.useGuildEventModalStore)(e => e.onUpdateCanCloseModal);
                Z(z);
                let K = (0, u.useStateFromStores)([c.default], () => c.default.useReducedMotion),
                    X = i.useRef(null),
                    W = e => {
                        w(!1), B(G(e))
                    };
                i.useEffect(() => {
                    null != C && W(3)
                }, [null == C ? void 0 : C.id, W]);
                let q = () => {
                        if (!k) return;
                        let e = 2 === Y;
                        e ? S() : z ? g() : W(b + 1)
                    },
                    J = () => {
                        W(b - 1)
                    },
                    Q = V.default.Messages.NEXT;
                return 2 === Y && (Q = E ? V.default.Messages.SAVE_EVENT : V.default.Messages.SCHEDULE_EVENT), (0, s.jsx)(s.Fragment, {
                    children: (0, s.jsxs)(o.ModalRoot, {
                        transitionState: _,
                        "aria-labelledby": p,
                        size: o.ModalSize.DYNAMIC,
                        children: [!K && z ? (0, s.jsx)(H, {
                            modal: X.current
                        }) : null, (0, s.jsxs)(o.ModalContent, {
                            className: j.content,
                            scrollerRef: X,
                            children: [!z && (0, s.jsx)(h.default, {
                                steps: y.map(e => e.label),
                                stepIndex: b,
                                onClick: e => {
                                    e < b ? J() : e > b && q()
                                }
                            }), (0, s.jsxs)(o.Slides, {
                                activeSlide: Y,
                                width: 440,
                                onSlideReady: e => {
                                    w(e === Y)
                                },
                                children: [(0, s.jsx)(o.Slide, {
                                    id: 0,
                                    children: (0, s.jsx)(A.default, {
                                        guildId: t,
                                        guildEvent: n,
                                        validationErrorMessage: f.entity,
                                        isSlideReady: F,
                                        onChange: v
                                    })
                                }), (0, s.jsx)(o.Slide, {
                                    id: 1,
                                    children: (0, s.jsx)(L.default, {
                                        guildEvent: n,
                                        guildEventId: a,
                                        guildId: t,
                                        editBroadcastInfoData: d,
                                        onChange: v,
                                        error: N,
                                        validationErrorMessage: f.schedule,
                                        isSlideReady: F
                                    })
                                }), (0, s.jsx)(o.Slide, {
                                    id: 2,
                                    children: (0, s.jsx)(O.default, {
                                        guildId: t,
                                        guildEvent: n,
                                        guildEventId: a,
                                        error: N
                                    })
                                }), (0, s.jsx)(o.Slide, {
                                    id: 3,
                                    children: (0, s.jsx)(M.default, {
                                        onClose: g,
                                        event: C
                                    })
                                })]
                            })]
                        }), !z && (0, s.jsxs)(o.ModalFooter, {
                            className: j.footer,
                            children: [(0, s.jsxs)("div", {
                                className: j.inline,
                                children: [(0, s.jsx)(o.Button, {
                                    color: o.Button.Colors.PRIMARY,
                                    onClick: g,
                                    children: V.default.Messages.CANCEL
                                }), (0, s.jsx)(o.Button, {
                                    onClick: q,
                                    disabled: !k,
                                    className: j.button,
                                    submitting: I,
                                    children: Q
                                })]
                            }), 0 !== Y && (0, s.jsx)(o.Button, {
                                look: o.Button.Looks.LINK,
                                size: o.Button.Sizes.MIN,
                                onClick: J,
                                color: o.Button.Colors.LINK,
                                children: V.default.Messages.BACK
                            })]
                        })]
                    })
                })
            }

            function B(e) {
                let {
                    guildId: t,
                    guildScheduledEventId: l,
                    transitionState: a,
                    onClose: c
                } = e, E = (0, u.useStateFromStores)([I.default], () => I.default.getGuild(t)), h = (0, u.useStateFromStores)([m.default], () => m.default.getGuildScheduledEvent(l), [l]), T = (0, u.useStateFromStores)([_.default], () => _.default.getDefaultChannel(t), [t]), N = (0, p.getInitialGuildEventData)(h, T), [R, A] = i.useState(N), [O] = i.useState((0, p.isEditingEvent)(h)), [L, M] = i.useState(null), j = e => {
                    var t;
                    let n = (0, g.isGuildEventInvitable)(e),
                        l = null !== (t = e.channel_id) && void 0 !== t ? t : null == T ? void 0 : T.id;
                    null != l && d.default.createInvite(l, {
                        max_age: P.value,
                        max_uses: G.value
                    }, U.InstantInviteSources.GUILD_EVENTS), n ? M(e) : c()
                }, H = (0, f.default)(E, null == h ? void 0 : h.id, R), [B, {
                    loading: F,
                    error: w
                }] = (0, v.default)(async () => {
                    if (null != L) return;
                    let e = {
                        broadcastToDirectoryChannels: H.broadcastToDirectoryChannels
                    };
                    if (O && null != l) return await S.default.saveEvent(l, R, t, e), c();
                    let n = await S.default.createGuildEvent(R, t, e);
                    return j(n.body), n
                }), k = i.useMemo(() => (0, D.default)(R, O), [R, O]);
                return (0, s.jsx)(b, {
                    guildId: t,
                    guildEvent: R,
                    guildEventId: l,
                    editBroadcastInfoData: H,
                    isEdit: O,
                    formErrors: k,
                    transitionState: a,
                    loading: F,
                    error: w,
                    onChange: e => {
                        if (null != e.entityType) {
                            var n;
                            let l = (0, x.getChannelTypeFromEntity)(e.entityType),
                                [a] = (0, C.getEventChannelsByType)(t, l);
                            e.channelId = null !== (n = null == a ? void 0 : a.id) && void 0 !== n ? n : null, e.entityType !== y.GuildScheduledEventEntityTypes.EXTERNAL && R.entityType === y.GuildScheduledEventEntityTypes.EXTERNAL && (e.entityMetadata = null)
                        }
                        A(t => ({
                            ...t,
                            ...e
                        }))
                    },
                    onSave: () => {
                        let e = (null == h ? void 0 : h.scheduled_start_time) !== R.scheduledStartTime || h.scheduled_end_time !== R.scheduledEndTime || !(0, r.isEqual)(h.recurrence_rule, R.recurrenceRule);
                        null != R.recurrenceRule && O && e ? (0, o.openModalLazy)(async () => {
                            let {
                                ConfirmModal: e
                            } = await n.el("77078").then(n.bind(n, "77078"));
                            return t => (0, s.jsxs)(e, {
                                ...t,
                                header: V.default.Messages.EDIT_ALL_EVENTS,
                                confirmText: V.default.Messages.SAVE_EVENT,
                                cancelText: V.default.Messages.NEVERMIND,
                                onConfirm: B,
                                children: [(0, s.jsx)(o.Text, {
                                    variant: "text-md/normal",
                                    children: V.default.Messages.GUILD_EVENT_EDIT_CONFIRM_BODY_CONFIRM
                                }), (0, s.jsx)("br", {}), (0, s.jsx)(o.Text, {
                                    variant: "text-md/normal",
                                    children: V.default.Messages.GUILD_EVENT_EDIT_CONFIRM_BODY_EDIT_ALL_HINT.format()
                                })]
                            })
                        }) : B()
                    },
                    onClose: c,
                    createdEvent: L
                })
            }(a = l || (l = {}))[a.ENTITY = 0] = "ENTITY", a[a.SETTINGS = 1] = "SETTINGS", a[a.PREVIEW = 2] = "PREVIEW", a[a.SUCCESS = 3] = "SUCCESS"
        },
        560309: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return B
                }
            }), n("222007");
            var l = n("37983"),
                a = n("884691"),
                s = n("866227"),
                i = n.n(s),
                r = n("446674"),
                u = n("77078"),
                o = n("679653"),
                d = n("42203"),
                c = n("305961"),
                E = n("957255"),
                f = n("27618"),
                _ = n("697218"),
                I = n("718550"),
                h = n("368121"),
                T = n("944633"),
                N = n("228427"),
                v = n("697468"),
                m = n("398604"),
                S = n("334683"),
                g = n("799547"),
                C = n("776863"),
                p = n("613767"),
                x = n("841363"),
                R = n("306939"),
                A = n("745049"),
                O = n("49111"),
                L = n("782340"),
                M = n("869785");
            let D = e => e === A.GuildScheduledEventEntityTypes.EXTERNAL,
                y = (e, t) => {
                    let n = d.default.getChannel(e);
                    if (null == n) return null;
                    let a = n.type === O.ChannelTypes.GUILD_STAGE_VOICE,
                        s = (0, p.isChannelPublic)(n, t),
                        i = s ? h.default : T.default,
                        r = s ? N.default : v.default;
                    return (0, l.jsx)(a ? r : i, {
                        height: 24,
                        className: M.channelOptionIcon
                    })
                },
                U = e => {
                    let {
                        guildId: t,
                        channelType: n,
                        channel: a,
                        onSelectChannel: s,
                        disabled: i,
                        entityType: r
                    } = e, d = n === O.ChannelTypes.GUILD_STAGE_VOICE, c = (0, p.isChannelPublic)(a, r), E = (0, g.useGetEventChannelsByType)(t, n);
                    return (0, l.jsxs)(u.FormItem, {
                        title: d ? L.default.Messages.START_STAGE_MODAL_SET_TOPIC_SELECT_LABEL : L.default.Messages.GUILD_EVENT_LOCATION_VOICE_FIELD_LABEL,
                        className: M.options,
                        disabled: i,
                        required: !0,
                        children: [(0, l.jsx)(u.SearchableSelect, {
                            value: null == a ? void 0 : a.id,
                            options: E.map(e => ({
                                value: e.id,
                                label: (0, o.computeChannelName)(e, _.default, f.default, !0)
                            })),
                            onChange: e => {
                                let t = E.find(t => t.id === e);
                                s(null != t ? t : void 0)
                            },
                            renderOptionPrefix: e => y(null == e ? void 0 : e.value, r),
                            isDisabled: i
                        }), !c && (0, l.jsx)(u.Text, {
                            color: "header-secondary",
                            className: M.channelPrivate,
                            variant: "text-sm/normal",
                            children: L.default.Messages.GUILD_EVENT_PRIVATE_DESCRIPTION
                        })]
                    })
                };

            function V(e, t, n, l) {
                return t ? {
                    disabled: !0,
                    tooltipText: L.default.Messages.GUILD_EVENT_LOCATION_DISABLED_CANNOT_EDIT
                } : n ? 0 === l && e !== A.GuildScheduledEventEntityTypes.EXTERNAL ? {
                    disabled: !0,
                    tooltipText: L.default.Messages.GUILD_EVENT_LOCATION_DISABLED_NO_AVAILABLE_CHANNEL
                } : {
                    disabled: !1,
                    tooltipText: null
                } : {
                    disabled: !0,
                    tooltipText: L.default.Messages.GUILD_EVENT_LOCATION_DISABLED_NO_PERMISSION
                }
            }
            let j = e => t => {
                    e({
                        entityMetadata: {
                            location: t
                        }
                    })
                },
                P = e => t => {
                    var n;
                    e({
                        channelId: null !== (n = null == t ? void 0 : t.id) && void 0 !== n ? n : null
                    })
                },
                G = (e, t) => n => {
                    let {
                        value: l
                    } = n, a = {
                        entityType: l,
                        scheduledEndTime: void 0
                    };
                    if (D(l)) {
                        var s;
                        let e = (null !== (s = i(t.scheduledStartTime)) && void 0 !== s ? s : i()).add(2, "hour");
                        a.scheduledEndTime = e.toISOString()
                    }
                    e(a)
                };

            function H(e) {
                let {
                    guildId: t,
                    guildEvent: n,
                    onChange: s,
                    isFocusReady: i
                } = e, {
                    entityType: o,
                    channelId: c
                } = n, E = (0, r.useStateFromStores)([d.default], () => d.default.getChannel(c), [c]), f = a.useRef(null);
                a.useEffect(() => {
                    if (i && D(o)) {
                        var e;
                        null === (e = f.current) || void 0 === e || e.focus()
                    }
                }, [i, o]);
                let _ = j(s),
                    I = P(s),
                    h = (0, x.getLocationFromEventData)(n),
                    T = (0, x.getChannelTypeFromEntity)(o),
                    N = (0, m.isGuildScheduledEventActive)(n);
                return null == o || o === A.GuildScheduledEventEntityTypes.NONE ? null : D(o) ? (0, l.jsx)(u.FormItem, {
                    title: L.default.Messages.GUILD_EVENT_LOCATION_ELSEWHERE_FIELD_LABEL,
                    className: M.options,
                    required: !0,
                    children: (0, l.jsx)(u.TextInput, {
                        className: M.textInput,
                        onChange: _,
                        placeholder: L.default.Messages.GUILD_EVENT_LOCATION_OPTION_ELSEWHERE_PLACEHOLDER,
                        maxLength: A.MAX_EVENT_LOCATION_LENGTH,
                        value: null != h ? h : "",
                        inputRef: f
                    })
                }) : null == T ? null : (0, l.jsx)(U, {
                    guildId: t,
                    channelType: T,
                    onSelectChannel: I,
                    channel: E,
                    entityType: o,
                    disabled: N
                })
            }

            function b(e) {
                let {
                    guildId: t,
                    guildEvent: n,
                    onChange: s
                } = e, i = (0, r.useStateFromStores)([c.default], () => c.default.getGuild(t), [t]), o = (0, S.default)(t, void 0), d = (0, S.default)(t, O.ChannelTypes.GUILD_VOICE), E = (0, S.default)(t, O.ChannelTypes.GUILD_STAGE_VOICE), f = (0, g.useGetEventChannelsByType)(t, O.ChannelTypes.GUILD_VOICE), _ = (0, C.useChannelsUserCanStartStageIn)(i), T = null == i ? void 0 : i.hasFeature(O.GuildFeatures.COMMUNITY), v = (0, m.isGuildScheduledEventActive)(n), p = G(s, n), x = a.useMemo(() => {
                    let e = [{
                        name: L.default.Messages.VOICE_CHANNEL,
                        value: A.GuildScheduledEventEntityTypes.VOICE,
                        desc: L.default.Messages.GUILD_EVENT_LOCATION_OPTION_VOICE_HINT,
                        icon: h.default,
                        ...V(A.GuildScheduledEventEntityTypes.VOICE, v, d, f.length)
                    }, {
                        name: L.default.Messages.GUILD_EVENT_LOCATION_EXTERNAL,
                        value: A.GuildScheduledEventEntityTypes.EXTERNAL,
                        desc: L.default.Messages.GUILD_EVENT_LOCATION_OPTION_ELSEWHERE_HINT,
                        icon: I.default,
                        ...V(A.GuildScheduledEventEntityTypes.EXTERNAL, v, o, 0)
                    }];
                    return T ? [{
                        name: L.default.Messages.STAGE_CHANNEL,
                        value: A.GuildScheduledEventEntityTypes.STAGE_INSTANCE,
                        desc: L.default.Messages.GUILD_EVENT_LOCATION_OPTION_STAGE_HINT,
                        icon: N.default,
                        ...V(A.GuildScheduledEventEntityTypes.STAGE_INSTANCE, v, E, _.length)
                    }, ...e] : e
                }, [o, d, E, T, f.length, _.length, v]);
                return (0, l.jsx)(u.RadioGroup, {
                    value: n.entityType,
                    options: x,
                    onChange: p,
                    className: M.options
                })
            }

            function B(e) {
                let {
                    guildId: t,
                    guildEvent: a,
                    validationErrorMessage: s,
                    onChange: i,
                    isSlideReady: o = !1
                } = e, {
                    entityType: d
                } = a, f = (0, r.useStateFromStores)([c.default], () => c.default.getGuild(t), [t]), _ = (0, C.useChannelsUserCanStartStageIn)(f), I = (0, r.useStateFromStores)([E.default], () => E.default.can(O.Permissions.MANAGE_CHANNELS, f)), h = null == f ? void 0 : f.hasFeature(O.GuildFeatures.COMMUNITY), T = G(i, a), N = h && !D(d) && 0 === _.length && I && null != d;
                return (0, l.jsxs)("div", {
                    className: M.container,
                    children: [(0, l.jsx)(u.Heading, {
                        variant: "heading-xl/semibold",
                        className: M.header,
                        children: L.default.Messages.GUILD_EVENT_LOCATION_TITLE
                    }), (0, l.jsx)(u.Text, {
                        color: "header-secondary",
                        className: M.text,
                        variant: "text-sm/normal",
                        children: L.default.Messages.GUILD_EVENT_LOCATION_SUBTITLE
                    }), (0, l.jsx)(b, {
                        guildId: t,
                        guildEvent: a,
                        onChange: i
                    }), (0, l.jsx)(H, {
                        guildId: t,
                        guildEvent: a,
                        isFocusReady: o,
                        onChange: i
                    }), N ? (0, l.jsx)(R.default, {
                        onClick: () => {
                            T({
                                value: A.GuildScheduledEventEntityTypes.STAGE_INSTANCE,
                                name: L.default.Messages.STAGE_CHANNEL
                            }), (0, u.openModalLazy)(async () => {
                                let {
                                    default: e
                                } = await n.el("581354").then(n.bind(n, "581354"));
                                return n => (0, l.jsx)(e, {
                                    ...n,
                                    channelType: O.ChannelTypes.GUILD_STAGE_VOICE,
                                    guildId: t
                                })
                            })
                        }
                    }) : null]
                })
            }
        },
        151859: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("446674"),
                i = n("77078"),
                r = n("419830"),
                u = n("267567"),
                o = n("42203"),
                d = n("305961"),
                c = n("697218"),
                E = n("718550"),
                f = n("189443"),
                _ = n("841363"),
                I = n("93550"),
                h = n("617347"),
                T = n("745049"),
                N = n("782340"),
                v = n("151990");

            function m(e) {
                var t, n, m;
                let {
                    guildId: S,
                    guildEvent: g,
                    guildEventId: C,
                    error: p
                } = e, x = a.useMemo(() => (0, f.convertToFakeGuildEvent)(g, S), [g, S]), {
                    channel_id: R,
                    name: A,
                    image: O,
                    description: L
                } = x, M = (0, s.useStateFromStores)([o.default], () => o.default.getChannel(R), [R]), D = (0, s.useStateFromStores)([d.default], () => d.default.getGuild(S), [S]), y = (0, _.getLocationFromEvent)(x), U = (0, s.useStateFromStores)([c.default], () => null != g.creatorId ? c.default.getUser(g.creatorId) : c.default.getCurrentUser(), [g.creatorId]), V = (0, s.useStateFromStores)([u.default], () => u.default.isLurking(S), [S]), j = (0, r.getChannelIconComponent)(M, D);
                return (0, l.jsxs)("div", {
                    className: v.content,
                    children: [(0, l.jsx)(h.default, {
                        className: v.previewCard,
                        guild: D,
                        channel: M,
                        location: null != y ? y : void 0,
                        creator: U,
                        name: A,
                        description: L,
                        imageSource: (n = (0, f.convertToFakeGuildEvent)(g, S, C), null == (m = O) && null == n.image ? null : null != m && /^data:/.test(m) ? m : (0, I.default)(n)),
                        isActive: !1,
                        isUserLurking: V,
                        speakers: [],
                        speakerCount: 0,
                        rsvped: !0,
                        guildEventId: T.FAKE_EVENT_ID,
                        eventPreview: x
                    }), (0, l.jsxs)("div", {
                        className: v.textContainer,
                        children: [(0, l.jsx)(i.Heading, {
                            variant: "heading-xl/semibold",
                            children: N.default.Messages.GUILD_EVENT_PREVIEW_TITLE
                        }), (0, l.jsx)(i.Text, {
                            color: "header-secondary",
                            variant: "text-md/normal",
                            className: v.subheader,
                            children: null != location ? N.default.Messages.GUILD_EVENT_PREVIEW_EXTERNAL_EVENT_BODY : N.default.Messages.GUILD_EVENT_PREVIEW_BODY.format({
                                channelName: null !== (t = null == M ? void 0 : M.name) && void 0 !== t ? t : "",
                                channelHook: () => {
                                    var e;
                                    return (0, l.jsxs)("div", {
                                        className: v.channelName,
                                        children: [null != j ? (0, l.jsx)(j, {
                                            width: 20,
                                            height: 20,
                                            className: v.icon
                                        }) : (0, l.jsx)(E.default, {
                                            height: 18,
                                            width: 18,
                                            className: v.locationIcon
                                        }), null !== (e = null == M ? void 0 : M.name) && void 0 !== e ? e : y]
                                    })
                                }
                            })
                        }), null != p && (0, l.jsx)(i.Text, {
                            color: "text-danger",
                            variant: "text-xs/normal",
                            className: v.subheader,
                            children: p.getAnyErrorMessage()
                        })]
                    })]
                })
            }
        },
        299342: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("77078"),
                s = n("194250"),
                i = n("782340"),
                r = n("11644");

            function u(e) {
                let {
                    isSlideReady: t,
                    ...n
                } = e;
                return (0, l.jsxs)("div", {
                    className: r.slideContainer,
                    children: [(0, l.jsxs)("div", {
                        className: r.header,
                        children: [(0, l.jsx)(a.Heading, {
                            variant: "heading-xl/semibold",
                            children: i.default.Messages.GUILD_EVENT_CREATE_HEADER
                        }), (0, l.jsx)(a.Text, {
                            color: "header-secondary",
                            className: r.text,
                            variant: "text-sm/normal",
                            children: i.default.Messages.GUILD_EVENT_CREATE_BODY
                        })]
                    }), (0, l.jsx)(s.default, {
                        ...n,
                        canSetFocus: t
                    })]
                })
            }
        },
        499950: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return x
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("446674"),
                s = n("77078"),
                i = n("9294"),
                r = n("512027"),
                u = n("52393"),
                o = n("652453"),
                d = n("119184"),
                c = n("923959"),
                E = n("305961"),
                f = n("330154"),
                _ = n("943232"),
                I = n("945330"),
                h = n("599110"),
                T = n("306160"),
                N = n("354023"),
                v = n("841363"),
                m = n("49111"),
                S = n("782340"),
                g = n("131439");
            let {
                INVITE_OPTIONS_7_DAYS: C,
                INVITE_OPTIONS_UNLIMITED: p
            } = N.default;

            function x(e) {
                var t, n, x;
                let {
                    onClose: R,
                    event: A
                } = e, O = null == A ? void 0 : A.guild_id, L = (0, a.useStateFromStores)([c.default], () => {
                    var e;
                    return null != O ? null === (e = c.default.getDefaultChannel(O)) || void 0 === e ? void 0 : e.id : null
                }, [O]), M = (0, a.useStateFromStores)([E.default], () => E.default.getGuild(O), [O]), D = (null == M ? void 0 : M.vanityURLCode) != null && (null == M ? void 0 : M.vanityURLCode.length) > 0, {
                    enabled: y
                } = r.default.useExperiment({
                    guildId: null != O ? O : "",
                    location: "bd50e8_1"
                }, {
                    autoTrackExposure: D
                }), {
                    channel_id: U,
                    id: V
                } = null != A ? A : {}, j = (0, a.useStateFromStores)([f.default], () => {
                    let e = null != U ? U : L;
                    return null == e ? null : f.default.getInvite(e)
                }, [U, L]);
                if (null == A) return R(), null;
                let P = y && null !== (t = null == M ? void 0 : M.vanityURLCode) && void 0 !== t ? t : null == j ? void 0 : j.code,
                    G = null != P ? (0, i.generateInviteKeyFromExtraData)({
                        baseCode: P,
                        guildScheduledEventId: V
                    }) : null,
                    H = null == G || null == j,
                    b = (0, u.default)(null != G ? G : ""),
                    B = null !== (n = null == j ? void 0 : j.maxAge) && void 0 !== n ? n : C.value,
                    F = null !== (x = null == j ? void 0 : j.maxUses) && void 0 !== x ? x : p.value;
                return (0, l.jsxs)("div", {
                    className: g.container,
                    children: [(0, l.jsx)(s.Clickable, {
                        onClick: R,
                        className: g.close,
                        "aria-label": S.default.Messages.CLOSE,
                        children: (0, l.jsx)(I.default, {})
                    }), (0, l.jsx)(d.default, {
                        children: (0, l.jsx)("div", {
                            className: g.iconContainer,
                            children: (0, l.jsx)(_.default, {
                                height: 30,
                                width: 30,
                                className: g.icon
                            })
                        })
                    }), (0, l.jsx)(s.Heading, {
                        variant: "heading-xl/semibold",
                        className: g.header,
                        children: S.default.Messages.GUILD_EVENT_CREATED_MODAL_HEADER
                    }), (0, l.jsx)(s.Text, {
                        variant: "text-md/normal",
                        color: "header-secondary",
                        className: g.body,
                        children: S.default.Messages.GUILD_EVENT_CREATED_MODAL_BODY
                    }), (0, l.jsxs)("div", {
                        className: g.invite,
                        children: [(0, l.jsx)(o.RawInviteCopyInputConnected, {
                            value: b,
                            autoFocus: !1,
                            onCopy: e => {
                                if (H) return;
                                (0, T.copy)(e);
                                let t = (0, v.getChannelTypeFromEntity)(A.entity_type);
                                h.default.track(m.AnalyticEvents.COPY_INSTANT_INVITE, {
                                    server: A.guild_id,
                                    channel: U,
                                    channel_type: t,
                                    location: m.InstantInviteSources.GUILD_EVENTS,
                                    code: j.code,
                                    guild_scheduled_event_id: null == A ? void 0 : A.id
                                })
                            }
                        }), (null == M ? void 0 : M.vanityURLCode) == null && (0, l.jsx)(s.Text, {
                            variant: "text-xs/normal",
                            color: "header-secondary",
                            className: g.inviteDetail,
                            children: (0, N.maxAgeString)(B, F)
                        })]
                    })]
                })
            }
        },
        29913: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("414456"),
                s = n.n(a),
                i = n("77078"),
                r = n("849467"),
                u = n("782340"),
                o = n("130221");

            function d(e) {
                let {
                    guild: t,
                    speakers: n,
                    speakerCount: a,
                    className: d
                } = e, c = n.slice(0, 5), E = c.map(e => {
                    var n, a;
                    return (0, l.jsxs)("div", {
                        className: o.speakerContainer,
                        children: [(0, l.jsx)(i.Avatar, {
                            src: null == e ? void 0 : null === (n = e.user) || void 0 === n ? void 0 : n.getAvatarURL(t.id, 20),
                            size: i.AvatarSizes.SIZE_20,
                            className: o.avatar,
                            "aria-label": "".concat(null == e ? void 0 : e.userNick, "-avatar")
                        }), (0, l.jsx)("div", {
                            className: o.textInGridContainer,
                            children: (0, l.jsx)(i.Text, {
                                color: "header-secondary",
                                variant: "text-sm/normal",
                                className: o.textInGrid,
                                children: null == e ? void 0 : e.userNick
                            })
                        })]
                    }, null == e ? void 0 : null === (a = e.user) || void 0 === a ? void 0 : a.id)
                }), f = a - c.length;
                return (0, l.jsxs)("div", {
                    className: s(o.grid, d),
                    children: [E, f > 0 && (0, l.jsxs)("div", {
                        className: o.speakerContainer,
                        children: [(0, l.jsx)("div", {
                            className: o.iconMicrophone,
                            children: (0, l.jsx)(r.default, {
                                height: 12
                            })
                        }), (0, l.jsx)(i.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            className: o.textInGrid,
                            children: u.default.Messages.STAGE_DISCOVERY_LIVE_STAGE_TILE_SPEAKER_SUMMARY_OVERFLOW.format({
                                count: f
                            })
                        })]
                    })]
                })
            }
        },
        306939: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("446674"),
                s = n("77078"),
                i = n("139321"),
                r = n("597517"),
                u = n("782340"),
                o = n("8341"),
                d = n("533662");
            let c = () => (0, l.jsxs)(l.Fragment, {
                children: [(0, l.jsx)(s.Text, {
                    color: "header-primary",
                    variant: "text-xs/normal",
                    className: o.inlineText,
                    children: u.default.Messages.GUILD_EVENT_STAGE_UPSELL_HINT_1
                }), (0, l.jsx)(s.Text, {
                    color: "header-primary",
                    variant: "text-xs/normal",
                    className: o.inlineText,
                    children: u.default.Messages.GUILD_EVENT_STAGE_UPSELL_HINT_2
                }), (0, l.jsx)(s.Text, {
                    color: "header-primary",
                    variant: "text-xs/normal",
                    className: o.inlineText,
                    children: u.default.Messages.GUILD_EVENT_STAGE_UPSELL_HINT_3
                }), (0, l.jsx)(s.Text, {
                    color: "header-primary",
                    variant: "text-xs/normal",
                    className: o.inlineText,
                    children: u.default.Messages.GUILD_EVENT_STAGE_UPSELL_HINT_4
                })]
            });

            function E(e) {
                let {
                    onClick: t
                } = e, n = (0, a.useStateFromStores)([i.HotspotStore], () => !i.HotspotStore.hasHotspot(i.HotspotLocations.STAGE_CHANNEL_UPSELL));
                return n ? null : (0, l.jsxs)("div", {
                    className: o.container,
                    children: [(0, l.jsxs)("div", {
                        className: o.content,
                        children: [(0, l.jsxs)("div", {
                            className: o.textContainer,
                            children: [(0, l.jsx)(s.Heading, {
                                variant: "heading-md/semibold",
                                children: u.default.Messages.GUILD_EVENT_STAGE_UPSELL_TITLE
                            }), (0, l.jsx)(s.Text, {
                                color: "header-secondary",
                                variant: "text-xs/normal",
                                className: o.descriptionText,
                                children: u.default.Messages.GUILD_EVENT_STAGE_TOOLTIP_BODY
                            }), (0, l.jsx)(s.Text, {
                                color: "header-secondary",
                                variant: "text-xs/normal",
                                children: u.default.Messages.GUILD_EVENT_STAGE_UPSELL.format({
                                    suggestionsHook: c
                                })
                            })]
                        }), (0, l.jsx)("div", {
                            className: o.image,
                            children: (0, l.jsx)("img", {
                                src: d,
                                alt: u.default.Messages.GUILD_EVENT_STAGE_UPSELL_ALT_IMAGE
                            })
                        })]
                    }), (0, l.jsxs)("div", {
                        className: o.footer,
                        children: [(0, l.jsx)(s.Button, {
                            onClick: t,
                            color: s.Button.Colors.PRIMARY,
                            size: s.Button.Sizes.SMALL,
                            className: o.button,
                            children: u.default.Messages.CREATE_STAGE_CHANNEL
                        }), (0, l.jsx)(s.Button, {
                            onClick: () => {
                                r.hideHotspot(i.HotspotLocations.STAGE_CHANNEL_UPSELL)
                            },
                            color: s.Button.Colors.TRANSPARENT,
                            size: s.Button.Sizes.SMALL,
                            look: s.ButtonLooks.LINK,
                            children: u.default.Messages.DONT_SHOW_AGAIN
                        })]
                    })]
                })
            }
        },
        27754: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var l = n("866227"),
                a = n.n(l),
                s = n("841363"),
                i = n("822516"),
                r = n("745049"),
                u = n("782340");

            function o(e, t) {
                return {
                    entity: function(e) {
                        let {
                            entityType: t,
                            channelId: n
                        } = e, l = (0, s.getLocationFromEventData)(e);
                        return null == t ? "An event type must be specified." : (null == l || "" === l.trim()) && null == n ? "Either a location or channel must be specified." : void 0
                    }(e),
                    schedule: function(e, t) {
                        let n = (0, i.getScheduleFromEventData)(e),
                            {
                                entityType: l
                            } = e;
                        if (null == n || (null == n ? void 0 : n.startDate) == null) return u.default.Messages.GUILD_EVENT_START_DATE_REQUIRED;
                        let {
                            startDate: s,
                            endDate: o
                        } = n;
                        return l === r.GuildScheduledEventEntityTypes.EXTERNAL && null == o ? u.default.Messages.GUILD_EVENT_END_DATE_REQUIRED : !t && s.isBefore(a()) ? u.default.Messages.GUILD_EVENT_PAST_START_DATE : null != o && null != s && o.isBefore(s) ? u.default.Messages.GUILD_EVENT_END_DATE_BEFORE_START_DATE : null != o && o.isBefore(a()) ? u.default.Messages.GUILD_EVENT_PAST_END_DATE_1 : void 0
                    }(e, t),
                    topic: function(e) {
                        let {
                            name: t
                        } = e, n = null == t || "" === t.trim();
                        return n ? "Topic must be specified." : void 0
                    }(e)
                }
            }
        },
        597517: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                hideHotspot: function() {
                    return i
                },
                setHotspotOverride: function() {
                    return r
                },
                clearHotspotOverride: function() {
                    return u
                }
            });
            var l = n("913144"),
                a = n("599110"),
                s = n("49111");

            function i(e) {
                a.default.track(s.AnalyticEvents.HOTSPOT_HIDDEN, {
                    hotspot_location: e
                }), l.default.wait(() => {
                    l.default.dispatch({
                        type: "HOTSPOT_HIDE",
                        location: e
                    })
                })
            }

            function r(e, t) {
                l.default.dispatch({
                    type: "HOTSPOT_OVERRIDE_SET",
                    location: e,
                    enabled: t
                })
            }

            function u(e) {
                l.default.dispatch({
                    type: "HOTSPOT_OVERRIDE_CLEAR",
                    location: e
                })
            }
        },
        269596: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            }), n("222007");
            var l = n("446674"),
                a = n("913144"),
                s = n("197881"),
                i = n("492397");
            let r = new Set,
                u = {};
            class o extends l.default.PersistedStore {
                initialize(e) {
                    null != e && (Array.isArray(e.hiddenHotspots) && (r = new Set(e.hiddenHotspots)), null != e.hotspotOverrides && (u = e.hotspotOverrides))
                }
                hasHotspot(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = !t && u[e];
                    return !(i.CONFERENCE_MODE_ENABLED || s.ProcessArgs.isDisallowPopupsSet()) && (n || !r.has(e))
                }
                hasHiddenHotspot(e) {
                    return r.has(e)
                }
                getHotspotOverride(e) {
                    return u[e]
                }
                getState() {
                    return {
                        hiddenHotspots: r,
                        hotspotOverrides: u
                    }
                }
            }
            o.displayName = "HotspotStore", o.persistKey = "hotspots", o.migrations = [e => ({
                hiddenHotspots: null != e ? e : [],
                hotspotOverrides: {}
            })];
            var d = new o(a.default, {
                OVERLAY_INITIALIZE: function(e) {
                    let {
                        hiddenHotspots: t
                    } = e;
                    r = new Set(t)
                },
                HOTSPOT_HIDE: function(e) {
                    let {
                        location: t
                    } = e;
                    if (r.has(t)) return !1;
                    r.add(t)
                },
                HOTSPOT_OVERRIDE_SET: function(e) {
                    let {
                        location: t,
                        enabled: n
                    } = e;
                    u[t] = n
                },
                HOTSPOT_OVERRIDE_CLEAR: function(e) {
                    let {
                        location: t
                    } = e;
                    if (null == u[t]) return !1;
                    delete u[t]
                }
            })
        },
        139321: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                HotspotStore: function() {
                    return s.default
                }
            });
            var l = n("533613");
            n.es(l, t);
            var a = n("597517");
            n.es(a, t);
            var s = n("269596")
        },
        656913: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("414456"),
                s = n.n(a),
                i = n("819855"),
                r = n("841098"),
                u = n("449918"),
                o = n("832132"),
                d = n("818643"),
                c = n("608684"),
                E = n("49111"),
                f = n("575282");
            let _ = E.Color.PRIMARY_400,
                I = E.Color.PRIMARY_500;

            function h(e) {
                let {
                    enabled: t,
                    imageClassName: n,
                    iconWrapperClassName: a,
                    ...E
                } = e, h = (0, r.default)(), T = (0, i.isThemeDark)(h) ? _ : I, N = {
                    height: 18,
                    width: 18,
                    color: (0, u.getColor)(T)
                };
                return (0, l.jsx)(c.default, {
                    className: s({
                        [f.avatarUploader]: t,
                        [f.avatarUploaderDisabled]: !t
                    }),
                    imageClassName: s(n, f.avatarUploaderInnerSquare, {
                        [f.avatarUploaderInnerSquareDisabled]: !t
                    }),
                    icon: null != E.image && "" !== E.image ? (0, l.jsx)(o.default, {
                        ...N
                    }) : (0, l.jsx)(d.default, {
                        ...N
                    }),
                    iconClassName: s(f.avatarUploadIcon, f.hideDefaultIcon),
                    iconWrapperClassName: a,
                    showIcon: !0,
                    showIconDisabled: !0,
                    hideSize: !0,
                    ...E
                })
            }
        },
        608684: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ImageUploaderIcon: function() {
                    return I
                },
                default: function() {
                    return T
                }
            }), n("222007");
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("627445"),
                u = n.n(r),
                o = n("77078"),
                d = n("159885"),
                c = n("694187"),
                E = n("49111"),
                f = n("782340"),
                _ = n("911686");

            function I(e) {
                let {
                    className: t,
                    icon: n = null
                } = e;
                return (0, l.jsx)("div", {
                    className: i(_.imageUploaderIcon, t),
                    children: n
                })
            }
            class h extends a.PureComponent {
                handleExternalFileChange(e) {
                    u(null != this.inputRef.current, "ImageInputRef asked to handleExternalFileChange when not mounted"), this.inputRef.current.handleFileChange(e)
                }
                render() {
                    var e;
                    let t, n, a, s;
                    let {
                        image: r,
                        hint: u,
                        name: h,
                        makeURL: T,
                        disabled: N,
                        onChange: v,
                        showIcon: m,
                        showIconDisabled: S,
                        className: g,
                        imageClassName: C,
                        iconClassName: p,
                        iconWrapperClassName: x,
                        icon: R,
                        hideSize: A,
                        imageStyle: O,
                        showRemoveButton: L,
                        maxFileSizeBytes: M,
                        onFileSizeError: D,
                        onOpenImageSelectModal: y,
                        "aria-label": U
                    } = this.props;
                    if (null != (t = null != r && /^data:/.test(r) ? r : T(r)) ? n = 'url("'.concat(t, '")') : null != h && (a = (0, l.jsx)("div", {
                            className: _.imageUploaderAcronym,
                            children: (0, d.getAcronym)(h)
                        })), N) return (0, l.jsx)("div", {
                        className: i(_.imageUploader, _.disabled, g),
                        children: (0, l.jsxs)("div", {
                            className: i(_.imageUploaderInner, C),
                            style: {
                                ...O,
                                backgroundImage: n
                            },
                            children: [a, S && (0, l.jsx)("div", {
                                className: i(_.imageUploaderIcon, _.imageUploaderIconDisabled, p),
                                children: R
                            })]
                        })
                    });
                    null != r ? s = (0, l.jsx)(o.Anchor, {
                        className: _.removeButton,
                        onClick: this.handleRemove,
                        children: f.default.Messages.REMOVE
                    }) : !A && (s = (0, l.jsx)("small", {
                        className: _.sizeInfo,
                        children: f.default.Messages.MINIMUM_SIZE.format({
                            size: E.AVATAR_SIZE
                        })
                    }));
                    let V = null !== (e = null != U ? U : u) && void 0 !== e ? e : f.default.Messages.CHANGE_AVATAR;
                    return (0, l.jsxs)("div", {
                        className: i(_.imageUploader, g),
                        children: [(0, l.jsx)(o.FocusRing, {
                            within: !0,
                            children: (0, l.jsxs)("div", {
                                className: m ? i(_.imageUploaderIconWrapper, x) : void 0,
                                children: [(0, l.jsxs)("div", {
                                    className: i(_.imageUploaderInner, C),
                                    style: {
                                        ...O,
                                        backgroundImage: n
                                    },
                                    children: [(0, l.jsx)("span", {
                                        "aria-hidden": !0,
                                        children: a
                                    }), null != y ? (0, l.jsx)(o.Clickable, {
                                        className: _.imageUploaderFileInput,
                                        "aria-label": V,
                                        onClick: y
                                    }) : (0, l.jsx)(c.default, {
                                        ref: this.inputRef,
                                        onChange: v,
                                        className: _.imageUploaderFileInput,
                                        "aria-label": V,
                                        tabIndex: 0,
                                        maxFileSizeBytes: M,
                                        onFileSizeError: D
                                    })]
                                }), null != u && (0, l.jsx)("div", {
                                    className: _.imageUploaderHint,
                                    "aria-hidden": "true",
                                    children: u
                                }), m && (0, l.jsx)(I, {
                                    className: p,
                                    icon: R
                                })]
                            })
                        }), L ? s : null]
                    })
                }
                constructor(...e) {
                    super(...e), this.inputRef = a.createRef(), this.handleRemove = () => {
                        this.props.onChange(null)
                    }
                }
            }
            h.defaultProps = {
                name: "",
                makeURL: e => e,
                disabled: !1,
                showIcon: !1,
                hideSize: !1,
                showRemoveButton: !0,
                maxFileSizeBytes: 1 / 0,
                icon: null
            };
            var T = h
        },
        242757: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                canViewInviteModal: function() {
                    return a
                }
            });
            var l = n("49111");

            function a(e, t, n, a) {
                let s = null != n ? n : t,
                    i = null != s && e.can(l.Permissions.CREATE_INSTANT_INVITE, s);
                return i || null != t && null != t.vanityURLCode || (null == a ? void 0 : a.invite_code) != null
            }
        },
        650484: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                },
                PaymentPortalBody: function() {
                    return I
                },
                PaymentPortalFooter: function() {
                    return h
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("627445"),
                u = n.n(r),
                o = n("817736"),
                d = n.n(o),
                c = n("77078"),
                E = n("642906"),
                f = n("990893");

            function _(e) {
                var t, n, s, r, o, d;
                let {
                    header: _,
                    isLargeModal: I,
                    stepProps: h
                } = function(e) {
                    let {
                        header: t,
                        isLargeModal: n,
                        ...l
                    } = e;
                    return {
                        header: t,
                        isLargeModal: n,
                        stepProps: l
                    }
                }(e), {
                    step: T,
                    stepConfigs: N,
                    setBodyNode: v,
                    setFooterNode: m,
                    setModalOverlayNode: S,
                    setReadySlideId: g
                } = (0, E.usePaymentContext)(), C = N.find(e => e.key === T);
                a.useEffect(() => {
                    S(null)
                }, [T, S]), u(null != C, "Unknown step for current payment flow.");
                let p = null !== (o = null == C ? void 0 : null === (t = C.options) || void 0 === t ? void 0 : t.hideSlider) && void 0 !== o && o,
                    x = null == C ? void 0 : null === (n = C.options) || void 0 === n ? void 0 : n.bodyClassName,
                    R = void 0 !== I && I ? f.sliderBodyLarge : null == C ? void 0 : null === (s = C.options) || void 0 === s ? void 0 : s.sliderBodyClassName;
                return (0, l.jsxs)(l.Fragment, {
                    children: [null === (d = null == C ? void 0 : null === (r = C.options) || void 0 === r ? void 0 : r.renderHeader) || void 0 === d || d ? _ : null, C.renderStep(h), null == T || p ? null : (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(c.ModalContent, {
                            className: i(f.body, x),
                            children: (0, l.jsx)(c.Slides, {
                                activeSlide: T,
                                centered: !1,
                                onSlideReady: e => g(e),
                                children: N.filter(e => null != e.key).map(e => (0, l.jsx)(c.Slide, {
                                    id: e.key,
                                    children: (0, l.jsx)("form", {
                                        className: i(f.sliderBody, R),
                                        ref: e => v(e),
                                        onSubmit: e => e.preventDefault()
                                    })
                                }, e.key))
                            })
                        }), (0, l.jsx)("div", {
                            ref: e => m(e)
                        }), (0, l.jsx)("div", {
                            ref: e => S(e)
                        })]
                    })]
                })
            }

            function I(e) {
                let {
                    children: t
                } = e, {
                    bodyNode: n
                } = (0, E.usePaymentContext)();
                return null == n ? null : d.createPortal(t, n)
            }

            function h(e) {
                let {
                    children: t
                } = e, {
                    footerNode: n
                } = (0, E.usePaymentContext)();
                return null == n ? null : d.createPortal(t, n)
            }
        },
        232268: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("65597"),
                s = n("880731");

            function i(e) {
                let {
                    children: t,
                    confettiLocation: n
                } = e, i = (0, a.default)([s.default], () => s.default.isEnabled({
                    confettiLocation: n
                }));
                return i ? (0, l.jsx)(l.Fragment, {
                    children: t
                }) : null
            }
        },
        798592: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("884691"),
                a = n("65597"),
                s = n("526887"),
                i = n("880731");

            function r() {
                let {
                    createMultipleConfettiAt: e
                } = l.useContext(s.ConfettiCannonContext), t = (0, a.default)([i.default], () => i.default.getState()), n = l.useCallback(e => ({
                    size: {
                        type: "static-random",
                        minValue: e.confettiSize - 7,
                        maxValue: e.confettiSize + 7
                    }
                }), []), r = l.useMemo(() => ({
                    fire: (l, a, s) => {
                        var i, r;
                        let u = (null == s ? void 0 : s.settings) != null ? {
                                ...t,
                                ...s.settings
                            } : t,
                            o = n(u);
                        e(l, a, o, (null !== (i = null == s ? void 0 : s.count) && void 0 !== i ? i : u.confettiCount) * (null !== (r = null == s ? void 0 : s.countMultiplier) && void 0 !== r ? r : 1), {
                            sprite: null == s ? void 0 : s.sprite
                        })
                    }
                }), [e, n, t]);
                return r
            }
        },
        716849: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                NON_SUBSCRIBER_SENTINEL: function() {
                    return _
                },
                maybeFetchPremiumLikelihood: function() {
                    return h
                },
                useMaybeFetchPremiumLikelihood: function() {
                    return T
                }
            });
            var l = n("884691"),
                a = n("65597"),
                s = n("872717"),
                i = n("913144"),
                r = n("775433"),
                u = n("697218"),
                o = n("10514"),
                d = n("764364"),
                c = n("676572"),
                E = n("646718"),
                f = n("49111");
            let _ = "nonSubscriber";
            async function I() {
                try {
                    i.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH"
                    });
                    let {
                        body: e
                    } = await s.default.get({
                        url: f.Endpoints.USER_PREMIUM_LIKELIHOOD
                    });
                    i.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS",
                        premiumLikelihood: function(e) {
                            return {
                                [_]: e.non_subscriber,
                                [E.PremiumSubscriptionSKUs.TIER_0]: e[E.PremiumSubscriptionSKUs.TIER_0],
                                [E.PremiumSubscriptionSKUs.TIER_2]: e[E.PremiumSubscriptionSKUs.TIER_2]
                            }
                        }(e)
                    })
                } catch (e) {
                    404 === e.status ? i.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS"
                    }) : i.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR"
                    })
                }
            }

            function h(e) {
                let {
                    enabled: t,
                    useExpectedValue: n
                } = e.getCurrentConfig({
                    location: "443cca_1"
                }, {
                    autoTrackExposure: !1
                }), l = c.default.shouldFetchPremiumLikelihood(), a = u.default.getCurrentUser();
                N(a, l, t, n)
            }

            function T(e) {
                let {
                    enabled: t,
                    useExpectedValue: n
                } = e.useExperiment({
                    location: "443cca_2"
                }, {
                    autoTrackExposure: !1
                }), s = (0, a.default)([c.default], () => c.default.shouldFetchPremiumLikelihood()), i = (0, a.default)([u.default], () => u.default.getCurrentUser());
                l.useEffect(() => {
                    N(i, s, t, n)
                }, [i, s, t, n])
            }

            function N(e, t, n, l) {
                null != e && !(0, d.isPremium)(e) && n && (t && I(), l && (!o.default.isLoadedForSKU(E.PremiumSubscriptionSKUs.TIER_0) && !o.default.isFetchingForSKU(E.PremiumSubscriptionSKUs.TIER_0) && (0, r.fetchSubscriptionPlansForSKU)(E.PremiumSubscriptionSKUs.TIER_0), !o.default.isLoadedForSKU(E.PremiumSubscriptionSKUs.TIER_2) && !o.default.isFetchingForSKU(E.PremiumSubscriptionSKUs.TIER_2) && (0, r.fetchSubscriptionPlansForSKU)(E.PremiumSubscriptionSKUs.TIER_2)))
            }
        },
        676572: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var l = n("446674"),
                a = n("913144");
            let s = {
                    premiumLikelihood: void 0,
                    isFetching: !1,
                    fetched: !1
                },
                i = s;
            class r extends l.default.Store {
                initialize() {
                    i = s
                }
                getState() {
                    return i
                }
                shouldFetchPremiumLikelihood() {
                    return !i.isFetching && !i.fetched
                }
            }
            r.displayName = "UserPremiumLikelihoodStore";
            var u = new r(a.default, {
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH: function() {
                    i.isFetching = !0
                },
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS: function(e) {
                    let {
                        premiumLikelihood: t
                    } = e;
                    i.premiumLikelihood = t, i.fetched = !0, i.isFetching = !1
                },
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR: function() {
                    i.isFetching = !1
                },
                LOGOUT: function() {
                    i.premiumLikelihood = void 0
                }
            })
        },
        552917: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("862205");
            let a = (0, l.createExperiment)({
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
            var s = a
        },
        520497: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var l = n("49111");

            function a(e) {
                let {
                    CDN_HOST: t,
                    PROJECT_ENV: n
                } = window.GLOBAL_ENV;
                return "development" !== n ? "".concat(location.protocol, "//").concat(t).concat(l.Endpoints.SOUNDBOARD_SOUND(e)) : "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT).concat(l.Endpoints.SOUNDBOARD_SOUND(e))
            }
        },
        119184: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("414456"),
                s = n.n(a),
                i = n("782340"),
                r = n("53061"),
                u = n("284434"),
                o = n("315956");

            function d(e) {
                let {
                    className: t,
                    children: n
                } = e;
                return (0, l.jsxs)("div", {
                    className: s(r.container, t),
                    children: [(0, l.jsx)("img", {
                        alt: i.default.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
                        src: o,
                        className: s(r.sparkleIcon, r.sparkleBottom)
                    }), n, (0, l.jsx)("img", {
                        alt: i.default.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
                        src: u,
                        className: s(r.sparkleIcon, r.sparkleTop)
                    })]
                })
            }
        },
        754474: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                BotTypes: function() {
                    return r.BotTagTypes
                },
                default: function() {
                    return o
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("414456"),
                s = n.n(a),
                i = n("79798"),
                r = n("988268"),
                u = n("888770"),
                o = e => {
                    let {
                        name: t,
                        discriminator: n,
                        invertBotTagColor: a,
                        nameColor: r,
                        className: o,
                        botType: d,
                        usernameClass: c,
                        discriminatorClass: E,
                        botClass: f,
                        botVerified: _ = !1,
                        style: I,
                        useRemSizes: h = !1,
                        usernameIcon: T
                    } = e;
                    return (0, l.jsxs)("div", {
                        className: s(o, u.nameTag),
                        style: I,
                        children: [(0, l.jsxs)("span", {
                            className: s(u.username, c),
                            style: null != r ? {
                                color: r
                            } : void 0,
                            children: [T, t]
                        }), null != n ? (0, l.jsxs)("span", {
                            className: null != E ? E : void 0,
                            children: ["#", n]
                        }) : null, null != d ? (0, l.jsx)(i.default, {
                            type: d,
                            invertColor: a,
                            className: s(f, u.bot),
                            verified: _,
                            useRemSizes: h
                        }) : null]
                    })
                }
        },
        683911: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("414456"),
                s = n.n(a),
                i = n("77078"),
                r = n("258078"),
                u = n("549043");

            function o(e) {
                let {
                    steps: t,
                    stepIndex: n,
                    onClick: a
                } = e;
                return (0, l.jsx)("div", {
                    className: u.container,
                    children: t.map((e, t) => {
                        let o = n === t;
                        return (0, l.jsxs)(i.Clickable, {
                            onClick: () => a(t),
                            className: u.stepContainer,
                            children: [(0, l.jsx)("div", {
                                className: s(u.progressBar, {
                                    [u.selectedProgressBar]: o
                                })
                            }), (0, l.jsx)(r.default, {
                                color: o ? r.default.Colors.BRAND : r.default.Colors.MUTED,
                                size: r.default.Sizes.SIZE_12,
                                children: e
                            })]
                        }, e)
                    })
                })
            }
        },
        191814: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var l = n("37983");

            function a(e) {
                let {
                    size: t,
                    horizontal: n = !1
                } = e, a = n ? t : 1, s = n ? 1 : t;
                return (0, l.jsx)("span", {
                    style: {
                        display: "block",
                        width: a,
                        minWidth: a,
                        height: s,
                        minHeight: s
                    }
                })
            }
            n("884691")
        },
        461380: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("414456"),
                s = n.n(a),
                i = n("384737"),
                r = n("448052"),
                u = n("748802"),
                o = n("260792"),
                d = n("77078"),
                c = n("75196"),
                E = n("4177");
            let f = {
                    UP: E.directionUp,
                    RIGHT: E.directionRight,
                    DOWN: E.directionDown,
                    LEFT: E.directionLeft
                },
                _ = e => {
                    let {
                        direction: t = f.DOWN,
                        width: n = 24,
                        height: a = 24,
                        color: _ = "currentColor",
                        transition: I = E.transition,
                        className: h,
                        foreground: T,
                        expanded: N,
                        ...v
                    } = e, {
                        enabled: m
                    } = (0, d.useRedesignIconContext)(), S = t;
                    if (!0 === N ? S = f.DOWN : !1 === N && (S = f.RIGHT), m) {
                        let e = {
                            [f.UP]: o.ChevronSmallUpIcon,
                            [f.DOWN]: i.ChevronSmallDownIcon,
                            [f.LEFT]: r.ChevronSmallLeftIcon,
                            [f.RIGHT]: u.ChevronSmallRightIcon
                        } [S];
                        return (0, l.jsx)(e, {
                            ...v,
                            className: h,
                            width: n,
                            height: a,
                            color: _,
                            colorClass: T
                        })
                    }
                    return (0, l.jsx)("svg", {
                        className: s(h, I, S),
                        width: n,
                        height: a,
                        viewBox: "0 0 24 24",
                        ...(0, c.default)(v),
                        children: (0, l.jsx)("path", {
                            className: T,
                            fill: "none",
                            stroke: _,
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M7 10L12 15 17 10",
                            "aria-hidden": !0
                        })
                    })
                };
            _.Directions = f;
            var I = _
        },
        832132: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("469563"),
                s = n("504318"),
                i = n("75196"),
                r = (0, a.replaceIcon)(function(e) {
                    let {
                        color: t = "currentColor",
                        height: n = 24,
                        width: a = 24,
                        ...s
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, i.default)(s),
                        width: a,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, l.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M19.2929 9.8299L19.9409 9.18278C21.353 7.77064 21.353 5.47197 19.9409 4.05892C18.5287 2.64678 16.2292 2.64678 14.817 4.05892L14.1699 4.70694L19.2929 9.8299ZM12.8962 5.97688L5.18469 13.6906L10.3085 18.813L18.0201 11.0992L12.8962 5.97688ZM4.11851 20.9704L8.75906 19.8112L4.18692 15.239L3.02678 19.8796C2.95028 20.1856 3.04028 20.5105 3.26349 20.7337C3.48669 20.9569 3.8116 21.046 4.11851 20.9704Z",
                            fill: t
                        })
                    })
                }, s.PencilIcon, void 0, {
                    size: 24
                })
        },
        867544: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("669491"),
                s = n("469563"),
                i = n("163725"),
                r = n("75196"),
                u = (0, s.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: s = "currentColor",
                        foregroundColor: i = a.default.unsafe_rawColors.RED_400.css,
                        foreground: u,
                        background: o,
                        ...d
                    } = e;
                    return (0, l.jsxs)("svg", {
                        ...(0, r.default)(d),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: [(0, l.jsx)("rect", {
                            fill: i,
                            className: u,
                            x: "2",
                            y: "21.2154",
                            width: "26",
                            height: "2",
                            transform: "rotate(-45 2 21.2154)"
                        }), (0, l.jsx)("path", {
                            fill: s,
                            className: o,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M10.1843 18.8115C10.7713 18.9328 11.3775 19 12 19C18.352 19 23 12 23 12C23 12 21.9643 10.4402 20.2026 8.79322L15.8265 13.1693C15.4393 14.4384 14.4382 15.4393 13.1694 15.8264L10.1843 18.8115ZM12.4818 8.02871C12.3238 8.00975 12.1631 8 12 8C9.791 8 8 9.79 8 12C8 12.1631 8.00975 12.3239 8.0287 12.4818L4.59645 15.914C2.35293 14.0375 1 12 1 12C1 12 5.648 5 12 5C13.0508 5 14.055 5.19157 14.9992 5.51132L12.4818 8.02871Z"
                        })]
                    })
                }, i.EyeSlashIcon, void 0, {
                    size: 24
                })
        },
        818643: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("469563"),
                s = n("851298"),
                i = n("75196"),
                r = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: a = "currentColor",
                        ...s
                    } = e;
                    return (0, l.jsxs)("svg", {
                        ...(0, i.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: [(0, l.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M13.2899 2L6 2C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V10.7101C21.3663 10.8987 20.695 11 20 11C16.134 11 13 7.86599 13 4C13 3.30503 13.1013 2.63371 13.2899 2ZM8 6C9.1032 6 10 6.8952 10 8C10 9.1056 9.1032 10 8 10C6.8944 10 6 9.1056 6 8C6 6.8952 6.8944 6 8 6ZM6 18L9 14L11 16L15 11L18 18H6Z",
                            fill: a
                        }), (0, l.jsx)("path", {
                            d: "M21 0V3H24V5H21V8H19V5H16V3H19V0H21Z",
                            fill: a
                        })]
                    })
                }, s.ImagePlusIcon, void 0, {
                    size: 24
                })
        },
        543289: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("75196");

            function s(e) {
                let {
                    width: t = 104,
                    height: n = 80,
                    ...s
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, a.default)(s),
                    width: t,
                    height: n,
                    viewBox: "0 0 104 80",
                    fill: "none",
                    children: [(0, l.jsx)("path", {
                        d: "M95.6718 1.80634C95.6718 0.808724 94.863 0 93.8654 0C92.8678 0 92.0591 0.808724 92.0591 1.80634V3.64278C92.0591 4.64039 92.8678 5.44911 93.8654 5.44911C94.863 5.44911 95.6718 4.64039 95.6718 3.64278V1.80634Z",
                        fill: "#ADF3FF"
                    }), (0, l.jsx)("path", {
                        d: "M95.6713 16.3574C95.6713 15.3598 94.8625 14.5511 93.8649 14.5511C92.8673 14.5511 92.0586 15.3598 92.0586 16.3574V18.1939C92.0586 19.1915 92.8673 20.0002 93.8649 20.0002C94.8625 20.0002 95.6713 19.1915 95.6713 18.1939V16.3574Z",
                        fill: "#ADF3FF"
                    }), (0, l.jsx)("path", {
                        d: "M102.194 11.8412C103.191 11.8412 104 11.0325 104 10.0349C104 9.03724 103.191 8.22852 102.194 8.22852H100.357C99.3596 8.22852 98.5509 9.03724 98.5509 10.0349C98.5509 11.0325 99.3596 11.8412 100.357 11.8412H102.194Z",
                        fill: "#ADF3FF"
                    }), (0, l.jsx)("path", {
                        d: "M87.6434 11.7413C88.641 11.7413 89.4497 10.9325 89.4497 9.93494C89.4497 8.93733 88.641 8.1286 87.6434 8.1286H85.8069C84.8093 8.1286 84.0006 8.93733 84.0006 9.93494C84.0006 10.9325 84.8093 11.7413 85.8069 11.7413H87.6434Z",
                        fill: "#ADF3FF"
                    }), (0, l.jsx)("path", {
                        d: "M11.1501 74.4573L15.3147 73.0684C15.5192 72.9747 15.6925 72.8241 15.814 72.6347C15.9354 72.4454 16 72.225 16 72C16 71.775 15.9354 71.5546 15.814 71.3653C15.6925 71.1759 15.5192 71.0253 15.3147 70.9316L11.1501 69.5427C10.8657 69.4142 10.6378 69.1862 10.5094 68.9016L9.01446 64.7348C8.94423 64.521 8.80835 64.3349 8.62619 64.203C8.44403 64.071 8.22488 64 7.99999 64C7.77511 64 7.55597 64.071 7.37381 64.203C7.19165 64.3349 7.05576 64.521 6.98554 64.7348L5.49057 68.9016C5.36216 69.1862 5.13433 69.4142 4.84986 69.5427L0.685276 70.9316C0.480802 71.0253 0.307523 71.1759 0.186045 71.3653C0.0645662 71.5546 0 71.775 0 72C0 72.225 0.0645662 72.4454 0.186045 72.6347C0.307523 72.8241 0.480802 72.9747 0.685276 73.0684L4.84986 74.4573C5.0011 74.5032 5.1387 74.5858 5.25046 74.6976C5.36222 74.8094 5.44469 74.9471 5.49057 75.0984L6.98554 79.2652C7.05576 79.479 7.19165 79.6651 7.37381 79.797C7.55597 79.929 7.77511 80 7.99999 80C8.22488 80 8.44403 79.929 8.62619 79.797C8.80835 79.6651 8.94423 79.479 9.01446 79.2652L10.5094 75.0984C10.5553 74.9471 10.6378 74.8094 10.7495 74.6976C10.8613 74.5858 10.9989 74.5032 11.1501 74.4573Z",
                        fill: "#FFD01A"
                    })]
                })
            }
        },
        433487: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("469563"),
                s = n("304983"),
                i = n("75196"),
                r = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: a = "currentColor",
                        foreground: s,
                        ...r
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, i.default)(r),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, l.jsx)("path", {
                            fill: a,
                            className: s,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M7 12.001C7 10.8964 6.10457 10.001 5 10.001C3.89543 10.001 3 10.8964 3 12.001C3 13.1055 3.89543 14.001 5 14.001C6.10457 14.001 7 13.1055 7 12.001ZM14 12.001C14 10.8964 13.1046 10.001 12 10.001C10.8954 10.001 10 10.8964 10 12.001C10 13.1055 10.8954 14.001 12 14.001C13.1046 14.001 14 13.1055 14 12.001ZM19 10.001C20.1046 10.001 21 10.8964 21 12.001C21 13.1055 20.1046 14.001 19 14.001C17.8954 14.001 17 13.1055 17 12.001C17 10.8964 17.8954 10.001 19 10.001Z"
                        })
                    })
                }, s.MoreHorizontalIcon, void 0, {
                    size: 24
                })
        },
        155207: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("469563"),
                s = n("811513"),
                i = n("75196"),
                r = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: a = "currentColor",
                        foreground: s,
                        ...r
                    } = e;
                    return (0, l.jsxs)("svg", {
                        ...(0, i.default)(r),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: [(0, l.jsx)("path", {
                            className: s,
                            fill: a,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14 8.00598C14 10.211 12.206 12.006 10 12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 4.00598 14 5.80098 14 8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 19.006V20.006H2V19.006Z"
                        }), (0, l.jsx)("path", {
                            className: s,
                            fill: a,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14 8.00598C14 10.211 12.206 12.006 10 12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 4.00598 14 5.80098 14 8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 19.006V20.006H2V19.006Z"
                        }), (0, l.jsx)("path", {
                            className: s,
                            fill: a,
                            d: "M20.0001 20.006H22.0001V19.006C22.0001 16.4433 20.2697 14.4415 17.5213 13.5352C19.0621 14.9127 20.0001 16.8059 20.0001 19.006V20.006Z"
                        }), (0, l.jsx)("path", {
                            className: s,
                            fill: a,
                            d: "M14.8834 11.9077C16.6657 11.5044 18.0001 9.9077 18.0001 8.00598C18.0001 5.96916 16.4693 4.28218 14.4971 4.0367C15.4322 5.09511 16.0001 6.48524 16.0001 8.00598C16.0001 9.44888 15.4889 10.7742 14.6378 11.8102C14.7203 11.8418 14.8022 11.8743 14.8834 11.9077Z"
                        })]
                    })
                }, s.GroupIcon, void 0, {
                    size: 24
                })
        },
        132755: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("469563"),
                s = n("876726"),
                i = n("75196"),
                r = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: a = "currentColor",
                        foreground: s,
                        ...r
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, i.default)(r),
                        width: t,
                        height: n,
                        viewBox: "0 0 18 18",
                        fill: "none",
                        children: (0, l.jsx)("path", {
                            className: s,
                            d: "M6.01053 2.82974C5.01058 2.24153 3.75 2.96251 3.75 4.12264V13.8774C3.75 15.0375 5.01058 15.7585 6.01053 15.1703L14.3021 10.2929C15.288 9.71294 15.288 8.28709 14.3021 7.70711L6.01053 2.82974Z",
                            fill: a
                        })
                    })
                }, s.PlayIcon, void 0, {
                    size: 16
                })
        },
        354023: function(e, t, n) {
            "use strict";
            let l;
            n.r(t), n.d(t, {
                RowTypes: function() {
                    return a
                },
                generateRowsForQuery: function() {
                    return R
                },
                getMostRecentDMedUser: function() {
                    return A
                },
                getUsersAlreadyJoined: function() {
                    return O
                },
                maxAgeString: function() {
                    return D
                },
                default: function() {
                    return y
                }
            }), n("424973"), n("222007");
            var a, s, i = n("191225"),
                r = n("42203"),
                u = n("26989"),
                o = n("660478"),
                d = n("27618"),
                c = n("697218"),
                E = n("287850"),
                f = n("25292"),
                _ = n("49111"),
                I = n("91366"),
                h = n("782340");
            l = n("591205"), (s = a || (a = {})).GROUP_DM = "GROUP_DM", s.DM = "DM", s.FRIEND = "FRIEND", s.CHANNEL = "CHANNEL";
            let T = (e, t) => null != e && u.default.isMember(e, t),
                N = e => {
                    let {
                        omitUserIds: t,
                        suggestedUserIds: n,
                        maxRowsWithoutQuery: l,
                        omitGuildId: a,
                        shownUserIds: s,
                        rows: i,
                        counts: r
                    } = e;
                    if (null != n)
                        for (let e of n) {
                            if (null != l && l > 0 && i.length >= l) break;
                            if (t.has(e) || s.has(e)) continue;
                            let n = c.default.getUser(e);
                            !(null == n || T(a, n.id)) && (s.add(n.id), i.push({
                                type: "FRIEND",
                                item: n,
                                isSuggested: !0
                            }), r.numFriends++)
                        }
                },
                v = e => {
                    let {
                        suggestedChannelIds: t,
                        maxRowsWithoutQuery: n,
                        rows: l,
                        counts: a
                    } = e;
                    if (null != t)
                        for (let e of t) {
                            if (null != n && n > 0 && l.length >= n) break;
                            let t = r.default.getChannel(e);
                            null != t && (l.push({
                                type: "CHANNEL",
                                item: t,
                                isSuggested: !0
                            }), a.numChannels++)
                        }
                },
                m = e => {
                    let {
                        omitUserIds: t,
                        maxRowsWithoutQuery: n,
                        omitGuildId: l,
                        shownUserIds: a,
                        rows: s,
                        counts: i,
                        includeGroupDms: u,
                        limit: d
                    } = e, f = 0;
                    for (let e of E.default.getPrivateChannelIds()) {
                        if (null != n && n > 0 && s.length >= n || null != d && f >= d) break;
                        let E = r.default.getChannel(e);
                        if (null == E || !E.isPrivate()) continue;
                        if (u && E.type === _.ChannelTypes.GROUP_DM) {
                            s.push({
                                type: "GROUP_DM",
                                item: E,
                                isSuggested: !1
                            }), i.numGroupDms++, f++;
                            continue
                        }
                        let I = o.default.lastMessageId(E.id);
                        if (null == I) continue;
                        let h = E.getRecipientId();
                        if (null != h && !t.has(h) && !a.has(h)) {
                            let e = c.default.getUser(h);
                            if (null == e || e.bot || T(l, e.id)) continue;
                            a.add(e.id), s.push({
                                type: "DM",
                                item: e,
                                isSuggested: !1
                            }), i.numDms++, f++
                        }
                    }
                },
                S = e => {
                    let {
                        omitUserIds: t,
                        maxRowsWithoutQuery: n,
                        omitGuildId: l,
                        shownUserIds: a,
                        rows: s,
                        counts: i
                    } = e;
                    for (let e of d.default.getFriendIDs()) {
                        if (null != n && n > 0 && s.length >= n) break;
                        if (t.has(e) || a.has(e)) continue;
                        let r = c.default.getUser(e);
                        !(null == r || T(l, r.id)) && (s.push({
                            type: "FRIEND",
                            item: r,
                            isSuggested: !1
                        }), i.numFriends++)
                    }
                },
                g = e => {
                    let {
                        query: t,
                        rows: n,
                        counts: l,
                        inviteTargetType: a
                    } = e;
                    a === I.InviteTargetTypes.EMBEDDED_APPLICATION && f.default.queryChannels({
                        query: t,
                        limit: 3,
                        guildId: void 0
                    }).forEach(e => {
                        let {
                            record: t
                        } = e;
                        n.push({
                            type: "CHANNEL",
                            item: t,
                            isSuggested: !1
                        }), l.numChannels++
                    })
                },
                C = e => {
                    let {
                        query: t,
                        omitUserIds: n,
                        shownUserIds: l,
                        rows: a,
                        counts: s
                    } = e;
                    f.default.queryDMUsers({
                        query: t,
                        limit: 50
                    }).forEach(e => {
                        let {
                            record: t
                        } = e;
                        if (n.has(t.id)) return;
                        let i = r.default.getDMFromUserId(t.id);
                        if (null == i) return;
                        let u = o.default.lastMessageId(i);
                        null != u && (l.add(t.id), a.push({
                            type: "DM",
                            item: t,
                            isSuggested: !1
                        }), s.numDms++)
                    })
                },
                p = e => {
                    let {
                        query: t,
                        rows: n,
                        counts: l
                    } = e;
                    f.default.queryGroupDMs({
                        query: t,
                        limit: 50,
                        fuzzy: !1
                    }).forEach(e => {
                        let {
                            record: t
                        } = e;
                        n.push({
                            type: "GROUP_DM",
                            item: t,
                            isSuggested: !1
                        }), l.numGroupDms++
                    })
                },
                x = e => {
                    let {
                        query: t,
                        rows: n,
                        counts: l,
                        omitUserIds: a,
                        shownUserIds: s
                    } = e;
                    f.default.queryFriends({
                        query: t,
                        limit: 500,
                        _fuzzy: !1
                    }).forEach(e => {
                        let {
                            record: t
                        } = e;
                        !(a.has(t.id) || s.has(t.id)) && (s.add(t.id), n.push({
                            type: "FRIEND",
                            item: t,
                            isSuggested: !1
                        }), l.numFriends++)
                    })
                };

            function R(e) {
                let {
                    query: t,
                    inviteTargetType: n,
                    omitUserIds: l,
                    suggestedUserIds: a,
                    suggestedChannelIds: s,
                    maxRowsWithoutQuery: i,
                    omitGuildId: r
                } = e, u = new Set, o = [], d = {
                    numFriends: 0,
                    numDms: 0,
                    numGroupDms: 0,
                    numGuildMembers: 0,
                    numChannels: 0
                };
                if ("" === t) {
                    let e = {
                        omitUserIds: l,
                        maxRowsWithoutQuery: i,
                        omitGuildId: r,
                        shownUserIds: u,
                        rows: o,
                        counts: d
                    };
                    n === I.InviteTargetTypes.EMBEDDED_APPLICATION && (m({
                        ...e,
                        includeGroupDms: !1,
                        limit: 1
                    }), v({
                        ...e,
                        suggestedChannelIds: s
                    })), N({
                        ...e,
                        suggestedUserIds: a
                    }), m({
                        ...e,
                        includeGroupDms: !0
                    }), S(e)
                } else {
                    let e = {
                        query: t,
                        rows: o,
                        counts: d
                    };
                    n === I.InviteTargetTypes.EMBEDDED_APPLICATION && g({
                        ...e,
                        inviteTargetType: n
                    }), C({
                        ...e,
                        omitUserIds: l,
                        shownUserIds: u
                    }), p(e), x({
                        ...e,
                        omitUserIds: l,
                        shownUserIds: u
                    })
                }
                return {
                    rows: o,
                    counts: d
                }
            }

            function A(e, t) {
                for (let n of E.default.getPrivateChannelIds()) {
                    let l = r.default.getChannel(n);
                    if (null == l || !l.isDM() || null == o.default.lastMessageId(l.id)) continue;
                    let a = l.getRecipientId();
                    if (null != a && !e.has(a)) {
                        let e = c.default.getUser(a);
                        if (null == e || e.bot || T(t, e.id)) continue;
                        return e
                    }
                }
                return null
            }

            function O(e) {
                let {
                    channel: t,
                    inviteTargetType: n,
                    applicationId: l
                } = e;
                if (n === I.InviteTargetTypes.EMBEDDED_APPLICATION) {
                    if (null != t) {
                        for (let e of i.default.getEmbeddedActivitiesForChannel(t.id))
                            if (e.application_id === l) return new Set(e.connections.keys())
                    }
                }
                return new Set
            }
            let L = {
                    MINUTES: "minutes",
                    HOURS: "hours",
                    DAYS: "days",
                    NEVER: "never"
                },
                M = {
                    [l.INVITE_OPTIONS_30_MINUTES.value]: {
                        value: 30,
                        type: L.MINUTES
                    },
                    [l.INVITE_OPTIONS_1_HOUR.value]: {
                        value: 1,
                        type: L.HOURS
                    },
                    [l.INVITE_OPTIONS_6_HOURS.value]: {
                        value: 6,
                        type: L.HOURS
                    },
                    [l.INVITE_OPTIONS_12_HOURS.value]: {
                        value: 12,
                        type: L.HOURS
                    },
                    [l.INVITE_OPTIONS_1_DAY.value]: {
                        value: 1,
                        type: L.DAYS
                    },
                    [l.INVITE_OPTIONS_7_DAYS.value]: {
                        value: 7,
                        type: L.DAYS
                    },
                    [l.INVITE_OPTIONS_30_DAYS.value]: {
                        value: 30,
                        type: L.DAYS
                    },
                    [l.INVITE_OPTIONS_FOREVER.value]: {
                        value: 0,
                        type: L.NEVER
                    }
                };

            function D(e, t) {
                let n = parseInt(t, 10),
                    l = 0 === n,
                    a = M[e].value,
                    s = M[e].type;
                switch (s) {
                    case L.MINUTES:
                        if (l) return h.default.Messages.INVITE_EXPIRES_MINUTES;
                        return h.default.Messages.INVITE_EXPIRES_MINUTES_OR_USES.format({
                            numUses: n
                        });
                    case L.HOURS:
                        if (l) return h.default.Messages.INVITE_EXPIRES_HOURS.format({
                            numHours: a
                        });
                        return h.default.Messages.INVITE_EXPIRES_HOURS_OR_USES.format({
                            numHours: a,
                            numUses: n
                        });
                    case L.DAYS:
                        if (l) return h.default.Messages.INVITE_EXPIRES_DAYS_PLURAL.format({
                            numDays: a
                        });
                        return h.default.Messages.INVITE_EXPIRES_DAYS_OR_USES_PLURAL.format({
                            numDays: a,
                            numUses: n
                        });
                    case L.NEVER:
                        if (l) return h.default.Messages.INVITE_EXPIRES_NEVER;
                        return h.default.Messages.INVITE_EXPIRES_USES.format({
                            numUses: n
                        });
                    default:
                        return ""
                }
            }
            var y = {
                getMaxAgeOptions: l.MAX_AGE_OPTIONS,
                getMaxUsesOptions: l.MAX_USES_OPTIONS,
                INVITE_OPTIONS_FOREVER: l.INVITE_OPTIONS_FOREVER,
                INVITE_OPTIONS_1_DAY: l.INVITE_OPTIONS_1_DAY,
                INVITE_OPTIONS_7_DAYS: l.INVITE_OPTIONS_7_DAYS,
                INVITE_OPTIONS_30_DAYS: l.INVITE_OPTIONS_30_DAYS,
                INVITE_OPTIONS_12_HOURS: l.INVITE_OPTIONS_12_HOURS,
                INVITE_OPTIONS_6_HOURS: l.INVITE_OPTIONS_6_HOURS,
                INVITE_OPTIONS_1_HOUR: l.INVITE_OPTIONS_1_HOUR,
                INVITE_OPTIONS_30_MINUTES: l.INVITE_OPTIONS_30_MINUTES,
                INVITE_OPTIONS_UNLIMITED: l.INVITE_OPTIONS_UNLIMITED,
                INVITE_OPTIONS_ONCE: l.INVITE_OPTIONS_ONCE,
                INVITE_OPTIONS_5_TIMES: l.INVITE_OPTIONS_5_TIMES,
                INVITE_OPTIONS_10_TIMES: l.INVITE_OPTIONS_10_TIMES,
                INVITE_OPTIONS_25_TIMES: l.INVITE_OPTIONS_25_TIMES,
                INVITE_OPTIONS_50_TIMES: l.INVITE_OPTIONS_50_TIMES,
                INVITE_OPTIONS_100_TIMES: l.INVITE_OPTIONS_100_TIMES
            }
        },
        686904: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            }), n("222007");
            var l = n("884691"),
                a = n("448993");

            function s(e, t) {
                let [n, s] = l.useState(!1), [i, r] = l.useState(null), u = async () => {
                    s(!0), r(null);
                    try {
                        let t = await e();
                        return s(!1), r(null), t
                    } catch (n) {
                        let e = new a.APIError(n);
                        return null == t || t(e), r(e), s(!1), null
                    }
                };
                return [u, {
                    loading: n,
                    error: i
                }]
            }
        },
        591205: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                INVITE_OPTIONS_UNLIMITED: function() {
                    return s
                },
                INVITE_OPTIONS_ONCE: function() {
                    return i
                },
                INVITE_OPTIONS_5_TIMES: function() {
                    return r
                },
                INVITE_OPTIONS_10_TIMES: function() {
                    return u
                },
                INVITE_OPTIONS_25_TIMES: function() {
                    return o
                },
                INVITE_OPTIONS_50_TIMES: function() {
                    return d
                },
                INVITE_OPTIONS_100_TIMES: function() {
                    return c
                },
                MAX_USES_OPTIONS: function() {
                    return E
                },
                INVITE_OPTIONS_30_MINUTES: function() {
                    return f
                },
                INVITE_OPTIONS_1_HOUR: function() {
                    return _
                },
                INVITE_OPTIONS_6_HOURS: function() {
                    return I
                },
                INVITE_OPTIONS_12_HOURS: function() {
                    return h
                },
                INVITE_OPTIONS_1_DAY: function() {
                    return T
                },
                INVITE_OPTIONS_7_DAYS: function() {
                    return N
                },
                INVITE_OPTIONS_30_DAYS: function() {
                    return v
                },
                INVITE_OPTIONS_FOREVER: function() {
                    return m
                },
                MAX_AGE_OPTIONS: function() {
                    return S
                }
            });
            var l = n("782340");

            function a(e, t) {
                return {
                    value: e,
                    get label() {
                        return t()
                    }
                }
            }
            let s = a(0, () => l.default.Messages.MAX_USES.format({
                    maxUses: 0
                })),
                i = a(1, () => l.default.Messages.MAX_USES.format({
                    maxUses: 1
                })),
                r = a(5, () => l.default.Messages.MAX_USES.format({
                    maxUses: 5
                })),
                u = a(10, () => l.default.Messages.MAX_USES.format({
                    maxUses: 10
                })),
                o = a(25, () => l.default.Messages.MAX_USES.format({
                    maxUses: 25
                })),
                d = a(50, () => l.default.Messages.MAX_USES.format({
                    maxUses: 50
                })),
                c = a(100, () => l.default.Messages.MAX_USES.format({
                    maxUses: 100
                })),
                E = [s, i, r, u, o, d, c],
                f = a(1800, () => l.default.Messages.DURATION_MINUTES.format({
                    minutes: 30
                })),
                _ = a(3600, () => l.default.Messages.DURATION_HOURS.format({
                    hours: 1
                })),
                I = a(21600, () => l.default.Messages.DURATION_HOURS.format({
                    hours: 6
                })),
                h = a(43200, () => l.default.Messages.DURATION_HOURS.format({
                    hours: 12
                })),
                T = a(86400, () => l.default.Messages.DURATION_DAYS.format({
                    days: 1
                })),
                N = a(604800, () => l.default.Messages.DURATION_DAYS.format({
                    days: 7
                })),
                v = a(2592e3, () => l.default.Messages.DURATION_DAYS.format({
                    days: 30
                })),
                m = a(0, () => l.default.Messages.MAX_AGE_NEVER),
                S = [f, _, I, h, T, N, v, m]
        }
    }
]);