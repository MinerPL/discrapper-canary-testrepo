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
  let t, {
      message: r,
      usernameHook: o,
      otherUser: u,
      otherUsernameHook: d,
      compact: c,
      channel: f
    } = e,
    E = (0, a.default)(r),
    _ = E.nick,
    T = o(E),
    m = (0, a.useNullableUserAuthor)(u, f);
  if (null != m && null != d) {
    let e = d(m);
    t = i.default.Messages.SYSTEM_MESSAGE_RECIPIENT_REMOVE_HOOK.format({
      username: _,
      usernameHook: T,
      otherUsername: m.nick,
      otherUsernameHook: e
    })
  } else t = i.default.Messages.SYSTEM_MESSAGE_RECIPIENT_REMOVE_SELF_HOOK.format({
    username: _,
    usernameHook: T
  });
  return (0, s.jsx)(l.default, {
    icon: n("474019"),
    timestamp: r.timestamp,
    compact: c,
    children: t
  })
}