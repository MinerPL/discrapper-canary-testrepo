"use strict";
n.r(t), n.d(t, {
  useShowConvoStarterInDM: function() {
    return u
  }
});
var a = n("442837"),
  l = n("355298"),
  s = n("88101"),
  i = n("375954"),
  r = n("699516"),
  o = n("981631");

function u(e) {
  let t = e.isDM() && !e.isSystemDM() && !e.rawRecipients.some(e => e.bot),
    n = t ? e.getRecipientId() : null,
    u = (0, s.useStrangerDangerWarning)(e.id, "dm_convo_starter");
  return (0, a.useStateFromStores)([i.default, l.default, r.default], () => {
    if (null != u || !t || l.default.isMessageRequest(e.id) || null != n && r.default.getRelationshipType(n) === o.RelationshipTypes.BLOCKED) return !1;
    let a = i.default.getMessages(e.id);
    return a.ready && !a.hasMoreBefore && !a.hasMoreAfter && a.length < 25 && !i.default.hasCurrentUserSentMessage(e.id)
  }, [u, t, e.id, n])
}