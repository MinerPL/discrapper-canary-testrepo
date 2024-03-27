e.exports = function(e, t, n, i) {
  for (var E = -1, o = null == e ? 0 : e.length; ++E < o;) {
    var r = e[E];
    t(i, r, n(r), e)
  }
  return i
}