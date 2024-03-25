"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var s = n("37983");
n("884691");
var a = n("574073"),
  l = n("304198"),
  i = n("782340");

function r(e) {
  let {
    message: t,
    otherUsername: r,
    usernameHook: o,
    otherUsernameHook: u,
    compact: d
  } = e, {
    nick: c
  } = (0, a.default)(t), E = o(), f = u(), _ = i.default.Messages.SYSTEM_MESSAGE_RECIPIENT_ADD_HOOK.format({
    username: c,
    usernameHook: E,
    otherUsername: r,
    otherUsernameHook: f
  });
  return (0, s.jsx)(l.default, {
    icon: n("127067"),
    timestamp: t.timestamp,
    compact: d,
    children: _
  })
}