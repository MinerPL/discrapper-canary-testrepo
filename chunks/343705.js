"use strict";
r.r(t);
var n = r("243257"),
  a = r("97445"),
  o = r("315162"),
  i = r("532455"),
  l = r("429296"),
  u = r("676067"),
  s = Object.prototype.hasOwnProperty;
t.default = function(e, t) {
  var r = (0, o.default)(e),
    f = !r && (0, a.default)(e),
    c = !r && !f && (0, i.default)(e),
    d = !r && !f && !c && (0, u.default)(e),
    p = r || f || c || d,
    h = p ? (0, n.default)(e.length, String) : [],
    b = h.length;
  for (var v in e)(t || s.call(e, v)) && !(p && ("length" == v || c && ("offset" == v || "parent" == v) || d && ("buffer" == v || "byteLength" == v || "byteOffset" == v) || (0, l.default)(v, b))) && h.push(v);
  return h
}