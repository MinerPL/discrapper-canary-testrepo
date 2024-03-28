"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var s = n("924301");
n("57132");
var a = n("430824"),
  l = n("699516"),
  i = n("594174"),
  r = n("624138"),
  o = n("51144"),
  u = n("497089"),
  d = n("981631"),
  c = n("689938");

function f(e) {
  var t, n, f, E, _, T, m, I, p, h, N, S, C, A, g;
  let M = null !== (f = null === (t = e.other_user) || void 0 === t ? void 0 : t.id) && void 0 !== f ? f : d.EMPTY_STRING_SNOWFLAKE_ID,
    R = o.default.getName(i.default.getUser(null === (n = e.other_user) || void 0 === n ? void 0 : n.id));
  switch (e.type) {
    case u.NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS:
      return c.default.Messages.NOTIFICATION_CENTER_INCOMING_FRIEND_REQUEST.format({
        username: "**".concat(R, "**")
      });
    case u.NotificationCenterLocalItems.FRIEND_REQUESTS_GROUPED:
      let O = o.default.getName(i.default.getUser(null === (_ = e.other_users) || void 0 === _ ? void 0 : null === (E = _[0]) || void 0 === E ? void 0 : E.id)),
        v = o.default.getName(i.default.getUser(null === (m = e.other_users) || void 0 === m ? void 0 : null === (T = m[1]) || void 0 === T ? void 0 : T.id)),
        L = Math.max((null !== (p = null === (I = e.other_users) || void 0 === I ? void 0 : I.length) && void 0 !== p ? p : 0) - 2, 0);
      return c.default.Messages.NOTIFICATION_CENTER_INCOMING_FRIEND_REQUESTS.format({
        user: O,
        user2: v,
        count: L
      });
    case u.NotificationCenterLocalItems.MOBILE_NATIVE_UPDATE_AVAILABLE:
      let x = null !== (N = null === (h = e.local_id) || void 0 === h ? void 0 : h.split("_").pop()) && void 0 !== N ? N : "unknown";
      return "Update to build ".concat(x, " available!");
    case u.NotificationCenterItems.FRIEND_SUGGESTION_CREATED:
      let D = l.default.getRelationshipType(M) === d.RelationshipTypes.PENDING_OUTGOING;
      return null !== (S = e.body) && void 0 !== S ? S : "";
    case u.NotificationCenterItems.GUILD_SCHEDULED_EVENT_STARTED:
      let P = e.guild_scheduled_event_id,
        y = null != P ? s.default.getGuildScheduledEvent(P) : null,
        U = null == y ? void 0 : y.name,
        b = null === (C = a.default.getGuild(null == y ? void 0 : y.guild_id)) || void 0 === C ? void 0 : C.name;
      return (0, r.isNullOrEmpty)(b) || (0, r.isNullOrEmpty)(U) ? null !== (A = e.body) && void 0 !== A ? A : "" : c.default.Messages.NOTIFICATION_CENTER_GUILD_SCHEDULED_EVENT_ENDED.format({
        event_name: U,
        guild_name: b
      });
    case u.NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS_ACCEPTED:
      return c.default.Messages.NOTIFICATION_CENTER_INCOMING_FRIEND_REQUEST_ACCEPTED.format({
        username: "**".concat(R, "**")
      })
  }
  return null !== (g = e.body) && void 0 !== g ? g : ""
}