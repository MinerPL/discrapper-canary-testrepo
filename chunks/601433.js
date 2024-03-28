"use strict";
s.r(t), s.d(t, {
  shouldShowTextPlayground: function() {
    return n
  }
});
let a = (0, s("818083").createExperiment)({
  kind: "user",
  id: "2023-03_text_playground_settings_pane",
  label: "Text Playground",
  defaultConfig: {
    showSetting: !1
  },
  treatments: [{
    id: 1,
    label: "Enable settings pane",
    config: {
      showSetting: !0
    }
  }]
});

function n() {
  return a.getCurrentConfig({
    location: "26c832_1"
  }, {
    autoTrackExposure: !0
  }).showSetting
}