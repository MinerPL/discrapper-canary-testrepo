t.d(n, {
  Z: function() {
return s;
  }
});
var i = t(735250);
t(470079);
var r = t(442837),
  a = t(481060),
  u = t(475179),
  o = t(358221),
  l = t(689938);

function s(e) {
  let n = (0, r.e7)([o.Z], () => o.Z.getVoiceParticipantsHidden(e));
  return (0, i.jsx)(a.MenuCheckboxItem, {
id: 'no-video-hide',
label: l.Z.Messages.STREAM_SHOW_NON_VIDEO,
checked: !n,
action: () => u.Z.toggleVoiceParticipantsHidden(e, !n)
  });
}