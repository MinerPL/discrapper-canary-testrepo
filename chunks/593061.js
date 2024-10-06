t.d(s, {
    Z: function () {
        return E;
    }
}),
    t(47120);
var n = t(735250),
    a = t(470079),
    i = t(544891),
    r = t(481060),
    o = t(357841),
    l = t(981631),
    c = t(231338),
    d = t(689938),
    _ = t(925477);
async function u(e) {
    try {
        return (
            await i.tn.get({
                url: l.ANM.BILLING_INVOICE_BREAKDOWN,
                query: { payment_id: e },
                oldFormErrors: !0
            })
        ).body;
    } catch (e) {
        throw e;
    }
}
function E(e) {
    let { payment: s } = e,
        [t, i] = a.useState(null),
        [l, E] = a.useState(null),
        T = async (e) => {
            try {
                let t = await u(s.id);
                i(t);
                let n = e ? t.refundInvoiceLinks[0] : t.invoiceLink;
                window.open(n, '_blank'), E(null);
            } catch (e) {
                var t;
                E(null === (t = e.body) || void 0 === t ? void 0 : t.message);
            }
        },
        S = null != s.paymentSource && s.status === c.Py.COMPLETED,
        I = null == t ? void 0 : t.invoiceLink,
        N = null == t ? void 0 : t.refundInvoiceLinks;
    return s.hasInvoiceURL && null == t
        ? (0, n.jsxs)('div', {
              className: _.downloadInvoice,
              children: [
                  (0, n.jsx)(r.Anchor, {
                      onClick: () => T(!1),
                      children: d.Z.Messages.BILLING_DOWNLOAD_INVOICE_VAT
                  }),
                  s.hasRefundInvoiceURLs
                      ? (0, n.jsx)(r.Anchor, {
                            className: _.downloadRefundInvoice,
                            onClick: () => T(!0),
                            children: d.Z.Messages.BILLING_DOWNLOAD_REFUND_INVOICE
                        })
                      : null,
                  (0, n.jsx)(r.Text, {
                      color: 'text-danger',
                      variant: 'text-sm/semibold',
                      children: l
                  })
              ]
          })
        : s.hasInvoiceURL && null != t
          ? (0, n.jsxs)('div', {
                className: _.downloadInvoice,
                children: [
                    (0, n.jsx)(r.Anchor, {
                        href: I,
                        children: d.Z.Messages.BILLING_DOWNLOAD_INVOICE_VAT
                    }),
                    null != N
                        ? N.map((e, s) =>
                              (0, n.jsx)(
                                  r.Anchor,
                                  {
                                      className: _.downloadRefundInvoice,
                                      href: e,
                                      children: d.Z.Messages.BILLING_DOWNLOAD_REFUND_INVOICE
                                  },
                                  s
                              )
                          )
                        : null,
                    (0, n.jsx)(r.Text, {
                        color: 'text-danger',
                        variant: 'text-sm/semibold',
                        children: l
                    })
                ]
            })
          : S
            ? (0, n.jsx)('div', {
                  className: _.downloadInvoice,
                  children: (0, n.jsx)(r.Anchor, {
                      onClick: () => {
                          var e, t;
                          (e = s), (t = s.paymentSource), o.Z.open(e, t);
                      },
                      children: d.Z.Messages.BILLING_DOWNLOAD_INVOICE
                  })
              })
            : null;
}
