n.d(t, {
  R: function() {
return C;
  }
});
var a = n(735250);
n(470079);
var r = n(120356),
  s = n.n(r),
  o = n(979554),
  l = n(481060),
  i = n(1585),
  c = n(125988),
  d = n(998502),
  u = n(266386),
  f = n(689938),
  g = n(777381);
let p = d.ZP.getEnableHardwareAcceleration() ? l.AnimatedAvatar : l.Avatar,
  C = e => {
let {
  item: t,
  user: n,
  isHighlighted: r = !1,
  isPurchased: d = !1,
  avatarSize: C = l.AvatarSizes.SIZE_152,
  avatarPlaceholderSrc: v
} = e, m = (0, i.y9)(C), E = (0, u.c)('AvatarDecorationPreview'), {
  avatarDecorationSrc: h,
  eventHandlers: b,
  avatarPlaceholderSrc: y
} = (0, c.Z)({
  user: n,
  avatarDecorationOverride: (null == t ? void 0 : t.type) === o.Z.AVATAR_DECORATION ? t : void 0,
  size: m,
  onlyAnimateOnHover: !r
});
return (0, a.jsx)(p, {
  ...b,
  avatarDecoration: h,
  src: E && r ? null == n ? void 0 : n.getAvatarURL(void 0, 152, !0) : null != v ? v : y,
  imageClassName: E && r ? g.fadeInAvatarImg : void 0,
  className: s()(g.avatar, {
    [g.avatarPurchased]: d
  }),
  size: C,
  'aria-label': f.Z.Messages.USER_SETTINGS_AVATAR
});
  };