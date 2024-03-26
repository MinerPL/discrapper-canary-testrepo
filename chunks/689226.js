"use strict";
n.r(t), n.d(t, {
  getRoleIconData: function() {
    return c
  },
  replaceRoleIconSourceSize: function() {
    return f
  },
  isRoleIconAssetUrl: function() {
    return h
  },
  canGuildUseRoleIcons: function() {
    return _
  }
}), n("781738");
var r = n("867805"),
  i = n("407063"),
  s = n("315102"),
  o = n("773336"),
  a = n("49111");
let l = "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.CDN_HOST, "/role-icons"),
  u = "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT),
  d = (0, o.isAndroid)(),
  c = (e, t) => {
    if (null == e) return null;
    let n = null != e.unicodeEmoji ? r.default.getByName(r.default.convertSurrogateToName(e.unicodeEmoji, !1)) : void 0;
    return {
      customIconSrc: E(e, t),
      unicodeEmoji: null != n ? n : void 0
    }
  },
  f = (e, t) => e.replace(/size=[0-9]+/g, "size=".concat((0, i.getBestMediaProxySize)(t * (0, i.getDevicePixelRatio)()))),
  E = (e, t) => {
    let {
      id: n,
      icon: r
    } = e;
    if (null == r) return;
    if (r.startsWith("data:")) return r;
    let o = s.SUPPORTS_WEBP ? "webp" : "png",
      c = "",
      f = "quality=lossless";
    return (null != t && (c = "size=" + (0, i.getBestMediaProxySize)(t * (0, i.getDevicePixelRatio)()), f = d ? "" : "&" + f), null != window.GLOBAL_ENV.CDN_HOST) ? "".concat(l, "/").concat(n, "/").concat(r, ".").concat(o, "?").concat(c).concat(f) : "".concat(u).concat(a.Endpoints.ROLE_ICON(n, r), "?").concat(c)
  },
  h = e => e.startsWith(l) || e.startsWith("".concat(u, "/roles")) && e.includes("/icons/"),
  _ = (e, t) => {
    var n;
    let r = (null == t ? void 0 : null === (n = t.tags) || void 0 === n ? void 0 : n.subscription_listing_id) != null;
    return r || e.features.has(a.GuildFeatures.ROLE_ICONS)
  }