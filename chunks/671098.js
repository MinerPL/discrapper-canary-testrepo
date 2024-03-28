"use strict";
s.r(t), s.d(t, {
  bulkClearRecents: function() {
    return i
  }
});
var E = s("835913"),
  _ = s("570140"),
  a = s("675478"),
  n = s("626135"),
  T = s("981631");
async function i(e, t) {
  await (0, a.updateUserGuildSettings)(e, e => (e.guildRecentsDismissedAt = E.Timestamp.fromDate(new Date), !0), a.UserSettingsDelay.INFREQUENT_USER_ACTION), _.default.dispatch({
    type: "BULK_CLEAR_RECENTS",
    guildId: e,
    channelIds: t
  }), n.default.track(T.AnalyticEvents.CHANNEL_LIST_UPDATED, {
    action_type: "recents_dismissed"
  })
}