"use strict";
let i;
n.d(t, {
  $k: function() {
    return h
  },
  CA: function() {
    return C
  },
  F8: function() {
    return V
  },
  JM: function() {
    return R
  },
  NZ: function() {
    return g
  },
  aN: function() {
    return p
  },
  ay: function() {
    return x
  },
  gT: function() {
    return N
  },
  ov: function() {
    return O
  },
  pK: function() {
    return T
  },
  rI: function() {
    return w
  },
  tp: function() {
    return L
  },
  xR: function() {
    return B
  }
}), n(315314), n(610138), n(216116), n(78328), n(815648), n(47120);
var r = n(654861),
  s = n.n(r),
  o = n(664751),
  a = n(864106),
  l = n(134432),
  u = n(930153),
  _ = n(358085),
  d = n(709054),
  c = n(981631),
  E = n(377668),
  I = n(970952);
let T = (i = n(426563).Z).DEFAULT_AVATARS;
i.DEFAULT_GROUP_DM_AVATARS;
let h = i.canUseWebp(),
  S = (0, _.isAndroid)();

function f(e) {
  let t, {
    endpoint: n,
    path: i,
    id: r,
    hash: s,
    size: a,
    canAnimate: u = !1,
    keepAspectRatio: _,
    format: d = null
  } = e;
  if (null == r || null == s) return;
  let c = null != d ? d : u && B(s) ? "gif" : "jpg";
  u && x(s) && (c = "mp4");
  let E = window.GLOBAL_ENV.CDN_HOST;
  if (null != E ? ("jpg" === c && (c = h ? "webp" : "png"), t = "".concat(location.protocol, "//").concat(E, "/").concat(i, "/").concat(r, "/").concat(s, ".").concat(c)) : t = location.protocol + window.GLOBAL_ENV.API_ENDPOINT + n(r, s, c), "mp4" === c) return t;
  let I = {};
  return null != a && (I.size = (0, l.oO)(a * (0, l.x_)())), null != _ && (I.keep_aspect_ratio = _), t + "?".concat(o.stringify(I))
}

function N(e) {
  let {
    id: t,
    animated: n,
    size: i,
    forcePNG: r = !1
  } = e, s = h && !r ? "webp" : "png";
  return null != window.GLOBAL_ENV.CDN_HOST ? "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.CDN_HOST, "/emojis/").concat(t, ".").concat(n ? "gif" : s, "?size=").concat((0, l.oO)(i * (0, l.x_)(), S)).concat(h && !S ? "&quality=lossless" : "") : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + c.ANM.EMOJI(t, n ? "gif" : s)
}

function A(e, t) {
  if (null == e && null == t) return T[0];
  let n = (0, u.Lk)(t, 0);
  return n > 0 ? T[n % 5] : null != e ? T[s()(e).shiftRight(22).mod(6).toJSNumber()] : T[0]
}

function m(e) {
  let {
    id: t,
    avatar: n,
    discriminator: r,
    bot: s
  } = e, o = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c.IXf, l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
  if (s && t !== E.fL) {
    let e = i.BOT_AVATARS[n];
    if (e) return e;
    if (null == n && "0000" === r) return T[0]
  }
  return f({
    endpoint: c.ANM.AVATAR,
    path: "avatars",
    id: t,
    hash: n,
    size: a,
    canAnimate: o,
    format: l
  })
}

function O(e) {
  var t;
  let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c.IXf,
    r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
  return null !== (t = m(e, n, i, r)) && void 0 !== t ? t : A(e.id, e.discriminator)
}

function R(e) {
  let t, {
      guildId: n,
      userId: i,
      avatar: r,
      canAnimate: s = !1,
      size: a = c.IXf
    } = e,
    u = s && B(r) ? "gif" : "jpg",
    {
      CDN_HOST: _
    } = window.GLOBAL_ENV;
  return null != _ ? ("jpg" === u && (u = h ? "webp" : "png"), t = "".concat(location.protocol, "//").concat(_).concat(c.ANM.GUILD_MEMBER_AVATAR(n, i, r, u))) : t = location.protocol + window.GLOBAL_ENV.API_ENDPOINT + c.ANM.GUILD_MEMBER_AVATAR(n, i, r, u), t + "?".concat(o.stringify({
    size: (0, l.oO)(a * (0, l.x_)())
  }))
}

function C(e) {
  let {
    userId: t,
    avatar: n,
    guildId: i
  } = e, r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  return null == n ? null : R({
    userId: t,
    avatar: n,
    guildId: i,
    canAnimate: r
  })
}

function p(e) {
  let t, {
    id: n,
    banner: i,
    canAnimate: r,
    size: s
  } = e;
  if (null == i) return;
  let o = window.GLOBAL_ENV.CDN_HOST,
    a = r && B(i) ? "gif" : "png";
  return t = (null != o ? "".concat(location.protocol, "//").concat(o, "/banners/").concat(n, "/").concat(i, ".").concat(a) : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + c.ANM.USER_BANNER(n, i, a)) + "?size=".concat((0, l.oO)(s * (0, l.x_)()))
}

function g(e) {
  let {
    avatarDecoration: t,
    size: n,
    canAnimate: i = !1
  } = e;
  if (null == t) return;
  if (/^data:/.test(t.asset)) return t.asset;
  let {
    CDN_HOST: r,
    API_ENDPOINT: s
  } = window.GLOBAL_ENV, o = c.ANM.AVATAR_DECORATION_PRESETS(t.asset), u = new URL(null != r ? "".concat(location.protocol, "//").concat(r).concat(o) : "".concat(location.protocol).concat(s).concat(o));
  return u.searchParams.set("size", "".concat((0, l.oO)(n * (0, l.x_)()))), u.searchParams.set("passthrough", "".concat(i && (0, a.ae)(t.asset))), u.toString()
}

function L(e) {
  let t, {
    id: n,
    guildId: i,
    banner: r,
    canAnimate: s,
    size: o
  } = e;
  if (null == r || null == i) return;
  let a = window.GLOBAL_ENV.CDN_HOST,
    u = s && B(r) ? "gif" : "png",
    _ = c.ANM.GUILD_MEMBER_BANNER(i, n, r, u);
  return t = (null != a ? "".concat(location.protocol, "//").concat(a).concat(_) : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + _) + "?size=".concat((0, l.oO)(o * (0, l.x_)()))
}

function v(e) {
  let t, {
    id: n,
    splash: i,
    size: r
  } = e;
  if (null == i) return null;
  null == r && (r = window.screen.width * (0, l.x_)()), r = (0, l.oO)(r);
  let s = window.GLOBAL_ENV.CDN_HOST;
  return t = (null != s ? "".concat(location.protocol, "//").concat(s, "/splashes/").concat(n, "/").concat(i, ".jpg") : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + c.ANM.GUILD_SPLASH(n, i)) + "?size=".concat(r)
}

function D(e) {
  let t, {
      id: n,
      banner: i
    } = e,
    r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  if (null == i) return null;
  let s = (0, l.oO)(240 * (0, l.x_)()),
    o = r && B(i) ? "gif" : h ? "webp" : "jpg",
    a = window.GLOBAL_ENV.CDN_HOST;
  return t = (null != a ? "".concat(location.protocol, "//").concat(a, "/banners/").concat(n, "/").concat(i, ".").concat(o) : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + c.ANM.GUILD_BANNER(n, i, o)) + "?size=".concat(s), "jpg" === o && (t += "&quality=lossless"), t
}

function M(e) {
  let t, {
    id: n,
    homeHeader: i
  } = e;
  if (null == i) return null;
  let r = (0, l.oO)(1096 * (0, l.x_)()),
    s = window.GLOBAL_ENV.CDN_HOST;
  return t = (null != s ? "".concat(location.protocol, "//").concat(s, "/home-headers/").concat(n, "/").concat(i, ".png") : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + c.ANM.GUILD_HOME_HEADER(n, i)) + "?size=".concat(r)
}

function P(e) {
  let t, {
    id: n,
    splash: i,
    size: r
  } = e;
  if (null == i) return null;
  null == r && (r = window.screen.width * (0, l.x_)()), r = (0, l.oO)(r);
  let s = window.GLOBAL_ENV.CDN_HOST;
  return t = (null != s ? "".concat(location.protocol, "//").concat(s, "/discovery-splashes/").concat(n, "/").concat(i, ".jpg") : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + c.ANM.GUILD_DISCOVERY_SPLASH(n, i)) + "?size=".concat(r)
}

function y(e) {
  let {
    id: t,
    icon: n,
    size: i,
    canAnimate: r = !1
  } = e;
  return f({
    endpoint: c.ANM.GUILD_ICON,
    path: "icons",
    id: t,
    hash: n,
    size: i,
    canAnimate: r
  })
}

function U(e) {
  let {
    id: t,
    icon: n,
    size: i = c.IXf,
    canAnimate: r = !1
  } = e;
  return f({
    endpoint: c.ANM.GUILD_TEMPLATE_ICON,
    path: "guild-templates",
    id: t,
    hash: n,
    size: i,
    canAnimate: r
  })
}

function b(e) {
  let {
    id: t,
    icon: n,
    size: i = c.IXf,
    bot: r,
    botIconFirst: s,
    fallbackAvatar: o = !0
  } = e;
  if (null != r && s) {
    let e = m(r, !1, i);
    if (null != e) return e
  }
  if (null != n) return f({
    endpoint: c.ANM.APPLICATION_ICON,
    path: "app-icons",
    id: t,
    hash: n,
    size: i,
    canAnimate: !1
  });
  if (null != r) {
    let e = m(r, !1, i);
    if (null != e) return e
  }
  if (o) return I
}

function G(e) {
  let {
    id: t,
    hash: n,
    size: i = c.IXf,
    keepAspectRatio: r = !1,
    format: s
  } = e;
  return f({
    endpoint: c.ANM.APPLICATION_ICON,
    path: "app-icons",
    id: t,
    hash: n,
    size: i,
    canAnimate: !1,
    keepAspectRatio: r,
    format: s
  })
}

function w(e) {
  let {
    userId: t,
    assetId: n,
    assetHash: i,
    size: r,
    canAnimate: s = !0
  } = e;
  return f({
    endpoint: (e, r, s) => c.ANM.VIDEO_FILTER_ASSET_STORAGE(t, n, i, s),
    path: "video-filter-assets/".concat(t),
    id: n,
    hash: i,
    size: r,
    canAnimate: s
  })
}

function k(e) {
  var t, n, r;
  let {
    id: s,
    icon: o,
    applicationId: a,
    size: l
  } = e;
  if (null != a) return null !== (t = b({
    id: a,
    icon: o,
    size: l
  })) && void 0 !== t ? t : i.DEFAULT_CHANNEL_ICON;
  return null !== (n = f({
    endpoint: c.ANM.CHANNEL_ICON,
    path: "channel-icons",
    id: s,
    hash: o,
    canAnimate: !1,
    size: l
  })) && void 0 !== n ? n : (r = s, i.DEFAULT_GROUP_DM_AVATARS[d.default.extractTimestamp(r) % i.DEFAULT_GROUP_DM_AVATARS.length])
}

function B(e) {
  return null != e && e.startsWith("a_")
}

function x(e) {
  return null != e && e.startsWith("v_")
}

function V(e) {
  return null != e && B(function(e) {
    let t;
    try {
      return (t = new URL(e).pathname).split("/").pop()
    } catch (e) {
      return null
    }
  }(e))
}

function Z(e) {
  return "number" == typeof e ? e : {
    uri: null != e ? e : void 0
  }
}
t.ZP = {
  getUserAvatarURL: O,
  getDefaultAvatarURL: A,
  getGuildMemberAvatarURL: C,
  getGuildMemberAvatarURLSimple: R,
  getGuildMemberAvatarSource: function(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
      i = C(e, n);
    return null != i ? Z(i) : t.getAvatarSource(e.guildId, n)
  },
  getGuildMemberBannerURL: L,
  getUserBannerURL: p,
  getAvatarDecorationURL: g,
  hasAnimatedGuildIcon: function(e) {
    return B(null == e ? void 0 : e.icon)
  },
  isAnimatedIconHash: B,
  getUserAvatarSource: (e, t, n) => Z(O(e, t, n)),
  getGuildIconURL: y,
  getGuildSplashURL: v,
  getGuildSplashSource: function(e) {
    return Z(v(e))
  },
  getGuildDiscoverySplashURL: P,
  getGuildDiscoverySplashSource: function(e) {
    return Z(P(e))
  },
  getGuildBannerURL: D,
  getGuildHomeHeaderURL: M,
  getResourceChannelIconURL: function(e) {
    let {
      channelId: t,
      icon: n
    } = e;
    return null == n ? null : f({
      endpoint: c.ANM.GUILD_RESOURCE_CHANNELS_ICON,
      path: "resource-channels",
      id: t,
      hash: n,
      size: c.IXf,
      canAnimate: !0
    })
  },
  getNewMemberActionIconURL: function(e) {
    let {
      channelId: t,
      icon: n
    } = e;
    return null == n ? null : f({
      endpoint: c.ANM.GUILD_NEW_MEMBER_ACTIONS_ICON,
      path: "new-member-actions",
      id: t,
      hash: n,
      size: c.IXf,
      canAnimate: !0
    })
  },
  getGuildTemplateIconURL: U,
  getChannelIconURL: k,
  getEmojiURL: N,
  getApplicationIconURL: b,
  getGameAssetURL: G,
  getVideoFilterAssetURL: w,
  getGameAssetSource: e => Z(G(e)),
  getGuildIconSource: e => Z(y(e)),
  getGuildTemplateIconSource: e => Z(U(e)),
  getGuildBannerSource(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return Z(D(e, t))
  },
  getGuildHomeHeaderSource: e => Z(M(e)),
  getChannelIconSource: e => Z(k(e)),
  getApplicationIconSource: e => Z(b(e)),
  makeSource: Z,
  getAnimatableSourceWithFallback(e, t) {
    let n = t(e);
    if (!(0, _.isAndroid)() || !e || "number" == typeof n) return n;
    {
      let e = t(!1);
      return "number" != typeof e && e.uri === n.uri ? e : [n, {
        ...e,
        isForceCached: !0
      }]
    }
  }
}