"use strict";
s.r(t), s.d(t, {
  default: function() {
    return n
  }
});
var E = s("442837"),
  _ = s("430824"),
  a = s("584825");

function n(e, t) {
  let s = (0, a.useSubscriptionListing)(t);
  return (0, E.useStateFromStores)([_.default], () => null != e && null != s ? _.default.getRole(e, s.role_id) : void 0)
}