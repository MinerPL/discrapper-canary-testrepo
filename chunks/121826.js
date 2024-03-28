"use strict";
n.r(t);
var a = n("230487"),
  s = n("998502"),
  l = n("914946"),
  i = n("452426"),
  r = n("981631");
t.default = {
  [r.RPCCommands.ENCOURAGE_HW_ACCELERATION]: {
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