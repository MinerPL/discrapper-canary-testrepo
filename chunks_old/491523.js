"use strict";
n.r(t), n.d(t, {
  AutomatedGiftCodeMessageExperiment: function() {
    return i
  }
});
var r = n("862205");
let i = (0, r.createExperiment)({
  kind: "user",
  id: "2023-07_automated_gift_code_message",
  label: "Automatically send gift code message in direct message to gift recipient",
  defaultConfig: {
    enabled: !1
  },
  treatments: [{
    id: 1,
    label: "Show the automated gift code message",
    config: {
      enabled: !0
    }
  }]
})