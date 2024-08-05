var r = n(11537),
  i = n(685347);
e.exports = function(e, t, n, a) {
  var s = !n;
  n || (n = {});
  for (var o = -1, l = t.length; ++o < l;) {
var u = t[o],
  c = a ? a(n[u], e[u], u, n, e) : void 0;
void 0 === c && (c = e[u]), s ? i(n, u, c) : r(n, u, c);
  }
  return n;
};