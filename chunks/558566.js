"use strict";
s.r(t), s.d(t, {
  default: function() {
    return h
  }
}), s("222007");
var a = s("37983"),
  r = s("884691"),
  n = s("414456"),
  l = s.n(n),
  i = s("917351"),
  u = s("65597"),
  o = s("77078"),
  d = s("206230"),
  c = s("235145"),
  _ = s("599110"),
  E = s("719923"),
  I = s("837797"),
  T = s("154889"),
  f = s("917247"),
  S = s("119829"),
  R = s("628550"),
  m = s("598739"),
  A = s("881155"),
  N = s("646718"),
  p = s("49111"),
  g = s("994428"),
  C = s("782340"),
  P = s("651187");
let O = e => {
    let {
      name: t,
      canReveal: s = !0,
      dismissibleContentType: n,
      forceShadow: E
    } = e, I = (0, u.default)([d.default], () => d.default.useReducedMotion), [T, f] = r.useState(!1), [m, A] = r.useState(!1), N = (0, R.default)(), [h, L] = (0, c.useGetDismissibleContent)(null != n && s ? [n] : []), {
      easterEggLevel: x,
      isEasterEggTriggered: v,
      onHover: D,
      onUnhover: U
    } = (0, S.default)(5), b = (0, i.debounce)(() => {
      _.default.track(p.AnalyticEvents.PREMIUM_MARKETING_WHAT_IS_NEW_CARD_HOVERED, {
        card_type: (0, i.snakeCase)(t)
      })
    }, 800);
    e = {
      onMouseEnter: b,
      ...e
    };
    let j = h !== n || null == n || m;
    return (r.useEffect(() => {
      I && T && (A(!0), _.default.track(p.AnalyticEvents.PREMIUM_MARKETING_PERK_CARD_FLIPPED, {
        card_type: t
      }), null != n && L(g.ContentDismissActionType.TAKE_ACTION))
    }, [I, T, n, t, L]), s) ? t === R.PerksDiscoverabilityCardTypes.UPCOMING_DROP_UNTIMED ? (0, a.jsx)("div", {
      className: l(P.flipCardContainer, {
        [P.forceShadow]: E
      }),
      onMouseEnter: D,
      onFocus: D,
      onMouseLeave: U,
      onBlur: U,
      children: (0, a.jsxs)("div", {
        className: l(P.flipCard, {
          [P.partialFlipCard]: !v,
          [P.ultraFlipCard]: v,
          [P.rotateCard]: v && 3 === x,
          [P.reducedMotion]: I
        }),
        children: [(0, a.jsx)("div", {
          className: P.flipCardFront,
          children: (0, a.jsx)(M, {
            ...e,
            className: P.topCover
          })
        }), (0, a.jsx)("div", {
          className: P.flipCardBack,
          children: (0, a.jsx)(M, {
            ...e,
            className: P.topCover
          })
        })]
      })
    }) : j ? (0, a.jsx)("div", {
      className: l(P.noFlipCardContainer, {
        [P.forceShadow]: E,
        [P.reducedMotion]: I
      }),
      children: (0, a.jsx)(M, {
        ...e
      })
    }) : (0, a.jsx)("div", {
      className: l(P.flipCardContainer, {
        [P.forceShadow]: E
      }),
      children: (0, a.jsxs)(o.Clickable, {
        onClick: () => f(!0),
        className: l(P.flipCard, P.clickable, {
          [P.flipped]: T,
          [P.partialFlipCard]: !m && !T,
          [P.reducedMotion]: I
        }),
        onTransitionEnd: e => {
          T && "transform" === e.propertyName && e.target.classList.contains(P.flipCard) && (A(!0), _.default.track(p.AnalyticEvents.PREMIUM_MARKETING_PERK_CARD_FLIPPED, {
            card_type: t
          }), null != n && L(g.ContentDismissActionType.TAKE_ACTION))
        },
        children: [(0, a.jsx)("div", {
          className: P.flipCardHidden,
          "aria-hidden": !0,
          children: (0, a.jsx)(M, {
            ...e
          })
        }), (0, a.jsx)("div", {
          className: P.flipCardFront,
          children: (0, a.jsx)(M, {
            ...N.upcomingDropUntimed,
            pillText: ""
          })
        }), (0, a.jsx)("div", {
          className: P.flipCardBack,
          children: (0, a.jsx)(M, {
            ...e,
            description: ""
          })
        }), (0, a.jsx)("div", {
          className: P.flipCardButtonContainer,
          children: (0, a.jsx)(o.Button, {
            onClick: () => f(!0),
            children: C.default.Messages.REVEAL
          })
        })]
      })
    }) : (0, a.jsx)(O, {
      ...N.upcomingDropUntimed,
      forceShadow: E
    })
  },
  M = e => {
    let {
      title: t,
      titleClassName: s = "",
      subtitle: r = "",
      description: n = "",
      descriptionCta: i = "",
      isPremiumGetCta: u,
      perkImage: d,
      cardType: c,
      backgroundImage: _,
      pillText: S,
      onClick: R,
      onCtaClick: p,
      onMouseEnter: g,
      className: O
    } = e, M = (0, f.usePremiumTrialOffer)(), h = null == M ? void 0 : M.subscription_trial, L = (0, T.usePremiumDiscountOffer)(), x = (0, E.formatTrialCtaIntervalDuration)({
      intervalType: null == h ? void 0 : h.interval,
      intervalCount: null == h ? void 0 : h.interval_count
    }), v = (0, I.useResponseOnUserState)({
      defaultResponse: C.default.Messages.PREMIUM_SETTINGS_GET,
      onNonTier2Subscriber: C.default.Messages.BILLING_SWITCH_PLAN_UPGRADE,
      onTier2TrialOffer: x,
      onTier0TrialOffer: x,
      onDiscountOffer: C.default.Messages.PREMIUM_DISCOUNT_CTA.format({
        percent: null == L ? void 0 : L.discount.amount
      })
    }), D = c === m.PerksDiscoverabilityVariants.CARD_CAROUSEL_FIRST_ROW || c === m.PerksDiscoverabilityVariants.CARD_CAROUSEL_SECOND_ROW || c === m.PerksDiscoverabilityVariants.CARD_CAROUSEL_THIRD_ROW;
    return (0, a.jsxs)(o.Clickable, {
      className: l(P.card, O, {
        [P.clickable]: null != R
      }),
      onMouseEnter: g,
      style: {
        backgroundImage: null != _ ? "url(".concat(_, ")") : void 0
      },
      onClick: R,
      children: [null != S ? (0, a.jsx)(o.Text, {
        variant: "text-xs/semibold",
        className: P.pill,
        children: S
      }) : null, (0, a.jsx)("div", {
        className: l(P.cover, P.below)
      }), (0, a.jsx)(o.Heading, {
        variant: "heading-xl/extrabold",
        className: l(P.cardHeading, s),
        children: t
      }), 0 !== r.length ? (0, a.jsx)(o.Text, {
        variant: "text-sm/normal",
        className: P.cardSubtitle,
        children: r
      }) : null, null != d ? (0, a.jsx)("img", {
        src: d,
        alt: "",
        className: l({
          [P.cardImage]: !D,
          [P.carouselCardImage]: D
        })
      }) : null, 0 !== n.length ? (0, a.jsxs)("div", {
        className: P.cardDescription,
        children: [(0, a.jsx)(o.Heading, {
          variant: "heading-xl/extrabold",
          className: l(P.cardHeading, s),
          children: t
        }), 0 !== r.length ? (0, a.jsxs)(o.Text, {
          variant: "text-sm/normal",
          className: P.cardDescriptionText,
          children: [r, (0, a.jsx)("br", {}), " ", (0, a.jsx)("br", {}), n]
        }) : null, u ? (0, a.jsx)(A.default, {
          subscriptionTier: N.PremiumSubscriptionSKUs.TIER_2,
          buttonText: v,
          color: o.Button.Colors.GREEN,
          look: o.Button.Looks.FILLED
        }) : null, 0 !== i.length && null != p ? (0, a.jsx)(o.Button, {
          onClick: p,
          children: i
        }) : null]
      }) : null, (0, a.jsx)("div", {
        className: l(P.cover, P.above)
      })]
    })
  };
var h = O