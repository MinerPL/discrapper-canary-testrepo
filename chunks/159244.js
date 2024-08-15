var r = n(442837),
  i = n(699516),
  a = n(594174),
  s = n(981631);
t.Z = e => {
  let t = (0, r.e7)([a.default], () => a.default.getCurrentUser()),
n = (0, r.e7)([i.Z], () => i.Z.getRelationshipType(e.id)),
o = e.isNonUserBot();
  return e.id !== (null == t ? void 0 : t.id) && n !== s.OGo.BLOCKED && !o;
};