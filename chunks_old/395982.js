"use strict";
r.r(t), r.d(t, {
  default: function() {
    return w
  }
}), r("222007");
var n = r("455492"),
  a = r("976762"),
  o = r("300589"),
  i = r("39014"),
  u = r("928159"),
  l = r("309331"),
  s = r("138600"),
  f = "[object Map]",
  c = "[object Promise]",
  d = "[object Set]",
  p = "[object WeakMap]",
  h = "[object DataView]",
  b = (0, s.default)(n.default),
  v = (0, s.default)(a.default),
  g = (0, s.default)(o.default),
  x = (0, s.default)(i.default),
  y = (0, s.default)(u.default),
  m = l.default;
(n.default && m(new n.default(new ArrayBuffer(1))) != h || a.default && m(new a.default) != f || o.default && m(o.default.resolve()) != c || i.default && m(new i.default) != d || u.default && m(new u.default) != p) && (m = function(e) {
  var t = (0, l.default)(e),
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
});
var w = m