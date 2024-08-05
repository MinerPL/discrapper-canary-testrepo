n.d(t, {
  Z: function() {
return l;
  }
});
var i = n(735250);
n(470079);
var s = n(702346),
  a = n(739566),
  r = n(689938);

function l(e) {
  let {
message: t,
otherUsername: l,
usernameHook: o,
otherUsernameHook: c,
compact: u
  } = e, {
nick: d
  } = (0, a.ZP)(t), _ = o(), E = c(), I = r.Z.Messages.SYSTEM_MESSAGE_RECIPIENT_ADD_HOOK.format({
username: d,
usernameHook: _,
otherUsername: l,
otherUsernameHook: E
  });
  return (0, i.jsx)(s.Z, {
icon: n(570111),
timestamp: t.timestamp,
compact: u,
children: I
  });
}