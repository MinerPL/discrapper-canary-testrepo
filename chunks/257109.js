"use strict";
r.r(t);
var n = r("467360"),
  a = r("483266"),
  o = r("862195"),
  i = r("24002"),
  l = r("178683"),
  u = r("176338"),
  s = r("526389"),
  f = "[object Map]",
  c = "[object Promise]",
  d = "[object Set]",
  p = "[object WeakMap]",
  h = "[object DataView]",
  b = (0, s.default)(n.default),
  v = (0, s.default)(a.default),
  g = (0, s.default)(o.default),
  x = (0, s.default)(i.default),
  y = (0, s.default)(l.default),
  m = u.default;
(n.default && m(new n.default(new ArrayBuffer(1))) != h || a.default && m(new a.default) != f || o.default && m(o.default.resolve()) != c || i.default && m(new i.default) != d || l.default && m(new l.default) != p) && (m = function(e) {
  var t = (0, u.default)(e),
    r = "[object Object]" == t ? e.constructor : void 0,
    n = r ? (0, s.default)(r) : "";
  if (n) switch (n) {
    case b:
      return h;
    case v:
      return f;
    case g:
      return c;
    case x:
      return d;
    case y:
      return p
  }
  return t
}), t.default = m