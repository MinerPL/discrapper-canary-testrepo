"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var s = n("37983");
n("884691");
var a = n("77078"),
  l = n("687521"),
  i = n("574073"),
  r = n("304198"),
  o = n("782340");

function u(e) {
  let {
    children: t,
    messageReference: n
  } = e;
  if (null == n) return (0, s.jsx)(a.Anchor, {
    children: t
  });
  let {
    guild_id: i,
    channel_id: r,
    message_id: o
  } = n;
  return null == i ? (0, s.jsx)(a.Anchor, {
    children: t
  }) : (0, s.jsx)(l.default, {
    guildId: i,
    channelId: r,
    messageId: o,
    children: e => {
      let {
        "aria-controls": n,
        "aria-expanded": l,
        ...i
      } = e;
      return (0, s.jsx)(a.Anchor, {
        ...i,
        children: t
      })
    }
  })
}

function d(e) {
  let {
    usernameHook: t,
    message: a,
    compact: l
  } = e, {
    content: d,
    timestamp: c,
    messageReference: E
  } = a, f = (0, i.default)(a), _ = t(f), T = o.default.Messages.SYSTEM_MESSAGE_CHANNEL_FOLLOW_ADD_HOOK.format({
    username: f.nick,
    usernameHook: _,
    webhookName: d,
    webhookNameHook: (e, t) => (0, s.jsx)(u, {
      messageReference: E,
      children: e
    }, t)
  });
  return (0, s.jsx)(r.default, {
    icon: n("127067"),
    timestamp: c,
    compact: l,
    children: T
  })
}