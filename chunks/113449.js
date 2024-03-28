"use strict";
n.r(t), n.d(t, {
  resetChannelUnreadFlags: function() {
    return l
  },
  withChannelUnreadFlags: function() {
    return u
  },
  withGuildUnreadFlags: function() {
    return s
  }
});
var i = n("630388"),
  a = n("526761");

function s(e, t) {
  var n;
  return i.addFlag((n = e, i.removeFlags(n, a.GuildNotificationSettingsFlags.UNREADS_ALL_MESSAGES, a.GuildNotificationSettingsFlags.UNREADS_ONLY_MENTIONS)), t)
}
let l = e => i.removeFlags(e, a.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES, a.ChannelNotificationSettingsFlags.UNREADS_ONLY_MENTIONS);

function u(e, t) {
  return i.addFlag(l(e), t)
}