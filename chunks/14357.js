var i = n(735250);
n(470079);
var a = n(399606),
  s = n(607070),
  r = n(70097),
  l = n(970731),
  o = n(19199),
  c = n(921944),
  d = n(689938),
  u = n(504105);
t.Z = e => {
  let {
markAsDismissed: t
  } = e, n = (0, a.e7)([s.Z], () => s.Z.useReducedMotion);
  return (0, o.D)() ? (0, i.jsx)(l.ZP, {
asset: (0, i.jsx)(r.Z, {
  className: u.video,
  src: 'https://cdn.discordapp.com/attachments/1067194967979733053/1067195118026772480/Safety_MUTE_Coachmark.mp4',
  loop: !0,
  autoPlay: !n,
  width: '100%'
}),
header: d.Z.Messages.SAFETY_CONSUMER_EDUCATION_MUTE_HEADER,
content: d.Z.Messages.SAFETY_CONSUMER_EDUCATION_MUTE_CONTENT,
buttonCTA: d.Z.Messages.GOT_IT,
className: u.__invalid_coachmark,
onClick: e => {
  e.stopPropagation(), t(c.L.UNKNOWN);
},
markAsDismissed: t,
caretPosition: l.DF.BOTTOM_CENTER,
headerClassName: u.header
  }) : null;
};