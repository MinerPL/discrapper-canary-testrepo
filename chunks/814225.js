"use strict";
n.r(t), n.d(t, {
  canUserInstall: function() {
    return E
  },
  getReadablePreorderReleaseDate: function() {
    return T
  },
  getSKUIdFromURL: function() {
    return f
  }
}), n("757143"), n("47120");
var s = n("913527"),
  a = n.n(s),
  l = n("266067"),
  i = n("358085"),
  r = n("73346"),
  o = n("981631");
n("689938");
let u = {},
  d = {},
  c = Object.freeze({
    ALL: -1,
    ...o.SKUGenres
  });

function f(e) {
  let t = (0, l.matchPath)(e, {
    path: o.Routes.APPLICATION_STORE_LISTING_SKU(":skuId", ":slug")
  });
  return null != t ? t.params.skuId : null
}

function E(e) {
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
    let [t, s] = _[e], l = a()(n, t, !0);
    if (l.isValid()) return l.format(s)
  }
  return n
}