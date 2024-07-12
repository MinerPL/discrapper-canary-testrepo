var r = n(735250),
  a = n(470079),
  o = n(120356),
  l = n.n(o),
  i = n(399606),
  s = n(376345),
  c = n(607070),
  d = n(302221),
  u = n(884697),
  f = n(372654),
  p = n(916305);
t.Z = e => {
  let {
asset: t,
size: n = f.yV,
addGradient: o = !1,
className: g,
style: v,
children: C,
blur: E = !1
  } = e, b = (0, i.e7)([c.Z], () => c.Z.saturation), h = a.useMemo(() => {
if (null == t)
  return v;
let e = (0, u.uV)(t, {
    size: n,
    format: 'jpg'
  }),
  r = E ? {
    filter: 'blur(2px)',
    transform: 'scale(1.02)'
  } : {};
if (1 === b)
  return {
    ...v,
    backgroundImage: o ? 'url('.concat(e, '), linear-gradient(180deg, rgba(0, 71, 94, 0.6) 5%, rgba(9, 33, 65, 0.6) 95%)') : 'url('.concat(e, ')'),
    backgroundBlendMode: 'multiply',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    ...r
  };
let a = (0, d.aD)(s.ZP.unsafe_rawColors.BLACK_500, 1 - b);
return {
  ...v,
  backgroundImage: 'linear-gradient('.concat(a, ', ').concat(a, '), url(').concat(e, ')'),
  backgroundBlendMode: 'saturation',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  ...r
};
  }, [
t,
n,
b,
v,
E,
o
  ]);
  return (0, r.jsx)('div', {
className: l()(p.banner, g),
style: h,
children: C
  });
};