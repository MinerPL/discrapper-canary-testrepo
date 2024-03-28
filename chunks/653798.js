"use strict";
i.r(n), i.d(n, {
  PremiumInvoiceDiscountedTableRow: function() {
    return m
  },
  PremiumInvoiceTable: function() {
    return c
  },
  PremiumInvoiceTableDivider: function() {
    return P
  },
  PremiumInvoiceTableFinePrint: function() {
    return _
  },
  PremiumInvoiceTableHeader: function() {
    return I
  },
  PremiumInvoiceTableRow: function() {
    return d
  },
  PremiumInvoiceTableTotalRow: function() {
    return T
  }
});
var t = i("735250");
i("470079");
var l = i("803997"),
  r = i.n(l),
  a = i("911969"),
  s = i("937615"),
  u = i("689938"),
  o = i("429939");

function c(e) {
  let {
    children: n,
    className: i
  } = e;
  return (0, t.jsx)("div", {
    className: r()(o.table, i),
    children: n
  })
}

function I(e) {
  let {
    children: n
  } = e;
  return (0, t.jsx)("div", {
    className: o.header,
    children: n
  })
}

function d(e) {
  let {
    label: n,
    value: i,
    className: l
  } = e;
  return (0, t.jsxs)("div", {
    className: r()(o.row, l),
    children: [(0, t.jsx)("div", {
      className: o.rowLabel,
      children: n
    }), (0, t.jsx)("div", {
      className: o.rowAmount,
      children: i
    })]
  })
}

function m(e) {
  let {
    label: n,
    value: i,
    discounts: l,
    originalAmount: r,
    interval: c,
    currency: I,
    className: m,
    intervalCount: P
  } = e, T = e => null != l ? l.find(n => n.type === e) : null, _ = T(a.InvoiceDiscountTypes.SUBSCRIPTION_PLAN), v = T(a.InvoiceDiscountTypes.ENTITLEMENT), M = null != _ ? Math.floor(_.amount / r * 100) : null, R = (0, s.formatPrice)(r, I);
  return (0, t.jsxs)(t.Fragment, {
    children: [(0, t.jsx)(d, {
      label: n,
      value: (0, t.jsxs)(t.Fragment, {
        children: [i, null != M ? (0, t.jsxs)("div", {
          className: o.rowPercentDiscount,
          children: ["-", M, "%"]
        }) : null]
      }),
      className: m
    }), null != M ? (0, t.jsxs)("div", {
      className: o.rowDiscountOriginalPrice,
      children: ["(", null != c && null != P ? (0, s.formatRate)(R, c, P) : R, ")"]
    }) : null, null != v ? (0, t.jsx)("div", {
      className: o.entitlementDiscountRow,
      children: u.default.Messages.BILLING_INVOICE_SUBSCRIPTION_CREDIT_APPLIED
    }) : null]
  })
}

function P(e) {
  let {
    extended: n = !1,
    negativeMarginTop: i = !1,
    negativeMarginBottom: l = !1
  } = e;
  return (0, t.jsx)("div", {
    className: r()(o.divider, {
      [o.dividerExtended]: n,
      [o.negativeMarginTop]: i,
      [o.negativeMarginBottom]: l
    })
  })
}

function T(e) {
  let {
    label: n,
    value: i,
    className: l
  } = e;
  return (0, t.jsxs)("div", {
    className: r()(o.totalRow, l),
    children: [(0, t.jsx)("div", {
      className: o.totalLabel,
      children: n
    }), (0, t.jsx)("div", {
      className: o.totalAmount,
      children: i
    })]
  })
}

function _(e) {
  let {
    children: n,
    className: i
  } = e;
  return (0, t.jsx)("div", {
    className: r()(o.finePrint, i),
    children: n
  })
}