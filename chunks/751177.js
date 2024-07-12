t.exports = function(t, e) {
  for (var r = -1, n = null == t ? 0 : t.length, _ = 0, a = []; ++r < n;) {
var i = t[r];
e(i, r, t) && (a[_++] = i);
  }
  return a;
};