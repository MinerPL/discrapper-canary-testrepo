"use strict";
l.r(t), l.d(t, {
  isChannelPublic: function() {
    return r
  },
  useIsChannelPublic: function() {
    return d
  }
});
var n = l("446674"),
  s = l("42203"),
  u = l("991170"),
  a = l("398604"),
  i = l("745049"),
  o = l("49111");

function r(e, t) {
  return u.canEveryoneRole(o.Permissions.VIEW_CHANNEL, e) || t === i.GuildScheduledEventEntityTypes.EXTERNAL
}

function d(e, t) {
  return (0, n.useStateFromStores)([s.default, a.default], () => {
    let l = s.default.getChannel(e),
      n = a.default.getGuildScheduledEvent(t);
    return r(l, null == n ? void 0 : n.entity_type)
  }, [e, t])
}