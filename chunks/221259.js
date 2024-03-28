"use strict";
n.r(t), n.d(t, {
  updateChannelNotificationSetting: function() {
    return L
  },
  updateChannelPreset: function() {
    return N
  },
  updateChannelToGuildDefault: function() {
    return E
  },
  updateChannelUnreadSetting: function() {
    return M
  },
  useChannelPresetInheritance: function() {
    return f
  },
  useChannelPresetSettings: function() {
    return c
  }
}), n("47120");
var i = n("399606"),
  a = n("92114"),
  s = n("592125"),
  l = n("9156"),
  u = n("621600"),
  o = n("423589"),
  d = n("113449"),
  r = n("686660"),
  S = n("981631"),
  _ = n("490897"),
  g = n("526761");

function c(e) {
  let t = (0, i.useStateFromStores)([l.default], () => l.default.resolveUnreadSetting(e)),
    n = (0, i.useStateFromStores)([l.default], () => l.default.resolvedMessageNotifications(e));
  return {
    unread: t,
    notification: n,
    preset: (0, r.presetFromSettings)(t, n)
  }
}

function f(e) {
  let t = (0, i.useStateFromStoresArray)([l.default], () => (0, o.filterOverrides)(l.default.getChannelOverrides(e.guild_id), {
      ignoreMute: !0,
      ignoreUnreadSetting: !1,
      ignoreNotificationSetting: !1
    })),
    [n, a] = (0, i.useStateFromStoresArray)([l.default, s.default], () => {
      let n = s.default.getChannel(e.parent_id);
      return null != n && t.includes(n.id) ? ["parent", (0, r.presetName)((0, r.presetFromSettings)(l.default.resolveUnreadSetting(n), l.default.resolvedMessageNotifications(n)))] : ["guild", (0, r.presetName)((0, r.presetFromSettings)(l.default.getGuildUnreadSetting(e.guild_id), l.default.getMessageNotifications(e.guild_id)))]
    }, [e.guild_id, e.parent_id, t]);
  return {
    inherited: !t.includes(e.id),
    inheritedFrom: n,
    inheritedPreset: a
  }
}

function N(e, t, n) {
  let i = l.default.getChannelIdFlags(e, t);
  n === r.Presets.ALL_MESSAGES ? a.default.updateChannelOverrideSettings(e, t, {
    message_notifications: S.UserNotificationSettings.ALL_MESSAGES,
    flags: (0, d.withChannelUnreadFlags)(i, g.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES)
  }, u.NotificationLabels.PresetAll) : n === r.Presets.MENTIONS ? a.default.updateChannelOverrideSettings(e, t, {
    message_notifications: S.UserNotificationSettings.ONLY_MENTIONS,
    flags: (0, d.withChannelUnreadFlags)(i, g.ChannelNotificationSettingsFlags.UNREADS_ONLY_MENTIONS)
  }, u.NotificationLabels.PresetMentions) : n === r.Presets.NOTHING && a.default.updateChannelOverrideSettings(e, t, {
    message_notifications: S.UserNotificationSettings.NO_MESSAGES,
    flags: (0, d.withChannelUnreadFlags)(i, g.ChannelNotificationSettingsFlags.UNREADS_ONLY_MENTIONS)
  }, u.NotificationLabels.PresetNothing)
}

function E(e, t) {
  a.default.updateChannelOverrideSettings(e, t, {
    message_notifications: S.UserNotificationSettings.NULL,
    flags: (0, d.resetChannelUnreadFlags)(l.default.getChannelIdFlags(e, t))
  }, u.NotificationLabels.PresetDefault)
}

function M(e, t, n) {
  let i = l.default.getChannelIdFlags(e, t);
  a.default.updateChannelOverrideSettings(e, t, {
    flags: (0, d.withChannelUnreadFlags)(i, n === _.UnreadSetting.ALL_MESSAGES ? g.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES : g.ChannelNotificationSettingsFlags.UNREADS_ONLY_MENTIONS)
  }, u.NotificationLabel.unreads(n))
}

function L(e, t, n) {
  a.default.updateChannelOverrideSettings(e, t, {
    message_notifications: n
  }, u.NotificationLabel.notifications(n))
}