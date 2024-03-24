"use strict";
s.r(t), s.d(t, {
  default: function() {
    return r
  }
});
var a = s("884691"),
  l = s("446674"),
  i = s("305961"),
  n = s("256941");

function r(e) {
  let t = (0, l.useStateFromStores)([i.default], () => i.default.getRoles(e)),
    s = (0, l.useStateFromStores)([n.default], () => n.default.getSubscriptionRoles(e));
  return a.useMemo(() => Object.values(t).filter(e => s.has(e.id)), [t, s])
}