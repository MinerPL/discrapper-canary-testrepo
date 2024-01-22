"use strict";
var r = n("407611")(),
  i = n("37549"),
  o = r && i("%Object.defineProperty%", !0),
  s = i("%SyntaxError%"),
  a = i("%TypeError%"),
  c = n("293471");
e.exports = function(e, t, n) {
  if (!e || "object" != typeof e && "function" != typeof e) throw new a("`obj` must be an object or a function`");
  if ("string" != typeof t && "symbol" != typeof t) throw new a("`property` must be a string or a symbol`");
  if (arguments.length > 3 && "boolean" != typeof arguments[3] && null !== arguments[3]) throw new a("`nonEnumerable`, if provided, must be a boolean or null");
  if (arguments.length > 4 && "boolean" != typeof arguments[4] && null !== arguments[4]) throw new a("`nonWritable`, if provided, must be a boolean or null");
  if (arguments.length > 5 && "boolean" != typeof arguments[5] && null !== arguments[5]) throw new a("`nonConfigurable`, if provided, must be a boolean or null");
  if (arguments.length > 6 && "boolean" != typeof arguments[6]) throw new a("`loose`, if provided, must be a boolean");
  var r = arguments.length > 3 ? arguments[3] : null,
    i = arguments.length > 4 ? arguments[4] : null,
    u = arguments.length > 5 ? arguments[5] : null,
    d = arguments.length > 6 && arguments[6],
    l = !!c && c(e, t);
  if (o) o(e, t, {
    configurable: null === u && l ? l.configurable : !u,
    enumerable: null === r && l ? l.enumerable : !r,
    value: n,
    writable: null === i && l ? l.writable : !i
  });
  else if (!d && (r || i || u)) throw new s("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
  else e[t] = n
}