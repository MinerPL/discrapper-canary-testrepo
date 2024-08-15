n.d(t, {
  Z: function() {
return m;
  }
}), n(47120);
var i = n(470079),
  a = n(876215),
  s = n(442837),
  l = n(146282),
  r = n(442853),
  o = n(520951),
  c = n(266432),
  u = n(897674),
  d = n(206583);
let h = new Set([
  a.s.PLAYED_GAME,
  a.s.WATCHED_MEDIA,
  a.s.TOP_GAME,
  a.s.TOP_ARTIST,
  a.s.LISTENED_SESSION,
  a.s.LAUNCHED_ACTIVITY
]);

function m(e) {
  let t = (0, u.Z)(d.YN.GLOBAL_FEED);
  t = (0, r.Z)({
entries: t,
channelId: e
  }), t = i.useMemo(() => null == t ? void 0 : t.filter(e => h.has(e.content_type)), [t]), t = (0, c.Z)(t, e);
  let {
entries: n,
filteredIds: a
  } = (0, o.Z)(t);
  return t = n, {
requestId: (0, s.e7)([l.Z], () => l.Z.getFeedRequestId(d.YN.GLOBAL_FEED)),
entries: t,
impressionCappedEntryIds: a
  };
}