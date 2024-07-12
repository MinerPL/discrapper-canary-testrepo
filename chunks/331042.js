n.r(t), n.d(t, {
  CollectiblesCollectedModalInner: function() {
return P;
  }
}), n(47120), n(627341);
var r = n(735250),
  a = n(470079),
  o = n(887024),
  l = n(512722),
  i = n.n(l),
  s = n(278074),
  c = n(979554),
  d = n(399606),
  u = n(481060),
  f = n(37234),
  p = n(607070),
  g = n(100527),
  v = n(906732),
  C = n(1585),
  E = n(125988),
  b = n(300284),
  h = n(876917),
  m = n(642619),
  y = n(594174),
  A = n(884697),
  T = n(890249),
  x = n(318028),
  L = n(635552),
  N = n(328456),
  _ = n(624377),
  I = n(530618),
  Z = n(141011),
  S = n(372654),
  O = n(216541),
  R = n(302800),
  k = n(215023),
  w = n(689938),
  B = n(533400),
  M = n(660097);
let P = e => {
  var t, n;
  let {
product: o,
onClose: l,
confettiTarget: R,
confettiCanvas: P,
hideConfetti: j = !1,
analyticsLocations: D
  } = e, {
confettiColors: F
  } = (0, _.Z)(o.styles), U = (0, d.e7)([y.default], () => {
let e = y.default.getCurrentUser();
return i()(null != e, 'User cannot be undefined'), e;
  }), H = (0, d.e7)([p.Z], () => p.Z.useReducedMotion), z = (0, T.m)('CollectiblesCollectedModal'), [V] = o.items, {
avatarDecorationSrc: W
  } = (0, E.Z)({
user: U,
avatarDecorationOverride: (null == V ? void 0 : V.type) === c.Z.AVATAR_DECORATION ? V : null,
size: (0, C.y9)(u.AvatarSizes.SIZE_120)
  }), G = a.useRef(null), {
analyticsLocations: K
  } = (0, v.ZP)([
...D,
g.Z.COLLECTIBLES_COLLECTED_MODAL
  ]), Y = (0, b.Z)({
analyticsLocations: K
  }), Q = a.useCallback(() => {
if (l(), (0, f.xf)(), Y(), o.type === c.Z.AVATAR_DECORATION) {
  i()(V.type === c.Z.AVATAR_DECORATION, 'product type and item type are the same'), (0, C.ps)({
    initialSelectedDecoration: V,
    analyticsLocations: K
  });
  return;
}
o.type === c.Z.PROFILE_EFFECT && (0, m.H)({
  initialSelectedEffectId: V.id,
  analyticsLocations: K
});
  }, [
l,
Y,
o.type,
V,
K
  ]), {
handleUseNow: q,
isApplying: J
  } = (0, L.W)({
product: o,
onSuccess: l,
onError: l
  }), {
firstAvatarDecoration: X,
firstProfileEffect: $
  } = (0, N.R)(o), ee = (0, A.x6)(o) ? null != X && null != $ : null != X || null != $, et = (0, A.x6)(o) || z, {
category: en,
isFetching: er
  } = (0, x.l)(o.skuId), ea = null !== (n = null == en ? void 0 : en.successModalBg) && void 0 !== n ? n : o.banner;
  return (0, r.jsxs)(v.Gt, {
value: K,
children: [
  (0, r.jsxs)('div', {
    className: B.modalInner,
    ref: G,
    children: [
      (0, r.jsxs)('div', {
        className: B.bannerContainer,
        children: [
          (0, r.jsx)(Z.Z, {
            asset: er ? void 0 : ea,
            addGradient: null === (t = k.Ve[o.categorySkuId]) || void 0 === t ? void 0 : t.addGradient,
            size: (0, S.ML)(880),
            className: B.decorationBanner,
            blur: !0
          }),
          (0, s.EQ)(o.type).with(c.Z.PROFILE_EFFECT, () => (0, r.jsx)('div', {
            className: B.profileEffectShopPreview,
            children: (0, r.jsx)(h.Z, {
              forCollectedModal: !0,
              profileEffectId: V.id
            })
          })).with(c.Z.AVATAR_DECORATION, () => (i()(V.type === c.Z.AVATAR_DECORATION, 'ts-match already checked the type'), (0, r.jsx)(u.Avatar, {
            size: u.AvatarSizes.SIZE_120,
            src: M,
            avatarDecoration: W,
            className: B.avatarDecoration,
            'aria-label': o.name
          }))).with(c.Z.BUNDLE, () => (0, r.jsx)('div', {
            className: B.bundlePreview,
            children: (0, r.jsx)(O.d, {
              product: o,
              user: U,
              isPurchased: !1,
              isHighlighted: !0,
              profileEffectClassName: B.bundleProfileEffectCard
            })
          })).otherwise(() => null)
        ]
      }),
      (0, r.jsxs)('div', {
        className: B.collectedInfoContainer,
        children: [
          (0, r.jsxs)('div', {
            className: B.collectedTextContainer,
            children: [
              (0, r.jsx)(u.Heading, {
                variant: 'heading-lg/bold',
                children: w.Z.Messages.COLLECTIBLES_YOU_COLLECTED.format({
                  itemName: o.name
                })
              }),
              (0, r.jsx)(u.Text, {
                variant: 'text-sm/normal',
                children: (0, s.EQ)(null == o ? void 0 : o.type).with(c.Z.BUNDLE, () => w.Z.Messages.COLLECTIBLES_PERMANENT_COLLECTION_BUNDLE).with(c.Z.PROFILE_EFFECT, () => w.Z.Messages.COLLECTIBLES_PROFILE_EFFECT_PERMANENT_COLLECTION).otherwise(() => w.Z.Messages.COLLECTIBLES_PERMANENT_COLLECTION)
              })
            ]
          }),
          et ? (0, r.jsxs)('div', {
            className: B.buttons,
            children: [
              (0, r.jsx)(u.Button, {
                color: ee ? u.ButtonColors.PRIMARY : u.ButtonColors.BRAND,
                onClick: Q,
                children: w.Z.Messages.USER_SETTINGS_EDIT_USER_PROFILE
              }),
              ee ? (0, r.jsx)(u.Button, {
                onClick: q,
                submitting: J,
                children: w.Z.Messages.COLLECTIBLES_USE_NOW
              }) : null
            ]
          }) : (0, r.jsx)(u.Button, {
            onClick: Q,
            children: w.Z.Messages.COLLECTIBLES_USE_NOW
          })
        ]
      }),
      (0, r.jsx)(u.ModalCloseButton, {
        onClick: l,
        className: B.modalCloseButton,
        withCircleBackground: !0
      })
    ]
  }),
  !j && !H && (0, r.jsx)(I.Z, {
    confettiTarget: null != R ? R : G.current,
    confettiCanvas: P,
    sprites: (0, S.vK)(o.categorySkuId),
    colors: null == F ? void 0 : F.map(e => e.toHexString())
  })
]
  });
};
t.default = e => {
  let {
transitionState: t,
product: n,
onClose: l,
analyticsLocations: i
  } = e, s = a.useRef(new o.qA()), [c, d] = a.useState(null), f = (0, R.UY)(n.skuId);
  return (0, r.jsxs)(r.Fragment, {
children: [
  (0, r.jsx)(o.O_, {
    ref: d,
    className: B.confettiCanvas,
    environment: s.current
  }),
  (0, r.jsxs)(u.ModalRoot, {
    hideShadow: !0,
    transitionState: t,
    size: u.ModalSize.DYNAMIC,
    className: B.modalRoot,
    children: [
      null != f && (0, r.jsx)('img', {
        src: f.confettiAssetSrc,
        className: B.customConfetti,
        style: f.style,
        alt: '',
        'aria-hidden': 'true'
      }),
      (0, r.jsx)(u.ModalContent, {
        className: B.modalContent,
        children: (0, r.jsx)(P, {
          product: n,
          onClose: l,
          confettiCanvas: c,
          hideConfetti: null != f,
          analyticsLocations: i
        })
      })
    ]
  })
]
  });
};