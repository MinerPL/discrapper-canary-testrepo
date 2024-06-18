"use strict";
n.d(t, {
  w: function() {
    return i
  }
});
let i = (0, n(818083).B)({
  kind: "user",
  id: "2024-05_message_forwarding",
  label: "Message forwarding",
  defaultConfig: {
    canForwardMessages: !1,
    hasInlineForwardButton: !1
  },
  treatments: [{
    id: 1,
    label: "Enabled",
    config: {
      canForwardMessages: !0,
      hasInlineForwardButton: !1
    }
  }, {
    id: 2,
    label: "Enabled + inline forward button",
    config: {
      canForwardMessages: !0,
      hasInlineForwardButton: !0
    }
  }]
})