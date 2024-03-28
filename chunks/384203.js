"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
}), n("47120");
var s = n("735250");
n("470079");
var a = n("592125"),
  l = n("430824"),
  i = n("496675"),
  r = n("983436"),
  o = n("981631");

function u(e) {
  let {
    code: t,
    messageData: n
  } = e, [u, d] = t.split("/"), c = a.default.getChannel(d), f = l.default.getGuild(u);
  return null != c && c.isGuildVocal() && null != f && i.default.can(o.Permissions.VIEW_CHANNEL, c) && i.default.can(o.Permissions.CONNECT, c) ? (0, s.jsx)(r.default, {
    guild: f,
    channel: c,
    messageData: n
  }) : null
}