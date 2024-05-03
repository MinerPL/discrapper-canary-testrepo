"use strict";
i.r(n), i.d(n, {
  PremiumInvoiceLabelWithAdjustment: function() {
    return D
  },
  PremiumSubscriptionChangePlanInvoiceRows: function() {
    return j
  },
  PremiumSubscriptionCurrentInvoiceRows: function() {
    return g
  },
  PremiumTrialInvoiceTableRow: function() {
    return Y
  },
  SubscriptionInvoiceFooter: function() {
    return F
  },
  SubscriptionInvoiceGift: function() {
    return H
  },
  SubscriptionPeriodResetNotice: function() {
    return B
  }
}), i("411104"), i("724458"), i("47120");
var t = i("735250"),
  a = i("470079"),
  l = i("120356"),
  r = i.n(l),
  s = i("512722"),
  u = i.n(s),
  o = i("442837"),
  c = i("481060"),
  I = i("911969"),
  d = i("100527"),
  m = i("906732"),
  _ = i("509545"),
  T = i("259580"),
  P = i("396525"),
  v = i("63063"),
  M = i("74538"),
  N = i("937615"),
  R = i("374649"),
  f = i("591548"),
  E = i("639119"),
  S = i("653798"),
  p = i("585602"),
  b = i("474936"),
  U = i("981631"),
  L = i("689938"),
  O = i("363250");
let A = (e, n) => {
    var i;
    return !!(null === (i = e.discounts) || void 0 === i ? void 0 : i.some(e => e.type === n))
  },
  x = (e, n) => {
    var i, t, a;
    return e.subscriptionPlanPrice - (null !== (a = null === (t = e.discounts) || void 0 === t ? void 0 : null === (i = t.find(e => e.type === n)) || void 0 === i ? void 0 : i.amount) && void 0 !== a ? a : 0)
  };

function C(e) {
  var n;
  let {
    invoiceItem: i,
    overrideAmount: a,
    showGuildSubscriptionAdjustmentTooltip: l,
    currency: r,
    className: s,
    isPrepaidPaymentSource: d,
    referralTrialOfferId: m
  } = e, T = (0, o.useStateFromStores)([_.default], () => _.default.get(i.subscriptionPlanId)), v = null === (n = (0, E.usePremiumTrialOffer)(m)) || void 0 === n ? void 0 : n.subscription_trial;
  u()(null != T, "Missing subscriptionPlan");
  let R = function(e, n, i, t) {
    let a = A(e, I.InvoiceDiscountTypes.PREMIUM_TRIAL);
    switch (e.subscriptionPlanId) {
      case b.SubscriptionPlans.PREMIUM_MONTH_LEGACY:
      case b.SubscriptionPlans.PREMIUM_YEAR_LEGACY:
      case b.SubscriptionPlans.PREMIUM_MONTH_TIER_0:
      case b.SubscriptionPlans.PREMIUM_YEAR_TIER_0:
      case b.SubscriptionPlans.PREMIUM_MONTH_TIER_1:
      case b.SubscriptionPlans.PREMIUM_YEAR_TIER_1:
      case b.SubscriptionPlans.PREMIUM_MONTH_TIER_2:
      case b.SubscriptionPlans.PREMIUM_YEAR_TIER_2:
      case b.SubscriptionPlans.PREMIUM_3_MONTH_TIER_2:
      case b.SubscriptionPlans.PREMIUM_6_MONTH_TIER_2:
        return (0, M.getDisplayName)(e.subscriptionPlanId, a, i, t);
      case b.SubscriptionPlans.PREMIUM_3_MONTH_GUILD:
      case b.SubscriptionPlans.PREMIUM_6_MONTH_GUILD:
        return L.default.Messages.PREMIUM_GUILD_NUM_MULTI_MONTHS_GUILD_SUBSCRIPTIONS.format({
          num: e.quantity,
          intervalCount: n.intervalCount
        });
      case b.SubscriptionPlans.PREMIUM_MONTH_GUILD:
        return L.default.Messages.PREMIUM_GUILD_NUM_MONTH_GUILD_SUBSCRIPTIONS.format({
          num: e.quantity
        });
      case b.SubscriptionPlans.PREMIUM_YEAR_GUILD:
        return L.default.Messages.PREMIUM_GUILD_NUM_YEAR_GUILD_SUBSCRIPTIONS.format({
          num: e.quantity
        })
    }
    switch (n.interval) {
      case b.SubscriptionIntervalTypes.MONTH:
        if (1 === n.intervalCount) return L.default.Messages.MONTHLY_GUILD_SUBSCRIPTION.format({
          planName: n.name
        });
        return L.default.Messages.MULTI_MONTHS_GUILD_SUBSCRIPTION.format({
          planName: n.name,
          intervalCount: n.intervalCount
        });
      case b.SubscriptionIntervalTypes.YEAR:
        return L.default.Messages.YEARLY_GUILD_SUBSCRIPTION.format({
          planName: n.name
        })
    }
    throw Error("Unexpected invoice plan: ".concat(e.subscriptionPlanId))
  }(i, T, d, (0, M.formatIntervalDuration)({
    intervalType: null == v ? void 0 : v.interval,
    intervalCount: null == v ? void 0 : v.interval_count
  }));
  !0 === l && (R = (0, t.jsxs)("div", {
    className: O.invoiceItemLabelWithIcon,
    children: [(0, t.jsxs)("div", {
      children: [R, " "]
    }), (0, t.jsx)(c.Tooltip, {
      text: L.default.Messages.PREMIUM_SUBSCRIPTION_GUILD_SUBSCRIPTION_ADJUSTMENT_TOOLTIP.format(),
      "aria-label": L.default.Messages.PREMIUM_SUBSCRIPTION_GUILD_SUBSCRIPTION_ADJUSTMENT_TEXT,
      tooltipClassName: O.invoiceItemTooltip,
      children: e => (0, t.jsx)(P.default, {
        ...e,
        className: O.invoiceItemLabelIcon
      })
    })]
  }));
  let f = (0, N.formatPrice)(null != a ? a : i.amount, r),
    p = d ? f : (0, N.formatRate)(f, T.interval, T.intervalCount);
  return (0, t.jsx)(S.PremiumInvoiceDiscountedTableRow, {
    label: R,
    value: p,
    originalAmount: i.subscriptionPlanPrice * i.quantity,
    discounts: i.discounts,
    interval: T.interval,
    intervalCount: T.intervalCount,
    currency: r,
    className: s,
    planId: i.subscriptionPlanId
  })
}

function D(e) {
  let {
    label: n,
    tooltipText: i,
    tooltipAriaLabel: a
  } = e;
  return (0, t.jsxs)("div", {
    className: O.invoiceItemLabelWithIcon,
    children: [n, (0, t.jsx)(c.Tooltip, {
      clickableOnMobile: !0,
      text: i,
      "aria-label": a,
      tooltipClassName: O.invoiceItemTooltip,
      children: e => (0, t.jsx)(P.default, {
        ...e,
        className: O.invoiceItemLabelIcon
      })
    })]
  })
}

function g(e) {
  let {
    invoice: n,
    isPrepaidPaymentSource: i
  } = e, a = (0, f.coalesceInvoiceItems)(n.invoiceItems), l = a.find(e => !(0, M.isPremiumGuildSubscriptionPlan)(e.subscriptionPlanId) && e.amount >= 0), r = a.find(e => (0, M.isPremiumGuildSubscriptionPlan)(e.subscriptionPlanId) && e.amount >= 0), s = (0, o.useStateFromStores)([_.default], () => null != r ? _.default.get(r.subscriptionPlanId) : null), u = null != r ? r.amount : 0, c = (0, N.formatPrice)(u, n.currency), I = null != s ? (0, N.formatRate)(c, s.interval, s.intervalCount) : 0;
  return (0, t.jsxs)(t.Fragment, {
    children: [null != l ? (0, t.jsx)(C, {
      invoiceItem: l,
      currency: n.currency,
      isPrepaidPaymentSource: i
    }) : null, 0 !== u && null != r && null != s ? (0, t.jsx)(S.PremiumInvoiceTableRow, {
      label: L.default.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_INVOICE_ROW_CONTENT.format({
        numGuildSubscriptions: r.quantity,
        planName: (0, M.getDisplayName)(s.id, !1, i)
      }),
      value: i ? c : I
    }) : null, (0, t.jsx)(p.default, {
      invoice: n
    }), (0, t.jsx)(S.PremiumInvoiceTableDivider, {}), (0, t.jsx)(S.PremiumInvoiceTableTotalRow, {
      label: (n.taxInclusive ? i ? L.default.Messages.BILLING_INVOICE_TOTAL_TAX_INCLUSIVE : L.default.Messages.BILLING_INVOICE_TODAY_TOTAL_TAX_INCLUSIVE : L.default.Messages.BILLING_INVOICE_TODAY_TOTAL).format(),
      value: n.currency === U.CurrencyCodes.USD ? (0, N.formatPrice)(n.total, n.currency) : "".concat((0, N.formatPrice)(n.total, n.currency), "*")
    })]
  })
}

function j(e) {
  let {
    invoice: n,
    newPlan: i,
    isPrepaidPaymentSource: a,
    referralTrialOfferId: l
  } = e, r = (0, f.coalesceInvoiceItems)(n.invoiceItems), s = r.find(e => e.subscriptionPlanId === i.id);
  u()(null != s, "Expected newPlanInvoiceItem");
  let o = r.find(e => !(0, M.isPremiumGuildSubscriptionPlan)(e.subscriptionPlanId) && e.amount < 0),
    c = r.find(e => null == e.subscriptionPlanId && null != e.discounts && e.discounts.find(e => e.type === I.InvoiceDiscountTypes.PREMIUM_LEGACY_UPGRADE_PROMOTION)),
    d = A(s, I.InvoiceDiscountTypes.PREMIUM_TRIAL),
    m = x(s, I.InvoiceDiscountTypes.SUBSCRIPTION_PLAN),
    _ = s.quantity * m,
    T = s.amount + (null != o ? o.amount : 0) - _ + (null != c ? c.amount : 0),
    P = r.filter(e => e.subscriptionPlanId === b.SubscriptionPlans.PREMIUM_MONTH_GUILD || e.subscriptionPlanId === b.SubscriptionPlans.PREMIUM_YEAR_GUILD).reduce((e, n) => e + n.amount, 0);
  return (0, t.jsxs)(t.Fragment, {
    children: [(0, t.jsx)(C, {
      invoiceItem: s,
      currency: n.currency,
      overrideAmount: _,
      isPrepaidPaymentSource: a,
      referralTrialOfferId: l
    }), 0 === T || d ? null : (0, t.jsx)(S.PremiumInvoiceTableRow, {
      label: (0, t.jsx)(D, {
        label: L.default.Messages.PREMIUM_SUBSCRIPTION_PLAN_ADJUSTMENT.format({
          planName: (0, M.isPremiumSubscriptionPlan)(i.id) ? (0, M.getTierDisplayName)(i.id) : i.name
        }),
        tooltipText: L.default.Messages.PREMIUM_SUBSCRIPTION_ADJUSTMENT_TOOLTIP
      }),
      value: (0, N.formatPrice)(T, n.currency)
    }), 0 !== P ? (0, t.jsx)(S.PremiumInvoiceTableRow, {
      label: (0, t.jsx)(D, {
        label: L.default.Messages.PREMIUM_SUBSCRIPTION_GUILD_SUBSCRIPTION_ADJUSTMENT,
        tooltipText: L.default.Messages.PREMIUM_SUBSCRIPTION_GUILD_SUBSCRIPTION_ADJUSTMENT_TOOLTIP.format(),
        tooltipAriaLabel: L.default.Messages.PREMIUM_SUBSCRIPTION_GUILD_SUBSCRIPTION_ADJUSTMENT_TEXT
      }),
      value: (0, N.formatPrice)(P, n.currency)
    }) : null, (0, t.jsx)(p.default, {
      invoice: n
    }), (0, t.jsx)(S.PremiumInvoiceTableDivider, {}), (0, t.jsx)(S.PremiumInvoiceTableTotalRow, {
      label: (n.taxInclusive ? a ? L.default.Messages.BILLING_INVOICE_TOTAL_TAX_INCLUSIVE : L.default.Messages.BILLING_INVOICE_TODAY_TOTAL_TAX_INCLUSIVE : L.default.Messages.BILLING_INVOICE_TODAY_TOTAL).format(),
      value: n.currency === U.CurrencyCodes.USD ? (0, N.formatPrice)(n.total, n.currency) : "".concat((0, N.formatPrice)(n.total, n.currency), "*")
    })]
  })
}

function y(e) {
  let n = e.slice();
  return n.sort((e, n) => {
    let i = (0, M.isPremiumBaseSubscriptionPlan)(e.subscriptionPlanId),
      t = (0, M.isPremiumBaseSubscriptionPlan)(n.subscriptionPlanId);
    return i && !t ? -1 : !i && t ? 1 : 0
  }), n
}

function h(e) {
  return e.filter(e => {
    let {
      subscriptionPlanId: n
    } = e;
    return n !== b.SubscriptionPlans.NONE_MONTH && n !== b.SubscriptionPlans.NONE_YEAR
  })
}

function B(e) {
  let {
    proratedInvoice: n,
    renewalInvoice: i
  } = e, {
    intervalType: a,
    intervalCount: l
  } = (0, M.getIntervalForInvoice)(n), {
    intervalType: r,
    intervalCount: s
  } = (0, M.getIntervalForInvoice)(i);
  return a !== r || l !== s || n.subscriptionPeriodEnd.getTime() === i.subscriptionPeriodStart.getTime() ? null : (0, t.jsx)("div", {
    className: O.subscriptionPeriodResetNotice,
    children: L.default.Messages.PREMIUM_SUBSCRIPTION_PERIOD_RESET_NOTICE.format({
      renewalDate: n.subscriptionPeriodEnd
    })
  })
}

function G(e) {
  let {
    isUpdate: n,
    currentInvoice: i,
    newInvoice: a
  } = e, l = null != i ? (0, f.coalesceInvoiceItems)(i.invoiceItems) : null, s = null != i ? (0, M.getIntervalForInvoice)(i) : null, {
    intervalType: u,
    intervalCount: o
  } = (0, M.getIntervalForInvoice)(a), c = null != s && (s.intervalType !== u || s.intervalCount !== o);
  return (0, t.jsxs)(t.Fragment, {
    children: [(0, t.jsx)(S.PremiumInvoiceTableDivider, {
      extended: !0
    }), null != i ? (0, t.jsxs)(t.Fragment, {
      children: [(0, t.jsx)(S.PremiumInvoiceTableHeader, {
        children: L.default.Messages.PREMIUM_SUBSCRIPTION_CURRENT_LABEL
      }), h(y((0, f.coalesceInvoiceItems)(i.invoiceItems))).map(e => (0, t.jsx)(C, {
        invoiceItem: e,
        currency: i.currency
      }, e.id)), (0, t.jsx)(S.PremiumInvoiceTableDivider, {
        extended: !0
      })]
    }) : null, (0, t.jsx)(S.PremiumInvoiceTableHeader, {
      children: L.default.Messages.PREMIUM_SUBSCRIPTION_NEW_LABEL
    }), h(y((0, f.coalesceInvoiceItems)(a.invoiceItems))).map(e => {
      let i = null != l && !l.some(n => n.subscriptionPlanId === e.subscriptionPlanId && n.quantity === e.quantity);
      return (0, t.jsx)(C, {
        invoiceItem: e,
        currency: a.currency,
        showGuildSubscriptionAdjustmentTooltip: c && (e.subscriptionPlanId === b.SubscriptionPlans.PREMIUM_MONTH_GUILD || e.subscriptionPlanId === b.SubscriptionPlans.PREMIUM_YEAR_GUILD || e.subscriptionPlanId === b.SubscriptionPlans.PREMIUM_3_MONTH_GUILD || e.subscriptionPlanId === b.SubscriptionPlans.PREMIUM_6_MONTH_GUILD),
        className: r()({
          [O.subscriptionAddedInvoiceItem]: !n || i
        })
      }, e.id)
    }), (0, t.jsx)(p.default, {
      invoice: a
    }), (0, t.jsx)(S.PremiumInvoiceTableDivider, {}), (0, t.jsx)(S.PremiumInvoiceTableRow, {
      label: L.default.Messages.PREMIUM_SUBSCRIPTION_NEW_TOTAL,
      value: (0, N.formatRate)((0, N.formatPrice)(a.total, a.currency), u, o),
      className: O.subscriptionCostRow
    })]
  })
}

function w(e) {
  var n;
  let {
    proratedInvoice: i,
    renewalInvoice: a,
    isTrial: l,
    isUpdate: r,
    overrideRenewalDate: s,
    trialFooterMessageOverride: u
  } = e, o = null === (n = (0, E.usePremiumTrialOffer)()) || void 0 === n ? void 0 : n.subscription_trial, {
    intervalType: c,
    intervalCount: I
  } = (0, M.getIntervalForInvoice)(a);
  if (null == i) return null;
  if (l) {
    let e = (0, M.formatIntervalDuration)({
        intervalType: null == o ? void 0 : o.interval,
        intervalCount: null == o ? void 0 : o.interval_count
      }),
      n = (null == o ? void 0 : o.interval) === b.SubscriptionIntervalTypes.DAY && (null == o ? void 0 : o.interval_count) < 28 ? 2 : 7;
    return (0, t.jsx)(t.Fragment, {
      children: null != u ? u : L.default.Messages.PREMIUM_SUBSCRIPTION_RENEWAL_FOOTER_TRIAL_DURATION.format({
        duration: e,
        days: n,
        contactLink: U.MarketingURLs.CONTACT,
        helpdeskArticle: v.default.getArticleURL(U.HelpdeskArticles.PREMIUM_TRIAL)
      })
    })
  }
  let d = a.taxInclusive ? L.default.Messages.PREMIUM_SUBSCRIPTION_RENEWAL_FOOTER : L.default.Messages.PREMIUM_SUBSCRIPTION_RENEWAL_FOOTER_TAX_EXCLUSIVE;
  return (0, t.jsx)(t.Fragment, {
    children: d.format({
      rate: (0, N.formatRate)((0, N.formatPrice)(a.subtotal, a.currency), c, I),
      renewalDate: null != s ? s : r ? null != i ? i.subscriptionPeriodEnd : a.subscriptionPeriodStart : a.subscriptionPeriodEnd,
      contactLink: U.MarketingURLs.CONTACT,
      helpdeskArticle: v.default.getArticleURL(U.HelpdeskArticles.BILLING)
    })
  })
}

function F(e) {
  let {
    premiumSubscription: n,
    proratedInvoice: i,
    renewalInvoice: l,
    overrideRenewalDate: r,
    isUpdate: s = !1,
    isTrial: u = !1,
    priceOptions: o,
    isPrepaidPaymentSource: I = !1,
    trialFooterMessageOverride: _,
    hideSubscriptionDetails: P = !1,
    hasAnnualInvoicePreview: v = !1
  } = e, {
    analyticsLocations: M
  } = (0, m.default)(), N = {
    subscriptionId: null == n ? void 0 : n.id,
    renewal: !0,
    preventFetch: !s,
    analyticsLocatinons: M,
    analyticsLocation: d.default.SUBSCRIPTION_INVOICE_FOOTER,
    ...o
  }, [f] = (0, R.useSubscriptionInvoicePreview)(N), [E, p] = a.useState(!1);
  return (0, t.jsxs)(t.Fragment, {
    children: [I || v ? null : (0, t.jsx)(S.PremiumInvoiceTableFinePrint, {
      children: (0, t.jsx)(w, {
        proratedInvoice: i,
        renewalInvoice: l,
        isTrial: u,
        isUpdate: s,
        overrideRenewalDate: r,
        trialFooterMessageOverride: _
      })
    }), !P && (0, t.jsxs)(t.Fragment, {
      children: [(0, t.jsxs)(c.Clickable, {
        onClick: () => p(e => !e),
        className: O.subscriptionDetailsToggle,
        children: [E ? L.default.Messages.PREMIUM_SUBSCRIPTION_HIDE_DETAILS : L.default.Messages.PREMIUM_SUBSCRIPTION_SHOW_DETAILS, (0, t.jsx)(T.default, {
          direction: E ? T.default.Directions.UP : T.default.Directions.DOWN,
          className: O.subscriptionDetailsToggleCaret
        })]
      }), E ? (0, t.jsx)(G, {
        isUpdate: s,
        currentInvoice: f,
        newInvoice: l
      }) : null]
    })]
  })
}

function H(e) {
  let n, {
      plan: i,
      className: a,
      isPrepaidPaymentSource: l = !1,
      isCustomGift: r = !1,
      invoicePreview: s
    } = e,
    {
      tax: u,
      taxInclusive: o,
      currency: I
    } = s,
    d = s.total,
    m = d - u,
    _ = (0, N.formatPrice)(m, I),
    T = (0, N.formatPrice)(d, I);
  return n = r ? (0, M.getIntervalString)(i.interval, !0, void 0, void 0, !0, (0, M.getPremiumType)(i.id)) : L.default.Messages.BILLING_INVOICE_GIFT_PLAN.format({
    planName: (0, M.getDisplayName)(i.id, !1, l)
  }), (0, t.jsxs)("div", {
    className: a,
    children: [(0, t.jsx)(c.FormTitle, {
      children: L.default.Messages.PREMIUM_GIFTING_BUTTON
    }), u >= 0 && !1 === o ? (0, t.jsxs)(t.Fragment, {
      children: [(0, t.jsx)(c.Text, {
        variant: "text-md/bold",
        className: O.purchaseDetailsHeaderText,
        children: n
      }), (0, t.jsxs)(S.PremiumInvoiceTable, {
        className: a,
        children: [(0, t.jsx)(S.PremiumInvoiceTableHeader, {
          children: L.default.Messages.ONE_TIME_PURCHASE_REVIEW_STEP_PURCHASE_DETAILS_LABEL
        }), (0, t.jsx)(S.PremiumInvoiceTableRow, {
          label: n,
          value: _
        }), (0, t.jsx)(p.default, {
          invoice: s
        }), (0, t.jsx)(S.PremiumInvoiceTableDivider, {}), (0, t.jsx)(S.PremiumInvoiceTableRow, {
          label: L.default.Messages.BILLING_PAYMENT_BREAKDOWN_TOTAL,
          value: T,
          className: O.subscriptionCostRow
        })]
      })]
    }) : (0, t.jsx)(c.Heading, {
      variant: "text-md/normal",
      children: "".concat(n, " - ").concat(T)
    })]
  })
}

function Y(e) {
  let n, {
      invoice: i,
      plan: a
    } = e,
    l = (0, f.coalesceInvoiceItems)(i.invoiceItems).find(e => e.subscriptionPlanId === a.id);
  return u()(null != l, "newPlanInvoiceItem can not be null"), a.interval === b.SubscriptionIntervalTypes.MONTH ? n = i.taxInclusive ? L.default.Messages.BILLING_TRIAL_MONTHLY_PRICE_AFTER_TRIAL : L.default.Messages.BILLING_TRIAL_MONTHLY_PRICE_AFTER_TRIAL_TAX_EXCLUSIVE : a.interval === b.SubscriptionIntervalTypes.YEAR ? n = i.taxInclusive ? L.default.Messages.BILLING_TRIAL_YEARLY_PRICE_AFTER_TRIAL : L.default.Messages.BILLING_TRIAL_YEARLY_PRICE_AFTER_TRIAL_TAX_EXCLUSIVE : u()(!1, "Invalid interval type"), (0, t.jsx)(c.Text, {
    variant: "text-md/normal",
    children: n.format({
      price: (0, N.formatPrice)(l.subscriptionPlanPrice, i.currency)
    })
  })
}