"use strict";
n.d(t, {
  T: function() {
    return r
  }
});
var r = function(e, t, n, r, i) {
  var a = i.clientWidth,
    o = i.clientHeight,
    s = "number" == typeof e.pageX ? e.pageX : e.touches[0].pageX,
    u = "number" == typeof e.pageY ? e.pageY : e.touches[0].pageY,
    c = s - (i.getBoundingClientRect().left + window.pageXOffset),
    l = u - (i.getBoundingClientRect().top + window.pageYOffset);
  if ("vertical" === n) {
    var d = void 0;
    if (d = l < 0 ? 0 : l > o ? 1 : Math.round(100 * l / o) / 100, t.a !== d) return {
      h: t.h,
      s: t.s,
      l: t.l,
      a: d,
      source: "rgb"
    }
  } else {
    var f = void 0;
    if (r !== (f = c < 0 ? 0 : c > a ? 1 : Math.round(100 * c / a) / 100)) return {
      h: t.h,
      s: t.s,
      l: t.l,
      a: f,
      source: "rgb"
    }
  }
  return null
}