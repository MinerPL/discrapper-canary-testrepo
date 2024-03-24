"use strict";
s.r(t), s.d(t, {
  default: function() {
    return u
  }
});
var a = s("884691"),
  l = s("316693"),
  n = s("446674"),
  i = s("305961"),
  r = s("677795"),
  o = s("49111");
let d = o.Permissions.VIEW_CHANNEL;

function u(e) {
  let t = (0, n.useStateFromStores)([i.default], () => {
      let t = i.default.getGuild(e);
      return null != t ? i.default.getRole(t.id, t.getEveryoneRoleId()) : void 0
    }),
    s = a.useMemo(() => {
      if (null == t) return r.GuildRoleSubscriptionFormat.SOME_CHANNELS;
      let e = l.has(t.permissions, d);
      return e ? r.GuildRoleSubscriptionFormat.SOME_CHANNELS : r.GuildRoleSubscriptionFormat.ALL_CHANNELS
    }, [t]),
    o = s === r.GuildRoleSubscriptionFormat.ALL_CHANNELS;
  return {
    format: s,
    isFullServerGating: o
  }
}