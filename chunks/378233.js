"use strict";
n.d(t, {
  B0: function() {
    return v
  },
  Hc: function() {
    return y
  },
  J8: function() {
    return U
  },
  Q6: function() {
    return g
  },
  V9: function() {
    return w
  },
  WD: function() {
    return P
  },
  X_: function() {
    return D
  },
  Zt: function() {
    return O
  },
  Zv: function() {
    return C
  },
  _V: function() {
    return p
  },
  cv: function() {
    return G
  },
  jl: function() {
    return b
  },
  sM: function() {
    return L
  },
  z: function() {
    return M
  }
}), n(411104);
var i = n(606301),
  r = n(134432),
  s = n(430824),
  o = n(117530),
  a = n(768581),
  l = n(358085),
  u = n(913663),
  _ = n(373228),
  d = n(611480),
  c = n(981631);
let {
  API_ENDPOINT: E,
  MEDIA_PROXY_ENDPOINT: I,
  PROJECT_ENV: T,
  ASSET_ENDPOINT: h,
  CDN_HOST: S
} = window.GLOBAL_ENV, f = Object.values(_.og), N = decodeURIComponent(c.ANM.STICKER_ASSET("[\\d]+", "(".concat(f.join("|"), ")"))), A = RegExp("(".concat(location.protocol).concat(h, "|").concat(location.protocol).concat(I, ")(").concat(N, ")"), "ig"), m = RegExp("".concat(location.protocol).concat(E, "(").concat(N, ")"), "ig"), O = e => {
  if (null != e.cover_sticker_id) {
    let t = e.stickers.find(t => t.id === e.cover_sticker_id);
    if (null != t) return t
  }
  return e.stickers[0]
}, R = e => {
  switch (e) {
    case _.u3.PNG:
      return a.$k ? _.og.WEBP : _.og.PNG;
    case _.u3.APNG:
      return _.og.APNG;
    case _.u3.LOTTIE:
      return _.og.LOTTIE;
    case _.u3.GIF:
      return _.og.GIF;
    default:
      throw Error("Unexpected format type: ".concat(e))
  }
}, C = e => {
  switch (e) {
    case "application/json":
      return _.u3.LOTTIE;
    case "image/apng":
      return _.u3.APNG;
    case "image/png":
    case "image/webp":
      return _.u3.PNG;
    case "image/gif":
      return _.u3.GIF;
    default:
      throw Error("Unexpected file type: ".concat(e))
  }
}, p = e => null == e ? null : "".concat(e.name, ".").concat(R(e.format_type)), g = function(e) {
  let {
    isPreview: t = !1,
    size: n = d.lE
  } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  if (null == e.format_type) return null;
  let i = e.format_type;
  e.format_type === _.u3.GIF && t && (i = _.u3.PNG);
  let s = c.ANM.STICKER_ASSET(e.id, R(i));
  if ("development" !== T) {
    if (e.format_type === _.u3.LOTTIE) return "".concat(location.protocol).concat(h).concat(s);
    let i = e.format_type === _.u3.APNG && t && !(0, l.isAndroid)() ? "&passthrough=false" : "",
      o = Math.min(2, (0, r.x_)());
    return "".concat(location.protocol).concat(I).concat(s, "?size=").concat((0, r.oO)(n * o)).concat(i)
  }
  return "".concat(location.protocol).concat(E).concat(s)
}, L = (e, t) => {
  let n;
  let i = e.banner_asset_id;
  if (null == i) return null;
  let s = a.$k ? "webp" : "png";
  return n = null != S ? "".concat(location.protocol, "//").concat(S, "/app-assets/").concat(d.Ks, "/store/").concat(i, ".").concat(s) : "".concat(location.protocol).concat(E).concat(c.ANM.STORE_ASSET(d.Ks, i, s)), null != t && (n += "?size=".concat((0, r.oO)(t))), n
}, v = e => e.match("development" !== T ? A : m), D = e => e.stickers.some(e => {
  let {
    format_type: t
  } = e;
  return t === _.u3.APNG || t === _.u3.LOTTIE || t === _.u3.GIF
}), M = e => ({
  type: _.Ih.PACK,
  id: e.id,
  name: e.name,
  stickers: e.stickers,
  previewSticker: O(e)
}), P = (e, t) => e === d.yr.ANIMATE_ON_INTERACTION ? t : e !== d.yr.NEVER_ANIMATE, y = (e, t, n, r) => {
  if (o.Z.getUploadCount(n, r) > 0) return !0;
  let s = u.Z.getStickerPreview(n, r);
  if (null != s && s.length > 0) return !0;
  switch (e) {
    case _.V0.STICKER_PICKER:
      return "" !== t.trim();
    case _.V0.AUTOCOMPLETE:
    case _.V0.EXPRESSION_SUGGESTIONS:
      return (0, i.wN)(t).length > 1;
    default:
      return !1
  }
}, U = e => e.type === _.n0.GUILD, b = e => e.type === _.n0.STANDARD, G = e => e.stickerItems.length > 0 ? e.stickerItems : e.stickers.length > 0 ? e.stickers : [], w = e => {
  if (null === e) return !1;
  let t = e.guild_id;
  return void 0 !== s.Z.getGuild(t)
}