i.r(t), i(47120), i(627341);
var n = i(735250),
  s = i(470079),
  l = i(120356),
  a = i.n(l),
  r = i(278074),
  o = i(873546),
  c = i(979554),
  d = i(399606),
  u = i(780384),
  C = i(481060),
  m = i(37234),
  E = i(809206),
  _ = i(727637),
  I = i(410030),
  L = i(100527),
  f = i(906732),
  v = i(1585),
  x = i(786761),
  T = i(3148),
  h = i(739566),
  p = i(753206),
  P = i(333867),
  g = i(197115),
  S = i(300284),
  N = i(921813),
  b = i(876917),
  A = i(642619),
  O = i(25990),
  j = i(594174),
  Z = i(626135),
  w = i(74538),
  B = i(335131),
  M = i(1870),
  R = i(884697),
  D = i(890249),
  k = i(188584),
  y = i(635552),
  U = i(724994),
  F = i(328456),
  H = i(390698),
  V = i(141011),
  W = i(426171),
  G = i(224068),
  z = i(813083),
  Y = i(823941),
  K = i(680942),
  q = i(558060),
  Q = i(237031),
  X = i(372654),
  J = i(616066),
  $ = i(832149),
  ee = i(215023),
  et = i(981631),
  ei = i(474936),
  en = i(231338),
  es = i(689938),
  el = i(332803);
let ea = e => {
let {
  item: t,
  user: i,
  isBundleItem: l = !1
} = e, a = s.useRef(null), o = (0, _.Z)(a);
return (0, r.EQ)(t.type).with(c.Z.AVATAR_DECORATION, () => (0, n.jsx)('div', {
  className: l ? el.bundleAvatarPreviewContainer : el.avatarPreviewContainer,
  children: (0, n.jsx)(J.R, {
    user: i,
    item: t
  })
})).with(c.Z.PROFILE_EFFECT, () => (0, n.jsx)('div', {
  className: l ? el.bundlePfxPreviewContainer : el.pfxPreviewContainer,
  ref: a,
  children: (0, n.jsx)(b.Z, {
    profileEffectId: t.id,
    isHovering: o,
    removeSetHeight: !0
  })
})).otherwise(() => null);
  },
  er = e => {
let {
  product: t,
  user: i
} = e, [l, a] = s.useState(0);
s.useEffect(() => {
  let e = setInterval(() => {
    t.items.length > 0 && a(e => (e + 1) % t.items.length);
  }, 5000);
  return () => {
    clearInterval(e);
  };
}, [
  t.skuId,
  t.items.length,
  i.id
]);
let r = t.items.length;
return (0, n.jsx)('div', {
  className: el.bundlePreviewContainer,
  children: (0, n.jsx)(C.Slides, {
    activeSlide: String(l),
    children: t.items.map((e, s) => {
      let l = String(s),
        a = null != t.bundledProducts ? t.bundledProducts[s] : void 0,
        o = '('.concat(s + 1, '/').concat(r, ')');
      return (0, n.jsx)(C.Slide, {
        id: l,
        children: (0, n.jsxs)('div', {
          className: el.bundlePreviewSlide,
          children: [
            (0, n.jsx)(ea, {
              item: e,
              user: i,
              isBundleItem: !0
            }),
            (0, n.jsxs)(C.Text, {
              variant: 'text-sm/normal',
              color: 'text-muted',
              className: el.bundleSlideTitle,
              children: [
                null == a ? void 0 : a.name,
                ' ',
                o
              ]
            })
          ]
        })
      }, l);
    })
  })
});
  },
  eo = e => {
let {
  product: t,
  user: i
} = e;
return (0, R.x6)(t) ? (0, n.jsx)(er, {
  product: t,
  user: i
}) : t.items.length > 0 ? (0, n.jsx)(ea, {
  item: t.items[0],
  user: i
}) : null;
  },
  ec = e => {
var t, i;
let {
  product: l,
  user: r,
  category: _,
  onClose: L,
  returnRef: x
} = e, {
  analyticsLocations: T
} = (0, f.ZP)(), h = w.ZP.canUseCollectibles(r), {
  isPurchased: p,
  isPartiallyPurchased: N
} = (0, U.L)(l), b = (0, d.e7)([M.Z], () => M.Z.isClaiming === l.skuId), O = (0, S.Z)({
  analyticsLocations: T
}), j = (0, I.ZP)(), Z = (0, u.wj)(j), V = (0, R.G1)(l), W = (0, R.ql)(l, et.tuJ.DEFAULT), Y = (null == W ? void 0 : W.amount) === 0, {
  firstAvatarDecoration: X,
  firstProfileEffect: J
} = (0, F.R)(l), ee = s.useMemo(() => (0, R.BH)(l, h), [
  l,
  h
]), ea = (0, D.m)('CollectiblesCollectedModal'), er = (0, R.x6)(l) || ea, {
  handleUseNow: ec,
  isApplying: ed
} = (0, y.W)({
  product: l,
  onSuccess: L
}), eu = s.useCallback(() => {
  if (L(), (0, m.xf)(), O(), null != X) {
    (0, v.ps)({
      initialSelectedDecoration: X,
      analyticsLocations: T
    });
    return;
  }
  null != J && (0, A.H)({
    initialSelectedEffectId: J.id,
    analyticsLocations: T
  });
}, [
  T,
  X,
  J,
  L,
  O
]);
s.useEffect(() => {
  if (null != X)
    return (0, E.cV)(X), () => (0, E.cV)(void 0);
}, [X]);
let eC = e => (0, n.jsx)(g.Z, {
    subscriptionTier: ei.Si.TIER_2,
    fullWidth: !0,
    buttonText: e,
    onClick: Q.v,
    onSubscribeModalClose: () => {
      (0, Q.T)({
        product: l,
        category: _,
        returnRef: x,
        analyticsLocations: T
      });
    }
  }),
  {
    firstAvatarDecoration: em,
    firstProfileEffect: eE
  } = (0, k.k)(l),
  e_ = l.type === c.Z.BUNDLE ? es.Z.Messages.COLLECTIBLES_BUNDLE_DESCRIPTION.format({
    avatarDecorationName: null !== (t = null == em ? void 0 : em.name) && void 0 !== t ? t : '',
    profileEffectName: null !== (i = null == eE ? void 0 : eE.name) && void 0 !== i ? i : ''
  }) : l.summary;
return (0, n.jsxs)('div', {
  className: el.collectibleInfoContainer,
  children: [
    (0, n.jsx)('div', {
      className: el.titleContainer,
      children: (0, n.jsx)(z.Z, {
        category: _,
        display: 'modal'
      })
    }),
    (0, n.jsx)(eo, {
      product: l,
      user: r
    }),
    (0, n.jsxs)('div', {
      children: [
        (0, n.jsxs)('div', {
          className: el.description,
          children: [
            (0, n.jsx)(G.Z, {
              product: l,
              isDarkText: !Z
            }),
            (0, n.jsx)(C.Heading, {
              variant: 'heading-xl/extrabold',
              className: el.headingWithItemTypePill,
              children: l.name
            }),
            (0, n.jsx)(C.Text, {
              variant: 'text-sm/normal',
              children: e_
            }),
            p || N ? (0, n.jsx)(H.U, {
              className: el.priceTag,
              isPartiallyPurchased: N
            }) : V ? (0, n.jsx)(C.Text, {
              variant: 'text-md/semibold',
              className: el.priceTag,
              children: es.Z.Messages.COLLECTIBLES_INCLUDED_WITH_PREMIUM
            }) : (0, n.jsx)(q.Z, {
              product: l,
              discount: ee,
              isPremiumUser: h,
              className: h ? el.priceTag : el.priceTagContainer,
              nitroUpsell: !h
            })
          ]
        }),
        (0, n.jsx)('div', {
          className: el.buttonsContainer,
          children: (0, n.jsxs)('div', {
            className: el.primaryButtons,
            children: [
              !V || h || Y ? p ? (0, n.jsx)(C.Button, {
                className: el.button,
                look: C.Button.Looks.FILLED,
                onClick: er ? ec : eu,
                submitting: ed,
                children: es.Z.Messages.COLLECTIBLES_USE_NOW
              }) : N ? null : V ? (0, n.jsx)(C.Button, {
                className: el.button,
                look: C.Button.Looks.FILLED,
                submitting: b,
                submittingStartedLabel: es.Z.Messages.COLLECTIBLES_COLLECTING,
                submittingFinishedLabel: es.Z.Messages.COLLECTIBLES_COLLECTING_FINISHED,
                onClick: async () => {
                  await (0, B.fK)(l.skuId), L(), (0, $.Z)({
                    product: l,
                    analyticsLocations: T
                  });
                },
                children: es.Z.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION
              }) : (0, n.jsx)(C.Button, {
                className: el.button,
                look: C.Button.Looks.FILLED,
                onClick: () => (0, P.Z)({
                  skuId: l.skuId,
                  analyticsLocations: T,
                  onClose: e => e ? L() : (0, en.dG)()
                }),
                children: (0, R.x6)(l) ? es.Z.Messages.COLLECTIBLES_BUNDLE_BUY_BUNDLE : l.type === c.Z.PROFILE_EFFECT ? es.Z.Messages.COLLECTIBLES_BUY_PROFILE_EFFECT : es.Z.Messages.COLLECTIBLES_BUY_DECORATION
              }) : eC(es.Z.Messages.UNLOCK_WITH_NITRO),
              !V && !Y && !o.tq && (0, n.jsx)(K.Z, {
                product: l,
                onSuccess: L,
                disableCustomColor: !0
              })
            ]
          })
        }),
        (0, n.jsx)(C.Text, {
          className: a()(el.disclaimer, !Z && el.disclaimerLight),
          variant: 'text-xxs/normal',
          children: p ? null : V ? es.Z.Messages.COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER : (0, R.x6)(l) ? es.Z.Messages.COLLECTIBLES_DETAILS_MODAL_BUNDLE_PURCHASE_DISCLAIMER : l.type === c.Z.PROFILE_EFFECT ? es.Z.Messages.COLLECTIBLES_DETAILS_MODAL_PROFILE_EFFECT_PREMIUM_PURCHASE_DISCLAIMER : es.Z.Messages.COLLECTIBLES_DETAILS_MODAL_PREMIUM_PURCHASE_DISCLAIMER
        })
      ]
    })
  ]
});
  },
  ed = e => {
let {
  product: t,
  user: i
} = e, s = w.ZP.canUsePremiumProfileCustomization(i), l = (0, d.cj)([O.Z], () => O.Z.getAllPending()), a = t.type === c.Z.AVATAR_DECORATION, [r] = t.items, {
  firstAvatarDecoration: o,
  firstProfileEffect: u
} = (0, F.R)(t), C = null != u;
return (0, n.jsxs)('div', {
  className: (null == r ? void 0 : r.type) === c.Z.AVATAR_DECORATION ? el.previewsContainerInner : el.profileEffectPreviewsContainerInner,
  children: [
    (0, n.jsx)(N.Z, {
      ...l,
      user: i,
      canUsePremiumCustomization: s,
      pendingAvatarDecoration: o,
      pendingProfileEffectId: null == u ? void 0 : u.id,
      disabledInputs: !0,
      hideMessageInput: !C,
      hideExampleButton: !0,
      hideCustomStatus: !0,
      hideBioSection: a
    }),
    a && (0, n.jsx)(eC, {
      user: i
    })
  ]
});
  },
  eu = e => {
let {
  author: t
} = e;
return (0, x.e5)({
  ...(0, T.ZP)({
    author: t,
    channelId: '1337',
    content: es.Z.Messages.COLLECTIBLES_CHAT_PREVIEW_TEXT
  }),
  state: et.yb.SENT,
  id: '0'
});
  },
  eC = e => {
let {
  user: t
} = e, i = eu({
  author: t
});
return (0, n.jsx)(C.FocusBlock, {
  children: (0, n.jsxs)(C.Card, {
    className: el.chatPreview,
    outline: !0,
    'aria-hidden': !0,
    children: [
      (0, n.jsx)(p.Z, {
        className: el.mockMessage,
        author: (0, h.ZH)(i),
        message: i
      }, i.id),
      (0, n.jsxs)('div', {
        className: el.mockInput,
        children: [
          (0, n.jsx)(C.CirclePlusIcon, {
            size: 'md',
            color: 'currentColor',
            className: el.mockInputButton
          }),
          (0, n.jsx)(C.ReactionIcon, {
            size: 'md',
            color: 'currentColor',
            className: el.mockInputButton
          })
        ]
      })
    ]
  })
});
  };
t.default = e => {
  var t, i, l;
  let {
transitionState: a,
onClose: r,
product: o,
category: u,
returnRef: m,
analyticsSource: E,
analyticsLocations: _
  } = e, I = (0, d.e7)([j.default], () => j.default.getCurrentUser()), {
analyticsLocations: v
  } = (0, f.ZP)([
..._,
L.Z.COLLECTIBLES_SHOP_DETAILS_MODAL
  ]);
  (0, W.u9)(o);
  let [x] = o.items;
  return (s.useEffect(() => {
let e = (null == x ? void 0 : x.type) === c.Z.AVATAR_DECORATION ? 'avatar decoration' : 'profile effect';
Z.default.track(et.rMx.OPEN_MODAL, {
  type: et.jXE.COLLECTIBLES_SHOP_DETAILS_MODAL,
  source: E,
  location_stack: v,
  sku_id: o.skuId,
  product_type: e
}), o.items.map(B.oK);
  }, [
E,
v,
o.skuId,
o.items,
null == x ? void 0 : x.type
  ]), null == I) ? null : (0, n.jsx)(f.Gt, {
value: v,
children: (0, n.jsx)(C.ModalRoot, {
  hideShadow: !0,
  className: el.modalRoot,
  returnRef: m,
  transitionState: a,
  size: C.ModalSize.DYNAMIC,
  children: (0, n.jsxs)(C.ModalContent, {
    className: el.modalContent,
    children: [
      (0, n.jsx)(ec, {
        user: I,
        product: o,
        category: u,
        onClose: r
      }),
      (0, n.jsxs)('div', {
        className: o.type === c.Z.AVATAR_DECORATION ? el.collectiblePreviewsContainerWithChat : el.collectiblePreviewsContainerNoChat,
        children: [
          (0, n.jsx)(V.Z, {
            asset: null !== (l = u.pdpBg) && void 0 !== l ? l : o.banner,
            addGradient: null === (t = ee.Ve[u.skuId]) || void 0 === t ? void 0 : t.addGradient,
            size: (0, X.ML)(540),
            className: el.categoryBanner,
            blur: !0
          }),
          (0, n.jsx)(ed, {
            user: I,
            product: o
          }),
          (0, n.jsxs)('div', {
            className: el.profilePreviewHeader,
            children: [
              (0, n.jsx)('div', {
                className: el.titleImageContainer,
                children: (0, n.jsx)('img', {
                  className: el.titleImage,
                  style: null === (i = ee.Ve[u.skuId]) || void 0 === i ? void 0 : i.pdpLogoStyle,
                  src: (0, R.uV)(u.logo, {
                    size: Y.n
                  }),
                  alt: u.name
                })
              }),
              (0, n.jsx)(C.ModalCloseButton, {
                onClick: r,
                className: el.modalCloseButton,
                withCircleBackground: !0
              })
            ]
          })
        ]
      })
    ]
  })
})
  });
};