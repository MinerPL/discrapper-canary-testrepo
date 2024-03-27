"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var a = n("313915"),
  s = n("856116"),
  l = n("132181"),
  i = n("49111"),
  r = e => {
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