"use strict";
var r, i, a, o, s = n(161581),
  u = n(197187),
  c = n(566885),
  l = n(354848),
  d = n(740362),
  f = n(936940),
  p = n(620623),
  h = n(50754),
  m = n(722063),
  g = n(202934),
  _ = n(531460),
  b = n(391673),
  v = s.setImmediate,
  y = s.clearImmediate,
  E = s.process,
  S = s.Dispatch,
  x = s.Function,
  w = s.MessageChannel,
  C = s.String,
  T = 0,
  D = {},
  M = "onreadystatechange";
f(function() {
  r = s.location
});
var O = function(e) {
    if (d(D, e)) {
      var t = D[e];
      delete D[e], t()
    }
  },
  A = function(e) {
    return function() {
      O(e)
    }
  },
  k = function(e) {
    O(e.data)
  },
  R = function(e) {
    s.postMessage(C(e), r.protocol + "//" + r.host)
  };
(!v || !y) && (v = function(e) {
  g(arguments.length, 1);
  var t = l(e) ? e : x(e),
    n = h(arguments, 1);
  return D[++T] = function() {
    u(t, void 0, n)
  }, i(T), T
}, y = function(e) {
  delete D[e]
}, b ? i = function(e) {
  E.nextTick(A(e))
} : S && S.now ? i = function(e) {
  S.now(A(e))
} : w && !_ ? (o = (a = new w).port2, a.port1.onmessage = k, i = c(o.postMessage, o)) : s.addEventListener && l(s.postMessage) && !s.importScripts && r && "file:" !== r.protocol && !f(R) ? (i = R, s.addEventListener("message", k, !1)) : i = M in m("script") ? function(e) {
  p.appendChild(m("script"))[M] = function() {
    p.removeChild(this), O(e)
  }
} : function(e) {
  setTimeout(A(e), 0)
}), e.exports = {
  set: v,
  clear: y
}