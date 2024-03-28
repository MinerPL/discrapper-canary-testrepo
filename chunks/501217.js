"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var s = n("735250");
n("470079");
var a = n("442837"),
  l = n("739566"),
  i = n("592125"),
  r = n("934458"),
  o = n("702346"),
  u = n("689938"),
  d = n("521125");

function c(e) {
  var t;
  let {
    message: n,
    compact: c,
    usernameHook: f,
    onClickThread: E,
    onClickViewThreads: _,
    onContextMenuThread: T
  } = e, m = (0, l.default)(n), I = f(m), p = (0, a.useStateFromStores)([i.default], () => {
    var e;
    return i.default.getChannel(null === (e = n.messageReference) || void 0 === e ? void 0 : e.channel_id)
  }), h = u.default.Messages.SYSTEM_MESSAGE_THREAD_CREATED.format({
    actorName: m.nick,
    actorHook: I,
    threadName: null !== (t = null == p ? void 0 : p.name) && void 0 !== t ? t : n.content,
    threadOnClick: {
      onClick: E,
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
    children: h
  })
}