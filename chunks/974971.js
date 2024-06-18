"use strict";
var e = n(525305),
  o = n(354848),
  i = n(332916),
  u = n(641236)("toStringTag"),
  c = Object,
  f = "Arguments" === i(function() {
    return arguments
  }()),
  a = function(t, r) {
    try {
      return t[r]
    } catch (t) {}
  };
t.exports = e ? i : function(t) {
  var r, n, e;
  return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(n = a(r = c(t), u)) ? n : f ? i(r) : "Object" === (e = i(r)) && o(r.callee) ? "Arguments" : e
}