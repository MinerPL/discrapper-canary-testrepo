var o;
e = n.nmd(e), o = function() {
  return function(e) {
    var t = "/*|*/",
      n = t + "}";

    function o(t) {
      if (t) try {
        e(t + "}")
      } catch (e) {}
    }
    return function(i, r, a, u, s, l, c, p, d, f) {
      switch (i) {
        case 1:
          if (0 === d && 64 === r.charCodeAt(0)) return e(r + ";"), "";
          break;
        case 2:
          if (0 === p) return r + t;
          break;
        case 3:
          switch (p) {
            case 102:
            case 112:
              return e(a[0] + r), "";
            default:
              return r + (0 === f ? t : "")
          }
        case -2:
          r.split(n).forEach(o)
      }
    }
  }
}, "object" == typeof t ? e.exports = o() : "function" == typeof define && define.amd ? define(o()) : window.stylisRuleSheet = o()