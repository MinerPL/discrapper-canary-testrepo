var n = Date.now;
e.exports = function(e) {
  var t = 0,
    r = 0;
  return function() {
    var a = n(),
      o = 16 - (a - r);
    if (r = a, o > 0) {
      if (++t >= 800) return arguments[0]
    } else t = 0;
    return e.apply(void 0, arguments)
  }
}