"use strict";
n.r(t), n.d(t, {
  getApplicationPaymentSteps: function() {
    return f
  }
}), n("222007");
var i = n("37983");
n("884691");
var r = n("85336"),
  a = n("262683"),
  l = n("292215"),
  s = n("339915"),
  u = n("574297"),
  o = n("697157"),
  c = n("473878"),
  d = n("782340");

function f(e) {
  let {
    guildId: t,
    eligibleApplicationSubscriptionGuilds: n,
    showBenefitsFirst: f
  } = e, E = [{
    key: null,
    renderStep: e => (0, i.jsx)(o.default, {
      initialStep: f ? r.Step.BENEFITS : r.Step.REVIEW,
      guildId: t,
      ...e
    })
  }, {
    key: r.Step.BENEFITS,
    renderStep: e => (0, i.jsx)(s.default, {
      ...e
    }),
    options: {
      useBreadcrumbLabel: () => d.default.Messages.APPLICATION_SUBSCRIPTION_BILLING_STEP_SUBSCRIPTION_DETAILS
    }
  }, {
    key: r.Step.ADD_PAYMENT_STEPS,
    renderStep: e => (0, i.jsx)(i.Fragment, {
      children: (0, i.jsx)(a.PaymentModalAddPaymentStep, {
        ...e,
        breadcrumbSteps: [r.Step.ADD_PAYMENT_STEPS, r.Step.REVIEW, r.Step.CONFIRM]
      })
    }),
    options: {
      renderHeader: !0
    }
  }, ...l.SHARED_STEP_CONFIGS, {
    key: r.Step.REVIEW,
    renderStep: e => (0, i.jsx)(c.default, {
      backButtonEligible: !!f || void 0,
      prevStep: f ? r.Step.BENEFITS : void 0,
      showGuildPicker: null == t,
      eligibleApplicationSubscriptionGuilds: n,
      ...e
    }),
    options: {
      renderHeader: !0,
      useBreadcrumbLabel: () => d.default.Messages.BILLING_STEP_REVIEW
    }
  }, {
    key: r.Step.CONFIRM,
    renderStep: e => (0, i.jsx)(u.default, {
      showBenefits: !f,
      ...e
    })
  }];
  return E
}