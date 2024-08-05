t.d(n, {
  EQ: function() {
return h;
  },
  T5: function() {
return M;
  },
  ZP: function() {
return f;
  }
}), t(47120), t(789020);
var i = t(735250),
  a = t(470079),
  c = t(442837),
  s = t(481060),
  o = t(92114),
  r = t(221259),
  _ = t(113449),
  d = t(686660),
  l = t(9156),
  u = t(621600),
  S = t(981631),
  g = t(490897),
  N = t(526761),
  E = t(689938);

function f(e) {
  let n = h(e);
  return e.type === S.d4z.GUILD_VOICE ? null : (0, i.jsx)(s.MenuItem, {
id: 'channel_notification_settings',
label: E.Z.Messages.NOTIFICATIONS,
children: n
  });
}

function h(e) {
  let n = (0, r.ZA)(e),
t = (0, r.yN)(e),
_ = n.preset === d.s8.CUSTOM && !t.inherited,
[u, g] = a.useState(_),
[N, f] = a.useState(!1),
h = N ? d.s8.CUSTOM : n.preset,
L = M(e, () => f(!1)),
O = (0, c.e7)([l.ZP], () => l.ZP.getNewForumThreadsCreated(e)),
b = 'parent' === t.inheritedFrom ? E.Z.Messages.FORM_LABEL_DEFAULT_CATEGORY : E.Z.Messages.FORM_LABEL_DEFAULT;
  return e.type === S.d4z.GUILD_STAGE_VOICE ? (0, i.jsxs)(s.MenuGroup, {
children: [
  (0, i.jsx)(s.MenuRadioItem, {
    id: 'cns_default',
    label: b,
    checked: t.inherited,
    group: 'channel_notification_settings',
    subtext: n.notification === S.bL.NO_MESSAGES ? E.Z.Messages.FORM_LABEL_NOTHING : E.Z.Messages.FORM_LABEL_LIVE_STAGES_ONLY,
    action: () => (0, r.JK)(e.guild_id, e.id)
  }),
  (0, i.jsx)(s.MenuRadioItem, {
    id: 'cns_only_mention',
    group: 'channel_notification_settings',
    checked: !t.inherited && n.notification !== S.bL.NO_MESSAGES,
    label: E.Z.Messages.FORM_LABEL_LIVE_STAGES_ONLY,
    action: () => (0, r.ft)(e.guild_id, e.id, S.bL.ONLY_MENTIONS)
  }),
  (0, i.jsx)(s.MenuRadioItem, {
    id: 'cns_no_message',
    group: 'channel_notification_settings',
    label: E.Z.Messages.FORM_LABEL_NOTHING,
    checked: !t.inherited && n.notification === S.bL.NO_MESSAGES,
    action: () => (0, r.ft)(e.guild_id, e.id, S.bL.NO_MESSAGES)
  })
]
  }) : (0, i.jsxs)(i.Fragment, {
children: [
  e.isForumLikeChannel() ? (0, i.jsxs)(i.Fragment, {
    children: [
      (0, i.jsx)(s.MenuCheckboxItem, {
        id: 'new-forum-threads-created',
        label: E.Z.Messages.FORUM_NEW_POSTS_CREATED,
        checked: O,
        action: () => o.Z.setForumThreadsCreated(e, !O)
      }),
      (0, i.jsx)(s.MenuSeparator, {})
    ]
  }) : null,
  (0, i.jsxs)(s.MenuGroup, {
    children: [
      (0, i.jsx)(s.MenuRadioItem, {
        id: 'cns_default',
        label: b,
        group: 'channel_notification_settings',
        checked: t.inherited && !N,
        subtext: t.inheritedPreset,
        action: () => ((0, r.JK)(e.guild_id, e.id), f(!1))
      }),
      (0, i.jsx)(s.MenuRadioItem, {
        id: 'cns_everything',
        group: 'channel_notification_settings',
        label: E.Z.Messages.NOTIFICATION_PRESET_1,
        checked: !t.inherited && h === d.s8.ALL_MESSAGES,
        action: () => ((0, r._m)(e.guild_id, e.id, d.s8.ALL_MESSAGES), f(!1))
      }),
      (0, i.jsx)(s.MenuRadioItem, {
        id: 'cns_essentials',
        group: 'channel_notification_settings',
        label: E.Z.Messages.NOTIFICATION_PRESET_2,
        checked: !t.inherited && h === d.s8.MENTIONS,
        action: () => ((0, r._m)(e.guild_id, e.id, d.s8.MENTIONS), f(!1))
      }),
      (0, i.jsx)(s.MenuRadioItem, {
        id: 'cns_nothing',
        group: 'channel_notification_settings',
        label: E.Z.Messages.NOTIFICATION_PRESET_3,
        checked: !t.inherited && h === d.s8.NOTHING,
        action: () => ((0, r._m)(e.guild_id, e.id, d.s8.NOTHING), f(!1))
      }),
      (0, i.jsx)(s.MenuRadioItem, {
        id: 'cns_custom',
        group: 'channel_notification_settings',
        label: E.Z.Messages.NOTIFICATION_PRESET_CUSTOM,
        checked: N || !t.inherited && h === d.s8.CUSTOM,
        action: () => (g(!0), f(!0))
      })
    ]
  }),
  (u || _) && L
]
  });
}

function M(e, n) {
  let {
notification: t,
unread: a
  } = (0, r.ZA)(e), c = e => {
e(), n();
  }, d = n => {
let t = {
  message_notifications: n
};
n === S.bL.ALL_MESSAGES && a !== g.i.ALL_MESSAGES && (t.flags = (0, _.pq)(l.ZP.getChannelIdFlags(e.guild_id, e.id), N.ic.UNREADS_ALL_MESSAGES)), o.Z.updateChannelOverrideSettings(e.guild_id, e.id, t, u.UE.notifications(n));
  };
  return (0, i.jsxs)(s.MenuGroup, {
children: [
  (0, i.jsxs)(s.MenuItem, {
    id: 'unread_setting',
    label: 'Unread Badges',
    children: [
      (0, i.jsx)(s.MenuRadioItem, {
        id: 'unread_setting_all_messages',
        group: 'unread_setting',
        checked: a === g.i.ALL_MESSAGES,
        label: E.Z.Messages.NOTIFICATION_SETTINGS_PRESETS_ALL_MESSAGES,
        action: () => c(() => (0, r.IG)(e.guild_id, e.id, g.i.ALL_MESSAGES))
      }),
      (0, i.jsx)(s.MenuRadioItem, {
        id: 'unread_setting_mention_only',
        group: 'unread_setting',
        checked: a === g.i.ONLY_MENTIONS,
        label: E.Z.Messages.NOTIFICATION_SETTINGS_PRESETS_MENTION_ONLY,
        disabled: a !== g.i.ONLY_MENTIONS && t === S.bL.ALL_MESSAGES,
        subtext: a !== g.i.ONLY_MENTIONS && t === S.bL.ALL_MESSAGES ? E.Z.Messages.NOTIFICATION_SETTINGS_UNREAD_MENTION_ONLY_DISABLED : void 0,
        action: () => c(() => (0, r.IG)(e.guild_id, e.id, g.i.ONLY_MENTIONS))
      })
    ]
  }, 'unread_setting'),
  (0, i.jsxs)(s.MenuItem, {
    id: 'push_settings',
    label: E.Z.Messages.NOTIFICATIONS,
    children: [
      (0, i.jsx)(s.MenuRadioItem, {
        group: 'notification-preset',
        id: 'push_settings_everything',
        label: E.Z.Messages.NOTIFICATION_SETTINGS_PRESETS_ALL_MESSAGES,
        checked: t === S.bL.ALL_MESSAGES,
        subtext: a !== g.i.ALL_MESSAGES && t !== S.bL.ALL_MESSAGES ? E.Z.Messages.NOTIFICATION_SETTINGS_UNREAD_UPDATE_WARNING : void 0,
        action: () => c(() => d(S.bL.ALL_MESSAGES))
      }),
      (0, i.jsx)(s.MenuRadioItem, {
        group: 'notification-preset',
        id: 'push_settings_everything_mention',
        checked: t === S.bL.ONLY_MENTIONS,
        label: E.Z.Messages.NOTIFICATION_SETTINGS_PRESETS_MENTION_ONLY,
        action: () => c(() => d(S.bL.ONLY_MENTIONS))
      }),
      (0, i.jsx)(s.MenuRadioItem, {
        group: 'notification-preset',
        id: 'push_settings_everything_nothing',
        label: E.Z.Messages.NOTIFICATION_SETTINGS_PRESETS_NONE,
        checked: t === S.bL.NO_MESSAGES,
        action: () => c(() => d(S.bL.NO_MESSAGES))
      })
    ]
  }, 'push_settings')
]
  });
}