"use strict";
Object.defineProperty(t, "__esModule", {
  value: !0
}), t.calculateChange = function(e, t, n) {
  var r = n.getBoundingClientRect(),
    i = r.width,
    a = r.height,
    o = "number" == typeof e.pageX ? e.pageX : e.touches[0].pageX,
    s = "number" == typeof e.pageY ? e.pageY : e.touches[0].pageY,
    u = o - (n.getBoundingClientRect().left + window.pageXOffset),
    c = s - (n.getBoundingClientRect().top + window.pageYOffset);
  u < 0 ? u = 0 : u > i && (u = i), c < 0 ? c = 0 : c > a && (c = a);
  var l = u / i,
    d = 1 - c / a;
  return {
    h: t.h,
    s: l,
    v: d,
    a: t.a,
    source: "hsv"
  }
}