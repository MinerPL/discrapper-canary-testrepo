t.d(n, {
  F7: function() {
return S;
  },
  WA: function() {
return p;
  },
  s2: function() {
return f;
  },
  wo: function() {
return C;
  },
  yp: function() {
return T;
  }
});
var i = t(735250);
t(470079);
var r = t(853872),
  o = t(409813),
  a = t(276442),
  s = t(793541),
  l = t(380898),
  c = t(713316),
  d = t(710094),
  u = t(865921),
  _ = t(689938);
let p = {
key: null,
renderStep: e => (0, i.jsx)(u.v, {
  ...e
})
  },
  f = {
key: o.h8.ADD_PAYMENT_STEPS,
renderStep: e => (0, i.jsx)(i.Fragment, {
  children: (0, i.jsx)(a.J, {
    ...e,
    breadcrumbSteps: [
      o.h8.ADD_PAYMENT_STEPS,
      o.h8.REVIEW,
      o.h8.CONFIRM
    ],
    onReturn: () => {
      0 === Object.keys(r.Z.paymentSources).length ? e.handleClose() : e.handleStepChange(o.h8.REVIEW, {
        trackedFromStep: o.h8.ADD_PAYMENT_STEPS
      });
    }
  })
}),
options: {
  renderHeader: !0
}
  },
  I = {
key: o.h8.AWAITING_PURCHASE_TOKEN_AUTH,
renderStep: () => (0, i.jsx)(l.Z, {})
  },
  m = {
key: o.h8.AWAITING_AUTHENTICATION,
renderStep: () => (0, i.jsx)(s.Z, {}),
options: {
  renderHeader: !0
}
  },
  C = {
key: o.h8.REVIEW,
renderStep: e => (0, i.jsx)(d.l, {
  ...e
}),
options: {
  useBreadcrumbLabel: () => _.Z.Messages.BILLING_STEP_REVIEW
}
  },
  S = {
key: o.h8.CONFIRM,
renderStep: e => (0, i.jsx)(c.w, {
  ...e
})
  },
  T = [
I,
m
  ];