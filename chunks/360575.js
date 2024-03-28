"use strict";
Object.defineProperty(t, "__esModule", {
  value: !0
});
var r = {},
  n = t.render = function(e, t, r, n) {
    if ("undefined" == typeof document && !n) return null;
    var a = n ? new n : document.createElement("canvas");
    a.width = 2 * r, a.height = 2 * r;
    var o = a.getContext("2d");
    return o ? (o.fillStyle = e, o.fillRect(0, 0, a.width, a.height), o.fillStyle = t, o.fillRect(0, 0, r, r), o.translate(r, r), o.fillRect(0, 0, r, r), a.toDataURL()) : null
  };
t.get = function(e, t, a, o) {
  var i = e + "-" + t + "-" + a + (o ? "-server" : "");
  if (r[i]) return r[i];
  var l = n(e, t, a, o);
  return r[i] = l, l
}