n.d(t, {
  Z: function() {
return d;
  }
});
var i = n(735250);
n(470079);
var a = n(442837),
  s = n(481060),
  l = n(846027),
  r = n(131951),
  o = n(358085),
  c = n(981631),
  u = n(689938);

function d() {
  let e = !o.isPlatformEmbedded,
t = (0, a.e7)([r.Z], () => r.Z.getMode()),
n = (e, n) => (0, i.jsx)(s.MenuRadioItem, {
  id: e,
  group: 'input-modes',
  label: n,
  checked: t === e,
  action: () => l.Z.setMode(e)
}, e);
  return [
n(c.pM4.VOICE_ACTIVITY, u.Z.Messages.INPUT_MODE_VAD),
n(c.pM4.PUSH_TO_TALK, e ? u.Z.Messages.INPUT_MODE_PTT_LIMITED : u.Z.Messages.INPUT_MODE_PTT)
  ];
}