"use strict";

function r(t) {
  return t && t.Math == Math ? t : void 0
}
n.d(e, {
  Rf: function() {
    return s
  },
  YO: function() {
    return a
  },
  n2: function() {
    return i
  }
});
let i = "object" == typeof globalThis && r(globalThis) || "object" == typeof window && r(window) || "object" == typeof self && r(self) || "object" == typeof n.g && r(n.g) || function() {
  return this
}() || {};

function s() {
  return i
}

function a(t, e, n) {
  let r = n || i,
    s = r.__SENTRY__ = r.__SENTRY__ || {};
  return s[t] || (s[t] = e())
}