t.d(n, {
  Z: function() {
return u;
  }
});
var i = t(735250);
t(470079);
var a = t(442837),
  r = t(481060),
  l = t(196051),
  o = t(441729),
  s = t(689938);

function u(e, n) {
  let t = (0, a.e7)([o.Z], () => o.Z.isSpeakingMessage(n.id, e.id), [
n,
e
  ]);
  return '' === e.content ? null : (0, i.jsx)(r.MenuItem, {
id: 'tts',
label: t ? s.Z.Messages.STOP_SPEAKING_MESSAGE : s.Z.Messages.SPEAK_MESSAGE,
icon: r.ChatSpeakIcon,
action: () => t ? (0, l.NB)() : (0, l.LA)(n, e)
  });
}