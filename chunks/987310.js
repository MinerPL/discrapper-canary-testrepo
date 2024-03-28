"use strict";
r.r(t);
var n = r("195168"),
  a = "object" == typeof exports && exports && !exports.nodeType && exports,
  o = a && "object" == typeof module && module && !module.nodeType && module,
  i = o && o.exports === a ? n.default.Buffer : void 0,
  l = i ? i.allocUnsafe : void 0;
t.default = function(e, t) {
  if (t) return e.slice();
  var r = e.length,
    n = l ? l(r) : new e.constructor(r);
  return e.copy(n), n
}