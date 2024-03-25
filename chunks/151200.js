"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
}), n("222007");
var a = n("37983");
n("884691");
var s = n("446674"),
  r = n("77078"),
  u = n("561288"),
  i = n("191145"),
  d = n("271938"),
  l = n("99795"),
  o = n("782340");

function c(e, t) {
  let n = (0, s.useStateFromStores)([d.default], () => d.default.getId() === e, [e]),
    [c, f] = (0, s.useStateFromStoresArray)([i.default], () => [i.default.getParticipants(t), i.default.getParticipant(t, e)], [t, e]);
  return n || 0 === c.length ? null : null == f ? (0, a.jsx)(r.MenuItem, {
    id: "ring",
    label: o.default.Messages.RING,
    action: () => u.default.ring(t, [e])
  }) : f.type === l.ParticipantTypes.USER && f.ringing ? (0, a.jsx)(r.MenuItem, {
    id: "stop-ringing",
    label: o.default.Messages.STOP_RINGING,
    action: () => u.default.stopRinging(t, [e])
  }) : null
}