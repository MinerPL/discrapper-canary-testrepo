"use strict";
s.r(t), s.d(t, {
  useRoleSubscriptionInsightsAccess: function() {
    return o
  }
});
var a = s("149765"),
  l = s("442837"),
  n = s("430824"),
  i = s("496675"),
  r = s("981631");

function o(e) {
  return (0, l.useStateFromStores)([n.default, i.default], () => {
    let t = n.default.getGuild(e);
    if (null == t) return !1;
    let s = i.default.getGuildPermissions(t);
    return null != s && a.has(s, r.Permissions.VIEW_CREATOR_MONETIZATION_ANALYTICS)
  })
}