t.exports = function(t, e) {
  for (var r = -1, n = null == t ? 0 : t.length; ++r < n;)
if (e(t[r], r, t))
  return !0;
  return !1;
};