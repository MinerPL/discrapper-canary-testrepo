"use strict";
n.r(t), n.d(t, {
  deprecatedCommand: function() {
    return i
  }
});
var a = n("861309"),
  s = n("49111");
let i = {
  handler(e) {
    throw new a.default({
      errorCode: s.RPCErrors.INVALID_COMMAND
    }, "Deprecated command: ".concat(e.cmd))
  }
}