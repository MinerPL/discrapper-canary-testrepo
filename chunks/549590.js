"use strict";
E.r(t), E.d(t, {
  default: function() {
    return a
  }
});
var _ = E("446674"),
  s = E("305961"),
  T = E("837008");

function a(e, t) {
  let E = (0, T.useSubscriptionListing)(t);
  return (0, _.useStateFromStores)([s.default], () => null != e && null != E ? s.default.getRole(e, E.role_id) : void 0)
}