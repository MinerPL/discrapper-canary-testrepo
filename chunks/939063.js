"use strict";
Object.defineProperty(t, "__esModule", {
  value: !0
}), t.calculateChange = function(e, t, r, n) {
  var a = n.clientWidth,
    o = n.clientHeight,
    i = "number" == typeof e.pageX ? e.pageX : e.touches[0].pageX,
    l = "number" == typeof e.pageY ? e.pageY : e.touches[0].pageY,
    u = i - (n.getBoundingClientRect().left + window.pageXOffset),
    s = l - (n.getBoundingClientRect().top + window.pageYOffset);
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
    if (c = u < 0 ? 0 : u > a ? 359 : 100 * u / a * 360 / 100, r.h !== c) return {
      h: c,
      s: r.s,
      l: r.l,
      a: r.a,
      source: "hsl"
    }
  }
  return null
}