n.d(t, {
  Z: function() {
return u;
  }
});
var i = n(735250);
n(470079);
var s = n(692547),
  a = n(481060),
  r = n(702346),
  l = n(739566),
  o = n(689938),
  c = n(118496);

function u(e) {
  let {
message: t,
compact: n,
usernameHook: u
  } = e, d = (0, l.ZP)(t), _ = u(d), E = o.Z.Messages.SYSTEM_MESSAGE_STAGE_START_HOOK.format({
username: d.nick,
usernameHook: _,
topic: t.content
  });
  return (0, i.jsx)(r.Z, {
className: c.stageSystemMessage,
iconNode: (0, i.jsx)(a.StageIcon, {
  size: 'md',
  color: s.Z.unsafe_rawColors.GREEN_360.css
}),
iconContainerClassName: c.iconContainer,
timestamp: t.timestamp,
compact: n,
children: E
  });
}