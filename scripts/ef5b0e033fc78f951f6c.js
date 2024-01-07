(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["8684"], {
        54239: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                pushLayer: function() {
                    return a
                },
                popLayer: function() {
                    return l
                },
                popAllLayers: function() {
                    return s
                }
            });
            var r = n("913144");

            function a(e) {
                r.default.dispatch({
                    type: "LAYER_PUSH",
                    component: e
                })
            }

            function l() {
                r.default.dispatch({
                    type: "LAYER_POP"
                })
            }

            function s() {
                r.default.dispatch({
                    type: "LAYER_POP_ALL"
                })
            }
        },
        920636: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            }), n("222007");
            var r = n("37983"),
                a = n("884691"),
                l = n("414456"),
                s = n.n(l),
                o = n("77078"),
                i = n("782340"),
                u = n("347129");
            class d extends a.PureComponent {
                render() {
                    var e;
                    let {
                        title: t,
                        actionText: n,
                        children: l,
                        error: d,
                        isLoading: c,
                        maxLength: f,
                        transitionState: h,
                        helpMessage: p,
                        retryPrompt: _,
                        retrySuccessMessage: E
                    } = this.props, {
                        code: A,
                        errorMessage: R,
                        retrySuccess: m
                    } = this.state, g = a.Children.count(l) > 0 ? (0, r.jsx)(o.Card, {
                        type: o.Card.Types.WARNING,
                        className: u.card,
                        children: (0, r.jsx)(o.Text, {
                            variant: "text-md/normal",
                            children: l
                        })
                    }) : null, M = null != _ ? (0, r.jsxs)(o.Text, {
                        className: s(u.submitText, u.spacing),
                        variant: "text-sm/normal",
                        children: [(0, r.jsx)("br", {}), (0, r.jsx)(o.Clickable, {
                            className: s(u.spacing, u.link),
                            onClick: this.handleRetry,
                            children: (0, r.jsx)(o.Anchor, {
                                children: _
                            })
                        })]
                    }) : null, I = m ? (0, r.jsx)(o.Card, {
                        type: o.Card.Types.SUCCESS,
                        className: u.card,
                        children: (0, r.jsx)(o.Text, {
                            variant: "text-md/normal",
                            children: E
                        })
                    }) : null;
                    return (0, r.jsx)(o.ModalRoot, {
                        transitionState: h,
                        children: (0, r.jsxs)("form", {
                            onSubmit: this.handleSubmit,
                            children: [(0, r.jsx)(o.ModalHeader, {
                                separator: !1,
                                children: (0, r.jsx)(o.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: t
                                })
                            }), (0, r.jsxs)(o.ModalContent, {
                                children: [null != p ? (0, r.jsx)(o.Text, {
                                    color: "text-normal",
                                    variant: "text-md/normal",
                                    className: u.spacing,
                                    children: p
                                }) : null, g, I, (0, r.jsxs)(o.FormItem, {
                                    title: this.getLabelText(),
                                    className: u.spacing,
                                    children: [(0, r.jsx)(o.TextInput, {
                                        inputRef: this.setRef,
                                        onChange: this.handleCodeChange,
                                        placeholder: null !== (e = this.getPlaceholder()) && void 0 !== e ? e : void 0,
                                        maxLength: null != f ? f : 10,
                                        value: A,
                                        autoComplete: "one-time-code",
                                        autoFocus: !0
                                    }), this.errorPresent() ? (0, r.jsx)(o.Text, {
                                        color: "text-danger",
                                        variant: "text-xs/normal",
                                        className: u.error,
                                        children: null != d ? d : R
                                    }) : null, M]
                                })]
                            }), (0, r.jsxs)(o.ModalFooter, {
                                children: [(0, r.jsx)(o.Button, {
                                    type: "submit",
                                    disabled: c || 0 === A.length,
                                    children: null != n ? n : i.default.Messages.CONFIRM
                                }), (0, r.jsx)(o.Button, {
                                    onClick: this.handleCancel,
                                    disabled: c,
                                    look: o.Button.Looks.LINK,
                                    color: o.Button.Colors.PRIMARY,
                                    children: i.default.Messages.CANCEL
                                })]
                            })]
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        code: "",
                        errorMessage: "",
                        retrySuccess: !1
                    }, this.setRef = e => {
                        this._input = e
                    }, this.getLabelText = () => {
                        var e;
                        return null !== (e = this.props.label) && void 0 !== e ? e : this.props.disallowBackupCodes ? i.default.Messages.TWO_FA_ENTER_TOKEN_NO_BACKUP_LABEL : i.default.Messages.TWO_FA_ENTER_TOKEN_LABEL
                    }, this.getSupportedCodeTypes = () => this.props.disallowBackupCodes ? i.default.Messages.TWO_FA_AUTH_CODE_NO_BACKUP : i.default.Messages.TWO_FA_AUTH_CODE, this.getPlaceholder = () => {
                        var e;
                        return this.props.forceNoPlaceholder ? null : null !== (e = this.props.placeholder) && void 0 !== e ? e : this.getSupportedCodeTypes()
                    }, this.errorPresent = () => null != this.props.error && "" !== this.props.error || null != this.state.errorMessage && "" !== this.state.errorMessage, this.handleRetry = () => {
                        let {
                            onRetry: e
                        } = this.props;
                        null == e || e().then(() => this.setState({
                            retrySuccess: !0
                        }))
                    }, this.handleSubmit = e => {
                        e.preventDefault();
                        let {
                            handleSubmit: t,
                            onError: n
                        } = this.props;
                        t(this.state.code).catch(e => {
                            null != e.body && (null == n || n(e.body), e.body.message && this.setState({
                                errorMessage: e.body.message
                            }))
                        })
                    }, this.handleCancel = () => {
                        let {
                            onClose: e,
                            handleEarlyClose: t
                        } = this.props;
                        e(), null == t || t()
                    }, this.handleCodeChange = e => {
                        this.setState({
                            code: e
                        })
                    }
                }
            }
            d.defaultProps = {
                btnClass: "",
                isLoading: !1,
                disallowBackupCodes: !1,
                error: null,
                forceNoPlaceholder: !1
            };
            var c = d
        },
        333805: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var r, a = n("872717"),
                l = n("49111"),
                s = n("782340");
            r = class extends a.default.V6OrEarlierAPIError {
                constructor(e, t) {
                    super(e, t, null != t ? s.default.Messages.FORM_ERROR_GENERIC_WITH_DETAILS.format({
                        statusPageURL: l.Links.STATUS,
                        details: "".concat(t)
                    }) : s.default.Messages.FORM_ERROR_GENERIC.format({
                        statusPageURL: l.Links.STATUS
                    }))
                }
            }
        },
        610174: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useGuildAlertModeEnabled: function() {
                    return c
                },
                getGuildAlertModeEnabled: function() {
                    return f
                }
            });
            var r = n("316693"),
                a = n("446674"),
                l = n("862205"),
                s = n("305961"),
                o = n("957255"),
                i = n("421127");
            let u = (0, l.createExperiment)({
                    kind: "guild",
                    id: "2023-04_guild_alert_mode",
                    label: "Guild Alert Mode",
                    defaultConfig: {
                        showAlertMode: !1,
                        alsoShowMemberSafety: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Show alert mode experience",
                        config: {
                            showAlertMode: !0,
                            alsoShowMemberSafety: !1
                        }
                    }, {
                        id: 2,
                        label: "Show alert mode experience with member safety",
                        config: {
                            showAlertMode: !0,
                            alsoShowMemberSafety: !0
                        }
                    }]
                }),
                d = (0, l.createExperiment)({
                    kind: "guild",
                    id: "2023-08_guild_alert_mode_friend_server",
                    label: "Guild Alert Mode (friend servers only)",
                    defaultConfig: {
                        showAlertMode: !1,
                        alsoShowMemberSafety: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Show alert mode experience",
                        config: {
                            showAlertMode: !0,
                            alsoShowMemberSafety: !1
                        }
                    }, {
                        id: 2,
                        label: "Show alert mode experience with member safety",
                        config: {
                            showAlertMode: !0,
                            alsoShowMemberSafety: !1
                        }
                    }]
                });

            function c(e) {
                let t = (0, a.useStateFromStores)([s.default], () => s.default.getGuild(e)),
                    n = (0, a.useStateFromStores)([o.default], () => null != t && r.default.hasAny(o.default.computePermissions(t), i.IncidentAlertModeratorPermissions)),
                    l = u.useExperiment({
                        guildId: e,
                        location: "c3fae3_1"
                    }, {
                        disable: !n,
                        autoTrackExposure: !0
                    }),
                    c = d.useExperiment({
                        guildId: e,
                        location: "c3fae3_2"
                    }, {
                        disable: !n,
                        autoTrackExposure: !0
                    });
                return {
                    showAlertMode: l.showAlertMode || c.showAlertMode,
                    alsoShowMemberSafety: l.alsoShowMemberSafety || c.alsoShowMemberSafety
                }
            }

            function f(e) {
                let t = s.default.getGuild(e),
                    n = null != t && r.default.hasAny(o.default.computePermissions(t), i.IncidentAlertModeratorPermissions),
                    a = u.getCurrentConfig({
                        guildId: e,
                        location: "c3fae3_3"
                    }, {
                        disable: !n,
                        autoTrackExposure: !0
                    }),
                    l = d.getCurrentConfig({
                        guildId: e,
                        location: "c3fae3_4"
                    }, {
                        disable: !n,
                        autoTrackExposure: !0
                    });
                return {
                    showAlertMode: a.showAlertMode || l.showAlertMode,
                    alsoShowMemberSafety: a.alsoShowMemberSafety || l.alsoShowMemberSafety
                }
            }
        },
        311340: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                trackReportRaidViewed: function() {
                    return f
                },
                setGuildRaidAlerts: function() {
                    return h
                },
                setGuildIncidentActions: function() {
                    return p
                },
                handleResolveRaid: function() {
                    return _
                },
                handleReportRaid: function() {
                    return E
                }
            }), n("222007");
            var r = n("866227"),
                a = n.n(r),
                l = n("872717"),
                s = n("716241"),
                o = n("592407"),
                i = n("305961"),
                u = n("599110"),
                d = n("610174"),
                c = n("49111");

            function f(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                0 !== t.length && u.default.track(c.AnalyticEvents.GUILD_RAID_REPORTED, {
                    ...(0, s.collectGuildAnalyticsMetadata)(e),
                    guild_id: e,
                    raid_types: t
                })
            }
            async function h(e, t) {
                let n = new Set(e.features);
                n.has(c.GuildFeatures.COMMUNITY) ? t ? n.delete(c.GuildFeatures.RAID_ALERTS_DISABLED) : n.add(c.GuildFeatures.RAID_ALERTS_DISABLED) : t ? n.add(c.GuildFeatures.NON_COMMUNITY_RAID_ALERTS) : n.delete(c.GuildFeatures.NON_COMMUNITY_RAID_ALERTS), await o.default.saveGuild(e.id, {
                    features: n
                }, {
                    throwErr: !0
                })
            }
            async function p(e, t, n, r) {
                let s = a().add(r, "hours").toISOString(),
                    o = await l.default.put({
                        url: c.Endpoints.GUILD_INCIDENT_ACTIONS(e),
                        body: {
                            invites_disabled_until: t ? s : null,
                            dms_disabled_until: n ? s : null
                        }
                    });
                return o
            }
            async function _(e, t, n) {
                let {
                    showAlertMode: r
                } = (0, d.getGuildAlertModeEnabled)(e), a = i.default.getGuild(e), s = null == a ? void 0 : a.getSafetyAlertsChannelId();
                if (!r || null == s) return null;
                let o = await l.default.post({
                    url: c.Endpoints.GUILD_INCIDENT_REPORT_FALSE_ALARM(e),
                    body: {
                        alert_message_id: t,
                        reason: n
                    }
                });
                return o
            }
            async function E(e) {
                let {
                    showAlertMode: t
                } = (0, d.getGuildAlertModeEnabled)(e), n = i.default.getGuild(e), r = null == n ? void 0 : n.getSafetyAlertsChannelId();
                if (!t || null == r) return null;
                let a = await l.default.post({
                    url: c.Endpoints.GUILD_INCIDENT_REPORT_RAID(e)
                });
                return a
            }
        },
        421127: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                NAGBAR_DISPLAY_MAX_HOURS: function() {
                    return s
                },
                DEFAULT_LOCKDOWN_DURATION: function() {
                    return o
                },
                getTimeframes: function() {
                    return i
                },
                IncidentAlertModeratorPermissions: function() {
                    return u
                }
            });
            var r = n("316693"),
                a = n("843455"),
                l = n("782340");
            let s = 2,
                o = 2,
                i = () => [{
                    value: 1,
                    label: l.default.Messages.GUILD_SERVER_LOCKDOWN_DURATION_1_HOUR
                }, {
                    value: 2,
                    label: l.default.Messages.GUILD_SERVER_LOCKDOWN_DURATION_2_HOURS
                }, {
                    value: 4,
                    label: l.default.Messages.GUILD_SERVER_LOCKDOWN_DURATION_4_HOURS
                }, {
                    value: 6,
                    label: l.default.Messages.GUILD_SERVER_LOCKDOWN_DURATION_6_HOURS
                }, {
                    value: 12,
                    label: l.default.Messages.GUILD_SERVER_LOCKDOWN_DURATION_12_HOURS
                }, {
                    value: 24,
                    label: l.default.Messages.GUILD_SERVER_LOCKDOWN_DURATION_24_HOURS
                }],
                u = r.default.combine(a.Permissions.ADMINISTRATOR, a.Permissions.MANAGE_GUILD, a.Permissions.BAN_MEMBERS, a.Permissions.KICK_MEMBERS, a.Permissions.MODERATE_MEMBERS)
        },
        561956: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            }), n("222007");
            var r = n("37983"),
                a = n("884691"),
                l = n("414456"),
                s = n.n(l),
                o = n("77078"),
                i = n("716241"),
                u = n("311340"),
                d = n("85448"),
                c = n("49111"),
                f = n("782340"),
                h = n("452446");

            function p(e) {
                let {
                    guildId: t,
                    messageId: l,
                    transitionState: p,
                    onClose: _
                } = e, [E, A] = a.useState([]), [R, m] = a.useState(), g = a.useCallback(() => {
                    let e = {
                        raid_alert_type: d.RaidAlertType.JOIN_RAID,
                        raid_alert_id: l,
                        false_alarm_type: E.map(e => e.toString()),
                        false_alarm_other_reason: R,
                        guild_id: t
                    };
                    (0, i.trackWithMetadata)(c.AnalyticEvents.GUILD_RAID_FEEDBACK, e), (0, u.handleResolveRaid)(t, l, (0, d.getMostImportantRaidResolutionType)(E)), _(), (0, o.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await n.el("938899").then(n.bind(n, "938899"));
                        return t => (0, r.jsx)(e, {
                            ...t
                        })
                    })
                }, [_, l, t, R, E]), M = [{
                    text: f.default.Messages.GUILD_ANTIRAID_RESOLVE_REASON_LEGITIMATE_ACTIVITY,
                    value: d.RaidResolutionType.LEGITIMATE_ACTIVITY
                }, {
                    text: f.default.Messages.GUILD_ANTIRAID_RESOLVE_REASON_DM_SPAM,
                    value: d.RaidResolutionType.DM_SPAM
                }, {
                    text: f.default.Messages.GUILD_ANTIRAID_RESOLVE_REASON_JOIN_RAID,
                    value: d.RaidResolutionType.JOIN_RAID
                }, {
                    text: f.default.Messages.GUILD_AUTOMOD_REPORT_RAID_FEEDBACK_OTHER,
                    value: d.RaidResolutionType.OTHER
                }];

                function I(e) {
                    let t = E.includes(e);
                    t ? A(t => t.filter(t => t !== e)) : A(t => [...t, e])
                }
                return (0, r.jsxs)(o.ModalRoot, {
                    transitionState: p,
                    size: o.ModalSize.SMALL,
                    children: [(0, r.jsx)(o.ModalHeader, {
                        separator: !1,
                        className: h.center,
                        children: (0, r.jsx)(o.Heading, {
                            color: "header-primary",
                            variant: "heading-xl/bold",
                            children: f.default.Messages.GUILD_ANTIRAID_RESOLVE_TITLE
                        })
                    }), (0, r.jsxs)(o.ModalContent, {
                        className: h.center,
                        children: [(0, r.jsx)(o.Text, {
                            variant: "text-sm/normal",
                            color: "header-secondary",
                            className: h.textCenter,
                            children: f.default.Messages.GUILD_ANTIRAID_RESOLVE_DESCRIPTION
                        }), (0, r.jsx)("div", {
                            className: h.options,
                            children: M.map(e => {
                                let {
                                    text: t,
                                    value: n
                                } = e;
                                return (0, r.jsxs)("div", {
                                    className: s(h.optionContainer, {
                                        [h.optionContainerOther]: n === d.RaidResolutionType.OTHER
                                    }),
                                    children: [(0, r.jsxs)(o.Clickable, {
                                        className: h.optionText,
                                        onClick: () => I(n),
                                        children: [(0, r.jsx)("div", {
                                            children: (0, r.jsx)(o.Checkbox, {
                                                type: o.Checkbox.Types.INVERTED,
                                                size: 20,
                                                value: E.includes(n),
                                                onChange: () => I(n)
                                            })
                                        }), (0, r.jsx)(o.Text, {
                                            variant: "text-md/semibold",
                                            color: "header-primary",
                                            children: t
                                        })]
                                    }), n === d.RaidResolutionType.OTHER && E.includes(d.RaidResolutionType.OTHER) && (0, r.jsx)("div", {
                                        className: h.textboxContainer,
                                        children: (0, r.jsx)(o.TextArea, {
                                            className: h.falseAlarmReasonText,
                                            placeholder: f.default.Messages.GUILD_AUTOMOD_REPORT_RAID_FEEDBACK_MODAL_OTHER_REASON_PLACEHOLDER,
                                            onChange: e => m(e),
                                            value: R,
                                            rows: 2,
                                            autoFocus: !0,
                                            flex: !0
                                        })
                                    })]
                                }, n)
                            })
                        })]
                    }), (0, r.jsxs)(o.ModalFooter, {
                        className: h.modalFooter,
                        children: [(0, r.jsx)("div", {
                            className: h.button,
                            children: (0, r.jsx)(o.Button, {
                                onClick: g,
                                color: o.Button.Colors.BRAND_NEW,
                                look: o.Button.Looks.FILLED,
                                children: f.default.Messages.GUILD_AUTOMOD_NOTIFICATION_MARK_AS_RESOLVED
                            })
                        }), (0, r.jsx)(o.Button, {
                            onClick: _,
                            color: o.Button.Colors.PRIMARY,
                            look: o.Button.Looks.LINK,
                            children: f.default.Messages.CANCEL
                        })]
                    })]
                })
            }
        },
        479756: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                startImpersonating: function() {
                    return R
                },
                updateImpersonating: function() {
                    return m
                },
                stopImpersonating: function() {
                    return g
                },
                updateImpersonatedChannels: function() {
                    return I
                },
                updateImpersonatedRoles: function() {
                    return T
                },
                updateImpersonatedData: function() {
                    return S
                }
            }), n("222007");
            var r = n("913144"),
                a = n("716241"),
                l = n("393414"),
                s = n("42203"),
                o = n("923959"),
                i = n("26989"),
                u = n("305961"),
                d = n("957255"),
                c = n("18494"),
                f = n("282109"),
                h = n("599110"),
                p = n("38654"),
                _ = n("507950"),
                E = n("49111"),
                A = n("724210");

            function R(e, t) {
                h.default.track(E.AnalyticEvents.VIEW_AS_ROLES_SELECTED, {
                    num_roles: Object.keys(t.roles).length,
                    ...(0, a.collectGuildAnalyticsMetadata)(e),
                    is_viewing_as_member: t.type === _.ImpersonateType.NEW_MEMBER
                }), r.default.dispatch({
                    type: "IMPERSONATE_UPDATE",
                    guildId: e,
                    data: t
                }), M(e)
            }

            function m(e, t) {
                let n = p.default.getData(e);
                null != n && n.type === t.type && (h.default.track(E.AnalyticEvents.VIEW_AS_ROLES_SELECTED, {
                    num_roles: Object.keys(n.roles).length,
                    ...(0, a.collectGuildAnalyticsMetadata)(e),
                    is_viewing_as_member: n.type === _.ImpersonateType.NEW_MEMBER
                }), r.default.dispatch({
                    type: "IMPERSONATE_UPDATE",
                    guildId: e,
                    data: {
                        ...n,
                        ...t
                    }
                }), M(e))
            }

            function g(e) {
                r.default.dispatch({
                    type: "IMPERSONATE_STOP",
                    guildId: e
                })
            }

            function M(e) {
                let t = c.default.getChannelId(e),
                    n = s.default.getChannel(t),
                    r = null != t && (0, A.isStaticChannelRoute)(t);
                if (!r && !d.default.can(E.Permissions.VIEW_CHANNEL, n)) {
                    let t = o.default.getDefaultChannel(e);
                    null != t && (0, l.transitionTo)(E.Routes.CHANNEL(e, t.id))
                }
            }

            function I(e, t, n) {
                let r = new Set(f.default.getOptedInChannels(e));
                t.forEach(e => r.add(e)), n.forEach(e => r.delete(e)), m(e, {
                    type: _.ImpersonateType.NEW_MEMBER,
                    optInChannels: r
                })
            }

            function T(e, t) {
                let n = u.default.getGuild(e);
                if (null == n) return;
                ! function(e, t) {
                    let n = [...o.default.getSelectableChannelIds(e), ...o.default.getVocalChannelIds(e)],
                        r = Array.from(t);
                    o.default.addConditionalChangeListener(() => {
                        let t = i.default.getSelfMember(e);
                        if (null == t) return !1;
                        if (r.some(e => !t.roles.includes(e))) return !0;
                        let a = [...o.default.getSelectableChannelIds(e), ...o.default.getVocalChannelIds(e)],
                            l = a.filter(e => !n.includes(e));
                        return l.length > 0 && I(e, l, []), !1
                    })
                }(e, t);
                let r = {};
                t.forEach(e => r[e] = n.roles[e]), m(e, {
                    type: _.ImpersonateType.NEW_MEMBER,
                    roles: r
                })
            }

            function S(e, t) {
                m(e, {
                    type: _.ImpersonateType.NEW_MEMBER,
                    ...t
                })
            }
        },
        153498: function(e, t, n) {
            "use strict";

            function r(e) {
                let {} = e;
                return !1
            }

            function a(e, t) {
                return !1
            }

            function l(e) {
                return !1
            }

            function s() {
                return !1
            }

            function o() {
                return !1
            }

            function i(e) {
                let {} = e;
                return !1
            }

            function u(e, t) {
                return !1
            }

            function d() {
                return !1
            }

            function c(e) {}

            function f(e) {}

            function h(e) {}

            function p(e) {
                return !1
            }
            n.r(t), n.d(t, {
                navigateToChannel: function() {
                    return r
                },
                navigateToMemberVerification: function() {
                    return a
                },
                navigateToRootTab: function() {
                    return l
                },
                resetToAuthRoute: function() {
                    return s
                },
                resetToPanelsUI: function() {
                    return o
                },
                pushModal: function() {
                    return i
                },
                popModal: function() {
                    return u
                },
                popAllModals: function() {
                    return d
                },
                coerceChannelRoute: function() {
                    return c
                },
                coerceGuildsRoute: function() {
                    return f
                },
                coerceModalRoute: function() {
                    return h
                },
                useIsModalOpen: function() {
                    return p
                }
            })
        },
        517763: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            }), n("702976");
            var r, a = n("866227"),
                l = n.n(a),
                s = n("666038");
            r = class e extends s.default {
                static createFromServer(t) {
                    var n;
                    return new e({
                        ...t,
                        maxUses: t.max_uses,
                        maxAge: t.max_age,
                        createdAt: l(null !== (n = t.created_at) && void 0 !== n ? n : void 0),
                        targetType: t.target_type,
                        targetUser: t.target_user,
                        targetApplication: t.target_application
                    })
                }
                isExpired() {
                    let e = this.maxAge;
                    if (e > 0) {
                        let t = l(this.createdAt);
                        if (t.add(e, "seconds").isBefore(Date.now())) return !0
                    }
                    return !1
                }
                getExpiresAt() {
                    if (this.maxAge > 0) {
                        let e = l(this.createdAt);
                        return e.add(this.maxAge, "seconds").toDate()
                    }
                    return 1 / 0
                }
                toString() {
                    return this.code
                }
                constructor(e) {
                    super(), this.code = e.code || "", this.temporary = e.temporary || !1, this.revoked = e.revoked || !1, this.uses = e.uses || 0, this.maxUses = e.maxUses || 0, this.maxAge = e.maxAge || 0, this.createdAt = e.createdAt || new Date, this.channel = e.channel, this.guild = e.guild, this.inviter = e.inviter || null, this.targetType = e.targetType || null, this.targetUser = e.targetUser || null, this.targetApplication = e.targetApplication || null, this.type = e.type || null, this.flags = e.flags || 0
                }
            }
        },
        615931: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                resolveThunk: function() {
                    return l
                }
            });
            var r = n("917351"),
                a = n.n(r);
            let l = e => "function" == typeof e ? e() : e;
            a.curry((e, t, n) => l(t) ? e(n) : n({}))
        },
        730622: function(e, t, n) {
            "use strict";
            let r, a;
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            }), n("70102");
            var l = n("697218"),
                s = n("615931");
            let o = () => {
                throw Error("updateModal has not been implemented.")
            };
            {
                let e = n("670924");
                r = e.showModal, o = e.updateModalProps, a = n("551042").closeModal
            }

            function i(e) {
                let {
                    promiseFn: t,
                    resolve: n,
                    reject: l,
                    modalProps: s = {},
                    hooks: {
                        onEarlyClose: i
                    } = {}
                } = e;
                if (null == r) {
                    null == i || i();
                    return
                }
                let d = r(p, c, s);

                function c() {
                    null == i || i()
                }

                function f(e) {
                    a(d), n(e)
                }

                function h(e) {
                    a(d), l(e)
                }

                function p(e) {
                    return o(d, p, c, {
                        ...s,
                        isLoading: !0
                    }), u({
                        promiseFn: t,
                        resolve: f,
                        reject: h,
                        code: e,
                        mfaCodeHandler: _,
                        isModalOpen: !0
                    })
                }

                function _(e) {
                    let {
                        res: t
                    } = e;
                    o(d, p, c, {
                        ...s,
                        error: t.body.message
                    })
                }
            }

            function u(e) {
                let {
                    promiseFn: t,
                    resolve: n,
                    reject: r,
                    code: a,
                    mfaCodeHandler: l = i,
                    isModalOpen: s = !1,
                    ...o
                } = e;
                return t(null != a ? {
                    code: a
                } : {}).then(n, e => {
                    var a, i;
                    if (a = e, i = s, a.body && 60008 === a.body.code || i && 429 === a.status) return l({
                        promiseFn: t,
                        resolve: n,
                        reject: r,
                        res: e,
                        ...o
                    });
                    r(e)
                })
            }

            function d(e, t) {
                var n, r;
                let {
                    checkEnabled: a = null !== (r = null === (n = l.default.getCurrentUser()) || void 0 === n ? void 0 : n.mfaEnabled) && void 0 !== r && r,
                    ...o
                } = null != t ? t : {};
                return new Promise((t, n) => {
                    ((0, s.resolveThunk)(a) ? i : u)({
                        promiseFn: e,
                        resolve: t,
                        reject: n,
                        ...o
                    })
                })
            }
        },
        840707: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var r = n("872717"),
                a = n("599110");

            function l(e, t, n) {
                let {
                    trackedActionData: r,
                    ...l
                } = t, s = {
                    url: l.url,
                    request_method: n
                };
                return new Promise((t, n) => {
                    e(l).then(e => {
                        let n = r.properties;
                        "function" == typeof r.properties && (n = r.properties(e)), (0, a.trackNetworkAction)(r.event, {
                            status_code: e.status,
                            ...s,
                            ...n
                        }), t(e)
                    }).catch(e => {
                        var t, l;
                        let o = r.properties;
                        "function" == typeof r.properties && (o = r.properties(e)), (0, a.trackNetworkAction)(r.event, {
                            status_code: e.status,
                            error_code: null === (t = e.body) || void 0 === t ? void 0 : t.code,
                            error_message: null === (l = e.body) || void 0 === l ? void 0 : l.message,
                            ...s,
                            ...o
                        }), n(e)
                    })
                })
            }
            var s = {
                get: function(e) {
                    return l(r.default.get, e, "get")
                },
                post: function(e) {
                    return l(r.default.post, e, "post")
                },
                put: function(e) {
                    return l(r.default.put, e, "put")
                },
                patch: function(e) {
                    return l(r.default.patch, e, "patch")
                },
                delete: function(e) {
                    return l(r.default.delete, e, "del")
                }
            }
        },
        670924: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                showModal: function() {
                    return o
                },
                updateModalProps: function() {
                    return i
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("551042"),
                l = n("920636");
            let s = (e, t, n) => function(a) {
                return (0, r.jsx)(l.default, {
                    handleSubmit: e,
                    handleEarlyClose: t,
                    ...n,
                    ...a
                })
            };

            function o(e, t, n) {
                return (0, a.openModal)(s(e, t, n), {
                    onCloseCallback: t
                })
            }

            function i(e, t, n, r) {
                return (0, a.updateModal)(e, s(t, n, r))
            }
        }
    }
]);