"use strict";
s.r(t), s.d(t, {
  default: function() {
    return i
  }
});
var E = s("470079"),
  _ = s("442837"),
  a = s("339085"),
  n = s("889564");
let T = [];

function i(e) {
  let t = (0, _.useStateFromStores)([a.default], () => a.default.getGuildEmoji(e), [e]);
  return E.useMemo(() => null == t ? T : t.filter(t => (0, n.isRoleSubscriptionEmoji)(t, e)), [t, e])
}