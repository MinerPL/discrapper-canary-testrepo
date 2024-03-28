"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var s = n("735250");
n("470079");
var a = n("739566"),
  l = n("702346"),
  i = n("689938");

function r(e) {
  let {
    message: t,
    otherUsername: r,
    usernameHook: o,
    otherUsernameHook: u,
    compact: d
  } = e, {
    nick: c
  } = (0, a.default)(t), f = o(), E = u(), _ = i.default.Messages.SYSTEM_MESSAGE_RECIPIENT_ADD_HOOK.format({
    username: c,
    usernameHook: f,
    otherUsername: r,
    otherUsernameHook: E
  });
  return (0, s.jsx)(l.default, {
    icon: n("570111"),
    timestamp: t.timestamp,
    compact: d,
    children: _
  })
}