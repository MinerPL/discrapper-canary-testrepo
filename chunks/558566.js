"use strict";
s.r(t), s.d(t, {
  default: function() {
    return M
  }
}), s("222007");
var a = s("37983"),
  n = s("884691"),
  l = s("414456"),
  r = s.n(l),
  i = s("917351"),
  u = s("65597"),
  o = s("77078"),
  d = s("206230"),
  c = s("235145"),
  _ = s("599110"),
  E = s("719923"),
  I = s("837797"),
  f = s("154889"),
  T = s("917247"),
  S = s("119829"),
  R = s("628550"),
  m = s("881155"),
  p = s("646718"),
  N = s("49111"),
  g = s("994428"),
  A = s("782340"),
  P = s("651187");
let C = e => {
    let {
      name: t,
      canReveal: s = !0,
      dismissibleContentType: l,
      forceShadow: E
    } = e, I = (0, u.default)([d.default], () => d.default.useReducedMotion), [f, T] = n.useState(!1), [m, p] = n.useState(!1), M = (0, R.default)(), [h, L] = (0, c.useGetDismissibleContent)(null != l && s ? [l] : []), {
      easterEggLevel: x,
      isEasterEggTriggered: v,
      onHover: j,
      onUnhover: b
    } = (0, S.default)(5), U = (0, i.debounce)(() => {
      _.default.track(N.AnalyticEvents.PREMIUM_MARKETING_WHAT_IS_NEW_CARD_HOVERED, {
        card_type: (0, i.snakeCase)(t)
      })
    }, 800);
    e = {
      onMouseEnter: U,
      ...e
    };
    let D = h !== l || null == l || m;
    return (n.useEffect(() => {
      I && f && (p(!0), _.default.track(N.AnalyticEvents.PREMIUM_MARKETING_PERK_CARD_FLIPPED, {
        card_type: t
      }), null != l && L(g.ContentDismissActionType.TAKE_ACTION))
    }, [I, f, l, t, L]), s) ? t === R.PerksDiscoverabilityCardTypes.UPCOMING_DROP_UNTIMED ? (0, a.jsx)("div", {
      className: r(P.flipCardContainer, {
        [P.forceShadow]: E
      }),
      onMouseEnter: j,
      onFocus: j,
      onMouseLeave: b,
      onBlur: b,
      children: (0, a.jsxs)("div", {
        className: r(P.flipCard, {
          [P.partialFlipCard]: !v,
          [P.ultraFlipCard]: v,
          [P.rotateCard]: v && 3 === x,
          [P.reducedMotion]: I
        }),
        children: [(0, a.jsx)("div", {
          className: P.flipCardFront,
          children: (0, a.jsx)(O, {
            ...e,
            className: P.topCover
          })
        }), (0, a.jsx)("div", {
          className: P.flipCardBack,
          children: (0, a.jsx)(O, {
            ...e,
            className: P.topCover
          })
        })]
      })
    }) : D ? (0, a.jsx)("div", {
      className: r(P.noFlipCardContainer, {
        [P.forceShadow]: E,
        [P.reducedMotion]: I
      }),
      children: (0, a.jsx)(O, {
        ...e
      })
    }) : (0, a.jsx)("div", {
      className: r(P.flipCardContainer, {
        [P.forceShadow]: E
      }),
      children: (0, a.jsxs)(o.Clickable, {
        onClick: () => T(!0),
        className: r(P.flipCard, P.clickable, {
          [P.flipped]: f,
          [P.partialFlipCard]: !m && !f,
          [P.reducedMotion]: I
        }),
        onTransitionEnd: e => {
          f && "transform" === e.propertyName && e.target.classList.contains(P.flipCard) && (p(!0), _.default.track(N.AnalyticEvents.PREMIUM_MARKETING_PERK_CARD_FLIPPED, {
            card_type: t
          }), null != l && L(g.ContentDismissActionType.TAKE_ACTION))
        },
        children: [(0, a.jsx)("div", {
          className: P.flipCardHidden,
          "aria-hidden": !0,
          children: (0, a.jsx)(O, {
            ...e
          })
        }), (0, a.jsx)("div", {
          className: P.flipCardFront,
          children: (0, a.jsx)(O, {
            ...M.upcomingDropUntimed,
            pillText: ""
          })
        }), (0, a.jsx)("div", {
          className: P.flipCardBack,
          children: (0, a.jsx)(O, {
            ...e,
            description: ""
          })
        }), (0, a.jsx)("div", {
          className: P.flipCardButtonContainer,
          children: (0, a.jsx)(o.Button, {
            onClick: () => T(!0),
            children: A.default.Messages.REVEAL
          })
        })]
      })
    }) : (0, a.jsx)(C, {
      ...M.upcomingDropUntimed,
      forceShadow: E
    })
  },
  O = e => {
    let {
      title: t,
      titleClassName: s = "",
      subtitle: n = "",
      description: l = "",
      descriptionCta: i = "",
      isPremiumGetCta: u,
      perkImage: d,
      backgroundImage: c,
      pillText: _,
      onClick: S,
      onCtaClick: R,
      onMouseEnter: N,
      className: g
    } = e, C = (0, T.usePremiumTrialOffer)(), O = null == C ? void 0 : C.subscription_trial, M = (0, f.usePremiumDiscountOffer)(), h = (0, E.formatTrialCtaIntervalDuration)({
      intervalType: null == O ? void 0 : O.interval,
      intervalCount: null == O ? void 0 : O.interval_count
    }), L = (0, I.useResponseOnUserState)({
      defaultResponse: A.default.Messages.PREMIUM_SETTINGS_GET,
      onNonTier2Subscriber: A.default.Messages.BILLING_SWITCH_PLAN_UPGRADE,
      onTier2TrialOffer: h,
      onTier0TrialOffer: h,
      onDiscountOffer: A.default.Messages.PREMIUM_DISCOUNT_CTA.format({
        percent: null == M ? void 0 : M.discount.amount
      })
    });
    return (0, a.jsxs)(o.Clickable, {
      className: r(P.card, g, {
        [P.clickable]: null != S
      }),
      onMouseEnter: N,
      style: {
        backgroundImage: null != c ? "url(".concat(c, ")") : void 0
      },
      onClick: S,
      children: [null != _ ? (0, a.jsx)(o.Text, {
        variant: "text-xs/semibold",
        className: P.pill,
        children: _
      }) : null, (0, a.jsx)("div", {
        className: r(P.cover, P.below)
      }), (0, a.jsx)(o.Heading, {
        variant: "heading-xl/extrabold",
        className: r(P.cardHeading, s),
        children: t
      }), 0 !== n.length ? (0, a.jsx)(o.Text, {
        variant: "text-sm/normal",
        className: P.cardSubtitle,
        children: n
      }) : null, null != d ? (0, a.jsx)("img", {
        src: d,
        alt: "",
        className: P.cardImage
      }) : null, 0 !== l.length ? (0, a.jsxs)("div", {
        className: P.cardDescription,
        children: [(0, a.jsx)(o.Heading, {
          variant: "heading-xl/extrabold",
          className: r(P.cardHeading, s),
          children: t
        }), 0 !== n.length ? (0, a.jsxs)(o.Text, {
          variant: "text-sm/normal",
          className: P.cardDescriptionText,
          children: [n, (0, a.jsx)("br", {}), " ", (0, a.jsx)("br", {}), l]
        }) : null, u ? (0, a.jsx)(m.default, {
          subscriptionTier: p.PremiumSubscriptionSKUs.TIER_2,
          buttonText: L,
          color: o.Button.Colors.GREEN,
          look: o.Button.Looks.FILLED
        }) : null, 0 !== i.length && null != R ? (0, a.jsx)(o.Button, {
          onClick: R,
          children: i
        }) : null]
      }) : null, (0, a.jsx)("div", {
        className: r(P.cover, P.above)
      })]
    })
  };
var M = C