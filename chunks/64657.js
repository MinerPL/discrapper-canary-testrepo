"use strict";
n.r(t), n.d(t, {
  useHubUnreadCount: function() {
    return o
  }
});
var l = n("446674"),
  a = n("209397"),
  s = n("513688"),
  i = n("660478"),
  r = n("299039");

function o(e) {
  return (0, l.useStateFromStores)([a.default, i.default], () => {
    var t;
    if (null == e) return 0;
    let n = i.default.ackMessageId(e.id);
    if (null == n) return 0;
    let l = Object.values(null !== (t = a.default.getDirectoryEntries(e.id)) && void 0 !== t ? t : {}).filter(e => {
      let t = r.default.fromTimestamp(new Date(e.createdAt).getTime());
      return (0, s.hasMinimumMemberCount)(e) && t > n
    });
    return Math.min(s.MAX_CATEGORY_SERVERS, l.length)
  }, [e])
}