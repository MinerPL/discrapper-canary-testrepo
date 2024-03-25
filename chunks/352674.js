"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
});
var a = n("913144"),
  s = {
    startTyping(e) {
      a.default.dispatch({
        type: "TYPING_START_LOCAL",
        channelId: e
      })
    },
    stopTyping(e) {
      a.default.dispatch({
        type: "TYPING_STOP_LOCAL",
        channelId: e
      })
    }
  }