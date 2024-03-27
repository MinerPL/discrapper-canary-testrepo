"use strict";
r.r(t), r.d(t, {
  default: function() {
    return l
  }
});
var n = r("714311"),
  a = "object" == typeof exports && exports && !exports.nodeType && exports,
  o = a && "object" == typeof module && module && !module.nodeType && module,
  i = o && o.exports === a ? n.default.Buffer : void 0,
  u = i ? i.allocUnsafe : void 0,
  l = function(e, t) {
    if (t) return e.slice();
    var r = e.length,
      n = u ? u(r) : new e.constructor(r);
    return e.copy(n), n
  }