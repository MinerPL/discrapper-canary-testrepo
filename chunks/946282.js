var o = n(444675);
(function() {
  var t, n, i, r, a;
  "undefined" != typeof performance && null !== performance && performance.now ? e.exports = function() {
    return performance.now()
  } : null != o && o.hrtime ? (e.exports = function() {
    return (t() - a) / 1e6
  }, n = o.hrtime, r = (t = function() {
    var e;
    return 1e9 * (e = n())[0] + e[1]
  })(), a = r - 1e9 * o.uptime()) : Date.now ? (e.exports = function() {
    return Date.now() - i
  }, i = Date.now()) : (e.exports = function() {
    return new Date().getTime() - i
  }, i = new Date().getTime())
}).call(this)