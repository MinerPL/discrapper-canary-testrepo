"use strict";
n.d(t, {
  _b: function() {
    return T
  },
  o: function() {
    return c
  },
  zt: function() {
    return I
  },
  zy: function() {
    return d
  }
}), n(757143);
var i = n(633302),
  r = n(134432),
  s = n(768581),
  o = n(358085),
  a = n(981631);
let l = "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.CDN_HOST, "/role-icons"),
  u = "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT),
  _ = (0, o.isAndroid)(),
  d = (e, t) => {
    if (null == e) return null;
    let n = null != e.unicodeEmoji ? i.ZP.getByName(i.ZP.convertSurrogateToName(e.unicodeEmoji, !1)) : void 0;
    return {
      customIconSrc: E(e, t),
      unicodeEmoji: null != n ? n : void 0
    }
  },
  c = (e, t) => e.replace(/size=[0-9]+/g, "size=".concat((0, r.oO)(t * (0, r.x_)()))),
  E = (e, t) => {
    let {
      id: n,
      icon: i
    } = e;
    if (null == i) return;
    if (i.startsWith("data:")) return i;
    let o = s.$k ? "webp" : "png",
      d = "",
      c = "quality=lossless";
    return (null != t && (d = "size=" + (0, r.oO)(t * (0, r.x_)()), c = _ ? "" : "&" + c), null != window.GLOBAL_ENV.CDN_HOST) ? "".concat(l, "/").concat(n, "/").concat(i, ".").concat(o, "?").concat(d).concat(c) : "".concat(u).concat(a.ANM.ROLE_ICON(n, i), "?").concat(d)
  },
  I = e => e.startsWith(l) || e.startsWith("".concat(u, "/roles")) && e.includes("/icons/"),
  T = (e, t) => {
    var n;
    return (null == t ? void 0 : null === (n = t.tags) || void 0 === n ? void 0 : n.subscription_listing_id) != null || e.features.has(a.oNc.ROLE_ICONS)
  }