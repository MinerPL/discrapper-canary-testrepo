(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["34330"], {
        69448: function(e, t, n) {
            "use strict";
            e.exports = n.p + "f6da6e7ed1d57e445d0e.svg"
        },
        991630: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            }), n("222007");
            var a = n("37983"),
                s = n("884691"),
                i = n("414456"),
                r = n.n(i),
                l = n("587974"),
                u = n("315102"),
                d = n("524768"),
                c = n("616674"),
                o = n("363577");

            function m(e) {
                let {
                    section: t,
                    isSelected: n,
                    width: i,
                    height: m,
                    className: f,
                    selectable: _ = !1,
                    onFocus: g,
                    onBlur: p,
                    onMouseOver: E,
                    onMouseLeave: S,
                    ...h
                } = e, [I, v] = s.useState(!1), M = s.useCallback(() => {
                    v(!0), null == g || g()
                }, [g]), A = s.useCallback(() => {
                    v(!1), null == p || p()
                }, [p]), R = s.useCallback(() => {
                    v(!0), null == E || E()
                }, [E]), y = s.useCallback(() => {
                    v(!1), null == S || S()
                }, [S]), N = s.useMemo(() => {
                    if (t.type === d.ApplicationCommandSectionType.APPLICATION) {
                        var e;
                        return u.default.getApplicationIconURL({
                            id: t.id,
                            icon: t.icon,
                            bot: null === (e = t.application) || void 0 === e ? void 0 : e.bot,
                            botIconFirst: !0,
                            size: i
                        })
                    }
                    return o
                }, [t, i]);
                return (0, a.jsx)("div", {
                    ...h,
                    className: r(c.wrapper, f, {
                        [c.selectable]: _,
                        [c.selected]: _ && n
                    }),
                    onFocus: M,
                    onBlur: A,
                    onMouseOver: R,
                    onMouseLeave: y,
                    children: (0, a.jsx)(l.default, {
                        className: c.mask,
                        mask: _ && (n || I) ? l.MaskIDs.SQUIRCLE : l.MaskIDs.AVATAR_DEFAULT,
                        width: i,
                        height: m,
                        children: (0, a.jsx)("img", {
                            alt: "",
                            className: c.icon,
                            style: {
                                width: i,
                                height: m
                            },
                            src: N
                        })
                    })
                })
            }
        },
        943161: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("414456"),
                i = n.n(s),
                r = n("83910"),
                l = n("93393"),
                u = n("317041"),
                d = n("749296");
            let c = e => {
                switch (e.id) {
                    case u.BuiltInSectionId.BUILT_IN:
                        return r.default;
                    case u.BuiltInSectionId.FRECENCY:
                        return l.default;
                    default:
                        return
                }
            };

            function o(e) {
                let {
                    section: t,
                    className: n,
                    width: s,
                    height: r,
                    padding: l,
                    isSelected: u,
                    selectable: o = !1,
                    ...m
                } = e, f = c(t);
                return (0, a.jsx)("div", {
                    className: i(d.wrapper, n, {
                        [d.selectable]: o,
                        [d.selected]: o && u
                    }),
                    style: {
                        width: s,
                        height: r,
                        padding: null != l ? l : 0
                    },
                    children: null != f ? (0, a.jsx)(f, {
                        className: d.icon,
                        width: s,
                        height: r,
                        ...m
                    }) : null
                })
            }
        },
        355263: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getIconComponent: function() {
                    return l
                },
                pxToRem: function() {
                    return u
                },
                getCommandQuery: function() {
                    return d
                }
            });
            var a = n("524768"),
                s = n("991630"),
                i = n("943161"),
                r = n("317041");
            let l = e => e.type === a.ApplicationCommandSectionType.BUILT_IN ? i.default : s.default;

            function u(e) {
                return "".concat(e / 16, "rem")
            }

            function d(e, t) {
                let n = t,
                    a = !1,
                    s = t.indexOf(":");
                if (s >= 0) {
                    let e = t.lastIndexOf(" ", s);
                    e >= 0 ? (t = t.substring(0, e), a = !0) : t = t.substring(0, s)
                } else t = t.substring(0, t.length);
                let i = t.split(" ", r.MAX_SUBCOMMAND_LEVEL + 1);
                return i.length > r.MAX_SUBCOMMAND_LEVEL && (a = !0, i.pop()), t = i.join(" "), (n.length > t.length || t.endsWith(" ")) && (a = !0, t = t.trimEnd()), {
                    text: t,
                    parts: i,
                    hasSpaceTerminator: a
                }
            }
        },
        633043: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("77078"),
                i = n("850572"),
                r = () => (0, a.jsx)("div", {
                    className: i.loadingWrapper,
                    children: (0, a.jsx)(s.Dots, {
                        dotRadius: 4,
                        themed: !0
                    })
                })
        },
        823026: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            }), n("424973");
            var a = n("37983"),
                s = n("884691"),
                i = n("446674"),
                r = n("77078"),
                l = n("713841"),
                u = n("79112"),
                d = n("988721"),
                c = n("592407"),
                o = n("305961"),
                m = n("957255"),
                f = n("49111"),
                _ = n("782340");

            function g(e) {
                let {
                    user: t,
                    guildId: n,
                    channel: g,
                    context: p
                } = e, E = o.default.getGuild(n), S = (0, i.useStateFromStores)([m.default], () => null != E ? m.default.can(f.Permissions.MANAGE_GUILD, E) : null), h = (0, d.useContextIndexState)(g, !0, !0), I = (0, d.useUserIndexState)(!0, !0), {
                    isUserApp: v,
                    isGuildApp: M
                } = s.useMemo(() => {
                    var e, n, a, s;
                    if ((null == t ? void 0 : t.id) == null) return {
                        isGuildApp: !1,
                        isUserApp: !1
                    };
                    let i = Object.values(null !== (a = null === (e = h.result) || void 0 === e ? void 0 : e.sections) && void 0 !== a ? a : {}),
                        r = Object.values(null !== (s = null === (n = I.result) || void 0 === n ? void 0 : n.sections) && void 0 !== s ? s : {});
                    return {
                        isGuildApp: i.some(e => {
                            var n;
                            return (null === (n = e.descriptor.application) || void 0 === n ? void 0 : n.id) === (null == t ? void 0 : t.id)
                        }),
                        isUserApp: r.some(e => {
                            var n;
                            return (null === (n = e.descriptor.application) || void 0 === n ? void 0 : n.id) === (null == t ? void 0 : t.id)
                        })
                    }
                }, [h, I, null == t ? void 0 : t.id]), A = s.useCallback(() => {
                    (null == E ? void 0 : E.id) != null && (c.default.open(E.id, f.GuildSettingsSections.INTEGRATIONS), l.default.setSection(f.IntegrationSettingsSections.APPLICATION, null == t ? void 0 : t.id))
                }, [null == t ? void 0 : t.id, null == E ? void 0 : E.id]), R = s.useCallback(() => {
                    u.default.open(f.UserSettingsSections.AUTHORIZED_APPS)
                }, []), y = p === f.AppContext.POPOUT;
                if (!(null == t ? void 0 : t.bot) || !S || y || !M && !v) return null;
                let N = [];
                return M && N.push((0, a.jsx)(r.MenuItem, {
                    id: "manage-integration",
                    label: _.default.Messages.MANAGE_INTEGRATION,
                    action: A
                }, "manage-integration")), v && N.push((0, a.jsx)(r.MenuItem, {
                    id: "manage-authorized-app",
                    label: _.default.Messages.MANAGE_AUTHORIZED_APP,
                    action: R
                }, "manage-authorized-app")), N
            }
        },
        931318: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                addMessageReminders: function() {
                    return _
                },
                updateReminderDueAt: function() {
                    return g
                },
                toggleMessageReminders: function() {
                    return p
                },
                completeMessageReminders: function() {
                    return E
                },
                cleanupMessageReminders: function() {
                    return S
                },
                fetchAndUpdateSavedMessages: function() {
                    return v
                }
            });
            var a = n("872717"),
                s = n("913144"),
                i = n("679653"),
                r = n("42203"),
                l = n("305961"),
                u = n("27618"),
                d = n("697218"),
                c = n("599110"),
                o = n("520899"),
                m = n("988864"),
                f = n("49111");

            function _(e, t) {
                c.default.track(f.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
                    skipped: !1,
                    reason: "adding",
                    rating: "".concat(o.default.getMessageReminders().length)
                }), I([{
                    messageId: e.id,
                    channelId: e.channel_id,
                    savedAt: new Date,
                    dueAt: t,
                    ... function(e) {
                        let t = r.default.getChannel(e.channel_id);
                        if (null == t) return null;
                        let n = l.default.getGuild(t.guild_id),
                            a = "",
                            s = (0, i.computeChannelName)(t, d.default, u.default, !0);
                        if (t.isPrivate()) a = s;
                        else if (t.isThread()) {
                            let e = r.default.getChannel(t.parent_id);
                            if (null == e) return null;
                            let n = (0, i.computeChannelName)(e, d.default, u.default, !0);
                            a = "".concat(n, " > ").concat(s)
                        } else a = s;
                        let c = "".concat(e.content.length > 0 ? e.content : "".concat(e.attachments.length, " attachments"));
                        return {
                            authorSummary: e.author.username,
                            authorId: e.author.id,
                            channelSummary: a,
                            messageSummary: c.length > 200 ? "".concat(c.slice(0, 197), "...") : c,
                            guildId: null == n ? void 0 : n.id
                        }
                    }(e)
                }], [])
            }

            function g(e, t) {
                c.default.track(f.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
                    skipped: !1,
                    reason: "updating_due_at",
                    rating: "".concat(o.default.getMessageReminders().length)
                });
                let n = o.default.getMessageReminders(),
                    a = n.find(t => t.messageId === e);
                null != a && I([{
                    ...a,
                    savedAt: new Date,
                    dueAt: t
                }], [a])
            }

            function p(e, t) {
                c.default.track(f.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
                    skipped: t,
                    reason: "updating within the list",
                    rating: "".concat(o.default.getMessageReminders().length)
                }), s.default.dispatch({
                    type: "MESSAGE_REMINDER_TOGGLE",
                    messageId: e,
                    complete: t
                })
            }

            function E(e) {
                c.default.track(f.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
                    skipped: !1,
                    reason: "complete and clear immediately",
                    rating: "".concat(o.default.getMessageReminders().length)
                });
                let t = o.default.getMessageReminders();
                I([], t.filter(t => t.messageId === e))
            }

            function S() {
                c.default.track(f.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
                    skipped: !1,
                    reason: "clearing",
                    rating: "".concat(o.default.getMessageReminders().length)
                });
                let e = o.default.getMessageReminders();
                e.some(e => e.complete) && I([], e.filter(e => e.complete))
            }

            function h(e) {
                c.default.track(f.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
                    skipped: !1,
                    reason: "updated_from_server",
                    rating: "".concat(o.default.getMessageReminders().length)
                }), s.default.dispatch({
                    type: "SAVED_MESSAGES_UPDATE",
                    messages: e
                })
            }

            function I(e, t) {
                (0 !== e.length || 0 !== t.length) && a.default.post({
                    url: f.Endpoints.SAVED_MESSAGES,
                    body: {
                        added: e.map(m.savedMessageToServer),
                        removed: t.map(m.savedMessageToServer)
                    }
                }).then(e => {
                    h(e.body.saved_messages.map(m.savedMessageToClient))
                })
            }

            function v() {
                return o.default.recentlyFetched() ? Promise.resolve() : a.default.get({
                    url: f.Endpoints.SAVED_MESSAGES
                }).then(e => {
                    let t = e.body.saved_messages,
                        n = t.map(m.savedMessageToClient);
                    h(n)
                })
            }
        },
        979268: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var a = n("862205");
            let s = (0, a.createExperiment)({
                kind: "user",
                id: "2022-08_message_todos_staff_only",
                label: "Message TODO list",
                defaultConfig: {
                    showReminders: !1
                },
                treatments: [{
                    id: 1,
                    label: "Show message TODOs CTA",
                    config: {
                        showReminders: !0
                    }
                }]
            });
            var i = s
        },
        520899: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            }), n("222007");
            var a = n("446674"),
                s = n("913144"),
                i = n("718517");
            let r = [],
                l = new Set,
                u = 0;
            class d extends a.default.Store {
                initialize() {
                    setInterval(() => {
                        this.emitChange()
                    }, 1 * i.default.Millis.MINUTE)
                }
                getMessageReminders() {
                    return r
                }
                isMessageReminder(e) {
                    let t = r.find(t => t.messageId === e);
                    return null != t && !t.complete
                }
                getOverdueMessageReminderCount() {
                    return r.filter(e => null == e.dueAt || new Date > e.dueAt).length
                }
                recentlyFetched() {
                    return new Date().getTime() - u < 1 * i.default.Millis.MINUTE
                }
                hasSentNotification(e) {
                    return l.has(e)
                }
                getState() {
                    return {
                        messages: r
                    }
                }
            }
            d.displayName = "MessageRemindersStore";
            var c = new d(s.default, {
                SAVED_MESSAGES_UPDATE: function(e) {
                    let {
                        messages: t
                    } = e;
                    u = new Date().getTime(), r = t.map(e => ({
                        ...e,
                        complete: !1
                    })), t.forEach(e => {
                        null != e.dueAt && e.dueAt > new Date && l.delete(e.messageId), null != e.dueAt && e.dueAt < new Date && l.add(e.messageId)
                    })
                },
                MESSAGE_REMINDER_TOGGLE: function(e) {
                    let {
                        messageId: t,
                        complete: n
                    } = e, a = r.findIndex(e => e.messageId === t);
                    if (-1 === a) return !1;
                    r[a] = {
                        ...r[a],
                        complete: n
                    }
                },
                MESSAGE_REMINDER_NOTIFIED: function(e) {
                    let {
                        messageId: t
                    } = e;
                    l.add(t)
                }
            })
        },
        988864: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                savedMessageToServer: function() {
                    return i
                },
                savedMessageToClient: function() {
                    return r
                },
                savedMessageHasMetadata: function() {
                    return l
                },
                MESSAGE_REMINDER_DURATION_ITEMS: function() {
                    return u
                }
            });
            var a = n("718517"),
                s = n("782340");

            function i(e) {
                var t;
                return {
                    channel_id: e.channelId,
                    message_id: e.messageId,
                    saved_at: e.savedAt.toISOString(),
                    author_summary: e.authorSummary,
                    channel_summary: e.channelSummary,
                    message_summary: e.messageSummary,
                    guild_id: e.guildId,
                    author_id: e.authorId,
                    notes: e.notes,
                    due_at: null === (t = e.dueAt) || void 0 === t ? void 0 : t.toISOString()
                }
            }

            function r(e) {
                return {
                    channelId: e.channel_id,
                    messageId: e.message_id,
                    savedAt: new Date(e.saved_at),
                    authorSummary: e.author_summary,
                    channelSummary: e.channel_summary,
                    messageSummary: e.message_summary,
                    guildId: 0 === e.guild_id ? void 0 : e.guild_id,
                    authorId: 0 === e.author_id ? void 0 : e.author_id,
                    notes: e.notes,
                    dueAt: null != e.due_at ? new Date(e.due_at) : void 0
                }
            }

            function l(e) {
                return null != e.authorSummary && e.authorSummary.length > 0 && null != e.channelSummary && e.channelSummary.length > 0 && null != e.messageSummary && e.messageSummary.length > 0 && null != e.authorId && e.authorId.length > 0
            }
            let u = [{
                duration: a.default.Millis.HOUR,
                getLabel: () => s.default.Messages.MESSAGE_REMINDERS_IN_ONE_HOUR
            }, {
                duration: 2 * a.default.Millis.HOUR,
                getLabel: () => s.default.Messages.MESSAGE_REMINDERS_IN_TWO_HOURS
            }, {
                duration: 4 * a.default.Millis.HOUR,
                getLabel: () => s.default.Messages.MESSAGE_REMINDERS_IN_FOUR_HOURS
            }, {
                duration: a.default.Millis.DAY,
                getLabel: () => s.default.Messages.MESSAGE_REMINDERS_IN_ONE_DAY
            }, {
                duration: a.default.Millis.WEEK,
                getLabel: () => s.default.Messages.MESSAGE_REMINDERS_IN_ONE_WEEK
            }]
        },
        178207: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                trackStickerPickerOpen: function() {
                    return d
                },
                trackStickerFavorited: function() {
                    return c
                },
                trackStickerSearchStart: function() {
                    return o
                },
                trackStickerSearchResultsViewed: function() {
                    return m
                },
                trackStickerSearchSelect: function() {
                    return f
                },
                trackStickerSelect: function() {
                    return _
                },
                trackStickerSearchEmpty: function() {
                    return g
                }
            });
            var a = n("716241"),
                s = n("599110"),
                i = n("161585"),
                r = n("49111"),
                l = n("13030"),
                u = n("646718");
            let d = e => {
                    let {
                        containerWidth: t,
                        favoriteStickers: n,
                        frequentlyUsedStickers: s,
                        guildStickers: u,
                        stickersTotal: d
                    } = e;
                    a.default.trackWithMetadata(r.AnalyticEvents.EXPRESSION_PICKER_OPENED, {
                        width: t,
                        tab: l.ExpressionPickerViewType.STICKER,
                        badged: !1,
                        num_expressions_favorites: n.length,
                        num_animated_expressions_favorites: n.filter(e => (0, i.isAnimatedSticker)(e.format_type)).length,
                        num_custom_expressions_favorites: n.filter(e => (0, i.isCustomSticker)(e.type)).length,
                        num_standard_expressions_favorites: n.filter(e => !(0, i.isCustomSticker)(e.type)).length,
                        num_expressions_frecent: s.length,
                        num_custom_expressions_frecent: s.filter(e => (0, i.isCustomSticker)(e.type)).length,
                        num_animated_expressions_frecent: s.filter(e => (0, i.isAnimatedSticker)(e.format_type)).length,
                        num_standard_expressions_frecent: s.filter(e => !(0, i.isCustomSticker)(e.type)).length,
                        num_current_guild_expressions: u.length,
                        num_custom_expressions_total: d
                    })
                },
                c = e => {
                    let t, {
                        sticker: n,
                        location: s
                    } = e;
                    n.type === i.MetaStickerType.GUILD && (t = n.guild_id), a.default.trackWithMetadata(r.AnalyticEvents.EXPRESSION_FAVORITED, {
                        location: s,
                        expression_type: l.ExpressionPickerViewType.STICKER,
                        expression_id: n.id,
                        expression_name: n.name,
                        expression_guild_id: t,
                        is_animated: (0, i.isAnimatedSticker)(n.format_type),
                        is_custom: (0, i.isCustomSticker)(n.type)
                    })
                },
                o = () => {
                    s.default.track(r.AnalyticEvents.SEARCH_STARTED, {
                        search_type: r.SearchTypes.STICKER
                    })
                },
                m = (e, t, n) => {
                    a.default.trackWithMetadata(r.AnalyticEvents.SEARCH_RESULT_VIEWED, {
                        search_type: r.SearchTypes.STICKER,
                        total_results: t,
                        query: e,
                        is_suggestion: n
                    })
                },
                f = (e, t, n) => {
                    let s;
                    let {
                        sticker: l
                    } = e;
                    l.type === i.MetaStickerType.GUILD && (s = l.guild_id), a.default.trackWithMetadata(r.AnalyticEvents.SEARCH_RESULT_SELECTED, {
                        load_id: l.id,
                        search_type: r.SearchTypes.STICKER,
                        source_object: "Sticker Picker",
                        total_results: n,
                        expression_guild_id: s,
                        sticker_id: l.id,
                        query: t
                    })
                },
                _ = e => {
                    let t;
                    let {
                        sticker: n,
                        category: s
                    } = e;
                    n.type === i.MetaStickerType.GUILD && (t = n.guild_id), a.default.trackWithMetadata(r.AnalyticEvents.EXPRESSION_PICKER_EXPRESSION_SELECTED, {
                        type: u.PremiumUpsellTypes.EMOJI_PICKER_STICKER_CLICKED,
                        expression_id: n.id,
                        expression_name: n.name,
                        expression_picker_section: s,
                        expression_guild_id: t,
                        is_animated: (0, i.isAnimatedSticker)(n.format_type),
                        is_custom: (0, i.isCustomSticker)(n.type)
                    })
                },
                g = e => {
                    null != e && "" !== e && a.default.trackWithMetadata(r.AnalyticEvents.SEARCH_RESULT_EMPTY, {
                        query: e,
                        search_type: r.SearchTypes.STICKER,
                        source_object: "Sticker Picker"
                    })
                }
        },
        563816: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var a = n("37983"),
                s = n("884691"),
                i = n("627445"),
                r = n.n(i),
                l = n("446674"),
                u = n("77078"),
                d = n("240249"),
                c = n("916565"),
                o = n("355263"),
                m = n("633043"),
                f = n("823026"),
                _ = n("305961"),
                g = n("697218"),
                p = n("317041"),
                E = n("782340"),
                S = n("205735"),
                h = e => {
                    let t, {
                            commandType: n,
                            commandTargetId: i,
                            channel: h,
                            guildId: I,
                            onHeightUpdate: v,
                            context: M
                        } = e,
                        A = (0, l.useStateFromStores)([_.default], () => _.default.getGuild(null != I ? I : h.guild_id)),
                        R = (0, l.useStateFromStores)([g.default], () => g.default.getUser(i)),
                        y = (0, f.default)({
                            user: R,
                            guildId: null == A ? void 0 : A.id,
                            channel: h,
                            context: M
                        }),
                        {
                            commands: N,
                            sectionDescriptors: T,
                            loading: C
                        } = d.useDiscovery(h, {
                            commandType: n
                        }, {
                            limit: p.CONTEXT_MENU_COMMANDS_QUERY_LIMIT
                        }),
                        {
                            sections: k
                        } = s.useMemo(() => {
                            let e = {};
                            return T.forEach(t => {
                                e[t.id] = t
                            }), {
                                sections: e
                            }
                        }, [T]),
                        x = s.useRef(C.current);
                    s.useEffect(() => {
                        C.current !== x.current && (x.current = C.current, null == v || v())
                    }, [C, v]);
                    let O = s.useCallback(e => {
                        r(null != h, "menu item should not show if channel is null");
                        let t = k[e.applicationId],
                            n = null != t ? (0, o.getIconComponent)(t) : void 0;
                        return (0, a.jsx)(u.MenuItem, {
                            id: e.id,
                            label: e.displayName,
                            showIconFirst: !0,
                            icon: () => null != n ? (0, a.jsx)(n, {
                                channel: h,
                                section: t,
                                width: 18,
                                height: 18,
                                selectable: !1
                            }) : null,
                            action: () => {
                                (0, c.default)({
                                    command: e,
                                    optionValues: {},
                                    context: {
                                        channel: h,
                                        guild: A
                                    },
                                    commandTargetId: i
                                })
                            }
                        }, e.id)
                    }, [h, A, i, k]);
                    return C.current ? t = (0, a.jsx)(u.MenuItem, {
                        id: "menu-commands-placeholder",
                        render: () => (0, a.jsx)(m.default, {}),
                        disabled: !0
                    }, "menu-commands-placeholder") : (t = 0 === N.length ? (0, a.jsx)(u.MenuItem, {
                        id: "menu-commands-empty",
                        label: E.default.Messages.APPLICATION_COMMAND_NO_COMMANDS,
                        disabled: !0
                    }, "menu-commands-empty") : N.map(O), null != y && (t = (0, a.jsxs)(a.Fragment, {
                        children: [t, (0, a.jsx)(u.MenuSeparator, {}, "separator"), y]
                    }))), (0, a.jsx)(u.MenuItem, {
                        id: "apps",
                        label: E.default.Messages.APPS,
                        listClassName: S.list,
                        children: t
                    })
                }
        },
        555158: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                HelpMessageTypes: function() {
                    return s
                },
                default: function() {
                    return _
                }
            });
            var a, s, i = n("37983");
            n("884691");
            var r = n("414456"),
                l = n.n(r),
                u = n("77078"),
                d = n("36694"),
                c = n("381546"),
                o = n("68238"),
                m = n("423487"),
                f = n("557296");
            (a = s || (s = {}))[a.WARNING = 0] = "WARNING", a[a.INFO = 1] = "INFO", a[a.ERROR = 2] = "ERROR", a[a.POSITIVE = 3] = "POSITIVE";
            var _ = function(e) {
                let {
                    children: t,
                    messageType: n,
                    className: a,
                    textColor: s = "text-normal",
                    textVariant: r = "text-sm/medium"
                } = e, _ = function(e) {
                    switch (e) {
                        case 0:
                            return m.default;
                        case 1:
                            return o.default;
                        case 2:
                            return c.default;
                        case 3:
                            return d.default
                    }
                }(n), g = function(e) {
                    switch (e) {
                        case 0:
                            return f.warning;
                        case 1:
                            return f.info;
                        case 2:
                            return f.error;
                        case 3:
                            return f.positive
                    }
                }(n);
                return (0, i.jsxs)("div", {
                    className: l(f.container, g, a),
                    children: [(0, i.jsx)("div", {
                        className: f.iconDiv,
                        children: (0, i.jsx)(_, {
                            className: f.icon
                        })
                    }), (0, i.jsx)(u.Text, {
                        className: f.text,
                        color: s,
                        variant: r,
                        children: t
                    })]
                })
            }
        },
        822332: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var a = n("37983"),
                s = n("884691"),
                i = n("414456"),
                r = n.n(i),
                l = n("77078"),
                u = n("782340"),
                d = n("440318");
            let c = {
                BLOCK: d.block,
                INLINE: d.inline
            };
            class o extends s.PureComponent {
                render() {
                    let {
                        children: e,
                        className: t,
                        textClassName: n,
                        type: s = c.BLOCK,
                        style: i
                    } = this.props;
                    return (0, a.jsxs)("div", {
                        className: r(t, s),
                        style: i,
                        children: [(0, a.jsxs)(l.Text, {
                            variant: "text-sm/bold",
                            tag: "div",
                            color: "text-positive",
                            className: d.pro,
                            children: [u.default.Messages.FORM_LABEL_ROLES_PRO_TIP, ":"]
                        }), (0, a.jsx)(l.Text, {
                            className: r(d.tip, n),
                            variant: "text-sm/normal",
                            children: e
                        })]
                    })
                }
            }
            o.Types = c;
            var m = o
        },
        566998: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("469563"),
                i = n("281862"),
                r = n("75196"),
                l = (0, s.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: s = "currentColor",
                        foreground: i,
                        ...l
                    } = e;
                    return (0, a.jsx)("svg", {
                        ...(0, r.default)(l),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, a.jsx)("path", {
                            className: i,
                            fill: s,
                            d: "M22 12L12.101 2.10101L10.686 3.51401L12.101 4.92901L7.15096 9.87801V9.88001L5.73596 8.46501L4.32196 9.88001L8.56496 14.122L2.90796 19.778L4.32196 21.192L9.97896 15.536L14.222 19.778L15.636 18.364L14.222 16.95L19.171 12H19.172L20.586 13.414L22 12Z"
                        })
                    })
                }, i.PinIcon, void 0, {
                    size: 24
                })
        }
    }
]);