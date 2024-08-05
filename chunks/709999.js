n(47120), n(627341);
var s = n(735250),
  r = n(470079),
  a = n(120356),
  o = n.n(a),
  i = n(512722),
  c = n.n(i),
  l = n(278074),
  d = n(873546),
  u = n(979554),
  f = n(399606),
  p = n(692547),
  g = n(663002),
  C = n(481060),
  _ = n(37234),
  m = n(727637),
  b = n(607070),
  h = n(100527),
  x = n(906732),
  E = n(1585),
  I = n(333867),
  v = n(197115),
  L = n(300284),
  S = n(876917),
  T = n(642619),
  N = n(210887),
  O = n(74538),
  k = n(335131),
  j = n(1870),
  P = n(884697),
  A = n(890249),
  B = n(635552),
  R = n(724994),
  Z = n(624377),
  M = n(390698),
  y = n(813083),
  w = n(680942),
  F = n(558060),
  H = n(237031),
  D = n(616066),
  U = n(216541),
  G = n(832149),
  W = n(474936),
  V = n(689938),
  z = n(445968);
let Y = e => {
let {
  children: t,
  onClick: n,
  ...r
} = e;
return (0, s.jsx)(C.Button, {
  fullWidth: !0,
  look: C.Button.Looks.FILLED,
  onClick: e => {
    e.stopPropagation(), n();
  },
  ...r,
  children: t
});
  },
  K = e => {
let {
  className: t,
  ...n
} = e;
return (0, s.jsx)(C.Button, {
  color: C.ButtonColors.BRAND,
  look: C.Button.Looks.FILLED,
  size: C.ButtonSizes.ICON,
  className: o()(z.previewButton, t),
  innerClassName: z.previewButtonInner,
  'aria-label': V.Z.Messages.PREVIEW,
  ...n,
  children: (0, s.jsx)(C.EyeIcon, {
    size: 'md',
    color: 'currentColor'
  })
});
  };
t.Z = function(e) {
  let {
product: t,
user: n,
category: a,
onMount: i,
isGiftEasterEggEnabled: X,
isPopularPicksRow: q
  } = e, {
analyticsLocations: $
  } = (0, x.ZP)([
...q ? [h.Z.COLLECTIBLES_SHOP_POPULAR_PICKS_CAROUSEL] : [],
h.Z.COLLECTIBLES_SHOP_CARD
  ]), J = r.useRef(null), Q = (0, m.Z)(J), [ee, et] = r.useState(!1), en = Q || ee, [es] = t.items, er = (0, f.e7)([b.Z], () => b.Z.useReducedMotion), {
backgroundColors: ea
  } = (0, Z.Z)(t.styles), eo = O.ZP.canUseCollectibles(n), ei = (0, P.XM)(t, eo, !1), ec = r.useMemo(() => (0, P.BH)(t, eo), [
t,
eo
  ]), el = (0, P.G1)(t), ed = (0, P.rN)(t), {
isPurchased: eu,
isPartiallyPurchased: ef
  } = (0, R.L)(t), [ep, eg] = (0, f.Wu)([j.Z], () => [
j.Z.isClaiming === t.skuId,
null != j.Z.isClaiming && j.Z.isClaiming !== t.skuId
  ]), eC = (0, f.e7)([N.Z], () => (0, g.w)(N.Z.theme)), e_ = (0, A.m)('CollectiblesCollectedModal'), em = (0, P.x6)(t) || e_, eb = (0, P.Yq)(t.skuId);
  r.useEffect(() => {
let {
  current: e
} = J;
if (null == e)
  return;
let t = () => et(!0);
return e.addEventListener('focusin', t), e.blur(), () => {
  e.removeEventListener('focusin', t);
};
  }, []), r.useEffect(() => {
null == i || i(J);
  }, [i]);
  let eh = (0, L.Z)({
  analyticsLocations: $
}),
ex = r.useRef(null),
{
  handleUseNow: eE,
  isApplying: eI
} = (0, B.W)({
  product: t
}),
ev = () => {
  if ((0, _.xf)(), eh(), t.type === u.Z.AVATAR_DECORATION && null != es) {
    c()(es.type === t.type, 'product type is equivlant to first item\'s check for avatar deco'), (0, E.ps)({
      initialSelectedDecoration: es,
      analyticsLocations: $
    });
    return;
  }
  t.type === u.Z.PROFILE_EFFECT && (0, T.H)({
    initialSelectedEffectId: es.id,
    analyticsLocations: $
  });
},
eL = e => n => {
  ex.current = n.currentTarget, (0, H.T)({
    product: t,
    category: a,
    analyticsLocations: $,
    analyticsSource: e,
    returnRef: ex
  });
},
eS = eL(h.Z.COLLECTIBLES_SHOP_CARD),
eT = eL(h.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
eN = () => (0, s.jsx)('div', {
  className: z.hoverUpsellContainer,
  children: (0, s.jsx)(v.Z, {
    fullWidth: !0,
    className: z.__invalid_premiumSubscribeButton,
    disabled: eg,
    onClick: e => e.stopPropagation(),
    buttonText: V.Z.Messages.UNLOCK_WITH_NITRO,
    subscriptionTier: W.Si.TIER_2
  })
}),
eO = () => eu || ef ? (0, s.jsx)(M.U, {
  className: z.priceTag,
  isPartiallyPurchased: ef
}) : el ? (0, s.jsx)(C.Text, {
  variant: 'text-md/semibold',
  className: z.priceTag,
  children: V.Z.Messages.COLLECTIBLES_INCLUDED_WITH_PREMIUM
}) : (0, s.jsx)(F.Z, {
  product: t,
  discount: ec,
  isPremiumUser: eo,
  className: z.priceTag
}),
ek = () => el || d.tq ? null : ed ? (0, s.jsx)(K, {
  onClick: eT
}) : (0, s.jsx)(w.Z, {
  product: t,
  returnRef: J,
  isGiftEasterEggEnabled: X,
  disableCustomColor: !0,
  tooltipDelay: 250
}),
ej = () => {
  if (el && !eo && !ed)
    return eN();
  let e = el ? {
    submitting: ep,
    submittingStartedLabel: V.Z.Messages.COLLECTIBLES_COLLECTING,
    submittingFinishedLabel: V.Z.Messages.COLLECTIBLES_COLLECTING_FINISHED,
    onClick: async () => {
      await (0, k.fK)(t.skuId), (0, G.Z)({
        product: t,
        analyticsLocations: $
      });
    }
  } : {
    onClick: () => (0, I.Z)({
      skuId: t.skuId,
      analyticsLocations: $,
      returnRef: J
    })
  };
  return (0, s.jsxs)('div', {
    className: z.buttonsContainer,
    children: [
      ef ? null : eu ? (0, s.jsx)(Y, {
        disabled: eg,
        onClick: em ? eE : ev,
        submitting: eI,
        children: V.Z.Messages.COLLECTIBLES_USE_NOW
      }) : (0, s.jsx)(Y, {
        disabled: eg,
        className: z.purchaseButton,
        ...e,
        children: el ? V.Z.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION : V.Z.Messages.COLLECTIBLES_PURCHASE.format({
          price: ei
        })
      }),
      ek()
    ]
  });
},
eP = eC ? '0 0 15px 1px '.concat(p.Z.unsafe_rawColors.PRIMARY_700.css) : 'var(--elevation-high)';
  return (0, P.x6)(t) && null != ec && ec.discountPercentage < 0 ? null : (0, s.jsx)(C.FocusRing, {
children: (0, s.jsxs)(C.Clickable, {
  innerRef: J,
  className: o()(z.shopCard, {
    [z.partiallyOwned]: ef,
    [z.shopCardAnimation]: !er
  }),
  onBlur: () => et(!1),
  onClick: eS,
  style: null != ea ? {
    backgroundColor: eC ? 'var(--background-floating)' : 'var(--background-secondary)',
    borderColor: 'var(--chat-border)',
    boxShadow: en ? eP : 'none'
  } : void 0,
  id: 'shop-item-'.concat(t.skuId),
  children: [
    el && (0, s.jsx)(C.Tooltip, {
      tooltipContentClassName: z.premiumWheelTooltipContent,
      color: C.Tooltip.Colors.PRIMARY,
      text: V.Z.Messages.COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER,
      children: e => (0, s.jsx)(C.TextBadge, {
        ...e,
        className: z.premiumWheelBadge,
        text: (0, s.jsx)(C.NitroWheelIcon, {
          size: 'md',
          color: 'currentColor',
          className: z.premiumWheel
        })
      })
    }),
    (0, s.jsx)('div', {
      className: z.preview,
      children: (0, l.EQ)(t.type).with(u.Z.PROFILE_EFFECT, () => (0, s.jsx)('div', {
        className: z.profileEffectShopPreview,
        children: (0, s.jsx)(S.Z, {
          isHovering: en,
          profileEffectId: es.id,
          isPurchased: eu,
          removeSetHeight: !0
        })
      })).with(u.Z.AVATAR_DECORATION, () => (c()(es.type === u.Z.AVATAR_DECORATION, 'ts-match already checked the type'), (0, s.jsx)('div', {
        className: z.avatarContainer,
        children: (0, s.jsx)(D.R, {
          item: es,
          user: n,
          isPurchased: eu,
          isHighlighted: en
        })
      }))).with(u.Z.BUNDLE, () => (0, s.jsx)(U.d, {
        product: t,
        user: n,
        isPurchased: eu,
        isHighlighted: en
      })).otherwise(() => null)
    }),
    eu ? (0, s.jsx)('div', {
      className: z.checkmarkWrapper,
      children: (0, s.jsx)(C.CheckmarkBoldIcon, {
        size: 'custom',
        color: 'currentColor',
        width: 38,
        height: 38,
        className: z.checkmark
      })
    }) : null,
    (0, s.jsxs)('div', {
      className: o()(z.cardText, {
        [z.cardTextBlur]: (null == es ? void 0 : es.type) === u.Z.PROFILE_EFFECT
      }),
      children: [
        (0, s.jsx)('div', {
          className: o()(z.cardBackground, eC ? z.darkCardBackground : z.lightCardBackground, (null == es ? void 0 : es.type) === u.Z.PROFILE_EFFECT ? z.cardLowOpacity : null)
        }),
        (0, s.jsx)(C.Text, {
          variant: 'text-lg/bold',
          className: z.productName,
          children: t.name
        }),
        (0, s.jsxs)('div', {
          className: z.detailsWrapper,
          children: [
            (0, s.jsx)('div', {
              className: ef ? void 0 : z.innerBlur,
              children: eO()
            }),
            (0, s.jsx)('div', {
              className: z.innerHover,
              children: ej()
            })
          ]
        })
      ]
    }),
    (0, s.jsx)(y.Z, {
      category: a,
      className: z.limitedTimeBadge,
      display: 'card'
    }),
    eb && !ef && !eu && (0, s.jsx)(C.TextBadge, {
      text: V.Z.Messages.NEW,
      disableColor: !0,
      className: z.newBadge
    })
  ]
})
  });
};