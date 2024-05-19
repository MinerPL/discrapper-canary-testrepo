"use strict";
i.r(t), i.d(t, {
  default: function() {
    return M
  }
}), i("47120"), i("789020");
var n = i("735250"),
  s = i("470079"),
  a = i("442837"),
  u = i("481060"),
  l = i("92114"),
  o = i("113449"),
  d = i("748756"),
  r = i("686660"),
  c = i("122074"),
  S = i("9156"),
  f = i("621600"),
  E = i("981631"),
  N = i("490897"),
  _ = i("526761"),
  g = i("689938");

function M(e) {
  let t = (0, c.useCustomNotificationSoundGuildContextMenuItem)(e, !0),
    M = (0, c.useCustomNotificationNewBadge)();
  return (0, n.jsxs)(u.MenuItem, {
    id: "notification",
    label: (0, n.jsxs)(n.Fragment, {
      children: [M, g.default.Messages.NOTIFICATIONS]
    }),
    action: () => {
      (0, u.openModalLazy)(async () => {
        let {
          default: t
        } = await Promise.all([i.e("99387"), i.e("5863"), i.e("82321")]).then(i.bind(i, "751212"));
        return i => (0, n.jsx)(t, {
          ...i,
          guildId: e
        })
      })
    },
    children: [function(e) {
      let [t, i] = s.useState(!1), [c, M] = s.useState(!1), I = (0, a.useStateFromStores)([S.default], () => S.default.getGuildUnreadSetting(e)), A = (0, a.useStateFromStores)([S.default], () => S.default.getMessageNotifications(e)), h = c ? r.Presets.CUSTOM : (0, r.presetFromSettings)(I, A), T = t => {
        M(!1);
        let i = {
          message_notifications: t
        };
        t === E.UserNotificationSettings.ALL_MESSAGES && I !== N.UnreadSetting.ALL_MESSAGES && (i.flags = (0, o.withGuildUnreadFlags)(S.default.getGuildFlags(e), _.GuildNotificationSettingsFlags.UNREADS_ALL_MESSAGES)), l.default.updateGuildNotificationSettings(e, i, f.NotificationLabel.notifications(t))
      }, m = t => {
        M(!1);
        let i = S.default.getGuildFlags(e);
        l.default.updateGuildNotificationSettings(e, {
          flags: (0, o.withGuildUnreadFlags)(i, t === N.UnreadSetting.ALL_MESSAGES ? _.GuildNotificationSettingsFlags.UNREADS_ALL_MESSAGES : _.GuildNotificationSettingsFlags.UNREADS_ONLY_MENTIONS)
        }, f.NotificationLabel.unreads(t))
      };
      return (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsxs)(u.MenuGroup, {
          children: [(0, n.jsx)(u.MenuRadioItem, {
            id: "everything",
            group: "notification-preset",
            checked: h === r.Presets.ALL_MESSAGES,
            label: g.default.Messages.NOTIFICATION_PRESET_1,
            action: () => ((0, d.updateGuildPreset)(e, r.Presets.ALL_MESSAGES), M(!1))
          }), (0, n.jsx)(u.MenuRadioItem, {
            id: "essentials",
            group: "notification-preset",
            checked: h === r.Presets.MENTIONS,
            label: g.default.Messages.NOTIFICATION_PRESET_2,
            action: () => ((0, d.updateGuildPreset)(e, r.Presets.MENTIONS), M(!1))
          }), (0, n.jsx)(u.MenuRadioItem, {
            id: "nothing",
            group: "notification-preset",
            checked: h === r.Presets.NOTHING,
            label: g.default.Messages.NOTIFICATION_PRESET_3,
            action: () => ((0, d.updateGuildPreset)(e, r.Presets.NOTHING), M(!1))
          }), (0, n.jsx)(u.MenuRadioItem, {
            id: "custom",
            group: "notification-preset",
            checked: h === r.Presets.CUSTOM,
            action: () => (i(!0), M(!0)),
            label: g.default.Messages.NOTIFICATION_PRESET_CUSTOM
          })]
        }), (h === r.Presets.CUSTOM || t) && (0, n.jsxs)(u.MenuGroup, {
          children: [(0, n.jsxs)(u.MenuItem, {
            id: "unread_setting",
            label: "Unread Badges",
            children: [(0, n.jsx)(u.MenuRadioItem, {
              id: "unread_setting_all_messages",
              group: "unread_setting",
              checked: I === N.UnreadSetting.ALL_MESSAGES,
              label: g.default.Messages.NOTIFICATION_SETTINGS_PRESETS_ALL_MESSAGES,
              action: () => m(N.UnreadSetting.ALL_MESSAGES)
            }), (0, n.jsx)(u.MenuRadioItem, {
              id: "unread_setting_mention_only",
              group: "unread_setting",
              checked: I === N.UnreadSetting.ONLY_MENTIONS,
              label: g.default.Messages.NOTIFICATION_SETTINGS_PRESETS_MENTION_ONLY,
              action: () => m(N.UnreadSetting.ONLY_MENTIONS),
              disabled: I !== N.UnreadSetting.ONLY_MENTIONS && A === E.UserNotificationSettings.ALL_MESSAGES,
              subtext: I !== N.UnreadSetting.ONLY_MENTIONS && A === E.UserNotificationSettings.ALL_MESSAGES ? g.default.Messages.NOTIFICATION_SETTINGS_UNREAD_MENTION_ONLY_DISABLED : void 0
            })]
          }, "unread_setting"), (0, n.jsxs)(u.MenuItem, {
            id: "push_settings",
            label: g.default.Messages.NOTIFICATIONS,
            children: [(0, n.jsx)(u.MenuRadioItem, {
              group: "notification-preset",
              id: "push_settings_everything",
              label: g.default.Messages.NOTIFICATION_SETTINGS_PRESETS_ALL_MESSAGES,
              checked: A === E.UserNotificationSettings.ALL_MESSAGES,
              action: () => T(E.UserNotificationSettings.ALL_MESSAGES),
              subtext: I !== N.UnreadSetting.ALL_MESSAGES && A !== E.UserNotificationSettings.ALL_MESSAGES ? g.default.Messages.NOTIFICATION_SETTINGS_UNREAD_UPDATE_WARNING : void 0
            }), (0, n.jsx)(u.MenuRadioItem, {
              group: "notification-preset",
              id: "push_settings_everything_mention",
              checked: A === E.UserNotificationSettings.ONLY_MENTIONS,
              label: g.default.Messages.NOTIFICATION_SETTINGS_PRESETS_MENTION_ONLY,
              action: () => T(E.UserNotificationSettings.ONLY_MENTIONS)
            }), (0, n.jsx)(u.MenuRadioItem, {
              group: "notification-preset",
              id: "push_settings_everything_nothing",
              label: g.default.Messages.NOTIFICATION_SETTINGS_PRESETS_NONE,
              checked: A === E.UserNotificationSettings.NO_MESSAGES,
              action: () => T(E.UserNotificationSettings.NO_MESSAGES)
            })]
          }, "push_settings")]
        })]
      })
    }(e), null != t && (0, n.jsx)(u.MenuGroup, {
      children: t
    }), function(e) {
      let t = (0, a.useStateFromStoresObject)([S.default], () => ({
          highligths: S.default.getNotifyHighlights(e),
          mobilePush: S.default.isMobilePushEnabled(e),
          suppressRoles: S.default.isSuppressRolesEnabled(e),
          suppressEveryone: S.default.isSuppressEveryoneEnabled(e),
          muteScheduledEvents: S.default.isMuteScheduledEventsEnabled(e)
        })),
        i = l.default.updateGuildNotificationSettings;
      return (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsxs)(u.MenuGroup, {
          children: [(0, n.jsx)(u.MenuCheckboxItem, {
            id: "mention",
            checked: t.suppressEveryone,
            label: g.default.Messages.FORM_LABEL_SUPPRESS_EVERYONE.format(),
            action: () => i(e, {
              suppress_everyone: !t.suppressEveryone
            }, f.NotificationLabel.suppressEveryone(!t.suppressEveryone))
          }), (0, n.jsx)(u.MenuCheckboxItem, {
            id: "roles",
            checked: t.suppressRoles,
            label: g.default.Messages.FORM_LABEL_SUPPRESS_ROLES,
            action: () => i(e, {
              suppress_roles: !t.suppressRoles
            }, f.NotificationLabel.suppressRoles(!t.suppressRoles))
          }), (0, n.jsx)(u.MenuCheckboxItem, {
            id: "hightlight",
            label: g.default.Messages.FORM_LABEL_SUPPRESS_HIGHLIGHTS,
            checked: t.highligths === E.HighlightSettings.ENABLED,
            action: () => i(e, {
              notify_highlights: t.highligths === E.HighlightSettings.ENABLED ? E.HighlightSettings.DISABLED : E.HighlightSettings.ENABLED
            }, f.NotificationLabel.highlights(t.highligths !== E.HighlightSettings.ENABLED))
          })]
        }), (0, n.jsxs)(u.MenuGroup, {
          children: [(0, n.jsx)(u.MenuCheckboxItem, {
            id: "event",
            checked: t.muteScheduledEvents,
            label: g.default.Messages.FORM_LABEL_MUTE_SCHEDULED_EVENTS,
            action: () => i(e, {
              mute_scheduled_events: !t.muteScheduledEvents
            }, f.NotificationLabel.mutedEvents(!t.muteScheduledEvents))
          }), (0, n.jsx)(u.MenuCheckboxItem, {
            id: "mobile_push",
            checked: t.mobilePush,
            label: g.default.Messages.FORM_LABEL_MOBILE_PUSH_NOTIFICATIONS,
            action: () => i(e, {
              mobile_push: !t.mobilePush
            }, f.NotificationLabel.mobilePush(!t.mobilePush))
          })]
        })]
      })
    }(e)]
  })
}