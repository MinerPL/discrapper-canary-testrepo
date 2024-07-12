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
  let {
message: t,
otherUsername: l,
usernameHook: o,
otherUsernameHook: c,
compact: d
  } = e, {
nick: u
  } = (0, s.ZP)(t), _ = o(), E = c(), I = r.Z.Messages.SYSTEM_MESSAGE_RECIPIENT_ADD_HOOK.format({
username: u,
usernameHook: _,
otherUsername: l,
otherUsernameHook: E
  });
  return (0, i.jsx)(a.Z, {
icon: n(570111),
timestamp: t.timestamp,
compact: d,
children: I
  });
}