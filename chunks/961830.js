t.d(n, {
  F7: function() {
return p;
  },
  WA: function() {
return f;
  },
  s2: function() {
return h;
  },
  wo: function() {
return C;
  },
  yp: function() {
return x;
  }
});
var a = t(735250);
t(470079);
var s = t(853872),
  i = t(409813),
  l = t(276442),
  r = t(793541),
  o = t(380898),
  d = t(713316),
  u = t(710094),
  c = t(865921),
  E = t(689938);
let f = {
key: null,
renderStep: e => (0, a.jsx)(c.v, {
  ...e
})
  },
  h = {
key: i.h8.ADD_PAYMENT_STEPS,
renderStep: e => (0, a.jsx)(a.Fragment, {
  children: (0, a.jsx)(l.J, {
    ...e,
    breadcrumbSteps: [
      i.h8.ADD_PAYMENT_STEPS,
      i.h8.REVIEW,
      i.h8.CONFIRM
    ],
    onReturn: () => {
      0 === Object.keys(s.Z.paymentSources).length ? e.handleClose() : e.handleStepChange(i.h8.REVIEW, {
        trackedFromStep: i.h8.ADD_PAYMENT_STEPS
      });
    }
  })
}),
options: {
  renderHeader: !0
}
  },
  m = {
key: i.h8.AWAITING_PURCHASE_TOKEN_AUTH,
renderStep: () => (0, a.jsx)(o.Z, {})
  },
  v = {
key: i.h8.AWAITING_AUTHENTICATION,
renderStep: () => (0, a.jsx)(r.Z, {}),
options: {
  renderHeader: !0
}
  },
  C = {
key: i.h8.REVIEW,
renderStep: e => (0, a.jsx)(u.l, {
  ...e
}),
options: {
  useBreadcrumbLabel: () => E.Z.Messages.BILLING_STEP_REVIEW
}
  },
  p = {
key: i.h8.CONFIRM,
renderStep: e => (0, a.jsx)(d.w, {
  ...e
})
  },
  x = [
m,
v
  ];