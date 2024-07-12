t.d(a, {
  Z: function() {
return d;
  }
});
var n = t(735250);
t(470079);
var r = t(481060),
  s = t(881052),
  l = t(128069),
  o = t(598),
  i = t(409813),
  c = t(981631),
  u = t(689938);

function d(e) {
  let {
planError: a,
purchaseErrorBlockRef: t,
className: d
  } = e, {
currencies: E,
paymentError: _,
purchaseError: p,
purchasePreviewError: m
  } = (0, o.usePaymentContext)(), A = null;
  null != m ? A = m : null != _ && null == (0, i.ly)(_) ? A = _ : null != p ? A = p : null != a && (A = a);
  let N = E.length > 1,
h = null != A ? A.message : '';
  return (null != A && A instanceof s.HF && (A.code === l.SM.CARD_DECLINED && N && (h += ' '.concat(u.Z.Messages.BILLING_ERROR_TRY_ANOTHER)), A.code === l.SM.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (h = u.Z.Messages.GIFT_CODE_SMITE_REJECT_HELP_TEXT), A.code === c.evJ.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (h = u.Z.Messages.GIFT_CODE_PAYMENT_SOURCE_INVALID)), null == A) ? null : (0, n.jsx)('div', {
className: d,
children: (0, n.jsx)(r.FormErrorBlock, {
  ref: t,
  children: h
})
  });
}