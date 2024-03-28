"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var a = n("735250"),
  s = n("470079"),
  l = n("481060"),
  i = n("493683"),
  r = n("367907"),
  o = n("205129"),
  u = n("626135"),
  d = n("981631"),
  c = n("689938");

function f(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    {
      priorityMembers: n,
      partiedMembers: f
    } = e,
    E = s.useContext(u.AnalyticsContext),
    h = n.map(e => {
      let {
        user: t
      } = e;
      return t.id
    }),
    _ = 1 === f.length && 1 === n.length,
    C = n.length - f.length > 0;
  return (_ || t) && !C && 0 !== h.length ? (0, a.jsx)(l.MenuItem, {
    id: "message",
    action: function() {
      i.default.openPrivateChannel(h).then(t => r.default.trackWithMetadata(d.AnalyticEvents.ACTIVITY_FEED_DM_VISITED, {
        source: {
          ...E.location,
          object: d.AnalyticsObjects.LIST_ITEM
        },
        channel_id: t,
        recipient_id: "string" == typeof h ? h : h[0],
        af_recently_played: !1,
        ...(0, o.getPartyMetadata)(e)
      }))
    },
    label: c.default.Messages.SEND_DM
  }) : null
}