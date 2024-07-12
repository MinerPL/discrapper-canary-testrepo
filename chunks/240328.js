n.d(t, {
  Ao: function() {
return C;
  }
}), n(47120), n(627341);
var r = n(735250),
  i = n(470079),
  a = n(120356),
  o = n.n(a),
  s = n(278074),
  l = n(399606),
  u = n(481060),
  c = n(393238),
  d = n(100527),
  _ = n(906732),
  E = n(1585),
  f = n(125988),
  h = n(335131),
  p = n(597688),
  m = n(884697),
  I = n(731896),
  T = n(594174),
  g = n(74538),
  S = n(436478),
  A = n(921944),
  N = n(689938),
  v = n(670930),
  O = n(174492);

function R(e) {
  let {
onClick: t
  } = e;
  return (0, r.jsx)(u.Clickable, {
className: v.closeButton,
onClick: t,
'aria-label': N.Z.Messages.DISMISS,
children: (0, r.jsx)(u.CloseSmallIcon, {
  size: 'sm',
  color: 'currentColor',
  className: v.closeIcon
})
  });
}
let C = 76,
  y = e => (0, r.jsx)(u.Text, {
variant: 'text-sm/normal',
color: 'text-normal',
tag: 'span',
className: v.ctaLink,
children: e
  }),
  D = e => {
let {
  user: t,
  onClick: n
} = e, {
  avatarDecorationSrc: i
} = (0, f.Z)({
  user: t,
  size: (0, E.y9)(u.AvatarSizes.SIZE_48)
});
return (0, r.jsx)(u.Clickable, {
  className: v.avatarButton,
  onClick: n,
  'aria-label': N.Z.Messages.COLLECTIBLES_CTA_GO_TO_SHOP,
  children: (0, r.jsx)(u.Avatar, {
    src: O,
    avatarDecoration: i,
    size: u.AvatarSizes.SIZE_48,
    'aria-hidden': !0
  })
});
  };
t.ZP = e => {
  var t;
  let {
user: n,
displayProfile: a,
onClose: E,
onDismiss: f,
isInSidebar: O = !1,
canShowAvatarDecorationUpsell: L = !1,
canShowProfileEffectUpsell: b = !1,
upsellSource: M
  } = e, {
analyticsLocations: P
  } = (0, _.ZP)(d.Z.COLLECTIBLES_USER_POPOUT_UPSELL), {
ref: U,
height: w
  } = (0, c.Z)(), x = i.useMemo(() => ({
top: '-'.concat((null != w ? w : C) + 6, 'px')
  }), [w]), G = (0, l.e7)([T.default], () => T.default.getCurrentUser()), k = g.ZP.canUseCollectibles(G), {
setUpsellSource: B,
reset: F
  } = (0, S.k)();
  i.useEffect(() => (B(M), () => {
F();
  }), [
B,
M,
F
  ]);
  let V = (0, I.V)(null == a ? void 0 : a.profileEffectId),
[H, Z] = (0, l.Wu)([p.Z], () => {
  var e;
  return [
    (0, m.G1)(p.Z.getProduct(null === (e = n.avatarDecoration) || void 0 === e ? void 0 : e.skuId)),
    (0, m.G1)(p.Z.getProduct(null == V ? void 0 : V.skuId))
  ];
}),
Y = i.useCallback(() => {
  var e, t, r, i;
  null == f || f(A.L.PRIMARY), null == E || E(), (0, h.mK)({
    analyticsLocations: P,
    analyticsSource: d.Z.COLLECTIBLES_USER_POPOUT_UPSELL,
    initialProductSkuId: H ? null !== (r = null == V ? void 0 : V.skuId) && void 0 !== r ? r : null === (e = n.avatarDecoration) || void 0 === e ? void 0 : e.skuId : null !== (i = null === (t = n.avatarDecoration) || void 0 === t ? void 0 : t.skuId) && void 0 !== i ? i : null == V ? void 0 : V.skuId
  });
}, [
  f,
  E,
  P,
  null == V ? void 0 : V.skuId,
  null === (t = n.avatarDecoration) || void 0 === t ? void 0 : t.skuId,
  H
]),
j = i.useCallback(() => {
  null == f || f(A.L.DISMISS);
}, [f]);
  if (!L && !b)
return null;
  let W = (0, s.EQ)([
L,
b
  ]).with([
!0,
!0
  ], () => H && Z && k ? N.Z.Messages.COMBINED_STARTER_COLLECTIBLES_SOCIAL_UPSELL_NITRO.format({
openShop: y
  }) : H && Z ? N.Z.Messages.COMBINED_STARTER_COLLECTIBLES_SOCIAL_UPSELL_NON_NITRO.format({
openShop: y
  }) : N.Z.Messages.COMBINED_COLLECTIBLES_SOCIAL_UPSELL.format({
openShop: y
  })).with([
!0,
!1
  ], () => H && k ? N.Z.Messages.STARTER_AVATAR_DECORATIONS_SOCIAL_UPSELL_NITRO.format({
openShop: y
  }) : N.Z.Messages.AVATAR_DECORATIONS_SOCIAL_UPSELL.format({
openShop: y
  })).with([
!1,
!0
  ], () => Z && k ? N.Z.Messages.STARTER_PROFILE_EFFECTS_SOCIAL_UPSELL_NITRO.format({
openShop: y
  }) : (Z && N.Z.Messages.STARTER_PROFILE_EFFECTS_SOCIAL_UPSELL_NON_NITRO.format({
openShop: y
  }), N.Z.Messages.PROFILE_EFFECTS_SOCIAL_UPSELL.format({
openShop: y
  }))).otherwise(() => null);
  return (0, r.jsx)('div', {
style: x,
className: o()(v.containerWrapper, v.animation, {
  [v.inSidebar]: O
}),
ref: U,
children: (0, r.jsxs)('div', {
  className: v.container,
  children: [
    L && (0, r.jsx)(D, {
      user: n,
      onClick: Y
    }),
    (0, r.jsx)(u.Clickable, {
      className: L ? v.contentWithAvatar : v.content,
      onClick: Y,
      'aria-label': N.Z.Messages.COLLECTIBLES_CTA_GO_TO_SHOP,
      children: (0, r.jsx)(u.Text, {
        variant: 'text-sm/normal',
        color: 'text-normal',
        tag: 'span',
        children: W
      })
    }),
    (0, r.jsx)('div', {
      className: v.buttons,
      children: (0, r.jsx)(R, {
        onClick: j
      })
    })
  ]
})
  });
};