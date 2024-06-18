var i = n(448730),
  s = n(386015),
  l = n(232396),
  a = n(263604);
e.exports = function(e) {
  return function(t) {
    var n = s(t = a(t)) ? l(t) : void 0,
      o = n ? n[0] : t.charAt(0),
      r = n ? i(n, 1).join("") : t.slice(1);
    return o[e]() + r
  }
}