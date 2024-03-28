"use strict";
r.r(t);
var n = r("421896"),
  a = r("533778");
t.default = function(e, t, r, o) {
  var i = r.length,
    l = i,
    u = !o;
  if (null == e) return !l;
  for (e = Object(e); i--;) {
    var s = r[i];
    if (u && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1
  }
  for (; ++i < l;) {
    var f = (s = r[i])[0],
      c = e[f],
      d = s[1];
    if (u && s[2]) {
      if (void 0 === c && !(f in e)) return !1
    } else {
      var p = new n.default;
      if (o) var h = o(c, d, f, e, t, p);
      if (!(void 0 === h ? (0, a.default)(d, c, 3, o, p) : h)) return !1
    }
  }
  return !0
}