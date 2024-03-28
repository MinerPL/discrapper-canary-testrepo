"use strict";
n.r(t), n.d(t, {
  deprecatedCommand: function() {
    return l
  }
});
var a = n("996106"),
  s = n("981631");
let l = {
  handler(e) {
    throw new a.default({
      errorCode: s.RPCErrors.INVALID_COMMAND
    }, "Deprecated command: ".concat(e.cmd))
  }
}