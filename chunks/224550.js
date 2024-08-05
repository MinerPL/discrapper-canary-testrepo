s(411104);
var t = s(735250);
s(470079);
var r = s(858987),
  l = s(122289),
  a = s(63063),
  i = s(74538),
  c = s(937615),
  o = s(296848),
  u = s(981631),
  I = s(474936),
  _ = s(689938),
  E = s(7185);
n.Z = function(e) {
  let n, s, T;
  let {
subscriptionPlan: d,
isGift: N,
isEmbeddedIAP: M,
renewalInvoice: A,
paymentSourceType: P,
hide: L,
purchaseType: R,
productLine: S,
basePrice: m,
currentSubscription: U
  } = e;
  if (L)
return null;
  let p = null == e.planGroup ? [] : e.planGroup;
  if (null != A) {
let e = i.ZP.getIntervalForInvoice(A);
n = e.intervalType, s = e.intervalCount, T = (0, c.og)((0, c.T4)(A.total, A.currency), n, s);
  } else
null != d && (n = d.interval, s = d.intervalCount);
  let O = (0, r.K)({
  purchaseType: R || u.GZQ.SUBSCRIPTION,
  plan: d,
  premiumSubscription: null == U ? null : U,
  isGift: !!N,
  planGroup: p,
  isPrepaidPaymentSource: !1
}),
C = '',
v = '';
  if (M) {
if (null != T && (null == A ? void 0 : A.subscriptionPeriodEnd) != null)
  C = _.Z.Messages.EMBEDDED_ACTIVITIES_IAP_NON_REFUNDABLE_SUBSCRIPTION_RATE_AND_RENEWAL.format({
    rate: T,
    renewalDate: A.subscriptionPeriodEnd
  });
else
  switch (n) {
    case I.rV.MONTH:
      C = 1 === s ? _.Z.Messages.EMBEDDED_ACTIVITIES_IAP_NON_REFUNDABLE_SUBSCRIPTION_MONTHLY : _.Z.Messages.EMBEDDED_ACTIVITIES_IAP_NON_REFUNDABLE_SUBSCRIPTION_MULTI_MONTH.format({
        intervalCount: s
      });
      break;
    case I.rV.YEAR:
      C = _.Z.Messages.EMBEDDED_ACTIVITIES_IAP_NON_REFUNDABLE_SUBSCRIPTION_YEARLY;
      break;
    case void 0:
      v = _.Z.Messages.BILLING_LEGAL_MUMBO_JUMBO_TERMS_LABEL_V2.format({
        primaryText: O,
        paidURL: u.EYA.PAID_TERMS
      }), C = _.Z.Messages.EMBEDDED_ACTIVITIES_IAP_NON_REFUNDABLE.format({});
      break;
    default:
      throw Error('Unexpected interval: '.concat(n));
  }
  } else if (R === u.GZQ.ONE_TIME)
v = _.Z.Messages.BILLING_LEGAL_MUMBO_JUMBO_TERMS_LABEL_V2.format({
  primaryText: O,
  paidURL: u.EYA.PAID_TERMS
}), C = S === u.POd.COLLECTIBLES ? N ? _.Z.Messages.COLLECTIBLES_PURCHASE_DISCLAIMER_GIFT_PAYMENT : _.Z.Messages.COLLECTIBLES_PURCHASE_DISCLAIMER_PAYMENT : _.Z.Messages.ONE_TIME_PURCHASE_FINE_PRINT;
  else if (null == d || N)
switch (N && (v = _.Z.Messages.BILLING_LEGAL_MUMBO_JUMBO_TERMS_LABEL_V2.format({
    primaryText: O,
    paidURL: u.EYA.PAID_TERMS
  })), n) {
  case I.rV.MONTH:
    C = N ? _.Z.Messages.PREMIUM_PAYMENT_GIFT_SUBTEXT_MONTHLY : _.Z.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_MONTHLY, C = N ? _.Z.Messages.PREMIUM_PAYMENT_GIFT_SUBTEXT_MONTHLY : 1 === s ? _.Z.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_MONTHLY : _.Z.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_MULTI_MONTH.format({
      intervalCount: s
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
let t = (0, r.K)({
  purchaseType: u.GZQ.SUBSCRIPTION,
  plan: d,
  premiumSubscription: null == U ? null : U,
  isGift: !1,
  planGroup: p,
  isPrepaidPaymentSource: !1
});
if (null != m && null != n && null != s && (e = (0, c.og)((0, c.T4)(m.amount, m.currency), n, s)), null == e) {
  let e = Error('Missing base rate for legal fine print');
  (0, l.q2)(e, {
    tags: {
      planId: d.id
    }
  });
}
C = (null == U ? void 0 : U.isPaused) ? _.Z.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_RESUME.format({
  primaryText: t,
  rate: e,
  paidURL: u.EYA.PAID_TERMS,
  contactLink: u.EYA.CONTACT,
  helpdeskArticle: a.Z.getArticleURL(u.BhN.BILLING)
}) : null != U && (0, o.GY)(U, d.id, p) ? _.Z.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_PLAN_CHANGE_V2.format({
  primaryText: t,
  rate: e,
  paidURL: u.EYA.PAID_TERMS,
  contactLink: u.EYA.CONTACT,
  helpdeskArticle: a.Z.getArticleURL(u.BhN.BILLING)
}) : _.Z.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_V2.format({
  primaryText: t,
  rate: e,
  paidURL: u.EYA.PAID_TERMS,
  contactLink: u.EYA.CONTACT,
  helpdeskArticle: a.Z.getArticleURL(u.BhN.BILLING)
});
  }
  return (0, t.jsxs)(t.Fragment, {
children: [
  '' !== v && (0, t.jsxs)('div', {
    children: [
      (0, t.jsx)('div', {
        children: v
      }),
      (0, t.jsx)('div', {
        className: E.divider
      })
    ]
  }),
  '' !== C && (0, t.jsx)('div', {
    children: C
  }),
  P === u.HeQ.PAYSAFE_CARD && (0, t.jsx)('div', {
    className: E.paymentSourceNoticeCopy,
    children: _.Z.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_PAYSAFECARD
  }),
  P === u.HeQ.SOFORT && (0, t.jsxs)('div', {
    className: E.paymentSourceNoticeCopy,
    children: [
      _.Z.Messages.SOFORT_MANDATE_AGREEMENT,
      ' '
    ]
  })
]
  });
};