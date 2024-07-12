var r = n(740078),
  i = n(126387),
  a = n(205208),
  o = n(792278),
  s = n(464826),
  l = n(493623),
  u = n(343713),
  c = n(510104),
  d = n(632471),
  _ = n(607033),
  E = n(894417);
t.Z = {
  name: 'preventOverflow',
  enabled: !0,
  phase: 'main',
  fn: function(e) {
var t = e.state,
  n = e.options,
  f = e.name,
  h = n.mainAxis,
  p = n.altAxis,
  m = n.boundary,
  I = n.rootBoundary,
  T = n.altBoundary,
  g = n.padding,
  S = n.tether,
  A = void 0 === S || S,
  N = n.tetherOffset,
  v = void 0 === N ? 0 : N,
  O = (0, c.Z)(t, {
    boundary: m,
    rootBoundary: I,
    padding: g,
    altBoundary: T
  }),
  R = (0, i.Z)(t.placement),
  C = (0, d.Z)(t.placement),
  y = !C,
  D = (0, a.Z)(R),
  L = (0, o.Z)(D),
  b = t.modifiersData.popperOffsets,
  M = t.rects.reference,
  P = t.rects.popper,
  U = 'function' == typeof v ? v(Object.assign({}, t.rects, {
    placement: t.placement
  })) : v,
  w = 'number' == typeof U ? {
    mainAxis: U,
    altAxis: U
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, U),
  x = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
  G = {
    x: 0,
    y: 0
  };
if (!!b) {
  if (void 0 === h || h) {
    var k, B = 'y' === D ? r.we : r.t$,
      F = 'y' === D ? r.I : r.F2,
      V = 'y' === D ? 'height' : 'width',
      H = b[D],
      Z = H + O[B],
      Y = H - O[F],
      j = A ? -P[V] / 2 : 0,
      W = C === r.BL ? M[V] : P[V],
      K = C === r.BL ? -P[V] : -M[V],
      z = t.elements.arrow,
      q = A && z ? (0, l.Z)(z) : {
        width: 0,
        height: 0
      },
      Q = t.modifiersData['arrow#persistent'] ? t.modifiersData['arrow#persistent'].padding : (0, _.Z)(),
      X = Q[B],
      $ = Q[F],
      J = (0, s.u)(0, M[V], q[V]),
      ee = y ? M[V] / 2 - j - J - X - w.mainAxis : W - J - X - w.mainAxis,
      et = y ? -M[V] / 2 + j + J + $ + w.mainAxis : K + J + $ + w.mainAxis,
      en = t.elements.arrow && (0, u.Z)(t.elements.arrow),
      er = en ? 'y' === D ? en.clientTop || 0 : en.clientLeft || 0 : 0,
      ei = null != (k = null == x ? void 0 : x[D]) ? k : 0,
      ea = (0, s.u)(A ? (0, E.VV)(Z, H + ee - ei - er) : Z, H, A ? (0, E.Fp)(Y, H + et - ei) : Y);
    b[D] = ea, G[D] = ea - H;
  }
  if (void 0 !== p && p) {
    var eo, es = 'x' === D ? r.we : r.t$,
      el = 'x' === D ? r.I : r.F2,
      eu = b[L],
      ec = 'y' === L ? 'height' : 'width',
      ed = eu + O[es],
      e_ = eu - O[el],
      eE = -1 !== [
        r.we,
        r.t$
      ].indexOf(R),
      ef = null != (eo = null == x ? void 0 : x[L]) ? eo : 0,
      eh = eE ? ed : eu - M[ec] - P[ec] - ef + w.altAxis,
      ep = eE ? eu + M[ec] + P[ec] - ef - w.altAxis : e_,
      em = A && eE ? (0, s.q)(eh, eu, ep) : (0, s.u)(A ? eh : ed, eu, A ? ep : e_);
    b[L] = em, G[L] = em - eu;
  }
  t.modifiersData[f] = G;
}
  },
  requiresIfExists: ['offset']
};