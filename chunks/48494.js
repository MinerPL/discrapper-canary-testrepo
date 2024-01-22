"use strict";
var r = n("520462"),
  i = n("745378"),
  o = n("648644"),
  s = n("812095"),
  a = n("293471"),
  c = s("Object.prototype.toString"),
  u = n("149384")(),
  d = "undefined" == typeof globalThis ? n.g : globalThis,
  l = i(),
  f = s("String.prototype.slice"),
  p = Object.getPrototypeOf,
  h = s("Array.prototype.indexOf", !0) || function(e, t) {
    for (var n = 0; n < e.length; n += 1)
      if (e[n] === t) return n;
    return -1
  },
  g = {
    __proto__: null
  };
u && a && p ? r(l, function(e) {
  var t = new d[e];
  if (Symbol.toStringTag in t) {
    var n = p(t),
      r = a(n, Symbol.toStringTag);
    !r && (r = a(p(n), Symbol.toStringTag)), g["$" + e] = o(r.get)
  }
}) : r(l, function(e) {
  var t = new d[e];
  g["$" + e] = o(t.slice)
});
var b = function(e) {
    var t = !1;
    return r(g, function(n, r) {
      if (!t) try {
        "$" + n(e) === r && (t = f(r, 1))
      } catch (e) {}
    }), t
  },
  v = function(e) {
    var t = !1;
    return r(g, function(n, r) {
      if (!t) try {
        n(e), t = f(r, 1)
      } catch (e) {}
    }), t
  };
e.exports = function(e) {
  if (!e || "object" != typeof e) return !1;
  if (!u) {
    var t = f(c(e), 8, -1);
    return h(l, t) > -1 ? t : "Object" === t && v(e)
  }
  return a ? b(e) : null
}