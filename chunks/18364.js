var n = r(878078),
  i = r(757209),
  o = r(373640);
e.exports = function(e) {
  return function(t, r, s) {
    return s && "number" != typeof s && i(t, r, s) && (r = s = void 0), t = o(t), void 0 === r ? (r = t, t = 0) : r = o(r), s = void 0 === s ? t < r ? 1 : -1 : o(s), n(t, r, s, e)
  }
}