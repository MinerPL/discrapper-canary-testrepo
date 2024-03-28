"use strict";
a.r(t), a.d(t, {
  PaymentRequestStepBody: function() {
    return i
  }
});
var n = a("735250");
a("470079");
var s = a("803997"),
  r = a.n(s),
  l = a("481060"),
  o = a("912454"),
  u = a("689938"),
  c = a("708930");
let i = e => {
  let {
    className: t,
    submitting: a,
    stripePaymentMethod: s
  } = e, {
    card: i
  } = null != s ? s : {}, d = null != i ? o.default.getType(i.brand) : o.default.Types.UNKNOWN;
  return (0, n.jsx)(l.FormSection, {
    className: t,
    title: u.default.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_INFO_TITLE,
    children: (0, n.jsxs)("div", {
      className: c.cardNumberWrapper,
      children: [(0, n.jsx)(o.default, {
        className: r()(c.cardIcon, {
          [c.submitting]: a
        }),
        type: d
      }), (0, n.jsx)(l.TextInput, {
        value: a && null != i ? u.default.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_INFO_CREATING.format(i) : void 0,
        editable: !1,
        readOnly: !0,
        placeholder: u.default.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_INFO_LOADING,
        inputClassName: c.cardNumberInput
      })]
    })
  })
}