var i = n(392711),
  s = n.n(i),
  a = n(243814),
  r = n(814443),
  l = n(699516),
  o = n(594174),
  c = n(914946),
  d = n(981631);
t.Z = {
  [d.Etm.GET_RELATIONSHIPS]: {
scope: a.x.RELATIONSHIPS_READ,
handler() {
  let e = {
    ...l.Z.getRelationships()
  };
  return r.Z.getUserAffinitiesUserIds().forEach(t => {
    null == e[t] && null != o.default.getUser(t) && (e[t] = d.OGo.IMPLICIT);
  }), {
    relationships: s().map(e, (e, t) => (0, c.cD)(e, t))
  };
}
  }
};