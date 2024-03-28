"use strict";
n.r(t), n("47120");
var a = n("710845"),
  s = n("914946"),
  l = n("452426"),
  i = n("981631");
let r = new a.default(i.RPC_APPLICATION_LOGGING_CATEGORY);
t.default = {
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