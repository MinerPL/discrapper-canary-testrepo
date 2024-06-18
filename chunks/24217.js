e.exports = function(e) {
  for (var s = -1, t = null == e ? 0 : e.length, n = 0, a = []; ++s < t;) {
    var i = e[s];
    i && (a[n++] = i)
  }
  return a
}