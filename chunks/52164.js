"use strict";
s.r(t), s.d(t, {
  default: function() {
    return g
  }
}), s("47120");
var a = s("735250");
s("470079");
var n = s("512722"),
  l = s.n(n),
  i = s("481060"),
  r = s("100527"),
  o = s("906732"),
  d = s("509545"),
  u = s("74538"),
  c = s("937615"),
  S = s("374649"),
  E = s("474936"),
  T = s("981631"),
  f = s("689938"),
  _ = s("904014");

function m(e) {
  let {
    subscription: t,
    withOverheadSeparator: s
  } = e, {
    analyticsLocations: n
  } = (0, o.default)(), [m] = (0, S.useSubscriptionInvoicePreview)({
    subscriptionId: t.id,
    renewal: !0,
    analyticsLocations: n,
    analyticsLocation: r.default.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT
  });
  if (null == m) return null;
  let g = s ? _.finePrintWithOverheadSeparator : _.finePrint,
    I = m.invoiceItems.find(e => {
      let {
        subscriptionPlanId: t
      } = e;
      return (0, u.isPremiumBaseSubscriptionPlan)(t)
    });
  if (null == I) return null;
  let h = I.subscriptionPlanId,
    N = d.default.get(h);
  l()(null != N, "Missing plan");
  let p = (0, c.formatPrice)(m.total, m.currency),
    C = "";
  return N.interval === E.SubscriptionIntervalTypes.YEAR ? C = f.default.Messages.BILLING_PAYMENT_PREMIUM_TERMS_LEGALESE_YEARLY.format({
    price: p,
    termsUrl: T.MarketingURLs.TERMS,
    paidURL: T.MarketingURLs.PAID_TERMS,
    privacyUrl: T.MarketingURLs.PRIVACY
  }) : N.interval === E.SubscriptionIntervalTypes.MONTH && (C = 1 === N.intervalCount ? f.default.Messages.BILLING_PAYMENT_PREMIUM_TERMS_LEGALESE_MONTHLY.format({
    price: p,
    termsUrl: T.MarketingURLs.TERMS,
    paidURL: T.MarketingURLs.PAID_TERMS,
    privacyUrl: T.MarketingURLs.PRIVACY
  }) : f.default.Messages.BILLING_PAYMENT_PREMIUM_TERMS_LEGALESE_MULTI_MONTH.format({
    price: p,
    termsUrl: T.MarketingURLs.TERMS,
    paidURL: T.MarketingURLs.PAID_TERMS,
    privacyUrl: T.MarketingURLs.PRIVACY,
    intervalCount: N.intervalCount
  })), (0, a.jsx)(i.Text, {
    color: "text-muted",
    className: g,
    variant: "text-xs/normal",
    children: C
  })
}

function g(e) {
  let {
    subscription: t,
    withOverheadSeparator: s
  } = e;
  return t.status === T.SubscriptionStatusTypes.CANCELED || t.isPurchasedExternally ? null : (0, a.jsx)(m, {
    subscription: t,
    withOverheadSeparator: s
  })
}