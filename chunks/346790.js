t.d(n, {
  n: function() {
return o;
  }
});
var a = t(735250);
t(470079);
var s = t(853872),
  i = t(987209),
  l = t(409813),
  r = t(276442);
let o = {
  key: l.h8.ADD_PAYMENT_STEPS,
  renderStep: e => (0, a.jsx)(d, {
...e
  }),
  options: {
renderHeader: !0
  }
};

function d(e) {
  let {
isGift: n
  } = (0, i.wD)();
  return (0, a.jsx)(a.Fragment, {
children: (0, a.jsx)(r.J, {
  ...e,
  breadcrumbSteps: [
    l.h8.ADD_PAYMENT_STEPS,
    l.h8.REVIEW,
    l.h8.CONFIRM
  ],
  onReturn: () => {
    if (0 === Object.keys(s.Z.paymentSources).length) {
      if (n) {
        e.handleStepChange(l.h8.GIFT_CUSTOMIZATION);
        return;
      }
      e.handleClose();
    } else
      e.handleStepChange(l.h8.REVIEW, {
        trackedFromStep: l.h8.ADD_PAYMENT_STEPS
      });
  }
})
  });
}