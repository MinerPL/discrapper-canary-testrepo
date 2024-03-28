"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var l = n("442837"),
  i = n("241155"),
  a = n("430824");

function r(e, t) {
  return (0, l.useStateFromStoresObject)([a.default, i.default], () => {
    let n = a.default.getGuild(e),
      l = null != n;
    return null == n && null != t && (n = i.default.getCachedGuildByEventId(t)), {
      isMember: l,
      guild: n
    }
  }, [e, t])
}