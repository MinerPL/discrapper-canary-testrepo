"use strict";
l.r(t), l.d(t, {
  useCanGuildFeedFeatureChannel: function() {
    return c
  }
});
var n = l("149765"),
  u = l("442837"),
  a = l("971930"),
  i = l("859802"),
  s = l("430824"),
  d = l("496675"),
  r = l("981631");
let o = n.combine(r.Permissions.VIEW_CHANNEL, r.Permissions.MANAGE_MESSAGES, r.Permissions.READ_MESSAGE_HISTORY);

function c(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    l = e.getGuildId(),
    n = (0, u.useStateFromStores)([d.default], () => d.default.can(o, e), [e]),
    c = (0, u.useStateFromStores)([s.default], () => s.default.getGuild(l), [l]),
    m = (0, i.useGuildHomeExperiment)(c, !1);
  return !!(n && null !== l && m && (null != e.parentChannelThreadType && r.ChannelTypesSets.GUILD_THREADS_ONLY.has(e.parentChannelThreadType) || t) && (0, a.isChannelAvailableInGuildFeed)(e)) || !1
}