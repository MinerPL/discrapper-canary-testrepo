"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var a = n("605250"),
  s = n("313915"),
  l = n("856116"),
  i = n("17891"),
  r = n("56245"),
  o = n("958530"),
  u = n("49111");
let d = new a.default("RPCServer:PostMessage"),
  c = (e, t, n) => {
    (s.default.isLoggingOverlayEvents || e.cmd !== u.RPCCommands.OVERLAY) && t.info("Socket Message: ".concat(n.id), (0, l.default)(e))
  };
var f = function() {
  let e = new i.default(r.validateSocketClient, d, o.default, c);
  return window.addEventListener("message", t => {
    if (window === t.source) return;
    if (null == t.source || null == t.source.postMessage) {
      d.error("Unknown event source");
      return
    }
    let n = t.source,
      a = t.data,
      s = t.origin;
    e.handleMessage(a, s, (e, t) => {
      n.postMessage(e, t)
    })
  }), e
}()