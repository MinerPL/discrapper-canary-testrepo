"use strict";
s.r(t), s.d(t, {
  default: function() {
    return v
  }
}), s("222007");
var a = s("37983"),
  r = s("884691"),
  i = s("414456"),
  n = s.n(i),
  l = s("917351"),
  o = s("65597"),
  u = s("151426"),
  d = s("77078"),
  c = s("206230"),
  _ = s("10641"),
  E = s("235145"),
  T = s("599110"),
  I = s("359499"),
  f = s("357722"),
  S = s("159764"),
  R = s("119829"),
  m = s("628550"),
  A = s("907648"),
  N = s("880170"),
  p = s("616339"),
  C = s("511143"),
  g = s("49111"),
  O = s("994428"),
  P = s("782340"),
  M = s("635650");
let h = {
    xMin: -80,
    xMax: 80,
    yMin: -150,
    yMax: -20
  },
  L = r.memo(e => {
    let {
      name: t,
      canReveal: s = !0,
      dismissibleContentType: i,
      forceShadow: S,
      cardType: N,
      confettiCanvas: p
    } = e, v = (0, o.useStateFromStores)([c.default], () => c.default.useReducedMotion), [D, b] = r.useState(!1), [U, j] = r.useState(!1), G = (0, I.useFreeBoostUserTenureReward)(), y = (0, I.useShouldShowConfettiAndGlow)(), [B, k] = r.useState(!1), [H, F] = r.useState(t === m.PerksDiscoverabilityCardTypes.FREE_BOOST && y && (null == G ? void 0 : G.nitroTenureStatus) === C.NitroRewardStatus.REDEEMABLE);
    r.useEffect(() => {
      t === m.PerksDiscoverabilityCardTypes.FREE_BOOST && y && (null == G ? void 0 : G.nitroTenureStatus) === C.NitroRewardStatus.REDEEMABLE && F(!0)
    }, [y, t, G]);
    let K = r.useCallback(() => {
        k(!0)
      }, []),
      W = N === A.PerksDiscoverabilityCardSection.CARD_CAROUSEL_FIRST_ROW || N === A.PerksDiscoverabilityCardSection.CARD_CAROUSEL_SECOND_ROW || N === A.PerksDiscoverabilityCardSection.CARD_CAROUSEL_THIRD_ROW,
      w = (0, m.default)(),
      [V, Y] = (0, E.useGetDismissibleContent)(null != i && s || i === u.DismissibleContent.TENURE_REWARD_REDEEMABLE_CONFETTI ? [i] : []);
    r.useEffect(() => () => {
      V === u.DismissibleContent.TENURE_REWARD_REDEEMABLE_CONFETTI && B && (0, _.markDismissibleContentAsDismissed)(V)
    }, [V, B]), r.useEffect(() => {
      V === u.DismissibleContent.TENURE_REWARD_REDEEMABLE_CONFETTI && B && (0, _.markDismissibleContentAsDismissed)(V)
    }, [V, B]);
    let {
      easterEggLevel: z,
      isEasterEggTriggered: X,
      onHover: Q,
      onUnhover: J
    } = (0, R.default)(5), Z = (0, l.debounce)(() => {
      T.default.track(g.AnalyticEvents.PREMIUM_MARKETING_WHAT_IS_NEW_CARD_HOVERED, {
        card_type: (0, l.snakeCase)(t),
        is_tenure_reward: t === m.PerksDiscoverabilityCardTypes.FREE_BOOST,
        reward_status: null == G ? void 0 : G.nitroTenureStatus
      })
    }, 800), q = r.useRef(null);
    e = {
      onMouseEnter: Z,
      ...e
    };
    let $ = V !== i || null == i || U || i === u.DismissibleContent.TENURE_REWARD_REDEEMABLE_CONFETTI;
    return (r.useEffect(() => {
      v && D && (j(!0), T.default.track(g.AnalyticEvents.PREMIUM_MARKETING_PERK_CARD_FLIPPED, {
        card_type: t
      }), null != i && Y(O.ContentDismissActionType.TAKE_ACTION))
    }, [v, D, i, t, Y]), s) ? t === m.PerksDiscoverabilityCardTypes.UPCOMING_DROP_UNTIMED ? (0, a.jsx)("div", {
      className: n(M.flipCardContainer, {
        [M.forceShadow]: S
      }),
      onMouseEnter: Q,
      onFocus: Q,
      onMouseLeave: J,
      onBlur: J,
      children: (0, a.jsxs)("div", {
        className: n(M.flipCard, {
          [M.partialFlipCard]: !X,
          [M.ultraFlipCard]: X,
          [M.rotateCard]: X && 3 === z,
          [M.reducedMotion]: v
        }),
        children: [(0, a.jsx)("div", {
          className: M.flipCardFront,
          children: (0, a.jsx)(x, {
            ...e,
            className: M.topCover
          })
        }), (0, a.jsx)("div", {
          className: M.flipCardBack,
          children: (0, a.jsx)(x, {
            ...e,
            className: M.topCover
          })
        })]
      })
    }) : $ ? (0, a.jsx)(a.Fragment, {
      children: (0, a.jsxs)("div", {
        className: n({
          [M.noFlipCardContainer]: !W,
          [M.noFlipCardContainerCarousel]: W,
          [M.forceShadow]: S,
          [M.reducedMotion]: v
        }),
        children: [(0, a.jsx)(x, {
          ...e,
          ref: t === m.PerksDiscoverabilityCardTypes.FREE_BOOST ? q : void 0
        }), H && (0, a.jsx)(f.default, {
          speedValues: h,
          numBursts: 3,
          particlesPerBurst: 15,
          confettiTarget: q.current,
          offsetXPercentageMax: -30,
          offsetXPercentageMin: -70,
          offsetYPercentageMax: 40,
          offsetYPercentageMin: 20,
          customConfettiCanvas: p,
          dragCoefficientValue: 1e-5,
          onAnimationEnd: K
        })]
      })
    }) : (0, a.jsx)("div", {
      className: n(M.flipCardContainer, {
        [M.forceShadow]: S
      }),
      children: (0, a.jsxs)(d.Clickable, {
        onClick: () => b(!0),
        className: n(M.flipCard, M.clickable, {
          [M.flipped]: D,
          [M.partialFlipCard]: !U && !D,
          [M.reducedMotion]: v
        }),
        onTransitionEnd: e => {
          D && "transform" === e.propertyName && e.target.classList.contains(M.flipCard) && (j(!0), T.default.track(g.AnalyticEvents.PREMIUM_MARKETING_PERK_CARD_FLIPPED, {
            card_type: t
          }), null != i && Y(O.ContentDismissActionType.TAKE_ACTION))
        },
        children: [(0, a.jsx)("div", {
          className: M.flipCardHidden,
          "aria-hidden": !0,
          children: (0, a.jsx)(x, {
            ...e
          })
        }), (0, a.jsx)("div", {
          className: M.flipCardFront,
          children: (0, a.jsx)(x, {
            ...w.upcomingDropUntimed,
            pillText: ""
          })
        }), (0, a.jsx)("div", {
          className: M.flipCardBack,
          children: (0, a.jsx)(x, {
            ...e,
            description: ""
          })
        }), (0, a.jsx)("div", {
          className: M.flipCardButtonContainer,
          children: (0, a.jsx)(d.Button, {
            onClick: () => b(!0),
            children: P.default.Messages.REVEAL
          })
        })]
      })
    }) : (0, a.jsx)(L, {
      ...w.upcomingDropUntimed,
      forceShadow: S
    })
  });
L.displayName = "PerkDiscoverabilityCard";
let x = r.forwardRef((e, t) => {
  var s;
  let {
    title: i,
    titleClassName: l = "",
    subtitle: o = "",
    description: u = "",
    descriptionCta: c = "",
    isPremiumGetCta: _,
    onCtaClick: E,
    onMouseEnter: T,
    className: f,
    perkComponent: R,
    cardVariant: m,
    cardType: C,
    onClick: g,
    backgroundImage: O,
    pillText: P,
    perkImage: h
  } = e, L = C === A.PerksDiscoverabilityCardSection.CARD_CAROUSEL_FIRST_ROW || C === A.PerksDiscoverabilityCardSection.CARD_CAROUSEL_SECOND_ROW || C === A.PerksDiscoverabilityCardSection.CARD_CAROUSEL_THIRD_ROW, x = 0 !== u.length || 0 !== o.length && m === A.CardVariants.REWARD, v = (0, I.useShouldShowConfettiAndGlow)(), [D, b] = r.useState(v);
  r.useEffect(() => {
    v && b(!0)
  }, [v]);
  let U = (0, S.useCardVariantsInfo)(m);
  return (0, a.jsxs)(d.Clickable, {
    className: n(M.card, f, !0 === D ? null === (s = U.cardContainer) || void 0 === s ? void 0 : s.className : void 0, {
      [M.clickable]: null != g,
      [M.hideOverflow]: L
    }),
    onMouseEnter: T,
    style: {
      backgroundImage: null != O ? "url(".concat(O, ")") : void 0
    },
    onClick: g,
    children: [null != P && (0, a.jsx)(d.Text, {
      variant: "text-xs/semibold",
      className: M.pill,
      children: P
    }), (0, a.jsx)("div", {
      ref: t
    }), (0, a.jsx)(N.default, {
      title: i,
      titleClassName: l,
      subtitle: o,
      perkImage: h,
      isCarousel: L,
      descriptionCta: c,
      onCtaClick: E,
      perkComponent: R,
      subtitleClassName: M.cardSubtitle,
      cardVariant: m
    }), x && (0, a.jsx)(p.default, {
      title: i,
      titleClassName: l,
      subtitle: o,
      description: u,
      descriptionCta: c,
      isPremiumGetCta: _,
      onCtaClick: E,
      cardVariant: m,
      perkComponent: R
    }), (0, a.jsx)("div", {
      className: n(M.cover, M.above),
      ref: t
    })]
  })
});
x.displayName = "PerkCardContent";
var v = L