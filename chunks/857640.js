n.d(t, {
  Z: function() {
return c;
  }
});
var i = n(735250);
n(470079);
var s = n(481060),
  a = n(702346),
  r = n(739566),
  l = n(689938),
  o = n(118496);

function c(e) {
  let {
message: t,
compact: n,
usernameHook: c
  } = e, u = (0, r.ZP)(t), d = c(u), _ = l.Z.Messages.SYSTEM_MESSAGE_STAGE_END_HOOK.format({
username: u.nick,
usernameHook: d,
topic: t.content
  });
  return (0, i.jsx)(a.Z, {
className: o.stageSystemMessage,
iconNode: (0, i.jsx)(s.StageIcon, {
  size: 'md',
  color: 'currentColor'
}),
iconContainerClassName: o.iconContainer,
timestamp: t.timestamp,
compact: n,
children: _
  });
}