"use strict";
n.r(t);
var s = n("818083");
t.default = (0, s.createExperiment)({
  kind: "user",
  id: "2021-12_inferno_spam_redaction",
  label: "Inferno Spam Redaction",
  defaultConfig: {
    enabled: !1
  },
  treatments: [{
    id: 1,
    label: "Allow guild channel messages from spammers to be collapsed",
    config: {
      enabled: !0
    }
  }]
})