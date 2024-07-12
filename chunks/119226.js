s.d(n, {
  Z: function() {
return P;
  }
}), s(627341);
var l = s(735250);
s(470079);
var t = s(278074),
  i = s(979554),
  r = s(481060),
  a = s(1585),
  c = s(125988),
  o = s(583434),
  u = s(479446),
  d = s(981632),
  _ = s(731896),
  m = s(680295),
  E = s(998502),
  I = s(987209),
  p = s(689938),
  N = s(578599),
  T = s(241822);
let x = E.ZP.getEnableHardwareAcceleration() ? r.AnimatedAvatar : r.Avatar;

function S(e) {
  let {
avatarDecoration: n
  } = e, {
avatarDecorationSrc: s,
eventHandlers: t,
avatarPlaceholderSrc: i
  } = (0, c.Z)({
avatarDecorationOverride: n,
size: (0, a.y9)(r.AvatarSizes.SIZE_152)
  });
  return (0, l.jsx)('div', {
className: N.giftMainAnimationWrapper,
children: (0, l.jsx)(x, {
  ...t,
  avatarDecoration: s,
  src: i,
  className: N.avatar,
  size: r.AvatarSizes.SIZE_152,
  'aria-label': p.Z.Messages.USER_SETTINGS_AVATAR
})
  });
}

function h(e) {
  var n;
  let {
id: s
  } = e, t = null === (n = (0, _.V)(s)) || void 0 === n ? void 0 : n.config;
  return (0, l.jsxs)('div', {
className: N.profileEffectContainer,
children: [
  (0, l.jsx)('img', {
    src: T,
    alt: null == t ? void 0 : t.accessibilityLabel,
    className: N.profileEffectBackground
  }),
  (0, l.jsx)(m.Z, {
    profileEffectId: s
  })
]
  });
}

function P(e) {
  let {
sku: n
  } = e, {
selectedGiftStyle: s
  } = (0, I.wD)(), {
product: r
  } = (0, o.T)(null == n ? void 0 : n.id), a = null == r ? void 0 : r.items[0], c = (0, t.EQ)(a).with({
type: i.Z.AVATAR_DECORATION
  }, e => (0, l.jsx)(S, {
avatarDecoration: e
  })).with({
type: i.Z.PROFILE_EFFECT
  }, e => (0, l.jsx)(h, {
id: e.id
  })).otherwise(() => null);
  return null != s && null == c ? (0, l.jsx)('div', {
className: N.giftMainAnimationWrapper,
children: (0, l.jsx)(d.Z, {
  defaultAnimationState: u.S.LOOP,
  giftStyle: s,
  shouldAnimate: !0,
  className: N.__invalid_giftMainAnimation
})
  }) : c;
}