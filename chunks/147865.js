"use strict";
n.r(t), n.d(t, {
  default: function() {
    return a
  }
});
var s = n("689938");

function a(e) {
  return e > 0 ? s.default.Messages.EMBEDDED_ACTIVITIES_MAX_PARTICIPANTS.format({
    count: e
  }) : s.default.Messages.EMBEDDED_ACTIVITIES_UNLIMITED_PARTICIPANTS
}