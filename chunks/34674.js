"use strict";
n.d(t, {
  $_: function() {
    return R
  },
  KQ: function() {
    return m
  },
  MU: function() {
    return S
  },
  m0: function() {
    return A
  },
  rf: function() {
    return C
  },
  tu: function() {
    return O
  }
}), n(610138), n(216116), n(78328), n(815648), n(47120), n(315314);
var i = n(860911),
  r = n(477690),
  s = n(134432),
  o = n(703656),
  a = n(619271),
  l = n(634127),
  u = n(988951),
  _ = n(275756),
  d = n(752916),
  c = n(199202),
  E = n(541541),
  I = n(768581),
  T = n(981631),
  h = n(689938);
let S = 0,
  {
    API_ENDPOINT: f,
    CDN_HOST: N
  } = window.GLOBAL_ENV;

function A(e) {
  return e.id === S
}

function m() {
  return {
    id: S,
    name: h.Z.Messages.APP_DIRECTORY_ALL_CATEGORY
  }
}

function O(e) {
  switch (e.id) {
    case 0:
      return d.Z;
    case 4:
      return c.Z;
    case 5:
      return _.Z;
    case 6:
      return a.Z;
    case 8:
      break;
    case 9:
      return u.Z;
    case 10:
      return E.Z
  }
  return l.Z
}

function R(e) {
  let {
    itemId: t,
    hash: n
  } = e, i = new URLSearchParams({
    size: (0, s.oO)(parseFloat(r.Z.APPLICATION_DIRECTORY_CONTENT_MAX_WIDTH) * (0, s.x_)()).toString()
  }).toString(), o = I.$k ? "webp" : "png";
  return null != N ? "".concat(location.protocol, "//").concat(N, "/app-assets/application-directory/collection-items/").concat(t, "/").concat(n, ".").concat(o, "?").concat(i) : "".concat(location.protocol).concat(f).concat(T.ANM.APPLICATION_DIRECTORY_COLLECTION_ITEM_IMAGE(t, n, o), "?").concat(i)
}

function C() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
    t = new URL(location.href);
  for (let n in e) {
    let i = e[n];
    t.searchParams.set(n, i)
  }
  let n = t.pathname + t.search,
    r = (0, i.U)(n, !1);
  (0, o.uL)(r)
}