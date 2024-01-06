(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["67714"], {
        625399: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                },
                useChannelNotificationCustomSettingsItem: function() {
                    return E
                }
            }), n("222007"), n("702976");
            var i = n("37983"),
                s = n("884691"),
                a = n("77078"),
                o = n("519705"),
                l = n("437756"),
                S = n("277796"),
                r = n("507313"),
                d = n("282109"),
                u = n("34676"),
                g = n("49111"),
                N = n("133335"),
                _ = n("397336"),
                c = n("782340");

            function f(e) {
                let t = (0, l.useChannelPresetSettings)(e),
                    n = (0, l.useChannelPresetInheritance)(e),
                    o = t.preset === r.Presets.CUSTOM && !n.inherited,
                    [S, d] = s.useState(o),
                    [u, N] = s.useState(!1),
                    _ = u ? r.Presets.CUSTOM : t.preset,
                    f = E(e, () => N(!1));
                if (e.type === g.ChannelTypes.GUILD_VOICE) return null;
                let M = "parent" === n.inheritedFrom ? c.default.Messages.FORM_LABEL_DEFAULT_CATEGORY : c.default.Messages.FORM_LABEL_DEFAULT;
                return e.type === g.ChannelTypes.GUILD_STAGE_VOICE ? (0, i.jsxs)(a.MenuItem, {
                    id: "channel_notification_settings",
                    label: c.default.Messages.NOTIFICATIONS,
                    children: [(0, i.jsx)(a.MenuRadioItem, {
                        id: "cns_default",
                        label: M,
                        checked: n.inherited,
                        group: "channel_notification_settings",
                        subtext: t.notification === g.UserNotificationSettings.NO_MESSAGES ? c.default.Messages.FORM_LABEL_NOTHING : c.default.Messages.FORM_LABEL_LIVE_STAGES_ONLY,
                        action: () => (0, l.updateChannelToGuildDefault)(e.guild_id, e.id)
                    }), (0, i.jsx)(a.MenuRadioItem, {
                        id: "cns_only_mention",
                        group: "channel_notification_settings",
                        checked: !n.inherited && t.notification !== g.UserNotificationSettings.NO_MESSAGES,
                        label: c.default.Messages.FORM_LABEL_LIVE_STAGES_ONLY,
                        action: () => (0, l.updateChannelNotificationSetting)(e.guild_id, e.id, g.UserNotificationSettings.ONLY_MENTIONS)
                    }), (0, i.jsx)(a.MenuRadioItem, {
                        id: "cns_no_message",
                        group: "channel_notification_settings",
                        label: c.default.Messages.FORM_LABEL_NOTHING,
                        checked: !n.inherited && t.notification === g.UserNotificationSettings.NO_MESSAGES,
                        action: () => (0, l.updateChannelNotificationSetting)(e.guild_id, e.id, g.UserNotificationSettings.NO_MESSAGES)
                    })]
                }) : (0, i.jsxs)(a.MenuItem, {
                    id: "channel_notification_settings",
                    label: c.default.Messages.NOTIFICATIONS,
                    children: [(0, i.jsx)(a.MenuRadioItem, {
                        id: "cns_default",
                        label: M,
                        group: "channel_notification_settings",
                        checked: n.inherited && !u,
                        subtext: n.inheritedPreset,
                        action: () => ((0, l.updateChannelToGuildDefault)(e.guild_id, e.id), N(!1))
                    }), (0, i.jsx)(a.MenuRadioItem, {
                        id: "cns_everything",
                        group: "channel_notification_settings",
                        label: c.default.Messages.NOTIFICATION_PRESET_1,
                        checked: !n.inherited && _ === r.Presets.ALL_MESSAGES,
                        action: () => ((0, l.updateChannelPreset)(e.guild_id, e.id, r.Presets.ALL_MESSAGES), N(!1))
                    }), (0, i.jsx)(a.MenuRadioItem, {
                        id: "cns_essentials",
                        group: "channel_notification_settings",
                        label: c.default.Messages.NOTIFICATION_PRESET_2,
                        checked: !n.inherited && _ === r.Presets.MENTIONS,
                        action: () => ((0, l.updateChannelPreset)(e.guild_id, e.id, r.Presets.MENTIONS), N(!1))
                    }), (0, i.jsx)(a.MenuRadioItem, {
                        id: "cns_nothing",
                        group: "channel_notification_settings",
                        label: c.default.Messages.NOTIFICATION_PRESET_3,
                        checked: !n.inherited && _ === r.Presets.NOTHING,
                        action: () => ((0, l.updateChannelPreset)(e.guild_id, e.id, r.Presets.NOTHING), N(!1))
                    }), (0, i.jsx)(a.MenuRadioItem, {
                        id: "cns_custom",
                        group: "channel_notification_settings",
                        label: c.default.Messages.NOTIFICATION_PRESET_CUSTOM,
                        checked: u || !n.inherited && _ === r.Presets.CUSTOM,
                        action: () => (d(!0), N(!0))
                    }), (S || o) && f]
                })
            }

            function E(e, t) {
                let {
                    notification: n,
                    unread: s
                } = (0, l.useChannelPresetSettings)(e), r = e => {
                    e(), t()
                }, f = t => {
                    let n = {
                        message_notifications: t
                    };
                    t === g.UserNotificationSettings.ALL_MESSAGES && s !== N.UnreadSetting.ALL_MESSAGES && (n.flags = (0, S.withChannelUnreadFlags)(d.default.getChannelIdFlags(e.guild_id, e.id), _.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES)), o.default.updateChannelOverrideSettings(e.guild_id, e.id, n, u.NotificationLabel.notifications(t))
                };
                return (0, i.jsxs)(a.MenuGroup, {
                    children: [(0, i.jsxs)(a.MenuItem, {
                        id: "unread_setting",
                        label: "Unread Badges",
                        children: [(0, i.jsx)(a.MenuRadioItem, {
                            id: "unread_setting_all_messages",
                            group: "unread_setting",
                            checked: s === N.UnreadSetting.ALL_MESSAGES,
                            label: c.default.Messages.NOTIFICATION_SETTINGS_PRESETS_ALL_MESSAGES,
                            action: () => r(() => (0, l.updateChannelUnreadSetting)(e.guild_id, e.id, N.UnreadSetting.ALL_MESSAGES))
                        }), (0, i.jsx)(a.MenuRadioItem, {
                            id: "unread_setting_mention_only",
                            group: "unread_setting",
                            checked: s === N.UnreadSetting.ONLY_MENTIONS,
                            label: c.default.Messages.NOTIFICATION_SETTINGS_PRESETS_MENTION_ONLY,
                            disabled: s !== N.UnreadSetting.ONLY_MENTIONS && n === g.UserNotificationSettings.ALL_MESSAGES,
                            subtext: s !== N.UnreadSetting.ONLY_MENTIONS && n === g.UserNotificationSettings.ALL_MESSAGES ? c.default.Messages.NOTIFICATION_SETTINGS_UNREAD_MENTION_ONLY_DISABLED : void 0,
                            action: () => r(() => (0, l.updateChannelUnreadSetting)(e.guild_id, e.id, N.UnreadSetting.ONLY_MENTIONS))
                        })]
                    }, "unread_setting"), (0, i.jsxs)(a.MenuItem, {
                        id: "push_settings",
                        label: c.default.Messages.NOTIFICATIONS,
                        children: [(0, i.jsx)(a.MenuRadioItem, {
                            group: "notification-preset",
                            id: "push_settings_everything",
                            label: c.default.Messages.NOTIFICATION_SETTINGS_PRESETS_ALL_MESSAGES,
                            checked: n === g.UserNotificationSettings.ALL_MESSAGES,
                            subtext: s !== N.UnreadSetting.ALL_MESSAGES && n !== g.UserNotificationSettings.ALL_MESSAGES ? c.default.Messages.NOTIFICATION_SETTINGS_UNREAD_UPDATE_WARNING : void 0,
                            action: () => r(() => f(g.UserNotificationSettings.ALL_MESSAGES))
                        }), (0, i.jsx)(a.MenuRadioItem, {
                            group: "notification-preset",
                            id: "push_settings_everything_mention",
                            checked: n === g.UserNotificationSettings.ONLY_MENTIONS,
                            label: c.default.Messages.NOTIFICATION_SETTINGS_PRESETS_MENTION_ONLY,
                            action: () => r(() => f(g.UserNotificationSettings.ONLY_MENTIONS))
                        }), (0, i.jsx)(a.MenuRadioItem, {
                            group: "notification-preset",
                            id: "push_settings_everything_nothing",
                            label: c.default.Messages.NOTIFICATION_SETTINGS_PRESETS_NONE,
                            checked: n === g.UserNotificationSettings.NO_MESSAGES,
                            action: () => r(() => f(g.UserNotificationSettings.NO_MESSAGES))
                        })]
                    }, "push_settings")]
                })
            }
        },
        47495: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getMuteTimeOptions: function() {
                    return g
                },
                filterOverrides: function() {
                    return _
                },
                useShouldUseNewNotificationSystem: function() {
                    return c
                }
            }), n("702976");
            var i = n("446674"),
                s = n("668597"),
                a = n("282109"),
                o = n("568734"),
                l = n("640497"),
                S = n("49111"),
                r = n("468200"),
                d = n("397336"),
                u = n("782340");

            function g() {
                return [{
                    label: u.default.Messages.MUTE_DURATION_15_MINUTES,
                    value: r.MuteUntilSeconds.MINUTES_15
                }, {
                    label: u.default.Messages.MUTE_DURATION_1_HOUR,
                    value: r.MuteUntilSeconds.HOURS_1
                }, {
                    label: u.default.Messages.MUTE_DURATION_3_HOURS,
                    value: r.MuteUntilSeconds.HOURS_3
                }, {
                    label: u.default.Messages.MUTE_DURATION_8_HOURS,
                    value: r.MuteUntilSeconds.HOURS_8
                }, {
                    label: u.default.Messages.MUTE_DURATION_24_HOURS,
                    value: r.MuteUntilSeconds.HOURS_24
                }, {
                    label: u.default.Messages.MUTE_DURATION_ALWAYS,
                    value: r.MuteUntilSeconds.ALWAYS
                }]
            }
            let N = {
                ignoreMute: !1,
                ignoreUnreadSetting: !0,
                ignoreNotificationSetting: !1
            };

            function _(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : N;
                return Object.keys(e).filter(n => {
                    var i, a;
                    let l = e[n].message_notifications !== S.UserNotificationSettings.NULL,
                        r = o.hasFlag(null !== (i = e[n].flags) && void 0 !== i ? i : 0, d.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES) || o.hasFlag(null !== (a = e[n].flags) && void 0 !== a ? a : 0, d.ChannelNotificationSettingsFlags.UNREADS_ONLY_MENTIONS);
                    return !t.ignoreUnreadSetting && r || !t.ignoreNotificationSetting && l || !t.ignoreMute && (0, s.computeIsMuted)(e[n])
                })
            }

            function c(e) {
                let t = (0, i.useStateFromStores)([a.default], () => a.default.useNewNotifications);
                return l.default.useExperiment({
                    location: e
                }, {
                    autoTrackExposure: !1
                }).enabled && t
            }
        },
        437756: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useChannelPresetSettings: function() {
                    return _
                },
                useChannelPresetInheritance: function() {
                    return c
                },
                updateChannelPreset: function() {
                    return f
                },
                updateChannelToGuildDefault: function() {
                    return E
                },
                updateChannelUnreadSetting: function() {
                    return M
                },
                updateChannelNotificationSetting: function() {
                    return h
                }
            }), n("222007");
            var i = n("65597"),
                s = n("519705"),
                a = n("42203"),
                o = n("282109"),
                l = n("34676"),
                S = n("47495"),
                r = n("277796"),
                d = n("507313"),
                u = n("49111"),
                g = n("133335"),
                N = n("397336");

            function _(e) {
                let t = (0, i.default)([o.default], () => o.default.resolveUnreadSetting(e)),
                    n = (0, i.default)([o.default], () => o.default.resolvedMessageNotifications(e));
                return {
                    unread: t,
                    notification: n,
                    preset: (0, d.presetFromSettings)(t, n)
                }
            }

            function c(e) {
                let t = (0, i.useStateFromStoresArray)([o.default], () => (0, S.filterOverrides)(o.default.getChannelOverrides(e.guild_id), {
                        ignoreMute: !0,
                        ignoreUnreadSetting: !1,
                        ignoreNotificationSetting: !1
                    })),
                    [n, s] = (0, i.useStateFromStoresArray)([o.default, a.default], () => {
                        let n = a.default.getChannel(e.parent_id);
                        return null != n && t.includes(n.id) ? ["parent", (0, d.presetName)((0, d.presetFromSettings)(o.default.resolveUnreadSetting(n), o.default.resolvedMessageNotifications(n)))] : ["guild", (0, d.presetName)((0, d.presetFromSettings)(o.default.getGuildUnreadSetting(e.guild_id), o.default.getMessageNotifications(e.guild_id)))]
                    }, [e.guild_id, e.parent_id, t]);
                return {
                    inherited: !t.includes(e.id),
                    inheritedFrom: n,
                    inheritedPreset: s
                }
            }

            function f(e, t, n) {
                let i = o.default.getChannelIdFlags(e, t);
                n === d.Presets.ALL_MESSAGES ? s.default.updateChannelOverrideSettings(e, t, {
                    message_notifications: u.UserNotificationSettings.ALL_MESSAGES,
                    flags: (0, r.withChannelUnreadFlags)(i, N.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES)
                }, l.NotificationLabels.PresetAll) : n === d.Presets.MENTIONS ? s.default.updateChannelOverrideSettings(e, t, {
                    message_notifications: u.UserNotificationSettings.ONLY_MENTIONS,
                    flags: (0, r.withChannelUnreadFlags)(i, N.ChannelNotificationSettingsFlags.UNREADS_ONLY_MENTIONS)
                }, l.NotificationLabels.PresetMentions) : n === d.Presets.NOTHING && s.default.updateChannelOverrideSettings(e, t, {
                    message_notifications: u.UserNotificationSettings.NO_MESSAGES,
                    flags: (0, r.withChannelUnreadFlags)(i, N.ChannelNotificationSettingsFlags.UNREADS_ONLY_MENTIONS)
                }, l.NotificationLabels.PresetNothing)
            }

            function E(e, t) {
                s.default.updateChannelOverrideSettings(e, t, {
                    message_notifications: u.UserNotificationSettings.NULL,
                    flags: (0, r.resetChannelUnreadFlags)(o.default.getChannelIdFlags(e, t))
                }, l.NotificationLabels.PresetDefault)
            }

            function M(e, t, n) {
                let i = o.default.getChannelIdFlags(e, t);
                s.default.updateChannelOverrideSettings(e, t, {
                    flags: (0, r.withChannelUnreadFlags)(i, n === g.UnreadSetting.ALL_MESSAGES ? N.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES : N.ChannelNotificationSettingsFlags.UNREADS_ONLY_MENTIONS)
                }, l.NotificationLabel.unreads(n))
            }

            function h(e, t, n) {
                s.default.updateChannelOverrideSettings(e, t, {
                    message_notifications: n
                }, l.NotificationLabel.notifications(n))
            }
        },
        277796: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                withGuildUnreadFlags: function() {
                    return a
                },
                resetChannelUnreadFlags: function() {
                    return o
                },
                withChannelUnreadFlags: function() {
                    return l
                }
            });
            var i = n("568734"),
                s = n("397336");

            function a(e, t) {
                var n;
                return i.addFlag((n = e, i.removeFlags(n, s.GuildNotificationSettingsFlags.UNREADS_ALL_MESSAGES, s.GuildNotificationSettingsFlags.UNREADS_ONLY_MENTIONS)), t)
            }
            let o = e => i.removeFlags(e, s.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES, s.ChannelNotificationSettingsFlags.UNREADS_ONLY_MENTIONS);

            function l(e, t) {
                return i.addFlag(o(e), t)
            }
        },
        507313: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                Presets: function() {
                    return i
                },
                presetFromSettings: function() {
                    return r
                },
                presetName: function() {
                    return d
                }
            }), n("794252");
            var i, s, a = n("506838"),
                o = n("49111"),
                l = n("133335"),
                S = n("782340");

            function r(e, t) {
                return (0, a.match)([t, e]).with([o.UserNotificationSettings.ALL_MESSAGES, l.UnreadSetting.ALL_MESSAGES], () => "all_messages").with([o.UserNotificationSettings.ONLY_MENTIONS, l.UnreadSetting.UNSET], () => "mentions").with([o.UserNotificationSettings.ONLY_MENTIONS, l.UnreadSetting.ONLY_MENTIONS], () => "mentions").with([o.UserNotificationSettings.NO_MESSAGES, l.UnreadSetting.UNSET], () => "nothing").with([o.UserNotificationSettings.NO_MESSAGES, l.UnreadSetting.ONLY_MENTIONS], () => "nothing").otherwise(() => "custom")
            }

            function d(e) {
                return (0, a.match)(e).with("all_messages", () => S.default.Messages.NOTIFICATION_PRESET_1).with("mentions", () => S.default.Messages.NOTIFICATION_PRESET_2).with("nothing", () => S.default.Messages.NOTIFICATION_PRESET_3).with("custom", () => S.default.Messages.NOTIFICATION_PRESET_CUSTOM).exhaustive()
            }(s = i || (i = {})).ALL_MESSAGES = "all_messages", s.MENTIONS = "mentions", s.NOTHING = "nothing", s.CUSTOM = "custom"
        }
    }
]);