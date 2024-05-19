"use strict";
a.r(t), a.d(t, {
  AvatarDecorationPreview: function() {
    return p
  }
});
var l = a("735250");
a("470079");
var s = a("120356"),
  r = a.n(s),
  n = a("979554"),
  i = a("481060"),
  o = a("1585"),
  u = a("125988"),
  c = a("998502"),
  d = a("266386"),
  f = a("689938"),
  C = a("956308");
let m = c.default.getEnableHardwareAcceleration() ? i.AnimatedAvatar : i.Avatar,
  p = e => {
    let {
      item: t,
      isPurchased: a,
      isHighlighted: s,
      user: c,
      avatarSize: p = i.AvatarSizes.SIZE_152
    } = e, E = (0, o.getDecorationSizeForAvatarSize)(p), h = (0, d.useCollectiblesHoverPreviewExperiment)("AvatarDecorationPreview"), {
      avatarDecorationSrc: g,
      eventHandlers: x,
      avatarPlaceholderSrc: v
    } = (0, u.default)({
      user: c,
      avatarDecorationOverride: (null == t ? void 0 : t.type) === n.CollectiblesItemType.AVATAR_DECORATION ? t : void 0,
      size: E,
      animateOnHover: !s
    });
    return (0, l.jsx)(m, {
      ...x,
      avatarDecoration: g,
      src: h && s ? null == c ? void 0 : c.getAvatarURL(void 0, 152, !0) : v,
      imageClassName: h && s ? C.fadeInAvatarImg : void 0,
      className: r()(C.avatar, {
        [C.avatarPurchased]: a
      }),
      size: p,
      "aria-label": f.default.Messages.USER_SETTINGS_AVATAR
    })
  }