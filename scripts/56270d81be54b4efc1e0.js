(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["36685"], {
        856670: function(e, t, s) {
            "use strict";
            e.exports = s.p + "018197f71e03e53562e7.svg"
        },
        693029: function(e, t, s) {
            "use strict";
            e.exports = s.p + "7e5dd7f59f96cc264184.svg"
        },
        587621: function(e, t, s) {
            "use strict";
            e.exports = s.p + "85d73a66b814f4f52563.png"
        },
        133403: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return u
                }
            });
            var i = s("37983");
            s("884691");
            var l = s("414456"),
                a = s.n(l),
                n = s("77078"),
                r = s("782340"),
                d = s("239636");
            let o = Object.freeze({
                DEFAULT: d.default,
                FILLED: d.filled
            });

            function u(e) {
                let {
                    className: t,
                    onClick: s,
                    "aria-label": l,
                    look: u = o.DEFAULT
                } = e;
                return (0, i.jsx)(n.Clickable, {
                    "aria-label": null != l ? l : r.default.Messages.REMOVE,
                    className: a(d.button, u, t),
                    onClick: s
                })
            }
            u.Looks = o
        },
        747593: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return Y
                }
            }), s("222007"), s("424973");
            var i, l, a = s("37983"),
                n = s("884691"),
                r = s("917351"),
                d = s.n(r),
                o = s("866227"),
                u = s.n(o),
                c = s("817736"),
                h = s("118810"),
                f = s("446674"),
                N = s("669491"),
                g = s("77078"),
                S = s("519705"),
                E = s("668597"),
                m = s("320954"),
                T = s("679653"),
                _ = s("419830"),
                x = s("47495"),
                I = s("348077"),
                p = s("308305"),
                O = s("319165"),
                C = s("233069"),
                M = s("42203"),
                v = s("245997"),
                L = s("525065"),
                A = s("305961"),
                j = s("27618"),
                R = s("282109"),
                b = s("697218"),
                G = s("145131"),
                U = s("612434"),
                F = s("449008"),
                D = s("701909"),
                w = s("34676"),
                P = s("49111"),
                H = s("468200"),
                y = s("782340"),
                k = s("296884");
            (l = i || (i = {})).MUTED = "muted", l.MESSAGE_NOTIFICATIONS = "message_notifications", l.SUPPRESS_EVERYONE = "suppress_everyone", l.SUPPRESS_ROLES = "suppress_roles", l.MOBILE_PUSH = "mobile_push", l.MUTE_EVENTS = "mute_scheduled_events", l.NOTIFY_HIGHLIGHTS = "notify_highlights";
            class B extends n.PureComponent {
                static getDerivedStateFromProps(e, t) {
                    let {
                        overrides: s,
                        channelOverridesProp: i
                    } = t;
                    return e.channelOverrides !== i ? (s = new Set(s), (0, x.filterOverrides)(e.channelOverrides).forEach(e => s.add(e)), {
                        overrides: s,
                        channelOverridesProp: e.channelOverrides
                    }) : null
                }
                componentDidUpdate(e, t) {
                    let {
                        lastSelected: s
                    } = this.state, i = null != s ? this._channelRefs[s] : null;
                    if (null != this._scroller && null != i && s !== t.lastSelected) {
                        let e = (0, c.findDOMNode)(i);
                        if (null != this._scroller && (0, h.isElement)(e, HTMLElement)) {
                            var l;
                            null === (l = this._scroller) || void 0 === l || l.scrollIntoViewNode({
                                node: e,
                                animate: !0,
                                padding: 20,
                                callback: () => this.setState({
                                    lastSelected: null
                                })
                            }), i.highlight()
                        }
                    }
                    if (this.props.channelOverrides !== e.channelOverrides) {
                        let {
                            overrides: e
                        } = this.state;
                        e = new Set(e), (0, x.filterOverrides)(this.props.channelOverrides).forEach(t => e.add(t)), this.setState({
                            overrides: e
                        })
                    }
                }
                handleCheckboxChange(e, t, s) {
                    S.default.updateGuildNotificationSettings(this.props.guildId, {
                        [e]: t
                    }, s)
                }
                handleRadioChange(e, t, s) {
                    let {
                        value: i
                    } = t;
                    S.default.updateGuildNotificationSettings(this.props.guildId, {
                        [e]: i
                    }, s)
                }
                renderHeader() {
                    let {
                        guild: e
                    } = this.props;
                    return null == e ? null : (0, a.jsxs)(g.ModalHeader, {
                        children: [(0, a.jsxs)(G.default.Child, {
                            children: [(0, a.jsx)(g.Heading, {
                                variant: "heading-lg/semibold",
                                children: y.default.Messages.NOTIFICATION_SETTINGS
                            }), (0, a.jsx)(g.Text, {
                                variant: "text-md/normal",
                                className: k.guildName,
                                children: e.name
                            })]
                        }), (0, a.jsx)(G.default.Child, {
                            grow: 0,
                            children: (0, a.jsx)(g.ModalCloseButton, {
                                onClick: this.props.onClose
                            })
                        })]
                    })
                }
                renderFooter() {
                    return (0, a.jsx)(g.ModalFooter, {
                        children: (0, a.jsx)(g.Button, {
                            onClick: this.props.onClose,
                            children: y.default.Messages.DONE
                        })
                    })
                }
                renderMute() {
                    var e;
                    let {
                        muted: t,
                        muteConfig: s,
                        guild: i
                    } = this.props, l = null !== (e = null == s ? void 0 : s.selected_time_window) && void 0 !== e ? e : H.MuteUntilSeconds.ALWAYS;
                    return null == i ? null : (0, a.jsxs)(g.FormItem, {
                        className: k.largeSpacing,
                        children: [(0, a.jsx)(g.FormSwitch, {
                            hideBorder: !0,
                            value: t,
                            onChange: e => this.handleCheckboxChange("muted", e, w.NotificationLabel.muted(e)),
                            note: y.default.Messages.FORM_LABEL_MUTE_SERVER_DESCRIPTION,
                            children: y.default.Messages.FORM_LABEL_MUTE_SERVER.format({
                                name: i.name
                            })
                        }), t ? (0, a.jsxs)(G.default, {
                            className: k.spacing,
                            align: G.default.Align.CENTER,
                            children: [(0, a.jsxs)(G.default, {
                                direction: G.default.Direction.VERTICAL,
                                className: k.muteUntilTextWrapper,
                                children: [(0, a.jsx)(g.FormTitle, {
                                    tag: "h3",
                                    className: k.muteUntilTitle,
                                    children: y.default.Messages.MUTE_UNTIL
                                }), (0, a.jsx)(O.default, {
                                    className: k.muteUntilText,
                                    muteConfig: s
                                })]
                            }), (0, a.jsx)(g.SingleSelect, {
                                className: k.muteTimeSelector,
                                options: (0, x.getMuteTimeOptions)(),
                                value: l,
                                onChange: this.handleSelectMuteTime
                            })]
                        }) : null, (0, a.jsx)(g.FormDivider, {})]
                    })
                }
                renderServerSettings() {
                    var e;
                    let {
                        messageNotifications: t,
                        muted: s,
                        memberCount: i
                    } = this.props;
                    return (0, a.jsxs)("div", {
                        className: k.spacing,
                        children: [(0, a.jsx)(g.FormItem, {
                            title: y.default.Messages.FORM_LABEL_SERVER_NOTIFICATION_SETTINGS,
                            className: k.largeSpacing,
                            children: (0, a.jsx)(g.RadioGroup, {
                                disabled: s,
                                value: t,
                                onChange: e => this.handleRadioChange("message_notifications", e, w.NotificationLabel.notifications(e.value)),
                                options: (e = i, [{
                                    name: y.default.Messages.FORM_LABEL_ALL_MESSAGES,
                                    value: P.UserNotificationSettings.ALL_MESSAGES,
                                    desc: null != e && e >= P.MAX_MEMBERS_NOTIFY_ALL_MESSAGES ? y.default.Messages.LARGE_GUILD_NOTIFY_ALL_MESSAGES_DESCRIPTION : null
                                }, {
                                    name: y.default.Messages.FORM_LABEL_ONLY_MENTIONS.format(),
                                    value: P.UserNotificationSettings.ONLY_MENTIONS
                                }, {
                                    name: y.default.Messages.FORM_LABEL_NOTHING,
                                    value: P.UserNotificationSettings.NO_MESSAGES
                                }])
                            })
                        }), (0, a.jsx)(g.FormDivider, {})]
                    })
                }
                renderNotificationOptions() {
                    let {
                        suppressEveryone: e,
                        suppressRoles: t,
                        mobilePush: s,
                        muted: i,
                        muteEvents: l,
                        notifyHighlights: n,
                        guildId: r
                    } = this.props;
                    return (0, a.jsxs)(g.FormItem, {
                        className: k.largeSpacing,
                        children: [(0, a.jsx)(g.FormSwitch, {
                            onChange: e => this.handleCheckboxChange("suppress_everyone", e, w.NotificationLabel.suppressEveryone(e)),
                            value: e,
                            children: y.default.Messages.FORM_LABEL_SUPPRESS_EVERYONE.format()
                        }), (0, a.jsx)(g.FormSwitch, {
                            onChange: e => this.handleCheckboxChange("suppress_roles", e, w.NotificationLabel.suppressRoles(e)),
                            value: t,
                            children: y.default.Messages.FORM_LABEL_SUPPRESS_ROLES
                        }), (0, a.jsx)(g.FormSwitch, {
                            onChange: e => {
                                S.default.updateGuildNotificationSettings(r, {
                                    notify_highlights: e ? P.HighlightSettings.DISABLED : P.HighlightSettings.ENABLED
                                }, w.NotificationLabel.highlights(!e))
                            },
                            value: i || n === P.HighlightSettings.DISABLED,
                            disabled: i,
                            note: (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)(g.Text, {
                                    variant: "text-sm/normal",
                                    children: y.default.Messages.HIGHLIGHTS_NOTE_SUBTEXT
                                }), (0, a.jsx)("div", {
                                    className: k.highlightsLink,
                                    children: (0, a.jsx)(g.Anchor, {
                                        href: D.default.getArticleURL(P.HelpdeskArticles.HIGHLIGHTS),
                                        children: y.default.Messages.HIGHLIGHTS_LEARN_MORE
                                    })
                                })]
                            }),
                            children: (0, a.jsx)(a.Fragment, {
                                children: y.default.Messages.FORM_LABEL_SUPPRESS_HIGHLIGHTS
                            })
                        }), (0, a.jsx)(g.FormSwitch, {
                            value: l,
                            onChange: e => this.handleCheckboxChange("mute_scheduled_events", e, w.NotificationLabel.mutedEvents(e)),
                            children: y.default.Messages.FORM_LABEL_MUTE_SCHEDULED_EVENTS
                        }), (0, a.jsx)(g.FormSwitch, {
                            value: !i && s,
                            disabled: i,
                            onChange: e => this.handleCheckboxChange("mobile_push", e, w.NotificationLabel.mobilePush(e)),
                            children: y.default.Messages.FORM_LABEL_MOBILE_PUSH_NOTIFICATIONS
                        })]
                    })
                }
                renderOverrideSelect() {
                    let {
                        channels: e,
                        categories: t
                    } = this.props, s = d(e).filter(e => {
                        let {
                            channel: s
                        } = e;
                        return s.type !== P.ChannelTypes.GUILD_CATEGORY || null != t[s.id] && t[s.id].length > 0
                    }).map(e => {
                        let {
                            channel: t
                        } = e;
                        return {
                            value: t.id,
                            label: (0, T.computeChannelName)(t, b.default, j.default)
                        }
                    }).value();
                    return (0, a.jsxs)(g.FormItem, {
                        title: y.default.Messages.NOTIFICATION_OVERRIDES,
                        className: k.largeSpacing,
                        children: [(0, a.jsx)(g.FormText, {
                            type: g.FormText.Types.DESCRIPTION,
                            className: k.smallSpacing,
                            children: y.default.Messages.ADD_CHANNEL_TO_OVERRIDE
                        }), (0, a.jsx)(g.SearchableSelect, {
                            value: "",
                            placeholder: y.default.Messages.SELECT_CHANNEL_OR_CATEGORY,
                            renderOptionLabel: this.renderOptionLabel,
                            options: s,
                            onChange: this.handleSelectChange
                        })]
                    })
                }
                renderChannelNotifications() {
                    let {
                        channelOverrides: e,
                        muted: t,
                        channels: s,
                        messageNotifications: i,
                        categories: l,
                        checkboxColor: n
                    } = this.props, {
                        overrides: r
                    } = this.state, d = s.map(s => {
                        let {
                            channel: d
                        } = s;
                        if (!r.has(d.id) || null != l[d.id] && 0 === l[d.id].length) return null;
                        let o = e[d.id];
                        return (0, a.jsx)(p.ChannelNotificationSettings, {
                            ref: e => {
                                this._channelRefs[d.id] = e
                            },
                            channel: d,
                            guildMuted: t,
                            muted: null != o && (0, E.computeIsMuted)(o),
                            messageNotifications: null != o ? o.message_notifications : null,
                            guildMessageNotifications: i,
                            onDelete: this.handleDeleteOverride,
                            checkboxColor: n
                        }, d.id)
                    }).filter(F.isNotNullish);
                    return (0 === r.size || 0 === d.length) && d.push((0, a.jsx)("div", {
                        className: k.overridePlaceholder,
                        children: (0, a.jsx)(g.Text, {
                            className: k.overrideHeader,
                            variant: "text-sm/semibold",
                            children: y.default.Messages.ADD_CHANNEL_TO_OVERRIDE
                        })
                    }, "placeholder")), (0, a.jsxs)("div", {
                        className: k.overrideList,
                        children: [(0, a.jsxs)(G.default, {
                            children: [(0, a.jsx)(g.Heading, {
                                variant: "eyebrow",
                                className: k.headerName,
                                children: y.default.Messages.CHANNEL_OR_CATEGORY
                            }), (0, a.jsx)(g.Heading, {
                                variant: "eyebrow",
                                className: k.headerOption,
                                children: y.default.Messages.FORM_LABEL_ALL
                            }), (0, a.jsx)(g.Heading, {
                                variant: "eyebrow",
                                className: k.headerOption,
                                children: y.default.Messages.FORM_LABEL_MENTIONS
                            }), (0, a.jsx)(g.Heading, {
                                variant: "eyebrow",
                                className: k.headerOption,
                                children: y.default.Messages.FORM_LABEL_NOTHING
                            }), (0, a.jsx)(g.Heading, {
                                variant: "eyebrow",
                                className: k.headerOption,
                                children: (0, a.jsx)(g.Tooltip, {
                                    text: y.default.Messages.FORM_LABEL_MUTE_SERVER_DESCRIPTION,
                                    position: "bottom",
                                    children: e => (0, a.jsx)("span", {
                                        ...e,
                                        children: y.default.Messages.SOUND_MUTE
                                    })
                                })
                            })]
                        }), d]
                    })
                }
                render() {
                    return (0, a.jsxs)(g.ModalRoot, {
                        "aria-label": y.default.Messages.NOTIFICATION_SETTINGS,
                        size: g.ModalSize.MEDIUM,
                        transitionState: this.props.transitionState,
                        children: [this.renderHeader(), (0, a.jsxs)(g.ModalContent, {
                            scrollerRef: this.setScrollerRef,
                            children: [this.renderMute(), this.renderServerSettings(), this.renderNotificationOptions(), this.renderOverrideSelect(), this.renderChannelNotifications()]
                        }), this.renderFooter()]
                    })
                }
                constructor(...e) {
                    super(...e), this._scroller = null, this._channelRefs = {}, this.state = {
                        overrides: new Set((0, x.filterOverrides)(this.props.channelOverrides)),
                        channelOverridesProp: this.props.channelOverrides,
                        lastSelected: null
                    }, this.setScrollerRef = e => {
                        this._scroller = e
                    }, this.handleSelectChange = e => {
                        if (null == e) return;
                        let {
                            overrides: t
                        } = this.state;
                        (t = new Set(t)).add(e), this.setState({
                            overrides: t,
                            lastSelected: e
                        })
                    }, this.handleSelectMuteTime = e => {
                        let t = e > 0 ? u().add(e, "second").toISOString() : null;
                        S.default.updateGuildNotificationSettings(this.props.guildId, {
                            muted: !0,
                            mute_config: {
                                selected_time_window: e,
                                end_time: t
                            }
                        }, w.NotificationLabels.Muted)
                    }, this.handleDeleteOverride = e => {
                        let {
                            overrides: t
                        } = this.state;
                        (t = new Set(t)).delete(e), this.setState({
                            overrides: t
                        })
                    }, this.renderOptionLabel = e => {
                        let t = M.default.getChannel(e.value);
                        if (null == t) return e.label;
                        let s = M.default.getChannel(t.parent_id),
                            i = null != s ? s.name : null;
                        return (0, a.jsx)(U.default, {
                            icon: (0, _.getChannelIconComponent)(t),
                            title: e.label,
                            subtitle: i
                        })
                    }
                }
            }

            function V(e) {
                let {
                    guildId: t,
                    ...s
                } = e, i = (0, f.useStateFromStoresObject)([v.default, A.default, L.default, R.default], () => {
                    let e = v.default.getCategories(t);
                    return {
                        guildId: t,
                        categories: e,
                        guild: A.default.getGuild(t),
                        memberCount: L.default.getMemberCount(t),
                        suppressEveryone: R.default.isSuppressEveryoneEnabled(t),
                        suppressRoles: R.default.isSuppressRolesEnabled(t),
                        muteEvents: R.default.isMuteScheduledEventsEnabled(t),
                        mobilePush: R.default.isMobilePushEnabled(t),
                        muted: R.default.isMuted(t),
                        muteConfig: R.default.getMuteConfig(t),
                        messageNotifications: R.default.getMessageNotifications(t),
                        channelOverrides: R.default.getChannelOverrides(t),
                        channels: (0, m.default)(e._categories, e, e => {
                            let {
                                channel: {
                                    type: t
                                }
                            } = e;
                            return (0, C.isGuildSelectableChannelType)(t) || t === P.ChannelTypes.GUILD_CATEGORY
                        }),
                        notifyHighlights: R.default.getNotifyHighlights(t)
                    }
                }), l = (0, g.useToken)(N.default.unsafe_rawColors.GREEN_360).hex();
                return (0, a.jsx)(B, {
                    ...i,
                    ...s,
                    checkboxColor: l
                })
            }

            function Y(e) {
                let t = (0, x.useShouldUseNewNotificationSystem)("NotificationSettingsModal"),
                    s = t ? I.default : V;
                return (0, a.jsx)(s, {
                    ...e
                })
            }
        },
        524173: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                BellIcon: function() {
                    return n
                }
            });
            var i = s("37983");
            s("884691");
            var l = s("669491"),
                a = s("75196");
            let n = e => {
                let {
                    width: t = 24,
                    height: s = 24,
                    color: n = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...d
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, a.default)(d),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof n ? n : n.css,
                        d: "M9.7 2.89c.18-.07.32-.24.37-.43a2 2 0 0 1 3.86 0c.05.2.19.36.38.43A7 7 0 0 1 19 9.5v2.09c0 .12.05.24.13.33l1.1 1.22a3 3 0 0 1 .77 2.01v.28c0 .67-.34 1.29-.95 1.56-1.31.6-4 1.51-8.05 1.51-4.05 0-6.74-.91-8.05-1.5-.61-.28-.95-.9-.95-1.57v-.28a3 3 0 0 1 .77-2l1.1-1.23a.5.5 0 0 0 .13-.33V9.5a7 7 0 0 1 4.7-6.61ZM9.18 19.84A.16.16 0 0 0 9 20a3 3 0 1 0 6 0c0-.1-.09-.17-.18-.16a24.86 24.86 0 0 1-5.64 0Z",
                        className: r
                    })
                })
            }
        },
        225389: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                CircleInformationIcon: function() {
                    return n
                }
            });
            var i = s("37983");
            s("884691");
            var l = s("669491"),
                a = s("75196");
            let n = e => {
                let {
                    width: t = 24,
                    height: s = 24,
                    secondaryColor: n = "transparent",
                    secondaryColorClass: r = "",
                    color: d = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...u
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, a.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, i.jsx)("circle", {
                        cx: "12",
                        cy: "12",
                        r: "10",
                        fill: "string" == typeof n ? n : n.css,
                        className: r
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        fillRule: "evenodd",
                        d: "M23 12a11 11 0 1 1-22 0 11 11 0 0 1 22 0Zm-9.5-4.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm-.77 3.96a1 1 0 1 0-1.96-.42l-1.04 4.86a2.77 2.77 0 0 0 4.31 2.83l.24-.17a1 1 0 1 0-1.16-1.62l-.24.17a.77.77 0 0 1-1.2-.79l1.05-4.86Z",
                        clipRule: "evenodd",
                        className: o
                    })]
                })
            }
        },
        833222: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                DenyIcon: function() {
                    return n
                }
            });
            var i = s("37983");
            s("884691");
            var l = s("669491"),
                a = s("75196");
            let n = e => {
                let {
                    width: t = 24,
                    height: s = 24,
                    color: n = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...d
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, a.default)(d),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof n ? n : n.css,
                        fillRule: "evenodd",
                        d: "M23 12a11 11 0 1 1-22 0 11 11 0 0 1 22 0Zm-2 0a9 9 0 0 1-14.62 7.03L19.03 6.38A8.96 8.96 0 0 1 21 12ZM4.97 17.62 17.62 4.97A9 9 0 0 0 4.97 17.62Z",
                        clipRule: "evenodd",
                        className: r
                    })
                })
            }
        },
        546770: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                updateGuildPreset: function() {
                    return u
                }
            }), s("65597");
            var i = s("519705"),
                l = s("282109"),
                a = s("34676"),
                n = s("277796"),
                r = s("507313"),
                d = s("49111"),
                o = s("397336");

            function u(e, t) {
                let s = l.default.getGuildFlags(e);
                t === r.Presets.ALL_MESSAGES ? i.default.updateGuildNotificationSettings(e, {
                    message_notifications: d.UserNotificationSettings.ALL_MESSAGES,
                    flags: (0, n.withGuildUnreadFlags)(s, o.GuildNotificationSettingsFlags.UNREADS_ALL_MESSAGES)
                }, a.NotificationLabels.PresetAll) : t === r.Presets.MENTIONS ? i.default.updateGuildNotificationSettings(e, {
                    message_notifications: d.UserNotificationSettings.ONLY_MENTIONS,
                    flags: (0, n.withGuildUnreadFlags)(s, o.GuildNotificationSettingsFlags.UNREADS_ONLY_MENTIONS)
                }, a.NotificationLabels.PresetMentions) : t === r.Presets.NOTHING && i.default.updateGuildNotificationSettings(e, {
                    message_notifications: d.UserNotificationSettings.NO_MESSAGES,
                    flags: (0, n.withGuildUnreadFlags)(s, o.GuildNotificationSettingsFlags.UNREADS_ONLY_MENTIONS)
                }, a.NotificationLabels.PresetNothing)
            }
        },
        286844: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                getPushNotificationSelectOptions: function() {
                    return n
                },
                getUnreadSelectOptions: function() {
                    return r
                }
            });
            var i = s("49111"),
                l = s("133335"),
                a = s("782340");
            let n = e => [{
                    label: a.default.Messages.NOTIFICATION_SETTINGS_PRESETS_ALL_MESSAGES,
                    value: i.UserNotificationSettings.ALL_MESSAGES
                }, {
                    label: a.default.Messages.NOTIFICATION_SETTINGS_PRESETS_MENTION_ONLY,
                    value: i.UserNotificationSettings.ONLY_MENTIONS
                }, {
                    label: a.default.Messages.NOTIFICATION_SETTINGS_PRESETS_NONE,
                    value: i.UserNotificationSettings.NO_MESSAGES
                }],
                r = e => [{
                    label: a.default.Messages.NOTIFICATION_SETTINGS_PRESETS_ALL_MESSAGES,
                    value: l.UnreadSetting.ALL_MESSAGES
                }, {
                    value: l.UnreadSetting.ONLY_MENTIONS,
                    label: a.default.Messages.NOTIFICATION_SETTINGS_PRESETS_MENTION_ONLY,
                    disabled: (null == e ? void 0 : e.notificationSetting) === i.UserNotificationSettings.ALL_MESSAGES
                }]
        },
        661740: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return l
                }
            });
            var i = s("884691");

            function l(e, t) {
                let s = i.useRef(e);
                i.useEffect(() => {
                    e.length > s.current.length && t(), s.current = e
                }, [e, t])
            }
        },
        149943: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return h
                }
            });
            var i = s("37983");
            s("884691");
            var l = s("446674"),
                a = s("77078"),
                n = s("519705"),
                r = s("282109"),
                d = s("34676"),
                o = s("49111"),
                u = s("782340"),
                c = s("775247");

            function h(e) {
                let {
                    guildId: t
                } = e, s = (0, l.useStateFromStoresObject)([r.default], () => ({
                    highligths: r.default.getNotifyHighlights(t),
                    mobilePush: r.default.isMobilePushEnabled(t),
                    suppressRoles: r.default.isSuppressRolesEnabled(t),
                    suppressEveryone: r.default.isSuppressEveryoneEnabled(t),
                    muteScheduledEvents: r.default.isMuteScheduledEventsEnabled(t)
                })), a = n.default.updateGuildNotificationSettings;
                return (0, i.jsxs)("div", {
                    children: [(0, i.jsx)(f, {
                        value: s.suppressEveryone,
                        title: u.default.Messages.FORM_LABEL_SUPPRESS_EVERYONE.format(),
                        onChange: e => a(t, {
                            suppress_everyone: e
                        }, d.NotificationLabel.suppressEveryone(e))
                    }), (0, i.jsx)(f, {
                        value: s.suppressRoles,
                        title: u.default.Messages.FORM_LABEL_SUPPRESS_ROLES,
                        onChange: e => a(t, {
                            suppress_roles: e
                        }, d.NotificationLabel.suppressRoles(e))
                    }), (0, i.jsx)(f, {
                        subtitle: u.default.Messages.HIGHLIGHTS_NOTE_SUBTEXT,
                        title: u.default.Messages.FORM_LABEL_SUPPRESS_HIGHLIGHTS,
                        value: s.highligths === o.HighlightSettings.ENABLED,
                        onChange: e => a(t, {
                            notify_highlights: e ? o.HighlightSettings.ENABLED : o.HighlightSettings.DISABLED
                        }, d.NotificationLabel.highlights(e))
                    }), (0, i.jsx)(f, {
                        value: s.muteScheduledEvents,
                        title: u.default.Messages.FORM_LABEL_MUTE_SCHEDULED_EVENTS,
                        onChange: e => a(t, {
                            mute_scheduled_events: e
                        }, d.NotificationLabel.mutedEvents(e))
                    }), (0, i.jsx)(f, {
                        value: s.mobilePush,
                        title: u.default.Messages.FORM_LABEL_MOBILE_PUSH_NOTIFICATIONS,
                        onChange: e => a(t, {
                            mobile_push: e
                        }, d.NotificationLabel.mobilePush(e))
                    })]
                })
            }

            function f(e) {
                return (0, i.jsx)(a.FormSwitch, {
                    hideBorder: !0,
                    className: c.advanceSetting,
                    value: e.value,
                    onChange: e.onChange,
                    note: e.subtitle,
                    children: e.title
                })
            }
        },
        784905: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return b
                }
            }), s("222007");
            var i = s("37983"),
                l = s("884691"),
                a = s("414456"),
                n = s.n(a),
                r = s("446674"),
                d = s("669491"),
                o = s("77078"),
                u = s("272030"),
                c = s("519705"),
                h = s("133403"),
                f = s("679653"),
                N = s("625399"),
                g = s("419830"),
                S = s("42203"),
                E = s("245997"),
                m = s("27618"),
                T = s("282109"),
                _ = s("697218"),
                x = s("449008"),
                I = s("34676"),
                p = s("47495"),
                O = s("437756"),
                C = s("277796"),
                M = s("507313"),
                v = s("661740"),
                L = s("432082"),
                A = s("49111"),
                j = s("782340"),
                R = s("105346");

            function b(e) {
                let {
                    guildId: t,
                    requestScrollToBottom: s
                } = e, l = (0, r.useStateFromStoresArray)([S.default, T.default], () => {
                    let e = (0, p.filterOverrides)(T.default.getChannelOverrides(t), {
                        ignoreMute: !0,
                        ignoreUnreadSetting: !1,
                        ignoreNotificationSetting: !1
                    });
                    return e.map(e => S.default.getChannel(e)).filter(x.isNotNullish)
                });
                (0, v.default)(l, () => s());
                let a = (0, r.useStateFromStores)([E.default], () => E.default.getCategories(t)),
                    n = l.map((e, t) => (0, i.jsxs)("div", {
                        className: R.channelRow,
                        children: [(0, i.jsx)(G, {
                            channel: e,
                            categories: a
                        }, e.id), t < l.length - 1 && (0, i.jsx)("div", {
                            className: R.separator
                        })]
                    }, e.id));
                return (0, i.jsxs)("div", {
                    children: [(0, i.jsx)(L.default, {
                        guildId: t,
                        onSelected: e => {
                            if (null != l.find(t => t.id === e)) return;
                            let s = S.default.getChannel(e);
                            null != s && c.default.updateChannelOverrideSettings(t, e, {
                                muted: !1,
                                message_notifications: T.default.resolvedMessageNotifications(s),
                                flags: (0, C.withChannelUnreadFlags)(T.default.getChannelIdFlags(s.guild_id, s.id), T.default.resolveUnreadSetting(s))
                            }, I.NotificationLabels.OverrideCreated)
                        }
                    }), n.length > 0 && (0, i.jsxs)("div", {
                        className: R.table,
                        children: [(0, i.jsxs)("div", {
                            className: R.row,
                            children: [(0, i.jsx)(o.Text, {
                                variant: "text-xs/bold",
                                color: "text-muted",
                                className: R.rowName,
                                children: j.default.Messages.CHANNEL_OR_CATEGORY
                            }), (0, i.jsx)(o.Text, {
                                variant: "text-xs/bold",
                                color: "text-muted",
                                className: R.rowOption,
                                children: j.default.Messages.NOTIFICATION_PRESET_1
                            }), (0, i.jsx)(o.Text, {
                                variant: "text-xs/bold",
                                color: "text-muted",
                                className: R.rowOption,
                                children: j.default.Messages.NOTIFICATION_PRESET_2
                            }), (0, i.jsx)(o.Text, {
                                variant: "text-xs/bold",
                                color: "text-muted",
                                className: R.rowOption,
                                children: j.default.Messages.NOTIFICATION_PRESET_3
                            }), (0, i.jsx)(o.Text, {
                                variant: "text-xs/bold",
                                color: "text-muted",
                                className: R.rowOption,
                                children: j.default.Messages.NOTIFICATION_PRESET_CUSTOM
                            })]
                        }), n.length > 0 && (0, i.jsx)("div", {
                            className: R.channels,
                            children: n
                        })]
                    })]
                })
            }

            function G(e) {
                let {
                    channel: t,
                    categories: s
                } = e, a = (0, o.useToken)(d.default.unsafe_rawColors.GREEN_360).hex(), c = (0, r.useStateFromStores)([S.default], () => S.default.getChannel(null == t ? void 0 : t.parent_id)), E = (0, O.useChannelPresetSettings)(t), [T, x] = l.useState(!1);
                if (null == t) return null;
                let I = j.default.Messages.NO_CATEGORY,
                    p = (0, g.getChannelIconComponent)(t);
                t.type === A.ChannelTypes.GUILD_CATEGORY && null != t.guild_id && "" !== t.guild_id ? I = j.default.Messages.NUM_CHANNELS.format({
                    num: null != s[t.id] ? s[t.id].length : 0
                }) : null != c && (I = j.default.Messages.IN_CATEGORY.format({
                    categoryName: (0, f.computeChannelName)(c, _.default, m.default)
                }));
                let C = T ? M.Presets.CUSTOM : E.preset;
                return (0, i.jsx)("div", {
                    children: (0, i.jsxs)("div", {
                        className: n(R.row, R.channel),
                        children: [(0, i.jsxs)("div", {
                            className: n(R.rowName, R.modColor),
                            children: [null != p ? (0, i.jsx)(p, {
                                height: 20,
                                width: 20,
                                className: R.icon
                            }) : null, (0, i.jsxs)("div", {
                                children: [(0, i.jsx)(o.Text, {
                                    variant: "text-md/semibold",
                                    className: R.modColor,
                                    children: (0, f.computeChannelName)(t, _.default, m.default)
                                }), (0, i.jsx)(o.Text, {
                                    variant: "text-xs/medium",
                                    className: R.modColor,
                                    children: I
                                })]
                            })]
                        }), (0, i.jsx)("div", {
                            className: R.rowOption,
                            children: (0, i.jsx)("div", {
                                children: (0, i.jsx)(o.Checkbox, {
                                    color: a,
                                    shape: o.Checkbox.Shapes.ROUND,
                                    type: o.Checkbox.Types.INVERTED,
                                    value: C === M.Presets.ALL_MESSAGES,
                                    onChange: () => ((0, O.updateChannelPreset)(t.guild_id, t.id, M.Presets.ALL_MESSAGES), x(!1))
                                })
                            })
                        }), (0, i.jsx)("div", {
                            className: R.rowOption,
                            children: (0, i.jsx)("div", {
                                children: (0, i.jsx)(o.Checkbox, {
                                    color: a,
                                    shape: o.Checkbox.Shapes.ROUND,
                                    type: o.Checkbox.Types.INVERTED,
                                    value: C === M.Presets.MENTIONS,
                                    onChange: () => ((0, O.updateChannelPreset)(t.guild_id, t.id, M.Presets.MENTIONS), x(!1))
                                })
                            })
                        }), (0, i.jsx)("div", {
                            className: R.rowOption,
                            children: (0, i.jsx)("div", {
                                children: (0, i.jsx)(o.Checkbox, {
                                    color: a,
                                    shape: o.Checkbox.Shapes.ROUND,
                                    type: o.Checkbox.Types.INVERTED,
                                    value: C === M.Presets.NOTHING,
                                    onChange: () => ((0, O.updateChannelPreset)(t.guild_id, t.id, M.Presets.NOTHING), x(!1))
                                })
                            })
                        }), (0, i.jsx)("div", {
                            className: R.rowOption,
                            children: (0, i.jsx)("div", {
                                children: (0, i.jsx)(o.Checkbox, {
                                    onClick: e => {
                                        (0, u.openContextMenu)(e, () => (0, i.jsx)(o.Menu, {
                                            navId: "ChannelNotificationCustomSettingsItems",
                                            "aria-label": j.default.Messages.NOTIFICATION_SETTINGS_CHANNELS_CUSTOM_MENU_ARIA_LABEL,
                                            onClose: () => {},
                                            onSelect: () => {},
                                            children: (0, N.useChannelNotificationCustomSettingsItem)(t, () => x(!1))
                                        }))
                                    },
                                    color: a,
                                    shape: o.Checkbox.Shapes.ROUND,
                                    type: o.Checkbox.Types.INVERTED,
                                    value: C === M.Presets.CUSTOM,
                                    onChange: () => x(!0)
                                })
                            })
                        }), (0, i.jsx)(h.default, {
                            onClick: () => (0, O.updateChannelToGuildDefault)(t.guild_id, t.id),
                            className: R.removeButton
                        })]
                    })
                })
            }
        },
        432082: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return x
                }
            });
            var i = s("37983");
            s("884691");
            var l = s("917351"),
                a = s.n(l),
                n = s("446674"),
                r = s("77078"),
                d = s("320954"),
                o = s("679653"),
                u = s("419830"),
                c = s("233069"),
                h = s("42203"),
                f = s("245997"),
                N = s("27618"),
                g = s("697218"),
                S = s("612434"),
                E = s("49111"),
                m = s("782340"),
                T = s("57317");
            let _ = e => {
                let {
                    channel: {
                        type: t
                    }
                } = e;
                return (0, c.isGuildSelectableChannelType)(t) || t === E.ChannelTypes.GUILD_CATEGORY
            };

            function x(e) {
                var t;
                let {
                    guildId: s,
                    onSelected: l
                } = e;
                let {
                    channels: c,
                    categories: x
                } = (t = s, (0, n.useStateFromStoresObject)([f.default], () => {
                    let e = f.default.getCategories(t);
                    return {
                        channels: (0, d.default)(e._categories, e, _),
                        categories: e
                    }
                })), I = a(c).filter(e => {
                    let {
                        channel: t
                    } = e;
                    return t.type !== E.ChannelTypes.GUILD_CATEGORY || null != x[t.id] && x[t.id].length > 0
                }).map(e => {
                    let {
                        channel: t
                    } = e;
                    return {
                        value: t.id,
                        label: (0, o.computeChannelName)(t, g.default, N.default)
                    }
                }).value();
                return (0, i.jsxs)(r.FormItem, {
                    children: [(0, i.jsx)(r.FormText, {
                        type: r.FormText.Types.DESCRIPTION,
                        children: m.default.Messages.ADD_CHANNEL_TO_OVERRIDE
                    }), (0, i.jsx)("div", {
                        className: T.input,
                        children: (0, i.jsx)(r.SearchableSelect, {
                            value: "",
                            onChange: l,
                            options: I,
                            renderOptionLabel: e => {
                                let t = h.default.getChannel(e.value);
                                if (null == t) return e.label;
                                let s = h.default.getChannel(t.parent_id),
                                    l = null != s ? s.name : null;
                                return (0, i.jsx)(S.default, {
                                    icon: (0, u.getChannelIconComponent)(t),
                                    title: e.label,
                                    subtitle: l
                                })
                            },
                            placeholder: m.default.Messages.SELECT_CHANNEL_OR_CATEGORY
                        })
                    })]
                })
            }
        },
        348077: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return S
                }
            });
            var i = s("37983"),
                l = s("884691"),
                a = s("77078"),
                n = s("660279"),
                r = s("149943"),
                d = s("784905"),
                o = s("489618"),
                u = s("205382"),
                c = s("782340"),
                h = s("551040");

            function f(e) {
                return (0, i.jsx)("div", {
                    className: h.sectionHeader,
                    children: (0, i.jsx)(a.Heading, {
                        variant: "text-xs/bold",
                        className: h.sectionHeaderTitle,
                        color: "text-muted",
                        children: e.title
                    })
                })
            }

            function N(e) {
                return (0, i.jsxs)("div", {
                    children: [null != e.title && (0, i.jsx)(f, {
                        title: e.title
                    }), (0, i.jsx)("div", {
                        className: h.sectionContent,
                        children: e.children
                    })]
                })
            }

            function g(e) {
                let {
                    onClose: t
                } = e;
                return (0, i.jsxs)(a.ModalHeader, {
                    className: h.header,
                    children: [(0, i.jsxs)("div", {
                        className: h.headerLeft,
                        children: [(0, i.jsx)(n.default, {
                            className: h.headerBell
                        }), (0, i.jsx)(a.Heading, {
                            variant: "heading-lg/semibold",
                            children: c.default.Messages.NOTIFICATION_SETTINGS
                        })]
                    }), (0, i.jsx)(a.ModalCloseButton, {
                        onClick: t
                    })]
                })
            }

            function S(e) {
                let t = l.useRef(null);
                return (0, i.jsxs)(a.ModalRoot, {
                    size: a.ModalSize.MEDIUM,
                    transitionState: e.transitionState,
                    "aria-label": c.default.Messages.NOTIFICATION_SETTINGS,
                    children: [(0, i.jsx)(g, {
                        onClose: e.onClose
                    }), (0, i.jsxs)(a.ModalContent, {
                        className: h.content,
                        scrollerRef: t,
                        children: [(0, i.jsx)(N, {
                            children: (0, i.jsx)(o.default, {
                                guildId: e.guildId
                            })
                        }), (0, i.jsx)(N, {
                            title: c.default.Messages.NOTIFICATION_SETTINGS_PRESETS,
                            children: (0, i.jsx)(u.default, {
                                guildId: e.guildId
                            })
                        }), (0, i.jsx)(N, {
                            title: c.default.Messages.NOTIFICATION_SETTINGS_ADVANCED,
                            children: (0, i.jsx)(r.default, {
                                guildId: e.guildId
                            })
                        }), (0, i.jsx)(f, {
                            title: c.default.Messages.CHANNEL_NOTIFICATION_OVERRIDES
                        }), (0, i.jsx)(d.default, {
                            guildId: e.guildId,
                            requestScrollToBottom: () => {
                                null != t && null != t.current && t.current.scrollToBottom({
                                    animate: !0
                                })
                            }
                        })]
                    })]
                })
            }
        },
        489618: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return S
                }
            });
            var i = s("37983");
            s("884691");
            var l = s("866227"),
                a = s.n(l),
                n = s("65597"),
                r = s("77078"),
                d = s("519705"),
                o = s("305961"),
                u = s("282109"),
                c = s("34676"),
                h = s("47495"),
                f = s("468200"),
                N = s("782340"),
                g = s("518887");

            function S(e) {
                var t;
                let {
                    guildId: s
                } = e, l = (0, n.default)([o.default], () => o.default.getGuild(s)), S = (0, n.default)([u.default], () => u.default.isMuted(s)), E = (0, n.default)([u.default], () => u.default.getMuteConfig(s));
                return null == l ? null : (0, i.jsxs)(r.FormItem, {
                    children: [(0, i.jsx)(r.FormSwitch, {
                        hideBorder: !0,
                        value: S,
                        onChange: e => {
                            d.default.updateGuildNotificationSettings(s, {
                                muted: e
                            }, c.NotificationLabel.muted(e))
                        },
                        style: {
                            marginBottom: 0
                        },
                        note: N.default.Messages.FOR_LABEL_MUTE_SEVER_DESCRIPTION_V2,
                        children: N.default.Messages.FORM_LABEL_MUTE_SERVER.format({
                            name: l.name
                        })
                    }), S && (0, i.jsxs)("div", {
                        className: g.mutedConfig,
                        children: [(0, i.jsxs)("div", {
                            children: [(0, i.jsx)(r.FormTitle, {
                                tag: "h3",
                                children: N.default.Messages.MUTE_UNTIL
                            }), (0, i.jsx)(r.Text, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: function(e) {
                                    return null == e || null == e.end_time ? null : N.default.Messages.MUTED_UNTIL_TIME.format({
                                        endTime: new Date(e.end_time).toLocaleString(N.default.getLocale(), {
                                            month: "numeric",
                                            day: "numeric",
                                            hour: "numeric",
                                            minute: "2-digit"
                                        })
                                    })
                                }(E)
                            })]
                        }), (0, i.jsx)(r.SingleSelect, {
                            onChange: e => {
                                let t = e > 0 ? a().add(e, "second").toISOString() : null;
                                d.default.updateGuildNotificationSettings(s, {
                                    mute_config: {
                                        selected_time_window: e,
                                        end_time: t
                                    },
                                    muted: !0
                                }, c.NotificationLabels.Muted)
                            },
                            options: (0, h.getMuteTimeOptions)(),
                            value: null !== (t = null == E ? void 0 : E.selected_time_window) && void 0 !== t ? t : f.MuteUntilSeconds.ALWAYS
                        })]
                    })]
                })
            }
        },
        205382: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return v
                }
            }), s("222007"), s("702976");
            var i = s("37983"),
                l = s("884691"),
                a = s("414456"),
                n = s.n(a),
                r = s("65597"),
                d = s("225389"),
                o = s("833222"),
                u = s("77078"),
                c = s("519705"),
                h = s("282109"),
                f = s("593195"),
                N = s("956089"),
                g = s("34676"),
                S = s("277796"),
                E = s("546770"),
                m = s("286844"),
                T = s("507313"),
                _ = s("49111"),
                x = s("133335"),
                I = s("397336"),
                p = s("782340"),
                O = s("297697"),
                C = s("587621");
            let M = () => [{
                value: T.Presets.ALL_MESSAGES,
                name: p.default.Messages.NOTIFICATION_PRESET_1
            }, {
                value: T.Presets.MENTIONS,
                name: p.default.Messages.NOTIFICATION_PRESET_2
            }, {
                value: T.Presets.NOTHING,
                name: p.default.Messages.NOTIFICATION_PRESET_3
            }, {
                value: T.Presets.CUSTOM,
                name: p.default.Messages.NOTIFICATION_PRESET_CUSTOM
            }];

            function v(e) {
                let {
                    guildId: t
                } = e, s = (0, r.default)([h.default], () => h.default.getGuildFlags(t)), a = (0, r.default)([h.default], () => {
                    let e = h.default.getGuildUnreadSetting(t),
                        s = h.default.getMessageNotifications(t);
                    return e === x.UnreadSetting.UNSET ? s === _.UserNotificationSettings.ALL_MESSAGES ? x.UnreadSetting.ALL_MESSAGES : x.UnreadSetting.ONLY_MENTIONS : e
                }), n = (0, r.default)([h.default], () => h.default.getMessageNotifications(t)), [f, N] = (0, l.useState)(!1), C = f ? T.Presets.CUSTOM : (0, T.presetFromSettings)(a, n), v = e => {
                    if (e === T.Presets.CUSTOM) {
                        N(!0);
                        return
                    }
                    N(!1), (0, E.updateGuildPreset)(t, e)
                };
                return (0, i.jsxs)("div", {
                    children: [(0, i.jsx)(u.SegmentedControl, {
                        value: C,
                        options: M(),
                        onChange: e => {
                            let {
                                value: t
                            } = e;
                            return v(t)
                        },
                        look: "pill"
                    }), (0, i.jsxs)("div", {
                        className: O.grid,
                        children: [(0, i.jsx)(L, {
                            unreadSetting: a
                        }), (0, i.jsx)(A, {
                            notificationSetting: n
                        })]
                    }), (0, i.jsxs)("div", {
                        className: O.grid,
                        style: {
                            textAlign: "center"
                        },
                        children: [(0, i.jsxs)("div", {
                            children: [(0, i.jsx)(u.Text, {
                                variant: "text-xs/bold",
                                color: "text-muted",
                                style: {
                                    textTransform: "uppercase"
                                },
                                children: p.default.Messages.NOTIFICATION_SETTINGS_PRESETS_UNREAD_TITLE
                            }), (0, i.jsx)(u.Text, {
                                variant: "text-xs/medium",
                                color: "text-muted",
                                children: p.default.Messages.NOTIFICATION_SETTINGS_PRESETS_UNREAD_SUBTITLE
                            })]
                        }), (0, i.jsxs)("div", {
                            children: [(0, i.jsx)(u.Text, {
                                variant: "text-xs/bold",
                                color: "text-muted",
                                style: {
                                    textTransform: "uppercase"
                                },
                                children: p.default.Messages.NOTIFICATION_SETTINGS_PRESETS_NOTIFICATION_TITLE
                            }), (0, i.jsx)(u.Text, {
                                variant: "text-xs/medium",
                                color: "text-muted",
                                children: p.default.Messages.NOTIFICATION_SETTINGS_PRESETS_NOTIFICATION_SUBTITLE
                            })]
                        })]
                    }), (0, i.jsxs)("div", {
                        className: O.grid,
                        children: [(0, i.jsx)(u.SingleSelect, {
                            value: a,
                            className: O.input,
                            onChange: e => {
                                N(!1), c.default.updateGuildNotificationSettings(t, {
                                    flags: (0, S.withGuildUnreadFlags)(s, e === x.UnreadSetting.ALL_MESSAGES ? I.GuildNotificationSettingsFlags.UNREADS_ALL_MESSAGES : I.GuildNotificationSettingsFlags.UNREADS_ONLY_MENTIONS)
                                }, g.NotificationLabel.unreads(e))
                            },
                            options: (0, m.getUnreadSelectOptions)({
                                notificationSetting: n
                            }),
                            renderOptionLabel: e => {
                                let t = e.disabled && e.value === x.UnreadSetting.ONLY_MENTIONS && a !== x.UnreadSetting.ONLY_MENTIONS;
                                return (0, i.jsxs)(i.Fragment, {
                                    children: [(0, i.jsx)("div", {
                                        children: (0, i.jsx)(u.Text, {
                                            variant: "text-md/normal",
                                            color: e.disabled ? "text-muted" : void 0,
                                            children: e.label
                                        })
                                    }), t && (0, i.jsx)(u.Tooltip, {
                                        text: p.default.Messages.NOTIFICATION_SETTINGS_UNREAD_MENTION_ONLY_DISABLED,
                                        children: e => (0, i.jsx)(o.DenyIcon, {
                                            ...e,
                                            width: 20,
                                            height: 20,
                                            className: O.muted
                                        })
                                    })]
                                })
                            }
                        }), (0, i.jsx)(u.SingleSelect, {
                            className: O.input,
                            value: n,
                            onChange: e => {
                                N(!1);
                                let s = {
                                    message_notifications: e
                                };
                                e === _.UserNotificationSettings.ALL_MESSAGES && a !== x.UnreadSetting.ALL_MESSAGES && (s.flags = (0, S.withGuildUnreadFlags)(h.default.getGuildFlags(t), I.GuildNotificationSettingsFlags.UNREADS_ALL_MESSAGES)), c.default.updateGuildNotificationSettings(t, s, g.NotificationLabel.notifications(e))
                            },
                            options: (0, m.getPushNotificationSelectOptions)({
                                notificationSetting: n
                            }),
                            renderOptionLabel: e => {
                                let t = e.value === _.UserNotificationSettings.ALL_MESSAGES && a !== x.UnreadSetting.ALL_MESSAGES && n !== _.UserNotificationSettings.ALL_MESSAGES;
                                return (0, i.jsxs)(i.Fragment, {
                                    children: [(0, i.jsx)(u.Text, {
                                        variant: "text-md/normal",
                                        children: e.label
                                    }), t && (0, i.jsx)(u.Tooltip, {
                                        text: p.default.Messages.NOTIFICATION_SETTINGS_UNREAD_UPDATE_WARNING,
                                        children: e => (0, i.jsx)(d.CircleInformationIcon, {
                                            ...e,
                                            width: 20,
                                            height: 20,
                                            className: O.muted
                                        })
                                    })]
                                })
                            }
                        })]
                    })]
                })
            }

            function L(e) {
                let {
                    unreadSetting: t
                } = e, s = [{
                    badged: !0,
                    unread: !0,
                    muted: !1,
                    name: p.default.Messages.NOTIFICATION_SETTINGS_PRESETS_UNREAD_CHANNEL_1
                }, {
                    badged: !1,
                    unread: !0,
                    muted: !0,
                    name: p.default.Messages.NOTIFICATION_SETTINGS_PRESETS_UNREAD_CHANNEL_2
                }, {
                    badged: !1,
                    unread: !1,
                    muted: !0,
                    name: p.default.Messages.NOTIFICATION_SETTINGS_PRESETS_UNREAD_CHANNEL_3
                }];
                return t === x.UnreadSetting.ALL_MESSAGES && (s[1].muted = !1), (0, i.jsx)("div", {
                    className: O.channeList,
                    children: s.map(e => (0, i.jsxs)("div", {
                        className: O.channelListChannel,
                        children: [(0, i.jsxs)("div", {
                            className: O.channelListChannelName,
                            children: [(0, i.jsx)("div", {
                                className: n(O.unread, {
                                    [O.hidden]: !e.unread,
                                    [O.unreadMuted]: e.muted
                                })
                            }), (0, i.jsx)(f.default, {
                                height: 12,
                                width: 12,
                                className: n(O.channelListChannelIcon, {
                                    [O.muted]: e.muted
                                })
                            }), (0, i.jsx)(u.Text, {
                                variant: "text-xs/normal",
                                color: e.muted ? "text-muted" : void 0,
                                children: e.name
                            })]
                        }), (0, i.jsx)("div", {
                            className: n(O.badge, {
                                [O.hidden]: !e.badged
                            }),
                            children: (0, i.jsx)(N.NumberBadge, {
                                count: 1
                            })
                        })]
                    }, e.name))
                })
            }

            function A(e) {
                return (0, i.jsxs)("div", {
                    className: O.mockMessage,
                    children: [e.notificationSetting === _.UserNotificationSettings.NO_MESSAGES && (0, i.jsx)("div", {
                        className: O.mockMessageDisabled
                    }), (0, i.jsx)("div", {
                        children: (0, i.jsx)("img", {
                            className: O.mockMessageAvatar,
                            src: C,
                            alt: ""
                        })
                    }), (0, i.jsxs)("div", {
                        children: [(0, i.jsx)(u.Text, {
                            variant: "text-xs/medium",
                            children: p.default.Messages.NOTIFICATION_SETTINGS_PRESETS_NOTIFICATION_AUTHOR
                        }), e.notificationSetting === _.UserNotificationSettings.ALL_MESSAGES && (0, i.jsx)(u.Text, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: p.default.Messages.NOTIFICATION_SETTINGS_PRESETS_NOTIFICATION_MESSAGE
                        }), e.notificationSetting !== _.UserNotificationSettings.ALL_MESSAGES && (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsxs)(u.Text, {
                                variant: "text-xs/normal",
                                color: "text-link",
                                tag: "span",
                                children: ["@Roka", " "]
                            }), (0, i.jsx)(u.Text, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                tag: "span",
                                children: p.default.Messages.NOTIFICATION_SETTINGS_PRESETS_NOTIFICATION_MESSAGE
                            })]
                        })]
                    })]
                })
            }
        },
        308305: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                ChannelNotificationSettings: function() {
                    return T
                }
            }), s("222007");
            var i = s("37983"),
                l = s("884691"),
                a = s("77078"),
                n = s("519705"),
                r = s("133403"),
                d = s("679653"),
                o = s("419830"),
                u = s("42203"),
                c = s("245997"),
                h = s("27618"),
                f = s("697218"),
                N = s("145131"),
                g = s("34676"),
                S = s("49111"),
                E = s("782340"),
                m = s("296884");
            class T extends l.PureComponent {
                highlight() {
                    this.setState({
                        highlight: !0
                    }, () => {
                        null != this._timeout && clearTimeout(this._timeout), this._timeout = setTimeout(this.unhighlight, 1e3)
                    })
                }
                componentWillUnmount() {
                    null != this._timeout && clearTimeout(this._timeout)
                }
                setMessageNotification(e, t, s) {
                    let {
                        channel: i
                    } = this.props, l = i.getGuildId();
                    null != l && n.default.updateChannelOverrideSettings(l, i.id, {
                        message_notifications: e,
                        muted: null != t && t
                    }, s)
                }
                handleRadioChange(e) {
                    this.setMessageNotification(e, void 0, g.NotificationLabel.notifications(e))
                }
                renderMessageNotificationsRadioOption(e) {
                    let {
                        messageNotifications: t,
                        guildMuted: s,
                        muted: l,
                        guildMessageNotifications: n,
                        checkboxColor: r
                    } = this.props, d = t === e;
                    (null == t || t === S.UserNotificationSettings.NULL) && e === n && (d = !0);
                    let o = a.Checkbox.Types.INVERTED;
                    return (l || t === S.UserNotificationSettings.NULL || null == t) && (o = a.Checkbox.Types.GHOST), (0, i.jsx)(a.Checkbox, {
                        value: !s && d,
                        disabled: s,
                        shape: a.Checkbox.Shapes.ROUND,
                        color: r,
                        type: o,
                        onChange: this.handleRadioChange.bind(this, e)
                    })
                }
                renderName() {
                    let e, t;
                    let {
                        channel: s
                    } = this.props;
                    null != s.parent_id && (e = u.default.getChannel(s.parent_id));
                    let l = (0, o.getChannelIconComponent)(s);
                    if (s.type === S.ChannelTypes.GUILD_CATEGORY && null != s.guild_id && "" !== s.guild_id) {
                        let e = c.default.getCategories(s.guild_id);
                        t = E.default.Messages.NUM_CHANNELS.format({
                            num: null != e[s.id] ? e[s.id].length : 0
                        })
                    } else t = null != e ? E.default.Messages.IN_CATEGORY.format({
                        categoryName: (0, d.computeChannelName)(e, f.default, h.default)
                    }) : E.default.Messages.NO_CATEGORY;
                    return (0, i.jsxs)(N.default, {
                        grow: 1,
                        className: m.nameContainer,
                        children: [null != l ? (0, i.jsx)(l, {
                            className: m.icon
                        }) : null, (0, i.jsxs)("div", {
                            className: m.channelNameContainer,
                            children: [(0, i.jsx)(a.Text, {
                                variant: "text-md/semibold",
                                className: m.channelName,
                                children: (0, d.computeChannelName)(s, f.default, h.default)
                            }), (0, i.jsx)(a.Text, {
                                variant: "text-xs/normal",
                                className: m.channelNameByline,
                                children: t
                            })]
                        })]
                    })
                }
                renderOptions() {
                    let {
                        muted: e,
                        guildMuted: t
                    } = this.props;
                    return (0, i.jsxs)(N.default, {
                        grow: 0,
                        shrink: 0,
                        className: m.checkboxGroup,
                        justify: N.default.Justify.AROUND,
                        align: N.default.Align.CENTER,
                        children: [(0, i.jsx)(N.default.Child, {
                            wrap: !0,
                            grow: 0,
                            shrink: 0,
                            className: t ? m.checkboxContainerMuted : m.checkboxContainer,
                            children: this.renderMessageNotificationsRadioOption(S.UserNotificationSettings.ALL_MESSAGES)
                        }), (0, i.jsx)(N.default.Child, {
                            wrap: !0,
                            grow: 0,
                            shrink: 0,
                            className: t ? m.checkboxContainerMuted : m.checkboxContainer,
                            children: this.renderMessageNotificationsRadioOption(S.UserNotificationSettings.ONLY_MENTIONS)
                        }), (0, i.jsx)(N.default.Child, {
                            wrap: !0,
                            grow: 0,
                            shrink: 0,
                            className: t ? m.checkboxContainerMuted : m.checkboxContainer,
                            children: this.renderMessageNotificationsRadioOption(S.UserNotificationSettings.NO_MESSAGES)
                        }), (0, i.jsx)(N.default.Child, {
                            wrap: !0,
                            grow: 0,
                            shrink: 0,
                            className: m.checkboxMute,
                            children: (0, i.jsx)(a.Checkbox, {
                                value: e,
                                shape: a.Checkbox.Shapes.BOX,
                                type: a.Checkbox.Types.INVERTED,
                                onChange: this.handleMute
                            })
                        })]
                    })
                }
                render() {
                    let {
                        highlight: e
                    } = this.state;
                    return (0, i.jsxs)(a.Card, {
                        outline: !0,
                        editable: !0,
                        className: e ? m.overrideHighlight : m.override,
                        children: [this.renderName(), this.renderOptions(), (0, i.jsx)(r.default, {
                            className: m.removeOverride,
                            onClick: this.handleDelete
                        })]
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        highlight: !1
                    }, this.unhighlight = () => {
                        this.setState({
                            highlight: !1
                        })
                    }, this.handleMute = (e, t) => {
                        let {
                            messageNotifications: s
                        } = this.props;
                        this.setMessageNotification(null != s ? s : S.UserNotificationSettings.NULL, t, g.NotificationLabel.muted(t))
                    }, this.handleDelete = () => {
                        let {
                            onDelete: e,
                            channel: t
                        } = this.props;
                        this.setMessageNotification(S.UserNotificationSettings.NULL, !1, g.NotificationLabels.OverrideDeleted), null != e && e(t.id)
                    }
                }
            }
        },
        319165: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                useMutedUntilText: function() {
                    return n
                },
                default: function() {
                    return r
                }
            });
            var i = s("37983");
            s("884691");
            var l = s("77078"),
                a = s("782340");

            function n(e) {
                return null == e || null == e.end_time ? null : a.default.Messages.MUTED_UNTIL_TIME.format({
                    endTime: new Date(e.end_time).toLocaleString(a.default.getLocale(), {
                        month: "numeric",
                        day: "numeric",
                        hour: "numeric",
                        minute: "2-digit"
                    })
                })
            }

            function r(e) {
                let {
                    muteConfig: t,
                    className: s
                } = e, a = n(t);
                return null != a ? (0, i.jsx)(l.Text, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    className: s,
                    children: a
                }) : null
            }
        },
        612434: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return r
                }
            });
            var i = s("37983");
            s("884691");
            var l = s("77078"),
                a = s("145131"),
                n = s("997324"),
                r = e => {
                    let {
                        title: t,
                        subtitle: s,
                        icon: r
                    } = e;
                    return (0, i.jsxs)(a.default, {
                        className: n.wrapper,
                        align: a.default.Align.BASELINE,
                        children: [null != r && (0, i.jsx)(r, {
                            width: 16,
                            height: 16,
                            className: n.icon
                        }), (0, i.jsx)(l.Text, {
                            variant: "text-md/normal",
                            className: n.title,
                            children: t
                        }), null != s && "" !== s ? (0, i.jsx)(l.Text, {
                            variant: "text-xs/semibold",
                            className: n.subtitle,
                            children: s
                        }) : null]
                    })
                }
        },
        660279: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return r
                }
            });
            var i = s("37983");
            s("884691");
            var l = s("469563"),
                a = s("524173"),
                n = s("75196"),
                r = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: s = 24,
                        color: l = "currentColor",
                        foreground: a,
                        ...r
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, n.default)(r),
                        width: t,
                        height: s,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: (0, i.jsx)("path", {
                            className: a,
                            fill: l,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M18 9V14C18 15.657 19.344 17 21 17V18H3V17C4.656 17 6 15.657 6 14V9C6 5.686 8.686 3 12 3C15.314 3 18 5.686 18 9ZM11.9999 21C10.5239 21 9.24793 20.19 8.55493 19H15.4449C14.7519 20.19 13.4759 21 11.9999 21Z"
                        })
                    })
                }, a.BellIcon, void 0, {
                    size: 24
                })
        },
        619911: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return r
                }
            });
            var i = s("37983");
            s("884691");
            var l = s("469563"),
                a = s("125094"),
                n = s("75196"),
                r = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: s = 24,
                        color: l = "currentColor",
                        foreground: a,
                        ...r
                    } = e;
                    return (0, i.jsxs)("svg", {
                        ...(0, n.default)(r),
                        width: t,
                        height: s,
                        viewBox: "0 0 24 24",
                        children: [(0, i.jsx)("path", {
                            d: "M19 1C19.552 1 20 1.447 20 2V3L23 2V6L20 5V6C20 6.553 19.552 7 19 7H15C14.448 7 14 6.553 14 6V2C14 1.447 14.448 1 15 1H19Z",
                            className: a,
                            fill: l
                        }), (0, i.jsx)("path", {
                            d: "M20 13.5V9H22V15.5C22 16.604 21.103 17.5 20 17.5H13V19.5H17V21.5H7V19.5H11V17.5H4C2.897 17.5 2 16.604 2 15.5V4.5C2 3.397 2.897 2.5 4 2.5H12V4.5H4V13.5H20Z",
                            className: a,
                            fill: l
                        })]
                    })
                }, a.ScreenArrowIcon, void 0, {
                    size: 24
                })
        }
    }
]);