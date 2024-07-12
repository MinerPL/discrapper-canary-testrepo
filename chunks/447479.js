e.exports = function(e, t, n, i) {
  var s = -1,
a = null == e ? 0 : e.length;
  for (i && a && (n = e[++s]); ++s < a;)
n = t(n, e[s], s, e);
  return n;
};