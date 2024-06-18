"use strict";
n.d(t, {
  BH: function() {
    return S
  },
  Cs: function() {
    return N
  },
  G1: function() {
    return d
  },
  IC: function() {
    return M
  },
  OT: function() {
    return y
  },
  XM: function() {
    return E
  },
  XS: function() {
    return L
  },
  Yq: function() {
    return U
  },
  aj: function() {
    return g
  },
  bl: function() {
    return v
  },
  f_: function() {
    return h
  },
  iC: function() {
    return C
  },
  mO: function() {
    return D
  },
  qS: function() {
    return c
  },
  ql: function() {
    return T
  },
  rN: function() {
    return f
  },
  uV: function() {
    return p
  },
  x6: function() {
    return b
  }
}), n(724458), n(47120);
var i = n(392711),
  r = n(979554),
  s = n(134432),
  o = n(937615),
  a = n(922347),
  l = n(212161),
  u = n(215023),
  _ = n(981631);
let d = e => (null == e ? void 0 : e.premiumType) != null,
  c = e => (null == e ? void 0 : e.purchaseType) === _.qc2.PREMIUM_PURCHASE,
  E = (e, t, n) => {
    let i;
    let r = T(e, i = n ? t ? _.tuJ.MOBILE_PREMIUM_TIER_2 : _.tuJ.MOBILE : t ? _.tuJ.PREMIUM_TIER_2 : _.tuJ.DEFAULT);
    return null == r ? "" : (0, o.T4)(null == r ? void 0 : r.amount, null == r ? void 0 : r.currency)
  },
  I = e => {
    let t = e.bundledProducts;
    return null == t ? 0 : t.reduce((e, t) => {
      var n;
      let i = T(t, _.tuJ.DEFAULT);
      return e + (null !== (n = null == i ? void 0 : i.amount) && void 0 !== n ? n : 0)
    }, 0)
  },
  T = (e, t) => {
    var n, i, r;
    let s = null !== (r = e.prices[t]) && void 0 !== r ? r : null;
    return null == s ? null : null === (i = s.countryPrices) || void 0 === i ? void 0 : null === (n = i.prices) || void 0 === n ? void 0 : n[0]
  },
  h = 12633 == n.j ? {
    original: -1,
    discountPercentage: -1
  } : null,
  S = (e, t) => {
    let n = I(e);
    if (n <= 0) return h;
    let i = T(e, t ? _.tuJ.PREMIUM_TIER_2 : _.tuJ.DEFAULT);
    return null == i ? h : {
      original: n,
      discountPercentage: Math.floor((n - i.amount) / n * 100)
    }
  },
  f = e => {
    var t;
    return (null === (t = T(e, _.tuJ.DEFAULT)) || void 0 === t ? void 0 : t.amount) === 0
  },
  N = e => {
    let t = (0, i.flatMap)([...e.values()], "products");
    return (0, i.uniqBy)(t, "storeListingId")
  },
  A = (e, t) => {
    if (t === r.Z.AVATAR_DECORATION) {
      let t = (0, i.flatMap)([...e.values()], "items").filter(a.M);
      return (0, i.uniqBy)(t, "id")
    }
    if (t === r.Z.PROFILE_EFFECT) {
      let t = (0, i.flatMap)([...e.values()], "items").filter(l.H);
      return (0, i.uniqBy)(t, "id")
    }
  },
  m = (e, t) => {
    let n = N(e);
    if (t === r.Z.AVATAR_DECORATION) {
      let e = (0, i.flatMap)(n, "items").filter(a.M);
      return (0, i.uniqBy)(e, "id")
    }
    if (t === r.Z.PROFILE_EFFECT) {
      let e = (0, i.flatMap)(n, "items").filter(l.H);
      return (0, i.uniqBy)(e, "id")
    }
  },
  O = e => A(e, r.Z.AVATAR_DECORATION),
  R = e => m(e, r.Z.AVATAR_DECORATION),
  C = (e, t) => (0, i.uniqBy)([...O(e), ...R(t)], "id"),
  p = (e, t) => {
    var n;
    let {
      CDN_HOST: i,
      API_ENDPOINT: r
    } = window.GLOBAL_ENV, o = (0, s.oO)(t.size * (0, s.x_)()), a = null !== (n = null == t ? void 0 : t.format) && void 0 !== n ? n : "png";
    if (null != i) return "".concat(location.protocol, "//").concat(i, "/app-assets/").concat(_.XAJ, "/").concat(e, ".").concat(a, "?size=").concat(o);
    let l = _.ANM.APPLICATION_ASSET(_.XAJ, e, a);
    return "".concat(location.protocol).concat(r).concat(l, "?size=").concat(o)
  },
  g = e => A(e, r.Z.PROFILE_EFFECT),
  L = e => m(e, r.Z.PROFILE_EFFECT),
  v = (e, t) => {
    let n = g(t),
      i = L(e).filter(e => {
        let {
          id: t
        } = e;
        return !n.some(e => e.id === t)
      });
    return {
      purchased: n,
      shopPreviews: i
    }
  },
  D = e => e.applicationId === _.XAJ,
  M = e => 3.8 * e,
  P = 12633 == n.j ? 864e5 : null,
  y = e => {
    let t = new Date,
      n = Date.UTC(t.getFullYear(), t.getMonth(), t.getDate());
    return Math.floor((Date.UTC(e.getFullYear(), e.getMonth(), e.getDate()) - n) / P)
  },
  U = e => {
    let t = u.yf[e];
    return null != t && new Date().getTime() < t
  },
  b = e => (null == e ? void 0 : e.type) === r.Z.BUNDLE