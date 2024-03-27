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
    channel: r,
    targetUser: o,
    actorUsernameHook: u,
    targetUsernameHook: d,
    compact: c
  } = e, E = (0, a.default)(t), f = (0, a.useNullableUserAuthor)(o, r), _ = u(E), T = d(null != f ? f : void 0), I = i.default.Messages.SYSTEM_MESSAGE_THREAD_MEMBER_ADD.format({
    actorName: E.nick,
    actorHook: _,
    targetName: null == f ? void 0 : f.nick,
    targetHook: T
  });
  return (0, s.jsx)(l.default, {
    icon: n("127067"),
    timestamp: t.timestamp,
    compact: c,
    children: I
  })
}