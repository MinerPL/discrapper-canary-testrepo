var n = e(92801),
  o = e(58834);
t.exports = function(t) {
  for (var r = o(t), e = r.length; e--;) {
    var i = r[e],
      a = t[i];
    r[e] = [i, a, n(a)]
  }
  return r
}