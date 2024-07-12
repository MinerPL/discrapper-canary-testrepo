n.d(t, {
  Z: function() {
return l;
  }
});
var i = n(735250);
n(470079);
var a = n(702346),
  s = n(739566),
  r = n(689938);

function l(e) {
  let t, {
  message: l,
  usernameHook: o,
  otherUser: c,
  otherUsernameHook: d,
  compact: u,
  channel: _
} = e,
E = (0, s.ZP)(l),
I = E.nick,
m = o(E),
T = (0, s.Sw)(c, _);
  if (null != T && null != d) {
let e = d(T);
t = r.Z.Messages.SYSTEM_MESSAGE_RECIPIENT_REMOVE_HOOK.format({
  username: I,
  usernameHook: m,
  otherUsername: T.nick,
  otherUsernameHook: e
});
  } else
t = r.Z.Messages.SYSTEM_MESSAGE_RECIPIENT_REMOVE_SELF_HOOK.format({
  username: I,
  usernameHook: m
});
  return (0, i.jsx)(a.Z, {
icon: n(474019),
timestamp: l.timestamp,
compact: u,
children: t
  });
}