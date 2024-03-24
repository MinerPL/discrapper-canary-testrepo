"use strict";
n.r(t), n.d(t, {
  ONE_TIME_PAYMENT_PREDICATE_STEP_CONFIG: function() {
    return E
  },
  ONE_TIME_PAYMENT_ADD_PAYMENT_STEP_CONFIG: function() {
    return S
  },
  REVIEW_STEP_CONFIG: function() {
    return h
  },
  ONE_TIME_PAYMENT_CONFIRM_STEP_CONFIG: function() {
    return m
  },
  SHARED_STEP_CONFIGS: function() {
    return C
  }
});
var i = n("37983");
n("884691");
var r = n("357957"),
  a = n("85336"),
  l = n("262683"),
  s = n("946359"),
  u = n("724269"),
  o = n("7127"),
  c = n("99836"),
  d = n("217796"),
  f = n("782340");
let E = {
    key: null,
    renderStep: e => (0, i.jsx)(d.OneTimePaymentPredicateStep, {
      ...e
    })
  },
  S = {
    key: a.Step.ADD_PAYMENT_STEPS,
    renderStep: e => (0, i.jsx)(i.Fragment, {
      children: (0, i.jsx)(l.PaymentModalAddPaymentStep, {
        ...e,
        breadcrumbSteps: [a.Step.ADD_PAYMENT_STEPS, a.Step.REVIEW, a.Step.CONFIRM],
        onReturn: () => {
          let t = r.default.paymentSources;
          0 === Object.keys(t).length ? e.handleClose() : e.handleStepChange(a.Step.REVIEW, {
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
    renderStep: () => (0, i.jsx)(u.default, {})
  },
  _ = {
    key: a.Step.AWAITING_AUTHENTICATION,
    renderStep: () => (0, i.jsx)(s.default, {}),
    options: {
      renderHeader: !0
    }
  },
  h = {
    key: a.Step.REVIEW,
    renderStep: e => (0, i.jsx)(c.PaymentModalReviewStep, {
      ...e
    }),
    options: {
      useBreadcrumbLabel: () => f.default.Messages.BILLING_STEP_REVIEW
    }
  },
  m = {
    key: a.Step.CONFIRM,
    renderStep: e => (0, i.jsx)(o.PaymentModalConfirmStep, {
      ...e
    })
  },
  C = [I, _]