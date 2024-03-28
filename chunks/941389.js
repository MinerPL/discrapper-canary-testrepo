"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var a = n("735250");
n("470079");
var i = n("481060"),
  l = n("496675"),
  s = n("885442"),
  u = n("996861"),
  r = n("981631"),
  o = n("689938");

function d(e, t) {
  let n = t.getGuildId();
  return null != n && (e.type === r.MessageTypes.USER_JOIN || e.type === r.MessageTypes.GUILD_INVITE_REMINDER) && l.default.canWithPartialContext(r.Permissions.MANAGE_GUILD, {
    guildId: n
  }) ? (0, a.jsx)(i.MenuItem, {
    id: "configure",
    label: o.default.Messages.CONFIGURE,
    icon: s.default,
    action: () => (0, u.configureJoin)(t)
  }) : null
}