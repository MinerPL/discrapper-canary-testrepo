n.exports = function(n, e, E, t) {
  for (var I = -1, _ = null == n ? 0 : n.length; ++I < _;) {
    var i = n[I];
    e(t, i, E(i), n)
  }
  return t
}