t(411104);
var s = t(735250);
t(470079);
var r = t(858987),
  l = t(122289),
  i = t(63063),
  a = t(74538),
  c = t(937615),
  o = t(296848),
  u = t(981631),
  I = t(474936),
  _ = t(689938),
  E = t(191334);
n.Z = function(e) {
  let n, t, T;
  let {
subscriptionPlan: d,
isGift: N,
isEmbeddedIAP: M,
renewalInvoice: A,
paymentSourceType: L,
hide: P,
purchaseType: R,
productLine: S,
basePrice: m,
currentSubscription: U
  } = e;
  if (P)
return null;
  let p = null == e.planGroup ? [] : e.planGroup;
  if (null != A) {
let e = a.ZP.getIntervalForInvoice(A);
n = e.intervalType, t = e.intervalCount, T = (0, c.og)((0, c.T4)(A.total, A.currency), n, t);
  } else
null != d && (n = d.interval, t = d.intervalCount);
  let v = (0, r.K)({
  purchaseType: R || u.GZQ.SUBSCRIPTION,
  plan: d,
  premiumSubscription: null == U ? null : U,
  isGift: !!N,
  planGroup: p,
  isPrepaidPaymentSource: !1
}),
C = '',
O = '';
  if (M) {
if (null != T && (null == A ? void 0 : A.subscriptionPeriodEnd) != null)
  C = _.Z.Messages.EMBEDDED_ACTIVITIES_IAP_NON_REFUNDABLE_SUBSCRIPTION_RATE_AND_RENEWAL.format({
    rate: T,
    renewalDate: A.subscriptionPeriodEnd
  });
else
  switch (n) {
    case I.rV.MONTH:
      C = 1 === t ? _.Z.Messages.EMBEDDED_ACTIVITIES_IAP_NON_REFUNDABLE_SUBSCRIPTION_MONTHLY : _.Z.Messages.EMBEDDED_ACTIVITIES_IAP_NON_REFUNDABLE_SUBSCRIPTION_MULTI_MONTH.format({
        intervalCount: t
      });
      break;
    case I.rV.YEAR:
      C = _.Z.Messages.EMBEDDED_ACTIVITIES_IAP_NON_REFUNDABLE_SUBSCRIPTION_YEARLY;
      break;
    case void 0:
      O = _.Z.Messages.BILLING_LEGAL_MUMBO_JUMBO_TERMS_LABEL_V2.format({
        primaryText: v,
        paidURL: u.EYA.PAID_TERMS
      }), C = _.Z.Messages.EMBEDDED_ACTIVITIES_IAP_NON_REFUNDABLE.format({});
      break;
    default:
      throw Error('Unexpected interval: '.concat(n));
  }
  } else if (R === u.GZQ.ONE_TIME)
O = _.Z.Messages.BILLING_LEGAL_MUMBO_JUMBO_TERMS_LABEL_V2.format({
  primaryText: v,
  paidURL: u.EYA.PAID_TERMS
}), C = S === u.POd.COLLECTIBLES ? N ? _.Z.Messages.COLLECTIBLES_PURCHASE_DISCLAIMER_GIFT_PAYMENT : _.Z.Messages.COLLECTIBLES_PURCHASE_DISCLAIMER_PAYMENT : _.Z.Messages.ONE_TIME_PURCHASE_FINE_PRINT;
  else if (null == d || N)
switch (N && (O = _.Z.Messages.BILLING_LEGAL_MUMBO_JUMBO_TERMS_LABEL_V2.format({
    primaryText: v,
    paidURL: u.EYA.PAID_TERMS
  })), n) {
  case I.rV.MONTH:
    C = N ? _.Z.Messages.PREMIUM_PAYMENT_GIFT_SUBTEXT_MONTHLY : _.Z.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_MONTHLY, C = N ? _.Z.Messages.PREMIUM_PAYMENT_GIFT_SUBTEXT_MONTHLY : 1 === t ? _.Z.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_MONTHLY : _.Z.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_MULTI_MONTH.format({
      intervalCount: t
    });
    break;
  case I.rV.YEAR:
    C = N ? _.Z.Messages.PREMIUM_PAYMENT_GIFT_SUBTEXT_YEARLY : _.Z.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_YEARLY;
    break;
  case void 0:
    C = '';
    break;
  default:
    throw Error('Unexpected interval: '.concat(n));
}
  else {
let e;
let s = (0, r.K)({
  purchaseType: u.GZQ.SUBSCRIPTION,
  plan: d,
  premiumSubscription: null == U ? null : U,
  isGift: !1,
  planGroup: p,
  isPrepaidPaymentSource: !1
});
if (null != m && null != n && null != t && (e = (0, c.og)((0, c.T4)(m.amount, m.currency), n, t)), null == e) {
  let e = Error('Missing base rate for legal fine print');
  (0, l.q2)(e, {
    tags: {
      planId: d.id
    }
  });
}
C = (null == U ? void 0 : U.isPaused) ? _.Z.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_RESUME.format({
  primaryText: s,
  rate: e,
  paidURL: u.EYA.PAID_TERMS,
  contactLink: u.EYA.CONTACT,
  helpdeskArticle: i.Z.getArticleURL(u.BhN.BILLING)
}) : null != U && (0, o.GY)(U, d.id, p) ? _.Z.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_PLAN_CHANGE_V2.format({
  primaryText: s,
  rate: e,
  paidURL: u.EYA.PAID_TERMS,
  contactLink: u.EYA.CONTACT,
  helpdeskArticle: i.Z.getArticleURL(u.BhN.BILLING)
}) : _.Z.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_V2.format({
  primaryText: s,
  rate: e,
  paidURL: u.EYA.PAID_TERMS,
  contactLink: u.EYA.CONTACT,
  helpdeskArticle: i.Z.getArticleURL(u.BhN.BILLING)
});
  }
  return (0, s.jsxs)(s.Fragment, {
children: [
  '' !== O && (0, s.jsxs)('div', {
    children: [
      (0, s.jsx)('div', {
        children: O
      }),
      (0, s.jsx)('div', {
        className: E.divider
      })
    ]
  }),
  '' !== C && (0, s.jsx)('div', {
    children: C
  }),
  L === u.HeQ.PAYSAFE_CARD && (0, s.jsx)('div', {
    className: E.paymentSourceNoticeCopy,
    children: _.Z.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_PAYSAFECARD
  }),
  L === u.HeQ.SOFORT && (0, s.jsxs)('div', {
    className: E.paymentSourceNoticeCopy,
    children: [
      _.Z.Messages.SOFORT_MANDATE_AGREEMENT,
      ' '
    ]
  })
]
  });
};