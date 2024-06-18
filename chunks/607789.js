"use strict";
n(47120), n(724458);
var i = n(470079),
  r = n(442837),
  s = n(25251),
  o = n(731896);
t.Z = e => {
  let [t, n] = i.useState(e), [a, l] = i.useState(s.Z.getProfileEffectById(e));
  (0, o.V)(e);
  let u = (0, r.e7)([s.Z], () => s.Z.profileEffects),
    _ = u.reduce((t, n, i) => (n.id === e && (t = i), t), 0),
    [, d] = i.useState(_),
    c = i.useRef(_);
  return i.useEffect(() => {
    n(e), l(s.Z.getProfileEffectById(e))
  }, [e, u]), {
    increment: () => {
      let e = (c.current + 1) % u.length;
      c.current = e, d(e), n(u[e].id), l(u[e])
    },
    decrement: () => {
      let e = 0 === c.current ? u.length - 1 : c.current - 1;
      c.current = e, d(e), n(u[e].id), l(u[e])
    },
    id: t,
    preset: a
  }
}