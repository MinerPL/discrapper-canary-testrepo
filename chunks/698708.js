t.d(a, {
    Z: function () {
        return d;
    }
});
var s = t(735250);
t(470079);
var n = t(481060),
    l = t(881052),
    r = t(128069),
    o = t(598),
    i = t(409813),
    c = t(981631),
    u = t(689938);
function d(e) {
    let { planError: a, purchaseErrorBlockRef: t, className: d } = e,
        { currencies: E, paymentError: A, purchaseError: N, purchasePreviewError: m } = (0, o.usePaymentContext)(),
        _ = null;
    null != m ? (_ = m) : null != A && null == (0, i.ly)(A) ? (_ = A) : null != N ? (_ = N) : null != a && (_ = a);
    let p = E.length > 1,
        h = null != _ ? _.message : '';
    return (null != _ && _ instanceof l.HF && (_.code === r.SM.CARD_DECLINED && p && (h += ' '.concat(u.Z.Messages.BILLING_ERROR_TRY_ANOTHER)), _.code === r.SM.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (h = u.Z.Messages.GIFT_CODE_SMITE_REJECT_HELP_TEXT), _.code === c.evJ.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (h = u.Z.Messages.GIFT_CODE_PAYMENT_SOURCE_INVALID)), null == _)
        ? null
        : (0, s.jsx)('div', {
              className: d,
              children: (0, s.jsx)(n.FormErrorBlock, {
                  ref: t,
                  children: h
              })
          });
}
