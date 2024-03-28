"use strict";
a.r(t), a.d(t, {
  default: function() {
    return c
  }
});
var n = a("735250");
a("470079");
var l = a("442837"),
  u = a("481060"),
  s = a("211739"),
  d = a("680089"),
  r = a("592125"),
  i = a("981631"),
  o = a("689938");

function c(e) {
  return (0, l.useStateFromStores)([d.default, r.default], () => {
    let t = Object.values(r.default.getMutableBasicGuildChannelsForGuild(e.guild_id)).filter(e => e.type === i.ChannelTypes.GUILD_CATEGORY);
    return 0 === t.length || t.every(e => d.default.isCollapsed(e.id))
  }) ? null : (0, n.jsx)(u.MenuItem, {
    id: "collapse-all-categories",
    label: o.default.Messages.COLLAPSE_ALL_CATEGORIES,
    action: () => (0, s.categoryCollapseAll)(e.guild_id)
  })
}