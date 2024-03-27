"use strict";
s.r(t), s.d(t, {
  useSortedMemberApplications: function() {
    return r
  }
}), s("222007");
var a = s("884691"),
  l = s("446674"),
  i = s("90490"),
  n = s("567054");

function r(e) {
  let {
    guildId: t,
    applicationStatus: s,
    sortOrder: r
  } = e, u = (0, l.useStateFromStores)([i.default], () => i.default.getRequests(t, s), [s, t]), o = a.useMemo(() => r === n.GuildJoinRequestSortOrders.TIMESTAMP_DESC ? [...u].reverse() : u, [r, u]);
  return {
    guildJoinRequests: o
  }
}