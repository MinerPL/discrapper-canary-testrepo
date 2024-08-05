n(47120);
var s = n(735250),
  a = n(470079),
  r = n(120356),
  i = n.n(r),
  l = n(392711),
  o = n(990547),
  c = n(399606),
  d = n(704215),
  _ = n(481060),
  u = n(607070),
  E = n(213609),
  T = n(605236),
  I = n(706140),
  R = n(626135),
  C = n(314684),
  g = n(715627),
  p = n(176782),
  A = n(238108),
  m = n(32173),
  N = n(391110),
  f = n(484239),
  h = n(658370),
  S = n(735825),
  M = n(981631),
  x = n(921944),
  b = n(689938),
  O = n(972272);
let P = {
xMin: -80,
xMax: 80,
yMin: -150,
yMax: -20
  },
  v = a.memo(e => {
let {
  name: t,
  canReveal: n = !0,
  dismissibleContentType: r,
  forceShadow: p,
  cardType: f,
  confettiCanvas: h
} = e, Z = null == e ? void 0 : e.onCtaClick, D = (0, c.e7)([u.Z], () => u.Z.useReducedMotion), [B, j] = a.useState(!1), [U, G] = a.useState(!1), y = (0, C.yQ)(), k = (0, C.IB)(), [H, w] = a.useState(!1), [F, V] = a.useState(t === m.u.FREE_BOOST && k && (null == y ? void 0 : y.nitroTenureStatus) === S.EB.REDEEMABLE);
a.useEffect(() => {
  t === m.u.FREE_BOOST && k && (null == y ? void 0 : y.nitroTenureStatus) === S.EB.REDEEMABLE && V(!0);
}, [
  k,
  t,
  y
]);
let W = a.useCallback(() => {
    w(!0);
  }, []),
  K = f === N.R0.CARD_CAROUSEL_FIRST_ROW || f === N.R0.CARD_CAROUSEL_SECOND_ROW || f === N.R0.CARD_CAROUSEL_THIRD_ROW,
  Y = (0, m.Z)(),
  [z, Q] = (0, I.c)(null != r && n || r === d.z.TENURE_REWARD_REDEEMABLE_CONFETTI ? [r] : []);
a.useEffect(() => () => {
  z === d.z.TENURE_REWARD_REDEEMABLE_CONFETTI && H && (0, T.EW)(z);
}, [
  z,
  H
]), a.useEffect(() => {
  z === d.z.TENURE_REWARD_REDEEMABLE_CONFETTI && H && (0, T.EW)(z);
}, [
  z,
  H
]);
let {
  easterEggLevel: q,
  isEasterEggTriggered: J,
  onHover: X,
  onUnhover: $
} = (0, A.Z)(5), ee = (0, l.debounce)(() => {
  R.default.track(M.rMx.PREMIUM_MARKETING_WHAT_IS_NEW_CARD_HOVERED, {
    card_type: (0, l.snakeCase)(t),
    is_tenure_reward: t === m.u.FREE_BOOST,
    reward_status: null == y ? void 0 : y.nitroTenureStatus
  });
}, 800), et = (0, l.debounce)(() => {
  null != Z && R.default.track(M.rMx.PERK_DISCOVERABILITY_CARD_CTA_CLICKED, {
    card_type: (0, l.snakeCase)(t),
    function_name: (0, l.snakeCase)(Z.name)
  });
}, 800), en = a.useRef(null);
e = {
  onMouseEnter: ee,
  ...e,
  onCtaClick: null != Z ? () => {
    null == Z || Z(), et();
  } : void 0
};
let es = z !== r || null == r || U || r === d.z.TENURE_REWARD_REDEEMABLE_CONFETTI;
return (a.useEffect(() => {
  D && B && (G(!0), R.default.track(M.rMx.PREMIUM_MARKETING_PERK_CARD_FLIPPED, {
    card_type: t
  }), null != r && Q(x.L.TAKE_ACTION));
}, [
  D,
  B,
  r,
  t,
  Q
]), (0, E.Z)({
  type: o.ImpressionTypes.VIEW,
  name: o.ImpressionNames.PREMIUM_MARKETING_TENURE_REWARD_CARD,
  properties: {
    user_tenure_reward_id: null == y ? void 0 : y.tenureRewardStatusId,
    tenure_reward_id: null == y ? void 0 : y.tenureRewardSkuId,
    reward_type: S.nW.SERVER_BOOST,
    redeemable_at: null == y ? void 0 : y.redeemableAt,
    reward_status: null == y ? void 0 : y.nitroTenureStatus
  }
}, {
  disableTrack: t !== m.u.FREE_BOOST || null == y
}), (0, E.Z)({
  type: o.ImpressionTypes.VIEW,
  name: o.ImpressionNames.PERK_DISCOVERABILITY_CARD,
  properties: {
    name: t
  }
}), n) ? t === m.u.UPCOMING_DROP_UNTIMED ? (0, s.jsx)('div', {
  className: i()(O.flipCardContainer, {
    [O.forceShadow]: p
  }),
  onMouseEnter: X,
  onFocus: X,
  onMouseLeave: $,
  onBlur: $,
  children: (0, s.jsxs)('div', {
    className: i()(O.flipCard, {
      [O.partialFlipCard]: !J,
      [O.ultraFlipCard]: J,
      [O.rotateCard]: J && 3 === q,
      [O.reducedMotion]: D
    }),
    children: [
      (0, s.jsx)('div', {
        className: O.flipCardFront,
        children: (0, s.jsx)(L, {
          ...e,
          className: O.topCover
        })
      }),
      (0, s.jsx)('div', {
        className: O.flipCardBack,
        children: (0, s.jsx)(L, {
          ...e,
          className: O.topCover
        })
      })
    ]
  })
}) : es ? (0, s.jsx)(s.Fragment, {
  children: (0, s.jsxs)('div', {
    className: i()({
      [O.noFlipCardContainer]: !K,
      [O.noFlipCardContainerCarousel]: K,
      [O.forceShadow]: p,
      [O.reducedMotion]: D
    }),
    children: [
      (0, s.jsx)(L, {
        ...e,
        ref: t === m.u.FREE_BOOST ? en : void 0
      }),
      F && (0, s.jsx)(g.Z, {
        speedValues: P,
        numBursts: 3,
        particlesPerBurst: 15,
        confettiTarget: en.current,
        offsetXPercentageMax: -30,
        offsetXPercentageMin: -70,
        offsetYPercentageMax: 40,
        offsetYPercentageMin: 20,
        customConfettiCanvas: h,
        dragCoefficientValue: 0.00001,
        onAnimationEnd: W
      })
    ]
  })
}) : (0, s.jsx)('div', {
  className: i()(O.flipCardContainer, {
    [O.forceShadow]: p
  }),
  children: (0, s.jsxs)(_.Clickable, {
    onClick: () => j(!0),
    className: i()(O.flipCard, O.clickable, {
      [O.flipped]: B,
      [O.partialFlipCard]: !U && !B,
      [O.reducedMotion]: D
    }),
    onTransitionEnd: e => {
      if (!!B && 'transform' === e.propertyName && !!e.target.classList.contains(O.flipCard))
        G(!0), R.default.track(M.rMx.PREMIUM_MARKETING_PERK_CARD_FLIPPED, {
          card_type: t
        }), null != r && Q(x.L.TAKE_ACTION);
    },
    children: [
      (0, s.jsx)('div', {
        className: O.flipCardHidden,
        'aria-hidden': !0,
        children: (0, s.jsx)(L, {
          ...e
        })
      }),
      (0, s.jsx)('div', {
        className: O.flipCardFront,
        children: (0, s.jsx)(L, {
          ...Y.upcomingDropUntimed,
          pillText: ''
        })
      }),
      (0, s.jsx)('div', {
        className: O.flipCardBack,
        children: (0, s.jsx)(L, {
          ...e,
          description: ''
        })
      }),
      (0, s.jsx)('div', {
        className: O.flipCardButtonContainer,
        children: (0, s.jsx)(_.Button, {
          onClick: () => j(!0),
          children: b.Z.Messages.REVEAL
        })
      })
    ]
  })
}) : (0, s.jsx)(v, {
  ...Y.upcomingDropUntimed,
  forceShadow: p
});
  });
v.displayName = 'PerkDiscoverabilityCard';
let L = a.forwardRef((e, t) => {
  var n;
  let {
title: r,
titleClassName: l = '',
subtitle: o = '',
description: c = '',
descriptionCta: d = '',
isPremiumGetCta: u,
onCtaClick: E,
onMouseEnter: T,
className: I,
perkComponent: R,
cardVariant: g,
cardType: A,
onClick: m,
backgroundImage: S,
pillText: M,
perkImage: x
  } = e, b = A === N.R0.CARD_CAROUSEL_FIRST_ROW || A === N.R0.CARD_CAROUSEL_SECOND_ROW || A === N.R0.CARD_CAROUSEL_THIRD_ROW, P = 0 !== c.length || 0 !== d.length || 0 !== o.length && g === N.zW.REWARD, v = (0, C.IB)(), [L, Z] = a.useState(v);
  a.useEffect(() => {
v && Z(!0);
  }, [v]);
  let D = (0, p._)(g);
  return (0, s.jsxs)(_.Clickable, {
className: i()(O.card, I, !0 === L ? null === (n = D.cardContainer) || void 0 === n ? void 0 : n.className : void 0, {
  [O.clickable]: null != m,
  [O.hideOverflow]: b
}),
onMouseEnter: T,
style: {
  backgroundImage: null != S ? 'url('.concat(S, ')') : void 0
},
onClick: m,
children: [
  null != M && (0, s.jsx)(_.Text, {
    variant: 'text-xs/semibold',
    className: O.pill,
    children: M
  }),
  (0, s.jsx)('div', {
    ref: t
  }),
  (0, s.jsx)(f.Z, {
    title: r,
    titleClassName: l,
    subtitle: o,
    perkImage: x,
    isCarousel: b,
    descriptionCta: d,
    onCtaClick: E,
    perkComponent: R,
    subtitleClassName: O.cardSubtitle,
    cardVariant: g
  }),
  P && (0, s.jsx)(h.Z, {
    title: r,
    titleClassName: l,
    subtitle: o,
    description: c,
    descriptionCta: d,
    isPremiumGetCta: u,
    onCtaClick: E,
    cardVariant: g,
    perkComponent: R
  }),
  (0, s.jsx)('div', {
    className: i()(O.cover, O.above),
    ref: t
  })
]
  });
});
L.displayName = 'PerkCardContent', t.Z = v;