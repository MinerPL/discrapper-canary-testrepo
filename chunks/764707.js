n(47120);
var r = n(979590),
  a = n.n(r),
  o = n(399606),
  l = n(607070),
  i = n(168631);
let s = (e, t) => {
let n = e.toRgb(),
  r = t.toRgb(),
  [o, l, s] = (0, i.J2)([
    n.r,
    n.g,
    n.b
  ], [
    r.r,
    r.g,
    r.b
  ], 50);
return a()({
  r: o,
  g: l,
  b: s
});
  },
  c = (e, t) => 0 === t.length ? void 0 : 1 === t.length ? {
primary: t[0],
secondary: t[0],
border: t[0].setAlpha(0.4),
label: t[0].isLight() ? e.dark : e.light
  } : {
primary: t[0],
secondary: t[1],
border: s(t[0], t[1]).setAlpha(0.4),
label: s(t[0], t[1]).isLight() ? e.dark : e.light
  },
  d = (e, t) => 0 === t.length ? void 0 : 1 === t.length ? {
primary: t[0],
secondary: t[0],
text: t[0].isLight() ? e.dark : e.light
  } : {
primary: t[0],
secondary: t[1],
text: s(t[0], t[1]).isLight() ? e.dark : e.light
  },
  u = (e, t) => {
let {
  h: n,
  s: r,
  l: o
} = e.toHsl();
return a()({
  h: n,
  s: r * t,
  l: o
});
  };
t.Z = e => t => {
  let n = (0, o.e7)([l.Z], () => l.Z.saturation);
  if (null == t)
return {};
  let r = {
backgroundColors: c(e, t.backgroundColors),
buttonColors: d(e, t.buttonColors),
confettiColors: t.confettiColors
  };
  return 1 === n ? {
...r
  } : {
backgroundColors: null != r.backgroundColors ? {
  primary: u(r.backgroundColors.primary, n),
  secondary: u(r.backgroundColors.secondary, n),
  border: u(r.backgroundColors.border, n),
  label: u(r.backgroundColors.label, n)
} : void 0,
buttonColors: null != r.buttonColors ? {
  primary: u(r.buttonColors.primary, n),
  secondary: u(r.buttonColors.secondary, n),
  text: u(r.buttonColors.text, n)
} : void 0,
confettiColors: r.confettiColors.map(e => u(e, n))
  };
};