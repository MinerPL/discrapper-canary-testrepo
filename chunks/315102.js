"use strict";
let i;
n.r(t), n.d(t, {
  DEFAULT_AVATARS: function() {
    return g
  },
  SUPPORTS_WEBP: function() {
    return m
  },
  getEmojiURL: function() {
    return v
  },
  getUserAvatarURL: function() {
    return I
  },
  getGuildMemberAvatarURLSimple: function() {
    return C
  },
  getGuildMemberAvatarURL: function() {
    return A
  },
  getUserBannerURL: function() {
    return y
  },
  getAvatarDecorationURL: function() {
    return N
  },
  getGuildMemberBannerURL: function() {
    return R
  },
  getVideoFilterAssetURL: function() {
    return w
  },
  isAnimatedIconHash: function() {
    return G
  },
  isVideoAssetHash: function() {
    return F
  },
  isAnimatedImageURL: function() {
    return x
  },
  default: function() {
    return H
  }
}), n("511434"), n("313619"), n("654714"), n("287168"), n("956660"), n("222007");
var s = n("552442"),
  r = n.n(s),
  a = n("522632"),
  o = n("249654"),
  l = n("234251"),
  u = n("407063"),
  d = n("240481"),
  c = n("773336"),
  f = n("49111"),
  _ = n("680894"),
  h = n("363577");
i = n("523096").default;
let g = i.DEFAULT_AVATARS;
i.DEFAULT_GROUP_DM_AVATARS;
let m = i.canUseWebp(),
  E = (0, c.isAndroid)();

function p(e) {
  let t, {
    endpoint: n,
    path: i,
    id: s,
    hash: r,
    size: o,
    canAnimate: l = !1,
    keepAspectRatio: d,
    format: c = null
  } = e;
  if (null == s || null == r) return;
  let f = null != c ? c : l && G(r) ? "gif" : "jpg";
  l && F(r) && (f = "mp4");
  let _ = window.GLOBAL_ENV.CDN_HOST;
  if (null != _ ? ("jpg" === f && (f = m ? "webp" : "png"), t = "".concat(location.protocol, "//").concat(_, "/").concat(i, "/").concat(s, "/").concat(r, ".").concat(f)) : t = location.protocol + window.GLOBAL_ENV.API_ENDPOINT + n(s, r, f), "mp4" === f) return t;
  let h = {};
  return null != o && (h.size = (0, u.getBestMediaProxySize)(o * (0, u.getDevicePixelRatio)())), null != d && (h.keep_aspect_ratio = d), t + "?".concat(a.stringify(h))
}

function v(e) {
  let {
    id: t,
    animated: n,
    size: i,
    forcePNG: s = !1
  } = e, r = m && !s ? "webp" : "png", a = m && !E ? "&quality=lossless" : "";
  return null != window.GLOBAL_ENV.CDN_HOST ? "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.CDN_HOST, "/emojis/").concat(t, ".").concat(n ? "gif" : r, "?size=").concat((0, u.getBestMediaProxySize)(i * (0, u.getDevicePixelRatio)())).concat(a) : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + f.Endpoints.EMOJI(t, n ? "gif" : r)
}

function S(e, t) {
  if (null == e && null == t) return g[0];
  let n = (0, d.parseInteger)(t, 0);
  return n > 0 ? g[n % 5] : null != e ? g[r(e).shiftRight(22).mod(6).toJSNumber()] : g[0]
}

function T(e) {
  let {
    id: t,
    avatar: n,
    discriminator: s,
    bot: r
  } = e, a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : f.AVATAR_SIZE, l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
  if (r && t !== _.CLYDE_AI_USER_ID) {
    let e = i.BOT_AVATARS[n];
    if (e) return e;
    if (null == n && "0000" === s) return g[0]
  }
  return p({
    endpoint: f.Endpoints.AVATAR,
    path: "avatars",
    id: t,
    hash: n,
    size: o,
    canAnimate: a,
    format: l
  })
}

function I(e) {
  var t;
  let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : f.AVATAR_SIZE,
    s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
  return null !== (t = T(e, n, i, s)) && void 0 !== t ? t : S(e.id, e.discriminator)
}

function C(e) {
  let t, {
      guildId: n,
      userId: i,
      avatar: s,
      canAnimate: r = !1,
      size: o = f.AVATAR_SIZE
    } = e,
    l = r && G(s) ? "gif" : "jpg",
    {
      CDN_HOST: d
    } = window.GLOBAL_ENV;
  return null != d ? ("jpg" === l && (l = m ? "webp" : "png"), t = "".concat(location.protocol, "//").concat(d).concat(f.Endpoints.GUILD_MEMBER_AVATAR(n, i, s, l))) : t = location.protocol + window.GLOBAL_ENV.API_ENDPOINT + f.Endpoints.GUILD_MEMBER_AVATAR(n, i, s, l), t + "?".concat(a.stringify({
    size: (0, u.getBestMediaProxySize)(o * (0, u.getDevicePixelRatio)())
  }))
}

function A(e) {
  let {
    userId: t,
    avatar: n,
    guildId: i
  } = e, s = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  return null == n ? null : C({
    userId: t,
    avatar: n,
    guildId: i,
    canAnimate: s
  })
}

function y(e) {
  let t, {
    id: n,
    banner: i,
    canAnimate: s,
    size: r
  } = e;
  if (null == i) return;
  let a = window.GLOBAL_ENV.CDN_HOST,
    o = s && G(i) ? "gif" : "png";
  return t = (null != a ? "".concat(location.protocol, "//").concat(a, "/banners/").concat(n, "/").concat(i, ".").concat(o) : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + f.Endpoints.USER_BANNER(n, i, o)) + "?size=".concat((0, u.getBestMediaProxySize)(r * (0, u.getDevicePixelRatio)()))
}

function N(e) {
  let {
    avatarDecoration: t,
    size: n,
    canAnimate: i = !1
  } = e;
  if (null == t) return;
  let {
    CDN_HOST: s,
    API_ENDPOINT: r
  } = window.GLOBAL_ENV, a = f.Endpoints.AVATAR_DECORATION_PRESETS(t.asset), o = new URL(null != s ? "".concat(location.protocol, "//").concat(s).concat(a) : "".concat(location.protocol).concat(r).concat(a));
  return o.searchParams.set("size", "".concat((0, u.getBestMediaProxySize)(n * (0, u.getDevicePixelRatio)()))), o.searchParams.set("passthrough", "".concat(i && (0, l.isAnimatedAvatarDecoration)(t.asset))), o.toString()
}

function R(e) {
  let t, {
    id: n,
    guildId: i,
    banner: s,
    canAnimate: r,
    size: a
  } = e;
  if (null == s || null == i) return;
  let o = window.GLOBAL_ENV.CDN_HOST,
    l = r && G(s) ? "gif" : "png",
    d = f.Endpoints.GUILD_MEMBER_BANNER(i, n, s, l);
  return t = (null != o ? "".concat(location.protocol, "//").concat(o).concat(d) : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + d) + "?size=".concat((0, u.getBestMediaProxySize)(a * (0, u.getDevicePixelRatio)()))
}

function O(e) {
  let t, {
    id: n,
    splash: i,
    size: s
  } = e;
  if (null == i) return null;
  null == s && (s = window.screen.width * (0, u.getDevicePixelRatio)()), s = (0, u.getBestMediaProxySize)(s);
  let r = window.GLOBAL_ENV.CDN_HOST;
  return t = (null != r ? "".concat(location.protocol, "//").concat(r, "/splashes/").concat(n, "/").concat(i, ".jpg") : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + f.Endpoints.GUILD_SPLASH(n, i)) + "?size=".concat(s)
}

function D(e) {
  let t, {
      id: n,
      banner: i
    } = e,
    s = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  if (null == i) return null;
  let r = (0, u.getBestMediaProxySize)(240 * (0, u.getDevicePixelRatio)()),
    a = m ? "webp" : "jpg",
    o = s && G(i) ? "gif" : a,
    l = window.GLOBAL_ENV.CDN_HOST;
  return t = (null != l ? "".concat(location.protocol, "//").concat(l, "/banners/").concat(n, "/").concat(i, ".").concat(o) : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + f.Endpoints.GUILD_BANNER(n, i, o)) + "?size=".concat(r), "jpg" === o && (t += "&quality=lossless"), t
}

function P(e) {
  let t, {
    id: n,
    homeHeader: i
  } = e;
  if (null == i) return null;
  let s = (0, u.getBestMediaProxySize)(1096 * (0, u.getDevicePixelRatio)()),
    r = window.GLOBAL_ENV.CDN_HOST;
  return t = (null != r ? "".concat(location.protocol, "//").concat(r, "/home-headers/").concat(n, "/").concat(i, ".png") : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + f.Endpoints.GUILD_HOME_HEADER(n, i)) + "?size=".concat(s)
}

function b(e) {
  let t, {
    id: n,
    splash: i,
    size: s
  } = e;
  if (null == i) return null;
  null == s && (s = window.screen.width * (0, u.getDevicePixelRatio)()), s = (0, u.getBestMediaProxySize)(s);
  let r = window.GLOBAL_ENV.CDN_HOST;
  return t = (null != r ? "".concat(location.protocol, "//").concat(r, "/discovery-splashes/").concat(n, "/").concat(i, ".jpg") : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + f.Endpoints.GUILD_DISCOVERY_SPLASH(n, i)) + "?size=".concat(s)
}

function L(e) {
  let {
    id: t,
    icon: n,
    size: i,
    canAnimate: s = !1
  } = e;
  return p({
    endpoint: f.Endpoints.GUILD_ICON,
    path: "icons",
    id: t,
    hash: n,
    size: i,
    canAnimate: s
  })
}

function M(e) {
  let {
    id: t,
    icon: n,
    size: i = f.AVATAR_SIZE,
    canAnimate: s = !1
  } = e;
  return p({
    endpoint: f.Endpoints.GUILD_TEMPLATE_ICON,
    path: "guild-templates",
    id: t,
    hash: n,
    size: i,
    canAnimate: s
  })
}

function U(e) {
  let {
    id: t,
    icon: n,
    size: i = f.AVATAR_SIZE,
    bot: s,
    botIconFirst: r,
    fallbackAvatar: a = !0
  } = e;
  if (null != s && r) {
    let e = T(s, !1, i);
    if (null != e) return e
  }
  if (null != n) return p({
    endpoint: f.Endpoints.APPLICATION_ICON,
    path: "app-icons",
    id: t,
    hash: n,
    size: i,
    canAnimate: !1
  });
  if (null != s) {
    let e = T(s, !1, i);
    if (null != e) return e
  }
  if (a) return h
}

function k(e) {
  let {
    id: t,
    hash: n,
    size: i = f.AVATAR_SIZE,
    keepAspectRatio: s = !1
  } = e;
  return p({
    endpoint: f.Endpoints.APPLICATION_ICON,
    path: "app-icons",
    id: t,
    hash: n,
    size: i,
    canAnimate: !1,
    keepAspectRatio: s
  })
}

function w(e) {
  let {
    userId: t,
    assetId: n,
    assetHash: i,
    size: s,
    canAnimate: r = !0
  } = e;
  return p({
    endpoint: (e, s, r) => f.Endpoints.VIDEO_FILTER_ASSET_STORAGE(t, n, i, r),
    path: "video-filter-assets/".concat(t),
    id: n,
    hash: i,
    size: s,
    canAnimate: r
  })
}

function V(e) {
  var t, n, s;
  let {
    id: r,
    icon: a,
    applicationId: l,
    size: u
  } = e;
  if (null != l) return null !== (t = U({
    id: l,
    icon: a,
    size: u
  })) && void 0 !== t ? t : i.DEFAULT_CHANNEL_ICON;
  return null !== (n = p({
    endpoint: f.Endpoints.CHANNEL_ICON,
    path: "channel-icons",
    id: r,
    hash: a,
    canAnimate: !1,
    size: u
  })) && void 0 !== n ? n : (s = r, i.DEFAULT_GROUP_DM_AVATARS[o.default.extractTimestamp(s) % i.DEFAULT_GROUP_DM_AVATARS.length])
}

function G(e) {
  return null != e && e.startsWith("a_")
}

function F(e) {
  return null != e && e.startsWith("v_")
}

function x(e) {
  return null != e && G(function(e) {
    let t;
    try {
      {
        let n = new URL(e);
        t = n.pathname
      }
      let n = t.split("/");
      return n.pop()
    } catch (e) {
      return null
    }
  }(e))
}

function B(e) {
  return "number" == typeof e ? e : {
    uri: null != e ? e : void 0
  }
}
var H = {
  getUserAvatarURL: I,
  getDefaultAvatarURL: S,
  getGuildMemberAvatarURL: A,
  getGuildMemberAvatarURLSimple: C,
  getGuildMemberAvatarSource: function(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
      i = A(e, n);
    return null != i ? B(i) : t.getAvatarSource(e.guildId, n)
  },
  getGuildMemberBannerURL: R,
  getUserBannerURL: y,
  getAvatarDecorationURL: N,
  hasAnimatedGuildIcon: function(e) {
    return G(null == e ? void 0 : e.icon)
  },
  isAnimatedIconHash: G,
  getUserAvatarSource(e, t, n) {
    let i = I(e, t, n);
    return B(i)
  },
  getGuildIconURL: L,
  getGuildSplashURL: O,
  getGuildSplashSource: function(e) {
    return B(O(e))
  },
  getGuildDiscoverySplashURL: b,
  getGuildDiscoverySplashSource: function(e) {
    return B(b(e))
  },
  getGuildBannerURL: D,
  getGuildHomeHeaderURL: P,
  getResourceChannelIconURL: function(e) {
    let {
      channelId: t,
      icon: n
    } = e;
    return null == n ? null : p({
      endpoint: f.Endpoints.GUILD_RESOURCE_CHANNELS_ICON,
      path: "resource-channels",
      id: t,
      hash: n,
      size: f.AVATAR_SIZE,
      canAnimate: !0
    })
  },
  getNewMemberActionIconURL: function(e) {
    let {
      channelId: t,
      icon: n
    } = e;
    return null == n ? null : p({
      endpoint: f.Endpoints.GUILD_NEW_MEMBER_ACTIONS_ICON,
      path: "new-member-actions",
      id: t,
      hash: n,
      size: f.AVATAR_SIZE,
      canAnimate: !0
    })
  },
  getGuildTemplateIconURL: M,
  getChannelIconURL: V,
  getEmojiURL: v,
  getApplicationIconURL: U,
  getGameAssetURL: k,
  getVideoFilterAssetURL: w,
  getGameAssetSource(e) {
    let t = k(e);
    return B(t)
  },
  getGuildIconSource(e) {
    let t = L(e);
    return B(t)
  },
  getGuildTemplateIconSource(e) {
    let t = M(e);
    return B(t)
  },
  getGuildBannerSource(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      n = D(e, t);
    return B(n)
  },
  getGuildHomeHeaderSource(e) {
    let t = P(e);
    return B(t)
  },
  getChannelIconSource(e) {
    let t = V(e);
    return B(t)
  },
  getApplicationIconSource(e) {
    let t = U(e);
    return B(t)
  },
  makeSource: B,
  getAnimatableSourceWithFallback(e, t) {
    let n = t(e);
    if (!(0, c.isAndroid)() || !e || "number" == typeof n) return n;
    {
      let e = t(!1);
      return "number" != typeof e && e.uri === n.uri ? e : [n, {
        ...e,
        isForceCached: !0
      }]
    }
  }
}