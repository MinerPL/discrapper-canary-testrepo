"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var a = n("735250");
n("470079");
var l = n("442837"),
  u = n("481060"),
  i = n("703656"),
  s = n("914010"),
  r = n("981631"),
  d = n("689938");

function o(e) {
  let t = (0, l.useStateFromStores)([s.default], () => s.default.getGuildId());
  return __OVERLAY__ || t !== r.FAVORITES ? null : (0, a.jsx)(u.MenuItem, {
    id: "go-to-original-guild",
    label: d.default.Messages.FAVORITES_GO_TO_ORIGINAL_GUILD,
    action: function() {
      (0, i.transitionToGuild)(e.guild_id, e.id)
    }
  })
}