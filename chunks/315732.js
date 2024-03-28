"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
});
var a = n("735250");
n("470079");
var l = n("481060"),
  u = n("572004"),
  s = n("689938");

function i(e) {
  return u.SUPPORTS_COPY ? (0, a.jsx)(l.MenuItem, {
    id: "copy-channel-topic",
    label: s.default.Messages.COPY_CHANNEL_TOPIC,
    action: () => (0, u.copy)(e.topic)
  }) : null
}