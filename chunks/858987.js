"use strict";
s.r(t), s.d(t, {
  default: function() {
    return p
  },
  getReviewConfirmButtonLabel: function() {
    return L
  }
});
var a = s("735250");
s("470079");
var l = s("512722"),
  r = s.n(l),
  i = s("481060"),
  n = s("598"),
  u = s("976644"),
  c = s("74538"),
  o = s("296848"),
  d = s("981631"),
  E = s("231338"),
  _ = s("689938"),
  I = s("711758"),
  T = s("74316");

function L(e) {
  let {
    purchaseType: t,
    plan: s,
    premiumSubscription: a,
    isGift: l,
    planGroup: i,
    isPrepaidPaymentSource: n
  } = e;
  if (t === E.PurchaseTypes.ONE_TIME) return l ? _.default.Messages.PAYMENT_MODAL_BUTTON_PREMIUM_GIFT : _.default.Messages.GUILD_PRODUCT_PURCHASE_MODAL_CTA;
  if (r()(null != s, "Subscription plan must be selected to render SubscriptionReviewButton"), l) return _.default.Messages.PAYMENT_MODAL_BUTTON_PREMIUM_GIFT;
  if ((0, c.isPremiumSubscriptionPlan)(s.id)) {
    if (n) return _.default.Messages.BILLING_SELECT_PLAN;
    if (null != a) return a.status === d.SubscriptionStatusTypes.PAUSED ? _.default.Messages.RESUME : (0, o.subscriptionCanSwitchImmediately)(a, s.id, i) ? _.default.Messages.BILLING_SWITCH_PLAN_UPGRADE : _.default.Messages.BILLING_SWITCH_PLAN_CHANGE;
    return (0, c.getBillingReviewSubheader)(null, s)
  }
  return _.default.Messages.BILLING_SUBSCRIBE_TO_PLAN
}

function A(e, t) {
  null != e.current && (e.current.scrollIntoView({
    behavior: "smooth"
  }), t())
}

function p(e) {
  let {
    legalTermsNodeRef: t,
    invoiceError: s,
    planError: l,
    disablePurchase: r,
    flashLegalTerms: c,
    isSubmitting: o,
    premiumSubscription: d,
    isGift: E,
    planGroup: p,
    isPrepaid: M,
    isTrial: N,
    makePurchase: S,
    needsPaymentSource: f
  } = e, {
    selectedPlan: R,
    hasAcceptedTerms: h,
    purchaseType: P
  } = (0, n.usePaymentContext)(), C = L({
    purchaseType: P,
    plan: R,
    premiumSubscription: d,
    isGift: E,
    planGroup: p,
    isPrepaidPaymentSource: M
  });
  if (null != s || null != l || r) return (0, a.jsx)(i.Button, {
    color: i.Button.Colors.GREEN,
    disabled: !0,
    children: C
  });
  if (f) return (0, a.jsx)(i.Tooltip, {
    text: _.default.Messages.BILLING_SELECT_PAYMENT_SOURCE_TOOLTIP,
    children: e => (0, a.jsx)(i.Button, {
      ...e,
      color: i.Button.Colors.GREEN,
      type: "submit",
      "data-testid": "submitButton",
      disabled: !0,
      children: C
    })
  });
  if (N) return (0, a.jsxs)(u.default, {
    innerClassName: I.innerButton,
    "data-testid": h ? "purchase" : "submitButton",
    onClick: h ? S : () => A(t, c),
    color: i.Button.Colors.GREEN,
    submitting: o,
    children: [(0, a.jsx)("img", {
      alt: "",
      className: I.nitroIcon,
      src: T
    }), C]
  });
  else if (!h) return (0, a.jsx)(i.Tooltip, {
    text: _.default.Messages.BILLING_ACCEPT_TERMS_PAID_SERVICES_TOOLTIP,
    children: e => (0, a.jsx)(i.Button, {
      ...e,
      color: i.Button.Colors.GREEN,
      type: "submit",
      onClick: () => A(t, c),
      "data-testid": "submitButton",
      children: C
    })
  });
  else return (0, a.jsx)(i.Button, {
    "data-testid": "purchase",
    onClick: S,
    color: i.Button.Colors.GREEN,
    submitting: o,
    children: C
  })
}