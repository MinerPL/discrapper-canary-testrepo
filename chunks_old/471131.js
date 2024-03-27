"use strict";
s.r(t), s.d(t, {
  default: function() {
    return C
  }
}), s("222007");
var a = s("37983"),
  n = s("884691"),
  i = s("414456"),
  l = s.n(i),
  r = s("872717"),
  u = s("819855"),
  o = s("77078"),
  d = s("841098"),
  c = s("701909"),
  E = s("719923"),
  f = s("153160"),
  _ = s("478968"),
  p = s("510928"),
  m = s("646718"),
  I = s("49111"),
  N = s("782340"),
  S = s("893643"),
  T = s("940420"),
  P = s("591726"),
  C = function(e) {
    let {
      premiumSubscription: t,
      premiumType: s,
      onClose: i,
      onConfirm: C,
      userDiscountOffer: A
    } = e, [R, M] = n.useState(!1), [h, L] = n.useState(!1), g = async e => {
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
    }, y = (0, d.default)(), x = (0, u.isThemeDark)(y) ? T : P, D = (0, _.useChurnDiscountedPrice)(t, m.SubscriptionPlans.PREMIUM_MONTH_TIER_2, A), U = (0, E.getPrice)(m.SubscriptionPlans.PREMIUM_MONTH_TIER_2), O = (0, f.formatPrice)(U.amount, U.currency);
    return null == A ? null : (0, a.jsxs)(a.Fragment, {
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
              percent: A.discount.amount
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
                percent: A.discount.amount,
                numMonths: A.discount.user_usage_limit,
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
                billingPeriod: (0, E.getDiscountIntervalString)(A.discount.user_usage_limit_interval),
                numMonths: A.discount.user_usage_limit,
                fullPrice: O,
                helpdeskArticle: c.default.getArticleURL(I.HelpdeskArticles.PAID_TERMS)
              })
            })
          }), R && (0, a.jsx)("div", {
            className: S.redemptionFailedMessage,
            children: (0, a.jsx)(o.Text, {
              variant: "text-xs/semibold",
              className: S.redemptionFailedMessageCopy,
              children: N.default.Messages.CHURN_DISCOUNT_REDEMPTION_ERROR
            })
          }), (0, a.jsxs)("div", {
            className: l(S.confirmDiscountButtons, {
              [S.confrimDiscountsButtonsError]: R,
              [S.confrimDiscountsButtonsNoError]: !R
            }),
            children: [(0, a.jsx)(o.Button, {
              look: o.ButtonLooks.LINK,
              onClick: () => i(),
              children: N.default.Messages.CHURN_DISCOUNT_NEVERMIND
            }), (0, a.jsx)(o.Button, {
              size: o.ButtonSizes.SMALL,
              submitting: h,
              onClick: () => g(A.id),
              children: N.default.Messages.CHURN_DISCOUNT_CONFIRM_DISCOUNT
            })]
          })]
        })
      })]
    })
  }