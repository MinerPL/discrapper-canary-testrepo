r.d(e, {
  e: function() {
return o;
  }
});
var n = r(793884),
  _ = r(529866),
  a = r(147816);
let i = !1;

function o() {
  if (!i)
i = !0, (0, n.oq)('error', E), (0, n.oq)('unhandledrejection', E);
}

function E() {
  let t = (0, a.x1)();
  if (t) {
let e = 'internal_error';
('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && _.kg.log(`[Tracing] Transaction: ${ e } -> Global error occured`), t.setStatus(e);
  }
}
E.tag = 'sentry_tracingErrorCallback';