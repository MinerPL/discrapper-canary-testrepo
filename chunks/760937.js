var n = s("565580");
e.exports = function(e, t) {
  var s = -1,
    r = e.length,
    a = r - 1;
  for (t = void 0 === t ? r : t; ++s < t;) {
    var o = n(s, a),
      i = e[o];
    e[o] = e[s], e[s] = i
  }
  return e.length = t, e
}