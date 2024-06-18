"use strict";
var r = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
    }
    return e
  },
  i = function(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }(n(470079));
t.default = function(e) {
  var t = e.fill,
    n = e.width,
    a = e.height,
    o = e.style,
    s = function(e, t) {
      var n = {};
      for (var r in e) {
        if (!(t.indexOf(r) >= 0)) Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r])
      }
      return n
    }(e, ["fill", "width", "height", "style"]);
  return i.default.createElement("svg", r({
    viewBox: "0 0 24 24",
    style: r({
      fill: void 0 === t ? "currentColor" : t,
      width: void 0 === n ? 24 : n,
      height: void 0 === a ? 24 : a
    }, void 0 === o ? {} : o)
  }, s), i.default.createElement("path", {
    d: "M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z"
  }))
}