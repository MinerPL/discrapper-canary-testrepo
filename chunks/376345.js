r(411104);
var n = r(688619),
  a = r.n(n),
  o = r(402903),
  i = r.n(o),
  _ = r(190558),
  E = r(949180),
  s = r(777910),
  c = r(897710),
  I = r(15202),
  u = r(211468);
let {
  Themes: l
} = I.V, {
  SemanticColors: R,
  RawColors: A
} = _.V, {
  Shadows: T
} = s.V, {
  Spacing: d
} = c.V, N = Symbol('semanticColor'), p = {
  themes: l,
  colors: i()(R, (e, t) => ({
[N]: t
  })),
  unsafe_rawColors: A,
  shadows: i()(T, e => {
function t(t) {
  return {
    resolve: (r, n) => t(e[r].nativeStyles, n)
  };
}
return {
  shadowOffset: t(e => e.shadowOffset),
  shadowColor: t((e, t) => t ? e.shadowColorAndroid : e.shadowColor),
  shadowOpacity: t(e => e.shadowOpacity),
  shadowRadius: t(e => e.shadowRadius),
  elevation: t(e => e.elevation)
};
  }),
  radii: E.w,
  spacing: d,
  internal: {
isSemanticColor: e => 'object' == typeof e && null !== e && N in e,
getSemanticColorName: e => e[N],
resolveSemanticColor(e, t, r) {
  var n, o;
  e = function(e) {
    if ('string' == typeof e) {
      let t = e.toUpperCase();
      if (!(t in l))
        throw Error('Invalid theme: '.concat(e));
      e = l[t];
    }
    return e;
  }(e);
  let i = R[t[N]],
    {
      category: _
    } = i,
    E = i[e],
    s = A[E.raw],
    c = E.opacity;
  if ((null == r ? void 0 : r.gradient) != null && 'gradient' in i) {
    let e = i.gradient[null == r ? void 0 : r.gradient.theme];
    if (null != e) {
      let t = a()(e.color in A ? A[e.color] : null == r ? void 0 : r.gradient.colors[e.color]);
      'saturation' in e && (t = t.set('hsl.s', e.saturation)), 'lightness' in e && (t = t.set('hsl.l', e.lightness)), s = t.hex(), c = 'opacity' in e ? e.opacity : 1;
    }
  }
  let I = null !== (n = null == r ? void 0 : r.contrast) && void 0 !== n ? n : 1,
    T = null !== (o = null == r ? void 0 : r.saturation) && void 0 !== o ? o : 1;
  return (T < 1 && (s = (0, u.dO)(s, _, T)), 1 !== I && (s = (0, u.pq)(s, _, e, I)), 1 === c) ? s : a()(s).alpha(c).hex();
},
adjustColorSaturation: (e, t, r) => (0, u.dO)(e, r, t),
adjustColorContrast: (e, t, r, n) => (0, u.pq)(e, r, n, t)
  }
};
t.ZP = p;