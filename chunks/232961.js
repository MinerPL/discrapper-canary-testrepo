"use strict";
n.r(t), n.d(t, {
  removeAutomodMessageNotice: function() {
    return l
  }
});
var a = n("570140");

function l(e) {
  a.default.dispatch({
    type: "REMOVE_AUTOMOD_MESSAGE_NOTICE",
    messageId: e
  })
}