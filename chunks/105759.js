n.d(s, {
  Z: function() {
return d;
  }
});
var t = n(470079),
  i = n(442837),
  r = n(598077),
  l = n(699516),
  a = n(295226),
  o = n(786397),
  C = n(474936);

function d() {
  let e = (0, o.w)(C.a7),
s = (0, i.e7)([a.Z], () => a.Z.getReferrer(null == e ? void 0 : e.trial_id)),
n = (0, i.e7)([l.Z], () => null == s || l.Z.isBlocked(s.id));
  return t.useMemo(() => n || null == s ? null : new r.Z(s), [
s,
n
  ]);
}