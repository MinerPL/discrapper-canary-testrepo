(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["34985"], {
        633043: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("77078"),
                r = n("850572"),
                u = () => (0, a.jsx)("div", {
                    className: r.loadingWrapper,
                    children: (0, a.jsx)(i.Dots, {
                        dotRadius: 4,
                        themed: !0
                    })
                })
        },
        535348: function(e, t, n) {
            "use strict";
            var a, i;
            n.r(t), n.d(t, {
                SelfStreamAndVideoAlertType: function() {
                    return a
                }
            }), (i = a || (a = {}))[i.STREAM = 0] = "STREAM", i[i.VIDEO = 1] = "VIDEO"
        },
        301603: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var a = n("446674"),
                i = n("629109"),
                r = n("271938"),
                u = n("42887"),
                l = n("49111"),
                s = n("353927");

            function o(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.MediaEngineContextTypes.DEFAULT,
                    n = (0, a.useStateFromStores)([r.default], () => r.default.getId()),
                    o = (0, a.useStateFromStores)([u.default], () => u.default.supports(s.Features.DISABLE_VIDEO) && u.default.isVideoEnabled()),
                    d = (0, a.useStateFromStores)([u.default], () => u.default.isLocalVideoDisabled(n, t), [n, t]),
                    f = null == e || e === n;
                return [f && (o || d), d, e => {
                    let a = e ? l.VideoToggleState.DISABLED : l.VideoToggleState.MANUAL_ENABLED;
                    i.default.setDisableLocalVideo(n, a, t)
                }]
            }
        },
        632616: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("452804"),
                r = n("135230"),
                u = n("535348"),
                l = n("782340");

            function s(e) {
                let {
                    type: t,
                    onConfirm: n,
                    ...s
                } = e, o = t === u.SelfStreamAndVideoAlertType.STREAM ? l.default.Messages.HIDE_SELF_STREAM_CONFIRMATION_HEADER : l.default.Messages.HIDE_SELF_VIDEO_CONFIRMATION_HEADER, d = t === u.SelfStreamAndVideoAlertType.STREAM ? l.default.Messages.HIDE_SELF_STREAM_CONFIRMATION_BODY : l.default.Messages.HIDE_SELF_VIDEO_CONFIRMATION_BODY;
                return (0, a.jsx)(r.default, {
                    confirmText: l.default.Messages.CONFIRM,
                    secondaryConfirmText: l.default.Messages.DONT_ASK_AGAIN,
                    title: o,
                    cancelText: l.default.Messages.CANCEL,
                    onConfirm: n,
                    onConfirmSecondary: () => {
                        i.default.updatedUnsyncedSettings({
                            disableHideSelfStreamAndVideoConfirmationAlert: !0
                        }), n()
                    },
                    body: d,
                    ...s
                })
            }
        },
        243288: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("446674"),
                r = n("77078"),
                u = n("255397"),
                l = n("191145"),
                s = n("782340");

            function o(e) {
                let t = (0, i.useStateFromStores)([l.default], () => l.default.getVoiceParticipantsHidden(e));
                return (0, a.jsx)(r.MenuCheckboxItem, {
                    id: "no-video-hide",
                    label: s.default.Messages.STREAM_SHOW_NON_VIDEO,
                    checked: !t,
                    action: () => u.default.toggleVoiceParticipantsHidden(e, !t)
                })
            }
        },
        321135: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            }), n("222007");
            var a = n("37983");
            n("884691");
            var i = n("446674"),
                r = n("77078"),
                u = n("168973"),
                l = n("301603"),
                s = n("632616"),
                o = n("535348"),
                d = n("353927"),
                f = n("782340");

            function c(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.MediaEngineContextTypes.DEFAULT,
                    [n, c, E] = (0, l.default)(e, t),
                    A = (0, i.useStateFromStores)([u.default], () => u.default.disableHideSelfStreamAndVideoConfirmationAlert);
                return n ? (0, a.jsx)(r.MenuCheckboxItem, {
                    id: "self-video-hide",
                    label: f.default.Messages.SHOW_SELF_VIDEO,
                    checked: !c,
                    action: () => {
                        if (A || c) return E(!c);
                        (0, r.openModal)(e => (0, a.jsx)(s.default, {
                            ...e,
                            type: o.SelfStreamAndVideoAlertType.VIDEO,
                            onConfirm: () => E(!c)
                        }))
                    }
                }) : null
            }
        },
        873254: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("446674"),
                r = n("77078"),
                u = n("648911"),
                l = n("271938"),
                s = n("42887"),
                o = n("782340"),
                d = n("431024");

            function f(e) {
                let t = (0, r.useModalContext)(),
                    f = (0, i.useStateFromStores)([s.default], () => s.default.isVideoEnabled()),
                    c = (0, i.useStateFromStores)([l.default], () => l.default.getId() === e),
                    E = (0, u.default)();
                return (!f || E) && c ? (0, a.jsx)(r.MenuItem, {
                    id: "change-video-background",
                    label: (0, a.jsx)("div", {
                        className: d.item,
                        children: f ? o.default.Messages.CAMERA_CHANGE_VIDEO_BACKGROUND_MENU_ITEM : o.default.Messages.CAMERA_PREVIEW_MENU_ITEM
                    }),
                    action: function() {
                        (0, r.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await n.el("381736").then(n.bind(n, "381736"));
                            return t => (0, a.jsx)(e, {
                                ...t,
                                videoEnabled: f
                            })
                        }, {
                            modalKey: "camera-preview",
                            contextKey: t
                        })
                    }
                }) : null
            }
        },
        200008: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                addFavoriteChannel: function() {
                    return c
                },
                removeFavoriteChannel: function() {
                    return E
                },
                setFavoriteChannelNickname: function() {
                    return A
                },
                addFavoriteCategory: function() {
                    return C
                },
                removeFavoriteCategory: function() {
                    return S
                },
                updateFavoriteChannels: function() {
                    return N
                },
                updateFavoriteChannelParent: function() {
                    return v
                },
                toggleFavoriteServerMuted: function() {
                    return p
                }
            }), n("222007");
            var a = n("249654"),
                i = n("151426"),
                r = n("872173"),
                u = n("42203"),
                l = n("957255"),
                s = n("379881"),
                o = n("843455");

            function d() {
                let e = s.default.getFavoriteChannels(),
                    t = 1;
                for (let n in e) t = Math.max(t, e[n].order);
                return t + 1
            }

            function f(e) {
                for (let t in e) {
                    let n = e[t];
                    if (null == n) {
                        delete e[t];
                        continue
                    }
                    if (n.type === i.FavoriteChannelType.CATEGORY) continue;
                    let a = u.default.getChannel(t);
                    if (null == a || !a.isPrivate() && !l.default.can(o.Permissions.VIEW_CHANNEL, a)) {
                        delete e[t];
                        continue
                    }
                }
            }

            function c(e, t) {
                let n = s.default.isFavorite(e);
                !n && r.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    n.favoriteChannels[e] = i.FavoriteChannel.create({
                        nickname: "",
                        type: i.FavoriteChannelType.REFERENCE_ORIGINAL,
                        position: d(),
                        parentId: null != t ? t : "0"
                    }), f(n.favoriteChannels)
                }, r.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function E(e) {
                let t = s.default.getFavorite(e);
                null != t && r.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    if (delete n.favoriteChannels[e], t.type === i.FavoriteChannelType.CATEGORY)
                        for (let t in n.favoriteChannels) n.favoriteChannels[t].parentId === e && (n.favoriteChannels[t].parentId = "0");
                    f(n.favoriteChannels)
                }, r.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function A(e, t) {
                let n = s.default.isFavorite(e);
                n && r.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    n.favoriteChannels[e].nickname = null != t ? t : ""
                }, r.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function C(e) {
                let t = a.default.fromTimestamp(Date.now());
                r.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    n.favoriteChannels[t] = i.FavoriteChannel.create({
                        nickname: e,
                        type: i.FavoriteChannelType.CATEGORY,
                        position: d(),
                        parentId: "0"
                    })
                }, r.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function S(e) {
                E(e)
            }

            function N(e) {
                r.PreloadedUserSettingsActionCreators.updateAsync("favorites", t => {
                    for (let a of e)
                        if (null != a.position && (t.favoriteChannels[a.id].position = a.position), void 0 !== a.parent_id) {
                            var n;
                            t.favoriteChannels[a.id].parentId = null !== (n = a.parent_id) && void 0 !== n ? n : "0"
                        }
                }, r.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function v(e, t) {
                r.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    n.favoriteChannels[e].parentId = null != t ? t : "0"
                }, r.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function p() {
                r.PreloadedUserSettingsActionCreators.updateAsync("favorites", e => {
                    e.muted = !e.muted
                }, r.UserSettingsDelay.INFREQUENT_USER_ACTION)
            }
        },
        986373: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useFavorite: function() {
                    return c
                },
                useFavoritesCategories: function() {
                    return E
                },
                useFavoritesGuildSelected: function() {
                    return A
                },
                useFavoriteAdded: function() {
                    return C
                }
            }), n("424973"), n("222007");
            var a = n("884691"),
                i = n("298386"),
                r = n("446674");
            n("42203");
            var u = n("923959"),
                l = n("162771"),
                s = n("379881"),
                o = n("498139"),
                d = n("136569"),
                f = n("49111");

            function c(e) {
                let t = (0, r.useStateFromStores)([s.default], () => s.default.getFavorite(e));
                return t
            }

            function E() {
                let e = (0, r.useStateFromStores)([u.default], () => u.default.getChannels(f.FAVORITES))[i.ChannelTypes.GUILD_CATEGORY];
                return e.map(e => ({
                    id: "null" === e.channel.id ? null : e.channel.id,
                    name: e.channel.name
                }))
            }

            function A() {
                let e = (0, r.useStateFromStores)([l.default], () => l.default.getGuildId());
                return e === f.FAVORITES
            }

            function C() {
                let {
                    isFavoritesPerk: e
                } = (0, o.useFavoritesServerExperiment)("useFavoriteAdded"), t = (0, d.useFavoritesTooltipStore)(), n = a.useCallback(() => {
                    e && t.notifyFavoriteAdded()
                }, [t, e]), i = a.useCallback(() => {
                    e && t.clearFavoriteAdded()
                }, [t, e]);
                return {
                    favoriteAdded: t.favoriteAdded,
                    notifyFavoriteAdded: n,
                    clearFavoriteAdded: i
                }
            }
        },
        136569: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useFavoritesTooltipStore: function() {
                    return i
                }
            });
            var a = n("308503");
            let i = (0, a.default)(e => ({
                favoriteAdded: !1,
                notifyFavoriteAdded: () => e({
                    favoriteAdded: !0
                }),
                clearFavoriteAdded: () => e({
                    favoriteAdded: !1
                })
            }))
        },
        823026: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            }), n("424973");
            var a = n("37983"),
                i = n("884691"),
                r = n("446674"),
                u = n("77078"),
                l = n("713841"),
                s = n("79112"),
                o = n("988721"),
                d = n("592407"),
                f = n("305961"),
                c = n("957255"),
                E = n("49111"),
                A = n("782340");

            function C(e) {
                let {
                    user: t,
                    guildId: n,
                    channel: C,
                    context: S
                } = e, N = f.default.getGuild(n), v = (0, r.useStateFromStores)([c.default], () => null != N ? c.default.can(E.Permissions.MANAGE_GUILD, N) : null), p = (0, o.useContextIndexState)(C, !0, !0), _ = (0, o.useUserIndexState)(!0, !0), {
                    isUserApp: I,
                    isGuildApp: T
                } = i.useMemo(() => {
                    var e, n, a, i;
                    if ((null == t ? void 0 : t.id) == null) return {
                        isGuildApp: !1,
                        isUserApp: !1
                    };
                    let r = Object.values(null !== (a = null === (e = p.result) || void 0 === e ? void 0 : e.sections) && void 0 !== a ? a : {}),
                        u = Object.values(null !== (i = null === (n = _.result) || void 0 === n ? void 0 : n.sections) && void 0 !== i ? i : {});
                    return {
                        isGuildApp: r.some(e => {
                            var n;
                            return (null === (n = e.descriptor.application) || void 0 === n ? void 0 : n.id) === (null == t ? void 0 : t.id)
                        }),
                        isUserApp: u.some(e => {
                            var n;
                            return (null === (n = e.descriptor.application) || void 0 === n ? void 0 : n.id) === (null == t ? void 0 : t.id)
                        })
                    }
                }, [p, _, null == t ? void 0 : t.id]), m = i.useCallback(() => {
                    (null == N ? void 0 : N.id) != null && (d.default.open(N.id, E.GuildSettingsSections.INTEGRATIONS), l.default.setSection(E.IntegrationSettingsSections.APPLICATION, null == t ? void 0 : t.id))
                }, [null == t ? void 0 : t.id, null == N ? void 0 : N.id]), g = i.useCallback(() => {
                    s.default.open(E.UserSettingsSections.AUTHORIZED_APPS)
                }, []), h = S === E.AppContext.POPOUT;
                if (!(null == t ? void 0 : t.bot) || !v || h || !T && !I) return null;
                let F = [];
                return T && F.push((0, a.jsx)(u.MenuItem, {
                    id: "manage-integration",
                    label: A.default.Messages.MANAGE_INTEGRATION,
                    action: m
                }, "manage-integration")), I && F.push((0, a.jsx)(u.MenuItem, {
                    id: "manage-authorized-app",
                    label: A.default.Messages.MANAGE_AUTHORIZED_APP,
                    action: g
                }, "manage-authorized-app")), F
            }
        },
        16108: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                acceptMessageRequest: function() {
                    return s
                },
                clearMessageRequestState: function() {
                    return o
                },
                markAsMessageRequest: function() {
                    return d
                },
                rejectMessageRequest: function() {
                    return f
                },
                rejectMessageRequestBatch: function() {
                    return c
                },
                fetchUserCountryCode: function() {
                    return E
                }
            });
            var a = n("872717"),
                i = n("913144"),
                r = n("437822"),
                u = n("773163"),
                l = n("49111");
            async function s(e) {
                await a.default.put({
                    url: l.Endpoints.CHANNEL_RECIPIENT_CONSENT(e),
                    body: {
                        consent_status: u.MessageRequestConsentStatusTypes.ACCEPTED
                    }
                }), i.default.dispatch({
                    type: "MESSAGE_REQUEST_ACCEPT_OPTIMISTIC",
                    channelId: e
                })
            }

            function o(e) {
                return a.default.put({
                    url: l.Endpoints.CHANNEL_RECIPIENT_CONSENT(e),
                    body: {
                        consent_status: u.MessageRequestConsentStatusTypes.UNSPECIFIED
                    }
                })
            }

            function d(e) {
                return a.default.put({
                    url: l.Endpoints.CHANNEL_RECIPIENT_CONSENT(e),
                    body: {
                        consent_status: u.MessageRequestConsentStatusTypes.PENDING
                    }
                })
            }

            function f(e) {
                return a.default.delete({
                    url: l.Endpoints.CHANNEL_RECIPIENT_CONSENT(e)
                })
            }

            function c(e) {
                return a.default.put({
                    url: l.Endpoints.CHANNEL_RECIPIENT_REJECT_BATCH(),
                    body: {
                        channel_ids: e
                    }
                })
            }

            function E() {
                r.default.getLocationMetadata()
            }
        },
        773163: function(e, t, n) {
            "use strict";
            var a, i;
            n.r(t), n.d(t, {
                MessageRequestConsentStatusTypes: function() {
                    return a
                }
            }), (i = a || (a = {}))[i.UNSPECIFIED = 0] = "UNSPECIFIED", i[i.PENDING = 1] = "PENDING", i[i.ACCEPTED = 2] = "ACCEPTED", i[i.REJECTED = 3] = "REJECTED"
        },
        277734: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                dismissChannelSafetyWarnings: function() {
                    return u
                },
                setChannelSafetyWarningFeedback: function() {
                    return l
                },
                clearChannelSafetyWarnings: function() {
                    return s
                }
            });
            var a = n("872717"),
                i = n("913144"),
                r = n("49111");

            function u(e, t) {
                return i.default.dispatch({
                    type: "DISMISS_CHANNEL_SAFETY_WARNINGS",
                    channelId: e,
                    warningIds: t
                }), a.default.post({
                    url: r.Endpoints.CHANNEL_SAFETY_WARNINGS_ACK(e),
                    body: {
                        warning_ids: t
                    },
                    oldFormErrors: !0
                })
            }

            function l(e, t, n) {
                i.default.dispatch({
                    type: "CHANNEL_SAFETY_WARNING_FEEDBACK",
                    channelId: e,
                    warningId: t,
                    feedbackType: n
                })
            }

            function s(e) {
                i.default.dispatch({
                    type: "CLEAR_CHANNEL_SAFETY_WARNINGS",
                    channelId: e
                })
            }
        },
        764828: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SafetyWarningTypes: function() {
                    return r
                },
                SafetyWarningFeedbackTypes: function() {
                    return u
                },
                default: function() {
                    return C
                }
            });
            var a, i, r, u, l = n("446674"),
                s = n("913144"),
                o = n("42203");
            (a = r || (r = {}))[a.STRANGER_DANGER = 1] = "STRANGER_DANGER", (i = u || (u = {}))[i.UPVOTE = 0] = "UPVOTE", i[i.DOWNVOTE = 1] = "DOWNVOTE";
            let d = [],
                f = {};

            function c(e) {
                let {
                    safetyWarnings: t
                } = e;
                null != t && (f[e.id] = t), null == t && null != f[e.id] && delete f[e.id]
            }

            function E() {
                f = {}, Object.values(o.default.getMutablePrivateChannels()).forEach(e => {
                    c(e)
                })
            }
            class A extends l.default.Store {
                initialize() {
                    this.waitFor(o.default)
                }
                getChannelSafetyWarning(e, t) {
                    var n;
                    return null === (n = f[e]) || void 0 === n ? void 0 : n.find(e => e.id === t)
                }
                getChannelSafetyWarnings(e) {
                    var t;
                    return null !== (t = f[e]) && void 0 !== t ? t : d
                }
            }
            var C = new A(s.default, {
                CHANNEL_CREATE: function(e) {
                    c(e.channel)
                },
                CHANNEL_DELETE: function(e) {
                    null != f[e.channel.id] && delete f[e.channel.id]
                },
                CHANNEL_UPDATES: function(e) {
                    e.channels.forEach(e => {
                        c(e)
                    })
                },
                CONNECTION_OPEN: E,
                CONNECTION_OPEN_SUPPLEMENTAL: E,
                CHANNEL_SAFETY_WARNING_FEEDBACK: function(e) {
                    let {
                        channelId: t,
                        warningId: n,
                        feedbackType: a
                    } = e, i = f[t];
                    null != i && (f[t] = i.map(e => e.id === n ? {
                        ...e,
                        feedback_type: a
                    } : e))
                },
                CLEAR_CHANNEL_SAFETY_WARNINGS: function(e) {
                    let {
                        channelId: t
                    } = e, n = f[t];
                    null != n && (f[t] = n.map(e => ({
                        ...e,
                        dismiss_timestamp: void 0
                    })))
                },
                DISMISS_CHANNEL_SAFETY_WARNINGS: function(e) {
                    let {
                        channelId: t,
                        warningIds: n
                    } = e, a = f[t];
                    if (null == a) return;
                    let i = Date.now().toString();
                    f[t] = a.map(e => n.includes(e.id) ? {
                        ...e,
                        dismiss_timestamp: i
                    } : e)
                }
            })
        },
        563816: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var a = n("37983"),
                i = n("884691"),
                r = n("627445"),
                u = n.n(r),
                l = n("446674"),
                s = n("77078"),
                o = n("240249"),
                d = n("916565"),
                f = n("355263"),
                c = n("633043"),
                E = n("823026"),
                A = n("305961"),
                C = n("697218"),
                S = n("317041"),
                N = n("782340"),
                v = n("205735"),
                p = e => {
                    let t, {
                            commandType: n,
                            commandTargetId: r,
                            channel: p,
                            guildId: _,
                            onHeightUpdate: I,
                            context: T
                        } = e,
                        m = (0, l.useStateFromStores)([A.default], () => A.default.getGuild(null != _ ? _ : p.guild_id)),
                        g = (0, l.useStateFromStores)([C.default], () => C.default.getUser(r)),
                        h = (0, E.default)({
                            user: g,
                            guildId: null == m ? void 0 : m.id,
                            channel: p,
                            context: T
                        }),
                        {
                            commands: F,
                            sectionDescriptors: R,
                            loading: M
                        } = o.useDiscovery(p, {
                            commandType: n
                        }, {
                            limit: S.CONTEXT_MENU_COMMANDS_QUERY_LIMIT
                        }),
                        {
                            sections: O
                        } = i.useMemo(() => {
                            let e = {};
                            return R.forEach(t => {
                                e[t.id] = t
                            }), {
                                sections: e
                            }
                        }, [R]),
                        y = i.useRef(M.current);
                    i.useEffect(() => {
                        M.current !== y.current && (y.current = M.current, null == I || I())
                    }, [M, I]);
                    let D = i.useCallback(e => {
                        u(null != p, "menu item should not show if channel is null");
                        let t = O[e.applicationId],
                            n = null != t ? (0, f.getIconComponent)(t) : void 0;
                        return (0, a.jsx)(s.MenuItem, {
                            id: e.id,
                            label: e.displayName,
                            showIconFirst: !0,
                            icon: () => null != n ? (0, a.jsx)(n, {
                                channel: p,
                                section: t,
                                width: 18,
                                height: 18,
                                selectable: !1
                            }) : null,
                            action: () => {
                                (0, d.default)({
                                    command: e,
                                    optionValues: {},
                                    context: {
                                        channel: p,
                                        guild: m
                                    },
                                    commandTargetId: r
                                })
                            }
                        }, e.id)
                    }, [p, m, r, O]);
                    return M.current ? t = (0, a.jsx)(s.MenuItem, {
                        id: "menu-commands-placeholder",
                        render: () => (0, a.jsx)(c.default, {}),
                        disabled: !0
                    }, "menu-commands-placeholder") : (t = 0 === F.length ? (0, a.jsx)(s.MenuItem, {
                        id: "menu-commands-empty",
                        label: N.default.Messages.APPLICATION_COMMAND_NO_COMMANDS,
                        disabled: !0
                    }, "menu-commands-empty") : F.map(D), null != h && (t = (0, a.jsxs)(a.Fragment, {
                        children: [t, (0, a.jsx)(s.MenuSeparator, {}, "separator"), h]
                    }))), (0, a.jsx)(s.MenuItem, {
                        id: "apps",
                        label: N.default.Messages.APPS,
                        listClassName: v.list,
                        children: t
                    })
                }
        },
        648911: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var a = n("446674"),
                i = n("42887"),
                r = n("512244");

            function u() {
                return (0, a.useStateFromStores)([i.default], () => (0, r.default)(i.default))
            }
        }
    }
]);