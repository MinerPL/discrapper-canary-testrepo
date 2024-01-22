"use strict";
n.r(t), n.d(t, {
  getStickerPackPreviewSticker: function() {
    return I
  },
  getStickerFormatTypeFromFileType: function() {
    return A
  },
  getFilenameForSticker: function() {
    return y
  },
  getStickerAssetUrl: function() {
    return N
  },
  getStickerPackBannerAssetUrl: function() {
    return R
  },
  isStickerAssetUrl: function() {
    return O
  },
  isStickerPackAnimated: function() {
    return D
  },
  createStickerPackCategory: function() {
    return P
  },
  shouldAnimateSticker: function() {
    return b
  },
  shouldAttachSticker: function() {
    return L
  },
  isGuildSticker: function() {
    return M
  },
  isStandardSticker: function() {
    return U
  },
  getMessageStickers: function() {
    return k
  },
  isAvailableGuildSticker: function() {
    return w
  }
}), n("70102");
var i = n("171209"),
  s = n("407063"),
  r = n("305961"),
  a = n("585722"),
  o = n("315102"),
  l = n("773336"),
  u = n("328511"),
  d = n("161585"),
  c = n("560241"),
  f = n("49111");
let {
  API_ENDPOINT: _,
  MEDIA_PROXY_ENDPOINT: h,
  PROJECT_ENV: g,
  ASSET_ENDPOINT: m,
  CDN_HOST: E
} = window.GLOBAL_ENV, p = Object.values(d.StickerExtensions), v = decodeURIComponent(f.Endpoints.STICKER_ASSET("[\\d]+", "(".concat(p.join("|"), ")"))), S = RegExp("(".concat(location.protocol).concat(m, "|").concat(location.protocol).concat(h, ")(").concat(v, ")"), "ig"), T = RegExp("".concat(location.protocol).concat(_, "(").concat(v, ")"), "ig"), I = e => {
  if (null != e.cover_sticker_id) {
    let t = e.stickers.find(t => t.id === e.cover_sticker_id);
    if (null != t) return t
  }
  return e.stickers[0]
}, C = e => {
  switch (e) {
    case d.StickerFormat.PNG:
      return o.SUPPORTS_WEBP ? d.StickerExtensions.WEBP : d.StickerExtensions.PNG;
    case d.StickerFormat.APNG:
      return d.StickerExtensions.APNG;
    case d.StickerFormat.LOTTIE:
      return d.StickerExtensions.LOTTIE;
    case d.StickerFormat.GIF:
      return d.StickerExtensions.GIF;
    default:
      throw Error("Unexpected format type: ".concat(e))
  }
}, A = e => {
  switch (e) {
    case "application/json":
      return d.StickerFormat.LOTTIE;
    case "image/apng":
      return d.StickerFormat.APNG;
    case "image/png":
    case "image/webp":
      return d.StickerFormat.PNG;
    case "image/gif":
      return d.StickerFormat.GIF;
    default:
      throw Error("Unexpected file type: ".concat(e))
  }
}, y = e => null == e ? null : "".concat(e.name, ".").concat(C(e.format_type)), N = function(e) {
  let {
    isPreview: t = !1,
    size: n = c.DEFAULT_STICKER_DIMENSIONS
  } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  if (null == e.format_type) return null;
  let i = f.Endpoints.STICKER_ASSET(e.id, C(e.format_type));
  if ("development" !== g) {
    if (e.format_type === d.StickerFormat.LOTTIE) return "".concat(location.protocol).concat(m).concat(i);
    let r = e.format_type === d.StickerFormat.APNG && t && !(0, l.isAndroid)() ? "&passthrough=false" : "",
      a = Math.min(2, (0, s.getDevicePixelRatio)());
    return "".concat(location.protocol).concat(h).concat(i, "?size=").concat((0, s.getBestMediaProxySize)(n * a)).concat(r)
  }
  return "".concat(location.protocol).concat(_).concat(i)
}, R = (e, t) => {
  let n;
  let i = e.banner_asset_id;
  if (null == i) return null;
  let r = o.SUPPORTS_WEBP ? "webp" : "png";
  return n = null != E ? "".concat(location.protocol, "//").concat(E, "/app-assets/").concat(c.STICKER_APPLICATION_ID, "/store/").concat(i, ".").concat(r) : "".concat(location.protocol).concat(_).concat(f.Endpoints.STORE_ASSET(c.STICKER_APPLICATION_ID, i, r)), null != t && (n += "?size=".concat((0, s.getBestMediaProxySize)(t))), n
}, O = e => e.match("development" !== g ? S : T), D = e => e.stickers.some(e => {
  let {
    format_type: t
  } = e;
  return t === d.StickerFormat.APNG || t === d.StickerFormat.LOTTIE || t === d.StickerFormat.GIF
}), P = e => ({
  type: d.StickerCategoryTypes.PACK,
  id: e.id,
  name: e.name,
  stickers: e.stickers,
  previewSticker: I(e)
}), b = (e, t) => e === c.StickerAnimationSettings.ANIMATE_ON_INTERACTION ? t : e !== c.StickerAnimationSettings.NEVER_ANIMATE, L = (e, t, n, s) => {
  let r = a.default.getUploadCount(n, s);
  if (r > 0) return !0;
  let o = u.default.getStickerPreview(n, s),
    l = null != o && o.length > 0;
  if (l) return !0;
  switch (e) {
    case d.StickerSelectLocation.STICKER_PICKER:
      return "" !== t.trim();
    case d.StickerSelectLocation.AUTOCOMPLETE:
    case d.StickerSelectLocation.EXPRESSION_SUGGESTIONS:
      return (0, i.getQueriesFromUserInput)(t).length > 1;
    default:
      return !1
  }
}, M = e => e.type === d.MetaStickerType.GUILD, U = e => e.type === d.MetaStickerType.STANDARD, k = e => e.stickerItems.length > 0 ? e.stickerItems : e.stickers.length > 0 ? e.stickers : [], w = e => {
  if (null === e) return !1;
  let t = e.guild_id;
  return void 0 !== r.default.getGuild(t)
}