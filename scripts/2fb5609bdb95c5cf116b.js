(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["97036"], {
        69448: function(e, t, n) {
            "use strict";
            e.exports = n.p + "f6da6e7ed1d57e445d0e.svg"
        },
        588715: function(e, t, n) {},
        690445: function(e, t, n) {},
        35647: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                IdIcon: function() {
                    return d
                }
            });
            var l = n("37983");
            n("884691");
            var u = n("669491"),
                a = n("75196");
            let d = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: d = u.default.colors.INTERACTIVE_NORMAL,
                    colorClass: i = "",
                    ...s
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, a.default)(s),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, l.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        d: "M15.3 14.48c-.46.45-1.08.67-1.86.67h-1.39V9.2h1.39c.78 0 1.4.22 1.86.67.46.45.68 1.22.68 2.31 0 1.1-.22 1.86-.68 2.31Z",
                        className: i
                    }), (0, l.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm1 15h2.04V7.34H6V17Zm4-9.66V17h3.44c1.46 0 2.6-.42 3.38-1.25.8-.83 1.2-2.02 1.2-3.58s-.4-2.75-1.2-3.58c-.79-.83-1.92-1.25-3.38-1.25H10Z",
                        clipRule: "evenodd",
                        className: i
                    })]
                })
            }
        },
        926001: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SlashBoxIcon: function() {
                    return d
                }
            });
            var l = n("37983");
            n("884691");
            var u = n("669491"),
                a = n("75196");
            let d = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: d = u.default.colors.INTERACTIVE_NORMAL,
                    colorClass: i = "",
                    ...s
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, a.default)(s),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm12.79 3.37a.25.25 0 0 0-.22-.37h-3.13a.75.75 0 0 0-.66.38L6.21 18.63c-.1.16.03.37.22.37h3.13c.27 0 .52-.14.66-.38l7.57-13.25Z",
                        clipRule: "evenodd",
                        className: i
                    })
                })
            }
        },
        861370: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var u = n("77078"),
                a = n("845579"),
                d = n("662255"),
                i = n("306160");

            function s(e) {
                let {
                    id: t,
                    label: n,
                    onSuccess: s,
                    shiftId: r,
                    showIconFirst: o
                } = e, c = a.DeveloperMode.useSetting();
                if (__OVERLAY__ || !c || !i.SUPPORTS_COPY) return null;
                let E = "devmode-copy-id-".concat(t);
                return (0, l.jsx)(u.MenuItem, {
                    id: E,
                    label: n,
                    action: function(e) {
                        let n = null != r && e.shiftKey ? r : t;
                        (0, i.copy)(n), null == s || s()
                    },
                    icon: d.default,
                    showIconFirst: o
                }, E)
            }
        },
        962199: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            }), n("222007");
            var l = n("917351"),
                u = n.n(l),
                a = n("446674"),
                d = n("913144"),
                i = n("398604"),
                s = n("813006"),
                r = n("730647");
            let o = !1,
                c = {},
                E = {},
                f = {},
                _ = e => (f[e.guild_scheduled_event.id] = new s.default(e.guild_scheduled_event.guild), E[e.guild_scheduled_event.id] = e.guild_scheduled_event, {
                    channelId: e.directory_channel_id,
                    scheduledEventId: e.entity_id,
                    type: r.DirectoryEntryTypes.GUILD_SCHEDULED_EVENT,
                    authorId: e.author_id,
                    createdAt: e.created_at
                });
            class S extends a.default.Store {
                isFetching() {
                    return o
                }
                getEventDirectoryEntries(e) {
                    if (null != e) return c[e]
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
            S.displayName = "EventDirectoryStore";
            var T = new S(d.default, {
                EVENT_DIRECTORY_FETCH_START: function() {
                    o = !0
                },
                EVENT_DIRECTORY_FETCH_SUCCESS: function(e) {
                    let {
                        channelId: t,
                        entries: n
                    } = e;
                    o = !1;
                    let l = u.sortBy([...n], [function(e) {
                            return (0, i.scheduledEventSort)(e.guild_scheduled_event)
                        }]),
                        a = u.map(l, _);
                    c[t] = a
                },
                EVENT_DIRECTORY_FETCH_FAILURE: function() {
                    o = !1
                }
            })
        },
        49129: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getNextShownUpcomingEventNoticeType: function() {
                    return i
                }
            });
            var l = n("866227"),
                u = n.n(l),
                a = n("249654"),
                d = n("745049");

            function i(e, t, n, l) {
                let i = u(),
                    s = new Date(e.scheduled_start_time).getTime(),
                    r = {
                        start: s - d.EVENT_STARTING_SOON_WINDOW_MILLISECONDS,
                        end: s
                    };
                if (i.isBetween(r.start, r.end)) {
                    if (null != t) {
                        let e = u(t),
                            n = e.isBetween(r.start, r.end),
                            a = e.isBetween(u(s).subtract(d.ACKED_RECENTLY_WINDOW_DAYS, "days"), s);
                        return n || a && !l ? void 0 : d.UpcomingGuildEventNoticeTypes.EVENT_STARTING_SOON
                    }
                    return d.UpcomingGuildEventNoticeTypes.EVENT_STARTING_SOON
                }
                let o = a.default.extractTimestamp(e.id),
                    c = Math.min((null != n ? n : o) + d.NEW_EVENT_WINDOW_MILLISECONDS, s),
                    E = i.isBetween(o, c);
                if (E && null == t && !l) return d.UpcomingGuildEventNoticeTypes.NEW_EVENT
            }
        },
        431934: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var l = n("446674"),
                u = n("913144"),
                a = n("271938"),
                d = n("398604"),
                i = n("49129"),
                s = n("745049");
            let r = {},
                o = {};

            function c(e) {
                let t = {
                    ...r
                };
                delete t[e], r = t;
                let n = {
                    ...o
                };
                delete n[e], o = n
            }
            class E extends l.default.PersistedStore {
                initialize(e) {
                    if (null != e) {
                        var t, n;
                        r = null !== (t = e.upcomingEventDismissals) && void 0 !== t ? t : {}, o = null !== (n = e.upcomingEventSeenTimestamps) && void 0 !== n ? n : {}
                    }
                }
                getGuildEventNoticeDismissalTime(e) {
                    return r[e]
                }
                getAllEventDismissals() {
                    return r
                }
                getUpcomingNoticeSeenTime(e) {
                    return o[e]
                }
                getAllUpcomingNoticeSeenTimes() {
                    return o
                }
                getState() {
                    return {
                        upcomingEventDismissals: r,
                        upcomingEventSeenTimestamps: o
                    }
                }
            }
            E.displayName = "UpcomingEventNoticesStore", E.persistKey = "UpcomingEventNotices";
            var f = new E(u.default, {
                UPCOMING_GUILD_EVENT_NOTICE_HIDE: function(e) {
                    let {
                        eventId: t
                    } = e, n = {
                        ...r
                    };
                    n[t] = Date.now(), r = n
                },
                GUILD_SCHEDULED_EVENT_UPDATE: function(e) {
                    let {
                        guildScheduledEvent: t
                    } = e;
                    (t.status === s.GuildScheduledEventStatus.CANCELED || t.status === s.GuildScheduledEventStatus.COMPLETED) && c(t.id)
                },
                GUILD_SCHEDULED_EVENT_DELETE: function(e) {
                    let {
                        guildScheduledEvent: t
                    } = e;
                    c(t.id)
                },
                GUILD_SCHEDULED_EVENT_USER_ADD: function(e) {
                    let {
                        userId: t,
                        guildEventId: n
                    } = e, l = a.default.getId();
                    if (t !== l) return;
                    let u = d.default.getGuildScheduledEvent(n);
                    if (null == u || u.status !== s.GuildScheduledEventStatus.SCHEDULED) return;
                    let c = r[n];
                    if (null != c) return;
                    let E = o[n],
                        f = (0, i.getNextShownUpcomingEventNoticeType)(u, void 0, E, !1);
                    if (f === s.UpcomingGuildEventNoticeTypes.NEW_EVENT) {
                        let e = {
                            ...r
                        };
                        e[n] = Date.now(), r = e
                    }
                },
                UPCOMING_GUILD_EVENT_NOTICE_SEEN: function(e) {
                    let {
                        guildEventId: t
                    } = e, n = {
                        ...o
                    };
                    n[t] = Date.now(), o = n
                }
            })
        },
        598639: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var l = n("446674"),
                u = n("962199"),
                a = n("305961");

            function d(e, t) {
                return (0, l.useStateFromStoresObject)([a.default, u.default], () => {
                    let n = a.default.getGuild(e),
                        l = null != n;
                    return null == n && null != t && (n = u.default.getCachedGuildByEventId(t)), {
                        isMember: l,
                        guild: n
                    }
                }, [e, t])
            }
        },
        534222: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return N
                },
                useActiveEvent: function() {
                    return g
                },
                useActiveEventsByChannel: function() {
                    return m
                },
                useGuildUpcomingEventsNotice: function() {
                    return h
                },
                useGuildActiveEvent: function() {
                    return R
                },
                useGuildChannelScheduledEvents: function() {
                    return p
                },
                useFirstActiveEventChannel: function() {
                    return M
                },
                useImminentUpcomingGuildEvents: function() {
                    return C
                }
            }), n("222007"), n("808653");
            var l = n("884691"),
                u = n("446674"),
                a = n("962199"),
                d = n("42203"),
                i = n("923959"),
                s = n("305961"),
                r = n("957255"),
                o = n("449008"),
                c = n("398604"),
                E = n("49129"),
                f = n("431934"),
                _ = n("466148"),
                S = n("822516"),
                T = n("745049"),
                v = n("49111");
            let I = [];

            function N(e, t) {
                return (0, u.useStateFromStoresArray)([s.default, a.default, c.default, r.default, d.default, i.default], () => {
                    let n = s.default.getGuild(e);
                    if (null == n) return I;
                    let l = n.hasFeature(v.GuildFeatures.HUB);
                    if (l) {
                        var u, E;
                        let e = null === (u = i.default.getDefaultChannel(n.id)) || void 0 === u ? void 0 : u.id,
                            t = null !== (E = a.default.getEventDirectoryEntries(e)) && void 0 !== E ? E : [];
                        return t.map(e => {
                            let t = e.scheduledEventId,
                                n = c.default.getGuildScheduledEvent(t);
                            return null != n ? n : a.default.getCachedGuildScheduledEventById(t)
                        }).filter(o.isNotNullish)
                    }
                    let f = c.default.getGuildScheduledEventsByIndex(null != t ? t : c.StaticGuildEventIndexes.GUILD_EVENT_UPCOMING(n.id));
                    return f.filter(e => {
                        let t = e.channel_id;
                        if (null == t) return !0;
                        let n = d.default.getChannel(t);
                        return r.default.can(v.Permissions.VIEW_CHANNEL, n)
                    })
                }, [t, e])
            }

            function g(e) {
                return (0, u.useStateFromStores)([c.default, d.default, r.default], () => {
                    let t = d.default.getChannel(e);
                    if (!r.default.can(v.Permissions.VIEW_CHANNEL, t)) return null;
                    let n = null == t ? void 0 : t.guild_id;
                    if (null == n) return null;
                    let l = c.default.getGuildScheduledEventsByIndex(c.StaticGuildEventIndexes.CHANNEL_EVENT_ACTIVE(e));
                    return l.length > 0 ? l[0] : null
                }, [e])
            }

            function m(e) {
                let t = (0, u.useStateFromStoresArray)([c.default], () => c.default.getGuildScheduledEventsForGuild(e), [e]),
                    n = l.useMemo(() => {
                        let e = new Map;
                        return t.forEach(t => {
                            let n = t.channel_id;
                            null != n && e.set(n, t)
                        }), e
                    }, [t]);
                return n
            }

            function h(e) {
                var t, n;
                let l = (t = e, (0, u.useStateFromStoresArray)([c.default, d.default, r.default], () => {
                        let e = c.default.getGuildScheduledEventsByIndex(c.StaticGuildEventIndexes.GUILD_EVENT_UPCOMING(t));
                        return e.filter(e => {
                            if (e.entity_type === T.GuildScheduledEventEntityTypes.NONE || e.status !== T.GuildScheduledEventStatus.SCHEDULED) return !1;
                            if (null == e.channel_id) return !0;
                            let t = d.default.getChannel(e.channel_id);
                            return r.default.can(v.Permissions.VIEW_CHANNEL, t)
                        })
                    }, [t])),
                    a = (0, u.useStateFromStoresObject)([f.default], () => f.default.getAllEventDismissals()),
                    i = (0, u.useStateFromStoresObject)([f.default], () => f.default.getAllUpcomingNoticeSeenTimes()),
                    s = (0, u.useStateFromStoresObject)([c.default], () => null == l ? {} : l.reduce((e, t) => {
                        let n = (0, S.getNextRecurrenceIdInEvent)(t);
                        return {
                            ...e,
                            [t.id]: c.default.isInterestedInEventRecurrence(t.id, n)
                        }
                    }, {}), [l]);
                if (null != l && null != s)
                    for (let e = 0; e < l.length; e++) {
                        ;
                        let t = l[e],
                            u = a[t.id],
                            d = i[t.id],
                            r = null !== (n = s[t.id]) && void 0 !== n && n,
                            o = (0, E.getNextShownUpcomingEventNoticeType)(t, u, d, r);
                        if (null != o) return {
                            upcomingEvent: t,
                            noticeType: o
                        }
                    }
            }

            function R(e) {
                return (0, u.useStateFromStores)([c.default, d.default, r.default], () => {
                    let t = c.default.getGuildScheduledEventsByIndex(c.StaticGuildEventIndexes.GUILD_EVENT_ACTIVE(e));
                    return t.find(e => {
                        if (e.entity_type === T.GuildScheduledEventEntityTypes.NONE || !(0, c.isGuildScheduledEventActive)(e)) return !1;
                        if (null == e.channel_id) return !0;
                        let t = d.default.getChannel(e.channel_id);
                        return r.default.can(v.Permissions.VIEW_CHANNEL, t)
                    })
                }, [e])
            }

            function p(e) {
                return (0, u.useStateFromStores)([c.default], () => c.default.getGuildScheduledEventsByIndex(c.StaticGuildEventIndexes.CHANNEL_EVENT_UPCOMING(e)), [e])
            }

            function M(e) {
                return (0, u.useStateFromStores)([d.default, c.default], () => {
                    let t = c.default.getGuildScheduledEventsByIndex(c.StaticGuildEventIndexes.GUILD_EVENT_ACTIVE(e)).find(e => {
                        let t = d.default.getChannel(e.channel_id);
                        return null != t
                    });
                    return d.default.getChannel(null == t ? void 0 : t.channel_id)
                }, [e])
            }

            function C(e) {
                let [t, n] = l.useState(() => Date.now());
                l.useEffect(() => {
                    let e = setInterval(() => {
                        n(Date.now())
                    }, 9e5);
                    return () => clearInterval(e)
                }, []);
                let a = (0, u.useStateFromStores)([c.default], () => null == e ? [] : c.default.getGuildScheduledEventsByIndex(c.StaticGuildEventIndexes.CHANNEL_EVENT_UPCOMING(e)), [e, t]),
                    d = l.useMemo(() => a.filter(e => {
                        let {
                            startTime: t,
                            endTime: n
                        } = (0, _.getEventSchedule)(e), {
                            withinStartWindow: l,
                            diffMinutes: u
                        } = (0, S.getEventTimeData)(t.toISOString(), null == n ? void 0 : n.toISOString());
                        return e.status !== T.GuildScheduledEventStatus.ACTIVE && l && u < 15
                    }), [a]);
                return d
            }
        },
        558286: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useGuildEventModalStore: function() {
                    return u
                }
            });
            var l = n("308503");
            let u = (0, l.default)(e => ({
                canCloseModal: !0,
                onUpdateCanCloseModal(t) {
                    e({
                        canCloseModal: t
                    })
                }
            }))
        },
        110374: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return N
                }
            });
            var l = n("37983");
            n("884691");
            var u = n("77078"),
                a = n("272030"),
                d = n("901582"),
                i = n("861370"),
                s = n("455933"),
                r = n("248900"),
                o = n("385752"),
                c = n("222971"),
                E = n("601131"),
                f = n("876725"),
                _ = n("367989"),
                S = n("891603"),
                T = n("510692"),
                v = n("49111"),
                I = n("782340");

            function N(e) {
                let {
                    guildEventId: t,
                    recurrenceId: n,
                    channel: N,
                    guild: g,
                    analyticsContext: m,
                    isRecurrenceItem: h = !1,
                    onSelect: R
                } = e, p = (0, _.default)({
                    guildEventId: t,
                    recurrenceId: n,
                    guild: g,
                    channel: N
                }), M = (0, o.default)({
                    guildEventId: t,
                    recurrenceId: n,
                    guild: g,
                    channel: N
                }), C = (0, c.default)({
                    guildEventId: t,
                    guild: g,
                    channel: N,
                    recurrenceId: n,
                    isRecurrenceItem: h
                }), D = (0, E.default)(t, g, N), O = (0, T.default)(t, g, N), A = (0, r.default)(t, g.id, n), L = (0, f.default)(t), x = (0, i.default)({
                    id: null != n ? n : t,
                    label: I.default.Messages.COPY_ID_EVENT
                }), y = (0, s.default)(t, g.id, N, n), G = (0, S.default)({
                    guildEventId: t,
                    guildId: g.id,
                    recurrenceId: n
                });
                return (0, l.jsx)(d.default, {
                    context: m,
                    object: v.AnalyticsObjects.CONTEXT_MENU,
                    children: (0, l.jsxs)(u.Menu, {
                        navId: "user-context",
                        onClose: a.closeContextMenu,
                        "aria-label": I.default.Messages.USER_ACTIONS_MENU_LABEL,
                        onSelect: R,
                        children: [(0, l.jsxs)(u.MenuGroup, {
                            children: [y, !h && O, C, !h && D, M, p, A, h && G]
                        }), !h && (0, l.jsx)(u.MenuGroup, {
                            children: L
                        }), (0, l.jsx)(u.MenuGroup, {
                            children: x
                        })]
                    })
                })
            }
        },
        455933: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var l = n("37983");
            n("884691");
            var u = n("398351"),
                a = n.n(u),
                d = n("866227"),
                i = n.n(d),
                s = n("730290"),
                r = n("446674"),
                o = n("77078"),
                c = n("49671"),
                E = n("884351"),
                f = n("305961"),
                _ = n("773336"),
                S = n("398604"),
                T = n("466148"),
                v = n("189443"),
                I = n("822516"),
                N = n("745049"),
                g = n("782340");
            let m = "YYYYMMDDTHHmmss",
                h = "YYYY-MM-DDTHH:mm:ss",
                R = /RRULE:.*/;

            function p(e, t, n, u) {
                var d, p, M;
                let C;
                let D = (0, r.useStateFromStores)([S.default], () => S.default.isActive(e)),
                    {
                        startTime: O,
                        endTime: A
                    } = (0, T.default)(null != e ? e : "", u),
                    L = (0, r.useStateFromStores)([S.default], () => S.default.getGuildScheduledEvent(e), [e]),
                    x = (0, r.useStateFromStores)([f.default], () => f.default.getGuild(t), [t]);
                if (D || null == L) return null;
                C = L.entity_type === N.GuildScheduledEventEntityTypes.EXTERNAL ? L.entity_metadata.location : null != n && null != x ? g.default.Messages.CALENDAR_CHANNEL_LOCATION.format({
                    channelName: n.name,
                    guildName: x.name
                }) : g.default.Messages.NOTIFICATION_TITLE_DISCORD;
                let y = i(L.scheduled_start_time),
                    G = null != L.scheduled_end_time ? i(L.scheduled_end_time) : y,
                    V = null != L.description && "" !== L.description ? E.default.unparse(L.description, null !== (d = null == n ? void 0 : n.id) && void 0 !== d ? d : "", !0) : "",
                    U = (0, v.recurrenceRuleFromServer)(L.recurrence_rule),
                    P = null != U ? (0, I.getRRule)(U) : null,
                    b = null !== (p = i(O)) && void 0 !== p ? p : y,
                    w = null !== (M = i(null != A ? A : O)) && void 0 !== M ? M : y,
                    j = () => {
                        let e = a();
                        e.createEvent({
                            start: y,
                            end: G,
                            summary: L.name,
                            description: V,
                            location: C,
                            repeating: P
                        }), _.isPlatformEmbedded ? c.default.fileManager.saveWithDialog(e.toString(), "discord-event.ics") : window.open(e.toURL(), "_blank")
                    };
                return (0, l.jsxs)(o.MenuItem, {
                    id: g.default.Messages.ADD_TO_CALENDAR,
                    label: g.default.Messages.ADD_TO_CALENDAR,
                    action: j,
                    children: [(0, l.jsx)(o.MenuItem, {
                        id: g.default.Messages.ADD_TO_GOOGLE_CALENDAR,
                        label: g.default.Messages.ADD_TO_GOOGLE_CALENDAR,
                        action: () => {
                            var e;
                            let t = null == P ? void 0 : P.toString(),
                                n = {
                                    text: L.name,
                                    dates: "".concat(y.format(m), "/").concat(G.format(m)),
                                    details: V,
                                    action: "TEMPLATE",
                                    location: C,
                                    recur: null != t ? null === (e = R.exec(t)) || void 0 === e ? void 0 : e[0] : void 0
                                },
                                l = "https://calendar.google.com/calendar/render?".concat((0, s.stringify)(n));
                            window.open(l, "_blank")
                        }
                    }), (0, l.jsx)(o.MenuItem, {
                        id: g.default.Messages.DOWNLOAD_ICS,
                        label: g.default.Messages.DOWNLOAD_ICS,
                        action: j
                    }), (0, l.jsx)(o.MenuItem, {
                        id: g.default.Messages.ADD_TO_YAHOO,
                        label: g.default.Messages.ADD_TO_YAHOO,
                        action: () => {
                            let e = {
                                    v: 60,
                                    title: L.name,
                                    st: b.format(m),
                                    et: w.format(m),
                                    desc: V,
                                    in_loc: C
                                },
                                t = "https://calendar.yahoo.com/?".concat((0, s.stringify)(e));
                            window.open(t, "_blank")
                        }
                    }), (0, l.jsx)(o.MenuItem, {
                        id: g.default.Messages.ADD_TO_OUTLOOK,
                        label: g.default.Messages.ADD_TO_OUTLOOK,
                        action: () => {
                            let e = {
                                    path: "/calendar/action/compose",
                                    rru: "addevent",
                                    startdt: b.format(h),
                                    enddt: w.format(h),
                                    subject: L.name,
                                    body: V,
                                    location: C,
                                    allday: !1
                                },
                                t = "https://outlook.live.com/calendar/0/deeplink/compose?".concat((0, s.stringify)(e));
                            window.open(t, "_blank")
                        }
                    })]
                })
            }
        },
        248900: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var u = n("77078"),
                a = n("306160"),
                d = n("598639"),
                i = n("49111"),
                s = n("782340");

            function r(e, t, n) {
                let r = null != n,
                    {
                        isMember: o
                    } = (0, d.default)(t, e);
                if (!o) return null;

                function c() {
                    let l = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    (0, a.copy)("".concat(location.protocol, "//").concat(location.host).concat(i.Routes.GUILD_EVENT_DETAILS(t, e, l ? null : n))), (0, u.showToast)((0, u.createToast)(s.default.Messages.COPIED_LINK, u.ToastType.SUCCESS))
                }
                return (0, l.jsx)(u.MenuItem, {
                    id: s.default.Messages.COPY_EVENT_LINK,
                    label: s.default.Messages.COPY_EVENT_LINK,
                    action: r ? void 0 : () => c(!0),
                    children: r && (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(u.MenuItem, {
                            id: s.default.Messages.COPY_RECURRENCE_LINK,
                            label: s.default.Messages.COPY_RECURRENCE_LINK,
                            action: () => c(!1)
                        }), (0, l.jsx)(u.MenuItem, {
                            id: s.default.Messages.COPY_SERIES_LINK,
                            label: s.default.Messages.COPY_SERIES_LINK,
                            action: () => c(!0)
                        })]
                    })
                })
            }
        },
        385752: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            }), n("222007");
            var l = n("37983");
            n("884691");
            var u = n("446674"),
                a = n("77078"),
                d = n("817963"),
                i = n("299039"),
                s = n("398604"),
                r = n("322224"),
                o = n("397680"),
                c = n("466148"),
                E = n("782340");

            function f(e) {
                let {
                    guildEventId: t,
                    recurrenceId: n,
                    guild: f,
                    channel: _
                } = e, S = null != n, {
                    canManageGuildEvent: T
                } = (0, d.useManageResourcePermissions)(null != _ ? _ : f), [v, I] = (0, u.useStateFromStoresArray)([s.default], () => [s.default.isActive(t), s.default.getGuildScheduledEvent(t)]), N = (0, o.default)(n, null == I ? void 0 : I.id), g = null != I && T(I), m = (null == I ? void 0 : I.recurrence_rule) != null && !S, {
                    startTime: h
                } = (0, c.default)(t, n);
                if (!g || v && !m && !S || S && !S || null == I) return null;
                if (v && S) {
                    var R;
                    if (null == h) return null;
                    let e = new Date(null !== (R = null == N ? void 0 : N.scheduled_start_time) && void 0 !== R ? R : h);
                    if (new Date > e) return null
                }
                let p = () => {
                        if (null != n) {
                            if (null != N) r.default.updateGuildEventException({
                                scheduled_start_time: N.scheduled_start_time,
                                scheduled_end_time: N.scheduled_end_time,
                                is_canceled: !0
                            }, f.id, t, n);
                            else {
                                let e = i.default.extractTimestamp(n);
                                r.default.createGuildEventException({
                                    original_scheduled_start_time: new Date(e).toISOString(),
                                    is_canceled: !0
                                }, f.id, t)
                            }
                        }
                    },
                    M = e => {
                        (0, a.openModal)(n => (0, l.jsxs)(a.ConfirmModal, {
                            ...n,
                            header: E.default.Messages.GUILD_EVENT_DELETE_CONFIRM_HEADER,
                            confirmText: m || e ? E.default.Messages.DELETE_ALL_EVENTS : E.default.Messages.DELETE_EVENT,
                            cancelText: E.default.Messages.NEVERMIND,
                            onConfirm: () => S && !e ? p() : r.default.deleteGuildEvent(t, f.id),
                            children: [(0, l.jsx)(a.Text, {
                                variant: "text-md/normal",
                                children: E.default.Messages.GUILD_EVENT_DELETE_CONFIRM_BODY
                            }), (0, l.jsx)("br", {}), (m || e) && (0, l.jsx)(a.Text, {
                                variant: "text-md/normal",
                                children: E.default.Messages.GUILD_EVENT_DELETE_CONFIRM_BODY_IS_RECURRING.format()
                            })]
                        }))
                    };
                return (0, l.jsx)(a.MenuItem, {
                    id: E.default.Messages.DELETE_EVENT,
                    label: E.default.Messages.DELETE_EVENT,
                    action: S ? void 0 : () => M(),
                    color: "danger",
                    children: S && (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(a.MenuItem, {
                            id: E.default.Messages.DELETE_THIS_EVENT,
                            label: E.default.Messages.DELETE_THIS_EVENT,
                            action: () => M(),
                            disabled: null == N ? void 0 : N.is_canceled,
                            color: "danger"
                        }), (0, l.jsx)(a.MenuItem, {
                            id: E.default.Messages.DELETE_ALL_EVENTS_IN_SERIES,
                            label: E.default.Messages.DELETE_ALL_EVENTS_IN_SERIES,
                            action: () => M(!0),
                            color: "danger"
                        })]
                    })
                })
            }
        },
        222971: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var l = n("37983");
            n("884691");
            var u = n("446674"),
                a = n("77078"),
                d = n("817963"),
                i = n("398604"),
                s = n("397680"),
                r = n("466148"),
                o = n("842672"),
                c = n("782340");

            function E(e) {
                let {
                    guildEventId: t,
                    guild: E,
                    channel: f,
                    recurrenceId: _,
                    isRecurrenceItem: S
                } = e, {
                    canManageGuildEvent: T
                } = (0, d.useManageResourcePermissions)(null != f ? f : E), v = (0, u.useStateFromStores)([i.default], () => i.default.getGuildScheduledEvent(t)), I = T(v), N = (0, o.default)(), g = (0, s.default)(_, null == v ? void 0 : v.id), m = (0, r.default)(t, _);
                if (!I || null == v) return null;
                let h = null != v.recurrence_rule && !S,
                    R = e => {
                        (null == _ || e) && !S ? (0, a.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await n.el("590942").then(n.bind(n, "590942"));
                            return n => (0, l.jsx)(e, {
                                ...n,
                                guildScheduledEventId: t,
                                guildId: E.id
                            })
                        }, N) : null != _ && (0, a.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await n.el("229798").then(n.bind(n, "229798"));
                            return t => (0, l.jsx)(e, {
                                ...t,
                                guildEvent: v,
                                recurrenceId: _
                            })
                        }, N)
                    };
                return (0, l.jsx)(a.MenuItem, {
                    id: c.default.Messages.EDIT_EVENT,
                    label: c.default.Messages.EDIT_EVENT,
                    action: h ? void 0 : () => R(!0),
                    children: h && (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(a.MenuItem, {
                            id: c.default.Messages.EDIT_THIS_EVENT,
                            label: c.default.Messages.EDIT_THIS_EVENT,
                            action: () => R(!1),
                            disabled: (null == g ? void 0 : g.is_canceled) || m.startTime.getTime() < Date.now()
                        }), (0, l.jsx)(a.MenuItem, {
                            id: c.default.Messages.EDIT_ALL_EVENTS,
                            label: c.default.Messages.EDIT_ALL_EVENTS,
                            action: () => R(!0),
                            disabled: new Date(v.scheduled_start_time).getTime() < Date.now()
                        })]
                    })
                })
            }
        },
        601131: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var l = n("37983");
            n("884691");
            var u = n("446674"),
                a = n("77078"),
                d = n("817963"),
                i = n("244480"),
                s = n("398604"),
                r = n("322224"),
                o = n("745049"),
                c = n("782340");

            function E(e, t, n) {
                let {
                    canManageGuildEvent: E
                } = (0, d.useManageResourcePermissions)(null != n ? n : t), f = (0, u.useStateFromStores)([s.default], () => s.default.isActive(e)), _ = (0, u.useStateFromStores)([s.default], () => s.default.getGuildScheduledEvent(e), [e]), S = E(_);
                if (null == e || !S || !f || (null == _ ? void 0 : _.entity_type) === o.GuildScheduledEventEntityTypes.EXTERNAL) return null;
                let T = () => {
                    if (null == n ? void 0 : n.isGuildStageVoice()) {
                        (0, i.endStage)(n);
                        return
                    }
                    null != e && r.default.endEvent(e, t.id), (0, a.closeAllModals)()
                };
                return (0, l.jsx)(a.MenuItem, {
                    id: c.default.Messages.END_EVENT,
                    label: c.default.Messages.END_EVENT,
                    action: function() {
                        (0, a.openModal)(e => (0, l.jsx)(a.ConfirmModal, {
                            ...e,
                            header: c.default.Messages.END_EVENT,
                            confirmText: c.default.Messages.GUILD_EVENT_END_PROMPT_CONFIRM,
                            cancelText: c.default.Messages.CANCEL,
                            onConfirm: T,
                            children: (0, l.jsx)(a.Text, {
                                variant: "text-md/normal",
                                children: c.default.Messages.GUILD_EVENT_EXTERNAL_END_PROMPT_TITLE
                            })
                        }))
                    },
                    color: "danger"
                })
            }
        },
        876725: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var l = n("37983");
            n("884691");
            var u = n("446674"),
                a = n("77078"),
                d = n("377114"),
                i = n("907566"),
                s = n("398604"),
                r = n("782340");

            function o(e) {
                let t = (0, u.useStateFromStores)([s.default], () => s.default.getGuildScheduledEvent(e), [e]);
                return null == e || null == t ? null : (0, l.jsx)(a.MenuItem, {
                    id: "report-event",
                    label: r.default.Messages.REPORT_MODAL_REPORT_EVENT_MENU_ITEM,
                    action: () => (0, d.showReportModalForGuildScheduledEvent)(t),
                    icon: i.default,
                    color: "danger"
                })
            }
        },
        367989: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            }), n("222007");
            var l = n("37983");
            n("884691");
            var u = n("446674"),
                a = n("77078"),
                d = n("817963"),
                i = n("398604"),
                s = n("322224"),
                r = n("397680"),
                o = n("782340");

            function c(e) {
                let {
                    guildEventId: t,
                    recurrenceId: n,
                    guild: c,
                    channel: E
                } = e, f = null != n, {
                    canManageGuildEvent: _
                } = (0, d.useManageResourcePermissions)(null != E ? E : c), [S, T] = (0, u.useStateFromStoresArray)([i.default], () => [i.default.isActive(t), i.default.getGuildScheduledEvent(t)]), v = (0, r.default)(n, null == T ? void 0 : T.id), I = null != T && _(T), N = f && (null == v ? void 0 : v.is_canceled) && I;
                return N && (!S || f) ? (0, l.jsx)(a.MenuItem, {
                    id: o.default.Messages.RESTORE_EVENT,
                    label: o.default.Messages.RESTORE_EVENT,
                    action: () => {
                        if (null == n || null == v) return;
                        let {
                            scheduled_start_time: e,
                            scheduled_end_time: l
                        } = v;
                        null == e && null == l ? s.default.deleteGuildEventException(c.id, t, n) : s.default.updateGuildEventException({
                            scheduled_start_time: e,
                            scheduled_end_time: l,
                            is_canceled: !1
                        }, c.id, t, n)
                    }
                }) : null
            }
        },
        891603: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var l = n("37983");
            n("884691");
            var u = n("446674"),
                a = n("77078"),
                d = n("267567"),
                i = n("271938"),
                s = n("398604"),
                r = n("397680"),
                o = n("936965"),
                c = n("745049"),
                E = n("782340");

            function f(e) {
                let {
                    guildEventId: t,
                    guildId: n,
                    recurrenceId: f
                } = e, _ = (0, u.useStateFromStores)([d.default], () => d.default.isLurking(n), [n]), S = (0, u.useStateFromStores)([i.default], () => i.default.getId()), {
                    rsvped: T,
                    baseRsvp: v,
                    recurrenceRsvp: I
                } = (0, u.useStateFromStoresObject)([s.default], () => ({
                    rsvped: s.default.isInterestedInEventRecurrence(t, f),
                    baseRsvp: s.default.getRsvp(t, null, S),
                    recurrenceRsvp: s.default.getRsvp(t, f, S)
                }), [f, t, S]), N = (0, r.default)(f, t);
                if (_ || (null == N ? void 0 : N.is_canceled)) return null;
                let g = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        l = (null == v ? void 0 : v.response) === c.GuildScheduledEventUserResponses.INTERESTED,
                        u = l ? c.GuildScheduledEventUserResponses.UNINTERESTED : c.GuildScheduledEventUserResponses.INTERESTED;
                    e ? (0, o.updateRsvp)(t, null, n, u) : (0, o.updateRsvp)(t, f, n, u)
                };
                return (0, l.jsxs)(a.MenuItem, {
                    id: T ? E.default.Messages.EVENT_MARK_NOT_INTERESTED : E.default.Messages.EVENT_MARK_INTERESTED,
                    label: T ? E.default.Messages.EVENT_MARK_NOT_INTERESTED : E.default.Messages.EVENT_MARK_INTERESTED,
                    action: void 0,
                    children: [(0, l.jsx)(a.MenuItem, {
                        id: E.default.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_OPTION_RECURRENCE,
                        label: E.default.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_OPTION_RECURRENCE,
                        action: () => g(!1)
                    }), (0, l.jsx)(a.MenuItem, {
                        id: E.default.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_OPTION_SERIES,
                        label: E.default.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_OPTION_SERIES,
                        action: () => g(!0),
                        disabled: null != I
                    })]
                })
            }
        },
        510692: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var l = n("37983");
            n("884691");
            var u = n("446674"),
                a = n("77078"),
                d = n("817963"),
                i = n("398604"),
                s = n("534222"),
                r = n("782340");

            function o(e, t, o) {
                var c;
                let {
                    canManageGuildEvent: E
                } = (0, d.useManageResourcePermissions)(null != o ? o : t), f = (0, u.useStateFromStores)([i.default], () => i.default.getGuildScheduledEvent(e), [e]), _ = E(f), S = null != (0, s.useActiveEvent)(null !== (c = null == o ? void 0 : o.id) && void 0 !== c ? c : ""), T = null != f && (0, i.isGuildScheduledEventActive)(f);
                return _ && !T && !S ? (0, l.jsx)(a.MenuItem, {
                    id: r.default.Messages.START_EVENT,
                    label: r.default.Messages.START_EVENT,
                    action: function() {
                        null != f && (0, a.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await n.el("298843").then(n.bind(n, "298843"));
                            return t => (0, l.jsx)(e, {
                                ...t,
                                event: f
                            })
                        })
                    }
                }) : null
            }
        },
        936965: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                updateRsvp: function() {
                    return T
                },
                default: function() {
                    return I
                }
            }), n("222007");
            var l, u, a = n("37983"),
                d = n("884691"),
                i = n("77078"),
                s = n("271938"),
                r = n("398604"),
                o = n("322224"),
                c = n("822516"),
                E = n("745049"),
                f = n("782340"),
                _ = n("616762");

            function S(e, t) {
                let n = s.default.getId();
                return r.default.getRsvp(e, t, n)
            }

            function T(e, t, n, l) {
                let u = S(e, t);
                null != u || l === E.GuildScheduledEventUserResponses.UNINTERESTED && null == t ? o.default.deleteRsvpForGuildEvent(e, t, n) : o.default.createRsvpForGuildEvent(e, t, n, l)
            }(u = l || (l = {}))[u.SERIES = 0] = "SERIES", u[u.RECURRENCE = 1] = "RECURRENCE";

            function v(e) {
                let {
                    event: t,
                    recurrenceId: n,
                    guildId: l,
                    onRsvp: u,
                    ...s
                } = e, [r, o] = d.useState(0), c = S(t.id, null), v = (null == c ? void 0 : c.response) === E.GuildScheduledEventUserResponses.INTERESTED, I = v ? E.GuildScheduledEventUserResponses.UNINTERESTED : E.GuildScheduledEventUserResponses.INTERESTED, N = I === E.GuildScheduledEventUserResponses.INTERESTED ? f.default.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_HEADER_INTERESTED : f.default.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_HEADER_UNINTERESTED;
                return (0, a.jsx)(i.ConfirmModal, {
                    ...s,
                    header: N,
                    confirmText: f.default.Messages.OK,
                    cancelText: f.default.Messages.CANCEL,
                    onConfirm: () => {
                        0 === r ? T(t.id, null, l, I) : T(t.id, n, l, I), null == u || u(), s.onClose()
                    },
                    confirmButtonColor: i.Button.Colors.BRAND,
                    children: (0, a.jsx)(i.RadioGroup, {
                        className: _.responseOptions,
                        value: r,
                        options: [{
                            name: f.default.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_OPTION_SERIES,
                            value: 0
                        }, {
                            name: f.default.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_OPTION_RECURRENCE,
                            value: 1
                        }],
                        onChange: e => o(e.value)
                    })
                })
            }

            function I(e, t, n, l) {
                let u = r.default.getGuildScheduledEvent(e);
                if (null == u) return;
                let d = null != t ? t : (0, c.getNextRecurrenceIdInEvent)(u),
                    s = S(u.id, d);
                null == d ? (T(e, null, n, E.GuildScheduledEventUserResponses.INTERESTED), null == l || l()) : null != s ? (T(e, d, n, E.GuildScheduledEventUserResponses.UNINTERESTED), null == l || l()) : (0, i.openModalLazy)(() => Promise.resolve(e => (0, a.jsx)(v, {
                    ...e,
                    event: u,
                    recurrenceId: d,
                    guildId: n,
                    onRsvp: l
                })))
            }
        },
        842672: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("77078"),
                u = n("244201"),
                a = n("558286"),
                d = n("49111");
            let i = "guild-event-modal";
            var s = () => {
                let e = (0, u.useAppContext)(),
                    t = e === d.AppContext.POPOUT ? l.POPOUT_MODAL_CONTEXT : l.DEFAULT_MODAL_CONTEXT;
                return {
                    modalKey: i,
                    contextKey: t,
                    onCloseRequest: () => {
                        a.useGuildEventModalStore.getState().canCloseModal && (0, l.closeModal)(i, t)
                    }
                }
            }
        },
        217145: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                isIFrameModalUserEnabled: function() {
                    return a
                }
            });
            var l = n("862205");
            let u = (0, l.createExperiment)({
                kind: "user",
                id: "2023-07_iframe_modal",
                label: "iFrame Modal",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enable iFrameModal",
                    config: {
                        enabled: !0
                    }
                }]
            });

            function a() {
                return u.getCurrentConfig({
                    location: "5c0a70_1"
                }, {
                    autoTrackExposure: !0
                }).enabled
            }
        },
        429682: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                isIFrameModalForGuildEnabled: function() {
                    return a
                }
            });
            var l = n("862205");
            let u = (0, l.createExperiment)({
                kind: "guild",
                id: "2023-08_iframe_modal_guild",
                label: "iFrame Modal guild experiment",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enable iFrame Modal Guild",
                    config: {
                        enabled: !0
                    }
                }]
            });

            function a(e) {
                return u.getCurrentConfig({
                    guildId: null != e ? e : "",
                    location: "2d360b_1"
                }, {
                    autoTrackExposure: !0
                }).enabled
            }
        },
        988878: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var l = n("217145"),
                u = n("429682");

            function a(e) {
                return (0, l.isIFrameModalUserEnabled)() || (0, u.isIFrameModalForGuildEnabled)(e)
            }
        },
        244480: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                toggleRequestToSpeak: function() {
                    return I
                },
                inviteUserToStage: function() {
                    return N
                },
                audienceAckRequestToSpeak: function() {
                    return g
                },
                moveSelfToAudience: function() {
                    return m
                },
                setUserSuppress: function() {
                    return h
                },
                moveUserToAudience: function() {
                    return R
                },
                setEveryoneRolePermissionAllowed: function() {
                    return p
                },
                startStage: function() {
                    return M
                },
                editStage: function() {
                    return C
                },
                endStage: function() {
                    return D
                }
            });
            var l = n("627445"),
                u = n.n(l),
                a = n("316693"),
                d = n("872717"),
                i = n("450911");
            n("851387");
            var s = n("798609"),
                r = n("716241"),
                o = n("18494"),
                c = n("800762"),
                E = n("991170"),
                f = n("716214"),
                _ = n("230324"),
                S = n("738983"),
                T = n("808422"),
                v = n("49111");

            function I(e, t) {
                let n = e.getGuildId();
                return u(null != n, "This channel cannot be guildless."), t && (0, r.trackWithMetadata)(v.AnalyticEvents.REQUEST_TO_SPEAK_INITIATED, {
                    ...(0, _.getStageChannelMetadata)(e)
                }), d.default.patch({
                    url: v.Endpoints.UPDATE_VOICE_STATE(n),
                    body: {
                        request_to_speak_timestamp: t ? new Date().toISOString() : null,
                        channel_id: e.id
                    }
                })
            }

            function N(e, t) {
                let n = e.getGuildId();
                return u(null != n, "This channel cannot be guildless."), d.default.patch({
                    url: v.Endpoints.UPDATE_VOICE_STATE(n, t),
                    body: {
                        suppress: !1,
                        request_to_speak_timestamp: new Date().toISOString(),
                        channel_id: e.id
                    }
                })
            }

            function g(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    l = null == e ? void 0 : e.getGuildId();
                u(null != l, "This channel cannot be guildless.");
                let a = c.default.getVoiceStateForChannel(e.id),
                    i = (0, T.getAudienceRequestToSpeakState)(a);
                return i === T.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK && !t && (0, r.trackWithMetadata)(v.AnalyticEvents.PROMOTED_TO_SPEAKER, {
                    ...(0, _.getStageChannelMetadata)(e)
                }), d.default.patch({
                    url: v.Endpoints.UPDATE_VOICE_STATE(l),
                    body: {
                        suppress: t,
                        request_to_speak_timestamp: null,
                        channel_id: e.id,
                        ...n ? {
                            silent: n
                        } : {}
                    }
                })
            }

            function m(e) {
                let t = null == e ? void 0 : e.getGuildId();
                return u(null != t, "This channel cannot be guildless."), d.default.patch({
                    url: v.Endpoints.UPDATE_VOICE_STATE(t),
                    body: {
                        suppress: !0,
                        channel_id: e.id,
                        self_video: !1,
                        self_stream: !1
                    }
                })
            }

            function h(e, t, n) {
                let l = e.getGuildId();
                return u(null != l, "This channel cannot be guildless."), d.default.patch({
                    url: v.Endpoints.UPDATE_VOICE_STATE(l, t),
                    body: {
                        suppress: n,
                        channel_id: e.id
                    }
                })
            }

            function R(e, t) {
                if (null == t || null == e) return;
                let n = t.getGuildId();
                return u(null != n, "This channel cannot be guildless."), h(t, e.id, !0), d.default.patch({
                    url: v.Endpoints.UPDATE_VOICE_STATE(n, e.id),
                    body: {
                        suppress: !0,
                        channel_id: t.id,
                        self_video: !1,
                        self_stream: !1
                    }
                })
            }

            function p(e, t, n) {
                let l = e.getGuildId();
                u(null != l, "Channel cannot be guildless");
                let d = e.permissionOverwrites[l],
                    r = {
                        id: l,
                        type: s.PermissionOverwriteType.ROLE,
                        allow: E.default.NONE,
                        deny: E.default.NONE,
                        ...d
                    };
                n ? (r.allow = a.default.add(r.allow, t), r.deny = a.default.remove(r.deny, t)) : (r.allow = a.default.remove(r.allow, t), r.deny = a.default.add(r.deny, t)), i.default.updatePermissionOverwrite(e.id, r)
            }
            async function M(e, t, n, l) {
                if ("" === t) return;
                let u = o.default.getVoiceChannelId() === e.id;
                !u && (0, f.connectToStage)(e);
                let a = await (0, S.startStageInstance)(e.id, t, n, l);
                return g(e, !1, !0), a
            }
            async function C(e, t, n) {
                if ("" === t) return;
                let l = await (0, S.updateStageInstance)(e.id, t, n);
                return l
            }
            async function D(e) {
                await (0, S.endStageInstance)(e.id)
            }
        },
        230324: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                summarizeUsernamesParticipating: function() {
                    return c
                },
                getRemoveModeratorTooltipHint: function() {
                    return E
                },
                getStageChannelMetadata: function() {
                    return f
                }
            }), n("808653"), n("222007"), n("917351");
            var l = n("945956"),
                u = n("387111"),
                a = n("991170"),
                d = n("834052"),
                i = n("837979"),
                s = n("49111"),
                r = n("606762"),
                o = n("782340");

            function c(e, t, n, l) {
                let a = t[0],
                    d = u.default.getName(e, n, a),
                    i = null != l ? l : t.length;
                return 1 === i && null != a ? d : null == a ? o.default.Messages.SPEAKING_COUNT.format({
                    count: i
                }) : o.default.Messages.USER_SUMMARY_WITH_OTHERS.format({
                    name: d,
                    count: i - 1
                })
            }

            function E(e, t) {
                switch (e) {
                    case r.RowType.OWNER:
                        return o.default.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_OWNER;
                    case r.RowType.ADMINISTRATOR:
                        return o.default.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_ADMINISTRATOR;
                    case r.RowType.MEMBER:
                    case r.RowType.ROLE:
                        return t ? o.default.Messages.CHANNEL_PERMISSIONS_CANNOT_REMOVE_PERMISSIONS : o.default.Messages.CHANNEL_PERMISSIONS_REMOVE_MODERATOR_TOOLTIP;
                    case r.RowType.EMPTY_STATE:
                }
                return null
            }

            function f(e) {
                let t = d.default.getStageInstanceByChannel(e.id);
                return {
                    channel_id: e.id,
                    guild_id: e.guild_id,
                    topic: null == t ? void 0 : t.topic,
                    media_session_id: l.default.getMediaSessionId(),
                    request_to_speak_state: a.default.canEveryoneRole(s.Permissions.REQUEST_TO_SPEAK, e) ? i.RequestToSpeakPermissionStates.EVERYONE : i.RequestToSpeakPermissionStates.NO_ONE,
                    stage_instance_id: null == t ? void 0 : t.id
                }
            }
        },
        738983: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                startStageInstance: function() {
                    return a
                },
                updateStageInstance: function() {
                    return d
                },
                endStageInstance: function() {
                    return i
                }
            });
            var l = n("872717"),
                u = n("49111");
            async function a(e, t, n, a, d) {
                let i = await l.default.post({
                    url: u.Endpoints.STAGE_INSTANCES,
                    body: {
                        channel_id: e,
                        topic: t,
                        privacy_level: n,
                        guild_scheduled_event_id: d,
                        send_start_notification: a
                    }
                });
                return i.body
            }
            async function d(e, t, n) {
                let a = await l.default.patch({
                    url: u.Endpoints.STAGE_INSTANCE(e),
                    body: {
                        topic: t,
                        privacy_level: n
                    }
                });
                return a.body
            }

            function i(e) {
                return l.default.delete(u.Endpoints.STAGE_INSTANCE(e))
            }
        },
        555158: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                HelpMessageTypes: function() {
                    return u
                },
                default: function() {
                    return _
                }
            });
            var l, u, a = n("37983");
            n("884691");
            var d = n("414456"),
                i = n.n(d),
                s = n("77078"),
                r = n("36694"),
                o = n("381546"),
                c = n("68238"),
                E = n("423487"),
                f = n("557296");
            (l = u || (u = {}))[l.WARNING = 0] = "WARNING", l[l.INFO = 1] = "INFO", l[l.ERROR = 2] = "ERROR", l[l.POSITIVE = 3] = "POSITIVE";
            var _ = function(e) {
                let {
                    children: t,
                    messageType: n,
                    className: l,
                    textColor: u = "text-normal",
                    textVariant: d = "text-sm/medium"
                } = e, _ = function(e) {
                    switch (e) {
                        case 0:
                            return E.default;
                        case 1:
                            return c.default;
                        case 2:
                            return o.default;
                        case 3:
                            return r.default
                    }
                }(n), S = function(e) {
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
                return (0, a.jsxs)("div", {
                    className: i(f.container, S, l),
                    children: [(0, a.jsx)("div", {
                        className: f.iconDiv,
                        children: (0, a.jsx)(_, {
                            className: f.icon
                        })
                    }), (0, a.jsx)(s.Text, {
                        className: f.text,
                        color: u,
                        variant: d,
                        children: t
                    })]
                })
            }
        },
        83910: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("37983");
            n("884691");
            var u = n("469563"),
                a = n("926001"),
                d = n("75196"),
                i = (0, u.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: u = "currentColor",
                        foreground: a,
                        ...i
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, d.default)(i),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, l.jsx)("path", {
                            fill: u,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            className: a,
                            d: "M5 3C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5ZM16.8995 8.41419L15.4853 6.99998L7 15.4853L8.41421 16.8995L16.8995 8.41419Z"
                        })
                    })
                }, a.SlashBoxIcon, void 0, {
                    size: 24
                })
        },
        662255: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("37983");
            n("884691");
            var u = n("469563"),
                a = n("35647"),
                d = n("75196"),
                i = (0, u.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: u = "currentColor",
                        foreground: a,
                        ...i
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, d.default)(i),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, l.jsx)("path", {
                            className: a,
                            fill: u,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M3.37868 2.87868C3.94129 2.31607 4.70435 2 5.5 2H19.5C20.2956 2 21.0587 2.31607 21.6213 2.87868C22.1839 3.44129 22.5 4.20435 22.5 5V19C22.5 19.7956 22.1839 20.5587 21.6213 21.1213C21.0587 21.6839 20.2956 22 19.5 22H5.5C4.70435 22 3.94129 21.6839 3.37868 21.1213C2.81607 20.5587 2.5 19.7956 2.5 19V5C2.5 4.20435 2.81607 3.44129 3.37868 2.87868ZM7.65332 16.3125H9.47832V7.6875H7.65332V16.3125ZM11.23 7.6875V16.3125H14.2925C15.6008 16.3125 16.6091 15.9417 17.3175 15.2C18.0341 14.4583 18.3925 13.3917 18.3925 12C18.3925 10.6083 18.0341 9.54167 17.3175 8.8C16.6091 8.05833 15.6008 7.6875 14.2925 7.6875H11.23ZM15.955 14.0625C15.5466 14.4625 14.9925 14.6625 14.2925 14.6625H13.055V9.3375H14.2925C14.9925 9.3375 15.5466 9.5375 15.955 9.9375C16.3633 10.3375 16.5675 11.025 16.5675 12C16.5675 12.975 16.3633 13.6625 15.955 14.0625Z"
                        })
                    })
                }, a.IdIcon, void 0, {
                    size: 24
                })
        },
        95689: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("37983");
            n("884691");
            var u = n("469563"),
                a = n("578478"),
                d = n("75196"),
                i = (0, u.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: u = "currentColor",
                        foreground: a,
                        ...i
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, d.default)(i),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, l.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            className: a,
                            d: "M6 2C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V6C22 3.79086 20.2091 2 18 2H6ZM10 8C10 6.8952 9.1032 6 8 6C6.8944 6 6 6.8952 6 8C6 9.1056 6.8944 10 8 10C9.1032 10 10 9.1056 10 8ZM9 14L6 18H18L15 11L11 16L9 14Z",
                            fill: u
                        })
                    })
                }, a.ImageIcon, void 0, {
                    size: 24
                })
        },
        394832: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var l = n("37983");
            n("884691");
            var u = n("469563"),
                a = n("125094"),
                d = (0, u.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: u = "currentColor",
                        className: a,
                        foreground: d
                    } = e;
                    return (0, l.jsx)("svg", {
                        className: a,
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, l.jsx)("path", {
                            className: d,
                            fill: u,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M2 4.5C2 3.397 2.897 2.5 4 2.5H20C21.103 2.5 22 3.397 22 4.5V15.5C22 16.604 21.103 17.5 20 17.5H13V19.5H17V21.5H7V19.5H11V17.5H4C2.897 17.5 2 16.604 2 15.5V4.5ZM13.2 14.3375V11.6C9.864 11.6 7.668 12.6625 6 15C6.672 11.6625 8.532 8.3375 13.2 7.6625V5L18 9.6625L13.2 14.3375Z"
                        })
                    })
                }, a.ScreenArrowIcon, void 0, {
                    size: 24
                })
        },
        708169: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                FullScreenLayers: function() {
                    return h
                },
                useFullScreenLayerStore: function() {
                    return I
                },
                openFullScreenLayer: function() {
                    return R
                },
                closeFullScreenLayer: function() {
                    return p
                }
            }), n("222007");
            var l, u, a = n("37983"),
                d = n("884691"),
                i = n("995008"),
                s = n.n(i),
                r = n("324134"),
                o = n("308503"),
                c = n("769846"),
                E = n("77078"),
                f = n("485328"),
                _ = n("159885"),
                S = n("983782"),
                T = n("275495");
            let v = (0, _.cssValueToNumber)(c.default.FULL_SCREEN_LAYER_ANIMATION_DURATION);
            (u = l || (l = {}))[u.ENTERING = 1] = "ENTERING", u[u.ENTERED = 2] = "ENTERED", u[u.EXITING = 3] = "EXITING", u[u.EXITED = 4] = "EXITED";
            let I = (0, o.default)(e => ({
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

            function N(e) {
                let {
                    item: t
                } = e, n = d.useRef(null);
                return (0, E.useFocusLock)(n), d.useEffect(() => (f.default.disable(), f.default.enableTemp(function(e) {
                    return {
                        POP_LAYER: {
                            binds: ["esc"],
                            comboKeysBindGlobal: !0,
                            action() {
                                p(e)
                            }
                        }
                    }
                }(t.key)), () => {
                    f.default.disableTemp()
                }), [t.key]), (0, a.jsx)(t.LayerComponent, {
                    children: (0, a.jsxs)("div", {
                        className: T.root,
                        ref: n,
                        children: [(0, a.jsx)("div", {
                            className: T.drag
                        }), t.render({
                            transitionState: null != t ? t.transitionState : 3,
                            closeLayer: () => p(t.key)
                        })]
                    })
                })
            }
            let g = {
                    enter: T.enter,
                    enterActive: T.enterActive,
                    enterDone: T.enterDone,
                    exit: T.exit,
                    exitActive: T.exitActive,
                    exitDone: T.exitDone
                },
                m = {
                    enter: T.enterReducedMotion,
                    enterActive: T.enterActiveReducedMotion,
                    enterDone: T.enterDoneReducedMotion,
                    exit: T.exitReducedMotion,
                    exitActive: T.exitActiveReducedMotion,
                    exitDone: T.exitDoneReducedMotion
                };

            function h() {
                let {
                    reducedMotion: e
                } = d.useContext(E.AccessibilityPreferencesContext), t = e.enabled, n = t ? m : g, l = I(e => e.fullScreenLayers);
                return (0, a.jsx)(r.TransitionGroup, {
                    children: l.map(e => (0, a.jsx)(r.CSSTransition, {
                        classNames: n,
                        timeout: v,
                        onEntered: () => {
                            I.setState({
                                fullScreenLayers: l.map(t => t.key === e.key ? {
                                    ...t,
                                    transitionState: 2
                                } : t)
                            })
                        },
                        unmountOnExit: !0,
                        children: (0, a.jsx)(N, {
                            item: e
                        })
                    }, e.key))
                })
            }

            function R(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.freeze({}),
                    {
                        layerKey: n,
                        Layer: l
                    } = t,
                    u = null != n ? n : s();
                return I.setState(t => ({
                    fullScreenLayers: [...t.fullScreenLayers, {
                        key: u,
                        transitionState: 1,
                        LayerComponent: null != l ? l : S.default,
                        render: e
                    }]
                })), u
            }

            function p(e) {
                I.setState(t => ({
                    fullScreenLayers: t.fullScreenLayers.filter(t => t.key !== e)
                }))
            }
        }
    }
]);