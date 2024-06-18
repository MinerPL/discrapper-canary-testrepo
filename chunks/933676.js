"use strict";
var e = n(581031),
  o = n(936940),
  i = n(354848),
  u = n(974971),
  c = n(545576),
  f = n(943329),
  a = function() {},
  s = [],
  y = c("Reflect", "construct"),
  p = /^\s*(?:class|function)\b/,
  h = e(p.exec),
  v = !p.exec(a),
  l = function(t) {
    if (!i(t)) return !1;
    try {
      return y(a, s, t), !0
    } catch (t) {
      return !1
    }
  },
  g = function(t) {
    if (!i(t)) return !1;
    switch (u(t)) {
      case "AsyncFunction":
      case "GeneratorFunction":
      case "AsyncGeneratorFunction":
        return !1
    }
    try {
      return v || !!h(p, f(t))
    } catch (t) {
      return !0
    }
  };
g.sham = !0, t.exports = !y || o(function() {
  var t;
  return l(l.call) || !l(Object) || !l(function() {
    t = !0
  }) || t
}) ? g : l