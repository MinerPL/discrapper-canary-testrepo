n.d(t, {
  Z: function() {
return u;
  }
});
var i = n(442837),
  a = n(199902),
  l = n(314897),
  s = n(858340),
  r = n(959457),
  o = n(557457),
  c = n(614963),
  d = n(981631);

function u(e) {
  let t = (0, o.Wc)(e),
n = e.stream.guildId,
u = e.stream.ownerId;
  return (0, i.e7)([
r.Z,
s.Z,
l.default,
a.Z
  ], () => {
if (null == u)
  return null;
let e = u === l.default.getId();
if (!e && null == a.Z.getActiveStreamForUser(u, n))
  return null;
let i = e && null != s.Z.getHookError(d.K3D.SOUND);
return (0, c.Z)(r.Z.getQuality(), r.Z.getStatsHistory(n, u, e), i, t);
  }, [
t,
n,
u
  ]);
}