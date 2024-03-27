"use strict";
n.r(t), n.d(t, {
  default: function() {
    return a
  }
});
var l = n("446674"),
  u = n("962199"),
  i = n("305961");

function a(e, t) {
  return (0, l.useStateFromStoresObject)([i.default, u.default], () => {
    let n = i.default.getGuild(e),
      l = null != n;
    return null == n && null != t && (n = u.default.getCachedGuildByEventId(t)), {
      isMember: l,
      guild: n
    }
  }, [e, t])
}