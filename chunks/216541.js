"use strict";
a.r(t), a.d(t, {
  BundlePreview: function() {
    return c
  }
}), a("724458"), a("653041"), a("47120");
var l = a("735250"),
  s = a("470079"),
  r = a("979554"),
  n = a("481060"),
  i = a("876917"),
  o = a("616066"),
  u = a("141169");
let c = e => {
  let {
    product: t,
    isPurchased: a,
    isHighlighted: c,
    user: d
  } = e, f = s.useMemo(() => t.items.reduce((e, t) => {
    let a = e.get(t.type);
    return null != a ? a.push(t) : e.set(t.type, [t]), e
  }, new Map), [t]), C = f.get(r.CollectiblesItemType.AVATAR_DECORATION), m = f.get(r.CollectiblesItemType.PROFILE_EFFECT), [p] = null != C ? C : [], [E] = null != m ? m : [];
  return (0, l.jsxs)("div", {
    className: u.container,
    children: [null != E ? (0, l.jsx)("div", {
      className: u.profileEffectShopPreview,
      children: (0, l.jsx)(i.default, {
        isHovering: c,
        profileEffectId: E.id,
        isPurchased: a,
        removeSetHeight: !0
      })
    }) : null, null != p && p.type === r.CollectiblesItemType.AVATAR_DECORATION ? (0, l.jsx)("div", {
      className: u.avatarDecorationPreview,
      children: (0, l.jsx)(o.AvatarDecorationPreview, {
        item: p,
        user: d,
        avatarSize: n.AvatarSizes.SIZE_120,
        isPurchased: a,
        isHighlighted: c
      })
    }) : null]
  })
}