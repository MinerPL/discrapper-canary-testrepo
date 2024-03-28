"use strict";
a.r(e), a.d(e, {
  default: function() {
    return o
  }
});
var d = a("367907"),
  n = a("592125"),
  u = a("888369"),
  i = a("430824"),
  c = a("9156"),
  l = a("981631");

function o(t) {
  let e = n.default.getChannel(t);
  (0, d.trackWithMetadata)(l.AnalyticEvents.ACK_MESSAGES, {
    channel_id: t,
    guild_id: null == e ? void 0 : e.getGuildId(),
    location,
    guild_unread_statuses: Object.values(i.default.getGuilds()).map(t => {
      let e = u.default.hasUnread(t.id),
        a = u.default.getMentionCount(t.id),
        d = c.default.isMuted(t.id),
        n = c.default.resolveGuildUnreadSetting(t);
      return "".concat(t.id, ",").concat(e, ",").concat(a, ",").concat(d, ",").concat(n)
    })
  })
}