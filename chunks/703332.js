"use strict";
s.r(t), s.d(t, {
  default: function() {
    return I
  }
}), s("70102");
var a = s("37983");
s("884691");
var r = s("868869"),
  n = s("745279"),
  i = s("701909"),
  l = s("719923"),
  u = s("153160"),
  c = s("380186"),
  o = s("49111"),
  d = s("646718"),
  E = s("782340"),
  _ = s("808965"),
  I = function(e) {
    let t, s, I;
    let {
      subscriptionPlan: T,
      isGift: p,
      isEmbeddedIAP: A,
      renewalInvoice: L,
      paymentSourceType: f,
      hide: M,
      purchaseType: N,
      productLine: S,
      basePrice: P,
      currentSubscription: R
    } = e;
    if (M) return null;
    let h = null == e.planGroup ? [] : e.planGroup;
    if (null != L) {
      let e = l.default.getIntervalForInvoice(L);
      t = e.intervalType, s = e.intervalCount, I = (0, u.formatRate)((0, u.formatPrice)(L.total, L.currency), t, s)
    } else null != T && (t = T.interval, s = T.intervalCount);
    let C = (0, r.getReviewConfirmButtonLabel)({
        purchaseType: N || o.PurchaseTypes.SUBSCRIPTION,
        plan: T,
        premiumSubscription: null == R ? null : R,
        isGift: !!p,
        planGroup: h,
        isPrepaidPaymentSource: !1
      }),
      U = "",
      m = "";
    if (A) {
      if (null != I && (null == L ? void 0 : L.subscriptionPeriodEnd) != null) U = E.default.Messages.EMBEDDED_ACTIVITIES_IAP_NON_REFUNDABLE_SUBSCRIPTION_RATE_AND_RENEWAL.format({
        rate: I,
        renewalDate: L.subscriptionPeriodEnd
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
    } else if (N === o.PurchaseTypes.ONE_TIME) m = E.default.Messages.BILLING_LEGAL_MUMBO_JUMBO_TERMS_LABEL_V2.format({
      primaryText: C,
      paidURL: o.MarketingURLs.PAID_TERMS
    }), U = S === o.SKUProductLines.COLLECTIBLES ? p ? E.default.Messages.COLLECTIBLES_PURCHASE_DISCLAIMER_GIFT_PAYMENT : E.default.Messages.COLLECTIBLES_PURCHASE_DISCLAIMER_PAYMENT : E.default.Messages.ONE_TIME_PURCHASE_FINE_PRINT;
    else if (null == T || p) switch (p && (m = E.default.Messages.BILLING_LEGAL_MUMBO_JUMBO_TERMS_LABEL_V2.format({
        primaryText: C,
        paidURL: o.MarketingURLs.PAID_TERMS
      })), t) {
      case d.SubscriptionIntervalTypes.MONTH:
        U = p ? E.default.Messages.PREMIUM_PAYMENT_GIFT_SUBTEXT_MONTHLY : E.default.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_MONTHLY, U = p ? E.default.Messages.PREMIUM_PAYMENT_GIFT_SUBTEXT_MONTHLY : 1 === s ? E.default.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_MONTHLY : E.default.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_MULTI_MONTH.format({
          intervalCount: s
        });
        break;
      case d.SubscriptionIntervalTypes.YEAR:
        U = p ? E.default.Messages.PREMIUM_PAYMENT_GIFT_SUBTEXT_YEARLY : E.default.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_YEARLY;
        break;
      case void 0:
        U = "";
        break;
      default:
        throw Error("Unexpected interval: ".concat(t))
    } else {
      let e;
      let a = (0, r.getReviewConfirmButtonLabel)({
        purchaseType: o.PurchaseTypes.SUBSCRIPTION,
        plan: T,
        premiumSubscription: null == R ? null : R,
        isGift: !1,
        planGroup: h,
        isPrepaidPaymentSource: !1
      });
      if (null != P && null != t && null != s && (e = (0, u.formatRate)((0, u.formatPrice)(P.amount, P.currency), t, s)), null == e) {
        let e = Error("Missing base rate for legal fine print");
        (0, n.captureBillingException)(e, {
          tags: {
            planId: T.id
          }
        })
      }
      U = null != R && (0, c.subscriptionCanDowngrade)(R, T.id, h) ? E.default.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_PLAN_CHANGE_V2.format({
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
      }), f === o.PaymentSourceTypes.PAYSAFE_CARD && (0, a.jsx)("div", {
        className: _.paymentSourceNoticeCopy,
        children: E.default.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_PAYSAFECARD
      }), f === o.PaymentSourceTypes.SOFORT && (0, a.jsxs)("div", {
        className: _.paymentSourceNoticeCopy,
        children: [E.default.Messages.SOFORT_MANDATE_AGREEMENT, " "]
      })]
    })
  }