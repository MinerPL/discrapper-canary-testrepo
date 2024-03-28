"use strict";
n.r(t);
var s = n("570140");
t.default = {
  disableFalsePositiveButton: function(e, t) {
    s.default.dispatch({
      type: "MESSAGE_EXPLICIT_CONTENT_FP_SUBMIT",
      messageId: t,
      channelId: e
    })
  }
}