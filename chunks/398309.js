"use strict";
s.r(t), s.d(t, {
  PremiumSubscritionDiscountAppliedModal: function() {
    return T
  }
}), s("222007");
var a = s("37983"),
  n = s("884691"),
  i = s("446674"),
  l = s("819855"),
  r = s("77078"),
  u = s("841098"),
  o = s("206230"),
  d = s("923702"),
  c = s("719923"),
  E = s("153160"),
  f = s("478968"),
  _ = s("510928"),
  p = s("646718"),
  m = s("782340"),
  I = s("454555"),
  N = s("940420"),
  S = s("591726");

function T(e) {
  let {
    premiumSubscription: t,
    premiumType: s,
    onClose: T,
    confettiCanvas: C,
    userWasChurned: P = !1,
    userDiscountOffer: R
  } = e, A = (0, u.default)(), M = (0, l.isThemeDark)(A) ? N : S, h = n.useRef(null), [L, g] = n.useState(!1), y = (0, f.useChurnDiscountedPrice)(t, p.SubscriptionPlans.PREMIUM_MONTH_TIER_2, R), x = (0, c.getPrice)(p.SubscriptionPlans.PREMIUM_MONTH_TIER_2), D = (0, E.formatPrice)(x.amount, x.currency), U = (0, i.useStateFromStores)([o.default], () => o.default.useReducedMotion);
  if (n.useEffect(() => {
      null != h.current && null != y && g(!0)
    }, [h, L, y]), null == R || null == y) return null;
  let O = m.default.Messages.PREMIUM_TIER_SUBSCRIPTION_DESCRIPTION_AFTER_REDEMPTION_WITH_ACTIVE_SUB.format({
      numMonths: R.discount.user_usage_limit,
      discountedPrice: y,
      regularPrice: D
    }),
    b = (0, a.jsx)("div", {
      className: I.whatYouLoseButtonContainer,
      children: (0, a.jsx)(r.Button, {
        color: r.Button.Colors.BRAND,
        onClick: T,
        children: m.default.Messages.PREMIUM_DISCOUNT_SWEET
      })
    });
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(_.default, {
      premiumType: s,
      className: I.cancellationHeader,
      onClose: T
    }), (0, a.jsx)("div", {
      ref: h,
      children: (0, a.jsx)(r.ModalContent, {
        className: I.body,
        children: null != y ? (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsxs)("div", {
            className: I.discountAppliedBody,
            children: [(0, a.jsx)("img", {
              alt: "",
              src: M,
              className: I.nitroIcon
            }), (0, a.jsx)(r.Heading, {
              variant: "heading-xl/bold",
              children: P ? m.default.Messages.PREMIUM_TRIAL_TUTORIAL_WELCOME_BACK : m.default.Messages.PREMIUM_TIER_CARD_DISCOUNT_APPLIED_PUNCTUATED
            })]
          }), (0, a.jsx)("div", {
            className: I.bodyString,
            children: O
          }), b]
        }) : (0, a.jsx)(r.Spinner, {})
      })
    }), !U && L && (0, a.jsx)(d.default, {
      confettiTarget: h.current,
      confettiCanvas: C,
      confettiVelocityMultiplier: .75
    })]
  })
}