"use strict";
var r, a, o, i, l = n("668530"),
  u = n("156741"),
  s = n("476508"),
  c = n("735471"),
  d = n("141603"),
  f = n("821819"),
  p = n("439230"),
  h = n("780524"),
  m = n("535538"),
  y = n("274745"),
  v = n("378636"),
  g = n("42433"),
  b = l.setImmediate,
  _ = l.clearImmediate,
  k = l.process,
  C = l.Dispatch,
  w = l.Function,
  S = l.MessageChannel,
  N = l.String,
  x = 0,
  P = {},
  A = "onreadystatechange";
f(function() {
  r = l.location
});
var R = function(e) {
    if (d(P, e)) {
      var t = P[e];
      delete P[e], t()
    }
  },
  F = function(e) {
    return function() {
      R(e)
    }
  },
  O = function(e) {
    R(e.data)
  },
  E = function(e) {
    l.postMessage(N(e), r.protocol + "//" + r.host)
  };
(!b || !_) && (b = function(e) {
  y(arguments.length, 1);
  var t = c(e) ? e : w(e),
    n = h(arguments, 1);
  return P[++x] = function() {
    u(t, void 0, n)
  }, a(x), x
}, _ = function(e) {
  delete P[e]
}, g ? a = function(e) {
  k.nextTick(F(e))
} : C && C.now ? a = function(e) {
  C.now(F(e))
} : S && !v ? (i = (o = new S).port2, o.port1.onmessage = O, a = s(i.postMessage, i)) : l.addEventListener && c(l.postMessage) && !l.importScripts && r && "file:" !== r.protocol && !f(E) ? (a = E, l.addEventListener("message", O, !1)) : a = A in m("script") ? function(e) {
  p.appendChild(m("script"))[A] = function() {
    p.removeChild(this), R(e)
  }
} : function(e) {
  setTimeout(F(e), 0)
}), e.exports = {
  set: b,
  clear: _
}