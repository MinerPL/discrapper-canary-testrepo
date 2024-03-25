"use strict";
n.r(t), n.d(t, {
  getSKUIdFromURL: function() {
    return E
  },
  canUserInstall: function() {
    return f
  },
  getReadablePreorderReleaseDate: function() {
    return T
  }
}), n("781738"), n("222007");
var s = n("866227"),
  a = n.n(s),
  l = n("803182"),
  i = n("773336"),
  r = n("271560"),
  o = n("49111");
n("782340");
let u = {},
  d = {},
  c = Object.freeze({
    ALL: -1,
    ...o.SKUGenres
  });

function E(e) {
  let t = (0, l.matchPath)(e, {
    path: o.Routes.APPLICATION_STORE_LISTING_SKU(":skuId", ":slug")
  });
  return null != t ? t.params.skuId : null
}

function f(e) {
  let t = (0, r.nativePlatformTypeToSKUOperatingSystem)((0, i.getPlatform)());
  return e.type === o.SKUTypes.DURABLE_PRIMARY && null != t && e.supportedOperatingSystems.includes(t)
}
Object.keys(c).forEach(e => {
  let t = e.toLowerCase().replace(/_/g, "-"),
    n = c[e];
  u[t] = n, d[n] = t
});
let _ = [
  ["YYYY-MM-DD", "MMMM DD, Y"],
  ["YYYY-MM", "MMMM Y"],
  ["MM-DD", "MMMM DD"],
  ["MM", "MMMM"],
  ["YYYY", "Y"]
];

function T(e) {
  let {
    preorderReleaseAt: t,
    preorderApproximateReleaseDate: n
  } = e;
  if (null != t) return t.format("MMMM DD");
  if (null == n) return null;
  for (let e = 0; e < _.length; e++) {
    let [t, s] = _[e], l = a(n, t, !0);
    if (l.isValid()) return l.format(s)
  }
  return n
}