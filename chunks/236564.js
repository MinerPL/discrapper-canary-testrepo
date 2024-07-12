n.d(t, {
  Z: function() {
return o;
  }
});
var i = n(735250);
n(470079);
var a = n(475179),
  l = n(112560),
  s = n(689938);
let r = n(576394);

function o(e) {
  let {
width: t,
className: n,
channelId: o,
noArt: c = !1
  } = e;
  return (0, i.jsx)(l.Z, {
artURL: r,
noArt: c,
size: (0, l.L)(t),
className: n,
callToAction: s.Z.Messages.STREAM_SHOW_ALL_PARTICIPANTS,
header: s.Z.Messages.STREAM_PARTICIPANTS_HIDDEN.format(),
onCTAClick: () => a.Z.toggleVoiceParticipantsHidden(o, !1)
  });
}