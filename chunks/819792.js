var i = n(735250);
n(470079);
var s = n(338545),
  a = n(442837),
  r = n(536442),
  l = n(984933),
  o = n(496675),
  c = n(51382),
  d = n(91326),
  u = n(503856),
  _ = n(981631);

function h(e) {
  let {
channel: t,
guild: n
  } = e, l = (0, a.e7)([r.qc], () => r.qc.hasHotspot(r.v6.HUB_STUDY_ROOM_NOTICE)), o = (0, u.r)(t.guild_id), _ = (0, s.useSpring)({
maxHeight: o ? 0 : 300,
overflow: 'hidden',
delay: 400
  });
  return (0, i.jsx)(s.animated.div, {
style: _,
children: l ? (0, i.jsx)(c.Z, {
  channel: t,
  guild: n
}) : (0, i.jsx)(d.Z, {
  name: '\uD83D\uDCDA\u2615 '.concat(t.name),
  channel: t
})
  });
}
t.Z = function(e) {
  let {
guild: t
  } = e, n = (0, a.e7)([l.ZP], () => l.ZP.getChannels(t.id)[l.Zb][0]), s = (0, a.e7)([o.Z], () => null != n && o.Z.can(_.Plq.CONNECT, n.channel));
  return t.hasFeature(_.oNc.HUB) && null != n && s ? (0, i.jsx)(h, {
channel: n.channel,
guild: t
  }) : null;
};