"use strict";
var r = n("96403"),
  a = n("548828"),
  o = n("982665"),
  i = n("141603"),
  l = n("780524"),
  u = n("809235"),
  s = Function,
  c = r([].concat),
  d = r([].join),
  f = {},
  p = function(e, t, n) {
    if (!i(f, t)) {
      for (var r = [], a = 0; a < t; a++) r[a] = "a[" + a + "]";
      f[t] = s("C,a", "return new C(" + d(r, ",") + ")")
    }
    return f[t](e, n)
  };
e.exports = u ? s.bind : function(e) {
  var t = a(this),
    n = t.prototype,
    r = l(arguments, 1),
    i = function() {
      var n = c(r, l(arguments));
      return this instanceof i ? p(t, n.length, n) : t.apply(e, n)
    };
  return o(n) && (i.prototype = n), i
}