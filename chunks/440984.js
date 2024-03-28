"use strict";
s.r(t), s.d(t, {
  PremiumSubscritionDiscountAppliedModal: function() {
    return P
  }
}), s("47120");
var a = s("735250"),
  n = s("470079"),
  i = s("442837"),
  l = s("780384"),
  r = s("481060"),
  u = s("410030"),
  o = s("607070"),
  d = s("530618"),
  c = s("74538"),
  E = s("937615"),
  f = s("230916"),
  _ = s("798769"),
  p = s("474936"),
  m = s("689938"),
  I = s("720913"),
  N = s("982404"),
  S = s("299156");

function P(e) {
  let {
    premiumSubscription: t,
    premiumType: s,
    onClose: P,
    confettiCanvas: T,
    userWasChurned: C = !1,
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
    v = (0, a.jsx)("div", {
      className: I.whatYouLoseButtonContainer,
      children: (0, a.jsx)(r.Button, {
        color: r.Button.Colors.BRAND,
        onClick: P,
        children: m.default.Messages.PREMIUM_DISCOUNT_SWEET
      })
    });
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(_.default, {
      premiumType: s,
      className: I.cancellationHeader,
      onClose: P
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
              children: C ? m.default.Messages.PREMIUM_TRIAL_TUTORIAL_WELCOME_BACK : m.default.Messages.PREMIUM_TIER_CARD_DISCOUNT_APPLIED_PUNCTUATED
            })]
          }), (0, a.jsx)("div", {
            className: I.bodyString,
            children: O
          }), v]
        }) : (0, a.jsx)(r.Spinner, {})
      })
    }), !U && L && (0, a.jsx)(d.default, {
      confettiTarget: h.current,
      confettiCanvas: T,
      confettiVelocityMultiplier: .75
    })]
  })
}