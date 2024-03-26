"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
}), n("222007");
var i = n("37983");
n("884691");
var a = n("446674"),
  r = n("77078"),
  s = n("561288"),
  l = n("191145"),
  u = n("271938"),
  o = n("99795"),
  d = n("782340");

function c(e, t) {
  let n = (0, a.useStateFromStores)([u.default], () => u.default.getId() === e, [e]),
    [c, f] = (0, a.useStateFromStoresArray)([l.default], () => [l.default.getParticipants(t), l.default.getParticipant(t, e)], [t, e]);
  return n || 0 === c.length ? null : null == f ? (0, i.jsx)(r.MenuItem, {
    id: "ring",
    label: d.default.Messages.RING,
    action: () => s.default.ring(t, [e])
  }) : f.type === o.ParticipantTypes.USER && f.ringing ? (0, i.jsx)(r.MenuItem, {
    id: "stop-ringing",
    label: d.default.Messages.STOP_RINGING,
    action: () => s.default.stopRinging(t, [e])
  }) : null
}