e = n.nmd(e), ! function() {
  "use strict";
  var t = {}.hasOwnProperty;

  function n() {
    for (var e = "", r = 0; r < arguments.length; r++) {
      var o = arguments[r];
      o && (e = l(e, function(e) {
        if ("string" == typeof e || "number" == typeof e) return e;
        if ("object" != typeof e) return "";
        if (Array.isArray(e)) return n.apply(null, e);
        if (e.toString !== Object.prototype.toString && !e.toString.toString().includes("[native code]")) return e.toString();
        var r = "";
        for (var o in e) t.call(e, o) && e[o] && (r = l(r, o));
        return r
      }(o)))
    }
    return e
  }

  function l(e, t) {
    return t ? e ? e + " " + t : e + t : e
  }
  void 0 !== e && e.exports ? (n.default = n, e.exports = n) : "function" == typeof define && "object" == typeof define.amd && define.amd ? define("classnames", [], function() {
    return n
  }) : window.classNames = n
}()