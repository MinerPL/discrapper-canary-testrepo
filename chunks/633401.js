"use strict";
n.d(e, {
  z: function() {
    return i
  }
});
var r = n(876122);

function i(t) {
  if ("boolean" == typeof __SENTRY_TRACING__ && !__SENTRY_TRACING__) return !1;
  let e = (0, r.Gd)().getClient(),
    n = t || e && e.getOptions();
  return !!n && (n.enableTracing || "tracesSampleRate" in n || "tracesSampler" in n)
}