"use strict";
s.r(t), s("47120");
var a = s("735250"),
  n = s("470079"),
  i = s("803997"),
  l = s.n(i),
  r = s("544891"),
  u = s("780384"),
  o = s("481060"),
  d = s("410030"),
  c = s("63063"),
  E = s("74538"),
  f = s("937615"),
  _ = s("230916"),
  p = s("798769"),
  m = s("474936"),
  I = s("981631"),
  N = s("689938"),
  S = s("248928"),
  P = s("982404"),
  T = s("299156");
t.default = function(e) {
  let {
    premiumSubscription: t,
    premiumType: s,
    onClose: i,
    onConfirm: C,
    userDiscountOffer: R
  } = e, [A, M] = n.useState(!1), [h, L] = n.useState(!1), g = async e => {
    try {
      L(!0), M(!1), await r.HTTP.post({
        url: I.Endpoints.USER_OFFER_REDEEM,
        body: {
          user_discount_offer_id: e
        }
      }), C()
    } catch (e) {
      M(!0)
    }
    L(!1)
  }, y = (0, d.default)(), x = (0, u.isThemeDark)(y) ? P : T, D = (0, _.useChurnDiscountedPrice)(t, m.SubscriptionPlans.PREMIUM_MONTH_TIER_2, R), U = (0, E.getPrice)(m.SubscriptionPlans.PREMIUM_MONTH_TIER_2), O = (0, f.formatPrice)(U.amount, U.currency);
  return null == R ? null : (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(p.default, {
      premiumType: s,
      onClose: i
    }), (0, a.jsx)(o.ModalContent, {
      className: S.body,
      children: (0, a.jsxs)("div", {
        className: S.confirmDiscountContent,
        children: [(0, a.jsx)(o.Heading, {
          variant: "heading-xl/bold",
          children: N.default.Messages.CHURN_DISCOUNT_CONFIRM_HEADER.format({
            percent: R.discount.amount
          })
        }), (0, a.jsxs)("div", {
          className: S.confirmDiscountDescription,
          children: [(0, a.jsx)("img", {
            alt: "",
            src: x,
            className: S.confirmDiscountIcon
          }), (0, a.jsx)(o.Text, {
            variant: "text-sm/medium",
            children: N.default.Messages.CHURN_DISCOUNT_CONFIRM_DESCRIPTION.format({
              percent: R.discount.amount,
              numMonths: R.discount.user_usage_limit,
              price: O
            })
          })]
        }), (0, a.jsx)("div", {
          className: S.confirmDiscountLegalese,
          children: (0, a.jsx)(o.Text, {
            variant: "text-xs/semibold",
            className: S.confirmDiscountLegaleseText,
            children: N.default.Messages.CHURN_DISCOUNT_CONFIRM_LEGALESE.format({
              discountedPrice: D,
              billingPeriod: (0, E.getDiscountIntervalString)(R.discount.user_usage_limit_interval),
              numMonths: R.discount.user_usage_limit,
              fullPrice: O,
              helpdeskArticle: c.default.getArticleURL(I.HelpdeskArticles.PAID_TERMS)
            })
          })
        }), A && (0, a.jsx)("div", {
          className: S.redemptionFailedMessage,
          children: (0, a.jsx)(o.Text, {
            variant: "text-xs/semibold",
            className: S.redemptionFailedMessageCopy,
            children: N.default.Messages.CHURN_DISCOUNT_REDEMPTION_ERROR
          })
        }), (0, a.jsxs)("div", {
          className: l()(S.confirmDiscountButtons, {
            [S.confrimDiscountsButtonsError]: A,
            [S.confrimDiscountsButtonsNoError]: !A
          }),
          children: [(0, a.jsx)(o.Button, {
            look: o.ButtonLooks.LINK,
            onClick: () => i(),
            children: N.default.Messages.CHURN_DISCOUNT_NEVERMIND
          }), (0, a.jsx)(o.Button, {
            size: o.ButtonSizes.SMALL,
            submitting: h,
            onClick: () => g(R.id),
            children: N.default.Messages.CHURN_DISCOUNT_CONFIRM_DISCOUNT
          })]
        })]
      })
    })]
  })
}