n(47120);
var a = n(979590),
  r = n.n(a),
  s = n(399606),
  o = n(607070),
  i = n(168631);
let l = (e, t) => {
let n = e.toRgb(),
  a = t.toRgb(),
  [s, o, l] = (0, i.J2)([
    n.r,
    n.g,
    n.b
  ], [
    a.r,
    a.g,
    a.b
  ], 50);
return r()({
  r: s,
  g: o,
  b: l
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
border: l(t[0], t[1]).setAlpha(0.4),
label: l(t[0], t[1]).isLight() ? e.dark : e.light
  },
  d = (e, t) => 0 === t.length ? void 0 : 1 === t.length ? {
primary: t[0],
secondary: t[0],
text: t[0].isLight() ? e.dark : e.light
  } : {
primary: t[0],
secondary: t[1],
text: l(t[0], t[1]).isLight() ? e.dark : e.light
  },
  u = (e, t) => {
let {
  h: n,
  s: a,
  l: s
} = e.toHsl();
return r()({
  h: n,
  s: a * t,
  l: s
});
  };
t.Z = e => t => {
  let n = (0, s.e7)([o.Z], () => o.Z.saturation);
  if (null == t)
return {};
  let a = {
backgroundColors: c(e, t.backgroundColors),
buttonColors: d(e, t.buttonColors),
confettiColors: t.confettiColors
  };
  return 1 === n ? {
...a
  } : {
backgroundColors: null != a.backgroundColors ? {
  primary: u(a.backgroundColors.primary, n),
  secondary: u(a.backgroundColors.secondary, n),
  border: u(a.backgroundColors.border, n),
  label: u(a.backgroundColors.label, n)
} : void 0,
buttonColors: null != a.buttonColors ? {
  primary: u(a.buttonColors.primary, n),
  secondary: u(a.buttonColors.secondary, n),
  text: u(a.buttonColors.text, n)
} : void 0,
confettiColors: a.confettiColors.map(e => u(e, n))
  };
};