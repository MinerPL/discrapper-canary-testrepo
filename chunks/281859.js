"use strict";
r.r(t), r.d(t, {
  simpleCheckForValidColor: function() {
    return i
  },
  toState: function() {
    return u
  },
  isValidHex: function() {
    return l
  },
  getContrastingColor: function() {
    return s
  },
  isvalidColorString: function() {
    return f
  }
}), r("781738");
var n = r("691262"),
  a = r("656280"),
  o = r.n(a),
  i = function(e) {
    var t = 0,
      r = 0;
    return (0, n.default)(["r", "g", "b", "a", "h", "s", "l", "v"], function(n) {
      e[n] && (t += 1, !isNaN(e[n]) && (r += 1), ("s" === n || "l" === n) && /^\d+%$/.test(e[n]) && (r += 1))
    }), t === r && e
  },
  u = function(e, t) {
    var r = e.hex ? o(e.hex) : o(e),
      n = r.toHsl(),
      a = r.toHsv(),
      i = r.toRgb(),
      u = r.toHex();
    return 0 === n.s && (n.h = t || 0, a.h = t || 0), {
      hsl: n,
      hex: "000000" === u && 0 === i.a ? "transparent" : "#" + u,
      rgb: i,
      hsv: a,
      oldHue: e.h || t || n.h,
      source: e.source
    }
  },
  l = function(e) {
    if ("transparent" === e) return !0;
    var t = "#" === String(e).charAt(0) ? 1 : 0;
    return e.length !== 4 + t && e.length < 7 + t && o(e).isValid()
  },
  s = function(e) {
    if (!e) return "#fff";
    var t = u(e);
    return "transparent" === t.hex ? "rgba(0,0,0,0.4)" : (299 * t.rgb.r + 587 * t.rgb.g + 114 * t.rgb.b) / 1e3 >= 128 ? "#000" : "#fff"
  },
  f = function(e, t) {
    return o(t + " (" + e.replace("\xb0", "") + ")")._ok
  }