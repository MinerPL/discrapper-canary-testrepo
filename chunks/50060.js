var n = r("443444"),
  a = r("427507");
e.exports = function(e) {
  return n(function(t, r) {
    var n = -1,
      o = r.length,
      i = o > 1 ? r[o - 1] : void 0,
      u = o > 2 ? r[2] : void 0;
    for (i = e.length > 3 && "function" == typeof i ? (o--, i) : void 0, u && a(r[0], r[1], u) && (i = o < 3 ? void 0 : i, o = 1), t = Object(t); ++n < o;) {
      var l = r[n];
      l && e(t, l, n, i)
    }
    return t
  })
}