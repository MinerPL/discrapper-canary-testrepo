"use strict";
var r = n("37549")("%TypeError%"),
  i = n("504187"),
  o = n("14328"),
  s = n("737891"),
  a = n("971043"),
  c = n("701222"),
  u = n("604050"),
  d = n("769142"),
  l = n("300344"),
  f = n("6943"),
  p = n("865435");
e.exports = function(e, t, n, h, g) {
  var b, v, m = p(e);
  if ("Undefined" !== m && "Object" !== m) throw new r("Assertion failed: O must be undefined or an Object");
  if (!l(t)) throw new r("Assertion failed: P must be a Property Key");
  if ("Boolean" !== p(n)) throw new r("Assertion failed: extensible must be a Boolean");
  if (!s({
      Type: p,
      IsDataDescriptor: u,
      IsAccessorDescriptor: c
    }, h)) throw new r("Assertion failed: Desc must be a Property Descriptor");
  if ("Undefined" !== p(g) && !s({
      Type: p,
      IsDataDescriptor: u,
      IsAccessorDescriptor: c
    }, g)) throw new r("Assertion failed: current must be a Property Descriptor, or undefined");
  if ("Undefined" === p(g)) return !!n && ("Undefined" === m || (c(h) ? i(u, f, a, e, t, h) : i(u, f, a, e, t, {
    "[[Configurable]]": !!h["[[Configurable]]"],
    "[[Enumerable]]": !!h["[[Enumerable]]"],
    "[[Value]]": h["[[Value]]"],
    "[[Writable]]": !!h["[[Writable]]"]
  })));
  if (!o({
      IsAccessorDescriptor: c,
      IsDataDescriptor: u
    }, g)) throw new r("`current`, when present, must be a fully populated and valid Property Descriptor");
  if (!g["[[Configurable]]"]) {
    if ("[[Configurable]]" in h && h["[[Configurable]]"] || "[[Enumerable]]" in h && !f(h["[[Enumerable]]"], g["[[Enumerable]]"]) || !d(h) && !f(c(h), c(g))) return !1;
    if (c(g)) {
      if ("[[Get]]" in h && !f(h["[[Get]]"], g["[[Get]]"]) || "[[Set]]" in h && !f(h["[[Set]]"], g["[[Set]]"])) return !1
    } else if (!g["[[Writable]]"] && ("[[Writable]]" in h && h["[[Writable]]"] || "[[Value]]" in h && !f(h["[[Value]]"], g["[[Value]]"]))) return !1
  }
  if ("Undefined" !== m) return u(g) && c(h) ? (b = ("[[Configurable]]" in h ? h : g)["[[Configurable]]"], i(u, f, a, e, t, {
    "[[Configurable]]": !!b,
    "[[Enumerable]]": !!(v = ("[[Enumerable]]" in h ? h : g)["[[Enumerable]]"]),
    "[[Get]]": ("[[Get]]" in h ? h : g)["[[Get]]"],
    "[[Set]]": ("[[Set]]" in h ? h : g)["[[Set]]"]
  })) : c(g) && u(h) ? (b = ("[[Configurable]]" in h ? h : g)["[[Configurable]]"], i(u, f, a, e, t, {
    "[[Configurable]]": !!b,
    "[[Enumerable]]": !!(v = ("[[Enumerable]]" in h ? h : g)["[[Enumerable]]"]),
    "[[Value]]": ("[[Value]]" in h ? h : g)["[[Value]]"],
    "[[Writable]]": !!("[[Writable]]" in h ? h : g)["[[Writable]]"]
  })) : i(u, f, a, e, t, h);
  return !0
}