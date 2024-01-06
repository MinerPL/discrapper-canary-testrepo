(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["11960"], {
        406043: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useCurrentUserCommunicationDisabled: function() {
                    return o
                },
                default: function() {
                    return d
                },
                userCommunicationDisabled: function() {
                    return c
                }
            });
            var l = n("446674"),
                a = n("26989"),
                u = n("697218"),
                i = n("509");

            function o(e) {
                let t = (0, l.useStateFromStores)([u.default], () => u.default.getCurrentUser());
                return d(null == t ? void 0 : t.id, e)
            }

            function s(e, t, n) {
                return null != t && null != e ? n.getMember(t, e) : null
            }

            function r(e) {
                var t;
                return [null !== (t = null == e ? void 0 : e.communicationDisabledUntil) && void 0 !== t ? t : null, (0, i.isMemberCommunicationDisabled)(e)]
            }

            function d(e, t) {
                let n = (0, l.useStateFromStores)([a.default], () => s(e, t, a.default), [t, e]);
                return r(n)
            }

            function c(e, t) {
                let n = s(e, t, a.default);
                return r(n)
            }
        },
        192112: function(e, t, n) {
            "use strict";
            var l, a, u, i;
            n.r(t), n.d(t, {
                ActionComponentState: function() {
                    return l
                },
                SelectOptionType: function() {
                    return a
                }
            }), (u = l || (l = {}))[u.NORMAL = 0] = "NORMAL", u[u.LOADING = 1] = "LOADING", u[u.DISABLED = 2] = "DISABLED", (i = a || (a = {}))[i.STRING = 1] = "STRING", i[i.USER = 2] = "USER", i[i.ROLE = 3] = "ROLE", i[i.CHANNEL = 4] = "CHANNEL", i[i.GUILD = 5] = "GUILD"
        },
        812684: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getActionRowErrorText: function() {
                    return f
                },
                createComponents: function() {
                    return function e(t, n) {
                        let l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
                            a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                            i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [],
                            {
                                includeEmojiSrc: o
                            } = a;
                        return t.map((t, T) => {
                            var f, C, _, N, L, y;
                            if (!S(t.type)) return null;
                            let O = i.concat(T);
                            switch (t.type) {
                                case u.ComponentType.ACTION_ROW:
                                    let I = null != t.components ? e(t.components, n, l, a, O) : void 0;
                                    return {
                                        type: u.ComponentType.ACTION_ROW, indices: O, components: I
                                    };
                                case u.ComponentType.BUTTON:
                                    if (E.includes(n) && null != t.custom_id && p.test(t.custom_id) && !(0, d.default)(l)) return null;
                                    let v = null != t.emoji ? m(t.emoji, o) : void 0;
                                    return {
                                        type: u.ComponentType.BUTTON, customId: t.custom_id, style: t.style, disabled: t.disabled, url: t.url, label: t.label, emoji: v, indices: O, applicationId: n
                                    };
                                case u.ComponentType.STRING_SELECT:
                                    return {
                                        type: u.ComponentType.STRING_SELECT, customId: t.custom_id, disabled: t.disabled, options: t.options.map(e => ({
                                            type: s.SelectOptionType.STRING,
                                            label: e.label,
                                            value: e.value,
                                            default: e.default,
                                            description: e.description,
                                            emoji: null != e.emoji ? m(e.emoji, o) : void 0
                                        })), placeholder: null !== (f = t.placeholder) && void 0 !== f ? f : c.default.Messages.MESSAGE_SELECT_COMPONENT_DEFAULT_PLACEHOLDER, minValues: t.min_values, maxValues: t.max_values, indices: O, applicationId: n
                                    };
                                case u.ComponentType.INPUT_TEXT:
                                    return {
                                        type: t.type, style: t.style, customId: t.custom_id, label: t.label, value: t.value, placeholder: t.placeholder, disabled: t.disabled, required: t.required, minLength: t.min_length, maxLength: t.max_length, indices: O
                                    };
                                case u.ComponentType.USER_SELECT:
                                    return {
                                        type: u.ComponentType.USER_SELECT, customId: t.custom_id, disabled: t.disabled, placeholder: null !== (C = t.placeholder) && void 0 !== C ? C : c.default.Messages.MESSAGE_SELECT_COMPONENT_DEFAULT_PLACEHOLDER, minValues: t.min_values, maxValues: t.max_values, defaultValues: t.default_values, indices: O, applicationId: n, selectedOptions: (0, r.getSnowflakeSelectDefaultValues)(t.default_values, l)
                                    };
                                case u.ComponentType.ROLE_SELECT:
                                    return {
                                        type: u.ComponentType.ROLE_SELECT, customId: t.custom_id, disabled: t.disabled, placeholder: null !== (_ = t.placeholder) && void 0 !== _ ? _ : c.default.Messages.MESSAGE_SELECT_COMPONENT_DEFAULT_PLACEHOLDER, minValues: t.min_values, maxValues: t.max_values, defaultValues: t.default_values, indices: O, applicationId: n, selectedOptions: (0, r.getSnowflakeSelectDefaultValues)(t.default_values, l)
                                    };
                                case u.ComponentType.MENTIONABLE_SELECT:
                                    return {
                                        type: u.ComponentType.MENTIONABLE_SELECT, customId: t.custom_id, disabled: t.disabled, placeholder: null !== (N = t.placeholder) && void 0 !== N ? N : c.default.Messages.MESSAGE_SELECT_COMPONENT_DEFAULT_PLACEHOLDER, minValues: t.min_values, maxValues: t.max_values, defaultValues: t.default_values, indices: O, applicationId: n, selectedOptions: (0, r.getSnowflakeSelectDefaultValues)(t.default_values, l)
                                    };
                                case u.ComponentType.CHANNEL_SELECT:
                                    return {
                                        type: u.ComponentType.CHANNEL_SELECT, customId: t.custom_id, disabled: t.disabled, placeholder: null !== (L = t.placeholder) && void 0 !== L ? L : c.default.Messages.MESSAGE_SELECT_COMPONENT_DEFAULT_PLACEHOLDER, minValues: t.min_values, maxValues: t.max_values, indices: O, channelTypes: t.channel_types, defaultValues: t.default_values, applicationId: n, selectedOptions: (0, r.getSnowflakeSelectDefaultValues)(t.default_values, l, null !== (y = t.channel_types) && void 0 !== y ? y : [])
                                    };
                                default:
                                    return null
                            }
                        }).filter(e => null != e)
                    }
                }
            });
            var l = n("917351"),
                a = n.n(l),
                u = n("798609"),
                i = n("3765"),
                o = n("315102"),
                s = n("192112"),
                r = n("704257"),
                d = n("988878"),
                c = n("782340");
            let E = ["934240649153220678", "936929561302675456", "762275850782900254", "1022952195194359889"],
                p = /MJ::Inpaint::\d(::[0-9a-f]{8}\b-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-\b[0-9a-f]{12})?(::SOLO)?/,
                m = (e, t) => ({
                    id: e.id,
                    name: e.name,
                    animated: e.animated,
                    src: t && null != e.id ? o.default.getEmojiURL({
                        id: e.id,
                        animated: e.animated || !1,
                        size: 48
                    }) : void 0
                }),
                T = e => (null == e ? void 0 : e.errorCode) === 429 ? c.default.Messages.INTERACTION_RATE_LIMITED : c.default.Messages.APPLICATION_COMMAND_FAILED,
                f = (e, t, n) => {
                    let l = (null == e ? void 0 : e.data.interactionType) === u.InteractionTypes.MESSAGE_COMPONENT && (null == e ? void 0 : e.state) === i.InteractionState.FAILED ? e.data.indices : null;
                    if (null != l && a.isEqual(l.slice(0, l.length - 1), n.indices)) {
                        var o;
                        return null !== (o = null == t ? void 0 : t.interactionError) && void 0 !== o ? o : T(e)
                    }
                },
                S = e => {
                    switch (e) {
                        case u.ComponentType.ACTION_ROW:
                        case u.ComponentType.BUTTON:
                        case u.ComponentType.STRING_SELECT:
                        case u.ComponentType.INPUT_TEXT:
                        case u.ComponentType.USER_SELECT:
                        case u.ComponentType.ROLE_SELECT:
                        case u.ComponentType.MENTIONABLE_SELECT:
                        case u.ComponentType.CHANNEL_SELECT:
                            return !0
                    }
                }
        },
        704257: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MIN_REREQUEST_TIME: function() {
                    return E
                },
                queryMentionables: function() {
                    return p
                },
                queryChannels: function() {
                    return m
                },
                getSnowflakeSelectDefaultValues: function() {
                    return T
                }
            }), n("222007");
            var l = n("374158"),
                a = n("798609"),
                u = n("42203"),
                i = n("26989"),
                o = n("305961"),
                s = n("697218"),
                r = n("25292"),
                d = n("387111"),
                c = n("192112");
            let E = 1e3;

            function p(e, t, n) {
                let l = u.default.getChannel(n);
                if (null == l) return [];
                let i = e === a.ComponentType.USER_SELECT || e === a.ComponentType.MENTIONABLE_SELECT,
                    o = e === a.ComponentType.ROLE_SELECT || e === a.ComponentType.MENTIONABLE_SELECT,
                    {
                        users: s,
                        roles: E
                    } = r.default.queryMentionResults({
                        query: t,
                        channel: l,
                        canMentionEveryone: !1,
                        canMentionHere: !1,
                        canMentionUsers: i,
                        canMentionRoles: o,
                        includeAllGuildUsers: !0,
                        includeNonMentionableRoles: !0,
                        checkRecentlyTalkedOnEmptyQuery: !1,
                        limit: 15
                    }),
                    p = s.map(e => {
                        var t;
                        let a = d.default.getNickname(l.getGuildId(), n, e.user);
                        return {
                            type: c.SelectOptionType.USER,
                            value: e.user.id,
                            label: null !== (t = null != a ? a : e.user.globalName) && void 0 !== t ? t : e.user.username
                        }
                    }),
                    m = E.map(e => ({
                        type: c.SelectOptionType.ROLE,
                        value: e.id,
                        label: e.name
                    }));
                return [...p, ...m]
            }

            function m(e, t, n) {
                let l = u.default.getChannel(t);
                if (null == l) return [];
                let a = r.default.queryApplicationCommandChannelResults({
                        query: e,
                        channel: l,
                        channelTypes: n,
                        limit: 15
                    }),
                    i = a.channels.map(e => ({
                        type: c.SelectOptionType.CHANNEL,
                        value: e.id,
                        label: e.name
                    }));
                return i
            }

            function T(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                if (null == e) return;
                let a = o.default.getGuild(t);
                return e.map(e => {
                    switch (e.type) {
                        case l.SnowflakeSelectDefaultValueTypes.USER:
                            var t;
                            let o = s.default.getUser(e.id);
                            if (null == o) return null;
                            let r = null != a ? i.default.getNick(a.id, o.id) : void 0;
                            return {
                                type: c.SelectOptionType.USER, value: o.id, label: null !== (t = null != r ? r : o.globalName) && void 0 !== t ? t : o.username
                            };
                        case l.SnowflakeSelectDefaultValueTypes.ROLE:
                            if (null == a) return null;
                            let d = a.getRole(e.id);
                            if (null == d) return null;
                            return {
                                type: c.SelectOptionType.ROLE, value: d.id, label: d.name
                            };
                        case l.SnowflakeSelectDefaultValueTypes.CHANNEL:
                            if (null == a) return null;
                            let E = u.default.getChannel(e.id);
                            if (null == E || E.guild_id !== a.id || n.length > 0 && !n.includes(E.type)) return null;
                            return {
                                type: c.SelectOptionType.CHANNEL, value: E.id, label: E.name
                            }
                    }
                }).filter(e => null !== e)
            }
        },
        602428: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getFailedContent: function() {
                    return _
                },
                InteractionStatusMessage: function() {
                    return N
                },
                default: function() {
                    return L
                }
            });
            var l = n("37983"),
                a = n("884691"),
                u = n("414456"),
                i = n.n(u),
                o = n("775560"),
                s = n("446674"),
                r = n("77078"),
                d = n("812684"),
                c = n("809810"),
                E = n("752598"),
                p = n("423487"),
                m = n("258078"),
                T = n("49111"),
                f = n("782340"),
                S = n("932640");

            function C(e) {
                return {
                    text: e,
                    icon: (0, l.jsx)(r.Dots, {
                        className: S.icon,
                        dotRadius: 3.5,
                        themed: !0
                    })
                }
            }

            function _(e) {
                return {
                    text: null != e ? e : f.default.Messages.APPLICATION_COMMAND_FAILED,
                    color: m.default.Colors.ERROR,
                    icon: (0, l.jsx)(p.default, {
                        width: 16,
                        height: 16,
                        className: i(S.icon, S.errorIcon)
                    })
                }
            }

            function N(e) {
                let {
                    className: t,
                    icon: n,
                    text: a,
                    color: u
                } = e;
                return (0, l.jsxs)("div", {
                    className: i(S.wrapper, t),
                    children: [n, (0, l.jsx)(m.default, {
                        size: m.default.Sizes.SIZE_14,
                        color: u,
                        children: a
                    })]
                })
            }
            var L = a.memo(function(e) {
                let {
                    message: t,
                    className: n,
                    component: u
                } = e, i = (0, o.useForceUpdate)(), r = (0, s.useStateFromStores)([c.default], () => c.default.getInteraction(t), [t]);
                a.useEffect(() => {
                    let e = null;
                    if (t.hasFlag(T.MessageFlags.LOADING) && null != r) {
                        let n = (0, E.getInteractionTimeoutTimestamp)(t.id) - Date.now();
                        n > 0 && (e = setTimeout(() => i(), 1e3 + n))
                    }
                    return () => {
                        clearTimeout(e)
                    }
                }, [i, r, t]);
                let p = null;
                if (null == u) p = function(e, t) {
                    let n = (0, E.getInteractionStatusViewState)(t, e);
                    switch (n) {
                        case E.InteractionStatusViewState.SENDING:
                            return C(f.default.Messages.APPLICATION_COMMAND_SENDING);
                        case E.InteractionStatusViewState.CREATED:
                            return C(f.default.Messages.APPLICATION_COMMAND_WAITING.format({
                                applicationName: t.author.username
                            }));
                        case E.InteractionStatusViewState.TIMED_OUT:
                            return _(f.default.Messages.APPLICATION_COMMAND_TIMED_OUT);
                        case E.InteractionStatusViewState.FAILED:
                            return _(t.interactionError)
                    }
                }(r, t);
                else {
                    let e = (0, d.getActionRowErrorText)(r, t, u);
                    null != e && (p = _(e))
                }
                if (null == p) return null;
                let {
                    text: m,
                    icon: S,
                    color: L
                } = p;
                return (0, l.jsx)(N, {
                    icon: S,
                    text: m,
                    className: n,
                    color: L
                })
            })
        },
        374158: function(e, t, n) {
            "use strict";
            var l, a;
            n.r(t), n.d(t, {
                SnowflakeSelectDefaultValueTypes: function() {
                    return l
                }
            }), (a = l || (l = {})).USER = "user", a.ROLE = "role", a.CHANNEL = "channel"
        }
    }
]);