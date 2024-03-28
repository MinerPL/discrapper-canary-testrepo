"use strict";
Object.defineProperty(t, "__esModule", {
  value: !0
}), t.calculateChange = function(e, t, r) {
  var n = r.getBoundingClientRect(),
    a = n.width,
    o = n.height,
    i = "number" == typeof e.pageX ? e.pageX : e.touches[0].pageX,
    l = "number" == typeof e.pageY ? e.pageY : e.touches[0].pageY,
    u = i - (r.getBoundingClientRect().left + window.pageXOffset),
    s = l - (r.getBoundingClientRect().top + window.pageYOffset);
  u < 0 ? u = 0 : u > a && (u = a), s < 0 ? s = 0 : s > o && (s = o);
  var f = u / a,
    c = 1 - s / o;
  return {
    h: t.h,
    s: f,
    v: c,
    a: t.a,
    source: "hsv"
  }
}