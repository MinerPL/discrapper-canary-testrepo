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
    d: "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"
  }))
}