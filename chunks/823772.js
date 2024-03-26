"use strict";
n.r(t), n.d(t, {
  default: function() {
    return M
  }
}), n("222007"), n("702976");
var i = n("37983"),
  s = n("884691"),
  a = n("446674"),
  l = n("77078"),
  u = n("519705"),
  o = n("277796"),
  d = n("546770"),
  r = n("507313"),
  c = n("282109"),
  f = n("34676"),
  E = n("49111"),
  S = n("133335"),
  _ = n("397336"),
  g = n("782340");

function M(e) {
  return (0, i.jsxs)(l.MenuItem, {
    id: "notification",
    label: g.default.Messages.NOTIFICATIONS,
    action: () => {
      (0, l.openModalLazy)(async () => {
        let {
          default: t
        } = await n.el("747593").then(n.bind(n, "747593"));
        return n => (0, i.jsx)(t, {
          ...n,
          guildId: e
        })
      })
    },
    children: [function(e) {
      let [t, n] = s.useState(!1), [M, N] = s.useState(!1), I = (0, a.useStateFromStores)([c.default], () => c.default.getGuildUnreadSetting(e)), T = (0, a.useStateFromStores)([c.default], () => c.default.getMessageNotifications(e)), h = M ? r.Presets.CUSTOM : (0, r.presetFromSettings)(I, T), A = t => {
        N(!1);
        let n = {
          message_notifications: t
        };
        t === E.UserNotificationSettings.ALL_MESSAGES && I !== S.UnreadSetting.ALL_MESSAGES && (n.flags = (0, o.withGuildUnreadFlags)(c.default.getGuildFlags(e), _.GuildNotificationSettingsFlags.UNREADS_ALL_MESSAGES)), u.default.updateGuildNotificationSettings(e, n, f.NotificationLabel.notifications(t))
      }, p = t => {
        N(!1);
        let n = c.default.getGuildFlags(e);
        u.default.updateGuildNotificationSettings(e, {
          flags: (0, o.withGuildUnreadFlags)(n, t === S.UnreadSetting.ALL_MESSAGES ? _.GuildNotificationSettingsFlags.UNREADS_ALL_MESSAGES : _.GuildNotificationSettingsFlags.UNREADS_ONLY_MENTIONS)
        }, f.NotificationLabel.unreads(t))
      };
      return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsxs)(l.MenuGroup, {
          children: [(0, i.jsx)(l.MenuRadioItem, {
            id: "everything",
            group: "notification-preset",
            checked: h === r.Presets.ALL_MESSAGES,
            label: g.default.Messages.NOTIFICATION_PRESET_1,
            action: () => ((0, d.updateGuildPreset)(e, r.Presets.ALL_MESSAGES), N(!1))
          }), (0, i.jsx)(l.MenuRadioItem, {
            id: "essentials",
            group: "notification-preset",
            checked: h === r.Presets.MENTIONS,
            label: g.default.Messages.NOTIFICATION_PRESET_2,
            action: () => ((0, d.updateGuildPreset)(e, r.Presets.MENTIONS), N(!1))
          }), (0, i.jsx)(l.MenuRadioItem, {
            id: "nothing",
            group: "notification-preset",
            checked: h === r.Presets.NOTHING,
            label: g.default.Messages.NOTIFICATION_PRESET_3,
            action: () => ((0, d.updateGuildPreset)(e, r.Presets.NOTHING), N(!1))
          }), (0, i.jsx)(l.MenuRadioItem, {
            id: "custom",
            group: "notification-preset",
            checked: h === r.Presets.CUSTOM,
            action: () => (n(!0), N(!0)),
            label: g.default.Messages.NOTIFICATION_PRESET_CUSTOM
          })]
        }), (h === r.Presets.CUSTOM || t) && (0, i.jsxs)(l.MenuGroup, {
          children: [(0, i.jsxs)(l.MenuItem, {
            id: "unread_setting",
            label: "Unread Badges",
            children: [(0, i.jsx)(l.MenuRadioItem, {
              id: "unread_setting_all_messages",
              group: "unread_setting",
              checked: I === S.UnreadSetting.ALL_MESSAGES,
              label: g.default.Messages.NOTIFICATION_SETTINGS_PRESETS_ALL_MESSAGES,
              action: () => p(S.UnreadSetting.ALL_MESSAGES)
            }), (0, i.jsx)(l.MenuRadioItem, {
              id: "unread_setting_mention_only",
              group: "unread_setting",
              checked: I === S.UnreadSetting.ONLY_MENTIONS,
              label: g.default.Messages.NOTIFICATION_SETTINGS_PRESETS_MENTION_ONLY,
              action: () => p(S.UnreadSetting.ONLY_MENTIONS),
              disabled: I !== S.UnreadSetting.ONLY_MENTIONS && T === E.UserNotificationSettings.ALL_MESSAGES,
              subtext: I !== S.UnreadSetting.ONLY_MENTIONS && T === E.UserNotificationSettings.ALL_MESSAGES ? g.default.Messages.NOTIFICATION_SETTINGS_UNREAD_MENTION_ONLY_DISABLED : void 0
            })]
          }, "unread_setting"), (0, i.jsxs)(l.MenuItem, {
            id: "push_settings",
            label: g.default.Messages.NOTIFICATIONS,
            children: [(0, i.jsx)(l.MenuRadioItem, {
              group: "notification-preset",
              id: "push_settings_everything",
              label: g.default.Messages.NOTIFICATION_SETTINGS_PRESETS_ALL_MESSAGES,
              checked: T === E.UserNotificationSettings.ALL_MESSAGES,
              action: () => A(E.UserNotificationSettings.ALL_MESSAGES),
              subtext: I !== S.UnreadSetting.ALL_MESSAGES && T !== E.UserNotificationSettings.ALL_MESSAGES ? g.default.Messages.NOTIFICATION_SETTINGS_UNREAD_UPDATE_WARNING : void 0
            }), (0, i.jsx)(l.MenuRadioItem, {
              group: "notification-preset",
              id: "push_settings_everything_mention",
              checked: T === E.UserNotificationSettings.ONLY_MENTIONS,
              label: g.default.Messages.NOTIFICATION_SETTINGS_PRESETS_MENTION_ONLY,
              action: () => A(E.UserNotificationSettings.ONLY_MENTIONS)
            }), (0, i.jsx)(l.MenuRadioItem, {
              group: "notification-preset",
              id: "push_settings_everything_nothing",
              label: g.default.Messages.NOTIFICATION_SETTINGS_PRESETS_NONE,
              checked: T === E.UserNotificationSettings.NO_MESSAGES,
              action: () => A(E.UserNotificationSettings.NO_MESSAGES)
            })]
          }, "push_settings")]
        })]
      })
    }(e), function(e) {
      let t = (0, a.useStateFromStoresObject)([c.default], () => ({
          highligths: c.default.getNotifyHighlights(e),
          mobilePush: c.default.isMobilePushEnabled(e),
          suppressRoles: c.default.isSuppressRolesEnabled(e),
          suppressEveryone: c.default.isSuppressEveryoneEnabled(e),
          muteScheduledEvents: c.default.isMuteScheduledEventsEnabled(e)
        })),
        n = u.default.updateGuildNotificationSettings;
      return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsxs)(l.MenuGroup, {
          children: [(0, i.jsx)(l.MenuCheckboxItem, {
            id: "mention",
            checked: t.suppressEveryone,
            label: g.default.Messages.FORM_LABEL_SUPPRESS_EVERYONE.format(),
            action: () => n(e, {
              suppress_everyone: !t.suppressEveryone
            }, f.NotificationLabel.suppressEveryone(!t.suppressEveryone))
          }), (0, i.jsx)(l.MenuCheckboxItem, {
            id: "roles",
            checked: t.suppressRoles,
            label: g.default.Messages.FORM_LABEL_SUPPRESS_ROLES,
            action: () => n(e, {
              suppress_roles: !t.suppressRoles
            }, f.NotificationLabel.suppressRoles(!t.suppressRoles))
          }), (0, i.jsx)(l.MenuCheckboxItem, {
            id: "hightlight",
            label: g.default.Messages.FORM_LABEL_SUPPRESS_HIGHLIGHTS,
            checked: t.highligths === E.HighlightSettings.ENABLED,
            action: () => n(e, {
              notify_highlights: t.highligths === E.HighlightSettings.ENABLED ? E.HighlightSettings.DISABLED : E.HighlightSettings.ENABLED
            }, f.NotificationLabel.highlights(t.highligths !== E.HighlightSettings.ENABLED))
          })]
        }), (0, i.jsxs)(l.MenuGroup, {
          children: [(0, i.jsx)(l.MenuCheckboxItem, {
            id: "event",
            checked: t.muteScheduledEvents,
            label: g.default.Messages.FORM_LABEL_MUTE_SCHEDULED_EVENTS,
            action: () => n(e, {
              mute_scheduled_events: !t.muteScheduledEvents
            }, f.NotificationLabel.mutedEvents(!t.muteScheduledEvents))
          }), (0, i.jsx)(l.MenuCheckboxItem, {
            id: "mobile_push",
            checked: t.mobilePush,
            label: g.default.Messages.FORM_LABEL_MOBILE_PUSH_NOTIFICATIONS,
            action: () => n(e, {
              mobile_push: !t.mobilePush
            }, f.NotificationLabel.mobilePush(!t.mobilePush))
          })]
        })]
      })
    }(e)]
  })
}