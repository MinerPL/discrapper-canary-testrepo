"use strict";
var r = n(467360),
  i = n(483266),
  a = n(862195),
  o = n(24002),
  s = n(178683),
  u = n(176338),
  c = n(526389),
  l = "[object Map]",
  d = "[object Promise]",
  f = "[object Set]",
  p = "[object WeakMap]",
  h = "[object DataView]",
  m = (0, c.Z)(r.Z),
  g = (0, c.Z)(i.Z),
  _ = (0, c.Z)(a.Z),
  b = (0, c.Z)(o.Z),
  v = (0, c.Z)(s.Z),
  y = u.Z;
(r.Z && y(new r.Z(new ArrayBuffer(1))) != h || i.Z && y(new i.Z) != l || a.Z && y(a.Z.resolve()) != d || o.Z && y(new o.Z) != f || s.Z && y(new s.Z) != p) && (y = function(e) {
  var t = (0, u.Z)(e),
    n = "[object Object]" == t ? e.constructor : void 0,
    r = n ? (0, c.Z)(n) : "";
  if (r) switch (r) {
    case m:
      return h;
    case g:
      return l;
    case _:
      return d;
    case b:
      return f;
    case v:
      return p
  }
  return t
}), t.Z = y