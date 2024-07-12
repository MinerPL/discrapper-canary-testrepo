r.d(e, {
  j: function() {
return i;
  }
});
var n = r(147816),
  _ = r(529866),
  a = r(607190);

function i() {
  a.m && a.m.document ? a.m.document.addEventListener('visibilitychange', () => {
let t = (0, n.x1)();
if (a.m.document.hidden && t) {
  let e = 'cancelled';
  ('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && _.kg.log(`[Tracing] Transaction: ${ e } -> since tab moved to the background, op: ${ t.op }`), !t.status && t.setStatus(e), t.setTag('visibilitychange', 'document.hidden'), t.finish();
}
  }) : ('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && _.kg.warn('[Tracing] Could not set up background tab detection due to lack of global document');
}