"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var s = n("37983");
n("884691");
var a = n("446674"),
  l = n("574073"),
  i = n("42203"),
  r = n("959097"),
  o = n("304198"),
  u = n("782340"),
  d = n("291391");

function c(e) {
  var t;
  let {
    message: n,
    compact: c,
    usernameHook: E,
    onClickThread: f,
    onClickViewThreads: _,
    onContextMenuThread: T
  } = e, I = (0, l.default)(n), m = E(I), N = (0, a.useStateFromStores)([i.default], () => {
    var e;
    return i.default.getChannel(null === (e = n.messageReference) || void 0 === e ? void 0 : e.channel_id)
  }), p = u.default.Messages.SYSTEM_MESSAGE_THREAD_CREATED.format({
    actorName: I.nick,
    actorHook: m,
    threadName: null !== (t = null == N ? void 0 : N.name) && void 0 !== t ? t : n.content,
    threadOnClick: {
      onClick: f,
      onContextMenu: T
    },
    viewThreadsOnClick: _
  });
  return (0, s.jsx)(o.default, {
    iconNode: (0, s.jsx)(r.default, {
      className: d.icon
    }),
    timestamp: n.timestamp,
    compact: c,
    children: p
  })
}