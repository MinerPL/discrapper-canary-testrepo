n(47120), n(724458);
var r = n(470079),
  i = n(442837),
  a = n(25251),
  s = n(731896);
t.Z = e => {
  let [t, n] = r.useState(e), [o, l] = r.useState(a.Z.getProfileEffectById(e));
  (0, s.V)(e);
  let u = (0, i.e7)([a.Z], () => a.Z.profileEffects),
c = u.reduce((t, n, r) => (n.id === e && (t = r), t), 0),
[, d] = r.useState(c),
_ = r.useRef(c);
  return r.useEffect(() => {
n(e), l(a.Z.getProfileEffectById(e));
  }, [
e,
u
  ]), {
increment: () => {
  let e = (_.current + 1) % u.length;
  _.current = e, d(e), n(u[e].id), l(u[e]);
},
decrement: () => {
  let e = 0 === _.current ? u.length - 1 : _.current - 1;
  _.current = e, d(e), n(u[e].id), l(u[e]);
},
id: t,
preset: o
  };
};