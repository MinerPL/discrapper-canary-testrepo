r.d(e, {
  z: function() {
return _;
  }
});
var n = r(876122);

function _(t) {
  if ('boolean' == typeof __SENTRY_TRACING__ && !__SENTRY_TRACING__)
return !1;
  let e = (0, n.Gd)().getClient(),
r = t || e && e.getOptions();
  return !!r && (r.enableTracing || 'tracesSampleRate' in r || 'tracesSampler' in r);
}