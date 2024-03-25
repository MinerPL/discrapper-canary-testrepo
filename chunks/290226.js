"use strict";
n.r(t), n.d(t, {
  default: function() {
    return a
  }
});
var s = n("913144"),
  a = {
    disableFalsePositiveButton: function(e, t) {
      s.default.dispatch({
        type: "MESSAGE_EXPLICIT_CONTENT_FP_SUBMIT",
        messageId: t,
        channelId: e
      })
    }
  }