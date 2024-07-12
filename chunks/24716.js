
function n(t) {
  return t && t.Math == Math ? t : void 0;
}
r.d(e, {
  Rf: function() {
return a;
  },
  YO: function() {
return i;
  },
  n2: function() {
return _;
  }
});
let _ = 'object' == typeof globalThis && n(globalThis) || 'object' == typeof window && n(window) || 'object' == typeof self && n(self) || 'object' == typeof r.g && n(r.g) || function() {
  return this;
}() || {};

function a() {
  return _;
}

function i(t, e, r) {
  let n = r || _,
a = n.__SENTRY__ = n.__SENTRY__ || {};
  return a[t] || (a[t] = e());
}