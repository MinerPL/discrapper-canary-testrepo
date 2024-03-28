"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var s = n("735250");
n("470079");
var a = n("739566"),
  l = n("702346"),
  i = n("689938"),
  r = n("533130");

function o(e) {
  let {
    message: t,
    usernameHook: o,
    compact: u,
    isForumPost: d
  } = e, c = (0, a.default)(t), f = o(c);
  return (0, s.jsx)(l.default, {
    compact: u,
    className: r.channelNameChange,
    icon: n("819373"),
    timestamp: t.timestamp,
    children: (d ? i.default.Messages.SYSTEM_MESSAGE_FORUM_POST_TITLE_CHANGE2 : i.default.Messages.SYSTEM_MESSAGE_CHANNEL_NAME_CHANGE2).format({
      username: c.nick,
      usernameHook: f,
      channelName: t.content
    })
  })
}