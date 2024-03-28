var n = r("317063"),
  a = r("757209");
e.exports = function(e) {
  return n(function(t, r) {
    var n = -1,
      o = r.length,
      i = o > 1 ? r[o - 1] : void 0,
      l = o > 2 ? r[2] : void 0;
    for (i = e.length > 3 && "function" == typeof i ? (o--, i) : void 0, l && a(r[0], r[1], l) && (i = o < 3 ? void 0 : i, o = 1), t = Object(t); ++n < o;) {
      var u = r[n];
      u && e(t, u, n, i)
    }
    return t
  })
}