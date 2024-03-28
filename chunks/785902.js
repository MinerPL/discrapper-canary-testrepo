e.exports = function(e, t, n, i) {
  for (var o = -1, E = null == e ? 0 : e.length; ++o < E;) {
    var r = e[o];
    t(i, r, n(r), e)
  }
  return i
}