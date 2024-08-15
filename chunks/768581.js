let r;
n.d(t, {
  $k: function() {
return p;
  },
  CA: function() {
return v;
  },
  F8: function() {
return F;
  },
  JM: function() {
return N;
  },
  NZ: function() {
return R;
  },
  aN: function() {
return O;
  },
  ay: function() {
return B;
  },
  gT: function() {
return T;
  },
  ov: function() {
return A;
  },
  pK: function() {
return h;
  },
  rI: function() {
return x;
  },
  tp: function() {
return C;
  },
  xR: function() {
return k;
  }
}), n(315314), n(610138), n(216116), n(78328), n(815648), n(47120);
var i = n(654861),
  a = n.n(i),
  s = n(664751),
  o = n(864106),
  l = n(134432),
  u = n(930153),
  c = n(358085),
  d = n(709054),
  _ = n(981631),
  E = n(377668),
  f = n(970952);
let h = (r = n(426563).Z).DEFAULT_AVATARS;
r.DEFAULT_GROUP_DM_AVATARS;
let p = r.canUseWebp(),
  m = (0, c.isAndroid)();

function I(e) {
  let t, {
endpoint: n,
path: r,
id: i,
hash: a,
size: o,
canAnimate: u = !1,
keepAspectRatio: c,
format: d = null
  } = e;
  if (null == i || null == a)
return;
  let _ = null != d ? d : u && k(a) ? 'gif' : 'jpg';
  u && B(a) && (_ = 'mp4');
  let E = window.GLOBAL_ENV.CDN_HOST;
  if (null != E ? ('jpg' === _ && (_ = p ? 'webp' : 'png'), t = ''.concat(location.protocol, '//').concat(E, '/').concat(r, '/').concat(i, '/').concat(a, '.').concat(_)) : t = location.protocol + window.GLOBAL_ENV.API_ENDPOINT + n(i, a, _), 'mp4' === _)
return t;
  let f = {};
  return null != o && (f.size = (0, l.oO)(o * (0, l.x_)())), null != c && (f.keep_aspect_ratio = c), t + '?'.concat(s.stringify(f));
}

function T(e) {
  let {
id: t,
animated: n,
size: r,
forcePNG: i = !1
  } = e, a = p && !i ? 'webp' : 'png';
  return null != window.GLOBAL_ENV.CDN_HOST ? ''.concat(location.protocol, '//').concat(window.GLOBAL_ENV.CDN_HOST, '/emojis/').concat(t, '.').concat(n ? 'gif' : a, '?size=').concat((0, l.oO)(r * (0, l.x_)(), m)).concat(p && !m ? '&quality=lossless' : '') : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + _.ANM.EMOJI(t, n ? 'gif' : a);
}

function g(e, t) {
  if (null == e && null == t)
return h[0];
  let n = (0, u.Lk)(t, 0);
  return n > 0 ? h[n % 5] : null != e ? h[a()(e).shiftRight(22).mod(6).toJSNumber()] : h[0];
}

function S(e) {
  let {
id: t,
avatar: n,
discriminator: i,
bot: a
  } = e, s = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : _.IXf, l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
  if (a && t !== E.fL) {
let e = r.BOT_AVATARS[n];
if (e)
  return e;
if (null == n && '0000' === i)
  return h[0];
  }
  return I({
endpoint: _.ANM.AVATAR,
path: 'avatars',
id: t,
hash: n,
size: o,
canAnimate: s,
format: l
  });
}

function A(e) {
  var t;
  let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : _.IXf,
i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
  return null !== (t = S(e, n, r, i)) && void 0 !== t ? t : g(e.id, e.discriminator);
}

function N(e) {
  let t, {
  guildId: n,
  userId: r,
  avatar: i,
  canAnimate: a = !1,
  size: o = _.IXf
} = e,
u = a && k(i) ? 'gif' : 'jpg',
{
  CDN_HOST: c
} = window.GLOBAL_ENV;
  return null != c ? ('jpg' === u && (u = p ? 'webp' : 'png'), t = ''.concat(location.protocol, '//').concat(c).concat(_.ANM.GUILD_MEMBER_AVATAR(n, r, i, u))) : t = location.protocol + window.GLOBAL_ENV.API_ENDPOINT + _.ANM.GUILD_MEMBER_AVATAR(n, r, i, u), t + '?'.concat(s.stringify({
size: (0, l.oO)(o * (0, l.x_)())
  }));
}

function v(e) {
  let {
userId: t,
avatar: n,
guildId: r
  } = e, i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  return null == n ? null : N({
userId: t,
avatar: n,
guildId: r,
canAnimate: i
  });
}

function O(e) {
  let t, {
id: n,
banner: r,
canAnimate: i,
size: a
  } = e;
  if (null == r)
return;
  let s = window.GLOBAL_ENV.CDN_HOST,
o = i && k(r) ? 'gif' : 'png';
  return t = (null != s ? ''.concat(location.protocol, '//').concat(s, '/banners/').concat(n, '/').concat(r, '.').concat(o) : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + _.ANM.USER_BANNER(n, r, o)) + '?size='.concat((0, l.oO)(a * (0, l.x_)()));
}

function R(e) {
  let {
avatarDecoration: t,
size: n,
canAnimate: r = !1
  } = e;
  if (null == t || (0, o.fO)(t))
return;
  if (/^data:/.test(t.asset))
return t.asset;
  let {
CDN_HOST: i,
API_ENDPOINT: a
  } = window.GLOBAL_ENV, s = _.ANM.AVATAR_DECORATION_PRESETS(t.asset), u = new URL(null != i ? ''.concat(location.protocol, '//').concat(i).concat(s) : ''.concat(location.protocol).concat(a).concat(s));
  return u.searchParams.set('size', ''.concat((0, l.oO)(n * (0, l.x_)()))), u.searchParams.set('passthrough', ''.concat(r && (0, o.ae)(t.asset))), u.toString();
}

function C(e) {
  let t, {
id: n,
guildId: r,
banner: i,
canAnimate: a,
size: s
  } = e;
  if (null == i || null == r)
return;
  let o = window.GLOBAL_ENV.CDN_HOST,
u = a && k(i) ? 'gif' : 'png',
c = _.ANM.GUILD_MEMBER_BANNER(r, n, i, u);
  return t = (null != o ? ''.concat(location.protocol, '//').concat(o).concat(c) : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + c) + '?size='.concat((0, l.oO)(s * (0, l.x_)()));
}

function y(e) {
  let t, {
id: n,
splash: r,
size: i
  } = e;
  if (null == r)
return null;
  null == i && (i = window.screen.width * (0, l.x_)()), i = (0, l.oO)(i);
  let a = window.GLOBAL_ENV.CDN_HOST;
  return t = (null != a ? ''.concat(location.protocol, '//').concat(a, '/splashes/').concat(n, '/').concat(r, '.jpg') : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + _.ANM.GUILD_SPLASH(n, r)) + '?size='.concat(i);
}

function D(e) {
  let t, {
  id: n,
  banner: r
} = e,
i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  if (null == r)
return null;
  let a = (0, l.oO)(240 * (0, l.x_)()),
s = i && k(r) ? 'gif' : p ? 'webp' : 'jpg',
o = window.GLOBAL_ENV.CDN_HOST;
  return t = (null != o ? ''.concat(location.protocol, '//').concat(o, '/banners/').concat(n, '/').concat(r, '.').concat(s) : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + _.ANM.GUILD_BANNER(n, r, s)) + '?size='.concat(a), 'jpg' === s && (t += '&quality=lossless'), t;
}

function L(e) {
  let t, {
id: n,
homeHeader: r
  } = e;
  if (null == r)
return null;
  let i = (0, l.oO)(1096 * (0, l.x_)()),
a = window.GLOBAL_ENV.CDN_HOST;
  return t = (null != a ? ''.concat(location.protocol, '//').concat(a, '/home-headers/').concat(n, '/').concat(r, '.png') : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + _.ANM.GUILD_HOME_HEADER(n, r)) + '?size='.concat(i);
}

function b(e) {
  let t, {
id: n,
splash: r,
size: i
  } = e;
  if (null == r)
return null;
  null == i && (i = window.screen.width * (0, l.x_)()), i = (0, l.oO)(i);
  let a = window.GLOBAL_ENV.CDN_HOST;
  return t = (null != a ? ''.concat(location.protocol, '//').concat(a, '/discovery-splashes/').concat(n, '/').concat(r, '.jpg') : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + _.ANM.GUILD_DISCOVERY_SPLASH(n, r)) + '?size='.concat(i);
}

function M(e) {
  let {
id: t,
icon: n,
size: r,
canAnimate: i = !1
  } = e;
  return I({
endpoint: _.ANM.GUILD_ICON,
path: 'icons',
id: t,
hash: n,
size: r,
canAnimate: i
  });
}

function P(e) {
  let {
id: t,
icon: n,
size: r = _.IXf,
canAnimate: i = !1
  } = e;
  return I({
endpoint: _.ANM.GUILD_TEMPLATE_ICON,
path: 'guild-templates',
id: t,
hash: n,
size: r,
canAnimate: i
  });
}

function U(e) {
  let {
id: t,
icon: n,
size: r = _.IXf,
bot: i,
botIconFirst: a,
fallbackAvatar: s = !0
  } = e;
  if (null != i && a) {
let e = S(i, !1, r);
if (null != e)
  return e;
  }
  if (null != n)
return I({
  endpoint: _.ANM.APPLICATION_ICON,
  path: 'app-icons',
  id: t,
  hash: n,
  size: r,
  canAnimate: !1
});
  if (null != i) {
let e = S(i, !1, r);
if (null != e)
  return e;
  }
  if (s)
return f;
}

function w(e) {
  let {
id: t,
hash: n,
size: r = _.IXf,
keepAspectRatio: i = !1,
format: a
  } = e;
  return I({
endpoint: _.ANM.APPLICATION_ICON,
path: 'app-icons',
id: t,
hash: n,
size: r,
canAnimate: !1,
keepAspectRatio: i,
format: a
  });
}

function x(e) {
  let {
userId: t,
assetId: n,
assetHash: r,
size: i,
canAnimate: a = !0
  } = e;
  return I({
endpoint: (e, i, a) => _.ANM.VIDEO_FILTER_ASSET_STORAGE(t, n, r, a),
path: 'video-filter-assets/'.concat(t),
id: n,
hash: r,
size: i,
canAnimate: a
  });
}

function G(e) {
  var t, n, i;
  let {
id: a,
icon: s,
applicationId: o,
size: l
  } = e;
  if (null != o)
return null !== (t = U({
  id: o,
  icon: s,
  size: l
})) && void 0 !== t ? t : r.DEFAULT_CHANNEL_ICON;
  return null !== (n = I({
endpoint: _.ANM.CHANNEL_ICON,
path: 'channel-icons',
id: a,
hash: s,
canAnimate: !1,
size: l
  })) && void 0 !== n ? n : (i = a, r.DEFAULT_GROUP_DM_AVATARS[d.default.extractTimestamp(i) % r.DEFAULT_GROUP_DM_AVATARS.length]);
}

function k(e) {
  return null != e && e.startsWith('a_');
}

function B(e) {
  return null != e && e.startsWith('v_');
}

function F(e) {
  return null != e && k(function(e) {
let t;
try {
  return (t = new URL(e).pathname).split('/').pop();
} catch (e) {
  return null;
}
  }(e));
}

function V(e) {
  return 'number' == typeof e ? e : {
uri: null != e ? e : void 0
  };
}
t.ZP = {
  getUserAvatarURL: A,
  getDefaultAvatarURL: g,
  getGuildMemberAvatarURL: v,
  getGuildMemberAvatarURLSimple: N,
  getGuildMemberAvatarSource: function(e, t) {
let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
  r = v(e, n);
return null != r ? V(r) : t.getAvatarSource(e.guildId, n);
  },
  getGuildMemberBannerURL: C,
  getUserBannerURL: O,
  getAvatarDecorationURL: R,
  hasAnimatedGuildIcon: function(e) {
return k(null == e ? void 0 : e.icon);
  },
  isAnimatedIconHash: k,
  getUserAvatarSource: (e, t, n) => V(A(e, t, n)),
  getGuildIconURL: M,
  getGuildSplashURL: y,
  getGuildSplashSource: function(e) {
return V(y(e));
  },
  getGuildDiscoverySplashURL: b,
  getGuildDiscoverySplashSource: function(e) {
return V(b(e));
  },
  getGuildBannerURL: D,
  getGuildHomeHeaderURL: L,
  getResourceChannelIconURL: function(e) {
let {
  channelId: t,
  icon: n
} = e;
return null == n ? null : I({
  endpoint: _.ANM.GUILD_RESOURCE_CHANNELS_ICON,
  path: 'resource-channels',
  id: t,
  hash: n,
  size: _.IXf,
  canAnimate: !0
});
  },
  getNewMemberActionIconURL: function(e) {
let {
  channelId: t,
  icon: n
} = e;
return null == n ? null : I({
  endpoint: _.ANM.GUILD_NEW_MEMBER_ACTIONS_ICON,
  path: 'new-member-actions',
  id: t,
  hash: n,
  size: _.IXf,
  canAnimate: !0
});
  },
  getGuildTemplateIconURL: P,
  getChannelIconURL: G,
  getEmojiURL: T,
  getApplicationIconURL: U,
  getGameAssetURL: w,
  getVideoFilterAssetURL: x,
  getGameAssetSource: e => V(w(e)),
  getGuildIconSource: e => V(M(e)),
  getGuildTemplateIconSource: e => V(P(e)),
  getGuildBannerSource(e) {
let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
return V(D(e, t));
  },
  getGuildHomeHeaderSource: e => V(L(e)),
  getChannelIconSource: e => V(G(e)),
  getApplicationIconSource: e => V(U(e)),
  makeSource: V,
  getAnimatableSourceWithFallback(e, t) {
let n = t(e);
if (!(0, c.isAndroid)() || !e || 'number' == typeof n)
  return n;
{
  let e = t(!1);
  return 'number' != typeof e && e.uri === n.uri ? e : [
    n,
    {
      ...e,
      isForceCached: !0
    }
  ];
}
  }
};