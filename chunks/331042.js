n.r(t), n.d(t, {
  CollectiblesCollectedModalInner: function() {
return U;
  }
}), n(47120), n(627341);
var a = n(735250),
  r = n(470079),
  s = n(887024),
  o = n(512722),
  i = n.n(o),
  l = n(338545),
  c = n(278074),
  d = n(979554),
  u = n(399606),
  f = n(481060),
  g = n(37234),
  p = n(607070),
  C = n(100527),
  m = n(906732),
  v = n(1585),
  E = n(125988),
  h = n(300284),
  b = n(876917),
  y = n(642619),
  T = n(594174),
  A = n(884697),
  x = n(890249),
  I = n(318028),
  L = n(635552),
  _ = n(328456),
  N = n(624377),
  S = n(530618),
  O = n(141011),
  Z = n(372654),
  R = n(216541),
  j = n(302800),
  M = n(215023),
  k = n(689938),
  w = n(533400),
  B = n(660097);
let P = e => {
let {
  product: t,
  item: n
} = e, r = (0, u.e7)([T.default], () => {
  let e = T.default.getCurrentUser();
  return i()(null != e, 'User cannot be undefined'), e;
}), {
  avatarDecorationSrc: s
} = (0, E.Z)({
  user: r,
  avatarDecorationOverride: (null == n ? void 0 : n.type) === d.Z.AVATAR_DECORATION ? n : null,
  size: (0, v.y9)(f.AvatarSizes.SIZE_120)
});
return (0, c.EQ)(t.type).with(d.Z.PROFILE_EFFECT, () => (0, a.jsx)('div', {
  className: w.profileEffectShopPreview,
  children: (0, a.jsx)(b.Z, {
    forCollectedModal: !0,
    profileEffectId: n.id
  })
})).with(d.Z.AVATAR_DECORATION, () => (i()(n.type === d.Z.AVATAR_DECORATION, 'ts-match already checked the type'), (0, a.jsx)(f.Avatar, {
  size: f.AvatarSizes.SIZE_120,
  src: B,
  avatarDecoration: s,
  className: w.avatarDecoration,
  'aria-label': t.name
}))).with(d.Z.BUNDLE, () => (0, a.jsx)('div', {
  className: w.bundlePreview,
  children: (0, a.jsx)(R.d, {
    product: t,
    user: r,
    isPurchased: !1,
    isHighlighted: !0,
    profileEffectClassName: w.bundleProfileEffectCard
  })
})).otherwise(() => null);
  },
  D = e => {
let {
  product: t,
  item: n,
  reducedMotion: s,
  displayOptions: o
} = e, [i, c] = r.useState(!1), d = (0, l.useSpring)({
  from: {
    transform: 'translateX(100%)',
    right: '-100%'
  },
  to: {
    transform: 'translateX(50%)',
    right: '50%'
  },
  config: {
    duration: 1550
  },
  immediate: s,
  onRest: () => setTimeout(() => c(!0), 100)
}), u = (0, l.useSpring)({
  from: {
    transform: 'translateX(100%)',
    right: '-100%'
  },
  to: {
    transform: 'translateX(50%)',
    right: '50%'
  },
  immediate: s,
  config: {
    duration: 1550
  },
  reverse: i
}), f = (0, l.useSpring)({
  from: {
    transform: 'translateX(50%)',
    right: '50%',
    opacity: 1
  },
  to: {
    transform: 'translateX(50%)',
    right: '50%',
    opacity: 0
  },
  config: {
    duration: 300
  },
  delay: 600
});
return (0, a.jsxs)(a.Fragment, {
  children: [
    (0, a.jsx)(l.animated.div, {
      className: w.easterEggContainer,
      style: d,
      children: (0, a.jsx)(P, {
        product: t,
        item: n
      })
    }),
    (0, a.jsx)(l.animated.div, {
      className: w.easterEggContainer,
      style: s ? f : u,
      children: (0, a.jsx)('img', {
        src: o.imageSrc,
        style: o.style,
        alt: '',
        'aria-hidden': 'true'
      })
    })
  ]
});
  },
  F = e => {
let {
  product: t,
  item: n,
  reducedMotion: r = !1
} = e, s = (0, j.v)(t.categorySkuId);
return null != s ? (0, a.jsx)(D, {
  product: t,
  item: n,
  reducedMotion: r,
  displayOptions: s
}) : (0, a.jsx)(P, {
  product: t,
  item: n
});
  },
  U = e => {
var t, n;
let {
  product: s,
  onClose: o,
  confettiTarget: l,
  confettiCanvas: E,
  hideConfetti: b = !1,
  analyticsLocations: T
} = e, {
  confettiColors: R
} = (0, N.Z)(s.styles), j = (0, u.e7)([p.Z], () => p.Z.useReducedMotion), B = (0, x.m)('CollectiblesCollectedModal'), [P] = s.items, D = r.useRef(null), {
  analyticsLocations: U
} = (0, m.ZP)([
  ...T,
  C.Z.COLLECTIBLES_COLLECTED_MODAL
]), H = (0, h.Z)({
  analyticsLocations: U
}), z = r.useCallback(() => {
  if (o(), (0, g.xf)(), H(), s.type === d.Z.AVATAR_DECORATION) {
    i()(P.type === d.Z.AVATAR_DECORATION, 'product type and item type are the same'), (0, v.ps)({
      initialSelectedDecoration: P,
      analyticsLocations: U
    });
    return;
  }
  s.type === d.Z.PROFILE_EFFECT && (0, y.H)({
    initialSelectedEffectId: P.id,
    analyticsLocations: U
  });
}, [
  o,
  H,
  s.type,
  P,
  U
]), {
  handleUseNow: V,
  isApplying: W
} = (0, L.W)({
  product: s,
  onSuccess: o,
  onError: o
}), {
  firstAvatarDecoration: X,
  firstProfileEffect: G
} = (0, _.R)(s), K = (0, A.x6)(s) ? null != X && null != G : null != X || null != G, Y = (0, A.x6)(s) || B, {
  category: Q,
  isFetching: q
} = (0, I.l)(s.skuId), J = null !== (n = null == Q ? void 0 : Q.successModalBg) && void 0 !== n ? n : s.banner;
return (0, a.jsxs)(m.Gt, {
  value: U,
  children: [
    (0, a.jsxs)('div', {
      className: w.modalInner,
      ref: D,
      children: [
        (0, a.jsxs)('div', {
          className: w.bannerContainer,
          children: [
            (0, a.jsx)(O.Z, {
              asset: q ? void 0 : J,
              addGradient: null === (t = M.Ve[s.categorySkuId]) || void 0 === t ? void 0 : t.addGradient,
              size: (0, Z.ML)(880),
              className: w.decorationBanner,
              blur: !0
            }),
            (0, a.jsx)(F, {
              product: s,
              item: P,
              reducedMotion: j
            })
          ]
        }),
        (0, a.jsxs)('div', {
          className: w.collectedInfoContainer,
          children: [
            (0, a.jsxs)('div', {
              className: w.collectedTextContainer,
              children: [
                (0, a.jsx)(f.Heading, {
                  variant: 'heading-lg/bold',
                  children: k.Z.Messages.COLLECTIBLES_YOU_COLLECTED.format({
                    itemName: s.name
                  })
                }),
                (0, a.jsx)(f.Text, {
                  variant: 'text-sm/normal',
                  children: (0, c.EQ)(null == s ? void 0 : s.type).with(d.Z.BUNDLE, () => k.Z.Messages.COLLECTIBLES_PERMANENT_COLLECTION_BUNDLE).with(d.Z.PROFILE_EFFECT, () => k.Z.Messages.COLLECTIBLES_PROFILE_EFFECT_PERMANENT_COLLECTION).otherwise(() => k.Z.Messages.COLLECTIBLES_PERMANENT_COLLECTION)
                })
              ]
            }),
            Y ? (0, a.jsxs)('div', {
              className: w.buttons,
              children: [
                (0, a.jsx)(f.Button, {
                  color: K ? f.ButtonColors.PRIMARY : f.ButtonColors.BRAND,
                  onClick: z,
                  children: k.Z.Messages.USER_SETTINGS_EDIT_USER_PROFILE
                }),
                K ? (0, a.jsx)(f.Button, {
                  onClick: V,
                  submitting: W,
                  children: k.Z.Messages.COLLECTIBLES_USE_NOW
                }) : null
              ]
            }) : (0, a.jsx)(f.Button, {
              onClick: z,
              children: k.Z.Messages.COLLECTIBLES_USE_NOW
            })
          ]
        }),
        (0, a.jsx)(f.ModalCloseButton, {
          onClick: o,
          className: w.modalCloseButton,
          withCircleBackground: !0
        })
      ]
    }),
    !b && !j && (0, a.jsx)(S.Z, {
      confettiTarget: null != l ? l : D.current,
      confettiCanvas: E,
      sprites: (0, Z.vK)(s.categorySkuId),
      colors: null == R ? void 0 : R.map(e => e.toHexString())
    })
  ]
});
  };
t.default = e => {
  let {
transitionState: t,
product: n,
onClose: o,
analyticsLocations: i
  } = e, l = r.useRef(new s.qA()), [c, d] = r.useState(null), u = (0, j.UY)(n.skuId);
  return (0, a.jsxs)(a.Fragment, {
children: [
  (0, a.jsx)(s.O_, {
    ref: d,
    className: w.confettiCanvas,
    environment: l.current
  }),
  (0, a.jsxs)(f.ModalRoot, {
    hideShadow: !0,
    transitionState: t,
    size: f.ModalSize.DYNAMIC,
    className: w.modalRoot,
    children: [
      null != u && (0, a.jsx)('img', {
        src: u.imageSrc,
        className: w.customConfetti,
        style: u.style,
        alt: '',
        'aria-hidden': 'true'
      }),
      (0, a.jsx)(f.ModalContent, {
        className: w.modalContent,
        children: (0, a.jsx)(U, {
          product: n,
          onClose: o,
          confettiCanvas: c,
          hideConfetti: null != u,
          analyticsLocations: i
        })
      })
    ]
  })
]
  });
};