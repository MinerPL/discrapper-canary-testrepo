"use strict";
var r = n("37549"),
  i = n("293471"),
  o = r("%SyntaxError%"),
  s = r("%TypeError%"),
  a = n("737891"),
  c = n("701222"),
  u = n("604050"),
  d = n("905687"),
  l = n("300344"),
  f = n("552302"),
  p = n("6943"),
  h = n("865435"),
  g = n("537256");
e.exports = function(e, t, n) {
  if ("Object" !== h(e)) throw new s("Assertion failed: O must be an Object");
  if (!l(t)) throw new s("Assertion failed: P must be a Property Key");
  if (!a({
      Type: h,
      IsDataDescriptor: u,
      IsAccessorDescriptor: c
    }, n)) throw new s("Assertion failed: Desc must be a Property Descriptor");
  if (!i) {
    if (c(n)) throw new o("This environment does not support accessor property descriptors.");
    var r = !(t in e) && n["[[Writable]]"] && n["[[Enumerable]]"] && n["[[Configurable]]"] && "[[Value]]" in n,
      b = t in e && (!("[[Configurable]]" in n) || n["[[Configurable]]"]) && (!("[[Enumerable]]" in n) || n["[[Enumerable]]"]) && (!("[[Writable]]" in n) || n["[[Writable]]"]) && "[[Value]]" in n;
    if (r || b) return e[t] = n["[[Value]]"], p(e[t], n["[[Value]]"]);
    throw new o("This environment does not support defining non-writable, non-enumerable, or non-configurable properties")
  }
  var v = i(e, t),
    m = v && f(v),
    y = d(e);
  return g(e, t, y, n, m)
}