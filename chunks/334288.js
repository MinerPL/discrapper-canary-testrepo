"use strict";
n.r(t), n.d(t, {
  validateTransportType: function() {
    return i
  }
});
var a = n("996106"),
  s = n("186901"),
  l = n("981631");

function i(e) {
  if (s.TransportTypes.IPC !== e && s.TransportTypes.POST_MESSAGE !== e) throw new a.default({
    errorCode: l.RPCErrors.INVALID_COMMAND
  }, "Invalid transport.")
}