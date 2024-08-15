t.d(n, {
  Z: function() {
return g;
  }
}), t(47120), t(789020);
var s = t(735250),
  i = t(470079),
  a = t(442837),
  l = t(481060),
  u = t(92114),
  o = t(113449),
  r = t(748756),
  d = t(686660),
  c = t(122074),
  E = t(9156),
  _ = t(621600),
  M = t(981631),
  N = t(490897),
  I = t(526761),
  S = t(689938);

function g(e) {
  let n = (0, c.ng)(e, !0),
g = (0, c.U)();
  return (0, s.jsxs)(l.MenuItem, {
id: 'notification',
label: (0, s.jsxs)(s.Fragment, {
  children: [
    g,
    S.Z.Messages.NOTIFICATIONS
  ]
}),
action: () => {
  (0, l.openModalLazy)(async () => {
    let {
      default: n
    } = await Promise.all([
      t.e('5863'),
      t.e('69065')
    ]).then(t.bind(t, 751212));
    return t => (0, s.jsx)(n, {
      ...t,
      guildId: e
    });
  });
},
children: [
  function(e) {
    let [n, t] = i.useState(!1), [c, g] = i.useState(!1), L = (0, a.e7)([E.ZP], () => E.ZP.getGuildUnreadSetting(e)), T = (0, a.e7)([E.ZP], () => E.ZP.getMessageNotifications(e)), A = c ? d.s8.CUSTOM : (0, d.gs)(L, T), h = n => {
      g(!1);
      let t = {
        message_notifications: n
      };
      n === M.bL.ALL_MESSAGES && L !== N.i.ALL_MESSAGES && (t.flags = (0, o.Q4)(E.ZP.getGuildFlags(e), I.vc.UNREADS_ALL_MESSAGES)), u.Z.updateGuildNotificationSettings(e, t, _.UE.notifications(n));
    }, f = n => {
      g(!1);
      let t = E.ZP.getGuildFlags(e);
      u.Z.updateGuildNotificationSettings(e, {
        flags: (0, o.Q4)(t, n === N.i.ALL_MESSAGES ? I.vc.UNREADS_ALL_MESSAGES : I.vc.UNREADS_ONLY_MENTIONS)
      }, _.UE.unreads(n));
    };
    return (0, s.jsxs)(s.Fragment, {
      children: [
        (0, s.jsxs)(l.MenuGroup, {
          children: [
            (0, s.jsx)(l.MenuRadioItem, {
              id: 'everything',
              group: 'notification-preset',
              checked: A === d.s8.ALL_MESSAGES,
              label: S.Z.Messages.NOTIFICATION_PRESET_1,
              action: () => ((0, r.V)(e, d.s8.ALL_MESSAGES), g(!1))
            }),
            (0, s.jsx)(l.MenuRadioItem, {
              id: 'essentials',
              group: 'notification-preset',
              checked: A === d.s8.MENTIONS,
              label: S.Z.Messages.NOTIFICATION_PRESET_2,
              action: () => ((0, r.V)(e, d.s8.MENTIONS), g(!1))
            }),
            (0, s.jsx)(l.MenuRadioItem, {
              id: 'nothing',
              group: 'notification-preset',
              checked: A === d.s8.NOTHING,
              label: S.Z.Messages.NOTIFICATION_PRESET_3,
              action: () => ((0, r.V)(e, d.s8.NOTHING), g(!1))
            }),
            (0, s.jsx)(l.MenuRadioItem, {
              id: 'custom',
              group: 'notification-preset',
              checked: A === d.s8.CUSTOM,
              action: () => (t(!0), g(!0)),
              label: S.Z.Messages.NOTIFICATION_PRESET_CUSTOM
            })
          ]
        }),
        (A === d.s8.CUSTOM || n) && (0, s.jsxs)(l.MenuGroup, {
          children: [
            (0, s.jsxs)(l.MenuItem, {
              id: 'unread_setting',
              label: 'Unread Badges',
              children: [
                (0, s.jsx)(l.MenuRadioItem, {
                  id: 'unread_setting_all_messages',
                  group: 'unread_setting',
                  checked: L === N.i.ALL_MESSAGES,
                  label: S.Z.Messages.NOTIFICATION_SETTINGS_PRESETS_ALL_MESSAGES,
                  action: () => f(N.i.ALL_MESSAGES)
                }),
                (0, s.jsx)(l.MenuRadioItem, {
                  id: 'unread_setting_mention_only',
                  group: 'unread_setting',
                  checked: L === N.i.ONLY_MENTIONS,
                  label: S.Z.Messages.NOTIFICATION_SETTINGS_PRESETS_MENTION_ONLY,
                  action: () => f(N.i.ONLY_MENTIONS),
                  disabled: L !== N.i.ONLY_MENTIONS && T === M.bL.ALL_MESSAGES,
                  subtext: L !== N.i.ONLY_MENTIONS && T === M.bL.ALL_MESSAGES ? S.Z.Messages.NOTIFICATION_SETTINGS_UNREAD_MENTION_ONLY_DISABLED : void 0
                })
              ]
            }, 'unread_setting'),
            (0, s.jsxs)(l.MenuItem, {
              id: 'push_settings',
              label: S.Z.Messages.NOTIFICATIONS,
              children: [
                (0, s.jsx)(l.MenuRadioItem, {
                  group: 'notification-preset',
                  id: 'push_settings_everything',
                  label: S.Z.Messages.NOTIFICATION_SETTINGS_PRESETS_ALL_MESSAGES,
                  checked: T === M.bL.ALL_MESSAGES,
                  action: () => h(M.bL.ALL_MESSAGES),
                  subtext: L !== N.i.ALL_MESSAGES && T !== M.bL.ALL_MESSAGES ? S.Z.Messages.NOTIFICATION_SETTINGS_UNREAD_UPDATE_WARNING : void 0
                }),
                (0, s.jsx)(l.MenuRadioItem, {
                  group: 'notification-preset',
                  id: 'push_settings_everything_mention',
                  checked: T === M.bL.ONLY_MENTIONS,
                  label: S.Z.Messages.NOTIFICATION_SETTINGS_PRESETS_MENTION_ONLY,
                  action: () => h(M.bL.ONLY_MENTIONS)
                }),
                (0, s.jsx)(l.MenuRadioItem, {
                  group: 'notification-preset',
                  id: 'push_settings_everything_nothing',
                  label: S.Z.Messages.NOTIFICATION_SETTINGS_PRESETS_NONE,
                  checked: T === M.bL.NO_MESSAGES,
                  action: () => h(M.bL.NO_MESSAGES)
                })
              ]
            }, 'push_settings')
          ]
        })
      ]
    });
  }(e),
  null != n && (0, s.jsx)(l.MenuGroup, {
    children: n
  }),
  function(e) {
    let n = (0, a.cj)([E.ZP], () => ({
        highligths: E.ZP.getNotifyHighlights(e),
        mobilePush: E.ZP.isMobilePushEnabled(e),
        suppressRoles: E.ZP.isSuppressRolesEnabled(e),
        suppressEveryone: E.ZP.isSuppressEveryoneEnabled(e),
        muteScheduledEvents: E.ZP.isMuteScheduledEventsEnabled(e)
      })),
      t = u.Z.updateGuildNotificationSettings;
    return (0, s.jsxs)(s.Fragment, {
      children: [
        (0, s.jsxs)(l.MenuGroup, {
          children: [
            (0, s.jsx)(l.MenuCheckboxItem, {
              id: 'mention',
              checked: n.suppressEveryone,
              label: S.Z.Messages.FORM_LABEL_SUPPRESS_EVERYONE.format(),
              action: () => t(e, {
                suppress_everyone: !n.suppressEveryone
              }, _.UE.suppressEveryone(!n.suppressEveryone))
            }),
            (0, s.jsx)(l.MenuCheckboxItem, {
              id: 'roles',
              checked: n.suppressRoles,
              label: S.Z.Messages.FORM_LABEL_SUPPRESS_ROLES,
              action: () => t(e, {
                suppress_roles: !n.suppressRoles
              }, _.UE.suppressRoles(!n.suppressRoles))
            }),
            (0, s.jsx)(l.MenuCheckboxItem, {
              id: 'hightlight',
              label: S.Z.Messages.FORM_LABEL_SUPPRESS_HIGHLIGHTS,
              checked: n.highligths === M.gLR.ENABLED,
              action: () => t(e, {
                notify_highlights: n.highligths === M.gLR.ENABLED ? M.gLR.DISABLED : M.gLR.ENABLED
              }, _.UE.highlights(n.highligths !== M.gLR.ENABLED))
            })
          ]
        }),
        (0, s.jsxs)(l.MenuGroup, {
          children: [
            (0, s.jsx)(l.MenuCheckboxItem, {
              id: 'event',
              checked: n.muteScheduledEvents,
              label: S.Z.Messages.FORM_LABEL_MUTE_SCHEDULED_EVENTS,
              action: () => t(e, {
                mute_scheduled_events: !n.muteScheduledEvents
              }, _.UE.mutedEvents(!n.muteScheduledEvents))
            }),
            (0, s.jsx)(l.MenuCheckboxItem, {
              id: 'mobile_push',
              checked: n.mobilePush,
              label: S.Z.Messages.FORM_LABEL_MOBILE_PUSH_NOTIFICATIONS,
              action: () => t(e, {
                mobile_push: !n.mobilePush
              }, _.UE.mobilePush(!n.mobilePush))
            })
          ]
        })
      ]
    });
  }(e)
]
  });
}