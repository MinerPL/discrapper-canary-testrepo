"use strict";
a.r(t), a.d(t, {
  AwaitingAuthenticationStep: function() {
    return d
  },
  AwaitingAuthenticationStepBody: function() {
    return c
  }
});
var n = a("735250");
a("470079");
var r = a("512722"),
  s = a.n(r),
  l = a("481060"),
  o = a("598"),
  i = a("185139"),
  u = a("689938");
let c = e => {
  let {
    className: t
  } = e;
  return (0, n.jsx)(l.FormSection, {
    className: t,
    children: (0, n.jsx)(l.FormTitle, {
      children: u.default.Messages.PAYMENT_WAITING_FOR_AUTHENTICATION
    })
  })
};

function d(e) {
  let {
    steps: t,
    currentStep: a,
    paymentError: r,
    className: l
  } = e, {
    steps: u,
    step: d,
    paymentError: p
  } = (0, o.usePaymentContext)();
  return t = null != t ? t : u, null == a && null != d && (a = d), s()(a, "step should be set"), s()(t, "step should be set"), r = null != r ? r : p, (0, n.jsx)(i.default, {
    steps: t,
    currentStep: a,
    paymentError: r,
    body: (0, n.jsx)(c, {
      className: l
    }),
    footer: null
  })
}