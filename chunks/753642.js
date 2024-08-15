r.d(t, {
  h: function() {
return i;
  }
});
var n = r(899517),
  a = r(578346);
let o = null;

function i(e) {
  let t = 'unhandledrejection';
  (0, a.Hj)(t, e), (0, a.D2)(t, _);
}

function _() {
  o = n.n.onunhandledrejection, n.n.onunhandledrejection = function(e) {
return (0, a.rK)('unhandledrejection', e), !o || !!o.__SENTRY_LOADER__ || o.apply(this, arguments);
  }, n.n.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0;
}