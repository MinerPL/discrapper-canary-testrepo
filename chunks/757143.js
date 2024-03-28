"use strict";
var e = r("197187"),
  i = r("926515"),
  u = r("581031"),
  c = r("527221"),
  o = r("936940"),
  s = r("24033"),
  a = r("354848"),
  f = r("35179"),
  l = r("959318"),
  h = r("552028"),
  v = r("714050"),
  p = r("676125"),
  d = r("344597"),
  x = r("995739"),
  g = r("115726"),
  I = r("651673"),
  y = r("641236")("replace"),
  E = Math.max,
  b = Math.min,
  R = u([].concat),
  $ = u([].push),
  A = u("".indexOf),
  k = u("".slice),
  m = "$0" === "a".replace(/./, "$0"),
  C = !!/./ [y] && "" === /./ [y]("a", "$0");
c("replace", function(t, n, r) {
  var u = C ? "$" : "$0";
  return [function(t, r) {
    var e = p(this),
      u = f(t) ? void 0 : x(t, y);
    return u ? i(u, t, e, r) : i(n, v(e), t, r)
  }, function(t, i) {
    var c = s(this),
      o = v(t);
    if ("string" == typeof i && -1 === A(i, u) && -1 === A(i, "$<")) {
      var f = r(n, c, o, i);
      if (f.done) return f.value
    }
    var p = a(i);
    !p && (i = v(i));
    var x = c.global;
    x && (T = c.unicode, c.lastIndex = 0);
    for (var y = []; null !== (O = I(c, o));) {
      ;
      if ($(y, O), !x) break;
      "" === v(O[0]) && (c.lastIndex = d(o, h(c.lastIndex), T))
    }
    for (var m = "", C = 0, S = 0; S < y.length; S++) {
      for (var w, T, O, _, U = v((O = y[S])[0]), M = E(b(l(O.index), o.length), 0), K = [], N = 1; N < O.length; N++) {
        ;
        $(K, void 0 === (w = O[N]) ? w : String(w))
      }
      var P = O.groups;
      if (p) {
        var B = R([U], K, M, o);
        void 0 !== P && $(B, P), _ = v(e(i, void 0, B))
      } else _ = g(U, o, M, K, P, i);
      M >= C && (m += k(o, C, M) + _, C = M + U.length)
    }
    return m + k(o, C)
  }]
}, !!o(function() {
  var t = /./;
  return t.exec = function() {
    var t = [];
    return t.groups = {
      a: "7"
    }, t
  }, "7" !== "".replace(t, "$<a>")
}) || !m || C)