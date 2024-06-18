"use strict";
var i = n(818083);
t.Z = (0, i.B)({
  kind: "user",
  id: "2024-05_hiding_window_disables_video",
  label: "Hiding Window Disables Incoming Video",
  defaultConfig: {
    stopVideoForHiddenWindow: !1
  },
  treatments: [{
    id: 1,
    label: "test",
    config: {
      stopVideoForHiddenWindow: !0
    }
  }]
})