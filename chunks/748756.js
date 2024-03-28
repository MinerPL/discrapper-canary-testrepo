"use strict";
e.r(i), e.d(i, {
  updateGuildPreset: function() {
    return c
  }
}), e("399606");
var s = e("92114"),
  a = e("9156"),
  n = e("621600"),
  l = e("113449"),
  o = e("686660"),
  u = e("981631"),
  r = e("526761");

function c(t, i) {
  let e = a.default.getGuildFlags(t);
  i === o.Presets.ALL_MESSAGES ? s.default.updateGuildNotificationSettings(t, {
    message_notifications: u.UserNotificationSettings.ALL_MESSAGES,
    flags: (0, l.withGuildUnreadFlags)(e, r.GuildNotificationSettingsFlags.UNREADS_ALL_MESSAGES)
  }, n.NotificationLabels.PresetAll) : i === o.Presets.MENTIONS ? s.default.updateGuildNotificationSettings(t, {
    message_notifications: u.UserNotificationSettings.ONLY_MENTIONS,
    flags: (0, l.withGuildUnreadFlags)(e, r.GuildNotificationSettingsFlags.UNREADS_ONLY_MENTIONS)
  }, n.NotificationLabels.PresetMentions) : i === o.Presets.NOTHING && s.default.updateGuildNotificationSettings(t, {
    message_notifications: u.UserNotificationSettings.NO_MESSAGES,
    flags: (0, l.withGuildUnreadFlags)(e, r.GuildNotificationSettingsFlags.UNREADS_ONLY_MENTIONS)
  }, n.NotificationLabels.PresetNothing)
}