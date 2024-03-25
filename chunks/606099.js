"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var s = n("37983");
n("884691");
var a = n("669491"),
  l = n("574073"),
  i = n("228427"),
  r = n("304198"),
  o = n("782340"),
  u = n("714478");

function d(e) {
  let {
    message: t,
    compact: n,
    usernameHook: d
  } = e, c = (0, l.default)(t), E = d(c), f = o.default.Messages.SYSTEM_MESSAGE_STAGE_START_HOOK.format({
    username: c.nick,
    usernameHook: E,
    topic: t.content
  });
  return (0, s.jsx)(r.default, {
    className: u.stageSystemMessage,
    iconNode: (0, s.jsx)(i.default, {
      height: 24,
      width: 24,
      color: a.default.unsafe_rawColors.GREEN_360.css
    }),
    iconContainerClassName: u.iconContainer,
    timestamp: t.timestamp,
    compact: n,
    children: f
  })
}