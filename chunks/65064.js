var n = e(135839),
  o = e(117973),
  i = e(780712),
  a = e(400353),
  u = e(653180),
  f = e(657398),
  c = e(19235),
  s = "[object Map]",
  p = "[object Promise]",
  l = "[object Set]",
  h = "[object WeakMap]",
  v = "[object DataView]",
  d = c(n),
  b = c(o),
  g = c(i),
  y = c(a),
  m = c(u),
  w = f;
(n && w(new n(new ArrayBuffer(1))) != v || o && w(new o) != s || i && w(i.resolve()) != p || a && w(new a) != l || u && w(new u) != h) && (w = function(t) {
  var r = f(t),
    e = "[object Object]" == r ? t.constructor : void 0,
    n = e ? c(e) : "";
  if (n) switch (n) {
    case d:
      return v;
    case b:
      return s;
    case g:
      return p;
    case y:
      return l;
    case m:
      return h
  }
  return r
}), t.exports = w