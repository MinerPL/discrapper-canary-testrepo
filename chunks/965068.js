"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
});
var i = (0, n("862205").createExperiment)({
  kind: "user",
  id: "2024-02_clips_quality_decoupling",
  label: "Clips quality decoupling",
  defaultConfig: {
    allowQualityDecoupling: !1
  },
  treatments: [{
    id: 1,
    label: "Enable Clips quality decoupling",
    config: {
      allowQualityDecoupling: !0
    }
  }]
})