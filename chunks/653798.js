"use strict";
i.r(n), i.d(n, {
  PremiumInvoiceDiscountedTableRow: function() {
    return M
  },
  PremiumInvoiceTable: function() {
    return T
  },
  PremiumInvoiceTableDivider: function() {
    return N
  },
  PremiumInvoiceTableFinePrint: function() {
    return f
  },
  PremiumInvoiceTableHeader: function() {
    return P
  },
  PremiumInvoiceTableRow: function() {
    return v
  },
  PremiumInvoiceTableTotalRow: function() {
    return R
  }
});
var t = i("735250");
i("470079");
var a = i("120356"),
  l = i.n(a),
  r = i("442837"),
  s = i("481060"),
  u = i("911969"),
  o = i("706454"),
  c = i("937615"),
  I = i("104494"),
  d = i("474936"),
  m = i("689938"),
  _ = i("137284");

function T(e) {
  let {
    children: n,
    className: i
  } = e;
  return (0, t.jsx)("div", {
    className: l()(_.table, i),
    children: n
  })
}

function P(e) {
  let {
    children: n
  } = e;
  return (0, t.jsx)("div", {
    className: _.header,
    children: n
  })
}

function v(e) {
  let {
    label: n,
    value: i,
    className: a
  } = e;
  return (0, t.jsxs)("div", {
    className: l()(_.row, a),
    children: [(0, t.jsx)("div", {
      className: _.rowLabel,
      children: n
    }), (0, t.jsx)("div", {
      className: _.rowAmount,
      children: i
    })]
  })
}

function M(e) {
  let {
    label: n,
    value: i,
    discounts: a,
    originalAmount: l,
    interval: T,
    currency: P,
    className: M,
    intervalCount: N,
    planId: R
  } = e, f = e => null != a ? a.find(n => n.type === e) : null, E = f(u.InvoiceDiscountTypes.SUBSCRIPTION_PLAN), S = f(u.InvoiceDiscountTypes.ENTITLEMENT), p = (0, I.usePremiumAnnualDiscountOffer)(), b = null != E && null != p && null != R && R === d.SubscriptionPlans.PREMIUM_YEAR_TIER_2, U = null == E || b ? null : Math.floor(E.amount / l * 100), L = (0, r.useStateFromStores)([o.default], () => o.default.locale), O = () => {
    var e;
    let n = (0, c.formatPercent)(L, d.ANNUAL_DISCOUNT_IDS_TO_PERCENTAGES[null !== (e = null == p ? void 0 : p.discount_id) && void 0 !== e ? e : "DEFAULT"]);
    return (0, t.jsx)(s.Text, {
      variant: "eyebrow",
      color: "always-white",
      className: _.annualPlanOptionDiscount,
      children: m.default.Messages.BILLING_PLAN_SELECTION_DISCOUNT.format({
        discount: n
      })
    })
  }, A = (0, c.formatPrice)(l, P);
  return (0, t.jsxs)(t.Fragment, {
    children: [(0, t.jsx)(v, {
      label: n,
      value: b ? (0, t.jsx)("div", {
        className: _.annualDiscountValues,
        children: (0, t.jsxs)(t.Fragment, {
          children: [(0, t.jsxs)("div", {
            className: _.annualPlanDiscountPriceSection,
            children: [O(), i]
          }), (0, t.jsx)(s.Text, {
            variant: "text-md/normal",
            color: "interactive-normal",
            children: m.default.Messages.BILLING_ANNUAL_DISCOUNT_YEARLY_PRICE_SUBTEXT.format({
              regularPrice: A
            })
          })]
        })
      }) : (0, t.jsxs)(t.Fragment, {
        children: [i, null != U ? (0, t.jsxs)("div", {
          className: _.rowPercentDiscount,
          children: ["-", U, "%"]
        }) : null]
      }),
      className: M
    }), null != U ? (0, t.jsxs)("div", {
      className: _.rowDiscountOriginalPrice,
      children: ["(", null != T && null != N ? (0, c.formatRate)(A, T, N) : A, ")"]
    }) : null, null != S ? (0, t.jsx)("div", {
      className: _.entitlementDiscountRow,
      children: m.default.Messages.BILLING_INVOICE_SUBSCRIPTION_CREDIT_APPLIED
    }) : null]
  })
}

function N(e) {
  let {
    extended: n = !1,
    negativeMarginTop: i = !1,
    negativeMarginBottom: a = !1
  } = e;
  return (0, t.jsx)("div", {
    className: l()(_.divider, {
      [_.dividerExtended]: n,
      [_.negativeMarginTop]: i,
      [_.negativeMarginBottom]: a
    })
  })
}

function R(e) {
  let {
    label: n,
    value: i,
    className: a
  } = e;
  return (0, t.jsxs)("div", {
    className: l()(_.totalRow, a),
    children: [(0, t.jsx)("div", {
      className: _.totalLabel,
      children: n
    }), (0, t.jsx)("div", {
      className: _.totalAmount,
      children: i
    })]
  })
}

function f(e) {
  let {
    children: n,
    className: i
  } = e;
  return (0, t.jsx)("div", {
    className: l()(_.finePrint, i),
    children: n
  })
}