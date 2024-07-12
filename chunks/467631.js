t.exports = function(t, e) {
  for (var r = -1, n = null == t ? 0 : t.length, _ = Array(n); ++r < n;)
_[r] = e(t[r], r, t);
  return _;
};