(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["69408"], {
        434657: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                LockIcon: function() {
                    return i
                }
            });
            var l = a("37983");
            a("884691");
            var n = a("669491"),
                s = a("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: a = 24,
                    color: i = n.default.colors.INTERACTIVE_NORMAL,
                    colorClass: d = "",
                    ...r
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, s.default)(r),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: a,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        fillRule: "evenodd",
                        d: "M6 9h1V6a5 5 0 0 1 10 0v3h1a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-8a3 3 0 0 1 3-3Zm9-3v3H9V6a3 3 0 1 1 6 0Zm-1 8a2 2 0 0 1-1 1.73V18a1 1 0 1 1-2 0v-2.27A2 2 0 1 1 14 14Z",
                        clipRule: "evenodd",
                        className: d
                    })
                })
            }
        },
        298878: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return d
                }
            });
            var l = a("37983");
            a("884691");
            var n = a("669491"),
                s = a("956089"),
                i = a("782340");

            function d(e) {
                let {
                    className: t,
                    color: a = n.default.unsafe_rawColors.BRAND_500.css,
                    ...d
                } = e;
                return (0, l.jsx)(s.TextBadge, {
                    ...d,
                    text: i.default.Messages.BETA,
                    color: a,
                    className: t
                })
            }
        },
        311340: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                trackReportRaidViewed: function() {
                    return _
                },
                setGuildRaidAlerts: function() {
                    return I
                },
                setGuildIncidentActions: function() {
                    return f
                },
                handleResolveRaid: function() {
                    return h
                },
                handleReportRaid: function() {
                    return E
                }
            }), a("222007");
            var l = a("866227"),
                n = a.n(l),
                s = a("872717"),
                i = a("716241"),
                d = a("592407"),
                r = a("305961"),
                u = a("599110"),
                o = a("610174"),
                c = a("49111");

            function _(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                0 !== t.length && u.default.track(c.AnalyticEvents.GUILD_RAID_REPORTED, {
                    ...(0, i.collectGuildAnalyticsMetadata)(e),
                    guild_id: e,
                    raid_types: t
                })
            }
            async function I(e, t) {
                let a = new Set(e.features);
                a.has(c.GuildFeatures.COMMUNITY) ? t ? a.delete(c.GuildFeatures.RAID_ALERTS_DISABLED) : a.add(c.GuildFeatures.RAID_ALERTS_DISABLED) : t ? a.add(c.GuildFeatures.NON_COMMUNITY_RAID_ALERTS) : a.delete(c.GuildFeatures.NON_COMMUNITY_RAID_ALERTS), await d.default.saveGuild(e.id, {
                    features: a
                }, {
                    throwErr: !0
                })
            }
            async function f(e, t, a, l) {
                let i = n().add(l, "hours").toISOString(),
                    d = await s.default.put({
                        url: c.Endpoints.GUILD_INCIDENT_ACTIONS(e),
                        body: {
                            invites_disabled_until: t ? i : null,
                            dms_disabled_until: a ? i : null
                        }
                    });
                return d
            }
            async function h(e, t, a) {
                let {
                    showAlertMode: l
                } = (0, o.getGuildAlertModeEnabled)(e), n = r.default.getGuild(e), i = null == n ? void 0 : n.getSafetyAlertsChannelId();
                if (!l || null == i) return null;
                let d = await s.default.post({
                    url: c.Endpoints.GUILD_INCIDENT_REPORT_FALSE_ALARM(e),
                    body: {
                        alert_message_id: t,
                        reason: a
                    }
                });
                return d
            }
            async function E(e) {
                let {
                    showAlertMode: t
                } = (0, o.getGuildAlertModeEnabled)(e), a = r.default.getGuild(e), l = null == a ? void 0 : a.getSafetyAlertsChannelId();
                if (!t || null == l) return null;
                let n = await s.default.post({
                    url: c.Endpoints.GUILD_INCIDENT_REPORT_RAID(e)
                });
                return n
            }
        },
        186638: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return D
                }
            }), a("222007");
            var l = a("37983"),
                n = a("884691"),
                s = a("171210"),
                i = a("446674"),
                d = a("77078"),
                r = a("298878"),
                u = a("305961"),
                o = a("45029"),
                c = a("599110"),
                _ = a("311340"),
                I = a("311161"),
                f = a("54346"),
                h = a("421127"),
                E = a("49111"),
                A = a("782340"),
                N = a("809313");

            function D(e) {
                let {
                    guildId: t,
                    transitionState: D,
                    onClose: C,
                    analyticsData: T
                } = e, R = (0, i.useStateFromStores)([u.default], () => u.default.getGuild(t), [t]), x = null == R ? void 0 : R.hasFeature(E.GuildFeatures.INVITES_DISABLED), [S] = n.useState(!1), [g, v] = n.useState(h.DEFAULT_LOCKDOWN_DURATION), L = (0, i.useStateFromStores)([f.default], () => f.default.getGuildIncident(t)), M = (0, I.hasInvitesDisabled)(L), m = (0, I.hasDMsDisabled)(L), [p, j] = n.useState(M), [G, O] = n.useState(m), [b, w] = n.useState(!1), y = p !== M || G !== m || b;
                if (null == R) return C(), null;

                function B() {
                    j(e => !e)
                }
                return (0, l.jsxs)(d.ModalRoot, {
                    transitionState: D,
                    size: d.ModalSize.MEDIUM,
                    children: [(0, l.jsx)(d.ModalHeader, {
                        separator: !0,
                        children: (0, l.jsxs)("div", {
                            className: N.headerContainer,
                            children: [(0, l.jsx)(o.default, {
                                color: s.default.INTERACTIVE_NORMAL,
                                width: 16,
                                height: 16
                            }), (0, l.jsx)(d.Heading, {
                                color: "header-primary",
                                variant: "heading-md/semibold",
                                children: A.default.Messages.GUILD_SERVER_LOCKDOWN_TITLE
                            }), (0, l.jsx)(r.default, {})]
                        })
                    }), (0, l.jsx)(d.ModalContent, {
                        children: (0, l.jsxs)("div", {
                            className: N.mainContainer,
                            children: [(0, l.jsx)(d.Select, {
                                placeholder: A.default.Messages.GUILD_SERVER_LOCKDOWN_DURATION_PLACEHOLDER,
                                options: (0, h.getTimeframes)(),
                                select: e => {
                                    v(e), w(!0)
                                },
                                isSelected: e => e === g,
                                serialize: e => String(e)
                            }), (0, l.jsxs)("div", {
                                className: N.pauseContainer,
                                children: [(0, l.jsxs)("div", {
                                    className: N.pauseText,
                                    children: [(0, l.jsx)(d.Text, {
                                        variant: "text-md/semibold",
                                        color: "header-primary",
                                        children: A.default.Messages.DISABLE_INVITES
                                    }), (0, l.jsx)(d.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        children: A.default.Messages.GUILD_INVITE_DISABLE_ACTION_SHEET_DESCRIPTION
                                    })]
                                }), (0, l.jsx)(d.Tooltip, {
                                    text: A.default.Messages.INVITES_PERMANENTLY_DISABLED_TIP,
                                    children: e => (0, l.jsx)("div", {
                                        ...e,
                                        children: (0, l.jsx)(d.Switch, {
                                            className: N.toggle,
                                            onChange: B,
                                            checked: p || x,
                                            disabled: x
                                        })
                                    })
                                })]
                            }), (0, l.jsxs)("div", {
                                className: N.pauseContainer,
                                children: [(0, l.jsxs)("div", {
                                    className: N.pauseText,
                                    children: [(0, l.jsx)(d.Text, {
                                        variant: "text-md/semibold",
                                        color: "header-primary",
                                        children: A.default.Messages.DISABLE_DMS
                                    }), (0, l.jsx)(d.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        children: A.default.Messages.GUILD_DMS_DISABLE_ACTION_SHEET_DESCRIPTION
                                    })]
                                }), (0, l.jsx)(d.Switch, {
                                    className: N.toggle,
                                    onChange: function() {
                                        O(e => !e)
                                    },
                                    checked: G
                                })]
                            })]
                        })
                    }), (0, l.jsxs)(d.ModalFooter, {
                        children: [(0, l.jsx)(d.Button, {
                            onClick: () => {
                                (M || m) && !p && !G ? ((0, _.setGuildIncidentActions)(R.id, !1, !1), (0, d.openModalLazy)(async () => {
                                    let {
                                        default: e
                                    } = await a.el("187317").then(a.bind(a, "187317"));
                                    return a => (0, l.jsx)(e, {
                                        ...a,
                                        guildId: t
                                    })
                                })) : (0, _.setGuildIncidentActions)(R.id, p, G, g);
                                let {
                                    source: e,
                                    alertType: n,
                                    messageId: s
                                } = T;
                                c.default.track(E.AnalyticEvents.GUILD_RAID_INTERVENTION_STATE_CHANGE, {
                                    guild_id: t,
                                    source: e,
                                    raid_alert_id: s,
                                    raid_alert_type: n,
                                    intervention_type_enabled: (0, I.getEnabledInterventions)(p, G),
                                    intervention_type_disabled: (0, I.getDisabledInterventions)(p, G),
                                    duration: 60 * g
                                }), C()
                            },
                            color: d.Button.Colors.BRAND_NEW,
                            look: d.Button.Looks.FILLED,
                            submitting: S,
                            disabled: !y,
                            children: A.default.Messages.GUILD_SERVER_LOCKDOWN_MODAL_CTA
                        }), (0, l.jsx)(d.Button, {
                            onClick: C,
                            color: d.Button.Colors.PRIMARY,
                            look: d.Button.Looks.LINK,
                            disabled: S,
                            children: A.default.Messages.CANCEL
                        })]
                    })]
                })
            }
        },
        45029: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return d
                }
            });
            var l = a("37983");
            a("884691");
            var n = a("469563"),
                s = a("434657"),
                i = a("75196"),
                d = (0, n.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: a = 24,
                        color: n = "currentColor",
                        className: s,
                        foreground: d,
                        ...r
                    } = e;
                    return (0, l.jsx)("svg", {
                        width: t,
                        height: a,
                        className: s,
                        viewBox: "0 0 24 24",
                        ...(0, i.default)(r),
                        children: (0, l.jsx)("path", {
                            className: d,
                            fill: n,
                            d: "M17 11V7C17 4.243 14.756 2 12 2C9.242 2 7 4.243 7 7V11C5.897 11 5 11.896 5 13V20C5 21.103 5.897 22 7 22H17C18.103 22 19 21.103 19 20V13C19 11.896 18.103 11 17 11ZM12 18C11.172 18 10.5 17.328 10.5 16.5C10.5 15.672 11.172 15 12 15C12.828 15 13.5 15.672 13.5 16.5C13.5 17.328 12.828 18 12 18ZM15 11H9V7C9 5.346 10.346 4 12 4C13.654 4 15 5.346 15 7V11Z",
                            "aria-hidden": !0
                        })
                    })
                }, s.LockIcon, void 0, {
                    size: 24
                })
        }
    }
]);