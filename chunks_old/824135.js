"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var a = n("446674"),
  l = n("233069"),
  s = n("42203"),
  i = n("305961"),
  r = n("18494"),
  u = n("49111");

function o(e, t) {
  let n = (0, a.useStateFromStores)([i.default], () => i.default.getGuild(t)),
    o = (0, a.useStateFromStores)([s.default], () => s.default.getChannel(e)),
    d = (0, a.useStateFromStores)([r.default], () => r.default.getChannelId(t));
  return e === d && null != o && null != n && o.getGuildId() === n.id && (0, l.isGuildTextChannelType)(o.type) && n.hasFeature(u.GuildFeatures.WELCOME_SCREEN_ENABLED) && n.hasFeature(u.GuildFeatures.COMMUNITY) && !n.hasFeature(u.GuildFeatures.GUILD_SERVER_GUIDE)
}