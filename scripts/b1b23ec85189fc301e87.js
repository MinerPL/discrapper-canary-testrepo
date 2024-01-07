(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["71024"], {
        820542: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                categoryCollapse: function() {
                    return i
                },
                categoryExpand: function() {
                    return l
                },
                categoryCollapseAll: function() {
                    return u
                },
                categoryExpandAll: function() {
                    return d
                }
            });
            var a = n("913144");

            function i(e) {
                a.default.dispatch({
                    type: "CATEGORY_COLLAPSE",
                    id: e
                })
            }

            function l(e) {
                a.default.dispatch({
                    type: "CATEGORY_EXPAND",
                    id: e
                })
            }

            function u(e) {
                a.default.dispatch({
                    type: "CATEGORY_COLLAPSE_ALL",
                    guildId: e
                })
            }

            function d(e) {
                a.default.dispatch({
                    type: "CATEGORY_EXPAND_ALL",
                    guildId: e
                })
            }
        },
        838446: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("901582");

            function l(e, t) {
                return function(n) {
                    return (0, a.jsx)(i.default, {
                        page: t.page,
                        section: t.section,
                        object: t.object,
                        objectType: t.objectType,
                        children: (0, a.jsx)(e, {
                            ...n
                        })
                    })
                }
            }
        },
        158534: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("685665");

            function l(e, t) {
                return function(n) {
                    let {
                        AnalyticsLocationProvider: l
                    } = (0, i.default)(t);
                    return (0, a.jsx)(l, {
                        children: (0, a.jsx)(e, {
                            ...n
                        })
                    })
                }
            }
        },
        846883: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return w
                }
            }), n("222007"), n("424973");
            var a = n("37983");
            n("884691");
            var i = n("446674"),
                l = n("77078"),
                u = n("260365"),
                d = n("823411"),
                s = n("997289"),
                o = n("685665"),
                r = n("442939"),
                c = n("662285"),
                f = n("782911"),
                I = n("629414"),
                _ = n("53887"),
                p = n("486150"),
                A = n("555759"),
                E = n("271938"),
                T = n("42203"),
                S = n("525065"),
                v = n("305961"),
                y = n("957255"),
                N = n("824563"),
                C = n("27618"),
                h = n("18494"),
                m = n("101125"),
                M = n("697218"),
                g = n("800762"),
                O = n("953998"),
                L = n("387111"),
                b = n("550766"),
                F = n("191225"),
                R = n("706508"),
                G = n("612696"),
                x = n("871388"),
                j = n("152311"),
                V = n("407908"),
                U = n("698372"),
                Y = n("141962"),
                P = n("954016"),
                D = n("49111"),
                H = n("450484"),
                J = n("782340");

            function w(e, t) {
                let {
                    analyticsLocations: w
                } = (0, o.default)(), k = (0, i.useStateFromStores)([M.default], () => M.default.getCurrentUser()), X = (0, i.useStateFromStores)([F.default], () => F.default.getSelfEmbeddedActivities()), z = (0, i.useStateFromStoresArray)([m.default], () => m.default.getActivities().filter(e => null != e.application_id && !(null == X ? void 0 : X.has(e.application_id)))), K = (0, i.useStateFromStoresArray)([N.default], () => null != t ? N.default.getActivities(t.id, null == e ? void 0 : e.getGuildId()) : [], [t, e]), B = (0, i.useStateFromStoresArray)([F.default], () => {
                    let n = (null == e ? void 0 : e.id) != null ? F.default.getEmbeddedActivitiesForChannel(e.id) : F.NO_ACTIVITIES;
                    return null != t ? n.filter(e => {
                        let {
                            connections: n
                        } = e;
                        return n.has(t.id)
                    }) : n
                }, [t, e]), W = (0, U.default)(), Q = (0, i.useStateFromStores)([y.default], () => null == e || e.isPrivate() || y.default.can(D.Permissions.SEND_MESSAGES, e), [e]), q = (0, i.useStateFromStoresArray)([O.default], () => [...K.map(e => null != e.application_id && O.default.getState(e.application_id, D.ActivityActionTypes.JOIN) === D.ActivityActionStates.LOADING), ...B.map(e => O.default.getState(e.application_id, D.ActivityActionTypes.JOIN) === D.ActivityActionStates.LOADING)], [K, B]), Z = (0, r.default)([...K.filter(e => (null == e ? void 0 : e.application_id) != null).map(e => e.application_id), ...B.map(e => e.application_id)]), $ = null == e ? void 0 : e.id, ee = (0, i.useStateFromStoresArray)([T.default, v.default, S.default, C.default, h.default, g.default, y.default], () => [...K.map(e => (0, G.default)({
                    user: null != t ? t : k,
                    activity: e,
                    application: Z.find(t => (null == t ? void 0 : t.id) === e.application_id),
                    channelId: $,
                    currentUser: k,
                    isEmbedded: (0, j.default)(e),
                    ChannelStore: T.default,
                    GuildStore: v.default,
                    GuildMemberCountStore: S.default,
                    RelationshipStore: C.default,
                    SelectedChannelStore: h.default,
                    VoiceStateStore: g.default,
                    PermissionStore: y.default
                })), ...B.map(e => (0, G.default)({
                    user: null != t ? t : k,
                    activity: e,
                    application: Z.find(t => (null == t ? void 0 : t.id) === e.application_id),
                    channelId: $,
                    currentUser: k,
                    isEmbedded: !0,
                    ChannelStore: T.default,
                    GuildStore: v.default,
                    GuildMemberCountStore: S.default,
                    RelationshipStore: C.default,
                    SelectedChannelStore: h.default,
                    VoiceStateStore: g.default,
                    PermissionStore: y.default
                }))], [K, Z, $, k, B, t]), et = (0, i.useStateFromStoresArray)([c.default, E.default], () => K.map(e => e.type === D.ActivityTypes.LISTENING && null != t ? (0, _.default)(c.default, E.default, t, e) : void 0), [t, K]), en = (0, s.useAnalyticsContext)();
                if (!Q) return null;
                let ea = (n, a) => {
                        null != e ? u.default.sendActivityInvite({
                            type: n,
                            channelId: e.id,
                            activity: a,
                            location: D.AnalyticsLocations.CONTEXT_MENU
                        }) : null != t && u.default.sendActivityInviteUser({
                            type: n,
                            userId: t.id,
                            activity: a,
                            location: D.AnalyticsLocations.CONTEXT_MENU
                        })
                    },
                    ei = (i, u) => {
                        let d = T.default.getChannel(i),
                            s = null == d ? void 0 : v.default.getGuild(d.guild_id);
                        if (null != d && null != s) {
                            if (null != t) return b.sendEmbeddedActivityInviteUser({
                                channelId: d.id,
                                applicationId: u,
                                userId: t.id,
                                location: D.InstantInviteSources.CONTEXT_MENU
                            });
                            if (null != e && e.type === D.ChannelTypes.GUILD_VOICE) return (0, l.openModalLazy)(async () => {
                                let {
                                    default: t
                                } = await n.el("310688").then(n.bind(n, "310688"));
                                return n => (0, a.jsx)(t, {
                                    ...n,
                                    guild: s,
                                    channel: d,
                                    applicationId: u,
                                    analyticsLocation: e.type === D.ChannelTypes.GUILD_VOICE ? D.AnalyticsPages.GUILD_CHANNEL : D.AnalyticsPages.DM_CHANNEL,
                                    source: D.InstantInviteSources.ACTIVITY_INVITE
                                })
                            }, {
                                modalKey: "use-activity-items-embedded-invite-modal"
                            });
                            if ((null == e ? void 0 : e.id) != null) return b.sendEmbeddedActivityInvite({
                                activityChannelId: d.id,
                                invitedChannelId: e.id,
                                applicationId: u,
                                location: D.InstantInviteSources.CONTEXT_MENU
                            })
                        }
                    },
                    el = async e => {
                        var n;
                        await d.default.join({
                            userId: t.id,
                            sessionId: e.session_id,
                            applicationId: e.application_id,
                            channelId: h.default.getVoiceChannelId(),
                            messageId: null,
                            intent: P.ActivityIntent.PLAY,
                            embedded: (0, x.default)(e, D.ActivityFlags.EMBEDDED)
                        }), (0, V.default)({
                            type: D.AnalyticsGameOpenTypes.JOIN,
                            userId: t.id,
                            applicationId: e.application_id,
                            partyId: null === (n = e.party) || void 0 === n ? void 0 : n.id,
                            locationObject: en.location,
                            analyticsLocations: w
                        })
                    }, eu = async t => {
                        await (0, R.default)({
                            activity: t,
                            currentEmbeddedApplication: W,
                            activityChannelId: null == e ? void 0 : e.id,
                            locationObject: en.location,
                            embeddedActivitiesManager: Y.default,
                            analyticsLocations: w
                        })
                    }, ed = [];
                return null == X || X.forEach(n => {
                    let i = (null == t ? void 0 : t.id) != null && n.connections.has(null == t ? void 0 : t.id),
                        u = y.default.can(D.Permissions.CREATE_INSTANT_INVITE, e);
                    null != n.activity_id && !i && u && ed.push((0, a.jsx)(l.MenuItem, {
                        id: "invite-to-join-embedded",
                        label: J.default.Messages.USER_ACTIVITY_ACTION_INVITE_TO_JOIN,
                        subtext: n.name,
                        action: () => {
                            ei(n.channelId, n.application_id)
                        }
                    }, "self-embedded-".concat(n.application_id)))
                }), z.forEach((e, t) => {
                    e.type === D.ActivityTypes.PLAYING && (0, x.default)(e, D.ActivityFlags.JOIN) ? ed.push((0, a.jsx)(l.MenuItem, {
                        id: "invite-to-join",
                        label: J.default.Messages.USER_ACTIVITY_ACTION_INVITE_TO_JOIN,
                        subtext: e.name,
                        action: () => ea(D.ActivityActionTypes.JOIN, e)
                    }, "self".concat(t))) : e.type === D.ActivityTypes.LISTENING && (0, x.default)(e, D.ActivityFlags.SYNC) && ed.push((0, a.jsx)(l.MenuItem, {
                        id: "invite-to-listen",
                        label: J.default.Messages.USER_ACTIVITY_ACTION_INVITE_TO_LISTEN_ALONG,
                        subtext: e.name,
                        action: () => ea(D.ActivityActionTypes.LISTEN, e)
                    }, "self".concat(t)))
                }), ed.length > 0 && ed.push((0, a.jsx)(l.MenuSeparator, {})), K.forEach((n, i) => {
                    if (n.type === D.ActivityTypes.PLAYING && (0, x.default)(n, D.ActivityFlags.JOIN) && null != n.session_id && null != n.application_id) {
                        if (ee[i]) {
                            let e = q[i];
                            ed.push((0, a.jsx)(l.MenuItem, {
                                id: "join",
                                label: e ? J.default.Messages.USER_ACTIVITY_JOINING : J.default.Messages.JOIN,
                                disabled: e,
                                hint: e ? (0, a.jsx)(l.Spinner, {
                                    type: l.Spinner.Type.PULSING_ELLIPSIS
                                }) : null,
                                subtext: n.name,
                                action: () => el(n)
                            }, i))
                        } else ed.push((0, a.jsx)(l.MenuItem, {
                            id: "ask-to-join",
                            label: J.default.Messages.USER_ACTIVITY_ACTION_ASK_TO_JOIN,
                            subtext: n.name,
                            action: () => ea(D.ActivityActionTypes.JOIN_REQUEST, n)
                        }, i))
                    } else if (n.type === D.ActivityTypes.LISTENING && (0, x.default)(n, D.ActivityFlags.SYNC) && null != et[i]) {
                        let u = et[i],
                            {
                                notPlayable: d,
                                playingSameTrack: s,
                                isCurrentUser: o,
                                syncingWithUser: r,
                                syncingWithParty: c
                            } = u,
                            _ = o || d || s,
                            E = o || r || c;
                        ed.push((0, a.jsx)(l.MenuItem, {
                            id: "spotify-play-".concat(n.session_id),
                            action: () => (0, A.default)(u, H.SpotifyActionTypes.USER_ACTIVITY_PLAY),
                            label: (0, f.default)(u, H.SpotifyActionTypes.USER_ACTIVITY_PLAY),
                            subtext: _ ? (0, I.default)(u, H.SpotifyActionTypes.USER_ACTIVITY_PLAY, null != e ? L.default.getNickname(e.guild_id, e.id, t) : void 0) : void 0,
                            disabled: _
                        }, "spotify-play-".concat(n.session_id)), (0, a.jsx)(l.MenuItem, {
                            id: "spotify-sync-".concat(n.session_id),
                            action: () => (0, p.default)(u, H.SpotifyActionTypes.USER_ACTIVITY_SYNC),
                            label: J.default.Messages.USER_ACTIVITY_LISTEN_ALONG,
                            subtext: E ? (0, I.default)(u, H.SpotifyActionTypes.USER_ACTIVITY_SYNC, null != e ? L.default.getNickname(e.guild_id, e.id, t) : void 0) : void 0,
                            disabled: E
                        }, "spotify-sync-".concat(n.session_id)))
                    }
                }), B.forEach((e, t) => {
                    var n;
                    let i = e.connections.has(null !== (n = null == k ? void 0 : k.id) && void 0 !== n ? n : ""),
                        u = t + K.length,
                        d = q[u] || i,
                        s = J.default.Messages.EMBEDDED_ACTIVITIES_JOIN_ACTIVITY;
                    i ? s = J.default.Messages.USER_ACTIVITY_CANNOT_JOIN_SELF : q[u] && (s = J.default.Messages.USER_ACTIVITY_JOINING), ee[u] && ed.push((0, a.jsx)(l.MenuItem, {
                        id: "embedded-activity-join-".concat(e.application_id),
                        label: s,
                        disabled: d,
                        hint: q[u] ? (0, a.jsx)(l.Spinner, {
                            type: l.Spinner.Type.PULSING_ELLIPSIS
                        }) : null,
                        subtext: e.name,
                        action: () => eu(e)
                    }, "embedded-activity-".concat(e.application_id)))
                }), ed
            }
        },
        715243: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("446674"),
                l = n("77078"),
                u = n("957255"),
                d = n("49111"),
                s = n("782340");

            function o(e, t) {
                let o = (0, i.useStateFromStores)([u.default], () => u.default.can(d.Permissions.MANAGE_CHANNELS, e), [e]);
                return __OVERLAY__ || !o ? null : (0, a.jsx)(l.MenuItem, {
                    id: "clone-channel",
                    label: s.default.Messages.CLONE_CHANNEL,
                    action: () => (0, l.openModalLazy)(async () => {
                        let {
                            default: i
                        } = await n.el("581354").then(n.bind(n, "581354"));
                        return n => (0, a.jsx)(i, {
                            ...n,
                            channelType: e.type,
                            guildId: t.id,
                            categoryId: e.parent_id,
                            cloneChannelId: e.id
                        })
                    })
                })
            }
        },
        963150: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("446674"),
                l = n("77078"),
                u = n("957255"),
                d = n("49111"),
                s = n("782340");

            function o(e, t) {
                let o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e.type,
                    r = (0, i.useStateFromStores)([u.default], () => u.default.can(d.Permissions.MANAGE_CHANNELS, e), [e]);
                if (__OVERLAY__ || !r) return null;
                let c = () => {
                    (0, l.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("581354").then(n.bind(n, "581354"));
                        return n => (0, a.jsx)(t, {
                            ...n,
                            channelType: o,
                            guildId: e.guild_id,
                            categoryId: e.parent_id
                        })
                    })
                };
                switch (o) {
                    case d.ChannelTypes.GUILD_TEXT:
                        return (0, a.jsx)(l.MenuItem, {
                            id: "create-text-channel",
                            label: s.default.Messages.CREATE_TEXT_CHANNEL,
                            action: c
                        });
                    case d.ChannelTypes.GUILD_VOICE:
                        return (0, a.jsx)(l.MenuItem, {
                            id: "create-voice-channel",
                            label: s.default.Messages.CREATE_VOICE_CHANNEL,
                            action: c
                        });
                    default:
                        return null
                }
            }
        },
        47006: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("446674"),
                l = n("77078"),
                u = n("18054"),
                d = n("957255"),
                s = n("49111"),
                o = n("782340");

            function r(e) {
                let {
                    canManageChannels: t,
                    canManageRoles: n,
                    canManageWebhooks: r,
                    canAccessChannel: c
                } = (0, i.useStateFromStoresObject)([d.default], () => ({
                    canManageChannels: d.default.can(s.Permissions.MANAGE_CHANNELS, e),
                    canManageRoles: d.default.can(s.Permissions.MANAGE_ROLES, e),
                    canManageWebhooks: d.default.can(s.Permissions.MANAGE_WEBHOOKS, e),
                    canAccessChannel: d.default.can(e.accessPermissions, e)
                }), [e]);
                return !__OVERLAY__ && c && (t || n || r) ? (0, a.jsx)(l.MenuItem, {
                    id: "edit-channel",
                    label: e.type === s.ChannelTypes.GUILD_CATEGORY ? o.default.Messages.EDIT_CATEGORY : o.default.Messages.EDIT_CHANNEL,
                    action: () => u.default.open(e.id)
                }) : null
            }
        },
        878526: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var a = n("58622"),
                i = n("49111");

            function l(e, t, n) {
                return (0, a.default)({
                    guild: t,
                    channel: e,
                    stageInstance: n,
                    source: i.InstantInviteSources.CONTEXT_MENU
                })
            }
        },
        44141: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            }), n("222007");
            var a = n("37983");
            n("884691");
            var i = n("446674"),
                l = n("77078"),
                u = n("267363"),
                d = n("680986"),
                s = n("689275"),
                o = n("755624"),
                r = n("233069"),
                c = n("245997"),
                f = n("660478"),
                I = n("49111"),
                _ = n("782340");

            function p(e) {
                let t = function(e) {
                    let t = (0, d.useUnreadThreadsCountForParent)(e.guild_id, e.id),
                        n = (0, i.useStateFromStores)([f.default, c.default, s.default, o.default], () => {
                            if (e.isForumPost()) return f.default.isForumPostUnread(e.id);
                            if (e.type !== I.ChannelTypes.GUILD_CATEGORY) return f.default.hasUnread(e.id);
                            {
                                let t = c.default.getCategories(e.getGuildId());
                                if (null == t[e.id]) return !1;
                                let n = t[e.id].some(e => {
                                    let {
                                        channel: t
                                    } = e;
                                    return (0, r.isReadableType)(t.type) && f.default.hasUnread(t.id)
                                });
                                if (n) return !0;
                                let a = new Set(t[e.id].map(e => e.channel.id)),
                                    i = s.default.getThreadsForGuild(e.guild_id);
                                for (let e in i)
                                    if (a.has(e)) {
                                        for (let t in i[e])
                                            if (o.default.hasJoined(t) && !o.default.isMuted(t) && f.default.hasUnread(t)) return !0
                                    } return !1
                            }
                        }, [e]);
                    return e.isForumLikeChannel() ? t > 0 : n
                }(e);
                return (0, a.jsx)(l.MenuItem, {
                    id: "mark-channel-read",
                    label: _.default.Messages.MARK_AS_READ,
                    action: function() {
                        (0, u.ackChannel)(e)
                    },
                    disabled: !t
                })
            }
        },
        339876: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("446674"),
                l = n("77078"),
                u = n("498139"),
                d = n("629220"),
                s = n("512395"),
                o = n("282109"),
                r = n("49111"),
                c = n("782340");

            function f(e) {
                let {
                    isFavoritesPerk: t
                } = (0, u.useFavoritesServerExperiment)("useChannelOptInItems"), n = (0, s.useOptInEnabledForGuild)(e.guild_id), f = (0, i.useStateFromStores)([o.default], () => o.default.isChannelOptedIn(e.guild_id, e.id)), I = (0, i.useStateFromStores)([o.default], () => null != e.parent_id && o.default.isChannelOptedIn(e.guild_id, e.parent_id)), _ = (0, i.useStateFromStores)([o.default], () => o.default.isFavorite(e.guild_id, e.id)), p = () => {
                    (0, d.setOptInChannel)(e.guild_id, e.id, !f, {
                        section: r.AnalyticsSections.CONTEXT_MENU
                    })
                }, A = () => {
                    null != e.parent_id && (0, d.setOptInChannel)(e.guild_id, e.parent_id, !1, {
                        section: r.AnalyticsSections.CONTEXT_MENU
                    })
                };
                if (!n || e.isThread()) return null;
                if (e.isCategory()) return (0, a.jsx)(l.MenuItem, {
                    id: "opt-into-category",
                    label: f ? c.default.Messages.CHANNEL_OPT_OUT : c.default.Messages.CHANNEL_OPT_IN,
                    action: () => p()
                });
                let E = _ ? c.default.Messages.REMOVE_FAVORITE : c.default.Messages.ADD_FAVORITE,
                    T = _ ? c.default.Messages.UNPIN_CHANNEL : c.default.Messages.PIN_CHANNEL_TO_TOP;
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(l.MenuItem, {
                        id: "opt-in-favorite-channel",
                        label: t ? T : E,
                        action: () => {
                            (0, d.setIsFavorite)(e.guild_id, e.id, !_, {
                                section: r.AnalyticsSections.CONTEXT_MENU
                            })
                        }
                    }), I ? (0, a.jsx)(l.MenuItem, {
                        id: "opt-out-category",
                        label: c.default.Messages.CHANNEL_OPT_OUT_PARENT_CATEGORY,
                        action: () => A()
                    }) : (0, a.jsx)(l.MenuItem, {
                        id: "opt-into-channel",
                        label: f ? c.default.Messages.CHANNEL_OPT_OUT : c.default.Messages.CHANNEL_OPT_IN,
                        action: () => p()
                    })]
                })
            }
        },
        20209: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var a = n("446674"),
                i = n("162771"),
                l = n("49111");

            function u() {
                let e = (0, a.useStateFromStores)([i.default], () => i.default.getGuildId());
                return e === l.FAVORITES
            }
        },
        972701: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useAddToFavoritesItem: function() {
                    return A
                },
                useRemoveFromFavoritesItem: function() {
                    return E
                }
            }), n("222007");
            var a = n("37983");
            n("884691");
            var i = n("917351"),
                l = n.n(i),
                u = n("446674"),
                d = n("77078"),
                s = n("923959"),
                o = n("379881"),
                r = n("200008"),
                c = n("986373"),
                f = n("498139"),
                I = n("49111"),
                _ = n("782340");

            function p(e, t) {
                return e.type === I.ChannelTypes.GROUP_DM ? t ? _.default.Messages.UNFAVORITE_GDM : _.default.Messages.FAVORITE_GDM : e.type === I.ChannelTypes.DM ? t ? _.default.Messages.UNFAVORITE_DM : _.default.Messages.FAVORITE_DM : t ? _.default.Messages.UNFAVORITE_CHANNEL : _.default.Messages.FAVORITE_CHANNEL
            }

            function A(e) {
                let t = (0, u.useStateFromStores)([s.default], () => s.default.getChannels(I.FAVORITES))[I.ChannelTypes.GUILD_CATEGORY],
                    [
                        [n], i
                    ] = l.partition(t, e => "null" === e.channel.id),
                    {
                        favoritesEnabled: _,
                        isFavoritesPerk: A
                    } = (0, f.useFavoritesServerExperiment)("58e21a_1"),
                    {
                        notifyFavoriteAdded: E
                    } = (0, c.useFavoriteAdded)(),
                    T = (0, u.useStateFromStores)([o.default], () => o.default.isFavorite(e.id));
                if (__OVERLAY__ || T || !_) return null;

                function S(t) {
                    E(), (0, r.addFavoriteChannel)(e.id, t)
                }
                return 0 === i.length ? (0, a.jsx)(d.MenuItem, {
                    id: "favorite-channel",
                    label: p(e, !1),
                    action: () => S(null)
                }) : (0, a.jsxs)(d.MenuItem, {
                    id: "favorite-channel",
                    label: p(e, !1),
                    action: () => S(null),
                    children: [A && (0, a.jsx)(d.MenuGroup, {
                        children: (0, a.jsx)(d.MenuItem, {
                            id: "favorite-".concat(n.channel.id),
                            label: n.channel.name,
                            action: () => S("null" === n.channel.id ? null : n.channel.id)
                        }, n.channel.id)
                    }), (0, a.jsx)(d.MenuGroup, {
                        children: i.map(e => (0, a.jsx)(d.MenuItem, {
                            id: "favorite-".concat(e.channel.id),
                            label: e.channel.name,
                            action: () => S(e.channel.id)
                        }, e.channel.id))
                    })]
                })
            }

            function E(e) {
                let t = (0, u.useStateFromStores)([o.default], () => o.default.isFavorite(e.id));
                return __OVERLAY__ || !t ? null : (0, a.jsx)(d.MenuItem, {
                    id: "favorite-channel",
                    label: p(e, !0),
                    color: "danger",
                    action: () => e.type === I.ChannelTypes.GUILD_CATEGORY ? (0, d.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("338052").then(n.bind(n, "338052"));
                        return n => (0, a.jsx)(t, {
                            ...n,
                            onConfirm: () => {
                                n.onClose(), (0, r.removeFavoriteChannel)(e.id)
                            },
                            channel: e
                        })
                    }) : (0, r.removeFavoriteChannel)(e.id)
                })
            }
        },
        390008: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("446674"),
                l = n("77078"),
                u = n("162771"),
                d = n("498139"),
                s = n("49111"),
                o = n("782340");

            function r(e) {
                let t = (0, i.useStateFromStores)([u.default], () => u.default.getGuildId()),
                    r = e.type === s.ChannelTypes.GUILD_CATEGORY,
                    {
                        isFavoritesPerk: c
                    } = (0, d.useFavoritesServerExperiment)("useChannelFavoriteSetNickname");
                return __OVERLAY__ || t !== s.FAVORITES ? null : (0, a.jsx)(l.MenuItem, {
                    id: "set-channel-nickname",
                    label: c && r ? o.default.Messages.FAVORITES_RENAME_CATEGORY : o.default.Messages.CHANGE_NICKNAME,
                    action: function() {
                        (0, l.openModalLazy)(async () => {
                            let {
                                default: t
                            } = await n.el("353228").then(n.bind(n, "353228"));
                            return n => (0, a.jsx)(t, {
                                ...n,
                                channelId: e.id,
                                heading: c && r ? o.default.Messages.FAVORITES_RENAME_CATEGORY : o.default.Messages.CHANGE_NICKNAME,
                                formTitle: c && r ? o.default.Messages.CATEGORY_NAME : o.default.Messages.NICKNAME,
                                allowReset: !(c && r)
                            })
                        })
                    }
                })
            }
        },
        41205: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("446674"),
                l = n("77078"),
                u = n("393414"),
                d = n("162771"),
                s = n("49111"),
                o = n("782340");

            function r(e) {
                let t = (0, i.useStateFromStores)([d.default], () => d.default.getGuildId());
                return __OVERLAY__ || t !== s.FAVORITES ? null : (0, a.jsx)(l.MenuItem, {
                    id: "go-to-original-guild",
                    label: o.default.Messages.FAVORITES_GO_TO_ORIGINAL_GUILD,
                    action: function() {
                        (0, u.transitionToGuild)(e.guild_id, e.id)
                    }
                })
            }
        },
        936947: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("77078"),
                l = n("200008"),
                u = n("986373"),
                d = n("498139"),
                s = n("782340");

            function o(e) {
                let t = (0, u.useFavoritesGuildSelected)(),
                    n = (0, u.useFavorite)(e.id),
                    o = (0, u.useFavoritesCategories)(),
                    {
                        isFavoritesPerk: r
                    } = (0, d.useFavoritesServerExperiment)("useChannelMoveToCategory");
                if (__OVERLAY__ || !t || null == n || !r) return null;
                let c = o.filter(e => e.id !== (null == n ? void 0 : n.parentId));
                return (0, a.jsx)(i.MenuItem, {
                    id: "move-to-category",
                    label: s.default.Messages.MOVE_TO,
                    children: c.map(e => {
                        let {
                            id: t,
                            name: u
                        } = e;
                        return (0, a.jsx)(i.MenuItem, {
                            id: "favorite-".concat(t),
                            label: u,
                            action: () => {
                                var e;
                                return e = t, void(null != n && (0, l.updateFavoriteChannelParent)(n.id, e))
                            }
                        }, null != t ? t : "null")
                    })
                })
            }
        },
        58622: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("446674"),
                l = n("77078"),
                u = n("242757"),
                d = n("923959"),
                s = n("957255"),
                o = n("76539"),
                r = n("49111"),
                c = n("782340");

            function f(e) {
                let {
                    source: t,
                    guild: n,
                    channel: a,
                    stageInstance: l
                } = e, o = (0, i.useStateFromStores)([d.default], () => d.default.getDefaultChannel(n.id, !0, r.Permissions.CREATE_INSTANT_INVITE)), c = (0, i.useStateFromStores)([s.default], () => (0, u.canViewInviteModal)(s.default, n, a, l)), f = I(t, n, c && null != a ? a : o), p = _(t);
                return null == a && t === r.InstantInviteSources.GUILD_CONTEXT_MENU ? null : c || null != o ? f : p
            }
            let I = (e, t, i) => (0, a.jsx)(l.MenuItem, {
                    id: "invite-people",
                    label: c.default.Messages.INVITE_PEOPLE,
                    color: "brand",
                    icon: e === r.InstantInviteSources.GUILD_HEADER ? o.default : void 0,
                    action: () => (0, l.openModalLazy)(async () => {
                        let {
                            default: l
                        } = await n.el("310688").then(n.bind(n, "310688"));
                        return n => (0, a.jsx)(l, {
                            ...n,
                            guild: t,
                            channel: i,
                            source: e
                        })
                    })
                }),
                _ = e => (0, a.jsx)(l.MenuItem, {
                    id: "invite-people",
                    label: c.default.Messages.INVITE_PEOPLE,
                    color: "brand",
                    icon: e === r.InstantInviteSources.GUILD_HEADER ? o.default : void 0,
                    action: () => (0, l.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await n.el("973132").then(n.bind(n, "973132"));
                        return t => (0, a.jsx)(e, {
                            ...t
                        })
                    })
                })
        }
    }
]);