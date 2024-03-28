"use strict";
a.r(t), a.d(t, {
  default: function() {
    return r
  }
});
var n = a("735250");
a("470079");
var l = a("442837"),
  u = a("481060"),
  s = a("5036"),
  d = a("9156"),
  i = a("689938");

function r(e) {
  let t = (0, l.useStateFromStores)([d.default], () => d.default.isGuildCollapsed(e), [e]);
  return (0, n.jsx)(u.MenuCheckboxItem, {
    id: "hide-muted-channels",
    label: i.default.Messages.HIDE_MUTED_CHANNELS,
    action: () => s.default.toggleCollapseGuild(e),
    checked: t
  })
}