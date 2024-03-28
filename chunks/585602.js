"use strict";
i.r(n), i.d(n, {
  default: function() {
    return s
  }
});
var t = i("735250");
i("470079");
var l = i("937615"),
  r = i("653798"),
  a = i("689938");

function s(e) {
  let {
    invoice: n
  } = e;
  return n.taxInclusive || n.tax <= 0 ? null : (0, t.jsx)(r.PremiumInvoiceTableRow, {
    label: a.default.Messages.TAX_LABEL,
    value: (0, l.formatPrice)(n.tax, n.currency)
  })
}