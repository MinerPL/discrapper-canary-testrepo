"use strict";
s.r(t);
var a = s("987170");
t.default = (0, a.default)({
  kind: "user",
  id: "2023-08_aa_imbalance_remediation",
  label: "AA test to validate fallback trigger and location frequency change",
  defaultConfig: {
    isEnabled: !1
  },
  treatments: [{
    id: 1,
    label: "AA test enabled. Noop on UI effect.",
    config: {
      isEnabled: !0
    }
  }]
})