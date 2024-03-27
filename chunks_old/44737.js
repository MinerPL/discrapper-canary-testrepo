"use strict";
s.r(t), s.d(t, {
  useRoleSubscriptionInsightsAccess: function() {
    return o
  }
});
var a = s("316693"),
  l = s("446674"),
  n = s("305961"),
  i = s("957255"),
  r = s("49111");

function o(e) {
  let t = (0, l.useStateFromStores)([n.default, i.default], () => {
    let t = n.default.getGuild(e);
    if (null == t) return !1;
    let s = i.default.getGuildPermissions(t);
    return null != s && a.has(s, r.Permissions.VIEW_CREATOR_MONETIZATION_ANALYTICS)
  });
  return t
}