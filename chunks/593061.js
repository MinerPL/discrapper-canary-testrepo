s.d(t, {
    Z: function () {
        return c;
    }
});
var n = s(735250);
s(470079);
var a = s(481060), i = s(357841), r = s(231338), o = s(689938), l = s(69630);
function c(e) {
    let {payment: t} = e, s = null != t.paymentSource && t.status === r.Py.COMPLETED;
    return null == t.downloadableInvoice || '' === t.downloadableInvoice ? s ? (0, n.jsx)('div', {
        className: l.downloadInvoice,
        children: (0, n.jsx)(a.Anchor, {
            onClick: () => {
                var e, s;
                e = t, s = t.paymentSource, i.Z.open(e, s);
            },
            children: o.Z.Messages.BILLING_DOWNLOAD_INVOICE
        })
    }) : null : (0, n.jsxs)('div', {
        className: l.downloadInvoice,
        children: [
            (0, n.jsx)(a.Anchor, {
                href: t.downloadableInvoice,
                children: o.Z.Messages.BILLING_DOWNLOAD_INVOICE_VAT
            }),
            null != t.downloadableRefundInvoices ? t.downloadableRefundInvoices.map((e, t) => (0, n.jsx)(a.Anchor, {
                className: l.downloadRefundInvoice,
                href: e,
                children: o.Z.Messages.BILLING_DOWNLOAD_REFUND_INVOICE
            }, t)) : null
        ]
    });
}
