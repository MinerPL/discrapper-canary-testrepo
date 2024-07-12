var i = n(735250);
n(470079);
var l = n(120356),
  r = n.n(l),
  a = n(546591),
  s = n(977059),
  o = n(689938),
  c = n(682624);
t.Z = function(e) {
  let {
className: t,
hasVideo: n,
text: l
  } = e, {
enabled: u
  } = s.c.useExperiment({
location: 'RTCConnectionStatusText'
  }), d = n ? o.Z.Messages.E2EE_VIDEO_DETAILS : o.Z.Messages.E2EE_VOICE_DETAILS;
  return (0, i.jsx)(a.Z, {
className: r()(t, u ? c.hoverableStatus : c.status),
hoverText: u ? d : null,
children: l
  });
};