var n = r("863847"),
  a = r("156577"),
  o = r("364591"),
  i = r("398580"),
  u = r("952133"),
  l = r("298169"),
  s = r("236315");
e.exports = function e(t, r, f, c, d) {
  t !== r && o(r, function(o, l) {
    if (d || (d = new n), u(o)) i(t, r, l, f, e, c, d);
    else {
      var p = c ? c(s(t, l), o, l + "", t, r, d) : void 0;
      void 0 === p && (p = o), a(t, l, p)
    }
  }, l)
}