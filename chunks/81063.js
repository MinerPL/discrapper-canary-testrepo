"use strict";
n.r(t), n.d(t, {
  fetchAssetIds: function() {
    return p
  },
  getAssetFromImageURL: function() {
    return N
  },
  getAssetIds: function() {
    return g
  },
  getAssetImage: function() {
    return A
  },
  getAssets: function() {
    return m
  }
}), n(315314), n(610138), n(216116), n(78328), n(815648), n(47120);
var i = n(512722),
  r = n.n(i),
  s = n(544891),
  o = n(570140),
  a = n(430449),
  l = n(710845),
  u = n(134432),
  _ = n(981631);
let d = "https://i.scdn.co/image/",
  c = (e, t, n) => "https://static-cdn.jtvnw.net/previews-ttv/live_user_".concat(e, "-").concat(t, "x").concat(n, ".jpg"),
  E = /https:\/\/static-cdn\.jtvnw\.net\/previews-ttv\/live_user_(.+)-\{width\}x\{height\}.jpg/,
  I = e => "https://i.ytimg.com/vi/".concat(e, "/hqdefault_live.jpg"),
  T = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/hqdefault_live\.jpg/,
  h = {
    [_.ABu.SPOTIFY]: {
      deserialize: e => "".concat(d).concat(encodeURIComponent(e)),
      serialize: e => e.split(d)[1]
    },
    [_.ABu.TWITCH]: {
      deserialize: (e, t) => c(encodeURIComponent(e), t[0], t[1]),
      serialize: e => {
        let t = e.match(E);
        return null != t ? t[1] : null
      }
    },
    [_.ABu.YOUTUBE]: {
      deserialize: e => I(encodeURIComponent(e)),
      serialize: e => {
        let t = e.match(T);
        return null != t ? t[1] : null
      }
    },
    mp: {
      deserialize: e => (r()(null != window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT, "MEDIA_PROXY_ENDPOINT not configured"), new URL(e, location.protocol + window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT).toString()),
      serialize: e => e
    }
  },
  S = {};
async function f(e) {
  let {
    body: t
  } = await s.tn.get({
    url: _.ANM.APPLICATION_ASSETS(e),
    oldFormErrors: !0
  });
  return o.Z.dispatch({
    type: "APPLICATION_ASSETS_UPDATE",
    applicationId: e,
    assets: t
  }), a.Z.getApplicationAssets(e)
}

function N(e, t) {
  let n = h[e].serialize(t);
  return n ? "".concat(e, ":").concat(n.toString()) : null
}

function A(e, t, n) {
  if (null != t && t.includes(":")) {
    let [e, i] = t.split(":");
    if (e === _.ABu.TWITCH) {
      if (null == n || "number" == typeof n) {
        new l.Z("ApplicationAssetUtils").warn("getAssetImage: size must === [number, number] for Twitch");
        return
      }
      return h[_.ABu.TWITCH].deserialize(i, n)
    }
    return Object.prototype.hasOwnProperty.call(h, e) ? h[e].deserialize(i) : void 0
  }
  if (null == e || null == t) return;
  let i = Array.isArray(n) ? Math.max(...n) : n,
    r = "number" == typeof i ? "?size=".concat((0, u.oO)(i)) : "";
  return null != window.GLOBAL_ENV.CDN_HOST ? "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.CDN_HOST, "/app-assets/").concat(e, "/").concat(t, ".png").concat(r) : "".concat((0, s.K0)(), "/applications/").concat(e, "/app-assets/").concat(t, ".png").concat(r)
}
async function m(e) {
  let t = await

  function(e) {
    var t;
    let n = a.Z.getApplicationAssets(e);
    return null == n || (t = n.lastUpdated, Date.now() - t > 36e5) ? f(e) : Promise.resolve(n)
  }(e);
  return null == t ? void 0 : t.assets
}
async function O(e, t) {
  let n = t.filter(e => null != e && !Object.prototype.hasOwnProperty.call(S, e) && null == S[e]);
  if (0 === n.length) return;
  let {
    body: i
  } = await s.tn.post({
    url: _.ANM.APPLICATION_EXTERNAL_ASSETS(e),
    body: {
      urls: n
    },
    oldFormErrors: !0
  });
  for (let {
      url: e,
      external_asset_path: t
    }
    of i) S[e] = t
}

function R(e, t) {
  let n = 0;
  if (e.filter(e => (null == e ? void 0 : e.startsWith("http:")) || (null == e ? void 0 : e.startsWith("https:"))).length > 0)
    for (let i = 0; i < e.length; i++) {
      let r = e[i];
      if (null == r) continue;
      let s = Object.prototype.hasOwnProperty.call(S, r) ? S[r] : void 0;
      null != s && (t[i] = N("mp", s), n++)
    }
  return n === e.length
}

function C(e, t, n, i) {
  let r = !1;
  for (let s = 0; s < e.length; s++) {
    let o = e[s];
    if (null == o || null != t[s]) continue;
    let a = Object.prototype.hasOwnProperty.call(n, o) && n[o];
    if (!a) {
      if (null == i || i <= 0) {
        t[s] = null;
        continue
      }
      r = !0
    }
    t[s] = a.id
  }
  return r
}
async function p(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
  o.Z.dispatch({
    type: "APPLICATION_ASSETS_FETCH",
    applicationId: e
  });
  let i = [],
    r = t.filter(e => (null == e ? void 0 : e.startsWith("http:")) || (null == e ? void 0 : e.startsWith("https:")));
  return (r.length > 0 && await O(e, r), R(t, i)) ? (o.Z.dispatch({
    type: "APPLICATION_ASSETS_FETCH_SUCCESS",
    applicationId: e
  }), i) : C(t, i, await m(e), n) ? f(e).then(() => p(e, t, n - 1)) : (o.Z.dispatch({
    type: "APPLICATION_ASSETS_FETCH_SUCCESS",
    applicationId: e
  }), i)
}

function g(e, t) {
  let n = [];
  if (R(t, n)) return n;
  let i = a.Z.getApplicationAssets(e);
  return null == i ? n : (C(t, n, i), n)
}