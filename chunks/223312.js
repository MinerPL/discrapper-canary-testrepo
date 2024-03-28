"use strict";
s.r(t), s.d(t, {
  useSortedMemberApplications: function() {
    return u
  }
}), s("47120");
var a = s("470079"),
  l = s("442837"),
  i = s("826581"),
  n = s("246364");

function u(e) {
  let {
    guildId: t,
    applicationStatus: s,
    sortOrder: u
  } = e, r = (0, l.useStateFromStores)([i.default], () => i.default.getRequests(t, s), [s, t]);
  return {
    guildJoinRequests: a.useMemo(() => u === n.GuildJoinRequestSortOrders.TIMESTAMP_DESC ? [...r].reverse() : r, [u, r])
  }
}