var i = n(735250);
n(470079);
var a = n(338545),
  s = n(442837),
  r = n(481060),
  l = n(536442),
  o = n(984933),
  c = n(496675),
  d = n(51382),
  u = n(91326),
  _ = n(503856),
  h = n(981631);

function E(e) {
  let {
channel: t,
guild: n
  } = e, o = (0, s.e7)([l.qc], () => l.qc.hasHotspot(l.v6.HUB_STUDY_ROOM_NOTICE)), c = (0, _.r)(t.guild_id), h = (0, r.useSpring)({
maxHeight: c ? 0 : 300,
overflow: 'hidden',
delay: 400
  });
  return (0, i.jsx)(a.animated.div, {
style: h,
children: o ? (0, i.jsx)(d.Z, {
  channel: t,
  guild: n
}) : (0, i.jsx)(u.Z, {
  name: '\uD83D\uDCDA\u2615 '.concat(t.name),
  channel: t
})
  });
}
t.Z = function(e) {
  let {
guild: t
  } = e, n = (0, s.e7)([o.ZP], () => o.ZP.getChannels(t.id)[o.Zb][0]), a = (0, s.e7)([c.Z], () => null != n && c.Z.can(h.Plq.CONNECT, n.channel));
  return t.hasFeature(h.oNc.HUB) && null != n && a ? (0, i.jsx)(E, {
channel: n.channel,
guild: t
  }) : null;
};