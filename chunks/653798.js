s.d(n, {
  HE: function() {
return N;
  },
  Ji: function() {
return d;
  },
  KU: function() {
return T;
  },
  PO: function() {
return u;
  },
  R$: function() {
return _;
  },
  i$: function() {
return E;
  },
  q9: function() {
return I;
  }
});
var t = s(735250);
s(470079);
var r = s(120356),
  l = s.n(r),
  a = s(911969),
  i = s(937615),
  c = s(689938),
  o = s(30695);

function u(e) {
  let {
children: n,
className: s
  } = e;
  return (0, t.jsx)('div', {
className: l()(o.table, s),
children: n
  });
}

function I(e) {
  let {
children: n
  } = e;
  return (0, t.jsx)('div', {
className: o.header,
children: n
  });
}

function _(e) {
  let {
label: n,
value: s,
className: r
  } = e;
  return (0, t.jsxs)('div', {
className: l()(o.row, r),
children: [
  (0, t.jsx)('div', {
    className: o.rowLabel,
    children: n
  }),
  (0, t.jsx)('div', {
    className: o.rowAmount,
    children: s
  })
]
  });
}

function E(e) {
  let {
label: n,
value: s,
discounts: r,
originalAmount: l,
interval: u,
currency: I,
className: E,
intervalCount: T
  } = e, d = e => null != r ? r.find(n => n.type === e) : null, N = d(a.eW.SUBSCRIPTION_PLAN), M = d(a.eW.ENTITLEMENT), A = null != N ? Math.floor(N.amount / l * 100) : null, P = (0, i.T4)(l, I);
  return (0, t.jsxs)(t.Fragment, {
children: [
  (0, t.jsx)(_, {
    label: n,
    value: (0, t.jsxs)(t.Fragment, {
      children: [
        s,
        null != A ? (0, t.jsxs)('div', {
          className: o.rowPercentDiscount,
          children: [
            '-',
            A,
            '%'
          ]
        }) : null
      ]
    }),
    className: E
  }),
  null != A ? (0, t.jsxs)('div', {
    className: o.rowDiscountOriginalPrice,
    children: [
      '(',
      null != u && null != T ? (0, i.og)(P, u, T) : P,
      ')'
    ]
  }) : null,
  null != M ? (0, t.jsx)('div', {
    className: o.entitlementDiscountRow,
    children: c.Z.Messages.BILLING_INVOICE_SUBSCRIPTION_CREDIT_APPLIED
  }) : null
]
  });
}

function T(e) {
  let {
extended: n = !1,
negativeMarginTop: s = !1,
negativeMarginBottom: r = !1
  } = e;
  return (0, t.jsx)('div', {
className: l()(o.divider, {
  [o.dividerExtended]: n,
  [o.negativeMarginTop]: s,
  [o.negativeMarginBottom]: r
})
  });
}

function d(e) {
  let {
label: n,
value: s,
className: r
  } = e;
  return (0, t.jsxs)('div', {
className: l()(o.totalRow, r),
children: [
  (0, t.jsx)('div', {
    className: o.totalLabel,
    children: n
  }),
  (0, t.jsx)('div', {
    className: o.totalAmount,
    children: s
  })
]
  });
}

function N(e) {
  let {
children: n,
className: s
  } = e;
  return (0, t.jsx)('div', {
className: l()(o.finePrint, s),
children: n
  });
}