"use strict";
n.r(t), n.d(t, {
  validateTransportType: function() {
    return l
  }
});
var a = n("861309"),
  s = n("492249"),
  i = n("49111");

function l(e) {
  if (s.TransportTypes.IPC !== e && s.TransportTypes.POST_MESSAGE !== e) throw new a.default({
    errorCode: i.RPCErrors.INVALID_COMMAND
  }, "Invalid transport.")
}