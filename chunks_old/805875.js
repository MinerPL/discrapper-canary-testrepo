"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var a = n("321836"),
  s = n("50885"),
  l = n("578287"),
  i = n("716724"),
  r = {
    [n("49111").RPCCommands.ENCOURAGE_HW_ACCELERATION]: {
      validation: e => (0, i.default)(e),
      handler(e) {
        let {
          socket: t
        } = e;
        (0, l.validatePostMessageTransport)(t.transport);
        let n = t.application.id;
        if (null != n) return (0, a.default)(n), {
          enabled: s.default.getEnableHardwareAcceleration()
        }
      }
    }
  }