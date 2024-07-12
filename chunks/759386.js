t.r(n), t.d(n, {
  getApplicationPaymentSteps: function() {
return _;
  }
}), t(47120);
var i = t(735250);
t(470079);
var r = t(409813),
  o = t(276442),
  a = t(961830),
  s = t(721165),
  l = t(519801),
  c = t(589771),
  d = t(883419),
  u = t(689938);

function _(e) {
  let {
guildId: n,
eligibleApplicationSubscriptionGuilds: t,
showBenefitsFirst: _
  } = e;
  return [{
  key: null,
  renderStep: e => (0, i.jsx)(c.Z, {
    initialStep: _ ? r.h8.BENEFITS : r.h8.REVIEW,
    guildId: n,
    ...e
  })
},
{
  key: r.h8.BENEFITS,
  renderStep: e => (0, i.jsx)(s.Z, {
    ...e
  }),
  options: {
    useBreadcrumbLabel: () => u.Z.Messages.APPLICATION_SUBSCRIPTION_BILLING_STEP_SUBSCRIPTION_DETAILS
  }
},
{
  key: r.h8.ADD_PAYMENT_STEPS,
  renderStep: e => (0, i.jsx)(i.Fragment, {
    children: (0, i.jsx)(o.J, {
      ...e,
      breadcrumbSteps: [
        r.h8.ADD_PAYMENT_STEPS,
        r.h8.REVIEW,
        r.h8.CONFIRM
      ]
    })
  }),
  options: {
    renderHeader: !0
  }
},
...a.yp,
{
  key: r.h8.REVIEW,
  renderStep: e => (0, i.jsx)(d.Z, {
    backButtonEligible: !!_ || void 0,
    prevStep: _ ? r.h8.BENEFITS : void 0,
    showGuildPicker: null == n,
    eligibleApplicationSubscriptionGuilds: t,
    ...e
  }),
  options: {
    renderHeader: !0,
    useBreadcrumbLabel: () => u.Z.Messages.BILLING_STEP_REVIEW
  }
},
{
  key: r.h8.CONFIRM,
  renderStep: e => (0, i.jsx)(l.Z, {
    showBenefits: !_,
    ...e
  })
}
  ];
}