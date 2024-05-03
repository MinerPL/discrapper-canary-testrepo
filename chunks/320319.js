"use strict";
s.r(t), s("47120");
var a = s("735250"),
  r = s("470079"),
  i = s("120356"),
  n = s.n(i),
  l = s("392711"),
  o = s("990547"),
  u = s("399606"),
  d = s("524437"),
  c = s("481060"),
  _ = s("607070"),
  E = s("213609"),
  T = s("605236"),
  I = s("706140"),
  R = s("626135"),
  f = s("314684"),
  S = s("715627"),
  m = s("176782"),
  A = s("238108"),
  N = s("32173"),
  p = s("391110"),
  g = s("484239"),
  C = s("658370"),
  P = s("735825"),
  O = s("981631"),
  M = s("921944"),
  h = s("689938"),
  L = s("58410");
let x = {
    xMin: -80,
    xMax: 80,
    yMin: -150,
    yMax: -20
  },
  v = r.memo(e => {
    let {
      name: t,
      canReveal: s = !0,
      dismissibleContentType: i,
      forceShadow: m,
      cardType: g,
      confettiCanvas: C
    } = e, D = (0, u.useStateFromStores)([_.default], () => _.default.useReducedMotion), [U, j] = r.useState(!1), [y, B] = r.useState(!1), G = (0, f.useFreeBoostUserTenureReward)(), k = (0, f.useShouldShowConfettiAndGlow)(), [H, F] = r.useState(!1), [w, K] = r.useState(t === N.PerksDiscoverabilityCardTypes.FREE_BOOST && k && (null == G ? void 0 : G.nitroTenureStatus) === P.NitroRewardStatus.REDEEMABLE);
    r.useEffect(() => {
      t === N.PerksDiscoverabilityCardTypes.FREE_BOOST && k && (null == G ? void 0 : G.nitroTenureStatus) === P.NitroRewardStatus.REDEEMABLE && K(!0)
    }, [k, t, G]);
    let W = r.useCallback(() => {
        F(!0)
      }, []),
      V = g === p.PerksDiscoverabilityCardSection.CARD_CAROUSEL_FIRST_ROW || g === p.PerksDiscoverabilityCardSection.CARD_CAROUSEL_SECOND_ROW || g === p.PerksDiscoverabilityCardSection.CARD_CAROUSEL_THIRD_ROW,
      Y = (0, N.default)(),
      [z, X] = (0, I.useGetDismissibleContent)(null != i && s || i === d.DismissibleContent.TENURE_REWARD_REDEEMABLE_CONFETTI ? [i] : []);
    r.useEffect(() => () => {
      z === d.DismissibleContent.TENURE_REWARD_REDEEMABLE_CONFETTI && H && (0, T.markDismissibleContentAsDismissed)(z)
    }, [z, H]), r.useEffect(() => {
      z === d.DismissibleContent.TENURE_REWARD_REDEEMABLE_CONFETTI && H && (0, T.markDismissibleContentAsDismissed)(z)
    }, [z, H]);
    let {
      easterEggLevel: Q,
      isEasterEggTriggered: Z,
      onHover: J,
      onUnhover: q
    } = (0, A.default)(5), $ = (0, l.debounce)(() => {
      R.default.track(O.AnalyticEvents.PREMIUM_MARKETING_WHAT_IS_NEW_CARD_HOVERED, {
        card_type: (0, l.snakeCase)(t),
        is_tenure_reward: t === N.PerksDiscoverabilityCardTypes.FREE_BOOST,
        reward_status: null == G ? void 0 : G.nitroTenureStatus
      })
    }, 800), ee = r.useRef(null);
    e = {
      onMouseEnter: $,
      ...e
    };
    let et = z !== i || null == i || y || i === d.DismissibleContent.TENURE_REWARD_REDEEMABLE_CONFETTI;
    return (r.useEffect(() => {
      D && U && (B(!0), R.default.track(O.AnalyticEvents.PREMIUM_MARKETING_PERK_CARD_FLIPPED, {
        card_type: t
      }), null != i && X(M.ContentDismissActionType.TAKE_ACTION))
    }, [D, U, i, t, X]), (0, E.default)({
      type: o.ImpressionTypes.VIEW,
      name: o.ImpressionNames.PREMIUM_MARKETING_TENURE_REWARD_CARD,
      properties: {
        user_tenure_reward_id: null == G ? void 0 : G.tenureRewardStatusId,
        tenure_reward_id: null == G ? void 0 : G.tenureRewardSkuId,
        reward_type: P.NitroRewardType.SERVER_BOOST,
        redeemable_at: null == G ? void 0 : G.redeemableAt,
        reward_status: null == G ? void 0 : G.nitroTenureStatus
      }
    }, {
      disableTrack: t !== N.PerksDiscoverabilityCardTypes.FREE_BOOST || null == G
    }), s) ? t === N.PerksDiscoverabilityCardTypes.UPCOMING_DROP_UNTIMED ? (0, a.jsx)("div", {
      className: n()(L.flipCardContainer, {
        [L.forceShadow]: m
      }),
      onMouseEnter: J,
      onFocus: J,
      onMouseLeave: q,
      onBlur: q,
      children: (0, a.jsxs)("div", {
        className: n()(L.flipCard, {
          [L.partialFlipCard]: !Z,
          [L.ultraFlipCard]: Z,
          [L.rotateCard]: Z && 3 === Q,
          [L.reducedMotion]: D
        }),
        children: [(0, a.jsx)("div", {
          className: L.flipCardFront,
          children: (0, a.jsx)(b, {
            ...e,
            className: L.topCover
          })
        }), (0, a.jsx)("div", {
          className: L.flipCardBack,
          children: (0, a.jsx)(b, {
            ...e,
            className: L.topCover
          })
        })]
      })
    }) : et ? (0, a.jsx)(a.Fragment, {
      children: (0, a.jsxs)("div", {
        className: n()({
          [L.noFlipCardContainer]: !V,
          [L.noFlipCardContainerCarousel]: V,
          [L.forceShadow]: m,
          [L.reducedMotion]: D
        }),
        children: [(0, a.jsx)(b, {
          ...e,
          ref: t === N.PerksDiscoverabilityCardTypes.FREE_BOOST ? ee : void 0
        }), w && (0, a.jsx)(S.default, {
          speedValues: x,
          numBursts: 3,
          particlesPerBurst: 15,
          confettiTarget: ee.current,
          offsetXPercentageMax: -30,
          offsetXPercentageMin: -70,
          offsetYPercentageMax: 40,
          offsetYPercentageMin: 20,
          customConfettiCanvas: C,
          dragCoefficientValue: 1e-5,
          onAnimationEnd: W
        })]
      })
    }) : (0, a.jsx)("div", {
      className: n()(L.flipCardContainer, {
        [L.forceShadow]: m
      }),
      children: (0, a.jsxs)(c.Clickable, {
        onClick: () => j(!0),
        className: n()(L.flipCard, L.clickable, {
          [L.flipped]: U,
          [L.partialFlipCard]: !y && !U,
          [L.reducedMotion]: D
        }),
        onTransitionEnd: e => {
          U && "transform" === e.propertyName && e.target.classList.contains(L.flipCard) && (B(!0), R.default.track(O.AnalyticEvents.PREMIUM_MARKETING_PERK_CARD_FLIPPED, {
            card_type: t
          }), null != i && X(M.ContentDismissActionType.TAKE_ACTION))
        },
        children: [(0, a.jsx)("div", {
          className: L.flipCardHidden,
          "aria-hidden": !0,
          children: (0, a.jsx)(b, {
            ...e
          })
        }), (0, a.jsx)("div", {
          className: L.flipCardFront,
          children: (0, a.jsx)(b, {
            ...Y.upcomingDropUntimed,
            pillText: ""
          })
        }), (0, a.jsx)("div", {
          className: L.flipCardBack,
          children: (0, a.jsx)(b, {
            ...e,
            description: ""
          })
        }), (0, a.jsx)("div", {
          className: L.flipCardButtonContainer,
          children: (0, a.jsx)(c.Button, {
            onClick: () => j(!0),
            children: h.default.Messages.REVEAL
          })
        })]
      })
    }) : (0, a.jsx)(v, {
      ...Y.upcomingDropUntimed,
      forceShadow: m
    })
  });
v.displayName = "PerkDiscoverabilityCard";
let b = r.forwardRef((e, t) => {
  var s;
  let {
    title: i,
    titleClassName: l = "",
    subtitle: o = "",
    description: u = "",
    descriptionCta: d = "",
    isPremiumGetCta: _,
    onCtaClick: E,
    onMouseEnter: T,
    className: I,
    perkComponent: R,
    cardVariant: S,
    cardType: A,
    onClick: N,
    backgroundImage: P,
    pillText: O,
    perkImage: M
  } = e, h = A === p.PerksDiscoverabilityCardSection.CARD_CAROUSEL_FIRST_ROW || A === p.PerksDiscoverabilityCardSection.CARD_CAROUSEL_SECOND_ROW || A === p.PerksDiscoverabilityCardSection.CARD_CAROUSEL_THIRD_ROW, x = 0 !== u.length || 0 !== o.length && S === p.CardVariants.REWARD, v = (0, f.useShouldShowConfettiAndGlow)(), [b, D] = r.useState(v);
  r.useEffect(() => {
    v && D(!0)
  }, [v]);
  let U = (0, m.useCardVariantsInfo)(S);
  return (0, a.jsxs)(c.Clickable, {
    className: n()(L.card, I, !0 === b ? null === (s = U.cardContainer) || void 0 === s ? void 0 : s.className : void 0, {
      [L.clickable]: null != N,
      [L.hideOverflow]: h
    }),
    onMouseEnter: T,
    style: {
      backgroundImage: null != P ? "url(".concat(P, ")") : void 0
    },
    onClick: N,
    children: [null != O && (0, a.jsx)(c.Text, {
      variant: "text-xs/semibold",
      className: L.pill,
      children: O
    }), (0, a.jsx)("div", {
      ref: t
    }), (0, a.jsx)(g.default, {
      title: i,
      titleClassName: l,
      subtitle: o,
      perkImage: M,
      isCarousel: h,
      descriptionCta: d,
      onCtaClick: E,
      perkComponent: R,
      subtitleClassName: L.cardSubtitle,
      cardVariant: S
    }), x && (0, a.jsx)(C.default, {
      title: i,
      titleClassName: l,
      subtitle: o,
      description: u,
      descriptionCta: d,
      isPremiumGetCta: _,
      onCtaClick: E,
      cardVariant: S,
      perkComponent: R
    }), (0, a.jsx)("div", {
      className: n()(L.cover, L.above),
      ref: t
    })]
  })
});
b.displayName = "PerkCardContent", t.default = v