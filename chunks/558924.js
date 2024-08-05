t.d(n, {
  Z: function() {
return c;
  }
}), t(47120);
var i = t(735250);
t(470079);
var r = t(442837),
  a = t(481060),
  s = t(26151),
  l = t(358221),
  o = t(314897),
  u = t(354459),
  d = t(689938);

function c(e, n) {
  let t = (0, r.e7)([o.default], () => o.default.getId() === e, [e]),
[c, E] = (0, r.Wu)([l.Z], () => [
  l.Z.getParticipants(n),
  l.Z.getParticipant(n, e)
], [
  n,
  e
]);
  return t || 0 === c.length ? null : null == E ? (0, i.jsx)(a.MenuItem, {
id: 'ring',
label: d.Z.Messages.RING,
action: () => s.Z.ring(n, [e])
  }) : E.type === u.fO.USER && E.ringing ? (0, i.jsx)(a.MenuItem, {
id: 'stop-ringing',
label: d.Z.Messages.STOP_RINGING,
action: () => s.Z.stopRinging(n, [e])
  }) : null;
}