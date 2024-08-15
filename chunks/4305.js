n.d(t, {
  Z: function() {
return l;
  }
});
var i = n(735250);
n(470079);
var a = n(352736),
  s = n(739566),
  r = n(834129);

function l(e) {
  let {
message: t,
usernameHook: l,
compact: o,
guildId: c
  } = e, u = (0, s.ZP)(t), d = l(u), _ = a.Z.getWelcomeMessageKind(c), E = a.Z.getSystemMessageUserJoin(t.id, _).format({
username: u.nick,
usernameHook: d
  });
  return (0, i.jsx)(r.Z, {
icon: n(570111),
timestamp: t.timestamp,
compact: o,
children: E
  });
}