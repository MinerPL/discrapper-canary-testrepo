n.d(t, {
  Z: function() {
return u;
  }
});
var i = n(735250);
n(470079);
var s = n(481060),
  a = n(857395),
  r = n(702346),
  l = n(739566),
  o = n(689938);

function c(e) {
  let {
children: t,
messageReference: n
  } = e;
  if (null == n)
return (0, i.jsx)(s.Anchor, {
  children: t
});
  let {
guild_id: r,
channel_id: l,
message_id: o
  } = n;
  return null == r ? (0, i.jsx)(s.Anchor, {
children: t
  }) : (0, i.jsx)(a.Z, {
guildId: r,
channelId: l,
messageId: o,
children: e => {
  let {
    'aria-controls': n,
    'aria-expanded': a,
    ...r
  } = e;
  return (0, i.jsx)(s.Anchor, {
    ...r,
    children: t
  });
}
  });
}

function u(e) {
  let {
usernameHook: t,
message: s,
compact: a
  } = e, {
content: u,
timestamp: d,
messageReference: _
  } = s, E = (0, l.ZP)(s), I = t(E), m = o.Z.Messages.SYSTEM_MESSAGE_CHANNEL_FOLLOW_ADD_HOOK.format({
username: E.nick,
usernameHook: I,
webhookName: u,
webhookNameHook: (e, t) => (0, i.jsx)(c, {
  messageReference: _,
  children: e
}, t)
  });
  return (0, i.jsx)(r.Z, {
icon: n(570111),
timestamp: d,
compact: a,
children: m
  });
}