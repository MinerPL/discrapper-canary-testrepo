"use strict";
n.r(t);
var a = n("570140");
t.default = {
  setCallChatToastsEnabled(e, t) {
    a.default.dispatch({
      type: "CALL_CHAT_TOASTS_SET_ENABLED",
      channelId: e,
      toastsEnabled: t
    })
  }
}