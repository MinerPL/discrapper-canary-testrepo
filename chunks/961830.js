"use strict";
s.r(t), s.d(t, {
  ONE_TIME_PAYMENT_ADD_PAYMENT_STEP_CONFIG: function() {
    return E
  },
  ONE_TIME_PAYMENT_CONFIRM_STEP_CONFIG: function() {
    return T
  },
  ONE_TIME_PAYMENT_PREDICATE_STEP_CONFIG: function() {
    return S
  },
  REVIEW_STEP_CONFIG: function() {
    return _
  },
  SHARED_STEP_CONFIGS: function() {
    return p
  }
});
var l = s("735250");
s("470079");
var n = s("853872"),
  a = s("409813"),
  i = s("276442"),
  r = s("793541"),
  u = s("380898"),
  d = s("713316"),
  o = s("710094"),
  c = s("865921"),
  f = s("689938");
let S = {
    key: null,
    renderStep: e => (0, l.jsx)(c.OneTimePaymentPredicateStep, {
      ...e
    })
  },
  E = {
    key: a.Step.ADD_PAYMENT_STEPS,
    renderStep: e => (0, l.jsx)(l.Fragment, {
      children: (0, l.jsx)(i.PaymentModalAddPaymentStep, {
        ...e,
        breadcrumbSteps: [a.Step.ADD_PAYMENT_STEPS, a.Step.REVIEW, a.Step.CONFIRM],
        onReturn: () => {
          0 === Object.keys(n.default.paymentSources).length ? e.handleClose() : e.handleStepChange(a.Step.REVIEW, {
            trackedFromStep: a.Step.ADD_PAYMENT_STEPS
          })
        }
      })
    }),
    options: {
      renderHeader: !0
    }
  },
  I = {
    key: a.Step.AWAITING_PURCHASE_TOKEN_AUTH,
    renderStep: () => (0, l.jsx)(u.default, {})
  },
  C = {
    key: a.Step.AWAITING_AUTHENTICATION,
    renderStep: () => (0, l.jsx)(r.default, {}),
    options: {
      renderHeader: !0
    }
  },
  _ = {
    key: a.Step.REVIEW,
    renderStep: e => (0, l.jsx)(o.PaymentModalReviewStep, {
      ...e
    }),
    options: {
      useBreadcrumbLabel: () => f.default.Messages.BILLING_STEP_REVIEW
    }
  },
  T = {
    key: a.Step.CONFIRM,
    renderStep: e => (0, l.jsx)(d.PaymentModalConfirmStep, {
      ...e
    })
  },
  p = [I, C]