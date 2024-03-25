"use strict";
Object.defineProperty(t, "__esModule", {
  value: !0
});
var n = {},
  a = t.render = function(e, t, r, n) {
    if ("undefined" == typeof document && !n) return null;
    var a = n ? new n : document.createElement("canvas");
    a.width = 2 * r, a.height = 2 * r;
    var o = a.getContext("2d");
    return o ? (o.fillStyle = e, o.fillRect(0, 0, a.width, a.height), o.fillStyle = t, o.fillRect(0, 0, r, r), o.translate(r, r), o.fillRect(0, 0, r, r), a.toDataURL()) : null
  };
t.get = function(e, t, r, o) {
  var i = e + "-" + t + "-" + r + (o ? "-server" : "");
  if (n[i]) return n[i];
  var u = a(e, t, r, o);
  return n[i] = u, u
}