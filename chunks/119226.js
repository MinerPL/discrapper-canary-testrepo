t.d(n, {
  Z: function() {
return h;
  }
}), t(627341);
var i = t(735250);
t(470079);
var a = t(278074),
  r = t(979554),
  s = t(481060),
  l = t(1585),
  o = t(125988),
  c = t(583434),
  u = t(479446),
  d = t(981632),
  _ = t(731896),
  p = t(680295),
  m = t(998502),
  I = t(987209),
  f = t(689938),
  E = t(326397),
  x = t(241822);
let N = m.ZP.getEnableHardwareAcceleration() ? s.AnimatedAvatar : s.Avatar;

function S(e) {
  let {
avatarDecoration: n
  } = e, {
avatarDecorationSrc: t,
eventHandlers: a,
avatarPlaceholderSrc: r
  } = (0, o.Z)({
avatarDecorationOverride: n,
size: (0, l.y9)(s.AvatarSizes.SIZE_152)
  });
  return (0, i.jsx)('div', {
className: E.giftMainAnimationWrapper,
children: (0, i.jsx)(N, {
  ...a,
  avatarDecoration: t,
  src: r,
  className: E.avatar,
  size: s.AvatarSizes.SIZE_152,
  'aria-label': f.Z.Messages.USER_SETTINGS_AVATAR
})
  });
}

function T(e) {
  var n;
  let {
id: t
  } = e, a = null === (n = (0, _.V)(t)) || void 0 === n ? void 0 : n.config;
  return (0, i.jsxs)('div', {
className: E.profileEffectContainer,
children: [
  (0, i.jsx)('img', {
    src: x,
    alt: null == a ? void 0 : a.accessibilityLabel,
    className: E.profileEffectBackground
  }),
  (0, i.jsx)(p.Z, {
    profileEffectId: t
  })
]
  });
}

function h(e) {
  let {
sku: n
  } = e, {
selectedGiftStyle: t
  } = (0, I.wD)(), {
product: s
  } = (0, c.T)(null == n ? void 0 : n.id), l = null == s ? void 0 : s.items[0], o = (0, a.EQ)(l).with({
type: r.Z.AVATAR_DECORATION
  }, e => (0, i.jsx)(S, {
avatarDecoration: e
  })).with({
type: r.Z.PROFILE_EFFECT
  }, e => (0, i.jsx)(T, {
id: e.id
  })).otherwise(() => null);
  return null != t && null == o ? (0, i.jsx)('div', {
className: E.giftMainAnimationWrapper,
children: (0, i.jsx)(d.Z, {
  defaultAnimationState: u.S.LOOP,
  giftStyle: t,
  shouldAnimate: !0,
  className: E.__invalid_giftMainAnimation
})
  }) : o;
}