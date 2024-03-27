"use strict";
n.r(t), n.d(t, {
  bulkClearRecents: function() {
    return o
  }
});
var l = n("801340"),
  s = n("913144"),
  a = n("872173"),
  i = n("599110"),
  r = n("49111");
async function o(e, t) {
  await (0, a.updateUserGuildSettings)(e, e => (e.guildRecentsDismissedAt = l.Timestamp.fromDate(new Date), !0), a.UserSettingsDelay.INFREQUENT_USER_ACTION), s.default.dispatch({
    type: "BULK_CLEAR_RECENTS",
    guildId: e,
    channelIds: t
  }), i.default.track(r.AnalyticEvents.CHANNEL_LIST_UPDATED, {
    action_type: "recents_dismissed"
  })
}