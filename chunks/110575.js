"use strict";
n.d(e, {
  M: function() {
    return s
  }
});
var r = n(529866),
  i = n(876122);

function s(t, e) {
  !0 === e.debug && ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__ ? r.kg.enable() : console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle."));
  let n = (0, i.Gd)();
  n.getScope().update(e.initialScope);
  let s = new t(e);
  n.bindClient(s)
}