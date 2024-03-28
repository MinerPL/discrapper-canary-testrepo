"use strict";
s.r(e);
var l = s("735250");
s("470079");
var a = s("979554"),
  i = s("442837"),
  n = s("481060"),
  r = s("1585"),
  o = s("125988"),
  d = s("876917"),
  u = s("594174"),
  c = s("597688"),
  f = s("343350");
let p = n.AvatarSizes.SIZE_152,
  h = (0, r.getDecorationSizeForAvatarSize)(p),
  m = t => {
    let {
      item: e
    } = t, s = (0, i.useStateFromStores)([u.default], () => u.default.getCurrentUser()), {
      avatarDecorationSrc: a,
      avatarPlaceholderSrc: r,
      eventHandlers: d
    } = (0, o.default)({
      user: s,
      avatarDecorationOverride: e,
      size: h
    });
    return (0, l.jsx)("div", {
      className: f.avatarDecorationPreview,
      children: (0, l.jsx)(n.Avatar, {
        ...d,
        "aria-label": e.label,
        src: r,
        avatarDecoration: a,
        size: p
      })
    })
  },
  g = t => {
    let {
      item: e
    } = t;
    return (0, l.jsx)("div", {
      className: f.profileEffectPreview,
      children: (0, l.jsx)(d.default, {
        isHovering: !0,
        profileEffectId: null == e ? void 0 : e.id
      })
    })
  };
e.default = t => {
  let {
    giftCode: e
  } = t, s = (0, i.useStateFromStores)([c.default], () => c.default.getProduct(e.skuId)), n = null == s ? void 0 : s.items[0];
  return (0, l.jsxs)(l.Fragment, {
    children: [(null == n ? void 0 : n.type) === a.CollectiblesItemType.AVATAR_DECORATION && (0, l.jsx)(m, {
      item: n
    }), (null == n ? void 0 : n.type) === a.CollectiblesItemType.PROFILE_EFFECT && (0, l.jsx)(g, {
      item: n
    })]
  })
}