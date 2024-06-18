"use strict";
Object.defineProperty(t, "__esModule", {
  value: !0
});
var n = {},
  r = t.render = function(e, t, n, r) {
    if ("undefined" == typeof document && !r) return null;
    var i = r ? new r : document.createElement("canvas");
    i.width = 2 * n, i.height = 2 * n;
    var a = i.getContext("2d");
    return a ? (a.fillStyle = e, a.fillRect(0, 0, i.width, i.height), a.fillStyle = t, a.fillRect(0, 0, n, n), a.translate(n, n), a.fillRect(0, 0, n, n), i.toDataURL()) : null
  };
t.get = function(e, t, i, a) {
  var o = e + "-" + t + "-" + i + (a ? "-server" : "");
  if (n[o]) return n[o];
  var s = r(e, t, i, a);
  return n[o] = s, s
}