"use strict";
var r = n(406434);
t.Z = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: function(e) {
    var t = e.state,
      n = e.name;
    t.modifiersData[n] = (0, r.Z)({
      reference: t.rects.reference,
      element: t.rects.popper,
      strategy: "absolute",
      placement: t.placement
    })
  },
  data: {}
}