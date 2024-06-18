"use strict";
var r = n(421896),
  i = n(533778);
t.Z = function(e, t, n, a) {
  var o = n.length,
    s = o,
    u = !a;
  if (null == e) return !s;
  for (e = Object(e); o--;) {
    var c = n[o];
    if (u && c[2] ? c[1] !== e[c[0]] : !(c[0] in e)) return !1
  }
  for (; ++o < s;) {
    var l = (c = n[o])[0],
      d = e[l],
      f = c[1];
    if (u && c[2]) {
      if (void 0 === d && !(l in e)) return !1
    } else {
      var p = new r.Z;
      if (a) var h = a(d, f, l, e, t, p);
      if (!(void 0 === h ? (0, i.Z)(f, d, 3, a, p) : h)) return !1
    }
  }
  return !0
}