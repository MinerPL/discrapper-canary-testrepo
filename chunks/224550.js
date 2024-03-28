"use strict";
s.r(t), s("411104");
var a = s("735250");
s("470079");
var l = s("858987"),
  r = s("122289"),
  i = s("63063"),
  n = s("74538"),
  u = s("937615"),
  c = s("296848"),
  o = s("981631"),
  d = s("474936"),
  E = s("689938"),
  _ = s("345905");
t.default = function(e) {
  let t, s, I;
  let {
    subscriptionPlan: T,
    isGift: L,
    isEmbeddedIAP: A,
    renewalInvoice: p,
    paymentSourceType: M,
    hide: N,
    purchaseType: S,
    productLine: f,
    basePrice: R,
    currentSubscription: h
  } = e;
  if (N) return null;
  let P = null == e.planGroup ? [] : e.planGroup;
  if (null != p) {
    let e = n.default.getIntervalForInvoice(p);
    t = e.intervalType, s = e.intervalCount, I = (0, u.formatRate)((0, u.formatPrice)(p.total, p.currency), t, s)
  } else null != T && (t = T.interval, s = T.intervalCount);
  let C = (0, l.getReviewConfirmButtonLabel)({
      purchaseType: S || o.PurchaseTypes.SUBSCRIPTION,
      plan: T,
      premiumSubscription: null == h ? null : h,
      isGift: !!L,
      planGroup: P,
      isPrepaidPaymentSource: !1
    }),
    U = "",
    m = "";
  if (A) {
    if (null != I && (null == p ? void 0 : p.subscriptionPeriodEnd) != null) U = E.default.Messages.EMBEDDED_ACTIVITIES_IAP_NON_REFUNDABLE_SUBSCRIPTION_RATE_AND_RENEWAL.format({
      rate: I,
      renewalDate: p.subscriptionPeriodEnd
    });
    else switch (t) {
      case d.SubscriptionIntervalTypes.MONTH:
        U = 1 === s ? E.default.Messages.EMBEDDED_ACTIVITIES_IAP_NON_REFUNDABLE_SUBSCRIPTION_MONTHLY : E.default.Messages.EMBEDDED_ACTIVITIES_IAP_NON_REFUNDABLE_SUBSCRIPTION_MULTI_MONTH.format({
          intervalCount: s
        });
        break;
      case d.SubscriptionIntervalTypes.YEAR:
        U = E.default.Messages.EMBEDDED_ACTIVITIES_IAP_NON_REFUNDABLE_SUBSCRIPTION_YEARLY;
        break;
      case void 0:
        m = E.default.Messages.BILLING_LEGAL_MUMBO_JUMBO_TERMS_LABEL_V2.format({
          primaryText: C,
          paidURL: o.MarketingURLs.PAID_TERMS
        }), U = E.default.Messages.EMBEDDED_ACTIVITIES_IAP_NON_REFUNDABLE.format({});
        break;
      default:
        throw Error("Unexpected interval: ".concat(t))
    }
  } else if (S === o.PurchaseTypes.ONE_TIME) m = E.default.Messages.BILLING_LEGAL_MUMBO_JUMBO_TERMS_LABEL_V2.format({
    primaryText: C,
    paidURL: o.MarketingURLs.PAID_TERMS
  }), U = f === o.SKUProductLines.COLLECTIBLES ? L ? E.default.Messages.COLLECTIBLES_PURCHASE_DISCLAIMER_GIFT_PAYMENT : E.default.Messages.COLLECTIBLES_PURCHASE_DISCLAIMER_PAYMENT : E.default.Messages.ONE_TIME_PURCHASE_FINE_PRINT;
  else if (null == T || L) switch (L && (m = E.default.Messages.BILLING_LEGAL_MUMBO_JUMBO_TERMS_LABEL_V2.format({
      primaryText: C,
      paidURL: o.MarketingURLs.PAID_TERMS
    })), t) {
    case d.SubscriptionIntervalTypes.MONTH:
      U = L ? E.default.Messages.PREMIUM_PAYMENT_GIFT_SUBTEXT_MONTHLY : E.default.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_MONTHLY, U = L ? E.default.Messages.PREMIUM_PAYMENT_GIFT_SUBTEXT_MONTHLY : 1 === s ? E.default.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_MONTHLY : E.default.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_MULTI_MONTH.format({
        intervalCount: s
      });
      break;
    case d.SubscriptionIntervalTypes.YEAR:
      U = L ? E.default.Messages.PREMIUM_PAYMENT_GIFT_SUBTEXT_YEARLY : E.default.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_YEARLY;
      break;
    case void 0:
      U = "";
      break;
    default:
      throw Error("Unexpected interval: ".concat(t))
  } else {
    let e;
    let a = (0, l.getReviewConfirmButtonLabel)({
      purchaseType: o.PurchaseTypes.SUBSCRIPTION,
      plan: T,
      premiumSubscription: null == h ? null : h,
      isGift: !1,
      planGroup: P,
      isPrepaidPaymentSource: !1
    });
    if (null != R && null != t && null != s && (e = (0, u.formatRate)((0, u.formatPrice)(R.amount, R.currency), t, s)), null == e) {
      let e = Error("Missing base rate for legal fine print");
      (0, r.captureBillingException)(e, {
        tags: {
          planId: T.id
        }
      })
    }
    U = null != h && (0, c.subscriptionCanDowngrade)(h, T.id, P) ? E.default.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_PLAN_CHANGE_V2.format({
      primaryText: a,
      rate: e,
      paidURL: o.MarketingURLs.PAID_TERMS,
      contactLink: o.MarketingURLs.CONTACT,
      helpdeskArticle: i.default.getArticleURL(o.HelpdeskArticles.BILLING)
    }) : E.default.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_V2.format({
      primaryText: a,
      rate: e,
      paidURL: o.MarketingURLs.PAID_TERMS,
      contactLink: o.MarketingURLs.CONTACT,
      helpdeskArticle: i.default.getArticleURL(o.HelpdeskArticles.BILLING)
    })
  }
  return (0, a.jsxs)(a.Fragment, {
    children: ["" !== m && (0, a.jsxs)("div", {
      children: [(0, a.jsx)("div", {
        children: m
      }), (0, a.jsx)("div", {
        className: _.divider
      })]
    }), "" !== U && (0, a.jsx)("div", {
      children: U
    }), M === o.PaymentSourceTypes.PAYSAFE_CARD && (0, a.jsx)("div", {
      className: _.paymentSourceNoticeCopy,
      children: E.default.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_PAYSAFECARD
    }), M === o.PaymentSourceTypes.SOFORT && (0, a.jsxs)("div", {
      className: _.paymentSourceNoticeCopy,
      children: [E.default.Messages.SOFORT_MANDATE_AGREEMENT, " "]
    })]
  })
}