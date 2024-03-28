"use strict";
s.r(t), s("47120");
var a = s("735250"),
  i = s("470079"),
  r = s("803997"),
  n = s.n(r),
  l = s("392711"),
  o = s("399606"),
  u = s("524437"),
  d = s("481060"),
  c = s("607070"),
  _ = s("605236"),
  E = s("706140"),
  T = s("626135"),
  I = s("314684"),
  R = s("715627"),
  S = s("176782"),
  f = s("238108"),
  m = s("32173"),
  N = s("391110"),
  A = s("484239"),
  p = s("658370"),
  C = s("735825"),
  g = s("981631"),
  O = s("921944"),
  P = s("689938"),
  M = s("622481");
let h = {
    xMin: -80,
    xMax: 80,
    yMin: -150,
    yMax: -20
  },
  L = i.memo(e => {
    let {
      name: t,
      canReveal: s = !0,
      dismissibleContentType: r,
      forceShadow: S,
      cardType: A,
      confettiCanvas: p
    } = e, v = (0, o.useStateFromStores)([c.default], () => c.default.useReducedMotion), [D, b] = i.useState(!1), [U, j] = i.useState(!1), y = (0, I.useFreeBoostUserTenureReward)(), B = (0, I.useShouldShowConfettiAndGlow)(), [G, k] = i.useState(!1), [H, F] = i.useState(t === m.PerksDiscoverabilityCardTypes.FREE_BOOST && B && (null == y ? void 0 : y.nitroTenureStatus) === C.NitroRewardStatus.REDEEMABLE);
    i.useEffect(() => {
      t === m.PerksDiscoverabilityCardTypes.FREE_BOOST && B && (null == y ? void 0 : y.nitroTenureStatus) === C.NitroRewardStatus.REDEEMABLE && F(!0)
    }, [B, t, y]);
    let w = i.useCallback(() => {
        k(!0)
      }, []),
      W = A === N.PerksDiscoverabilityCardSection.CARD_CAROUSEL_FIRST_ROW || A === N.PerksDiscoverabilityCardSection.CARD_CAROUSEL_SECOND_ROW || A === N.PerksDiscoverabilityCardSection.CARD_CAROUSEL_THIRD_ROW,
      K = (0, m.default)(),
      [V, Y] = (0, E.useGetDismissibleContent)(null != r && s || r === u.DismissibleContent.TENURE_REWARD_REDEEMABLE_CONFETTI ? [r] : []);
    i.useEffect(() => () => {
      V === u.DismissibleContent.TENURE_REWARD_REDEEMABLE_CONFETTI && G && (0, _.markDismissibleContentAsDismissed)(V)
    }, [V, G]), i.useEffect(() => {
      V === u.DismissibleContent.TENURE_REWARD_REDEEMABLE_CONFETTI && G && (0, _.markDismissibleContentAsDismissed)(V)
    }, [V, G]);
    let {
      easterEggLevel: z,
      isEasterEggTriggered: X,
      onHover: Q,
      onUnhover: Z
    } = (0, f.default)(5), J = (0, l.debounce)(() => {
      T.default.track(g.AnalyticEvents.PREMIUM_MARKETING_WHAT_IS_NEW_CARD_HOVERED, {
        card_type: (0, l.snakeCase)(t),
        is_tenure_reward: t === m.PerksDiscoverabilityCardTypes.FREE_BOOST,
        reward_status: null == y ? void 0 : y.nitroTenureStatus
      })
    }, 800), q = i.useRef(null);
    e = {
      onMouseEnter: J,
      ...e
    };
    let $ = V !== r || null == r || U || r === u.DismissibleContent.TENURE_REWARD_REDEEMABLE_CONFETTI;
    return (i.useEffect(() => {
      v && D && (j(!0), T.default.track(g.AnalyticEvents.PREMIUM_MARKETING_PERK_CARD_FLIPPED, {
        card_type: t
      }), null != r && Y(O.ContentDismissActionType.TAKE_ACTION))
    }, [v, D, r, t, Y]), s) ? t === m.PerksDiscoverabilityCardTypes.UPCOMING_DROP_UNTIMED ? (0, a.jsx)("div", {
      className: n()(M.flipCardContainer, {
        [M.forceShadow]: S
      }),
      onMouseEnter: Q,
      onFocus: Q,
      onMouseLeave: Z,
      onBlur: Z,
      children: (0, a.jsxs)("div", {
        className: n()(M.flipCard, {
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
        className: n()({
          [M.noFlipCardContainer]: !W,
          [M.noFlipCardContainerCarousel]: W,
          [M.forceShadow]: S,
          [M.reducedMotion]: v
        }),
        children: [(0, a.jsx)(x, {
          ...e,
          ref: t === m.PerksDiscoverabilityCardTypes.FREE_BOOST ? q : void 0
        }), H && (0, a.jsx)(R.default, {
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
      className: n()(M.flipCardContainer, {
        [M.forceShadow]: S
      }),
      children: (0, a.jsxs)(d.Clickable, {
        onClick: () => b(!0),
        className: n()(M.flipCard, M.clickable, {
          [M.flipped]: D,
          [M.partialFlipCard]: !U && !D,
          [M.reducedMotion]: v
        }),
        onTransitionEnd: e => {
          D && "transform" === e.propertyName && e.target.classList.contains(M.flipCard) && (j(!0), T.default.track(g.AnalyticEvents.PREMIUM_MARKETING_PERK_CARD_FLIPPED, {
            card_type: t
          }), null != r && Y(O.ContentDismissActionType.TAKE_ACTION))
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
            ...K.upcomingDropUntimed,
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
      ...K.upcomingDropUntimed,
      forceShadow: S
    })
  });
L.displayName = "PerkDiscoverabilityCard";
let x = i.forwardRef((e, t) => {
  var s;
  let {
    title: r,
    titleClassName: l = "",
    subtitle: o = "",
    description: u = "",
    descriptionCta: c = "",
    isPremiumGetCta: _,
    onCtaClick: E,
    onMouseEnter: T,
    className: R,
    perkComponent: f,
    cardVariant: m,
    cardType: C,
    onClick: g,
    backgroundImage: O,
    pillText: P,
    perkImage: h
  } = e, L = C === N.PerksDiscoverabilityCardSection.CARD_CAROUSEL_FIRST_ROW || C === N.PerksDiscoverabilityCardSection.CARD_CAROUSEL_SECOND_ROW || C === N.PerksDiscoverabilityCardSection.CARD_CAROUSEL_THIRD_ROW, x = 0 !== u.length || 0 !== o.length && m === N.CardVariants.REWARD, v = (0, I.useShouldShowConfettiAndGlow)(), [D, b] = i.useState(v);
  i.useEffect(() => {
    v && b(!0)
  }, [v]);
  let U = (0, S.useCardVariantsInfo)(m);
  return (0, a.jsxs)(d.Clickable, {
    className: n()(M.card, R, !0 === D ? null === (s = U.cardContainer) || void 0 === s ? void 0 : s.className : void 0, {
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
      title: r,
      titleClassName: l,
      subtitle: o,
      perkImage: h,
      isCarousel: L,
      descriptionCta: c,
      onCtaClick: E,
      perkComponent: f,
      subtitleClassName: M.cardSubtitle,
      cardVariant: m
    }), x && (0, a.jsx)(p.default, {
      title: r,
      titleClassName: l,
      subtitle: o,
      description: u,
      descriptionCta: c,
      isPremiumGetCta: _,
      onCtaClick: E,
      cardVariant: m,
      perkComponent: f
    }), (0, a.jsx)("div", {
      className: n()(M.cover, M.above),
      ref: t
    })]
  })
});
x.displayName = "PerkCardContent", t.default = L