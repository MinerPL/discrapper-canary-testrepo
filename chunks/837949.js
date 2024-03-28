"use strict";
a.r(t), a.d(t, {
  default: function() {
    return f
  }
});
var l = a("735250");
a("470079");
var n = a("442837"),
  s = a("481060"),
  u = a("430824"),
  i = a("594174"),
  r = a("724213"),
  d = a("398758"),
  o = a("981631"),
  c = a("689938");

function f(e) {
  let t = (0, d.useOptInEnabledForGuild)(e),
    a = (0, n.useStateFromStores)([u.default], () => u.default.getGuild(e)),
    f = (0, n.useStateFromStores)([i.default], () => i.default.getCurrentUser());
  return null != f && null != a && (a.hasFeature(o.GuildFeatures.COMMUNITY) || f.isStaff()) ? (0, l.jsx)(s.MenuCheckboxItem, {
    id: "opt-in",
    label: c.default.Messages.GUILD_CHANNEL_OPT_IN,
    checked: !t,
    action: () => {
      (0, r.toggleShowAllChannels)(e)
    }
  }) : null
}