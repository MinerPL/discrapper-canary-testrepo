l.d(n, {
  q: function() {
return o;
  }
});
var t = l(481060),
  r = l(522474),
  i = l(592125),
  a = l(403404),
  u = l(701488),
  s = l(981631);
async function o(e) {
  let {
analyticsLocations: n,
channelId: l,
guildId: o,
locationObject: c,
initialSlide: d = u.ag.DIRECTORY,
initialSelectedApplicationId: m
  } = e;
  if ((0, t.hasModalOpen)(u.AC))
return;
  let f = i.Z.getChannel(l),
p = r.Z.getWindowOpen(s.KJ3.CHANNEL_CALL_POPOUT);
  await (0, a.Z)({
analyticsLocations: n,
channel: f,
guildId: o,
openInPopout: p,
initialSlide: d,
initialSelectedApplicationId: m,
locationObject: null != c ? c : {}
  });
}