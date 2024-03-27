var n = r("128387"),
  a = r("169828");
e.exports = function(e, t) {
  var r = -1,
    o = a(e) ? Array(e.length) : [];
  return n(e, function(e, n, a) {
    o[++r] = t(e, n, a)
  }), o
}