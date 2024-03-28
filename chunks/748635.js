"use strict";
n.r(t);
var a = n("857192"),
  s = n("901077"),
  l = n("915357"),
  i = n("981631");
t.default = e => {
  let {
    origin: t,
    postMessageToRPCClient: n,
    frameId: r,
    version: o,
    encoding: u,
    logger: d,
    postClose: c
  } = e;
  return new l.default({
    origin: t,
    postMessageToRPCClient: n,
    frameId: r,
    version: o,
    encoding: u,
    logger: d,
    postClose: c,
    onSendingToRPCClient: (e, t) => {
      (a.default.isLoggingOverlayEvents || e.cmd !== i.RPCCommands.OVERLAY && e.evt !== i.RPCEvents.OVERLAY) && d.info("Socket Emit: ".concat(t), (0, s.default)(e))
    }
  })
}