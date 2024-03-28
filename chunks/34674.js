"use strict";
n.r(e), n.d(e, {
  ALL_CATEGORY_ID: function() {
    return L
  },
  getAllCategory: function() {
    return A
  },
  getCategoryIcon: function() {
    return x
  },
  getCollectionItemAssetUrl: function() {
    return R
  },
  isAllCategory: function() {
    return I
  },
  redirectToLogin: function() {
    return T
  }
}), n("610138"), n("216116"), n("78328"), n("815648"), n("47120"), n("315314");
var r = n("860911"),
  i = n("477690"),
  c = n("134432"),
  l = n("703656"),
  o = n("619271"),
  a = n("634127"),
  s = n("988951"),
  u = n("275756"),
  d = n("752916"),
  f = n("199202"),
  h = n("541541"),
  C = n("768581"),
  v = n("981631"),
  p = n("689938");
let L = 0,
  {
    API_ENDPOINT: g,
    CDN_HOST: w
  } = window.GLOBAL_ENV;

function I(t) {
  return t.id === L
}

function A() {
  return {
    id: L,
    name: p.default.Messages.APP_DIRECTORY_ALL_CATEGORY
  }
}

function x(t) {
  switch (t.id) {
    case 0:
      return d.default;
    case 4:
      return f.default;
    case 5:
      return u.default;
    case 6:
      return o.default;
    case 8:
      break;
    case 9:
      return s.default;
    case 10:
      return h.default
  }
  return a.default
}

function R(t) {
  let {
    itemId: e,
    hash: n
  } = t, r = (0, c.getBestMediaProxySize)(parseFloat(i.default.APPLICATION_DIRECTORY_CONTENT_MAX_WIDTH) * (0, c.getDevicePixelRatio)()).toString(), l = new URLSearchParams({
    size: r
  }).toString(), o = C.SUPPORTS_WEBP ? "webp" : "png";
  return null != w ? "".concat(location.protocol, "//").concat(w, "/app-assets/application-directory/collection-items/").concat(e, "/").concat(n, ".").concat(o, "?").concat(l) : "".concat(location.protocol).concat(g).concat(v.Endpoints.APPLICATION_DIRECTORY_COLLECTION_ITEM_IMAGE(e, n, o), "?").concat(l)
}

function T() {
  let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
    e = new URL(location.href);
  for (let n in t) {
    let r = t[n];
    e.searchParams.set(n, r)
  }
  let n = e.pathname + e.search,
    i = (0, r.getLoginPath)(n, !1);
  (0, l.transitionTo)(i)
}