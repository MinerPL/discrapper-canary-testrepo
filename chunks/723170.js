"use strict";
n.r(t), n.d(t, {
  computeThreadNotificationSetting: function() {
    return d
  },
  useThreadNotificationSetting: function() {
    return c
  }
}), n("789020");
var s = n("442837"),
  a = n("592125"),
  l = n("9156"),
  i = n("630388"),
  r = n("569471"),
  o = n("124368"),
  u = n("981631");

function d(e) {
  let t = r.default.flags(e.id);
  if (null == t) return o.ThreadMemberFlags.NO_MESSAGES;
  if ((0, i.hasFlag)(t, o.ThreadMemberFlags.ALL_MESSAGES)) return o.ThreadMemberFlags.ALL_MESSAGES;
  if ((0, i.hasFlag)(t, o.ThreadMemberFlags.ONLY_MENTIONS)) return o.ThreadMemberFlags.ONLY_MENTIONS;
  if ((0, i.hasFlag)(t, o.ThreadMemberFlags.NO_MESSAGES)) return o.ThreadMemberFlags.NO_MESSAGES;
  let n = a.default.getChannel(e.parent_id);
  if (null == n || l.default.isGuildOrCategoryOrChannelMuted(n.guild_id, n.id)) return o.ThreadMemberFlags.NO_MESSAGES;
  let s = l.default.resolvedMessageNotifications(n);
  return s === u.UserNotificationSettings.NO_MESSAGES ? o.ThreadMemberFlags.NO_MESSAGES : s === u.UserNotificationSettings.ONLY_MENTIONS ? o.ThreadMemberFlags.ONLY_MENTIONS : o.ThreadMemberFlags.ALL_MESSAGES
}

function c(e) {
  return (0, s.useStateFromStores)([r.default, l.default, a.default], () => d(e), [e])
}