"use strict";
s.r(t), s.d(t, {
  COLLECTIBLES_ADD_PAYMENT_STEP_CONFIG: function() {
    return u
  }
});
var l = s("735250");
s("470079");
var n = s("853872"),
  a = s("987209"),
  i = s("409813"),
  r = s("276442");
let u = {
  key: i.Step.ADD_PAYMENT_STEPS,
  renderStep: e => (0, l.jsx)(d, {
    ...e
  }),
  options: {
    renderHeader: !0
  }
};

function d(e) {
  let {
    isGift: t
  } = (0, a.useGiftContext)();
  return (0, l.jsx)(l.Fragment, {
    children: (0, l.jsx)(r.PaymentModalAddPaymentStep, {
      ...e,
      breadcrumbSteps: [i.Step.ADD_PAYMENT_STEPS, i.Step.REVIEW, i.Step.CONFIRM],
      onReturn: () => {
        if (0 === Object.keys(n.default.paymentSources).length) {
          if (t) {
            e.handleStepChange(i.Step.GIFT_CUSTOMIZATION);
            return
          }
          e.handleClose()
        } else e.handleStepChange(i.Step.REVIEW, {
          trackedFromStep: i.Step.ADD_PAYMENT_STEPS
        })
      }
    })
  })
}