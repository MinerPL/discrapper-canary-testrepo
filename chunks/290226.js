"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
});
var s = n("913144"),
  l = {
    disableFalsePositiveButton: function(e, t) {
      s.default.dispatch({
        type: "MESSAGE_EXPLICIT_CONTENT_FP_SUBMIT",
        messageId: t,
        channelId: e
      })
    }
  }