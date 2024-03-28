"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var a = n("92114"),
  l = n("9156"),
  s = n("621600"),
  i = n("113449"),
  r = n("981631");

function o(e, t, n) {
  a.default.updateChannelOverrideSettings(e, t, {
    flags: (0, i.withChannelUnreadFlags)(l.default.getChannelIdFlags(e, t), n)
  }, s.NotificationLabel.unreads(n), {
    object: r.AnalyticsObjects.NOTIFICATION_SETTING_UNREAD_NOTICE
  })
}