"use strict";
n.r(t);
var a = n("710845"),
  s = n("857192"),
  l = n("901077"),
  i = n("46832"),
  r = n("852926"),
  o = n("748635"),
  u = n("981631");
let d = new a.default("RPCServer:PostMessage"),
  c = (e, t, n) => {
    (s.default.isLoggingOverlayEvents || e.cmd !== u.RPCCommands.OVERLAY) && t.info("Socket Message: ".concat(n.id), (0, l.default)(e))
  };
t.default = function() {
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