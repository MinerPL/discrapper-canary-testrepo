(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["222"], {
        553021: function(e, t, l) {
            "use strict";
            e.exports = l.p + "c7c4065874955761be3b.svg"
        },
        752499: function(e, t, l) {
            "use strict";
            e.exports = l.p + "a1b0a14d2f22c155a2b3.svg"
        },
        449638: function(e, t, l) {
            "use strict";
            e.exports = l.p + "a4bee30fe0b5a0f5b3c7.svg"
        },
        117809: function(e, t, l) {
            "use strict";
            e.exports = l.p + "35b075323bfac98abdee.svg"
        },
        277482: function(e, t, l) {
            "use strict";
            e.exports = l.p + "1bb2be01aece015602f7.svg"
        },
        57213: function(e, t, l) {
            "use strict";
            e.exports = l.p + "39e3f389716400ced39a.svg"
        },
        101017: function(e, t, l) {
            "use strict";
            e.exports = l.p + "76db37e93ca50f3fa98b.svg"
        },
        65757: function(e, t, l) {
            "use strict";
            e.exports = l.p + "829f8ef7dcf355fbe141.svg"
        },
        390494: function(e, t, l) {
            "use strict";
            e.exports = l.p + "3c565e38a11e3153dba0.svg"
        },
        900676: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return T
                }
            }), l("70102");
            var n = l("37983"),
                a = l("884691"),
                s = l("414456"),
                i = l.n(s),
                r = l("316693"),
                o = l("200900"),
                d = l("77078"),
                u = l("822997"),
                c = l("350625"),
                f = l("468759"),
                m = l("752736"),
                I = l("926622");
            class N extends a.PureComponent {
                getOverwriteValue(e) {
                    let {
                        allow: t,
                        deny: l
                    } = this.props;
                    if (null == t || null == l) throw Error("PermissionsForm.getOverwriteValue: Invalid allow or deny props");
                    return r.default.has(t, e) ? u.PermissionOverrideType.ALLOW : r.default.has(l, e) ? u.PermissionOverrideType.DENY : u.PermissionOverrideType.PASSTHROUGH
                }
                getPermissionValue(e, t) {
                    return r.default.has(t, e)
                }
                handleChange(e, t) {
                    let {
                        onChange: l
                    } = this.props;
                    l(e, t)
                }
                renderDisabledIndicator(e) {
                    return (0, n.jsx)(d.Tooltip, {
                        text: e,
                        position: "top",
                        color: d.Tooltip.Colors.RED,
                        children: e => (0, n.jsx)("span", {
                            ...e,
                            children: (0, n.jsx)(f.default, {
                                className: m.icon,
                                width: 18,
                                height: 18
                            })
                        })
                    })
                }
                renderComponent(e) {
                    let {
                        title: t,
                        description: l,
                        helpdeskArticleId: a,
                        flag: s
                    } = e, {
                        permissions: r,
                        locked: u,
                        permissionRender: f
                    } = this.props, I = null == f ? void 0 : f(s), N = !!(u || I), T = "string" == typeof I ? this.renderDisabledIndicator(I) : null, E = i({
                        [m.title]: null != T
                    });
                    return null == r ? (0, n.jsxs)(c.default, {
                        disabled: N,
                        value: this.getOverwriteValue(s),
                        onChange: e => this.handleChange(s, e),
                        note: (0, o.renderDescription)(l),
                        helpdeskArticleId: a,
                        children: [T, (0, n.jsx)("span", {
                            className: E,
                            children: t
                        })]
                    }, String(s)) : (0, n.jsxs)(d.FormSwitch, {
                        disabled: N,
                        value: this.getPermissionValue(s, r),
                        onChange: e => this.handleChange(s, e),
                        note: (0, o.renderDescription)(l),
                        children: [T, (0, n.jsx)("span", {
                            className: E,
                            children: t
                        })]
                    }, String(s))
                }
                render() {
                    let {
                        spec: e,
                        className: t
                    } = this.props;
                    return (0, n.jsx)(d.FormSection, {
                        className: t,
                        children: (0, n.jsxs)(d.HeadingLevel, {
                            component: (0, n.jsx)(d.FormTitle, {
                                tag: d.FormTitleTags.H5,
                                className: null != e.description ? I.marginBottom8 : I.marginBottom20,
                                children: e.title
                            }),
                            children: [null != e.description && (0, n.jsx)(d.Text, {
                                variant: "text-sm/normal",
                                color: "header-secondary",
                                className: I.marginBottom20,
                                children: e.description
                            }), e.permissions.map(this.renderComponent, this)]
                        })
                    })
                }
            }
            var T = N
        },
        202084: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                ChannelsFollowedIcon: function() {
                    return i
                }
            });
            var n = l("37983");
            l("884691");
            var a = l("669491"),
                s = l("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: l = 24,
                    color: i = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...o
                } = e;
                return (0, n.jsx)("svg", {
                    ...(0, s.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: l,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        d: "M14 10a1 1 0 1 1 0-2h3.59l-4.3-4.3a1 1 0 0 1 1.42-1.4L19 6.58V3a1 1 0 1 1 2 0v6a1 1 0 0 1-1 1h-6ZM4 2a2 2 0 0 0-2 2v5c0 1.1.9 2 2 2h5a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4ZM15 14a2 2 0 0 0-2 2v5c0 1.1.9 2 2 2h5a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2h-5ZM11 15a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v6a1 1 0 1 0 2 0v-3.59l4.3 4.3a1 1 0 0 0 1.4-1.42L6.42 16H10a1 1 0 0 0 1-1Z",
                        className: r
                    })
                })
            }
        },
        605141: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                PaperIcon: function() {
                    return i
                }
            });
            var n = l("37983");
            l("884691");
            var a = l("669491"),
                s = l("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: l = 24,
                    color: i = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...o
                } = e;
                return (0, n.jsx)("svg", {
                    ...(0, s.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: l,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm1 4a1 1 0 0 0 0 2h5a1 1 0 1 0 0-2H6Zm-1 6a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1Zm1 4a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2H6Z",
                        clipRule: "evenodd",
                        className: r
                    })
                })
            }
        },
        99637: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                WebhookIcon: function() {
                    return i
                }
            });
            var n = l("37983");
            l("884691");
            var a = l("669491"),
                s = l("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: l = 24,
                    color: i = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...o
                } = e;
                return (0, n.jsxs)("svg", {
                    ...(0, s.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: l,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, n.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        d: "m7.7 16.95 3.68-6.76a1 1 0 0 0-.5-1.4A3 3 0 1 1 15 6a1 1 0 1 0 2 0 5 5 0 1 0-7.85 4.1L5.95 16a2 2 0 1 0 1.78 3h8.54a2 2 0 1 0 0-2H7.73l-.02-.05Z",
                        className: r
                    }), (0, n.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        d: "M13.8 6.86A2 2 0 1 0 12.16 8l4.53 6.58a1 1 0 0 0 .82.43h.5a3 3 0 1 1-1.98 5.25 1 1 0 0 0-.66-.25h-.01a1 1 0 0 0-.66 1.75A4.98 4.98 0 0 0 23 18a5 5 0 0 0-4.97-5L13.8 6.86ZM5.97 13.88a1 1 0 0 1-.72 1.21 3 3 0 1 0 2.73 5.16 1 1 0 1 1 1.33 1.5A4.98 4.98 0 0 1 1 18a5 5 0 0 1 3.75-4.84 1 1 0 0 1 1.22.72Z",
                        className: r
                    })]
                })
            }
        },
        671625: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return i
                }
            });
            var n = l("37983");
            l("884691");
            var a = l("913678"),
                s = l("49111");

            function i(e) {
                let {
                    guildId: t,
                    applicationId: l,
                    applicationPrimarySkuId: i
                } = e;
                return (0, n.jsx)(a.default, {
                    guildId: t,
                    applicationId: l,
                    applicationPrimarySkuId: i,
                    analyticsLocation: s.AnalyticsLocations.GUILD_INTEGRATION_SETTINGS
                })
            }
        },
        70919: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                fetchRoleConnectionsConfiguration: function() {
                    return r
                },
                putRoleConnectionsConfigurations: function() {
                    return o
                },
                fetchUserApplicationRoleConnections: function() {
                    return d
                }
            });
            var n = l("872717"),
                a = l("913144"),
                s = l("895026"),
                i = l("49111");

            function r(e, t) {
                n.default.get({
                    url: i.Endpoints.GUILD_ROLE_CONNECTIONS_CONFIGURATION(e, t)
                }).then(e => {
                    let l = [];
                    e.body.length > 0 && (l = e.body.map(e => e.map(e => ({
                        connectionType: e.connection_type,
                        connectionMetadataField: e.connection_metadata_field,
                        applicationId: e.application_id,
                        operator: e.operator,
                        value: e.value
                    })))), a.default.dispatch({
                        type: "GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS",
                        roleId: t,
                        roleConnectionConfigurations: l
                    })
                }).catch(() => {})
            }
            async function o(e, t, l) {
                let r = l.map(e => e.map(e => ({
                        connection_type: e.connectionType,
                        connection_metadata_field: e.connectionMetadataField,
                        application_id: e.applicationId,
                        operator: e.operator,
                        value: e.value
                    }))),
                    o = await n.default.put({
                        url: i.Endpoints.GUILD_ROLE_CONNECTIONS_CONFIGURATION(e, t),
                        body: 0 === r.length ? [] : r,
                        oldFormErrors: !0
                    }).then(e => {
                        let t = [];
                        return e.body.length > 0 && (t = e.body.map(e => e.map(e => ({
                            connectionType: e.connection_type,
                            connectionMetadataField: e.connection_metadata_field,
                            applicationId: e.application_id,
                            operator: e.operator,
                            value: e.value
                        })))), t
                    }),
                    d = await (0, s.requestMembersForRole)(e, t, !1);
                null != d && a.default.dispatch({
                    type: "GUILD_ROLE_MEMBER_COUNT_UPDATE",
                    guildId: e,
                    roleId: t,
                    count: d
                }), a.default.dispatch({
                    type: "GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS",
                    roleId: t,
                    roleConnectionConfigurations: o
                })
            }
            async function d() {
                let e = await n.default.get({
                    url: i.Endpoints.APPLICATION_USER_ROLE_CONNECTIONS
                });
                return e.body
            }
        },
        69678: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return s
                }
            }), l("222007");
            var n = l("884691"),
                a = l("476042");

            function s(e) {
                let {
                    type: t,
                    index: l,
                    optionId: s,
                    onDragStart: i,
                    onDragComplete: r,
                    onDragReset: o
                } = e, [d, u] = n.useState(!1), [, c] = (0, a.useDrag)({
                    type: t,
                    item: () => (i(s), {
                        id: s,
                        position: l
                    }),
                    canDrag: () => d,
                    collect: e => ({
                        isDragging: e.isDragging()
                    }),
                    end: (e, t) => {
                        let l = t.getDropResult();
                        if (null == l) {
                            o();
                            return
                        }
                        r(l.optionId)
                    }
                }), [{
                    dragSourcePosition: f
                }, m] = (0, a.useDrop)({
                    accept: t,
                    canDrop: () => !0,
                    collect: e => {
                        let t = e.getItem();
                        return null != t && e.isOver() && e.canDrop() ? {
                            dragSourcePosition: t.position
                        } : {
                            dragSourcePosition: null
                        }
                    },
                    drop: () => ({
                        optionId: s
                    })
                });
                return {
                    drag: c,
                    dragSourcePosition: f,
                    drop: m,
                    setIsDraggable: u
                }
            }
        },
        372283: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return a
                }
            }), l("222007");
            var n = l("884691");

            function a(e, t) {
                let [l, a] = n.useState(null), s = n.useCallback(e => {
                    a(e)
                }, []), i = n.useCallback(() => {
                    a(null)
                }, []), r = n.useCallback(n => {
                    i();
                    let a = e.find(e => {
                            let {
                                id: t
                            } = e;
                            return l === t
                        }),
                        s = e.find(e => {
                            let {
                                id: t
                            } = e;
                            return n === t
                        });
                    if (null == a || null == s || a === s) return;
                    let r = [...e],
                        o = r.indexOf(a),
                        d = r.indexOf(s),
                        u = d - o > 0 ? 1 : 0;
                    r.splice(o, 1), d = r.indexOf(s), r.splice(d + u, 0, a), t(r)
                }, [e, l, i, t]);
                return {
                    draggingId: l,
                    handleDragStart: s,
                    handleDragReset: i,
                    handleDragComplete: r
                }
            }
        },
        726527: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                useHasGuildRoleItems: function() {
                    return o
                },
                default: function() {
                    return d
                }
            });
            var n = l("37983");
            l("884691");
            var a = l("77078"),
                s = l("272030"),
                i = l("694402"),
                r = l("782340");

            function o(e, t) {
                let l = (0, i.default)(e, t);
                return l.length > 0
            }

            function d(e) {
                let {
                    role: t,
                    guild: l,
                    onSelect: o
                } = e, d = (0, i.default)(l, t);
                return 0 === d.length ? null : (0, n.jsx)(a.Menu, {
                    navId: "guild-settings-role-context",
                    "aria-label": r.default.Messages.GUILD_ROLE_ACTIONS_MENU_LABEL,
                    onClose: s.closeContextMenu,
                    onSelect: o,
                    children: d
                })
            }
        },
        694402: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return I
                }
            }), l("424973");
            var n = l("37983");
            l("884691");
            var a = l("446674"),
                s = l("77078"),
                i = l("851387"),
                r = l("477566"),
                o = l("70919"),
                d = l("861370"),
                u = l("957255"),
                c = l("228220"),
                f = l("893455"),
                m = l("782340");

            function I(e, t) {
                var l;
                let I = (0, a.useStateFromStores)([u.default], () => {
                        let l = u.default.getHighestRole(e);
                        return !u.default.isRoleHigher(e, l, t)
                    }),
                    N = [],
                    T = (0, f.default)(e, t);
                null != T && N.push(T);
                let E = (0, d.default)({
                    id: t.id,
                    label: m.default.Messages.COPY_ID_ROLE
                });
                null != E && N.push(E);
                let h = (null === (l = t.tags) || void 0 === l ? void 0 : l.guild_connections) === null,
                    g = t.managed && !h,
                    p = null != t && t.id === e.id;
                return !I && !g && !p && N.push((0, n.jsx)(s.MenuGroup, {
                    children: (0, n.jsx)(s.MenuItem, {
                        id: "delete-role",
                        label: m.default.Messages.DELETE,
                        color: "danger",
                        icon: c.default,
                        action: () => {
                            r.default.show({
                                title: m.default.Messages.SETTINGS_ROLES_DELETE_TITLE,
                                body: m.default.Messages.SETTINGS_ROLES_DELETE_BODY.format({
                                    name: t.name
                                }),
                                cancelText: m.default.Messages.CANCEL,
                                onConfirm: async () => {
                                    h && await (0, o.putRoleConnectionsConfigurations)(e.id, t.id, []), i.default.deleteRole(e.id, t.id)
                                }
                            })
                        }
                    })
                }, "delete-role")), N
            }
        },
        893455: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return m
                }
            });
            var n = l("37983");
            l("884691");
            var a = l("446674"),
                s = l("77078"),
                i = l("592407"),
                r = l("479756"),
                o = l("507950"),
                d = l("957255"),
                u = l("538137"),
                c = l("49111"),
                f = l("782340");

            function m(e, t) {
                let l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c.GuildSettingsSections.ROLES,
                    m = (0, a.useStateFromStores)([d.default], () => d.default.canImpersonateRole(e, t));
                return m ? (0, n.jsx)(s.MenuItem, {
                    id: "view-as-role",
                    label: f.default.Messages.VIEW_AS_ROLE,
                    icon: u.default,
                    action: () => {
                        i.default.close(), (0, r.startImpersonating)(e.id, {
                            type: o.ImpersonateType.ROLES,
                            roles: {
                                [t.id]: t
                            },
                            returnToSection: l
                        })
                    }
                }, "view-as-role") : null
            }
        },
        952943: function(e, t, l) {
            "use strict";
            let n, a;
            l.r(t), l.d(t, {
                default: function() {
                    return P
                }
            }), l("222007"), l("424973");
            var s = l("917351"),
                i = l.n(s),
                r = l("446674"),
                o = l("913144"),
                d = l("611183"),
                u = l("957255"),
                c = l("45894"),
                f = l("900938"),
                m = l("49111");
            let I = [],
                N = [],
                T = null,
                E = null,
                h = null,
                g = !1,
                p = !1,
                S = m.FormStates.CLOSED,
                O = {},
                _ = !1,
                A = null,
                C = new Set;

            function x(e) {
                let {
                    section: t
                } = e;
                if (t !== m.GuildSettingsSections.INTEGRATIONS) return !1;
                if (a = m.IntegrationSettingsSections.OVERVIEW, null == n) {
                    let e = f.default.getGuildId();
                    null != e && d.default.fetchForGuild(e), R(!1)
                }
            }

            function R(e) {
                if (null != (n = f.default.getProps().guild) && u.default.can(m.Permissions.MANAGE_GUILD, n)) {
                    let e = f.default.getProps().integrations;
                    null == e && (p = !0), I = null != e ? e : []
                } else I = [];
                if (N = null != n && u.default.can(m.Permissions.MANAGE_WEBHOOKS, n) ? c.default.getWebhooksForGuild(n.id) : [], !e && null != E) {
                    let e = v(E.id);
                    null != e && (E = e)
                }
                if (null != h) {
                    let e = L(h.id);
                    null != e && (h = e)
                }
                T = null, S = m.FormStates.OPEN, O = {}, _ = !1
            }
            let M = i.debounce(() => {
                _ && (null != E ? i.isEqual(E, v(E.id)) && (_ = !1) : null != h && i.isEqual(h, L(h.id)) && (_ = !1), !_ && b.emitChange())
            }, 500);

            function v(e) {
                return I.find(t => {
                    let {
                        id: l
                    } = t;
                    return l === e
                })
            }

            function L(e) {
                return N.find(t => {
                    let {
                        id: l
                    } = t;
                    return l === e
                })
            }
            class j extends r.default.Store {
                initialize() {
                    this.waitFor(f.default, c.default, u.default)
                }
                hasChanges() {
                    return _
                }
                get guild() {
                    return n
                }
                get integrations() {
                    return I
                }
                get integrationIdsWithCommands() {
                    return C
                }
                get webhooks() {
                    return N
                }
                get editedCommandId() {
                    return T
                }
                get editedIntegration() {
                    return E
                }
                get editedWebhook() {
                    return h
                }
                get formState() {
                    return S
                }
                getErrors() {
                    return O
                }
                getSection() {
                    return a
                }
                getSectionId() {
                    return A
                }
                getIntegration(e) {
                    return v(e)
                }
                getWebhook(e) {
                    return L(e)
                }
                isFetching() {
                    return p || g
                }
                showNotice() {
                    return this.hasChanges()
                }
                getApplication(e) {
                    var t;
                    return null === (t = I.find(t => {
                        var l;
                        return (null === (l = t.application) || void 0 === l ? void 0 : l.id) === e
                    })) || void 0 === t ? void 0 : t.application
                }
            }
            j.displayName = "GuildSettingsIntegrationsStore";
            let b = new j(o.default, __OVERLAY__ ? {} : {
                INTEGRATION_SETTINGS_INIT: function() {
                    return R(!1)
                },
                INTEGRATION_SETTINGS_SAVE_SUCCESS: function() {
                    return R(!0)
                },
                GUILD_SETTINGS_INIT: x,
                GUILD_SETTINGS_SET_SECTION: x,
                INTEGRATION_SETTINGS_SET_SECTION: function(e) {
                    let {
                        section: t,
                        sectionId: l
                    } = e;
                    a = t, A = l
                },
                INTEGRATION_SETTINGS_START_EDITING_COMMAND: function(e) {
                    let {
                        commandId: t
                    } = e;
                    T = t, E = null, h = null, O = {}, _ = !0
                },
                INTEGRATION_SETTINGS_STOP_EDITING_COMMAND: function(e) {
                    let {
                        commandId: t
                    } = e;
                    if (null == T || T !== t) return !1;
                    T = null, O = {}, _ = !1
                },
                INTEGRATION_SETTINGS_START_EDITING_INTEGRATION: function(e) {
                    let {
                        integrationId: t
                    } = e, l = v(t);
                    if (null == l) return !1;
                    E = l, T = null, h = null, O = {}, _ = !1
                },
                INTEGRATION_SETTINGS_STOP_EDITING_INTEGRATION: function() {
                    E = null, O = {}, _ = !1
                },
                INTEGRATION_SETTINGS_UPDATE_INTEGRATION: function(e) {
                    let {
                        settings: t
                    } = e;
                    if (null == E) return !1;
                    E = {
                        ...E
                    }, null != t.enableEmoticons && E.enable_emoticons !== t.enableEmoticons && (E.enable_emoticons = t.enableEmoticons, _ = !0), null != t.expireBehavior && E.expire_behavior !== t.expireBehavior && (E.expire_behavior = t.expireBehavior, _ = !0), null != t.expireGracePeriod && E.expire_grace_period !== t.expireGracePeriod && (E.expire_grace_period = t.expireGracePeriod, _ = !0), _ && M()
                },
                INTEGRATION_SETTINGS_UPDATE_WEBHOOK: function(e) {
                    let {
                        settings: t
                    } = e;
                    if (null == h) return !1;
                    h = {
                        ...h
                    }, null != t.name && h.name !== t.name && (h.name = t.name, _ = !0), void 0 !== t.avatar && h.avatar !== t.avatar && (h.avatar = t.avatar, _ = !0), null != t.channelId && h.channel_id !== t.channelId && (h.channel_id = t.channelId, _ = !0), _ && M()
                },
                INTEGRATION_SETTINGS_START_EDITING_WEBHOOK: function(e) {
                    let {
                        webhookId: t
                    } = e, l = L(t);
                    if (null == l) return !1;
                    h = l, T = null, E = null, O = {}, _ = !1
                },
                INTEGRATION_SETTINGS_STOP_EDITING_WEBHOOK: function() {
                    h = null, O = {}, _ = !1
                },
                GUILD_SETTINGS_CLOSE: function() {
                    n = null, I = [], N = [], T = null, E = null, h = null, S = m.FormStates.CLOSED, _ = !1
                },
                GUILD_SETTINGS_LOADED_INTEGRATIONS: function(e) {
                    let {
                        guildId: t,
                        integrations: l
                    } = e;
                    if (null == n || t !== n.id || S === m.FormStates.SUBMITTING) return !1;
                    for (let e of (p = !1, l)) {
                        let t = I.find(t => {
                            let {
                                id: l
                            } = t;
                            if (l === e.id) return !0
                        });
                        if (null == t) {
                            var a, s;
                            I.push(e), e.type === (null == E ? void 0 : E.type) && (null === (a = e.account) || void 0 === a ? void 0 : a.id) === (null === (s = E.account) || void 0 === s ? void 0 : s.id) && (E = e)
                        }
                    }
                    for (let e = I.length - 1; e >= 0; e--) {
                        let t = I[e],
                            n = l.find(e => {
                                let {
                                    id: l
                                } = e;
                                if (l === t.id) return !0
                            });
                        if (null != n) {
                            let l = {
                                ...t,
                                ...n
                            };
                            (null == E ? void 0 : E.id) === l.id && (!1 === l.enabled ? E = null : !_ && (E = l)), I[e] = l
                        } else(null == E ? void 0 : E.id) === t.id && (E = null), I.splice(e, 1)
                    }
                    I = [...I], M()
                },
                GUILD_SETTINGS_LOADED_INTEGRATIONS_WITH_COMMANDS: function(e) {
                    let {
                        guildId: t,
                        integrationIds: l
                    } = e;
                    if (null == n || t !== n.id || S === m.FormStates.SUBMITTING) return !1;
                    C = new Set(l)
                },
                WEBHOOKS_UPDATE: function(e) {
                    let {
                        guildId: t,
                        channelId: l,
                        webhooks: a
                    } = e;
                    if (null == n || t !== n.id || null == a || S === m.FormStates.SUBMITTING) return !1;
                    g = !1;
                    for (let e = N.length - 1; e >= 0; e--) {
                        let t = N[e];
                        if (null != l && (null == t ? void 0 : t.channel_id) !== l) continue;
                        let n = a.find(e => {
                            let {
                                id: l
                            } = e;
                            if (l === t.id) return !0
                        });
                        if (null != n) {
                            let l = {
                                ...t,
                                ...n
                            };
                            N[e] = l, !_ && (null == h ? void 0 : h.id) === l.id && (h = l)
                        } else(null == h ? void 0 : h.id) === t.id && (h = null), N.splice(e, 1)
                    }
                    for (let e of a) {
                        let t = N.find(t => {
                            let {
                                id: l
                            } = t;
                            if (l === e.id) return !0
                        });
                        null == t && N.push(e)
                    }
                    N = [...N], M()
                },
                INTEGRATION_SETTINGS_SUBMITTING: function() {
                    S = m.FormStates.SUBMITTING, O = {}
                },
                INTEGRATION_SETTINGS_SAVE_FAILURE: function(e) {
                    var t;
                    if (S !== m.FormStates.SUBMITTING) return !1;
                    S = m.FormStates.OPEN, O = null !== (t = e.errors) && void 0 !== t ? t : {}
                }
            });
            var P = b
        },
        978900: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                filterPermissionSearchItems: function() {
                    return s
                }
            }), l("424973"), l("222007");
            var n = l("448105"),
                a = l.n(n);

            function s(e, t, l) {
                if ("" === l) return e;
                let n = l.toLowerCase(),
                    s = [];
                for (let i of e) {
                    let {
                        id: e,
                        names: r
                    } = t(i);
                    if (e === l) return [i];
                    r.some(e => a(n, e.toLowerCase())) && s.push(i)
                }
                return s
            }
        },
        683830: function(e, t, l) {
            "use strict";
            let n, a, s;
            l.r(t), l.d(t, {
                default: function() {
                    return N
                }
            }), l("222007");
            var i = l("446674"),
                r = l("913144"),
                o = l("389153"),
                d = l("892692");
            let u = {},
                c = {},
                f = !1;

            function m() {
                n = void 0, u = {}, c = {}, a = void 0, s = void 0, f = !1
            }
            class I extends i.default.Store {
                getApplicationPermissions() {
                    return u
                }
                getCommands() {
                    return c
                }
                getCommand(e) {
                    return null == c ? void 0 : c[e]
                }
                getEditedApplication() {
                    return a
                }
                getEditedCommand() {
                    return s
                }
                isUnavailable() {
                    return f
                }
                getApplicationId() {
                    return n
                }
            }
            I.displayName = "IntegrationPermissionStore";
            var N = new I(r.default, {
                LOGOUT: m,
                INTEGRATION_PERMISSION_SETTINGS_APPLICATION_PERMISSIONS_FETCH_FAILURE: function(e) {
                    let {
                        applicationId: t
                    } = e;
                    if (t !== n) return !1;
                    f = !0
                },
                INTEGRATION_PERMISSION_SETTINGS_CLEAR: m,
                INTEGRATION_PERMISSION_SETTINGS_INIT: function(e) {
                    let {
                        applicationId: t
                    } = e;
                    m(), n = t
                },
                INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE: function(e) {
                    let {
                        applicationId: t,
                        commandId: l,
                        permissions: a
                    } = e;
                    if (t !== n) return !1;
                    if (l === n) {
                        u = (0, d.keyPermissions)(a);
                        return
                    }
                    let s = c[l];
                    if (null == s) return !1;
                    c[l] = {
                        ...s,
                        permissions: (0, d.keyPermissions)(a)
                    }
                },
                INTEGRATION_PERMISSION_SETTINGS_EDIT: function(e) {
                    let {
                        applicationId: t,
                        commandId: l,
                        permissions: i
                    } = e;
                    if (t !== n) return !1;
                    l === n ? a = i : s = {
                        commandId: l,
                        permissions: i
                    }
                },
                INTEGRATION_PERMISSION_SETTINGS_RESET: function(e) {
                    let {
                        commandId: t
                    } = e;
                    null == t ? a = void 0 : s = void 0
                },
                INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_FAILURE: function(e) {
                    let {
                        applicationId: t
                    } = e;
                    if (t !== n) return !1;
                    f = !0
                },
                INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_SUCCESS: function(e) {
                    let {
                        applicationId: t,
                        commands: l,
                        permissions: a
                    } = e;
                    if (t !== n) return !1;
                    let s = Object.fromEntries(a.map(e => [e.id, e.permissions])),
                        i = {};
                    for (let e of l)
                        if (e.application_id === n) {
                            let t = (0, o.buildCommand)({
                                    rootCommand: e,
                                    command: e,
                                    applicationId: e.application_id
                                }),
                                l = s[e.id];
                            null != l && (t.permissions = (0, d.keyPermissions)(l)), i[e.id] = t
                        } c = i
                }
            })
        },
        464782: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                useIntegrationPermissionChannelSearch: function() {
                    return u
                }
            }), l("222007"), l("424973"), l("843762");
            var n = l("884691"),
                a = l("389153"),
                s = l("923959"),
                i = l("957255"),
                r = l("978900"),
                o = l("49111"),
                d = l("782340");

            function u(e) {
                let t = n.useMemo(() => {
                        let t = s.default.getChannels(e),
                            l = [...t[s.GUILD_SELECTABLE_CHANNELS_KEY]];
                        l.push(...t[0, s.GUILD_VOCAL_CHANNELS_KEY].filter(e => e.channel.isGuildVocal()));
                        let n = l.map(e => ({
                            id: e.channel.id,
                            name: e.channel.name,
                            canManage: i.default.can(o.Permissions.MANAGE_ROLES, e.channel)
                        }));
                        return n.unshift({
                            id: (0, a.allChannelsSentinel)(e),
                            name: d.default.Messages.INTEGRATIONS_APPLICATION_ALL_CHANNELS,
                            canManage: !0
                        }), n
                    }, [e]),
                    [l, u] = n.useState(""),
                    f = n.useMemo(() => {
                        let e = function(e) {
                            return e.startsWith("#") ? e.substr(1) : e
                        }(l);
                        return (0, r.filterPermissionSearchItems)(t, c, e)
                    }, [t, l]);
                return {
                    query: l,
                    results: f,
                    setQuery: u,
                    unfilteredCount: t.length
                }
            }

            function c(e) {
                return {
                    id: e.id,
                    names: [e.name]
                }
            }
        },
        106490: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                useIntegrationPermissionCommandSearch: function() {
                    return o
                }
            }), l("222007");
            var n = l("884691"),
                a = l("446674"),
                s = l("798609"),
                i = l("978900"),
                r = l("683830");

            function o() {
                let e = (0, a.useStateFromStoresObject)([r.default], () => {
                        var e;
                        return Object.values(null !== (e = r.default.getCommands()) && void 0 !== e ? e : {})
                    }),
                    [t, l] = n.useState(""),
                    o = n.useMemo(() => [...e].sort((e, t) => {
                        let l = s.ApplicationCommandType.CHAT + 1,
                            n = t.type > l ? l : t.type,
                            a = e.type > l ? l : e.type,
                            i = n - a;
                        return 0 !== i ? i : e.name.localeCompare(t.name)
                    }), [e]),
                    u = n.useMemo(() => t.startsWith("/") ? o.filter(e => e.type === s.ApplicationCommandType.CHAT) : o, [t, o]),
                    c = n.useMemo(() => t.startsWith("/") ? t.substring(1) : t, [t]),
                    f = n.useMemo(() => (0, i.filterPermissionSearchItems)(u, d, c), [u, c]);
                return {
                    query: t,
                    results: f,
                    setQuery: l,
                    unfilteredCount: e.length
                }
            }

            function d(e) {
                return {
                    id: e.id,
                    names: [e.displayName]
                }
            }
        },
        636024: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                useIntegrationPermissionMemberSearch: function() {
                    return N
                }
            }), l("424973"), l("222007"), l("843762");
            var n = l("884691"),
                a = l("627445"),
                s = l.n(a),
                i = l("316693"),
                r = l("446674"),
                o = l("26989"),
                d = l("305961"),
                u = l("957255"),
                c = l("697218"),
                f = l("991170"),
                m = l("978900"),
                I = l("49111");

            function N(e) {
                let t = (0, r.useStateFromStores)([d.default], () => d.default.getGuild(e));
                s(null != t, "guild must be present to be editing its integration settings");
                let l = (0, r.useStateFromStores)([u.default], () => u.default.getHighestRole(t)),
                    a = (0, r.useStateFromStoresArray)([o.default], () => o.default.getMembers(e), [e]),
                    N = (0, r.useStateFromStoresObject)([c.default], () => c.default.getUsers()),
                    h = (0, r.useStateFromStoresArray)([d.default], () => {
                        var t, l;
                        return Object.values(null !== (l = null === (t = d.default.getGuild(e)) || void 0 === t ? void 0 : t.roles) && void 0 !== l ? l : {})
                    }, [e]),
                    g = n.useMemo(() => {
                        let e = [];
                        for (let l of a) {
                            let n = N[l.userId];
                            if (null == n || n.bot) continue;
                            let a = n.id !== t.ownerId && !f.default.can({
                                permission: I.Permissions.ADMINISTRATOR,
                                user: n,
                                context: t
                            }) && u.default.canManageUser(I.Permissions.USE_APPLICATION_COMMANDS, n, t);
                            e.push({
                                id: n.id,
                                canManage: a,
                                nick: l.nick,
                                username: n.username
                            })
                        }
                        return e
                    }, [t, a, N]),
                    p = e => {
                        var t;
                        return e.managed && (null === (t = e.tags) || void 0 === t ? void 0 : t.bot_id) != null
                    },
                    S = n.useMemo(() => {
                        let n = [];
                        for (let a of h) {
                            if (p(a)) continue;
                            let s = !i.default.has(a.permissions, I.Permissions.ADMINISTRATOR) && u.default.isRoleHigher(t, l, a),
                                r = {
                                    id: a.id,
                                    name: a.name,
                                    canManage: s
                                };
                            a.id === e ? n.unshift(r) : n.push(r)
                        }
                        return n
                    }, [h, e, t, l]),
                    [O, _] = n.useState(""),
                    A = n.useMemo(() => {
                        let t = function(e) {
                                return e.startsWith("@") ? e.substr(1) : e
                            }(O),
                            l = O.startsWith("@") ? S.filter(t => t.id === e) : S,
                            n = (0, m.filterPermissionSearchItems)(g, T, t),
                            a = (0, m.filterPermissionSearchItems)(l, E, t);
                        return {
                            members: n,
                            roles: a
                        }
                    }, [e, g, O, S]);
                return {
                    query: O,
                    results: A,
                    setQuery: _,
                    unfilteredCount: A.members.length + A.roles.length
                }
            }

            function T(e) {
                let t = [e.username];
                return (null == e ? void 0 : e.nick) != null && t.push(e.nick), {
                    id: e.id,
                    names: t
                }
            }

            function E(e) {
                return {
                    id: e.id,
                    names: [e.name]
                }
            }
        },
        859728: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return p
                }
            }), l("424973"), l("222007");
            var n = l("884691"),
                a = l("627445"),
                s = l.n(a),
                i = l("917351"),
                r = l.n(i),
                o = l("446674"),
                d = l("713841"),
                u = l("524768"),
                c = l("389153"),
                f = l("42203"),
                m = l("305961"),
                I = l("957255"),
                N = l("697218"),
                T = l("449008"),
                E = l("683830"),
                h = l("892692"),
                g = l("49111");

            function p(e, t, l) {
                let a = (0, o.useStateFromStores)([E.default], () => E.default.getApplicationPermissions()),
                    i = n.useMemo(() => (function(e, t) {
                        let l = {
                                ...t
                            },
                            n = (0, c.allChannelsSentinel)(e),
                            a = (0, h.toPermissionKey)(n, u.ApplicationCommandPermissionType.CHANNEL),
                            s = (0, h.toPermissionKey)(e, u.ApplicationCommandPermissionType.ROLE);
                        return !(s in l) && (l[s] = {
                            id: e,
                            permission: !0,
                            type: u.ApplicationCommandPermissionType.ROLE
                        }), !(a in l) && (l[a] = {
                            id: n,
                            permission: !0,
                            type: u.ApplicationCommandPermissionType.CHANNEL
                        }), l
                    })(e, null != a ? a : {}), [a, e]),
                    p = (0, o.useStateFromStores)([E.default], () => {
                        var e;
                        if (null == l) return;
                        let t = E.default.getCommand(l);
                        return null !== (e = null == t ? void 0 : t.permissions) && void 0 !== e ? e : {}
                    }, [l]),
                    S = (0, o.useStateFromStores)([E.default], () => {
                        var e;
                        return null == l ? E.default.getEditedApplication() : null === (e = E.default.getEditedCommand()) || void 0 === e ? void 0 : e.permissions
                    }, [l]),
                    O = null != l ? l : t,
                    _ = null != l ? p : i,
                    A = n.useMemo(() => null != S ? S : {
                        ...null != _ ? _ : {}
                    }, [S, _]),
                    C = n.useMemo(() => Object.keys(A).length, [A]),
                    x = n.useMemo(() => null == _ || null == A ? null : !r.isEqual(_, A), [_, A]);
                return n.useEffect(() => {
                    O === t && (x ? d.default.startEditingCommandPermissions(O) : d.default.stopEditingCommandPermissions(O))
                }, [t, x, O]), {
                    originalApplicationPermissions: i,
                    originalCommandPermissions: p,
                    editedTargetPermissions: function(e, t) {
                        let l = (0, o.useStateFromStores)([m.default], () => m.default.getGuild(e), [e]);
                        s(null != l, "guild must be present to be editing its integration settings");
                        let a = (0, o.useStateFromStores)([I.default], () => I.default.getHighestRole(l), [l]),
                            i = (0, o.useStateFromStores)([N.default], () => {
                                var e;
                                return null === (e = N.default.getCurrentUser()) || void 0 === e ? void 0 : e.id
                            });
                        s(null != i, "useComputePermissions: currentUserId must not be null");
                        let r = i === l.ownerId,
                            {
                                channelIds: d,
                                roleIds: E,
                                userIds: h
                            } = n.useMemo(() => {
                                let e = [],
                                    l = [],
                                    n = [];
                                for (let a of Object.values(t)) a.type === u.ApplicationCommandPermissionType.CHANNEL ? e.push(a.id) : a.type === u.ApplicationCommandPermissionType.ROLE ? l.push(a.id) : a.type === u.ApplicationCommandPermissionType.USER && n.push(a.id);
                                return {
                                    channelIds: e,
                                    roleIds: l,
                                    userIds: n
                                }
                            }, [t]),
                            p = (0, o.useStateFromStoresObject)([f.default], () => Object.fromEntries(d.map(f.default.getChannel).filter(T.isNotNullish).map(e => [e.id, e])), [d]),
                            S = n.useMemo(() => Object.fromEntries(E.map(e => l.getRole(e)).filter(T.isNotNullish).map(e => [e.id, e])), [l, E]),
                            O = (0, o.useStateFromStoresObject)([N.default], () => Object.fromEntries(h.map(N.default.getUser).filter(T.isNotNullish).map(e => [e.id, e])), [h]);
                        return n.useMemo(() => {
                            let e = l.id,
                                n = (0, c.allChannelsSentinel)(l.id),
                                s = {};
                            for (let [i, o] of Object.entries(t)) {
                                let t = !1,
                                    d = !1;
                                if (o.type === u.ApplicationCommandPermissionType.CHANNEL) {
                                    let e = o.id === n,
                                        l = p[o.id];
                                    t = e || I.default.can(g.Permissions.VIEW_CHANNEL, l), d = !0
                                } else if (o.type === u.ApplicationCommandPermissionType.ROLE) {
                                    let n = o.id === e,
                                        s = S[o.id];
                                    t = n || null != s, d = r || n || I.default.isRoleHigher(l, a, s)
                                } else if (o.type === u.ApplicationCommandPermissionType.USER) {
                                    let e = O[o.id];
                                    t = null != e, d = null != e && (r || I.default.canManageUser(g.Permissions.USE_APPLICATION_COMMANDS, e, l))
                                }
                                s[i] = {
                                    ...o,
                                    canRead: t,
                                    canWrite: d
                                }
                            }
                            return s
                        }, [p, l, a, r, t, S, O])
                    }(e, A),
                    hasChanges: x,
                    selectedPermissionCount: C
                }
            }
        },
        809843: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return I
                }
            });
            var n = l("37983"),
                a = l("884691"),
                s = l("77078"),
                i = l("272030"),
                r = l("798609"),
                o = l("83910"),
                d = l("17837"),
                u = l("266926"),
                c = l("892692"),
                f = l("782340"),
                m = l("242556");

            function I(e) {
                let {
                    applicationIcon: t,
                    applicationName: I,
                    canNavigate: N,
                    command: T,
                    guildId: E
                } = e, h = a.useMemo(() => {
                    var e;
                    return 0 !== Object.keys(null !== (e = T.permissions) && void 0 !== e ? e : {}).length
                }, [T.permissions]), g = a.useCallback(() => {
                    null != T && N() && (0, s.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await l.el("555022").then(l.bind(l, "555022"));
                        return l => (0, n.jsx)(e, {
                            applicationIcon: t,
                            applicationId: T.applicationId,
                            applicationName: I,
                            command: T,
                            guildId: E,
                            ...l
                        })
                    })
                }, [t, I, N, T, E]), p = a.useCallback(e => {
                    (0, i.openContextMenuLazy)(e, async () => {
                        let {
                            default: e
                        } = await l.el("443070").then(l.bind(l, "443070"));
                        return t => (0, n.jsx)(e, {
                            ...t,
                            id: T.id,
                            label: f.default.Messages.COPY_ID_COMMAND
                        })
                    })
                }, [T]), S = T.type === r.ApplicationCommandType.CHAT ? o.default : d.default, O = (0, c.commandName)(T.type, T.displayName);
                return (0, n.jsxs)(s.Clickable, {
                    onClick: g,
                    className: m.item,
                    onContextMenu: p,
                    children: [(0, n.jsxs)("div", {
                        className: m.identifier,
                        children: [(0, n.jsx)(S, {
                            className: m.icon,
                            width: 24,
                            height: 24
                        }), (0, n.jsx)(s.Text, {
                            variant: "text-md/normal",
                            children: O
                        })]
                    }), (0, n.jsx)("div", {
                        className: m.statusContainer,
                        children: h ? (0, n.jsxs)("div", {
                            className: m.statusLine,
                            children: [(0, n.jsx)(s.Text, {
                                variant: "text-md/normal",
                                children: f.default.Messages.INTEGRATIONS_APPLICATION_COMMAND_STATUS_HAS_OVERRIDES
                            }), (0, n.jsx)(u.default, {
                                height: 18,
                                width: 18,
                                className: m.statusIcon
                            })]
                        }) : null
                    })]
                })
            }
        },
        167356: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return f
                }
            });
            var n = l("37983"),
                a = l("884691"),
                s = l("77078"),
                i = l("810567"),
                r = l("106490"),
                o = l("809843"),
                d = l("157453"),
                u = l("782340"),
                c = l("884888");

            function f(e) {
                let {
                    applicationIcon: t,
                    applicationName: l,
                    canNavigate: f,
                    guildId: m
                } = e, {
                    results: I,
                    query: N,
                    setQuery: T,
                    unfilteredCount: E
                } = (0, r.useIntegrationPermissionCommandSearch)();
                return (0, n.jsx)(a.Fragment, {
                    children: null != I && E > 0 ? (0, n.jsx)(d.default, {
                        bar: (0, n.jsx)(i.default, {
                            query: N,
                            onChange: T,
                            onClear: () => T("")
                        }),
                        inModal: !1,
                        title: u.default.Messages.COMMANDS,
                        children: I.map((e, i) => (0, n.jsxs)(a.Fragment, {
                            children: [(0, n.jsx)(o.default, {
                                applicationIcon: t,
                                applicationName: l,
                                canNavigate: f,
                                command: e,
                                guildId: m
                            }), i < I.length - 1 ? (0, n.jsx)(s.FormDivider, {}) : null]
                        }, e.id))
                    }) : (0, n.jsx)(s.Card, {
                        className: c.emptyCard,
                        editable: !0,
                        children: (0, n.jsx)(s.Text, {
                            color: "text-muted",
                            variant: "text-sm/normal",
                            children: u.default.Messages.INTEGRATIONS_APPLICATION_NO_COMMANDS
                        })
                    })
                })
            }
        },
        581511: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return v
                }
            });
            var n = l("37983"),
                a = l("884691"),
                s = l("414456"),
                i = l.n(s),
                r = l("627445"),
                o = l.n(r),
                d = l("509043"),
                u = l("446674"),
                c = l("77078"),
                f = l("272030"),
                m = l("524768"),
                I = l("389153"),
                N = l("419830"),
                T = l("405645"),
                E = l("42203"),
                h = l("26989"),
                g = l("102985"),
                p = l("697218"),
                S = l("593195"),
                O = l("45029"),
                _ = l("682344"),
                A = l("483093"),
                C = l("158998"),
                x = l("49111"),
                R = l("782340"),
                M = l("278737");

            function v(e) {
                let {
                    guild: t,
                    id: s,
                    type: i,
                    isLocked: r,
                    lockTooltipText: d
                } = e, u = !r || null != d;
                o(u, "No lockTooltipText provided while isLocked=true");
                let c = a.useCallback(e => {
                    (0, f.openContextMenuLazy)(e, async () => {
                        let {
                            default: e
                        } = await l.el("443070").then(l.bind(l, "443070"));
                        return t => (0, n.jsx)(e, {
                            ...t,
                            id: s,
                            label: R.default.Messages.COPY_ID_COMMAND
                        })
                    })
                }, [s]);
                switch (i) {
                    case m.ApplicationCommandPermissionType.CHANNEL:
                        return (0, n.jsx)(L, {
                            guild: t,
                            id: s,
                            isLocked: r,
                            lockTooltipText: d,
                            openEntryContextMenu: c
                        });
                    case m.ApplicationCommandPermissionType.ROLE:
                        return (0, n.jsx)(j, {
                            guild: t,
                            id: s,
                            isLocked: r,
                            lockTooltipText: d,
                            openEntryContextMenu: c
                        });
                    case m.ApplicationCommandPermissionType.USER:
                        return (0, n.jsx)(b, {
                            guild: t,
                            id: s,
                            isLocked: r,
                            lockTooltipText: d,
                            openEntryContextMenu: c
                        })
                }
            }

            function L(e) {
                let {
                    guild: t,
                    id: l,
                    isLocked: s,
                    lockTooltipText: r,
                    openEntryContextMenu: o
                } = e, d = (0, I.allChannelsSentinel)(t.id), {
                    icon: f,
                    name: m,
                    categoryName: T
                } = (0, u.useStateFromStoresObject)([E.default], () => {
                    if (d === l) return {
                        name: R.default.Messages.INTEGRATIONS_APPLICATION_ALL_CHANNELS,
                        icon: S.default
                    };
                    let e = E.default.getChannel(l),
                        n = (null == e ? void 0 : e.parent_id) != null ? E.default.getChannel(e.parent_id) : null,
                        a = null != e ? (0, N.getChannelIconComponent)(e, t) : null;
                    return {
                        icon: a,
                        name: null == e ? void 0 : e.name,
                        categoryName: null == n ? void 0 : n.name
                    }
                }, [d, t, l]), h = a.useCallback(e => {
                    l !== d && o(e)
                }, [d, l, o]);
                return null == f || null == m ? null : (0, n.jsxs)("div", {
                    onContextMenu: h,
                    className: M.identifier,
                    children: [(0, n.jsx)(f, {
                        width: 20,
                        height: 20,
                        className: i(M.channelIcon, M.image)
                    }), (0, n.jsx)(c.Text, {
                        className: M.roleName,
                        color: "header-primary",
                        variant: "text-md/normal",
                        children: m
                    }), null != T ? (0, n.jsxs)(c.Text, {
                        className: M.tag,
                        variant: "text-sm/normal",
                        children: ["(", T, ")"]
                    }) : null, s ? (0, n.jsx)(P, {
                        tooltipText: r
                    }) : null]
                })
            }

            function j(e) {
                var t;
                let {
                    guild: s,
                    id: r,
                    isLocked: o,
                    lockTooltipText: u
                } = e, m = null == s ? void 0 : s.getRole(r), I = (0, T.useRoleIcon)({
                    guildId: s.id,
                    roleId: r,
                    size: 24
                }), N = a.useCallback(e => {
                    null != s && null != m && (0, f.openContextMenuLazy)(e, async () => {
                        let {
                            default: e
                        } = await l.el("178521").then(l.bind(l, "178521"));
                        return t => (0, n.jsx)(e, {
                            ...t,
                            guild: s,
                            role: m
                        })
                    })
                }, [s, m]);
                return (null == m ? void 0 : m.name) == null ? null : (0, n.jsxs)("div", {
                    onContextMenu: N,
                    className: M.identifier,
                    children: [null != I ? (0, n.jsx)(A.default, {
                        className: i(M.icon, M.image),
                        ...I
                    }) : (0, n.jsx)(_.default, {
                        className: i(M.shield, M.image),
                        color: null !== (t = m.colorString) && void 0 !== t ? t : (0, d.int2hex)(x.DEFAULT_ROLE_COLOR)
                    }), (0, n.jsx)(c.Text, {
                        className: M.roleName,
                        color: "header-primary",
                        variant: "text-md/normal",
                        children: m.name
                    }), o ? (0, n.jsx)(P, {
                        tooltipText: u
                    }) : null]
                })
            }

            function b(e) {
                let {
                    guild: t,
                    id: l,
                    isLocked: a,
                    lockTooltipText: s,
                    openEntryContextMenu: i
                } = e, r = (0, u.useStateFromStores)([p.default], () => p.default.getUser(l)), o = (0, u.useStateFromStores)([h.default], () => {
                    var e;
                    return null === (e = h.default.getMember(t.id, l)) || void 0 === e ? void 0 : e.nick
                }, [t.id, l]), d = (0, u.useStateFromStores)([g.default], () => g.default.hidePersonalInformation);
                return null == r ? null : (0, n.jsxs)("div", {
                    onContextMenu: i,
                    className: M.identifier,
                    children: [(0, n.jsx)(c.Avatar, {
                        className: M.image,
                        src: r.getAvatarURL(t.id, 24),
                        "aria-label": r.username,
                        size: c.AvatarSizes.SIZE_24
                    }), (0, n.jsx)(c.Text, {
                        className: M.roleName,
                        color: "header-primary",
                        variant: "text-md/normal",
                        children: null != o ? o : r.username
                    }), d ? null : (0, n.jsx)(c.Text, {
                        className: M.tag,
                        variant: "text-sm/normal",
                        children: C.default.getUserTag(r)
                    }), a ? (0, n.jsx)(P, {
                        tooltipText: s
                    }) : null]
                })
            }

            function P(e) {
                let {
                    tooltipText: t
                } = e;
                return (0, n.jsx)(c.Tooltip, {
                    text: t,
                    children: e => (0, n.jsx)("div", {
                        className: M.lockIcon,
                        ...e,
                        children: (0, n.jsx)(O.default, {
                            width: 16,
                            height: 16
                        })
                    })
                })
            }
        },
        829319: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return P
                }
            }), l("808653"), l("222007");
            var n = l("37983"),
                a = l("884691"),
                s = l("627445"),
                i = l.n(s),
                r = l("917351"),
                o = l.n(r),
                d = l("446674"),
                u = l("77078"),
                c = l("851387"),
                f = l("716241"),
                m = l("524768"),
                I = l("389153"),
                N = l("702411"),
                T = l("15639"),
                E = l("5667"),
                h = l("271938"),
                g = l("305961"),
                p = l("697218"),
                S = l("228220"),
                O = l("599110"),
                _ = l("387111"),
                A = l("299039"),
                C = l("952943"),
                x = l("683830"),
                R = l("892692"),
                M = l("581511"),
                v = l("429310"),
                L = l("49111"),
                j = l("782340"),
                b = l("566818");

            function P(e) {
                let {
                    commandId: t,
                    editPermissions: l,
                    guildId: s,
                    noneSelectedText: r,
                    overwrites: f,
                    hasAccessToMutatePermissions: N
                } = e, E = (0, d.useStateFromStores)([g.default], () => g.default.getGuild(s), [s]);
                i(null != E, "");
                let [h, S] = a.useState(new Set), O = a.useMemo(() => {
                    let e = (0, I.allChannelsSentinel)(s),
                        t = o(E.roles).sortBy(e => e.position).reduce((e, t, l) => (e[t.id] = l, e), {});
                    return Object.values(f).filter(e => e.canRead).sort((l, n) => {
                        let a = l.type - n.type;
                        if (0 !== a) return a;
                        switch (l.type) {
                            case m.ApplicationCommandPermissionType.USER:
                                return function(e, t, l) {
                                    let n = Number(e.canWrite) - Number(t.canWrite);
                                    if (0 !== n) return n;
                                    let a = p.default.getUser(e.id),
                                        s = p.default.getUser(t.id);
                                    if (null != a && null != s) {
                                        let e = _.default.getName(l, void 0, a),
                                            t = _.default.getName(l, void 0, s);
                                        return null == e ? void 0 : e.localeCompare(t)
                                    }
                                    return A.default.compare(e.id, t.id)
                                }(l, n, s);
                            case m.ApplicationCommandPermissionType.ROLE:
                                return function(e, t, l, n) {
                                    if (e.id === l) return -1;
                                    if (t.id === l) return 1;
                                    let a = n[e.id],
                                        s = n[t.id];
                                    return a > s ? -1 : 1
                                }(l, n, s, t);
                            case m.ApplicationCommandPermissionType.CHANNEL:
                                return function(e, t, l) {
                                    if (e.id === l) return -1;
                                    if (t.id === l) return 1;
                                    let n = Number(e.canWrite) - Number(t.canWrite);
                                    return 0 !== n ? n : A.default.compare(e.id, t.id)
                                }(l, n, e)
                        }
                    })
                }, [s, f, E]), M = a.useCallback((e, t) => {
                    let n = (0, R.toPermissionKey)(e, t);
                    l({}, [n])
                }, [l]), v = a.useCallback((e, t, n) => {
                    let a = (0, R.toPermissionKey)(e, t),
                        s = f[a];
                    null != s && l({
                        [a]: {
                            id: e,
                            permission: n,
                            type: t
                        }
                    }, [])
                }, [l, f]);
                a.useEffect(() => {
                    let e = Object.values(f).filter(e => e.type === m.ApplicationCommandPermissionType.USER && !e.canRead && !h.has(e.id)).map(e => e.id);
                    0 !== e.length && (c.default.requestMembersById(s, e, !1), S(t => new Set([...t, ...e])))
                }, [s, f, h, S]);
                let L = (0, d.useStateFromStores)([x.default], () => x.default.getApplicationId()),
                    j = (0, d.useStateFromStores)([C.default], () => null == L ? void 0 : C.default.integrations.find(e => {
                        var t;
                        return (null === (t = e.application) || void 0 === t ? void 0 : t.id) === L
                    })),
                    P = (0, d.useStateFromStores)([T.default], () => void 0 !== j && T.default.canShowToggleTooltip(j.id));
                return (0, n.jsx)(a.Fragment, {
                    children: O.length > 0 ? O.map(e => (0, n.jsx)(D, {
                        guild: E,
                        commandId: t,
                        onChange: t => v(e.id, e.type, t),
                        onRemove: () => M(e.id, e.type),
                        overwrite: e,
                        integration: j,
                        canShowMigrationTooltip: P,
                        hasAccessToMutatePermissions: N
                    }, e.id)) : (0, n.jsx)("div", {
                        className: b.noItemsSelected,
                        children: (0, n.jsx)(u.Text, {
                            color: "text-muted",
                            variant: "text-sm/normal",
                            children: r
                        })
                    })
                })
            }

            function D(e) {
                var t, l, s;
                let i, {
                        guild: r,
                        commandId: o,
                        onChange: d,
                        onRemove: c,
                        overwrite: T,
                        integration: g,
                        canShowMigrationTooltip: p,
                        hasAccessToMutatePermissions: S
                    } = e,
                    _ = T.id === r.id || T.id === (0, I.allChannelsSentinel)(r.id),
                    A = null == g ? void 0 : null === (l = g.application) || void 0 === l ? void 0 : null === (t = l.bot) || void 0 === t ? void 0 : t.username,
                    C = !T.canWrite || !S,
                    x = h.default.getId();
                S ? !T.canWrite && (T.type === m.ApplicationCommandPermissionType.USER ? i = T.id === x ? j.default.Messages.INTEGRATIONS_APPLICATION_PERMISSIONS_LOCKED_USER_SELF : j.default.Messages.INTEGRATIONS_APPLICATION_PERMISSIONS_LOCKED_USER_OTHER : T.type === m.ApplicationCommandPermissionType.ROLE && (i = j.default.Messages.INTEGRATIONS_APPLICATION_PERMISSIONS_LOCKED_ROLE)) : i = null != o ? j.default.Messages.INTEGRATIONS_APPLICATION_PERMISSIONS_LOCKED_COMMAND : j.default.Messages.INTEGRATIONS_APPLICATION_PERMISSIONS_LOCKED_APPLICATION;
                let R = p && null != g && T.id === r.id && void 0 !== A && !T.permission;
                a.useEffect(() => {
                    if (R) {
                        var e;
                        O.default.track(L.AnalyticEvents.COMMANDS_MIGRATION_TOOLTIP_VIEWED, {
                            ...(0, f.collectGuildAnalyticsMetadata)(r.id),
                            application_id: null == g ? void 0 : null === (e = g.application) || void 0 === e ? void 0 : e.id,
                            location: "toggle"
                        })
                    }
                }, [r.id, null == g ? void 0 : null === (s = g.application) || void 0 === s ? void 0 : s.id, R]);
                let P = (0, n.jsx)(u.Tooltip, {
                        tooltipClassName: b.tooltip,
                        text: i,
                        shouldShow: C,
                        position: "left",
                        hideOnClick: !1,
                        children: e => (0, n.jsx)("div", {
                            ...e,
                            children: (0, n.jsx)(v.default, {
                                isDisabled: C,
                                currentValue: T.permission,
                                onChange: R ? e => {
                                    N.default.dismissToggleTooltip(null == g ? void 0 : g.id), d(e)
                                } : d
                            })
                        })
                    }),
                    D = (0, n.jsx)(u.Popout, {
                        renderPopout: () => (0, n.jsx)(u.Clickable, {
                            onClick: e => {
                                e.stopPropagation(), N.default.dismissToggleTooltip(r.id, g)
                            },
                            children: (0, n.jsx)(E.default, {
                                className: b.tooltip,
                                content: j.default.Messages.COMMANDS_SCOPE_MIGRATION_TOGGLE_TOOLTIP.format({
                                    botName: A,
                                    link: "https://discord.com/blog/welcome-to-the-new-era-of-discord-apps/"
                                }),
                                onClick: () => {}
                            })
                        }),
                        position: "bottom",
                        align: "center",
                        animation: u.Popout.Animation.TRANSLATE,
                        onRequestClose: () => N.default.dismissToggleTooltip(r.id, g),
                        shouldShow: R,
                        closeOnScroll: !0,
                        children: () => P
                    });
                return (0, n.jsxs)("div", {
                    className: b.entryItem,
                    children: [(0, n.jsx)("div", {
                        className: b.entryName,
                        children: (0, n.jsx)(M.default, {
                            guild: r,
                            id: T.id,
                            type: T.type,
                            isLocked: C,
                            lockTooltipText: i
                        })
                    }), (0, n.jsxs)("div", {
                        className: b.entryActions,
                        children: [(0, n.jsx)(y, {
                            commandId: o,
                            isSentinel: _,
                            isDisabled: !S,
                            onRemove: c
                        }), D]
                    })]
                }, T.id)
            }

            function y(e) {
                let {
                    commandId: t,
                    isSentinel: l,
                    isDisabled: a,
                    onRemove: s
                } = e;
                return a ? null : null != t || !l ? (0, n.jsx)("div", {
                    className: b.removeActions,
                    children: (0, n.jsx)(u.Clickable, {
                        className: b.removeContainer,
                        "aria-label": j.default.Messages.INTEGRATIONS_APPLICATION_PERMISSION_ENTRY_REMOVE_ARIA_LABEL,
                        onClick: s,
                        children: (0, n.jsx)(S.default, {
                            width: 24,
                            height: 24,
                            className: b.removeIcon
                        })
                    })
                }) : null
            }
        },
        29106: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return M
                }
            }), l("222007");
            var n = l("37983"),
                a = l("884691"),
                s = l("917351"),
                i = l.n(s),
                r = l("316693"),
                o = l("446674"),
                d = l("77078"),
                u = l("524768"),
                c = l("389153"),
                f = l("26989"),
                m = l("305961"),
                I = l("957255"),
                N = l("555158"),
                T = l("68238"),
                E = l("482391"),
                h = l("683830"),
                g = l("464782"),
                p = l("636024"),
                S = l("829319"),
                O = l("409645"),
                _ = l("157453"),
                A = l("49111"),
                C = l("317041"),
                x = l("782340"),
                R = l("24113");

            function M(e) {
                let {
                    applicationId: t,
                    commandId: s,
                    guildId: g,
                    inModal: p,
                    editedTargetPermissions: M,
                    originalApplicationPermissions: j,
                    originalCommandPermissions: b,
                    selectedPermissionCount: P
                } = e, D = (0, o.useStateFromStores)([h.default], () => null == s ? null : h.default.getCommand(s), [s]), y = (null == D ? void 0 : D.defaultMemberPermissions) != null, G = (0, o.useStateFromStores)([m.default, f.default, I.default], () => {
                    let e = m.default.getGuild(g),
                        t = f.default.getSelfMember(g);
                    return null != e && null != t && (0, c.hasAccess)({
                        PermissionStore: I.default,
                        guild: e,
                        selfMember: t,
                        applicationLevelPermissions: j,
                        commandLevelPermissions: b,
                        defaultMemberPermissions: null == D ? void 0 : D.defaultMemberPermissions
                    })
                }, [g, D, j, b]), B = null != s ? s : t, [H, k] = a.useMemo(() => {
                    let e = {},
                        t = {};
                    for (let [l, n] of Object.entries(M)) n.type === u.ApplicationCommandPermissionType.CHANNEL ? e[l] = n : t[l] = n;
                    return [e, t]
                }, [M]), U = a.useCallback(e => {
                    let t = m.default.getGuild(g),
                        l = f.default.getSelfMember(g);
                    return null != t && null != l && (null != s ? (0, c.hasAccess)({
                        PermissionStore: I.default,
                        guild: t,
                        selfMember: l,
                        applicationLevelPermissions: j,
                        commandLevelPermissions: e,
                        defaultMemberPermissions: null == D ? void 0 : D.defaultMemberPermissions
                    }) : (0, c.hasAccess)({
                        PermissionStore: I.default,
                        guild: t,
                        selfMember: l,
                        applicationLevelPermissions: e
                    }))
                }, [g, D, s, j]), F = a.useCallback((e, t) => {
                    var l, n;
                    let a;
                    let s = null;
                    if (0 !== t.length) {
                        let e = t[0],
                            n = M[e];
                        if (n.type === u.ApplicationCommandPermissionType.USER) a = O.InvalidAction.REMOVE_SELF;
                        else {
                            let e = n.id;
                            if (a = O.InvalidAction.REMOVE_ROLE, e === g) s = "@everyone";
                            else {
                                let t = null === (l = m.default.getGuild(g)) || void 0 === l ? void 0 : l.getRole(e);
                                s = null != t ? t.name : "role"
                            }
                        }
                    } else {
                        let t = Object.values(e)[0],
                            l = t.id;
                        if (a = O.InvalidAction.DENY_ROLE, l === g) s = "@everyone";
                        else {
                            let e = null === (n = m.default.getGuild(g)) || void 0 === n ? void 0 : n.getRole(l);
                            s = null != e ? e.name : "role"
                        }
                    }(0, O.showApplicationCommandPermissionLockoutModal)(a, s)
                }, [g, M]), w = a.useCallback((e, l) => {
                    let n = {};
                    for (let [e, t] of Object.entries(M)) n[e] = {
                        id: t.id,
                        permission: t.permission,
                        type: t.type
                    };
                    n = Object.assign(n, e), l.length > 0 && (n = i.omit(n, l));
                    let a = U(n);
                    if (!a) {
                        F(e, l);
                        return
                    }
                    E.editPermissions(t, B, n)
                }, [t, M, B, U, F]), W = a.useCallback(() => {
                    let e = Object.keys(H);
                    return (0, d.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await l.el("609789").then(l.bind(l, "609789"));
                        return l => (0, n.jsx)(t, {
                            editPermissions: w,
                            guildId: g,
                            headerText: x.default.Messages.INTEGRATIONS_APPLICATION_COMMAND_CHANNEL_ADD_BUTTON,
                            hasMemberSearch: !1,
                            overwrittenKeys: e,
                            search: v,
                            searchPlaceholderText: x.default.Messages.INTEGRATIONS_APPLICATION_COMMAND_CHANNEL_SEARCH_PLACEHOLDER,
                            selectedPermissionCount: P,
                            ...l
                        })
                    })
                }, [w, H, g, P]), V = a.useCallback(() => {
                    let e = Object.keys(k);
                    return (0, d.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await l.el("609789").then(l.bind(l, "609789"));
                        return l => (0, n.jsx)(t, {
                            editPermissions: w,
                            guildId: g,
                            hasMemberSearch: !0,
                            headerText: x.default.Messages.INTEGRATIONS_APPLICATION_COMMAND_ROLE_MEMBER_ADD_BUTTON,
                            overwrittenKeys: e,
                            search: L,
                            searchPlaceholderText: x.default.Messages.INTEGRATIONS_APPLICATION_COMMAND_ROLE_MEMBER_SEARCH_PLACEHOLDER,
                            selectedPermissionCount: P,
                            ...l
                        })
                    })
                }, [w, g, k, P]), Y = a.useCallback(() => (0, d.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await l.el("317671").then(l.bind(l, "317671")), t = D.defaultMemberPermissions;
                    return r.default.equals(t, c.DISABLED_BY_DEFAULT_PERMISSION_FLAG) && (t = A.Permissions.ADMINISTRATOR), l => (0, n.jsx)(e, {
                        ...l,
                        defaultMemberPermissions: t
                    })
                }), [D]), K = P - C.APPLICATION_COMMAND_PERMISSIONS_LIMIT, z = K >= 0, Z = [{
                    buttonClick: V,
                    buttonText: x.default.Messages.INTEGRATIONS_APPLICATION_COMMAND_ROLE_MEMBER_ADD_BUTTON,
                    noneSelectedText: x.default.Messages.INTEGRATIONS_APPLICATION_COMMAND_OVERRIDE_SECTION_ROLE_MEMBER_NO_ENTRIES,
                    overwrites: k,
                    title: null == s ? x.default.Messages.INTEGRATIONS_APPLICATION_COMMAND_ROLE_MEMBER_ADD : x.default.Messages.INTEGRATIONS_APPLICATION_COMMAND_OVERRIDE_SECTION_ROLE_MEMBER_HEADER
                }, {
                    buttonClick: W,
                    buttonText: x.default.Messages.INTEGRATIONS_APPLICATION_COMMAND_CHANNEL_ADD_BUTTON,
                    noneSelectedText: x.default.Messages.INTEGRATIONS_APPLICATION_COMMAND_OVERRIDE_SECTION_CHANNEL_NO_ENTRIES,
                    overwrites: H,
                    title: null == s ? x.default.Messages.CHANNELS : x.default.Messages.INTEGRATIONS_APPLICATION_COMMAND_OVERRIDE_SECTION_CHANNEL_HEADER
                }];
                return (0, n.jsxs)(a.Fragment, {
                    children: [K > 0 ? (0, n.jsx)(N.default, {
                        messageType: N.HelpMessageTypes.WARNING,
                        children: x.default.Messages.INTEGRATIONS_APPLICATION_PERMISSIONS_NOTICE_TEXT.format({
                            removeCount: K
                        })
                    }) : null, y ? (0, n.jsxs)("div", {
                        className: R.requiredPermissionsBanner,
                        children: [(0, n.jsx)(T.default, {
                            className: R.icon,
                            height: 18,
                            width: 18
                        }), (0, n.jsx)("span", {
                            className: R.message,
                            children: x.default.Messages.INTEGRATIONS_APPLICATION_COMMAND_DEFAULT_MEMBER_PERMISSIONS_SECTION_DESCRIPTION.format()
                        }), (0, n.jsx)(d.Button, {
                            color: d.Button.Colors.PRIMARY,
                            onClick: Y,
                            size: d.Button.Sizes.SMALL,
                            className: R.addButton,
                            children: x.default.Messages.VIEW
                        })]
                    }) : null, Z.map((e, t) => {
                        let l = t => (0, n.jsx)(d.Button, {
                                ...t,
                                color: d.Button.Colors.PRIMARY,
                                disabled: z || !G,
                                onClick: e.buttonClick,
                                size: d.Button.Sizes.TINY,
                                className: R.addButton,
                                children: e.buttonText
                            }),
                            a = null;
                        return G ? z && (a = x.default.Messages.INTEGRATIONS_APPLICATION_PERMISSIONS_MAX) : a = null != s ? x.default.Messages.INTEGRATIONS_APPLICATION_PERMISSIONS_LOCKED_COMMAND : x.default.Messages.INTEGRATIONS_APPLICATION_PERMISSIONS_LOCKED_APPLICATION, (0, n.jsx)(_.default, {
                            bar: (0, n.jsx)(d.Tooltip, {
                                tooltipClassName: R.tooltip,
                                text: a,
                                shouldShow: null != a,
                                children: e => l(e)
                            }),
                            inModal: p,
                            title: e.title,
                            children: (0, n.jsx)("div", {
                                className: p ? void 0 : R.listContainer,
                                children: (0, n.jsx)(S.default, {
                                    guildId: g,
                                    commandId: s,
                                    noneSelectedText: e.noneSelectedText,
                                    overwrites: e.overwrites,
                                    editPermissions: w,
                                    hasAccessToMutatePermissions: G
                                })
                            })
                        }, t)
                    })]
                })
            }

            function v(e) {
                let t = (0, g.useIntegrationPermissionChannelSearch)(e);
                return {
                    ...t,
                    results: t.results.map(e => ({
                        ...e,
                        type: u.ApplicationCommandPermissionType.CHANNEL
                    }))
                }
            }

            function L(e) {
                let t = (0, p.useIntegrationPermissionMemberSearch)(e);
                return {
                    ...t,
                    results: t.results.roles.map(e => ({
                        ...e,
                        type: u.ApplicationCommandPermissionType.ROLE
                    })).concat(t.results.members.map(e => ({
                        ...e,
                        type: u.ApplicationCommandPermissionType.USER
                    })))
                }
            }
        },
        429310: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return m
                }
            });
            var n = l("37983"),
                a = l("884691"),
                s = l("414456"),
                i = l.n(s),
                r = l("77078"),
                o = l("36694"),
                d = l("945330"),
                u = l("782340"),
                c = l("797962");
            let f = [!1, !0];

            function m(e) {
                let {
                    isDisabled: t,
                    currentValue: l,
                    onChange: s
                } = e, o = (0, r.useRadioGroup)({
                    orientation: "horizontal",
                    isDisabled: t
                }), d = a.useCallback(e => {
                    !t && e !== l && s(e)
                }, [t, l, s]);
                return (0, n.jsx)("div", {
                    className: i(c.group, {
                        [c.disabled]: t
                    }),
                    ...o,
                    children: f.map(e => (0, n.jsx)(I, {
                        isSelected: l === e,
                        itemValue: e,
                        onClick: () => d(e)
                    }, e.toString()))
                })
            }

            function I(e) {
                let {
                    isSelected: t,
                    itemValue: l,
                    onClick: a
                } = e, s = l ? c.allow : c.deny, f = l ? o.default : d.default, m = l ? u.default.Messages.PERMISSION_OVERRIDE_ALLOW : u.default.Messages.PERMISSION_OVERRIDE_DENY, I = (0, r.useRadioItem)({
                    isSelected: t,
                    label: m
                });
                return (0, n.jsx)(r.Clickable, {
                    className: i(c.item, s, {
                        [c.selected]: t
                    }),
                    onClick: a,
                    ...I,
                    children: (0, n.jsx)(f, {
                        width: 16,
                        height: 16
                    })
                })
            }
        },
        409645: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                InvalidAction: function() {
                    return a
                },
                showApplicationCommandPermissionLockoutModal: function() {
                    return d
                }
            });
            var n, a, s = l("404118"),
                i = l("701909"),
                r = l("49111"),
                o = l("782340");

            function d(e, t) {
                let l;
                0 === e ? l = o.default.Messages.INTEGRATIONS_APPLICATION_PERMISSIONS_SELF_DENY_MODAL_MESSAGE_REMOVE_SELF.format() : 1 === e ? l = o.default.Messages.INTEGRATIONS_APPLICATION_PERMISSIONS_SELF_DENY_MODAL_MESSAGE_REMOVE_ROLE.format({
                    name: t
                }) : 2 === e && (l = o.default.Messages.INTEGRATIONS_APPLICATION_PERMISSIONS_SELF_DENY_MODAL_MESSAGE_DENY_ROLE.format({
                    name: t
                })), s.default.show({
                    title: o.default.Messages.SELF_DENY_PERMISSION_TITLE,
                    body: l,
                    cancelText: o.default.Messages.HELP_DESK,
                    onCancel() {
                        window.open(i.default.getArticleURL(r.HelpdeskArticles.APPLICATION_COMMAND_PERMISSIONS_LOCKOUT))
                    }
                })
            }(n = a || (a = {}))[n.REMOVE_SELF = 0] = "REMOVE_SELF", n[n.REMOVE_ROLE = 1] = "REMOVE_ROLE", n[n.DENY_ROLE = 2] = "DENY_ROLE"
        },
        157453: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return o
                }
            });
            var n = l("37983");
            l("884691");
            var a = l("414456"),
                s = l.n(a),
                i = l("77078"),
                r = l("272829");

            function o(e) {
                let {
                    bar: t,
                    children: l,
                    className: a,
                    inModal: o,
                    title: d
                } = e;
                return (0, n.jsxs)(i.Card, {
                    editable: !0,
                    className: s(r.card, a, {
                        [r.inModal]: o
                    }),
                    children: [(0, n.jsxs)("div", {
                        className: s(r.cardHeader, {
                            [r.inModal]: o
                        }),
                        children: [(0, n.jsx)(i.Text, {
                            variant: "text-xs/semibold",
                            className: r.title,
                            children: d
                        }), (0, n.jsx)("div", {
                            children: t
                        })]
                    }), o ? (0, n.jsx)(i.FormDivider, {}) : null, l]
                })
            }
        },
        990241: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return T
                }
            });
            var n = l("37983"),
                a = l("884691"),
                s = l("446674"),
                i = l("77078"),
                r = l("333231"),
                o = l("83910"),
                d = l("482391"),
                u = l("683830"),
                c = l("859728"),
                f = l("167356"),
                m = l("29106"),
                I = l("782340"),
                N = l("640624");

            function T(e) {
                let {
                    application: t,
                    canNavigate: l,
                    guildId: c
                } = e, m = (0, s.useStateFromStores)([u.default], () => u.default.isUnavailable());
                return (a.useEffect(() => (d.initIntegrationPermissions(t.id), d.clearIntegrationPermissions), [t.id]), a.useEffect(() => {
                    d.getApplicationCommandPermissions(t.id, c, t.id), d.getApplicationCommands(c, t.id)
                }, [t.id, c]), m) ? null : (0, n.jsxs)(a.Fragment, {
                    children: [(0, n.jsx)(r.default, {
                        icon: (0, n.jsx)(o.default, {}),
                        title: I.default.Messages.INTEGRATIONS_APPLICATION_COMMAND_PERMISSIONS
                    }), (0, n.jsx)(i.Text, {
                        color: "text-muted",
                        variant: "text-sm/normal",
                        children: I.default.Messages.INTEGRATIONS_APPLICATION_COMMAND_PERMISSIONS_DESCRIPTION
                    }), (0, n.jsx)(E, {
                        guildId: c,
                        applicationId: t.id
                    }), (0, n.jsx)(f.default, {
                        applicationIcon: t.icon,
                        applicationName: t.name,
                        canNavigate: l,
                        guildId: c
                    })]
                })
            }

            function E(e) {
                let {
                    applicationId: t,
                    guildId: l
                } = e, {
                    originalApplicationPermissions: a,
                    editedTargetPermissions: s,
                    selectedPermissionCount: i
                } = (0, c.default)(l, t);
                return (0, n.jsx)("div", {
                    className: N.applicationPermissions,
                    children: (0, n.jsx)(m.default, {
                        applicationId: t,
                        guildId: l,
                        inModal: !1,
                        editedTargetPermissions: s,
                        originalApplicationPermissions: a,
                        selectedPermissionCount: i
                    })
                })
            }
        },
        758085: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return H
                }
            }), l("222007");
            var n = l("37983"),
                a = l("884691"),
                s = l("414456"),
                i = l.n(s),
                r = l("627445"),
                o = l.n(r),
                d = l("917351"),
                u = l.n(d),
                c = l("65597"),
                f = l("669491"),
                m = l("77078"),
                I = l("970728"),
                N = l("133403"),
                T = l("145079"),
                E = l("534291"),
                h = l("87657"),
                g = l("841098"),
                p = l("679653"),
                S = l("610174"),
                O = l("712125"),
                _ = l("54346"),
                A = l("27618"),
                C = l("697218"),
                x = l("91551"),
                R = l("941886"),
                M = l("145131"),
                v = l("423487"),
                L = l("100835"),
                j = l("49111"),
                b = l("782340"),
                P = l("322677"),
                D = l("405879"),
                y = l("926622");
            let G = {
                INVITER: 3,
                INVITE_CODE: 3,
                USES: 1,
                EXPIRES: 2
            };

            function B(e) {
                var t, l;
                let {
                    invite: a,
                    showChannel: s = !1,
                    inviteDisabled: r = !1,
                    hide: o = !1
                } = e, d = a.uses;
                return a.maxUses > 0 && (d = "".concat(a.uses, "/").concat(a.maxUses)), (0, n.jsxs)(M.default, {
                    className: i(P.inviteSettingsInviteRow, D.card, {
                        [P.inviteDisabledRow]: r
                    }),
                    children: [(0, n.jsx)(M.default, {
                        grow: G.INVITER,
                        basis: 0,
                        align: M.default.Align.CENTER,
                        className: i(P.text),
                        children: (0, n.jsxs)(M.default.Child, {
                            children: [null == (t = a.inviter) ? null : (0, n.jsxs)("div", {
                                className: P.user,
                                children: [(0, n.jsx)(h.default, {
                                    user: t,
                                    size: m.AvatarSizes.SIZE_20,
                                    className: P.avatar
                                }), (0, n.jsx)(T.default, {
                                    className: P.username,
                                    discriminatorClass: P.discriminator,
                                    user: t
                                })]
                            }), (l = a.channel, s ? (0, n.jsx)(m.Text, {
                                variant: "text-xs/normal",
                                color: "header-secondary",
                                children: (0, p.computeChannelName)(l, C.default, A.default, !0)
                            }) : null)]
                        })
                    }), (0, n.jsx)(M.default, {
                        grow: G.INVITE_CODE,
                        shrink: 1,
                        basis: 0,
                        align: M.default.Align.CENTER,
                        className: P.text,
                        children: (0, n.jsx)(m.Text, {
                            className: P.inviteCode,
                            variant: "text-sm/normal",
                            children: o ? "..." : a.code
                        })
                    }), (0, n.jsx)(M.default, {
                        grow: G.USES,
                        basis: 0,
                        justify: M.default.Justify.END,
                        align: M.default.Align.CENTER,
                        className: i(P.text),
                        children: (0, n.jsx)(m.Text, {
                            className: P.uses,
                            variant: "text-sm/normal",
                            children: d
                        })
                    }), (0, n.jsx)(M.default, {
                        grow: G.EXPIRES,
                        basis: 0,
                        align: M.default.Align.CENTER,
                        justify: M.default.Justify.END,
                        className: i(P.text, P.countdownColumn),
                        children: (0, n.jsx)(m.Text, {
                            className: P.countdown,
                            variant: "text-sm/normal",
                            children: (0, n.jsx)(x.default, {
                                deadline: a.getExpiresAt()
                            })
                        })
                    }), (0, n.jsx)(N.default, {
                        className: P.revokeInvite,
                        onClick: () => {
                            I.default.revokeInvite(a)
                        }
                    })]
                })
            }

            function H(e) {
                let {
                    invites: t,
                    guild: s,
                    hide: i,
                    channel: r = null,
                    showChannel: d = !1,
                    loading: I = !1,
                    canCreateInvites: N = !1
                } = e;
                o(null != s, "guild is required");
                let T = (0, L.useInvitesDisabledPermission)(s),
                    {
                        enableInvitesDisabled: h
                    } = (0, L.useInvitesDisabledExperiment)(s),
                    {
                        showAlertMode: p
                    } = (0, S.useGuildAlertModeEnabled)(s.id),
                    A = (0, c.default)([_.default], () => _.default.getGuildIncident(s.id)),
                    C = s.hasFeature(j.GuildFeatures.INVITES_DISABLED) || p && (null == A ? void 0 : A.invitesDisabledUntil) != null && new Date(A.invitesDisabledUntil) > new Date,
                    [x, D] = a.useState(!1);
                a.useEffect(() => {
                    T && L.InvitesDisabledExperiment.trackExposure({
                        guildId: s.id,
                        location: "5c23b0_1"
                    })
                }, [T, h, s.id]);
                let H = (0, g.default)(),
                    k = a.useMemo(() => null == t || I ? [] : u(t).sortBy(e => {
                        var t, l;
                        return (null !== (l = null === (t = e.inviter) || void 0 === t ? void 0 : t.username) && void 0 !== l ? l : "").toLowerCase()
                    }).value(), [t, I]),
                    U = () => {
                        (0, m.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await l.el("310688").then(l.bind(l, "310688"));
                            return t => (0, n.jsx)(e, {
                                ...t,
                                channel: r,
                                guild: s,
                                source: j.InstantInviteSources.SETTINGS_INVITE
                            })
                        })
                    },
                    F = async e => {
                        if (!x) {
                            D(!0);
                            try {
                                await (0, L.setInvitesDisabled)(s, e)
                            } catch (e) {} finally {
                                D(!1)
                            }
                        }
                    }, w = () => {
                        if (p) {
                            let e = {
                                source: O.GuildIncidentActionSources.GUILD_SETTINGS
                            };
                            (0, m.openModalLazy)(async () => {
                                let {
                                    default: t
                                } = await l.el("186638").then(l.bind(l, "186638"));
                                return l => (0, n.jsx)(t, {
                                    ...l,
                                    guildId: s.id,
                                    analyticsData: e
                                })
                            })
                        } else C ? F(!1) : (0, m.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await l.el("581517").then(l.bind(l, "581517"));
                            return function(t) {
                                return (0, n.jsx)(e, {
                                    ...t,
                                    onConfirm: () => F(!0)
                                })
                            }
                        })
                    };
                return (0, n.jsx)(E.ListContentScroller, {
                    sections: [Math.max(1, k.length)],
                    renderSection: () => {
                        let e;
                        return e = 0 !== k.length || I ? (0, n.jsxs)(M.default, {
                            children: [(0, n.jsx)(M.default.Child, {
                                grow: G.INVITER,
                                basis: 0,
                                className: y.marginReset,
                                children: (0, n.jsx)(m.FormTitle, {
                                    children: b.default.Messages.INSTANT_INVITE_INVITER
                                })
                            }), (0, n.jsx)(M.default.Child, {
                                basis: 0,
                                grow: G.INVITE_CODE,
                                className: y.marginReset,
                                children: (0, n.jsx)(m.FormTitle, {
                                    children: b.default.Messages.INSTANT_INVITE_INVITE_CODE
                                })
                            }), (0, n.jsx)(M.default.Child, {
                                grow: G.USES,
                                basis: 0,
                                className: P.textAlignRight,
                                children: (0, n.jsx)(m.FormTitle, {
                                    children: b.default.Messages.INSTANT_INVITE_USES
                                })
                            }), (0, n.jsx)(M.default.Child, {
                                grow: G.EXPIRES,
                                basis: 0,
                                className: P.textAlignRight,
                                children: (0, n.jsx)(m.FormTitle, {
                                    children: b.default.Messages.INSTANT_INVITE_EXPIRES
                                })
                            })]
                        }) : (0, n.jsxs)(R.default, {
                            theme: H,
                            children: [(0, n.jsx)(R.EmptyStateImage, {
                                darkSrc: l("553021"),
                                lightSrc: l("752499"),
                                width: 256,
                                height: 130
                            }), (0, n.jsx)(R.EmptyStateText, {
                                note: b.default.Messages.NO_INVITES_BODY,
                                children: b.default.Messages.NO_INVITES_LABEL
                            })]
                        }), (0, n.jsx)(m.FormSection, {
                            className: P.headerSection,
                            children: (0, n.jsxs)(m.HeadingLevel, {
                                component: (0, n.jsx)(m.FormTitle, {
                                    tag: m.FormTitleTags.H1,
                                    children: b.default.Messages.INVITES
                                }),
                                children: [(0, n.jsx)(m.FormText, {
                                    className: y.marginBottom20,
                                    type: m.FormTextTypes.DESCRIPTION,
                                    children: N ? b.default.Messages.SETTINGS_INVITE_TIP.format({
                                        onCreateInvite: U
                                    }) : b.default.Messages.SETTINGS_INVITE_TIP_WITHOUT_CREATE
                                }), (h || p || C) && (0, n.jsxs)("div", {
                                    className: P.inviteDisabledContainer,
                                    children: [(0, n.jsx)(m.Button, {
                                        size: m.Button.Sizes.SMALL,
                                        color: C ? m.Button.Colors.BRAND : m.Button.Colors.RED,
                                        disabled: !T,
                                        submitting: x,
                                        onClick: w,
                                        children: C ? b.default.Messages.ENABLE_INVITES : b.default.Messages.DISABLE_INVITES
                                    }), C && (0, n.jsxs)("div", {
                                        className: P.inviteDisabledTip,
                                        children: [(0, n.jsx)(v.default, {
                                            color: f.default.unsafe_rawColors.YELLOW_300.css
                                        }), (0, n.jsx)(m.Text, {
                                            variant: "text-sm/normal",
                                            children: b.default.Messages.INVITES_DISABLED_TIP
                                        })]
                                    })]
                                }), (0, n.jsx)(m.FormDivider, {
                                    className: P.headerDivider
                                }), e]
                            })
                        }, "header")
                    },
                    renderRow: e => {
                        let {
                            section: t,
                            row: l
                        } = e;
                        if (0 === k.length && 0 === l && I) return (0, n.jsx)(m.Spinner, {
                            className: y.marginTop20,
                            type: m.Spinner.Type.SPINNING_CIRCLE
                        }, "spinner");
                        if (t > 0) return null;
                        let a = k[l];
                        return null == a ? null : (0, n.jsx)(B, {
                            hide: i,
                            invite: a,
                            showChannel: d,
                            inviteDisabled: C
                        }, a.code)
                    },
                    rowHeight: (e, t) => e > 0 ? 0 : 0 === k.length && 0 === t && I ? 62 : null != k[t] ? 62 : 0,
                    sectionHeight: () => 0 !== k.length || I ? 120 : 344
                })
            }
        },
        608684: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                ImageUploaderIcon: function() {
                    return N
                },
                default: function() {
                    return E
                }
            }), l("222007");
            var n = l("37983"),
                a = l("884691"),
                s = l("414456"),
                i = l.n(s),
                r = l("627445"),
                o = l.n(r),
                d = l("77078"),
                u = l("159885"),
                c = l("694187"),
                f = l("49111"),
                m = l("782340"),
                I = l("911686");

            function N(e) {
                let {
                    className: t,
                    icon: l = null
                } = e;
                return (0, n.jsx)("div", {
                    className: i(I.imageUploaderIcon, t),
                    children: l
                })
            }
            class T extends a.PureComponent {
                handleExternalFileChange(e) {
                    o(null != this.inputRef.current, "ImageInputRef asked to handleExternalFileChange when not mounted"), this.inputRef.current.handleFileChange(e)
                }
                render() {
                    var e;
                    let t, l, a, s;
                    let {
                        image: r,
                        hint: o,
                        name: T,
                        makeURL: E,
                        disabled: h,
                        onChange: g,
                        showIcon: p,
                        showIconDisabled: S,
                        className: O,
                        imageClassName: _,
                        iconClassName: A,
                        iconWrapperClassName: C,
                        icon: x,
                        hideSize: R,
                        imageStyle: M,
                        showRemoveButton: v,
                        maxFileSizeBytes: L,
                        onFileSizeError: j,
                        onOpenImageSelectModal: b,
                        "aria-label": P
                    } = this.props;
                    if (null != (t = null != r && /^data:/.test(r) ? r : E(r)) ? l = 'url("'.concat(t, '")') : null != T && (a = (0, n.jsx)("div", {
                            className: I.imageUploaderAcronym,
                            children: (0, u.getAcronym)(T)
                        })), h) return (0, n.jsx)("div", {
                        className: i(I.imageUploader, I.disabled, O),
                        children: (0, n.jsxs)("div", {
                            className: i(I.imageUploaderInner, _),
                            style: {
                                ...M,
                                backgroundImage: l
                            },
                            children: [a, S && (0, n.jsx)("div", {
                                className: i(I.imageUploaderIcon, I.imageUploaderIconDisabled, A),
                                children: x
                            })]
                        })
                    });
                    null != r ? s = (0, n.jsx)(d.Anchor, {
                        className: I.removeButton,
                        onClick: this.handleRemove,
                        children: m.default.Messages.REMOVE
                    }) : !R && (s = (0, n.jsx)("small", {
                        className: I.sizeInfo,
                        children: m.default.Messages.MINIMUM_SIZE.format({
                            size: f.AVATAR_SIZE
                        })
                    }));
                    let D = null !== (e = null != P ? P : o) && void 0 !== e ? e : m.default.Messages.CHANGE_AVATAR;
                    return (0, n.jsxs)("div", {
                        className: i(I.imageUploader, O),
                        children: [(0, n.jsx)(d.FocusRing, {
                            within: !0,
                            children: (0, n.jsxs)("div", {
                                className: p ? i(I.imageUploaderIconWrapper, C) : void 0,
                                children: [(0, n.jsxs)("div", {
                                    className: i(I.imageUploaderInner, _),
                                    style: {
                                        ...M,
                                        backgroundImage: l
                                    },
                                    children: [(0, n.jsx)("span", {
                                        "aria-hidden": !0,
                                        children: a
                                    }), null != b ? (0, n.jsx)(d.Clickable, {
                                        className: I.imageUploaderFileInput,
                                        "aria-label": D,
                                        onClick: b
                                    }) : (0, n.jsx)(c.default, {
                                        ref: this.inputRef,
                                        onChange: g,
                                        className: I.imageUploaderFileInput,
                                        "aria-label": D,
                                        tabIndex: 0,
                                        maxFileSizeBytes: L,
                                        onFileSizeError: j
                                    })]
                                }), null != o && (0, n.jsx)("div", {
                                    className: I.imageUploaderHint,
                                    "aria-hidden": "true",
                                    children: o
                                }), p && (0, n.jsx)(N, {
                                    className: A,
                                    icon: x
                                })]
                            })
                        }), v ? s : null]
                    })
                }
                constructor(...e) {
                    super(...e), this.inputRef = a.createRef(), this.handleRemove = () => {
                        this.props.onChange(null)
                    }
                }
            }
            T.defaultProps = {
                name: "",
                makeURL: e => e,
                disabled: !1,
                showIcon: !1,
                hideSize: !1,
                showRemoveButton: !0,
                maxFileSizeBytes: 1 / 0,
                icon: null
            };
            var E = T
        },
        674916: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return f
                }
            });
            var n = l("37983");
            l("884691");
            var a = l("414456"),
                s = l.n(a),
                i = l("77078"),
                r = l("145131"),
                o = l("8161"),
                d = l("713573"),
                u = l("782340"),
                c = l("140960");

            function f(e) {
                let {
                    name: t,
                    description: l,
                    icon: a,
                    imageSrc: f,
                    iconBackgroundColor: m,
                    iconClassName: I,
                    details: N,
                    detailsClassName: T,
                    isHeader: E,
                    isPremium: h
                } = e;
                return (0, n.jsxs)(r.default, {
                    justify: r.default.Justify.CENTER,
                    className: c.wrapper,
                    children: [null != a || null != f ? (0, n.jsx)(r.default.Child, {
                        shrink: 0,
                        grow: 0,
                        children: function(e, t, l, a) {
                            if (null != t) return (0, n.jsx)("img", {
                                alt: "",
                                src: t,
                                className: s(c.iconWrapper, a)
                            });
                            let i = null;
                            return null != e && (i = "string" == typeof e ? (0, n.jsx)("img", {
                                alt: "",
                                src: e,
                                className: s(c.icon, a)
                            }) : (0, n.jsx)(e, {
                                className: s(c.icon, a)
                            })), (0, n.jsx)(r.default, {
                                align: r.default.Align.CENTER,
                                justify: r.default.Justify.CENTER,
                                style: {
                                    backgroundColor: l
                                },
                                className: c.iconWrapper,
                                children: i
                            })
                        }(a, f, m, I)
                    }) : null, function(e) {
                        let {
                            name: t,
                            description: l,
                            details: a,
                            detailsClassName: f,
                            isHeader: m,
                            isPremium: I
                        } = e, N = null == a ? void 0 : a.map((e, t) => {
                            let {
                                icon: l,
                                text: a
                            } = e;
                            return (0, n.jsxs)("div", {
                                className: s(c.detailsWrapper, m ? c.headerDetailsWrapper : null),
                                children: [null != l ? (0, n.jsx)(l, {
                                    width: 16,
                                    height: 16,
                                    className: c.detailsIcon
                                }) : null, (0, n.jsx)(i.Text, {
                                    variant: "text-xs/normal",
                                    color: "header-secondary",
                                    className: f,
                                    children: a
                                })]
                            }, t)
                        });
                        return (0, n.jsxs)(r.default, {
                            direction: r.default.Direction.VERTICAL,
                            children: [(0, n.jsxs)(d.default, {
                                size: m ? d.default.Sizes.SIZE_24 : d.default.Sizes.SIZE_16,
                                className: m ? c.header : c.secondaryHeader,
                                children: [t, I && (0, n.jsx)(i.Tooltip, {
                                    text: u.default.Messages.APPLICATION_SUBSCRIPTION_PREMIUM,
                                    children: e => (0, n.jsx)(o.default, {
                                        ...e,
                                        width: 16,
                                        height: 16,
                                        className: c.premiumIcon
                                    })
                                })]
                            }), null != l ? (0, n.jsx)(i.Text, {
                                variant: "text-sm/normal",
                                color: "header-secondary",
                                children: l
                            }) : null, (0, n.jsx)(r.default, {
                                direction: r.default.Direction.HORIZONTAL,
                                align: r.default.Align.CENTER,
                                wrap: r.default.Wrap.WRAP,
                                children: N
                            })]
                        })
                    }({
                        name: t,
                        description: l,
                        details: N,
                        detailsClassName: T,
                        isHeader: E,
                        isPremium: h
                    })]
                })
            }
        },
        333231: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return d
                }
            });
            var n = l("37983"),
                a = l("884691"),
                s = l("414456"),
                i = l.n(s),
                r = l("77078"),
                o = l("707828");

            function d(e) {
                let {
                    children: t,
                    icon: l,
                    title: s
                } = e;
                return (0, n.jsxs)("header", {
                    className: o.header,
                    children: [(0, n.jsxs)("div", {
                        className: o.name,
                        children: [a.cloneElement(l, {
                            className: i(l.props.className, o.icon),
                            height: 24,
                            width: 24
                        }), (0, n.jsx)(r.Heading, {
                            variant: "heading-md/semibold",
                            className: o.title,
                            children: s
                        })]
                    }), t]
                })
            }
        },
        658072: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return j
                }
            }), l("222007"), l("424973");
            var n = l("37983"),
                a = l("884691"),
                s = l("446674"),
                i = l("77078"),
                r = l("404118"),
                o = l("650509"),
                d = l("671625"),
                u = l("592407"),
                c = l("990241"),
                f = l("485422"),
                m = l("957255"),
                I = l("145131"),
                N = l("841811"),
                T = l("781896"),
                E = l("71216"),
                h = l("8161"),
                g = l("741919"),
                p = l("315102"),
                S = l("299039"),
                O = l("158998"),
                _ = l("674916"),
                A = l("333231"),
                C = l("551527"),
                x = l("421475"),
                R = l("49111"),
                M = l("782340"),
                v = l("47902");

            function L(e) {
                let {
                    application: t,
                    guild: l,
                    integration: a,
                    ...s
                } = e;
                return (0, n.jsx)(i.ConfirmModal, {
                    ...s,
                    header: M.default.Messages.INTEGRATIONS_APPLICATION_REMOVE_TITLE.format({
                        applicationName: t.name
                    }),
                    confirmText: M.default.Messages.INTEGRATIONS_APPLICATION_REMOVE,
                    cancelText: M.default.Messages.CANCEL,
                    onConfirm: () => {
                        u.default.disableIntegration(l.id, a.id).catch(() => {
                            r.default.show({
                                title: M.default.Messages.INTEGRATIONS_APPLICATION_REMOVE_ERROR_TITLE,
                                body: M.default.Messages.INTEGRATIONS_APPLICATION_REMOVE_ERROR
                            })
                        })
                    },
                    children: (0, n.jsx)(i.Text, {
                        variant: "text-md/normal",
                        children: M.default.Messages.INTEGRATIONS_APPLICATION_REMOVE_BODY.format({
                            applicationName: t.name
                        })
                    })
                })
            }

            function j(e) {
                var t;
                let {
                    guild: l,
                    applicationIntegration: r,
                    selectableWebhookChannels: u,
                    editedWebhook: j,
                    errors: b,
                    canNavigate: P
                } = e, {
                    application: D,
                    integration: y,
                    webhooks: G
                } = r, [B, H] = (0, s.useStateFromStoresArray)([m.default], () => [m.default.can(R.Permissions.MANAGE_ROLES, l), null == D.bot || m.default.canManageUser(R.Permissions.MANAGE_GUILD, D.bot.id, l)], [D.bot, l]), k = (0, s.useStateFromStores)([m.default], () => m.default.can(R.Permissions.MANAGE_WEBHOOKS, l), [l]), U = a.useCallback(() => {
                    P() && (0, i.openModal)(e => (0, n.jsx)(L, {
                        guild: l,
                        application: D,
                        integration: y,
                        ...e
                    }))
                }, [D, P, l, y]), F = a.useMemo(() => {
                    let e = [{
                        icon: N.default,
                        text: M.default.Messages.INTEGRATION_ADDED_DATE.format({
                            timestamp: S.default.extractTimestamp(y.id)
                        })
                    }];
                    return null != y.user && e.push({
                        icon: T.default,
                        text: M.default.Messages.INTEGRATION_ADDED_USER.format({
                            user: O.default.getUserTag(y.user)
                        })
                    }), e
                }, [y.id, y.user]), w = a.useMemo(() => null != D.bot ? (0, n.jsx)(C.default, {
                    guild: l,
                    applicationIntegration: r
                }) : (0, n.jsx)(i.Card, {
                    className: v.emptyCard,
                    editable: !0,
                    children: (0, n.jsx)(i.Text, {
                        color: "text-muted",
                        variant: "text-sm/normal",
                        children: M.default.Messages.INTEGRATIONS_APPLICATION_NO_BOT
                    })
                }), [D.bot, r, l]), {
                    applicationSubscriptionListingsShown: W
                } = (0, o.default)({
                    applicationId: D.id,
                    groupListingId: D.primarySkuId,
                    guildId: l.id
                });
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(_.default, {
                        name: D.name,
                        imageSrc: null !== (t = D.getIconURL(32)) && void 0 !== t ? t : p.DEFAULT_AVATARS[0],
                        details: F,
                        isHeader: !0
                    }), (null == D ? void 0 : D.description) != null ? (0, n.jsx)(f.default, {
                        userBio: D.description,
                        className: v.headerDescription
                    }) : null, B ? (0, n.jsx)(c.default, {
                        application: D,
                        canNavigate: P,
                        guildId: l.id
                    }) : null, (0, n.jsx)(i.FormDivider, {
                        className: v.headerDivider
                    }), null != D.bot ? (0, n.jsxs)("div", {
                        className: v.section,
                        children: [(0, n.jsx)(A.default, {
                            icon: (0, n.jsx)(E.default, {}),
                            title: M.default.Messages.INTEGRATIONS_APPLICATION_BOT
                        }), w]
                    }) : null, W && null != D.primarySkuId && (0, n.jsxs)("div", {
                        className: v.section,
                        children: [(0, n.jsx)(A.default, {
                            icon: (0, n.jsx)(h.default, {}),
                            title: M.default.Messages.INTEGRATIONS_APPLICATION_SUBSCRIPTION_TIERS
                        }), (0, n.jsx)(d.default, {
                            applicationId: D.id,
                            applicationPrimarySkuId: D.primarySkuId,
                            guildId: l.id
                        })]
                    }), (0, n.jsxs)("div", {
                        className: v.section,
                        children: [(0, n.jsx)(A.default, {
                            icon: (0, n.jsx)(g.default, {}),
                            title: M.default.Messages.INTEGRATIONS_APPLICATION_WEBHOOKS
                        }), G.length > 0 ? (0, n.jsx)(x.default, {
                            webhooks: G,
                            editedWebhook: j,
                            selectableWebhookChannels: u,
                            errors: b,
                            canNavigate: P
                        }) : (0, n.jsx)(i.Card, {
                            className: v.emptyCard,
                            editable: !0,
                            children: (0, n.jsx)(i.Text, {
                                color: "text-muted",
                                variant: "text-sm/normal",
                                children: k ? M.default.Messages.INTEGRATIONS_APPLICATION_NO_WEBHOOKS : M.default.Messages.INTEGRATIONS_APPLICATION_APPLICATION_WEBHOOK_PERMISSIONS
                            })
                        })]
                    }), (0, n.jsx)(i.FormDivider, {
                        className: v.headerDivider
                    }), (0, n.jsxs)(I.default, {
                        className: v.section,
                        justify: I.default.Justify.BETWEEN,
                        align: I.default.Align.CENTER,
                        children: [(0, n.jsx)(i.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            children: H ? M.default.Messages.INTEGRATIONS_APPLICATION_REMOVE_SUMMARY : M.default.Messages.INTEGRATIONS_APPLICATION_REMOVE_NO_PERMISSIONS
                        }), (0, n.jsx)(I.default.Child, {
                            grow: 0,
                            shrink: 0,
                            children: (0, n.jsx)(i.Button, {
                                size: i.Button.Sizes.SMALL,
                                color: i.Button.Colors.RED,
                                look: i.Button.Looks.FILLED,
                                disabled: !H,
                                onClick: U,
                                children: M.default.Messages.INTEGRATIONS_APPLICATION_REMOVE
                            })
                        })]
                    })]
                })
            }
        },
        827691: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return f
                }
            });
            var n = l("37983"),
                a = l("884691"),
                s = l("77078"),
                i = l("713841"),
                r = l("376556"),
                o = l("592407"),
                d = l("674916"),
                u = l("226397"),
                c = l("787932");

            function f(e) {
                let {
                    integrations: t,
                    editedIntegration: l,
                    guild: f,
                    platformType: m,
                    labelText: I,
                    descriptionText: N,
                    helpText: T,
                    canNavigate: E
                } = e, h = r.default.get(m), g = a.useCallback(async e => {
                    E() && (await o.default.enableIntegration(f.id, e.type, e.id), i.default.startEditingIntegration(e.id))
                }, [E, f.id]), p = a.useCallback(e => {
                    E() && (e.id === (null == l ? void 0 : l.id) && i.default.stopEditingIntegration(), o.default.disableIntegration(f.id, e.id))
                }, [E, l, f.id]), S = a.useCallback(e => {
                    E() && (e === (null == l ? void 0 : l.id) ? i.default.stopEditingIntegration() : i.default.startEditingIntegration(e))
                }, [E, l]);
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(d.default, {
                        name: I,
                        icon: null == h ? void 0 : h.icon.whiteSVG,
                        iconBackgroundColor: null == h ? void 0 : h.color,
                        iconClassName: c.platformIcon,
                        description: N,
                        isHeader: !0
                    }), (0, n.jsx)(s.FormDivider, {
                        className: c.headerDivider
                    }), t.map(e => (0, n.jsx)(u.default, {
                        integration: e,
                        editedIntegration: l,
                        guild: f,
                        isExpanded: (null == l ? void 0 : l.id) === e.id,
                        onEnable: g,
                        onDisable: p,
                        onToggleExpand: () => S(e.id)
                    }, e.id)), (0, n.jsx)(s.Text, {
                        className: c.helpText,
                        color: "text-muted",
                        variant: "text-sm/normal",
                        children: T
                    })]
                })
            }
        },
        943374: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return N
                }
            });
            var n = l("37983");
            l("884691");
            var a = l("819855"),
                s = l("77078"),
                i = l("841098"),
                r = l("145131"),
                o = l("701909"),
                d = l("421475"),
                u = l("49111"),
                c = l("782340"),
                f = l("866516"),
                m = l("277482"),
                I = l("57213");

            function N(e) {
                let {
                    followedChannelWebhooks: t,
                    editedWebhook: l,
                    selectableWebhookChannels: N,
                    errors: T,
                    canNavigate: E
                } = e, h = (0, i.default)();
                return (0, n.jsxs)(s.FormSection, {
                    children: [(0, n.jsx)(s.FormText, {
                        type: s.FormTextTypes.DESCRIPTION,
                        children: c.default.Messages.INTEGRATIONS_CHANNEL_FOLLOWING_DESCRIPTION.format({
                            helpdeskArticle: o.default.getArticleURL(u.HelpdeskArticles.CHANNEL_FOLLOWING)
                        })
                    }), (0, n.jsx)(s.FormDivider, {
                        className: f.headerDivider
                    }), t.length > 0 ? (0, n.jsx)(d.default, {
                        webhooks: t,
                        editedWebhook: l,
                        selectableWebhookChannels: N,
                        errors: T,
                        canNavigate: E
                    }) : function(e, t) {
                        let l = (0, a.isThemeDark)(e) ? m : I;
                        return (0, n.jsxs)(r.default, {
                            direction: r.default.Direction.VERTICAL,
                            align: r.default.Align.CENTER,
                            children: [(0, n.jsx)("img", {
                                alt: "",
                                src: l,
                                className: f.emptyStateImage
                            }), (0, n.jsx)(s.Heading, {
                                variant: "heading-md/semibold",
                                children: c.default.Messages.INTEGRATIONS_CHANNEL_FOLLOWING_EMPTY
                            }), (0, n.jsx)(s.Button, {
                                className: f.emptyStateButton,
                                onClick: t,
                                children: c.default.Messages.INTEGRATIONS_CHANNEL_FOLLOWING_EMPTY_BUTTON
                            })]
                        })
                    }(h, () => open(o.default.getArticleURL(u.HelpdeskArticles.CHANNEL_FOLLOWING)))]
                })
            }
        },
        310005: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return H
                }
            }), l("424973"), l("222007");
            var n = l("37983"),
                a = l("884691"),
                s = l("414456"),
                i = l.n(s),
                r = l("446674"),
                o = l("819855"),
                d = l("77078"),
                u = l("54239"),
                c = l("841098"),
                f = l("376556"),
                m = l("412707"),
                I = l("646186"),
                N = l("926994"),
                T = l("47319"),
                E = l("957255"),
                h = l("145131"),
                g = l("810567"),
                p = l("841811"),
                S = l("295810"),
                O = l("741919"),
                _ = l("599110"),
                A = l("315102"),
                C = l("701909"),
                x = l("299039"),
                R = l("158998"),
                M = l("700104"),
                v = l("15639"),
                L = l("49111"),
                j = l("782340"),
                b = l("816189"),
                P = l("390494"),
                D = l("449638"),
                y = l("117809");

            function G(e, t) {
                return t.toLowerCase().includes(e)
            }

            function B(e) {
                let {
                    query: t,
                    setQuery: l
                } = e, s = a.useCallback(e => {
                    l(e)
                }, [l]);
                return (0, n.jsx)("div", {
                    className: b.searchContainer,
                    children: (0, n.jsx)(g.default, {
                        size: g.default.Sizes.MEDIUM,
                        query: t,
                        onChange: s,
                        onClear: () => l(""),
                        placeholder: j.default.Messages.INTEGRATIONS_SEARCH,
                        "aria-label": j.default.Messages.INTEGRATIONS_SEARCH
                    })
                })
            }

            function H(e) {
                let {
                    guild: t,
                    channel: l,
                    applicationIntegrations: s,
                    builtInIntegrations: g,
                    customWebhooks: H,
                    followedChannelWebhooks: k,
                    isLoading: U,
                    canCreateWebhook: F,
                    onManageBuiltIn: w,
                    onManageCustomWebhooks: W,
                    onManageFollowedChannels: V,
                    onManageApplication: Y
                } = e, K = (0, c.default)(), [z, Z] = a.useState(""), {
                    isFetchingConnections: q,
                    accounts: J
                } = (0, r.useStateFromStoresObject)([T.default], () => ({
                    isFetchingConnections: T.default.isFetching(),
                    accounts: T.default.getAccounts()
                }), []), {
                    canManageWebhooks: X,
                    canManageGuild: Q
                } = (0, r.useStateFromStoresObject)([E.default], () => ({
                    canManageWebhooks: null != t && E.default.can(L.Permissions.MANAGE_WEBHOOKS, t) || null != l && E.default.can(L.Permissions.MANAGE_WEBHOOKS, l),
                    canManageGuild: null != t && null == l && E.default.can(L.Permissions.MANAGE_GUILD, t)
                }), [t, l]), {
                    availableTwitchIntegrations: $,
                    availableYoutubeIntegrations: ee,
                    guildTwitchIntegrations: et,
                    guildYoutubeIntegrations: el
                } = a.useMemo(() => {
                    var e, t, l, n, a, s, i, r;
                    return {
                        availableTwitchIntegrations: null !== (a = null === (e = g.twitch) || void 0 === e ? void 0 : e.length) && void 0 !== a ? a : 0,
                        availableYoutubeIntegrations: null !== (s = null === (t = g.youtube) || void 0 === t ? void 0 : t.length) && void 0 !== s ? s : 0,
                        guildTwitchIntegrations: null !== (i = null === (l = g.twitch) || void 0 === l ? void 0 : l.filter(e => e.enabled).length) && void 0 !== i ? i : 0,
                        guildYoutubeIntegrations: null !== (r = null === (n = g.youtube) || void 0 === n ? void 0 : n.filter(e => e.enabled).length) && void 0 !== r ? r : 0
                    }
                }, [g.twitch, g.youtube]), {
                    showTwitchCard: en,
                    showYoutubeCard: ea
                } = a.useMemo(() => {
                    if (q || !Q) return {
                        showTwitchCard: !1,
                        showYoutubeCard: !1
                    };
                    let e = null == t ? void 0 : t.hasFeature(L.GuildFeatures.COMMUNITY),
                        l = J.filter(e => e.type === L.PlatformTypes.TWITCH).length > 0,
                        n = J.filter(e => e.type === L.PlatformTypes.YOUTUBE).length > 0;
                    return {
                        showTwitchCard: $ > 0 || !l && e,
                        showYoutubeCard: ee > 0 || !n && e
                    }
                }, [q, Q, t, J, $, ee]), es = a.useMemo(() => Object.values(s).filter(e => {
                    var t, l;
                    let {
                        application: n
                    } = e;
                    return t = n, !!("" === (l = (l = z).trim().toLowerCase()) || t.id === l || G(l, t.name) || null != t.bot && G(l, t.bot.username)) || !1
                }), [s, z]), ei = Object.values(s).length, er = (0, r.useStateFromStores)([v.default], () => {
                    if (null != t) return es.find(e => v.default.canShowOverviewTooltip(t.id, e.integration.id))
                }, [es, t]), eo = a.useMemo(() => void 0 !== er ? [er, ...es.filter(e => e.integration.id !== er.integration.id)] : es, [es, er]), ed = (0, d.useModalsStore)(d.hasAnyModalOpenSelector), [eu, ec] = a.useState(!1), ef = a.useRef(0), em = () => {
                    ec(!0), clearTimeout(ef.current), ef.current = setTimeout(() => {
                        ec(!1)
                    }, 200)
                };
                a.useEffect(() => (window.addEventListener("scroll", em, !0), () => window.removeEventListener("scroll", em)));
                let eI = eo.map(e => {
                        let l = !ed && e.integration.id === (null == er ? void 0 : er.integration.id);
                        return function(e, t, l, a, s) {
                            var i;
                            let {
                                application: r,
                                integration: o
                            } = t, d = [];
                            return null != o.user ? d.push({
                                icon: p.default,
                                text: j.default.Messages.INTEGRATION_ADDED_USER_DATE.format({
                                    timestamp: x.default.extractTimestamp(o.id),
                                    user: R.default.getUserTag(o.user)
                                })
                            }) : d.push({
                                icon: p.default,
                                text: j.default.Messages.INTEGRATION_ADDED_DATE.format({
                                    timestamp: x.default.extractTimestamp(o.id)
                                })
                            }), (0, n.jsx)(M.default, {
                                name: r.name,
                                imageSrc: null !== (i = r.getIconURL(48)) && void 0 !== i ? i : A.DEFAULT_AVATARS[0],
                                integration: t,
                                buttonText: j.default.Messages.INTEGRATIONS_APPLICATION_BUTTON,
                                hasNextSection: !0,
                                onButtonClick: () => {
                                    l(r.id), _.default.track(L.AnalyticEvents.APP_MANAGE_CTA_CLICKED, {
                                        application_id: r.id,
                                        guild_id: null == e ? void 0 : e.id,
                                        is_admin: null != e ? E.default.can(L.Permissions.ADMINISTRATOR, e) : void 0
                                    })
                                },
                                details: d,
                                guildId: null == e ? void 0 : e.id,
                                isScrolling: a,
                                canShowMigrationTooltip: s
                            }, "integration-".concat(o.id))
                        }(t, e, Y, eu, l)
                    }),
                    eN = (0, n.jsx)("div", {
                        className: b.footerImage
                    });
                0 === eI.length && Q && (eI = function(e, t, l) {
                    let a = (0, o.isThemeDark)(e) ? D : y,
                        s = (0, n.jsxs)(h.default, {
                            direction: h.default.Direction.VERTICAL,
                            align: h.default.Align.CENTER,
                            className: b.emptyStateWrapper,
                            children: [(0, n.jsx)("img", {
                                alt: "",
                                src: a,
                                className: b.emptyStateSearchImage
                            }), (0, n.jsx)(d.Card, {
                                editable: !0,
                                className: b.emptyStateCard,
                                children: (0, n.jsx)(d.Text, {
                                    color: "text-muted",
                                    variant: "text-sm/normal",
                                    children: j.default.Messages.INTEGRATIONS_SEARCH_NO_MATCH
                                })
                            })]
                        }),
                        i = (0, n.jsx)(d.Card, {
                            editable: !0,
                            className: b.emptyStateCard,
                            children: (0, n.jsxs)("div", {
                                className: b.emptyStateText,
                                children: [(0, n.jsx)("img", {
                                    alt: "",
                                    src: P,
                                    className: b.emptyStateImage
                                }), (0, n.jsx)(d.Heading, {
                                    color: "header-secondary",
                                    variant: "heading-xl/bold",
                                    children: j.default.Messages.INTEGRATIONS_OVERVIEW_NO_APPLICATIONS
                                }), (0, n.jsx)(d.Text, {
                                    color: "header-secondary",
                                    variant: "text-sm/normal",
                                    children: j.default.Messages.INTEGRATIONS_OVERVIEW_NO_APPLICATIONS_APP_DIRECTORY_CTA.format({
                                        handleGoToAppDirectory: () => {
                                            (0, I.goToAppDirectory)({
                                                guildId: l,
                                                entrypoint: {
                                                    name: m.ApplicationDirectoryEntrypointNames.GUILD_INTEGRATION_SETTINGS
                                                }
                                            }), (0, u.popLayer)()
                                        }
                                    })
                                })]
                            })
                        });
                    return t > 0 ? s : i
                }(K, ei, null == t ? void 0 : t.id), eN = null);
                let eT = C.default.getArticleURL(L.HelpdeskArticles.INTEGRATIONS),
                    eE = null != l ? j.default.Messages.INTEGRATIONS_OVERVIEW_DESCRIPTION_CHANNEL : j.default.Messages.INTEGRATIONS_OVERVIEW_DESCRIPTION_GUILD,
                    eh = [];
                if (X) {
                    var eg, ep, eS, eO, e_;
                    let e;
                    if (eh.push((eg = H.length, ep = F, eS = W, e = eg > 0 ? j.default.Messages.INTEGRATIONS_WEBHOOKS_BUTTON : j.default.Messages.INTEGRATIONS_WEBHOOKS_EMPTY_BUTTON, (0, n.jsx)(M.default, {
                            name: j.default.Messages.INTEGRATIONS_WEBHOOKS,
                            icon: O.default,
                            buttonText: e,
                            buttonDisabled: !ep,
                            onButtonClick: eS,
                            hasNextSection: eg > 0,
                            details: [{
                                text: j.default.Messages.INTEGRATIONS_WEBHOOKS_SUMMARY.format({
                                    count: eg
                                })
                            }]
                        }, "webhooks"))), (null == l ? void 0 : l.type) !== L.ChannelTypes.GUILD_VOICE && ((null == l ? void 0 : l.type) == null || !L.ChannelTypesSets.GUILD_THREADS_ONLY.has(l.type))) {
                        ;
                        let e, t;
                        eh.push((eO = k.length, e_ = V, eO > 0 ? (e = j.default.Messages.INTEGRATIONS_CHANNEL_FOLLOWING_BUTTON, t = e_) : (e = j.default.Messages.INTEGRATIONS_CHANNEL_FOLLOWING_EMPTY_BUTTON, t = () => open(C.default.getArticleURL(L.HelpdeskArticles.CHANNEL_FOLLOWING))), (0, n.jsx)(M.default, {
                            name: j.default.Messages.INTEGRATIONS_CHANNEL_FOLLOWING,
                            icon: S.default,
                            buttonText: e,
                            onButtonClick: t,
                            hasNextSection: eO > 0,
                            details: [{
                                text: j.default.Messages.INTEGRATIONS_CHANNEL_FOLLOWING_SUMMARY.format({
                                    count: eO
                                })
                            }]
                        }, "channels-followed")))
                    }
                }
                return en && eh.push(function(e, t, l) {
                    let a, s, i;
                    let r = f.default.get(L.PlatformTypes.TWITCH);
                    return e > 0 ? (a = j.default.Messages.INTEGRATIONS_TWITCH_BUTTON, s = j.default.Messages.INTEGRATIONS_TWITCH_SUMMARY.format({
                        count: t
                    }), i = () => l(L.PlatformTypes.TWITCH)) : (a = j.default.Messages.INTEGRATIONS_TWITCH_EMPTY_BUTTON, s = j.default.Messages.INTEGRATIONS_TWITCH_EMPTY_SUMMARY, i = () => (0, N.default)(L.PlatformTypes.TWITCH, "Integration Settings")), (0, n.jsx)(M.default, {
                        name: j.default.Messages.INTEGRATIONS_TWITCH,
                        icon: r.icon.whiteSVG,
                        iconBackgroundColor: r.color,
                        iconClassName: b.platformIcon,
                        buttonText: a,
                        onButtonClick: i,
                        hasNextSection: e > 0,
                        details: [{
                            text: s
                        }]
                    }, "integrations-twitch")
                }($, et, w)), ea && eh.push(function(e, t, l) {
                    let a, s, i;
                    let r = f.default.get(L.PlatformTypes.YOUTUBE);
                    return e > 0 ? (a = j.default.Messages.INTEGRATIONS_YOUTUBE_BUTTON, s = j.default.Messages.INTEGRATIONS_YOUTUBE_SUMMARY.format({
                        count: t
                    }), i = () => l(L.PlatformTypes.YOUTUBE)) : (a = j.default.Messages.INTEGRATIONS_YOUTUBE_EMPTY_BUTTON, s = j.default.Messages.INTEGRATIONS_YOUTUBE_EMPTY_SUMMARY, i = () => (0, N.default)(L.PlatformTypes.YOUTUBE, "Integration Settings")), (0, n.jsx)(M.default, {
                        name: j.default.Messages.INTEGRATIONS_YOUTUBE,
                        icon: r.icon.whiteSVG,
                        iconBackgroundColor: r.color,
                        iconClassName: b.platformIcon,
                        buttonText: a,
                        onButtonClick: i,
                        hasNextSection: e > 0,
                        details: [{
                            text: s
                        }]
                    }, "integrations-youtube")
                }(ee, el, w)), (0, n.jsxs)(d.FormSection, {
                    className: i(null != eN ? b.footerPlaceholder : null),
                    children: [(0, n.jsx)(d.FormText, {
                        type: d.FormTextTypes.DESCRIPTION,
                        children: eE.format({
                            helpdeskArticle: eT
                        })
                    }), (0, n.jsx)(d.FormDivider, {
                        className: b.divider
                    }), U || q || null == t ? (0, n.jsx)(d.Spinner, {
                        className: b.spinner,
                        type: d.Spinner.Type.SPINNING_CIRCLE
                    }) : (0, n.jsxs)(n.Fragment, {
                        children: [eh, Q ? (0, n.jsxs)(n.Fragment, {
                            children: [eh.length > 0 ? (0, n.jsx)(d.FormDivider, {
                                className: b.divider
                            }) : null, (0, n.jsx)(d.Heading, {
                                variant: "heading-md/semibold",
                                className: b.sectionHeader,
                                children: j.default.Messages.INTEGRATIONS_APPLICATION_SECTION
                            }), ei > 4 ? (0, n.jsx)(B, {
                                query: z,
                                setQuery: Z
                            }) : null, eI]
                        }) : null, eN]
                    })]
                })
            }
        },
        810201: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return h
                }
            }), l("222007");
            var n = l("37983"),
                a = l("884691"),
                s = l("819855"),
                i = l("77078"),
                r = l("404118"),
                o = l("611183"),
                d = l("841098"),
                u = l("145131"),
                c = l("701909"),
                f = l("421475"),
                m = l("49111"),
                I = l("782340"),
                N = l("788933"),
                T = l("277482"),
                E = l("57213");

            function h(e) {
                let t, {
                        guild: l,
                        channel: h,
                        customWebhooks: g,
                        editedWebhook: p,
                        selectableWebhookChannels: S,
                        refToScroller: O,
                        errors: _,
                        canNavigate: A
                    } = e,
                    C = (0, d.default)(),
                    [x, R] = a.useState(null),
                    [M, v] = a.useState(null);
                if (null != h) t = h;
                else {
                    let e = Object.values(S);
                    t = e.length > 0 ? e[0] : null
                }
                let L = a.useCallback(async () => {
                    if (A() && null !== t) {
                        let e = await o.default.create(l.id, t.id).catch(e => {
                            let {
                                body: t,
                                status: l
                            } = e;
                            return t && t.code === m.AbortCodes.TOO_MANY_WEBHOOKS ? r.default.show({
                                title: I.default.Messages.WEBHOOK_ERROR_CREATING_WEBHOOK,
                                body: I.default.Messages.WEBHOOK_ERROR_MAX_WEBHOOKS_REACHED
                            }) : 429 === l ? r.default.show({
                                title: I.default.Messages.WEBHOOK_ERROR_CREATING_WEBHOOK,
                                body: I.default.Messages.WEBHOOK_ERROR_CREATING_WEBHOOK_RATE_LIMIT
                            }) : r.default.show({
                                title: I.default.Messages.WEBHOOK_ERROR_CREATING_WEBHOOK,
                                body: I.default.Messages.WEBHOOK_ERROR_INTERNAL_SERVER_ERROR
                            }), null
                        });
                        null != e && (v(e.id), R(e))
                    }
                }, [A, t, l]);
                a.useEffect(() => {
                    0 === g.length && L()
                }, []);
                let j = null !== t;
                return (0, n.jsxs)(i.FormSection, {
                    children: [(0, n.jsx)(i.FormText, {
                        type: i.FormTextTypes.DESCRIPTION,
                        children: I.default.Messages.INTEGRATIONS_WEBHOOKS_DESCRIPTION.format({
                            helpdeskArticle: c.default.getArticleURL(m.HelpdeskArticles.WEBHOOKS),
                            developersArticle: m.MarketingURLs.API_DOCS_WEBHOOKS
                        })
                    }), (0, n.jsx)(i.FormDivider, {
                        className: N.headerDivider
                    }), g.length > 0 ? (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)(i.Button, {
                            className: N.createButton,
                            size: i.Button.Sizes.SMALL,
                            disabled: !j,
                            onClick: L,
                            children: I.default.Messages.INTEGRATIONS_WEBHOOKS_CREATE
                        }), (0, n.jsx)(f.default, {
                            webhooks: g,
                            editedWebhook: p,
                            selectableWebhookChannels: S,
                            lastCreatedWebhookId: null == x ? void 0 : x.id,
                            errors: _,
                            canNavigate: A
                        })]
                    }) : function(e, t, l) {
                        let a = (0, s.isThemeDark)(e) ? T : E;
                        return (0, n.jsxs)(u.default, {
                            direction: u.default.Direction.VERTICAL,
                            align: u.default.Align.CENTER,
                            children: [(0, n.jsx)("img", {
                                alt: "",
                                src: a,
                                className: N.emptyStateImage
                            }), (0, n.jsx)(i.Heading, {
                                variant: "heading-md/semibold",
                                children: I.default.Messages.INTEGRATIONS_WEBHOOKS_EMPTY
                            }), (0, n.jsx)(i.Button, {
                                className: N.emptyStateButton,
                                disabled: !t,
                                onClick: l,
                                children: I.default.Messages.INTEGRATIONS_WEBHOOKS_EMPTY_BUTTON
                            })]
                        })
                    }(C, j, L)]
                })
            }
        },
        467733: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return v
                }
            }), l("222007"), l("424973");
            var n = l("37983"),
                a = l("884691"),
                s = l("917351"),
                i = l.n(s),
                r = l("446674"),
                o = l("77078"),
                d = l("713841"),
                u = l("800751"),
                c = l("524503"),
                f = l("186211"),
                m = l("926994"),
                I = l("923959"),
                N = l("957255"),
                T = l("454589"),
                E = l("145131"),
                h = l("659500"),
                g = l("701909"),
                p = l("658072"),
                S = l("827691"),
                O = l("943374"),
                _ = l("310005"),
                A = l("810201"),
                C = l("49111"),
                x = l("782340"),
                R = l("509223");

            function M(e, t) {
                switch (e) {
                    case C.IntegrationSettingsSections.APPLICATION:
                        var l;
                        return null !== (l = null == t ? void 0 : t.application.name) && void 0 !== l ? l : "";
                    case C.IntegrationSettingsSections.OVERVIEW:
                        return x.default.Messages.INTEGRATIONS_OVERVIEW;
                    case C.IntegrationSettingsSections.CHANNEL_FOLLOWING:
                        return x.default.Messages.INTEGRATIONS_CHANNEL_FOLLOWING;
                    case C.IntegrationSettingsSections.TWITCH:
                        return x.default.Messages.INTEGRATIONS_TWITCH;
                    case C.IntegrationSettingsSections.WEBHOOKS:
                        return x.default.Messages.INTEGRATIONS_WEBHOOKS;
                    case C.IntegrationSettingsSections.YOUTUBE:
                        return x.default.Messages.INTEGRATIONS_YOUTUBE;
                    default:
                        return ""
                }
            }
            var v = a.memo(function(e) {
                let {
                    section: t,
                    sectionId: l,
                    guild: s,
                    channel: v,
                    integrations: L,
                    editedIntegration: j,
                    webhooks: b,
                    editedWebhook: P,
                    isFetching: D,
                    refToScroller: y,
                    errors: G,
                    hasChanges: B
                } = e, H = (0, r.useStateFromStores)([I.default], () => null != s ? I.default.getDefaultChannel(s.id) : null), k = (0, r.useStateFromStoresObject)([I.default], () => I.default.getChannels(null == s ? void 0 : s.id)), U = (0, r.useStateFromStoresObject)([N.default], () => i.keyBy(k.SELECTABLE.map(e => e.channel).filter(e => N.default.can(C.Permissions.MANAGE_WEBHOOKS, e)), "id")), F = (0, r.useStateFromStoresObject)([N.default], () => i.keyBy(k.VOCAL.map(e => e.channel).filter(e => e.isGuildVocal() && N.default.can(C.Permissions.MANAGE_WEBHOOKS, e)), "id")), w = null != v ? v : H, W = t === C.IntegrationSettingsSections.APPLICATION ? l : null, [V, Y] = a.useState(u.SHAKE_INTENSITY_DEFAULT), K = a.useCallback(() => B() ? (h.ComponentDispatch.dispatch(C.ComponentActions.SHAKE_APP, {
                    duration: 300,
                    intensity: V
                }), Y(Math.min(V + u.SHAKE_INTENSITY_INCREMENT, u.SHAKE_INTENSITY_MAX)), h.ComponentDispatch.dispatch(C.ComponentActions.EMPHASIZE_NOTICE), !1) : (Y(u.SHAKE_INTENSITY_DEFAULT), !0), [B, V]), z = a.useCallback(e => !!K() && (d.default.setSection(e), !0), [K]), {
                    applicationIntegrations: Z,
                    applicationBotIds: q,
                    builtInIntegrations: J,
                    customWebhooks: X,
                    followedChannelWebhooks: Q
                } = a.useMemo(() => {
                    let e = {},
                        t = {},
                        l = {},
                        n = [],
                        a = [];
                    if (null != L)
                        for (let n of L)
                            if ("discord" === n.type) {
                                if (null != n.application) {
                                    var s;
                                    let l = n.application.id;
                                    e[l] = {
                                        application: n.application,
                                        integration: n,
                                        webhooks: []
                                    }, (null === (s = n.application.bot) || void 0 === s ? void 0 : s.id) !== void 0 && (t[n.application.bot.id] = n.application.id)
                                }
                            } else !(n.type in l) && (l[n.type] = []), l[n.type].push(n);
                    for (let t of b)(t.channel_id in U || t.channel_id in F) && (null != t.application_id && t.application_id in e ? e[t.application_id].webhooks.push(t) : t.type === C.WebhookTypes.CHANNEL_FOLLOWER ? a.push(t) : n.push(t));
                    return {
                        applicationIntegrations: e,
                        applicationBotIds: t,
                        builtInIntegrations: l,
                        customWebhooks: n,
                        followedChannelWebhooks: a
                    }
                }, [L, U, F, b]);
                a.useEffect(() => {
                    if (!D) switch (t) {
                        case C.IntegrationSettingsSections.TWITCH:
                            null == J[C.PlatformTypes.TWITCH] && d.default.setSection(C.IntegrationSettingsSections.OVERVIEW);
                            break;
                        case C.IntegrationSettingsSections.YOUTUBE:
                            null == J[C.PlatformTypes.YOUTUBE] && d.default.setSection(C.IntegrationSettingsSections.OVERVIEW);
                            break;
                        case C.IntegrationSettingsSections.APPLICATION:
                            (null == W || !(W in q || W in Z)) && d.default.setSection(C.IntegrationSettingsSections.OVERVIEW)
                    }
                }, [Z, q, J, W, t, D]), a.useEffect(() => {
                    if ((null == s ? void 0 : s.id) == null) return;
                    let e = f.default.getEntitlementsForGuildFetchState(s.id);
                    e === f.FetchState.NOT_FETCHED && c.fetchEntitlementsForGuild(s.id)
                }, [null == s ? void 0 : s.id]);
                let $ = null;
                switch (t) {
                    case C.IntegrationSettingsSections.TWITCH:
                        let ee = J[C.PlatformTypes.TWITCH];
                        null != ee && ($ = (0, n.jsx)(S.default, {
                            guild: s,
                            integrations: J[C.PlatformTypes.TWITCH],
                            editedIntegration: j,
                            labelText: x.default.Messages.INTEGRATIONS_TWITCH,
                            platformType: C.PlatformTypes.TWITCH,
                            descriptionText: x.default.Messages.INTEGRATIONS_TWITCH_DESCRIPTION,
                            helpText: x.default.Messages.INTEGRATIONS_TWITCH_HELP.format({
                                connectAction: () => (0, m.default)(C.PlatformTypes.TWITCH, "Integration Settings"),
                                helpdeskArticle: g.default.getArticleURL(C.HelpdeskArticles.TWITCH_INTEGRATION)
                            }),
                            canNavigate: K
                        }));
                        break;
                    case C.IntegrationSettingsSections.YOUTUBE:
                        let et = J[C.PlatformTypes.YOUTUBE];
                        null != et && ($ = (0, n.jsx)(S.default, {
                            guild: s,
                            integrations: J[C.PlatformTypes.YOUTUBE],
                            editedIntegration: j,
                            labelText: x.default.Messages.INTEGRATIONS_YOUTUBE,
                            platformType: C.PlatformTypes.YOUTUBE,
                            descriptionText: x.default.Messages.INTEGRATIONS_YOUTUBE_DESCRIPTION,
                            helpText: x.default.Messages.INTEGRATIONS_YOUTUBE_HELP.format({
                                connectAction: () => (0, m.default)(C.PlatformTypes.YOUTUBE),
                                helpdeskArticle: g.default.getArticleURL(C.HelpdeskArticles.YOUTUBE_INTEGRATION)
                            }),
                            canNavigate: K
                        }));
                        break;
                    case C.IntegrationSettingsSections.APPLICATION:
                        var el;
                        let en = null != W ? null !== (el = Z[q[W]]) && void 0 !== el ? el : Z[W] : null;
                        null != en && ($ = (0, n.jsx)(p.default, {
                            guild: s,
                            applicationIntegration: en,
                            editedWebhook: P,
                            selectableWebhookChannels: U,
                            errors: G,
                            canNavigate: K
                        }));
                        break;
                    case C.IntegrationSettingsSections.CHANNEL_FOLLOWING:
                        $ = (0, n.jsx)(O.default, {
                            followedChannelWebhooks: Q,
                            editedWebhook: P,
                            selectableWebhookChannels: U,
                            canNavigate: K,
                            errors: G
                        });
                        break;
                    case C.IntegrationSettingsSections.WEBHOOKS:
                        $ = (0, n.jsx)(A.default, {
                            guild: s,
                            channel: v,
                            customWebhooks: X,
                            editedWebhook: P,
                            selectableWebhookChannels: {
                                ...U,
                                ...F
                            },
                            canNavigate: K,
                            refToScroller: y,
                            errors: G
                        });
                        break;
                    default:
                        $ = (0, n.jsx)(_.default, {
                            guild: s,
                            channel: v,
                            applicationIntegrations: Z,
                            builtInIntegrations: J,
                            customWebhooks: X,
                            followedChannelWebhooks: Q,
                            isLoading: D || null == s,
                            canCreateWebhook: null != w,
                            onManageCustomWebhooks: () => {
                                d.default.setSection(C.IntegrationSettingsSections.WEBHOOKS)
                            },
                            onManageFollowedChannels: () => {
                                d.default.setSection(C.IntegrationSettingsSections.CHANNEL_FOLLOWING)
                            },
                            onManageApplication: e => {
                                d.default.setSection(C.IntegrationSettingsSections.APPLICATION, e)
                            },
                            onManageBuiltIn: e => {
                                switch (e) {
                                    case C.PlatformTypes.TWITCH:
                                        d.default.setSection(C.IntegrationSettingsSections.TWITCH);
                                        break;
                                    case C.PlatformTypes.YOUTUBE:
                                        d.default.setSection(C.IntegrationSettingsSections.YOUTUBE)
                                }
                            }
                        })
                }
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(E.default, {
                        align: E.default.Align.CENTER,
                        className: R.breadcrumbs,
                        children: t === C.IntegrationSettingsSections.OVERVIEW ? (0, n.jsx)(o.FormTitle, {
                            tag: "h1",
                            children: M(C.IntegrationSettingsSections.OVERVIEW)
                        }) : (0, n.jsx)(T.default, {
                            activeId: t.toString(),
                            breadcrumbs: [C.IntegrationSettingsSections.OVERVIEW, t].map(e => ({
                                id: e.toString(),
                                label: M(e, Z[W])
                            })),
                            onBreadcrumbClick: e => {
                                t !== parseInt(e.id) && z(parseInt(e.id))
                            },
                            renderCustomBreadcrumb: (e, t) => (0, n.jsx)(o.FormTitle, {
                                tag: "h1",
                                className: t ? R.breadcrumbActive : R.breadcrumbInactive,
                                children: e.label
                            })
                        })
                    }), $]
                })
            })
        },
        551527: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return p
                }
            }), l("424973"), l("222007");
            var n = l("37983"),
                a = l("884691"),
                s = l("316693"),
                i = l("446674"),
                r = l("77078"),
                o = l("851387"),
                d = l("581583"),
                u = l("549825"),
                c = l("978970"),
                f = l("766274"),
                m = l("26989"),
                I = l("79798"),
                N = l("145131"),
                T = l("449008"),
                E = l("991170"),
                h = l("782340"),
                g = l("992693");

            function p(e) {
                var t;
                let {
                    guild: l,
                    applicationIntegration: p
                } = e, {
                    application: S
                } = p, O = null != S.bot ? new f.default(S.bot) : null, _ = (0, i.useStateFromStores)([m.default], () => null != O ? m.default.getMember(l.id, O.id) : null, [O, l]), A = null == O ? void 0 : O.id;
                a.useEffect(() => {
                    null != A && o.default.requestMembersById(l.id, A)
                }, [l.id, A]);
                let C = a.useMemo(() => {
                    var e, t, n;
                    let a = l.getRole(l.id),
                        i = null !== (t = null == _ ? void 0 : null === (e = _.roles) || void 0 === e ? void 0 : e.map(e => l.getRole(e)).filter(T.isNotNullish)) && void 0 !== t ? t : [],
                        r = null !== (n = null == a ? void 0 : a.permissions) && void 0 !== n ? n : E.default.NONE;
                    for (let e of i) r = s.default.add(r, e.permissions);
                    return r
                }, [l, _]);
                return null == O ? null : (0, n.jsx)(r.Card, {
                    editable: !0,
                    className: g.card,
                    children: (0, n.jsxs)(N.default, {
                        direction: N.default.Direction.VERTICAL,
                        children: [(0, n.jsxs)(N.default, {
                            align: N.default.Align.CENTER,
                            children: [(0, n.jsx)("img", {
                                alt: "",
                                src: O.getAvatarURL(l.id, 32),
                                className: g.iconWrapper
                            }), (0, n.jsx)(r.Text, {
                                color: "header-primary",
                                variant: "text-sm/normal",
                                children: h.default.Messages.INTEGRATIONS_APPLICATION_BOT_NAME.format({
                                    user: O
                                })
                            }), (0, n.jsx)(I.default, {
                                className: g.tag,
                                verified: O.isVerifiedBot()
                            })]
                        }), function(e, t, l, a) {
                            let i = [],
                                o = [];
                            for (let e of c.OrderedPermissions) s.default.has(a, e) ? i.push(e) : o.push(e);
                            return (0, n.jsxs)(n.Fragment, {
                                children: [(0, n.jsx)(r.FormDivider, {
                                    className: g.divider
                                }), l.length > 0 ? (0, n.jsxs)(n.Fragment, {
                                    children: [(0, n.jsx)(r.FormTitle, {
                                        className: g.permissionHeader,
                                        children: h.default.Messages.ROLES_LIST.format({
                                            numRoles: l.length
                                        })
                                    }), (0, n.jsx)(d.default, {
                                        className: g.rolePills,
                                        user: e,
                                        guild: t,
                                        userRoles: l,
                                        wrap: !1,
                                        readOnly: !0
                                    })]
                                }) : null, i.length > 0 || o.length > 0 ? (0, n.jsx)(u.default, {
                                    className: g.permissionList,
                                    grantedPermissions: i,
                                    grantedPermissionsHeader: h.default.Messages.INTEGRATIONS_APPLICATION_GRANTED_PERMISSIONS,
                                    disabledPermissions: o,
                                    disabledPermissionsHeader: h.default.Messages.INTEGRATIONS_APPLICATION_DENIED_PERMISSIONS
                                }) : null]
                            })
                        }(O, l, null !== (t = null == _ ? void 0 : _.roles) && void 0 !== t ? t : [], C)]
                    })
                })
            }
        },
        226397: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return M
                }
            }), l("222007"), l("511434"), l("313619"), l("654714"), l("287168"), l("956660");
            var n = l("37983"),
                a = l("884691"),
                s = l("414456"),
                i = l.n(s),
                r = l("866227"),
                o = l.n(r),
                d = l("446674"),
                u = l("77078"),
                c = l("713841"),
                f = l("376556"),
                m = l("385976"),
                I = l("592407"),
                N = l("766274"),
                T = l("102985"),
                E = l("145131"),
                h = l("461380"),
                g = l("841811"),
                p = l("429893"),
                S = l("315102"),
                O = l("299039"),
                _ = l("674916"),
                A = l("49111"),
                C = l("782340"),
                x = l("311941"),
                R = l("926622");

            function M(e) {
                let t, {
                        guild: l,
                        integration: s,
                        editedIntegration: r,
                        isExpanded: M,
                        onToggleExpand: v,
                        onDisable: L,
                        onEnable: j
                    } = e,
                    [b, P] = a.useState(!1),
                    D = (0, d.useStateFromStores)([T.default], () => T.default.hidePersonalInformation),
                    y = a.useCallback(() => {
                        P(!0), j(s)
                    }, [s, j]),
                    G = a.useCallback(() => {
                        !s.syncing && (0, u.openModal)(e => {
                            let t = 0 === s.expire_behavior ? C.default.Messages.REMOVE_SYNCED_ROLE : C.default.Messages.KICK_FROM_SERVER;
                            return (0, n.jsx)(u.ConfirmModal, {
                                ...e,
                                header: C.default.Messages.DISABLE_INTEGRATION_TITLE,
                                confirmText: t,
                                cancelText: C.default.Messages.CANCEL,
                                onConfirm: () => L(s),
                                children: (0, n.jsx)(u.Text, {
                                    variant: "text-md/normal",
                                    children: s.type === A.PlatformTypes.YOUTUBE ? C.default.Messages.DISABLE_INTEGRATION_YOUTUBE_BODY : C.default.Messages.DISABLE_INTEGRATION_TWITCH_BODY
                                })
                            })
                        })
                    }, [s, L]),
                    B = a.useCallback(() => {
                        I.default.syncIntegration(l.id, s.id)
                    }, [l.id, s.id]),
                    H = a.useCallback(() => {
                        null != s.role_id && (I.default.setSection(A.GuildSettingsSections.ROLES), I.default.selectRole(s.role_id))
                    }, [s.role_id]),
                    {
                        serviceName: k,
                        channelURL: U,
                        expireBehaviorLabel: F,
                        syncLabel: w,
                        subscribersText: W
                    } = a.useMemo(() => {
                        var e, t, l, n, a;
                        let i = null !== (l = null === (t = f.default.get(s.type)) || void 0 === t ? void 0 : null === (e = t.getPlatformUserUrl) || void 0 === e ? void 0 : e.call(t, s.account)) && void 0 !== l ? l : "";
                        switch (s.type) {
                            case A.PlatformTypes.YOUTUBE:
                                return {
                                    serviceName: C.default.Messages.INTEGRATIONS_YOUTUBE, expireBehaviorLabel: C.default.Messages.FORM_LABEL_MEMBERSHIP_EXPIRE_BEHAVIOR, syncLabel: C.default.Messages.FORM_LABEL_SYNCED_MEMBERS, subscribersText: C.default.Messages.NUM_MEMBERS.format({
                                        subscribers: null !== (n = s.subscriber_count) && void 0 !== n ? n : 0
                                    }), channelURL: i
                                };
                            case A.PlatformTypes.TWITCH:
                            default:
                                return {
                                    serviceName: C.default.Messages.INTEGRATIONS_TWITCH, expireBehaviorLabel: C.default.Messages.FORM_LABEL_SUB_EXPIRE_BEHAVIOR, syncLabel: C.default.Messages.FORM_LABEL_SYNCED_SUBS, subscribersText: C.default.Messages.NUM_SUBSCRIBERS.format({
                                        subscribers: null !== (a = s.subscriber_count) && void 0 !== a ? a : 0
                                    }), channelURL: i
                                }
                        }
                    }, [s.account, s.subscriber_count, s.type]),
                    {
                        roleLink: V,
                        syncDescriptionText: Y
                    } = a.useMemo(() => {
                        let e, t;
                        let a = null != s.role_id ? l.getRole(s.role_id) : null;
                        e = null != a ? (0, n.jsx)(u.Anchor, {
                            onClick: H,
                            children: a.name
                        }) : C.default.Messages.NONE;
                        let i = f.default.get(s.type);
                        return {
                            roleLink: e,
                            syncDescriptionText: t = s.revoked && null != i ? C.default.Messages.SYNC_REVOKED.format({
                                user: s.user,
                                platformName: i.name
                            }) : C.default.Messages.INTEGRATIONS_LAST_SYNC.format({
                                datetime: o(s.synced_at).calendar()
                            })
                        }
                    }, [l, H, s.revoked, s.role_id, s.synced_at, s.type, s.user]),
                    K = a.useMemo(() => {
                        let e = m.default.getGuildEmoji(l.id),
                            t = Object.values(l.roles).filter(e => null != e.tags && e.tags.integration_id === s.id).map(e => e.id);
                        return s.enable_emoticons ? e.sort((e, t) => e.name.localeCompare(t.name)).filter(e => null != s.role_id && (null == e ? void 0 : e.roles.some(e => t.includes(e)))) : []
                    }, [l.id, l.roles, s.enable_emoticons, s.id, s.role_id]);
                if (a.useEffect(() => {
                        (null == r ? void 0 : r.id) === s.id && (null == r ? void 0 : r.enabled) === !0 && P(!1)
                    }, [r, s.id]), s.enabled && null != s.user) t = [{
                    icon: g.default,
                    text: D ? C.default.Messages.INTEGRATION_ADDED_DATE.format({
                        timestamp: O.default.extractTimestamp(s.id)
                    }) : C.default.Messages.INTEGRATION_ADDED_USER_DATE.format({
                        user: null != s.user ? new N.default(s.user).tag : null,
                        timestamp: O.default.extractTimestamp(s.id)
                    })
                }];
                else {
                    let e = new URL(U);
                    t = [{
                        text: C.default.Messages.INTEGRATIONS_ACCOUNT_DESCRIPTION.format({
                            serviceName: k,
                            accountUrl: U,
                            accountUrlText: e.hostname + e.pathname
                        })
                    }]
                }
                let z = (0, n.jsxs)(E.default, {
                        className: x.header,
                        align: E.default.Align.CENTER,
                        children: [(0, n.jsx)(_.default, {
                            name: "".concat(s.name),
                            detailsClassName: x.description,
                            details: t
                        }), s.enabled ? (0, n.jsx)(E.default.Child, {
                            shrink: 0,
                            grow: 0,
                            children: (0, n.jsx)(h.default, {
                                className: x.expandIcon,
                                expanded: M && !b,
                                "aria-hidden": !0
                            })
                        }) : (0, n.jsx)(E.default.Child, {
                            shrink: 0,
                            grow: 0,
                            children: (0, n.jsx)(u.Button, {
                                size: u.Button.Sizes.SMALL,
                                color: u.Button.Colors.PRIMARY,
                                onClick: y,
                                disabled: b,
                                children: b ? (0, n.jsx)(p.default, {
                                    width: 24,
                                    height: 24
                                }) : (0, n.jsx)(n.Fragment, {
                                    children: C.default.Messages.INTEGRATIONS_ENABLE
                                })
                            })
                        })]
                    }),
                    Z = null;
                return M && !b && null != r && (Z = (0, n.jsxs)(E.default, {
                    className: x.body,
                    direction: E.default.Direction.VERTICAL,
                    children: [(0, n.jsx)(u.FormDivider, {
                        className: x.topDivider
                    }), function(e) {
                        let {
                            integration: t,
                            labelText: l,
                            subscribersText: a,
                            descriptionText: s,
                            roleLink: i,
                            onSync: r
                        } = e;
                        return (0, n.jsxs)(E.default, {
                            children: [(0, n.jsxs)(E.default.Child, {
                                basis: "50%",
                                children: [(0, n.jsx)(u.FormTitle, {
                                    className: R.marginBottom8,
                                    children: C.default.Messages.FORM_LABEL_SYNCED_ROLE
                                }), (0, n.jsx)(u.Text, {
                                    className: x.syncedRole,
                                    color: "header-primary",
                                    variant: "text-sm/normal",
                                    children: i
                                })]
                            }), (0, n.jsxs)(E.default.Child, {
                                basis: "50%",
                                children: [(0, n.jsx)(u.FormTitle, {
                                    className: R.marginBottom8,
                                    children: l
                                }), (0, n.jsxs)(E.default, {
                                    justify: E.default.Justify.BETWEEN,
                                    children: [(0, n.jsxs)(E.default, {
                                        direction: E.default.Direction.VERTICAL,
                                        children: [(0, n.jsx)(u.Text, {
                                            color: "header-primary",
                                            variant: "text-sm/normal",
                                            children: a
                                        }), (0, n.jsx)(u.Text, {
                                            color: "header-secondary",
                                            variant: "text-xs/normal",
                                            children: s
                                        })]
                                    }), (0, n.jsx)(u.Button, {
                                        size: u.Button.Sizes.SMALL,
                                        look: u.Button.Looks.FILLED,
                                        color: u.Button.Colors.PRIMARY,
                                        disabled: t.syncing || t.revoked,
                                        onClick: r,
                                        children: t.syncing ? (0, n.jsx)(p.default, {
                                            width: 24,
                                            height: 24
                                        }) : (0, n.jsx)(n.Fragment, {
                                            children: C.default.Messages.SYNC
                                        })
                                    })]
                                })]
                            })]
                        })
                    }({
                        integration: r,
                        labelText: w,
                        subscribersText: W,
                        descriptionText: Y,
                        roleLink: V,
                        onSync: B
                    }), (0, n.jsx)(u.FormDivider, {
                        className: x.midDivider
                    }), function(e) {
                        let {
                            integration: t,
                            labelText: l,
                            onBehaviorChange: a,
                            onGracePeriodChange: s
                        } = e;
                        return (0, n.jsxs)(E.default, {
                            children: [(0, n.jsxs)(E.default.Child, {
                                basis: "50%",
                                children: [(0, n.jsx)(u.FormTitle, {
                                    className: R.marginBottom8,
                                    children: l
                                }), (0, n.jsx)(u.SingleSelect, {
                                    placeholder: l,
                                    value: "".concat(t.expire_behavior),
                                    options: [{
                                        value: "0",
                                        label: C.default.Messages.REMOVE_SYNCED_ROLE
                                    }, {
                                        value: "1",
                                        label: C.default.Messages.KICK_FROM_SERVER
                                    }],
                                    isDisabled: t.syncing,
                                    onChange: e => a(parseInt(e))
                                })]
                            }), (0, n.jsxs)(E.default.Child, {
                                basis: "50%",
                                children: [(0, n.jsx)(u.FormTitle, {
                                    className: R.marginBottom8,
                                    children: C.default.Messages.FORM_LABEL_EXPIRE_GRACE_PERIOD
                                }), (0, n.jsx)(u.SingleSelect, {
                                    placeholder: C.default.Messages.FORM_LABEL_EXPIRE_GRACE_PERIOD,
                                    maxVisibleItems: 5,
                                    value: "".concat(t.expire_grace_period),
                                    options: [1, 3, 7, 14, 30].map(e => ({
                                        value: "".concat(e),
                                        label: C.default.Messages.N_DAYS.format({
                                            days: e
                                        })
                                    })),
                                    onChange: e => s(parseInt(e)),
                                    isDisabled: t.syncing
                                })]
                            })]
                        })
                    }({
                        integration: r,
                        labelText: F,
                        onBehaviorChange: function(e) {
                            c.default.updateIntegration({
                                expireBehavior: e
                            })
                        },
                        onGracePeriodChange: function(e) {
                            c.default.updateIntegration({
                                expireGracePeriod: e
                            })
                        }
                    }), s.type === A.PlatformTypes.TWITCH ? function(e) {
                        let {
                            integration: t,
                            emojis: l,
                            onToggle: a
                        } = e;
                        return (0, n.jsxs)(E.default, {
                            direction: E.default.Direction.VERTICAL,
                            children: [(0, n.jsx)(u.Checkbox, {
                                type: u.Checkbox.Types.INVERTED,
                                className: i(R.marginTop20, R.marginBottom8),
                                value: t.enable_emoticons,
                                disabled: t.syncing,
                                onChange: e => {
                                    let {
                                        currentTarget: t
                                    } = e;
                                    return a(t.checked)
                                },
                                children: (0, n.jsx)(u.FormText, {
                                    children: C.default.Messages.ENABLE_TWITCH_EMOJI_SYNC
                                })
                            }), (0, n.jsx)(E.default, {
                                wrap: E.default.Wrap.WRAP,
                                className: x.twitchEmojis,
                                children: l.map((e, t) => (0, n.jsx)(u.Tooltip, {
                                    text: e.name,
                                    children: t => (0, n.jsx)("img", {
                                        alt: C.default.Messages.IMG_ALT_EMOJI.format({
                                            name: e.name
                                        }),
                                        draggable: !1,
                                        className: i(x.emoji, "emoji", "jumboable"),
                                        src: S.default.getEmojiURL({
                                            id: e.id,
                                            animated: e.animated,
                                            size: 28
                                        }),
                                        ...t
                                    }, e.name)
                                }, t))
                            })]
                        })
                    }({
                        integration: r,
                        emojis: K,
                        onToggle: function(e) {
                            c.default.updateIntegration({
                                enableEmoticons: e
                            })
                        }
                    }) : null, (0, n.jsx)(u.FormDivider, {
                        className: x.bottomDivider
                    }), (0, n.jsx)(E.default, {
                        children: (0, n.jsx)(u.Button, {
                            className: x.disableButton,
                            size: u.Button.Sizes.SMALL,
                            color: u.Button.Colors.RED,
                            look: u.Button.Looks.LINK,
                            onClick: G,
                            children: C.default.Messages.INTEGRATIONS_DISABLE
                        })
                    })]
                })), (0, n.jsx)(u.Card, {
                    editable: !0,
                    className: x.card,
                    children: (0, n.jsxs)(E.default, {
                        direction: E.default.Direction.VERTICAL,
                        children: [s.enabled ? (0, n.jsx)(u.Clickable, {
                            className: x.expandableHeader,
                            "aria-expanded": M && !b,
                            onClick: v,
                            children: z
                        }) : z, Z]
                    })
                })
            }
        },
        280978: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return E
                }
            }), l("424973");
            var n = l("37983"),
                a = l("884691"),
                s = l("77078"),
                i = l("404118"),
                r = l("713841"),
                o = l("611183"),
                d = l("145131"),
                u = l("461380"),
                c = l("733160"),
                f = l("315102"),
                m = l("674916"),
                I = l("49111"),
                N = l("782340"),
                T = l("385197");

            function E(e) {
                let {
                    webhook: t,
                    editedWebhook: l,
                    channelOptions: E,
                    isExpanded: h,
                    errors: g,
                    onToggleExpand: p
                } = e, S = a.useMemo(() => {
                    var e, l;
                    return e = t, null != (l = t.avatar) && /^data:/.test(l) ? l : (0, f.getUserAvatarURL)({
                        id: e.id,
                        avatar: l,
                        discriminator: I.NON_USER_BOT_DISCRIMINATOR
                    })
                }, [t]), O = a.useCallback(() => {
                    (0, s.openModal)(e => (0, n.jsx)(s.ConfirmModal, {
                        ...e,
                        header: N.default.Messages.INTEGRATIONS_FOLLOWED_CHANNEL_DELETE_TITLE.format({
                            name: t.name
                        }),
                        confirmText: N.default.Messages.INTEGRATIONS_FOLLOWED_CHANNEL_DELETE,
                        cancelText: N.default.Messages.CANCEL,
                        onConfirm: () => {
                            o.default.delete(t.guild_id, t.id).catch(() => {
                                i.default.show({
                                    title: N.default.Messages.INTEGRATIONS_FOLLOWED_CHANNEL_ERROR_DELETING,
                                    body: N.default.Messages.WEBHOOK_ERROR_INTERNAL_SERVER_ERROR
                                })
                            })
                        },
                        children: (0, n.jsx)(s.Text, {
                            variant: "text-md/normal",
                            children: N.default.Messages.INTEGRATIONS_FOLLOWED_CHANNEL_DELETE_BODY
                        })
                    }))
                }, [t.guild_id, t.id, t.name]), _ = [];
                null != t.source_channel && null != t.source_guild && (_.push({
                    icon: c.default,
                    text: t.source_channel.name
                }), _.push({
                    text: (0, n.jsx)("span", {
                        className: T.guildSource,
                        children: N.default.Messages.INTEGRATIONS_FOLLOWED_CHANNEL_GUILD_SOURCE.format({
                            guildHook: () => (0, n.jsx)("span", {
                                className: T.sourceName,
                                children: t.source_guild.name
                            }, t.id)
                        })
                    }, "guild-source")
                }));
                let A = null;
                return h && null != l && (A = (0, n.jsxs)("div", {
                    className: T.body,
                    children: [(0, n.jsx)(s.FormDivider, {
                        className: T.topDivider
                    }), (0, n.jsx)(d.default, {
                        children: (0, n.jsxs)(d.default, {
                            direction: d.default.Direction.VERTICAL,
                            children: [(0, n.jsxs)(d.default, {
                                children: [(0, n.jsx)(d.default.Child, {
                                    basis: "50%",
                                    children: (0, n.jsx)(s.FormItem, {
                                        title: N.default.Messages.INTEGRATIONS_FOLLOWED_CHANNEL_NAME,
                                        children: (0, n.jsx)(s.TextInput, {
                                            value: l.name,
                                            onChange: e => {
                                                r.default.updateWebhook({
                                                    name: e
                                                })
                                            },
                                            maxLength: 80,
                                            error: g.name
                                        })
                                    })
                                }), (0, n.jsx)(d.default.Child, {
                                    basis: "50%",
                                    children: (0, n.jsx)(s.FormItem, {
                                        title: N.default.Messages.INTEGRATIONS_FOLLOWED_CHANNEL_DEST_CHANNEL,
                                        children: (0, n.jsx)(s.SingleSelect, {
                                            value: l.channel_id,
                                            options: E,
                                            onChange: e => {
                                                r.default.updateWebhook({
                                                    channelId: e
                                                })
                                            }
                                        })
                                    })
                                })]
                            }), (0, n.jsx)(s.FormDivider, {
                                className: T.bottomDivider
                            }), (0, n.jsx)(d.default, {
                                children: (0, n.jsx)(s.Button, {
                                    onClick: O,
                                    size: s.Button.Sizes.SMALL,
                                    color: s.Button.Colors.RED,
                                    look: s.Button.Looks.LINK,
                                    className: T.removeButton,
                                    children: N.default.Messages.INTEGRATIONS_FOLLOWED_CHANNEL_DELETE
                                })
                            })]
                        })
                    })]
                })), (0, n.jsx)(s.Card, {
                    editable: !0,
                    className: T.card,
                    children: (0, n.jsxs)(d.default, {
                        direction: d.default.Direction.VERTICAL,
                        children: [(0, n.jsx)(s.Clickable, {
                            className: T.header,
                            "aria-expanded": h,
                            onClick: p,
                            children: (0, n.jsxs)(d.default, {
                                align: d.default.Align.CENTER,
                                children: [(0, n.jsx)(m.default, {
                                    name: t.name,
                                    imageSrc: S,
                                    detailsClassName: T.description,
                                    details: _
                                }), (0, n.jsx)(u.default, {
                                    className: T.expandIcon,
                                    expanded: h,
                                    "aria-hidden": !0
                                })]
                            })
                        }), A]
                    })
                })
            }
        },
        700104: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return x
                }
            }), l("424973"), l("222007");
            var n = l("37983"),
                a = l("884691"),
                s = l("414456"),
                i = l.n(s),
                r = l("446674"),
                o = l("77078"),
                d = l("716241"),
                u = l("186211"),
                c = l("952943"),
                f = l("5667"),
                m = l("766274"),
                I = l("145131"),
                N = l("83910"),
                T = l("772280"),
                E = l("71216"),
                h = l("741919"),
                g = l("599110"),
                p = l("674916"),
                S = l("702411"),
                O = l("49111"),
                _ = l("843455"),
                A = l("782340"),
                C = l("946197");

            function x(e) {
                var t, l, s, x;
                let {
                    name: R,
                    icon: M,
                    imageSrc: v,
                    iconBackgroundColor: L,
                    iconClassName: j,
                    details: b,
                    integration: P,
                    buttonText: D,
                    buttonDisabled: y,
                    hasNextSection: G,
                    onButtonClick: B,
                    guildId: H,
                    isScrolling: k,
                    canShowMigrationTooltip: U
                } = e, [F, w] = a.useState(!1), [W, V] = a.useState(!1), Y = null == P ? void 0 : P.integration.id;
                let K = (t = D, l = y, s = G, x = B, null == t || null == x ? null : s ? (0, n.jsxs)(I.default, {
                        align: I.default.Align.CENTER,
                        children: [(0, n.jsx)(o.Text, {
                            variant: "text-sm/normal",
                            children: t
                        }), s ? (0, n.jsx)(T.default, {
                            width: 10,
                            height: 10,
                            className: C.caret
                        }) : null]
                    }) : (0, n.jsx)(o.Button, {
                        size: o.Button.Sizes.SMALL,
                        look: s ? o.Button.Looks.LINK : o.Button.Looks.FILLED,
                        color: s ? o.Button.Colors.PRIMARY : o.Button.Colors.BRAND,
                        disabled: l,
                        onClick: x,
                        children: t
                    })),
                    z = U && !k && !W && void 0 !== H && null != P;
                a.useEffect(() => {
                    z && g.default.track(O.AnalyticEvents.COMMANDS_MIGRATION_TOOLTIP_VIEWED, {
                        ...(0, d.collectGuildAnalyticsMetadata)(H),
                        application_id: null == P ? void 0 : P.application.id,
                        location: "overview"
                    })
                }, [H, null == P ? void 0 : P.application.id, z]);
                let Z = z ? (0, n.jsx)(o.Popout, {
                        renderPopout: () => (0, n.jsx)(o.Clickable, {
                            onClick: e => {
                                e.stopPropagation(), V(!0), S.default.dismissOverviewTooltip(H, P.integration)
                            },
                            children: (0, n.jsx)(f.default, {
                                content: A.default.Messages.COMMANDS_SCOPE_MIGRATION_OVERVIEW_TOOLTIP,
                                onClick: () => {}
                            })
                        }),
                        position: "bottom",
                        align: "center",
                        animation: o.Popout.Animation.TRANSLATE,
                        shouldShow: !0,
                        children: () => K
                    }) : K,
                    q = (0, r.useStateFromStoresArray)([u.default], () => {
                        var e;
                        return null != P && null != H && null !== (e = u.default.getApplicationEntitlementsForGuild(P.application.id, H)) && void 0 !== e ? e : []
                    }),
                    J = (0, r.useStateFromStores)([c.default], () => c.default.integrationIdsWithCommands),
                    X = null != Y && J.has(Y),
                    Q = (0, n.jsxs)(I.default, {
                        children: [(0, n.jsx)(p.default, {
                            name: R,
                            icon: M,
                            imageSrc: v,
                            iconBackgroundColor: L,
                            iconClassName: j,
                            details: b,
                            isPremium: q.length > 0
                        }), (0, n.jsx)(I.default.Child, {
                            shrink: 0,
                            grow: 0,
                            children: (0, n.jsxs)(I.default, {
                                align: I.default.Align.CENTER,
                                justify: I.default.Justify.END,
                                children: [function(e, t, l) {
                                    var a;
                                    if (null == e) return null;
                                    let s = [],
                                        {
                                            application: i,
                                            integration: r,
                                            webhooks: d
                                        } = e;
                                    return null != i.bot && s.push((0, n.jsx)(o.TooltipContainer, {
                                        forceOpen: t,
                                        text: new(0, m.default)(i.bot).isVerifiedBot() ? A.default.Messages.INTEGRATIONS_APPLICATION_VERIFIED_BOT : A.default.Messages.INTEGRATIONS_APPLICATION_BOT,
                                        className: C.feature,
                                        children: (0, n.jsx)(E.default, {
                                            width: 24,
                                            height: 24,
                                            className: C.featureIcon
                                        })
                                    }, "bot")), d.length > 0 && s.push((0, n.jsx)(o.TooltipContainer, {
                                        forceOpen: t,
                                        text: A.default.Messages.INTEGRATIONS_WEBHOOKS_SUMMARY.format({
                                            count: d.length
                                        }),
                                        className: C.feature,
                                        children: (0, n.jsx)(h.default, {
                                            width: 24,
                                            height: 24,
                                            className: C.featureIcon
                                        })
                                    }, "webhooks")), (null == r ? void 0 : null === (a = r.scopes) || void 0 === a ? void 0 : a.includes(_.OAuth2Scopes.APPLICATIONS_COMMANDS)) === !0 && l && s.push((0, n.jsx)("div", {
                                        className: C.feature,
                                        children: (0, n.jsx)(N.default, {
                                            width: 24,
                                            height: 24,
                                            className: C.featureIcon
                                        })
                                    }, "commands")), s
                                }(P, F, X), Z]
                            })
                        })]
                    });
                return G ? (0, n.jsx)(o.Clickable, {
                    onClick: () => {
                        U && null != H && null != P && S.default.dismissOverviewTooltip(H, P.integration), null == B || B()
                    },
                    onFocus: () => w(!0),
                    onBlur: () => w(!1),
                    children: (0, n.jsx)(o.Card, {
                        editable: !0,
                        className: i(C.card, C.clickable),
                        children: Q
                    })
                }) : (0, n.jsx)(o.Card, {
                    editable: !0,
                    className: C.card,
                    children: Q
                })
            }
        },
        87390: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return M
                }
            }), l("222007"), l("424973");
            var n = l("37983"),
                a = l("884691"),
                s = l("414456"),
                i = l.n(s),
                r = l("872717"),
                o = l("862337"),
                d = l("77078"),
                u = l("404118"),
                c = l("713841"),
                f = l("611183"),
                m = l("608684"),
                I = l("766274"),
                N = l("145131"),
                T = l("461380"),
                E = l("841811"),
                h = l("315102"),
                g = l("306160"),
                p = l("299039"),
                S = l("158998"),
                O = l("674916"),
                _ = l("49111"),
                A = l("782340"),
                C = l("40489");
            let x = e => {
                if (null == e) return null;
                let t = new I.default(e);
                return S.default.getUserTag(t)
            };

            function R(e, t) {
                return null != t && /^data:/.test(t) ? t : (0, h.getUserAvatarURL)({
                    id: e.id,
                    avatar: t,
                    discriminator: _.NON_USER_BOT_DISCRIMINATOR
                })
            }

            function M(e) {
                let {
                    id: t,
                    webhook: l,
                    editedWebhook: s,
                    channelOptions: I,
                    isExpanded: h,
                    isNew: S,
                    errors: M,
                    onToggleExpand: v
                } = e, [L, j] = a.useState(!1), [b] = a.useState(new o.Timeout);
                a.useEffect(() => () => b.stop(), [b]);
                let P = a.useMemo(() => R(l, l.avatar), [l]),
                    D = a.useCallback(() => {
                        let e = "".concat(r.default.getAPIBaseURL(!1)).concat(_.Endpoints.WEBHOOK_INTEGRATION(l.id, l.token));
                        (0, g.copy)(e)
                    }, [l]),
                    y = a.useCallback(() => {
                        (0, d.openModal)(e => (0, n.jsx)(d.ConfirmModal, {
                            ...e,
                            header: A.default.Messages.WEBHOOK_DELETE_TITLE.format({
                                name: l.name
                            }),
                            confirmText: A.default.Messages.WEBHOOK_DELETE,
                            cancelText: A.default.Messages.WEBHOOK_CANCEL,
                            onConfirm: () => {
                                f.default.delete(l.guild_id, l.id).catch(e => {
                                    let {
                                        status: t
                                    } = e;
                                    429 === t ? u.default.show({
                                        title: A.default.Messages.WEBHOOK_ERROR_DELETING_WEBHOOK,
                                        body: A.default.Messages.WEBHOOK_ERROR_DELETING_WEBHOOK_RATE_LIMIT
                                    }) : u.default.show({
                                        title: A.default.Messages.WEBHOOK_ERROR_DELETING_WEBHOOK,
                                        body: A.default.Messages.WEBHOOK_ERROR_INTERNAL_SERVER_ERROR
                                    })
                                })
                            },
                            children: (0, n.jsx)(d.Text, {
                                variant: "text-md/normal",
                                children: A.default.Messages.WEBHOOK_DELETE_BODY.format({
                                    name: l.name
                                })
                            })
                        }))
                    }, [l.guild_id, l.id, l.name]),
                    G = [];
                null != l.user ? G.push({
                    icon: E.default,
                    text: A.default.Messages.INTEGRATION_CREATED_USER_DATE.format({
                        user: x(l.user),
                        timestamp: p.default.extractTimestamp(l.id)
                    })
                }) : G.push({
                    icon: E.default,
                    text: A.default.Messages.INTEGRATION_CREATED_DATE.format({
                        timestamp: p.default.extractTimestamp(l.id)
                    })
                });
                let B = null;
                return h && null != s && (B = (0, n.jsxs)("div", {
                    className: C.body,
                    children: [(0, n.jsx)(d.FormDivider, {
                        className: C.topDivider
                    }), (0, n.jsxs)(N.default, {
                        children: [(0, n.jsx)(N.default.Child, {
                            shrink: 1,
                            grow: 0,
                            children: (0, n.jsxs)(N.default, {
                                className: C.avatarWrapper,
                                direction: N.default.Direction.VERTICAL,
                                children: [(0, n.jsx)(m.default, {
                                    image: s.avatar,
                                    onChange: e => {
                                        c.default.updateWebhook({
                                            avatar: e
                                        })
                                    },
                                    makeURL: e => R(l, e),
                                    imageClassName: C.avatarUploaderInner,
                                    showIcon: !0
                                }), null != M.avatar && "" !== M.avatar ? (0, n.jsx)(n.Fragment, {
                                    children: M.avatar
                                }) : null]
                            })
                        }), (0, n.jsxs)(N.default, {
                            direction: N.default.Direction.VERTICAL,
                            children: [(0, n.jsxs)(N.default, {
                                children: [(0, n.jsx)(N.default.Child, {
                                    basis: "50%",
                                    children: (0, n.jsx)(d.FormItem, {
                                        title: A.default.Messages.WEBHOOK_FORM_NAME,
                                        children: (0, n.jsx)(d.TextInput, {
                                            value: s.name,
                                            onChange: e => {
                                                c.default.updateWebhook({
                                                    name: e
                                                })
                                            },
                                            maxLength: 80,
                                            error: M.name
                                        })
                                    })
                                }), (0, n.jsx)(N.default.Child, {
                                    basis: "50%",
                                    children: (0, n.jsx)(d.FormItem, {
                                        title: A.default.Messages.CHANNEL,
                                        children: (0, n.jsx)(d.SearchableSelect, {
                                            value: s.channel_id,
                                            options: I,
                                            onChange: e => {
                                                c.default.updateWebhook({
                                                    channelId: e
                                                })
                                            },
                                            placeholder: A.default.Messages.CHANNEL_SELECT
                                        })
                                    })
                                })]
                            }), (0, n.jsx)(d.FormDivider, {
                                className: C.bottomDivider
                            }), (0, n.jsxs)(N.default, {
                                children: [(0, n.jsx)(d.Tooltip, {
                                    text: A.default.Messages.INTEGRATIONS_WEBHOOK_COPIED_URL,
                                    forceOpen: L,
                                    color: d.TooltipColors.GREEN,
                                    disableTooltipPointerEvents: !0,
                                    children: e => {
                                        let {
                                            onClick: t,
                                            onMouseEnter: a,
                                            onMouseLeave: s,
                                            ...i
                                        } = e;
                                        return (0, n.jsx)(d.Button, {
                                            ...i,
                                            onClick: () => {
                                                null == t || t(), j(!0), b.start(1e3, () => j(!1)), D()
                                            },
                                            size: d.Button.Sizes.SMALL,
                                            color: d.Button.Colors.PRIMARY,
                                            look: d.Button.Looks.FILLED,
                                            className: C.copyButton,
                                            disabled: null == l.token || "" === l.token,
                                            children: A.default.Messages.INTEGRATIONS_WEBHOOK_COPY_URL
                                        })
                                    }
                                }), (0, n.jsx)(d.Button, {
                                    onClick: y,
                                    size: d.Button.Sizes.SMALL,
                                    color: d.Button.Colors.RED,
                                    look: d.Button.Looks.LINK,
                                    children: A.default.Messages.INTEGRATIONS_WEBHOOK_DELETE
                                })]
                            })]
                        })]
                    })]
                })), (0, n.jsx)(d.Card, {
                    editable: !0,
                    id: t,
                    className: i(C.card, S ? C.pulse : null),
                    children: (0, n.jsxs)(N.default, {
                        direction: N.default.Direction.VERTICAL,
                        children: [(0, n.jsx)(d.Clickable, {
                            className: C.header,
                            "aria-expanded": h,
                            onClick: v,
                            children: (0, n.jsxs)(N.default, {
                                align: N.default.Align.CENTER,
                                children: [(0, n.jsx)(O.default, {
                                    name: l.name,
                                    imageSrc: P,
                                    details: G
                                }), (0, n.jsx)(T.default, {
                                    className: C.expandIcon,
                                    expanded: h,
                                    "aria-hidden": !0
                                })]
                            })
                        }), B]
                    })
                })
            }
        },
        421475: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return N
                }
            }), l("424973"), l("222007");
            var n = l("37983"),
                a = l("884691"),
                s = l("77078"),
                i = l("713841"),
                r = l("679653"),
                o = l("27618"),
                d = l("697218"),
                u = l("280978"),
                c = l("87390"),
                f = l("49111"),
                m = l("782340"),
                I = l("808201");

            function N(e) {
                let {
                    webhooks: t,
                    selectableWebhookChannels: l,
                    lastCreatedWebhookId: N,
                    editedWebhook: T,
                    errors: E,
                    canNavigate: h
                } = e, g = a.useMemo(() => Object.values(l).map(e => ({
                    value: e.id,
                    label: (0, r.computeChannelName)(e, d.default, o.default, !0)
                })), [l]), p = a.useMemo(() => {
                    let e = {};
                    for (let n of t)
                        if (n.channel_id in e) e[n.channel_id].webhooks.push(n);
                        else {
                            let t = l[n.channel_id];
                            null != t && (e[n.channel_id] = {
                                channel: t,
                                webhooks: [n]
                            })
                        } return Object.values(e).sort((e, t) => e.channel.name.localeCompare(t.channel.name))
                }, [l, t]), S = a.useCallback(e => {
                    h() && (e === (null == T ? void 0 : T.id) ? i.default.stopEditingWebhook() : i.default.startEditingWebhook(e))
                }, [h, T]);
                return (0, n.jsx)("div", {
                    className: I.list,
                    children: p.map(e => {
                        let {
                            channel: t,
                            webhooks: l
                        } = e;
                        return function(e) {
                            let {
                                channel: t,
                                webhooks: l,
                                channelOptions: a,
                                lastCreatedWebhookId: i,
                                editedWebhook: N,
                                errors: T,
                                toggleWebhookExpand: E
                            } = e;
                            return (0, n.jsxs)("div", {
                                children: [(0, n.jsx)(s.FormTitle, {
                                    className: I.groupHeader,
                                    children: m.default.Messages.INTEGRATIONS_CHANNEL_FOLLOWING_SECTION.format({
                                        channelHook: () => (0, n.jsx)("span", {
                                            className: I.channelName,
                                            children: (0, r.computeChannelName)(t, d.default, o.default, !0)
                                        }, t.id)
                                    })
                                }), l.map(e => {
                                    var t;
                                    if (e.type === f.WebhookTypes.CHANNEL_FOLLOWER) return (0, n.jsx)(u.default, {
                                        webhook: e,
                                        editedWebhook: N,
                                        channelOptions: a,
                                        isExpanded: (null == N ? void 0 : N.id) === e.id,
                                        onToggleExpand: () => E(e.id),
                                        errors: T
                                    }, e.id);
                                    return (0, n.jsx)(c.default, {
                                        id: (t = e.id, "settings-integrations-webhook-".concat(t)),
                                        webhook: e,
                                        editedWebhook: N,
                                        channelOptions: a,
                                        isExpanded: (null == N ? void 0 : N.id) === e.id,
                                        isNew: i === e.id,
                                        onToggleExpand: () => E(e.id),
                                        errors: T
                                    }, e.id)
                                })]
                            }, t.id)
                        }({
                            channel: t,
                            webhooks: l,
                            channelOptions: g,
                            lastCreatedWebhookId: N,
                            editedWebhook: T,
                            errors: E,
                            toggleWebhookExpand: S
                        })
                    })
                })
            }
        },
        730988: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return m
                }
            });
            var n = l("37983"),
                a = l("884691"),
                s = l("414456"),
                i = l.n(s),
                r = l("77078"),
                o = l("145131"),
                d = l("68927");
            class u extends a.PureComponent {
                render() {
                    let {
                        scrollable: e,
                        ...t
                    } = this.props;
                    return e ? (0, n.jsx)("aside", {
                        className: d.sidebarScrollable,
                        children: (0, n.jsx)(r.Scroller, {
                            fade: !0,
                            className: d.scroller,
                            children: (0, n.jsx)(o.default.Child, {
                                ...t,
                                wrap: !0
                            })
                        })
                    }) : (0, n.jsx)(o.default.Child, {
                        ...t,
                        wrap: !0
                    })
                }
            }
            u.defaultProps = {
                basis: 232,
                grow: 0,
                shrink: 0,
                className: d.sidebar
            };
            class c extends a.PureComponent {
                render() {
                    let {
                        className: e,
                        ...t
                    } = this.props;
                    return (0, n.jsx)(o.default.Child, {
                        className: i(d.content, e),
                        wrap: !0,
                        ...t
                    })
                }
            }
            class f extends a.PureComponent {
                render() {
                    return (0, n.jsx)(o.default, {
                        ...this.props
                    })
                }
            }
            f.defaultProps = {
                className: d.layout,
                direction: o.default.Direction.HORIZONTAL,
                justify: o.default.Justify.START,
                align: o.default.Align.START,
                wrap: o.default.Wrap.NO_WRAP,
                shrink: 1,
                grow: 1,
                basis: "auto"
            }, f.Direction = o.default.Direction, f.Justify = o.default.Justify, f.Align = o.default.Align, f.Wrap = o.default.Wrap, f.Sidebar = u, f.Content = c;
            var m = f
        },
        822997: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                PermissionOverrideType: function() {
                    return a
                },
                default: function() {
                    return E
                }
            });
            var n, a, s = l("37983");
            l("884691");
            var i = l("414456"),
                r = l.n(i),
                o = l("77078"),
                d = l("36694"),
                u = l("945330"),
                c = l("548775"),
                f = l("782340"),
                m = l("39185");
            (n = a || (a = {})).DENY = "DENY", n.PASSTHROUGH = "PASSTHROUGH", n.ALLOW = "ALLOW";
            let I = Object.keys(a);

            function N(e) {
                let {
                    value: t = "PASSTHROUGH",
                    onChange: l,
                    labelledBy: n,
                    disabled: a = !1
                } = e, i = (0, o.useRadioGroup)({
                    orientation: "horizontal",
                    isDisabled: a,
                    labelledBy: n
                });
                return (0, s.jsx)("div", {
                    className: r(m.group, {
                        [m.disabled]: a
                    }),
                    ...i,
                    children: I.map(e => (0, s.jsx)(T, {
                        type: e,
                        isSelected: t === e,
                        onSelect: e => {
                            t !== e && !a && l(e)
                        }
                    }, e))
                })
            }

            function T(e) {
                let t, l, n, {
                    type: a,
                    onSelect: i,
                    isSelected: I
                } = e;
                switch (a) {
                    case "DENY":
                        n = f.default.Messages.PERMISSION_OVERRIDE_DENY, t = u.default, l = m.deny;
                        break;
                    case "ALLOW":
                        n = f.default.Messages.PERMISSION_OVERRIDE_ALLOW, t = d.default, l = m.allow;
                        break;
                    default:
                        n = f.default.Messages.PERMISSION_OVERRIDE_PASSTHROUGH, t = c.default, l = m.passthrough
                }
                let N = (0, o.useRadioItem)({
                    isSelected: I,
                    label: n
                });
                return (0, s.jsx)(o.Clickable, {
                    className: r(m.item, l, {
                        [m.selected]: I
                    }),
                    onClick: () => i(a),
                    ...N,
                    children: (0, s.jsx)(t, {
                        width: 16,
                        height: 16
                    })
                })
            }
            N.Types = a;
            var E = N
        },
        350625: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return c
                }
            });
            var n = l("37983");
            l("884691");
            var a = l("77078"),
                s = l("701909"),
                i = l("145131"),
                r = l("822997"),
                o = l("476765"),
                d = l("782340"),
                u = l("926622");

            function c(e) {
                let {
                    value: t,
                    onChange: l,
                    children: c,
                    note: f,
                    helpdeskArticleId: m,
                    style: I,
                    disabled: N = !1,
                    hideBorder: T = !1,
                    className: E = u.marginBottom20
                } = e, h = (0, o.useUID)();
                return (0, n.jsxs)(i.default, {
                    style: I,
                    className: E,
                    direction: i.default.Direction.VERTICAL,
                    children: [(0, n.jsxs)(i.default, {
                        children: [(0, n.jsx)(i.default.Child, {
                            children: (0, n.jsx)(a.FormTitle, {
                                id: h,
                                className: u.marginReset,
                                tag: a.FormTitleTags.H3,
                                disabled: N,
                                children: c
                            })
                        }), (0, n.jsx)(i.default.Child, {
                            grow: 0,
                            shrink: 0,
                            children: (0, n.jsx)(r.default, {
                                value: t,
                                onChange: l,
                                disabled: N,
                                labelledBy: h
                            })
                        })]
                    }), null != f && (0, n.jsx)(i.default.Child, {
                        className: u.marginTop4,
                        children: (0, n.jsx)(a.FormText, {
                            type: a.FormTextTypes.DESCRIPTION,
                            children: f
                        })
                    }), null != m && (0, n.jsx)(i.default.Child, {
                        className: u.marginTop4,
                        children: (0, n.jsx)(a.FormText, {
                            disabled: N,
                            type: a.FormTextTypes.DESCRIPTION,
                            children: (0, n.jsx)(a.Anchor, {
                                href: s.default.getArticleURL(m),
                                children: d.default.Messages.LEARN_MORE
                            })
                        })
                    }), !T && (0, n.jsx)(i.default.Child, {
                        className: u.marginTop20,
                        children: (0, n.jsx)(a.FormDivider, {})
                    })]
                })
            }
            r.default.Types, c.Types = r.default.Types
        },
        17837: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return r
                }
            });
            var n = l("37983");
            l("884691");
            var a = l("469563"),
                s = l("605141"),
                i = l("75196"),
                r = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: l = 24,
                        color: a = "currentColor",
                        foreground: s,
                        ...r
                    } = e;
                    return (0, n.jsx)("svg", {
                        ...(0, i.default)(r),
                        width: t,
                        height: l,
                        viewBox: "0 0 16 17",
                        children: (0, n.jsx)("path", {
                            fill: a,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            className: s,
                            d: "M5.33333 12.9713H3.33333C2.598 12.9713 2 12.3726 2 11.6379V2.97127C2 2.23661 2.598 1.63794 3.33333 1.63794H10.6667C11.402 1.63794 12 2.23661 12 2.97127V4.97127H6.66667C5.93133 4.97127 5.33333 5.56994 5.33333 6.30461V12.9713ZM8 6.30461H12.6667C13.402 6.30461 14 6.90327 14 7.63794V13.6379C14 14.3733 13.402 14.9713 12.6667 14.9713H8C7.26467 14.9713 6.66667 14.3733 6.66667 13.6379V7.63794C6.66667 6.90327 7.26467 6.30461 8 6.30461ZM10.6667 8.30461H8V8.97127H10.6667V8.30461ZM8 12.9713H12.6667V12.3046H8V12.9713ZM8 10.9713H12.6667V10.3046H8V10.9713Z"
                        })
                    })
                }, s.PaperIcon, void 0, {
                    size: 24
                })
        },
        295810: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return i
                }
            });
            var n = l("37983");
            l("884691");
            var a = l("469563"),
                s = l("202084"),
                i = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: l = 24,
                        color: a = "currentColor",
                        className: s,
                        foreground: i
                    } = e;
                    return (0, n.jsx)("svg", {
                        width: t,
                        height: l,
                        viewBox: "0 0 24 24",
                        className: s,
                        children: (0, n.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            fill: a,
                            className: i,
                            d: "M20 1.707V4.293L16.707 1L15.293 2.414L18.586 5.707H16V7.707H22V1.707H20ZM5 14.707H8V8.70697C8 7.60497 8.897 6.70697 10 6.70697H14V3.70697C14 2.60497 13.103 1.70697 12 1.70697H5C3.897 1.70697 3 2.60497 3 3.70697V12.707C3 13.809 3.897 14.707 5 14.707ZM12 8.70697H19C20.103 8.70697 21 9.60497 21 10.707V19.707C21 20.81 20.103 21.707 19 21.707H12C10.897 21.707 10 20.81 10 19.707V10.707C10 9.60497 10.897 8.70697 12 8.70697ZM16 12.707V11.707H12V12.707H16ZM12 18.707H19V17.707H12V18.707ZM12 15.707H19V14.707H12V15.707Z"
                        })
                    })
                }, s.ChannelsFollowedIcon, void 0, {
                    size: 24
                })
        },
        429893: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return o
                }
            });
            var n = l("37983");
            l("884691");
            var a = l("414456"),
                s = l.n(a),
                i = l("75196"),
                r = l("592353");

            function o(e) {
                let {
                    width: t = 16,
                    height: l = 16,
                    color: a = "currentColor",
                    foreground: o,
                    className: d,
                    ...u
                } = e;
                return (0, n.jsx)("svg", {
                    className: s(r.updateAvailable, d),
                    ...(0, i.default)(u),
                    width: t,
                    height: l,
                    viewBox: "0 0 24 24",
                    children: (0, n.jsxs)("g", {
                        fill: "none",
                        fillRule: "evenodd",
                        children: [(0, n.jsx)("path", {
                            fill: a,
                            className: o,
                            fillRule: "nonzero",
                            d: "M5,8 L9,12 L6,12 C6,15.31 8.69,18 12,18 C13.01,18 13.97,17.75 14.8,17.3 L16.26,18.76 C15.03,19.54 13.57,20 12,20 C7.58,20 4,16.42 4,12 L1,12 L5,8 Z M18,12 C18,8.69 15.31,6 12,6 C10.99,6 10.03,6.25 9.2,6.7 L7.74,5.24 C8.97,4.46 10.43,4 12,4 C16.42,4 20,7.58 20,12 L23,12 L19,16 L15,12 L18,12 Z"
                        }), (0, n.jsx)("polygon", {
                            points: "24 0 0 0 0 24 24 24"
                        })]
                    })
                })
            }
        },
        741919: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return i
                }
            });
            var n = l("37983");
            l("884691");
            var a = l("469563"),
                s = l("99637"),
                i = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: l = 24,
                        color: a = "currentColor",
                        className: s,
                        foreground: i
                    } = e;
                    return (0, n.jsxs)("svg", {
                        width: t,
                        height: l,
                        viewBox: "0 0 24 24",
                        className: s,
                        children: [(0, n.jsx)("path", {
                            fill: a,
                            className: i,
                            d: "M11 10.9C11 10.9 11 10.9 11 10.9V8.82929C9.83481 8.41746 9 7.30622 9 6C9 4.34315 10.3431 3 12 3C13.6569 3 15 4.34315 15 6H17C17 3.23858 14.7614 1 12 1C9.23858 1 7 3.23858 7 6C7 7.79499 7.94587 9.36906 9.36637 10.251L6.29491 16.0216C6.19867 16.0074 6.1002 16 6 16C4.89543 16 4 16.8954 4 18C4 19.1046 4.89543 20 6 20C6.82012 20 7.52495 19.5064 7.83358 18.8H16.1664C16.475 19.5064 17.1799 20 18 20C19.1046 20 20 19.1046 20 18C20 16.8954 19.1046 16 18 16C17.1799 16 16.475 16.4936 16.1664 17.2H7.83359C7.82844 17.1882 7.82318 17.1765 7.81781 17.1648L11 10.9Z"
                        }), (0, n.jsx)("path", {
                            fill: a,
                            className: i,
                            d: "M12 8C10.8954 8 10 7.10457 10 6C10 4.89543 10.8954 4 12 4C13.1046 4 14 4.89543 14 6C14 6.43529 13.8609 6.8381 13.6248 7.16643L18 13C20.7614 13 23 15.2386 23 18C23 20.7614 20.7614 23 18 23C15.9497 23 14.1876 21.7659 13.416 20H15.7639C16.3132 20.6138 17.1115 21 18 21C19.6568 21 21 19.6569 21 18C21 16.3431 19.6568 15 18 15H17L12 8Z"
                        }), (0, n.jsx)("path", {
                            fill: a,
                            className: i,
                            d: "M10.584 20C9.8124 21.7659 8.05032 23 6 23C3.23858 23 1 20.7614 1 18C1 15.2386 3.23858 13 6 13V15C4.34315 15 3 16.3431 3 18C3 19.6569 4.34315 21 6 21C6.8885 21 7.68679 20.6138 8.23611 20H10.584Z"
                        })]
                    })
                }, s.WebhookIcon, void 0, {
                    size: 24
                })
        }
    }
]);