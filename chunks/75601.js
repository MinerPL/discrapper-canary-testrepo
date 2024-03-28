"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var s = n("735250");
n("470079");
var a = n("739566"),
  l = n("170039"),
  i = n("702346"),
  r = n("689938"),
  o = n("611818");

function u(e) {
  let {
    message: t,
    compact: n,
    usernameHook: u
  } = e, d = (0, a.default)(t), c = u(d), f = r.default.Messages.SYSTEM_MESSAGE_STAGE_END_HOOK.format({
    username: d.nick,
    usernameHook: c,
    topic: t.content
  });
  return (0, s.jsx)(i.default, {
    className: o.stageSystemMessage,
    iconNode: (0, s.jsx)(l.default, {
      height: 24,
      width: 24
    }),
    iconContainerClassName: o.iconContainer,
    timestamp: t.timestamp,
    compact: n,
    children: f
  })
}