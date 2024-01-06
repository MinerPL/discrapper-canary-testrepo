(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["8181"], {
        823026: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return A
                }
            }), l("424973");
            var u = l("37983"),
                n = l("884691"),
                i = l("446674"),
                d = l("77078"),
                a = l("713841"),
                s = l("79112"),
                o = l("988721"),
                r = l("592407"),
                c = l("305961"),
                f = l("957255"),
                p = l("49111"),
                v = l("782340");

            function A(e) {
                let {
                    user: t,
                    guildId: l,
                    channel: A,
                    context: M
                } = e, E = c.default.getGuild(l), I = (0, i.useStateFromStores)([f.default], () => null != E ? f.default.can(p.Permissions.MANAGE_GUILD, E) : null), N = (0, o.useContextIndexState)(A, !0, !0), S = (0, o.useUserIndexState)(!0, !0), {
                    isUserApp: U,
                    isGuildApp: _
                } = n.useMemo(() => {
                    var e, l, u, n;
                    if ((null == t ? void 0 : t.id) == null) return {
                        isGuildApp: !1,
                        isUserApp: !1
                    };
                    let i = Object.values(null !== (u = null === (e = N.result) || void 0 === e ? void 0 : e.sections) && void 0 !== u ? u : {}),
                        d = Object.values(null !== (n = null === (l = S.result) || void 0 === l ? void 0 : l.sections) && void 0 !== n ? n : {});
                    return {
                        isGuildApp: i.some(e => {
                            var l;
                            return (null === (l = e.descriptor.application) || void 0 === l ? void 0 : l.id) === (null == t ? void 0 : t.id)
                        }),
                        isUserApp: d.some(e => {
                            var l;
                            return (null === (l = e.descriptor.application) || void 0 === l ? void 0 : l.id) === (null == t ? void 0 : t.id)
                        })
                    }
                }, [N, S, null == t ? void 0 : t.id]), G = n.useCallback(() => {
                    (null == E ? void 0 : E.id) != null && (r.default.open(E.id, p.GuildSettingsSections.INTEGRATIONS), a.default.setSection(p.IntegrationSettingsSections.APPLICATION, null == t ? void 0 : t.id))
                }, [null == t ? void 0 : t.id, null == E ? void 0 : E.id]), g = n.useCallback(() => {
                    s.default.open(p.UserSettingsSections.AUTHORIZED_APPS)
                }, []), h = M === p.AppContext.POPOUT;
                if (!(null == t ? void 0 : t.bot) || !I || h || !_ && !U) return null;
                let j = [];
                return _ && j.push((0, u.jsx)(d.MenuItem, {
                    id: "manage-integration",
                    label: v.default.Messages.MANAGE_INTEGRATION,
                    action: G
                }, "manage-integration")), U && j.push((0, u.jsx)(d.MenuItem, {
                    id: "manage-authorized-app",
                    label: v.default.Messages.MANAGE_AUTHORIZED_APP,
                    action: g
                }, "manage-authorized-app")), j
            }
        },
        539593: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return O
                }
            });
            var u = l("37983");
            l("884691");
            var n = l("77078"),
                i = l("272030"),
                d = l("838446"),
                a = l("158534"),
                s = l("846883"),
                o = l("812204"),
                r = l("861370"),
                c = l("230947"),
                f = l("823026"),
                p = l("170990"),
                v = l("304582"),
                A = l("72057"),
                M = l("300925"),
                E = l("489836"),
                I = l("406703"),
                N = l("314838"),
                S = l("383161"),
                U = l("421602"),
                _ = l("459870"),
                G = l("692986"),
                g = l("806179"),
                h = l("97508"),
                j = l("816106"),
                x = l("623879"),
                T = l("49111"),
                C = l("782340"),
                O = (0, a.default)((0, d.default)(function(e) {
                    let {
                        user: t,
                        guildId: l,
                        showModalItems: d = !0,
                        showMediaItems: a = !1,
                        showChatItems: o = !0,
                        context: O,
                        onSelect: b
                    } = e, m = (0, g.default)(t.id, l), P = (0, S.default)(t, l, O), L = (0, U.default)(t.id, O), R = (0, x.default)(t.id), k = (0, I.default)(t, O), D = (0, A.default)({
                        user: t,
                        guildId: l,
                        context: O
                    }), y = (0, v.default)(t), H = (0, j.default)(t.id), X = (0, G.default)(t.id), w = (0, c.default)({
                        guildId: l,
                        userId: t.id,
                        analyticsLocation: {
                            page: T.AnalyticsPages.GUILD_CHANNEL,
                            section: T.AnalyticsSections.CHAT_USERNAME,
                            object: T.AnalyticsObjects.CONTEXT_MENU_ITEM
                        },
                        context: O
                    }), z = (0, f.default)({
                        user: t,
                        guildId: l
                    }), B = (0, N.default)(t, l), F = (0, s.default)(null, t), Z = (0, p.default)(t), Y = (0, E.default)(t), q = (0, M.default)(t, l), J = (0, h.default)(t.id, l), K = (0, _.default)(t, l), Q = (0, r.default)({
                        id: t.id,
                        label: C.default.Messages.COPY_ID_USER
                    }), V = t.isNonUserBot();
                    return (0, u.jsxs)(n.Menu, {
                        navId: "user-context",
                        onClose: i.closeContextMenu,
                        "aria-label": C.default.Messages.USER_ACTIONS_MENU_LABEL,
                        onSelect: b,
                        children: [!V && (0, u.jsxs)(u.Fragment, {
                            children: [(0, u.jsxs)(n.MenuGroup, {
                                children: [d && m, o && P, L, k, d && D, d && y, R]
                            }), a && (0, u.jsx)(n.MenuGroup, {
                                children: H
                            }), (0, u.jsx)(n.MenuGroup, {
                                children: d && F
                            }), (0, u.jsxs)(n.MenuGroup, {
                                children: [a && X, d && w, d && B, Z, z, d && Y]
                            }), (0, u.jsx)(n.MenuGroup, {
                                children: q
                            }), (0, u.jsxs)(n.MenuGroup, {
                                children: [J, K]
                            })]
                        }), (0, u.jsx)(n.MenuGroup, {
                            children: Q
                        })]
                    })
                }, {
                    object: T.AnalyticsObjects.CONTEXT_MENU
                }), [o.default.CONTEXT_MENU, o.default.GUILD_USER_MENU])
        }
    }
]);