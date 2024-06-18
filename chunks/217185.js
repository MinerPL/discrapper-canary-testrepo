var n = e(466293),
  o = e(467631),
  i = e(402428),
  a = e(42848),
  u = 1 / 0,
  f = n ? n.prototype : void 0,
  c = f ? f.toString : void 0;
t.exports = function t(r) {
  if ("string" == typeof r) return r;
  if (i(r)) return o(r, t) + "";
  if (a(r)) return c ? c.call(r) : "";
  var e = r + "";
  return "0" == e && 1 / r == -u ? "-0" : e
}