"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
}), n("222007");
var a = n("605250"),
  s = n("578287"),
  l = n("716724"),
  i = n("49111");
let r = new a.default(i.RPC_APPLICATION_LOGGING_CATEGORY);
var o = {
  [i.RPCCommands.CAPTURE_LOG]: {
    validation: e => (0, l.default)(e).required().keys({
      level: e.string().max(10).required(),
      message: e.string().max(1e3).required()
    }),
    handler(e) {
      let {
        socket: t,
        args: {
          level: n,
          message: a
        }
      } = e;
      (0, s.validatePostMessageTransport)(t.transport);
      let l = t.application.id,
        i = "".concat(l, " - ").concat(a);
      switch (n) {
        case "log":
          r.log(i);
          break;
        case "warn":
          r.warn(i);
          break;
        case "debug":
          r.verbose(i);
          break;
        case "info":
          r.info(i);
          break;
        case "error":
          r.error(i)
      }
    }
  }
}