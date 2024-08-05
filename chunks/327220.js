t.d(r, {
  Z: function() {
return l;
  }
}), t(47120);
var a = t(470079),
  n = t(442837),
  i = t(592125),
  o = t(9156);

function l(e) {
  let r = (0, n.e7)([i.Z], () => i.Z.getPrivateChannelsVersion()),
t = (0, n.e7)([i.Z], () => i.Z.getMutableDMsByUserIds(), [r]),
l = (0, n.e7)([o.ZP], () => o.ZP.getMutedChannels(null)),
c = a.useMemo(() => {
  let e = new Set();
  for (let r in t) {
    let a = t[r];
    null != a && l.has(a) && e.add(r);
  }
  return e;
}, [
  t,
  l
]);
  return a.useMemo(() => null == e ? void 0 : e.filter(e => {
for (let r of e.participants)
  if (c.has(r))
    return !1;
return !0;
  }), [
e,
c
  ]);
}