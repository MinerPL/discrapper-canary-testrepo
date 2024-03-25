"use strict";
a.r(t), a.d(t, {
  default: function() {
    return f
  }
});
var n = a("37983");
a("884691");
var l = a("446674"),
  s = a("77078"),
  u = a("305961"),
  i = a("697218"),
  r = a("986003"),
  d = a("512395"),
  o = a("49111"),
  c = a("782340");

function f(e) {
  let t = (0, d.useOptInEnabledForGuild)(e),
    a = (0, l.useStateFromStores)([u.default], () => u.default.getGuild(e)),
    f = (0, l.useStateFromStores)([i.default], () => i.default.getCurrentUser());
  return null != f && null != a && (a.hasFeature(o.GuildFeatures.COMMUNITY) || f.isStaff()) ? (0, n.jsx)(s.MenuCheckboxItem, {
    id: "opt-in",
    label: c.default.Messages.GUILD_CHANNEL_OPT_IN,
    checked: !t,
    action: () => {
      (0, r.toggleShowAllChannels)(e)
    }
  }) : null
}