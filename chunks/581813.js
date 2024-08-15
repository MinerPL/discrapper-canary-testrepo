t.d(a, {
  k: function() {
return u;
  }
});
var s = t(735250);
t(470079);
var n = t(120356),
  l = t.n(n),
  r = t(481060),
  o = t(219929),
  i = t(689938),
  c = t(701681);
let u = e => {
  let {
className: a,
submitting: t,
stripePaymentMethod: n
  } = e, {
card: u
  } = null != n ? n : {}, d = null != u ? o.ZP.getType(u.brand) : o.ZP.Types.UNKNOWN;
  return (0, s.jsx)(r.FormSection, {
className: a,
title: i.Z.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_INFO_TITLE,
children: (0, s.jsxs)('div', {
  className: c.cardNumberWrapper,
  children: [
    (0, s.jsx)(o.ZP, {
      className: l()(c.cardIcon, {
        [c.submitting]: t
      }),
      type: d
    }),
    (0, s.jsx)(r.TextInput, {
      value: t && null != u ? i.Z.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_INFO_CREATING.format(u) : void 0,
      editable: !1,
      readOnly: !0,
      placeholder: i.Z.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_INFO_LOADING,
      inputClassName: c.cardNumberInput
    })
  ]
})
  });
};