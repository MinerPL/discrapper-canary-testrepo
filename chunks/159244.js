"use strict";
var i = n(442837),
  r = n(699516),
  s = n(594174),
  o = n(981631);
t.Z = e => {
  let t = (0, i.e7)([s.default], () => s.default.getCurrentUser()),
    n = (0, i.e7)([r.Z], () => r.Z.getRelationshipType(e.id)),
    a = e.isNonUserBot();
  return e.id !== (null == t ? void 0 : t.id) && n !== o.OGo.BLOCKED && !a
}