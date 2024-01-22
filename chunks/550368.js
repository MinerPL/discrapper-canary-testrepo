"use strict";
n.r(t), n.d(t, {
  getAssetFromImageURL: function() {
    return T
  },
  getAssetImage: function() {
    return I
  },
  getAssets: function() {
    return C
  },
  fetchAssetIds: function() {
    return R
  },
  getAssetIds: function() {
    return O
  }
}), n("511434"), n("313619"), n("654714"), n("287168"), n("956660"), n("222007");
var i = n("627445"),
  s = n.n(i),
  r = n("917351"),
  a = n.n(r),
  o = n("872717"),
  l = n("913144"),
  u = n("605250"),
  d = n("407063"),
  c = n("49111");
let f = "https://i.scdn.co/image/",
  _ = (e, t, n) => "https://static-cdn.jtvnw.net/previews-ttv/live_user_".concat(e, "-").concat(t, "x").concat(n, ".jpg"),
  h = /https:\/\/static-cdn\.jtvnw\.net\/previews-ttv\/live_user_(.+)-\{width\}x\{height\}.jpg/,
  g = e => "https://i.ytimg.com/vi/".concat(e, "/hqdefault_live.jpg"),
  m = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/hqdefault_live\.jpg/,
  E = {
    [c.PlatformTypes.SPOTIFY]: {
      deserialize: e => "".concat(f).concat(encodeURIComponent(e)),
      serialize: e => e.split(f)[1]
    },
    [c.PlatformTypes.TWITCH]: {
      deserialize: (e, t) => _(encodeURIComponent(e), t[0], t[1]),
      serialize: e => {
        let t = e.match(h);
        return null != t ? t[1] : null
      }
    },
    [c.PlatformTypes.YOUTUBE]: {
      deserialize: e => g(encodeURIComponent(e)),
      serialize: e => {
        let t = e.match(m);
        return null != t ? t[1] : null
      }
    },
    mp: {
      deserialize: e => (s(null != window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT, "MEDIA_PROXY_ENDPOINT not configured"), new URL(e, location.protocol + window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT).toString()),
      serialize: e => e
    }
  },
  p = {},
  v = {};
async function S(e) {
  let {
    body: t
  } = await o.default.get({
    url: c.Endpoints.APPLICATION_ASSETS(e),
    oldFormErrors: !0
  });
  return p[e] = {
    assets: a.keyBy(t, "name"),
    lastUpdated: Date.now()
  }
}

function T(e, t) {
  let n = E[e].serialize(t);
  return n ? "".concat(e, ":").concat(n.toString()) : null
}

function I(e, t, n) {
  if (null != t && t.includes(":")) {
    let [e, i] = t.split(":");
    if (e === c.PlatformTypes.TWITCH) {
      if (null == n || "number" == typeof n) {
        new(0, u.default)("ApplicationAssetUtils").warn("getAssetImage: size must === [number, number] for Twitch");
        return
      }
      return E[c.PlatformTypes.TWITCH].deserialize(i, n)
    }
    return Object.prototype.hasOwnProperty.call(E, e) ? E[e].deserialize(i) : void 0
  }
  if (null == e || null == t) return;
  let i = "number" == typeof n ? "?size=".concat((0, d.getBestMediaProxySize)(n)) : "";
  return null != window.GLOBAL_ENV.CDN_HOST ? "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.CDN_HOST, "/app-assets/").concat(e, "/").concat(t, ".png").concat(i) : "".concat(o.default.getAPIBaseURL(), "/applications/").concat(e, "/app-assets/").concat(t, ".png").concat(i)
}
async function C(e) {
  let {
    assets: t
  } = await

  function(e) {
    var t;
    let n = p[e];
    return null == n || (t = n.lastUpdated, Date.now() - t > 36e5) ? S(e) : Promise.resolve(n)
  }(e);
  return t
}
async function A(e, t) {
  let n = t.filter(e => null != e && !Object.prototype.hasOwnProperty.call(v, e) && null == v[e]);
  if (0 === n.length) return;
  let {
    body: i
  } = await o.default.post({
    url: c.Endpoints.APPLICATION_EXTERNAL_ASSETS(e),
    body: {
      urls: n
    },
    oldFormErrors: !0
  });
  for (let {
      url: e,
      external_asset_path: t
    }
    of i) v[e] = t
}

function y(e, t) {
  let n = 0,
    i = e.filter(e => (null == e ? void 0 : e.startsWith("http:")) || (null == e ? void 0 : e.startsWith("https:")));
  if (i.length > 0)
    for (let i = 0; i < e.length; i++) {
      let s = e[i];
      if (null == s) continue;
      let r = Object.prototype.hasOwnProperty.call(v, s) ? v[s] : void 0;
      null != r && (t[i] = T("mp", r), n++)
    }
  return n === e.length
}

function N(e, t, n, i) {
  let s = !1;
  for (let r = 0; r < e.length; r++) {
    let a = e[r];
    if (null == a || null != t[r]) continue;
    let o = Object.prototype.hasOwnProperty.call(n, a) && n[a];
    if (!o) {
      if (null == i || i <= 0) {
        t[r] = null;
        continue
      }
      s = !0
    }
    t[r] = o.id
  }
  return s
}
async function R(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
  l.default.dispatch({
    type: "APPLICATION_ASSETS_FETCH",
    applicationId: e
  });
  let i = [],
    s = t.filter(e => (null == e ? void 0 : e.startsWith("http:")) || (null == e ? void 0 : e.startsWith("https:")));
  s.length > 0 && await A(e, s);
  let r = y(t, i);
  if (r) return l.default.dispatch({
    type: "APPLICATION_ASSETS_FETCH_SUCCESS",
    applicationId: e
  }), i;
  let a = await C(e),
    o = N(t, i, a, n);
  return o ? S(e).then(() => R(e, t, n - 1)) : (l.default.dispatch({
    type: "APPLICATION_ASSETS_FETCH_SUCCESS",
    applicationId: e
  }), i)
}

function O(e, t) {
  var n;
  let i = [],
    s = y(t, i);
  if (s) return i;
  let r = null === (n = p[e]) || void 0 === n ? void 0 : n.assets;
  return null == r ? i : (N(t, i, r), i)
}