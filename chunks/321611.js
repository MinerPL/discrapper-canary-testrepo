"use strict";
n.d(e, {
  j: function() {
    return a
  }
});
var r = n(147816),
  i = n(529866),
  s = n(607190);

function a() {
  s.m && s.m.document ? s.m.document.addEventListener("visibilitychange", () => {
    let t = (0, r.x1)();
    if (s.m.document.hidden && t) {
      let e = "cancelled";
      ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.log(`[Tracing] Transaction: ${e} -> since tab moved to the background, op: ${t.op}`), !t.status && t.setStatus(e), t.setTag("visibilitychange", "document.hidden"), t.finish()
    }
  }) : ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.warn("[Tracing] Could not set up background tab detection due to lack of global document")
}