"use strict";
n.r(t);
var i = n("818083");
t.default = (0, i.createExperiment)({
  kind: "user",
  id: "2024-05_av1_hardware_decode_electron",
  label: "AV1 hardware decode",
  defaultConfig: {
    hardwareDecodeAV1: !1
  },
  treatments: [{
    id: 1,
    label: "enabled",
    config: {
      hardwareDecodeAV1: !0
    }
  }]
})