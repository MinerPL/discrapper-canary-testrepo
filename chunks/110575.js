r.d(e, {
  M: function() {
return a;
  }
});
var n = r(529866),
  _ = r(876122);

function a(t, e) {
  !0 === e.debug && ('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__ ? n.kg.enable() : console.warn('[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.'));
  let r = (0, _.Gd)();
  r.getScope().update(e.initialScope);
  let a = new t(e);
  r.bindClient(a);
}