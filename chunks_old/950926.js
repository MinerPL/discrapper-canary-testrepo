"use strict";
n.r(t), n.d(t, {
  default: function() {
    return a
  }
});
var s = n("913144"),
  a = {
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