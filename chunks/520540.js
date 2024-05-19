"use strict";
s.r(t), s.d(t, {
  ReferralProgramSender: function() {
    return n
  },
  SubscriberHomeVariant: function() {
    return r
  }
});
var a, r, i = s("818083");
(a = r || (r = {}))[a.VARIANT_1 = 0] = "VARIANT_1", a[a.VARIANT_2 = 1] = "VARIANT_2";
let n = (0, i.createExperiment)({
  kind: "user",
  id: "2024-03_referral_program_sender",
  label: "Referral Program Sender Experience",
  defaultConfig: {
    enabled: !1,
    subscriberHomeVariant: null,
    eligibleToFetch: !1
  },
  treatments: [{
    id: 0,
    label: "Disabled",
    config: {
      enabled: !1,
      subscriberHomeVariant: null,
      eligibleToFetch: !0
    }
  }, {
    id: 1,
    label: "Enabled",
    config: {
      enabled: !0,
      subscriberHomeVariant: 0,
      eligibleToFetch: !0
    }
  }, {
    id: 2,
    label: "Enabled",
    config: {
      enabled: !0,
      subscriberHomeVariant: 1,
      eligibleToFetch: !0
    }
  }]
})