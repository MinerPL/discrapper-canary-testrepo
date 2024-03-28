"use strict";
n.r(t);
var s = n("570140");
t.default = {
  clearRemoteDisconnectVoiceChannelId() {
    s.default.dispatch({
      type: "CLEAR_REMOTE_DISCONNECT_VOICE_CHANNEL_ID"
    })
  },
  clearLastSessionVoiceChannelId() {
    s.default.dispatch({
      type: "CLEAR_LAST_SESSION_VOICE_CHANNEL_ID"
    })
  }
}