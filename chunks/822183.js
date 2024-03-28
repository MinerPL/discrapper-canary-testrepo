"use strict";
n.r(t);
let a = (0, n("818083").createExperiment)({
  kind: "guild",
  id: "2023-01_shared_canvas",
  label: "Shared Canvas",
  defaultConfig: {
    isSharedCanvasEnabled: !1
  },
  treatments: [{
    id: 1,
    label: "Enable Shared Canvas",
    config: {
      isSharedCanvasEnabled: !0
    }
  }]
});
t.default = a