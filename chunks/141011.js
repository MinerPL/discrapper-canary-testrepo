var a = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  i = n(399606),
  l = n(376345),
  c = n(607070),
  d = n(302221),
  u = n(884697),
  f = n(372654),
  g = n(916305);
t.Z = e => {
  let {
asset: t,
size: n = f.yV,
addGradient: s = !1,
className: p,
style: C,
children: m,
blur: v = !1
  } = e, E = (0, i.e7)([c.Z], () => c.Z.saturation), h = r.useMemo(() => {
if (null == t)
  return C;
let e = (0, u.uV)(t, {
    size: n,
    format: 'jpg'
  }),
  a = v ? {
    filter: 'blur(2px)',
    transform: 'scale(1.02)'
  } : {};
if (1 === E)
  return {
    ...C,
    backgroundImage: s ? 'url('.concat(e, '), linear-gradient(180deg, rgba(0, 71, 94, 0.6) 5%, rgba(9, 33, 65, 0.6) 95%)') : 'url('.concat(e, ')'),
    backgroundBlendMode: 'multiply',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    ...a
  };
let r = (0, d.aD)(l.ZP.unsafe_rawColors.BLACK_500, 1 - E);
return {
  ...C,
  backgroundImage: 'linear-gradient('.concat(r, ', ').concat(r, '), url(').concat(e, ')'),
  backgroundBlendMode: 'saturation',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  ...a
};
  }, [
t,
n,
E,
C,
v,
s
  ]);
  return (0, a.jsx)('div', {
className: o()(g.banner, p),
style: h,
children: m
  });
};