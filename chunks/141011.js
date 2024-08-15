var a = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  l = n(399606),
  i = n(376345),
  c = n(607070),
  d = n(302221),
  u = n(884697),
  f = n(372654),
  g = n(924579);
t.Z = e => {
  let {
asset: t,
size: n = f.yV,
className: s,
style: p,
children: C,
categoryBannerOverride: v
  } = e, m = (0, l.e7)([c.Z], () => c.Z.saturation), E = r.useMemo(() => {
if (null == t)
  return p;
let e = (0, u.uV)(t, {
    size: n,
    format: 'jpg'
  }),
  a = (null == v ? void 0 : v.blur) ? {
    filter: 'blur(2px)',
    transform: 'scale(1.02)'
  } : {};
if (1 === m)
  return {
    ...p,
    backgroundImage: (null == v ? void 0 : v.addGradient) ? 'url('.concat(e, '), linear-gradient(180deg, rgba(0, 71, 94, 0.6) 5%, rgba(9, 33, 65, 0.6) 95%)') : 'url('.concat(e, ')'),
    backgroundBlendMode: 'multiply',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    ...a
  };
let r = (0, d.aD)(i.ZP.unsafe_rawColors.BLACK_500, 1 - m);
return {
  ...p,
  backgroundImage: 'linear-gradient('.concat(r, ', ').concat(r, '), url(').concat(e, ')'),
  backgroundBlendMode: 'saturation',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  ...a
};
  }, [
t,
n,
m,
p,
null == v ? void 0 : v.blur,
null == v ? void 0 : v.addGradient
  ]);
  return (0, a.jsx)('div', {
className: o()(g.banner, s),
style: E,
children: C
  });
};