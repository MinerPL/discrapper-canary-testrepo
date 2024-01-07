(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["65959"], {
        767590: function(e, t, n) {
            var r = n("890022"),
                a = n("566040"),
                i = n("846165"),
                l = Math.ceil,
                o = Math.max;
            e.exports = function(e, t, n) {
                t = (n ? a(e, t, n) : void 0 === t) ? 1 : o(i(t), 0);
                var u = null == e ? 0 : e.length;
                if (!u || t < 1) return [];
                for (var s = 0, d = 0, c = Array(l(u / t)); s < u;) c[d++] = r(e, s, s += t);
                return c
            }
        },
        969176: function(e, t, n) {
            var r = n("354069");
            e.exports = function(e, t) {
                return r(e, t)
            }
        },
        846165: function(e, t, n) {
            var r = n("323033");
            e.exports = function(e) {
                var t = r(e),
                    n = t % 1;
                return t == t ? n ? t - n : t : 0
            }
        },
        397613: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ErrorBoundary: function() {
                    return l
                }
            }), n("70102"), n("222007");
            var r = n("884691");
            let a = (0, r.createContext)(null),
                i = {
                    didCatch: !1,
                    error: null
                };
            class l extends r.Component {
                static getDerivedStateFromError(e) {
                    return {
                        didCatch: !0,
                        error: e
                    }
                }
                resetErrorBoundary() {
                    let {
                        error: e
                    } = this.state;
                    if (null !== e) {
                        for (var t, n, r = arguments.length, a = Array(r), l = 0; l < r; l++) a[l] = arguments[l];
                        null === (t = (n = this.props).onReset) || void 0 === t || t.call(n, {
                            args: a,
                            reason: "imperative-api"
                        }), this.setState(i)
                    }
                }
                componentDidCatch(e, t) {
                    var n, r;
                    null === (n = (r = this.props).onError) || void 0 === n || n.call(r, e, t)
                }
                componentDidUpdate(e, t) {
                    let {
                        didCatch: n
                    } = this.state, {
                        resetKeys: r
                    } = this.props;
                    if (n && null !== t.error && function() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                            return e.length !== t.length || e.some((e, n) => !Object.is(e, t[n]))
                        }(e.resetKeys, r)) {
                        var a, l;
                        null === (a = (l = this.props).onReset) || void 0 === a || a.call(l, {
                            next: r,
                            prev: e.resetKeys,
                            reason: "keys"
                        }), this.setState(i)
                    }
                }
                render() {
                    let {
                        children: e,
                        fallbackRender: t,
                        FallbackComponent: n,
                        fallback: i
                    } = this.props, {
                        didCatch: l,
                        error: o
                    } = this.state, u = e;
                    if (l) {
                        let e = {
                            error: o,
                            resetErrorBoundary: this.resetErrorBoundary
                        };
                        if ((0, r.isValidElement)(i)) u = i;
                        else if ("function" == typeof t) u = t(e);
                        else if (n) u = (0, r.createElement)(n, e);
                        else throw o
                    }
                    return (0, r.createElement)(a.Provider, {
                        value: {
                            didCatch: l,
                            error: o,
                            resetErrorBoundary: this.resetErrorBoundary
                        }
                    }, u)
                }
                constructor(e) {
                    super(e), this.resetErrorBoundary = this.resetErrorBoundary.bind(this), this.state = i
                }
            }
        },
        111633: function(e, t, n) {
            "use strict";
            e.exports = function(e) {
                var t, n;
                return (e = String(e).toLowerCase()).length < 3 ? e : (121 === e.charCodeAt(0) && (t = !0, e = "Y" + e.substr(1)), I.test(e) ? e = e.substr(0, e.length - 2) : x.test(e) && (e = e.substr(0, e.length - 1)), (n = v.exec(e)) ? u.test(n[1]) && (e = e.substr(0, e.length - 1)) : (n = g.exec(e)) && c.test(n[1]) && (e = n[1], _.test(e) ? e += "e" : C.test(e) ? e = e.substr(0, e.length - 1) : f.test(e) && (e += "e")), (n = E.exec(e)) && c.test(n[1]) && (e = n[1] + "i"), (n = O.exec(e)) && u.test(n[1]) && (e = n[1] + r[n[2]]), (n = N.exec(e)) && u.test(n[1]) && (e = n[1] + a[n[2]]), (n = y.exec(e)) ? d.test(n[1]) && (e = n[1]) : (n = m.exec(e)) && d.test(n[1]) && (e = n[1]), (n = p.exec(e)) && (d.test(n[1]) || s.test(n[1]) && !f.test(n[1])) && (e = n[1]), h.test(e) && d.test(e) && (e = e.substr(0, e.length - 1)), t && (e = "y" + e.substr(1)), e)
            };
            var r = {
                    ational: "ate",
                    tional: "tion",
                    enci: "ence",
                    anci: "ance",
                    izer: "ize",
                    bli: "ble",
                    alli: "al",
                    entli: "ent",
                    eli: "e",
                    ousli: "ous",
                    ization: "ize",
                    ation: "ate",
                    ator: "ate",
                    alism: "al",
                    iveness: "ive",
                    fulness: "ful",
                    ousness: "ous",
                    aliti: "al",
                    iviti: "ive",
                    biliti: "ble",
                    logi: "log"
                },
                a = {
                    icate: "ic",
                    ative: "",
                    alize: "al",
                    iciti: "ic",
                    ical: "ic",
                    ful: "",
                    ness: ""
                },
                i = "[aeiouy]",
                l = "([^aeiou][^aeiouy]*)",
                o = "(" + i + "[aeiou]*)",
                u = RegExp("^" + l + "?" + o + l),
                s = RegExp("^" + l + "?" + o + l + o + "?$"),
                d = RegExp("^" + l + "?(" + o + l + "){2,}"),
                c = RegExp("^" + l + "?" + i),
                f = RegExp("^" + l + i + "[^aeiouwxy]$"),
                h = /ll$/,
                p = /^(.+?)e$/,
                E = /^(.+?)y$/,
                m = /^(.+?(s|t))(ion)$/,
                g = /^(.+?)(ed|ing)$/,
                _ = /(at|bl|iz)$/,
                v = /^(.+?)eed$/,
                x = /^.+?[^s]s$/,
                I = /^.+?(ss|i)es$/,
                C = /([^aeiouylsz])\1$/,
                O = RegExp("^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$"),
                N = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,
                y = RegExp("^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$")
        },
        949041: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            }), n("70102");
            var r = n("884691");

            function a() {
                let e = (0, r.createContext)(void 0);
                return {
                    Provider: t => {
                        let {
                            initialStore: n,
                            createStore: a,
                            children: i
                        } = t, l = (0, r.useRef)();
                        return !l.current && (n && (console.warn("Provider initialStore is deprecated and will be removed in the next version."), !a && (a = () => n)), l.current = a()), (0, r.createElement)(e.Provider, {
                            value: l.current
                        }, i)
                    },
                    useStore: function(t) {
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.is,
                            a = (0, r.useContext)(e);
                        if (!a) throw Error("Seems like you have not used zustand provider as an ancestor.");
                        return a(t, n)
                    },
                    useStoreApi: () => {
                        let t = (0, r.useContext)(e);
                        if (!t) throw Error("Seems like you have not used zustand provider as an ancestor.");
                        return (0, r.useMemo)(() => ({
                            getState: t.getState,
                            setState: t.setState,
                            subscribe: t.subscribe,
                            destroy: t.destroy
                        }), [t])
                    }
                }
            }
        },
        913452: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useOpenInPopoutExperiment: function() {
                    return i
                }
            });
            var r = n("862205");
            let a = (0, r.createExperiment)({
                kind: "user",
                id: "2023-08-30_open-in-popout",
                label: "Open Channel in Popout",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enabled",
                    config: {
                        enabled: !0
                    }
                }]
            });

            function i(e) {
                return a.useExperiment({
                    location: e
                }, {
                    autoTrackExposure: !1
                }).enabled
            }
        },
        327241: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return L
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("77078"),
                i = n("272030"),
                l = n("838446"),
                o = n("158534"),
                u = n("846883"),
                s = n("812204"),
                d = n("861370"),
                c = n("20209"),
                f = n("972701"),
                h = n("390008"),
                p = n("41205"),
                E = n("936947"),
                m = n("47495"),
                g = n("715243"),
                _ = n("458574"),
                v = n("963150"),
                x = n("308798"),
                I = n("47006"),
                C = n("878526"),
                O = n("44141"),
                N = n("531674"),
                y = n("619436"),
                b = n("625399"),
                S = n("731390"),
                P = n("339876"),
                A = n("49111"),
                T = n("782340");

            function R(e) {
                let {
                    channel: t,
                    onSelect: n
                } = e, l = (0, O.default)(t), o = (0, _.default)(t), s = (0, f.useAddToFavoritesItem)(t), c = (0, f.useRemoveFromFavoritesItem)(t), g = (0, h.default)(t), v = (0, p.default)(t), x = (0, E.default)(t), C = (0, N.default)(t), S = (0, y.default)(t), P = (0, I.default)(t), A = (0, d.default)({
                    id: t.id,
                    label: T.default.Messages.COPY_ID_CHANNEL
                }), R = (0, u.default)(t), M = (0, b.default)(t), L = (0, m.useShouldUseNewNotificationSystem)("ChannelContextFavoritesMenu");
                return (0, r.jsxs)(a.Menu, {
                    navId: "channel-context",
                    onClose: i.closeContextMenu,
                    "aria-label": T.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
                    onSelect: n,
                    children: [(0, r.jsx)(a.MenuGroup, {
                        children: l
                    }), (0, r.jsxs)(a.MenuGroup, {
                        children: [v, x, g, s]
                    }), (0, r.jsxs)(a.MenuGroup, {
                        children: [C, L ? M : S]
                    }), (0, r.jsx)(a.MenuGroup, {
                        children: P
                    }), (0, r.jsx)(a.MenuGroup, {
                        children: R
                    }), (0, r.jsx)(a.MenuGroup, {
                        children: c
                    }), (0, r.jsx)(a.MenuGroup, {
                        children: o
                    }), (0, r.jsx)(a.MenuGroup, {
                        children: A
                    })]
                })
            }

            function M(e) {
                let {
                    channel: t,
                    guild: n,
                    onSelect: l
                } = e, o = (0, O.default)(t), u = (0, _.default)(t), s = (0, f.useAddToFavoritesItem)(t), c = (0, f.useRemoveFromFavoritesItem)(t), h = (0, P.default)(t), p = (0, N.default)(t), E = (0, I.default)(t), A = (0, C.default)(t, n), R = (0, g.default)(t, n), M = (0, v.default)(t, n), L = (0, x.default)(t), U = (0, d.default)({
                    id: t.id,
                    label: T.default.Messages.COPY_ID_CHANNEL
                }), F = (0, S.default)(t, "list_text_channel_context_menu"), D = (0, y.default)(t), w = (0, b.default)(t), G = (0, m.useShouldUseNewNotificationSystem)("ChannelContextMenuNormal");
                return (0, r.jsxs)(a.Menu, {
                    navId: "channel-context",
                    onClose: i.closeContextMenu,
                    "aria-label": T.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
                    onSelect: l,
                    children: [(0, r.jsx)(a.MenuGroup, {
                        children: o
                    }, "mark-as-read"), (0, r.jsxs)(a.MenuGroup, {
                        children: [A, h, u, s, F]
                    }, "channel-actions"), (0, r.jsxs)(a.MenuGroup, {
                        children: [p, G ? w : D]
                    }, "notifications"), (0, r.jsxs)(a.MenuGroup, {
                        children: [E, R, M, L]
                    }, "admin-actions"), (0, r.jsx)(a.MenuGroup, {
                        children: c
                    }), (0, r.jsx)(a.MenuGroup, {
                        children: U
                    }, "developer-actions")]
                })
            }
            var L = (0, o.default)((0, l.default)(function(e) {
                let t = (0, c.default)();
                return t ? (0, r.jsx)(R, {
                    ...e
                }) : (0, r.jsx)(M, {
                    ...e
                })
            }, {
                object: A.AnalyticsObjects.CONTEXT_MENU
            }), [s.default.CONTEXT_MENU, s.default.CHANNEL_LIST_TEXT_CHANNEL_MENU])
        },
        731390: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var r = n("37983"),
                a = n("884691"),
                i = n("77078"),
                l = n("390236"),
                o = n("292508"),
                u = n("383294"),
                s = n("913452"),
                d = n("533466"),
                c = n("49111"),
                f = n("268333");

            function h(e) {
                let {
                    windowKey: t,
                    channel: n
                } = e;
                return (0, r.jsx)(o.default, {
                    withTitleBar: !0,
                    windowKey: t,
                    title: n.name,
                    channelId: n.id,
                    contentClassName: f.popoutContent,
                    children: (0, r.jsx)(l.default.Provider, {
                        value: n.guild_id,
                        children: (0, r.jsx)(d.default, {
                            providedChannel: n
                        })
                    })
                })
            }

            function p(e, t) {
                let n = (0, s.useOpenInPopoutExperiment)(t),
                    l = a.useCallback(() => {
                        u.open("".concat(c.PopoutWindowKeys.CHANNEL_POPOUT, "-").concat(e.id), t => (0, r.jsx)(h, {
                            windowKey: t,
                            channel: e
                        }), {
                            defaultWidth: 854,
                            defaultHeight: 480
                        })
                    }, [e]);
                return n ? (0, r.jsx)(i.MenuItem, {
                    id: "channel-pop-out",
                    label: "Open in Popout",
                    action: () => l()
                }) : null
            }
        },
        542827: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            }), n("881410"), n("222007"), n("424973");
            var r = n("917351"),
                a = n.n(r),
                i = n("267363"),
                l = n("863636"),
                o = n("401690"),
                u = n("923959"),
                s = n("660478"),
                d = n("599110"),
                c = n("49111"),
                f = n("133335");

            function h(e, t, n) {
                let r = a.flatMap(e, e => {
                    let t = u.default.getSelectableChannelIds(e),
                        n = u.default.getVocalChannelIds(e),
                        r = [...t, ...n],
                        a = o.default.getActiveJoinedThreadsForGuild(e);
                    for (let e of t) {
                        var i;
                        let t = null !== (i = a[e]) && void 0 !== i ? i : {};
                        for (let e in t) r.push(e)
                    }
                    return r
                }).map(e => ({
                    channelId: e,
                    readStateType: f.ReadStateTypes.CHANNEL,
                    messageId: s.default.lastMessageId(e)
                }));
                return e.forEach(e => {
                    r.push({
                        channelId: e,
                        readStateType: f.ReadStateTypes.GUILD_EVENT,
                        messageId: s.default.lastMessageId(e, f.ReadStateTypes.GUILD_EVENT)
                    }), r.push({
                        channelId: e,
                        readStateType: f.ReadStateTypes.GUILD_ONBOARDING_QUESTION,
                        messageId: l.default.ackIdForGuild(e)
                    })
                }), d.default.track(c.AnalyticEvents.MARK_AS_READ, {
                    source: t,
                    type: "guild"
                }), (0, i.bulkAck)(r, n)
            }
        },
        878720: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ChangePhoneReason: function() {
                    return a
                },
                default: function() {
                    return f
                }
            });
            var r, a, i = n("759843"),
                l = n("872717"),
                o = n("913144"),
                u = n("271938"),
                s = n("840707"),
                d = n("482931"),
                c = n("49111");
            (r = a || (a = {})).USER_ACTION_REQUIRED = "user_action_required", r.USER_SETTINGS_UPDATE = "user_settings_update", r.GUILD_PHONE_REQUIRED = "guild_phone_required", r.MFA_PHONE_UPDATE = "mfa_phone_update", r.CONTACT_SYNC = "contact_sync";
            var f = {
                setCountryCode(e) {
                    o.default.dispatch({
                        type: "PHONE_SET_COUNTRY_CODE",
                        countryCode: e
                    })
                },
                removePhone: (e, t) => l.default.delete({
                    url: c.Endpoints.PHONE,
                    body: {
                        password: e,
                        change_phone_reason: t
                    },
                    oldFormErrors: !0
                }),
                resendCode(e) {
                    let t = {},
                        n = u.default.getFingerprint();
                    return null != n && "" !== n && (t["X-Fingerprint"] = n), l.default.post({
                        url: c.Endpoints.RESEND_PHONE,
                        headers: t,
                        body: {
                            phone: e
                        }
                    })
                },
                beginAddPhone: (e, t) => l.default.post({
                    url: c.Endpoints.PHONE,
                    body: {
                        phone: e,
                        change_phone_reason: t
                    }
                }),
                addPhone: (e, t, n) => l.default.post({
                    url: c.Endpoints.PHONE,
                    body: {
                        phone_token: e,
                        password: t,
                        change_phone_reason: n
                    },
                    oldFormErrors: !0
                }),
                addPhoneWithoutPassword: e => l.default.post({
                    url: c.Endpoints.PHONE_VERIFY_NO_PASSWORD,
                    body: {
                        code: e
                    }
                }),
                beginReverifyPhone: (e, t) => l.default.post({
                    url: c.Endpoints.PHONE_REVERIFY,
                    body: {
                        phone: e,
                        change_phone_reason: t
                    }
                }),
                reverifyPhone: (e, t, n) => l.default.post({
                    url: c.Endpoints.PHONE_REVERIFY,
                    body: {
                        phone_token: e,
                        password: t,
                        change_phone_reason: n
                    },
                    oldFormErrors: !0
                }),
                validatePhoneForSupport: e => l.default.post({
                    url: c.Endpoints.VERIFY_PHONE_FOR_TICKET,
                    body: {
                        token: e
                    },
                    oldFormErrors: !0
                }),
                async verifyPhone(e, t) {
                    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                        r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                        a = {},
                        l = u.default.getFingerprint();
                    null != l && "" !== l && (a["X-Fingerprint"] = l), r && (a.authorization = "");
                    let f = await s.default.post({
                        url: c.Endpoints.VERIFY_PHONE,
                        headers: a,
                        body: {
                            phone: e,
                            code: t
                        },
                        oldFormErrors: !0,
                        trackedActionData: {
                            event: i.NetworkActionNames.USER_VERIFY_PHONE
                        }
                    });
                    return n && o.default.dispatch({
                        type: "MODAL_POP",
                        key: d.PHONE_VERIFICATION_MODAL_KEY
                    }), f.body
                }
            }
        },
        482931: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PHONE_VERIFICATION_MODAL_KEY: function() {
                    return r
                },
                PHONE_VERIFICATION_CODE_NUM_DIGITS: function() {
                    return a
                }
            });
            let r = "PHONE_VERIFICATION_MODAL_KEY",
                a = 6
        },
        393027: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var r = n("803182"),
                a = n("308503"),
                i = n("49111");

            function l(e) {
                let t = (0, r.matchPath)(null != e ? e : "", {
                    path: i.Routes.CHANNEL(":guildId", ":channelId?", ":messageId?")
                });
                if (null != t) {
                    let {
                        guildId: e,
                        channelId: n
                    } = t.params;
                    return {
                        guildId: e === i.ME ? null : e,
                        channelId: null != n ? n : null
                    }
                }
                let n = (0, r.matchPath)(null != e ? e : "", {
                    path: i.Routes.GUILD_BOOSTING_MARKETING(":guildId")
                });
                return null != n ? {
                    guildId: n.params.guildId,
                    channelId: null
                } : {
                    guildId: null,
                    channelId: null
                }
            }
            var o = (0, a.default)(e => ({
                path: null,
                basePath: "/",
                guildId: null,
                channelId: null,
                updatePath(t) {
                    let {
                        guildId: n,
                        channelId: r
                    } = l(t);
                    e({
                        path: t,
                        guildId: n,
                        channelId: r
                    })
                },
                resetPath(t) {
                    let {
                        guildId: n,
                        channelId: r
                    } = l(t);
                    e({
                        path: null,
                        guildId: n,
                        channelId: r,
                        basePath: t
                    })
                }
            }))
        },
        830210: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                },
                getChannelVideoLimit: function() {
                    return u
                }
            });
            var r = n("446674"),
                a = n("305961"),
                i = n("316133"),
                l = n("49111");

            function o(e) {
                return (0, r.useStateFromStoresObject)([i.default, a.default], () => {
                    let t = i.default.countVoiceStatesForChannel(e.id),
                        n = a.default.getGuild(e.getGuildId());
                    return null == n ? {
                        reachedLimit: !1,
                        limit: -1
                    } : e.type === l.ChannelTypes.GUILD_STAGE_VOICE ? {
                        reachedLimit: t > n.maxStageVideoChannelUsers,
                        limit: n.maxStageVideoChannelUsers
                    } : {
                        reachedLimit: n.maxVideoChannelUsers > 0 && t > n.maxVideoChannelUsers,
                        limit: n.maxVideoChannelUsers
                    }
                }, [e])
            }

            function u(e) {
                let t = i.default.countVoiceStatesForChannel(e.id),
                    n = a.default.getGuild(e.getGuildId());
                return null == n ? {
                    reachedLimit: !1,
                    limit: -1
                } : e.type === l.ChannelTypes.GUILD_STAGE_VOICE ? {
                    reachedLimit: t > n.maxStageVideoChannelUsers,
                    limit: n.maxStageVideoChannelUsers
                } : {
                    reachedLimit: n.maxVideoChannelUsers > 0 && t > n.maxVideoChannelUsers,
                    limit: n.maxVideoChannelUsers
                }
            }
        },
        727284: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("77078"),
                i = n("845579"),
                l = n("49111");

            function o(e, t) {
                i.AlwaysPreviewVideo.getSetting() ? (0, a.openModalLazy)(async () => {
                    let {
                        default: t
                    } = await n.el("381736").then(n.bind(n, "381736"));
                    return n => (0, r.jsx)(t, {
                        ...n,
                        onEnable: e,
                        videoEnabled: !1
                    })
                }, {
                    modalKey: "camera-preview",
                    contextKey: t === l.AppContext.POPOUT ? a.POPOUT_MODAL_CONTEXT : a.DEFAULT_MODAL_CONTEXT
                }) : null == e || e()
            }
        },
        98013: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                makeDesktopDownloadURL: function() {
                    return s
                },
                getPlatformReadableName: function() {
                    return c
                },
                getCurrentPlatformDownloadURL: function() {
                    return f
                },
                getMobileDownloadLink: function() {
                    return h
                }
            });
            var r = n("597755"),
                a = n.n(r),
                i = n("815157"),
                l = n("271938"),
                o = n("49111");
            let u = "linux";

            function s(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 ? arguments[2] : void 0;
                return "".concat(o.DownloadLinks.DESKTOP).concat(t ? "/ptb" : "", "?platform=").concat(e).concat(null != n ? "&format=".concat(n) : "")
            }

            function d() {
                var e;
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null === (e = a.os) || void 0 === e ? void 0 : e.family;
                return null == t ? "win" : -1 !== t.indexOf("Ubuntu") || -1 !== t.indexOf("Debian") || -1 !== t.indexOf("Fedora") || -1 !== t.indexOf("Red Hat") || -1 !== t.indexOf("SuSE") || -1 !== t.indexOf("Linux") ? u : -1 !== t.indexOf("OS X") ? "osx" : "win"
            }

            function c(e) {
                return ({
                    win: "Windows",
                    osx: "Mac",
                    [u]: "Linux"
                })[d(e)]
            }

            function f() {
                let e = d();
                return s(e, !1, e === u ? "tar.gz" : null)
            }

            function h(e, t, n) {
                let r = null != n ? n.toString() : null;
                switch (t) {
                    case "iOS":
                        return (0, i.default)(null != r ? r : "https://itunes.apple.com/us/app/discord-chat-for-games/id985746746", {
                            utmSource: e,
                            fingerprint: l.default.getFingerprint(),
                            attemptId: (0, i.generateAttemptId)()
                        });
                    case "Android":
                        return (0, i.default)(null != r ? r : "https://play.google.com/store/apps/details", {
                            utmSource: e,
                            id: "com.discord",
                            fingerprint: l.default.getFingerprint(),
                            attemptId: (0, i.generateAttemptId)()
                        });
                    default:
                        return null != r ? r : "https://www.discord.com"
                }
            }
        }
    }
]);