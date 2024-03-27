var i = n("60266"),
  a = n("581628"),
  l = n("698273"),
  s = n("725502");
e.exports = function(e, t) {
  return function(n, r) {
    var o = s(n) ? i : a,
      u = t ? t() : {};
    return o(n, e, l(r, 2), u)
  }
}