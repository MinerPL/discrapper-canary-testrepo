"use strict";
s.r(t), s.d(t, {
  default: function() {
    return d
  }
});
var a = s("470079"),
  l = s("149765"),
  n = s("442837"),
  i = s("430824"),
  r = s("293810");
let o = s("981631").Permissions.VIEW_CHANNEL;

function d(e) {
  let t = (0, n.useStateFromStores)([i.default], () => {
      let t = i.default.getGuild(e);
      return null != t ? i.default.getRole(t.id, t.getEveryoneRoleId()) : void 0
    }),
    s = a.useMemo(() => null == t ? r.GuildRoleSubscriptionFormat.SOME_CHANNELS : l.has(t.permissions, o) ? r.GuildRoleSubscriptionFormat.SOME_CHANNELS : r.GuildRoleSubscriptionFormat.ALL_CHANNELS, [t]),
    d = s === r.GuildRoleSubscriptionFormat.ALL_CHANNELS;
  return {
    format: s,
    isFullServerGating: d
  }
}