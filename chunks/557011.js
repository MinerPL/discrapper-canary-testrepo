"use strict";
n.d(t, {
  T: function() {
    return r
  }
});
var r = function(e, t, n, r) {
  var i = r.clientWidth,
    a = r.clientHeight,
    o = "number" == typeof e.pageX ? e.pageX : e.touches[0].pageX,
    s = "number" == typeof e.pageY ? e.pageY : e.touches[0].pageY,
    u = o - (r.getBoundingClientRect().left + window.pageXOffset),
    c = s - (r.getBoundingClientRect().top + window.pageYOffset);
  if ("vertical" === t) {
    var l = void 0;
    if (l = c < 0 ? 359 : c > a ? 0 : 360 * (-(100 * c / a) + 100) / 100, n.h !== l) return {
      h: l,
      s: n.s,
      l: n.l,
      a: n.a,
      source: "hsl"
    }
  } else {
    var d = void 0;
    if (d = u < 0 ? 0 : u > i ? 359 : 100 * u / i * 360 / 100, n.h !== d) return {
      h: d,
      s: n.s,
      l: n.l,
      a: n.a,
      source: "hsl"
    }
  }
  return null
}