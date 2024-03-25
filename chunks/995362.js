"use strict";
s.r(t), s.d(t, {
  default: function() {
    return g
  }
}), s("222007");
var a = s("37983");
s("884691");
var n = s("627445"),
  l = s.n(n),
  i = s("77078"),
  r = s("812204"),
  o = s("685665"),
  d = s("10514"),
  u = s("719923"),
  c = s("153160"),
  S = s("809071"),
  E = s("646718"),
  T = s("49111"),
  f = s("782340"),
  _ = s("423525");

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
    h = m.invoiceItems.find(e => {
      let {
        subscriptionPlanId: t
      } = e;
      return (0, u.isPremiumBaseSubscriptionPlan)(t)
    });
  if (null == h) return null;
  let N = h.subscriptionPlanId,
    I = d.default.get(N);
  l(null != I, "Missing plan");
  let p = (0, c.formatPrice)(m.total, m.currency),
    C = "";
  return I.interval === E.SubscriptionIntervalTypes.YEAR ? C = f.default.Messages.BILLING_PAYMENT_PREMIUM_TERMS_LEGALESE_YEARLY.format({
    price: p,
    termsUrl: T.MarketingURLs.TERMS,
    paidURL: T.MarketingURLs.PAID_TERMS,
    privacyUrl: T.MarketingURLs.PRIVACY
  }) : I.interval === E.SubscriptionIntervalTypes.MONTH && (C = 1 === I.intervalCount ? f.default.Messages.BILLING_PAYMENT_PREMIUM_TERMS_LEGALESE_MONTHLY.format({
    price: p,
    termsUrl: T.MarketingURLs.TERMS,
    paidURL: T.MarketingURLs.PAID_TERMS,
    privacyUrl: T.MarketingURLs.PRIVACY
  }) : f.default.Messages.BILLING_PAYMENT_PREMIUM_TERMS_LEGALESE_MULTI_MONTH.format({
    price: p,
    termsUrl: T.MarketingURLs.TERMS,
    paidURL: T.MarketingURLs.PAID_TERMS,
    privacyUrl: T.MarketingURLs.PRIVACY,
    intervalCount: I.intervalCount
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