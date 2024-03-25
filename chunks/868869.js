"use strict";
s.r(t), s.d(t, {
  getReviewConfirmButtonLabel: function() {
    return T
  },
  default: function() {
    return A
  }
});
var a = s("37983");
s("884691");
var r = s("627445"),
  n = s.n(r),
  i = s("77078"),
  l = s("642906"),
  u = s("181114"),
  c = s("719923"),
  o = s("380186"),
  d = s("843455"),
  E = s("782340"),
  _ = s("839330"),
  I = s("121432");

function T(e) {
  let {
    purchaseType: t,
    plan: s,
    premiumSubscription: a,
    isGift: r,
    planGroup: i,
    isPrepaidPaymentSource: l
  } = e;
  if (t === d.PurchaseTypes.ONE_TIME) return r ? E.default.Messages.PAYMENT_MODAL_BUTTON_PREMIUM_GIFT : E.default.Messages.GUILD_PRODUCT_PURCHASE_MODAL_CTA;
  if (n(null != s, "Subscription plan must be selected to render SubscriptionReviewButton"), r) return E.default.Messages.PAYMENT_MODAL_BUTTON_PREMIUM_GIFT;
  if ((0, c.isPremiumSubscriptionPlan)(s.id)) return l ? E.default.Messages.BILLING_SELECT_PLAN : null != a ? (0, o.subscriptionCanSwitchImmediately)(a, s.id, i) ? E.default.Messages.BILLING_SWITCH_PLAN_UPGRADE : E.default.Messages.BILLING_SWITCH_PLAN_CHANGE : (0, c.getBillingReviewSubheader)(null, s);
  return E.default.Messages.BILLING_SUBSCRIBE_TO_PLAN
}

function p(e, t) {
  null != e.current && (e.current.scrollIntoView({
    behavior: "smooth"
  }), t())
}

function A(e) {
  let {
    legalTermsNodeRef: t,
    invoiceError: s,
    planError: r,
    disablePurchase: n,
    flashLegalTerms: c,
    isSubmitting: o,
    premiumSubscription: d,
    isGift: A,
    planGroup: L,
    isPrepaid: f,
    isTrial: M,
    makePurchase: N,
    needsPaymentSource: S
  } = e, {
    selectedPlan: P,
    hasAcceptedTerms: R,
    purchaseType: h
  } = (0, l.usePaymentContext)(), C = T({
    purchaseType: h,
    plan: P,
    premiumSubscription: d,
    isGift: A,
    planGroup: L,
    isPrepaidPaymentSource: f
  });
  if (null != s || null != r || n) return (0, a.jsx)(i.Button, {
    color: i.Button.Colors.GREEN,
    disabled: !0,
    children: C
  });
  if (S) return (0, a.jsx)(i.Tooltip, {
    text: E.default.Messages.BILLING_SELECT_PAYMENT_SOURCE_TOOLTIP,
    children: e => (0, a.jsx)(i.Button, {
      ...e,
      color: i.Button.Colors.GREEN,
      type: "submit",
      "data-testid": "submitButton",
      disabled: !0,
      children: C
    })
  });
  if (M) return (0, a.jsxs)(u.default, {
    innerClassName: _.innerButton,
    "data-testid": R ? "purchase" : "submitButton",
    onClick: R ? N : () => p(t, c),
    color: i.Button.Colors.GREEN,
    submitting: o,
    children: [(0, a.jsx)("img", {
      alt: "",
      className: _.nitroIcon,
      src: I
    }), C]
  });
  else if (!R) return (0, a.jsx)(i.Tooltip, {
    text: E.default.Messages.BILLING_ACCEPT_TERMS_PAID_SERVICES_TOOLTIP,
    children: e => (0, a.jsx)(i.Button, {
      ...e,
      color: i.Button.Colors.GREEN,
      type: "submit",
      onClick: () => p(t, c),
      "data-testid": "submitButton",
      children: C
    })
  });
  else return (0, a.jsx)(i.Button, {
    "data-testid": "purchase",
    onClick: N,
    color: i.Button.Colors.GREEN,
    submitting: o,
    children: C
  })
}