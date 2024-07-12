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
compact: l,
missed: o,
joinable: c,
usernameHook: d,
onClickJoinCall: u
  } = e, _ = (0, s.ZP)(t), E = _.nick, I = d(_), m = function(e) {
let t = null != e.call ? e.call.duration : null;
return null != t ? t.humanize() : null;
  }(t);
  return o ? (0, i.jsx)(a.Z, {
icon: n(154239),
timestamp: t.timestamp,
compact: l,
children: null != m ? r.Z.Messages.SYSTEM_MESSAGE_CALL_MISSED_WITH_DURATION_HOOK.format({
  username: E,
  usernameHook: I,
  callDuration: m
}) : r.Z.Messages.SYSTEM_MESSAGE_CALL_MISSED_HOOK.format({
  username: E,
  usernameHook: I
})
  }) : (0, i.jsxs)(a.Z, {
icon: n(344163),
timestamp: t.timestamp,
compact: l,
children: [
  null != m ? r.Z.Messages.SYSTEM_MESSAGE_CALL_STARTED_WITH_DURATION_HOOK.format({
    username: E,
    usernameHook: I,
    callDuration: m
  }) : r.Z.Messages.SYSTEM_MESSAGE_CALL_STARTED_HOOK.format({
    username: E,
    usernameHook: I
  }),
  c ? (0, i.jsx)(a.Z.Action, {
    onClick: u,
    children: r.Z.Messages.SYSTEM_MESSAGE_JOIN_CALL
  }) : null
]
  });
}