s.d(a, {
  Z: function() {
return d;
  }
}), s(47120);
var n = s(470079),
  t = s(392711),
  r = s.n(t),
  l = s(876215),
  i = s(442837),
  E = s(146282),
  c = s(897674),
  _ = s(709054),
  o = s(206583);
let I = new Set([l.s.PLAYED_GAME]),
  A = e => I.has(e.content_type);

function d() {
  let e = (0, c.Z)(o.YN.GAME_PROFILE_FEED),
a = (0, c.Z)(o.YN.GLOBAL_FEED),
s = n.useMemo(() => r()(a).unionBy(e, e => e.id).filter(A).orderBy(e => _.default.extractTimestamp(e.id), 'desc').uniqWith((e, a) => e.author_id === a.author_id && e.extra.application_id === a.extra.application_id).value(), [
  e,
  a
]);
  return {
requestId: (0, i.e7)([E.Z], () => E.Z.getFeedRequestId(o.YN.GAME_PROFILE_FEED)),
entries: s
  };
}