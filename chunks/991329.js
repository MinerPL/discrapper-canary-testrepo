"use strict";
i.r(n), i.d(n, {
  default: function() {
    return s
  }
});
var t = i("37983");
i("884691");
var l = i("153160"),
  r = i("883662"),
  a = i("782340");

function s(e) {
  let {
    invoice: n
  } = e;
  return n.taxInclusive || n.tax <= 0 ? null : (0, t.jsx)(r.PremiumInvoiceTableRow, {
    label: a.default.Messages.TAX_LABEL,
    value: (0, l.formatPrice)(n.tax, n.currency)
  })
}