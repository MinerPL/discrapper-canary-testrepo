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
    channel: r,
    targetUser: o,
    actorUsernameHook: u,
    targetUsernameHook: d,
    compact: c
  } = e, f = (0, a.default)(t), E = (0, a.useNullableUserAuthor)(o, r), _ = u(f), T = d(null != E ? E : void 0), m = i.default.Messages.SYSTEM_MESSAGE_THREAD_MEMBER_REMOVE.format({
    actorName: f.nick,
    actorHook: _,
    targetName: null == E ? void 0 : E.nick,
    targetHook: T
  });
  return (0, s.jsx)(l.default, {
    icon: n("474019"),
    timestamp: t.timestamp,
    compact: c,
    children: m
  })
}