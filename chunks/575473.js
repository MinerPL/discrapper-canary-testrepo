var n = e(466293),
  o = e(139069),
  i = e(703284),
  a = e(501979),
  u = e(98368),
  f = e(433005),
  c = n ? n.prototype : void 0,
  s = c ? c.valueOf : void 0;
t.exports = function(t, r, e, n, c, p, l) {
  switch (e) {
    case "[object DataView]":
      if (t.byteLength != r.byteLength || t.byteOffset != r.byteOffset) break;
      t = t.buffer, r = r.buffer;
    case "[object ArrayBuffer]":
      if (t.byteLength != r.byteLength || !p(new o(t), new o(r))) break;
      return !0;
    case "[object Boolean]":
    case "[object Date]":
    case "[object Number]":
      return i(+t, +r);
    case "[object Error]":
      return t.name == r.name && t.message == r.message;
    case "[object RegExp]":
    case "[object String]":
      return t == r + "";
    case "[object Map]":
      var h = u;
    case "[object Set]":
      var v = 1 & n;
      if (h || (h = f), t.size != r.size && !v) break;
      var d = l.get(t);
      if (d) return d == r;
      n |= 2, l.set(t, r);
      var b = a(h(t), h(r), n, c, p, l);
      return l.delete(t), b;
    case "[object Symbol]":
      if (s) return s.call(t) == s.call(r)
  }
  return !1
}