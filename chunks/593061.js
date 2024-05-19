"use strict";
s.r(t), s.d(t, {
  default: function() {
    return o
  }
});
var a = s("735250");
s("470079");
var n = s("481060"),
  i = s("357841"),
  l = s("231338"),
  r = s("689938"),
  u = s("511700");

function o(e) {
  let {
    payment: t
  } = e, s = null != t.paymentSource && t.status === l.PaymentStatusTypes.COMPLETED;
  return null == t.downloadableInvoice || "" === t.downloadableInvoice ? s ? (0, a.jsx)("div", {
    className: u.downloadInvoice,
    children: (0, a.jsx)(n.Anchor, {
      onClick: () => {
        var e, s;
        e = t, s = t.paymentSource, i.default.open(e, s)
      },
      children: r.default.Messages.BILLING_DOWNLOAD_INVOICE
    })
  }) : null : (0, a.jsxs)("div", {
    className: u.downloadInvoice,
    children: [(0, a.jsx)(n.Anchor, {
      href: t.downloadableInvoice,
      children: r.default.Messages.BILLING_DOWNLOAD_INVOICE_VAT
    }), null != t.downloadableRefundInvoices ? t.downloadableRefundInvoices.map((e, t) => (0, a.jsx)(n.Anchor, {
      className: u.downloadRefundInvoice,
      href: e,
      children: r.default.Messages.BILLING_DOWNLOAD_REFUND_INVOICE
    }, t)) : null]
  })
}