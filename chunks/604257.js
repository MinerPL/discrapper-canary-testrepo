t.exports = function(t) {
  return function(r, e, n) {
    for (var o = -1, i = Object(r), a = n(r), u = a.length; u--;) {
      var f = a[t ? u : ++o];
      if (!1 === e(i[f], f, i)) break
    }
    return r
  }
}