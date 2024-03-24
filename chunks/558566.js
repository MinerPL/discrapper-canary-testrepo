"use strict";
s.r(t), s.d(t, {
  default: function() {
    return D
  }
}), s("222007");
var a = s("37983"),
  r = s("884691"),
  n = s("414456"),
  i = s.n(n),
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
  R = s("119829"),
  S = s("628550"),
  m = s("907648"),
  N = s("598739"),
  A = s("880170"),
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
      dismissibleContentType: n,
      forceShadow: N,
      cardType: A,
      confettiCanvas: p
    } = e, D = (0, o.useStateFromStores)([c.default], () => c.default.useReducedMotion), [v, U] = r.useState(!1), [b, j] = r.useState(!1), B = (0, I.useFreeBoostUserTenureReward)(), G = (0, I.useShouldShowConfettiAndGlow)(), [y, k] = r.useState(!1), [H, F] = r.useState(t === S.PerksDiscoverabilityCardTypes.FREE_BOOST && G && (null == B ? void 0 : B.nitroTenureStatus) === C.NitroRewardStatus.REDEEMABLE);
    r.useEffect(() => {
      t === S.PerksDiscoverabilityCardTypes.FREE_BOOST && G && (null == B ? void 0 : B.nitroTenureStatus) === C.NitroRewardStatus.REDEEMABLE && F(!0)
    }, [G, t, B]);
    let w = r.useCallback(() => {
        k(!0)
      }, []),
      K = A === m.PerksDiscoverabilityCardSection.CARD_CAROUSEL_FIRST_ROW || A === m.PerksDiscoverabilityCardSection.CARD_CAROUSEL_SECOND_ROW || A === m.PerksDiscoverabilityCardSection.CARD_CAROUSEL_THIRD_ROW,
      W = (0, S.default)(),
      [V, Y] = (0, E.useGetDismissibleContent)(null != n && s || n === u.DismissibleContent.TENURE_REWARD_REDEEMABLE_CONFETTI ? [n] : []);
    r.useEffect(() => () => {
      V === u.DismissibleContent.TENURE_REWARD_REDEEMABLE_CONFETTI && y && (0, _.markDismissibleContentAsDismissed)(V)
    }, [V, y]), r.useEffect(() => {
      V === u.DismissibleContent.TENURE_REWARD_REDEEMABLE_CONFETTI && y && (0, _.markDismissibleContentAsDismissed)(V)
    }, [V, y]);
    let {
      easterEggLevel: z,
      isEasterEggTriggered: X,
      onHover: Q,
      onUnhover: Z
    } = (0, R.default)(5), J = (0, l.debounce)(() => {
      T.default.track(g.AnalyticEvents.PREMIUM_MARKETING_WHAT_IS_NEW_CARD_HOVERED, {
        card_type: (0, l.snakeCase)(t),
        is_tenure_reward: t === S.PerksDiscoverabilityCardTypes.FREE_BOOST,
        reward_status: null == B ? void 0 : B.nitroTenureStatus
      })
    }, 800), q = r.useRef(null);
    e = {
      onMouseEnter: J,
      ...e
    };
    let $ = V !== n || null == n || b || n === u.DismissibleContent.TENURE_REWARD_REDEEMABLE_CONFETTI;
    return (r.useEffect(() => {
      D && v && (j(!0), T.default.track(g.AnalyticEvents.PREMIUM_MARKETING_PERK_CARD_FLIPPED, {
        card_type: t
      }), null != n && Y(O.ContentDismissActionType.TAKE_ACTION))
    }, [D, v, n, t, Y]), s) ? t === S.PerksDiscoverabilityCardTypes.UPCOMING_DROP_UNTIMED ? (0, a.jsx)("div", {
      className: i(M.flipCardContainer, {
        [M.forceShadow]: N
      }),
      onMouseEnter: Q,
      onFocus: Q,
      onMouseLeave: Z,
      onBlur: Z,
      children: (0, a.jsxs)("div", {
        className: i(M.flipCard, {
          [M.partialFlipCard]: !X,
          [M.ultraFlipCard]: X,
          [M.rotateCard]: X && 3 === z,
          [M.reducedMotion]: D
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
        className: i({
          [M.noFlipCardContainer]: !K,
          [M.noFlipCardContainerCarousel]: K,
          [M.forceShadow]: N,
          [M.reducedMotion]: D
        }),
        children: [(0, a.jsx)(x, {
          ...e,
          ref: t === S.PerksDiscoverabilityCardTypes.FREE_BOOST ? q : void 0
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
          onAnimationEnd: w
        })]
      })
    }) : (0, a.jsx)("div", {
      className: i(M.flipCardContainer, {
        [M.forceShadow]: N
      }),
      children: (0, a.jsxs)(d.Clickable, {
        onClick: () => U(!0),
        className: i(M.flipCard, M.clickable, {
          [M.flipped]: v,
          [M.partialFlipCard]: !b && !v,
          [M.reducedMotion]: D
        }),
        onTransitionEnd: e => {
          v && "transform" === e.propertyName && e.target.classList.contains(M.flipCard) && (j(!0), T.default.track(g.AnalyticEvents.PREMIUM_MARKETING_PERK_CARD_FLIPPED, {
            card_type: t
          }), null != n && Y(O.ContentDismissActionType.TAKE_ACTION))
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
            ...W.upcomingDropUntimed,
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
            onClick: () => U(!0),
            children: P.default.Messages.REVEAL
          })
        })]
      })
    }) : (0, a.jsx)(L, {
      ...W.upcomingDropUntimed,
      forceShadow: N
    })
  });
L.displayName = "PerkDiscoverabilityCard";
let x = r.forwardRef((e, t) => {
  var s;
  let {
    title: n,
    titleClassName: l = "",
    subtitle: o = "",
    description: u = "",
    descriptionCta: c = "",
    isPremiumGetCta: _,
    onCtaClick: E,
    onMouseEnter: T,
    className: f,
    perkComponent: R,
    cardVariant: S,
    cardType: C,
    onClick: g,
    backgroundImage: O,
    pillText: P,
    perkImage: h
  } = e, L = C === m.PerksDiscoverabilityCardSection.CARD_CAROUSEL_FIRST_ROW || C === m.PerksDiscoverabilityCardSection.CARD_CAROUSEL_SECOND_ROW || C === m.PerksDiscoverabilityCardSection.CARD_CAROUSEL_THIRD_ROW, x = null != S ? N.CardVariantsInfo[S] : N.CardVariantsInfo[m.CardVariants.DEFAULT], D = 0 !== u.length || 0 !== o.length && S === m.CardVariants.REWARD, v = (0, I.useShouldShowConfettiAndGlow)(), [U, b] = r.useState(v);
  return r.useEffect(() => {
    v && b(!0)
  }, [v]), (0, a.jsxs)(d.Clickable, {
    className: i(M.card, f, !0 === U ? null === (s = x.cardContainer) || void 0 === s ? void 0 : s.className : void 0, {
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
    }), (0, a.jsx)(A.default, {
      title: n,
      titleClassName: l,
      subtitle: o,
      perkImage: h,
      isCarousel: L,
      descriptionCta: c,
      onCtaClick: E,
      perkComponent: R,
      subtitleClassName: M.cardSubtitle,
      cardVariant: S
    }), D && (0, a.jsx)(p.default, {
      title: n,
      titleClassName: l,
      subtitle: o,
      description: u,
      descriptionCta: c,
      isPremiumGetCta: _,
      onCtaClick: E,
      cardVariant: S,
      perkComponent: R
    }), (0, a.jsx)("div", {
      className: i(M.cover, M.above),
      ref: t
    })]
  })
});
x.displayName = "PerkCardContent";
var D = L