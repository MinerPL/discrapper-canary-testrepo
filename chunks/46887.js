"use strict";
s.r(t), s.d(t, {
  default: function() {
    return r
  }
});
var a = s("470079"),
  l = s("442837"),
  i = s("430824"),
  n = s("687476");

function r(e) {
  let t = (0, l.useStateFromStores)([i.default], () => i.default.getRoles(e)),
    s = (0, l.useStateFromStores)([n.default], () => n.default.getSubscriptionRoles(e));
  return a.useMemo(() => Object.values(t).filter(e => s.has(e.id)), [t, s])
}