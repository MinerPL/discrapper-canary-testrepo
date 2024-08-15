n.d(t, {
  Z: function() {
return l;
  }
});
var i = n(735250);
n(470079);
var a = n(739566),
  s = n(834129),
  r = n(689938);

function l(e) {
  let {
message: t,
usernameHook: l,
compact: o
  } = e, c = (0, a.ZP)(t), u = l(c);
  return (0, i.jsx)(s.Z, {
icon: n(819373),
timestamp: t.timestamp,
compact: o,
children: r.Z.Messages.SYSTEM_MESSAGE_CHANNEL_ICON_CHANGE_HOOK.format({
  username: c.nick,
  usernameHook: u
})
  });
}