for (var o = n(946282), i = "undefined" == typeof window ? n.g : window, r = ["moz", "webkit"], a = "AnimationFrame", u = i["request" + a], s = i["cancel" + a] || i["cancelRequest" + a], l = 0; !u && l < r.length; l++) u = i[r[l] + "Request" + a], s = i[r[l] + "Cancel" + a] || i[r[l] + "CancelRequest" + a];
if (!u || !s) {
  var c = 0,
    p = 0,
    d = [],
    f = 1e3 / 60;
  u = function(e) {
    if (0 === d.length) {
      var t = o(),
        n = Math.max(0, f - (t - c));
      c = n + t, setTimeout(function() {
        var e = d.slice(0);
        d.length = 0;
        for (var t = 0; t < e.length; t++)
          if (!e[t].cancelled) try {
            e[t].callback(c)
          } catch (e) {
            setTimeout(function() {
              throw e
            }, 0)
          }
      }, Math.round(n))
    }
    return d.push({
      handle: ++p,
      callback: e,
      cancelled: !1
    }), p
  }, s = function(e) {
    for (var t = 0; t < d.length; t++) d[t].handle === e && (d[t].cancelled = !0)
  }
}
e.exports = function(e) {
  return u.call(i, e)
}, e.exports.cancel = function() {
  s.apply(i, arguments)
}, e.exports.polyfill = function(e) {
  !e && (e = i), e.requestAnimationFrame = u, e.cancelAnimationFrame = s
}