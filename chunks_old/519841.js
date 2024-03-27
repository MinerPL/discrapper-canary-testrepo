"use strict";
n.r(t), n.d(t, {
  AttachmentLinkRefreshExperiment: function() {
    return u
  }
});
var l = n("862205");
let u = (0, l.createExperiment)({
  kind: "user",
  id: "2023-12_attachment_link_refresh",
  label: "Attachment Link Refresh User Experiment",
  defaultConfig: {
    enabled: !1
  },
  treatments: [{
    id: 1,
    label: "Refresh expired attachment links",
    config: {
      enabled: !0
    }
  }]
})