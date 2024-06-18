"use strict";
let i = (0, n(818083).B)({
  kind: "user",
  id: "2024-04_changelog",
  label: "New Changelog Messages",
  defaultConfig: {
    canReceiveMessage: !1,
    canReceiveUnpublishedMessages: !1
  },
  treatments: [{
    id: 1,
    label: "Receive changelog updates as messages",
    config: {
      canReceiveMessage: !0,
      canReceiveUnpublishedMessages: !1
    }
  }, {
    id: 2,
    label: "Receive unpublished changelog updates as messages (server)",
    config: {
      canReceiveMessage: !0,
      canReceiveUnpublishedMessages: !0
    }
  }]
});
t.Z = i