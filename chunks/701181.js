n.d(t, {
  Z: function() {
return c;
  }
});
var i = n(735250);
n(470079);
var a = n(481060),
  s = n(702346),
  r = n(739566),
  l = n(689938),
  o = n(118496);

function c(e) {
  let {
message: t,
compact: n,
usernameHook: c
  } = e, d = (0, r.ZP)(t), u = c(d), _ = l.Z.Messages.SYSTEM_MESSAGE_STAGE_SPEAKER_HOOK.format({
username: d.nick,
usernameHook: u
  });
  return (0, i.jsx)(s.Z, {
className: o.stageSystemMessage,
iconNode: (0, i.jsx)(a.MicrophoneArrowRightIcon, {
  size: 'md',
  color: 'currentColor'
}),
iconContainerClassName: o.iconContainer,
timestamp: t.timestamp,
compact: n,
children: _
  });
}