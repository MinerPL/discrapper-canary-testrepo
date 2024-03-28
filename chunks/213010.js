"use strict";
n.r(t), n.d(t, {
  useIsRelationshipTypeSpamReportable: function() {
    return i
  }
});
var a = n("442837"),
  l = n("699516"),
  s = n("981631");

function i(e) {
  let t = (0, a.useStateFromStores)([l.default], () => l.default.getRelationshipType(e), [e]);
  return t === s.RelationshipTypes.NONE || t === s.RelationshipTypes.BLOCKED || t === s.RelationshipTypes.PENDING_INCOMING
}