"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  },
  isNewGroupItem: function() {
    return d
  }
});
var s = n("55935"),
  a = n("70956"),
  l = n("709054"),
  i = n("463396"),
  r = n("901461"),
  o = n("981631");
let u = 7 * a.default.Millis.MINUTE;

function d(e, t, n) {
  return null == t || t.type === o.ChannelStreamTypes.MESSAGE && t.content.id === t.content.channel_id || t.type !== o.ChannelStreamTypes.MESSAGE && t.type !== o.ChannelStreamTypes.THREAD_STARTER_MESSAGE || c(e, t.content, n)
}

function c(e, t, n) {
  if (n.hasFlag(o.MessageFlags.HAS_THREAD) || n.isCommandType()) return !0;
  if (n.type > o.MessageTypes.DEFAULT) return !(0, r.default)(t) || n.type === o.MessageTypes.REPLY || !1;
  return !!((0, r.default)(t) || t.author.id !== n.author.id || t.hasFlag(o.MessageFlags.EPHEMERAL) !== n.hasFlag(o.MessageFlags.EPHEMERAL) || null != n.webhookId && t.author.username !== n.author.username || (null == e ? void 0 : e.isForumPost()) && t.id === l.default.castChannelIdAsMessageId(e.id) || !(0, s.isWithinInterval)(t.timestamp, n.timestamp, u) || n.hasFlag(o.MessageFlags.SUPPRESS_NOTIFICATIONS) && !t.hasFlag(o.MessageFlags.SUPPRESS_NOTIFICATIONS) || t.hasFlag(o.MessageFlags.SUPPRESS_NOTIFICATIONS) && !n.hasFlag(o.MessageFlags.SUPPRESS_NOTIFICATIONS) && (n.mentions.length > 0 || n.mentionRoles.length > 0 || n.mentionEveryone) || (0, i.default)(n)) || !1
}