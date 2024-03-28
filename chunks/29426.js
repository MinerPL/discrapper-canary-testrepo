var t = Date.now;
e.exports = function(e) {
  var r = 0,
    n = 0;
  return function() {
    var a = t(),
      o = 16 - (a - n);
    if (n = a, o > 0) {
      if (++r >= 800) return arguments[0]
    } else r = 0;
    return e.apply(void 0, arguments)
  }
}