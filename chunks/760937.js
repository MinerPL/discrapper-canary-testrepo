var n = s(565580);
e.exports = function(e, t) {
  var s = -1,
    r = e.length,
    i = r - 1;
  for (t = void 0 === t ? r : t; ++s < t;) {
    var o = n(s, i),
      a = e[o];
    e[o] = e[s], e[s] = a
  }
  return e.length = t, e
}