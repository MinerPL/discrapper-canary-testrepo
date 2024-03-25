"use strict";
r.r(t), r.d(t, {
  calculateChange: function() {
    return n
  }
});
var n = function(e, t, r, n) {
  var a = n.clientWidth,
    o = n.clientHeight,
    i = "number" == typeof e.pageX ? e.pageX : e.touches[0].pageX,
    u = "number" == typeof e.pageY ? e.pageY : e.touches[0].pageY,
    l = i - (n.getBoundingClientRect().left + window.pageXOffset),
    s = u - (n.getBoundingClientRect().top + window.pageYOffset);
  if ("vertical" === t) {
    var f = void 0;
    if (f = s < 0 ? 359 : s > o ? 0 : 360 * (-(100 * s / o) + 100) / 100, r.h !== f) return {
      h: f,
      s: r.s,
      l: r.l,
      a: r.a,
      source: "hsl"
    }
  } else {
    var c = void 0;
    if (c = l < 0 ? 0 : l > a ? 359 : 360 * (100 * l / a) / 100, r.h !== c) return {
      h: c,
      s: r.s,
      l: r.l,
      a: r.a,
      source: "hsl"
    }
  }
  return null
}