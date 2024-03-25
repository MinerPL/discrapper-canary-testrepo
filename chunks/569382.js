"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var s = n("37983");
n("884691");
var a = n("574073"),
  l = n("232259"),
  i = n("8161"),
  r = n("304198"),
  o = n("998603"),
  u = n("724654");

function d(e) {
  let {
    message: t,
    channel: n,
    compact: d
  } = e, c = (0, a.default)(t), E = t.application, f = (0, l.useUsernameHook)({
    user: t.author,
    channelId: n.id,
    guildId: n.guild_id,
    messageId: t.id
  });
  return (0, s.jsx)(r.default, {
    iconNode: (0, s.jsx)(i.default, {
      className: u.ticketIcon
    }),
    timestamp: t.timestamp,
    compact: d,
    children: (0, o.getApplicationSubscriptionSystemMessageContent)({
      application: E,
      username: c.nick,
      usernameHook: f(c)
    })
  })
}