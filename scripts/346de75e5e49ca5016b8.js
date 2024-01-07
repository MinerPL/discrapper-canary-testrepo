(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["99636"], {
        838446: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return i
                }
            });
            var n = a("37983");
            a("884691");
            var l = a("901582");

            function i(e, t) {
                return function(a) {
                    return (0, n.jsx)(l.default, {
                        page: t.page,
                        section: t.section,
                        object: t.object,
                        objectType: t.objectType,
                        children: (0, n.jsx)(e, {
                            ...a
                        })
                    })
                }
            }
        },
        158534: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return i
                }
            });
            var n = a("37983");
            a("884691");
            var l = a("685665");

            function i(e, t) {
                return function(a) {
                    let {
                        AnalyticsLocationProvider: i
                    } = (0, l.default)(t);
                    return (0, n.jsx)(i, {
                        children: (0, n.jsx)(e, {
                            ...a
                        })
                    })
                }
            }
        },
        846883: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return w
                }
            }), a("222007"), a("424973");
            var n = a("37983");
            a("884691");
            var l = a("446674"),
                i = a("77078"),
                d = a("260365"),
                u = a("823411"),
                s = a("997289"),
                o = a("685665"),
                r = a("442939"),
                c = a("662285"),
                f = a("782911"),
                I = a("629414"),
                p = a("53887"),
                _ = a("486150"),
                A = a("555759"),
                v = a("271938"),
                E = a("42203"),
                T = a("525065"),
                y = a("305961"),
                S = a("957255"),
                M = a("824563"),
                h = a("27618"),
                m = a("18494"),
                C = a("101125"),
                N = a("697218"),
                g = a("800762"),
                O = a("953998"),
                b = a("387111"),
                G = a("550766"),
                j = a("191225"),
                x = a("706508"),
                F = a("612696"),
                L = a("871388"),
                R = a("152311"),
                U = a("407908"),
                V = a("698372"),
                Y = a("141962"),
                D = a("954016"),
                P = a("49111"),
                J = a("450484"),
                k = a("782340");

            function w(e, t) {
                let {
                    analyticsLocations: w
                } = (0, o.default)(), H = (0, l.useStateFromStores)([N.default], () => N.default.getCurrentUser()), K = (0, l.useStateFromStores)([j.default], () => j.default.getSelfEmbeddedActivities()), X = (0, l.useStateFromStoresArray)([C.default], () => C.default.getActivities().filter(e => null != e.application_id && !(null == K ? void 0 : K.has(e.application_id)))), B = (0, l.useStateFromStoresArray)([M.default], () => null != t ? M.default.getActivities(t.id, null == e ? void 0 : e.getGuildId()) : [], [t, e]), z = (0, l.useStateFromStoresArray)([j.default], () => {
                    let a = (null == e ? void 0 : e.id) != null ? j.default.getEmbeddedActivitiesForChannel(e.id) : j.NO_ACTIVITIES;
                    return null != t ? a.filter(e => {
                        let {
                            connections: a
                        } = e;
                        return a.has(t.id)
                    }) : a
                }, [t, e]), Q = (0, V.default)(), q = (0, l.useStateFromStores)([S.default], () => null == e || e.isPrivate() || S.default.can(P.Permissions.SEND_MESSAGES, e), [e]), W = (0, l.useStateFromStoresArray)([O.default], () => [...B.map(e => null != e.application_id && O.default.getState(e.application_id, P.ActivityActionTypes.JOIN) === P.ActivityActionStates.LOADING), ...z.map(e => O.default.getState(e.application_id, P.ActivityActionTypes.JOIN) === P.ActivityActionStates.LOADING)], [B, z]), Z = (0, r.default)([...B.filter(e => (null == e ? void 0 : e.application_id) != null).map(e => e.application_id), ...z.map(e => e.application_id)]), $ = null == e ? void 0 : e.id, ee = (0, l.useStateFromStoresArray)([E.default, y.default, T.default, h.default, m.default, g.default, S.default], () => [...B.map(e => (0, F.default)({
                    user: null != t ? t : H,
                    activity: e,
                    application: Z.find(t => (null == t ? void 0 : t.id) === e.application_id),
                    channelId: $,
                    currentUser: H,
                    isEmbedded: (0, R.default)(e),
                    ChannelStore: E.default,
                    GuildStore: y.default,
                    GuildMemberCountStore: T.default,
                    RelationshipStore: h.default,
                    SelectedChannelStore: m.default,
                    VoiceStateStore: g.default,
                    PermissionStore: S.default
                })), ...z.map(e => (0, F.default)({
                    user: null != t ? t : H,
                    activity: e,
                    application: Z.find(t => (null == t ? void 0 : t.id) === e.application_id),
                    channelId: $,
                    currentUser: H,
                    isEmbedded: !0,
                    ChannelStore: E.default,
                    GuildStore: y.default,
                    GuildMemberCountStore: T.default,
                    RelationshipStore: h.default,
                    SelectedChannelStore: m.default,
                    VoiceStateStore: g.default,
                    PermissionStore: S.default
                }))], [B, Z, $, H, z, t]), et = (0, l.useStateFromStoresArray)([c.default, v.default], () => B.map(e => e.type === P.ActivityTypes.LISTENING && null != t ? (0, p.default)(c.default, v.default, t, e) : void 0), [t, B]), ea = (0, s.useAnalyticsContext)();
                if (!q) return null;
                let en = (a, n) => {
                        null != e ? d.default.sendActivityInvite({
                            type: a,
                            channelId: e.id,
                            activity: n,
                            location: P.AnalyticsLocations.CONTEXT_MENU
                        }) : null != t && d.default.sendActivityInviteUser({
                            type: a,
                            userId: t.id,
                            activity: n,
                            location: P.AnalyticsLocations.CONTEXT_MENU
                        })
                    },
                    el = (l, d) => {
                        let u = E.default.getChannel(l),
                            s = null == u ? void 0 : y.default.getGuild(u.guild_id);
                        if (null != u && null != s) {
                            if (null != t) return G.sendEmbeddedActivityInviteUser({
                                channelId: u.id,
                                applicationId: d,
                                userId: t.id,
                                location: P.InstantInviteSources.CONTEXT_MENU
                            });
                            if (null != e && e.type === P.ChannelTypes.GUILD_VOICE) return (0, i.openModalLazy)(async () => {
                                let {
                                    default: t
                                } = await a.el("310688").then(a.bind(a, "310688"));
                                return a => (0, n.jsx)(t, {
                                    ...a,
                                    guild: s,
                                    channel: u,
                                    applicationId: d,
                                    analyticsLocation: e.type === P.ChannelTypes.GUILD_VOICE ? P.AnalyticsPages.GUILD_CHANNEL : P.AnalyticsPages.DM_CHANNEL,
                                    source: P.InstantInviteSources.ACTIVITY_INVITE
                                })
                            }, {
                                modalKey: "use-activity-items-embedded-invite-modal"
                            });
                            if ((null == e ? void 0 : e.id) != null) return G.sendEmbeddedActivityInvite({
                                activityChannelId: u.id,
                                invitedChannelId: e.id,
                                applicationId: d,
                                location: P.InstantInviteSources.CONTEXT_MENU
                            })
                        }
                    },
                    ei = async e => {
                        var a;
                        await u.default.join({
                            userId: t.id,
                            sessionId: e.session_id,
                            applicationId: e.application_id,
                            channelId: m.default.getVoiceChannelId(),
                            messageId: null,
                            intent: D.ActivityIntent.PLAY,
                            embedded: (0, L.default)(e, P.ActivityFlags.EMBEDDED)
                        }), (0, U.default)({
                            type: P.AnalyticsGameOpenTypes.JOIN,
                            userId: t.id,
                            applicationId: e.application_id,
                            partyId: null === (a = e.party) || void 0 === a ? void 0 : a.id,
                            locationObject: ea.location,
                            analyticsLocations: w
                        })
                    }, ed = async t => {
                        await (0, x.default)({
                            activity: t,
                            currentEmbeddedApplication: Q,
                            activityChannelId: null == e ? void 0 : e.id,
                            locationObject: ea.location,
                            embeddedActivitiesManager: Y.default,
                            analyticsLocations: w
                        })
                    }, eu = [];
                return null == K || K.forEach(a => {
                    let l = (null == t ? void 0 : t.id) != null && a.connections.has(null == t ? void 0 : t.id),
                        d = S.default.can(P.Permissions.CREATE_INSTANT_INVITE, e);
                    null != a.activity_id && !l && d && eu.push((0, n.jsx)(i.MenuItem, {
                        id: "invite-to-join-embedded",
                        label: k.default.Messages.USER_ACTIVITY_ACTION_INVITE_TO_JOIN,
                        subtext: a.name,
                        action: () => {
                            el(a.channelId, a.application_id)
                        }
                    }, "self-embedded-".concat(a.application_id)))
                }), X.forEach((e, t) => {
                    e.type === P.ActivityTypes.PLAYING && (0, L.default)(e, P.ActivityFlags.JOIN) ? eu.push((0, n.jsx)(i.MenuItem, {
                        id: "invite-to-join",
                        label: k.default.Messages.USER_ACTIVITY_ACTION_INVITE_TO_JOIN,
                        subtext: e.name,
                        action: () => en(P.ActivityActionTypes.JOIN, e)
                    }, "self".concat(t))) : e.type === P.ActivityTypes.LISTENING && (0, L.default)(e, P.ActivityFlags.SYNC) && eu.push((0, n.jsx)(i.MenuItem, {
                        id: "invite-to-listen",
                        label: k.default.Messages.USER_ACTIVITY_ACTION_INVITE_TO_LISTEN_ALONG,
                        subtext: e.name,
                        action: () => en(P.ActivityActionTypes.LISTEN, e)
                    }, "self".concat(t)))
                }), eu.length > 0 && eu.push((0, n.jsx)(i.MenuSeparator, {})), B.forEach((a, l) => {
                    if (a.type === P.ActivityTypes.PLAYING && (0, L.default)(a, P.ActivityFlags.JOIN) && null != a.session_id && null != a.application_id) {
                        if (ee[l]) {
                            let e = W[l];
                            eu.push((0, n.jsx)(i.MenuItem, {
                                id: "join",
                                label: e ? k.default.Messages.USER_ACTIVITY_JOINING : k.default.Messages.JOIN,
                                disabled: e,
                                hint: e ? (0, n.jsx)(i.Spinner, {
                                    type: i.Spinner.Type.PULSING_ELLIPSIS
                                }) : null,
                                subtext: a.name,
                                action: () => ei(a)
                            }, l))
                        } else eu.push((0, n.jsx)(i.MenuItem, {
                            id: "ask-to-join",
                            label: k.default.Messages.USER_ACTIVITY_ACTION_ASK_TO_JOIN,
                            subtext: a.name,
                            action: () => en(P.ActivityActionTypes.JOIN_REQUEST, a)
                        }, l))
                    } else if (a.type === P.ActivityTypes.LISTENING && (0, L.default)(a, P.ActivityFlags.SYNC) && null != et[l]) {
                        let d = et[l],
                            {
                                notPlayable: u,
                                playingSameTrack: s,
                                isCurrentUser: o,
                                syncingWithUser: r,
                                syncingWithParty: c
                            } = d,
                            p = o || u || s,
                            v = o || r || c;
                        eu.push((0, n.jsx)(i.MenuItem, {
                            id: "spotify-play-".concat(a.session_id),
                            action: () => (0, A.default)(d, J.SpotifyActionTypes.USER_ACTIVITY_PLAY),
                            label: (0, f.default)(d, J.SpotifyActionTypes.USER_ACTIVITY_PLAY),
                            subtext: p ? (0, I.default)(d, J.SpotifyActionTypes.USER_ACTIVITY_PLAY, null != e ? b.default.getNickname(e.guild_id, e.id, t) : void 0) : void 0,
                            disabled: p
                        }, "spotify-play-".concat(a.session_id)), (0, n.jsx)(i.MenuItem, {
                            id: "spotify-sync-".concat(a.session_id),
                            action: () => (0, _.default)(d, J.SpotifyActionTypes.USER_ACTIVITY_SYNC),
                            label: k.default.Messages.USER_ACTIVITY_LISTEN_ALONG,
                            subtext: v ? (0, I.default)(d, J.SpotifyActionTypes.USER_ACTIVITY_SYNC, null != e ? b.default.getNickname(e.guild_id, e.id, t) : void 0) : void 0,
                            disabled: v
                        }, "spotify-sync-".concat(a.session_id)))
                    }
                }), z.forEach((e, t) => {
                    var a;
                    let l = e.connections.has(null !== (a = null == H ? void 0 : H.id) && void 0 !== a ? a : ""),
                        d = t + B.length,
                        u = W[d] || l,
                        s = k.default.Messages.EMBEDDED_ACTIVITIES_JOIN_ACTIVITY;
                    l ? s = k.default.Messages.USER_ACTIVITY_CANNOT_JOIN_SELF : W[d] && (s = k.default.Messages.USER_ACTIVITY_JOINING), ee[d] && eu.push((0, n.jsx)(i.MenuItem, {
                        id: "embedded-activity-join-".concat(e.application_id),
                        label: s,
                        disabled: u,
                        hint: W[d] ? (0, n.jsx)(i.Spinner, {
                            type: i.Spinner.Type.PULSING_ELLIPSIS
                        }) : null,
                        subtext: e.name,
                        action: () => ed(e)
                    }, "embedded-activity-".concat(e.application_id)))
                }), eu
            }
        },
        493015: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return S
                }
            });
            var n = a("37983");
            a("884691");
            var l = a("77078"),
                i = a("450911"),
                d = a("272030"),
                u = a("838446"),
                s = a("158534"),
                o = a("846883"),
                r = a("812204"),
                c = a("861370"),
                f = a("972701"),
                I = a("390008"),
                p = a("936947"),
                _ = a("271938"),
                A = a("136207"),
                v = a("44141"),
                E = a("531674"),
                T = a("49111"),
                y = a("782340"),
                S = (0, s.default)((0, u.default)(function(e) {
                    let {
                        channel: t,
                        selected: u,
                        onSelect: s
                    } = e, r = t.isOwner(_.default.getId()), T = (0, v.default)(t), S = (0, E.default)(t), M = (0, A.default)(t, u), h = (0, c.default)({
                        id: t.id,
                        label: y.default.Messages.COPY_ID_CHANNEL
                    }), m = (0, o.default)(t), C = (0, f.useAddToFavoritesItem)(t), N = (0, f.useRemoveFromFavoritesItem)(t), g = (0, I.default)(t), O = (0, p.default)(t);
                    return null == t || t.isManaged() ? null : (0, n.jsxs)(l.Menu, {
                        navId: "gdm-context",
                        "aria-label": y.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
                        onClose: d.closeContextMenu,
                        onSelect: s,
                        children: [(0, n.jsx)(l.MenuGroup, {
                            children: T
                        }), (0, n.jsxs)(l.MenuGroup, {
                            children: [C, g, O]
                        }), (0, n.jsxs)(l.MenuGroup, {
                            children: [r ? (0, n.jsx)(l.MenuItem, {
                                id: "instant-invites",
                                label: y.default.Messages.INSTANT_INVITES,
                                action: () => (0, l.openModalLazy)(async () => {
                                    let {
                                        default: e
                                    } = await a.el("84279").then(a.bind(a, "84279"));
                                    return a => (0, n.jsx)(e, {
                                        channelId: t.id,
                                        ...a
                                    })
                                })
                            }) : null, (0, n.jsx)(l.MenuControlItem, {
                                id: "change-icon",
                                showDefaultFocus: !0,
                                control: (e, a) => (0, n.jsx)(l.MenuImageUploadControl, {
                                    onChange: a => {
                                        var n;
                                        i.default.setIcon(t.id, a), null === (n = e.onClose) || void 0 === n || n.call(e)
                                    },
                                    multiple: !1,
                                    "aria-label": y.default.Messages.CHANGE_ICON,
                                    ...e,
                                    ref: a
                                }),
                                label: y.default.Messages.CHANGE_ICON
                            }), null != t.icon ? (0, n.jsx)(l.MenuItem, {
                                id: "remove-icon",
                                label: y.default.Messages.REMOVE_ICON,
                                action: () => i.default.setIcon(t.id, null)
                            }) : null]
                        }), (0, n.jsx)(l.MenuGroup, {
                            children: m
                        }), (0, n.jsx)(l.MenuGroup, {
                            children: S
                        }), (0, n.jsx)(l.MenuGroup, {
                            children: M
                        }), (0, n.jsx)(l.MenuGroup, {
                            children: N
                        }), (0, n.jsx)(l.MenuGroup, {
                            children: h
                        })]
                    })
                }, {
                    object: T.AnalyticsObjects.CONTEXT_MENU
                }), [r.default.CONTEXT_MENU, r.default.GROUP_DM_MENU])
        },
        136207: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return r
                }
            });
            var n = a("37983"),
                l = a("884691"),
                i = a("77078"),
                d = a("450911"),
                u = a("254167"),
                s = a("679653"),
                o = a("782340");

            function r(e, t) {
                let a = (0, s.default)(e),
                    r = l.useCallback(() => {
                        let l = o.default.Messages.LEAVE_GROUP_DM_TITLE.format({
                                name: a
                            }),
                            s = o.default.Messages.LEAVE_GROUP_DM_BODY.format({
                                name: a
                            });
                        e.isManaged() && (l = o.default.Messages.LEAVE_GROUP_DM_MANAGED_TITLE.format({
                            name: a
                        }), s = o.default.Messages.LEAVE_GROUP_DM_MANAGED_BODY.format({
                            name: a
                        }));
                        let r = function(a) {
                            let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                            d.default.closePrivateChannel(e.id, t, n)
                        };
                        (0, i.openModal)(e => (0, n.jsx)(u.default, {
                            header: l,
                            body: s,
                            onSubmit: r,
                            ...e
                        }))
                    }, [e, a, t]);
                return (0, n.jsx)(i.MenuItem, {
                    id: "leave-channel",
                    label: o.default.Messages.LEAVE_GROUP_DM,
                    action: r,
                    color: "danger"
                })
            }
        },
        44141: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return _
                }
            }), a("222007");
            var n = a("37983");
            a("884691");
            var l = a("446674"),
                i = a("77078"),
                d = a("267363"),
                u = a("680986"),
                s = a("689275"),
                o = a("755624"),
                r = a("233069"),
                c = a("245997"),
                f = a("660478"),
                I = a("49111"),
                p = a("782340");

            function _(e) {
                let t = function(e) {
                    let t = (0, u.useUnreadThreadsCountForParent)(e.guild_id, e.id),
                        a = (0, l.useStateFromStores)([f.default, c.default, s.default, o.default], () => {
                            if (e.isForumPost()) return f.default.isForumPostUnread(e.id);
                            if (e.type !== I.ChannelTypes.GUILD_CATEGORY) return f.default.hasUnread(e.id);
                            {
                                let t = c.default.getCategories(e.getGuildId());
                                if (null == t[e.id]) return !1;
                                let a = t[e.id].some(e => {
                                    let {
                                        channel: t
                                    } = e;
                                    return (0, r.isReadableType)(t.type) && f.default.hasUnread(t.id)
                                });
                                if (a) return !0;
                                let n = new Set(t[e.id].map(e => e.channel.id)),
                                    l = s.default.getThreadsForGuild(e.guild_id);
                                for (let e in l)
                                    if (n.has(e)) {
                                        for (let t in l[e])
                                            if (o.default.hasJoined(t) && !o.default.isMuted(t) && f.default.hasUnread(t)) return !0
                                    } return !1
                            }
                        }, [e]);
                    return e.isForumLikeChannel() ? t > 0 : a
                }(e);
                return (0, n.jsx)(i.MenuItem, {
                    id: "mark-channel-read",
                    label: p.default.Messages.MARK_AS_READ,
                    action: function() {
                        (0, d.ackChannel)(e)
                    },
                    disabled: !t
                })
            }
        },
        972701: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                useAddToFavoritesItem: function() {
                    return A
                },
                useRemoveFromFavoritesItem: function() {
                    return v
                }
            }), a("222007");
            var n = a("37983");
            a("884691");
            var l = a("917351"),
                i = a.n(l),
                d = a("446674"),
                u = a("77078"),
                s = a("923959"),
                o = a("379881"),
                r = a("200008"),
                c = a("986373"),
                f = a("498139"),
                I = a("49111"),
                p = a("782340");

            function _(e, t) {
                return e.type === I.ChannelTypes.GROUP_DM ? t ? p.default.Messages.UNFAVORITE_GDM : p.default.Messages.FAVORITE_GDM : e.type === I.ChannelTypes.DM ? t ? p.default.Messages.UNFAVORITE_DM : p.default.Messages.FAVORITE_DM : t ? p.default.Messages.UNFAVORITE_CHANNEL : p.default.Messages.FAVORITE_CHANNEL
            }

            function A(e) {
                let t = (0, d.useStateFromStores)([s.default], () => s.default.getChannels(I.FAVORITES))[I.ChannelTypes.GUILD_CATEGORY],
                    [
                        [a], l
                    ] = i.partition(t, e => "null" === e.channel.id),
                    {
                        favoritesEnabled: p,
                        isFavoritesPerk: A
                    } = (0, f.useFavoritesServerExperiment)("58e21a_1"),
                    {
                        notifyFavoriteAdded: v
                    } = (0, c.useFavoriteAdded)(),
                    E = (0, d.useStateFromStores)([o.default], () => o.default.isFavorite(e.id));
                if (__OVERLAY__ || E || !p) return null;

                function T(t) {
                    v(), (0, r.addFavoriteChannel)(e.id, t)
                }
                return 0 === l.length ? (0, n.jsx)(u.MenuItem, {
                    id: "favorite-channel",
                    label: _(e, !1),
                    action: () => T(null)
                }) : (0, n.jsxs)(u.MenuItem, {
                    id: "favorite-channel",
                    label: _(e, !1),
                    action: () => T(null),
                    children: [A && (0, n.jsx)(u.MenuGroup, {
                        children: (0, n.jsx)(u.MenuItem, {
                            id: "favorite-".concat(a.channel.id),
                            label: a.channel.name,
                            action: () => T("null" === a.channel.id ? null : a.channel.id)
                        }, a.channel.id)
                    }), (0, n.jsx)(u.MenuGroup, {
                        children: l.map(e => (0, n.jsx)(u.MenuItem, {
                            id: "favorite-".concat(e.channel.id),
                            label: e.channel.name,
                            action: () => T(e.channel.id)
                        }, e.channel.id))
                    })]
                })
            }

            function v(e) {
                let t = (0, d.useStateFromStores)([o.default], () => o.default.isFavorite(e.id));
                return __OVERLAY__ || !t ? null : (0, n.jsx)(u.MenuItem, {
                    id: "favorite-channel",
                    label: _(e, !0),
                    color: "danger",
                    action: () => e.type === I.ChannelTypes.GUILD_CATEGORY ? (0, u.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await a.el("338052").then(a.bind(a, "338052"));
                        return a => (0, n.jsx)(t, {
                            ...a,
                            onConfirm: () => {
                                a.onClose(), (0, r.removeFavoriteChannel)(e.id)
                            },
                            channel: e
                        })
                    }) : (0, r.removeFavoriteChannel)(e.id)
                })
            }
        },
        390008: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return r
                }
            });
            var n = a("37983");
            a("884691");
            var l = a("446674"),
                i = a("77078"),
                d = a("162771"),
                u = a("498139"),
                s = a("49111"),
                o = a("782340");

            function r(e) {
                let t = (0, l.useStateFromStores)([d.default], () => d.default.getGuildId()),
                    r = e.type === s.ChannelTypes.GUILD_CATEGORY,
                    {
                        isFavoritesPerk: c
                    } = (0, u.useFavoritesServerExperiment)("useChannelFavoriteSetNickname");
                return __OVERLAY__ || t !== s.FAVORITES ? null : (0, n.jsx)(i.MenuItem, {
                    id: "set-channel-nickname",
                    label: c && r ? o.default.Messages.FAVORITES_RENAME_CATEGORY : o.default.Messages.CHANGE_NICKNAME,
                    action: function() {
                        (0, i.openModalLazy)(async () => {
                            let {
                                default: t
                            } = await a.el("353228").then(a.bind(a, "353228"));
                            return a => (0, n.jsx)(t, {
                                ...a,
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
        936947: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return o
                }
            });
            var n = a("37983");
            a("884691");
            var l = a("77078"),
                i = a("200008"),
                d = a("986373"),
                u = a("498139"),
                s = a("782340");

            function o(e) {
                let t = (0, d.useFavoritesGuildSelected)(),
                    a = (0, d.useFavorite)(e.id),
                    o = (0, d.useFavoritesCategories)(),
                    {
                        isFavoritesPerk: r
                    } = (0, u.useFavoritesServerExperiment)("useChannelMoveToCategory");
                if (__OVERLAY__ || !t || null == a || !r) return null;
                let c = o.filter(e => e.id !== (null == a ? void 0 : a.parentId));
                return (0, n.jsx)(l.MenuItem, {
                    id: "move-to-category",
                    label: s.default.Messages.MOVE_TO,
                    children: c.map(e => {
                        let {
                            id: t,
                            name: d
                        } = e;
                        return (0, n.jsx)(l.MenuItem, {
                            id: "favorite-".concat(t),
                            label: d,
                            action: () => {
                                var e;
                                return e = t, void(null != a && (0, i.updateFavoriteChannelParent)(a.id, e))
                            }
                        }, null != t ? t : "null")
                    })
                })
            }
        }
    }
]);