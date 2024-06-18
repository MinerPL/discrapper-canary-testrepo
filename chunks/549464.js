"use strict";
let i = (0, n(818083).B)({
  kind: "user",
  id: "2024-01_chunked_message_attachment_uploads",
  label: "Use chunked uploads for message attachments",
  defaultConfig: {
    enabled: !1,
    chunkSize: 0
  },
  treatments: [{
    id: 1,
    label: "Chunked message attachment uploads",
    config: {
      enabled: !0,
      chunkSize: 8388608
    }
  }]
});
t.Z = i