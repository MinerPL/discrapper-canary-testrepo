"use strict";
s.r(t), s.d(t, {
  default: function() {
    return i
  }
}), s("47120");
var a = s("442837"),
  n = s("687476"),
  l = s("293810");

function i() {
  return (0, a.useStateFromStores)([n.default], () => (function() {
    let [e] = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [n.default], t = e.getGuildIdsWithPurchasableRoles(), s = !1;
    return (t.forEach(t => {
      e.getUserSubscriptionRoles(t).size > 0 && (s = !0)
    }), s) ? l.UserGuildRoleSubscriptionRelationship.SUBSCRIBED : 0 === t.size ? l.UserGuildRoleSubscriptionRelationship.NONE : l.UserGuildRoleSubscriptionRelationship.IN_SUBSCRIPTION_SERVER
  })([n.default]))
}