"use strict";
t.r(n), t.d(n, {
  default: function() {
    return l
  }
});
var i = t("913144"),
  l = {
    startTyping(e) {
      i.default.dispatch({
        type: "TYPING_START_LOCAL",
        channelId: e
      })
    },
    stopTyping(e) {
      i.default.dispatch({
        type: "TYPING_STOP_LOCAL",
        channelId: e
      })
    }
  }