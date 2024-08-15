n.d(t, {
  Z: function() {
return c;
  }
});
var i = n(735250);
n(470079);
var a = n(481060),
  s = n(739566),
  r = n(834129),
  l = n(689938),
  o = n(820843);

function c(e) {
  let {
message: t,
compact: n,
usernameHook: c
  } = e, u = (0, s.ZP)(t), d = c(u), _ = l.Z.Messages.SYSTEM_MESSAGE_STAGE_END_HOOK.format({
username: u.nick,
usernameHook: d,
topic: t.content
  });
  return (0, i.jsx)(r.Z, {
className: o.stageSystemMessage,
iconNode: (0, i.jsx)(a.StageIcon, {
  size: 'md',
  color: 'currentColor'
}),
iconContainerClassName: o.iconContainer,
timestamp: t.timestamp,
compact: n,
children: _
  });
}