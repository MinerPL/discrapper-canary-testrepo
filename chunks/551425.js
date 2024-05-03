"use strict";
s.r(t);
var a = s("735250");
s("470079");
var i = s("979554"),
  l = s("442837"),
  n = s("481060"),
  r = s("1585"),
  o = s("125988"),
  d = s("876917"),
  u = s("594174"),
  c = s("597688"),
  f = s("70354");
let p = n.AvatarSizes.SIZE_152,
  h = (0, r.getDecorationSizeForAvatarSize)(p),
  m = e => {
    let {
      item: t
    } = e, s = (0, l.useStateFromStores)([u.default], () => u.default.getCurrentUser()), {
      avatarDecorationSrc: i,
      avatarPlaceholderSrc: r,
      eventHandlers: d
    } = (0, o.default)({
      user: s,
      avatarDecorationOverride: t,
      size: h
    });
    return (0, a.jsx)("div", {
      className: f.avatarDecorationPreview,
      children: (0, a.jsx)(n.Avatar, {
        ...d,
        "aria-label": t.label,
        src: r,
        avatarDecoration: i,
        size: p
      })
    })
  },
  I = e => {
    let {
      item: t
    } = e;
    return (0, a.jsx)("div", {
      className: f.profileEffectPreview,
      children: (0, a.jsx)(d.default, {
        isHovering: !0,
        profileEffectId: null == t ? void 0 : t.id
      })
    })
  };
t.default = e => {
  let {
    giftCode: t
  } = e, s = (0, l.useStateFromStores)([c.default], () => c.default.getProduct(t.skuId)), n = null == s ? void 0 : s.items[0];
  return (0, a.jsxs)(a.Fragment, {
    children: [(null == n ? void 0 : n.type) === i.CollectiblesItemType.AVATAR_DECORATION && (0, a.jsx)(m, {
      item: n
    }), (null == n ? void 0 : n.type) === i.CollectiblesItemType.PROFILE_EFFECT && (0, a.jsx)(I, {
      item: n
    })]
  })
}