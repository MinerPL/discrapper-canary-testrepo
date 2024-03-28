var n = r("620014"),
  a = r("525425"),
  o = r("51431"),
  i = r("36572"),
  l = r("706627"),
  u = r("453342"),
  s = r("292065");
e.exports = function e(t, r, f, c, d) {
  t !== r && o(r, function(o, u) {
    if (d || (d = new n), l(o)) i(t, r, u, f, e, c, d);
    else {
      var p = c ? c(s(t, u), o, u + "", t, r, d) : void 0;
      void 0 === p && (p = o), a(t, u, p)
    }
  }, u)
}