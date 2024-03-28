"use strict";
n.r(t), n.d(t, {
  canGuildFeedFeatureMessage: function() {
    return o
  }
});
var a = n("149765"),
  i = n("971930"),
  l = n("859802"),
  s = n("496675"),
  u = n("981631");
let r = a.combine(u.Permissions.VIEW_CHANNEL, u.Permissions.MANAGE_MESSAGES, u.Permissions.READ_MESSAGE_HISTORY);

function o(e, t) {
  let n = e.getGuildId();
  return !!(null !== n && (0, l.canSeeGuildHome)(n) && u.ChannelTypesSets.GUILD_FEED_FEATURABLE_MESSAGES.has(e.type) && (0, i.isChannelAvailableInGuildFeed)(e) && (0, i.isMessageAvailableInGuildFeed)(t) && s.default.can(r, e)) || !1
}