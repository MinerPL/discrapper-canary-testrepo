"use strict";
n.r(t), n.d(t, {
  NitroBrandedAttachmentExperiment: function() {
    return l
  }
});
var s = n("862205");
let l = (0, s.createExperiment)({
  kind: "user",
  id: "2024-03_nitro_branded_attachment",
  label: "Nitro branded border and pill on large attachment hover",
  defaultConfig: {
    enabled: !1
  },
  treatments: [{
    id: 1,
    label: "Users see Nitro branded border and pill when hovering the cursor on a large attachment",
    config: {
      enabled: !0
    }
  }]
})