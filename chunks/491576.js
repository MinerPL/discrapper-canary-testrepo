t.d(n, {
  Z: function() {
return o;
  }
}), t(653041), t(47120);
var i = t(470079),
  l = t(442837),
  r = t(430824),
  s = t(973001);

function o(e) {
  let {
application: n,
showMutualGuilds: t = !0
  } = e, o = (0, l.e7)([s.Z], () => s.Z.getGuildIdsForApplication(null == n ? void 0 : n.id), [n]), c = (0, l.e7)([r.Z], () => r.Z.isLoaded());
  return i.useMemo(() => {
let e = [];
if (!c || !t || null == o || null == n)
  return e;
for (let n of o) {
  let t = r.Z.getGuild(n);
  null != t && e.push(t);
}
return e;
  }, [
c,
o,
n,
t
  ]);
}