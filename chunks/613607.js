"use strict";
n.d(t, {
  f: function() {
    return a
  }
});
var r = n(695170),
  i = n(686942);

function a(e, t, n, a, o, s) {
  for (var u = [], c = 0; c < e.length; c++) {
    var l = void 0,
      d = void 0,
      f = e[c];
    f < 0 ? (l = Math.floor(f / t.length), d = (0, i.Vy)(f, t.length)) : (l = Math.floor((f - 1) / t.length), d = (0, i.Vy)(f - 1, t.length));
    for (var p = [], h = n; h < a; h++) {
      var m = s[h];
      (0, i.EN)(m) && p.push(m)
    }
    var g = void 0;
    g = l < 0 ? p.slice(l)[0] : p[l];
    var _ = t[d],
      b = (0, r.zU)(o.yearordinal + g),
      v = (0, r.$e)(b, _);
    !(0, i.q9)(u, v) && u.push(v)
  }
  return (0, r.DY)(u), u
}