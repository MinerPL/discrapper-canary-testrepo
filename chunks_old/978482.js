"use strict";
Object.defineProperty(t, "__esModule", {
  value: !0
}), t.calculateChange = function(e, t, r) {
  var n = r.getBoundingClientRect(),
    a = n.width,
    o = n.height,
    i = "number" == typeof e.pageX ? e.pageX : e.touches[0].pageX,
    u = "number" == typeof e.pageY ? e.pageY : e.touches[0].pageY,
    l = i - (r.getBoundingClientRect().left + window.pageXOffset),
    s = u - (r.getBoundingClientRect().top + window.pageYOffset);
  l < 0 ? l = 0 : l > a && (l = a), s < 0 ? s = 0 : s > o && (s = o);
  var f = l / a,
    c = 1 - s / o;
  return {
    h: t.h,
    s: f,
    v: c,
    a: t.a,
    source: "hsv"
  }
}