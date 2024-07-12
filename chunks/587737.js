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
channel: l,
targetUser: o,
actorUsernameHook: c,
targetUsernameHook: d,
compact: u
  } = e, _ = (0, s.ZP)(t), E = (0, s.Sw)(o, l), I = c(_), m = d(null != E ? E : void 0), T = r.Z.Messages.SYSTEM_MESSAGE_THREAD_MEMBER_ADD.format({
actorName: _.nick,
actorHook: I,
targetName: null == E ? void 0 : E.nick,
targetHook: m
  });
  return (0, i.jsx)(a.Z, {
icon: n(570111),
timestamp: t.timestamp,
compact: u,
children: T
  });
}