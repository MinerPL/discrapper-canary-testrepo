e.exports = function(e, t, n, i) {
  var a = -1,
    l = null == e ? 0 : e.length;
  for (i && l && (n = e[++a]); ++a < l;) n = t(n, e[a], a, e);
  return n
}