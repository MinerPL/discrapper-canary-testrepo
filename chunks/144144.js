"use strict";
var i = n(570140);
t.Z = {
  startTyping(e) {
    i.Z.dispatch({
      type: "TYPING_START_LOCAL",
      channelId: e
    })
  },
  stopTyping(e) {
    i.Z.dispatch({
      type: "TYPING_STOP_LOCAL",
      channelId: e
    })
  }
}