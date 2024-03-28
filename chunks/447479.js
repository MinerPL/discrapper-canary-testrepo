e.exports = function(e, t, s, a) {
  var l = -1,
    n = null == e ? 0 : e.length;
  for (a && n && (s = e[++l]); ++l < n;) s = t(s, e[l], l, e);
  return s
}