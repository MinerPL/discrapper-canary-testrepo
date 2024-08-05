n.d(t, {
  Z: function() {
return c;
  }
});
var i = n(735250);
n(470079);
var a = n(442837),
  s = n(481060),
  l = n(475179),
  r = n(358221),
  o = n(689938);

function c(e) {
  let t = (0, a.e7)([r.Z], () => r.Z.getVoiceParticipantsHidden(e));
  return (0, i.jsx)(s.MenuCheckboxItem, {
id: 'no-video-hide',
label: o.Z.Messages.STREAM_SHOW_NON_VIDEO,
checked: !t,
action: () => l.Z.toggleVoiceParticipantsHidden(e, !t)
  });
}