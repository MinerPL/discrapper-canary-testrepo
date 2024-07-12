n.d(t, {
  Z: function() {
return a;
  }
}), n(653041), n(47120);
var i = n(470079),
  l = n(442837),
  r = n(430824),
  o = n(973001);

function a(e) {
  let {
application: t,
showMutualGuilds: n = !0
  } = e, a = (0, l.e7)([o.Z], () => o.Z.getGuildIdsForApplication(null == t ? void 0 : t.id), [t]), s = (0, l.e7)([r.Z], () => r.Z.isLoaded());
  return i.useMemo(() => {
let e = [];
if (!s || !n || null == a || null == t)
  return e;
for (let t of a) {
  let n = r.Z.getGuild(t);
  null != n && e.push(n);
}
return e;
  }, [
s,
a,
t,
n
  ]);
}