r.d(n, {
  Z: function() {
return c;
  }
}), r(47120);
var i = r(735250);
r(470079);
var s = r(442837),
  a = r(481060),
  t = r(26151),
  l = r(358221),
  d = r(314897),
  o = r(354459),
  u = r(689938);

function c(e, n) {
  let r = (0, s.e7)([d.default], () => d.default.getId() === e, [e]),
[c, Z] = (0, s.Wu)([l.Z], () => [
  l.Z.getParticipants(n),
  l.Z.getParticipant(n, e)
], [
  n,
  e
]);
  return r || 0 === c.length ? null : null == Z ? (0, i.jsx)(a.MenuItem, {
id: 'ring',
label: u.Z.Messages.RING,
action: () => t.Z.ring(n, [e])
  }) : Z.type === o.fO.USER && Z.ringing ? (0, i.jsx)(a.MenuItem, {
id: 'stop-ringing',
label: u.Z.Messages.STOP_RINGING,
action: () => t.Z.stopRinging(n, [e])
  }) : null;
}