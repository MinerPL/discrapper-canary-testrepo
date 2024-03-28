"use strict";
r.r(t);
var n = r("315162"),
  a = r("906024"),
  o = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
  i = /^\w*$/;
t.default = function(e, t) {
  if ((0, n.default)(e)) return !1;
  var r = typeof e;
  return !!("number" == r || "symbol" == r || "boolean" == r || null == e || (0, a.default)(e)) || i.test(e) || !o.test(e) || null != t && e in Object(t)
}