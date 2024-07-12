i.d(n, {
  EQ: function() {
return O;
  },
  T5: function() {
return I;
  },
  ZP: function() {
return M;
  }
}), i(47120), i(789020);
var t = i(735250),
  s = i(470079),
  a = i(442837),
  _ = i(481060),
  S = i(92114),
  r = i(221259),
  o = i(113449),
  d = i(686660),
  u = i(9156),
  l = i(621600),
  E = i(981631),
  c = i(490897),
  N = i(526761),
  g = i(689938);

function M(e) {
  let n = O(e);
  return e.type === E.d4z.GUILD_VOICE ? null : (0, t.jsx)(_.MenuItem, {
id: 'channel_notification_settings',
label: g.Z.Messages.NOTIFICATIONS,
children: n
  });
}

function O(e) {
  let n = (0, r.ZA)(e),
i = (0, r.yN)(e),
o = n.preset === d.s8.CUSTOM && !i.inherited,
[l, c] = s.useState(o),
[N, M] = s.useState(!1),
O = N ? d.s8.CUSTOM : n.preset,
L = I(e, () => M(!1)),
A = (0, a.e7)([u.ZP], () => u.ZP.getNewForumThreadsCreated(e)),
T = 'parent' === i.inheritedFrom ? g.Z.Messages.FORM_LABEL_DEFAULT_CATEGORY : g.Z.Messages.FORM_LABEL_DEFAULT;
  return e.type === E.d4z.GUILD_STAGE_VOICE ? (0, t.jsxs)(_.MenuGroup, {
children: [
  (0, t.jsx)(_.MenuRadioItem, {
    id: 'cns_default',
    label: T,
    checked: i.inherited,
    group: 'channel_notification_settings',
    subtext: n.notification === E.bL.NO_MESSAGES ? g.Z.Messages.FORM_LABEL_NOTHING : g.Z.Messages.FORM_LABEL_LIVE_STAGES_ONLY,
    action: () => (0, r.JK)(e.guild_id, e.id)
  }),
  (0, t.jsx)(_.MenuRadioItem, {
    id: 'cns_only_mention',
    group: 'channel_notification_settings',
    checked: !i.inherited && n.notification !== E.bL.NO_MESSAGES,
    label: g.Z.Messages.FORM_LABEL_LIVE_STAGES_ONLY,
    action: () => (0, r.ft)(e.guild_id, e.id, E.bL.ONLY_MENTIONS)
  }),
  (0, t.jsx)(_.MenuRadioItem, {
    id: 'cns_no_message',
    group: 'channel_notification_settings',
    label: g.Z.Messages.FORM_LABEL_NOTHING,
    checked: !i.inherited && n.notification === E.bL.NO_MESSAGES,
    action: () => (0, r.ft)(e.guild_id, e.id, E.bL.NO_MESSAGES)
  })
]
  }) : (0, t.jsxs)(t.Fragment, {
children: [
  e.isForumLikeChannel() ? (0, t.jsxs)(t.Fragment, {
    children: [
      (0, t.jsx)(_.MenuCheckboxItem, {
        id: 'new-forum-threads-created',
        label: g.Z.Messages.FORUM_NEW_POSTS_CREATED,
        checked: A,
        action: () => S.Z.setForumThreadsCreated(e, !A)
      }),
      (0, t.jsx)(_.MenuSeparator, {})
    ]
  }) : null,
  (0, t.jsxs)(_.MenuGroup, {
    children: [
      (0, t.jsx)(_.MenuRadioItem, {
        id: 'cns_default',
        label: T,
        group: 'channel_notification_settings',
        checked: i.inherited && !N,
        subtext: i.inheritedPreset,
        action: () => ((0, r.JK)(e.guild_id, e.id), M(!1))
      }),
      (0, t.jsx)(_.MenuRadioItem, {
        id: 'cns_everything',
        group: 'channel_notification_settings',
        label: g.Z.Messages.NOTIFICATION_PRESET_1,
        checked: !i.inherited && O === d.s8.ALL_MESSAGES,
        action: () => ((0, r._m)(e.guild_id, e.id, d.s8.ALL_MESSAGES), M(!1))
      }),
      (0, t.jsx)(_.MenuRadioItem, {
        id: 'cns_essentials',
        group: 'channel_notification_settings',
        label: g.Z.Messages.NOTIFICATION_PRESET_2,
        checked: !i.inherited && O === d.s8.MENTIONS,
        action: () => ((0, r._m)(e.guild_id, e.id, d.s8.MENTIONS), M(!1))
      }),
      (0, t.jsx)(_.MenuRadioItem, {
        id: 'cns_nothing',
        group: 'channel_notification_settings',
        label: g.Z.Messages.NOTIFICATION_PRESET_3,
        checked: !i.inherited && O === d.s8.NOTHING,
        action: () => ((0, r._m)(e.guild_id, e.id, d.s8.NOTHING), M(!1))
      }),
      (0, t.jsx)(_.MenuRadioItem, {
        id: 'cns_custom',
        group: 'channel_notification_settings',
        label: g.Z.Messages.NOTIFICATION_PRESET_CUSTOM,
        checked: N || !i.inherited && O === d.s8.CUSTOM,
        action: () => (c(!0), M(!0))
      })
    ]
  }),
  (l || o) && L
]
  });
}

function I(e, n) {
  let {
notification: i,
unread: s
  } = (0, r.ZA)(e), a = e => {
e(), n();
  }, d = n => {
let i = {
  message_notifications: n
};
n === E.bL.ALL_MESSAGES && s !== c.i.ALL_MESSAGES && (i.flags = (0, o.pq)(u.ZP.getChannelIdFlags(e.guild_id, e.id), N.ic.UNREADS_ALL_MESSAGES)), S.Z.updateChannelOverrideSettings(e.guild_id, e.id, i, l.UE.notifications(n));
  };
  return (0, t.jsxs)(_.MenuGroup, {
children: [
  (0, t.jsxs)(_.MenuItem, {
    id: 'unread_setting',
    label: 'Unread Badges',
    children: [
      (0, t.jsx)(_.MenuRadioItem, {
        id: 'unread_setting_all_messages',
        group: 'unread_setting',
        checked: s === c.i.ALL_MESSAGES,
        label: g.Z.Messages.NOTIFICATION_SETTINGS_PRESETS_ALL_MESSAGES,
        action: () => a(() => (0, r.IG)(e.guild_id, e.id, c.i.ALL_MESSAGES))
      }),
      (0, t.jsx)(_.MenuRadioItem, {
        id: 'unread_setting_mention_only',
        group: 'unread_setting',
        checked: s === c.i.ONLY_MENTIONS,
        label: g.Z.Messages.NOTIFICATION_SETTINGS_PRESETS_MENTION_ONLY,
        disabled: s !== c.i.ONLY_MENTIONS && i === E.bL.ALL_MESSAGES,
        subtext: s !== c.i.ONLY_MENTIONS && i === E.bL.ALL_MESSAGES ? g.Z.Messages.NOTIFICATION_SETTINGS_UNREAD_MENTION_ONLY_DISABLED : void 0,
        action: () => a(() => (0, r.IG)(e.guild_id, e.id, c.i.ONLY_MENTIONS))
      })
    ]
  }, 'unread_setting'),
  (0, t.jsxs)(_.MenuItem, {
    id: 'push_settings',
    label: g.Z.Messages.NOTIFICATIONS,
    children: [
      (0, t.jsx)(_.MenuRadioItem, {
        group: 'notification-preset',
        id: 'push_settings_everything',
        label: g.Z.Messages.NOTIFICATION_SETTINGS_PRESETS_ALL_MESSAGES,
        checked: i === E.bL.ALL_MESSAGES,
        subtext: s !== c.i.ALL_MESSAGES && i !== E.bL.ALL_MESSAGES ? g.Z.Messages.NOTIFICATION_SETTINGS_UNREAD_UPDATE_WARNING : void 0,
        action: () => a(() => d(E.bL.ALL_MESSAGES))
      }),
      (0, t.jsx)(_.MenuRadioItem, {
        group: 'notification-preset',
        id: 'push_settings_everything_mention',
        checked: i === E.bL.ONLY_MENTIONS,
        label: g.Z.Messages.NOTIFICATION_SETTINGS_PRESETS_MENTION_ONLY,
        action: () => a(() => d(E.bL.ONLY_MENTIONS))
      }),
      (0, t.jsx)(_.MenuRadioItem, {
        group: 'notification-preset',
        id: 'push_settings_everything_nothing',
        label: g.Z.Messages.NOTIFICATION_SETTINGS_PRESETS_NONE,
        checked: i === E.bL.NO_MESSAGES,
        action: () => a(() => d(E.bL.NO_MESSAGES))
      })
    ]
  }, 'push_settings')
]
  });
}