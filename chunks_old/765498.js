"use strict";
Object.defineProperty(t, "__esModule", {
  value: !0
}), t.calculateChange = function(e, t, r, n, a) {
  var o = a.clientWidth,
    i = a.clientHeight,
    u = "number" == typeof e.pageX ? e.pageX : e.touches[0].pageX,
    l = "number" == typeof e.pageY ? e.pageY : e.touches[0].pageY,
    s = u - (a.getBoundingClientRect().left + window.pageXOffset),
    f = l - (a.getBoundingClientRect().top + window.pageYOffset);
  if ("vertical" === r) {
    var c = void 0;
    if (c = f < 0 ? 0 : f > i ? 1 : Math.round(100 * f / i) / 100, t.a !== c) return {
      h: t.h,
      s: t.s,
      l: t.l,
      a: c,
      source: "rgb"
    }
  } else {
    var d = void 0;
    if (n !== (d = s < 0 ? 0 : s > o ? 1 : Math.round(100 * s / o) / 100)) return {
      h: t.h,
      s: t.s,
      l: t.l,
      a: d,
      source: "rgb"
    }
  }
  return null
}