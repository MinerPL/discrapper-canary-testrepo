"use strict";
n.r(t), n.d(t, {
  checkNoPaymentTrialEnabled: function() {
    return r
  }
});
var i = n("818083"),
  s = n("74538");
let a = (0, i.createExperiment)({
    kind: "user",
    id: "2022-06_no_payment_info_trial",
    label: "No Payment Info Trial",
    defaultConfig: {
      bypassCheckout: !1
    },
    treatments: [{
      id: 1,
      label: "Bypass collecting payment info",
      config: {
        bypassCheckout: !0
      }
    }]
  }),
  l = (e, t, n) => {
    let i = null == n || (0, s.isPremiumBaseSubscriptionPlan)(n);
    return null != e && null == t && i
  },
  r = (e, t, n) => {
    let {
      bypassCheckout: i
    } = a.useExperiment({
      location: "aeb070_1"
    }, {
      autoTrackExposure: !1
    }), s = l(e, t, n);
    return i && s
  }