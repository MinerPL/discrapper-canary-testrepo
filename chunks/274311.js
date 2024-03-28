"use strict";
l.r(t), l.d(t, {
  isChannelPublic: function() {
    return r
  },
  useIsChannelPublic: function() {
    return d
  }
});
var n = l("442837"),
  s = l("592125"),
  u = l("700785"),
  i = l("924301"),
  a = l("765305"),
  o = l("981631");

function r(e, t) {
  return u.canEveryoneRole(o.Permissions.VIEW_CHANNEL, e) || t === a.GuildScheduledEventEntityTypes.EXTERNAL
}

function d(e, t) {
  return (0, n.useStateFromStores)([s.default, i.default], () => {
    let l = s.default.getChannel(e),
      n = i.default.getGuildScheduledEvent(t);
    return r(l, null == n ? void 0 : n.entity_type)
  }, [e, t])
}