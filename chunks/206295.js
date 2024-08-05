a.d(s, {
  w: function() {
return A;
  }
}), a(47120);
var n = a(470079),
  l = a(688619),
  r = a.n(l),
  t = a(979590),
  i = a.n(t),
  E = a(442837),
  o = a(866442),
  c = a(607070),
  _ = a(220082),
  I = a(981631);
let u = (e, s) => {
let a = c.Z.desaturateUserColors ? c.Z.saturation : 1,
  n = _.SR.getState().palette[e],
  l = null == n ? void 0 : n.map(e => {
    let [s, n, l] = e, {
      h: r,
      s: t,
      l: E
    } = i()({
      r: s,
      g: n,
      b: l
    }).toHsl();
    return i()({
      h: r,
      s: t * a,
      l: E
    }).toHexString();
  });
return null != l ? l : [
  s,
  s
];
  },
  A = e => {
var s, n, l, t, i, E;
let _;
_ = a(481060).tokens;
let A = c.Z.saturation,
  [d, O] = u(e, null !== (E = null == _ ? void 0 : null === (i = _.colors) || void 0 === i ? void 0 : null === (t = i.BACKGROUND_FLOATING) || void 0 === t ? void 0 : null === (l = t.resolve) || void 0 === l ? void 0 : null === (n = l.call(t, {
    theme: I.BRd.DARK,
    saturation: A
  })) || void 0 === n ? void 0 : null === (s = n.hex) || void 0 === s ? void 0 : s.call(n)) && void 0 !== E ? E : '#000'),
  N = (0, o._i)(d),
  R = (0, o._i)(O);
for (let e = 1; e < 8 && !((0, o.Bd)(N) >= 0.725); e++) {
  ;
  N = r()(N).darken(0.5).num();
}
for (let e = 1; e < 8 && !((0, o.Bd)(R) >= 0.725); e++) {
  ;
  R = r()(R).darken(0.5).num();
}
let T = (0, o.Rf)(N);
return {
  primaryColor: T,
  secondaryColor: (0, o.Rf)(R)
};
  };
s.Z = e => {
  var s, l, t, i, u, A;
  let d;
  d = a(481060).tokens;
  let O = (0, E.e7)([c.Z], () => c.Z.saturation),
[N, R] = (0, _.Cf)(e, null !== (A = null == d ? void 0 : null === (u = d.colors) || void 0 === u ? void 0 : null === (i = u.BACKGROUND_FLOATING) || void 0 === i ? void 0 : null === (t = i.resolve) || void 0 === t ? void 0 : null === (l = t.call(i, {
  theme: I.BRd.DARK,
  saturation: O
})) || void 0 === l ? void 0 : null === (s = l.hex) || void 0 === s ? void 0 : s.call(l)) && void 0 !== A ? A : '#000');
  return n.useMemo(() => {
let e = (0, o._i)(N),
  s = (0, o._i)(R);
for (let s = 1; s < 8 && !((0, o.Bd)(e) >= 0.725); s++) {
  ;
  e = r()(e).darken(0.5).num();
}
for (let e = 1; e < 8 && !((0, o.Bd)(s) >= 0.725); e++) {
  ;
  s = r()(s).darken(0.5).num();
}
let a = (0, o.Rf)(e);
return {
  primaryColor: a,
  secondaryColor: (0, o.Rf)(s)
};
  }, [
N,
R
  ]);
};