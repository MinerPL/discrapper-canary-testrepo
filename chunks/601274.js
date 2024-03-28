"use strict";
u.r(t), u.d(t, {
  default: function() {
    return f
  }
});
var a = u("735250");
u("470079");
var n = u("442837"),
  l = u("481060"),
  s = u("475179"),
  d = u("703656"),
  i = u("496675"),
  o = u("981631"),
  r = u("689938");

function f(e, t) {
  return (0, n.useStateFromStores)([i.default], () => i.default.can(o.Permissions.CONNECT, e), [e]) && e.isGuildVocal() ? (0, a.jsx)(l.MenuItem, {
    id: "open-chat",
    label: r.default.Messages.OPEN_CHAT,
    action: () => {
      s.default.updateChatOpen(e.id, !0), (0, d.transitionToGuild)(t.id, e.id)
    }
  }) : null
}