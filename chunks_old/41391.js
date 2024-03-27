"use strict";
E.r(t), E.d(t, {
  default: function() {
    return A
  }
});
var _ = E("884691"),
  s = E("446674"),
  T = E("385976"),
  a = E("153043");
let n = [];

function A(e) {
  let t = (0, s.useStateFromStores)([T.default], () => T.default.getGuildEmoji(e), [e]);
  return _.useMemo(() => null == t ? n : t.filter(t => (0, a.isRoleSubscriptionEmoji)(t, e)), [t, e])
}