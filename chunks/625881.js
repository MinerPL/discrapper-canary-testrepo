s(47120);
var n = s(735250),
  a = s(470079),
  i = s(120356),
  r = s.n(i),
  o = s(544891),
  l = s(780384),
  c = s(481060),
  d = s(410030),
  _ = s(63063),
  E = s(74538),
  u = s(937615),
  T = s(230916),
  I = s(798769),
  S = s(474936),
  N = s(981631),
  C = s(689938),
  m = s(508388),
  A = s(982404),
  g = s(299156);
t.Z = function(e) {
  let {
premiumSubscription: t,
premiumType: s,
onClose: i,
onConfirm: h,
userDiscountOffer: O
  } = e, [p, R] = a.useState(!1), [x, M] = a.useState(!1), f = async e => {
try {
  M(!0), R(!1), await o.tn.post({
    url: N.ANM.USER_OFFER_REDEEM,
    body: {
      user_discount_offer_id: e
    }
  }), h();
} catch (e) {
  R(!0);
}
M(!1);
  }, D = (0, d.ZP)(), P = (0, l.wj)(D) ? A : g, L = (0, T._)(t, S.Xh.PREMIUM_MONTH_TIER_2, O), b = (0, E.aS)(S.Xh.PREMIUM_MONTH_TIER_2), Z = (0, u.T4)(b.amount, b.currency);
  return null == O ? null : (0, n.jsxs)(n.Fragment, {
children: [
  (0, n.jsx)(I.Z, {
    premiumType: s,
    onClose: i
  }),
  (0, n.jsx)(c.ModalContent, {
    className: m.body,
    children: (0, n.jsxs)('div', {
      className: m.confirmDiscountContent,
      children: [
        (0, n.jsx)(c.Heading, {
          variant: 'heading-xl/bold',
          children: C.Z.Messages.CHURN_DISCOUNT_CONFIRM_HEADER.format({
            percent: O.discount.amount
          })
        }),
        (0, n.jsxs)('div', {
          className: m.confirmDiscountDescription,
          children: [
            (0, n.jsx)('img', {
              alt: '',
              src: P,
              className: m.confirmDiscountIcon
            }),
            (0, n.jsx)(c.Text, {
              variant: 'text-sm/medium',
              children: C.Z.Messages.CHURN_DISCOUNT_CONFIRM_DESCRIPTION.format({
                percent: O.discount.amount,
                numMonths: O.discount.user_usage_limit,
                price: Z
              })
            })
          ]
        }),
        (0, n.jsx)('div', {
          className: m.confirmDiscountLegalese,
          children: (0, n.jsx)(c.Text, {
            variant: 'text-xs/semibold',
            className: m.confirmDiscountLegaleseText,
            children: C.Z.Messages.CHURN_DISCOUNT_CONFIRM_LEGALESE.format({
              discountedPrice: L,
              billingPeriod: (0, E.JP)(O.discount.user_usage_limit_interval),
              numMonths: O.discount.user_usage_limit,
              fullPrice: Z,
              helpdeskArticle: _.Z.getArticleURL(N.BhN.PAID_TERMS)
            })
          })
        }),
        p && (0, n.jsx)('div', {
          className: m.redemptionFailedMessage,
          children: (0, n.jsx)(c.Text, {
            variant: 'text-xs/semibold',
            className: m.redemptionFailedMessageCopy,
            children: C.Z.Messages.CHURN_DISCOUNT_REDEMPTION_ERROR
          })
        }),
        (0, n.jsxs)('div', {
          className: r()(m.confirmDiscountButtons, {
            [m.confrimDiscountsButtonsError]: p,
            [m.confrimDiscountsButtonsNoError]: !p
          }),
          children: [
            (0, n.jsx)(c.Button, {
              look: c.ButtonLooks.LINK,
              onClick: () => i(),
              children: C.Z.Messages.CHURN_DISCOUNT_NEVERMIND
            }),
            (0, n.jsx)(c.Button, {
              size: c.ButtonSizes.SMALL,
              submitting: x,
              onClick: () => f(O.id),
              children: C.Z.Messages.CHURN_DISCOUNT_CONFIRM_DISCOUNT
            })
          ]
        })
      ]
    })
  })
]
  });
};