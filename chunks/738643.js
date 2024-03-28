"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var a = n("442837"),
  l = n("131704"),
  s = n("592125"),
  i = n("430824"),
  r = n("944486"),
  o = n("981631");

function u(e, t) {
  let n = (0, a.useStateFromStores)([i.default], () => i.default.getGuild(t)),
    u = (0, a.useStateFromStores)([s.default], () => s.default.getChannel(e));
  return e === (0, a.useStateFromStores)([r.default], () => r.default.getChannelId(t)) && null != u && null != n && u.getGuildId() === n.id && (0, l.isGuildTextChannelType)(u.type) && n.hasFeature(o.GuildFeatures.WELCOME_SCREEN_ENABLED) && n.hasFeature(o.GuildFeatures.COMMUNITY) && !n.hasFeature(o.GuildFeatures.GUILD_SERVER_GUIDE)
}