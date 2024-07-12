e.d(t, {
  Z: function() {
return E;
  }
}), e(47120);
var r = e(470079),
  u = e(442837),
  i = e(592125),
  o = e(9156);

function E(n) {
  let t = (0, u.e7)([i.Z], () => i.Z.getPrivateChannelsVersion()),
e = (0, u.e7)([i.Z], () => i.Z.getMutableDMsByUserIds(), [t]),
E = (0, u.e7)([o.ZP], () => o.ZP.getMutedChannels(null)),
l = r.useMemo(() => {
  let n = new Set();
  for (let t in e) {
    let r = e[t];
    null != r && E.has(r) && n.add(t);
  }
  return n;
}, [
  e,
  E
]);
  return r.useMemo(() => null == n ? void 0 : n.filter(n => {
for (let t of n.participants)
  if (l.has(t))
    return !1;
return !0;
  }), [
n,
l
  ]);
}