"use strict";
n.d(e, {
  e: function() {
    return o
  }
});
var r = n(793884),
  i = n(529866),
  s = n(147816);
let a = !1;

function o() {
  if (!a) a = !0, (0, r.oq)("error", u), (0, r.oq)("unhandledrejection", u)
}

function u() {
  let t = (0, s.x1)();
  if (t) {
    let e = "internal_error";
    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.log(`[Tracing] Transaction: ${e} -> Global error occured`), t.setStatus(e)
  }
}
u.tag = "sentry_tracingErrorCallback"