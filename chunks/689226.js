"use strict";
n.r(t), n.d(t, {
  getRoleIconData: function() {
    return d
  },
  replaceRoleIconSourceSize: function() {
    return f
  },
  isRoleIconAssetUrl: function() {
    return v
  },
  canGuildUseRoleIcons: function() {
    return m
  }
}), n("781738");
var i = n("867805"),
  r = n("407063"),
  l = n("315102"),
  s = n("773336"),
  o = n("49111");
let u = "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.CDN_HOST, "/role-icons"),
  a = "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT),
  c = (0, s.isAndroid)(),
  d = (e, t) => {
    if (null == e) return null;
    let n = null != e.unicodeEmoji ? i.default.getByName(i.default.convertSurrogateToName(e.unicodeEmoji, !1)) : void 0;
    return {
      customIconSrc: h(e, t),
      unicodeEmoji: null != n ? n : void 0
    }
  },
  f = (e, t) => e.replace(/size=[0-9]+/g, "size=".concat((0, r.getBestMediaProxySize)(t * (0, r.getDevicePixelRatio)()))),
  h = (e, t) => {
    let {
      id: n,
      icon: i
    } = e;
    if (null == i) return;
    if (i.startsWith("data:")) return i;
    let s = l.SUPPORTS_WEBP ? "webp" : "png",
      d = "",
      f = "quality=lossless";
    return (null != t && (d = "size=" + (0, r.getBestMediaProxySize)(t * (0, r.getDevicePixelRatio)()), f = c ? "" : "&" + f), null != window.GLOBAL_ENV.CDN_HOST) ? "".concat(u, "/").concat(n, "/").concat(i, ".").concat(s, "?").concat(d).concat(f) : "".concat(a).concat(o.Endpoints.ROLE_ICON(n, i), "?").concat(d)
  },
  v = e => e.startsWith(u) || e.startsWith("".concat(a, "/roles")) && e.includes("/icons/"),
  m = (e, t) => {
    var n;
    let i = (null == t ? void 0 : null === (n = t.tags) || void 0 === n ? void 0 : n.subscription_listing_id) != null;
    return i || e.features.has(o.GuildFeatures.ROLE_ICONS)
  }