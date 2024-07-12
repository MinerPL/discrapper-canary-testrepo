n.d(t, {
  Z: function() {
return p;
  }
}), n(789020), n(47120), n(653041);
var i = n(470079),
  l = n(442837),
  r = n(630388),
  a = n(115130),
  o = n(844797),
  u = n(694312),
  c = n(405625),
  d = n(664097),
  s = n(981631);

function p(e) {
  let {
guildId: t,
enableFilter: n = !1,
channel: p
  } = e, {
filter: f
  } = (0, l.cj)([a.Z], () => ({
filter: a.Z.getFilter()
  })), v = (0, u.E)(t), h = (0, c.Z)(v), Z = (0, d.o)(), _ = (0, o.oy)(p);
  return i.useMemo(() => {
function e(e) {
  return !!(!n || '' === f || e.application.name.toLowerCase().includes(f.toLowerCase())) || !1;
}

function t(e) {
  return !_ || (0, r.yE)(e.application.flags, s.udG.EMBEDDED_RELEASED);
}
let i = [...Z].filter(e).filter(t),
  l = new Set(i.map(e => e.application.id));
for (let n of h)
  !l.has(n.application.id) && e(n) && t(n) && i.push(n);
return i;
  }, [
Z,
n,
f,
h,
_
  ]);
}