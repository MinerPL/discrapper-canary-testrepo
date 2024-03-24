"use strict";
n.r(t), n.d(t, {
  isNewGroupItem: function() {
    return d
  },
  default: function() {
    return c
  }
});
var a = n("888400"),
  l = n("718517"),
  s = n("299039"),
  i = n("500858"),
  r = n("913491"),
  o = n("49111");
let u = 7 * l.default.Millis.MINUTE;

function d(e, t, n) {
  return null == t || t.type === o.ChannelStreamTypes.MESSAGE && t.content.id === t.content.channel_id || t.type !== o.ChannelStreamTypes.MESSAGE && t.type !== o.ChannelStreamTypes.THREAD_STARTER_MESSAGE || c(e, t.content, n)
}

function c(e, t, n) {
  if (n.hasFlag(o.MessageFlags.HAS_THREAD) || n.isCommandType()) return !0;
  if (n.type > o.MessageTypes.DEFAULT) return !(0, r.default)(t) || n.type === o.MessageTypes.REPLY || !1;
  return !!((0, r.default)(t) || t.author.id !== n.author.id || t.hasFlag(o.MessageFlags.EPHEMERAL) !== n.hasFlag(o.MessageFlags.EPHEMERAL) || null != n.webhookId && t.author.username !== n.author.username || (null == e ? void 0 : e.isForumPost()) && t.id === s.default.castChannelIdAsMessageId(e.id) || !(0, a.isWithinInterval)(t.timestamp, n.timestamp, u) || n.hasFlag(o.MessageFlags.SUPPRESS_NOTIFICATIONS) && !t.hasFlag(o.MessageFlags.SUPPRESS_NOTIFICATIONS) || t.hasFlag(o.MessageFlags.SUPPRESS_NOTIFICATIONS) && !n.hasFlag(o.MessageFlags.SUPPRESS_NOTIFICATIONS) && (n.mentions.length > 0 || n.mentionRoles.length > 0 || n.mentionEveryone) || (0, i.default)(n)) || !1
}