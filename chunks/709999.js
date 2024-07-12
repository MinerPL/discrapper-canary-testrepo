n(47120), n(627341);
var r = n(735250),
  s = n(470079),
  a = n(120356),
  o = n.n(a),
  i = n(512722),
  l = n.n(i),
  c = n(278074),
  d = n(873546),
  u = n(979554),
  p = n(399606),
  g = n(692547),
  f = n(663002),
  C = n(481060),
  m = n(37234),
  h = n(727637),
  _ = n(607070),
  b = n(100527),
  x = n(906732),
  I = n(1585),
  E = n(333867),
  L = n(197115),
  S = n(300284),
  v = n(876917),
  T = n(642619),
  N = n(210887),
  O = n(74538),
  j = n(335131),
  Z = n(1870),
  k = n(884697),
  R = n(890249),
  A = n(635552),
  P = n(724994),
  B = n(624377),
  M = n(390698),
  y = n(813083),
  w = n(680942),
  F = n(558060),
  D = n(237031),
  H = n(616066),
  U = n(216541),
  G = n(832149),
  W = n(474936),
  V = n(689938),
  Y = n(445968);
let z = e => {
let {
  children: t,
  onClick: n,
  ...s
} = e;
return (0, r.jsx)(C.Button, {
  fullWidth: !0,
  look: C.Button.Looks.FILLED,
  onClick: e => {
    e.stopPropagation(), n();
  },
  ...s,
  children: t
});
  },
  K = e => {
let {
  className: t,
  ...n
} = e;
return (0, r.jsx)(C.Button, {
  color: C.ButtonColors.BRAND,
  look: C.Button.Looks.FILLED,
  size: C.ButtonSizes.ICON,
  className: o()(Y.previewButton, t),
  innerClassName: Y.previewButtonInner,
  'aria-label': V.Z.Messages.PREVIEW,
  ...n,
  children: (0, r.jsx)(C.EyeIcon, {
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
...q ? [b.Z.COLLECTIBLES_SHOP_POPULAR_PICKS_CAROUSEL] : [],
b.Z.COLLECTIBLES_SHOP_CARD
  ]), J = s.useRef(null), Q = (0, h.Z)(J), [ee, et] = s.useState(!1), en = Q || ee, [er] = t.items, es = (0, p.e7)([_.Z], () => _.Z.useReducedMotion), {
backgroundColors: ea
  } = (0, B.Z)(t.styles), eo = O.ZP.canUseCollectibles(n), ei = (0, k.XM)(t, eo, !1), el = s.useMemo(() => (0, k.BH)(t, eo), [
t,
eo
  ]), ec = (0, k.G1)(t), ed = (0, k.rN)(t), {
isPurchased: eu,
isPartiallyPurchased: ep
  } = (0, P.L)(t), [eg, ef] = (0, p.Wu)([Z.Z], () => [
Z.Z.isClaiming === t.skuId,
null != Z.Z.isClaiming && Z.Z.isClaiming !== t.skuId
  ]), eC = (0, p.e7)([N.Z], () => (0, f.w)(N.Z.theme)), em = (0, R.m)('CollectiblesCollectedModal'), eh = (0, k.x6)(t) || em, e_ = (0, k.Yq)(t.skuId);
  s.useEffect(() => {
let {
  current: e
} = J;
if (null == e)
  return;
let t = () => et(!0);
return e.addEventListener('focusin', t), e.blur(), () => {
  e.removeEventListener('focusin', t);
};
  }, []), s.useEffect(() => {
null == i || i(J);
  }, [i]);
  let eb = (0, S.Z)({
  analyticsLocations: $
}),
ex = s.useRef(null),
{
  handleUseNow: eI,
  isApplying: eE
} = (0, A.W)({
  product: t
}),
eL = () => {
  if ((0, m.xf)(), eb(), t.type === u.Z.AVATAR_DECORATION && null != er) {
    l()(er.type === t.type, 'product type is equivlant to first item\'s check for avatar deco'), (0, I.ps)({
      initialSelectedDecoration: er,
      analyticsLocations: $
    });
    return;
  }
  t.type === u.Z.PROFILE_EFFECT && (0, T.H)({
    initialSelectedEffectId: er.id,
    analyticsLocations: $
  });
},
eS = e => n => {
  ex.current = n.currentTarget, (0, D.T)({
    product: t,
    category: a,
    analyticsLocations: $,
    analyticsSource: e,
    returnRef: ex
  });
},
ev = eS(b.Z.COLLECTIBLES_SHOP_CARD),
eT = eS(b.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
eN = () => (0, r.jsx)('div', {
  className: Y.hoverUpsellContainer,
  children: (0, r.jsx)(L.Z, {
    fullWidth: !0,
    className: Y.__invalid_premiumSubscribeButton,
    disabled: ef,
    onClick: e => e.stopPropagation(),
    buttonText: V.Z.Messages.UNLOCK_WITH_NITRO,
    subscriptionTier: W.Si.TIER_2
  })
}),
eO = () => eu || ep ? (0, r.jsx)(M.U, {
  className: Y.priceTag,
  isPartiallyPurchased: ep
}) : ec ? (0, r.jsx)(C.Text, {
  variant: 'text-md/semibold',
  className: Y.priceTag,
  children: V.Z.Messages.COLLECTIBLES_INCLUDED_WITH_PREMIUM
}) : (0, r.jsx)(F.Z, {
  product: t,
  discount: el,
  isPremiumUser: eo,
  className: Y.priceTag
}),
ej = () => ec || d.tq ? null : ed ? (0, r.jsx)(K, {
  onClick: eT
}) : (0, r.jsx)(w.Z, {
  product: t,
  returnRef: J,
  isGiftEasterEggEnabled: X,
  disableCustomColor: !0,
  tooltipDelay: 250
}),
eZ = () => {
  if (ec && !eo && !ed)
    return eN();
  let e = ec ? {
    submitting: eg,
    submittingStartedLabel: V.Z.Messages.COLLECTIBLES_COLLECTING,
    submittingFinishedLabel: V.Z.Messages.COLLECTIBLES_COLLECTING_FINISHED,
    onClick: async () => {
      await (0, j.fK)(t.skuId), (0, G.Z)({
        product: t,
        analyticsLocations: $
      });
    }
  } : {
    onClick: () => (0, E.Z)({
      skuId: t.skuId,
      analyticsLocations: $,
      returnRef: J
    })
  };
  return (0, r.jsxs)('div', {
    className: Y.buttonsContainer,
    children: [
      ep ? null : eu ? (0, r.jsx)(z, {
        disabled: ef,
        onClick: eh ? eI : eL,
        submitting: eE,
        children: V.Z.Messages.COLLECTIBLES_USE_NOW
      }) : (0, r.jsx)(z, {
        disabled: ef,
        className: Y.purchaseButton,
        ...e,
        children: ec ? V.Z.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION : V.Z.Messages.COLLECTIBLES_PURCHASE.format({
          price: ei
        })
      }),
      ej()
    ]
  });
},
ek = eC ? '0 0 15px 1px '.concat(g.Z.unsafe_rawColors.PRIMARY_700.css) : 'var(--elevation-high)';
  return (0, k.x6)(t) && null != el && el.discountPercentage < 0 ? null : (0, r.jsx)(C.FocusRing, {
children: (0, r.jsxs)(C.Clickable, {
  innerRef: J,
  className: o()(Y.shopCard, {
    [Y.partiallyOwned]: ep,
    [Y.shopCardAnimation]: !es
  }),
  onBlur: () => et(!1),
  onClick: ev,
  style: null != ea ? {
    backgroundColor: eC ? 'var(--background-floating)' : 'var(--background-secondary)',
    borderColor: 'var(--chat-border)',
    boxShadow: en ? ek : 'none'
  } : void 0,
  id: 'shop-item-'.concat(t.skuId),
  children: [
    ec && (0, r.jsx)(C.Tooltip, {
      tooltipContentClassName: Y.premiumWheelTooltipContent,
      color: C.Tooltip.Colors.PRIMARY,
      text: V.Z.Messages.COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER,
      children: e => (0, r.jsx)(C.TextBadge, {
        ...e,
        className: Y.premiumWheelBadge,
        text: (0, r.jsx)(C.NitroWheelIcon, {
          size: 'md',
          color: 'currentColor',
          className: Y.premiumWheel
        })
      })
    }),
    (0, r.jsx)('div', {
      className: Y.preview,
      children: (0, c.EQ)(t.type).with(u.Z.PROFILE_EFFECT, () => (0, r.jsx)('div', {
        className: Y.profileEffectShopPreview,
        children: (0, r.jsx)(v.Z, {
          isHovering: en,
          profileEffectId: er.id,
          isPurchased: eu,
          removeSetHeight: !0
        })
      })).with(u.Z.AVATAR_DECORATION, () => (l()(er.type === u.Z.AVATAR_DECORATION, 'ts-match already checked the type'), (0, r.jsx)('div', {
        className: Y.avatarContainer,
        children: (0, r.jsx)(H.R, {
          item: er,
          user: n,
          isPurchased: eu,
          isHighlighted: en
        })
      }))).with(u.Z.BUNDLE, () => (0, r.jsx)(U.d, {
        product: t,
        user: n,
        isPurchased: eu,
        isHighlighted: en
      })).otherwise(() => null)
    }),
    eu ? (0, r.jsx)('div', {
      className: Y.checkmarkWrapper,
      children: (0, r.jsx)(C.CheckmarkBoldIcon, {
        size: 'custom',
        color: 'currentColor',
        width: 38,
        height: 38,
        className: Y.checkmark
      })
    }) : null,
    (0, r.jsxs)('div', {
      className: o()(Y.cardText, {
        [Y.cardTextBlur]: (null == er ? void 0 : er.type) === u.Z.PROFILE_EFFECT
      }),
      children: [
        (0, r.jsx)('div', {
          className: o()(Y.cardBackground, eC ? Y.darkCardBackground : Y.lightCardBackground, (null == er ? void 0 : er.type) === u.Z.PROFILE_EFFECT ? Y.cardLowOpacity : null)
        }),
        (0, r.jsx)(C.Text, {
          variant: 'text-lg/bold',
          className: Y.productName,
          children: t.name
        }),
        (0, r.jsxs)('div', {
          className: Y.detailsWrapper,
          children: [
            (0, r.jsx)('div', {
              className: ep ? void 0 : Y.innerBlur,
              children: eO()
            }),
            (0, r.jsx)('div', {
              className: Y.innerHover,
              children: eZ()
            })
          ]
        })
      ]
    }),
    (0, r.jsx)(y.Z, {
      category: a,
      className: Y.limitedTimeBadge,
      display: 'card'
    }),
    e_ && !ep && !eu && (0, r.jsx)(C.TextBadge, {
      text: V.Z.Messages.NEW,
      disableColor: !0,
      className: Y.newBadge
    })
  ]
})
  });
};