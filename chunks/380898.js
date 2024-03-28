"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
}), n("47120");
var i = n("735250"),
  s = n("470079"),
  a = n("16084"),
  l = n("86040"),
  r = n("51499"),
  u = n("614277"),
  o = n("581896");

function c() {
  let [e, t] = s.useState(!1), n = async () => {
    t(!0), await (0, a.resendPaymentVerificationEmail)()
  };
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(r.default, {}), (0, i.jsx)(u.PaymentPortalBody, {
      children: (0, i.jsx)(l.AwaitingPurchaseTokenAuthStepBody, {
        className: o.body,
        isEmailResent: e,
        resendEmail: n
      })
    }), (0, i.jsx)(u.PaymentPortalFooter, {
      children: (0, i.jsx)(l.AwaitingPurchaseTokenAuthStepFooter, {})
    })]
  })
}