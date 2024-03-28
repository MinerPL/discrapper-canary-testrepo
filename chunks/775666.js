"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  },
  useChannelNotificationCustomSettingsItem: function() {
    return L
  },
  useChannelNotificationSettingsItemInner: function() {
    return M
  }
}), n("47120"), n("789020");
var i = n("735250"),
  a = n("470079"),
  s = n("442837"),
  l = n("481060"),
  u = n("92114"),
  o = n("221259"),
  d = n("113449"),
  r = n("686660"),
  S = n("9156"),
  _ = n("621600"),
  g = n("981631"),
  c = n("490897"),
  f = n("526761"),
  N = n("689938");

function E(e) {
  let t = M(e);
  return e.type === g.ChannelTypes.GUILD_VOICE ? null : (0, i.jsx)(l.MenuItem, {
    id: "channel_notification_settings",
    label: N.default.Messages.NOTIFICATIONS,
    children: t
  })
}

function M(e) {
  let t = (0, o.useChannelPresetSettings)(e),
    n = (0, o.useChannelPresetInheritance)(e),
    d = t.preset === r.Presets.CUSTOM && !n.inherited,
    [_, c] = a.useState(d),
    [f, E] = a.useState(!1),
    M = f ? r.Presets.CUSTOM : t.preset,
    O = L(e, () => E(!1)),
    A = (0, s.useStateFromStores)([S.default], () => S.default.getNewForumThreadsCreated(e)),
    T = "parent" === n.inheritedFrom ? N.default.Messages.FORM_LABEL_DEFAULT_CATEGORY : N.default.Messages.FORM_LABEL_DEFAULT;
  return e.type === g.ChannelTypes.GUILD_STAGE_VOICE ? (0, i.jsxs)(l.MenuGroup, {
    children: [(0, i.jsx)(l.MenuRadioItem, {
      id: "cns_default",
      label: T,
      checked: n.inherited,
      group: "channel_notification_settings",
      subtext: t.notification === g.UserNotificationSettings.NO_MESSAGES ? N.default.Messages.FORM_LABEL_NOTHING : N.default.Messages.FORM_LABEL_LIVE_STAGES_ONLY,
      action: () => (0, o.updateChannelToGuildDefault)(e.guild_id, e.id)
    }), (0, i.jsx)(l.MenuRadioItem, {
      id: "cns_only_mention",
      group: "channel_notification_settings",
      checked: !n.inherited && t.notification !== g.UserNotificationSettings.NO_MESSAGES,
      label: N.default.Messages.FORM_LABEL_LIVE_STAGES_ONLY,
      action: () => (0, o.updateChannelNotificationSetting)(e.guild_id, e.id, g.UserNotificationSettings.ONLY_MENTIONS)
    }), (0, i.jsx)(l.MenuRadioItem, {
      id: "cns_no_message",
      group: "channel_notification_settings",
      label: N.default.Messages.FORM_LABEL_NOTHING,
      checked: !n.inherited && t.notification === g.UserNotificationSettings.NO_MESSAGES,
      action: () => (0, o.updateChannelNotificationSetting)(e.guild_id, e.id, g.UserNotificationSettings.NO_MESSAGES)
    })]
  }) : (0, i.jsxs)(i.Fragment, {
    children: [e.isForumLikeChannel() ? (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(l.MenuCheckboxItem, {
        id: "new-forum-threads-created",
        label: N.default.Messages.FORUM_NEW_POSTS_CREATED,
        checked: A,
        action: () => u.default.setForumThreadsCreated(e, !A)
      }), (0, i.jsx)(l.MenuSeparator, {})]
    }) : null, (0, i.jsxs)(l.MenuGroup, {
      children: [(0, i.jsx)(l.MenuRadioItem, {
        id: "cns_default",
        label: T,
        group: "channel_notification_settings",
        checked: n.inherited && !f,
        subtext: n.inheritedPreset,
        action: () => ((0, o.updateChannelToGuildDefault)(e.guild_id, e.id), E(!1))
      }), (0, i.jsx)(l.MenuRadioItem, {
        id: "cns_everything",
        group: "channel_notification_settings",
        label: N.default.Messages.NOTIFICATION_PRESET_1,
        checked: !n.inherited && M === r.Presets.ALL_MESSAGES,
        action: () => ((0, o.updateChannelPreset)(e.guild_id, e.id, r.Presets.ALL_MESSAGES), E(!1))
      }), (0, i.jsx)(l.MenuRadioItem, {
        id: "cns_essentials",
        group: "channel_notification_settings",
        label: N.default.Messages.NOTIFICATION_PRESET_2,
        checked: !n.inherited && M === r.Presets.MENTIONS,
        action: () => ((0, o.updateChannelPreset)(e.guild_id, e.id, r.Presets.MENTIONS), E(!1))
      }), (0, i.jsx)(l.MenuRadioItem, {
        id: "cns_nothing",
        group: "channel_notification_settings",
        label: N.default.Messages.NOTIFICATION_PRESET_3,
        checked: !n.inherited && M === r.Presets.NOTHING,
        action: () => ((0, o.updateChannelPreset)(e.guild_id, e.id, r.Presets.NOTHING), E(!1))
      }), (0, i.jsx)(l.MenuRadioItem, {
        id: "cns_custom",
        group: "channel_notification_settings",
        label: N.default.Messages.NOTIFICATION_PRESET_CUSTOM,
        checked: f || !n.inherited && M === r.Presets.CUSTOM,
        action: () => (c(!0), E(!0))
      })]
    }), (_ || d) && O]
  })
}

function L(e, t) {
  let {
    notification: n,
    unread: a
  } = (0, o.useChannelPresetSettings)(e), s = e => {
    e(), t()
  }, r = t => {
    let n = {
      message_notifications: t
    };
    t === g.UserNotificationSettings.ALL_MESSAGES && a !== c.UnreadSetting.ALL_MESSAGES && (n.flags = (0, d.withChannelUnreadFlags)(S.default.getChannelIdFlags(e.guild_id, e.id), f.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES)), u.default.updateChannelOverrideSettings(e.guild_id, e.id, n, _.NotificationLabel.notifications(t))
  };
  return (0, i.jsxs)(l.MenuGroup, {
    children: [(0, i.jsxs)(l.MenuItem, {
      id: "unread_setting",
      label: "Unread Badges",
      children: [(0, i.jsx)(l.MenuRadioItem, {
        id: "unread_setting_all_messages",
        group: "unread_setting",
        checked: a === c.UnreadSetting.ALL_MESSAGES,
        label: N.default.Messages.NOTIFICATION_SETTINGS_PRESETS_ALL_MESSAGES,
        action: () => s(() => (0, o.updateChannelUnreadSetting)(e.guild_id, e.id, c.UnreadSetting.ALL_MESSAGES))
      }), (0, i.jsx)(l.MenuRadioItem, {
        id: "unread_setting_mention_only",
        group: "unread_setting",
        checked: a === c.UnreadSetting.ONLY_MENTIONS,
        label: N.default.Messages.NOTIFICATION_SETTINGS_PRESETS_MENTION_ONLY,
        disabled: a !== c.UnreadSetting.ONLY_MENTIONS && n === g.UserNotificationSettings.ALL_MESSAGES,
        subtext: a !== c.UnreadSetting.ONLY_MENTIONS && n === g.UserNotificationSettings.ALL_MESSAGES ? N.default.Messages.NOTIFICATION_SETTINGS_UNREAD_MENTION_ONLY_DISABLED : void 0,
        action: () => s(() => (0, o.updateChannelUnreadSetting)(e.guild_id, e.id, c.UnreadSetting.ONLY_MENTIONS))
      })]
    }, "unread_setting"), (0, i.jsxs)(l.MenuItem, {
      id: "push_settings",
      label: N.default.Messages.NOTIFICATIONS,
      children: [(0, i.jsx)(l.MenuRadioItem, {
        group: "notification-preset",
        id: "push_settings_everything",
        label: N.default.Messages.NOTIFICATION_SETTINGS_PRESETS_ALL_MESSAGES,
        checked: n === g.UserNotificationSettings.ALL_MESSAGES,
        subtext: a !== c.UnreadSetting.ALL_MESSAGES && n !== g.UserNotificationSettings.ALL_MESSAGES ? N.default.Messages.NOTIFICATION_SETTINGS_UNREAD_UPDATE_WARNING : void 0,
        action: () => s(() => r(g.UserNotificationSettings.ALL_MESSAGES))
      }), (0, i.jsx)(l.MenuRadioItem, {
        group: "notification-preset",
        id: "push_settings_everything_mention",
        checked: n === g.UserNotificationSettings.ONLY_MENTIONS,
        label: N.default.Messages.NOTIFICATION_SETTINGS_PRESETS_MENTION_ONLY,
        action: () => s(() => r(g.UserNotificationSettings.ONLY_MENTIONS))
      }), (0, i.jsx)(l.MenuRadioItem, {
        group: "notification-preset",
        id: "push_settings_everything_nothing",
        label: N.default.Messages.NOTIFICATION_SETTINGS_PRESETS_NONE,
        checked: n === g.UserNotificationSettings.NO_MESSAGES,
        action: () => s(() => r(g.UserNotificationSettings.NO_MESSAGES))
      })]
    }, "push_settings")]
  })
}