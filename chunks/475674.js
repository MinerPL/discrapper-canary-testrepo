n.d(t, {
  Z: function() {
return d;
  }
});
var i = n(442837),
  a = n(199902),
  s = n(314897),
  l = n(858340),
  r = n(959457),
  o = n(557457),
  c = n(614963),
  u = n(981631);

function d(e) {
  let t = (0, o.Wc)(e),
n = e.stream.guildId,
d = e.stream.ownerId;
  return (0, i.e7)([
r.Z,
l.Z,
s.default,
a.Z
  ], () => {
if (null == d)
  return null;
let e = d === s.default.getId();
if (!e && null == a.Z.getActiveStreamForUser(d, n))
  return null;
let i = e && null != l.Z.getHookError(u.K3D.SOUND);
return (0, c.Z)(r.Z.getQuality(), r.Z.getStatsHistory(n, d, e), i, t);
  }, [
t,
n,
d
  ]);
}