"use strict";
r.r(t);
var n = r("548015"),
  a = r("74748"),
  o = r("572657"),
  i = r("318670"),
  l = r("252798"),
  u = r("396379"),
  s = n.default ? n.default.prototype : void 0,
  f = s ? s.valueOf : void 0;
t.default = function(e, t, r, n, s, c, d) {
  switch (r) {
    case "[object DataView]":
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) break;
      e = e.buffer, t = t.buffer;
    case "[object ArrayBuffer]":
      if (e.byteLength != t.byteLength || !c(new a.default(e), new a.default(t))) break;
      return !0;
    case "[object Boolean]":
    case "[object Date]":
    case "[object Number]":
      return (0, o.default)(+e, +t);
    case "[object Error]":
      return e.name == t.name && e.message == t.message;
    case "[object RegExp]":
    case "[object String]":
      return e == t + "";
    case "[object Map]":
      var p = l.default;
    case "[object Set]":
      var h = 1 & n;
      if (p || (p = u.default), e.size != t.size && !h) break;
      var b = d.get(e);
      if (b) return b == t;
      n |= 2, d.set(e, t);
      var v = (0, i.default)(p(e), p(t), n, s, c, d);
      return d.delete(e), v;
    case "[object Symbol]":
      if (f) return f.call(e) == f.call(t)
  }
  return !1
}